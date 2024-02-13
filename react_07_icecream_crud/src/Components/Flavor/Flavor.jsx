import { updateData } from "../../services/update";
import "./Flavor.css";

function Flavor({ flavor, setUpdate }) {
  const { flavor: iceFlavor, color, fontColor, count, id } = flavor;

  const counterHandler = async () => {
    await updateData(id, { count: count + 1 });
    setUpdate((update) => update + 1);
  };

  return (
    <button
      className="ice-button"
      style={{ backgroundColor: color, color: fontColor }}
      onClick={() => counterHandler(flavor.id)}
    >
      {iceFlavor}
    </button>
  );
}

export default Flavor;
