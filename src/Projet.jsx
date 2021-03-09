import './Projet.scss';


export default function Projet(props) {
  return (
    <li className="Projet">
      <img src={'images-projets/' + props.id + '.gif'} alt=""/>
      <div className="info">
        <p className="titre">{props.titre}</p>
        <p className="desc">{props.desc}</p>
      </div>
    
  </li>
  );
}
