import React from "react";

export class Cols extends React.Component{
    render(){
     console.log("Cols")
    console.log(this.props)
    var text="Some text not called through props."
        return(
            <div>
                <p>Home Component - Created using Class (Older Method)</p>
                <h3>Cols Name - 2 way binding: {this.props.name}</h3>
                <div style={{ display: 'flex', color: "black"}}>
                    <div style={{flex: 1, padding: "10px", backgroundColor: "lightblue"}}>{text}</div>
                    <div style={{flex: 1, padding: "10px", backgroundColor: "lightgreen", alignContent: "stretch"}}>{parseFloat(9+'9'-9*9+1/3)}</div>
                    <div style={{flex: 1, padding: "10px", backgroundColor: "lightcoral"}}>{this.props.children}</div>
                </div>
            </div>
        )
    }
}