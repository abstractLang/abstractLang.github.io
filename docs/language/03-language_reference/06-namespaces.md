# Namespaces

:::info[Under Construction]
:::

Namespaces are a resource used for organization and encapsulation, used to divide the project into small blocks and provide an aditional layer of safety when it comes to naming conflicts.

A namespace represents a logical group of individual identifiers, organized in a hieraquical order. Identifiers inside namespaces can be refered relatively to a scope or globally, with fully-qualified identifiers.

imagine the following namespace organization:

```abs
namespace Std {
    namespace Math {
        struct Graph
        namespace Vector {
            struct Point
        }
    }
}

```

Inside thr scope of `Graph`, it is possible to import the `Point` struct this way:

```abs title="Graph.a"
from Vector import { Point }
```

However, in another module, the reference must be fully qualified this way:

```abs title="main.a"
from Std.Math.Vector import { Point }
```


In Abstract, namespace generation is based entirely on directory structure.

// TODO
