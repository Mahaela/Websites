<!DOCTYPE html>
<html>
<head>
   <title></title>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
   <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
   <link rel="stylesheet" href="style.css">
   <script src="main.js"></script>
</head>
<body>

    <?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "pad_matchmaking";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }    
    
        class dungeon{
    
            function dungeon($name, $floors){
                $this->name = $name;
                $this->floors = $floors;
            }
            public $name;
            public $floors;
        }
    
        //Floors and Dungeons
        $fertileLandFloors = array('New Journey', 'Sunshine Through the Woods', 'Beast Princess in the Woods', 'Ceratopsian Highway', 'Fortdragon of the Land');
        $fertileLand = new dungeon('Fertile Land', $fertileLandFloors);
    
        $iceMazeFloors = array('Silver Labyrinth', 'Diva in the Ice Prison', 'Beautiful Beast', 'Imminent Fang', 'The Cruncher');
        $iceMaze = new dungeon('Ice Maze', $iceMazeFloors);
    
        $blazingHighwayFloors = array('Road Dyed with Blood', 'Red Road and Red Serpent', 'Noble Lion', 'Blazing Play', 'Blazing Toydragon');
        $blazingHighway = new dungeon('Blazing Highway', $blazingHighwayFloors);
    
        $faithlessTempleWithNoNameFloors = array('Forgotten Treasure', 'Stray Wings', 'Roar of the Thunder Beast', 'Innocent Attack', 'Holy Dragon Guarding Ruins');
        $faithlessTempleWtihNoName = new dungeon('Faithless Temple with No Name', $faithlessTempleWithNoNameFloors);
        
        $twilightWoodsFloors = array('Tempting Purple Crystal of Death', 'Witch in the Woods', 'Hell Beasts in the Foggy Night', 'Droll Dragon from a Book', 'Eternal Nightmare');
        $twilightWoods = new dungeon('Twilight Woods', $twilightWoodsFloors);
    
        $castleOfSatanInTheAbyssFloors = array('Cursed Jewels', 'Bloody Scales Over Soft Skin', 'Guardian of the Doorway', 'Dragon Puppets', 'Return of the Dark King');
        $castleOfSatanInTheAbyss = new dungeon('Castle of Satan in the Abyss', $castleOfSatanInTheAbyssFloors);
    
        $shrineOfGreenWaterFloors = array('Twin Jewels of Water and Wood', 'Flower Fairies', 'Water Flower Beasts', 'Room of Twin Fish', 'Fortdragon of the Shrine');
        $shrineOfGreenWater = new dungeon('Shrine of Green Water', $shrineOfGreenWaterFloors);
    
        $shrineOfLiquidFlameFloors = array('Twin Jewels of Fire and Water', 'Singing Mermaid', 'Twin Beasts of Fire and Water', 'Twin Fire Toydragons', 'Waterdragon of the Shrine');
        $shrineOfLiquidFlame = new dungeon('Shrine of Liquid Flame', $shrineOfLiquidFlameFloors);
    
        $shrineOfBlazingWoodsFloors = array('Twin Jewels of Fire and Wood', 'Fire Serpent', 'Twin Beasts of Fire and Wood', 'Toynasaurs in the Way', 'Fire Toydragon of the Shrine');
        $shrineOfBlazingWoods = new dungeon('Shrine of Blazing Woods', $shrineOfBlazingWoodsFloors);
        
        $templeOfTrailokyaFloors = array('Jewels of Three Colors', 'Waltz of Maidens', 'Wild Dance of the Three Beasts', 'Door to Trailokya', 'Dragon of Trailokya');
        $templeOfTrailokya = new dungeon('Temple of Trailokya', $templeOfTrailokyaFloors);
        
        $hypnoForestFloors = array('Flower Dragon of the Forest', 'Wind Fairies', 'Ancient Dragon Warrior', 'Green Giant', 'Ruler of the Winds and Clouds');
        $hypnoForest = new dungeon('Hypno Forest', $hypnoForestFloors);
    
        $creekOfNeleusFloors = array('Sea Dragon of the Creek', 'Temptation of the Water Fairies', 'Hunter at the Seaside', 'Guardian of the Creek', 'Envoy of Poseidon');
        $creekOfNeleus = new dungeon('Creek of Neleus', $creekOfNeleusFloors);
    
        $hemeraVolcanicBeltFloors = array('Flame-Devouring Dragon', 'Eyes Burning with Anger', 'Knight Embraced by Phoenix', 'Fire! Fire!! Fire!!!', 'Incarnation of Blazing Anger');
        $hemeraVolcanicBelt = new dungeon('Hemera Volcanic Belt', $hemeraVolcanicBeltFloors);
        
        $aitherDesertFloors = array('Hunter in the Desert', 'Beyond the Desert', 'Temple Under the Desert', 'Guards of the Light', 'Genie of the Lamp');
        $aitherDesert = new dungeon('Aither Desert', $aitherDesertFloors);
    
        $talossAbyssFloors = array('Moon in the Abyss', 'Glimpse of Death', 'Fallen Dragon Knight', 'Annihilator of the Void', 'Darkness, Death and Despair');
        $talossAbyss = new dungeon("Talos's Abyss", $talossAbyssFloors);
    
        $hillOfIrissRainbowFloors = array('Paradise of Beauty And Love','Shining Hill', 'Fountain of Recreation', 'Guardian of the Goddess', 'Goddess in Paradise'); 
        $hillOfIrissRainbow = new dungeon("Hill of Iris's Rainbow", $hillOfIrissRainbowFloors);
    
        $mechdragonsMassiveFortressFloors = array('Flame of Conviction', 'Ice-Breaking Hooves', 'Wailing Wind', 'Noble Shining Claws', 'Shadow of Destruction');
        $mechdragonsMassiveFortress = new dungeon ("Mechdragons' Massive Fortress", $mechdragonsMassiveFortressFloors);
    
        $ancientDragonsMysticRealmFloors = array('Scarlet Desert Isle', 'Deep Blue Desert Isle', 'Dark Green Desert Isle', 'Shining Island', 'Isle of the Underworld');
        $ancientDragonsMysticRealm = new dungeon("Ancient Dragons' Mystic Realm", $ancientDragonsMysticRealmFloors);
        $domainOfTheWarDragonsAllAttNeededFloors = array('Wind, Forest, Fire & Mountain', 'Bishamon Warlord', 'One Eyed Warlord', 'Taiko Warlord', 'Demonic Dragon');
        $dominOfTheWarDragonsAttAttNeeded = new dungeon('Domain of the War Dragons - All Att Needed', $domainOfTheWarDragonsAllAttNeededFloors); 
    
        $dragonKnightSanctuaryNoDupesFloors = array('Ancient Caldera', 'Ancient Ocean', 'Ancient Wind', 'Ancient Holy Hour', 'Ancient Moon Shadow');
        $dragonKnightSanctuary = new dungeon('Dragon Knight Sanctuary - No Dupes', $dragonKnightSanctuaryNoDupesFloors);
    
        $mysticDragonHistoricSiteFloors = array('Miracle Stone - No Water', 'Antique Gear - No Wood', 'Mysterious Gallery - No Fire', 'Hollow Crystals - No Dark', 'Disk of Ephemeris - No Light');
        $mysticDragonHistoricSite = new dungeon('Mystic Dragon Historic Site', $mysticDragonHistoricSiteFloors);
    
        $pirateDragonsHiddenGrottoFloors = array('Crimson Grotto', 'Blue Grotto', 'Green Grotto', 'Golden Grotto', 'Black Grotto');
        $pirateDragonsHiddenGrotto = new dungeon("Pirate Dragon's Hidden Grotto", $pirateDragonsHiddenGrottoFloors);
    
        $forbiddenTowerNoLSkillFloors = array('Door of Wood', 'Door of Ice', 'Door of Flame', 'Door of Light and Shadow', 'Master of the Seal');
        $forbiddenTowerNoLSkill = new dungeon('Forbidden Tower - No L. Skill', $forbiddenTowerNoLSkillFloors);
    
        $towerOfWindyWoodsTechnicalFloors = array('Storm Claws', 'Storm Corridor', 'Storm Lancers', 'Wise Horse with Water Shield', 'Flowers Falling in the Wild Wind');
        $towerOfWindyWoodsTechnical = new dungeon('Tower of Windy Woods - No RCV/5x4 Board', $towerOfWindyWoodsTechnicalFloors);
    
        $towerOfIceWaterTechnicalFloors = array('Creeping Evil Hand', 'Corridor of the Water Mirror', 'Kinghts of Divine Might', 'Spirit of Blaze', 'Lance that Split the Ocean',);
        $towerOfIceWaterTechnical = new dungeon('Tower of Ice Water - No RCV/5x4 Board', $towerOfIceWaterTechnicalFloors);
    
        $towerOfBlazingFireTechnicalFloors = array('Blazing Great Wings', 'Flame of Hatred', 'Knight of Blazing Wings', 'The Plan of the Wicked Woods','Flame Sword of Beauty');
        $towerOfBlazingFireFloors = new dungeon ('Tower of Blazing Fire - No RCV/5x4 Board', $towerOfBlazingFireTechnicalFloors);
    
        $mythicStoneDragonCaveFloors = array('Blue Stone Aerial Dragon', 'Green Stone Steadfast Dragon', 'Scarlet Stone Blade Dragon', 'Purple Stone Steel Dragon', 'Rainbow Stone Magic Dragon');
        $mythicStoneDragonCave = new dungeon('Mythic Stone Dragon Cave', $mythicStoneDragonCaveFloors);
    
        $altCastleOfSatanInAbyssNoDupesFloors = array('Red Eyes and Evil Claws', 'Bloody Scales Over Soft Skin 2', 'Dark Flames Ghost', 'Dragon Puppets 2', 'Return of the Dark King 2');
        $altCastleOfSatanInAbyssNoDupes = new dungeon('Alt. Castle of Satan in Abyss - No Dupes', $altCastleOfSatanInAbyssNoDupesFloors);
    
        $altShrineOfGreenWaterNoDupesFloors = array('Rosettes and Water Blood', 'Flower Fairies 2', 'Wind Water Ghost', 'Room of Twin Fish 2', 'Fortdragon of the Shrine 2');
        $altShrineOfGreenWaterNoDupes = new dungeon('Alt. Shrine of Green Water - No Dupes', $altShrineOfGreenWaterNoDupesFloors);
        
        $altShrineOfLiquidFlameNoDupesFloors = array('Water Blood and Red Eyes', 'Singing Mermaid 2', 'Water Flames Ghost', 'Twin Fire Toydragons 2', 'Waterdragon of the Shrine 2');
        $altShrineOfLiquidFlameNoDupes = new dungeon('Alt. Shrine of Liquid Flame - No Dupes', $altShrineOfLiquidFlameNoDupesFloors);
    
        $altShrineOfBlazingWoodsNoDupesFloors = array('Rosettes and Red Eyes', 'Fire Serpent 2', 'Wind Flames Ghost', 'Toynasaurs in the Way 2', 'Fire Toydragon of the Shrine 2');
        $altShrineOfBlazingWoodsNoDupes = new dungeon('Alt. Shrine of Blazing Woods - No Dupes', $altShrineOfBlazingWoodsNoDupesFloors);
    
        $altTempleOfTrailokyaNoDupesFloors = array('Gleaming Horns and Evil Claws', 'Waltz of Maidens', 'Radiant Darkness Ghost', 'Door to Trailokya', 'Dragon of Trailokya');
        $altTempleOfTrailokyaNoDupes = new dungeon('Alt. Temple of Trailokya - No Dupes', $altTempleOfTrailokyaNoDupesFloors);
    
        $altHypnoForestNoDupesFloors = array(' Flower Dragon of the Forest 2', 'Green Hero', 'Ancient Dragon Warrior 2', 'Green Giant 2', 'Noble Wolf King Hero');
        $altHypnoForestNoDupes = new dungeon('Alt. Hypno Forest - No Dupes', $altHypnoForestNoDupesFloors);
    
        $altCreekOfNeleusNoDupesFloor = array('Sea Dragon of the Creek 2', 'Blue Hero', 'Hunter at the Seaside 2', 'Guardian of the Creek 2', 'Earth-Rending Emperor');
        $altCreekOfNeleusNoDupes = new dungeon('Alt. Creek of Neleus - No Dupes', $altCreekOfNeleusNoDupesFloor);
    
        $altHemeraVolcanicBeltNoDupesFloors = array('Flame-Devouring Dragon 2', 'Red Strong Warrior', 'Knight Embraced by Phoenix 2', 'Fire! Fire!! Fire!!! 2', 'Red Giant');
        $altHemeraVolcanicBeltNoDupes = new dungeon('Alt. Hemera Volcanic Belt - No Dupes', $altHemeraVolcanicBeltNoDupesFloors);
    
        $altAitherDesertNoDupesFloors = array('Hunter in the Desert 2', 'Beyond the Desert 2', 'Temple Under the Desert 2', 'Guards of the Light 2', 'Shielded Goddess');
        $altAitherDesertNoDupes = new dungeon('Alt. Aither Desert - No Dupes', $altAitherDesertNoDupesFloors);
        
        $altTalossAbyssNoDupesFloors = array('Moon in the Abyss 2', 'Glimpse of Death 2', 'Fallen Dragon Knight 2', 'Annihilator of the Void 2', 'Dark Liege');
        $altTalossAbyssNoDupes = new dungeon("Alt. Talos's Abyss - No Dupes", $altTalossAbyssNoDupesFloors);
    
        $theGodKingsFloatingGardenFloors = array('Omniscient, Omnipotent Creator');
        $theGodKingsFloatingGarden = new dungeon("The God-King's Floating Garden", $theGodKingsFloatingGardenFloors);
    
        $legendaryMountainPathFloors = array('Storm Dragon of the Holy Peak');
        $legendaryMountainPath = new dungeon('Legendary Mountain Path', $legendaryMountainPathFloors);
    
        $legendaryHillsFloors = array('Soaring Star Dragon');
        $legendaryHills = new dungeon('Legendary Hills', $legendaryHillsFloors);
    
        $legendarySnowyValleyFloors = array('Glacial Frost Dragon');
        $legendarySnowyValley = new dungeon('Legendary Snowy Valley', $legendarySnowyValleyFloors);
    
        $legendarySkywayFloors = array('Iron Dragon of the Dawn');
        $legendarySkyway = new dungeon('Legendary Skyway', $legendarySkywayFloors);
        
        $legendarySeaOfTreesFloors = array('Whirlwind Dragon of the Luxuriant Forest');
        $legendarySeaOfTrees = new dungeon('Legendary Sea of Trees', $legendarySeaOfTreesFloors);
    
        $paradiseOfTheHolyBeastsFloors = array('Kouryu of the Celestial Pole');
        $paradiseOfTheHolyBeasts = new dungeon('Paradise of the Holy Beasts', $paradiseOfTheHolyBeastsFloors);
    
        $ultimateDescendedRushFloors = array('Gathering of Talents');
        $ultimateDescendedRush = new dungeon('Ultimate Descended Rush!', $ultimateDescendedRushFloors);
    
        $ultimateArenaNoContinueFloors = array('Bipolar Godess 3', 'Bipolar Godess 2');
        $ultimateArenaNoContinue = new dungeon('Ultimate Arena - No Continue', $ultimateArenaNoContinueFloors);
    
        $technicalDungeons = array($fertileLand, $iceMaze, $blazingHighway, $faithlessTempleWtihNoName, $twilightWoods,  $castleOfSatanInTheAbyss, $shrineOfGreenWater, $shrineOfLiquidFlame, $shrineOfBlazingWoods, $templeOfTrailokya, $hypnoForest, $creekOfNeleus, $hemeraVolcanicBelt, $aitherDesert, $talossAbyss, $hillOfIrissRainbow, $mechdragonsMassiveFortress, $ancientDragonsMysticRealm, $dominOfTheWarDragonsAttAttNeeded, $dragonKnightSanctuary, $mysticDragonHistoricSite, $pirateDragonsHiddenGrotto, $forbiddenTowerNoLSkill, $towerOfWindyWoodsTechnical, $towerOfIceWaterTechnical, $towerOfBlazingFireFloors, $mythicStoneDragonCave, $altCastleOfSatanInAbyssNoDupes, $altShrineOfGreenWaterNoDupes, $altShrineOfLiquidFlameNoDupes, $altShrineOfBlazingWoodsNoDupes, $altTempleOfTrailokyaNoDupes, $altHypnoForestNoDupes, $altCreekOfNeleusNoDupes, $altHemeraVolcanicBeltNoDupes, $altAitherDesertNoDupes, $altTalossAbyssNoDupes, $theGodKingsFloatingGarden, $legendaryMountainPath, $legendaryHills, $legendarySnowyValley, $legendarySkyway, $legendarySeaOfTrees, $paradiseOfTheHolyBeasts, $ultimateDescendedRush, $ultimateArenaNoContinue);
            
    ?>
    
    <?php
        $selectDungeonType = "Select Dungeon Type";
        $technical = "technical";
        $coin = "coin";
        $special ="special";
        $dungeonType;
        $dungeon;
        $floor;
     
        function showDungeonTypeMenu(){
            echo "hello World";
        }
    ?>
    
    <div id="whiteSpace"></div>
    <?php
        echo "<input type='button' onclick=showDungeonTypeMenu(); value='$selectDungeonType'>";
    ?>
    <div id="dungeonTypeMenu">
       <?php
            echo "<input type='button' name='Release' onclick= hello(); value='Click to Release'>";
        ?>
        <p class="dungeonType" onclick="hideMenu('dungeonTypeMenu'); setType('selectDungeonType', 'Special')">Special</p>
        <p class="dungeonType" onclick="hideMenu('dungeonTypeMenu'); setType('selectDungeonType', 'Coin')">Coin</p>
    </div>
           
            
</body>
</html>