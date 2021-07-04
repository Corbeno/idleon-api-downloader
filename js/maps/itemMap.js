// maps items stored names to their display name in game
var itemMap = {
    "Blank": "None",
    "Copper": "Copper Ore",
    "Iron": "Iron Ore",
    "Gold": "Gold Ore",
    "Plat": "Platinum Ore",
    "Dementia": "Dementia Ore",
    "Void": "Void Ore",
    "Lustre": "Lustre Ore",
    "Starfire": "Starfire Ore",
    "Dreadlo": "Dreadlo Ore",
    "Godshard": "Godshard Ore",
    "CopperBar": "Copper Bar",
    "IronBar": "Iron Bar",
    "GoldBar": "Gold Bar",
    "PlatBar": "Platinum Bar",
    "DementiaBar": "Dementia Bar",
    "VoidBar": "Void Bar",
    "LustreBar": "Lustre Bar",
    "StarfireBar": "Starfire Bar",
    "DreadloBar": "Dreadlo Bar",
    "GodshardBar": "Godshard Bar",
    "OilBarrel1": "Crude Oil",
    "OilBarrel2": "Toxic Sludge",
    "OilBarrel3": "Radioactive Waste",
    "OilBarrel4": "Glumlee's Special Tutorial Oil",
    "OilBarrel5": "Eco Friendly Oil",
    "OakTree": "Oak Logs",
    "BirchTree": "Bleach Logs",
    "JungleTree": "Jungle Logs",
    "ForestTree": "Forest Fibres",
    "ToiletTree": "Potty Rolls",
    "PalmTree": "Tropilogs",
    "StumpTree": "Veiny Logs",
    "SaharanFoal": "Tundra Logs",
    "Tree7": "Wispy Lumber",
    "AlienTree": "Alien Hive Chunk",
    "Leaf1": "Grass Leaf",
    "Leaf2": "Twisty Leaf",
    "Leaf3": "Arctic Leaf",
    "Fish1": "Goldfish",
    "Fish2": "Hermit Can",
    "Fish3": "Jellyfish",
    "Fish4": "Bloach",
    "Bug1": "Fly",
    "Bug2": "Butterfly",
    "Bug3": "Sentient Cereal",
    "Bug4": "Fruitfly",
    "Bug5": "Mosquisnow",
    "Bug6": "Flycicle",
    "Critter1": "Froge",
    "Critter1A": "Poison Froge",
    "Critter2": "Crabbo",
    "Critter2A": "Mutant Crabbo",
    "Critter3": "Scorpie",
    "Critter3A": "Crescent Scropie",
    "Critter4": "Mousey",
    "Critter4A": "Nakeo Moleo",
    "Critter5": "Owlio",
    "Critter5A": "Minervowl",
    "Critter6": "Pingy",
    "Critter6A": "Eternal Lord of The Undying Ember",
    "Critter7": "Bunny",
    "Critter7A": "Purbunni",
    "Critter8": "Dung Beat",
    "Critter8A": "Jade Scarab",
    "Critter9": "Honker",
    "Critter9A": "Diamond Duck",
    "Soul1": "Forest Soul",
    "Soul2": "Dune Soul",
    "Soul3": "Rooted Soul",
    "Soul4": "Frigid Soul",
    "Soul5": "Squiddy Soul",
    "Soul6": "Cryo Soul",
    "EquipmentHats1": "Farmer Brim",
    "TestObj15": "Slime Cap",
    "EquipmentHatsBeg1": "Ice Cream Sunday",
    "EquipmentHats61": "Mark of Member",
    "EquipmentHats15": "Leather Cap",
    "EquipmentHats5": "White Headband",
    "EquipmentHats6": "Green Headband",
    "EquipmentHats7": "Red Headband",
    "EquipmentHats8": "Purple Tupacband",
    "EquipmentHats9": "Yellow Headband",
    "EquipmentHats10": "Pink Headband",
    "EquipmentHats11": "Grey Beret",
    "EquipmentHats12": "Traffic Cone",
    "EquipmentHats13": "Propeller Cap",
    "EquipmentHats14": "Baseball Hat",
    "TestObj14": "Trojan Helmet",
    "TestObj16": "Demon Horns",
    "EquipmentHats4Choppin": "Stump Prop",
    "EquipmentHats17": "Copper Helmet",
    "EquipmentHats18": "Iron Helmet",
    "EquipmentHats28": "Gold Helmet",
    "EquipmentHats22": "Amarok Helmet",
    "EquipmentHats19": "Platinum Helmet",
    "EquipmentHats53": "Dementia Helmet",
    "EquipmentHats52": "Efaunt Helmet",
    "EquipmentHats54": "Void Imperium Helmet",
    "EquipmentHats21": "Party Hat",
    "EquipmentHats23": "Farmer Brimer",
    "EquipmentHats24": "Farmer Brimest",
    "EquipmentHats25": "Bored Beanie",
    "EquipmentHats2": "Royal Turban",
    "EquipmentHats27": "Paper Boat",
    "EquipmentHats29": "Alien Headband",
    "EquipmentHats30": "Cowbo Galloneer",
    "EquipmentHats39": "Grandma Disguise",
    "EquipmentHats42": "Santa Hat",
    "EquipmentHats44": "Jar",
    "EquipmentHats51": "Big Pretty Bow",
    "EquipmentHats55": "Steam Cap",
    "EquipmentHats56": "Bunny Ears",
    "EquipmentHats20": "Militia Helm",
    "TestObj13": "Viking Cap",
    "EquipmentHats58": "Murmillo Helm",
    "EquipmentHats3": "Thief Hood",
    "EquipmentHats41": "Sleek Coif",
    "EquipmentHats59": "Conquistador Plume",
    "EquipmentHats16": "Top Hat",
    "EquipmentHats26": "Witch Hat",
    "EquipmentHats60": "Adornment of the High Priest",
    "EquipmentPunching1": "Boxing Gloves",
    "EquipmentPunching2": "The Stingers",
    "EquipmentPunching3": "Bandage Wraps",
    "EquipmentPunching4": "Uninflated Glove",
    "TestObj1": "Wooden Spear",
    "TestObj7": "Steel Axe",
    "TestObj3": "Royal Bayonet",
    "EquipmentSword1": "Enforced Slasher",
    "EquipmentSword2": "The Ice Breaker",
    "EquipmentSword3": "Deuscythe",
    "TestObj4": "Frozen Impaler",
    "TestObj5": "Blood Screamer",
    "TestObj8": "Flaming Katana",
    "TestObj9": "Emerald Eizon",
    "TestObj10": "Stalagmite",
    "EquipmentWeapons1": "Iron Sword",
    "TestObj2": "Steel Spear",
    "EquipmentBows1": "Wooden Bow",
    "EquipmentBows3": "Birch Longbow",
    "EquipmentBows4": "Carrot Launcher",
    "EquipmentBows5": "Spiked Menace",
    "EquipmentBows6": "Pharoah Bow",
    "EquipmentBows7": "Blizzard Bow",
    "EquipmentBows8": "Blackhole Bow",
    "EquipmentWands1": "Gnarled Wand",
    "EquipmentWands2": "Quarterstaff",
    "EquipmentWands5": "Starlight",
    "EquipmentWands6": "Crows Nest",
    "EquipmentWands3": "Spriggly Storm",
    "EquipmentWands7": "Grey Gatsby",
    "EquipmentWands4": "Microphone",
    "EquipmentShirts1": "Orange Tee",
    "EquipmentShirts2": "Blue Tee",
    "EquipmentShirts16": "Spore Tee",
    "EquipmentShirts3": "Black Tee",
    "EquipmentShirts4": "Tanned Hide",
    "EquipmentShirts6": "Paralax Chest",
    "EquipmentShirts7": "Molten Chest",
    "EquipmentShirts8": "REPLACE ME",
    "EquipmentShirts21": "Tattered Cloth",
    "EquipmentShirts10": "Fur Shirt",
    "EquipmentShirts11": "Copper Platebody",
    "EquipmentShirts12": "Iron Platebody",
    "EquipmentShirts13": "Gold Platebody",
    "EquipmentShirts18": "Amarok Bodyplate",
    "EquipmentShirts14": "Platinum Platbody",
    "EquipmentShirts15": "Dementia Body",
    "EquipmentShirts26": "Efaunt Ribcage",
    "EquipmentShirts27": "Void Imperium Platebody",
    "EquipmentShirts17": "MCR Tshirt",
    "EquipmentShirts19": "Planktop",
    "EquipmentShirts20": "Hide Shirt",
    "EquipmentShirts24": "Green Tee",
    "EquipmentShirts25": "Purple Tee",
    "EquipmentShirts31": "Member Hoodie",
    "EquipmentShirts5": "Studded Hide",
    "EquipmentShirts23": "Feral Leathering",
    "EquipmentShirts22": "Furled Robes",
    "EquipmentShirts28": "Damascus Plates",
    "EquipmentShirts29": "Evergreen Wraps",
    "EquipmentShirts30": "Elegantine Robes",
    "EquipmentPants1": "Torn Jeans",
    "EquipmentPants2": "Copper Platelegs",
    "EquipmentPants3": "Iron Platelegs",
    "EquipmentPants4": "Gold Platelegs",
    "EquipmentPants17": "Amarok Hinds",
    "EquipmentPants5": "Platinum Shins",
    "EquipmentPants6": "Dementia Shins",
    "EquipmentPants20": "Efaunt Hipilium",
    "EquipmentPants21": "Void Imperium Shardshins",
    "EquipmentPants7": "Gilded Pilates",
    "EquipmentPants8": "Twisted Scales",
    "EquipmentPants9": "Crystallax Shins",
    "EquipmentPants10": "Give Up On Life Pants",
    "EquipmentPants11": "Yellow Belt Ninja Pants",
    "EquipmentPants12": "Merchantile Pants",
    "EquipmentPants13": "Ancient Leggings",
    "EquipmentPants14": "Forensic Leggings",
    "EquipmentPants15": "Bleached Designer Wode Patch Pants",
    "EquipmentPants16": "Adam's Leaf",
    "EquipmentPants18": "Dirty Coal Miner Baggy Soot Pants",
    "EquipmentPants19": "Trimmed Rune Platelegs",
    "EquipmentShoes1": "Copper Boots",
    "EquipmentShoes15": "Iron Boots",
    "EquipmentShoes3": "Gold Boots",
    "EquipmentShoes20": "Amarok Paws",
    "EquipmentShoes4": "Platinum Boots",
    "EquipmentShoes5": "Dementia Boots",
    "EquipmentShoes21": "Efaunts Broken Ankles",
    "EquipmentShoes22": "Void Imperium Kicks",
    "EquipmentShoes6": "Hermes Boots",
    "EquipmentShoes7": "Goo Galoshes",
    "EquipmentShoes8": "Yeti Walkers",
    "EquipmentShoes9": "Flip Flops",
    "EquipmentShoes10": "Flap Flops",
    "EquipmentShoes11": "Floop Flops",
    "EquipmentShoes12": "Flux Flops",
    "EquipmentShoes13": "Gaia Shoes",
    "EquipmentShoes14": "Cauldrunners",
    "EquipmentShoes16": "Cavern Trekkers",
    "EquipmentShoes17": "Logger Heels",
    "EquipmentShoes18": "Angler Boots",
    "EquipmentShoes19": "Bandito Boots",
    "EquipmentShoes2": "Eyern Boots",
    "EquipmentPendant1": "Mint Icey",
    "EquipmentPendant2": "Strawbu Icey",
    "EquipmentPendant3": "Rok Road Icey",
    "EquipmentPendant4": "Rainbo Icey",
    "EquipmentPendant5": "Chocotastic Icey",
    "EquipmentPendant6": "Blubbery Icey",
    "EquipmentPendant7": "Lava Icey",
    "EquipmentPendant8": "Legends Icey",
    "EquipmentPendant9": "Little Wooden Katana",
    "EquipmentPendant10": "Sleek Shank",
    "EquipmentPendant11": "Carrot Horror",
    "EquipmentPendant12": "Tarantulight",
    "EquipmentPendant13": "Quartz Pendant",
    "EquipmentPendant14": "Fuscismatia",
    "EquipmentPendant15": "Lucky Fish Head",
    "EquipmentPendant16": "Strung Bludgeon",
    "EquipmentPendant17": "Chaotic Amarok Pendant",
    "EquipmentPendant18": "Strung Steamy",
    "EquipmentRings1": "Gold Ring",
    "EquipmentRings2": "Copper Band",
    "EquipmentRings3": "Steel Band",
    "EquipmentRings4": "Molden Crust",
    "EquipmentRings5": "Toxic Bubbles Band",
    "EquipmentRings6": "Death Wish",
    "EquipmentRings7": "Pugilist Demise",
    "EquipmentRings8": "The Used Bandaid",
    "EquipmentRings9": "Chat Ring",
    "EquipmentRings10": "Spikeweed Ring",
    "EquipmentRings11": "Defenders Dignity",
    "EquipmentRingsFishing1": "Shallow Watering",
    "EquipmentRingsFishing2": "Oceanic Ring",
    "EquipmentRingsFishing3": "Deepwater Trench Ring",
    "EquipmentRings12": "Frisbee Ring",
    "EquipmentRings13": "Silver Stopwatch",
    "EquipmentRings14": "Dooble Goopi",
    "EquipmentRings15": "Sanic Ring",
    "EquipmentRings16": "Efaunt Trunculus",
    "EquipmentRingsChat1": "Love Ring",
    "EquipmentRingsChat2": "Leafy Ring",
    "EquipmentRingsChat3": "Wealth Ring",
    "EquipmentRingsChat4": "Bob Ring",
    "EquipmentRingsChat5": "Bubble Ring",
    "EquipmentRingsChat6": "Cthulu's Ring",
    "EquipmentRingsChat8": "Lava Sez Buy More Gems",
    "EquipmentRingsChat9": "HONK Ring",
    "EquipmentTools1": "Junk Pickaxe",
    "EquipmentTools2": "Copper Pickaxe",
    "EquipmentTools3": "Iron Pickaxe",
    "EquipmentTools5": "Gold Pickaxe",
    "EquipmentTools6": "Platinum Pickaxe",
    "EquipmentTools7": "Dementia Pickaxe",
    "EquipmentTools11": "Void Imperium Pik",
    "EquipmentTools8": "Lustre Pickaxe",
    "EquipmentTools9": "Dreadlo Pickolo",
    "EquipmentTools10": "Poopy Pickaxe",
    "EquipmentToolsHatchet0": "Old Hatchet",
    "EquipmentToolsHatchet3": "Copper Chopper",
    "EquipmentToolsHatchet1": "Iron Hatchet",
    "EquipmentToolsHatchet2b": "Stinky Axe",
    "EquipmentToolsHatchet2": "Golden Axe",
    "EquipmentToolsHatchet4": "Plat Hatchet",
    "EquipmentToolsHatchet5": "Dementia Dicer",
    "EquipmentToolsHatchet7": "Void Imperium Axe",
    "EquipmentToolsHatchet6": "Lustre Logger",
    "EquipmentToolsHatchet8": "Starfire Hatchet",
    "EquipmentToolsHatchet9": "Dreadlo Eviscerator",
    "EquipmentToolsHatchet10": "Annihilator of the Yggdrasil",
    "FishingRod1": "Wood Fishing Rod",
    "FishingRod2": "Copper Fish Rod",
    "FishingRod3": "Iron Fishing Rod",
    "FishingRod4": "Gold Fishing Rod",
    "FishingRod5": "Plat Fishing Rod",
    "FishingRod6": "Dementia Rod for Fishing",
    "FishingRod7": "Void Imperium Rod",
    "CatchingNet1": "Bug Net",
    "CatchingNet2": "Copper Netted Net",
    "CatchingNet3": "Reinforced Net",
    "CatchingNet4": "Gilded Net",
    "CatchingNet5": "Platinet",
    "CatchingNet6": "Dementia Net",
    "CatchingNet7": "Void Imperium Net",
    "TrapBoxSet1": "Cardboard Traps",
    "TrapBoxSet2": "Silkskin Traps",
    "TrapBoxSet3": "Wooden Traps",
    "TrapBoxSet4": "Natural Traps",
    "TrapBoxSet5": "Steel Traps",
    "TrapBoxSet6": "Royal Traps",
    "WorshipSkull1": "Wax Skull",
    "WorshipSkull2": "Ceramic Skull",
    "WorshipSkull3": "Horned Skull",
    "WorshipSkull4": "Prickle Skull",
    "WorshipSkull5": "Manifested Skull",
    "FoodHealth1": "Nomwich",
    "FoodHealth3": "Hot Dog",
    "FoodHealth2": "Cheezy Pizza",
    "Peanut": "Peanut",
    "FoodHealth4": "Saucy Weiner",
    "FoodHealth6": "Kebab Sticks",
    "FoodHealth7": "Meat Pie",
    "FoodHealth10": "Mountain Bread",
    "FoodHealth9": "Yeti Ham",
    "FoodHealth11": "Sheepie Dairy",
    "FoodHealth5": "Cranberry Jam",
    "FoodHealth8": "Crabby Cake Supreme",
    "FoodEvent8": "Milk Choco",
    "Meatloaf": "Magic Meatloaf",
    "FoodPotOr1": "Small Strength Potion",
    "FoodPotOr2": "Average Strength Potion",
    "FoodPotOr3": "Decent Strength Potion",
    "FoodPotRe1": "Small Life Potion",
    "FoodPotRe2": "Average Life Potion",
    "FoodPotRe3": "Decent Life Potion",
    "FoodPotGr1": "Small Speed Potion",
    "FoodPotGr2": "Average Speed Potion",
    "FoodPotGr3": "Decent Speed Potion",
    "FoodEvent7": "Minto Choco",
    "FoodPotMana1": "Small Mana Potion",
    "FoodPotMana2": "Average Mana Potion",
    "FoodPotMana3": "Decent Mana Potion",
    "FoodPotYe1": "Small EXP Potion",
    "FoodPotYe2": "Average EXP Potion",
    "FoodPotYe3": "Decent EXP Potion",
    "FoodEvent6": "Lemony Choco",
    "FoodMining1": "Icing Ironbite",
    "FoodEvent1": "Giftybread Man",
    "FoodChoppin1": "Saucy Logfries",
    "FoodEvent2": "Chogg Nog",
    "FoodFish1": "Slurpin Herm",
    "FoodEvent3": "Candy Canes",
    "FoodCatch1": "Buttered Toasted Butter",
    "FoodEvent4": "Mistleberries",
    "FoodTrapping1": "Critter Numnums",
    "FoodWorship1": "Soulble Gum",
    "Bullet": "Bullet",
    "BulletB": "FMJ Bullet",
    "MidnightCookie": "Midnight Cookie",
    "FoodEvent5": "Cherry Choco",
    "PeanutG": "Golden Peanut",
    "FoodG1": "Golden Jam",
    "FoodG2": "Golden Kebabs",
    "FoodG3": "Golden Meat Pie",
    "FoodG4": "Golden Nomwich",
    "FoodG5": "Golden Ham",
    "FoodG6": "Golden Bread",
    "rtt0": "Bottled Town Teleport",
    "ResetFrag": "Talent Point Reset Fragment",
    "ResetCompleted": "Talent Point Reset Potion",
    "ResetCompletedS": "Star Talent Reset Potion",
    "ClassSwap": "Sub Class Swap Token",
    "ResetBox": "Post Office Box Reseto Magnifico",
    "Ht": "Hat Premiumifier",
    "StonePremRestore": "Premium Stone Refunder",
    "ExpBalloon1": "Small Experience Balloon",
    "ExpBalloon2": "Medium Experience Balloon",
    "ExpBalloon3": "Large Experience Balloon",
    "JobApplication": "Job Application",
    "SmithingHammerChisel": "Sculpting Tools",
    "BobJoePickle": "BobJoePickle",
    "Quest1": "Mining Certificate",
    "Crystal1": "Desert Topaz",
    "Crystal2": "Glacier Quartz",
    "Crystal3": "Galaxial Amethyst",
    "Quest2": "Mining Certificate",
    "PeanutS": "Stone Peanut",
    "Quest3": "Ketchup Bottle",
    "Quest4": "Mustard Bottle",
    "Quest5": "Golden Jam",
    "Quest6": "Scouting Report",
    "Quest7": "Strange Rock",
    "Quest8": "Filler bc I messed up",
    "Quest10": "Green Tea",
    "Quest11": "Forest Villas Flyer Thingy",
    "Quest12": "Dog Bone",
    "Quest13": "Empty Box",
    "Quest14": "Employment Statistics",
    "Quest15": "Red Frisbee",
    "Quest16": "Broken Mic",
    "Quest17": "Amarok Slab",
    "Quest18": "Loomi's Room Key",
    "Quest19": "Golden Dubloon",
    "Quest20": "Signed Arrest Warrant",
    "Quest21": "Time Thingy",
    "Quest22": "Corporatube Sub",
    "Quest23": "Instablab Follower",
    "Quest24": "Cloudsound Follower",
    "Quest25": "Birthday Card",
    "Quest26": "Pre Crime Box",
    "Quest27": "Bag o Nuts",
    "Quest28": "IOU One Blue Crystal",
    "Quest29": "Chaotic Amarok Slab",
    "GoldricP1": "Casual Confidante",
    "GoldricP2": "Triumphant Treason",
    "GoldricP3": "Claiming Cashe",
    "Quest30": "Giftmas Box",
    "Quest31": "Gem Note",
    "Cutter": "Bolt Cutters",
    "Quest32": "Monster Rating",
    "Quest33": "Player Rating With Letter P",
    "Quest34": "Player Rating With Letter S",
    "Quest35": "Googley Eyes",
    "Quest36": "Dootjat Eye",
    "Quest37": "Silver Antique",
    "Quest38": "Guild Giftbox",
    "Quest39": "Lovey Dovey Letter",
    "Quest40": "Choco Box",
    "Quest41": "Flowies",
    "Quest42": "Egg Capsule",
    "Quest43": "Gummy Bunny",
    "Quest44": "Goldegg Capsule",
    "Quest9": "Picnic Token",
    "BadgeG1": "Blunderhills NPC Completion Token",
    "BadgeG2": "Blunder Skills Completion Token",
    "BadgeG3": "Blunderhills Misc Completion Token",
    "NPCtoken1": "Easy Blunderhills NPC Token",
    "NPCtoken2": "Med Blunderhills NPC Token",
    "NPCtoken3": "Hard Blunderhills NPC Token",
    "NPCtoken4": "Stiltzcho Token",
    "NPCtoken5": "Woodsman Token",
    "NPCtoken6": "Glumlee Token",
    "NPCtoken7": "Papua Piggea Token",
    "NPCtoken9": "Funguy Token",
    "NPCtoken10": "Krunk Token",
    "NPCtoken11": "Tiki Chief Token",
    "NPCtoken12": "Sproutinald Token",
    "NPCtoken13": "Dog Bone Token",
    "NPCtoken14": "Dazey Token",
    "NPCtoken15": "TP Pete Token",
    "EquipmentSmithingTabs2": "Anvil Tab 2",
    "EquipmentSmithingTabs3": "Anvil Tab 3",
    "EquipmentSmithingTabs4": "Anvil Tab 4",
    "EquipmentSmithingTabs5": "Anvil Tab 5",
    "EquipmentSmithingTabs6": "Anvil Tab 6",
    "EquipmentSmithingTabs7": "Anvil Tab 7",
    "EquipmentSmithingTabs8": "Anvil Tab 8",
    "EquipmentStatues1": "Power Statue",
    "EquipmentStatues2": "Speed Statue",
    "EquipmentStatues3": "Mining Statue",
    "EquipmentStatues4": "Feasty Statue",
    "EquipmentStatues5": "Health Statue",
    "EquipmentStatues6": "Kachow Statue",
    "EquipmentStatues7": "Lumberbob Statue",
    "EquipmentStatues8": "Thicc Skin Statue",
    "EquipmentStatues9": "Oceanman Statue",
    "EquipmentStatues10": "Ol Reliable Statue",
    "EquipmentStatues11": "Exp Book Statue",
    "EquipmentStatues12": "Anvil Statue",
    "EquipmentStatues13": "Cauldron Statue",
    "EquipmentStatues14": "Beholder Statue",
    "EquipmentStatues15": "Bullseye Statue",
    "EquipmentStatues16": "Box Statue",
    "EquipmentStatues17": "Twosoul Statue",
    "EquipmentStatues18": "EhExPee Statue",
    "EquipmentStatues19": "Seesaw Statue",
    "SmithingRecipes1": "Beginner Recipe",
    "SmithingRecipes2": "Novice Recipe",
    "SmithingRecipes3": "Apprentice Recipe",
    "SmithingRecipes4": "Journeyman Recipe",
    "TalentBook1": "Special Talent Book",
    "TalentBook2": "Beginner Talent Book",
    "TalentBook3": "Warrior Talent Book",
    "TalentBook4": "Archer Talent Book",
    "TalentBook5": "Wizard Talent Book",
    "MaxCapBagT2": "Miniature Mining Pouch",
    "MaxCapBag1": "Cramped Mining Pouch",
    "MaxCapBag2": "Small Mining Pouch",
    "MaxCapBag3": "Average Mining Pouch",
    "MaxCapBag4": "Sizable Mining Pouch",
    "MaxCapBag5": "Big Mining Pouch",
    "MaxCapBagMi6": "Large Mining Pouch",
    "MaxCapBagT1": "Miniature Choppin Pouch",
    "MaxCapBag7": "Cramped Choppin Pouch",
    "MaxCapBag9": "Small Choppin Pouch",
    "MaxCapBagT3": "Average Choppin Pouch",
    "MaxCapBagT4": "Sizable Choppin Pouch",
    "MaxCapBagT5": "Big Choppin Pouch",
    "MaxCapBagT6": "Large Choppin Pouch",
    "MaxCapBag6": "Miniscule Food Pouch",
    "MaxCapBag8": "Cramped Food Pouch",
    "MaxCapBag10": "Small Food Pouch",
    "MaxCapBagF3": "Average Food Pouch",
    "MaxCapBagF4": "Sizable Food Pouch",
    "MaxCapBagF5": "Big Food Pouch",
    "MaxCapBagF6": "Large Food Pouch",
    "MaxCapBagM1": "Mini Materials Pouch",
    "MaxCapBagM2": "Cramped Material Pouch",
    "MaxCapBagM3": "Small Material Pouch",
    "MaxCapBagM4": "Average Material Pouch",
    "MaxCapBagM5": "Sizable Materials Pouch",
    "MaxCapBagM6": "Big Materials Pouch",
    "MaxCapBagM7": "Large Materials Pouch",
    "MaxCapBagFi0": "Miniature Fish Pouch",
    "MaxCapBagFi1": "Cramped Fish Pouch",
    "MaxCapBagFi2": "Small Fish Pouch",
    "MaxCapBagFi3": "Average Fish Pouch",
    "MaxCapBagFi4": "Sizable Fish Pouch",
    "MaxCapBagFi5": "Big Fish Pouch",
    "MaxCapBagFi6": "Large Fish Pouch",
    "MaxCapBagB0": "Miniature Bug Pouch",
    "MaxCapBagB1": "Cramped Bug Pouch",
    "MaxCapBagB2": "Small Bug Pouch",
    "MaxCapBagB3": "Average Bug Pouch",
    "MaxCapBagB4": "Sizable Bug Pouch",
    "MaxCapBagB5": "Big Bug Pouch",
    "MaxCapBagB6": "Large Bug Pouch",
    "MaxCapBagTr0": "Cramped Critter Pouch",
    "MaxCapBagTr1": "Small Critter Pouch",
    "MaxCapBagTr2": "Average Critter Pouch",
    "MaxCapBagTr3": "Sizable Critter Pouch",
    "MaxCapBagTr4": "Big Critter Pouch",
    "MaxCapBagTr5": "Large Critter Pouch",
    "MaxCapBagS0": "Cramped Soul Pouch",
    "MaxCapBagS1": "Small Soul Pouch",
    "MaxCapBagS2": "Average Soul Pouch",
    "MaxCapBagS3": "Sizable Soul Pouch",
    "MaxCapBagS4": "Big Soul Pouch",
    "MaxCapBagS5": "Large Soul Pouch",
    "ObolBronze0": "Bronze STR Obol",
    "ObolBronze1": "Bronze AGI Obol",
    "ObolBronze2": "Bronze WIS Obol",
    "ObolBronze3": "Bronze LUK Obol",
    "ObolSilver0": "Silver STR Obol",
    "ObolSilver1": "Silver AGI Obol",
    "ObolSilver2": "Silver WIS Obol",
    "ObolSilver3": "Silver LUK Obol",
    "ObolGold0": "Gold STR Obol",
    "ObolGold1": "Gold AGI Obol",
    "ObolGold2": "Gold WIS Obol",
    "ObolGold3": "Gold LUK Obol",
    "ObolBronzeDamage": "Bronze Obol of Puny Damage",
    "ObolSilverDamage": "Silver Obol of Little Damage",
    "ObolGoldDamage": "Golden Obol of Big Boy Damage",
    "ObolPlatinumDamage": "Platinum Obol of Lethal Damage",
    "ObolPinkDamage": "Dementia Obol of Infinite Damage",
    "ObolPlatinumSpeed": "Platinum Obol of Blinding Speed",
    "ObolSilverMoney": "Silver Obol of Pocket Change",
    "ObolGoldMoney": "Golden Obol of Plentiful Riches",
    "ObolBronzeMining": "Bronze Obol of Small Swings",
    "ObolSilverMining": "Silver Obol of Moderate Mining",
    "ObolGoldMining": "Golden Obol of Diligent Digging",
    "ObolPlatinumMining": "Platinum Obol of Dwarven Delving",
    "ObolPinkMining": "Dementia Obol of Magisterial Metals",
    "ObolBronzeChoppin": "Bronze Obol of Chippin Chops",
    "ObolSilverChoppin": "Silver Obol of Big Bark",
    "ObolGoldChoppin": "Golden Obol of Huge Hackin",
    "ObolPlatinumChoppin": "Platinum Obol of Lumby Loggo",
    "ObolPinkChoppin": "Dementia Obol of WOWOWOWWO",
    "ObolBronzeFishing": "Bronze Obol of Finite Fish",
    "ObolSilverFishing": "Silver Obol of Puny Pikes",
    "ObolGoldFishing": "Golden Obol of Crazy Carp",
    "ObolPlatinumFishing": "Platinum Obol of Tremendous Trout",
    "ObolPinkFishing": "Dementia Obol of Monument Marlins",
    "ObolBronzeCatching": "Bronze Obol of Few Flies",
    "ObolSilverCatching": "Silver Obol of Big Bugs",
    "ObolGoldCatching": "Golden Obol of Insane Insects",
    "ObolPlatinumCatching": "Platinum Obol of Idk Yet",
    "ObolPinkCatching": "Dementia Obol of Idk Yet",
    "ObolSilverLuck": "Silver Obol of Double Sixes",
    "ObolPinkLuck": "Dementia Obol of Never Ending Luck",
    "ObolBronzePop": "Bronze Obol of Pop",
    "ObolEfauntA": "Skeletal Obol of Efaunt's Gaze",
    "ObolAmarokA": "Granite Obol of Amarok's Stare",
    "ExpSmith1": "Smithing Exp",
    "StampA1": "Sword Stamp",
    "StampA2": "Heart Stamp",
    "StampA3": "Mana Stamp",
    "StampA4": "Tomahawk Stamp",
    "StampA5": "Target Stamp",
    "StampA6": "Shield Stamp",
    "StampA7": "Longsword Stamp",
    "StampA8": "Kapow Stamp",
    "StampA9": "Fist Stamp",
    "StampA10": "Battleaxe Stamp",
    "StampA11": "Agile Stamp",
    "StampA12": "Vitality Stamp",
    "StampA13": "Book Stamp",
    "StampA14": "Manamoar Stamp",
    "StampA15": "Clover Stamp",
    "StampA16": "Scimitar Stamp",
    "StampA17": "Bullseye Stamp",
    "StampA18": "Feather Stamp",
    "StampA19": "Polearm Stamp",
    "StampA20": "Violence Stamp",
    "StampA21": "Buckler Stamp",
    "StampA23": "Sukka Foo",
    "StampA24": "Arcane Stamp",
    "StampA26": "Steve Sword",
    "StampA27": "Blover Stamp",
    "StampA28": "Stat Graph Stamp",
    "StampB1": "Pickaxe Stamp",
    "StampB2": "Hatchet Stamp",
    "StampB3": "Anvil Zoomer Stamp",
    "StampB4": "Lil' Mining Baggy Stamp",
    "StampB5": "Twin Ores Stamp",
    "StampB6": "Choppin' Bag Stamp",
    "StampB7": "Duplogs Stamp",
    "StampB8": "Matty Bag Stamp",
    "StampB9": "Smart Dirt Stamp",
    "StampB10": "Cool Diggy Tool Stamp",
    "StampB11": "High IQ Lumber Stamp",
    "StampB12": "Swag Swingy Tool Stamp",
    "StampB13": "Alch Go Brrr Stamp",
    "StampB14": "Brainstew Stamps",
    "StampB15": "Drippy Drop Stamp",
    "StampB16": "Droplots Stamp",
    "StampB17": "Fishing Rod Stamp",
    "StampB18": "Fishhead Stamp",
    "StampB19": "Catch Net Stamp",
    "StampB20": "Fly Intel Stamp",
    "StampB21": "Bag o Heads Stamp",
    "StampB22": "Holy Mackerel Stamp",
    "StampB23": "Bugsack Stamp",
    "StampB24": "Buzz Buzz Stamp",
    "StampB25": "Hidey Box Stamp",
    "StampB26": "Purp Froge Stamp",
    "StampB27": "Spikemouth Stamp",
    "StampB28": "Shiny Crab Stamp",
    "StampB29": "Gear Stamp",
    "StampB30": "Sample Stamp",
    "StampB31": "Saw Stamp",
    "StampB32": "Amplesample Stamp",
    "StampB33": "SpoOoky Stamp",
    "StampB34": "Flowin Stamp",
    "StampB35": "Prayday Stamp",
    "StampB36": "Banked Pts Stamp",
    "StampC1": "Questin Stamp",
    "StampC2": "Mason Jar Stamp",
    "StampC3": "Crystallin",
    "StampC4": "Blank",
    "StampC5": "Apple Stamp",
    "StampC6": "Potion Stamp",
    "StampC7": "Golden Apple Stamp",
    "StampC9": "Card Stamp",
    "StampC13": "Talent I Stamp",
    "StampC14": "Talent II Stamp",
    "StampC15": "Talent III Stamp",
    "StampC16": "Talent IV Stamp",
    "StampC17": "Talent V Stamp",
    "StampC18": "Talent S Stamp",
    "StampC19": "Multikill Stamp",
    "StampC20": "Biblio Stamp",
    "StoneWe": "Easter Weapon Stone",
    "StoneW1": "Weapon Upgrade Stone I",
    "StoneW2": "Weapon Upgrade Stone II",
    "StoneW3": "Weapon Upgrade Stone III",
    "StoneW6": "Warped Weapon Upgrade Stone",
    "StoneAe": "Easter Armor Stone",
    "StoneA1": "Armor Upgrade Stone I",
    "StoneA1b": "Armor Upgrade Stone G",
    "StoneA2": "Armor Upgrade Stone II",
    "StoneA2b": "Armor Upgrade Stone B",
    "StoneA3": "Armor Upgrade Stone III",
    "StoneA3b": "Armor Upgrade Stone C",
    "StoneTe": "Easter Tool Upgrade Stone",
    "StoneT1": "Tool Upgrade Stone I",
    "StoneT1e": "Giftmas Tool Upgrade Stone",
    "StoneT2": "Tool Upgrade Stone II",
    "StoneT3": "Tool Upgrade Stone III",
    "StoneHelm1": "Helmet Upgrade Stone I",
    "StoneHelm6": "Warped Helmet Upgrade Stone",
    "StoneHelm1b": "Giftmas Helmet Upgrade Stone",
    "StoneZ1": "Mystery Upgrade Stone I",
    "StoneZ2": "Mystery Upgrade Stone II",
    "StonePremSTR": "Premium STR Stone",
    "StonePremAGI": "Premium AGI Stone",
    "StonePremWIS": "Premium WIS Stone",
    "StonePremLUK": "Premium LUK Stone",
    "Refinery1": "Redox Salts",
    "Refinery2": "Explosive Salts",
    "Refinery3": "Spontaneity Salts",
    "Refinery4": "Dioxide Synthesis",
    "Refinery5": "Red Salt",
    "CraftMat1": "Thread",
    "CraftMat2": "Crimson String",
    "CraftMat3": "Cue Tape",
    "CraftMat5": "Trusty Nails",
    "CraftMat6": "Boring Brick",
    "CraftMat7": "Chain Link",
    "CraftMat9": "Leather Hide",
    "CraftMat8": "Pinion Spur",
    "CraftMat10": "Lugi Bracket",
    "PureWater": "Distilled Water",
    "Grasslands1": "Spore Cap",
    "Grasslands2": "Frog Leg",
    "Grasslands3": "Bean Slices",
    "Grasslands4": "Red Spore Cap",
    "Jungle1": "Slime Sludge",
    "Jungle2": "Snake Skin",
    "Jungle3": "Carrot Cube",
    "Forest1": "Goblin Ear",
    "Forest2": "Plank",
    "Forest3": "Bullfrog Horn",
    "Sewers1": "Corn Kernels",
    "Sewers1b": "Golden Plop",
    "Sewers2": "Rats Tail",
    "Sewers3": "Bonemeal",
    "TreeInterior1": "Stick",
    "TreeInterior1b": "Woodular Circle",
    "TreeInterior2": "Acorn",
    "BabaYagaETC": "Baba Yaga Baby Eggs",
    "DesertA1": "Pocket Sand",
    "DesertA1b": "Glass Shard",
    "DesertA2": "Megalodon Tooth",
    "DesertA3": "Crabby Cakey",
    "DesertA3b": "Nuget Cake",
    "DesertB1": "Coconotnotto",
    "DesertB2": "Furled Flag",
    "DesertB3": "Pincer Arm",
    "DesertB4": "Potato Remains",
    "DesertC1": "High Steaks",
    "DesertC2": "Wakka Cherry",
    "DesertC2b": "Ghost",
    "DesertC3": "Singlecle",
    "DesertC4": "Shrapshell",
    "SnowA1": "Floof Ploof",
    "SnowA2": "Melty Cube",
    "SnowA2a": "Yellow Snowflake",
    "SnowA3": "Moustache Comb",
    "SnowA4": "Ram Wool",
    "SnowB1": "Sticky Stick",
    "SnowB2": "Mamooth Tusk",
    "SnowB2a": "Ice Age 3",
    "SnowB5": "Snow Ball",
    "SnowB3": "Pen",
    "SnowB4": "Cracked Glass",
    "SnowC1": "Sippy Straw",
    "SnowC2": "Cryosnake Skin",
    "SnowC3": "Audio Cord",
    "SnowC4": "Contact Lense",
    "SnowC4a": "Black Lense",
    "IceMountains2": "Ice A La Crem",
    "Hgg": "Minuteglass",
    "EfauntDrop1": "Ripped Tunic",
    "EfauntDrop2": "Ribbed Tunic",
    "Trophy1": "King of Food",
    "Trophy2": "Lucky Lad",
    "Trophy3": "Club Member",
    "Trophy4": "I Made This Game",
    "Trophy5": "Dice Dynamo",
    "Trophy6": "Blunder Hero",
    "Trophy7": "Original Gamer",
    "Trophy8": "Trailblazer",
    "Trophy9": "Ultra Unboxer",
    "Trophy10": "Critter Baron",
    "Starlight": "Starlight Ore",
    "AlienTreetutorial": "Alien Logs",
    "EquipmentWeapons2": "Flesh Reaper",
    "Secretstone": "Secretstone",
    "Timecandy1": "1 HR Time Candy",
    "Timecandy2": "2 HR Time Candy",
    "Timecandy3": "4 HR Time Candy",
    "Timecandy4": "12 HR Time Candy",
    "Timecandy5": "24 HR Time Candy",
    "Timecandy6": "72 HR Time Candy",
    "Timecandy7": "Steamy Time Candy",
    "InvBag1": "Inventory Bag A",
    "InvBag2": "Inventory Bag B",
    "InvBag3": "Inventory Bag C",
    "InvBag4": "Inventory Bag D",
    "InvBag5": "Inventory Bag E",
    "InvBag6": "Inventory Bag F",
    "InvBag7": "Inventory Bag G",
    "InvBag8": "Inventory Bag H",
    "InvBag9": "Inventory Bag I",
    "InvBag21": "Inventory Bag U",
    "InvBag22": "Inventory Bag V",
    "InvBag23": "Inventory Bag W",
    "InvBag24": "Inventory Bag X",
    "InvBag25": "Inventory Bag Y",
    "InvBag26": "Inventory Bag Z",
    "InvBag100": "Snakeskinventory Bag",
    "InvBag101": "Totally Normal and not fake Bag",
    "InvBag102": "Blunderbag",
    "InvBag103": "Sandy Satchel",
    "InvBag104": "Bummo Bag",
    "InvBag105": "Capitalist Case",
    "InvBag106": "Wealthy Wallet",
    "InvBag107": "Prosperous Pouch",
    "InvBag108": "Sack of Success",
    "InvBag109": "Shivering Sack",
    "InvBag110": "Mamooth Hide Bag",
    "InvStorage1": "Storage Chest 1",
    "InvStorage2": "Storage Chest 2",
    "InvStorage3": "Storage Chest 3",
    "InvStorage4": "Storage Chest 4",
    "InvStorage5": "Storage Chest 5",
    "InvStorage6": "Storage Chest 6",
    "InvStorage7": "Storage Chest 7",
    "InvStorage8": "Storage Chest 8",
    "InvStorage9": "Storage Chest 9",
    "InvStorage10": "Storage Chest 10",
    "InvStorage11": "Storage Chest 11",
    "InvStorage12": "Storage Chest 12",
    "InvStorage13": "Storage Chest 13",
    "InvStorage14": "Storage Chest 14",
    "InvStorage15": "Storage Chest 15",
    "InvStorage16": "Storage Chest 16",
    "InvStorage17": "Storage Chest 17",
    "InvStorage18": "Storage Chest 18",
    "InvStorage19": "Storage Chest 19",
    "InvStorage20": "Storage Chest 20",
    "InvStorage21": "Storage Chest 21",
    "InvStorage31": "Storage Chest 90",
    "InvStorage32": "Storage Chest 91",
    "InvStorage33": "Storage Chest 92",
    "InvStorage34": "Storage Chest 93",
    "InvStorage35": "Storage Chest 94",
    "InvStorage36": "Storage Chest 95",
    "InvStorage37": "Storage Chest 96",
    "InvStorage38": "Storage Chest 97",
    "InvStorage39": "Storage Chest 98",
    "InvStorage40": "Storage Chest 99",
    "InvStorage41": "Storage Chest 99B",
    "InvStorage42": "Storage Chest 99C",
    "InvStorageF": "Dank Paypay Chest",
    "Key1": "Forest Villa Key",
    "Key2": "Efaunt's Tomb Key",
    "Key3": "Chizoar's Cavern Key",
    "ObolFrag": "Obol Fragment",
    "DoubleAFKtix": "Double AFK Gain Ticket",
    "TixCol": "Colosseum Ticket",
    "DeliveryBox": "Delivery Box",
    "SilverPen": "Silver Pen",
    "PremiumGem": "Gem",
    "TalentPoint1": "Talent Point Tab 1",
    "TalentPoint2": "Talent Point Tab 2",
    "TalentPoint3": "Talent Point Tab 3",
    "TalentPoint4": "Talent Point Tab 4",
    "TalentPoint6": "Talent Point Special Tab",
    "Line1": "Copper Twine",
    "Line2": "Silver Twine",
    "Line3": "Gold Twine",
    "Line4": "Platinum Twine",
    "Line5": "Leafy Vines",
    "Line6": "Fun Flags",
    "Line7": "Electrical Wiring",
    "Line8": "Wiener Links",
    "Line9": "Zeus Gon Fishin",
    "Line10": "Needledrop",
    "Line11": "Spoons Lol",
    "Line12": "Its a Boy Celebration",
    "Line13": "Its a Girl Celebration",
    "Line14": "Its Alright Celebration",
    "Weight1": "Wormie Weight",
    "Weight2": "Iron Hook",
    "Weight3": "Basic Bobber",
    "Weight4": "Dualhook Prongs",
    "Weight5": "One Pound of Steel",
    "Weight6": "One Pound of Feathers",
    "Weight7": "Massless Unit for Physics Questions",
    "Weight8": "Literal Elephant",
    "Weight9": "Valve Patented Circle Thingies",
    "Weight10": "Dynamite",
    "Weight11": "Not Dynamite",
    "Weight12": "Triple Threat",
    "Weight13": "Crash Box",
    "Weight14": "Fat Albert",
    "CardPack1": "Newbie Card Pack",
    "CardPack2": "Ancient Card Pack",
    "CardPack3": "Eternal Card Pack",
    "EquipmentHats31": "Smitty's Bubble Blowing Hat",
    "EquipmentHats32": "Bandit Bob Mask",
    "EquipmentHats33": "Paper Bag",
    "EquipmentHats34": "Parasite",
    "EquipmentHats35": "Diamon Horns",
    "EquipmentHats36": "Halloween Pumpkin",
    "EquipmentHats40": "Pardoned Turkey",
    "EquipmentHats37": "Hotdog Hero",
    "EquipmentHats38": "Invisible Hat",
    "EquipmentHats46": "Strawbiggy",
    "EquipmentHats47": "Pop Cat",
    "EquipmentHats48": "Dairy Dunk",
    "EquipmentHats49": "The Classic",
    "EquipmentHats50": "Green Beanie",
    "EquipmentHats43": "Snowman",
    "EquipmentHats45": "Giftmas Tree",
    "EquipmentHats57": "Big Bunny",
    "EquipmentHats62": "Fluffy Ramsy"
}
