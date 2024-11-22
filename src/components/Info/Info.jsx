import "./Info.css";
import { FaWindowClose } from "react-icons/fa";

export default function Info({ onClose }) {
  return (
    <div className="info-main">
      <button className="info-close" onClick={onClose}>
        <FaWindowClose size={35} />
      </button>
      <h2 className="info-title">Consciência Negra</h2>
      <p className="info-p">
        Trabalho que aborda a presença negra na área da computação, trazendo à
        luz as grandes contribuições de profissionais negros. <br />
        Esse trabalho foi desenvolvido com a tecnologia ReactJS e muita
        dedicação.
      </p>
      <span className="info-span">Desenvolvido por Maria Victória</span>
    </div>
  );
}
