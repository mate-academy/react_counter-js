# React counter

> Here is [the working version](https://mate-academy.github.io/react_counter/)

You have the `App` with a title and 3 buttons. Implement `addOne` and `add100` functions so the buttons work the next way:

- `Add 1` button calls `addOne` method to add `1` to the `count`;
- `Add 100` button calls `add100` method to add `100` to the `count`;
- `Increase` button calls `addOne` and then, if count was divisible by 5, it additionally calls `add100`.

So the third button should count like this:
`101, 102, 103, 104, 105, 206, 207, 208, 209, 210, 311 ...`

## Instructions
- Install Prettier Extesion and use this [VSCode settings](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) to enable format on save.
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://andriy-kostiuk.github.io/react_counter-js/) and add it to PR description.
