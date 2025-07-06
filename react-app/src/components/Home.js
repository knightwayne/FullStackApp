import React from "react";
import PropTypes from 'prop-types';


export class Home extends React.Component{
    constructor(props)
    {
        super();
        this.state ={
            age: props.initialAge, //age->state
            status: 0
        };

        for(let i=0;i<=3000;i+=600)
        setTimeout(()=>{this.setState({status: this.state.staus=i/300})},i)
    }
    
    ageButton()
    {
        this.setState({
            age: this.state.age+=2
        })
    }

    getNodeData()
    {
        fetch('http://localhost:8000/react')
        .then(res=>res.text())
        .then(text=>{
            this.setState({
                text: text
            })
        })
    }

    postNodeData()
    {
        fetch('http://localhost:8000/react', {
            method: 'POST',
            // headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({numVar: '11'})
            headers: { 'Content-Type': 'text/plain' },
            body: '11'
        })
        .then(res=>res.text())
        .then(text=>{
            this.setState({
                numSq: parseInt(text)
            })
        })
    }

    // changeNameInHome(){
    //     this.props.func2("Changed Header Name") 
    // //calling the parent from child like this -> pass a function from parent to child, and then call in child
    // }

    render(){
        console.log("current age: "+this.state.age)
        return(
            <div>
                <div style={{ width: '50%', float: 'left' }}>
                    <p>Prop Name: {this.props.name}</p>
                    <p>Prop  Age: {this.state.age}</p>
                    <p>Status: {this.state.status}</p>
                </div>
                 <div style={{ width: '50%', float: 'right' }}>
                    <p>Prop Hobbies:</p>
                    <ul>
                        {this.props.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
                    </ul>
                </div>
                <button className="btn btn-primary" onClick={this.ageButton.bind(this)}>Increase Button</button>
                <hr/>
                <div>
                    <div style={{ width: '50%', float: 'left' }}>
                        <p>GET from Node Server: {this.state.text}</p>
                        <button className="btn btn-primary" onClick={this.getNodeData.bind(this)}>Get text from Node Server</button>
                        <hr />
                    </div>
                    <div style={{ width: '50%', float: 'right' }}>
                        {/* <form action="/post" method="post"></form>
                        <input type="number"/> */}
                        <p>POST from Node Server: {this.state.numSq}</p>
                        <button className="btn btn-primary" onClick={this.postNodeData.bind(this)}>Post x to be Squared</button>  
                        <hr />    
                    </div>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={this.props.func1}>Give Alert</button>
                    <hr/>
                    {/* <button className="btn btn-primary" onClick={this.changeNameInHome.bind(this)}>Change Header Name</button> */}
                    <button className="btn btn-primary" onClick={() => this.props.func2("Changed Header Name")}>Change Header Name</button>
                </div>

                </div>
        )
    }
}

// export function Home()
// {
//     let content = ""
//     if(true){
//         content = "Hello Dynamic"
//     }
//     return(
//         <>
//             <div>Home Component - Created using a Function not a Class</div>
//             {content}
//         </>
//     ) 
    
// }

Home.PropTypes = {
    name: PropTypes.string,
    hobbies: PropTypes.array,
}