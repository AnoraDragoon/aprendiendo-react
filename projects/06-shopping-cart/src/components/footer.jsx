import "./footer.css";

export function Footer({ filters }) {
  const data = JSON.stringify(filters, null, 2);
  return (
    <footer className="footer">
      {data}
      {/* <h4>
        Prueba técnica de React ⚛️
        <span>@anoradragoonlord</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5> */}
    </footer>
  );
}
