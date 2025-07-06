## React Tutorial

> **Note:** This is a small note.

```print("Hello")```

        print(Hello)

### Basics
1. Modularize webpage into components, and then reuse;  
React works by parallelly implementing changes a virtual DOM

2. webpack: bind everything together; babel: backwards compatibility for ES5 ES6

3. Components: class App extends React components;
        
        Most important method: render()
        Find other methods ??
    > **Note:** Use functions now, not classes to render compoenets

4. Rendered using root.render( ) root &#8594;catch an html element using getElementById or something, through Window(?) or document Object

5. Can return only one jsx (js xml) object, so all components needs to be embedded inside a single component:

        We have structured it as follows:
        we are rendering App (through Root; in index.js) &#8594; 
        App contains Header, Home, Footer Components 
        Imported through their class.

    Can also render multiple Classes, by repeating the same. 
    JSX -> [<App/>] or [<App>dfsd </App> ]

6. ```{ insideThis JS is executed }```
E.g. {2+3} &#8594; 5 ; {2+'2'-2*2} &#8594; 18; {} &#8594; 

7. In React JSX, inline style must be an object, not string.



---
### Props & States.
Props: passed through outside to pass some values from external places to pass along some values or *properties*
States: internal to a component, to reflect changes in behavior
>Doubt: Not exactly clear
updating dom via creating a virtual dom

Props ->
1. this.props.children if: <Col> tobeAccessed </Col>
2. o/w props.email if: <Col email="abd"/>

I can also pass components as this.props.children
so 
<Root><Home> </Home></Root> Home is the children here and then in React render return
div and class and div and {this.props.children} and respective closing tags

State ->
dont set state to props except for inital props ; general notion, dont change/update props, set it to state var and modify
# ????
```setState() changes state -> rerenders UI ??what and how```


Stateless components
use export const Footer = (props) => { } rather than class Footer extends React.component{ render(){ return(sdfdsf) } }

### Learn JS: 
passing function or calling requires this and 
bind, etc and async, await, promise
func calling vs func Reference 
this always refers to the one calling or executing the function
bind apply
super() and constructor ->OOPS

Function Passing and Calling from Children
functions can be passed as props from parent to child, and then child can make those changes (so kind of bidirectional changes)

2way binding not very clear ->look up

Component lifecycle

url/#/dass after # front end handles it
html5 push state

browser apis like fetch and html5 apis history api manages state, has methods like push??
axois vs fetch -> chaining with next etc and linking using .then() to appropriate actions

react router vs react router dom; later is subset of former
react router = react router dom + react router native


C++ loops figure out advatage of it++ vs ++it 
1 keep header same, redirect other parts
2 the <Outlet> component serves as a placeholder for rendering child routes within a parent route's component.
3 add link to redirect
4 pass props


Routing: components user earlier, not we use elements
No, path="/user" is absolute, not relative — it resolves to /user, not /root/user.

path="user" is relative — it resolves to /root/user.
react styling uses {{ }}

