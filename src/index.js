import ReactDOM from "react-dom";

import Navbar from "./components/Navbar";
import Corpo from "./components/Corpo";

function App() {
    return (
        <div>
            <Navbar />
            <Corpo />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.root'));