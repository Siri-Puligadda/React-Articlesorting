# React + TypeScript + Vite
- npm i
- npm run dev

## Project Description
React application called "Article Sorting" that displays a list of articles and allows users to sort them based on upvotes and publication date. Some core functionalities have already been implemented, but the application is not complete. Application requirements are detailed below, and the finished application must pass all of the unit tests.

### Requirements
1. The Articles component takes an array of articles as a prop. Each element of this array is an object with three properties: a string title, a number upvotes, and a string date in the format YYYY-MM-DD.
2. By default, the articles should be displayed in a table ordered by the number of upvotes in descending order.
3. Clicking on the "Most Upvoted" button should reorder and display the articles by the number of upvotes in descending order.
4. Clicking on the "Most Recent" button should reorder and display the articles by date in descending order.
5. You can assume that each article has a unique publish date and number of upvotes.
