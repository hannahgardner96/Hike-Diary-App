# Hike Diary Overview
An app that allows you to index hikes you've been on and provides recommendations based on your current location and the weather.
![App Preview](/readme_images/app-preview.png)

## Goal 1:
A page that displays recommendations for hikes based on your current location and the weather.
* Takes your current location and pulls up nearby hiking locations from google places API
* Takes the places produced, displays the map location, and displays the current weather

## Goal 2:
An index of hike memories that saves the location, displays current weather, and a description of the hike.
* Can either click a “create new” button at the top of the hike index or from the list of recommendations
    * If you click from the recommendations, it will populate the location on its own

Stretch: unique logins, upload photos from hike

## Technologies to Use:
### Backend:
* Django
* Postgres

### Frontend
* React with TypeScript (written with functions)

### Other
* Open Weather Map API
* Google Places API
* Google Places Photo API
* Google Maps API

## Wireframing
![Recommendations Wireframe](/readme_images/recommendations.png)
![Diary Wireframe](/readme_images/diary.png)

## Component Planning
![Component Hierarchy](/readme_images/component-hierarchy.png)

## Notable Challenges
#### Google Places Photo API
After an arduous journey through the process of converting binary data to base64 and creating an object URL, the only image I could get the response to display was an image that signaled I had surpassed my API calls for the day despite having made no calls. 

#### Heroku Deployment
I struggled to know where to begin when de-bugging heroku deployment. Working with someone with experience I learned that in order to deploy a react app with a django backend, I first needed to "tell" heroku which directory in my root directory to look in. Once heroku knew where to look, heroku needed to start both django and the react app by reading static files of the react app. In doing this, I also needed to add buildpacks so that Heroku "knew" that I would be writing in both NodeJS and Python. Finally, I needed to connect Postgres to Heroku. After going through this process with a great deal of help, there were still a high volume of bugs. I deffered to the person with experience and did not debug the deployment independently. 

#### Django Backend
It was interesting to understand how serializers, views, and urls came together to simplify routes and backend requests. I plan to continue my learning with ViewSets and integration of put/update and delete/destrol routes.

## Future Improvements
* Unique logins
* Upload photos of hike
* Responsive design
* Integrate context API
* Tidy up state, variable, and function names
* Comment code

#### Resources Used:
* [Django documentation](https://docs.djangoproject.com/en/3.2/)
* [Getting start with Django](https://www.djangoproject.com/start/)
* [Django app tutotial](https://docs.djangoproject.com/en/3.2/intro/tutorial01/)
* [Django postSQL databse creation tutorial](https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-your-django-application-on-ubuntu-14-04)
* [Build ToDo App: React Django Tutorial](https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react)
* Learning React, Edition 2 by Alex Banks & Eve Porcello
* Additional resources noted within files