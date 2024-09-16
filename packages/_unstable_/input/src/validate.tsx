function validateName(name?: string) {
  if (name?.toUpperCase() === "ISINDEX") {
    console.warn(
      "The name attribute is not allowed to have a value of `isindex`.",
    );
  }
}

function validateReadOnlyRequired(readOnly?: boolean, required?: boolean) {
  if (readOnly && required) {
    console.warn(
      "The `required` attribute is not permitted on inputs with the `readonly` attribute.",
    );
  }
}

// function validateType(defaultType: string, type?: string) {
//   if (!type) {
//     return;
//   }

//   if (type != defaultType) {
//     console.warn(
//       `The \`type\` attribute must be ${defaultType} on this input.`
//     );
//   }
// }

export { validateName, validateReadOnlyRequired };
