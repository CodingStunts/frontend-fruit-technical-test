# Jay's Notes

## Checklist for Requirements on original README

1. Display all fruits in a list <br>
   ✔️ Show the name of each fruit <br>
   ✔️ Show an image for each fruit <br>
   ✔️ There are no images in the API so you will have to use keywords to source the images <br>
   _See details section below for more about the challenges with the images_

2. Create a page for each fruit <br>
   ✔️ When a user clicks on a fruit they should be take to the fruit page <br>
   ✔️ Display information about the fruit as per the wireframes <br>
   ✔️ When the user clicks "Back to all fruit" they should be taken back to the fruit list <br>
   ✔️ The url for each fruit page should be dynamic e.g www.fruit.com/apple should show all the apple information

3. Allow user to sort the fruit <br>
   ✔️ When the user clicks the sort button in the header they should be shown the sort options <br>
   ✔️ User can sort by nutrition type <br>
   ✔️ User can sort high to low or low to high <br>
   ✔️ When the user clicks "Confirm sort" they should be shown a list of fruit sorted accordingly <br>
   ✔️ When the user clicks "Clear sort" they should be shown the original list of fruit not sorted

4. Create a dynamic sorting URl <br>
   ✔️ The sorting information should be in the URl e.g www.fruit.com/sort?nutrition=fat&order=highToLow
   _Couldn't work out how to add `/sort` before the query string in the URL without breaking the whole thing._ <br>
   ✔️ This url should show the user the list of items sorted in the order in the url parameters

5. Add load more functionality <br>
   ✔️ The list of fruits should only show 6 items <br>
   ✔️ When the user clicks "Load more" 6 more items should be show <br>
   ✔️ When all items are displayed "Load more" should be hidden

## Extra information

✔️ There are a few mobile wireframes in the "wireframes" folder, use these and stick to the design. <br>
✔️ The designs are wireframes so you are free to chose a colour scheme. <br>

- Test the functionality that you write. <br>
  ✔️ Make sure errors are handled and think about the user experience when handling those errors. <br>

# Details

I started trying to crack on with this test on Thursday evening to hopefully try and get it all boxed off before the end of the weekend but I realised after a while it would probably take a bit longer than originally expected. I've been messing around with it on and off all weekend and put a fair bit of time into it. _API keys for the photo API should be sent alongside the email to Bankifi._

## CORS

The first challenge I had was the API provided didn't use an API key and I had to find a way around the CORS issues that came with this API. I've never actually encountered CORS on APIs before so this was my first time trying to get around that. I tried a few times making an api proxy which I've left in the src file so you can see what I tried to do. I kept going at this all on Thursday night with no luck and in the end used a CORS-Anywhere server created by a 3rd party that I included before the fruit API for my GET request. Although not an ideal solution to the issue this allowed me to crack on with the project, having had more time I'd have liked to have made my own proxy to get past this in one way or another. In order for the CORs server to work, you will need to go to https://cors-anywhere.herokuapp.com/ and click the button before it will start to allow the API requests through.

## Components

After I got past the CORS I started working on the main React app. I got everything all lined up and all the structure of the components in place based on the plan I had set out before coding. I split the app up into an all fruits homepage, with components for the sort box and a fruit card to populate the page in list form. Clicking on the list cards takes you through to the other component which is the single fruit page. I felt that for an app this size that was plenty in terms of components.

## Functionality

I extracted some functionality into a utils folder, one for the API calls to the fruit server for the all fruits and the single fruit endpoints, as well as for sourcing the images used, and then also abstracted out the functionality for the sort and order component in a separate file. One thing that I didn't get around to fixing was that when you first click the radio options on the sort function it doesn't show them as selected, however on second click they do change, and even after one click the confirm button will still sort them properly.

Since the Fruit API only had limited sorting functionality I created my own functions to deal with this and manipulate the data in the front end. Ideally I would have done this API side, if given the option.

I realise that if you were to share the link with the query for the sort and someone were to follow it the list doesn't correspond to this upon following the hyperlink. With more time I would have used a useEffect to duplicate the functionality of the confirm sort button, if I had more time to develop this further.

## Styling

I tried to make the styling as simple as possible and just splash some fruity colours on there. Hope it's not offensively bright, but it looks pretty close to the wireframes to me. I used grid on the fruit list and flex elsewhere to order my elements and components.

## Keyword photos

Getting the photos involved complicated a few things for me. I wasn't sure where to start for a photo API so I did some digging and found Unsplash which I ended up settling on. It was a bit of a pain as it only allowed 50 requests and hour on the free level, but when I got around to querying it via keywords it didn't really pull up very accurate results. Because of this I looked around for alternatives. I did try using Pexels as an alternative but this unfortunately kept crashing my app because of an issue with "process" not being defined somewhere in the node modules when I tried to use their NPM package to access their API, and doing it manually didn't seem to be possible as I couldn't find how to use their API key unless I did it through the package, so I had to shelf this idea and in the interest of time I stuck with the Unsplash one as it at least allowed me to access some pictures, even if a few of them aren't particularly accurate. If I had more time I think I'd have found better solution to this. I had a last ditch effort to find any other API that may solve the issue. I thought https://spoonacular.com/cdn/ingredients_500x500/strawberries.jpg would work for example, but since a lot of the photos provided had pluralised names and some didn't appear at all, it seems like there would be no easy way to write logic to change all -berry ending to berries, etc. If I had more time I would have liked to have worked on this.

## Error handling

I kept the error handling simple on this as I used state to store the error and caught them using Axios built in error handling messages and catch blocks which I then rendered in the components. I did this on API calls for all fruit, single fruit, and if there was an error in returning an image. Again, I'd have liked to have made this more robust, however in the interest of time I kept it basic.

## Testing

I started writing testing for my utils function for sorting and order. Given more time I would have liked to have tested my fetch functions to some degree and also done some testing on my react components mounting, but I ran out of time.
