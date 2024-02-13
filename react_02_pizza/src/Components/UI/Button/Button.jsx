import "./Button.css";

function Button() {
  const openHour = 12;
  const closeHour = 22;
  const currentHour = 15;
  // const currentHour = new Date().getHours();

  return (
    <div className="button-container">
      {currentHour >= openHour && currentHour < closeHour ? (
        <div>
          <p>
            We're open from {openHour}:00 until {closeHour}:00. Come visit us or order online.
          </p>
          <button type="submit">Order</button>
        </div>
      ) : (
        <p>We are currently closed. We will open at {openHour}:00.</p>
      )}
    </div>
  );
}

export default Button;
