import { CountryDetails } from "../../Countries/CountryDetails/CountryDetails";
import { Main } from "../../Layout/Main/Main";
import "./Routing.css";
import { Routes, Route, useParams } from "react-router-dom"



export function Routing(): JSX.Element {

    const {name} = useParams()

    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path={`:name`} element={<CountryDetails/>} />
        </Routes>

    );
}


