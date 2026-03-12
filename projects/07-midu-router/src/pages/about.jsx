import { Link } from "../components/link";

const i18n = {
  en: {
    title: "About",
    button: "Go to home page",
    description:
      "Hi! My name is Osvaldo and I am creating a clone of React Router.",
  },
  es: {
    title: "About",
    button: "Ir al Home",
    description:
      "¡Hola! Me llamo Osvaldo y estoy creando un clone de React Router.",
  },
};

const useI18n = (lang) => {
  return i18n[lang] || i18n.en;
};

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang);
  return (
    <>
      <h1>{i18n.title}</h1>
      <img src="/vite.svg" alt="Logo" />
      <p>{i18n.description}</p>
      <Link to={"/"}>{i18n.button}</Link>
    </>
  );
}
