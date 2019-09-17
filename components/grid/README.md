---
category: Components
type: Layout
title: Grid
---

Wrapper components to determine the structure of an App.

## API

### ✔️ Grid

The `Grid` component is a styled div that both `Grid.Row` and `Grid.Col` inherit from.

| Status | Property | Description              | Type                                  | Default  | Version |
| :----: | -------- | ------------------------ | ------------------------------------- | -------- | ------- |
|   ✔️   | `align`  | Determines flex position | `string: center, end, start, stretch` | `center` |         |

### ✔️ Grid.Row

_`Grid.Row` extends the `Grid` API._

The `Grid.Row` component is used to determine Rows in a Grid.

| Status | Property  | Description                    | Type                                                                    | Default | Version |
| :----: | --------- | ------------------------------ | ----------------------------------------------------------------------- | ------- | ------- |
|   ✔️   | `gutter`  | Spacing between Cols (px)      | `number`                                                                | `0`     |         |
|   ✔️   | `justify` | Determines horizontal position | `string: center, end, space-around, space-between, space-evenly, start` | `start` |         |

### ✔️ Grid.Col

_`Grid.Col` extends the `Grid` API._

The `Grid.Col` component is used to determine Cols in a Row. Must be in a `Row` component.

| Status | Property | Description                                               | Type     | Default | Version |
| :----: | -------- | --------------------------------------------------------- | -------- | ------- | ------- |
|   ✔️   | `span`   | Number of 'cells' that a Col will occupy (24 total cells) | `number` | `24`    |         |
|   ✔️   | `xs`     | span of Col when page is <576px                           | `number` | -       |         |
|   ✔️   | `sm`     | span of Col when page is >=576px                          | `number` | -       |         |
|   ✔️   | `md`     | span of Col when page is >=728px                          | `number` | -       |         |
|   ✔️   | `lg`     | span of Col when page is >=992px                          | `number` | -       |         |
|   ✔️   | `xl`     | span of Col when page is >=1200px                         | `number` | -       |         |
|   ✔️   | `xxl`    | span of Col when page is >=1600px                         | `number` | -       |         |
