export function obsctureEmail(email) {
  const load_email = (letters) => `${letters.join("")}@${domain}`;
  const [nome, domain] = email.split("@");
  let letters = nome.split("");
  const lettersSize = letters.length;
  const lettersSizeSamble = Math.round((20 * lettersSize) / 100); // 20% arredondado
  // Para casos extremos em que o mail tenha apenas um caracter
  if (lettersSize === 1) return load_email(["*", letters[0], "*"]);
  for (let i = lettersSizeSamble; i < lettersSize - lettersSizeSamble; i++) {
    letters[i] = "*";
  }
  return load_email(letters);
}
