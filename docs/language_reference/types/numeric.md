---
sidebar_position: 1
---

# Numeric Types
:::info[Under Construction]
:::

Numbers are the base of math and every logical process.
The Abstract language allows the user to choose between a long list
of numeric types for the best result, performance and memory management
for their application.

---
## Integer Numbers

The most simple way of representing numbers is with integers. Integers
represents an always complete (non-fractional) value, never allowing
any decimal point.

For historical, computational and memory optimal reasons, the computer gives
an extensive range of possibilities about numeric integer values.

To declare an integer type in the Abstract Language, use the low-case
letter `i` or `u` to declare the kind of the integer (signed or unsigned
respectively) and a number to declare the size, in bits, that this data
will occupy in memory.

Examples of valid integer types are:
```abs
i8   # signed 8-bit (1 byte) integer
u16  # unsigned 16-bit integer
i128 # signed 128-bit integer
u256 # unsigned 256-bit integer
i1   # signed single bit (0 or -1)
```

The size in bits must be a integer inside the range of 1 to 256.

:::info[Although,]
it is reccomended to avoid bit lengths that are not a power
of two greater or equal than 8 (8, 16, 32, 64, 128, etc.).
Most real machines will peform calculations faster in this range, as
the effort to convert the value from and to the defined alignment is
lower. \
More about it will be covered in  [alignment](../memory/alignment).
:::

The following non-exaustive table shows some common integer types and
its corresponding type in the C programming language:

| Alias     | Equivalent in C | Size                | Range                           |
|-----------|:---------------:|:-------------------:|:-------------------------------:|
| i8        | int8_t          | 8-bits              | -128 to 127                     |
| i16       | int16_t         | 16-bits             | -32,768 to 32,767               |
| i32       | int32_t         | 32-bits             | -2,147,483,648 to 2,147,483,647 |
| i64       | int64_t         | 64-bits             | -9.2x10¹⁸ to 9.2x10¹⁸           |
| iptr      | intptr_t        | (target dependent)  | (target dependent)              |
| u8 (byte) | uint8_t         | 8-bits              | 0 to 255                        |
| u16       | uint16_t        | 16-bits             | 0 to 65,535                     |
| u32       | uint32_t        | 32-bits             | 0 to 4,294,967,295              |
| u64       | uint64_t        | 64-bits             | 0 to 1.8x10¹⁹                   |
| uptr      | uintptr_t       | (target dependent)  | (target dependent)              |

The `iptr` and `uptr` types are special general-purpose integers that are defined
by the target. It is equivalent to the size of a memory pointer on the specific
platform or the biggest native integer that the specified target can process.
E.g.:
If compiling the project to an x86 architecture based machine, `iptr` will be equivalent
to i32 and on an amd64 architecture, it will be equivalent to i64.

---
## Floating Numbers
:::warning[Not Implemented!]
:::

Floating numbers are somewhat complicated numerical values used to reproduce fractions.

As the table above, the Abstract floating types are listed below, with their
corresponding type in the C programming language:

| Alias   | Equivalent in C | Implementation                   |
|---------|:---------------:|:--------------------------------:|
| f16     | n/a             | [Std.Types.HalfFloating](#)      |
| f32     | float           | [Std.Types.SingleFloating](#)    |
| f64     | double          | [Std.Types.DoubleFloating](#)    |
| f128    | n/a             | [Std.Types.QuadFloating](#)      |
