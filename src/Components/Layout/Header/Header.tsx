import "./Header.css";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function Header(): JSX.Element {
    return (
        <div className="Header">

            <h2>Where in the world?</h2>

            <button className="mode-color">
                <FontAwesomeIcon icon={faMoon} className="font-awesome-moon"/>
                <p>Dark Mode</p>
            </button>

        </div>
    );
}
