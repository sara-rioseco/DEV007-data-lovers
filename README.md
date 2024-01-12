# Pokedex Database :smiley_cat:

## :bookmark_tabs: Índice

:rocket: [1. Product Definition](#1-product-definition)

:woman: [2. Users and User's Stories](#2-users-and-users-stories)

:computer: [3. Interface](#3-interface)

:pill: [4. Unit Testing](#4-unit-testing)

:eyes: [5. Usability Tests](#5-usability-tests)

:calendar: [6. Organization, Planning, and Teamwork](#6-organization-planning-and-teamwork)

---

## 1. Product Definition

**Pokedex Database** is a web app where you can search, filter and order all of the 251 Pokemon from the 1st and 2nd generation of Pokemon. All the information and stats are taken from the PokemonGo mobile game data.

PokemonGo is an augmented reality location-based video game developed by the company Niantic for iOS and Android devices. The game involves searching for and capturing characters from the Pokemon series hidden in real-world locations and engaging in battles with them, requiring physical movement through the city streets to progress.

The characters, known as Pokemon, can belong to one or two types, depending on the attacks and characteristics they possess. For instance, they may belong to types such as fire and rock, or solely fire, water, ground, ghost, psychic, among others. Each Pokemon has specific quick moves and charged attacks. Additionally, they have their own statistics, strengths, weaknesses, and evolutions. Based on this information, players can formulate strategies to play and achieve better results.

**Pokedex Database**'s goal is to allow users to search for this information, finding the necessary statistics, sorting, filtering, and viewing the details of each Pokemon in a clear, simple, and quick manner.

The data is obtained by consuming a **static JSON file** with the **Fetch API**. Our app also features a few graphs created with **Chart.js** displayed within the details modal window for each pokemon.

_Final prototype and design:_
![Final prototype and design](https://github.com/sara-rioseco/DEV007-data-lovers/blob/main/src/assets/img/project/final-desktop.jpg?raw=true)

---

## 2. Users and User's Stories

The main users of the product are young adult individuals with internet/smartphone access who want to find information about Pokemon. It is designed for both casual users, who may be players of any Pokemon video games, and more advanced users interested in detailed information. To identify our target audience and develop the various features, we used agile methodologies, specifically **Scrum**. This led us to create user stories for each feature that these users required. We worked with 6 specific user stories, which are detailed below:

**User Story 1:** _As a user who doesn't know much about Pokemon, I want to see an image, the name, and the number of all Pokemon so I can get acquainted with them._

**Acceptance Criteria:**

- I want a grid layout.
- I want it to be responsive.
- I want to see the image of the Pokemon, its name, and number.
- No interactions are needed.

**Definition of Done:**

- [x] Usability tests conducted with at least 2 users.
- [x] Fulfills all the acceptance criteria described.
- [x] All code is in the main branch of our Github Repository.
- [x] The project has been published on Github Pages.

**User Story 2:** _As a casual Pokemon games player, I want to be able to see the type and evolutions of the Pokemon so I can know its information._

**Acceptance Criteria:**

- I want a grid layout.
- I want it to be responsive.
- I want to see the image of the Pokemon, its name, and number.
- I want to click on the image and have it show the Pokemon's type and other details in a pop-up.
- I want to be able to close that pop-up and return to the main screen.

**Definition of Done:**

- [x] Usability tests conducted with at least 2 users.
- [x] Fulfills all the acceptance criteria described.
- [x] All code is in the main branch of our Github Repository.
- [x] The project has been published on Github Pages.

**User Story 3:** _As a Pokemon games player, I want to see the details, strengths and weaknesses of each Pokemon, as well as the capture rate with a graphic representation, so I can use that information when playing._

**Acceptance Criteria:**

- I want a grid layout.
- I want it to be responsive.
- I want to see the image of the Pokemon, its name, and number.
- I want to click on the image and have it show the strengths and weaknesses of each Pokemon.
- I also want information about the capture rate of the Pokemon to be included with graphics.
- I want to be able to close that pop-up and return to the main screen.

**Definition of Done:**

- [x] Usability tests conducted with at least 2 users.
- [x] Fulfills all the acceptance criteria described.
- [x] All code is in the main branch of our Github Repository.
- [x] The project has been published on Github Pages.

**User Story 4:** _As an advanced Pokemon games player, I want to be able to search for a specific Pokemon by its name, so I can find specific information about it._

**Acceptance Criteria:**

- I want a grid layout.
- I want it to be responsive.
- I want to see the image of the Pokemon, its name, and number.
- I want there to be a search bar to type the name of the Pokemon I want to search for.
- I want it to show me the result of that search.

**Definition of Done:**

- [x] Usability tests conducted with at least 2 users.
- [x] Fulfills all the acceptance criteria described.
- [x] All code is in the main branch of our Github Repository.
- [x] The project has been published on Github Pages.

**User Story 5:** _As an advanced Pokemon games player, I want to be able to sort pokemon by different criteria (such as alphabetical, numerical order, etc.) so I can view the data in an organized manner._

**Acceptance Criteria:**

- I want a grid layout.
- I want it to be responsive.
- I want to see the image of the Pokemon, its name, and number.
- I want an option to sort by alphabetical or numerical order, both ascending and descending.
- I want to see the results sorted according to the selected option.

**Definition of Done:**

- [x] Usability tests conducted with at least 2 users.
- [x] Fulfills all the acceptance criteria described.
- [x] All code is in the main branch of our Github Repository.
- [x] The project has been published on Github Pages.

**User Story 6:** _As an advanced Pokemon games player, I want to be able to filter the list of Pokemon by Pokemon type, so I can see only the results that interest me._

**Acceptance Criteria:**

- I want a grid layout.
- I want it to be responsive.
- I want to see the image of the Pokemon, its name, and number.
- I want an option to filter the list of Pokemon by type.
- I want to see only the results according to the selected filter.

**Definition of Done:**

- [x] Usability tests conducted with at least 2 users.
- [x] Fulfills all the acceptance criteria described.
- [x] All code is in the main branch of our Github Repository.
- [x] The project has been published on Github Pages.

---

## 3. Interface

The interface is simple and it features light tones, with illustrations of different Pokemon in different pastel colors as the background. The initial banner presents two images of characters from the series, that will dissapear on smaller screens in order to make space for the rest of the content. The titles are dark grey, and the elements of the navigation bar, such as the menu for sorting, filtering, and the search bar, are in white tones with black letters for easy readability.

Within the navigation bar, we first have the filtering menu. With this, users can choose which Pokemon type they want to see. Next in line, we have the search bar, where users can enter the name, number or type of a Pokemon as text and search for all matching entries. Additionally, there are customized messages in case no results are found or no search criteria are provided. Finally, there is the menu for sorting the data alphabetically or numerically, in ascending or descending order.

In the main part of our application, Pokemon are displayed in a grid layout, showing a maximum of 4 columns and a minimum of 1, depending on screen size. Each Pokemon appears within a card featuring its number, image, and name. Clicking on each card opens a modal window that first displays a close button to return to the previous screen. Following that, the same information mentioned earlier (number, name, and image) is presented, along with the Pokemon's type, strengths, weaknesses, quick moves and charged attacks. Spawn chances, capture rates and flee rates are displayed using **Chart.js** graphs. At the bottom of the window you can find all evolutions within that Pokemon's line.

Images illustrating everything described above are presented below.

_Final home design (desktop):_
![Final home design (desktop)](https://github.com/sara-rioseco/DEV007-data-lovers/blob/main/src/assets/img/project/final-desktop.jpg?raw=true)

_Final home design (mobile):_
![Final home design (mobile)](https://github.com/sara-rioseco/DEV007-data-lovers/blob/main/src/assets/img/project/final-mobile.jpg?raw=true)

_Modal dialog with detailed information (desktop):_
![Modal dialog with detailed information](https://github.com/sara-rioseco/DEV007-data-lovers/blob/main/src/assets/img/project/details-desktop.jpg?raw=true)

_Modal dialog with detailed information (mobile):_
![Modal dialog with detailed information](https://github.com/sara-rioseco/DEV007-data-lovers/blob/main/src/assets/img/project/details-mobile.jpg?raw=true)

_No input when searching message:_
![No input when searching message](https://github.com/sara-rioseco/DEV007-data-lovers/blob/main/src/assets/img/project/no-input.jpg?raw=true)

_Not found message:_
![Not found message](https://github.com/sara-rioseco/DEV007-data-lovers/blob/main/src/assets/img/project/not-found.jpg?raw=true)

---

## 4. Unit Testing

Unit tests were implemented with a coverage of 100% statements, branches, functions and lines. You can check the results below:

![Unit tests](https://github.com/sara-rioseco/DEV007-data-lovers/blob/main/src/assets/img/project/tests.jpg?raw=true)

---

## 5. Usability Tests

When running usability tests with different users, we identified some bugs and details that we had not noticed previously. These errors are the following:

- Upon entering the website, at the bottom center, two white dots can be seen corresponding to empty dialogs.
- When viewing the website on a mobile device, sometimes the names of the Pokemon overflow from the cards.
- After searching for a Pokemon by its name, the position of the close button in the dialog with Pokemon details changes.

:bug:**These bugs were fixed on the latest deploy.**:bug:

---

## 6. Organization, Planning and Teamwork

For our planning and project management, we used Trello application. With this tool, we created a board and placed user stories on the left, followed by the product backlog containing all the features we wanted to implement. Then, we had columns for "Doing" and "Done". After completing a sprint, we moved all the progress of that sprint to the "Sprint backlog" column with the corresponding number. This system greatly assisted us in organization and provided a visual understanding of the progress we had made and how much work remained. Additionally, having user stories always visible was very helpful to keep the functionalities and acceptance criteria in mind.

Below, we provide an image of our Trello board (in Spanish).

![Tablero trello](https://github.com/sara-rioseco/DEV007-data-lovers/blob/main/src/assets/img/project/trello.jpg?raw=true)

In addition to Trello, we used Google Calendar to schedule meetings outside of bootcamp hours based on our availability.

_This project was originally written and developed by Sara Rioseco and Elena Norambuena on May 2023. However, the most recent deployment is a complete refactored version, with new features, added styles, transitions, graphs and full coverage unit test suites, all developed by Sara Rioseco._
