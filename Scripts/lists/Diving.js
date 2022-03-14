//https://nookipedia.com/w/index.php?title=Special%3ACargoQuery&tables=nh_sea_creature%2C+&fields=nh_sea_creature.name%2C+nh_sea_creature.image_url%2C+nh_sea_creature.n_m1%2C+nh_sea_creature.n_m2%2C+nh_sea_creature.n_m3%2C+nh_sea_creature.n_m4%2C+nh_sea_creature.n_m5%2C+nh_sea_creature.n_m6%2C+nh_sea_creature.n_m7%2C+nh_sea_creature.n_m8%2C+nh_sea_creature.n_m9%2C+nh_sea_creature.n_m10%2C+nh_sea_creature.n_m11%2C+nh_sea_creature.n_m12%2C+nh_sea_creature.s_m1%2C+nh_sea_creature.s_m2%2C+nh_sea_creature.s_m3%2C+nh_sea_creature.s_m4%2C+nh_sea_creature.s_m5%2C+nh_sea_creature.s_m6%2C+nh_sea_creature.s_m7%2C+nh_sea_creature.s_m8%2C+nh_sea_creature.s_m9%2C+nh_sea_creature.s_m10%2C+nh_sea_creature.s_m11%2C+nh_sea_creature.s_m12%2C+nh_sea_creature.time%2C+nh_sea_creature.sell_nook%2C+&where=&join_on=&group_by=&having=&order_by%5B0%5D=&order_by_options%5B0%5D=ASC&limit=1000&offset=0&format=
const divingArr = 
[
    {
        "name": "Abalone",
        "image_url": "https://dodo.ac/np/images/0/04/Abalone_NH_Icon.png",
        "n_m1": 1,
        "n_m2": 0,
        "n_m3": 0,
        "n_m4": 0,
        "n_m5": 0,
        "n_m6": 1,
        "n_m7": 1,
        "n_m8": 1,
        "n_m9": 1,
        "n_m10": 1,
        "n_m11": 1,
        "n_m12": 1,
        "s_m1": 1,
        "s_m2": 1,
        "s_m3": 1,
        "s_m4": 1,
        "s_m5": 1,
        "s_m6": 1,
        "s_m7": 1,
        "s_m8": 0,
        "s_m9": 0,
        "s_m10": 0,
        "s_m11": 0,
        "s_m12": 1,
        "time": "4 PM 09 AM",
        "sell_nook": 2000
    },
    {
        "name": "Acorn Barnacle",
        "image_url": "https://dodo.ac/np/images/a/a4/Acorn_Barnacle_NH_Icon.png",
        "n_m1": 1,
        "n_m2": 1,
        "n_m3": 1,
        "n_m4": 1,
        "n_m5": 1,
        "n_m6": 1,
        "n_m7": 1,
        "n_m8": 1,
        "n_m9": 1,
        "n_m10": 1,
        "n_m11": 1,
        "n_m12": 1,
        "s_m1": 1,
        "s_m2": 1,
        "s_m3": 1,
        "s_m4": 1,
        "s_m5": 1,
        "s_m6": 1,
        "s_m7": 1,
        "s_m8": 1,
        "s_m9": 1,
        "s_m10": 1,
        "s_m11": 1,
        "s_m12": 1,
        "time": "All day",
        "sell_nook": 600
    },
    {
        "name": "Chambered Nautilus",
        "image_url": "https://dodo.ac/np/images/9/98/Chambered_Nautilus_NH_Icon.png",
        "n_m1": 0,
        "n_m2": 0,
        "n_m3": 1,
        "n_m4": 1,
        "n_m5": 1,
        "n_m6": 1,
        "n_m7": 0,
        "n_m8": 0,
        "n_m9": 1,
        "n_m10": 1,
        "n_m11": 1,
        "n_m12": 0,
        "s_m1": 0,
        "s_m2": 0,
        "s_m3": 1,
        "s_m4": 1,
        "s_m5": 1,
        "s_m6": 0,
        "s_m7": 0,
        "s_m8": 0,
        "s_m9": 1,
        "s_m10": 1,
        "s_m11": 1,
        "s_m12": 1,
        "time": "4 PM 09 AM",
        "sell_nook": 1800
    },
    {
        "name": "Dungeness Crab",
        "image_url": "https://dodo.ac/np/images/6/65/Dungeness_Crab_NH_Icon.png",
        "n_m1": 1,
        "n_m2": 1,
        "n_m3": 1,
        "n_m4": 1,
        "n_m5": 1,
        "n_m6": 0,
        "n_m7": 0,
        "n_m8": 0,
        "n_m9": 0,
        "n_m10": 0,
        "n_m11": 1,
        "n_m12": 1,
        "s_m1": 0,
        "s_m2": 0,
        "s_m3": 0,
        "s_m4": 0,
        "s_m5": 1,
        "s_m6": 1,
        "s_m7": 1,
        "s_m8": 1,
        "s_m9": 1,
        "s_m10": 1,
        "s_m11": 1,
        "s_m12": 0,
        "time": "All day",
        "sell_nook": 1900
    },
    {
        "name": "Firefly Squid",
        "image_url": "https://dodo.ac/np/images/d/d0/Firefly_Squid_NH_Icon.png",
        "n_m1": 0,
        "n_m2": 0,
        "n_m3": 1,
        "n_m4": 1,
        "n_m5": 1,
        "n_m6": 1,
        "n_m7": 0,
        "n_m8": 0,
        "n_m9": 0,
        "n_m10": 0,
        "n_m11": 0,
        "n_m12": 0,
        "s_m1": 0,
        "s_m2": 0,
        "s_m3": 0,
        "s_m4": 0,
        "s_m5": 0,
        "s_m6": 0,
        "s_m7": 0,
        "s_m8": 0,
        "s_m9": 1,
        "s_m10": 1,
        "s_m11": 1,
        "s_m12": 1,
        "time": "9 PM 04 AM",
        "sell_nook": 1400
    },
    {
        "name": "Flatworm",
        "image_url": "https://dodo.ac/np/images/0/07/Flatworm_NH_Icon.png",
        "n_m1": 0,
        "n_m2": 0,
        "n_m3": 0,
        "n_m4": 0,
        "n_m5": 0,
        "n_m6": 0,
        "n_m7": 0,
        "n_m8": 1,
        "n_m9": 1,
        "n_m10": 0,
        "n_m11": 0,
        "n_m12": 0,
        "s_m1": 0,
        "s_m2": 1,
        "s_m3": 1,
        "s_m4": 0,
        "s_m5": 0,
        "s_m6": 0,
        "s_m7": 0,
        "s_m8": 0,
        "s_m9": 0,
        "s_m10": 0,
        "s_m11": 0,
        "s_m12": 0,
        "time": "4 PM 09 AM",
        "sell_nook": 700
    },
    {
        "name": "Gazami Crab",
        "image_url": "https://dodo.ac/np/images/6/60/Gazami_Crab_NH_Icon.png",
        "n_m1": 0,
        "n_m2": 0,
        "n_m3": 0,
        "n_m4": 0,
        "n_m5": 0,
        "n_m6": 1,
        "n_m7": 1,
        "n_m8": 1,
        "n_m9": 1,
        "n_m10": 1,
        "n_m11": 1,
        "n_m12": 0,
        "s_m1": 1,
        "s_m2": 1,
        "s_m3": 1,
        "s_m4": 1,
        "s_m5": 1,
        "s_m6": 0,
        "s_m7": 0,
        "s_m8": 0,
        "s_m9": 0,
        "s_m10": 0,
        "s_m11": 0,
        "s_m12": 1,
        "time": "All day",
        "sell_nook": 2200
    },
    {
        "name": "Giant Isopod",
        "image_url": "https://dodo.ac/np/images/0/00/Giant_Isopod_NH_Icon.png",
        "n_m1": 0,
        "n_m2": 0,
        "n_m3": 0,
        "n_m4": 0,
        "n_m5": 0,
        "n_m6": 0,
        "n_m7": 1,
        "n_m8": 1,
        "n_m9": 1,
        "n_m10": 1,
        "n_m11": 0,
        "n_m12": 0,
        "s_m1": 1,
        "s_m2": 1,
        "s_m3": 1,
        "s_m4": 1,
        "s_m5": 0,
        "s_m6": 0,
        "s_m7": 0,
        "s_m8": 0,
        "s_m9": 0,
        "s_m10": 0,
        "s_m11": 0,
        "s_m12": 0,
        "time": "9 AM 04 PM; 9 PM  4 AM",
        "sell_nook": 12000
    },
    {
        "name": "Gigas Giant Clam",
        "image_url": "https://dodo.ac/np/images/c/ca/Gigas_Giant_Clam_NH_Icon.png",
        "n_m1": 0,
        "n_m2": 0,
        "n_m3": 0,
        "n_m4": 0,
        "n_m5": 1,
        "n_m6": 1,
        "n_m7": 1,
        "n_m8": 1,
        "n_m9": 1,
        "n_m10": 0,
        "n_m11": 0,
        "n_m12": 0,
        "s_m1": 1,
        "s_m2": 1,
        "s_m3": 1,
        "s_m4": 0,
        "s_m5": 0,
        "s_m6": 0,
        "s_m7": 0,
        "s_m8": 0,
        "s_m9": 0,
        "s_m10": 0,
        "s_m11": 1,
        "s_m12": 1,
        "time": "All day",
        "sell_nook": 15000
    },
    {
        "name": "Horseshoe Crab",
        "image_url": "https://dodo.ac/np/images/5/5b/Horseshoe_Crab_NH_Icon.png",
        "n_m1": 0,
        "n_m2": 0,
        "n_m3": 0,
        "n_m4": 0,
        "n_m5": 0,
        "n_m6": 0,
        "n_m7": 1,
        "n_m8": 1,
        "n_m9": 1,
        "n_m10": 0,
        "n_m11": 0,
        "n_m12": 0,
        "s_m1": 1,
        "s_m2": 1,
        "s_m3": 1,
        "s_m4": 0,
        "s_m5": 0,
        "s_m6": 0,
        "s_m7": 0,
        "s_m8": 0,
        "s_m9": 0,
        "s_m10": 0,
        "s_m11": 0,
        "s_m12": 0,
        "time": "9 PM 04 AM",
        "sell_nook": 2500
    },
    {
        "name": "Lobster",
        "image_url": "https://dodo.ac/np/images/a/a9/Lobster_NH_Icon.png",
        "n_m1": 1,
        "n_m2": 0,
        "n_m3": 0,
        "n_m4": 1,
        "n_m5": 1,
        "n_m6": 1,
        "n_m7": 0,
        "n_m8": 0,
        "n_m9": 0,
        "n_m10": 0,
        "n_m11": 0,
        "n_m12": 1,
        "s_m1": 0,
        "s_m2": 0,
        "s_m3": 0,
        "s_m4": 0,
        "s_m5": 0,
        "s_m6": 1,
        "s_m7": 1,
        "s_m8": 0,
        "s_m9": 0,
        "s_m10": 1,
        "s_m11": 1,
        "s_m12": 1,
        "time": "All day",
        "sell_nook": 4500
    },
    {
        "name": "Mantis Shrimp",
        "image_url": "https://dodo.ac/np/images/7/7d/Mantis_Shrimp_NH_Icon.png",
        "n_m1": 1,
        "n_m2": 1,
        "n_m3": 1,
        "n_m4": 1,
        "n_m5": 1,
        "n_m6": 1,
        "n_m7": 1,
        "n_m8": 1,
        "n_m9": 1,
        "n_m10": 1,
        "n_m11": 1,
        "n_m12": 1,
        "s_m1": 1,
        "s_m2": 1,
        "s_m3": 1,
        "s_m4": 1,
        "s_m5": 1,
        "s_m6": 1,
        "s_m7": 1,
        "s_m8": 1,
        "s_m9": 1,
        "s_m10": 1,
        "s_m11": 1,
        "s_m12": 1,
        "time": "4 PM 09 AM",
        "sell_nook": 2500
    },
    {
        "name": "Moon Jellyfish",
        "image_url": "https://dodo.ac/np/images/f/f9/Moon_Jellyfish_NH_Icon.png",
        "n_m1": 0,
        "n_m2": 0,
        "n_m3": 0,
        "n_m4": 0,
        "n_m5": 0,
        "n_m6": 0,
        "n_m7": 1,
        "n_m8": 1,
        "n_m9": 1,
        "n_m10": 0,
        "n_m11": 0,
        "n_m12": 0,
        "s_m1": 1,
        "s_m2": 1,
        "s_m3": 1,
        "s_m4": 0,
        "s_m5": 0,
        "s_m6": 0,
        "s_m7": 0,
        "s_m8": 0,
        "s_m9": 0,
        "s_m10": 0,
        "s_m11": 0,
        "s_m12": 0,
        "time": "All day",
        "sell_nook": 600
    },
    {
        "name": "Mussel",
        "image_url": "https://dodo.ac/np/images/6/6c/Mussel_NH_Icon.png",
        "n_m1": 0,
        "n_m2": 0,
        "n_m3": 0,
        "n_m4": 0,
        "n_m5": 0,
        "n_m6": 1,
        "n_m7": 1,
        "n_m8": 1,
        "n_m9": 1,
        "n_m10": 1,
        "n_m11": 1,
        "n_m12": 1,
        "s_m1": 1,
        "s_m2": 1,
        "s_m3": 1,
        "s_m4": 1,
        "s_m5": 1,
        "s_m6": 1,
        "s_m7": 0,
        "s_m8": 0,
        "s_m9": 0,
        "s_m10": 0,
        "s_m11": 0,
        "s_m12": 1,
        "time": "All day",
        "sell_nook": 1500
    },
    {
        "name": "Octopus",
        "image_url": "https://dodo.ac/np/images/5/58/Octopus_NH_Icon.png",
        "n_m1": 1,
        "n_m2": 1,
        "n_m3": 1,
        "n_m4": 1,
        "n_m5": 1,
        "n_m6": 1,
        "n_m7": 1,
        "n_m8": 1,
        "n_m9": 1,
        "n_m10": 1,
        "n_m11": 1,
        "n_m12": 1,
        "s_m1": 1,
        "s_m2": 1,
        "s_m3": 1,
        "s_m4": 1,
        "s_m5": 1,
        "s_m6": 1,
        "s_m7": 1,
        "s_m8": 1,
        "s_m9": 1,
        "s_m10": 1,
        "s_m11": 1,
        "s_m12": 1,
        "time": "All day",
        "sell_nook": 1200
    },
    {
        "name": "Oyster",
        "image_url": "https://dodo.ac/np/images/4/4d/Oyster_NH_Icon.png",
        "n_m1": 1,
        "n_m2": 1,
        "n_m3": 0,
        "n_m4": 0,
        "n_m5": 0,
        "n_m6": 0,
        "n_m7": 0,
        "n_m8": 0,
        "n_m9": 1,
        "n_m10": 1,
        "n_m11": 1,
        "n_m12": 1,
        "s_m1": 0,
        "s_m2": 0,
        "s_m3": 1,
        "s_m4": 1,
        "s_m5": 1,
        "s_m6": 1,
        "s_m7": 1,
        "s_m8": 1,
        "s_m9": 0,
        "s_m10": 0,
        "s_m11": 0,
        "s_m12": 0,
        "time": "All day",
        "sell_nook": 1100
    },
    {
        "name": "Pearl Oyster",
        "image_url": "https://dodo.ac/np/images/0/0a/Pearl_Oyster_NH_Icon.png",
        "n_m1": 1,
        "n_m2": 1,
        "n_m3": 1,
        "n_m4": 1,
        "n_m5": 1,
        "n_m6": 1,
        "n_m7": 1,
        "n_m8": 1,
        "n_m9": 1,
        "n_m10": 1,
        "n_m11": 1,
        "n_m12": 1,
        "s_m1": 1,
        "s_m2": 1,
        "s_m3": 1,
        "s_m4": 1,
        "s_m5": 1,
        "s_m6": 1,
        "s_m7": 1,
        "s_m8": 1,
        "s_m9": 1,
        "s_m10": 1,
        "s_m11": 1,
        "s_m12": 1,
        "time": "All day",
        "sell_nook": 2800
    },
    {
        "name": "Red King Crab",
        "image_url": "https://dodo.ac/np/images/9/9d/Red_King_Crab_NH_Icon.png",
        "n_m1": 1,
        "n_m2": 1,
        "n_m3": 1,
        "n_m4": 0,
        "n_m5": 0,
        "n_m6": 0,
        "n_m7": 0,
        "n_m8": 0,
        "n_m9": 0,
        "n_m10": 0,
        "n_m11": 1,
        "n_m12": 1,
        "s_m1": 0,
        "s_m2": 0,
        "s_m3": 0,
        "s_m4": 0,
        "s_m5": 1,
        "s_m6": 1,
        "s_m7": 1,
        "s_m8": 1,
        "s_m9": 1,
        "s_m10": 0,
        "s_m11": 0,
        "s_m12": 0,
        "time": "All day",
        "sell_nook": 8000
    },
    {
        "name": "Scallop",
        "image_url": "https://dodo.ac/np/images/5/55/Scallop_NH_Icon.png",
        "n_m1": 1,
        "n_m2": 1,
        "n_m3": 1,
        "n_m4": 1,
        "n_m5": 1,
        "n_m6": 1,
        "n_m7": 1,
        "n_m8": 1,
        "n_m9": 1,
        "n_m10": 1,
        "n_m11": 1,
        "n_m12": 1,
        "s_m1": 1,
        "s_m2": 1,
        "s_m3": 1,
        "s_m4": 1,
        "s_m5": 1,
        "s_m6": 1,
        "s_m7": 1,
        "s_m8": 1,
        "s_m9": 1,
        "s_m10": 1,
        "s_m11": 1,
        "s_m12": 1,
        "time": "All day",
        "sell_nook": 1200
    },
    {
        "name": "Sea Anemone",
        "image_url": "https://dodo.ac/np/images/e/e9/Sea_Anemone_NH_Icon.png",
        "n_m1": 1,
        "n_m2": 1,
        "n_m3": 1,
        "n_m4": 1,
        "n_m5": 1,
        "n_m6": 1,
        "n_m7": 1,
        "n_m8": 1,
        "n_m9": 1,
        "n_m10": 1,
        "n_m11": 1,
        "n_m12": 1,
        "s_m1": 1,
        "s_m2": 1,
        "s_m3": 1,
        "s_m4": 1,
        "s_m5": 1,
        "s_m6": 1,
        "s_m7": 1,
        "s_m8": 1,
        "s_m9": 1,
        "s_m10": 1,
        "s_m11": 1,
        "s_m12": 1,
        "time": "All day",
        "sell_nook": 500
    },
    {
        "name": "Sea Cucumber",
        "image_url": "https://dodo.ac/np/images/9/9b/Sea_Cucumber_NH_Icon.png",
        "n_m1": 1,
        "n_m2": 1,
        "n_m3": 1,
        "n_m4": 1,
        "n_m5": 0,
        "n_m6": 0,
        "n_m7": 0,
        "n_m8": 0,
        "n_m9": 0,
        "n_m10": 0,
        "n_m11": 1,
        "n_m12": 1,
        "s_m1": 0,
        "s_m2": 0,
        "s_m3": 0,
        "s_m4": 0,
        "s_m5": 1,
        "s_m6": 1,
        "s_m7": 1,
        "s_m8": 1,
        "s_m9": 1,
        "s_m10": 1,
        "s_m11": 0,
        "s_m12": 0,
        "time": "All day",
        "sell_nook": 500
    },
    {
        "name": "Sea Grapes",
        "image_url": "https://dodo.ac/np/images/e/e7/Sea_Grapes_NH_Icon.png",
        "n_m1": 0,
        "n_m2": 0,
        "n_m3": 0,
        "n_m4": 0,
        "n_m5": 0,
        "n_m6": 1,
        "n_m7": 1,
        "n_m8": 1,
        "n_m9": 1,
        "n_m10": 0,
        "n_m11": 0,
        "n_m12": 0,
        "s_m1": 1,
        "s_m2": 1,
        "s_m3": 1,
        "s_m4": 0,
        "s_m5": 0,
        "s_m6": 0,
        "s_m7": 0,
        "s_m8": 0,
        "s_m9": 0,
        "s_m10": 0,
        "s_m11": 0,
        "s_m12": 1,
        "time": "All day",
        "sell_nook": 900
    },
    {
        "name": "Sea Pig",
        "image_url": "https://dodo.ac/np/images/a/a9/Sea_Pig_NH_Icon.png",
        "n_m1": 1,
        "n_m2": 1,
        "n_m3": 0,
        "n_m4": 0,
        "n_m5": 0,
        "n_m6": 0,
        "n_m7": 0,
        "n_m8": 0,
        "n_m9": 0,
        "n_m10": 0,
        "n_m11": 1,
        "n_m12": 1,
        "s_m1": 0,
        "s_m2": 0,
        "s_m3": 0,
        "s_m4": 0,
        "s_m5": 1,
        "s_m6": 1,
        "s_m7": 1,
        "s_m8": 1,
        "s_m9": 0,
        "s_m10": 0,
        "s_m11": 0,
        "s_m12": 0,
        "time": "4 PM 09 AM",
        "sell_nook": 10000
    },
    {
        "name": "Sea Pineapple",
        "image_url": "https://dodo.ac/np/images/6/61/Sea_Pineapple_NH_Icon.png",
        "n_m1": 0,
        "n_m2": 0,
        "n_m3": 0,
        "n_m4": 1,
        "n_m5": 1,
        "n_m6": 1,
        "n_m7": 1,
        "n_m8": 1,
        "n_m9": 0,
        "n_m10": 0,
        "n_m11": 0,
        "n_m12": 0,
        "s_m1": 1,
        "s_m2": 1,
        "s_m3": 0,
        "s_m4": 0,
        "s_m5": 0,
        "s_m6": 0,
        "s_m7": 0,
        "s_m8": 0,
        "s_m9": 0,
        "s_m10": 1,
        "s_m11": 1,
        "s_m12": 1,
        "time": "All day",
        "sell_nook": 1500
    },
    {
        "name": "Sea Slug",
        "image_url": "https://dodo.ac/np/images/5/54/Sea_Slug_NH_Icon.png",
        "n_m1": 1,
        "n_m2": 1,
        "n_m3": 1,
        "n_m4": 1,
        "n_m5": 1,
        "n_m6": 1,
        "n_m7": 1,
        "n_m8": 1,
        "n_m9": 1,
        "n_m10": 1,
        "n_m11": 1,
        "n_m12": 1,
        "s_m1": 1,
        "s_m2": 1,
        "s_m3": 1,
        "s_m4": 1,
        "s_m5": 1,
        "s_m6": 1,
        "s_m7": 1,
        "s_m8": 1,
        "s_m9": 1,
        "s_m10": 1,
        "s_m11": 1,
        "s_m12": 1,
        "time": "All day",
        "sell_nook": 600
    },
    {
        "name": "Sea Star",
        "image_url": "https://dodo.ac/np/images/6/6c/Sea_Star_NH_Icon.png",
        "n_m1": 1,
        "n_m2": 1,
        "n_m3": 1,
        "n_m4": 1,
        "n_m5": 1,
        "n_m6": 1,
        "n_m7": 1,
        "n_m8": 1,
        "n_m9": 1,
        "n_m10": 1,
        "n_m11": 1,
        "n_m12": 1,
        "s_m1": 1,
        "s_m2": 1,
        "s_m3": 1,
        "s_m4": 1,
        "s_m5": 1,
        "s_m6": 1,
        "s_m7": 1,
        "s_m8": 1,
        "s_m9": 1,
        "s_m10": 1,
        "s_m11": 1,
        "s_m12": 1,
        "time": "All day",
        "sell_nook": 500
    },
    {
        "name": "Sea Urchin",
        "image_url": "https://dodo.ac/np/images/9/9c/Sea_Urchin_NH_Icon.png",
        "n_m1": 0,
        "n_m2": 0,
        "n_m3": 0,
        "n_m4": 0,
        "n_m5": 1,
        "n_m6": 1,
        "n_m7": 1,
        "n_m8": 1,
        "n_m9": 1,
        "n_m10": 0,
        "n_m11": 0,
        "n_m12": 0,
        "s_m1": 1,
        "s_m2": 1,
        "s_m3": 1,
        "s_m4": 0,
        "s_m5": 0,
        "s_m6": 0,
        "s_m7": 0,
        "s_m8": 0,
        "s_m9": 0,
        "s_m10": 0,
        "s_m11": 1,
        "s_m12": 1,
        "time": "All day",
        "sell_nook": 1700
    },
    {
        "name": "Seaweed",
        "image_url": "https://dodo.ac/np/images/8/8c/Seaweed_NH_Icon.png",
        "n_m1": 1,
        "n_m2": 1,
        "n_m3": 1,
        "n_m4": 1,
        "n_m5": 1,
        "n_m6": 1,
        "n_m7": 1,
        "n_m8": 0,
        "n_m9": 0,
        "n_m10": 1,
        "n_m11": 1,
        "n_m12": 1,
        "s_m1": 1,
        "s_m2": 0,
        "s_m3": 0,
        "s_m4": 1,
        "s_m5": 1,
        "s_m6": 1,
        "s_m7": 1,
        "s_m8": 1,
        "s_m9": 1,
        "s_m10": 1,
        "s_m11": 1,
        "s_m12": 1,
        "time": "All day",
        "sell_nook": 600
    },
    {
        "name": "Slate Pencil Urchin",
        "image_url": "https://dodo.ac/np/images/0/05/Slate_Pencil_Urchin_NH_Icon.png",
        "n_m1": 0,
        "n_m2": 0,
        "n_m3": 0,
        "n_m4": 0,
        "n_m5": 1,
        "n_m6": 1,
        "n_m7": 1,
        "n_m8": 1,
        "n_m9": 1,
        "n_m10": 0,
        "n_m11": 0,
        "n_m12": 0,
        "s_m1": 1,
        "s_m2": 1,
        "s_m3": 1,
        "s_m4": 0,
        "s_m5": 0,
        "s_m6": 0,
        "s_m7": 0,
        "s_m8": 0,
        "s_m9": 0,
        "s_m10": 0,
        "s_m11": 1,
        "s_m12": 1,
        "time": "4 PM 09 AM",
        "sell_nook": 2000
    },
    {
        "name": "Snow Crab",
        "image_url": "https://dodo.ac/np/images/7/78/Snow_Crab_NH_Icon.png",
        "n_m1": 1,
        "n_m2": 1,
        "n_m3": 1,
        "n_m4": 1,
        "n_m5": 0,
        "n_m6": 0,
        "n_m7": 0,
        "n_m8": 0,
        "n_m9": 0,
        "n_m10": 0,
        "n_m11": 1,
        "n_m12": 1,
        "s_m1": 0,
        "s_m2": 0,
        "s_m3": 0,
        "s_m4": 0,
        "s_m5": 1,
        "s_m6": 1,
        "s_m7": 1,
        "s_m8": 1,
        "s_m9": 1,
        "s_m10": 1,
        "s_m11": 0,
        "s_m12": 0,
        "time": "All day",
        "sell_nook": 6000
    },
    {
        "name": "Spider Crab",
        "image_url": "https://dodo.ac/np/images/f/f3/Spider_Crab_NH_Icon.png",
        "n_m1": 0,
        "n_m2": 0,
        "n_m3": 1,
        "n_m4": 1,
        "n_m5": 0,
        "n_m6": 0,
        "n_m7": 0,
        "n_m8": 0,
        "n_m9": 0,
        "n_m10": 0,
        "n_m11": 0,
        "n_m12": 0,
        "s_m1": 0,
        "s_m2": 0,
        "s_m3": 0,
        "s_m4": 0,
        "s_m5": 0,
        "s_m6": 0,
        "s_m7": 0,
        "s_m8": 0,
        "s_m9": 1,
        "s_m10": 1,
        "s_m11": 0,
        "s_m12": 0,
        "time": "All day",
        "sell_nook": 12000
    },
    {
        "name": "Spiny Lobster",
        "image_url": "https://dodo.ac/np/images/8/8c/Spiny_Lobster_NH_Icon.png",
        "n_m1": 0,
        "n_m2": 0,
        "n_m3": 0,
        "n_m4": 0,
        "n_m5": 0,
        "n_m6": 0,
        "n_m7": 0,
        "n_m8": 0,
        "n_m9": 0,
        "n_m10": 1,
        "n_m11": 1,
        "n_m12": 1,
        "s_m1": 0,
        "s_m2": 0,
        "s_m3": 0,
        "s_m4": 1,
        "s_m5": 1,
        "s_m6": 1,
        "s_m7": 0,
        "s_m8": 0,
        "s_m9": 0,
        "s_m10": 0,
        "s_m11": 0,
        "s_m12": 0,
        "time": "9 PM 04 AM",
        "sell_nook": 5000
    },
    {
        "name": "Spotted Garden Eel",
        "image_url": "https://dodo.ac/np/images/a/aa/Spotted_Garden_Eel_NH_Icon.png",
        "n_m1": 0,
        "n_m2": 0,
        "n_m3": 0,
        "n_m4": 0,
        "n_m5": 1,
        "n_m6": 1,
        "n_m7": 1,
        "n_m8": 1,
        "n_m9": 1,
        "n_m10": 1,
        "n_m11": 0,
        "n_m12": 0,
        "s_m1": 1,
        "s_m2": 1,
        "s_m3": 1,
        "s_m4": 1,
        "s_m5": 0,
        "s_m6": 0,
        "s_m7": 0,
        "s_m8": 0,
        "s_m9": 0,
        "s_m10": 0,
        "s_m11": 1,
        "s_m12": 1,
        "time": "4 AM  9 PM",
        "sell_nook": 1100
    },
    {
        "name": "Sweet Shrimp",
        "image_url": "https://dodo.ac/np/images/d/d3/Sweet_Shrimp_NH_Icon.png",
        "n_m1": 1,
        "n_m2": 1,
        "n_m3": 0,
        "n_m4": 0,
        "n_m5": 0,
        "n_m6": 0,
        "n_m7": 0,
        "n_m8": 0,
        "n_m9": 1,
        "n_m10": 1,
        "n_m11": 1,
        "n_m12": 1,
        "s_m1": 0,
        "s_m2": 0,
        "s_m3": 1,
        "s_m4": 1,
        "s_m5": 1,
        "s_m6": 1,
        "s_m7": 1,
        "s_m8": 1,
        "s_m9": 0,
        "s_m10": 0,
        "s_m11": 0,
        "s_m12": 0,
        "time": "4 PM 09 AM",
        "sell_nook": 1400
    },
    {
        "name": "Tiger Prawn",
        "image_url": "https://dodo.ac/np/images/6/65/Tiger_Prawn_NH_Icon.png",
        "n_m1": 0,
        "n_m2": 0,
        "n_m3": 0,
        "n_m4": 0,
        "n_m5": 0,
        "n_m6": 1,
        "n_m7": 1,
        "n_m8": 1,
        "n_m9": 1,
        "n_m10": 0,
        "n_m11": 0,
        "n_m12": 0,
        "s_m1": 1,
        "s_m2": 1,
        "s_m3": 1,
        "s_m4": 0,
        "s_m5": 0,
        "s_m6": 0,
        "s_m7": 0,
        "s_m8": 0,
        "s_m9": 0,
        "s_m10": 0,
        "s_m11": 0,
        "s_m12": 1,
        "time": "4 PM 09 AM",
        "sell_nook": 3000
    },
    {
        "name": "Turban Shell",
        "image_url": "https://dodo.ac/np/images/9/93/Turban_Shell_NH_Icon.png",
        "n_m1": 0,
        "n_m2": 0,
        "n_m3": 1,
        "n_m4": 1,
        "n_m5": 1,
        "n_m6": 0,
        "n_m7": 0,
        "n_m8": 0,
        "n_m9": 1,
        "n_m10": 1,
        "n_m11": 1,
        "n_m12": 1,
        "s_m1": 0,
        "s_m2": 0,
        "s_m3": 1,
        "s_m4": 1,
        "s_m5": 1,
        "s_m6": 1,
        "s_m7": 0,
        "s_m8": 0,
        "s_m9": 1,
        "s_m10": 1,
        "s_m11": 1,
        "s_m12": 0,
        "time": "All day",
        "sell_nook": 1000
    },
    {
        "name": "Umbrella Octopus",
        "image_url": "https://dodo.ac/np/images/a/ac/Umbrella_Octopus_NH_Icon.png",
        "n_m1": 0,
        "n_m2": 0,
        "n_m3": 1,
        "n_m4": 1,
        "n_m5": 1,
        "n_m6": 0,
        "n_m7": 0,
        "n_m8": 0,
        "n_m9": 1,
        "n_m10": 1,
        "n_m11": 1,
        "n_m12": 0,
        "s_m1": 0,
        "s_m2": 0,
        "s_m3": 1,
        "s_m4": 1,
        "s_m5": 1,
        "s_m6": 0,
        "s_m7": 0,
        "s_m8": 0,
        "s_m9": 1,
        "s_m10": 1,
        "s_m11": 1,
        "s_m12": 0,
        "time": "All day",
        "sell_nook": 6000
    },
    {
        "name": "Vampire Squid",
        "image_url": "https://dodo.ac/np/images/a/ac/Vampire_Squid_NH_Icon.png",
        "n_m1": 0,
        "n_m2": 0,
        "n_m3": 0,
        "n_m4": 0,
        "n_m5": 1,
        "n_m6": 1,
        "n_m7": 1,
        "n_m8": 1,
        "n_m9": 0,
        "n_m10": 0,
        "n_m11": 0,
        "n_m12": 0,
        "s_m1": 1,
        "s_m2": 1,
        "s_m3": 0,
        "s_m4": 0,
        "s_m5": 0,
        "s_m6": 0,
        "s_m7": 0,
        "s_m8": 0,
        "s_m9": 0,
        "s_m10": 0,
        "s_m11": 1,
        "s_m12": 1,
        "time": "4 PM 09 AM",
        "sell_nook": 10000
    },
    {
        "name": "Venus' Flower Basket",
        "image_url": "https://dodo.ac/np/images/6/6a/Venus%27_Flower_Basket_NH_Icon.png",
        "n_m1": 1,
        "n_m2": 1,
        "n_m3": 0,
        "n_m4": 0,
        "n_m5": 0,
        "n_m6": 0,
        "n_m7": 0,
        "n_m8": 0,
        "n_m9": 0,
        "n_m10": 1,
        "n_m11": 1,
        "n_m12": 1,
        "s_m1": 0,
        "s_m2": 0,
        "s_m3": 0,
        "s_m4": 1,
        "s_m5": 1,
        "s_m6": 1,
        "s_m7": 1,
        "s_m8": 1,
        "s_m9": 0,
        "s_m10": 0,
        "s_m11": 0,
        "s_m12": 0,
        "time": "All day",
        "sell_nook": 5000
    },
    {
        "name": "Whelk",
        "image_url": "https://dodo.ac/np/images/5/5e/Whelk_NH_Icon.png",
        "n_m1": 1,
        "n_m2": 1,
        "n_m3": 1,
        "n_m4": 1,
        "n_m5": 1,
        "n_m6": 1,
        "n_m7": 1,
        "n_m8": 1,
        "n_m9": 1,
        "n_m10": 1,
        "n_m11": 1,
        "n_m12": 1,
        "s_m1": 1,
        "s_m2": 1,
        "s_m3": 1,
        "s_m4": 1,
        "s_m5": 1,
        "s_m6": 1,
        "s_m7": 1,
        "s_m8": 1,
        "s_m9": 1,
        "s_m10": 1,
        "s_m11": 1,
        "s_m12": 1,
        "time": "All day",
        "sell_nook": 1000
    }
]