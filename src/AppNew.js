import React from "react";
import { robots } from "./robot_list";
import CardRobotList from "./CardRobotList";
import SearchBox from "./SearchBox";

class AppNew extends React.Component{
    constructor(){
        super();
        this.state={robots:robots,searchfield:""}
    }

    // Change the conventional method of creating method of class to the followig method, it is React Syntax and Rule of thump, we need to get used to
    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value})
    }

    render(){
        const filteredRobots=this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className="tc">
                <h1>RobotFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardRobotList robots={filteredRobots}/>
            </div>
        );
    }
    

}

export default AppNew; 
