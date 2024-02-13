import { toast } from "react-toastify";
import { postData } from "../../services/post";
import "./Form.css";
import { useForm } from "react-hook-form";
import { updateData } from "../../services/update";

function Form({ setUpdate, flavors }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      flavor: "",
      price: "",
      color: "#ff0000",
      fontColor: "#ffffff",
    },
  });

  const formSubmitHandler = async (data) => {
    try {
      await postData({
        ...data,
        key: data.flavor.trim().toLowerCase(),
        price: parseInt(data.price),
        count: 0,
      });
      setUpdate((update) => update + 1);
      reset({ flavor: "", price: "", color: "", fontColor: "#ffffff" });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const resetCounter = () => {
    flavors.map((iceCream) => {
      const update = async () => await updateData(iceCream.id, { count: 0 });
      update();
    });
    setUpdate((update) => update + 1);
  };

  return (
    <>
      <form className="ice-cream-form" noValidate onSubmit={handleSubmit(formSubmitHandler)}>
        <h2>Add a New Flavor</h2>
        <div className="form-group-flavor">
          <label htmlFor="flavor">Flavor</label>
          <input
            type="text"
            name="flavor"
            id="flavor"
            placeholder="Add a flavor"
            {...register("flavor", { required: "Flavor is required" })}
          />
        </div>
        <div className="form-group-price">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            min="1"
            placeholder="Enter price"
            {...register("price")}
          />
        </div>
        <div className="form-group-bgc">
          <label htmlFor="color">Background Color</label>
          <input type="color" id="color" {...register("color")} />
        </div>
        <div className="form-group-text">
          <label htmlFor="fontColor">Text Color</label>
          <input type="color" id="fontColor" {...register("fontColor")} />
        </div>
        <div className="buttons-container">
          <button type="submit" className="submit-button">
            Add Flavor
          </button>
          <button onClick={() => resetCounter()}>Reset</button>
        </div>
      </form>
    </>
  );
}

export default Form;
