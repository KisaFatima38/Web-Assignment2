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
This file contains the JavaScript functionality for the Weather Dashboard, which includes:
Fetching current weather data: Employing OpenWeatherMap API it is able to obtain and show current temperature, humidity, wind, and weather conditions in real time.
Fetching 5-day weather forecast: It also retrieves forecast data and presents it in a paginated table format.
Updating the weather widget: The data from the API is then plugged into the DOM through manipulation of Variables to display the temperature, weather description and weather icons.
Pagination controls: Enables users to move from one page to the other in the forecast table.
Chart generation: Three charts are made using Chart.js:
Temperature Bar Chart: The forecast for the next few days with an emphasis of the temperatures.
Weather Condition Doughnut Chart: Illustrates the severity of the weather, viz., rain, clear, clouds etc.
Temperature Line Chart: Illustrates the relationship of temperature with time.
External dependencies:
OpenWeatherMap API: Weather data is important in aviation and hence requires real time and forecasted data, which is obtained from the URLs mentioned below.
Chart.js: They include the following functions For creating charts on the basis of the forecast data.

Run the project:
Open index.html in a web browser to view the weather dashboard, and index2.html for the chatbot interface.
If i only run index.html even then i can have the index2.html in that as well.

APIs and External Libraries:
OpenWeatherMap API: Used for the retrieval of real time weather data.
Google Generative AI (Gemini): Loaded in the chatbot to deal with natural language queries.
Chart.js: This includes temperature and condition charts which are display tools mostly used in the telecommunication industry.
