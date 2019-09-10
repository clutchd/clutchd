---
category: Components
type: General
title: Button
---

General button component that can be used to trigger events.

## API

| Status | Property   | Description                                                            | Type                                                   | Default   | Version |
| :----: | ---------- | ---------------------------------------------------------------------- | ------------------------------------------------------ | --------- | ------- |
|   ❌   | `block`    | Changes button to block-level element, stretchs to width of parent     | `boolean`                                              | `false`   |         |
|   ❌   | `disabled` | Disabled style and state                                               | `boolean`                                              | `false`   |         |
|   ❌   | `href`     | Url for link buttons                                                   | `string`                                               | `-`       |         |
|   ❌   | `icon`     | Sets button icon, see: [Icon](src/components/icon/README.md) component | `string`                                               | `-`       |         |
|   ❌   | `loading`  | Loading state                                                          | `string`                                               | `-`       |         |
|   ❌   | `shape`    | Sets button shape                                                      | `string: circle, oval, rounded, squared`               | `rounded` |         |
|   ❌   | `size`     | Sets button size                                                       | `string: sm, default, lg`                              | `default` |         |
|   ❌   | `type`     | Button type (affects coloring, etc.)                                   | `string: primary, secondary, success, warning, danger` | `primary` |         |
|   ❌   | `onClick`  | Function to call when button is clicked                                | `(event) => void`                                      | `-`       |         |
