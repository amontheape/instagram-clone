import React from "react";
const actionIcons = ['heart-outline', 'chatbubble-outline', 'paper-plane-outline'];

const Post = ({ userImg, user, postImg, likeImg, likeUser, likesNumber }) => (
    <div class="post">
		<div class="topo">
			<div class="usuario">
				<img src={userImg} alt="user profile"/>
				{user}
			</div>
			<div class="acoes">
				<ion-icon name="ellipsis-horizontal" />
			</div>
		</div>

		<div class="conteudo">
			<img src={postImg} alt="post" />
		</div>

        <div class="fundo">
			<div class="acoes">
				<div>
					{
						actionIcons.map((iconName) => <ion-icon name={iconName} />)
					}
				</div>
				<div>
					<ion-icon name="bookmark-outline" />
				</div>
			</div>

			{ Number(likesNumber) > 0 && (
				<div class="curtidas">
					<img src={likeImg} alt="a person who liked the post" />
					<div class="texto">
						Curtido por <strong>{likeUser}</strong>
						{ Number(likesNumber) > 2
							? (<> e <strong>{`outras ${likesNumber} pessoas`}</strong></>)
							: ''
						}
					</div>
				</div>
			)}
		</div>
	</div>
);

export default Post;