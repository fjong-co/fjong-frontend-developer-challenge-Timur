# Fjong Frontend-Developer Challenge

Thanks for your interest in joining the team here at Fjong. Part of our
evaluation process is to set an open-ended challenge which will allow you to
flex your creative muscles and give you an opportunity to demonstrate your
coding skills. We think (and hope you agree) that this is better than asking
you to scribble algorithms on a whiteboard in an interview setting.

We realize that this represents a significant investment of effort, but one we
hope will be worthwhile for both you and us. Even if your application to Fjong 
is ultimately unsuccessful, you are more than welcome to use what you
produce for this challenge in your personal portfolio.

If you are successful then we'll invite you to our offices for a face-to-face
interview and will use what you produce for this challenge as a starting
point for our chat.

Skål!  
The Fjong Team


## Brief
As we mentioned, here is a quick coding challenge. It's important to note that 
it's by no means a test...we just want to get a sense for how you write code 
and solve problems.

We have a simple [API](#api-usage) that returns a JSON array of outfits. We would like 
you to create a react app to read the API and display outfits in an 
organized way (eg. create buttons displaying brand names - when you click a brand then 
display all the outfits associated with that brand), we would also like you to create
 a text search/filter to find outfits the end-user might search for.

### Minimum requirements 
- A way to view outfits based on brand
- A text search to filter filter results
- Some styling (css)

### Optional Extras
- Good UX
- Animations
- Routing
- Feel free to add any extras you can think of

### Instructions
- clone this repo
- run `yarn install`
- run the project locally `yarn start`
- write your code 
- submit a pull request

## API Usage

API can be launched using `yarn start`. You will need to run `yarn
install` once starting working on the project to install dependencies.

| Endpoint                     | Result                                              |
|------------------------------|-----------------------------------------------------|
| /brands                     | Lists all brands         |
| /outfits?brands_like=Mulberry                     | Lists all outfits from the brand Mulberry         |
| /outfits?q=lightweight%20crepe            | Full text search for lightweight crepe                             |

---

More info about API usage can be found at the [json-server
repo](https://github.com/typicode/json-server).