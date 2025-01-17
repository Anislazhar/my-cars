# "MY CAR"

My Car App, an innovative app designed for car enthusiasts and sellers alike. With AutoShowcase, you can easily upload images of your car, detailing its make, model, price, and mileage. This app allows you to create a comprehensive profile for your vehicle, highlighting its unique features and specifications. Once uploaded, you can share your car's profile with friends and potential buyers through a sleek and user-friendly interface. Whether you're showing off your new ride or looking to sell, AutoShowcase makes it simple to connect and engage with others who share your automotive passion.

[Live Site] (https://my-car-a464784ae806.herokuapp.com/)

## User Logins
bosssss
admin1!

Vinnie
admin2!

kati
admin3!

---

## CONTENTS

* [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)

* [Features](#features)
  * [General Features on Each Page](#general-features-on-each-page)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

  * [Content](#content)

---


### User Stories

An up to date list of user stories is avaialble here: [User Stories](https://github.com/users/Anislazhar/projects/6/views/1)

## Design

The site makes use of a simple, clean design. The site is designed to be easy to navigate and use.
In order to aid with develoment a modified React-Bootstrap design has been used with some defaults being overriden.

### Colour Scheme

The color scheme for the site employs a dark and high contrast theme. The site is themed around cars which often have lots of bright RGB lighting in neon colours so the dark theme is designed to make the site feel like it fits in with the theme with the content that is likely to be posted by users.

Key Colours: 

Background: #222
Dark, without being too dark/eye straining. This colour is used for the background of the site.

Text: #fafafa
White, used for the text on the site. This colour is used for the text on the site. Again, consideration has been made for eye strain on a high contrast site.

Main Accent: #d91717
The first of the three main colors used, Bright neon pink. This colour is used for the main accent on the site, such key submit / login buttons.

Secondary Accent: #00E6D6
Complimentary to the main accent, this colour is used for secondary accents on the site, such hover states and some smaller elements.

Tertiary Accent: #11DF6A
Again, a neon complimentary colour to the main accent, this colour is used for tertiary accents on the site, mostly before confirming an action and is used in limited amounts.

### Typography

For this project I have used the Google Gont 'Inter' as it is a modern, clean font that is easy to read and also has a slightly futuristic feel to it. I have used the font in a few different weights:

h1: font-weight: 800;

h2: font-weight: 500;

h3 / p:font-weight: 300;

p, text, input, select, textarea, label, ul, li: font-weight: 200;


### Imagery

The imagery for the site is mostly supplied by the users of the site but for the placeholder content i have used Migjourney to genrate some placeholder images. The images are all of cars setups to fit in with the theme of the site and I have also chosen images that compliment the colour scheme for the site.


## Features

The site follows a similar layout and feature set to sites like Instagram or Twitter. Users can sign up to post content. Including all the specifications and components used. Users can also comment on other users content and save them for later. Users can also follow other users to see their content in their feed.

Users can also view an individual profile page for each user to see all of their content and follow them.

### Future Implementations


~~- Home / landing page with some curated content. Managable by the site admin or based on Creation date/ ratings.~~
~~- Add a rating system for content where users could vote on different aspects of the content (Parts chosen, looks, tidyness etc).~~

- For my resubmission I added the homepage and rating system
- I would like to expand the rating system to mark content against differnt scores, in the interest of time , I settled for the simple version at the moment.
- In future I plan to add a components section with detailed technical info about parts. These could then also be tied up with the django project and database to make a selectable list of parts that would help with the consitency of the text content and alsp provide a useful resource for users that want to post content.


## Technologies Used

The project is comprised of a backend, written in Django and a frontend written in React. The frontend also makes use of React Router for routing and React Bootstrap to aid with the structure and layout of the site.
Both are hosted on Heroku and the database is hosted on ElephantSQL remotely and a CDN is used for hosting images (Cloudinary).

### Languages Used
- Python
- JavaScript
- React/JSX
- CSS

- The site also makes use of LottieFiles for some simple animated icons that are easily customised. These are made up of a Player component with props that control the source (animation) and different variables like playspeed/direction . More info here: (https://docs.lottiefiles.com/lottie-player/components/lottie-react)

### Frameworks, Libraries & Programs Used

- Django
- JWT for Django
- React Router
- React Bootstrap
- Google Fonts
- Cloudinary

### React Components

The site makes use of Many Bootstrap React Components and some from React Router.
Examples of these are <Row>, <Column>, <Media> (Bootstrap) and <Link> (React Router).

Additionally the site has some of its own components which are detailed below:

#### BuildGallery:

##### Overview
The BuildGallery component is a React component that displays a gallery of images. It includes a main image and a gallery of smaller images. Users can click on the smaller images to change the main image. The main image also serves as a clickable link to another page (typically for a detailed view of the gallery).

##### Props
id (number): This is used for the users profile and is optional but used here to link back to the users profile above the gallery.
allImages (array of strings): An array of image URLs to be displayed in the gallery.

The data for both these props is being passed down from the Build component where the dta fetching occurs.

##### Component Structure
Main Image Display: The main image is displayed at the top of the component and is wrapped in a link element (Link from react-router-dom). Clicking the main image redirects the user to another page.

##### Image Gallery:
Below the main image, there is an image gallery consisting of smaller thumbnail images. Users can click on these thumbnails to change the main image.

##### State Management
The component uses the useState hook to manage the currentMainImage state, which tracks the index of the currently displayed main image.
A nextImage function is used to update the currentMainImage state when a user clicks on a thumbnail in the gallery. It takes an index parameter, representing the index of the clicked image.

---
#### FeaturedCreator

##### Overview
The FeaturedCreator component is a React component that displays information about a featured creator. It retrieves data from an API, filters the featured creators, and renders the information, including the creator's name, image, description, content, and a link to their profile. Creators can be marked as featured I nthe django admin under the profiles section.

##### Component Functionality
State Initialization: The component initializes a state variable called featuredCreator using the useState hook. This state variable is an object with a results property, which is initially an empty array.

##### Data Fetching:
Inside the useEffect hook with an empty dependency array ([]), the component makes an asynchronous API request using the axiosReq function to fetch data from the /profiles/ endpoint. It checks if the response data contains a results property and filters the profiles to find those marked as featured. The filtered results are then set in the featuredCreator state.

##### Rendering:
The component conditionally renders content based on the length of the featuredCreator.results array. If there are featured creators available, it displays their information, including name, image, description, content, and a link to their profile. If no featured creators are found, it displays a message indicating that no featured creators were found.

##### Component Structure
Featured Creator Information: If featured creators are found, the component renders the following information for the first featured creator:

Image: Displayed using an img element with the src attribute set to the creator's profile image URL.
Name: Displayed as a heading (h3).
Subtitle: Displayed as a small text (small) element, typically showing the creator's description.
Content: Displayed as a paragraph (p) element, showing additional information about the creator.
Link to Profile: A clickable link (Link from react-router-dom) that redirects the user to the creator's profile page.
No Featured Creators Message: If no featured creators are found, the component displays a message indicating that no featured creators were found.

---
#### TopBuilds

##### Overview
The TopBuilds component is a React component responsible for displaying a list of top builds based on a specified filter. It fetches data from an API, combines the existing top builds with new top builds, and displays them as cards with build information, including an image, build name, comment count, and a link to view more details.

##### Props:
 The component accepts a filter prop passed down from the Home component. This makes use of the Django DRF API query paramters and filtering to directly request the top builds based on the number of comments each build has for gathering the results

##### Component Functionality
State Initialization: The component initializes two state variables using the useState hook:

topBuilds: An object with a results property, initially an empty array, to store the top builds.
currentPage: A state variable initially set to 1, which keeps track of the current page of top builds.

##### Data Fetching:
Inside the useEffect hook with a dependency array containing [currentPage], the component makes an asynchronous API request using the axiosReq function to fetch data from the /builds/ endpoint with the specified filter and page number. It then processes the response data to handle missing comments_count and combines the new top builds with the existing ones. Finally, it updates the topBuilds state with the first 6 top builds based on the most comments and resets the currentPage to 1.

##### Rendering:
The component maps over the topBuilds.results array to render build cards. Each build card includes the following information:

Image: Displayed using an img element with the src attribute set to the build's main image URL.
Build Name: Displayed as a heading (h3).
Comment Count: Displayed as a paragraph (p) showing the number of comments on the build.
View Link: A clickable link (Link from react-router-dom) styled as a button that redirects the user to the detailed view of the build.

### Custom Hooks:

The application makes use of some context hooks that help provide some basic but important data for components to use:

#### CurrentUserContext:

This custom context hook manages the current user's data and authentication. It uses Axios to interact with a the django authentication API and sets up request and response interceptors to handle token refresh, allowing users to stay logged in for more than the standard session length. This hook provides components with access to the current user's data and a function to update it. It ensures that if the user's session is invalidated (e.g., due to token expiration), they are redirected to the sign-in page. Overall, it simplifies and centralizes user management and authentication-related logic in the application.


#### ProfileDataContext:

This custom context hook manages profile data and user follows. It uses Axios to fetch and update profile information from the django api, including following and unfollowing other users. It also fetches popular profiles ordered by followers count. Components can access the profile data and functions to follow or unfollow profiles. This context simplifies data management for user profiles, providing a centralized place for handling these operations in the application.

## Deployment & Local Development

The project can be run locally using npm start dev. Please note that due to an OpenSSL issue with Node 18. You will need to change Node versions to 16 for the project to work locally. When the project first loads it will try to initialise and start the local server but will produce an error.

Please run the following in the terminal:
nvm install 16
nvm use 16

Then run npm start dev again and the project should load correctly.

### Deployment

Both projects are deployed to Heroku via the Github integrations. Once you have the project files, please commit them both to their own new repositories and connect them to Heroku via the Github integration. You will need to set the following config vars in Heroku for the Django App:

CLOUDINARY_API_KEY: This is the API key for your Cloudinary account, available in the dashboard.
CLOUDINARY_NAME: This is the name of your Cloudinary account, available in the dashboard.
CLOUDINARY_SECRET: This is the secret for your Cloudinary account, available in the dashboard.
CLOUDINARY_URL: This is the URL for your Cloudinary account, available in the dashboard.

DATABASE_URL: This is the URL for your ElephantSQL database, available in the dashboard.

DISABLE_COLLECTSTATIC: Set to 1 to disable collectstatic and use Cloudinary for hosting assets. Please disable in production only.

CLIENT_ORIGIN: "The URL for the deployed React App in heroku" (e.g. https://cars-api-app-48918ef0d803.herokuapp.com/)
**Only avaialble after deployment** 

ALLOWED_HOST: "The URL for the deployed Django App in heroku" (e.g. https://my-car-a464784ae806.herokuapp.com/) 
**Only avaialble after deployment** 

SECRET_KEY: THis is the secret key for your Django app. You can generate one here: https://miniwebtool.com/django-secret-key-generator/

#### How to Fork

You can fork either project by clicking the fork button in the top right of the repository page. This will create a copy of the project in your own github account. You can then clone the project to your local machine and make any changes you wish.

#### How to Clone

You can clone either project by clicking the green code button in the top right of the repository page. This will open a dropdown with the option to clone the project using HTTPS or SSH. Copy the link for the method you wish to use and then in your terminal navigate to the folder you wish to clone the project to and run the following command:

```bash
git clone <link>
``` 

### Testing

- Testing was done using the core user stories of the project or more simply, by testing all of the avaialble CRUD operations avaialbe on the site using different use accounts, new user accounts. 

- The following steps were performed:
  - Create an account
  - Login to your account
  - Create a build with images
  - Follow another user
  - Add a comment to another build
  - Edit that commnet
  - Delete the comment
  - Leave a rating on another build, check the average updates

### Content

All of the site content mostly relates to PC components so I was able to scrape some popular parts and data from pcppartpicker.com. I have additional written some of the "fluff" content for the site myself.
