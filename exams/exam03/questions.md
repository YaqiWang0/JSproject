# Exam 3 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

* NOTE: Because there is no coding portion to Exam 3, each of these questions is worth more to your grade than the questions on previous Exams!  Be sure to have answers you are confident shows your understanding!

## Q: I have said that React JSX components are like functions and follow many of the same best practices.  Give at least 2 such best practices that are good for both JS functions and JSX Components.  (Be substantive!)

1. functional components like proptypes:

   ```jsx
   import PropTypes from 'prop-types';
   
   class Greeting extends React.Component {
     render() {
       return (
         <h1>Hello, {this.props.name}</h1>
       );
     }
   }
   
   Greeting.propTypes = {
     name: PropTypes.string
   };
   ```

2. setState as a function:

   ```js
   // assuming state.count === 0
   this.setState({count: state.count + 1});
   this.setState({count: state.count + 1});
   this.setState({count: state.count + 1});
   // state.count === 1, not 3
   ```

   It’s essentially equivalent to:

   ```js
   Object.assign(state,
     {count: state.count + 1},
     {count: state.count + 1},
     {count: state.count + 1}
   ); // {count: 1}
   ```

## Q: I have said that using Progressive Enhancement (supporting both MPA and SPA) is best, but many places don't do so because of the effort involved.  What is at least one major reason not to use SPA alone?

1. spa would load js files form the server, which means a cost of time.And also if the loading of the js code is failed, any function ,request will fail and no html page will show on the browser.
2. testing will become more difficult because you do not know whether the problem come from the server -side or the client-side.

## Q: Using class-based components and function-based components is largely a matter of preference.  However, (excluding the recent "hooks" addition to React), there are 2 things class-based components give you that function-based components do not.  What are those 2 things? 

state: the methods *you* can call from your components——like `setState()`

 lifecycle methods:Each component has several “lifecycle methods” that you can override to run code at particular times in the process.(such as `componentDidMount()`,`componentDidUpdate()`)

## Q: The "proxy" setting in your package.json is required for the create-react-app dev server to call a local service, but not if you are calling a service that will always be on a different domain (such as jsonstore.io).  Explain what happens (in terms of network traffic) when your dev server is running on localhost port 3000 and makes a call to `/service` when you have "proxy" set to `http://localhost:4000` and a server running on localhost port 4000 that has the `/service` service.  

the dev server will notice that it’s not a static asset，then will proxy the request to http://localhost:4000/ . The dev server will only attempt to send requests in its Accept header to the proxy.
because the proxy do not have this service,HTTP will request server to go localhost port 4000 not throught proxy

## Q: Follow-up: Using the above scenario, explain what the network calls are like after you run `npm run build` and are only running all of your content on localhost port 4000 when your JSX makes a call to `/service`

The request URL is http://localhost:4000/ and make no connection with port 3000,that will show just the data from the server without any html and data from the port 3000

## Q: Additional follow-up: Using the above scenario, explain what changes you would make to your JSX if you were putting your JSX and server on a host on a site such as `http://favorite-cats-with-hats.com` (Not a real site)

change the proxy to the exact site and the port should remain available on that site.

## Q: I have said that you can only pass data "down" in React, not "up".  What does that mean?

 props are only passed from parent to children in React’s component tree. you can only use callback to pass data up.

## Q: Follow-up: If you can't pass data "up", how can anything that is "down" change data?

you can always use callback from parent to child components, where you can use the data in the child component to reset the state in the parent component. Once the state has changed, the state is passed to the child component as props and the change will show on the browser through render().

## Q: A component should not set its own state (if it has one) based on props it was passed in.  Why?  What is the problem with setting state based on props?

the component will only be created once and will not be created again when the parent component is re-rendered.React will reuse the child component.

## Q: Why should you have only a few components that have state?  What is wrong with having many components that have state? 

1. If too many components have states,that change may happen in different time which means suspension may exists.
2. It may be more difficult to figure out which component has changed, that may result in unnecessary trouble in debugging