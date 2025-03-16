# Data References

:::info[Under Construction]
:::

When it comes to memory management, is important to understand what is data references
and dereferencing data before knowing how to use it.

In diverse cases, it's usefull, better for performance or just innavoidable to handle some
process with the data source instead of a copy of it. To solve this problem, all systems
allows two ways of moving data around:

### Sending Data By Value
means that the data being assigned is not the source, but a copy of it. Let's take a example:

```abs
const source = 10
const copy1 = source
const copy2 = source
```

both `copy1` and `copy2` have the same value stored in source: 10. It doesnt mean that `copy1`
and `copy2` are refering `source`.

```abs
from Std.Console import

const source = 10
const copy1 = source
const copy2 = source

writeln("original source = \{source}")
writeln("original copy1 = \{copy1}")
writeln("original copy2 = \{copy2}")

# Modifying...
copy2 = 20
copy1 = 5

writeln("source = \{source}")
writeln("copy1 = \{copy1}")
writeln("copy2 = \{copy2}")
```
```text title="Console Output"
original source = 10
original copy1 = 10
original copy2 = 10
source = 10
copy1 = 5
copy2 = 20
```

With this code is possible to see that `source`, `copy1` and `copy2` has indeendent values,
though receinving it from the same field reference. This is explained though the fact that
the computer makes a copy of the value in `source` instead of referencing the field itself.
This way, any modifications on data received by value will not be reflected in the original
data source.

### Sending Data By Reference
means that the data being assigned is a reference to the source. Follow the example:

```abs
const source = 10
const copy1 = source
const ref1 = &source
const ref2 = &source
```

The unary operator `&` returns the reference of the field instead of it value. This means that
`ref1` and `ref2` now *points* to `source`.

```abs
from Std.Console import

const source = 10
const copy1 = source
const ref1 = &source
const ref2 = &source

writeln("original source = \{source}")
writeln("original copy1 = \{copy1}")
writeln("original ref1 = \{ref1}")
writeln("original ref2 = \{ref2}")

# Modifying...
ref1 = 5
ref2 = 7

writeln("source = \{source}")
writeln("copy1 = \{copy1}")
writeln("ref1 = \{ref1}")
writeln("ref2 = \{ref2}")
```
```text title="Console Output"
original source = 10
original copy1 = 10
original ref1 = 10
original ref2 = 10
source = 7
copy1 = 10
ref1 = 7
ref2 = 7
```

This example shows that assiging a value to `ref2` resulted in both `source` and `ref2` being
changed to this value too. In reality, only the value of `source` is changing and it content is
being reflected by `ref1` and `ref2`.

---
## Understanding Pointers And Dereference

// TODO
