import React from 'react';

const Blog = () => {
    return (
        <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Questions</h2>
            <div className="divide-y divide-gray-700">
                <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                    <h3 className="font-semibold md:col-span-12 text-2xl">1.What is the purpose of react router-dom?</h3>
                    <div className="md:pl-0 md:col-span-12">
                        <p>
                        React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React. React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process is called Routing and it is made possible with the help of React Router Dom.
                        </p>
                        <p>
                        The major advantage of react-router is that the page does not have to be refreshed when a link to another page is clicked, for example. Moreover, it is fast, very fast compared to traditional page navigation. This means that the user experience is better and the app has overall better performance.
                        </p>
                        <p>
                        React Router Dom has many useful components and to create fully functioning routing, you need most of these.
                        <br />

                         1.Router(usually imported as BrowserRouter):  It is the parent component that is used to store all of the other components. Everything within this will be part of the routing functionality
                         <br />
                          2.Switch: Switch component is used to render only the first route that matches the location rather than rendering all matching routes.
                          <br />
                           3.Route: This component checks the current URL and displays the component associated with that exact path. All routes are placed within the switch components.
                          <br />
                           4.Link: Link component is used to create links to different routes.
                        </p>
                        <p>
                        The Route component takes 2 parameters. The first one is the path that will be in the url and the second is the component that will be displayed if the current URL matches the path in the first parameter. 
                        </p>
                        </div>
                </div>
                <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                    <h3 className="font-semibold md:col-span-12 text-2xl">2.How  does context api works in react ?</h3>
                    <div className="md:pl-0 md:col-span-12">
                        <p>
                        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                        </p>
                        <p>
                        React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's
                        </p>
                        <p>
                        Redux is great and came perfectly to answer the need for state management. Actually, it answered this need so well that it came to be known that you can't be a "true" React developer if you don't know your way around Redux. However, Redux has its disadvantages, and that's why it's important to know what Context API gives us that Redux doesn't:
                        </p>
                        <p>
                        Simplicity - When using redux people tend to manage almost all of their state in redux and it causes 2 problems:
                        <br />

                         1.Overhead - Why should I create/update 3 files just to add one tiny feature?
                          <br />
                          2.One of the significant advantages of React's one-way data binding is that it's easy to understand - A component passes state to its children. Using Redux takes it away from us.
                        </p>
                        <p>
                        Using Context API we can define several unrelated contexts (stores) and use each in its proper place in the app.
                        </p>
                        <p>
                        Redux is just a concept. If you are comfortable with using reducers and actions and don't find hindering than you may also create reducers and actions that wrap Context API as the store as Redux's author Dan Abramov explained in his medium article about whether Redux is always required
                        </p>
                        <p>
                        You might think to yourself: "Well, I'm convinced. How do I implement Context API in my app?" First, make sure you need it. Sometimes people use shared state across nested components instead of just passing it as props. And if you do need it you should follow these very few steps:
                        <br />

                           1.Create a folder under your app root named contexts (not required. just a convention)
                         <br />
                             2.Create a file named 'your context name' Context.js, e.g. userContext.js
                           <br />
                              3.import and create a context 
                              <br />
                             4. Create a component that will wrap the provider named Provider e.g. UserProvider
                              <br />
                             5. Create a higher order component to consume the context named: with e.g. withUser
                        </p>
                        <p>The difference between the two options above is if you want the context to be a single nested property by this name, to explode it to its properties (which in my opinion is more convenient).</p>
                    </div>
                </div>
                <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                    <h3 className="font-semibold md:col-span-12 text-2xl">3.How does useRef work in React ?</h3>
                    <div className="md:pl-0 md:col-span-12 ">
                        <p>
                        Accessing DOM elements is core JavaScript in the browser, using vanilla JavaScript a div element with class "title" can be accessed using:
                        </p>
                        <p>
                        The reference to the element can be used to do interesting things such as changing the text content titleDiv.textContent = "this is a newer title" or changing the class name titleDiv.classList = "This is the class" and much more operations.
                        </p>
                        <p>
                        Overtime, DOM manipulation libraries like jQuery made this process seamless with a single function call using the $ sign. Getting the same element using jQuery is possible through const el = ("div.title"), also the text content can be updated through the jQuery's API: el.text("New text for the title div").
                        </p>
                        <p>REFS IN REACT THROUGH THE useRef HOOK #</p>
                        <p>
                        ReactJS being a modern frontend library took it further by providing a Ref API to access its element, and even a step further through the useRef hook for a functional component.
                        </p>
                        <p>
                        As seen above, after the 2 seconds of the component initial rendering, the text content for the div element with the className of title changes to “Updated text”.
                        </p>
                        <p>
                        A Ref variable in React is a mutable object, but the value is persisted by React across re-renders. A ref object has a single property named current making refs have a structure similar to  current: ReactElementReference .
                        </p>
                        <p>
                        The decision by the React Team to make refs persistent and mutable should be seen as a wise one. For example, during the re-rendering of a component, the DOM element may get updated during the process, then it is necessary for the ref to the DOM element to be updated too, and if not updated, the reference should be maintained. This helps to avoid inconsistencies in the final rendering.
                        </p>
                        <p>
                        The update to a useRef variable, the new value can be assigned to the .current of a ref variable. This should be done with caution when a ref variable is referencing a DOM element which can cause some unexpected behavior, aside from this, updating a ref variable is safe.
                        </p>
                        <p>
                        A unique way to implement a useRef hook is to use it to store values instead of DOM references. These values can either be a state that does not need to change too often or a state that should change as frequently as possible but should not trigger full re-rendering of the component.
                        <br />

                          Bringing back the card example, instead of storing values as a state, or a variable, a ref is used instead.
                        </p>
                        <p>
                        This code gives the desired result internally but not visually. The value of the toggled state is persisted but no re-rendering is done when the update is done, this is because refs are expected to hold the same values throughout the lifecycle of a component, React does not expect them to change.
                        </p>
                    </div>
                    
                </div>
               
            </div>
        </div>
    </section>
    );
};

export default Blog;