/**
 * 2022-07-21
 * term:type alias; type objects, mapped types, lookup types
 * ideation:
 *  This challenge is the opposite of 04 MyPick
 *  The example ·type TodoPreview = MyOmit<Todo, 'description' | 'title'>· is to create a new type TodoPreview from interface Todo
 *  by apply MyOmit generic.
 *
 *  MyOmit is a generic type which takes two inputs: T and K. The new type will exclude all keys that K provides.
 *  https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#key-remapping-in-mapped-types
 *  For the input to the generic: We need to get all properties keys from Todo(T) and make sure K is a subset of all those keys of T so we use `extends keyof T`
 *  keyof T: all public property names of T
 *
 *  extends: the extends keyword to denote constraint 限制, 即 K 只能是 T 的 public properties names 中的值.
 *  Now we know e.g. T has title, description, and completed property names. K can be any one or some of title, description and completed. Consider K as an array ['title', 'description'. 'completed']
 *
 *  For the output to the generic: We want an object. We want the object property name is to exclude any key K provides that also T has,
 *  so we use Exclude<outer, inner>: exclude inner from outer
 *  https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers
 *  The value is easy enough to be T[P].
 *
 *  Ref: https://ghaiklor.github.io/type-challenges-solutions/en/medium-omit.html
 */
type MyOmit<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] }
