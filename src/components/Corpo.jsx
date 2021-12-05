import { Post, Story, Suggestion, User } from "./sub_components";
import { links, posts, stories, suggestions, user } from "../data";

export default function Corpo() {
    return (
        <div class="corpo">
        <div class="esquerda">
          <div class="stories">

            {
              stories.map((storyInfo) => <Story {...storyInfo} />)
            }

            <div class="setinha">
              <ion-icon name="chevron-forward-circle" />
            </div>
          </div>

          <div class="posts">
            
            {
              posts.map((postInfo) => <Post {...postInfo} />)
            }

          </div>
        </div>

        <div class="sidebar">
            <User {...user}/>
        

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {
              suggestions.map((suggestionInfo) => <Suggestion {...suggestionInfo} />)
            }

          </div>

          <div class="links">

            {
              links.map((link, index) => {
                if(index === 0) return link;
                return ` • ${link}`;
              })
            }

          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
      </div>
    )
}