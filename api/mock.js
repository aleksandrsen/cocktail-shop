const eventsBase = '/img/events';
const bartendersBase = '/img/bartenders';
const blogPostsBase = '/img/blog-posts';
const instagramBase = '/img/instagram';

let normalizeCocktails = [
    {
        "idDrink": "12560",
        "strDrink": "Afterglow",
        "strCategory": "Cocktail",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
        "rate": 2,
        "price": 15,
        "ingredients": ["grenadine", "orange juice", "pineapple juice"]
    },
    {
        "idDrink": "12562",
        "strDrink": "Alice Cocktail",
        "strCategory": "Cocktail",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg",
        "rate": 3,
        "price": 15,
        "ingredients": ["grenadine", "orange juice", "pineapple juice", "cream"]
    },
    {
        "idDrink": "12862",
        "strDrink": "Aloha Fruit punch",
        "strCategory": "Punch Party Drink",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wsyvrt1468876267.jpg",
        "rate": 4,
        "price": 18,
        "ingredients": ["water", "ginger", "guava juice", "lemon juice", "pineapple", "sugar", "pineapple juice"]
    },
    {
        "idDrink": "15106",
        "strDrink": "Apello",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg",
        "rate": 1,
        "price": 11,
        "ingredients": ["orange juice", "grapefruit juice", "apple juice", "maraschino cherry"]
    },
    {
        "idDrink": "12710",
        "strDrink": "Apple Berry Smoothie",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xwqvur1468876473.jpg",
        "rate": 5,
        "price": 17,
        "ingredients": ["berries", "apple"]
    },
    {
        "idDrink": "12564",
        "strDrink": "Apple Karate",
        "strCategory": "Cocktail",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/syusvw1468876634.jpg",
        "rate": 3,
        "price": 15,
        "ingredients": ["apple juice", "carrot"]
    },
    {
        "idDrink": "12708",
        "strDrink": "Banana Cantaloupe Smoothie",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uqxqsy1468876703.jpg",
        "rate": 5,
        "price": 17,
        "ingredients": ["cantaloupe", "banana"]
    },
    {
        "idDrink": "12654",
        "strDrink": "Banana Milk Shake",
        "strCategory": "Milk Float Shake",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/rtwwsx1472720307.jpg",
        "rate": 4,
        "price": 16,
        "ingredients": ["milk", "orange juice", "sugar syrup", "banana"]
    },
    {
        "idDrink": "12656",
        "strDrink": "Banana Strawberry Shake",
        "strCategory": "Milk Float Shake",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vqquwx1472720634.jpg",
        "rate": 5,
        "price": 16,
        "ingredients": ["strawberries", "banana", "yoghurt", "milk", "honey"]
    },
    {
        "idDrink": "12658",
        "strDrink": "Banana Strawberry Shake Daiquiri-type",
        "strCategory": "Milk Float Shake",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uvypss1472720581.jpg",
        "rate": 5,
        "price": 16,
        "ingredients": ["strawberries", "banana", "apple juice"]
    },
    {
        "idDrink": "12572",
        "strDrink": "Bora Bora",
        "strCategory": "Cocktail",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xwuqvw1473201811.jpg",
        "rate": 2,
        "price": 15,
        "ingredients": ["pineapple juice", "passion fruit juice", "lemon juice", "grenadine"]
    },
    {
        "idDrink": "12730",
        "strDrink": "Castillian Hot Chocolate",
        "strCategory": "Cocoa",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/3nbu4a1487603196.jpg",
        "rate": 5,
        "price": 17,
        "ingredients": ["cocoa powder", "sugar", "cornstarch", "water", "milk"]
    },
    {
        "idDrink": "12732",
        "strDrink": "Chocolate Beverage",
        "strCategory": "Cocoa",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/jbqrhv1487603186.jpg",
        "rate": 4,
        "price": 17,
        "ingredients": ["milk", "chocolate", "cinnamon", "egg"]
    },
    {
        "idDrink": "12734",
        "strDrink": "Chocolate Drink",
        "strCategory": "Cocoa",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/q7w4xu1487603180.jpg",
        "rate": 3,
        "price": 17,
        "ingredients": ["chocolate", "milk", "water"]
    },
    {
        "idDrink": "17108",
        "strDrink": "Coke and Drops",
        "strCategory": "Soft Drink Soda",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/yrtxxp1472719367.jpg",
        "rate": 3,
        "price": 11,
        "ingredients": ["coca-cola", "lemon juice"]
    },
    {
        "idDrink": "12890",
        "strDrink": "Cranberry Punch",
        "strCategory": "Punch Party Drink",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/mzgaqu1504389248.jpg",
        "rate": 3,
        "price": 18,
        "ingredients": ["cranberry juice", "sugar", "pineapple juice", "almond flavoring", "ginger ale"]
    },
    {
        "idDrink": "12736",
        "strDrink": "Drinking Chocolate",
        "strCategory": "Cocoa",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/u6jrdf1487603173.jpg",
        "rate": 4,
        "price": 17,
        "ingredients": ["heavy cream", "milk", "cinnamon", "vanilla", "chocolate", "whipped cream"]
    },
    {
        "idDrink": "12668",
        "strDrink": "Egg Cream",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/mvis731484430445.jpg",
        "rate": 2,
        "price": 16,
        "ingredients": ["chocolate syrup", "milk", "soda water"]
    },
    {
        "idDrink": "12768",
        "strDrink": "Frappé",
        "strCategory": "Coffee Tea",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vqwryq1441245927.jpg",
        "rate": 1,
        "price": 17,
        "ingredients": ["coffee", "milk", "sugar"]
    },
    {
        "idDrink": "12670",
        "strDrink": "Fruit Cooler",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/i3tfn31484430499.jpg",
        "rate": 3,
        "price": 16,
        "ingredients": ["apple juice", "strawberries", "sugar", "lemon", "apple", "soda water", "ice"]
    },
    {
        "idDrink": "12672",
        "strDrink": "Fruit Flip-Flop",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/nfdx6p1484430633.jpg",
        "rate": 3,
        "price": 16,
        "ingredients": ["yoghurt", "fruit juice"]
    },
    {
        "idDrink": "12674",
        "strDrink": "Fruit Shake",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/q0fg2m1484430704.jpg",
        "rate": 2,
        "price": 16,
        "ingredients": ["yoghurt", "banana", "orange juice", "fruit", "ice"]
    },
    {
        "idDrink": "12712",
        "strDrink": "Grape lemon pineapple Smoothie",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/54z5h71487603583.jpg",
        "rate": 5,
        "price": 17,
        "ingredients": ["grapes", "lemon", "pineapple"]
    },
    {
        "idDrink": "12954",
        "strDrink": "Holloween Punch",
        "strCategory": "Punch Party Drink",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/lfeoe41504888925.jpg",
        "rate": 3,
        "price": 19,
        "ingredients": ["grape juice", "carbonated soft drink", "sherbet", "sherbet"]
    },
    {
        "idDrink": "12738",
        "strDrink": "Hot Chocolate to Die for",
        "strCategory": "Cocoa",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/0lrmjp1487603166.jpg",
        "rate": 5,
        "price": 17,
        "ingredients": ["chocolate", "butter", "vanilla extract", "half-and-half", "marshmallows"]
    },
    {
        "idDrink": "12770",
        "strDrink": "Iced Coffee",
        "strCategory": "Coffee Tea",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/ytprxy1454513855.jpg",
        "rate": 2,
        "price": 17,
        "ingredients": ["coffee", "sugar", "water", "milk"]
    },
    {
        "idDrink": "17176",
        "strDrink": "Ipamena",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Non Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/yswuwp1469090992.jpg",
        "rate": 1,
        "price": 11,
        "ingredients": ["lime", "brown sugar", "passion fruit juice", "ginger ale", "ice"]
    },
    {
        "idDrink": "12688",
        "strDrink": "Just a Moonmint",
        "strCategory": "Milk Float Shake",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/znald61487604035.jpg",
        "rate": 3,
        "price": 16,
        "ingredients": ["milk", "chocolate syrup", "mint syrup"]
    },
    {
        "idDrink": "12720",
        "strDrink": "Kill the cold Smoothie",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/7j1z2e1487603414.jpg",
        "rate": 5,
        "price": 17,
        "ingredients": ["ginger", "lemon", "water"]
    },
    {
        "idDrink": "12714",
        "strDrink": "Kiwi Papaya Smoothie",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/jogv4w1487603571.jpg",
        "rate": 5,
        "price": 17,
        "ingredients": ["kiwi", "papaya"]
    },
    {
        "idDrink": "12690",
        "strDrink": "Lassi - A South Indian Drink",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/iq6scx1487603980.jpg",
        "rate": 5,
        "price": 16,
        "ingredients": ["yoghurt", "water", "cumin seed", "salt", "mint"]
    },
    {
        "idDrink": "12698",
        "strDrink": "Lassi - Mango",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/1bw6sd1487603816.jpg",
        "rate": 3,
        "price": 16,
        "ingredients": ["mango", "yoghurt", "sugar", "water"]
    },
    {
        "idDrink": "12696",
        "strDrink": "Lassi - Sweet",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/9jeifz1487603885.jpg",
        "rate": 3,
        "price": 16,
        "ingredients": ["yoghurt", "water", "sugar", "salt", "lemon juice"]
    },
    {
        "idDrink": "12692",
        "strDrink": "Lassi Khara",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/m1suzm1487603970.jpg",
        "rate": 2,
        "price": 16,
        "ingredients": ["yoghurt", "water", "salt", "asafoetida"]
    },
    {
        "idDrink": "12694",
        "strDrink": "Lassi Raita",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/s4x0qj1487603933.jpg",
        "rate": 2,
        "price": 16,
        "ingredients": ["yoghurt", "ice", "sugar", "lime", "salt"]
    },
    {
        "idDrink": "12702",
        "strDrink": "Lemouroudji",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/eirmo71487603745.jpg",
        "rate": 2,
        "price": 17,
        "ingredients": ["ginger", "water", "lemon", "sugar", "cayenne pepper"]
    },
    {
        "idDrink": "12704",
        "strDrink": "Limeade",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5jdp5r1487603680.jpg",
        "rate": 1,
        "price": 17,
        "ingredients": ["lime", "sugar", "soda water", "lime peel"]
    },
    {
        "idDrink": "12716",
        "strDrink": "Mango Orange Smoothie",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vdp2do1487603520.jpg",
        "rate": 5,
        "price": 17,
        "ingredients": ["mango", "orange"]
    },
    {
        "idDrink": "12774",
        "strDrink": "Masala Chai",
        "strCategory": "Coffee Tea",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uyrpww1441246384.jpg",
        "rate": 2,
        "price": 17,
        "ingredients": ["water", "tea", "ginger", "cardamom", "cloves", "cinnamon", "black pepper", "sugar", "milk"]
    },
    {
        "idDrink": "12776",
        "strDrink": "Melya",
        "strCategory": "Coffee Tea",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xwtptq1441247579.jpg",
        "rate": 1,
        "price": 17,
        "ingredients": ["espresso", "honey", "cocoa powder"]
    },
    {
        "idDrink": "12744",
        "strDrink": "Microwave Hot Cocoa",
        "strCategory": "Cocoa",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/8y4x5f1487603151.jpg",
        "rate": 4,
        "price": 17,
        "ingredients": ["sugar", "cocoa powder", "salt", "water", "milk", "vanilla extract"]
    },
    {
        "idDrink": "12746",
        "strDrink": "Nuked Hot Chocolate",
        "strCategory": "Cocoa",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xcu6nb1487603142.jpg",
        "rate": 4,
        "price": 17,
        "ingredients": ["cocoa powder", "sugar", "vanilla extract", "milk"]
    },
    {
        "idDrink": "12748",
        "strDrink": "Orange Scented Hot Chocolate",
        "strCategory": "Cocoa",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/hdzwrh1487603131.jpg",
        "rate": 5,
        "price": 17,
        "ingredients": ["milk", "chocolate", "orange peel", "espresso", "nutmeg"]
    },
    {
        "idDrink": "12618",
        "strDrink": "Orangeade",
        "strCategory": "Cocktail",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/ytsxxw1441167732.jpg",
        "rate": 2,
        "price": 16,
        "ingredients": ["lemon juice", "orange juice", "sugar syrup", "soda water"]
    },
    {
        "idDrink": "12718",
        "strDrink": "Pineapple Gingerale Smoothie",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/eg9i1d1487603469.jpg",
        "rate": 5,
        "price": 17,
        "ingredients": ["ginger", "pineapple"]
    },
    {
        "idDrink": "15092",
        "strDrink": "Pysch Vitamin Light",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xsqsxw1441553580.jpg",
        "rate": 4,
        "price": 10,
        "ingredients": ["orange juice", "apple juice", "pineapple juice", "ice"]
    },
    {
        "idDrink": "12630",
        "strDrink": "Rail Splitter",
        "strCategory": "Cocktail",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/stsuqq1441207660.jpg",
        "rate": 3,
        "price": 16,
        "ingredients": ["sugar syrup", "lemon juice", "ginger ale"]
    },
    {
        "idDrink": "12750",
        "strDrink": "Spanish chocolate",
        "strCategory": "Cocoa",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/pra8vt1487603054.jpg",
        "rate": 4,
        "price": 17,
        "ingredients": ["milk", "chocolate", "cinnamon", "egg yolk"]
    },
    {
        "idDrink": "13032",
        "strDrink": "Spiced Peach Punch",
        "strCategory": "Punch Party Drink",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qxvypq1468924331.jpg",
        "rate": 4,
        "price": 10,
        "ingredients": ["peach nectar", "orange juice", "brown sugar", "cinnamon", "cloves", "lime juice"]
    },
    {
        "idDrink": "12780",
        "strDrink": "Spiking coffee",
        "strCategory": "Coffee Tea",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/isql6y1487602375.jpg",
        "rate": 3,
        "price": 17,
        "ingredients": ["coffee", "cinnamon"]
    },
    {
        "idDrink": "13036",
        "strDrink": "Strawberry Lemonade",
        "strCategory": "Punch Party Drink",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/spvvxp1468924425.jpg",
        "rate": 4,
        "price": 10,
        "ingredients": ["lemon", "sugar", "strawberries", "water"]
    },
    {
        "idDrink": "12722",
        "strDrink": "Strawberry Shivers",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/9h1vvt1487603404.jpg",
        "rate": 4,
        "price": 17,
        "ingredients": ["strawberries", "honey", "water"]
    },
    {
        "idDrink": "12724",
        "strDrink": "Sweet Bananas",
        "strCategory": "Milk Float Shake",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/sxpcj71487603345.jpg",
        "rate": 3,
        "price": 17,
        "ingredients": ["milk", "banana", "honey"]
    },
    {
        "idDrink": "12782",
        "strDrink": "Thai Coffee",
        "strCategory": "Coffee Tea",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wquwxs1441247025.jpg",
        "rate": 2,
        "price": 17,
        "ingredients": ["coffee", "coriander", "cardamom", "sugar", "whipping cream", "ice"]
    },
    {
        "idDrink": "12784",
        "strDrink": "Thai Iced Coffee",
        "strCategory": "Coffee Tea",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/rqpypv1441245650.jpg",
        "rate": 4,
        "price": 17,
        "ingredients": ["coffee", "sugar", "cream", "cardamom"]
    },
    {
        "idDrink": "12786",
        "strDrink": "Thai Iced Tea",
        "strCategory": "Coffee Tea",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/trvwpu1441245568.jpg",
        "rate": 3,
        "price": 17,
        "ingredients": ["tea", "water", "condensed milk", "ice", "mint"]
    },
    {
        "idDrink": "12726",
        "strDrink": "Tomato Tang",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/869qr81487603278.jpg",
        "rate": 2,
        "price": 17,
        "ingredients": ["tomato juice", "lemon juice", "celery salt"]
    },
    {
        "idDrink": "12728",
        "strDrink": "Yoghurt Cooler",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Non alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/trttrv1441254466.jpg",
        "rate": 3,
        "price": 17,
        "ingredients": ["yoghurt", "fruit", "ice"]
    },
    {
        "idDrink": "14029",
        "strDrink": "'57 Chevy with a White License Plate",
        "strCategory": "Cocktail",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg",
        "rate": 5,
        "price": 10,
        "ingredients": ["creme de cacao", "vodka"]
    },
    {
        "idDrink": "15395",
        "strDrink": "1-900-FUK-MEUP",
        "strCategory": "Shot",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uxywyw1468877224.jpg",
        "rate": 3,
        "price": 13,
        "ingredients": ["absolut kurant", "grand marnier", "chambord raspberry liqueur", "midori melon liqueur", "malibu rum", "amaretto", "cranberry juice", "pineapple juice"]
    },
    {
        "idDrink": "15423",
        "strDrink": "110 in the shade",
        "strCategory": "Beer",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg",
        "rate": 4,
        "price": 14,
        "ingredients": ["lager", "tequila"]
    },
    {
        "idDrink": "14588",
        "strDrink": "151 Florida Bushwacker",
        "strCategory": "Milk Float Shake",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/rvwrvv1468877323.jpg",
        "rate": 5,
        "price": 15,
        "ingredients": ["malibu rum", "light rum", "151 proof rum", "dark creme de cacao", "cointreau", "milk", "coconut liqueur", "vanilla ice-cream"]
    },
    {
        "idDrink": "15346",
        "strDrink": "155 Belmont",
        "strCategory": "Cocktail",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        "rate": 2,
        "price": 13,
        "ingredients": ["dark rum", "light rum", "vodka", "orange juice"]
    },
    {
        "idDrink": "17060",
        "strDrink": "24k nightmare",
        "strCategory": "Shot",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/yyrwty1468877498.jpg",
        "rate": 3,
        "price": 10,
        "ingredients": ["goldschlager", "jägermeister", "rumple minze", "151 proof rum"]
    },
    {
        "idDrink": "15288",
        "strDrink": "252",
        "strCategory": "Shot",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg",
        "rate": 0,
        "price": 12,
        "ingredients": ["151 proof rum", "wild turkey"]
    },
    {
        "idDrink": "13899",
        "strDrink": "3 Wise Men",
        "strCategory": "Shot",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wxqpyw1468877677.jpg",
        "rate": 2,
        "price": 18,
        "ingredients": ["jack daniels", "johnnie walker", "jim beam"]
    },
    {
        "idDrink": "15300",
        "strDrink": "3-Mile Long Island Iced Tea",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
        "rate": 5,
        "price": 13,
        "ingredients": ["gin", "light rum", "tequila", "triple sec", "vodka", "coca-cola", "sweet and sour", "bitters", "lemon"]
    },
    {
        "idDrink": "13581",
        "strDrink": "410 Gone",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xtuyqv1472669026.jpg",
        "rate": 2,
        "price": 15,
        "ingredients": ["peach vodka", "coca-cola"]
    },
    {
        "idDrink": "14598",
        "strDrink": "50/50",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wwpyvr1461919316.jpg",
        "rate": 1,
        "price": 15,
        "ingredients": ["vanilla vodka", "grand marnier", "orange juice"]
    },
    {
        "idDrink": "17105",
        "strDrink": "501 Blue",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/ywxwqs1461867097.jpg",
        "rate": 2,
        "price": 11,
        "ingredients": ["blue curacao", "blueberry schnapps", "vodka", "sour mix", "7-up"]
    },
    {
        "idDrink": "13940",
        "strDrink": "69 Special",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg",
        "rate": 2,
        "price": 19,
        "ingredients": ["gin", "7-up", "lemon juice"]
    },
    {
        "idDrink": "14229",
        "strDrink": "747",
        "strCategory": "Shot",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg",
        "rate": 0,
        "price": 12,
        "ingredients": ["kahlua", "baileys irish cream", "frangelico"]
    },
    {
        "idDrink": "178318",
        "strDrink": "747 Drink",
        "strCategory": "Cocktail",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/8ozumt1572901761.jpg",
        "rate": 2,
        "price": 18,
        "ingredients": ["vodka", "roses sweetened lime juice", "cranberry juice", "sprite"]
    },
    {
        "idDrink": "16108",
        "strDrink": "9 1/2 Weeks",
        "strCategory": "Cocktail",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xvwusr1472669302.jpg",
        "rate": 2,
        "price": 11,
        "ingredients": ["absolut citron", "orange curacao", "strawberry liqueur", "orange juice"]
    },
    {
        "idDrink": "15200",
        "strDrink": "A Day at the Beach",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/trptts1454514474.jpg",
        "rate": 4,
        "price": 12,
        "ingredients": ["coconut rum", "amaretto", "orange juice", "grenadine"]
    },
    {
        "idDrink": "17831",
        "strDrink": "A Furlong Too Late",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/ssxvww1472669166.jpg",
        "rate": 4,
        "price": 18,
        "ingredients": ["light rum", "ginger beer", "lemon peel"]
    },
    {
        "idDrink": "16943",
        "strDrink": "A Gilligan's Island",
        "strCategory": "Cocktail",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wysqut1461867176.jpg",
        "rate": 4,
        "price": 19,
        "ingredients": ["vodka", "peach schnapps", "orange juice", "cranberry juice"]
    },
    {
        "idDrink": "15675",
        "strDrink": "A midsummernight dream",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/ysqvqp1461867292.jpg",
        "rate": 5,
        "price": 16,
        "ingredients": ["vodka", "kirschwasser", "strawberry liqueur", "strawberries", "schweppes russchian"]
    },
    {
        "idDrink": "17832",
        "strDrink": "A Night In Old Mandalay",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vyrvxt1461919380.jpg",
        "rate": 5,
        "price": 18,
        "ingredients": ["light rum", "añejo rum", "orange juice", "lemon juice", "ginger ale", "lemon peel"]
    },
    {
        "idDrink": "16405",
        "strDrink": "A Piece of Ass",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/tqxyxx1472719737.jpg",
        "rate": 3,
        "price": 14,
        "ingredients": ["amaretto", "southern comfort", "ice", "sour mix"]
    },
    {
        "idDrink": "14564",
        "strDrink": "A Splash of Nash",
        "strCategory": "Shot",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/rsvtrr1472668201.jpg",
        "rate": 4,
        "price": 15,
        "ingredients": ["cranberry juice", "soda water", "midori melon liqueur", "creme de banane"]
    },
    {
        "idDrink": "17005",
        "strDrink": "A True Amaretto Sour",
        "strCategory": "Cocktail",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/rptuxy1472669372.jpg",
        "rate": 5,
        "price": 10,
        "ingredients": ["amaretto", "lemon", "ice", "maraschino cherry"]
    },
    {
        "idDrink": "17833",
        "strDrink": "A. J.",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uryyrr1472811418.jpg",
        "rate": 1,
        "price": 18,
        "ingredients": ["applejack", "grapefruit juice"]
    },
    {
        "idDrink": "14560",
        "strDrink": "A.D.M. (After Dinner Mint)",
        "strCategory": "Cocktail",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/ruxuvp1472669600.jpg",
        "rate": 5,
        "price": 15,
        "ingredients": ["white creme de menthe", "southern comfort", "vodka", "hot chocolate"]
    },
    {
        "idDrink": "17222",
        "strDrink": "A1",
        "strCategory": "Cocktail",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
        "rate": 0,
        "price": 12,
        "ingredients": ["gin", "grand marnier", "lemon juice", "grenadine"]
    },
    {
        "idDrink": "17834",
        "strDrink": "Abbey Cocktail",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/quyyuw1472811568.jpg",
        "rate": 3,
        "price": 18,
        "ingredients": ["gin", "orange bitters", "orange", "cherry"]
    },
    {
        "idDrink": "17223",
        "strDrink": "Abbey Martini",
        "strCategory": "Cocktail",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/2mcozt1504817403.jpg",
        "rate": 3,
        "price": 12,
        "ingredients": ["gin", "sweet vermouth", "orange juice", "angostura bitters"]
    },
    {
        "idDrink": "13501",
        "strDrink": "ABC",
        "strCategory": "Shot",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
        "rate": 0,
        "price": 15,
        "ingredients": ["amaretto", "baileys irish cream", "cognac"]
    },
    {
        "idDrink": "17835",
        "strDrink": "Abilene",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/ysqwwt1461919465.jpg",
        "rate": 1,
        "price": 18,
        "ingredients": ["dark rum", "peach nectar", "orange juice"]
    },
    {
        "idDrink": "12790",
        "strDrink": "Absinthe #2",
        "strCategory": "Homemade Liqueur",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uxxtrt1472667197.jpg",
        "rate": 2,
        "price": 17,
        "ingredients": ["vodka", "sugar", "anise", "licorice root", "wormwood"]
    },
    {
        "idDrink": "14374",
        "strDrink": "Absolut Evergreen",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wrxrxp1472812609.jpg",
        "rate": 4,
        "price": 13,
        "ingredients": ["absolut citron", "pisang ambon", "ice", "bitter lemon"]
    },
    {
        "idDrink": "14372",
        "strDrink": "Absolut limousine",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/ssqpyw1472719844.jpg",
        "rate": 4,
        "price": 13,
        "ingredients": ["absolut citron", "lime juice", "ice", "tonic water"]
    },
    {
        "idDrink": "14360",
        "strDrink": "Absolut Sex",
        "strCategory": "Shot",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xtrvtx1472668436.jpg",
        "rate": 2,
        "price": 13,
        "ingredients": ["absolut kurant", "midori melon liqueur", "cranberry juice", "sprite"]
    },
    {
        "idDrink": "15597",
        "strDrink": "Absolut Stress #2",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xuyqrw1472811825.jpg",
        "rate": 4,
        "price": 15,
        "ingredients": ["absolut vodka", "peach schnapps", "coconut liqueur", "cranberry juice", "pineapple juice"]
    },
    {
        "idDrink": "14107",
        "strDrink": "Absolut Summertime",
        "strCategory": "Cocktail",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/trpxxs1472669662.jpg",
        "rate": 4,
        "price": 11,
        "ingredients": ["absolut citron", "sweet and sour", "sprite", "soda water", "lemon"]
    },
    {
        "idDrink": "15024",
        "strDrink": "Absolutely Cranberry Smash",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vqwstv1472811884.jpg",
        "rate": 5,
        "price": 10,
        "ingredients": ["absolut vodka", "cranberry juice", "ginger ale", "ice"]
    },
    {
        "idDrink": "17224",
        "strDrink": "Absolutely Fabulous",
        "strCategory": "Cocktail",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/abcpwr1504817734.jpg",
        "rate": 4,
        "price": 12,
        "ingredients": ["vodka", "cranberry juice", "champagne"]
    },
    {
        "idDrink": "16134",
        "strDrink": "Absolutly Screwed Up",
        "strCategory": "Cocktail",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/yvxrwv1472669728.jpg",
        "rate": 5,
        "price": 11,
        "ingredients": ["absolut citron", "orange juice", "triple sec", "ginger ale"]
    },
    {
        "idDrink": "17836",
        "strDrink": "Acapulco",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vtpsvr1472811976.jpg",
        "rate": 2,
        "price": 18,
        "ingredients": ["light rum", "triple sec", "lime juice", "sugar", "egg white", "mint"]
    },
    {
        "idDrink": "17225",
        "strDrink": "Ace",
        "strCategory": "Cocktail",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg",
        "rate": 0,
        "price": 12,
        "ingredients": ["gin", "grenadine", "heavy cream", "milk", "egg white"]
    },
    {
        "idDrink": "14610",
        "strDrink": "ACID",
        "strCategory": "Shot",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xuxpxt1479209317.jpg",
        "rate": 1,
        "price": 16,
        "ingredients": ["151 proof rum", "wild turkey"]
    },
    {
        "idDrink": "17837",
        "strDrink": "Adam",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/rwuxsv1472812169.jpg",
        "rate": 1,
        "price": 18,
        "ingredients": ["dark rum", "lemon juice", "grenadine"]
    },
    {
        "idDrink": "17226",
        "strDrink": "Adam & Eve",
        "strCategory": "Cocktail",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vfeumw1504819077.jpg",
        "rate": 2,
        "price": 12,
        "ingredients": ["gin", "cognac", "creme de cassis", "fresh lemon juice"]
    },
    {
        "idDrink": "16333",
        "strDrink": "Adam Bomb",
        "strCategory": "Punch Party Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/tpxurs1454513016.jpg",
        "rate": 2,
        "price": 13,
        "ingredients": ["rum", "vodka", "tequila", "triple sec", "fruit", "ice", "salt", "fruit juice"]
    },
    {
        "idDrink": "15567",
        "strDrink": "Adam Sunrise",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vtuyvu1472812112.jpg",
        "rate": 3,
        "price": 15,
        "ingredients": ["vodka", "lemonade", "water", "sugar"]
    },
    {
        "idDrink": "17227",
        "strDrink": "Addington",
        "strCategory": "Cocktail",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/ib0b7g1504818925.jpg",
        "rate": 2,
        "price": 12,
        "ingredients": ["sweet vermouth", "dry vermouth", "soda water"]
    },
    {
        "idDrink": "17228",
        "strDrink": "Addison",
        "strCategory": "Cocktail",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/yzva7x1504820300.jpg",
        "rate": 1,
        "price": 12,
        "ingredients": ["gin", "vermouth"]
    },
    {
        "idDrink": "14272",
        "strDrink": "Addison Special",
        "strCategory": "Cocktail",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/4vo5651493068493.jpg",
        "rate": 3,
        "price": 12,
        "ingredients": ["vodka", "grenadine", "orange juice"]
    },
    {
        "idDrink": "17229",
        "strDrink": "Adios Amigos Cocktail",
        "strCategory": "Cocktail",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/8nk2mp1504819893.jpg",
        "rate": 5,
        "price": 12,
        "ingredients": ["rum", "dry vermouth", "cognac", "gin", "fresh lime juice", "sugar syrup", "water"]
    },
    {
        "idDrink": "17838",
        "strDrink": "Adonis Cocktail",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xrvruq1472812030.jpg",
        "rate": 3,
        "price": 18,
        "ingredients": ["sweet vermouth", "sherry", "orange bitters"]
    },
    {
        "idDrink": "17839",
        "strDrink": "Affair",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wxrsxx1472720734.jpg",
        "rate": 1,
        "price": 18,
        "ingredients": ["strawberry schnapps", "orange juice", "cranberry juice", "club soda"]
    },
    {
        "idDrink": "17840",
        "strDrink": "Affinity",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/nwatpb1504817045.jpg",
        "rate": 2,
        "price": 18,
        "ingredients": ["scotch", "sweet vermouth", "dry vermouth", "orange bitters"]
    },
    {
        "idDrink": "11010",
        "strDrink": "After Dinner Cocktail",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vtytxq1483387578.jpg",
        "rate": 5,
        "price": 10,
        "ingredients": ["apricot brandy", "triple sec", "lime", "lime"]
    },
    {
        "idDrink": "13807",
        "strDrink": "After Five",
        "strCategory": "Shot",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/sk3lr91493068595.jpg",
        "rate": 2,
        "price": 18,
        "ingredients": ["peppermint schnapps", "kahlua", "baileys irish cream"]
    },
    {
        "idDrink": "15182",
        "strDrink": "After sex",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xrl66i1493068702.jpg",
        "rate": 2,
        "price": 11,
        "ingredients": ["vodka", "creme de banane", "orange juice"]
    },
    {
        "idDrink": "11011",
        "strDrink": "After Supper Cocktail",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/quyxwu1483387610.jpg",
        "rate": 5,
        "price": 10,
        "ingredients": ["triple sec", "apricot brandy", "lemon juice"]
    },
    {
        "idDrink": "13162",
        "strDrink": "Afternoon",
        "strCategory": "Coffee Tea",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vyrurp1472667777.jpg",
        "rate": 2,
        "price": 11,
        "ingredients": ["kahlua", "baileys irish cream", "frangelico", "coffee", "cream"]
    },
    {
        "idDrink": "11012",
        "strDrink": "Alabama Slammer",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qtwxwr1483387647.jpg",
        "rate": 3,
        "price": 10,
        "ingredients": ["southern comfort", "amaretto", "sloe gin", "lemon juice"]
    },
    {
        "idDrink": "11013",
        "strDrink": "Alaska Cocktail",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wsyryt1483387720.jpg",
        "rate": 3,
        "price": 10,
        "ingredients": ["orange bitters", "gin", "yellow chartreuse", "lemon peel"]
    },
    {
        "idDrink": "11014",
        "strDrink": "Alexander",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/urystu1478253039.jpg",
        "rate": 2,
        "price": 10,
        "ingredients": ["gin", "creme de cacao", "light cream", "nutmeg"]
    },
    {
        "idDrink": "11019",
        "strDrink": "Alfie Cocktail",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/ypxsqy1483387829.jpg",
        "rate": 3,
        "price": 10,
        "ingredients": ["lemon vodka", "triple sec", "pineapple juice"]
    },
    {
        "idDrink": "11020",
        "strDrink": "Algonquin",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uwryxx1483387873.jpg",
        "rate": 2,
        "price": 10,
        "ingredients": ["blended whiskey", "dry vermouth", "pineapple juice"]
    },
    {
        "idDrink": "17094",
        "strDrink": "Alice in Wonderland",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/g12lj41493069391.jpg",
        "rate": 4,
        "price": 10,
        "ingredients": ["amaretto", "grand marnier", "southern comfort"]
    },
    {
        "idDrink": "11021",
        "strDrink": "Allegheny",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uwvyts1483387934.jpg",
        "rate": 2,
        "price": 10,
        "ingredients": ["dry vermouth", "bourbon", "blackberry brandy", "lemon juice", "lemon peel"]
    },
    {
        "idDrink": "11022",
        "strDrink": "Allies Cocktail",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qvprvp1483388104.jpg",
        "rate": 3,
        "price": 10,
        "ingredients": ["dry vermouth", "gin", "kummel"]
    },
    {
        "idDrink": "11023",
        "strDrink": "Almeria",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/rwsyyu1483388181.jpg",
        "rate": 1,
        "price": 10,
        "ingredients": ["dark rum", "kahlua", "egg white"]
    },
    {
        "idDrink": "16082",
        "strDrink": "Almond Chocolate Coffee",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/jls02c1493069441.jpg",
        "rate": 5,
        "price": 10,
        "ingredients": ["amaretto", "dark creme de cacao", "coffee"]
    },
    {
        "idDrink": "11024",
        "strDrink": "Almond Joy",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xutuqs1483388296.jpg",
        "rate": 2,
        "price": 10,
        "ingredients": ["amaretto", "creme de cacao", "light cream"]
    },
    {
        "idDrink": "11025",
        "strDrink": "Amaretto And Cream",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/dj8n0r1504375018.jpg",
        "rate": 4,
        "price": 10,
        "ingredients": ["amaretto", "light cream"]
    },
    {
        "idDrink": "178321",
        "strDrink": "Amaretto fizz",
        "strCategory": "Cocktail",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/r7on8i1576796835.jpg",
        "rate": 3,
        "price": 18,
        "ingredients": ["amaretto", "orange juice", "white wine", "orange peel"]
    },
    {
        "idDrink": "12792",
        "strDrink": "Amaretto Liqueur",
        "strCategory": "Homemade Liqueur",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/swqxuv1472719649.jpg",
        "rate": 4,
        "price": 17,
        "ingredients": ["sugar", "water", "apricot", "almond flavoring", "grain alcohol", "water", "brandy", "food coloring", "food coloring"]
    },
    {
        "idDrink": "11026",
        "strDrink": "Amaretto Mist",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/utpxxq1483388370.jpg",
        "rate": 3,
        "price": 10,
        "ingredients": ["amaretto", "lime"]
    },
    {
        "idDrink": "11027",
        "strDrink": "Amaretto Rose",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/3jm41q1493069578.jpg",
        "rate": 3,
        "price": 10,
        "ingredients": ["amaretto", "lime juice", "club soda"]
    },
    {
        "idDrink": "15194",
        "strDrink": "Amaretto Shake",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xk79al1493069655.jpg",
        "rate": 3,
        "price": 11,
        "ingredients": ["chocolate ice-cream", "brandy", "amaretto"]
    },
    {
        "idDrink": "13731",
        "strDrink": "Amaretto Sour",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xnzc541493070211.jpg",
        "rate": 3,
        "price": 17,
        "ingredients": ["amaretto", "sour mix"]
    },
    {
        "idDrink": "11028",
        "strDrink": "Amaretto Stinger",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vvop4w1493069934.jpg",
        "rate": 4,
        "price": 10,
        "ingredients": ["amaretto", "white creme de menthe"]
    },
    {
        "idDrink": "14306",
        "strDrink": "Amaretto Stone Sour",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xwryyx1472719921.jpg",
        "rate": 4,
        "price": 13,
        "ingredients": ["amaretto", "sour mix", "orange juice"]
    },
    {
        "idDrink": "16100",
        "strDrink": "Amaretto Stone Sour #3",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wutxqr1472720012.jpg",
        "rate": 5,
        "price": 11,
        "ingredients": ["sour mix", "amaretto", "tequila", "orange juice"]
    },
    {
        "idDrink": "14578",
        "strDrink": "Amaretto Sunrise",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/akcpsh1493070267.jpg",
        "rate": 4,
        "price": 15,
        "ingredients": ["amaretto", "orange juice", "grenadine"]
    },
    {
        "idDrink": "17168",
        "strDrink": "Amaretto Sunset",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/apictz1493069760.jpg",
        "rate": 3,
        "price": 11,
        "ingredients": ["triple sec", "amaretto", "cider", "ice"]
    },
    {
        "idDrink": "16202",
        "strDrink": "Amaretto Sweet & Sour",
        "strCategory": "Punch Party Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vswwus1472668546.jpg",
        "rate": 5,
        "price": 12,
        "ingredients": ["amaretto", "sweet and sour", "midori melon liqueur", "pineapple juice"]
    },
    {
        "idDrink": "11029",
        "strDrink": "Amaretto Tea",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/b7qzo21493070167.jpg",
        "rate": 3,
        "price": 10,
        "ingredients": ["tea", "amaretto", "whipped cream"]
    },
    {
        "idDrink": "15941",
        "strDrink": "Americano",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/trwruu1478253126.jpg",
        "rate": 2,
        "price": 19,
        "ingredients": ["campari", "sweet vermouth", "lemon peel", "orange peel"]
    },
    {
        "idDrink": "11034",
        "strDrink": "Angel Face",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vqpptp1478253178.jpg",
        "rate": 2,
        "price": 10,
        "ingredients": ["apricot brandy", "apple brandy", "gin"]
    },
    {
        "idDrink": "12794",
        "strDrink": "Angelica Liqueur",
        "strCategory": "Homemade Liqueur",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/yuurps1472667672.jpg",
        "rate": 4,
        "price": 17,
        "ingredients": ["angelica root", "almond", "allspice", "cinnamon", "anise", "coriander", "marjoram leaves", "vodka", "sugar"]
    },
    {
        "idDrink": "16289",
        "strDrink": "Apple Grande",
        "strCategory": "Punch Party Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wqrptx1472668622.jpg",
        "rate": 3,
        "price": 12,
        "ingredients": ["tequila", "apple cider"]
    },
    {
        "idDrink": "16958",
        "strDrink": "Apple Pie with A Crust",
        "strCategory": "Other/Unknown",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qspqxt1472720078.jpg",
        "rate": 5,
        "price": 19,
        "ingredients": ["apple juice", "malibu rum", "cinnamon"]
    },
    {
        "idDrink": "13683",
        "strDrink": "Apple Slammer",
        "strCategory": "Shot",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/09yd5f1493069852.jpg",
        "rate": 3,
        "price": 16,
        "ingredients": ["7-up", "apple schnapps"]
    },
    {
        "idDrink": "11046",
        "strDrink": "Applecar",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/sbffau1504389764.jpg",
        "rate": 2,
        "price": 10,
        "ingredients": ["applejack", "triple sec", "lemon juice"]
    },
    {
        "idDrink": "16311",
        "strDrink": "Applejack",
        "strCategory": "Cocktail",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/sutyqp1479209062.jpg",
        "rate": 2,
        "price": 13,
        "ingredients": ["jack daniels", "midori melon liqueur", "sour mix"]
    },
    {
        "idDrink": "11050",
        "strDrink": "Apricot Lady",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/146f251504389814.jpg",
        "rate": 3,
        "price": 10,
        "ingredients": ["light rum", "apricot brandy", "triple sec", "lemon juice", "egg white", "orange"]
    },
    {
        "idDrink": "15849",
        "strDrink": "Apricot punch",
        "strCategory": "Punch Party Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/tuxxtp1472668667.jpg",
        "rate": 3,
        "price": 18,
        "ingredients": ["apricot brandy", "champagne", "vodka", "7-up", "orange juice"]
    },
    {
        "idDrink": "178319",
        "strDrink": "Aquamarine",
        "strCategory": "Cocktail",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg",
        "rate": 2,
        "price": 18,
        "ingredients": ["hpnotiq", "pineapple juice", "banana liqueur"]
    },
    {
        "idDrink": "11052",
        "strDrink": "Archbishop",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xpqwrt1441207307.jpg",
        "rate": 2,
        "price": 10,
        "ingredients": ["gin", "wine", "benedictine", "lime"]
    },
    {
        "idDrink": "14622",
        "strDrink": "Arctic Fish",
        "strCategory": "Punch Party Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/ttsvwy1472668781.jpg",
        "rate": 2,
        "price": 16,
        "ingredients": ["vodka", "grape soda", "orange juice", "ice", "candy"]
    },
    {
        "idDrink": "17118",
        "strDrink": "Arctic Mouthwash",
        "strCategory": "Punch Party Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wqstwv1478963735.jpg",
        "rate": 4,
        "price": 11,
        "ingredients": ["maui", "mountain dew", "ice"]
    },
    {
        "idDrink": "11053",
        "strDrink": "Arise My Love",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wyrrwv1441207432.jpg",
        "rate": 3,
        "price": 10,
        "ingredients": ["champagne", "green creme de menthe"]
    },
    {
        "idDrink": "16354",
        "strDrink": "Arizona Antifreeze",
        "strCategory": "Shot",
        "strAlcoholic": "Alcoholic",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/dbtylp1493067262.jpg",
        "rate": 4,
        "price": 13,
        "ingredients": ["vodka", "midori melon liqueur", "sweet and sour"]
    },
    {
        "idDrink": "12864",
        "strDrink": "Apple Cider Punch #1",
        "strCategory": "Punch Party Drink",
        "strAlcoholic": "Optional alcohol",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xrqxuv1454513218.jpg",
        "rate": 5,
        "price": 18,
        "ingredients": ["apple cider", "brown sugar", "lemonade", "orange juice", "cloves", "allspice", "nutmeg", "cinnamon"]
    },
    {
        "idDrink": "15615",
        "strDrink": "Chocolate Monkey",
        "strCategory": "Milk Float Shake",
        "strAlcoholic": "Optional alcohol",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/tyvpxt1468875212.jpg",
        "rate": 4,
        "price": 16,
        "ingredients": ["banana liqueur", "creme de cacao", "chocolate ice-cream", "chocolate syrup", "chocolate milk", "whipped cream", "cherry", "banana"]
    },
    {
        "idDrink": "12910",
        "strDrink": "Egg Nog #4",
        "strCategory": "Punch Party Drink",
        "strAlcoholic": "Optional alcohol",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wpspsy1468875747.jpg",
        "rate": 2,
        "price": 19,
        "ingredients": ["egg yolk", "sugar", "milk", "light rum", "bourbon", "vanilla extract", "salt", "whipping cream", "egg white"]
    },
    {
        "idDrink": "12916",
        "strDrink": "Egg Nog - Healthy",
        "strCategory": "Punch Party Drink",
        "strAlcoholic": "Optional alcohol",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qxuppv1468875308.jpg",
        "rate": 4,
        "price": 19,
        "ingredients": ["egg", "sugar", "condensed milk", "milk", "vanilla extract", "rum", "nutmeg"]
    },
    {
        "idDrink": "12914",
        "strDrink": "Egg-Nog - Classic Cooked",
        "strCategory": "Punch Party Drink",
        "strAlcoholic": "Optional alcohol",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/quxsvt1468875505.jpg",
        "rate": 5,
        "price": 19,
        "ingredients": ["egg", "sugar", "salt", "milk", "vanilla extract"]
    },
    {
        "idDrink": "15997",
        "strDrink": "GG",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Optional alcohol",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg",
        "rate": 0,
        "price": 19,
        "ingredients": ["galliano", "ginger ale", "ice"]
    },
    {
        "idDrink": "12944",
        "strDrink": "Gluehwein",
        "strCategory": "Punch Party Drink",
        "strAlcoholic": "Optional alcohol",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vuxwvt1468875418.jpg",
        "rate": 2,
        "price": 19,
        "ingredients": ["red wine", "water", "sugar", "cinnamon", "cloves", "lemon peel"]
    },
    {
        "idDrink": "13042",
        "strDrink": "Sunny Holiday Punch",
        "strCategory": "Punch Party Drink",
        "strAlcoholic": "Optional alcohol",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/rywtwy1468924758.jpg",
        "rate": 4,
        "price": 10,
        "ingredients": ["pineapple juice", "club soda", "orange juice", "lemon", "berries", "champagne"]
    },
    {
        "idDrink": "13056",
        "strDrink": "Wine Cooler",
        "strCategory": "Punch Party Drink",
        "strAlcoholic": "Optional alcohol",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/yutxtv1473344210.jpg",
        "rate": 2,
        "price": 10,
        "ingredients": ["red wine", "lemon-lime soda", "ice"]
    }
];

let normalizeEvents = [
    {
        id: "12816e24-dff1-49aa-b6ab-4886f5efc0da",
        title: "Thankful",
        smallImg: `${eventsBase}/event-item-1.jpg`,
        middleImg: `${eventsBase}/middle-event-item-1.jpg`,
        bigImg: `${eventsBase}/big-event-item-1.jpg`,
        dateStart: "2020-07-30T17:00",
        dateEnd: "2020-08-30T20:00",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametdolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur volup",
    },
    {
        id: "7c19d39e-c47d-44d9-a723-c54fe1a1a6e0",
        title: "Holiday Survival Guide",
        smallImg: `${eventsBase}/event-item-2.jpg`,
        middleImg: `${eventsBase}/middle-event-item-2.jpg`,
        bigImg: `${eventsBase}/big-event-item-1.jpg`,
        dateStart: "2020-07-30T17:00",
        dateEnd: "2020-08-30T20:00",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, m ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet exceexercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit amet",
    },
    {
        id: "c147901b-547d-45d6-990f-85de1e91ecd5",
        title: "Resentments and Recovery",
        smallImg: `${eventsBase}/event-item-3.jpg`,
        middleImg: `${eventsBase}/middle-event-item-3.jpg`,
        bigImg: `${eventsBase}/big-event-item-1.jpg`,
        dateStart: "2020-07-30T17:00",
        dateEnd: "2020-08-30T20:00",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationemetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationemetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationemetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationemetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationemetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationemetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationemetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationemetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationemam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit amet",
    },
    {
        id: "d2dba8fe-3c01-4fd6-be81-c082c2a13c52",
        title: "Private parties from 20 to 50 guests",
        smallImg: `${eventsBase}/event-item-4.jpg`,
        middleImg: `${eventsBase}/middle-event-item-4.jpg`,
        bigImg: `${eventsBase}/big-event-item-1.jpg`,
        dateStart: "2020-07-30T17:00",
        dateEnd: "2020-08-30T20:00",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametdolor sit amet, consectetur adipisicing elit. Accusamus, autem  excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates! excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates! excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates! excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates! excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates! excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates! excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur volup",
    },
    {
        id: "61f410f4-0f77-4fe1-93db-65bf03a7f71b",
        title: "Sober People Buy Books",
        smallImg: `${eventsBase}/event-item-5.jpg`,
        middleImg: `${eventsBase}/middle-event-item-5.jpg`,
        bigImg: `${eventsBase}/big-event-item-1.jpg`,
        dateStart: "2020-07-30T17:00",
        dateEnd: "2020-08-30T20:00",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exerciamet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exerciamet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exerciamet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit amet",
    },
    {
        id: "52d595ea-e5be-4343-9ead-1442a30674e0",
        title: "A Poem for Women in Recovery",
        smallImg: `${eventsBase}/event-item-1.jpg`,
        middleImg: `${eventsBase}/middle-event-item-1.jpg`,
        bigImg: `${eventsBase}/big-event-item-1.jpg`,
        dateStart: "2020-07-30T17:00",
        dateEnd: "2020-08-30T20:00",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehendericepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatcepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatcepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatcepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatt tenetur voluptates!Lorem ipsum dolor sit ametdolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur volup",
    },
    {
        id: "b18dbeed-1e27-4cbd-b01c-88a3ebeb72ca",
        title: "8 Years Sober and Still Growing",
        smallImg: `${eventsBase}/event-item-2.jpg`,
        middleImg: `${eventsBase}/middle-event-item-2.jpg`,
        bigImg: `${eventsBase}/big-event-item-1.jpg`,
        dateStart: "2020-07-30T17:00",
        dateEnd: "2020-08-30T20:00",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet exceendi eveniet exceendi eveniet exceendi eveniet exceendi eveniet exceendi eveniet exceendi eveniet exceendi eveniet exceendi eveniet exceendi eveniet exceendi eveniet exceendi eveniet exceendi eveniet exceendi eveniet exceendi eveniet exceendi eveniet exceendi eveniet exceendi eveniet exceendi eveniet exceendi eveniet exceendi eveniet exceendi eveniet exceendi eveniet exceendi eveniet exceendi eveniet exceendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit amet",
    },
    {
        id: "bc6004f0-7197-47d6-9f74-1d98ac2dac60",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        smallImg: `${eventsBase}/event-item-3.jpg`,
        middleImg: `${eventsBase}/middle-event-item-3.jpg`,
        bigImg: `${eventsBase}/big-event-item-1.jpg`,
        dateStart: "2020-07-30T17:00",
        dateEnd: "2020-08-30T20:00",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametdolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corssimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametdolor sit amet, consectetur adipisicing elit. Accusamus, autem commossimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametdolor sit amet, consectetur adipisicing elit. Accusamus, autem commossimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametdolor sit amet, consectetur adipisicing elit. Accusamus, autem commossimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametdolor sit amet, consectetur adipisicing elit. Accusamus, autem commoporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur volup",
    },
    {
        id: "12bb0862-55a8-4f12-8098-2f0e96240f40",
        title: "Life Lessons from a Bad Passenger",
        smallImg: `${eventsBase}/event-item-5.jpg`,
        middleImg: `${eventsBase}/middle-event-item-5.jpg`,
        bigImg: `${eventsBase}/big-event-item-1.jpg`,
        dateStart: "2020-07-30T17:00",
        dateEnd: "2020-08-30T20:00",
        text: "Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsumi eveniet excepturi, exercitationem ipsam iusto \n laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsumi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsumi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsumi eveniet excepturi, exercitationem ipsam" +
            " iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsumi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsumi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsumi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsumi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsumi eveniet excepturi, exercitationem ipsam iusto laborum" +
            ", magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsumi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsumi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsumi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit amet",
    },
    {
        id: "35eba734-676e-48d6-8282-86bf07142f3c",
        title: "From One Beach to Another",
        smallImg: `${eventsBase}/event-item-5.jpg`,
        middleImg: `${eventsBase}/middle-event-item-5.jpg`,
        bigImg: `${eventsBase}/big-event-item-1.jpg`,
        dateStart: "2020-07-30T17:00",
        dateEnd: "2020-08-30T20:00",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametdolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi cossimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametdolor sit amet, consectetur adipisicing elit. Accusamus, autem commodissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametdolor sit amet, consectetur adipisicing elit. Accusamus, autem commodissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametdolor sit amet, consectetur adipisicing elit. Accusamus, autem commodissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametdolor sit amet, consectetur adipisicing elit. Accusamus, autem commodissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametdolor sit amet, consectetur adipisicing elit. Accusamus, autem commodissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametdolor sit amet, consectetur adipisicing elit. Accusamus, autem commodissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametdolor sit amet, consectetur adipisicing elit. Accusamus, autem commodissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametdolor sit amet, consectetur adipisicing elit. Accusamus, autem commodissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametdolor sit amet, consectetur adipisicing elit. Accusamus, autem commodirporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur volup",
    }
];

let normalizeUsers = [
    {
        id: "94578d0f-b1c9-4491-8920-37965a854fc0",
        name: "Wilma",
        surname: "Leapman",
        email: "wilmaLeapman@gmail.com"
    },
    {
        id: "42d33a37-f7fa-4116-bee4-34c4eea1bbd6",
        name: "Daisy",
        surname: "Willis",
        email: "daisyWillis@gmail.com"
    },
    {
        id: "46bab878-f721-44d5-92e9-0f8024836e42",
        name: "Will",
        surname: "Smith",
        email: "willSmith@gmail.com"
    },
    {
        id: "3936b9c8-b6eb-4cb2-8e6e-a948d748a486",
        name: "Sophie",
        surname: "Terner",
        email: "sophieTerner@gmail.com"
    },
    {
        id: "23e25ae4-2804-4a64-b20d-113a3740c3da",
        name: "Jack",
        surname: "Sparrow",
        email: "jackSparrow@gmail.com"
    },
    {
        id: "0d566f1d-27f5-43e5-b92b-3f424ed6e7fd",
        name: "Martin",
        surname: "Iden",
        email: "martinIden@gmail.com"
    },
    {
        id: "9df00051-aba8-4b99-94e7-0fda25fc2056",
        name: "Kristin",
        surname: "Stevart",
        email: "kristinStevart@gmail.com"
    },
    {
        id: "b83be7ae-8fde-4ce5-963f-937a26bd310b",
        name: "Carla",
        surname: "Williams",
        email: "carlaWilliams@gmail.com"
    },
    {
        id: "6d02405f-48de-409c-90ae-8c817f1c551c",
        name: "Catherine",
        surname: "Edwards",
        email: "catherineEdwards@gmail.com"
    },
    {
        id: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
        name: "Dexter",
        surname: "Round",
        email: "dexterRound@gmail.com"
    },
    {
        id: "a21b9e92-4a98-475a-86d2-c569d4bbe823",
        name: "Joanna",
        surname: "Kingsman",
        email: "joannaKingsman@gmail.com"
    },
    {
        id: "b3498b0a-5ec4-4564-bda4-012b340bb6d9",
        name: "Matthew",
        surname: "Turner",
        email: "matthewTurner@gmail.com"
    },
    {
        id: "9e6c1a98-ce9f-49bc-b7d6-457e34452d26",
        name: "Roger",
        surname: "Gill",
        email: "rogerGill@gmail.com"
    },
    {
        id: "e9d1351a-f32f-4d6a-b32c-8c093fb3e2de",
        name: "Sarah",
        surname: "Blare",
        email: "sarahBlare@gmail.com"
    },
    {
        id: "3d35625c-7fe7-4b92-9c34-75909deda888",
        name: "Vivien",
        surname: "Archibald",
        email: "vivienArchibald@gmail.com"
    }
];

let normalizeReviews = [
    {
        id: "660c8f02-ad3b-43d3-b997-3f5cf072b78b",
        userId: "94578d0f-b1c9-4491-8920-37965a854fc0",
        date: "2019-12-17",
        likes: 177,
        dislikes: 15,
        text: "or sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspicitationem ipsam iusto laborum, missimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspicitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iustoagnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi co",
    },
    {
        id: "a89357c5-5228-4ff8-8026-45776be4d916",
        userId: "42d33a37-f7fa-4116-bee4-34c4eea1bbd6",
        date: "2020-01-17",
        likes: 10,
        dislikes: 59,
        text: "ates!Lotationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi co",
    },
    {
        id: "204a7413-fc93-4a32-8e3a-0dc29e943686",
        userId: "46bab878-f721-44d5-92e9-0f8024836e42",
        date: "2019-11-14",
        likes: 32,
        dislikes: 37,
        text: "utem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicint amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi co",
    },
    {
        id: "e8a3f521-4080-4fb6-9099-abfde8d8f12a",
        userId: "3936b9c8-b6eb-4cb2-8e6e-a948d748a486",
        date: "2019-05-01",
        likes: 7,
        dislikes: 1,
        text: "orem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis o",
    },
    {
        id: "0e8b190e-6b6b-48c6-a8f6-4791c2ad2768",
        userId: "23e25ae4-2804-4a64-b20d-113a3740c3da",
        date: "2020-01-17",
        likes: 150,
        dislikes: 15,
        text: "citationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicint amet, consectetur adipisicing elit. Accusai corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicint amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exerci corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicint amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercmus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi co",
    },
    {
        id: "d8f529e8-1b8b-46f1-ac29-6f5f44cbe3a3",
        userId: "0d566f1d-27f5-43e5-b92b-3f424ed6e7fd",
        date: "2019-10-01",
        likes: 317,
        dislikes: 5,
        text: "sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatpsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi co",
    },
    {
        id: "418cb074-d5b9-4e29-8863-63d6e843f6a8",
        userId: "9df00051-aba8-4b99-94e7-0fda25fc2056",
        date: "2020-01-01",
        likes: 85,
        dislikes: 6,
        text: "metLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicint amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto labormet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam imet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam ium, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi co",
    },
    {
        id: "f96b476a-0966-425d-90b9-94179fe77897",
        userId: "b83be7ae-8fde-4ce5-963f-937a26bd310b",
        date: "2020-01-17",
        likes: 7,
        dislikes: 3,
        text: "No luptates!Lorem iprum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi co",
    },
    {
        id: "8e35eb51-2f4f-434f-9795-8654c33662d0",
        userId: "6d02405f-48de-409c-90ae-8c817f1c551c",
        date: "2019-07-17",
        likes: 11,
        dislikes: 15,
        text: "nissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi co",
    },
    {
        id: "5a82e7fc-2fde-4c55-8a65-831c2775954e",
        userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
        date: "2019-06-11",
        likes: 19,
        dislikes: 1,
        text: "ipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi co",
    },
    {
        id: "baaf3731-f476-4315-a6ae-f044defd3526",
        userId: "a21b9e92-4a98-475a-86d2-c569d4bbe823",
        date: "2019-02-11",
        likes: 7,
        dislikes: 16,
        text: "Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicint amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur vum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi co",
    },
    {
        id: "66942dd0-9a17-4f36-a28e-5706a5015e80",
        userId: "b3498b0a-5ec4-4564-bda4-012b340bb6d9",
        date: "2019-11-11",
        likes: 18,
        dislikes: 11,
        text: "em ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem tionem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi co",
    },
    {
        id: "db615b8c-4205-4f80-a01a-d18e6bf70189",
        userId: "9e6c1a98-ce9f-49bc-b7d6-457e34452d26",
        date: "2019-12-31",
        likes: 27,
        dislikes: 0,
        text: "tem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis ququas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicint amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis ququas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicint amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis ququas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicint amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis ququas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicint amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi co",
    },
    {
        id: "14f9164b-5066-4d2b-abee-46ff1630c6cf",
        userId: "e9d1351a-f32f-4d6a-b32c-8c093fb3e2de",
        date: "2019-09-30",
        likes: 33,
        dislikes: 0,
        text: "ptaLore ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi o",
    },
    {
        id: "451b8d52-27c3-4f42-bc49-9dbb680feabf",
        userId: "3d35625c-7fe7-4b92-9c34-75909deda888",
        date: "2020-01-17",
        likes: 37,
        dislikes: 2,
        text: "elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi co",
    }
];

let normalizeBartenders = [
    {
        id: "d75f762a-eadd-49be-8918-ed0daa8dd024",
        name: "Bruce",
        surname: "Robertson",
        img: `${bartendersBase}/bartender-0.jpg`,
        email: "bruceRobertson@gmail.com"
    },
    {
        id: "c3cb8f92-a2ed-4716-92a1-b6ea813e9049",
        name: "Jane",
        surname: "Smith",
        img: `${bartendersBase}/bartender-1.jpg`,
        email: "janeSmith@gmail.com"
    },
    {
        id: "bd129641-c0eb-432b-84b6-8b81d2930358",
        name: "Amanda",
        surname: "Brian",
        img: `${bartendersBase}/bartender-2.jpg`,
        email: "amandaBrian@gmail.com"
    },
    {
        id: "5909796d-5030-4e36-adec-68b8f9ec2d96",
        name: "Allan",
        surname: "Butler",
        img: `${bartendersBase}/bartender-3.jpg`,
        email: "allanButler@gmail.com"
    },
    {
        id: "429dea85-11dd-4054-a31e-c60c92e17255",
        name: "Alison",
        surname: "Black",
        img: `${bartendersBase}/bartender-4.jpg`,
        email: "alisonBlack@gmail.com"
    },
    {
        id: "bb8afbec-2fec-491f-93e9-7f13950dd80b",
        name: "Daisy",
        surname: "Nail",
        img: `${bartendersBase}/bartender-5.jpg`,
        email: "daisyNail@gmail.com"
    },
];

let normalizeBlogPosts = [
    {
        id: "5909796d-5030-4e36-adec-68b8f9ec2d96",
        userId: "94578d0f-b1c9-4491-8920-37965a854fc0",
        title: "Private parties from 20 to 50 guests",
        img: `${blogPostsBase}/blog-post-item-1.jpg`,
        asideImg: `${blogPostsBase}/aside-blog-post-1.jpg`,
        bigImg: `${blogPostsBase}/big-blog-post-1.jpg`,
        date: "2019-11-25T07:00",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit amet",
        reviews: [
            "660c8f02-ad3b-43d3-b997-3f5cf072b78b",
            "a89357c5-5228-4ff8-8026-45776be4d916",
            "204a7413-fc93-4a32-8e3a-0dc29e943686",
            "e8a3f521-4080-4fb6-9099-abfde8d8f12a",
            "0e8b190e-6b6b-48c6-a8f6-4791c2ad2768",
            "d8f529e8-1b8b-46f1-ac29-6f5f44cbe3a3",
            "418cb074-d5b9-4e29-8863-63d6e843f6a8",
            "f96b476a-0966-425d-90b9-94179fe77897",
            "8e35eb51-2f4f-434f-9795-8654c33662d0",
            "5a82e7fc-2fde-4c55-8a65-831c2775954e",
            "baaf3731-f476-4315-a6ae-f044defd3526",
            "66942dd0-9a17-4f36-a28e-5706a5015e80",
            "db615b8c-4205-4f80-a01a-d18e6bf70189",
            "14f9164b-5066-4d2b-abee-46ff1630c6cf",
            "451b8d52-27c3-4f42-bc49-9dbb680feabf"
        ]
    },
    {
        id: "a304959a-76c0-4b34-954a-b38dbf310360",
        userId: "42d33a37-f7fa-4116-bee4-34c4eea1bbd6",
        title: "Every evening beer parties from 10pm to 12pm",
        img: `${blogPostsBase}/blog-post-item-2.jpg`,
        asideImg: `${blogPostsBase}/aside-blog-post-1.jpg`,
        bigImg: `${blogPostsBase}/big-blog-post-1.jpg`,
        date: "2019-10-12T05:00",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit amet",
        reviews: [
            "660c8f02-ad3b-43d3-b997-3f5cf072b78b",
            "14f9164b-5066-4d2b-abee-46ff1630c6cf",
            "451b8d52-27c3-4f42-bc49-9dbb680feabf"
        ]
    },
    {
        id: "429dea85-11dd-4054-a31e-c60c92e17255",
        userId: "46bab878-f721-44d5-92e9-0f8024836e42",
        title: "Private parties only for major people",
        img: `${blogPostsBase}/blog-post-item-3.jpg`,
        asideImg: `${blogPostsBase}/aside-blog-post-1.jpg`,
        bigImg: `${blogPostsBase}/big-blog-post-1.jpg`,
        date: "2019-09-15T05:00",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit amet?",
        reviews: [
            "660c8f02-ad3b-43d3-b997-3f5cf072b78b",
            "a89357c5-5228-4ff8-8026-45776be4d916",
            "204a7413-fc93-4a32-8e3a-0dc29e943686",
            "e8a3f521-4080-4fb6-9099-abfde8d8f12a",
            "0e8b190e-6b6b-48c6-a8f6-4791c2ad2768",
            "db615b8c-4205-4f80-a01a-d18e6bf70189",
            "14f9164b-5066-4d2b-abee-46ff1630c6cf",
            "451b8d52-27c3-4f42-bc49-9dbb680feabf"
        ]
    },
    {
        id: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
        userId: "3936b9c8-b6eb-4cb2-8e6e-a948d748a486",
        title: "Private parties from 20 to 50 guests",
        img: `${blogPostsBase}/blog-post-item-1.jpg`,
        asideImg: `${blogPostsBase}/aside-blog-post-1.jpg`,
        bigImg: `${blogPostsBase}/big-blog-post-1.jpg`,
        date: "2019-07-27T05:00",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit amet",
        reviews: [
            "660c8f02-ad3b-43d3-b997-3f5cf072b78b",
            "0e8b190e-6b6b-48c6-a8f6-4791c2ad2768",
            "d8f529e8-1b8b-46f1-ac29-6f5f44cbe3a3",
            "418cb074-d5b9-4e29-8863-63d6e843f6a8",
            "f96b476a-0966-425d-90b9-94179fe77897",
            "8e35eb51-2f4f-434f-9795-8654c33662d0",
            "5a82e7fc-2fde-4c55-8a65-831c2775954e",
            "baaf3731-f476-4315-a6ae-f044defd3526",
            "66942dd0-9a17-4f36-a28e-5706a5015e80",
            "db615b8c-4205-4f80-a01a-d18e6bf70189"
        ]
    },
    {
        id: "53b642d7-5e86-4717-a466-0640a1dee076",
        userId: "23e25ae4-2804-4a64-b20d-113a3740c3da",
        title: "Every evening beer parties from 10pm to 12pm",
        img: `${blogPostsBase}/blog-post-item-2.jpg`,
        asideImg: `${blogPostsBase}/aside-blog-post-1.jpg`,
        bigImg: `${blogPostsBase}/big-blog-post-1.jpg`,
        date: "2019-12-07T05:00",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit amet",
        reviews: [
            "660c8f02-ad3b-43d3-b997-3f5cf072b78b",
            "a89357c5-5228-4ff8-8026-45776be4d916",
            "14f9164b-5066-4d2b-abee-46ff1630c6cf",
            "451b8d52-27c3-4f42-bc49-9dbb680feabf"
        ]
    },
    {
        id: "20bed9b5-9c7b-4771-8221-75b74ed1904a",
        userId: "0d566f1d-27f5-43e5-b92b-3f424ed6e7fd",
        title: "Private parties only for major people",
        img: `${blogPostsBase}/blog-post-item-3.jpg`,
        asideImg: `${blogPostsBase}/aside-blog-post-1.jpg`,
        bigImg: `${blogPostsBase}/big-blog-post-1.jpg`,
        date: "2019-12-30T07:00",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit amet",
        reviews: [
            "660c8f02-ad3b-43d3-b997-3f5cf072b78b",
            "a89357c5-5228-4ff8-8026-45776be4d916",
            "204a7413-fc93-4a32-8e3a-0dc29e943686",
            "e8a3f521-4080-4fb6-9099-abfde8d8f12a",
            "0e8b190e-6b6b-48c6-a8f6-4791c2ad2768",
            "d8f529e8-1b8b-46f1-ac29-6f5f44cbe3a3",
            "451b8d52-27c3-4f42-bc49-9dbb680feabf"
        ]
    },
    {
        id: "e90397e6-0fe3-44b1-8fec-ccd40dc724d9",
        userId: "94578d0f-b1c9-4491-8920-37965a854fc0",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        img: `${blogPostsBase}/blog-post-item-1.jpg`,
        asideImg: `${blogPostsBase}/aside-blog-post-1.jpg`,
        bigImg: `${blogPostsBase}/big-blog-post-1.jpg`,
        date: "2019-11-11T05:00",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnispersconsectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit amet",
        reviews: [
            "660c8f02-ad3b-43d3-b997-3f5cf072b78b",
            "a89357c5-5228-4ff8-8026-45776be4d916",
            "204a7413-fc93-4a32-8e3a-0dc29e943686",
            "14f9164b-5066-4d2b-abee-46ff1630c6cf",
            "451b8d52-27c3-4f42-bc49-9dbb680feabf"
        ]
    },
    {
        id: "9085f57b-ec29-4226-a4d2-da9b8608c20e",
        userId: "42d33a37-f7fa-4116-bee4-34c4eea1bbd6",
        title: "Every evening beer parties from 10pm to 12pm",
        img: `${blogPostsBase}/blog-post-item-2.jpg`,
        asideImg: `${blogPostsBase}/aside-blog-post-1.jpg`,
        bigImg: `${blogPostsBase}/big-blog-post-1.jpg`,
        date: "2019-11-07T05:00",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnamiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit amet",
        reviews: [
            "660c8f02-ad3b-43d3-b997-3f5cf072b78b",
            "14f9164b-5066-4d2b-abee-46ff1630c6cf",
            "451b8d52-27c3-4f42-bc49-9dbb680feabf"
        ]
    },
    {
        id: "c9ee8cb3-e422-4750-ba54-3cb9b71f01b4",
        userId: "46bab878-f721-44d5-92e9-0f8024836e42",
        title: "Private parties only for major people",
        img: `${blogPostsBase}/blog-post-item-3.jpg`,
        asideImg: `${blogPostsBase}/aside-blog-post-1.jpg`,
        bigImg: `${blogPostsBase}/big-blog-post-1.jpg`,
        date: "2019-10-15T05:00",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit amet?",
        reviews: [
            "660c8f02-ad3b-43d3-b997-3f5cf072b78b",
            "a89357c5-5228-4ff8-8026-45776be4d916",
            "204a7413-fc93-4a32-8e3a-0dc29e943686",
            "451b8d52-27c3-4f42-bc49-9dbb680feabf"
        ]
    },
    {
        id: "a295b63a-095d-4299-bcbf-f424fb45ab31",
        userId: "3936b9c8-b6eb-4cb2-8e6e-a948d748a486",
        title: "Private parties from 20 to 50 guests",
        img: `${blogPostsBase}/blog-post-item-1.jpg`,
        asideImg: `${blogPostsBase}/aside-blog-post-1.jpg`,
        bigImg: `${blogPostsBase}/big-blog-post-1.jpg`,
        date: "2019-10-22T05:00",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit amet",
        reviews: [
            "66942dd0-9a17-4f36-a28e-5706a5015e80",
            "db615b8c-4205-4f80-a01a-d18e6bf70189"
        ]
    },
];

let instagram = [
    `${instagramBase}/instagram-1.jpg`,
    `${instagramBase}/instagram-1-copy.jpg`,
    `${instagramBase}/instagram-2.jpg`,
    `${instagramBase}/instagram-2-copy.jpg`,
    `${instagramBase}/instagram-3.jpg`,
    `${instagramBase}/instagram-3-copy.jpg`,
];

module.exports = {
    cocktails: normalizeCocktails,
    events: normalizeEvents,
    users: normalizeUsers,
    reviews: normalizeReviews,
    bartenders: normalizeBartenders,
    blogPosts: normalizeBlogPosts,
    instagram
};