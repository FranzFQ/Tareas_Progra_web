export default function AddSecret() {
  return (
    <div className="addsecret">
      <form action="">
        <input type="text" className="add-input" placeholder="Add your secret" />
        <button className="submit" type="submit">
          create a secret
        </button>
      </form>
    </div>
  );
}
