import { Link } from "../components/link";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es la página principal. Crear un reactrouter desde cero.</p>
      <Link to={"/about"}>Ir a Sobre nosotros</Link>
    </>
  );
}
