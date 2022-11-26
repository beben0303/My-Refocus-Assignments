const dishes = [
    {
        'dishId' : "friedrice",
        'dishName' : "Fried Rice",
        'dishPrice' : 50.00,
        'ingredients' : ["rice", "egg", "garlic", "spring onion", "soy sauce", "salt", "msg"]
    },
    {
        'dishId' : "porkadobo",
        'dishName' : "Pork Adobo",
        'dishPrice' : 100.00,
        'ingredients' : ["pork", "vinegar", "soy sauce", "sugar", "garlic", "onion", "red chili", "pork stock", "salt", "msg"]
    },
    {
        'dishId' : "porknilaga",
        'dishName' : "Pork Nilaga",
        'dishPrice' : 100.00,
        'ingredients' : ["pork", "potato", "cabage", "corn", "tomato", "garlic", "onion", "green long chili", "pork stock", "fish sauce", "msg"]
    }
];

const menu = {
    'restaurantName' : "Your Favorite Restaurant",
    'dishes' : dishes,
    'displayRestaurantName' : function() {
        console.log(this.restaurantName + `\n`);
    },
    'displayMenu' : function() {
        for (dish of this.dishes){
            console.log(`${dish.dishName}, P${dish.dishPrice}`);
            console.log(`Contains ${dish.ingredients}\n`);
        }
    }
};

menu.displayRestaurantName();
menu.displayMenu();