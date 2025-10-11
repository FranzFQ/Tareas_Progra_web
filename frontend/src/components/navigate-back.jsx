export default function NavigateBack() {
  const back = () => {
    window.location.href = "/";
  };

  return (
    <div className="navigate-back">
      <button className="back" onClick={back}>
        Back to welcome
      </button>
    </div>
  );
}
