import App from "./App";
import React from "react";

class Greetingclass extends React.Component {

    constructor(props){
        super(props);
        this.state={ currentTime : new Date().toLocaleTimeString() }
    }

    componentDidMount(){
        console.log("componentDidMount")
        this.interValId = setInterval(()=> {
            this.setState({currentTime : new Date().toLocaleTimeString()})} ,1000)
        } 
    componentWillUnmount(){
        console.log("component will unmount");
        clearInterval(this.interValId)
    }

    render() {
            
        return ( 
            <div>
            <h1> This is greetingclass </h1>
            <h2> Current Time : {this.state.currentTime} </h2>
        </div>  
        );
    }
}
export default Greetingclass;