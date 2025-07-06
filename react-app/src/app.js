import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Root } from "./components/Root";
import { Index } from "./components/Index";
import { User } from "./components/User";
import { About } from "./components/About";

console.log("Hi, webpack working")
document.getElementById("app").innerText = "Changed through React"

class App extends React.Component
{
    render() {
        return( 
            <div className="container"> 
                <BrowserRouter>
                    {/* <Routes><Route path="/usera/abc" element={<h3>path with link working</h3>}/></Routes> */}

                    <Routes>
                        <Route path='/' Component={Root}>
                            {/* default element is Index --indexRoute earlier */}
                            <Route index element={<Index/>} /> 
                            <Route path={'user/:id'} Component={User} /> 
                            <Route path={'user'} Component={User} /> 
                            <Route path={'about'} element={<About/>}/>
                        </Route>
                        {/* this one doesnt user root component, so no header */}
                        <Route path={'abouts'} element={<About/>}/>
                        <Route path="*" element={<h3>Error 404! Page Not Set</h3>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

// ReactDOM.render(<App/>, window.document.getElementById("app"));
const root = createRoot(document.getElementById("app"));
root.render(<App/>);




