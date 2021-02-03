import img0 from "../../assets/images/Opinion/id0.jpg";

const getOpinion = () => {
  const opinion = [
    {
      id: 0,
      title: "Las inferiores y su importancia",
      author: "Eneas Cencha",
      text:
        "En Triunfo Tatengue sabemos que las divisiones inferiores son el pilar de todos los clubes de futbol, por lo que consideramos que deben ser tomadas con mayor consideración desde el club, queremos que Unión sea un modelo para los demás equipos, como por ejemplo lo son Vélez, Lanús entre tantos otros.",
      link: "/opinion_las_inferiores_y_su_importancia",
      image: img0,
      imageAlt: "Eneas Cencha, inferiores",
      date: "2021-01-12",
    },
  ];
  opinion.sort((a, b) => (b.id > a.id ? 1 : a.id > b.id ? -1 : 0));
  return opinion;
};

export default getOpinion;
