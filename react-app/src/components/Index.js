import React from "react";
// import { render } from "react-dom"; //depreceated
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Header } from "./Header";
import { Cols } from "./Cols";
import { Home } from "./Home";
import { Footer } from "./Footer";

export class Index extends React.Component
{
    //passing function from Parent to Child; which child can call
    constructor()
    {   
        super();
        this.state ={
            defaultName: "Default Name"
        }
    }

    alertFunction(){window.alert("Hi, From Home Component")}

    changeHeaderName=(changedName)=>{
        this.setState({
            defaultName: changedName
        })
    }

    render() {
        return( 
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1"><Cols name={this.state.defaultName}>Props through Components accessed using this.children</Cols></div> 
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h1>Hello from React!</h1>
                        <Home 
                        name={"FName LName"} 
                        initialAge={21} 
                        hobbies={["dance", "sing", "run"]} 
                        func1={this.alertFunction} 
                        func2={this.changeHeaderName.bind(this)}/> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1"><Footer email="abc@notvalid.com"/></div>
                </div>
            </div>
        );
    }
}




