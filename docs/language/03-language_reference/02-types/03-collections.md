# Data Collections
:::info[Under Construction]
:::

Data collection is an extremely important component of a program for easy and efficient handling of huge amounts of data. \
In abstract, some data collections are Arrays, Linked Lists, Queues, Stacks and Dictionaries, all of these are
built-in data types or structures.

:::info
Keep in mind that different collection structures will have it own pros an cons.
Examine with attention each one to understand exactly what is better for your needs.
:::

---
## Arrays
:::warning[Not Implemented!]
:::

Array lists are one of the most basic collection type in programming. They are based on the concept of a contiguous
sequence of data in the memory that can be indexed by its position on the list.


In abstract, array types are delcared as follows:
```
[]AnyType
```
`[]` being a type modifier, indicating an array list of the following type

| abstract | Size in bits     |
|----------|:----------------:|
| [i]t     | bitSizeOf(t) * i |

*`t` - Type of elements \
*`i` - Array list size

Array lists are not dynamically allocated in memory. They need to be allocated with a predefined size and
cannot be resized after creation. 
The array initialization syntax pre-allocate memory based on the length of the array which is
mentioned between the array type modifier `[length]`, also ensuring that the array assigned to this variable
will aways be of the explicited size. \
e.g. the following code will create an array for the `i32` type with pre-allocated memory to only 5 elements of
the `i32` type:
```abs
let [5]i32 myArray
```

Sometimes it is more convenient to just assign the elements to an array without counting how many elements it has.
In that case, the Abstract compiler can figure out the length on its own. Hence, the following syntax is also valid:
```abs
# pay attention to the empty type modifier!
let []AnyType = [values..]
```

If the developer want to specify an array length but define only some of the elements, then
both the syntaxes can be mixed, using some special syntax features to specify the indexes where
the elements will be aplyed:
```abs
[..5, 10, 20, 30] # 10, 20 & 30 will be placed starting at the index 5
[10, 20, 30, 3..] # 10, 20 & 30 will be placed 3 elements before the end of the array
[10, 20, ..8, 30] # 10 & 20 will be placed at the start and 30 will be placed at index 8
```

Some ways of declaring an array in Abstract are:
```abs
let [10]i32 myArray
const []string fruits = ["orange", "mango", "strawberry", "tomato"]
const [20]i8 myBytes = [255, 254, 253 ..]
```

### The Index Operator
To handle single values inside an array, it uses the index operator `[]`.

The index operator is declared putting a number surrounded by square brackets after the array indentifier.
The declared number is the index, the position of the desired element on the list, starting from zero.

The index operator will return an element from the array, at the specified index, as follows:
```abs
let []i32 myArray = [10, 20, 30, 40, 50]
let i32 elementAt1 = myArray[1] # = 20
let i32 elementAt2 = myArray[2] # = 30

# The index also works with variables
# Any numeric integer data type can be used as
# a indexer!
let i8 myIndex = 0
Std.Console.log(myArray[myIndex]) # out: 10
myIndex = 4
Std.Console.log(myArray[myIndex]) # out: 50
```

---
## Dynamic Arrays
:::warning[Not Implemented!]
:::

Dynamic arrays are wrappers around built-in arrays that allow them to be resized
during runtime. Dynamic arrays will require an allocator to work as they lies
entirelly on the heap.

```abs
from Std.Console import
from Std.Types.Collections import { DynamicArray }

func main() !void {
    const byteList = new DynamicArray(i8)()

    # Elements can be added to the list with
    # no worries as it will dinamically allocate
    # memory when needed.
    byteList.Add(10)
    byteList.Add(20)
    byteList.Add(30)
    byteList.Add(40)

    # Elements can also be removed from the list
    byteList.RemoveAt(2)

    for i in byteList => writeln(i)
}
```
```text title="Console Output"
10
20
40
```

:::warning[Pros and cons]
The dynamic array is optimized for **reading before resizing**. It means that it use should be prioritized
for cases where the data need to be fastly reed but the same speed is not needed to manipulate the
elements.
:::

---
## Linked Lists
:::warning[Not Implemented!]
:::

---
## Queues
:::warning[Not Implemented!]
:::

---
## Stacks
:::warning[Not Implemented!]
:::

---
## Dictionaries
:::warning[Not Implemented!]
:::
