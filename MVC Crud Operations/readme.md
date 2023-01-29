GROCERY APP (CRUD WITH USING MONGOOSE)
Write APIs for a Grocery App.
Grocery data should have the following fields:

`name`: The name of the product, which is required and must be a string.
`description`: A brief description of the product, which is optional and must be a string.
`category`: The category of the product, which is required and must be a string.
`price`: The price of the product, which is required and must be a number.
`image`: The URL of an image of the product, which is optional and must be a string.
`quantity`: The quantity of the product, which is required and must be a number.
`rating`: The rating of the product, which is optional and must be a number.
It should have the following API Routes
- A POST route to posting the Grocery data to the database.

- A GET route to get the data of all the Grocery items.
    - There will be two queries as well, if they are passed the Grocery Items between "price_low" and "price_high", should be there in response.
    - There will be one more query "category", which will get those Grocery Items matching the category 
  that has been passed.  
    
- A PATCH/PUT route to update or modify the data of any particular Grocery Item.

- A DELETE route to delete the data of any particular Grocery Item.
MongoDB atlas has to be used all the time here.
Middlewares
1. validator: This will validate the data while posting, it will validate that all the fields that is "Name", "category", "price" and "quantity"  are present in the document or not. If not present then it should send the following response.

{
"err": "All the fields are not there"
}

 2. record: This middleware will keep a record of all the Grocery Item data that has been deleted of updated in a "records.txt" file, an example has been given below.

The document with id:63baae803240a41c75a4cb72 has been updated.
The document with id:63baae803240a41c75a47892 has been deleted.
Important Note
- You have to follow MVC structure.
       - config => should contain the configuration files like "db.js".
       - models => will contains the models that you are going to use.
       - routes => will contain the routes.
       - middlewares => will contain the middlewares that yo are going to use.


