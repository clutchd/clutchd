// import { Card, CardDivider } from "@clutchd/card";
// import { TextInput } from "@clutchd/input";
// import { Grid, GridCol } from "@clutchd/grid";
// import { Label } from "@clutchd/label";
// // import { Lead } from "@clutchd/text";
// import { FlexRow } from "@clutchd/flex";
// import React from "react";
// import { Showcase } from ".";
// import { Lead } from "@clutchd/text";

// function InputShowcase({ color }) {
//   const [generalError, setGeneralError] = React.useState(
//     "An error has occurred!"
//   );
//   const generalInput = React.useRef(null);

//   return (
//     <Showcase title="Input">
//       <Card asChild>
//         <form>
//           <Lead>Input (General)</Lead>
//           <CardDivider />
//           <Label theme={color} content="Dynamic Error">
//             <TextInput
//               theme={color}
//               ref={generalInput}
//               error={generalError}
//               disabled
//               helpText="helloooooo?"
//               onChange={() =>
//                 setGeneralError(
//                   !generalInput.current?.value ? "An error has occurred!" : ""
//                 )
//               }
//               placeholder="Placeholder..."
//             />
//           </Label>
//           <CardDivider />
//           <Label theme={color} content="With Wrapped Label">
//             <TextInput theme={color} />
//           </Label>
//           <CardDivider />
//           <Label theme={color} htmlFor="label_test">
//             With Label Sibling
//           </Label>
//           <TextInput
//             theme={color}
//             id="label_test"
//             helpText="An input with help text"
//           />
//           <CardDivider />
//           <Label theme={color} content="With Help Text">
//             <TextInput theme={color} helpText="An input with help text" />
//           </Label>
//           <CardDivider />
//           <Label theme={color} content="With Placeholder">
//             <TextInput theme={color} placeholder="Placeholder..." />
//           </Label>
//           <CardDivider />
//           <Label theme={color} content="Disabled">
//             <TextInput theme={color} disabled />
//           </Label>
//           <CardDivider />
//           <Label theme={color} content="Read Only">
//             <TextInput theme={color} readOnly />
//           </Label>
//           <CardDivider />
//           <Label theme={color} content="Required" required>
//             <TextInput theme={color} required />
//           </Label>
//           <CardDivider />
//           <Label theme={color} content="Forced Error">
//             <TextInput theme={color} error={"An error has occurred"} />
//           </Label>
//           <CardDivider />
//           <Label theme={color} content="Dynamic Error">
//             <TextInput
//               theme={color}
//               ref={generalInput}
//               error={generalError}
//               onChange={() =>
//                 setGeneralError(
//                   !generalInput.current?.value ? "An error has occurred!" : ""
//                 )
//               }
//             />
//           </Label>
//         </form>
//       </Card>
//       <Card asChild>
//         <form>
//           <Lead>Text Input</Lead>
//           <CardDivider />
//           <Card>
//             <Lead>Flex Layout</Lead>
//             <CardDivider />
//             <FlexRow>
//               <Label theme={color} content="Default">
//                 <TextInput theme={color} />
//               </Label>
//               <CardDivider orientation="vertical" />
//               <Label theme={color} content="With Props">
//                 <TextInput
//                   theme={color}
//                   helpText="A default text input"
//                   placeholder="Placeholder..."
//                 />
//               </Label>
//             </FlexRow>
//           </Card>
//           <CardDivider />
//           <Card>
//             <Lead>Grid Layout</Lead>
//             <CardDivider />
//             <Grid
//               gridCols={1}
//               gridColsSm={2}
//               gapX={"gap-x-12"}
//               gapY={"gap-y-12"}
//             >
//               <GridCol>
//                 <Label theme={color} content="Default">
//                   <TextInput theme={color} />
//                 </Label>
//               </GridCol>
//               <GridCol>
//                 <Label theme={color} content="With Props">
//                   <TextInput
//                     theme={color}
//                     helpText="A default text input"
//                     placeholder="Placeholder..."
//                   />
//                 </Label>
//               </GridCol>
//             </Grid>
//           </Card>
//         </form>
//       </Card>
//     </Showcase>
//   );
// }

// export { InputShowcase };
