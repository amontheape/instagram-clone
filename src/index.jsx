import ReactDOM from "react-dom";

import {Corpo, Footer, Navbar} from "./components";

function App() {
    return (
        <div>
            <Navbar />
            <Corpo />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.root'));