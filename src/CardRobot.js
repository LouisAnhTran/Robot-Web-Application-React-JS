import React from 'react';

const CardRobot = (props) => {
    let {id,name,email,username}=props;
    return (
        <div className="bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5 text-center">
            <img src={`https://robohash.org/${id}?200x200`} alt="" />
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default CardRobot;
