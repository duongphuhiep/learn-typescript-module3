#Typescript Training

This sample project focuses on the [Typescript](http://www.typescriptlang.org/) external module writing. It shows how typescript module is transpiled to javascript (ES3). See the [typescript handbook](http://www.typescriptlang.org/Handbook#modules) for more information.

In typescript the internal module must to be combine with the consumer, so I think it is less interesting than external module. The typescript transpiler knows how to wrap your module in 4 differents format (`commonjs`, `amd`, `umd`, `system`). 

* [`app`](/app) folder contains typescript source files
  - [`Main.ts`](/app/Main.ts) is the entry point it tests the modules [`M1`](/app/M1.ts) and [`M2`](/app/M2.ts)
  - the module [`M1`](/app/M1.ts) requires the module [`M2`](/app/M2.ts)
  - the module [`M2`](/app/M2.ts) requires the module [`M3`](/app/M3.ts)

* `/gen*` folders contains tranpiled javascript in different module formats: [`commonjs`](/genCommonjs), [`amd`](/genAmd), [`umd`](/genUmd), [`system`](/genSystem)

* You can execute the test with nodejs. Obviously only the `commonjs` and `umd` format are compatible with the nodejs module loader
```js
    node genCommonjs/Main
    node genUmd/Main
```
##Quick link to the result

* [`M2.ts orginal`](/app/M2.ts) which requires [`M3`](/app/M3.ts) and export the class `Cls3` and the object `Inst3`
* [`M2` in `commonjs`](/genCommonjs/M2.js) format: no need to declare dependencies ahead.
* [`M2` in `umd`](/genUmd/M2.js): favorite format to publish opensource library which compatible with both `amd` and `commonjs` loaders (see also [`umdjs`](https://github.com/umdjs/umd)).
* [`M2` in `amd`](/genAmd/M2.js) format: need to declare all dependencies ahead.

##See also
* https://github.com/duongphuhiep/learn-typescript-module
* https://github.com/duongphuhiep/learn-typescript-module2
* https://github.com/umdjs/umd
