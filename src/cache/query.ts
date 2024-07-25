import cache from '.';
import { DynamicKeyType, Key } from './keys';

export enum TYPES {
  LIST = 'list',
  STRING = 'string',
  HASH = 'hash',
  ZSET = 'zset',
  SET = 'set',
}
export async function keyExists(...keys: string[]) {
  return (await cache.exists(keys)) ? true : false;
}
export async function setValue(
  key: Key | DynamicKeyType,
  value: string | number,
  expireAt: Date | null = null,
) {
  if (expireAt) return cache.set(key, `${value}`, {
    PX: expireAt.getTime()
  });
  else return cache.set(key, `${value}`);
}
export async function getValue(key: Key | DynamicKeyType) {
  return cache.get(key);
}
export async function delByKey(key: Key | DynamicKeyType) {
  return cache.del(key);
}
export async function setJson(
  key: Key | DynamicKeyType,
  value: Record<string, unknown>,
  expireAt: Date | null = null,
) {
  const json = JSON.stringify(value);
  return await setValue(key, json, expireAt);
}
export async function getJson<T>(key: Key | DynamicKeyType) {
  const type = await cache.type(key);
  if (type !== TYPES.STRING) return null;

  const json = await getValue(key);
  if (json) return JSON.parse(json) as T;

  return null;
}
/**todo */