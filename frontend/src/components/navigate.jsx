export default function Navigate() {
  const goToHide = () => {
    window.location.href = "/hide";
  };

  const goToShow = () => {
    window.location.href = "/show";
  };

  return (
    <div className="navigate">
      <button className="hide-button" onClick={goToHide}>
        add a secret
      </button>
      <button className="show-button" onClick={goToShow}>
        show a secret
      </button>
    </div>
  );
}
