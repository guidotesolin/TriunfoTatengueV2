import img0 from "../../assets/images/Opinion/id0.jpg";
import img1 from "../../assets/images/Opinion/id1.jpg";

const getOpinion = () => {
  const opinion = [
    {
      id: 0,
      title: "Las inferiores y su importancia",
      author: "Eneas Cencha",
      text: "En Triunfo Tatengue sabemos que las divisiones inferiores son el pilar de todos los clubes de futbol, por lo que consideramos que deben ser tomadas con mayor consideración desde el club, queremos que Unión sea un modelo para los demás equipos, como por ejemplo lo son Vélez, Lanús entre tantos otros.",
      link: "/opinion_las_inferiores_y_su_importancia",
      image: img0,
      imageAlt: "Eneas Cencha, inferiores",
      date: "2021-01-12",
    },
    {
      id: 1,
      title:
        "Marca UNIÓN en Europa: Repaso del viaje por España, Fracia e Italia",
      author: "Leonardo Simonutti",
      text: "Con el fin de relacionarnos con la elite del futbol mundial, además de capacitarnos, aprender y evolucionar personal e institucionalmente, visitamos Clubes, nos reunimos con dirigentes, ex futbolistas, periodistas y socios de nuestro Union de Santa Fe.",
      link: "/resumen_gira_europea",
      image: img1,
      imageAlt: "Europa",
      date: "2021-11-24",
    },
  ];
  opinion.sort((a, b) => (b.id > a.id ? 1 : a.id > b.id ? -1 : 0));
  return opinion;
};

export default getOpinion;
