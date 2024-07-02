import "./CountryCard.css";
import brazilFlag from "../../../data.json"

interface CountryCardProps {

}

export function CountryCard(props: CountryCardProps): JSX.Element {


    return (
        <div className="CountryCard">

            <div className="card-flag">
                <img src={brazilFlag[1].flag} alt="" />
            </div>

            <div className="card-info">
                <h2>Brazil</h2>
                <p>Population: 206,135,893</p>
                <p>Region: Americas</p>
                <p>Capital: Brasília</p>
            </div>

        </div>
    );
}
