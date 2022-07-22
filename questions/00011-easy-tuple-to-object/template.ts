/**
 * 2022-07-22
 * term:type
 * ideation:
 * First get each element of T and use is as the property key name of the new type
 * The value is the K
 * https://stackoverflow.com/questions/59187941/whats-the-tnumber-mean-in-typescript-code
 * 又有点忘了in是啥了。。
 */
type TupleToObject<T extends readonly any[]> = { [ K in T[number]]: K }
