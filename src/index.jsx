import ReactDOM from "react-dom";

import {Corpo, Footer, Navbar} from "./components";

import logo from "./assets/img/logo.png";

const iconNames = ['paper-plane-outline', 'compass-outline', 'heart-outline', 'person-outline'];

function App() {
    return (
        <div>
            <Navbar logo={logo} iconNames={iconNames}/>
            <Corpo />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.root'));