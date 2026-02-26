import { Link } from "../components/link";

export function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <img src="/vite.svg" alt="Logo" />
      <p>¡Hola! Me llamo Osvaldo y estoy creando un clone de React Router.</p>
      <Link to={"/"}>Ir al Home</Link>
    </>
  );
}
