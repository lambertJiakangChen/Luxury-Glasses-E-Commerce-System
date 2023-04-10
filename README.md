# EECS4413-Project
Luxury Glasses E-Commerce System

#### Prerequisites:
* must have maven installed on your computer

### How to intall and Run:

* clone the repository on your local computer
* in the terminal nagivate to the EECS4413-Project folder/directory that you cloned
* run the command ```mvn spring-boot:run```
* once the application is built, open your browser and enter http://localhost:8080/
* If you run into an error involving node modules, delete the node_modules folder in the 4413_luxuryglasses_estore-react app and re-run the command

### Login and Register:
* Data is preloaded when the spring/react app is run. There is one REGULAR and one ADMIN account preloaded.
* REGULAR account credentials: user=justinB31, pass=Qwerty12
* ADMIN account credentials: user=adminAcc, pass=Qwerty
* Note: only an admin can register another admin account. To register an admin, please login with the preloaded admin account, navigate to account, and fill out the form.
