# project setup :-

# NORMAL
1. clone the project
2. npm install (from root directory)
3. npm start 
* api accessible on port 3000

# Api are : 

postman link : 
https://www.getpostman.com/collections/df53f4cab7275b861762

# register user
1. http://localhost:3000/user/register  (Post)
    Body params : 
    1. username : user1
    2. password : password1

# login user (returns jwt token)
2. http://localhost:3000/user/login     (Post)
    Body params : 
    1. username : user1
    2. password : password1

# add items to card for loged in user (requires jwt token)
3. http://localhost:3000/cart/add       (Post)
    Body params : 
    1. itemname : item1

# returns user cart (requires jwt token)
4. http://localhost:3000/cart/usercart  (Get)

# returns all items 
5. http://localhost:3000/item/items     (Get)  
