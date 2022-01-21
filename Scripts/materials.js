const materialArr =
    [
        {
            "name": "Weeds",
            "img": "https://dodo.ac/np/images/8/82/Clump_of_Weeds_NH_Icon.png",
            "sell": 10,

        },
        {
            "name": "Tree Branch",
            "img": "https://dodo.ac/np/images/5/5d/Tree_Branch_NH_Icon.png",
            "sell": 5,

        },
        {
            "name": "Softwood",
            "img": "https://dodo.ac/np/images/d/de/Softwood_NH_Icon.png",
            "sell": 60,

        },
        {
            "name": "Wood",
            "img": "https://dodo.ac/np/images/a/a2/Wood_NH_Icon.png",
            "sell": 60,

        },
        {
            "name": "Hardwood",
            "img": "https://dodo.ac/np/images/d/de/Hardwood_NH_Icon.png",
            "sell": 60,

        },
        {
            "name": "Stone",
            "img": "https://dodo.ac/np/images/4/45/Stone_NH_Icon.png",
            "sell": 75,

        },
        {
            "name": "Clay",
            "img": "https://dodo.ac/np/images/4/4c/Clay_NH_Icon.png",
            "sell": 100,

        },
        {
            "name": "Iron Nugget",
            "img": "https://dodo.ac/np/images/f/fd/Iron_Nugget_NH_Icon.png",
            "sell": 375,

        },
        //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ A
        {
            "name": "Acorn",
            "img": "https://cdn.nookazon.com/nookazon/MenuIcon/DIYAcorn.png",
            "sell": 200,
            // "Start": "0901",
            // "End": "1210",
            // "StartSouth": "0301",
            // "EndSouth": "0610",
            "Start": getYear() + "-09-01",
            "End": getYear() + "-12-10",
            "StartSouth": getYear() + "-03-01",
            "EndSouth": getYear() + "-06-10",
        },
        {
            "name": "Apple",
            "img": "https://dodo.ac/np/images/d/d7/Apple_NH_Icon.png",
            "sell": 500,

        },
        //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- B
        {
            "name": "Bamboo Piece",
            "img": "https://dodo.ac/np/images/8/8b/Bamboo_Piece_NH_Icon.png",
            "sell": 80,

        },
        {
            "name": "Bamboo Shoot",
            "img": "https://dodo.ac/np/images/1/18/Bamboo_Shoot_NH_Icon.png",
            "sell": 250,

        },
        {
            "name": "Boot",
            "img": "https://dodo.ac/np/images/6/62/Boot_NH_Icon.png",
            "sell": 10,

        },
        {
            "name": "Brown Sugar",
            "img": "https://dodo.ac/np/images/e/e3/Brown_Sugar_NH_Icon.png",
            "sell": 210,

        },
        //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- C
        {
            "name": "Candy",
            "img": "https://cdn.nookazon.com/nookazon/MenuIcon/Candy.png",
            "sell": 30,
            // "Start": "1001",
            // "End": "1031",
            // "StartSouth": "1001",
            // "EndSouth": "1031",
            "Start": getYear() + "-10-01",
            "End": getYear() + "-10-31",
            "StartSouth": getYear() + "-10-01",
            "EndSouth": getYear() + "-10-31",
        },
        {
            "name": "Carrot",
            "img": "https://dodo.ac/np/images/8/85/Carrot_NH_Icon.png",
            "sell": 350,

        },
        {
            "name": "Cherry",
            "img": "https://dodo.ac/np/images/6/67/Cherry_NH_Icon.png",
            "sell": 500,

        },
        {
            "name": "Cherry-Blossom Petal",
            "img": "https://cdn.nookazon.com/nookazon/MenuIcon/Sakurapetal.png",
            "sell": 200,
            // "Start": "0401",
            // "End": "0410",
            // "StartSouth": "1001",
            // "EndSouth": "1010",
            "Start": getYear() + "-04-01",
            "End": getYear() + "-04-10",
            "StartSouth": getYear() + "-10-01",
            "EndSouth": getYear() + "-10-10",
        },
        {
            "name": "Coconut",
            "img": "https://dodo.ac/np/images/3/33/Coconut_NH_Icon.png",
            "sell": 250,

        },
        {
            "name": "Conch",
            "img": "https://dodo.ac/np/images/8/8a/Conch_NH_Icon.png",
            "sell": 700,

        },
        {
            "name": "Coral",
            "img": "https://dodo.ac/np/images/2/26/Coral_NH_Icon.png",
            "sell": 500,

        },
        {
            "name": "Black Cosmos",
            "img": "https://dodo.ac/np/images/8/8c/Black_Cosmos_NH_Icon.png",
            "sell": 240,

        },
        {
            "name": "Orange Cosmos",
            "img": "https://dodo.ac/np/images/2/2d/Orange_Cosmos_NH_Icon.png",
            "sell": 80,

        },
        {
            "name": "Pink Cosmos",
            "img": "https://dodo.ac/np/images/0/0e/Pink_Cosmos_NH_Icon.png",
            "sell": 80,

        },
        {
            "name": "Red Cosmos",
            "img": "https://dodo.ac/np/images/e/e4/Red_Cosmos_NH_Icon.png",
            "sell": 40,

        },
        {
            "name": "White Cosmos",
            "img": "https://dodo.ac/np/images/b/bd/White_Cosmos_NH_Icon.png",
            "sell": 40,

        },
        {
            "name": "Yellow Cosmos",
            "img": "https://dodo.ac/np/images/1/1e/Yellow_Cosmos_NH_Icon.png",
            "sell": 40,

        },
        {
            "name": "Cowrie",
            "img": "https://dodo.ac/np/images/4/44/Shell_NH_Icon.png",
            "sell": 60,

        },
        //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- E
        {
            "name": "Earth Egg",
            "img": "https://cdn.nookazon.com/nookazon/MenuIcon/EggGround.png",
            "sell": 200,
            "Start": subtractDays(getEaster(), 11),
            "End": getEaster(),
            "StartSouth": subtractDays(getEaster(), 11),
            "EndSouth": getEaster(),
        },
        {
            "name": "Leaf Egg",
            "img": "https://cdn.nookazon.com/nookazon/MenuIcon/EggLeaf.png",
            "sell": 200,
            "Start": subtractDays(getEaster(), 11),
            "End": getEaster(),
            "StartSouth": subtractDays(getEaster(), 11),
            "EndSouth": getEaster(),
        },
        {
            "name": "Sky Egg",
            "img": "https://cdn.nookazon.com/nookazon/MenuIcon/EggSky.png",
            "sell": 200,
            "Start": subtractDays(getEaster(), 11),
            "End": getEaster(),
            "StartSouth": subtractDays(getEaster(), 11),
            "EndSouth": getEaster(),
        },
        {
            "name": "Stone Egg",
            "img": "https://cdn.nookazon.com/nookazon/MenuIcon/EggRock.png",
            "sell": 200,
            "Start": subtractDays(getEaster(), 11),
            "End": getEaster(),
            "StartSouth": subtractDays(getEaster(), 11),
            "EndSouth": getEaster(),
        },
        {
            "name": "Water Egg",
            "img": "https://cdn.nookazon.com/nookazon/MenuIcon/EggFish.png",
            "sell": 200,
            "Start": subtractDays(getEaster(), 11),
            "End": getEaster(),
            "StartSouth": subtractDays(getEaster(), 11),
            "EndSouth": getEaster(),
        },
        {
            "name": "Wood Egg",
            "img": "https://cdn.nookazon.com/nookazon/MenuIcon/EggForest.png",
            "sell": 200,
            "Start": subtractDays(getEaster(), 11),
            "End": getEaster(),
            "StartSouth": subtractDays(getEaster(), 11),
            "EndSouth": getEaster(),
        },
        {
            "name": "Empty Can",
            "img": "https://dodo.ac/np/images/8/89/Empty_Can_NH_Icon.png",
            "sell": 10,
        },
        //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- F
        {
            "name": "Blue Feather",
            "img": "https://dodo.ac/np/images/6/66/Blue_Feather_NH_Icon.png",
            "sell": 200,
        },
        {
            "name": "Green Feather",
            "img": "https://dodo.ac/np/images/9/92/Green_Feather_NH_Icon.png",
            "sell": 200,
        },
        {
            "name": "Purple Feather",
            "img": "https://dodo.ac/np/images/e/ed/Purple_Feather_NH_Icon.png",
            "sell": 200,
        },
        {
            "name": "Red Feather",
            "img": "https://dodo.ac/np/images/9/9e/Red_Feather_NH_Icon.png",
            "sell": 200,
        },
        {
            "name": "Aquarius Fragment",
            "img": "https://dodo.ac/np/images/e/ed/Aquarius_Fragment_NH_Icon.png",
            "sell": 500,

        },
        {
            "name": "Aries Fragment",
            "img": "https://dodo.ac/np/images/a/a2/Aries_Fragment_NH_Icon.png",
            "sell": 500,

        },
        {
            "name": "Cancer Fragment",
            "img": "https://dodo.ac/np/images/0/01/Cancer_Fragment_NH_Icon.png",
            "sell": 500,

        },
        {
            "name": "Capricorn Fragment",
            "img": "https://dodo.ac/np/images/8/80/Capricorn_Fragment_NH_Icon.png",
            "sell": 500,

        },
        {
            "name": "Gemini Fragment",
            "img": "https://dodo.ac/np/images/2/2b/Gemini_Fragment_NH_Icon.png",
            "sell": 500,

        },
        {
            "name": "Leo Fragment",
            "img": "https://dodo.ac/np/images/a/a5/Leo_Fragment_NH_Icon.png",
            "sell": 500,

        },
        {
            "name": "Libra Fragment",
            "img": "https://dodo.ac/np/images/5/5e/Libra_Fragment_NH_Icon.png",
            "sell": 500,

        },
        {
            "name": "Pisces Fragment",
            "img": "https://dodo.ac/np/images/2/2e/Pisces_Fragment_NH_Icon.png",
            "sell": 500,

        },
        {
            "name": "Sagittarius Fragment",
            "img": "https://dodo.ac/np/images/a/a0/Sagittarius_Fragment_NH_Icon.png",
            "sell": 500,

        },
        {
            "name": "Scorpius Fragment",
            "img": "https://dodo.ac/np/images/6/6e/Scorpius_Fragment_NH_Icon.png",
            "sell": 500,

        },
        {
            "name": "Taurus Fragment",
            "img": "https://dodo.ac/np/images/8/8b/Taurus_Fragment_NH_Icon.png",
            "sell": 500,

        },
        {
            "name": "Virgo Fragment",
            "img": "https://dodo.ac/np/images/8/85/Virgo_Fragment_NH_Icon.png",
            "sell": 500,

        },
        {
            "name": "Flour",
            "img": "https://dodo.ac/np/images/b/b9/Flour_NH_Icon.png",
            "sell": 210,

        },
        {
            "name": "Fossil",
            "img": "https://dodo.ac/np/images/b/b0/Fossil_NH_Icon.png",
            "sell": 100,

        },
        //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- G
        {
            "name": "Giant Clam",
            "img": "https://dodo.ac/np/images/4/44/Shell_NH_Icon.png",
            "sell": 900,

        },
        {
            "name": "Glowing Moss",
            "img": "https://dodo.ac/np/images/c/c9/Glowing_Moss_NH_Icon.png",
            "sell": 25,

        },
        {
            "name": "Gold Nugget",
            "img": "https://dodo.ac/np/images/d/de/Gold_Nugget_NH_Icon.png",
            "sell": 10000,

        },
        //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- H
        {
            "name": "Blue Hyacinths",
            "img": "https://dodo.ac/np/images/a/a9/Blue_Hyacinths_NH_Icon.png",
            "sell": 80,

        },
        {
            "name": "Pink Hyacinths",
            "img": "https://dodo.ac/np/images/7/71/Pink_Hyacinths_NH_Icon.png",
            "sell": 80,

        },
        {
            "name": "Purple Hyacinths",
            "image_url": "https://dodo.ac/np/images/9/9e/Purple_Hyacinths_NH_Icon.png",
            "sell": 240
        },
        {
            "name": "Red Hyacinths",
            "img": "https://dodo.ac/np/images/8/80/Red_Hyacinths_NH_Icon.png",
            "sell": 40,

        },
        {
            "name": "White Hyacinths",
            "img": "https://dodo.ac/np/images/f/fe/White_Hyacinths_NH_Icon.png",
            "sell": 40,

        },
        {
            "name": "Yellow Hyacinths",
            "img": "https://dodo.ac/np/images/b/bb/Yellow_Hyacinths_NH_Icon.png",
            "sell": 40,

        },
        //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- L
        {
            "name": "Large Snowflake",
            "img": "https://cdn.nookazon.com/nookazon/MenuIcon/SnowCrystalLarge.png",
            "sell": 2500,
            // "Start": "1211",
            // "End": "0224",
            // "StartSouth": "0611",
            // "EndSouth": "0824",
            "Start": getYear() + "-12-11",
            "End": getYear() + "-02-24",
            "StartSouth": getYear() + "-06-11",
            "EndSouth": getYear() + "-08-24",
        },
        {
            "name": "Large Star Fragment",
            "img": "https://dodo.ac/np/images/4/47/Large_Star_Fragment_NH_Icon.png",
            "sell": 2500,

        },
        {
            "name": "Black Lilies",
            "img": "https://dodo.ac/np/images/1/1f/Black_Lilies_NH_Icon.png",
            "sell": 80,

        },
        {
            "name": "Orange Lilies",
            "img": "https://dodo.ac/np/images/8/85/Orange_Lilies_NH_Icon.png",
            "sell": 80,

        },
        {
            "name": "Pink Lilies",
            "img": "https://dodo.ac/np/images/a/ae/Pink_Lilies_NH_Icon.png",
            "sell": 80,

        },
        {
            "name": "Red Lilies",
            "img": "https://dodo.ac/np/images/5/5c/Red_Lilies_NH_Icon.png",
            "sell": 40,

        },
        {
            "name": "White Lilies",
            "img": "https://dodo.ac/np/images/b/b2/White_Lilies_NH_Icon.png",
            "sell": 40,

        },
        {
            "name": "Yellow Lilies",
            "img": "https://dodo.ac/np/images/e/e0/Yellow_Lilies_NH_Icon.png",
            "sell": 40,

        },
        //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- M
        {
            "name": "Manila Clam",
            "img": "https://dodo.ac/np/images/4/44/Shell_NH_Icon.png",
            "sell": 100,

        },
        {
            "name": "Maple Leaf",
            "img": "https://dodo.ac/np/images/1/10/Maple_Leaf_NH_Icon.png",
            "sell": 200,
        },
        {
            "name": "Green Mums",
            "img": "https://dodo.ac/np/images/a/a7/Green_Mums_NH_Icon.png",
            "sell": 240,

        },
        {
            "name": "Pink Mums",
            "img": "https://dodo.ac/np/images/2/20/Pink_Mums_NH_Icon.png",
            "sell": 80,

        },
        {
            "name": "Purple Mums",
            "image_url": "https://dodo.ac/np/images/6/6e/Purple_Mums_NH_Icon.png",
            "sell": 80
        },
        {
            "name": "Red Mums",
            "img": "https://dodo.ac/np/images/5/58/Red_Mums_NH_Icon.png",
            "sell": 40,

        },
        {
            "name": "White Mums",
            "img": "https://dodo.ac/np/images/0/01/White_Mums_NH_Icon.png",
            "sell": 40,

        },
        {
            "name": "Yellow Mums",
            "img": "https://dodo.ac/np/images/2/25/Yellow_Mums_NH_Icon.png",
            "sell": 40,

        },
        {
            "name": "Elegant Mushroom",
            "img": "https://cdn.nookazon.com/nookazon/MenuIcon/Mush0.png",
            "sell": 10000,
            // "Start": "1101",
            // "End": "1130",
            // "StartSouth": "0501",
            // "EndSouth": "0531",
            "Start": getYear() + "-11-01",
            "End": getYear() + "-11-30",
            "StartSouth": getYear() + "-05-01",
            "EndSouth": getYear() + "-05-31",
        },
        {
            "name": "Flat Mushroom",
            "img": "https://cdn.nookazon.com/nookazon/MenuIcon/Mush3.png",
            "sell": 200,
            // "Start": "1101",
            // "End": "1130",
            // "StartSouth": "0501",
            // "EndSouth": "0531",
            "Start": getYear() + "-11-01",
            "End": getYear() + "-11-30",
            "StartSouth": getYear() + "-05-01",
            "EndSouth": getYear() + "-05-31",
        },
        {
            "name": "Rare Mushroom",
            "img": "https://cdn.nookazon.com/nookazon/MenuIcon/Mush4.png",
            "sell": 16000,
            // "Start": "1101",
            // "End": "1130",
            // "StartSouth": "0501",
            // "EndSouth": "0531",
            "Start": getYear() + "-11-01",
            "End": getYear() + "-11-30",
            "StartSouth": getYear() + "-05-01",
            "EndSouth": getYear() + "-05-31",
        },
        {
            "name": "Round Mushroom",
            "img": "https://cdn.nookazon.com/nookazon/MenuIcon/Mush1.png",
            "sell": 200,
            // "Start": "1101",
            // "End": "1130",
            // "StartSouth": "0501",
            // "EndSouth": "0531",
            "Start": getYear() + "-11-01",
            "End": getYear() + "-11-30",
            "StartSouth": getYear() + "-05-01",
            "EndSouth": getYear() + "-05-31",
        },
        {
            "name": "Skinny Mushroom",
            "img": "https://cdn.nookazon.com/nookazon/MenuIcon/Mush2.png",
            "sell": 300,
            // "Start": "1101",
            // "End": "1130",
            // "StartSouth": "0501",
            // "EndSouth": "0531",
            "Start": getYear() + "-11-01",
            "End": getYear() + "-11-30",
            "StartSouth": getYear() + "-05-01",
            "EndSouth": getYear() + "-05-31",
        },
        //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- O
        {
            "name": "Old Tire",
            "img": "https://dodo.ac/np/images/7/77/Old_Tire_NH_Icon.png",
            "sell": 10,

        },
        {
            "name": "Orange",
            "img": "https://dodo.ac/np/images/7/7c/Orange_NH_Icon.png",
            "sell": 500,

        },
        {
            "name": "Blue Ornament",
            "img": "https://cdn.nookazon.com/nookazon/MenuIcon/ChristmasOrnamentB.png",
            "sell": 50,
            // "Start": "1215",
            // "End": "0106",
            // "StartSouth": "1215",
            // "EndSouth": "0106",
            "Start": getYear() + "-12-15",
            "End": getYear() + "-01-06",
            "StartSouth": getYear() + "-12-15",
            "EndSouth": getYear() + "-01-06",
        },
        {
            "name": "Gold Ornament",
            "img": "https://cdn.nookazon.com/nookazon/MenuIcon/ChristmasOrnamentC.png",
            "sell": 50,
            // "Start": "1215",
            // "End": "0106",
            // "StartSouth": "1215",
            // "EndSouth": "0106",
            "Start": getYear() + "-12-15",
            "End": getYear() + "-01-06",
            "StartSouth": getYear() + "-12-15",
            "EndSouth": getYear() + "-01-06",
        },
        {
            "name": "Red Ornament",
            "img": "https://cdn.nookazon.com/nookazon/MenuIcon/ChristmasOrnamentA.png",
            "sell": 50,
            // "Start": "1215",
            // "End": "0106",
            // "StartSouth": "1215",
            // "EndSouth": "0106",
            "Start": getYear() + "-12-15",
            "End": getYear() + "-01-06",
            "StartSouth": getYear() + "-12-15",
            "EndSouth": getYear() + "-01-06",
        },
        //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- P
        {
            "name": "Blue Pansies",
            "img": "https://dodo.ac/np/images/9/98/Blue_Pansies_NH_Icon.png",
            "sell": 80,

        },
        {
            "name": "Orange Pansies",
            "img": "https://dodo.ac/np/images/c/c5/Orange_Pansies_NH_Icon.png",
            "sell": 80,

        },
        {
            "name": "Purple Pansies",
            "image_url": "https://dodo.ac/np/images/a/a6/Purple_Pansies_NH_Icon.png",
            "sell": 240
        },
        {
            "name": "Red Pansies",
            "img": "https://dodo.ac/np/images/3/32/Red_Pansies_NH_Icon.png",
            "sell": 40,

        },
        {
            "name": "White Pansies",
            "img": "https://dodo.ac/np/images/8/80/White_Pansies_NH_Icon.png",
            "sell": 40,

        },
        {
            "name": "Yellow Pansies",
            "img": "https://dodo.ac/np/images/c/c4/Yellow_Pansies_NH_Icon.png",
            "sell": 40,

        },
        {
            "name": "Peach",
            "img": "https://dodo.ac/np/images/1/19/Peach_NH_Icon.png",
            "sell": 500,

        },
        {
            "name": "Pear",
            "img": "https://dodo.ac/np/images/4/40/Pear_NH_Icon.png",
            "sell": 500,

        },
        {
            "name": "Pearl",
            "img": "https://dodo.ac/np/images/7/7a/Pearl_NH_Icon.png",
            "sell": 10000,

        },
        {
            "name": "Pine Cone",
            "img": "https://dodo.ac/np/images/6/6c/Pine_Cone_NH_Icon.png",
            "sell": 200,
            "Start": getYear() + "-09-01",
            "End": getYear() + "-12-10",
            "StartSouth": getYear() + "-03-01",
            "EndSouth": getYear() + "-06-10",
        },
        {
            "name": "Potato",
            "img": "https://dodo.ac/np/images/3/39/Potato_NH_Icon.png",
            "sell": 350,

        },
        {
            "name": "Green Pumpkin",
            "img": "https://dodo.ac/np/images/9/9f/Green_Pumpkin_NH_Icon.png",
            "sell": 350,

        },
        {
            "name": "Orange Pumpkin",
            "img": "https://dodo.ac/np/images/c/ce/Orange_Pumpkin_NH_Icon.png",
            "sell": 350,

        },
        {
            "name": "White Pumpkin",
            "img": "https://dodo.ac/np/images/1/1a/White_Pumpkin_NH_Icon.png",
            "sell": 350,

        },
        {
            "name": "Yellow Pumpkin",
            "img": "https://dodo.ac/np/images/2/21/Yellow_Pumpkin_NH_Icon.png",
            "sell": 350,

        },
        //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- R
        {
            "name": "Red Wrapping Paper",
            "img": "https://dodo.ac/np/images/9/95/Red_Wrapping_Paper_NH_Icon.png",
            "sell": 60,

        },
        {
            "name": "Black Roses",
            "img": "https://dodo.ac/np/images/0/0d/Black_Roses_NH_Icon.png",
            "sell": 240,

        },
        {
            "name": "Blue Roses",
            "img": "https://dodo.ac/np/images/f/fa/Blue_Roses_NH_Icon.png",
            "sell": 1000,

        },
        {
            "name": "Gold Roses",
            "img": "https://dodo.ac/np/images/2/24/Gold_Roses_NH_Icon.png",
            "sell": 1000,

        },
        {
            "name": "Orange Roses",
            "img": "https://dodo.ac/np/images/3/32/Orange_Roses_NH_Icon.png",
            "sell": 80,

        },
        {
            "name": "Pink Roses",
            "img": "https://dodo.ac/np/images/9/9c/Pink_Roses_NH_Icon.png",
            "sell": 80,

        },
        {
            "name": "Purple Roses",
            "image_url": "https://dodo.ac/np/images/1/1d/Purple_Roses_NH_Icon.png",
            "sell": 240
        },
        {
            "name": "Red Roses",
            "img": "https://dodo.ac/np/images/7/74/Red_Roses_NH_Icon.png",
            "sell": 40,

        },
        {
            "name": "White Roses",
            "img": "https://dodo.ac/np/images/f/fd/White_Roses_NH_Icon.png",
            "sell": 40,

        },
        {
            "name": "Yellow Roses",
            "img": "https://dodo.ac/np/images/a/af/Yellow_Roses_NH_Icon.png",
            "sell": 40,

        },
        {
            "name": "Rusted Part",
            "img": "https://dodo.ac/np/images/b/bb/Rusted_Part_NH_Icon.png",
            "sell": 10,

        },
        //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- S
        {
            "name": "Sand Dollar",
            "img": "https://dodo.ac/np/images/4/44/Shell_NH_Icon.png",
            "sell": 120,

        },
        {
            "name": "Sea Snail",
            "img": "https://dodo.ac/np/images/8/8a/Conch_NH_Icon.png",
            "sell": 180,

        },
        {
            "name": "Snowflake",
            "img": "https://cdn.nookazon.com/nookazon/MenuIcon/SnowCrystal.png",
            "sell": 200,
            // "Start": "1211",
            // "End": "0224",
            // "StartSouth": "0611",
            // "EndSouth": "0824",
            "Start": getYear() + "-12-11",
            "End": getYear() + "-02-24",
            "StartSouth": getYear() + "-06-11",
            "EndSouth": getYear() + "-08-24",
        },
        {
            "name": "Star Fragment",
            "img": "https://dodo.ac/np/images/7/7a/Star_Fragment_NH_Icon.png",
            "sell": 250,

        },
        {
            "name": "Sugar",
            "img": "https://dodo.ac/np/images/2/25/Sugar_NH_Icon.png",
            "sell": 210,

        },
        {
            "name": "Sugarcane",
            "img": "https://dodo.ac/np/images/7/74/Sugarcane_NH_Icon.png",
            "sell": 350,

        },
        {
            "name": "Summer Shell",
            "img": "https://cdn.nookazon.com/nookazon/MenuIcon/ShellSummer.png",
            "sell": 600,
            // "Start": "0601",
            // "End": "0831",
            // "StartSouth": "1201",
            // "EndSouth": "0229",
            "Start": getYear() + "-06-01",
            "End": getYear() + "-08-31",
            "StartSouth": getYear() + "-12-01",
            "EndSouth": getYear() + "-02-29",
        },
        //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- T
        {
            "name": "Tomato",
            "img": "https://dodo.ac/np/images/6/6b/Tomato_NH_Icon.png",
            "sell": 350,

        },
        {
            "name": "Black Tulips",
            "img": "https://dodo.ac/np/images/0/0c/Black_Tulips_NH_Icon.png",
            "sell": 80,

        },
        {
            "name": "Orange Tulips",
            "img": "https://dodo.ac/np/images/e/e7/Orange_Tulips_NH_Icon.png",
            "sell": 80,

        },
        {
            "name": "Pink Tulips",
            "img": "https://dodo.ac/np/images/7/71/Pink_Tulips_NH_Icon.png",
            "sell": 80,

        },
        {
            "name": "Purple Tulips",
            "image_url": "https://dodo.ac/np/images/f/fa/Purple_Tulips_NH_Icon.png",
            "sell": 240
        },
        {
            "name": "Red Tulips",
            "img": "https://dodo.ac/np/images/b/b7/Red_Tulips_NH_Icon.png",
            "sell": 40,

        },
        {
            "name": "White Tulips",
            "img": "https://dodo.ac/np/images/b/b1/White_Tulips_NH_Icon.png",
            "sell": 40,

        },
        {
            "name": "Yellow Tulips",
            "img": "https://dodo.ac/np/images/6/68/Yellow_Tulips_NH_Icon.png",
            "sell": 40,

        },
        {
            "name": "Turnips",
            "img": "https://dodo.ac/np/images/2/2e/Turnips_NH_Icon.png",
            "sell": "",

        },
        //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- V
        {
            "name": "Venus Comb",
            "img": "https://dodo.ac/np/images/8/8a/Conch_NH_Icon.png",
            "sell": 300,

        },
        {
            "name": "Vine",
            "img": "https://dodo.ac/np/images/b/b5/Vine_NH_Icon.png",
            "sell": 50,

        },
        //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- W
        {
            "name": "Wasp Nest",
            "img": "https://dodo.ac/np/images/5/56/Wasp_Nest_NH_Icon.png",
            "sell": 300,

        },
        {
            "name": "Wheat",
            "img": "https://dodo.ac/np/images/3/31/Wheat_NH_Icon.png",
            "sell": 350,

        },
        {
            "name": "Blue Windflowers",
            "img": "https://dodo.ac/np/images/1/1b/Blue_Windflowers_NH_Icon.png",
            "sell": 80,

        },
        {
            "name": "Orange Windflowers",
            "img": "https://dodo.ac/np/images/c/cf/Orange_Windflowers_NH_Icon.png",
            "sell": 40,

        },
        {
            "name": "Pink Windflowers",
            "img": "https://dodo.ac/np/images/b/ba/Pink_Windflowers_NH_Icon.png",
            "sell": 80,

        },
        {
            "name": "Purple Windflowers",
            "image_url": "https://dodo.ac/np/images/5/55/Purple_Windflowers_NH_Icon.png",
            "sell": 240
        },
        {
            "name": "Red Windflowers",
            "img": "https://dodo.ac/np/images/5/51/Red_Windflowers_NH_Icon.png",
            "sell": 40,

        },
        {
            "name": "White Windflowers",
            "img": "https://dodo.ac/np/images/6/6d/White_Windflowers_NH_Icon.png",
            "sell": 40,

        },
        {
            "name": "Whole-Wheat Flour",
            "img": "https://dodo.ac/np/images/d/de/Whole-Wheat_Flour_NH_Icon.png",
            "sell": 210,

        },
        //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- Y
        {
            "name": "Young Spring Bamboo",
            "img": "https://cdn.nookazon.com/nookazon/MenuIcon/DIYBambooSpring.png",
            "sell": 200,
            // "Start": "0225",
            // "End": "0531",
            // "StartSouth": "0828",
            // "EndSouth": "1130",
            "Start": getYear() + "-02-25",
            "End": getYear() + "-05-31",
            "StartSouth": getYear() + "-08-28",
            "EndSouth": getYear() + "-11-30",
        }
    ]