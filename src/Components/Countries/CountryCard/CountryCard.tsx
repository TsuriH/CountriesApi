import "./CountryCard.css";
import brazilFlag from "../../../data.json"

interface CountryCardProps {
    flag: string;
    countryName: string;
    population: number;
    region: string;
    capital?: string;
}

export function CountryCard(props: CountryCardProps): JSX.Element {


    return (
        <div className="CountryCard">

            <div className="card-flag">
                <img src={props.flag} alt="" />
            </div>

            <div className="card-info">
                <h2>{props.countryName}</h2>
                <p>Population: {props.population}</p>
                <p>Region:  {props.region}</p>
                <p>Capital:  {props.capital}</p>
            </div>

        </div>
    );
}
