# Exam 1 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q: What is the difference between a dynamic asset and a static asset?

static assets are something you send to the user or the browser that the server will not change,such as images and public folder in express.Dynamic asset will interact with server which means it is not static and may get data from server by "${}".

## Q: What is the difference between a relative and absolute file path in a URL?  What is the "webserver root" and how does this relate to it?

Absolute paths use URLs that refers to a very specific location while relative paths depends on the current page. The webserver root is the page that the relative URL based on like http://localhost:3000.



## Q: What is the difference between server-side and client-side JS?

Server-side means the code run on the server while the Client-side means the code run on the browser like code surrounded by the tag -<script> in html.

## Q: What are the differences between `var`, `const`, and `let`, and when should you use each of them?

var is hoisting and you can declare it without initialization. let is block scope and not hoisting. const is block scope and not hoisting,also you cannot reassign the variable.Do not use var unless in the old js version,use let in for loop and try to use const in most cases.

## Q: What are the 4 ways to create inheritance? (no examples needed, just a sentence describing each)

1.constructor function：use new to create a new object and the prototype of the object is inherited;

2.Object.create() create a new object and the new object's prototype is set to the passed object.

3.ES6 class ,create a class and use new to create the object of the class like other languages,then the function in the class is inherited.

4.Brute force:use Object.setPrototypeOf().



## Q: Give a demonstration of 1 way to create JS inheritance to _inherit_ a method named "purr".

```js
const origin= {
purr: function() {
}
};
const inherit = Object.create(origin);
maru.purr();
```



## Q: Give a demonstration of a different way to create JS inheritance to _inherit_ a method named "hiss".

```js
const Origin = function() {
};
Origin.prototype.hiss = function() {
};
const inherit = new Origin();
maru.hiss();
```



## Q: Explain this sentence: "In CSS, you can select an element based on its ancestors, but you can't select an element based on its descendants"  Make an example and say a concept that cannot be selected.

Because the CSS is only valid for itself and its descendants.And the rules of descendants can not be applied to its ancestors



## Q: Explain what a callback is, and give an example.

Callback is a function passed to another function.Example is below:

```js
const a=function(callback)
{
    console.log("I am function A");
    console.log("Call callback");
    callback("b");
};
function b(name){
    console.log("I am Callback function "+name);
}

a(b);
```



## Q: In CSS, what does it mean "You shouldn't name your classes after what they will appear like"?   Why?  Give an example of a class that is well named and a class that is poorly named.

The class should be named by its function rather than its appearance because the class need to be reused.for example, picture 1 is a bird and picture 2 is a house ,the appearances are different but the functions are the same so they may have the same css style, if you name the class picture,then you could reuse this class and both two pictures share the same css style.





