export default function validateEmpty(message) {
  let validation = false;
  for (var i = 0; i < message.length; i++) {
    const character = message[i];
    if (character !== "") {
      validation = true;
    }
  }
  return validation;
}
