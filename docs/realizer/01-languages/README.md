# Languages

The main job of the Abstract Realizer is compile and optimize programs.
For that, Realizer have a set of well documented Intermediate Representation
Bytecode to serve as input and output for it plugins or external code.

Abstrat uses 3 languages, one for code input and two for code output:

---
## Input Languages:

### Omega
Omega is the main input bytecode of Abstract. it is designed to be easy to
be parsed to by the frontends and represent all Abstract capabilities in a
higher-level design.

see more in [Omega](omega/)

---
## Output Languages

### Alpha
Alpha is a output language designed to be more compatible with most real machines.
It operates data using register sets and organize the data as stored as aligned bytes.

see more in [Alpha](alpha/)

---
### Beta
Beta is a output language designed to be more compatible with most virtual machines.
It operates data using a stack-based structure and organize dita in a more abstracted
way.

see more in [Beta](beta/)
