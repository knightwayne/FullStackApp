import React from "react";

//stateless component rather than the followed convention of react class 
export const Footer = (props) => { 
    return (
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <div className="container">
            <p>Author: About Exclaimation</p>
            <p><a href="mailto:notvalid@example.com">{props.email}</a></p>
            <p className="mb-10">&copy; 2025 Website Footer. All rights (are maybe) reserved. </p>
        </div>
      </footer> 
    )
}
