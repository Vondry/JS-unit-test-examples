# This place is to meant for anyone to submit PR with the change

## 1. Create new branch

-   Create new branch where you will be able to create your code changes
-   `git checkout -b <branch name>`
    -   How to give names to branches: https://medium.com/@abhay.pixolo/naming-conventions-for-git-branches-a-cheatsheet-8549feca2534

## 2. Create new files

Please create 2 new files under where name is in format: `<2 first letters from your firstname><3 first letters from your surname>`. Example:

```
If your name is: Jan Novak

Then create files named like:
- janov.js
- janov.test.js
```

## 3. Code & Test

- In `janov.js` implement function that does something useful
- In `janov.test.js` implement tests for your function (target 100 % coverage)

## 4. Save your code changes

> You can repeat this step as many times as you want

-   Save the changes: `git add .`
-   Create commit `git commit -m <your message>`
    -   How to give names to commits: https://www.conventionalcommits.org/en/v1.0.0/
-   Push the changes: `git push`

## 5. Create PR on GitHub

> Once you are finished with everything and branch was pushed to GitHub

Please check out [GitHub documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request?tool=webui#creating-the-pull-request)
on how to create PR from your branch.
