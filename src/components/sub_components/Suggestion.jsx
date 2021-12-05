import React from "react";

const Suggestion = ({ userImg, nickName, reason}) => (
        <div class="sugestao">
            <div class="usuario">
                <img src={userImg} alt="user profile" />
                <div className="texto">
                    <div className="nome">{nickName}</div>
                    <div className="razao">{reason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
	</div>
);

export default Suggestion;