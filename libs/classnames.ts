export default function classnames(...args: (string | undefined)[]): string {
  let classnames: string = "";

  args.forEach((element) => {
    if (element == undefined || element == "") {
      return;
    }

    classnames += `${element.toString()} `;
  });

  return classnames;
}
