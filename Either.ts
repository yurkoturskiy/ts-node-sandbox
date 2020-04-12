import { Either, left, right } from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/pipeable";

const setArray = (): number[] => Array(4).fill(1);

const validate = (data: number[]): Either<Error, number[]> =>
  data.length === 4 ? right(data) : left(new Error("Wrong format"));

const parseArray = (): Either<Error, number[]> => pipe(setArray(), validate);

parseArray();
