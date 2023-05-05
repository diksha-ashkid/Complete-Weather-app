                                                            Weather Application

The web application is designed to give users access to real-time weather information for any city in the world. It uses a combination of technologies such as React, a popular front-end JavaScript library, and Django, a Python-based web framework for the back-end.
To obtain weather data for a specific city, the application uses the OpenWeatherMap API, which is a free API that provides current and forecast weather data for any location.
Overall, the application is designed to be responsive and easy to use, providing an intuitive interface for users to input a city name and retrieve current weather data.

![image](https://user-images.githubusercontent.com/89176434/236501416-520c9d25-5ddf-423a-8e48-882e4e134e60.png)

Features:
1. Front-end built with React.js, a popular JavaScript library for building user    interfaces.
2. Back-end built with Django, a high-level Python web framework that follows      the model-view-controller (MVC) architectural pattern.
3. Responsive design using CSS, allowing the application to be accessed on          various devices with different screen sizes.
4. Uses the OpenWeather API to retrieve weather information for a given            location.
5. Uses a RESTful API to connect the Django back-end with the React front-end.
6. Uses Axios, to make HTTP requests and handle responses.
7. Displays current temperature, humidity, feels like temperature, wind speed,      and weather description for the given location.
8. Displays a weather icon based on the current weather condition, using the        OpenWeather API icon codes.
9. Provides an easy-to-use search bar to enter a city name and retrieve weather    information for that location.


Requirements:
- Node.js (v14.16.1 or higher)
- Python (v3.7 or higher)
- Django (v3.2 or higher)
- OpenWeatherMap API key (get it from https://openweathermap.org/api)

Installation: 

1. Clone the repository to your local machine:
   git clone https://github.com/diksha-ashkid/Complete-Weather-app.git
2. Navigate to the root directory of the repository in your terminal.
3. Install the required dependencies for the React app using the command npm install.
4. Navigate to the backend directory in your terminal.
5. Create a virtual environment for the Django server using the command python -m venv env.
6. Activate the virtual environment using the command source env/bin/activate on macOS/Linux or    env\Scripts\activate on Windows.
7. Install the required dependencies for the Django server using the command pip install -r        requirements.txt.
8. Once the dependencies are installed, start the Django server using the command python          manage.py runserver.
9. In a new terminal window, navigate to the root directory of the repository and start the        React app using the command npm start.
10. The app will open in your default browser at http://localhost:3000/.
  
Usage:
1. Open the web app in your preferred browser. By default, the app runs on http://localhost:3000.

2. In the search bar at the top of the page, type the name of the city for which you want to see the weather information.

3. Press Enter or click on the search button to display the weather information for the city you entered.

4. The weather information displayed includes the temperature, humidity, feels like temperature, wind speed, and weather description. Additionally, the app also displays a small icon representing the current weather conditions.

5. To search for weather information for another city, simply type the name of the city in the search bar and repeat steps 3 and 4.

6. Overall, the Complete Weather App provides a simple and intuitive way to get real-time weather information for any city in the world, and its user-friendly design makes it easy to use for anyone.

To deploy on GCP:
1. Create a new project in the cloud platform.
2. Set up a virtual machine instance with the required configurations
3. Install the necessary software dependencies (e.g. Node.js, Python, Django, etc.).
4. Clone the project repository onto the virtual machine instance.
5. Build and deploy the project using the appropriate commands 
6. Set up a domain name and SSL certificate for the application (if required).
7. Launch the application and verify that it is working correctly.
