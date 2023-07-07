const fsp = require("fs").promises;
const { Suite } = require("benchmark");
const twMerge = require("tailwind-merge").twMerge;
const prev = require("@clutchd/twx").twx;
const clutchd = require("../dist").twx;

let results = {};

function bench(name, ...args) {
  console.log(`\n# ${name}`);
  new Suite()
    .add("twMerge", () => twMerge.apply(twMerge, args))
    .add("prev", () => prev.apply(prev, args))
    .add("clutchd", () => clutchd.apply(clutchd, args))
    .on("cycle", (e) => {
      results[name] == null
        ? (results[name] = { [e.target.name]: e.target.hz })
        : (results[name][e.target.name] = e.target.hz);
      console.log(" " + e.target);
    })
    .run();
}

async function main() {
  bench("mix-blend", "mix-blend-normal mix-blend-multiply");
  await fsp
    .writeFile("./twx.benchmark.json", JSON.stringify(results))
    .catch((e) => console.error(e));
}

main();
