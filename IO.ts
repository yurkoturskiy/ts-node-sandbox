// read / write localStorage

import { fromNullable, Option } from "fp-ts/lib/Option";

const getItem = (key: string): IO<Option<string>> => () =>
  fromNullable(localStorage.getItem(key));

const setItem = (key: string, value: string): IO<void> => () =>
  localStorage.setItem(key, value);

// get current time
const now: IO<number> = () => new Date().getTime();

// write to console
const log = (s: unknown): IO<void> => () => console.log(s);
