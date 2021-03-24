import { useState } from 'react';
import './Page.scss';
import Entete from "./Entete.jsx";
import ListeProjets from "./ListeProjets.jsx"

export default function Page() {

    const etatProjet = useState({});

  return (
    <div className="Page">
        <Entete/>
        <section className="contenuPrincipal">
          <div className="Apropos" id="Apropos">
            <div className="titre">
              <h2>Kevin Ponce Melendez</h2>
              <h3>___________________________________________________________</h3>
            </div>
            <p>Finissant en multimédia. Créatif, curieux et très intéressé de l’informatique. <br/> Je voudrais continuer de développer mes compétences et mettre en pratique celles que j’ai présentement au service d’une équipe professionnelle.</p>
          </div>
            <ListeProjets etatProjet={etatProjet} />
            <div className="contacts" id="contacts">
              <h3>Pour me contacter</h3>
              <ul className="listecontact">
                <li>Par Telephone : (438) 878-9215</li>
                <li>Par Courriel : kevinjosemelendez@hotmail.com</li>
              </ul>
            </div>
      </section>
    </div>
  );
}
