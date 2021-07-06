# Python stuff
cd ..
pip install -r requirements.txt 
cd hiking_backend
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py collectstatic # this will take all the static files in the Postgres database and moves them to the static folder 
# now, the static folder contains both information from react static files and postgres db files 