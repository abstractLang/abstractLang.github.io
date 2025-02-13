---
slug: optimization
title: Directioning Focused on Optimization
authors: lumi
tags: [devlog]
---

After some time thinking i decided to back some steps to focus on inproving the first steps
of the compilation pipeline.

<!-- truncate -->

With this in mind, I scrapped the WASM and IR compilation systems to focus on the source parsing
and evaluation. Evaluation is one of the pilars of the entire program as it is what will abstract
the code that will be turned into IR.

After some improviments in the metaprogramming system, the evaluator is now allowed to abstract this
code:


```abs
@entrypoint func !void main() {

    Std.Console.writeln("{Console.CSIFGColor.lightGreen}Testing stdout{Console.CSIGeneral.reset}")

    Std.Console.writeln("\n{Console.CSIFGColor.lightGreen}Testing local data{Console.CSIGeneral.reset}")

    let string foo = "Testing..."
    Std.Console.writeln("Local variable foo is a string and is equal to \"" + foo + "\"");
    foo = "Hello, World!"
    Std.Console.writeln("Local variable foo is changed to \"" + foo + "\"");

    Std.Console.writeln("\n{Console.CSIFGColor.lightGreen}Testing strings{Console.CSIGeneral.reset}")

    Std.Console.writeln(foo)

    foo = "Just givin a look."
    Std.Console.writeln(foo + " This looks a good program.")

    Std.Console.writeln("Escape characters:")
    Std.Console.writeln("\t - This is a Test.\n\t - This tests Escape characters :D")

    Std.Console.writeln("\n{Console.CSIFGColor.lightGreen}Testing generics{Console.CSIGeneral.reset}")

    let i32 sin = Std.Math.sin(i32, 50);
    let i16 cos = Std.Math.cos(i16, 50);

    Std.Console.writeln("\n{Console.CSIFGColor.lightGreen}Testing numbers{Console.CSIGeneral.reset}")

    let i8 myByte = 4
    Std.Console.writeln(myByte)
    myByte = 0
    Std.Console.writeln("The value of myByte is: " + myByte)

    #return
}
```
into this (generated code, may have some syntax inconsistences):

```abs
@entrypoint func !void main () {
    Std.Console.writeln("{Console.CSIFGColor.lightGreen}Testing stdout{Console.CSIGeneral.reset}")
    Std.Console.writeln("\n{Console.CSIFGColor.lightGreen}Testing local data{Console.CSIGeneral.reset}")
    let string foo = Std.Compilation.Types.ComptimeString.asstring("Testing...")
    Std.Console.writeln(Std.Compilation.Types.ComptimeString.concatenate("Local variable foo is a string and is equal to \"", Std.Types.String.concatenate(foo, "\"")))
    foo = Std.Compilation.Types.ComptimeString.asstring("Hello, World!")
    Std.Console.writeln(Std.Compilation.Types.ComptimeString.concatenate("Local variable foo is changed to \"", Std.Types.String.concatenate(foo, "\"")))
    Std.Console.writeln("\n{Console.CSIFGColor.lightGreen}Testing strings{Console.CSIGeneral.reset}")
    Std.Console.writeln(foo)
    foo = Std.Compilation.Types.ComptimeString.asstring("Just givin a look.")
    Std.Console.writeln(Std.Types.String.concatenate(foo, " This looks a good program."))
    Std.Console.writeln("Escape characters:")
    Std.Console.writeln("\t - This is a Test.\n\t - This tests Escape characters :D")
    Std.Console.writeln("\n{Console.CSIFGColor.lightGreen}Testing generics{Console.CSIGeneral.reset}")
    let i32 sin = Std.Math.sin(i32, 50)
    let i16 cos = Std.Math.cos(i16, 50)
    Std.Console.writeln("\n{Console.CSIFGColor.lightGreen}Testing numbers{Console.CSIGeneral.reset}")
    let i8 myByte = Std.Compilation.Types.ComptimeInteger.asi8(4)
    Std.Console.writeln(myByte)
    myByte = Std.Compilation.Types.ComptimeInteger.asi8(0)
    Std.Console.writeln(Std.Compilation.Types.ComptimeString.concatenate("The value of myByte is: ", myByte))
}
```

Even looks complex, it is in reality easier to the compiler interact with the code.
Everything with a increased level of complexity (such as expressions with structures, literals and type casts)
are being abstracted to their most basic form as subroutines (or function calls).

Reducing things to subroutines makes the parsing and optimizing simplier as it allows the machine to directly
understand what is going on on these operations.

e. g.:
```abs
let i32 x = 10 + 2
# what is ``10 + 2` ???
# is it assignable to i32 ????

###
...
Let's supose these two are declarated somewhere ####
@overrideOperator("+") @static
func IntLit AddLiterals(IntLit a, IntLit b) {
    return Std.Compilation.Operation.Add(a, b);
}

@implicitConvert @static
func i32 toi32(IntLit value) {
    asm.MOV(.EAX, value)
}
```

The evaluator can link the `AddLiterals()` function with the `+` operator
due the `@overrideOperator` attribute and the function types. With the function
reference, it now knows that the operation will result in a `IntLit`:

```abs
let i32 x = AddLiterals(10, 2)
# I know what is `10 + 2`!
# but... IntLit is not assignable to i32!
```
This result can also be identified as:
```abs
let i32 x = Std.Compilation.Operation.Add(10, 2)
# I know what is `10 + 2`!
# but... IntLit is not assignable to i32!
```
And, at compile time, be reduced to:
```abs
let i32 x = 12
# I know what is `10 + 2`!
# but... IntLit is not assignable to i32!
```

With the same process aplied to the `toi32()` function, the evaluator knows that
`IntLit` can inpmicitly becomes `i32`. This will result in:

```abs
let i32 x = toi32(12)
# I know what is `10 + 2`!
# the expression results in a i32!
```
That can be directly reduced to:
```abs
asm.MOV(.EAX, 12)
# I know what is `10 + 2`!
# the expression results in a i32!
# let x = EAX!
```

This way the compiler can optimize a expression that should do 5 steps
```abs
let i32 x = 10 + 2
# call `AddLiterals(10, 2)`...
#   return 12...
# call ``toi32(12)`...
#   return i32 value in EAX
# assign EAX to `x`
```

In only a single step
```abs
let i32 x = 10 + 2
# assign 12 to `x`
```

without much effort to understand the code's full semantic.
At first look it can be interpreted as useless or to much work for the tons
of tools that we have in the market, like llvm. Yeah, it really is lol I can't
say that do something other than use LLVM to optimization and do not care about
such things is the best aproach, but I still want something better - not for
performance, but for knowledge and compiler development, as i want a compiler
fully independent of LLVM.

Yes, LLVM is very good and I want to use it to cover the lots of main targets that
the market have, but I don't want to stop on it. My objective is make abstract fully
independent of LLVM and still make the development for diferent (and even custom targets)
possible and easy.

Because of this, I'm searching ways to optimize the code at the best possible during
the compile time process of evaluation and IR optimization, making the life of who will
implement a target easier as just directly translate the IR operations to the desired
assembly/machine language.

