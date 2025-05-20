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
Is important to notice that both entries kinds can be used for any type, although they
must be defined slightly diferent when using integer types or not.

```
typedef MyCustomType {
    1, 2, 3, 4, 5,
    10, 15, 20, 25, 30
}
```

Numeric entries can also be defined using the range notation:

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

## Using Typedefs

After define entries inside the typedef, you will be ble to use them as literal values.

When using numeric values, you can just use a number literal included in the typedef:
```abs
let MyCustomType = 5
```
Using a number that is not included in the typedef will result in a compilation error.

When using literal values, you need to first referenceate the typedef or use the dot
notation to automatically identify the typedef type, if possible:
```abs
leet MyCustomType mytype1 = MyCustomType.NamedValue1
leet MyCustomType mytype2 = .NamedValue2
```

Take this typedef implementation as a example:

```abs
typedef Food {
    hamburger,
    vegan_burger,
    x_burger,
    salad,
    orange_juice,
    chocolate_milk,
    cola
}

# This function receives a  string and
# Normalize the data into `Food`.
# Returns an error if the input is not
# recognized.
func doOrder(string order) !void {

    let Food foodValue = switch (order.trim()) {
        "hamburger" => .hamburger,
        "vegan burger" => .vegan_burger,
        "x burger" => .x_burger,
        "salad" =>  .salad,
        "orange juice" => .orange_juice,
        "chocolate milk" or
        "choco milk" => .chocolate_milkk,
        "cola" => .cola,

        _ => throw falt.UnrecognizedInput()
    }

}
```


