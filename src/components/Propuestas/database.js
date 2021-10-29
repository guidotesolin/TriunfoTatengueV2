import img0 from "../../assets/images/Propuestas/id0.jpg";
import img1 from "../../assets/images/Propuestas/id1.jpg";
import img2 from "../../assets/images/Propuestas/id2.jpg";
import img3 from "../../assets/images/Propuestas/id3.jpg";
import img4 from "../../assets/images/Propuestas/id4.jpg";
import img5 from "../../assets/images/Propuestas/id5.jpg";

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
    {
      id: 4,
      title: "Amnistía General Societaria",
      epigraph:
        "El día 30 de septiembre presentamos en Mesa de entradas del Club un pedido formal para lograr una Amnistía General Societaria con el fin de que el Socio pueda sentirse respaldado de las difíciles épocas que la Sociedad tuvo que afrontar.",
      text: [
        "Esta nota apunta a que los hinchas puedan regularizar su situación societaria que se vio afectada por la situación económica del país y la pandemia que nos privó de ir a la cancha durante 18 meses.",
      ],
      link: "/amnistia",
      image: img4,
      imageAlt: "Amnistía",
      date: "2021-09-30",
    },
    {
      id: 5,
      title: "Obras: Palcos sobre Cándido Pujato",
      epigraph:
        "Entre los numerosos proyectos de nuestro equipo de Infraestructura se destacan los Palcos Norte ubicados sobre la calle Cándido Pujato.",
      text: [
        "Serán 88 lugares para 10 personas cada uno, contarán con un equipamiento de frigobar, TV LED, mesada de cocina y estará equipado con las butacas teatro. También estarán los Palcos VIP que contarán con sanitarios de uso exclusivo.",
      ],
      link: "/palcos_norte",
      image: img5,
      imageAlt: "Palcos",
      date: "2021-10-29",
    },
  ];
  propuestas.sort((a, b) => (b.id > a.id ? 1 : a.id > b.id ? -1 : 0));
  return propuestas;
};

export default getPropuestas;
