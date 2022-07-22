/**
 * 2022-07-22
 * term:type
 * ideation:
 */
type First<T extends any[]> = T extends [] ? never : T[0]
