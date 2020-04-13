import { Either, left, right } from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/pipeable";

const setArray = (numOfElements: number): number[] =>
  Array(numOfElements).fill(1);

const validate = (data: number[]): Either<Error, number[]> =>
  data.length === 4 ? right(data) : left(new Error("Wrong format"));

const parseArray = (numOfElements: number): Either<Error, number[]> =>
  pipe(setArray(numOfElements), validate);

const a = parseArray(5);
console.log(a);
