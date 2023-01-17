import React from "react";
import CardRobot from "./CardRobot";

const CardRobotList=({robots})=>{
    return(
        <div>
            {
                robots.map((item,i)=>{
                    return <CardRobot key={robots[i].id} name={robots[i].name} email={robots[i].email} username={robots[i].username} id={robots[i].id}/>
                })
            }
        </div>
    );

}

export default CardRobotList;