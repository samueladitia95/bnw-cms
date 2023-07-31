import PocketBase from 'pocketbase'

export function createInstance() {
  return new PocketBase('http://13.229.81.3:80')
}

export const pb = createInstance()