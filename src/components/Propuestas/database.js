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
      image: "https://i.imgur.com/X2kULgl.png",
      imageAlt: "Reforma estatuto",
      date: "2020-07-10",
    },
    {
      id: 1,
      title: "Protocolo asamblea",
      epigraph:
        "El objetivo del presente es el de efectuar recomendaciones generales para la realización de la ASAMBLEA GENERAL de la AGRUPACIÓN TRIUNFO TATENGUE, en un ámbito de seguridad colectiva, siguiendo las indicaciones desarrolladas",
      text: [
        "Las Asambleas de socios, en el marco del Estatuto vigente, deben realizarse en forma presencial, y es objetivo del presente documento definir las acciones necesarias para prevenir y gestionar de manera adecuada los riesgos generales del COVID-19 respecto de todos los participantes del presente evento.",
      ],
      link: "/propuestas_protocolo",
      image: "https://i.imgur.com/gDLdxV8.jpg",
      imageAlt: "Protocolo asamblea",
      date: "2021-01-04",
    },
  ];
  propuestas.sort((a, b) => (b.id > a.id ? 1 : a.id > b.id ? -1 : 0));
  return propuestas;
};

export default getPropuestas;
