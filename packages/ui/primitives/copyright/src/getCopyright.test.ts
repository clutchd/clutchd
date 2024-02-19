import { getCopyright } from ".";

test("get copyright", () => {
  const og = getCopyright();
  const raw = `© ${new Date().getFullYear()}`;
  expect(og).toStrictEqual(raw);
});
