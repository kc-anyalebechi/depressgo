# Project Overview



## Project Description


For this project, I will be creating a mental health app that provides motivational quotes for our visits. The quotes will be curated based on how they are feeling that day (Good, So-so, or Bad). I also plan on providing a subscription feature where they can receive a daily quote of the day. 

With their subscription they will receive a free e-book, short daily reads, and resources that will provide ongoing emotional and spirital support. 

“Today is the first day
of the rest of your life.”
~ Attributed to Charles E. “Chuck” Dederich, Sr., (1913–1997) ~


## API

--MOTIVATION QUOTES--

https://zenquotes.io/api/quotes - - Generate a JSON array of 50 random quotes on each request

https://zenquotes.io/api/today - Generate the quote of the day on each request

https://zenquotes.io/api/random - Generate a random quote on each request


```
[
{
  "q":"Quality means doing it right when no one is looking.",
  "a":"Henry Ford",
  "h":"<blockquote>“Quality means doing it right when no one is looking.” — <footer>Henry Ford</footer></blockquote>"
},
//.. MORE DATA ..//
{
  "q":"The important thing is not to stop questioning. Curiosity has its own reason for existing.",
  "a":"Albert Einstein",
  "h":"<blockquote>“The important thing is not to stop questioning. Curiosity has its own reason for existing.” — <footer>Albert Einstein</footer></blockquote>"
}
],
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [wireframes](https://drive.google.com/file/d/1NMGg83mwFH9r71hdUMjGiZv7PJ-Cb7DB/view?usp=sharing
)
- [react architecture](https://drive.google.com/file/d/1NMGg83mwFH9r71hdUMjGiZv7PJ-Cb7DB/view?usp=sharing)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
- Fully functional, interactive, resposive driven Quote of the Day mental, emotional, and spiritual development app. 
	- Quote of the day populated by API call
	- Gives users a personalized quote based on how they are feeling that day. 
	- Keeps track of user's name to give it a more personalized experience. 
- Navbar with options that link to: 
1) A Quote Of the Day 
2) Stay Connected Option - (receive daily quote via text or email) 
3) A contact us page 
4) Need more help page linking professional therapists.
- Hamburger menu bar 


#### PostMVP 

- Setting up Autoresponder
- Writing/Buying ebook to give away 
- Setting up mental health therapists for user's additional support. 

## Components


| Component | Description | 
| --- | :---: |  
| App | Sets up app with React Router | 
| Header | Renders the header (date via an API call, and theme quote), including the nav | 
| Footer | Renders the footer |
| Main | Routes for 1) Quote Component, and 2) Stay Connected Component |
| Quote | Renders a quote based on how the user is feeling, the question "How are you feeling Today?", and the icons showing feelings via an API call  |
| Stay Connected | Routes to a optin form to receive a quote of the day via email or text.  |
| Answer | Renders a possible answer using props from Question |
| Contact Us | Renders a page that displayed an address PO Box |
| Need Help | Renders a page about calling 911 if its an emergency and more information about receiving mental health support |
| Footer | Renders footer content |

### Time Matrix

Unless otherwise noted, time is listed in hours:

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create React app and files for all components | H | 1 |  |  |
| Basic Navbar & Footer | H | 1 |  |  |
| Set up basic React routing | H | 1 |   |   |
| Make Date, and Quote API call, parse important data | H | 2 |    |  |
| Display "How are you feeling" question and rending a quote based on responce | H | 1 |  |  |
| Create logic to test for  answer | H | 1 |  |  |
| Keep track of feeling | H | 2 | 2\ |  |
| Style dashboard display - basic | H | 2 | 3 | 3 |
| Make dashboard display dynamic | H | 1 | 1 | 1 |
| Add content for instructions page | H | 1 | 1 | 1 |
| Learn how to use Firebase | M | 4 | 3 | 3 |
| Additional styling for Navbar, Footer, other pages | L | 4 |  |  |
| Total | H |  |  |  |

## Additional Libraries
ReactStrap - responsive navbar
Firebase - 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  Code snippet should not be greater than 10 lines of code.

