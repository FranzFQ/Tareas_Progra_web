import AddSecret from "../components/add-secret";
import NavigateBack from "../components/navigate-back";

export default function Hide() {
  return (
    <div className="hide">
      <h1 className="add">Add your secret here</h1>
      <AddSecret />
      <NavigateBack />
    </div>
  );
}
