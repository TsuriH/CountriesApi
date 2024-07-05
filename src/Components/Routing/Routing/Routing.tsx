import { CountryDetails } from "../../Countries/CountryDetails/CountryDetails";
import { Main } from "../../Layout/Main/Main";
import "./Routing.css";
import { Routes, Route, useParams } from "react-router-dom"

interface RoutingProps {
    isDarkMode: boolean;
}

export function Routing(props: RoutingProps): JSX.Element {

    const { name } = useParams()

    return (
        <Routes>
            <Route path="/" element={<Main isDarkMode={props.isDarkMode} />} />
            <Route path={`:name`} element={<CountryDetails />} />
        </Routes>

    );
}


