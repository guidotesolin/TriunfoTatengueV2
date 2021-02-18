const dateToString = (addedDate) => {
  const today = new Date();
  const added = new Date(addedDate);
  today.setHours(0, 0, 0, 0);
  added.setHours(0, 0, 0, 0);
  const diffInMs = today - added;
  const diffInHours = Math.round(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.ceil(diffInHours / 24);
  let difAsString;
  if (diffInDays < 30) {
    if (diffInDays === 1) {
      difAsString = "Añadido hoy";
    } else if (diffInDays === 2) {
      difAsString = "Añadido ayer";
    } else {
      difAsString = `Añadido hace ${diffInDays} días`;
    }
  } else if (diffInDays < 365) {
    const months = parseInt(diffInDays / 30);
    if (diffInDays < 60) {
      difAsString = "Añadido hace un mes";
    } else {
      difAsString = `Añadido hace ${months} meses`;
    }
  } else if (diffInDays < 730) {
    difAsString = "Añadido hace un año";
  } else {
    const years = parseInt(diffInDays / 365);
    difAsString = `Añadido hace ${years} años`;
  }
  return difAsString;
};

export default dateToString;
