import './Projet.scss';
import SimpleModal from "./ModalProjet";


export default function Projet(props) {
  return (
    <li className="Projet">
      <img src={'images-projets/' + props.id + '.gif'} alt=""/>
      <div className="info">
        <p className="titre">{props.titre}</p>
        <p className="desc">{props.desc}</p>
        <SimpleModal id={props.id} texte={props.texte}/>
      </div>
    
  </li>
  );
}
