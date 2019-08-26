/**
 *
 */
type ObjectWithType<Type> = {
  [k: string]: Type
}

/**
 *
 */
type ObjectWithKeysOf<Haystack, Type> = {
  [key in keyof Haystack]: Type
}

export { ObjectWithType, ObjectWithKeysOf }
