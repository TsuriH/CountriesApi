import { useParams } from "react-router";
import { Routing } from "../../Routing/Routing/Routing";
import { Header } from "../Header/Header";
import "./Layout.css";
import { useState } from "react";

export function Layout(): JSX.Element {
    const [darkMode, SetDarkMode] = useState(true)

    const changeMode = () => {
        SetDarkMode(!darkMode)
    }
    return (
        <div className="Layout">
            <header >
                <Header
                    darkMode={() => changeMode()}
                    isDarkMode={darkMode}
                />
            </header>

            <main>
                <Routing
                    isDarkMode={darkMode} />
            </main>

        </div>
    );
}
