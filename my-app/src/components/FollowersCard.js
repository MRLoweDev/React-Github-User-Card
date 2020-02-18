import React from "react";

const FollowersCard = ({followers, img}) => {
    return (
        <div className="card">

            <img src={img} alt="user"/>
            <p className="name"> {followers}</p>
            <p className="name">BIO {}</p>

        </div>
    )
}

export default FollowersCard; 