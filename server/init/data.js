const dishes = [
    {
        name: "Idli Vada Combo",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270666/Calorix_DEV/y2iuyjvfsp7io8k8bo8c.jpg",
        items: [
            { name: "Idli", quantity: 2, calories: 75 },
            { name: "Vada", quantity: 1, calories: 200 },
            { name: "Sambhar", quantity: 1, calories: 100 },
            { name: "Chutney", quantity: 1, calories: 50 }
        ],
        description: "An Idli Vada Combo typically includes soft, steamed rice cakes (idlis) and crispy, deep-fried savory doughnuts (vadas), often served with coconut chutney and sambar. It's a popular South Indian breakfast that's both delicious and nutritious."
    },
    {
        name: "Idli Sambhar",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270667/Calorix_DEV/yohnnx56r0cel1cm2it2.jpg",
        items: [
            { name: "Idli", quantity: 2, calories: 75 },
            { name: "Sambhar", quantity: 1, calories: 100 },
            { name: "Chutney", quantity: 1, calories: 50 }
        ],
        descrition: "Idli Sambar is a classic South Indian breakfast consisting of steamed rice cakes (idlis) served with a flavorful lentil-based vegetable stew (sambhar). It's a nutritious and delicious combination that's loved by many."
    },
    {
        name: "Veg Thali",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270673/Calorix_DEV/w1oyj05lotknpnhn0hro.jpg",
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
        ],
        description: "A Veg Thali is a traditional Indian meal that includes a variety of vegetarian dishes such as roti, rice, dal, vegetables, curries, and salads, all served together on a large platter. It offers a balanced and flavorful dining experience."
    },
    {
        name: "Dal Rice",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270670/Calorix_DEV/d5hybcf2htrfqm8jbwlg.jpg",
        items: [
            { name: "Dal", quantity: 1, calories: 120 },
            { name: "Rice", quantity: 1, calories: 150 },
            { name: "Pickle", quantity: 1, calories: 30 },
            { name: "Papad", quantity: 1, calories: 60 }
        ],
        description: "Dal Rice is a simple yet satisfying Indian dish made with cooked lentils (dal) served over steamed rice. It's often accompanied by a side of vegetables or a salad, making it a wholesome and nutritious meal."
    },
    {
        name: "Masala Dosa",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270669/Calorix_DEV/t46gszaf4su3aaykwfht.jpg",
        items: [
            { name: "Dosa", quantity: 1, calories: 200 },
            { name: "Sambhar", quantity: 1, calories: 100 },
            { name: "Coconut Chutney", quantity: 1, calories: 50 }
        ],
        description: "Masala Dosa is a popular South Indian dish featuring a crispy, savory crepe made from fermented rice and lentil batter, filled with a spicy potato mixture. It's typically served with coconut chutney and sambar."
    },
    {
        name: "Pav Bhaji",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270670/Calorix_DEV/grqq7ifz4swyq516adxe.jpg",
        items: [
            { name: "Bhaji", quantity: 1, calories: 300 },
            { name: "Pav", quantity: 2, calories: 200 },
            { name: "Onion", quantity: 1, calories: 20 },
            { name: "Lemon Wedge", quantity: 1, calories: 5 }
        ],
        description: "Pav Bhaji is a popular Mumbai street food consisting of a spicy, mashed vegetable curry served with soft bread rolls (pav). It's a flavorful and hearty dish often garnished with onions, tomatoes, and coriander."
    },
    {
        name: "Chole Bhature",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270668/Calorix_DEV/rdlbp44imvihem11guq9.jpg",
        items: [
            { name: "Chole", quantity: 1, calories: 300 },
            { name: "Bhature", quantity: 2, calories: 400 },
            { name: "Pickle", quantity: 1, calories: 30 }
        ],
        description: "Chole Bhature is a classic North Indian dish featuring spicy, tangy chickpea curry (chole) served with deep-fried, puffed bread (bhature). It's a delicious and satisfying meal often accompanied by onions, lemon, and chutney."
    },
    {
        name: "Aloo Paratha",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270665/Calorix_DEV/blybn0ycinsbidsnkayz.jpg",
        items: [
            { name: "Aloo Paratha", quantity: 2, calories: 175 },
            { name: "Curd", quantity: 1, calories: 100 },
            { name: "Pickle", quantity: 1, calories: 30 }
        ],
        description: "Aloo Paratha is a popular North Indian flatbread stuffed with a spicy mixture of mashed potatoes and seasonings, then pan-fried to golden perfection. It's typically served with yogurt, pickles, or a dollop of butter."
    },
    {
        name: "Puri Bhaji",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270671/Calorix_DEV/gv074muhkjfal7fjnbdd.jpg",
        items: [
            { name: "Puri", quantity: 4, calories: 75 },
            { name: "Potato Curry", quantity: 1, calories: 200 },
            { name: "Pickle", quantity: 1, calories: 30 }
        ],
        description: "Puri Bhaji is a traditional Indian breakfast consisting of deep-fried, puffed bread (puri) served with a spicy, flavorful potato curry (bhaji). It's a popular and satisfying morning meal often accompanied by chutney or pickle."
    },
    {
        name: "Rajma Chawal",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270672/Calorix_DEV/z9o6o9wswzpc4qpwqmtz.jpg",
        items: [
            { name: "Rajma", quantity: 1, calories: 250 },
            { name: "Rice", quantity: 1, calories: 150 },
            { name: "Pickle", quantity: 1, calories: 30 }
        ],
        description: "Rajma Chawal is a comforting North Indian dish made with kidney beans cooked in a rich, spicy tomato gravy, served over steamed rice. It's often garnished with onions, lime, and coriander, making it a hearty and flavorful meal."
    },
    {
        name: "Biryani (Chicken)",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270667/Calorix_DEV/i4pp2umzfcwqpvt2jtuv.jpg",
        items: [
            { name: "Chicken Biryani", quantity: 1, calories: 500 },
            { name: "Raita", quantity: 1, calories: 80 },
            { name: "Salad", quantity: 1, calories: 30 }
        ],
        description: "Biryani (chicken) is a fragrant, flavorful rice dish made with marinated chicken pieces cooked with spices, herbs, and sometimes nuts or raisins, layered with partially cooked rice and then steamed to perfection. It's often garnished with fried onions and served with raita or salad."
    },
    {
        name: "Palak Paneer with Roti",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270670/Calorix_DEV/l98ej9npptugrcjqaykr.jpg",
        items: [
            { name: "Palak Paneer", quantity: 1, calories: 250 },
            { name: "Roti", quantity: 2, calories: 100 },
            { name: "Salad", quantity: 1, calories: 30 }
        ],
        description: "Palak Paneer with Roti is a popular North Indian dish featuring cubes of paneer (Indian cottage cheese) cooked in a creamy spinach sauce, served with soft, whole wheat flatbread (roti). It's a nutritious and delicious combination loved by many."
    },
    {
        name: "Dal Makhani with Naan",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270670/Calorix_DEV/dmuiva4xywoledrc0ifr.jpg",
        items: [
            { name: "Dal Makhani", quantity: 1, calories: 300 },
            { name: "Butter Naan", quantity: 2, calories: 200 },
            { name: "Salad", quantity: 1, calories: 30 }
        ],
        description: "Dal Makhani with Naan is a creamy, rich North Indian dish made from slow-cooked black lentils and kidney beans in a buttery tomato-based sauce. It's often served with soft, fluffy naan bread, offering a hearty and indulgent meal."
    },
    {
        name: "Hyderabadi Biryani",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270666/Calorix_DEV/bmqhan8eylsblcvkytur.jpg",
        items: [
            { name: "Biryani", quantity: 1, calories: 500 },
            { name: "Raita", quantity: 1, calories: 80 },
            { name: "Mirchi ka Salan", quantity: 1, calories: 100 }
        ],
        description: "Hyderabadi Biryani is a rich and aromatic rice dish from Hyderabad, made with marinated chicken or mutton cooked with a blend of spices, herbs, and saffron, layered with partially cooked rice and then slow-cooked to perfection. It's often garnished with fried onions, boiled eggs, and served with raita or salad."
    },
    {
        name: "Kadhai Paneer with Roti",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270668/Calorix_DEV/t1jdisuehvmulsnnjuks.jpg",
        items: [
            { name: "Kadhai Paneer", quantity: 1, calories: 250 },
            { name: "Roti", quantity: 2, calories: 100 },
            { name: "Salad", quantity: 1, calories: 30 }
        ],
        description: "Kadhai Paneer with Roti is a popular North Indian dish featuring cubes of paneer (Indian cottage cheese) cooked in a spicy, tangy tomato-based sauce with bell peppers and onions, served with soft, whole wheat flatbread (roti). It's a flavorful and satisfying meal."
    },
    {
        name: "Chicken Tikka with Naan",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270668/Calorix_DEV/unjia3ffpkkaytpic8k9.jpg",
        items: [
            { name: "Chicken Tikka", quantity: 1, calories: 300 },
            { name: "Butter Naan", quantity: 2, calories: 200 },
            { name: "Mint Chutney", quantity: 1, calories: 50 }
        ],
        description: "Chicken Tikka with Naan is a classic Indian dish featuring marinated chicken pieces grilled to perfection and served with soft, fluffy naan bread. It's often accompanied by a side of creamy, spiced yogurt or chutney."
    },
    {
        name: "Dahi Bhalla",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270669/Calorix_DEV/isjtzblf0nmsvq3mesuo.jpg",
        items: [
            { name: "Dahi Bhalla", quantity: 2, calories: 100 },
            { name: "Sweet Chutney", quantity: 1, calories: 50 },
            { name: "Green Chutney", quantity: 1, calories: 20 }
        ],
        description: "Dahi Bhalla is a popular North Indian snack made from deep-fried, spiced lentil fritters soaked in warm water, then beaten and served with a thick, creamy yogurt sauce. It's often garnished with tamarind chutney and chaat masala."
    },
    {
        name: "Gajar Halwa",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270672/Calorix_DEV/ckknyt0hglvh8umk2ptt.jpg",
        items: [
            { name: "Gajar Halwa", quantity: 1, calories: 350 }
        ],
        description: "Gajar Halwa is a delightful Indian dessert made from grated carrots cooked with milk, ghee, and sugar until it becomes rich and creamy. It's often garnished with nuts and cardamom, offering a sweet and comforting treat."
    },
    {
        name: "Butter Chicken with Naan",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270667/Calorix_DEV/btacrent6z8jzfe7e2im.jpg",
        items: [
            { name: "Butter Chicken", quantity: 1, calories: 500 },
            { name: "Butter Naan", quantity: 2, calories: 200 },
            { name: "Salad", quantity: 1, calories: 30 }
        ],
        description: "Butter Chicken with Naan is a creamy, mildly spicy chicken curry made with a tomato-based sauce and butter, served with soft, fluffy naan bread. It's a popular and indulgent dish often accompanied by a side of rice or salad."
    },
    {
        name: "Samosa",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270672/Calorix_DEV/ggpspidxyqescze4aadq.jpg",
        items: [
            { name: "Samosa", quantity: 2, calories: 150 },
            { name: "Chutney", quantity: 1, calories: 50 }
        ],
        description: "Samosa is a popular Indian snack consisting of a crispy, deep-fried pastry filled with a spicy mixture of potatoes, peas, and spices. It's often served with tangy tamarind chutney or mint-coriander chutney."
    },
    {
        name: "Pulao with Raita",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270671/Calorix_DEV/qrbavjmloi7lebw5jisy.jpg",
        items: [
            { name: "Vegetable Pulao", quantity: 1, calories: 350 },
            { name: "Raita", quantity: 1, calories: 80 }
        ],
        description: "Pulao with Raita is a flavorful rice dish cooked with spices, vegetables, and sometimes meat, served with a side of creamy, spiced yogurt (raita). It's a balanced and satisfying meal that's both comforting and nutritious."
    },
    {
        name: "Paneer Butter Masala",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270670/Calorix_DEV/axzbbozq0cq401uus4sn.jpg",
        items: [
            { name: "Paneer Butter Masala", quantity: 1, calories: 350 },
            { name: "Butter Naan", quantity: 1, calories: 200 },
            { name: "Salad", quantity: 1, calories: 30 }
        ],
        description: "Paneer Butter Masala is a creamy, rich tomato-based curry made with cubes of paneer (Indian cottage cheese), cooked with butter, onions, tomatoes, and spices. It's often served with naan or rice, offering a delicious and indulgent meal."
    },
    {
        name: "Kadhi Pakora",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270668/Calorix_DEV/bhoqutycgjmcbd6xlxyn.jpg",
        items: [
            { name: "Kadhi", quantity: 1, calories: 180 },
            { name: "Pakora", quantity: 2, calories: 200 },
            { name: "Rice", quantity: 1, calories: 150 }
        ],
        description: "Kadhai Pakora is a spicy, tangy dish made from deep-fried, spiced vegetable fritters (pakoras) cooked in a flavorful tomato-based sauce with onions and bell peppers. It's often served with roti or rice, offering a delicious and satisfying meal."
    },
    {
        name: "Chana Masala",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270668/Calorix_DEV/anyt4mhoccudsid5puqu.jpg",
        items: [
            { name: "Chana Masala", quantity: 1, calories: 250 },
            { name: "Rice", quantity: 1, calories: 150 },
            { name: "Pickle", quantity: 1, calories: 30 }
        ],
        description: "Chana Masala is a spicy, tangy curry made from cooked chickpeas simmered in a flavorful tomato-based sauce with onions, tomatoes, and spices. It's often served with rice or roti, offering a hearty and nutritious meal."
    },
    {
        name: "Aloo Gobi",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270666/Calorix_DEV/hdoxzfwsdvolurlsbbqu.jpg",
        items: [
            { name: "Aloo Gobi", quantity: 1, calories: 200 },
            { name: "Chapati", quantity: 1, calories: 100 },
            { name: "Pickle", quantity: 1, calories: 30 }
        ],
        description: "Aloo Gobi is a popular Indian dish made from potatoes (aloo) and cauliflower (gobi) cooked with onions, tomatoes, and spices. It's a flavorful and nutritious vegetarian dish often served with roti or rice."
    },
    {
        name: "Tandoori Roti with Dal",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270673/Calorix_DEV/ig2a6hzunedzdkuzoxhb.jpg",
        items: [
            { name: "Tandoori Roti", quantity: 2, calories: 200 },
            { name: "Dal", quantity: 1, calories: 120 }
        ],
        description: "Tandoori Roti with Dal is a wholesome meal featuring soft, whole wheat bread (tandoori roti) cooked in a clay oven, served with a flavorful lentil stew (dal). It's a comforting and nutritious combination loved by many."
    },
    {
        name: "Vegetable Pulao",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270673/Calorix_DEV/gwy3upb2chsv1jcpo3t9.jpg",
        items: [
            { name: "Vegetable Pulao", quantity: 1, calories: 350 },
            { name: "Raita", quantity: 1, calories: 80 }
        ],
        description: "Vegetable Pulao is a fragrant rice dish cooked with a mix of vegetables like carrots, peas, beans, and spices. It's a flavorful and nutritious one-pot meal often served with raita or a side salad."
    },
    {
        name: "Methi Thepla",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270669/Calorix_DEV/nbqimz8ojxb8vri6vxpf.jpg",
        items: [
            { name: "Methi Thepla", quantity: 2, calories: 200 },
            { name: "Curd", quantity: 1, calories: 100 },
            { name: "Pickle", quantity: 1, calories: 30 }
        ],
        description: "Methi Thepla is a nutritious flatbread made from a spiced chickpea flour dough mixed with fresh fenugreek leaves, then pan-fried to golden perfection. It's often served with pickles or yogurt, making it a wholesome and delicious meal."
    },
    {
        name: "Pesarattu",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270671/Calorix_DEV/gin8nfpcwuzpxydwyn82.jpg",
        items: [
            { name: "Pesarattu", quantity: 2, calories: 200 },
            { name: "Sambhar", quantity: 1, calories: 100 },
            { name: "Chutney", quantity: 1, calories: 50 }
        ],
        description: "Pesarattu is a savory, green gram (chana dal) pancake popular in South India, made from a batter of soaked and ground green gram, spices, and herbs. It's typically served with a spicy ginger-onion chutney, making it a delicious and nutritious breakfast or snack."
    },
    {
        name: "Dhokla",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270670/Calorix_DEV/ho6356da1m6qfhxyvzwf.jpg",
        items: [
            { name: "Dhokla", quantity: 2, calories: 150 },
            { name: "Chutney", quantity: 1, calories: 50 }
        ],
        description: "Dhokla is a steamed, savory cake made from fermented rice and chickpea batter, seasoned with mustard seeds, curry leaves, and green chilies. It's a light and healthy Gujarati snack often served with green chutney."
    },
    {
        name: "Malai Kofta",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270669/Calorix_DEV/oquiexgbo2wxbbr7tayz.jpg",
        items: [
            { name: "Malai Kofta", quantity: 1, calories: 350 },
            { name: "Chapati", quantity: 2, calories: 200 }
        ],
        description: "Malai Kofta is a rich and creamy North Indian dish made from deep-fried, spiced potato and paneer balls (kofta) simmered in a luxurious tomato-based gravy. It's often garnished with cream and served with naan or rice, offering a decadent and satisfying meal."
    },
    {
        name: "Baingan Bharta",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270667/Calorix_DEV/ey6yhq0syrftqitkqzgl.jpg",
        items: [
            { name: "Baingan Bharta", quantity: 1, calories: 200 },
            { name: "Chapati", quantity: 2, calories: 200 }
        ],
        description: "Baingan Bharta is a smoky, flavorful Indian dish made from roasted and mashed eggplant cooked with onions, tomatoes, and spices. It's often served with roti or rice, offering a hearty and delicious vegetarian meal."
    },
    {
        name: "Kachori with Aloo Sabzi",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270667/Calorix_DEV/zllwrtpdhyxemxhuospo.jpg",
        items: [
            { name: "Kachori", quantity: 2, calories: 250 },
            { name: "Aloo Sabzi", quantity: 1, calories: 150 }
        ],
        description: "Lachori with Aloo Sabzi is a delightful Rajasthani dish featuring deep-fried, crispy flatbread (lachori) served with a spicy, flavorful potato curry (aloo sabzi). It's a popular and satisfying meal often enjoyed with a dollop of ghee or yogurt."
    },
    {
        name: "Lassi",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270668/Calorix_DEV/uuu7qgsktcgrxei2gdw0.jpg",
        items: [
            { name: "Lassi", quantity: 1, calories: 200 }
        ],
        description: "Lassi is a traditional Indian yogurt-based drink that's either sweet or savory, often flavored with spices like cardamom or cumin. It's refreshing and creamy, perfect for cooling down on a hot day."
    },
    {
        name: "Vada Pav",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270673/Calorix_DEV/kv9rv3k5itlt1bskxumd.jpg",
        items: [
            { name: "Vada", quantity: 1, calories: 150 },
            { name: "Pav", quantity: 1, calories: 100 }
        ],
        description: "Vada Pav is a popular Mumbai street food consisting of a spicy, deep-fried potato patty (vada) sandwiched between a soft, buttered bread roll (pav). It's often served with chutney and a dash of green chili, making it a flavorful and satisfying snack."
    },
    {
        name: "Tandoori Chicken",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270672/Calorix_DEV/pyjpjsd81hu2lfyrbwwz.jpg",
        items: [
            { name: "Tandoori Chicken", quantity: 1, calories: 350 },
            { name: "Naan", quantity: 2, calories: 200 }
        ],
        description: "Tandoori Chicken is a popular Indian dish featuring marinated chicken pieces cooked at high heat in a clay oven (tandoor), resulting in a smoky, flavorful, and tender meat. It's often served with mint chutney and naan, offering a delicious and aromatic meal."
    },
    {
        name: "Sambhar Rice",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270672/Calorix_DEV/ey1twvxdtwk5mms7ao4p.jpg",
        items: [
            { name: "Sambhar", quantity: 1, calories: 100 },
            { name: "Rice", quantity: 1, calories: 150 }
        ],
        description: "Sambhar Rice is a comforting South Indian dish made from steamed rice served with a flavorful, lentil-based vegetable stew (sambhar) cooked with vegetables and spices. It's a nutritious and satisfying meal often accompanied by papadam and pickle."
    },
    {
        name: "Gobi Manchurian",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270671/Calorix_DEV/ewhr5ru473c1dxzzin8l.jpg",
        items: [
            { name: "Gobi Manchurian", quantity: 1, calories: 250 },
            { name: "Rice", quantity: 1, calories: 150 }
        ],
        description: "Gobi Manchurian is a popular Indo-Chinese dish made from crispy, deep-fried cauliflower florets tossed in a spicy, tangy sauce with onions, bell peppers, and chili. It's often served as an appetizer or snack, accompanied by a side of fried rice or noodles."
    },
    {
        name: "Chutney Sandwich",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270669/Calorix_DEV/pee7zuhhslv1x8ijhrt8.jpg",
        items: [
            { name: "Sandwich", quantity: 1, calories: 200 },
            { name: "Chutney", quantity: 1, calories: 50 }
        ],
        description: "Chutney Sandwich is a delightful Indian street food featuring a soft, buttered bread roll filled with a spicy, tangy chutney and a variety of fillings like potatoes, onions, and coriander. It's a flavorful and satisfying snack often enjoyed on the go."
    },
    {
        name: "Puri with Aloo Curry",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270672/Calorix_DEV/njpbsjl9nul8jpt0wnj8.jpg",
        items: [
            { name: "Puri", quantity: 4, calories: 200 },
            { name: "Aloo Curry", quantity: 1, calories: 150 }
        ],
        description: "Puri with Aloo Curry is a classic Indian breakfast or snack featuring deep-fried, puffed bread (puri) served with a spicy, flavorful potato curry (aloo curry). It's a popular and satisfying meal often accompanied by pickles or chutney."
    },
    {
        name: "Rava Kesari",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270672/Calorix_DEV/rkprrwlgpptwju0xaqwe.jpg",
        items: [
            { name: "Rava Kesari", quantity: 1, calories: 300 }
        ],
        description: "Rava Kesari is a sweet South Indian dessert made from semolina (rava) cooked with ghee, sugar, and water until it becomes rich and creamy. It's often garnished with nuts and flavored with saffron, offering a delightful and indulgent treat."
    },
    {
        name: "Paneer Tikka",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270670/Calorix_DEV/lmh9xvazqqaymhq7luuu.jpg",
        items: [
            { name: "Paneer Tikka", quantity: 1, calories: 250 },
            { name: "Mint Chutney", quantity: 1, calories: 50 }
        ],
        description: "Paneer Tikka is a popular Indian dish featuring cubes of paneer (Indian cottage cheese) marinated in spices and yogurt, then grilled to perfection. It's often served with mint chutney and naan, offering a delicious and aromatic meal."
    },
    {
        name: "Chili Paneer",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270668/Calorix_DEV/pwdhbfc125xnpllebsaw.jpg",
        items: [
            { name: "Chili Paneer", quantity: 1, calories: 350 },
            { name: "Rice", quantity: 1, calories: 150 }
        ],
        description: "Chili Paneer is a spicy, flavorful North Indian dish made from cubes of paneer (Indian cottage cheese) cooked in a spicy, tangy tomato-based sauce with bell peppers and onions. It's often served with roti or rice, offering a delicious and satisfying meal."
    },
    {
        name: "Aloo Tikki",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270666/Calorix_DEV/uvskgzi1okfurfyxrdby.jpg",
        items: [
            { name: "Aloo Tikki", quantity: 2, calories: 150 },
            { name: "Chutney", quantity: 1, calories: 50 }
        ],
        description: "Aloo Tikki is a popular Indian snack made from spiced, mashed potatoes shaped into patties and deep-fried until crispy. It's often served with chutney or ketchup, making it a delicious and satisfying treat."
    },
    {
        name: "Dosa with Sambhar",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270671/Calorix_DEV/ua9nprjf4ah0jselamhg.jpg",
        items: [
            { name: "Dosa", quantity: 1, calories: 200 },
            { name: "Sambhar", quantity: 1, calories: 100 }
        ],
        description: "Dosa with Sambhar is a classic South Indian breakfast featuring a thin, crispy rice and lentil crepe (dosa) served with a flavorful, lentil-based vegetable stew (sambhar). It's a nutritious and delicious combination often accompanied by coconut chutney."
    },
    {
        name: "Mushroom Masala",
        image_url: "https://res.cloudinary.com/dklakrz5k/image/upload/v1737270669/Calorix_DEV/ao58orqmyr1dhprgwqwp.jpg",
        items: [
            { name: "Mushroom Masala", quantity: 1, calories: 250 },
            { name: "Rice", quantity: 1, calories: 150 }
        ],
        description: "Mushroom Masala is a savory Indian dish made from mushrooms cooked in a rich, creamy tomato-based sauce with onions, garlic, and spices. It's often served with roti or rice, offering a delicious and satisfying vegetarian meal."
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