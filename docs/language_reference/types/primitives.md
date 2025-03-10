---
sidebar_position: 2
---

# Other Primitive Types
:::info[Under Construction]
:::

Abstract also has some other primitive types that aren't just numbers.
Some of them exists to create some abstractions with complex collections of
numerical values or create type encapsulation.

---
## Booleans
:::warning[Not Implemented!]
:::

Booleans are types that can only represent the binary values `true` or `false`.
These two values are extremely important to handle conditionals or hold simple
states without messing the values.

| Alias | Size            | Implementation         |
|-------|:---------------:|:----------------------:|
| bool  | 1-bit           | [Std.Types.Boolean](#) |

```abs
let bool cake = false

if (cake) Std.Console.writeln("Yummy!")
else Std.Console.writeln("The cake is a lie!")
```
```text title="Console Output"
The cake is a lie!
```

---
## Strings

A string is a data structure that is able to store text data. A string can be
used to store and reproduce text characters easily. \
In Abstract, every string is encoded in UTF-8, with characters varying from 1-4
bytes in length.

| Alias  | Size                                            | Implementation         |
|--------|:-----------------------------------------------:|:----------------------:|
| string | variable (content is heap/statically-allocated) | [Std.Types.String](#)  |

```abs
let string mySpeek = "Hello, World!"
Std.Console.log(mySpeek)

mySpeek = "Goodbie, World!"
Std.Console.log(mySpeek)
```
```text title="Console Output"
Hello, World!
Goodbie, World!
```

---
## Chars
:::warning[Not Implemented!]
:::

Chars are data structures made to hold a single text character. Chars value can
either be set or assigned manually with a character value or it can be set by
getting a character from an index of a string. \
As every string in Abstract is UTF-8, every character have the same length as a `i32`
in memory, being able to hold every possible character of the Unicode char set.

:::note
Keep in mind that some unicode characters may use more than one character to be stored,
e.g. `"🇧🇷" = '🇧' + '🇷'`. \
The Char struct cannot store that characters and instead need to be used with another
Char value.
:::

Chars will also be castable from/to integers lower than 32 bits e.g. `u8`, `i7`
or `u32`.

| Alias  | Size     | Implementation            |
|--------|:--------:|:-------------------------:|
| char   | 32 bits  | [Std.Types.Character](#)  |

to declarate a Char data type, use `char`:

```abs
const string myString = "Hello, World!"

let char myChar = 'U'
myChar = myString[7]
Std.Console.writeln(myChar as byte) # '87'

```

---
## Void
:::warning[Not Implemented!]
:::

Void is not a concrete type and it is used to indicate that a value is not returned.
```abs
void
```

---
## NoReturn
:::warning[Not Implemented!]
:::

NoReturn is not a concrete type and it is used to indicate that a function do not returns.
```abs
noreturn
```
