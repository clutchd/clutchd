import { default as Field, IField } from "./field";
import { default as Label, ILabel } from "./label";

interface IForm {
  Field: typeof Field;
  Label: typeof Label;
}

const Form = {} as IForm;

Form.Field = Field;
Form.Label = Label;

export { Field, Form, IField, ILabel, Label };
