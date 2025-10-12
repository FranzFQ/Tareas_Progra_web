import { useState } from "react";
import { useForm } from "react-hook-form";
import { HideKey } from "../apis/keys.api";

export default function AddSecret() {
  const [key, setKey] = useState(undefined);
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const response = await HideKey(data.text);
    setKey(response.key);
  });

  return (
    <div className="addsecret">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="add-input"
          placeholder="Add your secret"
          {...register("text", { required: true })}
        />
        <button className="submit" type="submit">
          create key
        </button>
        {key && (
          <div className="AddSecret">
            <h1 className="subtitle">Your key is:</h1>
            <label htmlFor="" className="key">
              {key}
            </label>
          </div>
        )}
      </form>
    </div>
  );
}
