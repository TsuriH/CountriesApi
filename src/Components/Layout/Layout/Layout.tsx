import { useParams } from "react-router";
import { Routing } from "../../Routing/Routing/Routing";
import { Header } from "../Header/Header";
import "./Layout.css";

export function Layout(): JSX.Element {
        
    return (
        <div className="Layout">
            <header>
                <Header />
            </header>

            <main> 
              <Routing />
            </main>
            
        </div>
    );
}
