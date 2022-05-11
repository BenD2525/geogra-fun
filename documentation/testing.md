# Testing

## User Stories

Current User Goals

* As a current user, I want to be able to learn more about the significance of capitals and flags.
    - There are buttons on the clearly labeled 'learn more' page which teach the user more about the significance of capitals and flags.
* As a current user, I want to test my knowledge of capital cities and flags.
    - The site allows the user to test their knowledge by providing two separate quizzes; for capitals and flags.
* As a current user, I want to be able to compare my current score to my previous scores.
    - The leaderboard page is clearly signposted and contains 2 separate leaderboards which correctly display the user's name, score and time in descending order.
* As a current user, I want to be able to access the service's social media platforms.
    - The footer contains clear links to Facebook, Twitter, Instagram and Youtube which open in new tabs. Each icon has an associated aria-label for screen-readers and accessibility.

New User Goals

* As a new user, I want to easily navigate the whole site.
    - The burger menu is clear and functional. The button toggles a visible menu which allows the user to navigate correctly.
* As a new user, I want to see clearly what the site is about.
    - The site has an about us button in the center of the homepage, which opens a modal providing the user with details about the website.

## Browser compatibility

Initial testing was done using Google Developer Tools while coding the project. Links, images, presentation and different screen sizes were all checked using this tool.

When the website was deployed, I was able to check the site on mobile devices, and identified some bugs.

* Leaderboards- These were squashed together
* Burger Menu- This initially covered the full screen
* Quiz pages- The score and timer merged into the questions/answers in the center of the screen

These were all fixed with the small and medium screen media queries.

Google Chrome, Microsoft Edge, Mozilla Firefox and Safari all display content and images correctly and all links work and open in new windows.

The scores are stored correctly within local storage, and are then brought through correctly to the leaderboard.

This was tested on a laptop, PC, iPad, Iphone SE, Galaxy S8 and a Motorola G9. 

## Accessibility

The site has been checked using Google Lighthouse, with a score of 100 for accessibility.

![Lighthouse Screenshot]()

# Validator Testing

## HTML
No errors were returned when passing through the official W3C validator


## CSS
No errors were found when passing through the official (Jigsaw) validator



