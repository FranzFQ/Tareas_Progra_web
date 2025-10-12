import { useState } from "react";
import { useForm } from "react-hook-form";
import { RevealSecret } from "../apis/keys.api";

export default function ShowSecret() {
  const [secret, setSecret] = useState(undefined);
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const response = await RevealSecret(data.key);
    if (response.secret) {
      setSecret(response.secret);
    } else {
      setSecret(response.error);
    }
  });

  return (
    <div className="showsecret">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="secret"
          placeholder="put your key here for show"
          {...register("key", { required: true })}
        />
        <button className="show-secret" type="submit">
          show a secret
        </button>
      </form>
      {secret && (
        <div className="showsecret">
          <h1 className="subtitle">The secret in the key is:</h1>
          <label htmlFor="" className="key">
            {secret}
          </label>
        </div>
      )}
    </div>
  );
}
