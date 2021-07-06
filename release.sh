# Python stuff
cd hiking_backend
python3 manage.py makemigrations
python3 manage.py migrate
# now, the static folder contains both information from react static files and postgres db files 