let cacheSize = 0;
let cache = new Map<string, string>();
let previousCache = new Map<string, string>();

function updateCache(key: string, value: any) {
  cache.set(key, value);
  cacheSize++;
  if (cacheSize > 500) {
    cacheSize = 0;
    previousCache = cache;
    cache = new Map();
  }
}

export function cacheGet(key: string) {
  let value = cache.get(key);

  if (value !== undefined) {
    return value;
  }
  if ((value = previousCache.get(key)) !== undefined) {
    updateCache(key, value);
    return value;
  }
}

export function cacheSet(key: string, value: any) {
  if (cache.has(key)) {
    cache.set(key, value);
  } else {
    updateCache(key, value);
  }
}
