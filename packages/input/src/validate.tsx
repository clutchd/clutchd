function validateName(name?: string) {
  if (name?.toUpperCase() === "isindex") {
    console.warn(
      "The name attribute is not allowed to have a value of `isindex`."
    );
  }
}

function validateValue(value?: string) {}

export { validateName };
