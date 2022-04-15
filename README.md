# Getting Started with StatsBomb Frontend Application

TO RUN PROJECT.
In the project directory, you can run:

1. Open your terminal, and perform `npm install` command.

2. Perform `npm start`
Then:
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


# Getting Started with StatsBomb Backend Application

<h1>STATSBOMB BACKEND</h1>

TO RUN PROJECT.
In the project directory, you can run:

Make sure you have python, pip, and django installed !!

if not:

Go to https://python.org to download python 3.10 version,
Also download MongoDB Compass at https://mongodb.com 
to connect the database with the database engine
inside the `statsbomb-backend/settings.py` file.

Then:
Open your terminal and perform there command 
operations in `statsbomb-backend` project directory
1. `pip3 install pipenv`
2. `pipenv install django`
3. `pip freeze > requirements.txt` 
4. `python manage.py makemigrations match`, `python manage.py migrate match`,
    `python manage.py makemigrations teams`, `python manage.py migrate teams`,
    `python manage.py makemigrations players`, `python manage.py migrate players`,
    `python manage.py makemigrations stats`, `python manage.py migrate stats`
5. `python manage.py runserver`
6. Now open your postman account on application or on web browser, and run a GET method for each
    APIs Starting development server at http://127.0.0.1:8000/. You can then replace the json files 
    datas used in the frontend by just consuming the APIs GET method on your local machine.