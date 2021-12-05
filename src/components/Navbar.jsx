import { nav_icons } from "../data/nav_icons";
import logo from "../assets/img/logo.png";

export default function Navbar(){
    return (
      <div class="navbar">
        <div class="container">
          <div class="logo">
            <ion-icon name="logo-instagram" />
            <div class="separador"></div>
            <img src={logo} alt="instagram logo"/>
          </div>

          <div class="logo-mobile">
            <ion-icon name="logo-instagram" />
          </div>

          <div class="instagram-mobile">
            <img src={logo} alt="instagram logo" />
          </div>
  
          <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div class="icones">
            {nav_icons.map((name) => <ion-icon name={name} /> )}
          </div>

          <div class="icones-mobile">
            <ion-icon name="paper-plane-outline" />
          </div>
        </div>
      </div>
    )
}

