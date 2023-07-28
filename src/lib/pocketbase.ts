import PocketBase from 'pocketbase'

export function createInstance() {
  return new PocketBase('http://3.0.46.6:80')
}

export const pb = createInstance()