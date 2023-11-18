function excuseGenerator() {
  let who = ["The dinosaur", "My dad", "His pig", "My uncle"];

  let action = ["ate", "peed", "crushed", "broke"];

  let what = ["my homework", "the phone", "the bicycle"];

  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my breakfast",
    "while I was writing"
  ];
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
}
console.log(excuseGenerator());
