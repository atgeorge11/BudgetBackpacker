# BudgetBackpacker



## About

BudgetBackpacker is an iOS application that allows users to find the cheapest flight and hotel bookings.

Users can then save and organize their bookings for easy reference during their trip.

Developed by Taylor George

# App Demo

![GIF OF DEMO](https://media.giphy.com/media/WUaZTAmEQSeSQt4aRk/giphy.gif)

## Tech Stack

BudgetBackpacker was built using React Native. 

## Technical Challenges

BudgetBackpacker was built to meet a 48-hour deadline with no prior experience with React Native. I learned a great deal about working with React Native and with mobile environments in general. Some unexpected challenges included:

   * Configuring dev environment for mobile
   * Storing and displaying data sent to or retrieved from external APIs in the correct formats
   * Handling connecting flights within data objects

## Minimum Viable Product

The MVP version of BudgetBackpacker implements the following user stories:

   * As a user I should be able to search for flights by:
      --departure location
      --arrival location
      --departure date
      --number of adult, child, infant, and senior passengers
      --maximum price
   * As a user I should be able to easily prioritize pricing in my search.
   * As a user I should be able to easily distinguish sets of connecting flights in my search results.
   * As a user I should be able to easily compare flights by price and time.
   * As a user I should be able to save flights I have booked so I can refer to them later.
   * As a user I should be able to save all connecting flights of a particular trip with a single action.
   * As a user I should see my saved flights in chronological order for ease of reference during my trip.
   * As a user I should be able to delete a saved flight from my itinerary.

## How the app works

BudgetBackpacker collects the data input into the Flight Search form and uses it to format a request to the Amadeus Flight Offers Price API. It uses the Aviation Edge Autocompletion Service API to convert the city names input by the user to their IATA codes for this request. The returned data is then formatted and displayed for the user.

The user can save the data for any series of connecting flights by tapping on it. Doing so will tell BudgetBackpacker to reformat the data for that series of flights and write each connecting flight to the client iPhone's storage. This data will then be retrieved and displayed in chronological order on the app's Itinerary screen.

