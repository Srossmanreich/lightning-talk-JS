# Maintainable JavaScript

###Modular JavaScript
[modular javascript youtube link](https://www.youtube.com/playlist?lis
t=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f)
<br />
<br />
**Some basic rules:**
- self-contained module
    - everything to do with a specific module should be in that module
    - no global variables
    - if a module manages more than one thing it should be split up
- DRY code: Don't repeat yourself
- better DOM usage
- memory leak
  events should be able to unbinded
- revealing module pattern
    - making private functions and variable
- pubsub pattern: mediator that talks to other modules. This is a great pattern to learn so will scale your app futher. Because all the modules or events or functions they are talking each other thru this pubsub mediator without directly interacting with each other, so when some of the module changes, won't effect other part of program

**classical and prototypal**
- classical
  - node.js provides a function called inherite(construc, superConstruc) <br />
```
    function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
    };
```
  - prototypal
     - using ```Object.create(objectName); ```to create inherite all the properties of passed object

