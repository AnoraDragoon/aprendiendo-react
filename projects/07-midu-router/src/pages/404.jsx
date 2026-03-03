import { Link } from "../components/link";

export default function Page404() {
  return (
    <>
      <h1>This is not fine</h1>
      <div>
        <img
          src="https://midu.dev/images/this-is-fine-404.gif"
          alt="Gif del perro This is not Fine"
        />
      </div>
      <Link to="/">Volver a la Home</Link>
    </>
  );
}
