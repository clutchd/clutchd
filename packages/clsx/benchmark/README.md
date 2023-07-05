## Benchmarks

> Below you will find benchmark results for [Node.js](#node) and [multiple browser](#Browsers) engines.

## Node

These are the results while running this directory's benchmark suite in Node v18.16.1.

> **Note:** The `≠` denotes that the candidate has a different API and is not compatible with `classnames` usage.

```bin
# strings
 classcat ≠     x 10,684,506 ops/sec ±0.96% (89 runs sampled)
 classnames     x 5,074,599 ops/sec ±0.25% (96 runs sampled)
 clsx           x 9,697,680 ops/sec ±0.43% (98 runs sampled)
 clutchd        x 10,739,451 ops/sec ±0.27% (93 runs sampled)

# objects
 classcat ≠     x 7,722,971 ops/sec ±0.34% (97 runs sampled)
 classnames     x 4,698,134 ops/sec ±0.42% (96 runs sampled)
 clsx           x 7,772,173 ops/sec ±0.34% (93 runs sampled)
 clutchd        x 8,544,036 ops/sec ±0.14% (96 runs sampled)

# arrays
 classcat ≠     x 8,151,288 ops/sec ±0.38% (95 runs sampled)
 classnames     x 2,725,778 ops/sec ±0.20% (96 runs sampled)
 clsx           x 7,356,180 ops/sec ±0.38% (93 runs sampled)
 clutchd        x 7,610,502 ops/sec ±1.96% (92 runs sampled)

# nested_arrays
 classcat ≠     x 6,066,085 ops/sec ±0.56% (96 runs sampled)
 classnames     x 1,688,997 ops/sec ±0.57% (97 runs sampled)
 clsx           x 5,916,094 ops/sec ±1.15% (93 runs sampled)
 clutchd        x 5,991,165 ops/sec ±2.20% (91 runs sampled)

# nested_objects
 classcat ≠     x 6,236,417 ops/sec ±0.71% (93 runs sampled)
 classnames     x 2,234,053 ops/sec ±2.44% (90 runs sampled)
 clsx           x 5,789,329 ops/sec ±4.17% (86 runs sampled)
 clutchd        x 6,224,084 ops/sec ±1.72% (90 runs sampled)

# mixed
 classcat ≠     x 6,171,223 ops/sec ±2.17% (88 runs sampled)
 classnames     x 2,920,740 ops/sec ±1.83% (89 runs sampled)
 clsx           x 6,551,352 ops/sec ±2.08% (91 runs sampled)
 clutchd        x 6,686,515 ops/sec ±2.33% (87 runs sampled)

# mixed_bad
 classcat ≠     x 2,129,399 ops/sec ±0.43% (94 runs sampled)
 classnames     x 1,598,619 ops/sec ±0.52% (94 runs sampled)
 clsx           x 2,458,044 ops/sec ±0.94% (95 runs sampled)
 clutchd        x 2,527,282 ops/sec ±0.68% (96 runs sampled)
```
