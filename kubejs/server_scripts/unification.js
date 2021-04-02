//priority: 1200

//---------------------------------------------------------------------------------------------------------------------
//UNIFICATION SCRIPT - This script is not finished and doesnt use any loop. Probably gonna clean the script later.
//WARNING - BARRIER BLOCKS ARE PLACHOLDERS, ONLY SUPPOSED TO BE USED FOR DEVELOPEMENT PURPOSES.
//---------------------------------------------------------------------------------------------------------------------

events.listen('recipes', function (event) {

        //-----------------------------------------------------
        //Iron Recipes
        //-----------------------------------------------------

        //Recipes removal
        event.remove({id: 'immersiveengineering:crafting/iron_ingot_from_dust_from_blasting'})
        event.remove({id: 'immersiveengineering:crafting/iron_ingot_from_dust'})
        event.remove({id: 'thermal:smelting/iron_ingot_from_dust_blasting'})
        event.remove({id: 'thermal:smelting/iron_ingot_from_dust_smelting'})
        event.remove({id: 'immersiveengineering:crafting/stick_iron'})
        event.remove({id: 'bloodmagic:smelting/ingot_iron'})
        event.remove({id: 'mekanism:processing/iron/dust/from_ore'})
        event.remove({id: 'createaddition:rolling/iron_ingot'})
        event.custom({
            "type":"createaddition:rolling",
            "input": {
                  "tag": "forge:ingots/iron"
            },
            "result": {
                "item":  "immersiveengineering:stick_iron",
                "count": 2
            }
        })

        //Create Crusher - 1 Iron ore to 1 Crushed Iron Ore, 30 % chance to have 1 Iron dust.
        event.remove({id: 'create:crushing/iron_ore'})
        event.recipes.create.crushing([Item.of('create:crushed_iron_ore'), Item.of('thermal:iron_dust').withChance(0.30), Item.of('minecraft:cobblestone').withChance(0.35)], '#forge:ores/iron', 350)
        
        //IE Crusher - 1 Crushed Iron Ore into 2 dusts, 15% chance to have a extra nickel dust.
        event.remove({id: 'immersiveengineering:crusher/ore_iron'})
        event.recipes.immersiveengineering.crusher(Item.of('thermal:iron_dust', 2), 'create:crushed_iron_ore', Item.of('thermal:nickel_dust').withChance(0.15))

        //Thermal Pulverizer - 1 Iron Ore into 2 dusts (No bonuses)
        event.remove({id: 'thermal:machine/pulverizer/pulverizer_iron_ore'})
        event.recipes.thermal.pulverizer(Item.of('thermal:iron_dust', 2), '#forge:ores/iron')

        //Plates Recipes
        event.recipes.create.pressing('thermal:iron_plate', '#forge:ingots/iron')

        //Replace Output
        event.replaceOutput({type: 'create:milling'}, 'create:crushed_iron_ore', 'thermal:iron_dust')
        event.replaceOutput({}, 'mekanism:dust_iron', 'thermal:iron_dust')
        event.replaceOutput({}, 'bloodmagic:ironsand', 'thermal:iron_dust')
        event.replaceOutput({}, 'createaddition:iron_rod', 'immersiveengineering:stick_iron')

        //-----------------------------------------------------
        //Gold Recipes
        //-----------------------------------------------------

        //Recipes removal
        event.remove({id: 'mekanism:processing/gold/dust/from_ore'})
        event.remove({id: 'create:pressing/gold_ingot'})

        //Create Crusher - 1 Gold ore to 1 Crushed Gold Ore, 30 % chance to have 1 gold dust.
        event.remove({id: 'create:crushing/gold_ore'})
        event.recipes.create.crushing([Item.of('create:crushed_gold_ore'), Item.of('thermal:gold_dust').withChance(0.30), Item.of('minecraft:cobblestone').withChance(0.35)], '#forge:ores/gold', 350)
       
        //IE Crusher - 1 Crushed Gold Ore into 2 dusts, 15% chance to have a extra platinum dust.
        event.remove({id: 'immersiveengineering:crusher/ore_gold'})
        event.recipes.immersiveengineering.crusher(Item.of('thermal:gold_dust', 2), 'create:crushed_gold_ore', Item.of('minecraft:barrier').withChance(0.15))

        //Thermal Pulverizer - 1 Gold Ore into 2 dusts (No bonuses)
        event.remove({id: 'thermal:machine/pulverizer/pulverizer_gold_ore'})
        event.recipes.thermal.pulverizer(Item.of('thermal:gold_dust', 2), '#forge:ores/gold')

        //Plates Recipes
        event.recipes.create.pressing('thermal:gold_plate', '#forge:ingots/gold')

        //Replace Output
        event.replaceOutput({}, 'mekanism:dust_gold', 'thermal:gold_dust')
        event.replaceOutput({}, 'bloodmagic:goldsand', 'thermal:gold_dust')
        event.replaceOutput({type: 'create:milling'}, 'create:crushed_gold_ore', 'thermal:gold_dust')

        //-----------------------------------------------------
        //Copper Recipes
        //-----------------------------------------------------

        //Recipes removal
        event.remove({id: 'create:crafting/materials/copper_nugget_from_decompacting'})
        event.remove({id: 'thermal:parts/copper_gear'})
        event.remove({id: 'mekanism:processing/copper/dust/from_ore'})
        event.remove({id: 'thermal:machine/press/press_copper_ingot_to_plate'})
        event.remove({id: 'iceandfire:copper_ingot_to_nuggets'})
        event.remove({id: 'immersiveengineering:recycling/wire_copper'})
        event.remove({id: 'immersiveengineering:crafting/wire_copper'})
        event.remove({id: 'create:crushing/copper_block'})
        event.remove({id: 'createaddition:rolling/copper_plate'})
        event.remove({id: 'thermal:machine/pulverizer/pulverizer_copper_ore'})
        event.custom({
            "type":"createaddition:rolling",
            "input": {
                  "tag": "forge:plates/copper"
            },
            "result": {
                "item":  "immersiveengineering:wire_copper",
                "count": 1
            }
        })

        event.remove({id: 'tconstruct:smeltery/casting/metal/copper/block'})
        event.custom({
            "type": "tconstruct:casting_basin",
            "fluid": {
              "name": "tconstruct:molten_copper",
              "amount": 1296
            },
            "result": "thermal:copper_block",
            "cooling_time": 150
        })

        event.remove({id: 'tconstruct:smeltery/casting/metal/copper/ingot_gold_cast'})
        event.custom({
            "type": "tconstruct:casting_table",
            "cast": {
              "item": "tconstruct:ingot_cast"
            },
            "fluid": {
              "name": "tconstruct:molten_copper",
              "amount": 144
            },
            "result": "thermal:copper_ingot",
            "cooling_time": 50
        })

        event.remove({id: 'tconstruct:smeltery/casting/metal/copper/ingot_sand_cast'})
        event.custom({
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": "tconstruct:casts/single_use/ingot"
            },
            "cast_consumed": true,
            "fluid": {
              "name": "tconstruct:molten_copper",
              "amount": 144
            },
            "result": "thermal:copper_ingot",
            "cooling_time": 50
        })

        event.remove({id: 'tconstruct:smeltery/casting/metal/copper/nugget_gold_cast'})
        event.custom({
            "type": "tconstruct:casting_table",
            "cast": {
              "item": "tconstruct:nugget_cast"
            },
            "fluid": {
              "name": "tconstruct:molten_copper",
              "amount": 16
            },
            "result": "thermal:copper_nugget",
            "cooling_time": 17
        })

        event.remove({id: 'tconstruct:smeltery/casting/metal/copper/nugget_sand_cast'})
        event.custom({
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": "tconstruct:casts/single_use/nugget"
            },
            "cast_consumed": true,
            "fluid": {
              "name": "tconstruct:molten_copper",
              "amount": 16
            },
            "result": "thermal:copper_nugget",
            "cooling_time": 17
        })

        //Furnace
        event.smelting('thermal:copper_ingot', 'create:crushed_copper_ore')
        event.blasting('thermal:copper_ingot', 'create:crushed_copper_ore')
        
        //Create Crusher - 1 Copper ore to 1 Crushed Copper Ore, 30 % chance to have 1 copper dust.
        event.remove({id: 'create:crushing/copper_ore'})
        event.recipes.create.crushing([Item.of('create:crushed_copper_ore'), Item.of('thermal:copper_dust').withChance(0.30), Item.of('minecraft:cobblestone').withChance(0.35)], '#forge:ores/copper', 350)

        //IE Crusher - 1 Crushed Copper Ore into 2 dusts, 15% chance to have a extra gold dust.
        event.remove({id: 'immersiveengineering:crusher/ore_copper'})
        event.recipes.immersiveengineering.crusher(Item.of('thermal:copper_dust', 2), 'create:crushed_copper_ore', Item.of('thermal:gold_dust').withChance(0.15))
        
        //Induction Smelter
        event.remove({id: 'thermal:machine/smelter/smelter_copper_ore'})
        //event.recipes.thermal.smelter(['#forge:ores/copper'], ['thermal:copper_ingot', Item.of('thermal:rich_slag').withChance(0.30)])

        //IE Crusher - 1 Copper Ore into 2 dusts (No bonuses)
        event.recipes.immersiveengineering.crusher(Item.of('thermal:copper_dust', 2), '#forge:ores/copper')

        //Thermal Pulverizer - 1 Copper Ore into 2 dusts (No bonuses)
        event.recipes.thermal.pulverizer(Item.of('thermal:copper_dust', 2), '#forge:ores/copper')

        //Plates Recipes
        event.remove({id: 'thermal:machine/press/press_copper_ingot_to_gear'})
        event.recipes.create.pressing('thermal:copper_plate', '#forge:ingots/copper')

        //Copper Block
        event.stonecutting('mekanism:block_copper', 'thermal:copper_block')
        event.stonecutting('iceandfire:copper_block', 'thermal:copper_block')
        event.stonecutting('create:copper_block', 'thermal:copper_block')
        event.stonecutting('immersiveengineering:storage_copper', 'thermal:copper_block')

        //Replace Output
        event.replaceOutput({}, 'iceandfire:copper_nugget', 'thermal:copper_nugget')
        event.replaceOutput({}, 'create:copper_nugget', 'thermal:copper_nugget')
        event.replaceOutput({type: 'create:milling'}, 'create:crushed_copper_ore', 'thermal:copper_dust')
        event.replaceOutput({}, 'mekanism:dust_copper', 'thermal:copper_dust')

        //-----------------------------------------------------
        //Zinc Recipes
        //-----------------------------------------------------

        //Recipes removal
        event.remove({id: 'create:crushing/zinc_ore'})
        event.remove({id: 'create:crushing/zinc_block'})
        event.remove({id: 'thermal:machine/plugins/create/pulverizer_create_zinc_ore'})

        //Create Crusher - 1 Zinc ore to 1 Crushed Zinc Ore, 30 % chance to have 1 zinc dust.
        event.remove({id: 'create:crushing/zinc_ore'})
        event.recipes.create.crushing([Item.of('create:crushed_zinc_ore'), Item.of('minecraft:barrier').withChance(0.30), Item.of('minecraft:cobblestone').withChance(0.35)], '#forge:ores/zinc', 350)

        //IE Crusher - 1 Crushed Tin Ore into 2 dusts, 15% chance to have a extra iron dust.
        event.remove({id: 'immersiveengineering:crusher/ore_aluminum'})
        event.recipes.immersiveengineering.crusher(Item.of('create:zinc_ingot', 2), 'create:crushed_zinc_ore', Item.of('thermal:niter').withChance(0.15))

        //Replace Output
        event.replaceOutput({type: 'create:milling'}, 'create:crushed_zinc_ore', 'minecraft:barrier')

        //-----------------------------------------------------
        //Aluminum Recipes
        //-----------------------------------------------------

        //Recipes removal
        event.remove({id: 'immersiveengineering:crafting/plate_aluminum_hammering'})
        event.remove({id: 'immersiveengineering:recycling/wire_aluminum'})
        event.remove({id: 'immersiveengineering:crafting/wire_aluminum'})
        event.remove({id: 'immersiveengineering:crafting/stick_aluminum'})

        //Create Crusher - 1 Aluminum ore to 1 Crushed Aluminum Ore, 30 % chance to have 1 aluminum dust.
        event.remove({id: 'create:crushing/aluminum_ore'})
        event.recipes.create.crushing([Item.of('create:crushed_aluminum_ore'), Item.of('immersiveengineering:dust_aluminum').withChance(0.30), Item.of('minecraft:cobblestone').withChance(0.35)], '#forge:ores/aluminum', 350)

        //IE Crusher - 1 Crushed Aluminum Ore into 2 dusts, 15% chance to have a extra iron dust.
        event.remove({id: 'immersiveengineering:crusher/ore_aluminum'})
        event.recipes.immersiveengineering.crusher(Item.of('immersiveengineering:dust_aluminum', 2), 'create:crushed_aluminum_ore', Item.of('thermal:iron_dust').withChance(0.15))
        
        //Thermal Pulverizer - 1 Aluminum Ingot into 1 dusts (No bonuses)
        event.recipes.thermal.pulverizer('immersiveengineering:dust_aluminum', '#forge:ingots/aluminum')

        //IE Crusher - 1 Aluminum Ore into 2 dusts (No bonuses)
        event.recipes.immersiveengineering.crusher(Item.of('immersiveengineering:dust_aluminum', 2), '#forge:ores/aluminum')

        //Plates Recipes
        event.recipes.create.pressing('immersiveengineering:plate_aluminum', '#forge:ingots/aluminum')

        //Mekanism Crusher - 1 Aluminum Ingot into 1 dust
        event.recipes.mekanism.crushing('immersiveengineering:dust_aluminum', '#forge:ingots/aluminum')

        //Thermal Pulverizer - 1 Aluminum Ore into 2 dusts (No bonuses)
        event.remove({id: 'thermal:machine/plugins/immersiveengineering/pulverizer_ie_aluminum_ore'})
        event.recipes.thermal.pulverizer(Item.of('immersiveengineering:dust_aluminum', 2), '#forge:ores/aluminum')

        //Replace Output
        event.replaceOutput({type: 'create:milling'}, 'create:crushed_aluminum_ore', 'immersiveengineering:dust_aluminum')

        //-----------------------------------------------------
        //Brass Recipes
        //-----------------------------------------------------

        //Recipes removal
        event.remove({id: 'create:crushing/brass_block'})
        event.remove({id: 'immersiveengineering:arcfurnace/alloy_brass'})
        event.remove({id: 'immersiveengineering:alloysmelter/brass'})

        //-----------------------------------------------------
        //Osmium Recipes
        //-----------------------------------------------------

        //Recipes removal
        event.remove({id: 'mekanism:processing/osmium/dust/from_ore'})

        //Create Crusher - 1 Osmium ore to 1 Crushed Osmium Ore, 30 % chance to have 1 osmium dust.
        event.remove({id: 'create:crushing/osmium_ore'})
        event.recipes.create.crushing([Item.of('create:crushed_osmium_ore'), Item.of('mekanism:dust_osmium').withChance(0.30), Item.of('minecraft:cobblestone').withChance(0.35)], '#forge:ores/osmium', 350)

        //IE Crusher - 1 Crushed Osmium Ore into 2 dusts, 15% chance to have a extra iron dust.
        event.recipes.immersiveengineering.crusher(Item.of('mekanism:dust_osmium', 2), 'create:crushed_osmium_ore', Item.of('minecraft:barrier').withChance(0.15))
        
        //Replace Output
        event.replaceOutput({type: 'create:milling'}, 'create:crushed_osmium_ore', 'mekanism:dust_osmium')

        //-----------------------------------------------------
        //Tin Recipes
        //-----------------------------------------------------

        //Recipes removal
        event.remove({id: 'mekanism:processing/tin/dust/from_ore'})

        event.remove({id: 'tconstruct:smeltery/casting/metal/tin/block'})
        event.custom({
            "type": "tconstruct:casting_basin",
            "fluid": {
              "name": "tconstruct:molten_tin",
              "amount": 1296
            },
            "result": "mekanism:block_steel",
            "cooling_time": 117
        })

        //Create Crusher - 1 Tin ore to 1 Crushed Tin Ore, 30 % chance to have 1 tin dust.
        event.remove({id: 'create:crushing/tin_ore'})
        event.recipes.create.crushing([Item.of('create:crushed_tin_ore'), Item.of('thermal:tin_dust').withChance(0.30), Item.of('minecraft:cobblestone').withChance(0.35)], '#forge:ores/tin', 350)

        //IE Crusher - 1 Crushed Tin Ore into 2 dusts, 15% chance to have a extra iron dust.
        event.remove({id: 'immersiveengineering:crusher/ore_tin'})
        event.recipes.immersiveengineering.crusher(Item.of('thermal:tin_dust', 2), 'create:crushed_tin_ore', Item.of('thermal:iron_dust').withChance(0.15))

        //Plates Recipes
        event.recipes.create.pressing('thermal:tin_plate', '#forge:ingots/tin')

        //Thermal Pulverizer - 1 Tin Ore into 2 dusts (No bonuses)
        event.remove({id: 'thermal:machine/pulverizer/pulverizer_tin_ore'})
        event.recipes.thermal.pulverizer(Item.of('thermal:tin_dust', 2), '#forge:ores/tin')

        //IE Crusher - 1 Tin Ore into 2 dusts (No bonuses)
        event.recipes.immersiveengineering.crusher(Item.of('thermal:tin_dust', 2), '#forge:ores/tin')

        //Tin Block
        event.stonecutting('mekanism:block_tin', 'thermal:tin_block')

        //Replace Output
        event.replaceOutput({type: 'theurgy:purification'}, 'mekanism:ingot_tin', 'thermal:tin_ingot')
        event.replaceOutput({type: 'theurgy:replication'}, 'mekanism:ingot_tin', 'thermal:tin_ingot')
        event.replaceOutput({type: 'create:milling'}, 'create:crushed_tin_ore', 'thermal:tin_dust')
        event.replaceOutput({}, 'mekanism:dust_tin', 'thermal:tin_dust')

        //-----------------------------------------------------
        //Lead Recipes
        //-----------------------------------------------------

        //Recipes removal
        event.remove({id: 'mekanism:processing/lead/dust/from_ore'})

        event.remove({id: 'tconstruct:smeltery/casting/metal/lead/block'})
        event.custom({
            "type": "tconstruct:casting_basin",
            "fluid": {
              "name": "tconstruct:molten_lead",
              "amount": 1296
            },
            "result": "thermal:lead_block",
            "cooling_time": 130
        })

        //Create Crusher - 1 Lead ore to 1 Crushed Lead Ore, 30 % chance to have 1 lead dust.
        event.remove({id: 'create:crushing/lead_ore'})
        event.recipes.create.crushing([Item.of('create:crushed_lead_ore'), Item.of('thermal:lead_dust').withChance(0.30), Item.of('minecraft:cobblestone').withChance(0.35)], '#forge:ores/lead', 350)
       
        //IE Crusher - 1 Crushed Lead Ore into 2 dusts, 15% chance to have a extra silver dust.
        event.remove({id: 'immersiveengineering:crusher/ore_lead'})
        event.recipes.immersiveengineering.crusher(Item.of('thermal:lead_dust', 2), 'create:crushed_lead_ore', Item.of('thermal:silver_dust').withChance(0.15))
        
        //Thermal Pulverizer - 1 Lead Ore into 2 dusts (No bonuses)
        event.remove({id: 'thermal:machine/pulverizer/pulverizer_lead_ore'})
        event.recipes.thermal.pulverizer(Item.of('thermal:lead_dust', 2), '#forge:ores/lead')

        //IE Crusher - 1 Lead Ore into 2 dusts (No bonuses)
        event.recipes.immersiveengineering.crusher(Item.of('thermal:lead_dust', 2), '#forge:ores/lead')
            
        //Plates Recipes
        event.recipes.create.pressing('thermal:lead_plate', '#forge:ingots/lead')
        
        //Lead Block
        event.stonecutting('mekanism:block_lead', 'thermal:lead_block')
        event.stonecutting('immersiveengineering:storage_lead', 'thermal:lead_block')

        //Replace Output
        event.replaceOutput({type: 'theurgy:purification'}, 'mekanism:ingot_lead', 'thermal:lead_ingot')
        event.replaceOutput({type: 'theurgy:replication'}, 'mekanism:ingot_lead', 'thermal:lead_ingot')
        event.replaceOutput({type: 'create:milling'}, 'create:crushed_lead_ore', 'thermal:lead_dust')
        event.replaceOutput({}, 'mekanism:dust_lead', 'thermal:lead_dust')

        //-----------------------------------------------------
        //Silver Recipes
        //-----------------------------------------------------

        //Recipes removal
        event.remove({id: 'iceandfire:silver_ingot_to_nuggets'})
        event.remove({id: 'create:splashing/iceandfire/crushed_silver_ore'})

        event.remove({id: 'tconstruct:smeltery/casting/metal/silver/block'})
        event.custom({
            "type": "tconstruct:casting_basin",
            "fluid": {
              "name": "tconstruct:molten_silver",
              "amount": 1296
            },
            "result": "thermal:silver_block",
            "cooling_time": 179
        })

        //Create Crusher - 1 Silver ore to 1 Crushed Silver Ore, 30 % chance to have 1 silver dust.
        event.remove({id: 'create:crushing/silver_ore'})
        event.recipes.create.crushing([Item.of('create:crushed_silver_ore'), Item.of('thermal:silver_dust').withChance(0.30), Item.of('minecraft:cobblestone').withChance(0.35)], '#forge:ores/silver', 350)

        //IE Crusher - 1 Crushed Silver Ore into 2 dusts, 15% chance to have a extra lead dust.
        event.remove({id: 'immersiveengineering:crusher/ore_silver'})
        event.recipes.immersiveengineering.crusher(Item.of('thermal:silver_dust', 2), 'create:crushed_silver_ore', Item.of('thermal:lead_dust').withChance(0.15))

        //Thermal Pulverizer - 1 Silver Ore into 2 dusts (No bonuses)
        event.remove({id: 'thermal:machine/pulverizer/pulverizer_silver_ore'})
        event.recipes.thermal.pulverizer(Item.of('thermal:silver_dust', 2), '#forge:ores/silver')

        //IE Crusher - 1 Silver Ore into 2 dusts (No bonuses)
        event.recipes.immersiveengineering.crusher(Item.of('thermal:silver_dust', 2), '#forge:ores/silver')

        //Mekanism Crusher - 1 Silver Ingot into 1 dust
        event.recipes.mekanism.crushing('thermal:silver_dust', '#forge:ingots/silver')

        //Plates Recipes
        event.recipes.create.pressing('thermal:silver_plate', '#forge:ingots/silver')

        //Silver Block
        event.stonecutting('iceandfire:silver_block', 'thermal:silver_block')
        event.stonecutting('immersiveengineering:storage_silver', 'thermal:silver_block')

        //Replace Output
        event.replaceOutput({type: 'theurgy:purification'}, 'iceandfire:silver_ingot', 'thermal:silver_ingot')
        event.replaceOutput({type: 'theurgy:replication'}, 'iceandfire:silver_ingot', 'thermal:silver_ingot')
        event.replaceOutput({type: 'create:milling'}, 'create:crushed_silver_ore', 'thermal:silver_dust')
        event.replaceOutput({}, 'iceandfire:silver_nugget', 'thermal:silver_nugget')
        //event.replaceOutput({}, 'custommod:dust_silver', 'thermal:silver_dust')
                
        //-----------------------------------------------------
        //Nickel Recipes
        //-----------------------------------------------------

        //Recipes removal
        event.remove({id: 'tconstruct:smeltery/casting/metal/nickel/block'})
        event.custom({
            "type": "tconstruct:casting_basin",
            "fluid": {
              "name": "tconstruct:molten_nickel",
              "amount": 1296
            },
            "result": "thermal:nickel_block",
            "cooling_time": 194
        })

        //Create Crusher - 1 Nickel ore to 1 Crushed Nickel Ore, 30 % chance to have 1 nickel dust.
        event.remove({id: 'create:crushing/nickel_ore'})
        event.recipes.create.crushing([Item.of('create:crushed_nickel_ore'), Item.of('thermal:nickel_dust').withChance(0.30), Item.of('minecraft:cobblestone').withChance(0.35)], '#forge:ores/nickel', 350)
    
        //IE Crusher - 1 Crushed Nickel Ore into 2 dusts, 15% chance to have a extra iron dust.
        event.remove({id: 'immersiveengineering:crusher/ore_nickel'})
        event.recipes.immersiveengineering.crusher(Item.of('thermal:nickel_dust', 2), 'create:crushed_nickel_ore', Item.of('thermal:iron_dust').withChance(0.15))
        
        //Thermal Pulverizer - 1 Nickel Ore into 2 dusts (No bonuses)
        event.remove({id: 'thermal:machine/pulverizer/pulverizer_nickel_ore'})
        event.recipes.thermal.pulverizer(Item.of('thermal:nickel_dust', 2), '#forge:ores/nickel')

        //IE Crusher - 1 Nickel Ore into 2 dusts (No bonuses)
        event.recipes.immersiveengineering.crusher(Item.of('thermal:nickel_dust', 2), '#forge:ores/nickel')

        //Mekanism Crusher - 1 Nickel Ingot into 1 dust
        event.recipes.mekanism.crushing('thermal:nickel_dust', '#forge:ingots/nickel')

        //Thermal Pulverizer - 1 Electrum Ingot into 1 dusts (No bonuses)
        event.recipes.thermal.pulverizer('thermal:nickel_dust', '#forge:ingots/nickel')

        //Plates Recipes
        event.recipes.create.pressing('thermal:nickel_plate', '#forge:ingots/nickel')

        //Nickel Block
        event.stonecutting('immersiveengineering:storage_nickel', 'thermal:nickel_block')

        //Replace Output
        event.replaceOutput({type: 'create:milling'}, 'create:crushed_nickel_ore', 'thermal:nickel_dust')

        //-----------------------------------------------------
        //Uranium Recipes
        //-----------------------------------------------------

        //Recipes removal
        event.remove({id: 'mekanism:processing/uranium/dust/from_ore'})
        event.remove({id: 'immersiveengineering:crafting/plate_uranium_hammering'})

        event.remove({id: 'tconstruct:smeltery/casting/metal/uranium/block'})
        event.custom({
            "type": "tconstruct:casting_basin",
            "fluid": {
              "name": "tconstruct:molten_uranium",
              "amount": 1296
            },
            "result": "mekanism:block_uranium",
            "cooling_time": 183
        })


        //Create Crusher - 1 Uranium ore to 1 Crushed Uranium Ore, 30 % chance to have 1 lead dust.
        event.remove({id: 'create:crushing/uranium_ore'})
        event.recipes.create.crushing([Item.of('create:crushed_uranium_ore'), Item.of('mekanism:dust_uranium').withChance(0.30), Item.of('minecraft:cobblestone').withChance(0.35)], '#forge:ores/uranium', 350)

        //IE Crusher - 1 Crushed Uranium Ore into 2 dusts, 15% chance to have a extra lead dust.
        event.remove({id: 'immersiveengineering:crusher/ore_uranium'})
        event.recipes.immersiveengineering.crusher(Item.of('mekanism:dust_uranium', 2), 'create:crushed_uranium_ore', Item.of('thermal:lead_dust').withChance(0.15))

        //Thermal Pulverizer - 1 Uranium Ore into 2 dusts (No bonuses)
        event.recipes.thermal.pulverizer(Item.of('mekanism:dust_uranium', 2), '#forge:ores/uranium')

        //IE Crusher - 1 Nickel Ore into 2 dusts (No bonuses)
        event.recipes.immersiveengineering.crusher(Item.of('mekanism:dust_uranium', 2), '#forge:ores/uranium')

        //Thermal Pulverizer - 1 Electrum Ingot into 1 dusts (No bonuses)
        event.recipes.thermal.pulverizer('mekanism:dust_uranium', '#forge:ingots/uranium')

        //Plates Recipes
        event.recipes.create.pressing('immersiveengineering:plate_uranium', '#forge:ingots/uranium')

        //Uranium Block
        event.stonecutting('immersiveengineering:storage_uranium', 'mekanism:block_uranium')

        //Replace Output
        event.replaceOutput({type: 'create:milling'}, 'create:crushed_uranium_ore', 'mekanism:dust_uranium')

        //-----------------------------------------------------
        //Steel Recipes
        //-----------------------------------------------------

        //Recipes removal
        event.remove({id: 'immersiveengineering:crafting/plate_steel_hammering'})
        event.remove({id: 'immersiveengineering:recycling/wire_steel'})
        event.remove({id: 'immersiveengineering:crafting/wire_steel'})
        event.remove({id: 'immersiveengineering:crafting/stick_steel'})

        event.remove({id: 'tconstruct:smeltery/casting/metal/steel/block'})
        event.custom({
            "type": "tconstruct:casting_basin",
            "fluid": {
              "name": "tconstruct:molten_steel",
              "amount": 1296
            },
            "result": "mekanism:block_steel",
            "cooling_time": 217
        })

        //Plates Recipes
        event.recipes.create.pressing('immersiveengineering:plate_steel', '#forge:ingots/steel')

        //Thermal Pulverizer - 1 Steel Ingot into 1 dusts (No bonuses)
        event.recipes.thermal.pulverizer('mekanism:dust_steel', '#forge:ingots/steel')

        //Steel Block
        event.stonecutting('immersiveengineering:storage_steel', 'mekanism:block_steel')

        //-----------------------------------------------------
        //Electrum Recipes
        //-----------------------------------------------------

        //Recipes removal
        event.remove({id: 'thermal:electrum_dust_2'})
        event.remove({id: 'thermal:fire_charge/electrum_ingot_2'})
        event.remove({id: 'immersiveengineering:recycling/wire_electrum'})
        event.remove({id: 'immersiveengineering:crafting/wire_electrum'})
        event.remove({id: 'immersiveengineering:arcfurnace/alloy_electrum'})
        event.remove({id: 'immersiveengineering:alloysmelter/electrum'})

        event.remove({id: 'tconstruct:smeltery/casting/metal/electrum/block'})
        event.custom({
            "type": "tconstruct:casting_basin",
            "fluid": {
              "name": "tconstruct:molten_electrum",
              "amount": 1296
            },
            "result": "thermal:constantan_block",
            "cooling_time": 177
        })

        //Plates Recipes
        event.recipes.create.pressing('thermal:electrum_plate', '#forge:ingots/electrum')

        //Mekanism Crusher - 1 Electrum Ingot into 1 dust
        event.recipes.mekanism.crushing('thermal:electrum_dust', '#forge:ingots/electrum')

        //Electrum Block
        event.stonecutting('immersiveengineering:storage_electrum', 'thermal:electrum_block')

        //-----------------------------------------------------
        //Constantan Recipes
        //-----------------------------------------------------
        
        //Recipes removal
        event.remove({id: 'thermal:constantan_dust_2'})
        event.remove({id: 'thermal:fire_charge/constantan_ingot_2'})
        event.remove({id: 'immersiveengineering:arcfurnace/alloy_constantan'})
        event.remove({id: 'immersiveengineering:alloysmelter/constantan'})

        event.remove({id: 'tconstruct:smeltery/casting/metal/constantan/block'})
        event.custom({
            "type": "tconstruct:casting_basin",
            "fluid": {
              "name": "tconstruct:molten_constantan",
              "amount": 1296
            },
            "result": "thermal:constantan_block",
            "cooling_time": 192
        })

        //Plates Recipes
        event.recipes.create.pressing('thermal:constantan_plate', '#forge:ingots/constantan')

        //Mekanism Crusher - 1 Constantan Ingot into 1 dust
        event.recipes.mekanism.crushing('thermal:constantan_dust', '#forge:ingots/constantan')

        //Constantan Block
        event.stonecutting('immersiveengineering:storage_constantan', 'thermal:constantan_block')
        
        //-----------------------------------------------------
        //Bronze Recipes
        //-----------------------------------------------------

        //Recipes removal
        event.remove({id: 'thermal:bronze_dust_4'})
        event.remove({id: 'thermal:fire_charge/bronze_ingot_4'})
        event.remove({id: 'immersiveengineering:arcfurnace/alloy_bronze'})
        event.remove({id: 'immersiveengineering:alloysmelter/bronze'})

        event.remove({id: 'tconstruct:smeltery/casting/metal/bronze/block'})
        event.custom({
            "type": "tconstruct:casting_basin",
            "fluid": {
              "name": "tconstruct:molten_bronze",
              "amount": 1296
            },
            "result": "thermal:bronze_block",
            "cooling_time": 171
          })

        //Mekanism Crusher - 1 Bronze Ingot into 1 dust
        event.recipes.mekanism.crushing('thermal:bronze_dust', '#forge:ingots/bronze')

        //Bronze Block
        event.stonecutting('mekanism:block_bronze', 'thermal:bronze_block')

        //-----------------------------------------------------
        //Invar Recipes
        //-----------------------------------------------------

        //Recipes removal
        event.remove({id: 'thermal:invar_dust_3'})
        event.remove({id: 'thermal:fire_charge/invar_ingot_3'})
        event.remove({id: 'immersiveengineering:arcfurnace/alloy_invar'})
        event.remove({id: 'immersiveengineering:alloysmelter/invar'})

        //Plates Recipes
        event.recipes.create.pressing('thermal:invar_plate', '#forge:ingots/invar')

        //Mekanism Crusher - 1 Electrum Ingot into 1 dust
        event.recipes.mekanism.crushing('thermal:invar_dust', '#forge:ingots/invar')

        //Electrum Block
        event.stonecutting('immersiveengineering:storage_electrum', 'thermal:electrum_block')

        //-----------------------------------------------------
        //Tinker's Alloys
        //-----------------------------------------------------

        event.remove({id: 'immersiveengineering:arcfurnace/alloy_rose_gold'})
        event.remove({id: 'immersiveengineering:alloysmelter/rose_gold'})
        event.remove({id: 'immersiveengineering:arcfurnace/alloy_manyullyn'})
        event.remove({id: 'immersiveengineering:alloysmelter/manyullyn'})
        

        var removal = [
            //CreateA Wires
            'createaddition:copper_spool',
            'createaddition:gold_spool',
            'createaddition:iron_spool',
            'createaddition:connector',

            //Multiservo Press
            'thermal:machine_press',

            //Iron Dust
            'immersiveengineering:dust_iron',

            //Iron Plate
            'immersiveengineering:plate_iron',
            'create:iron_sheet',

            //Iron Rod
            'createaddition:iron_rod',

            //Gold Dust
            'immersiveengineering:dust_gold',

            //Gold Plate
            'immersiveengineering:plate_gold',

            //Copper Block
            'iceandfire:copper_block',
            'mekanism:block_copper',
            'create:copper_block',
            'immersiveengineering:storage_copper',
            'tconstruct:copper_block',
            
            //Copper Ingot
            'iceandfire:copper_ingot',
            'mekanism:ingot_copper',
            'create:copper_ingot',
            'immersiveengineering:ingot_copper',
            'tconstruct:copper_ingot',
            
            //Copper Dust
            'immersiveengineering:dust_copper',

            //Copper Nugget
            'immersiveengineering:nugget_copper',
            'mekanism:nugget_copper',
            'tconstruct:copper_nugget',

            //Copper Plate
            'create:copper_sheet',
            'immersiveengineering:plate_copper',

            //Tin Block
            'mekanism:block_tin',

            //Tin Ingot
            'mekanism:ingot_tin',

            //Tin Dust
            'mekanism:dust_tin',

            //Tin Nugget
            'mekanism:nugget_tin',

            //Lead Block
            'mekanism:block_lead',
            'immersiveengineering:storage_lead',

            //Lead Ingot
            'immersiveengineering:ingot_lead',
            'mekanism:ingot_lead',

            //Lead Dust
            'immersiveengineering:dust_lead',

            //Lead Nugget
            'immersiveengineering:nugget_lead',
            'mekanism:nugget_lead',

            //Lead Plate
            'immersiveengineering:plate_lead',

            //Silver Block
            'immersiveengineering:storage_silver',
            'iceandfire:silver_block',

            //Silver Ingot
            'immersiveengineering:ingot_silver',
            'iceandfire:silver_ingot',

            //Silver Nugget
            'immersiveengineering:nugget_silver',

            //Silver Dust
            'immersiveengineering:dust_silver',

            //Nickel Block
            'immersiveengineering:storage_nickel',

            //Silver Plate
            'immersiveengineering:plate_silver',

            //Nickel Ingot
            'immersiveengineering:ingot_nickel',

            //Nickel Nugget
            'immersiveengineering:nugget_nickel',

            //Nickel Dust
            'immersiveengineering:dust_nickel',

            //Nickel Plate
            'immersiveengineering:plate_nickel',

            //Uranium Block
            'immersiveengineering:storage_uranium',

            //Uranium Ingot
            'immersiveengineering:ingot_uranium',

            //Uranium Nugget
            'immersiveengineering:nugget_uranium',

            //Uranium Dust
            'immersiveengineering:dust_uranium',

            //Steel Block
            'immersiveengineering:storage_steel',

            //Steel Ingot
            'immersiveengineering:ingot_steel',

            //Steel Nugget
            'immersiveengineering:nugget_steel',

            //Steel Dust
            'immersiveengineering:dust_steel',

            //Electrum Block
            'immersiveengineering:storage_electrum',

            //Electrum Ingot
            'immersiveengineering:ingot_electrum',

            //Electrum Dust
            'immersiveengineering:dust_electrum',

            //Electrum Plate
            'immersiveengineering:plate_electrum',

            //Electrum Nugget
            'immersiveengineering:nugget_electrum',

            //Constantan Block
            'immersiveengineering:ingot_constantan',

            //Constantan Ingot
            'immersiveengineering:ingot_constantan',

            //Constantan Dust
            'immersiveengineering:dust_constantan',

            //Constantan Nugget
            'immersiveengineering:nugget_constantan',

            //Constantan Plate
            'immersiveengineering:plate_constantan',

            //Bronze Block
            'mekanism:block_bronze',

            //Bronze Ingot
            'mekanism:ingot_bronze',

            //Bronze Dust
            'mekanism:dust_bronze',

            //Bronze Nugget
            'mekanism:nugget_bronze'
        ];

        removal.forEach((removal) => {
            event.remove({ output: removal });
       });
   
});

events.listen('item.tags', function (event) {

        //Rusty Iron
        event.get('forge:nuggets/iron').remove('dustrial_decor:rusty_iron_nugget')
        event.get('forge:ingots/iron').remove('dustrial_decor:rusty_iron_ingot')

        //Copper Wire
        event.get('forge:wires').remove('createaddition:copper_wire')
        event.get('forge:wires/copper').remove('createaddition:copper_wire')

        //Iron Dust
        event.get('forge:dusts/iron').removeAll()
        event.get('forge:dusts/iron').add('thermal:iron_dust')
        event.get('forge:dusts').remove('mekanism:dust_iron')
        event.get('forge:dusts').remove('immersiveengineering:dust_iron')
        event.get('forge:dusts').remove('bloodmagic:ironsand')

        //Iron Plate
        event.get('forge:plates/iron').remove('bloodmagic:ironsand')
        event.get('forge:plates/iron').remove('create:iron_sheet')
        event.get('forge:plates').remove('bloodmagic:ironsand')
        event.get('forge:plates').remove('create:iron_sheet')

        //Gold Dust
        event.get('forge:dusts/gold').removeAll()
        event.get('forge:dusts/gold').add('thermal:gold_dust')
        event.get('forge:dusts').remove('bloodmagic:goldsand')
        event.get('forge:dusts').remove('mekanism:dust_gold')
        event.get('forge:dusts').remove('immersiveengineering:dust_gold')

        //Gold Plate
        event.get('forge:plates/gold').remove('immersiveengineering:plate_gold')
        event.get('forge:plates/gold').remove('create:golden_sheet')
        event.get('forge:plates').remove('immersiveengineering:plate_gold')
        event.get('forge:plates').remove('create:golden_sheet')

        //Copper Ingot
        event.get('forge:ingots/copper').removeAll()
        event.get('forge:ingots/copper').add('thermal:copper_ingot')
        event.get('forge:ingots').remove('iceandfire:copper_ingot')
        event.get('forge:ingots').remove('create:copper_ingot')
        event.get('forge:ingots').remove('immersiveengineering:ingot_copper')
        event.get('forge:ingots').remove('mekanism:ingot_copper')
        event.get('forge:ingots').remove('tconstruct:copper_ingot')

        //Copper Dust
        event.get('forge:dusts/copper').removeAll()
        event.get('forge:dusts/copper').add('thermal:copper_dust')
        event.get('forge:dusts').remove('mekanism:dust_copper')
        event.get('forge:dusts').remove('immersiveengineering:dust_copper')

        //Copper Nugget
        event.get('forge:nuggets/copper').removeAll()
        event.get('forge:nuggets/copper').add('thermal:copper_nugget')
        event.get('forge:nuggets').remove('iceandfire:copper_nugget')
        event.get('forge:nuggets').remove('mekanism:nugget_copper')
        event.get('forge:nuggets').remove('create:copper_nugget')
        event.get('forge:nuggets').remove('immersiveengineering:nugget_copper')
        event.get('forge:nuggets').remove('tconstruct:copper_nugget')

        //Copper Plate
        event.get('forge:plates/copper').removeAll()
        event.get('forge:plates/copper').add('thermal:copper_plate')
        event.get('#forge:plates').remove('immersiveengineering:plate_copper')
        event.get('#forge:plates').remove('create:copper_sheet')

        //Tin Ingot
        event.get('forge:ingots/tin').remove('mekanism:ingot_tin')
        event.get('forge:ingots').remove('mekanism:ingot_tin')

        //Tin Dust
        event.get('forge:dusts/tin').remove('mekanism:dust_tin')
        event.get('forge:dusts').remove('mekanism:dust_tin')

        //Tin Nugget
        event.get('forge:nuggets/tin').remove('mekanism:nugget_tin')
        event.get('forge:nuggets').remove('mekanism:nugget_tin')

        //Lead Ingot
        event.get('forge:ingots/lead').removeAll()
        event.get('forge:ingots/lead').add('thermal:lead_ingot')
        event.get('forge:ingots').remove('immersiveengineering:ingot_lead')
        event.get('forge:ingots').remove('mekanism:ingot_lead')

        //Lead Dust
        event.get('forge:dusts/lead').removeAll()
        event.get('forge:dusts/lead').add('thermal:lead_dust')
        event.get('forge:dusts').remove('mekanism:dust_lead')
        event.get('forge:dusts').remove('immersiveengineering:dust_lead')
        
        //Lead Nugget
        event.get('forge:nuggets/lead').removeAll()
        event.get('forge:nuggets/lead').add('thermal:lead_nugget')
        event.get('forge:nuggets').remove('mekanism:nugget_lead')
        event.get('forge:nuggets').remove('immersiveengineering:nugget_lead')

        //Lead Plate
        event.get('forge:plates/lead').remove('immersiveengineering:plate_lead')
        event.get('forge:plates').remove('immersiveengineering:plate_lead')

        //Silver Ingot
        event.get('forge:ingots/silver').removeAll()
        event.get('forge:ingots/silver').add('thermal:silver_ingot')
        event.get('forge:ingots').remove('immersiveengineering:ingot_silver')
        event.get('forge:ingots').remove('iceandfire:silver_ingot')

        //Silver Dust
        event.get('forge:dusts/silver').remove('immersiveengineering:dust_silver')
        event.get('forge:dusts').remove('immersiveengineering:dust_silver')

        //Silver Nugget
        event.get('forge:nuggets/silver').removeAll()
        event.get('forge:nuggets/silver').add('thermal:silver_nugget')
        event.get('forge:nuggets').remove('iceandfire:silver_nugget')
        event.get('forge:nuggets').remove('immersiveengineering:nugget_silver')

        //Silver Plate
        event.get('forge:plates/silver').remove('immersiveengineering:plate_silver')
        event.get('forge:plates').remove('immersiveengineering:plate_silver')
        
        //Nickel Ingot
        event.get('forge:ingots/nickel').remove('immersiveengineering:ingot_nickel')
        event.get('forge:ingots').remove('immersiveengineering:ingot_nickel')
    
        //Nickel Dust
        event.get('forge:dusts/nickel').remove('immersiveengineering:dust_nickel')
        event.get('forge:dusts').remove('immersiveengineering:dust_nickel')

        //Nickel Nugget
        event.get('forge:nuggets/nickel').remove('immersiveengineering:nugget_nickel')
        event.get('forge:nuggets').remove('immersiveengineering:nugget_nickel')

        //Nickel Plate
        event.get('forge:plates/nickel').remove('immersiveengineering:plate_nickel')
        event.get('forge:plates').remove('immersiveengineering:plate_nickel')

        //Uranium Ingot
        event.get('forge:ingots/uranium').remove('immersiveengineering:ingot_uranium')
        event.get('forge:ingots').remove('immersiveengineering:ingot_uranium')

        //Uranium Nugget
        event.get('forge:nuggets/uranium').remove('immersiveengineering:nugget_uranium')
        event.get('forge:nuggets').remove('immersiveengineering:nugget_uranium')

        //Uranium Dust
        event.get('forge:dusts/uranium').remove('immersiveengineering:dust_uranium')
        event.get('forge:dusts').remove('immersiveengineering:dust_uranium')

        //Steel Ingot
        event.get('forge:ingots/steel').remove('immersiveengineering:ingot_steel')
        event.get('forge:ingots').remove('immersiveengineering:ingot_steel')

        //Steel Nugget
        event.get('forge:nuggets/steel').remove('immersiveengineering:nugget_steel')
        event.get('forge:nuggets').remove('immersiveengineering:nugget_steel')

        //Steel Dust
        event.get('forge:dusts/steel').remove('immersiveengineering:dust_steel')
        event.get('forge:dusts').remove('immersiveengineering:dust_steel')

        //Electrum Ingot
        event.get('forge:ingots/electrum').remove('immersiveengineering:ingot_electrum')
        event.get('forge:ingots').remove('immersiveengineering:ingot_electrum')

        //Electrum Dust
        event.get('forge:dusts/electrum').remove('immersiveengineering:dust_electrum')
        event.get('forge:dusts').remove('immersiveengineering:dust_electrum')

        //Electrum Plate
        event.get('forge:plates/electrum').remove('immersiveengineering:plate_electrum')
        event.get('forge:plates').remove('immersiveengineering:plate_electrum')

        //Electrum Nugget
        event.get('forge:nuggets/electrum').remove('immersiveengineering:nugget_electrum')
        event.get('forge:nuggets').remove('immersiveengineering:nugget_electrum')

        //Constantan Ingot
        event.get('forge:ingots/constantan').remove('immersiveengineering:ingot_constantan')
        event.get('forge:ingots').remove('immersiveengineering:ingot_constantan')

        //Constantan Dust
        event.get('forge:dusts/constantan').remove('immersiveengineering:dust_constantan')
        event.get('forge:dusts').remove('immersiveengineering:dust_constantan')

        //Constantan Plate
        event.get('forge:plates/constantan').remove('immersiveengineering:plate_constantan')
        event.get('forge:plates').remove('immersiveengineering:plate_constantan')

        //Constantan Nugget
        event.get('forge:nuggets/constantan').remove('immersiveengineering:nugget_constantan')
        event.get('forge:nuggets').remove('immersiveengineering:nugget_constantan')

        //Bronze Ingot
        event.get('forge:ingots/bronze').remove('mekanism:ingot_bronze')
        event.get('forge:ingots').remove('mekanism:ingot_bronze')

        //Bronze Dust
        event.get('forge:dusts/bronze').remove('mekanism:dust_bronze')
        event.get('forge:dusts').remove('mekanism:dust_bronze')
        
        //Bronze Nugget
        event.get('forge:nuggets/bronze').remove('mekanism:nugget_bronze')
        event.get('forge:nuggets').remove('mekanism:nugget_bronze')
});
