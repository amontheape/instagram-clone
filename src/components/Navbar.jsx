export default function Navbar({logo, iconNames}){
    return (
      <div class="navbar">
        <div class="container">
          <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="separador"></div>
            <img src={logo} alt="instagram logo"/>
          </div>

          <div class="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
          </div>

          <div class="instagram-mobile">
            <img src={logo} alt="instagram logo" />
          </div>
  
          <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div class="icones">
            {iconNames.map((name) => <ion-icon name={name}></ion-icon> )}
          </div>

          <div class="icones-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
        </div>
      </div>
    )
}

