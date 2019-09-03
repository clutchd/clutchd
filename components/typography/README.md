---
category: Components
type: General
title: Typography
---

Basic text components such as headings, body text, and more.

## API

### ❌ Typography

The `Typography` component is meant to be used as a wrapper component for multiple `Heading`, `Paragraph`, and `Text` components.

| Status | Property        | Description                        | Type                                                   | Default   |
| :----: | --------------- | ---------------------------------- | ------------------------------------------------------ | --------- |
|   ✔️   | `blockquote`    | Blockquote style                   | `boolean`                                              | `false`   |
|   ✔️   | `code`          | Code style                         | `boolean`                                              | `false`   |
|   ❌   | `copyable`      | Can copy text                      | `boolean`                                              | `false`   |
|   ✔️   | `disable`       | Disables text                      | `boolean`                                              | `false`   |
|   ❌   | `editable`      | Can edit text                      | `boolean`                                              | `false`   |
|   ❌   | `ellipsis`      | Hides overflow with ellipsis       | `boolean`                                              | `false`   |
|   ✔️   | `mark`          | Mark style                         | `boolean`                                              | `false`   |
|   ✔️   | `pre`           | Wraps in pre tag                   | `boolean`                                              | `false`   |
|   ✔️   | `strikethrough` | Strikethrough style                | `boolean`                                              | `false`   |
|   ✔️   | `strong`        | Bold style                         | `boolean`                                              | `false`   |
|   ❌   | `type`          | Text type (affects coloring, etc.) | `string: primary, secondary, success, warning, danger` | `primary` |
|   ✔️   | `underline`     | Underlines text                    | `boolean`                                              | `false`   |

### ❌ Typography.Heading

The `Heading` component is meant to be used for all heading text. (h1-h6, titles, etc.)

| Status | Property        | Description                        | Type                                                   | Default   |
| :----: | --------------- | ---------------------------------- | ------------------------------------------------------ | --------- |
|   ✔️   | `blockquote`    | Blockquote style                   | `boolean`                                              | `false`   |
|   ✔️   | `code`          | Code style                         | `boolean`                                              | `false`   |
|   ❌   | `copyable`      | Can copy text                      | `boolean`                                              | `false`   |
|   ✔️   | `disable`       | Disables text                      | `boolean`                                              | `false`   |
|   ❌   | `editable`      | Can edit text                      | `boolean`                                              | `false`   |
|   ❌   | `ellipsis`      | Hides overflow with ellipsis       | `boolean`                                              | `false`   |
|   ✔️   | `mark`          | Mark style                         | `boolean`                                              | `false`   |
|   ✔️   | `pre`           | Wraps in pre tag                   | `boolean`                                              | `false`   |
|   ✔️   | `level`         | Heading level (h1-h6)              | `number: 1, 2, 3, 4, 5, 6`                             | `false`   |
|   ✔️   | `strikethrough` | Strikethrough style                | `boolean`                                              | `false`   |
|   ✔️   | `strong`        | Bold style                         | `boolean`                                              | `false`   |
|   ❌   | `type`          | Text type (affects coloring, etc.) | `string: primary, secondary, success, warning, danger` | `primary` |
|   ✔️   | `underline`     | Underlines text                    | `boolean`                                              | `false`   |

### ❌ Typography.Paragraph

The `Paragraph` component is meant to be used for multiline text. (content, descriptions, etc.)

| Status | Property        | Description                        | Type                                                   | Default   |
| :----: | --------------- | ---------------------------------- | ------------------------------------------------------ | --------- |
|   ✔️   | `blockquote`    | Blockquote style                   | `boolean`                                              | `false`   |
|   ✔️   | `code`          | Code style                         | `boolean`                                              | `false`   |
|   ❌   | `copyable`      | Can copy text                      | `boolean`                                              | `false`   |
|   ✔️   | `disable`       | Disables text                      | `boolean`                                              | `false`   |
|   ❌   | `editable`      | Can edit text                      | `boolean`                                              | `false`   |
|   ❌   | `ellipsis`      | Hides overflow with ellipsis       | `boolean`                                              | `false`   |
|   ✔️   | `mark`          | Mark style                         | `boolean`                                              | `false`   |
|   ✔️   | `pre`           | Wraps in pre tag                   | `boolean`                                              | `false`   |
|   ✔️   | `strikethrough` | Strikethrough style                | `boolean`                                              | `false`   |
|   ✔️   | `strong`        | Bold style                         | `boolean`                                              | `false`   |
|   ❌   | `type`          | Text type (affects coloring, etc.) | `string: primary, secondary, success, warning, danger` | `primary` |
|   ✔️   | `underline`     | Underlines text                    | `boolean`                                              | `false`   |

### ❌ Typography.Text

The `Text` component is meant to be used for single-line text. (buttons, menus, etc.)

| Status | Property        | Description                        | Type                                                   | Default   |
| :----: | --------------- | ---------------------------------- | ------------------------------------------------------ | --------- |
|   ✔️   | `blockquote`    | Blockquote style                   | `boolean`                                              | `false`   |
|   ✔️   | `code`          | Code style                         | `boolean`                                              | `false`   |
|   ❌   | `copyable`      | Can copy text                      | `boolean`                                              | `false`   |
|   ✔️   | `disable`       | Disables text                      | `boolean`                                              | `false`   |
|   ❌   | `editable`      | Can edit text                      | `boolean`                                              | `false`   |
|   ❌   | `ellipsis`      | Hides overflow with ellipsis       | `boole`                                                | `false`   |
|   ✔️   | `mark`          | Mark style                         | `boolean`                                              | `false`   |
|   ✔️   | `pre`           | Wraps in pre tag                   | `boolean`                                              | `false`   |
|   ✔️   | `strikethrough` | Strikethrough style                | `boole`                                                | `false`   |
|   ✔️   | `strong`        | Bold style                         | `boole`                                                | `false`   |
|   ❌   | `type`          | Text type (affects coloring, etc.) | `string: primary, secondary, success, warning, danger` | `primary` |
|   ✔️   | `underline`     | Underlines text                    | `boolean`                                              | `false`   |
