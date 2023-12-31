type keys = "token" | "userId";

export function getFromObject(obj: Object, key: keys) {
  return Object.getOwnPropertyDescriptor(obj, key)?.value as string;
}

export function addToObject(obj: Object, key: keys, value: string) {
  Object.defineProperty(obj, key, {
    value: value,
    writable: false,
  });
}
