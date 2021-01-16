const dateToString = (date) => {
  const msPerDay = 1000 * 60 * 60 * 24;
  const actualDate = new Date();
  actualDate.setHours(0, 0, 0);
  const added = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  const diffInDays = parseInt((actualDate - added) / msPerDay);
  var TiempoTranscurrido;
  var UnidadTranscurrido;
  let today = false;
  if (diffInDays < 30) {
    TiempoTranscurrido = diffInDays;
    if (diffInDays === 1) {
      today = true;
    } else {
      UnidadTranscurrido = "días";
    }
  } else if (diffInDays < 365) {
    TiempoTranscurrido = parseInt(diffInDays / 30);
    if (diffInDays < 60) {
      UnidadTranscurrido = "mes";
    } else {
      UnidadTranscurrido = "meses";
    }
  } else if (diffInDays < 730) {
    TiempoTranscurrido = 1;
    UnidadTranscurrido = "año";
  } else {
    TiempoTranscurrido = parseInt(diffInDays / 365);
    UnidadTranscurrido = "años";
  }
  if (today) {
    return <p>Añadido hoy</p>;
  } else {
    return (
      <p>
        Añadido hace {TiempoTranscurrido} {UnidadTranscurrido}
      </p>
    );
  }
};

export default dateToString;
