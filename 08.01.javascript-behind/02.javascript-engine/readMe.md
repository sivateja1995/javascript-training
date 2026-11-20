# JavaScript Engine

```txt
javascript engine : the one that execute the javascript code
```

| Browser                        | Javascript Engine       |
| ------------------------------ | ----------------------- |
| Google,Microsoft, brave, opera | V8 Engine               |
| Mozilla                        | spider monkey           |
| Apple safari                   | Javascript Core (nitro) |
| internet explorer              | chakra                  |

## javascript Engine structure

```
+---------------------------------------------------+
|                    JS ENGINE                      |
|  (e.g., V8, SpiderMonkey, JavaScriptCore)         |
|                                                   |
|  +---------------------+  +--------------------+  |
|  |     CALL STACK      |  |    MEMORY HEAP     |  |
|  |                     |  |                    |  |
|  |  +---------------+  |  |   +----+   +----+  |  |
|  |  |  funcB()      |  |  |   |Obj1|   |Arr1|  |  |
|  |  +---------------+  |  |   +----+   +----+  |  |
|  |  |  funcA()      |  |  |                    |  |
|  |  +---------------+  |  |       +------+     |  |
|  |  |  main()       |  |  |       |Func1 |     |  |
|  |  +---------------+  |  |       +------+     |  |
|  +---------------------+  +--------------------+  |
|    (Execution Contexts)    (Unstructured Memory)  |
+---------------------------------------------------+




CALL STACK : This is where our program code is executed through *execution context*.

HEAP:  this is where unstructure memory pool where objects are stored .

```

## compilation and interpretation

COMPILATION : Entire code is converted into machine code at once and written to a binary file that can be exectued by a computer.

```
|-------------|   STEP 1        |-------------|     STEP 2      |----------------|
|*source code*| ------------->  |PORTABLE FILE| --------------> | PROGRAM RUNNING|
|-------------| COMPILATIOIN    |-------------|   EXECUTION     |----------------|
```

INTERPRETATION : interpreter runs the code line by line

```
|-------------|   STEP 1                    |----------------|
|*source code*| ------------------------->  | PROGRAM RUNNING|
|-------------| Exectuion line by line      |----------------|
```

## compilation Vs Interpretation

| compilation                                      | interpretation                                            |
| ------------------------------------------------ | --------------------------------------------------------- |
| faster                                           | slower                                                    |
| Execution is faster                              | Exection is slow as it has to go through the line by line |
| startup is slow as requires to build             | instant                                                   |
| DETECTS ALL THE PROGRAM ERRORS BEFORE IT STATRTS | RUN TIME ERROR MANAGEMENT                                 |
| TRANSILATION IS aot                              | onfly                                                     |
| should complie for different platforms           | it is independent of the platform                         |
