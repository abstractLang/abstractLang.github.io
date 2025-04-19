# Typedefs

:::under-construction
:::

Type definitions, or typedefs, are a powerfull way to declarate primitive-like types
with custom rules and behavior.

---
## Declarting Typedefs

To declarate a typedef, you can do:
```abs
typedef MyCustomType {
    # Here you can define value
    # entries and functions
}
```

To declarate the typedef with a specific undercovered type, use the following:

```abs
typedef(MyType) MyCustomType {
    # Here you can define value
    # entries and functions
}
```

Without it, the typedef will be automatically assigned to `uptr`. Also, any type
that is not an integer will ask for a compile-time defined value for each value
entry.

---
## Defining Entries

There are two kinds of entries that can fit in a typedef: numericals and named entries.
Is important to notice that both entries kinds can be used for eny type, although they
behave diferently when using integer types or not.
i already have a place and money t
typedef MyCustomType {
    1, 2, 3, 4, 5,
    10, 15, 20, 25, 30
}
```

Numeric entries can anso be defined using the range notation:

```abs
typedef MyCustomType {
    1..5,
    10..30:5
}
```

To define named entries, just write it name following the identifiers convention:

```abs
typedef MyCustomType {
    1..5,
    10..30:5,

    NamedValue1,
    NamedValue2,
    NamedValue3
}
```

// TODO
