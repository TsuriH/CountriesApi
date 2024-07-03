import "./CountryCard.css";

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
                <p><span>Population:</span>  {props.population}</p>
                <p><span>Region: </span> {props.region}</p>
                <p><span>Capital:</span>  {props.capital}</p>
            </div>

        </div>
    );
}
