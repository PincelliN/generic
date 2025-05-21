let names: Array<string> = ["Max", "Anna"];

type DataStore<T> = {
  [key: string]: T;
};

const obj: DataStore<string> = {
  name: "NIk",
  lastName: "Pin",
  //age:'30'no
  age: "30",
};

const obj1: DataStore<number> = {
  age: 11,
  hight: 1.8,
};

function merge<T>(a: T, b: T) {
  return [a, b];
}

const number = merge(1, 2);

function mergeObj<T extends Object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

const result = mergeObj({ userName: "Nik" }, { age: 33 });
