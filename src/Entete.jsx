import './Entete.scss';


export default function Entete(props) {

    return (
        <header className="Entete">
            <img src="images-projets/Projet06.gif" alt="" className="logo"/>
            <ul className="navPrincipale">
                <li><a href="#Apropos">À Propos</a></li>
                <li><a href="#ListeProjets">Projets</a></li>
                <li><a href="#Contacts">Contact</a></li>
            </ul>
        </header>
    );
}
