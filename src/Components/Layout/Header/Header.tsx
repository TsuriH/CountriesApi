import "./Header.css";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeadrProps {
    darkMode: Function;
    isDarkMode: boolean;
}

export function Header(props: HeadrProps): JSX.Element {


    return (
        <div className={`Header`} style={{
            backgroundColor: props.isDarkMode ? "" : "white",
            color: props.isDarkMode ? "" : "black"
        }} >

            <h2 >Where in the world?</h2>

            <button
                className={props.isDarkMode ? "" : "mode-color"} onClick={() => props.darkMode()}
            >
                <FontAwesomeIcon icon={faMoon} className="font-awesome-moon" />
                <p>{props.isDarkMode ? "White Mode" : "Dark Mode"}</p>

            </button>

        </div>
    );
}
