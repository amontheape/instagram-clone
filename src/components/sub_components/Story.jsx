import React from "react";

const Story = ({ img, user }) => (
    <div class="story">
        <div className="imagem">
            <img src={img} alt="story thumbnail" />
        </div>
        <div className="usuario">
            {user}
        </div>
    </div>
);

export default Story;