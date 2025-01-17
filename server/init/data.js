const dishes = [
    {
        name: "Idli Vada Combo",
        items: [
            { name: "Idli", quantity: 2, calories: 75 },
            { name: "Vada", quantity: 1, calories: 200 },
            { name: "Sambhar", quantity: 1, calories: 100 },
            { name: "Chutney", quantity: 1, calories: 50 }
        ]
    },
    {
        name: "Idli Sambhar",
        items: [
            { name: "Idli", quantity: 2, calories: 75 },
            { name: "Sambhar", quantity: 1, calories: 100 },
            { name: "Chutney", quantity: 1, calories: 50 }
        ]
    },
    {
        name: "Veg Thali",
        items: [
            { name: "Paneer Curry", quantity: 1, calories: 250 },
            { name: "Seasonal Veg Curry", quantity: 1, calories: 150 },
            { name: "Dal", quantity: 1, calories: 120 },
            { name: "Papad", quantity: 1, calories: 60 },
            { name: "Gulab Jamun", quantity: 1, calories: 180 },
            { name: "Raita", quantity: 1, calories: 80 },
            { name: "Soup", quantity: 1, calories: 50 },
            { name: "Chapati", quantity: 2, calories: 100 },
            { name: "Rice", quantity: 1, calories: 150 },
            { name: "Pickle", quantity: 1, calories: 30 }
        ]
    },
    {
        name: "Dal Rice",
        items: [
            { name: "Dal", quantity: 1, calories: 120 },
            { name: "Rice", quantity: 1, calories: 150 },
            { name: "Pickle", quantity: 1, calories: 30 },
            { name: "Papad", quantity: 1, calories: 60 }
        ]
    },
    {
        name: "Masala Dosa",
        items: [
            { name: "Dosa", quantity: 1, calories: 200 },
            { name: "Sambhar", quantity: 1, calories: 100 },
            { name: "Coconut Chutney", quantity: 1, calories: 50 }
        ]
    },
    {
        name: "Pav Bhaji",
        items: [
            { name: "Bhaji", quantity: 1, calories: 300 },
            { name: "Pav", quantity: 2, calories: 200 },
            { name: "Onion", quantity: 1, calories: 20 },
            { name: "Lemon Wedge", quantity: 1, calories: 5 }
        ]
    },
    {
        name: "Chole Bhature",
        items: [
            { name: "Chole", quantity: 1, calories: 300 },
            { name: "Bhature", quantity: 2, calories: 400 },
            { name: "Pickle", quantity: 1, calories: 30 }
        ]
    },
    {
        name: "Aloo Paratha",
        items: [
            { name: "Aloo Paratha", quantity: 2, calories: 175 },
            { name: "Curd", quantity: 1, calories: 100 },
            { name: "Pickle", quantity: 1, calories: 30 }
        ]
    },
    {
        name: "Puri Bhaji",
        items: [
            { name: "Puri", quantity: 4, calories: 75 },
            { name: "Potato Curry", quantity: 1, calories: 200 },
            { name: "Pickle", quantity: 1, calories: 30 }
        ]
    },
    {
        name: "Rajma Chawal",
        items: [
            { name: "Rajma", quantity: 1, calories: 250 },
            { name: "Rice", quantity: 1, calories: 150 },
            { name: "Pickle", quantity: 1, calories: 30 }
        ]
    },
    {
        name: "Biryani (Chicken)",
        items: [
            { name: "Chicken Biryani", quantity: 1, calories: 500 },
            { name: "Raita", quantity: 1, calories: 80 },
            { name: "Salad", quantity: 1, calories: 30 }
        ]
    },
    {
        name: "Palak Paneer with Roti",
        items: [
            { name: "Palak Paneer", quantity: 1, calories: 250 },
            { name: "Roti", quantity: 2, calories: 100 },
            { name: "Salad", quantity: 1, calories: 30 }
        ]
    },
    {
        name: "Dal Makhani with Naan",
        items: [
            { name: "Dal Makhani", quantity: 1, calories: 300 },
            { name: "Butter Naan", quantity: 2, calories: 200 },
            { name: "Salad", quantity: 1, calories: 30 }
        ]
    },
    {
        name: "Hyderabadi Biryani",
        items: [
            { name: "Biryani", quantity: 1, calories: 500 },
            { name: "Raita", quantity: 1, calories: 80 },
            { name: "Mirchi ka Salan", quantity: 1, calories: 100 }
        ]
    },
    {
        name: "Kadhai Paneer with Roti",
        items: [
            { name: "Kadhai Paneer", quantity: 1, calories: 250 },
            { name: "Roti", quantity: 2, calories: 100 },
            { name: "Salad", quantity: 1, calories: 30 }
        ]
    },
    {
        name: "Chicken Tikka with Naan",
        items: [
            { name: "Chicken Tikka", quantity: 1, calories: 300 },
            { name: "Butter Naan", quantity: 2, calories: 200 },
            { name: "Mint Chutney", quantity: 1, calories: 50 }
        ]
    },
    {
        name: "Dahi Bhalla",
        items: [
            { name: "Dahi Bhalla", quantity: 2, calories: 100 },
            { name: "Sweet Chutney", quantity: 1, calories: 50 },
            { name: "Green Chutney", quantity: 1, calories: 20 }
        ]
    },
    {
        name: "Gajar Halwa",
        items: [
            { name: "Gajar Halwa", quantity: 1, calories: 350 }
        ]
    },
    {
        name: "Butter Chicken with Naan",
        items: [
            { name: "Butter Chicken", quantity: 1, calories: 500 },
            { name: "Butter Naan", quantity: 2, calories: 200 },
            { name: "Salad", quantity: 1, calories: 30 }
        ]
    },
    {
        name: "Samosa",
        items: [
            { name: "Samosa", quantity: 2, calories: 150 },
            { name: "Chutney", quantity: 1, calories: 50 }
        ]
    },
    {
        name: "Pulao with Raita",
        items: [
            { name: "Vegetable Pulao", quantity: 1, calories: 350 },
            { name: "Raita", quantity: 1, calories: 80 }
        ]
    },
    {
        name: "Paneer Butter Masala",
        items: [
            { name: "Paneer Butter Masala", quantity: 1, calories: 350 },
            { name: "Butter Naan", quantity: 1, calories: 200 },
            { name: "Salad", quantity: 1, calories: 30 }
        ]
    },
    {
        name: "Kadhi Pakora",
        items: [
            { name: "Kadhi", quantity: 1, calories: 180 },
            { name: "Pakora", quantity: 2, calories: 200 },
            { name: "Rice", quantity: 1, calories: 150 }
        ]
    },
    {
        name: "Chana Masala",
        items: [
            { name: "Chana Masala", quantity: 1, calories: 250 },
            { name: "Rice", quantity: 1, calories: 150 },
            { name: "Pickle", quantity: 1, calories: 30 }
        ]
    },
    {
        name: "Aloo Gobi",
        items: [
            { name: "Aloo Gobi", quantity: 1, calories: 200 },
            { name: "Chapati", quantity: 1, calories: 100 },
            { name: "Pickle", quantity: 1, calories: 30 }
        ]
    },
    {
        name: "Tandoori Roti with Dal",
        items: [
            { name: "Tandoori Roti", quantity: 2, calories: 200 },
            { name: "Dal", quantity: 1, calories: 120 }
        ]
    },
    {
        name: "Vegetable Pulao",
        items: [
            { name: "Vegetable Pulao", quantity: 1, calories: 350 },
            { name: "Raita", quantity: 1, calories: 80 }
        ]
    },
    {
        name: "Methi Thepla",
        items: [
            { name: "Methi Thepla", quantity: 2, calories: 200 },
            { name: "Curd", quantity: 1, calories: 100 },
            { name: "Pickle", quantity: 1, calories: 30 }
        ]
    },
    {
        name: "Pesarattu",
        items: [
            { name: "Pesarattu", quantity: 2, calories: 200 },
            { name: "Sambhar", quantity: 1, calories: 100 },
            { name: "Chutney", quantity: 1, calories: 50 }
        ]
    },
    {
        name: "Dhokla",
        items: [
            { name: "Dhokla", quantity: 2, calories: 150 },
            { name: "Chutney", quantity: 1, calories: 50 }
        ]
    },
    {
        name: "Malai Kofta",
        items: [
            { name: "Malai Kofta", quantity: 1, calories: 350 },
            { name: "Chapati", quantity: 2, calories: 200 }
        ]
    },
    {
        name: "Baingan Bharta",
        items: [
            { name: "Baingan Bharta", quantity: 1, calories: 200 },
            { name: "Chapati", quantity: 2, calories: 200 }
        ]
    },
    {
        name: "Kachori with Aloo Sabzi",
        items: [
            { name: "Kachori", quantity: 2, calories: 250 },
            { name: "Aloo Sabzi", quantity: 1, calories: 150 }
        ]
    },
    {
        name: "Pav Bhaji",
        items: [
            { name: "Bhaji", quantity: 1, calories: 300 },
            { name: "Pav", quantity: 2, calories: 200 }
        ]
    },
    {
        name: "Lassi",
        items: [
            { name: "Lassi", quantity: 1, calories: 200 }
        ]
    },
    {
        name: "Vada Pav",
        items: [
            { name: "Vada", quantity: 1, calories: 150 },
            { name: "Pav", quantity: 1, calories: 100 }
        ]
    },
    {
        name: "Tandoori Chicken",
        items: [
            { name: "Tandoori Chicken", quantity: 1, calories: 350 },
            { name: "Naan", quantity: 2, calories: 200 }
        ]
    },
    {
        name: "Sambhar Rice",
        items: [
            { name: "Sambhar", quantity: 1, calories: 100 },
            { name: "Rice", quantity: 1, calories: 150 }
        ]
    },
    {
        name: "Gobi Manchurian",
        items: [
            { name: "Gobi Manchurian", quantity: 1, calories: 250 },
            { name: "Rice", quantity: 1, calories: 150 }
        ]
    },
    {
        name: "Chutney Sandwich",
        items: [
            { name: "Sandwich", quantity: 1, calories: 200 },
            { name: "Chutney", quantity: 1, calories: 50 }
        ]
    },
    {
        name: "Puri with Aloo Curry",
        items: [
            { name: "Puri", quantity: 4, calories: 200 },
            { name: "Aloo Curry", quantity: 1, calories: 150 }
        ]
    },
    {
        name: "Rava Kesari",
        items: [
            { name: "Rava Kesari", quantity: 1, calories: 300 }
        ]
    },
    {
        name: "Paneer Tikka",
        items: [
            { name: "Paneer Tikka", quantity: 1, calories: 250 },
            { name: "Mint Chutney", quantity: 1, calories: 50 }
        ]
    },
    {
        name: "Chili Paneer",
        items: [
            { name: "Chili Paneer", quantity: 1, calories: 350 },
            { name: "Rice", quantity: 1, calories: 150 }
        ]
    },
    {
        name: "Aloo Tikki",
        items: [
            { name: "Aloo Tikki", quantity: 2, calories: 150 },
            { name: "Chutney", quantity: 1, calories: 50 }
        ]
    },
    {
        name: "Dosa with Sambhar",
        items: [
            { name: "Dosa", quantity: 1, calories: 200 },
            { name: "Sambhar", quantity: 1, calories: 100 }
        ]
    },
    {
        name: "Mushroom Masala",
        items: [
            { name: "Mushroom Masala", quantity: 1, calories: 250 },
            { name: "Rice", quantity: 1, calories: 150 }
        ]
    }
];

const items = [
    { name: "Aloo Curry", calories: 150 },
    { name: "Aloo Gobi", calories: 200 },
    { name: "Aloo Paratha", calories: 175 },
    { name: "Aloo Sabzi", calories: 150 },
    { name: "Aloo Tikki", calories: 150 },
    { name: "Arborio Rice", calories: 150 },
    { name: "Baguette", calories: 200 },
    { name: "Baingan Bharta", calories: 200 },
    { name: "Bechamel Sauce", calories: 150 },
    { name: "Beef", calories: 300 },
    { name: "Beef Fillet", calories: 350 },
    { name: "Beef Patty", calories: 250 },
    { name: "Beef Roast", calories: 350 },
    { name: "Bell Peppers", calories: 50 },
    { name: "Bhaji", calories: 300 },
    { name: "Bhature", calories: 400 },
    { name: "Biryani", calories: 500 },
    { name: "Bread Crumbs", calories: 100 },
    { name: "Broth", calories: 50 },
    { name: "Burger Bun", calories: 200 },
    { name: "Butter Chicken", calories: 500 },
    { name: "Butter Naan", calories: 200 },
    { name: "Caesar Dressing", calories: 150 },
    { name: "Carbonara Sauce", calories: 150 },
    { name: "Carrots", calories: 25 },
    { name: "Celery", calories: 10 },
    { name: "Chana Masala", calories: 250 },
    { name: "Chapati", calories: 100 },
    { name: "Chapati", calories: 200 },
    { name: "Cheese", calories: 100 },
    { name: "Chicken", calories: 200 },
    { name: "Chicken", calories: 250 },
    { name: "Chicken Biryani", calories: 500 },
    { name: "Chicken Tikka", calories: 300 },
    { name: "Chili Paneer", calories: 350 },
    { name: "Chili Paste", calories: 20 },
    { name: "Chole", calories: 300 },
    { name: "Chutney", calories: 50 },
    { name: "Cilantro", calories: 5 },
    { name: "Clams", calories: 100 },
    { name: "Coconut Chutney", calories: 50 },
    { name: "Coriander", calories: 5 },
    { name: "Cream", calories: 200 },
    { name: "Croissant", calories: 200 },
    { name: "Croutons", calories: 100 },
    { name: "Curd", calories: 100 },
    { name: "Dahi Bhalla", calories: 100 },
    { name: "Dal", calories: 120 },
    { name: "Dal Makhani", calories: 300 },
    { name: "Dhokla", calories: 150 },
    { name: "Dosa", calories: 200 },
    { name: "Duck", calories: 400 },
    { name: "Egg Noodles", calories: 200 },
    { name: "Eggplant", calories: 30 },
    { name: "English Muffin", calories: 150 },
    { name: "Falafel Balls", calories: 150 },
    { name: "Fermented Cabbage", calories: 30 },
    { name: "Fish", calories: 150 },
    { name: "Fish Fillet", calories: 200 },
    { name: "Fresh Fruits", calories: 50 },
    { name: "Gajar Halwa", calories: 350 },
    { name: "Gnocchi", calories: 200 },
    { name: "Gobi Manchurian", calories: 250 },
    { name: "Gravy", calories: 50 },
    { name: "Green Chutney", calories: 20 },
    { name: "Grilled Pork", calories: 250 },
    { name: "Ground Beef", calories: 250 },
    { name: "Ground Lamb", calories: 250 },
    { name: "Guacamole", calories: 150 },
    { name: "Gulab Jamun", calories: 180 },
    { name: "Herbs", calories: 10 },
    { name: "Hoison Sauce", calories: 50 },
    { name: "Hollandaise Sauce", calories: 100 },
    { name: "Hummus", calories: 100 },
    { name: "Idli", calories: 75 },
    { name: "Kachori", calories: 250 },
    { name: "Kadhai Paneer", calories: 250 },
    { name: "Kadhi", calories: 180 },
    { name: "Ketchup", calories: 50 },
    { name: "Lasagna Noodles", calories: 200 },
    { name: "Lassi", calories: 200 },
    { name: "Lemon", calories: 5 },
    { name: "Lemon Wedge", calories: 5 },
    { name: "Lemongrass", calories: 5 },
    { name: "Lettuce", calories: 10 },
    { name: "Lobster Meat", calories: 250 },
    { name: "Malai Kofta", calories: 350 },
    { name: "Marinara Sauce", calories: 100 },
    { name: "Mashed Potatoes", calories: 150 },
    { name: "Meringue", calories: 100 },
    { name: "Methi Thepla", calories: 200 },
    { name: "Mint Chutney", calories: 50 },
    { name: "Mirchi ka Salan", calories: 100 },
    { name: "Mixed Vegetables", calories: 100 },
    { name: "Mozzarella Cheese", calories: 100 },
    { name: "Mushroom Masala", calories: 250 },
    { name: "Mushrooms", calories: 50 },
    { name: "Naan", calories: 200 },
    { name: "Noodles", calories: 200 },
    { name: "Nori Seaweed", calories: 10 },
    { name: "Olive Oil", calories: 50 },
    { name: "Onion", calories: 20 },
    { name: "Pakora", calories: 200 },
    { name: "Palak Paneer", calories: 250 },
    { name: "Pancake", calories: 100 },
    { name: "Paneer Butter Masala", calories: 350 },
    { name: "Paneer Curry", calories: 250 },
    { name: "Paneer Tikka", calories: 250 },
    { name: "Papad", calories: 60 },
    { name: "Paprika Sauce", calories: 100 },
    { name: "Parmesan Cheese", calories: 50 },
    { name: "Pasta", calories: 200 },
    { name: "Pav", calories: 200 },
    { name: "Pesarattu", calories: 200 },
    { name: "Pesto Sauce", calories: 150 },
    { name: "Pickle", calories: 30 },
    { name: "Pickled Vegetables", calories: 50 },
    { name: "Pineapple Rasgulla", calories: 100 },
    { name: "Pita Bread", calories: 200 },
    { name: "Pizza Base", calories: 200 },
    { name: "Poached Egg", calories: 70 },
    { name: "Pork", calories: 250 },
    { name: "Potato Chips", calories: 250 },
    { name: "Potato Curry", calories: 200 },
    { name: "Potato Fries", calories: 300 },
    { name: "Potatoes", calories: 150 },
    { name: "Puff Pastry", calories: 200 },
    { name: "Puri", calories: 200 },
    { name: "Raita", calories: 80 },
    { name: "Rajma", calories: 250 },
    { name: "Ramen Noodles", calories: 200 },
    { name: "Rava Kesari", calories: 300 },
    { name: "Raw Fish", calories: 100 },
    { name: "Rice", calories: 150 },
    { name: "Ricotta Cheese", calories: 150 },
    { name: "Roll Bun", calories: 200 },
    { name: "Romaine Lettuce", calories: 15 },
    { name: "Roti", calories: 100 },
    { name: "Salad", calories: 30 },
    { name: "Sambhar", calories: 100 },
    { name: "Samosa", calories: 150 },
    { name: "Sandwich", calories: 200 },
    { name: "Sauerkraut", calories: 50 },
    { name: "Sausage", calories: 250 },
    { name: "Seafood", calories: 200 },
    { name: "Seasonal Veg Curry", calories: 150 },
    { name: "Shrimp", calories: 100 },
    { name: "Soft Boiled Egg", calories: 70 },
    { name: "Soup", calories: 50 },
    { name: "Sour Cream", calories: 80 },
    { name: "Soy Sauce", calories: 30 },
    { name: "Spaghetti", calories: 200 },
    { name: "Steak", calories: 350 },
    { name: "Sushi Rice", calories: 150 },
    { name: "Sweet Chutney", calories: 50 },
    { name: "Taco Shell", calories: 150 },
    { name: "Tahini Sauce", calories: 100 },
    { name: "Tandoori Chicken", calories: 350 },
    { name: "Tandoori Roti", calories: 200 },
    { name: "Tartar Sauce", calories: 50 },
    { name: "Tom Yum Broth", calories: 50 },
    { name: "Tomato Sauce", calories: 50 },
    { name: "Tomatoes", calories: 25 },
    { name: "Tortilla", calories: 100 },
    { name: "Vada", calories: 150 },
    { name: "Vegetable Pulao", calories: 350 },
    { name: "Vegetables", calories: 50 },
    { name: "Zucchini", calories: 20 }
];

module.exports = { dishes, items };