
## Frontend Technical Test

In this technical you will be using an API to create an interface to allow users to explore the API's data.

The API being used is https://www.fruityvice.com/ which has lots of data about fruit. Below is a list of API calls that will be useful when completing this task.

- /api/fruit/all - get a list of all fruit
- /api/fruit/{ID} - get a fruit by ID
- /api/fruit/{name} - get a fruit by name

# Requirements

1. Display all fruits in a list
    - Show the name of each fruit
    - Show an image for each fruit
    - 

2. Create a page for each fruit
    - When a user clicks on a fruit they should be take to the fruit page
    - Display information about the fruit as per the wireframes
    - When the user clicks "Back to all fruit" they should be taken back to the fruit list
    - The url for each fruit page should be dynamic e.g www.fruit.com/apple should show all the apple information

3. Allow user to sort the fruit
    - When the user clicks the sort button in the header they should be shown the sort options
    - User can sort by nutrition type
    - User can sort high to low or low to high
    - When the user clicks "Confirm sort" they should be shown a list of fruit sorted accordingly
    - When the user clicks "Clear sort" they should be shown the original list of fruit not sorted

4. Create a dynamic sorting URl
    - The sorting information should be in the URl e.g www.fruit.com/sort?nutrition=fat&order=highToLow
    - This url should show the user the list of items sorted in the order in the url parameters

5. Add load more functionality
    - The list of fruits should only show 6 items
    - When the user clicks "Load more" 6 more items should be show
    - When all items are displayed "Load more" should be hidden

# Extra information

- There are a few mobile wireframes in the "wireframes" folder, use these and stick to the design.
- The designs are wireframes so you are free to chose a colour scheme.
- Test the functionality that you write.
- Make sure errors are handled and think about the user experience when handling those errors.

## Available Scripts

In the project directory, you can run:

- `npm start` - runs the application on http://localhost:3000

- `npm test` - runs the tests

- `npm run build` - builds the app for production

### Happy coding!
