---
sidebar_position: 2
title: Your First Program
---

# Creating Your First Program
:::info[Under Construction]
:::


This document will help you how to set up Abstract's tools in your
machine as well as how to create, organize and execute your first
program.

---
## Setting up the environment

TODO

To start a new project, begin creating a new directory folder that
will be used as the root namespace. For this example, let's call
the folder `MyProgram.

```shell title="Command Line"
mkdir MyProgram
cd MyProgram
```

---
## Writing the program

Inside the `MyProgram` folder, create a script file with the
`.a` extension e.g., `main.a`.

Inside the script file, write the following code:
```abs title="main.a"
from Std.Console import

func main() !void {
    writeln("Hello, World!")
    writeln("I'm coding in abstract!")
}

```

---
## Running the Program

Abstract offers two ways to build and run the program: Using the
command line to directly call the compiler or use a build script
to talk to the compiler for you.

### Building with the command line

Using the command line, you can invoke the following command to run the
project in the current workspace:

```shell title="Command Line"
abs run
```

### Running With a Build Automatization Script

To use a build automatization script, create a new script with the `.a`
that should be called `build.a`.

This is a example of a standard for the file and directory organization
for using build automatization scripts:

```text title="MyProgram/"
src/
 '- main.a   
build.a
```

the creation of this istructure can be automatized though the command:
```shell title="Command Line"
abs init
```

TODO

---


