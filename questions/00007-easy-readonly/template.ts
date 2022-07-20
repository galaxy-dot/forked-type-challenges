/**
 * 2022-07-21
 * term:type alias; readonly property modifier
 * ideation:
 * add readonly modifier to key
 * key namely K be a subset of T's public property names
 * TypeScript additionally has a readonly modifier for properties.

interface Rx {
  readonly x: number;
}
let rx: Rx = { x: 1 };
rx.x = 12; // error

 *  Ref: https://ghaiklor.github.io/type-challenges-solutions/en/easy-readonly.html
 */
type MyReadonly<T> = { readonly [K in keyof T]: T[K] }
