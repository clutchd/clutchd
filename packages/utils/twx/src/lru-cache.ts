// https://github.com/dcastil/tailwind-merge/blob/main/src/lib/lru-cache.ts

let cacheSize = 0;
let cache = new Map<string, any>();
let previousCache = new Map<string, any>();

function update(key: string, value: any) {
  cache.set(key, value);
  cacheSize++;
  if (cacheSize > 500) {
    cacheSize = 0;
    previousCache = cache;
    cache = new Map();
  }
}

export function get(key: string) {
  let value = cache.get(key);

  if (value !== undefined) {
    return value;
  }
  if ((value = previousCache.get(key)) !== undefined) {
    update(key, value);
    return value;
  }
}

export function set(key: string, value: any) {
  if (cache.has(key)) {
    cache.set(key, value);
  } else {
    update(key, value);
  }
}
