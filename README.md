# InternshipCourse_3

New node project.
`npm init -y`

Add TS.
`tsc --init`

Adding dependencies.
`npm install <dep_name> <--save-dev>`

Compile the code & add a compiler watcher.
`tsc --watch`

Run the code straight from the \*.ts files using ts-node.
`ts-node ./src/index.ts`

# Curriculum

1. Typescript ()

- setup
- compile
- run the code
- types
- classes
- reiterate all JS theory

# Homework

Create a new Node project using Typescript to save info regarding students and their exam grades in the terminal:

- Build a menu so that:

  - A new student can be added (save/store the student with name, class number, and a unique identifier in a file of the \*.json type).
    > E.G.: `students.json`
  - A new exam grade can be added for an existing student (save/store the grade along the subject name in another file of the \*.json type).
    > E.G.: `grades.json`
  - A list of all the grades of an existing student can be retrieved and printed to the console.

- Helpful libraries:

  - [inquirer.js](https://www.npmjs.com/package/inquirer)
  - [uuid](https://www.npmjs.com/package/uuid)
  - fs - it's already part of Node.js

- Try to wrap everything with async/await instead of using promises or callbacks.
