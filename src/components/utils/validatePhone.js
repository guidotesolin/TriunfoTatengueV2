export default function validatePhone(e) {
  const phoneRex = /^[0-9]*$/;
  if (phoneRex.test(e)) {
    return true;
  }
  return false;
}
