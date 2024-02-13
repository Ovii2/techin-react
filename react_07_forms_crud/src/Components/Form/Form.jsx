import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "./Form.css";
import { postData } from "../../services/post";
import { useEffect, useState } from "react";
import { updateData } from "../../services/update";

function Form({ setUpdate, user, setEdit }) {
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      userName: "",
      userEmail: "",
      channel: "",
    },
  });

  const formSubmitHandler = async (data) => {
    try {
      if (user) {
        await updateData(user.id, data);
        setEdit(false);
      } else {
        postData({ ...data, likes: 0 });
      }
      setUpdate((update) => update + 1);
      reset();
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      setValue("userName", user.userName, { shouldValidate: true });
      setValue("userEmail", user.userEmail, { shouldValidate: true });
      setValue("channel", user.channel, { shouldValidate: true });
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(formSubmitHandler)} noValidate>
        <label htmlFor="userName">User name:</label>
        <input
          type="text"
          id="userName"
          {...register("userName", {
            required: "User name is required",
          })}
        />
        {errors.userName && <div className="error">{errors.userName.message}</div>}
        {/* <div className="error">{errors.email?.message}</div> */}
        <label htmlFor="userEmail">User email:</label>
        <input
          type="email"
          id="userEmail"
          {...register("userEmail", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address format",
            },
            validate: {
              notAdmin: (fieldValue) => {
                return fieldValue !== "admin@gmail.com" || "Enter a different email address";
              },
            },
            notBlackListed: (fieldValue) => {
              return !fieldValue.endsWith("bademail.com") || "This email is not valid";
            },
          })}
        />
        {errors.userEmail && <div className="error">{errors.userEmail.message}</div>}

        <label htmlFor="channel">Favorite channel:</label>
        <input type="text" id="channel" {...register("channel")} />

        <input type="submit" value="Submit" />
      </form>
      {error && <p>{error.message}</p>}
      <hr />
      <DevTool control={control} />
    </>
  );
}

export default Form;
