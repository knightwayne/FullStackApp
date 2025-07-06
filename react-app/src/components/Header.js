import React from "react";
import { Link, NavLink } from "react-router-dom";
import { User } from "./User";
import { About } from "./About";
import { Index } from "./Index";

export class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
                <ul className="nav navbar-nav" display="inline-block">
                    {/* <li><a href="#">Home</a></li> */}
                    <li><Link to="/">Home</Link></li>
                    {/* instead of link to apply color properties */}
                    <li><NavLink to="/about" style={({ isActive }) => ({color: isActive ? "red" : "black"})}>About</NavLink></li>
                    <li><Link to={"/user"}>User</Link></li>
                </ul>
            </div>
        </div>
      </nav>
    );
  }
}


