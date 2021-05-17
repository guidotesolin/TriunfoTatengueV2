import img0 from "../../assets/images/Propuestas/id0.jpg";
import img1 from "../../assets/images/Propuestas/id1.jpg";
import img2 from "../../assets/images/Propuestas/id2.jpg";
import img3 from "../../assets/images/Propuestas/id3.jpg";

const getPropuestas = () => {
  const propuestas = [
    {
      id: 0,
      title: "Nuestro ante proyecto de reforma de estatuto",
      epigraph:
        "Hinchas y socios de UNIÓN, desde Triunfo Tatengue queremos presentarles nuestro Proyecto de reforma de Estatuto, tal como habíamos prometido oportunamente.",
      text: [
        "Es un trabajo hecho a conciencia, con muchas horas de estudio, consultando a profesionales y observando los Estatutos de instituciones prestigiosas y exitosas. Mantenemos la identidad que caracteriza al Club social y deportivo más importante de la región.",
        "En total trabajamos en 154 Artículos. Los cuales se encuentran desarrollados en el link",
      ],
      link: "/propuestas_estatuto",
      image: img0,
      imageAlt: "Reforma estatuto",
      date: "2020-07-11",
    },
    {
      id: 1,
      title: "Protocolo para la realización de la asamblea",
      epigraph:
        "El objetivo del presente es la propuesta de la Agrupación Triunfo Tatengue con recomendaciones generales para la realización de la ASAMBLEA GENERAL, en un ámbito de seguridad colectiva, siguiendo las indicaciones desarrolladas",
      text: [
        "Las Asambleas de socios, en el marco del Estatuto vigente, deben realizarse en forma presencial, y es objetivo del presente documento definir las acciones necesarias para prevenir y gestionar de manera adecuada los riesgos generales del COVID-19 respecto de todos los participantes del presente evento.",
      ],
      link: "/propuestas_protocolo",
      image: img1,
      imageAlt: "Protocolo asamblea",
      date: "2021-01-05",
    },
    {
      id: 2,
      title: "Tribuna Leopoldo Jacinto Luque",
      epigraph: "Un homenaje más que merecido",
      text: [
        "Estimados tatengues, les queremos hacer llegar la nota presentada el día de hoy en el club proponiendo que se cambie el nombre de la tribuna hoy llamada Cándido Pujato por Leopoldo Jacinto Luque para honrarlo en modo de agradecimiento a todo lo brindado a nuestra querida institución",
      ],
      link: "/propuestas_tribuna_leopoldo_luque",
      image: img2,
      imageAlt: "Leopoldo Jacinto Luque",
      date: "2021-02-17",
    },
    {
      id: 3,
      title: "Nuestro proyecto futbolistico",
      epigraph:
        "Contamos con un gran equipo de trabajo para el Fútbol Profesional y Amateur de Unión estamos orgullosos de presentarlos.",
      text: [
        "Es una estructura moderna, como existe y se trabaja con grandes éxitos en los Clubes de Europa, además con gente de reconocido profesionalismo y pertenencia en Union.",
      ],
      link: "/propuestas_proyecto_futbolistico",
      image: img3,
      imageAlt: "Gugnali, Bottaniz y Roteta",
      date: "2021-05-17",
    },
  ];
  propuestas.sort((a, b) => (b.id > a.id ? 1 : a.id > b.id ? -1 : 0));
  return propuestas;
};

export default getPropuestas;
