import logo from "../assets/img/logo.png";

export default function Navbar(){
    return (
      <div class="navbar">
        <div class="container">
          <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="separador"></div>
            <img src={logo} />
          </div>

          <div class="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
          </div>

          <div class="instagram-mobile">
            <img src="./src/assets/img/logo.png" />
          </div>
  
          <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div class="icones">
            {iconName.map((name) => <ion-icon name={name}></ion-icon> )}
          </div>

          <div class="icones-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
        </div>
      </div>
    )
}

const iconName = ['paper-plane-outline', 'compass-outline', 'heart-outline', 'person-outline'];