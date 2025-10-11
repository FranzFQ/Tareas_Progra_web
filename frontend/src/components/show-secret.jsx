export default function ShowSecret() {
  return (
    <div className="showsecret">
      <form action="">
        <input
          type="text"
          className="secret"
          placeholder="put your key here for show"
        />
        <button className="show-secret">show a secret</button>
      </form>
    </div>
  );
}
