/**
 * 2022-07-20
 * term:type alias; type objects, mapped types, lookup types
 * ideation:
 *  For generics, can consider T and K are inputs, like what can be passed into;
 * whatever on the right-hand side of the = is the actual type and is an object.
 *
 *  The example ·type TodoPreview = MyPick<Todo, 'title' | 'completed'>· is to create a new type TodoPreview from interface Todo
 *  by apply MyPick generic.
 *
 *  MyPick is a generic type which takes two inputs: T and K. T is Todo, K is union type 'title' and/or 'completed'
 *
 *  https://stackoverflow.com/questions/57337598/in-typescript-what-do-extends-keyof-and-in-keyof-mean
 *  For the input to the generic: We need to get all properties keys from Todo(T) and make sure K is a subset of all those keys of T so we use `extends keyof T`
 *  keyof T: all public property names of T
 *
 *  extends: the extends keyword to denote constraint 限制, 即 K 只能是 T 的 public properties names 中的值.
 *  Now we know e.g. T has title, description, and completed property names. K can be any one or some of title, description and completed. Consider K as an array ['title', 'description'. 'completed']
 *
 *  For the output to the generic: We want an object. We want the object property name is anything from K, as K is not an object anymore, we need to use the index signature,
 *  thus using in keyword. The value is easy enough to be T[P].
 *
 */
type MyPick<T, K extends keyof T> = { [P in K]: T[P] }
