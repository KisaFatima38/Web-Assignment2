# Web-Assignment2
Web assignment 2 (weather forecast)

This project is composed of a Weather Dashboard and a Chatbot to interface a weather API and a generative AI model. Below is an overview of the included files:

**File Structure:**
It includes all the layouts for the web pages, typography, etc for styling the components used in the web page.
It is the first and home page of the application with the current weather data and forecasts of future weather.
index2.html – The page through which the conversations between the user and a conversational interface for answering weather-related questions are initiated.
index.js - (It seems to contain great dynamic functionalities of the website ).


**File Details:**
1. style.css
This file specifies the styles for the dashboard and the chatbot front end interfaces. Key features include:
Layout: The layout is based on flexbox for the purpose of responsiveness, where the sidebar menu and the main content take equal amounts of the width.
Colors: A basic blue theme with #21505d sidebar color and #4589e1 for buttons and active state.
Components: Style for the search bar, Weather Box, Charts and Tables, Chatbot messages.
For example, the weather-widget class gives this widget a box-shadow and padding so that it looks like a card so to speak, and the hover effects of nav ul li a contains a transition.

2.index.html
The main  Dashboard page that includes:
A lookup for a city where users can enter a new city of choice and get their weather information.
A weather widget that shows general weather of a city including temperature, condition, humidity and wind speed.
Charts: Shows temperature and condition fluctuations with time using Chart.js.
5-Day Forecast: A table with pagination as a weather forecast for the upcoming days.
External dependencies:
Chart.js: Employed in the development of dynamic charts of weather conditions and temperature fluctuations.

3. index2.html
The Chatbot interface which connects to Google’s Gemini generative AI model and also access to OpenWeatherMap API for weather related chats. Features include:
An input data box in which users can address questions as “What is the weather like in [city]?”.
Integrating with generative AI version of Google to help provide the chatbot responses.
Taking and displaying weather information when a user enquires about the weather in a certain city using the OpenWeatherMap API.
External dependencies:
Google Generative AI: Intended readers: This work will be useful for generating intelligent responses in the chatbot.
OpenWeatherMap API: For firing query commands to get the weather of a particular location.

5. index.js (As per assumed functionality)
This file is expected to contain JavaScript code that handles:
API interactions: Calling to the OpenWeatherMap API, and refreshing the widgets and charts related to weather.
Event handling: Interacting with the users for instance through clicks of the search button and interaction through a chatbot.
Data rendering: Interacting with the chatbot, and dynamically altering the DOM with Weather data.
Setup Instructions:
Clone the repository.
Install necessary dependencies:
Chart.js (which serves as a library for drawing charts.)
Make sure that you have the keys from the OpenWeatherMap API and Google Generative AI API.
Run the project: The website weather dashboard can be viewed by opening the index.html file and for the chatbot interface use index2.html.
APIs and External Libraries:
OpenWeatherMap API: Used for the retrieval of real time weather data.
Google Generative AI (Gemini): Loaded in the chatbot to deal with natural language queries.
Chart.js: This includes temperature and condition charts which are display tools mostly used in the telecommunication industry.
