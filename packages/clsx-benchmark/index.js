const { Suite } = require("benchmark");
const classnames = require("classnames");
const classcat = require("classcat");
const { clsx: og } = require("clsx");
const { cx } = require("classix");
const { clsx } = require("@clutchd/clsx");

async function bench(name, ...args) {
  // format name
  name = name.toLowerCase();
  console.log(name);

  // store results
  const results = [];

  return new Suite()
    .add("classcat*   ", () => classcat.apply(classcat, [args]))
    .add("classnames  ", () => classnames.apply(classnames, args))
    .add("classix*  ", () => cx.apply(cx, args))
    .add("og", function () {
      og.apply(og, args);
    })
    .add("clsx", function () {
      clsx.apply(clsx, args);
    })
    .on("cycle", function (e) {
      results.push({
        name: e.target.name,
        hz: e.target.hz,
        "margin of error": `±${Number(e.target.stats.rme).toFixed(2)}%`,
        "runs sampled": e.target.stats.sample.length,
      });
    })
    .on("complete", function () {
      const lowestHz = results.slice().sort((a, b) => a.hz - b.hz)[0].hz;

      console.table(
        results
          .map((result) => ({
            ...result,
            hz: Math.round(result.hz).toLocaleString(),
            numTimesFaster:
              Math.round((10 ** 2 * result.hz) / lowestHz) / 10 ** 2,
          }))
          .reduce((acc, { name, ...cur }) => ({ ...acc, [name]: cur }), {})
      );
      console.log("Fastest is " + this.filter("fastest").map("name"));
    })
    .run({
      async: false,
    });
}

bench("Strings", "foo", "", "bar", "baz", "bax", "bux");

bench(
  "Objects",
  { foo: true, bar: true, bax: true, bux: false },
  { baz: true, bax: false, bux: true }
);

bench("Arrays", ["foo", "bar"], ["baz", "bax", "bux"]);

bench("Nested Arrays", ["foo", ["bar"]], ["baz", ["bax", ["bux"]]]);

bench(
  "Nested Arrays w/ Objects",
  ["foo", { bar: true, bax: true, bux: false }],
  ["bax", { bax: false, bux: true }]
);

bench("Mixed", "foo", "bar", { bax: true, bux: false }, [
  "baz",
  { bax: false, bux: true },
]);

bench(
  "Mixed (Bad Data)",
  "foo",
  "bar",
  undefined,
  null,
  NaN,
  () => {},
  { bax: true, bux: false, 123: true },
  ["baz", { bax: false, bux: true, abc: null }, {}]
);
