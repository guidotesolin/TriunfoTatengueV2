const dateToString = (addedDate) => {
  const actualDateInt = parseInt(Date.now());
  const dateAux = Date.parse(addedDate);
  const difInMs = actualDateInt - dateAux;
  const msPerDay = 24 * 60 * 60 * 1000;
  const difInDays = Math.ceil(difInMs / msPerDay);
  let difAsString;
  if (difInDays < 30) {
    if (difInDays === 1) {
      difAsString = "Añadido hoy";
    } else {
      difAsString = `Añadido hace ${difInDays} días`;
    }
  } else if (difInDays < 365) {
    const months = parseInt(difInDays / 30);
    if (difInDays < 60) {
      difAsString = "Añadido hace un mes";
    } else {
      difAsString = `Añadido hace ${months} meses`;
    }
  } else if (difInDays < 730) {
    difAsString = "Añadido hace un año";
  } else {
    const years = parseInt(difInDays / 365);
    difAsString = `Añadido hace ${years} años`;
  }
  return difAsString;
};

export default dateToString;
