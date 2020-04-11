import { pipe } from "fp-ts/lib/pipeable";

const log = (label) => (text) => {
  console.log(label, text);
  return text;
};

const logging = (text) => pipe(log("one")(text), log("two"));

logging("someeee");
