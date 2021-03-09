import './Entete.scss';


export default function Entete(props) {

    return (
        <header className="Entete">
            <img src="images-projets/Projet06.gif" alt="" className="logo"/>
            <ul className="navPrincipale">
                <li>À Propos</li>
                <li>Projets </li>
                <li>Contact</li>
            </ul>
        </header>
    );
}
