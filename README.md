# React counter

> Here is [the working version](https://mate-academy.github.io/react_counter/)

## Description

You are given an application with a counter and three buttons.
Your task is to implement the logic for updating the counter.

---

## Buttons behavior

### Add 1

* Calls `addOne`
* Increases the counter by 1

---

### Add 100

* Calls `add100`
* Increases the counter by 100

---

### Increase

* First calls `addOne` (adds 1 to the counter)
* Then checks the updated value:

  * If the new counter value gives remainder 1 when divided by 5, it additionally calls `add100`
  * Otherwise, no additional action is performed

---

## Important note

The condition must be checked after incrementing the counter by 1.

---

## Initial state

```
Count: 0
```

---

## Instructions
- Install Prettier Extesion and use this [VSCode settings](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) to enable format on save.
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://ValyaMeln.github.io/react_counter-js/) and add it to PR description.

