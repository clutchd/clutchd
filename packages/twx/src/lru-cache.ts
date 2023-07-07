// https://github.com/dcastil/tailwind-merge/blob/main/src/lib/lru-cache.ts

let cacheSize = 0;
let max = 500;
let old = new Map<string, any>();
let cache = new Map<string, any>();

function update(key: string, value: any) {
  cache.set(key, value);
  cacheSize++;
  if (cacheSize > max) {
    cacheSize = 0;
    old = cache;
    cache = new Map();
  }
}

export function get(key: string) {
  let value = cache.get(key);

  if (value !== undefined) {
    return value;
  }
  if ((value = old.get(key)) !== undefined) {
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
