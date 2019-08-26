import { ObjectWithKeysOf, ObjectWithType } from './index'

type FooBar = {
  foo: string
  bar: string
}

const stringObject: ObjectWithType<string> = {
  foo1: 'foobar',
  foo2: 'foobar'
}

const keysFrom: ObjectWithKeysOf<FooBar, string> = {
  foo: 'foobar',
  bar: 'foobar'
}

export { stringObject, keysFrom }
