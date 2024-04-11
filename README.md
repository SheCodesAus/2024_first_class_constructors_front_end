# Gift Compare Website
By First Class Constructors Team - March/April 2024

Welcome to the Gift Compare! This project helps users find the perfect gift for any occasion.

## Links:
### Live website: [GiftCompare](https://giftcompare.netlify.app/)
### Live backend: [Gift Compare_backend](https://giftcompare-backend.fly.dev)
### Backend Github Repo: [BackendRepo](https://github.com/SheCodesAus/2024_first_class_constructors_back_end)


## Getting Started

To get started with this project, follow these steps:

### Clone the Repository

1. First, clone the repository to your local machine.
2. Navigate to the project directory and install dependencies using: npm i
3. Start the development server to view the project in your browser: npm run dev
4. Add the Tailwind CSS IntelliSense extension to your VSCode. This lets you hover over tailwind styling to see what the shortcuts are doing.

## Using Tailwind
You can apply Tailwind CSS styles directly to your HTML elements by adding Tailwind classes.
For example, to add padding to a div element, you can use the p-4 class:

```<div class="p-4">This is a div with padding</div>```

Our customises Tailwind CSS for Gift Compare can be viewed in the tailwind.config.js



## Project Requirements:
The website criteria:

Be separated into two distinct projects:
* [x] an API built using the Django Rest Framework ()
* [x] a Website built using React
Go to the top for the [GiftCompare](#live-website-link-giftcompare)   

Both of these components must be deployed using Fly.io and Netlify respectively.

The React project must be using the deployed API.

* [x] Have user accounts and use TokenAuthentication to implement appropriate authentication and authorization.
* [x] Return the relevant status codes for both successful and unsuccessful requests to the API and handle failed requests gracefully(e.g.you should have a custom404 page rather than the default errorpage).
* [x] Implement responsive design, i.e. it should be designed with multiple screen sizes and devices in mind.


## List of User Actions:
*__Intuitive Navigation and Easy Shopping__

The website boasts an intuitive layout for a smooth user experience. Here's what you can do:

- Sign up and create an account (icon: little persona torso).
(**note: since one can signup, valid credentials won't be provided here**)
- Login/Logout: Easily manage your account by logging in or logging out.
- View Your Profile: Access your profile page to check your details.
- Quick Navigation: Clicking the website logo conveniently takes you back to the homepage.

*__Featured Gifts Section__

Right at the top, you'll find a curated selection of "Featured Gifts." These can include newly added gifts, Editor's picks, or gifts of the month. This section is regularly updated by administrators (users with special permissions).

*__Browsing by Events__

- Event Navigation: 
A secondary navigation bar lets you browse gifts by different events, like weddings, birthdays, and more. 

- Clicking on an event category will display a full list of available gifts for that specific occasion.
- Budget-Friendly Shopping: Within each event category, you can filter gifts by price range to find options that suit your budget.

*__Gift Details and Comparison__

- Gift Previews: Click on a gift image to see a detailed description and additional information.
- Compare (icon: little gift box) and Choose: Select up to four gifts to add to a comparison list. This allows you to easily compare features before making a decision. You can also remove items from your shortlist if needed.
- Merchant Links: Click on a link to be redirected directly to the merchant's website for a seamless purchase experience.


## Live Documentation:

### MVP outline (Minimum Viable Product)
Mission, Features, Technical Implementation, Target Audience, DB schema and more can be seen here: [MVP-GiftCompare](https://drive.google.com/file/d/1Vay_bz7rT70oqkt4B4HFIMyvfHnar9ud/view?usp=drive_link)


### Showcase slides

The MVP product was presented to the She Codes Plus class and the Client, Estera Herman - Customer Success Manager at Horizon Digital.

Check out the presentation slides at this link: [GiftComparePreso](https://drive.google.com/file/d/1LS0WqzMx5n_eOSrRnorIBxoWdK78UM6A/view?usp=drive_link)