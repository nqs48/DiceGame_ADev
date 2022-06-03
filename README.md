# SofkaS4T1-DiceGame-API_REST
Demo project where a separation of responsibilities is united using the concepts of:  - Template (view), Logic (controller) , Data (Model). Rest-oriented system.

---

<!-- ABOUT THE PROJECT -->
## About The Project

Responsive design of a dynamic web page, where you can play a game of dice with your friends or family obtaining an undisputed winner.

- Key frontend and backend concepts
- Rest API with Nodejs
- API consumption from the frontend

### [https://adice-game.herokuapp.com/](https://adice-game.herokuapp.com/)


---

# PROJECT REVIEW:

### UI Index Web Page

Responsive design of a dynamic web page

![image](https://res.cloudinary.com/adev48/image/upload/v1653288980/Sofka%20Assets/Semana%204/index_jgoxw8.png)


---

## CREATE GAME:

### Form to create game

Game creation with three players required.

![image](https://res.cloudinary.com/adev48/image/upload/v1653288978/Sofka%20Assets/Semana%204/cretaeGameUI_efx0jh.png)

### Form Validation

Form validation with required fields.

![image](https://res.cloudinary.com/adev48/image/upload/v1653288979/Sofka%20Assets/Semana%204/formValidation_r0eac1.png)


---

## FIND GAMES:

### Find By ID

Filter to find games from their unique identifier.

![image](https://res.cloudinary.com/adev48/image/upload/v1653288979/Sofka%20Assets/Semana%204/UiFindGame_kuaonr.png)


### Find All Games

Method to find all available games in the database.

![image](https://res.cloudinary.com/adev48/image/upload/v1653288978/Sofka%20Assets/Semana%204/allGamesInfo_uftybe.png)


### Can't Find All Games

View display when there are no games in the database.

![image](https://res.cloudinary.com/adev48/image/upload/v1653290878/Sofka%20Assets/Semana%204/noData_diggb3.png)

### Can't Find By ID

View display when game is not found by identifier.

![image](https://res.cloudinary.com/adev48/image/upload/v1653290878/Sofka%20Assets/Semana%204/cantFindID_fuhlrw.png)


---

## DETAILS GAME:

### State of the game inProgress: True

Status to validate if the game can be played.

![image](https://res.cloudinary.com/adev48/image/upload/v1653288980/Sofka%20Assets/Semana%204/waitingPlayGame_ibpxe0.png)


### State of the game inProgress: False

If the game has been played, I could see the details of the winner.

![image](https://res.cloudinary.com/adev48/image/upload/v1653288978/Sofka%20Assets/Semana%204/UIGamePlayed_pbigvv.png)


### View Winner

See the details of the winner gives game.

![image](https://res.cloudinary.com/adev48/image/upload/v1653288978/Sofka%20Assets/Semana%204/viewWinner_xqsrz1.png)


---

## DELETE GAME:

### Delete some game

Deleting a game that has been played or not.

![image](https://res.cloudinary.com/adev48/image/upload/v1653288978/Sofka%20Assets/Semana%204/deleteGame_w9wpix.png)


---

## ERROR UI:

### Generic View for Not Found

If a route is not found automatically an error view is displayed.

![image](https://res.cloudinary.com/adev48/image/upload/v1653288980/Sofka%20Assets/Semana%204/UIError_fkpw2t.png)


## Built With

This section contains the platforms that were used for the project.

* [Node js](https://nodejs.org/es/)
* [Git](https://git-scm.com/)
* [MongoDB Compass](https://www.mongodb.com/es/products/compass)


### Installation

Install each one the pieces of software previously mentioned.


1. Clone the repo

- HTTPS
   ```
   $ git clone https://github.com/nqs48/SofkaS4T1-API_REST-DiceGame.git
   ```


- SSH
   ```
   $ git clone git@github.com:nqs48/SofkaS4T1-API_REST-DiceGame.git
   ```


2. Open the project with VisualStudio Code (In the root proyect directory)

   ```
   $ open .
   ```
   
3. Install the node package (In the root proyect directory)

   ```
   $ npm install
   ```
   
4. Set your environment variables or write the connection string of your cluster in mongo db (File App.js) 

   ```
    mongodb+srv://<Your-User>:<Your-Password>@cluster0.j505h.mongodb.net/<Your-DataBase>?retryWrites=true&w=majority
    
   ```   
   
5. Run the proyect (In the root proyect directory)

   ```
   $ npm run start
   ```

6. Open the localhost port 3000 in your preference browser

   ```
   http://localhost:3000/
   
   ```

---

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

---

<!-- CONTACT -->
## Collaborators
```
Nestor Quiroga Suarez
Jr. Software Developer
```
- LinkedIn => [Nestor Quiroga Suárez](https://www.linkedin.com/in/nqs48/)


Project Link: [https://adice-game.herokuapp.com/](https://adice-game.herokuapp.com/)

<p align="right">(<a href="#top">back to top</a>)</p>
