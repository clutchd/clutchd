import { Grid, GridCell } from "@clutchd/grid";
import { DecorativeBlock, Showcase } from "~/components";

function GridShowcase() {
  return (
    <Showcase
      title="Grid"
      description="A grid container that powers various layouts."
      pkg="@clutchd/grid"
      pkgType="layout"
      stable
      rsc
    >
      <Grid cols="grid-cols-3" rows="grid-rows-4" className="gap-4">
        <GridCell asChild colSpan="col-span-2">
          <DecorativeBlock />
        </GridCell>
        <GridCell asChild>
          <DecorativeBlock />
        </GridCell>
        <GridCell asChild rowSpan="row-span-2">
          <DecorativeBlock />
        </GridCell>
        <GridCell asChild>
          <DecorativeBlock />
        </GridCell>
        <GridCell asChild>
          <DecorativeBlock />
        </GridCell>
        <GridCell asChild rowSpan="row-span-2" colSpan="col-span-2">
          <DecorativeBlock />
        </GridCell>
        <GridCell asChild>
          <DecorativeBlock />
        </GridCell>
      </Grid>
    </Showcase>
  );
}

export { GridShowcase };
