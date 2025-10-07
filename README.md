# React counter

> Here is [the working version](https://mate-academy.github.io/react_counter/)

You have the `App` with a title and 3 buttons. Implement `addOne` and `add100` functions so the buttons work the next way:

- `Add 1` button calls `addOne` method to add `1` to the `count`;
- `Add 100` button calls `add100` method to add `100` to the `count`;
- `Increase` button calls `addOne` and then, if count is divisible by 5, it additionally calls `add100`.

So the third button should count like this:
`101, 102, 103, 104, 105, 206, 207, 208, 209, 210, 311 ...`

У вас є `App` із заголовком та 3 кнопками. Реалізуйте функції `addOne` та `add100`, щоб кнопки працювали наступним чином:

- Кнопка `Add 1` викликає метод `addOne` для додавання `1` до `count`;
- Кнопка `Add 100` викликає метод `add100` для додавання `100` до `count`;
- Кнопка `Increase` викликає `addOne`, а потім, якщо count ділиться на 5, вона додатково викликає `add100`.

Отже, третя кнопка повинна рахувати так:
`101, 102, 103, 104, 105, 206, 207, 208, 209, 210, 311 ... `

## Instructions
- Install Prettier Extesion and use this [VSCode settings](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) to enable format on save.
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://ElinaMrachkovska.github.io/react_counter-js/) and add it to PR description.
