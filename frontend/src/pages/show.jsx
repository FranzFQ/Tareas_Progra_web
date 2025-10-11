import NavigateBack from "../components/navigate-back";
import ShowSecret from "../components/show-secret";

export default function Show() {
  return (
    <div className="show">
      <h1 className="add">show a secret from a key</h1>
      <ShowSecret/>
      <NavigateBack />
    </div>
  );
}
