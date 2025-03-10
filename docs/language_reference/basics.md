---
sidebar_position: 1
---


# Basic Scripting Patterns

## Whitespace

In abstract, padding can be done with saces (` `) or tabs (`\t`).
However, we want to ensure a standard pattern of use tabs instead of
spaces as the use of the tab character is aways better for cases of
acessibility, slightly reduction in source code size and user size preference.

---
## Statements and Line Breaks

Statements are syntatic units that defines actions for the program to take.
Statements can be direct instructins like `return` or statement-like expressions
as function calls and conditionals.

Inside a procedure, every statement should be executed one after another in the
specified order. To ensire this order is important to know where a statement
beggins and ends.

In abstract, every line inside a procedure is interpreted as a sinlge statement.
e.g.:
```abs
Std.Console.writeln("First statement")
Std.Console.writeln("Second statement")
```

When a line breaks, it means the end of this statement and the beggin of another one.
However, expressions are allowed to not follow the same logic. If done right, expressions
can be used to break a line without break the logic. Binary operators are a example. When
a line breaks before or after it, the compiler will ignore this break. e.g.:

```abs
Std.Console.writeln("This string"
	+ " is being used to break this line!")

# Is interpreted as
Std.Console.writeln("This string" + " is being used to break this line!")
```

Is also possible to write two expressions in the same line using a semicolon (`;`) character.
It will emulate a line break when interpreted. e.g:

```abs
write("Hello, "); write("World!"); write("\n")
```

---
## Comments

Comments are a special syntax resource that allows a section in the script
to not be included as executeable code. \
Most of it uses includes documentation or fast activation/deactivation of
lines or blocks of code.

### Single line comments

The `#` character can be used to declare the section of a line on its right
as a comment.
```abs
IAm.executeable() # I am a comment!
```

### Multi-line comments

Enclose a section or chunk of lines with `###` to declare it as a multi-lined
comment.
```abs
IAm.executeable()
###
	I am a comment!
	Me too!
###
```
