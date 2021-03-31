import './ListeProjets.scss';
import Projet from './Projet.jsx';
import tabProjets from './data/Projets.json';

export default function ListeProjets() {
  return (
    <div className="ListeProjets" id="ListeProjets">
    <ul>
      {/* On va générer les produits à partir de la 
        structure obtenue du fichier JSON des produits */}
      
      {tabProjets.map(pr => 
       <Projet etatProjet={pr.etatProjet} key={pr.id} titre={pr.titre} id={pr.id} imgOnglet={pr.imgOnglet} desc={pr.desc} texte={pr.texte} />
      )}
    </ul>
  </div>
  );
}
