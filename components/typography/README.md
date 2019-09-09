---
category: Components
type: General
title: Typography
---

Basic text components such as headings, body text, and more.

## API

### ❌ Typography

The `Typography` component is meant to be used as a wrapper component for multiple `Heading`, `Paragraph`, and `Text` components.

| Status | Property        | Description                        | Type                                                   | Default   | Version                                                       |
| :----: | --------------- | ---------------------------------- | ------------------------------------------------------ | --------- | ------------------------------------------------------------- |
|   ✔️   | `blockquote`    | Blockquote style                   | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ✔️   | `code`          | Code style                         | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ❌   | `copyable`      | Can copy text                      | `boolean`                                              | `false`   |                                                               |
|   ✔️   | `disable`       | Disables text                      | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ❌   | `editable`      | Can edit text                      | `boolean`                                              | `false`   |                                                               |
|   ❌   | `ellipsis`      | Hides overflow with ellipsis       | `boolean`                                              | `false`   |                                                               |
|   ✔️   | `emphasis`      | Bold style                         | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ✔️   | `mark`          | Mark style                         | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ✔️   | `pre`           | Wraps in pre tag                   | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ✔️   | `strikethrough` | Strikethrough style                | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ✔️   | `strong`        | Bold style                         | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ❌   | `type`          | Text type (affects coloring, etc.) | `string: primary, secondary, success, warning, danger` | `primary` |                                                               |
|   ✔️   | `underline`     | Underlines text                    | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |

### ❌ Typography.Heading

The `Heading` component is meant to be used for all heading text. (h1-h6, titles, etc.)

| Status | Property        | Description                        | Type                                                   | Default   | Version                                                       |
| :----: | --------------- | ---------------------------------- | ------------------------------------------------------ | --------- | ------------------------------------------------------------- |
|   ✔️   | `blockquote`    | Blockquote style                   | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ✔️   | `code`          | Code style                         | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ❌   | `copyable`      | Can copy text                      | `boolean`                                              | `false`   |                                                               |
|   ✔️   | `disable`       | Disables text                      | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ❌   | `editable`      | Can edit text                      | `boolean`                                              | `false`   |                                                               |
|   ❌   | `ellipsis`      | Hides overflow with ellipsis       | `boolean`                                              | `false`   |                                                               |
|   ✔️   | `emphasis`      | Bold style                         | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ✔️   | `mark`          | Mark style                         | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ✔️   | `pre`           | Wraps in pre tag                   | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ✔️   | `level`         | Heading level (h1-h6)              | `number: 1, 2, 3, 4, 5, 6`                             | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ✔️   | `strikethrough` | Strikethrough style                | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ✔️   | `strong`        | Bold style                         | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ❌   | `type`          | Text type (affects coloring, etc.) | `string: primary, secondary, success, warning, danger` | `primary` |                                                               |
|   ✔️   | `underline`     | Underlines text                    | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |

### ❌ Typography.Paragraph

The `Paragraph` component is meant to be used for multiline text. (content, descriptions, etc.)

| Status | Property        | Description                        | Type                                                   | Default   | Version                                                       |
| :----: | --------------- | ---------------------------------- | ------------------------------------------------------ | --------- | ------------------------------------------------------------- |
|   ✔️   | `blockquote`    | Blockquote style                   | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ✔️   | `code`          | Code style                         | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ❌   | `copyable`      | Can copy text                      | `boolean`                                              | `false`   |                                                               |
|   ✔️   | `disable`       | Disables text                      | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ❌   | `editable`      | Can edit text                      | `boolean`                                              | `false`   |                                                               |
|   ❌   | `ellipsis`      | Hides overflow with ellipsis       | `boolean`                                              | `false`   |                                                               |
|   ✔️   | `emphasis`      | Bold style                         | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ✔️   | `mark`          | Mark style                         | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ✔️   | `pre`           | Wraps in pre tag                   | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ✔️   | `strikethrough` | Strikethrough style                | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ✔️   | `strong`        | Bold style                         | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ❌   | `type`          | Text type (affects coloring, etc.) | `string: primary, secondary, success, warning, danger` | `primary` |                                                               |
|   ✔️   | `underline`     | Underlines text                    | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |

### ❌ Typography.Text

The `Text` component is meant to be used for single-line text. (buttons, menus, etc.)

| Status | Property        | Description                        | Type                                                   | Default   | Version                                                       |
| :----: | --------------- | ---------------------------------- | ------------------------------------------------------ | --------- | ------------------------------------------------------------- |
|   ✔️   | `blockquote`    | Blockquote style                   | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ✔️   | `code`          | Code style                         | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ❌   | `copyable`      | Can copy text                      | `boolean`                                              | `false`   |                                                               |
|   ✔️   | `disable`       | Disables text                      | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ❌   | `editable`      | Can edit text                      | `boolean`                                              | `false`   |                                                               |
|   ❌   | `ellipsis`      | Hides overflow with ellipsis       | `boole`                                                | `false`   |                                                               |
|   ✔️   | `emphasis`      | Bold style                         | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ✔️   | `mark`          | Mark style                         | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ✔️   | `pre`           | Wraps in pre tag                   | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ✔️   | `strikethrough` | Strikethrough style                | `boole`                                                | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ✔️   | `strong`        | Bold style                         | `boole`                                                | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
|   ❌   | `type`          | Text type (affects coloring, etc.) | `string: primary, secondary, success, warning, danger` | `primary` |                                                               |
|   ✔️   | `underline`     | Underlines text                    | `boolean`                                              | `false`   | [`v0.0.1`](https://github.com/clutchd/ui/releases/tag/v0.0.1) |
