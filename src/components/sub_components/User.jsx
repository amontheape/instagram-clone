import React from "react";

const User = ({ userImg, nickName, userName}) => (
    <div className="usuario">
        <img src={userImg} alt="user profile"/>
        <div class="texto">
			<strong>{nickName}</strong>
			{userName}
		</div>
    </div>
);

export default User;