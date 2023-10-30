# books-and-author


Used MVC pattern to Create Backend
Used .env File to hide the mongo db api 


step 1=>
run the command npm install/ npm i to install node modules as they are ignored during repo upload

step 2=> use use monogodb atlas url for db set setup and paste that in dotenv file

step 3 =>
if you saved it in any other folder then naviagate to that folder and then run command
 nodemon ./index.js     (as index.js is my enter point )

step 4 => it will start both server and also will connect with database

step 5=> to check api(s) 
open postman and then test each api 


http://localhost:5000/api/book/add-book     =>                                      ** post api** 
use body as raw(json)
{
  "title":"The Indian Story",
  "author":"Bimal Jalal",
  "summary":"Fiction"
}

http://localhost:5000/api/book/get-books                                        => **get all books from the database  (Get Api)**
http://localhost:5000/api/book/get-single-book/653fcd2863ff6479e4b3bfac         => **get single book by id            (Get Api)**
http://localhost:5000/api/book/edit/653fc6e550e37e7c8faa6149                    => **edit the book by id              (Post Api)**
http://localhost:5000/api/book/delete-book/653fcd2863ff6479e4b3bfa7             => **delete book by id                (Delete Api)**


Deployed The Backend using Render
delpoyed url https://backend-gi9l.onrender.com
![image](https://github.com/spandit230496/books-and-author/assets/117799882/e2734354-04b7-42ee-8eed-0deb3fca0a65)


