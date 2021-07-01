# Hike Diary Overview
An app that allows you to index hikes you've been on and provides recommendations based on your current location and the weather.

## Goal 1:
A page that displays recommendations for hikes based on your current location and the weather.
* Takes your current location and pulls up 5-10 hiking locations from google places API
* Takes the places produced and checks the weather for that location
    * Checks against a variety of factors and lists them in descending order from satisfying the most to the least criteria

Stretch: integrate d3 to show weather trends for the past few days or future days

## Goal 2:
An index of hike memorites that saves the location, weather at the time of creation, and a description of the hike.
* Can either click a “create new” button at the top of the screen or on the list of recommendations
    * If you click “create new” you can search a location or enter an address
    * If you click from the recommendations, it will populate the location on its own

Stretch: unique logins, upload photos from hike

## Technologies to Use:
### Backend:
* Django
* Postgres

### Frontend
* React with TypeScript (written with functions)

### Other
* Weather API
* Google Places API
* Google Maps API
* d3

## Wireframing
![Recommendations Wireframe](/readme_images/recommendations.png)
![Diary Wireframe](/readme_images/diary.png)

#### Resources Used:
- [Django documentation](https://docs.djangoproject.com/en/3.2/)
- [Getting start with Django](https://www.djangoproject.com/start/)
- [Django app tutotial](https://docs.djangoproject.com/en/3.2/intro/tutorial01/)
- [Django postSQL databse creation tutorial](https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-your-django-application-on-ubuntu-14-04)
- [Build ToDo App: React Django Tutorial](https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react)
- Learning React, Edition 2 by Alex Banks & Eve Porcello