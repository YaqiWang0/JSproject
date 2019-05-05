# Exam 2 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q: The first rule I've given about REST services is that the URL should represent a resource.  What does that mean?  Provide an example where a url DOES not represent a resource, then describe how to modify it so that it does.

url stands for *Uniform Resource Locator*. A URL is nothing more than the address of a given unique resource on the Web. In theory, each valid URL points to a unique resource. Such resources can be an HTML page, a CSS document, an image, etc. But there may also be some exceptions such as a URL pointing to a resource that no longer exists or that has moved.

## Q: I say that "Once you go async, you have to stay async".  What does this mean?  Give an example that demonstrates.

Because once you go async, you do not know when the method will finish which means you can not define the order of the next step and you have to process the next step after the async task finished.That is why you need to stay async.For example,the a+b is async,if you want calculate(a+b)*c,then the result of(a+b) multiply need to be async.

## Q: What is a rule of thumb you can follow to understand when async code can and cannot modify your variables and/or call your methods?

you use asynchronous code when performing expensive and time-consuming operations.

## Q: What does it mean to "store your state in the DOM"?  Why shouldn't you do this?

store your state in the DOM means store summary of the current value for all things in the DOM and read the DOM to recapture the state.It is bad because the screen is the visual output if you alter the display, you change how to get the list that way.As your display gets more complicated, so does all your state interaction

## Q: What is the primary rule to follow to prevent poor web security such as injection attacks?  (This is NOT about safely storing passwords)

Never use data from the user without filtering it.Never trust input,don't store it,don't display it,don't use it in string commands

## Q: What is a polyfill?  When should one be used?  Give an example of a polyfill that follows these rules.

Polyfills add newer functionality to older JS,In many cases, we choose to use them on production websites before they’re fully implemented in all browsers. To not break the experience for users on older browsers, we of course include polyfills for any not-fully-supported features.Ex:Array.prototype.forEach.

## Q: Give an example of a piece of information you should not store in a cookie, and why you should not store it that way.

For example,you should not store password and username in cookie,because people could see the value of cookie when open this browser if this cookie has not expired.

## Q: Explain the differences between a multiple-page-web application and single-page-web application.  Be sure to fully demonstrate your understanding.

single-page-web in our class use promise/fetch which is asynchronous and the page will not be fully refreshed ,all the task will be finished in the same url with the help of client-side js.multiple-page-web in our class  will not use client-side js and just use the link and form to submit the data or get the new page.

## Q: What is Progressive Enhancement?  What is the difference in an SPA that uses Progressive Enhancement compared to an SPA that doesn't use Progressive Enhancement?

**Progressive enhancement** is a strategy for web design that emphasizes core webpage content first. This strategy then progressively adds more nuanced and technically rigorous layers of presentation and features on top of the content as the end-user's browser/internet connection allow.an SPA that uses Progressive Enhancement will still working if js could not be used while an SPA that doesn't use Progressive Enhancement will not woking if some error appear.

## Q: Explain how a  REST service is or is not similar to a dynamic asset.

dynamic is constructed either immediate or for a short span - probably not an actual file,REST service also use a url service for a short span like dynamic span.but Rest service should be write both in server-side js and client-side js.



