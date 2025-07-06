import React from 'react'
import { Outlet } from "react-router-dom";
import {Header} from './Header'

export class Root extends React.Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1"> 
                        <Header/>
                    </div>
                </div>
                <div className="row">
                   <div className="col-xs-10 col-xs-offset-1"> 
                        <Outlet />
                        {/* {this.props.children} */}
                        {/* replaced by outlet */}
                    </div>
                </div>
            </div>
        )
    }
}
