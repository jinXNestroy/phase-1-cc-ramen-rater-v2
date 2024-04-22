# Phase 1 Code Challenge: Ramen Rater

## Project Overview

The project aims to create a web application for managing ramen information. Users can view a list of ramen, vote for their favorites, add new ramen entries, and reset vote counts.

### Features

#### Displaying Ramen:
The application fetches ramen data from a JSON server using the fetch API. Upon receiving the data, it dynamically creates DOM elements to display each ramen's image in a list. Event listeners are added to each image to display detailed information when clicked.

#### Adding New Ramen Details:
Users can add details of their favorite ramen by specifying them in the input field and submitting the form. The details are updated on the client side. Event listeners prevent default form submission behavior and update the displayed vote count.

#### Resetting Vote Counts:
Users can reset a ramen's vote count by clicking the "Reset Votes" button. This action sets the vote count for the ramen to zero. Event listeners trigger the reset function, updating the displayed vote count.

### Bonus Deliverables - Adding New Ramen:
Users can add new ramen entries by providing the ramen's name, image URL, rating, and comment in input fields and submitting the form. The application dynamically creates DOM elements for the new ramen, appending them to the existing list. Event listeners are added to each new ramen element to display detailed information when clicked.

### Technologies Used 
 The project is built with HTML, CSS, and JavaScript and communicates with a JSON server to store and retrieve ramen data.
