function pizzaOven(crustType, sauceType, cheeses, toppings) {
    pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

test1 = pizzaOven('deep dish', 'traditional', ['mozzarella'], ['sausage', 'pepperoni']);
test2 = pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushroom', 'olives', 'onions']);
test3 = pizzaOven('New York Style', 'marinara', ['mozzarella', 'goat cheese'], ['pineapple', 'olives', 'garlic']);
test4 = pizzaOven('hand tossed', 'marinara', ['mozzarella'], ['red pepper', 'artichoke', 'spinach']);

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);


function randomPizza(crustType, sauceType, cheeses, toppings) {
    crustType = ['New York Style', 'Deep Dish', 'Hand Tossed', 'Gluten Free'];
    sauceType = ['Traditional', 'Spicy', 'Marinara'];
    cheeses = ['Mozzarella', 'Feta', 'Muenster', 'Provolone'];
    toppings = ["Pepperoni", "Mushrooms", "Onions", "Green peppers", "Sausage", "Olives", "Bacon", "Tomatoes", "Spinach", "Pineapple"];

    randomPie = {};
    randomPie.crust = crustType[Math.floor(Math.random() * crustType.length)];
    randomPie.sauce = sauceType[Math.floor(Math.random() * sauceType.length)];
    randomPie.cheese = cheeses[Math.floor(Math.random() * cheeses.length)];
    randomPie.toppings = toppings[Math.floor(Math.random() * toppings.length)];
    return randomPie;
}

test5 = randomPizza();
console.log(test5);