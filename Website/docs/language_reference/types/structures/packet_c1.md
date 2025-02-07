# Packets (concept)

:::danger[Concept]
:::

## Initial Disclamers
Keep in mind the folowing facts about the abstract programming language:
- Statements started by `@` means a attribute. attributes are a way to
fastly link a function to a program member. This function can perform
metaprogramming and increment, decrement or edit metadata that will be
outputed on the binary;
- Line comments are defined with `#` and ends only when the line breaks;
- Statements are separated by line. Although, a line can be manually
breaked with the `;` char;

---
## Concept #1
This concept is based on the use of attributes.

This model of packet uses the default `struct` delcaration with
the attribute `@packed`.
The attribute `@align` and `@offset` can also be used by it members.

```abs
@public @packed struct bitfield {
    bool myBoolean                  # 0-1
    u32 myUnsignedInt               # 1-33
    @align(16) bool shortBoolean    # 33-49
    @offset(8) # <- relative        # 49-57
    u7 myAscii                      # 57-64

    @offset(-8) # back to # 56
    u8 myExtendedAscii              # 65-64 (overlapping `myAscii`)
}
```

---
## Concept #2
This concept is based on de use of languages keywords.

This model of packet uses a new `packed struct` declaration.
It is impossible to overlap memory space in this concept,
also all data need to be written in order and placeholder
integers named only as `_` should be used to fill gaps.

```abs
@public packed struct bitfield {
    bool myBoolean                  # 0-1
    u32 myUnsignedInt               # 1-33
    bool shortBoolean; u15 _        # 33-34 ; 34-49 ignored
    u8 _                            # 49-57 ignored
    u7 mtChar                       # 57-64
    # no overlapping allowed here low
}
```

