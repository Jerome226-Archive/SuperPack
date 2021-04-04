//priority: 1200

onEvent('recipes', event => {

    function unifyOre(nameUnify, oreItem, ingotItem, dustItem, dirtyDustItem, blockItem, nuggetItem, gearItem, plateItem, crushedItem, rodItem, wireItem, moltenFluid, castingBlockTime, castingIngotTime, castingNuggetTime, crusherBonus) {

    //-----------------------------------------------------
    //unifyOre Ingot
    //-----------------------------------------------------

    if (ingotItem !== null) {

    //Crafting
    event.remove({ output: `#forge:ingots/${nameUnify}`, type: 'minecraft:crafting_shapeless'});
    event.shapeless(item.of(ingotItem, 9), [blockItem])

    event.remove({ output: `#forge:ingots/${nameUnify}`, type: 'minecraft:crafting_shaped'});
    event.shaped(ingotItem, ['III', 'III', 'III'], {
        I: nuggetItem
    })

    //Smelting Remove
    event.remove({ output: `#forge:ingots/${nameUnify}`, type: 'minecraft:smelting'});
    event.remove({ output: `#forge:ingots/${nameUnify}`, type: 'minecraft:blasting'});

    //Alloy Kiln Remove
    event.remove({id: `immersiveengineering:alloysmelter/${nameUnify}`})

    //Arc Furnace Remove
    event.remove({id: `immersiveengineering:arcfurnace/alloy_${nameUnify}`})

    //Thermal Induction Smelter
    event.remove({id: `thermal:machine/smelter/smelter_alloy_${nameUnify}`})


    }

    if (oreItem !== null && ingotItem !== null) {

    event.smelting(ingotItem, oreItem).xp(0.5)
    event.recipes.minecraft.blasting(ingotItem, oreItem).xp(0.5)

    }

    if (crushedItem !== null && ingotItem !== null) {

    event.smelting(ingotItem, crushedItem).xp(0.1)
    event.recipes.minecraft.blasting(ingotItem, crushedItem).xp(0.1)

    }

    if (dustItem !== null && ingotItem !== null) {

    event.smelting(ingotItem, dustItem).xp(0.35)
    event.recipes.minecraft.blasting(ingotItem, dustItem).xp(0.35)

    }

    if (moltenFluid !== null && ingotItem !== null) {

    //Tinker's Casting
    event.remove({id: `tconstruct:smeltery/casting/metal/${nameUnify}/ingot_gold_cast`})
    event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
          "item": "tconstruct:ingot_cast"
        },
        "fluid": {
          "name": moltenFluid,
          "amount": 144
        },
        "result": ingotItem,
        "cooling_time": castingIngotTime
    })

    event.remove({id: `tconstruct:smeltery/casting/metal/${nameUnify}/ingot_sand_cast`})
    event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
          "tag": "tconstruct:casts/single_use/ingot"
        },
        "cast_consumed": true,
        "fluid": {
          "name": moltenFluid,
          "amount": 144
        },
        "result": ingotItem,
        "cooling_time": castingIngotTime
    })

    }

    //-----------------------------------------------------
    //unifyOre Nugget
    //-----------------------------------------------------

    if (nuggetItem !== null) {
    
    //Crafting
    event.remove({ output: `#forge:nuggets/${nameUnify}`, type: 'minecraft:crafting_shapeless'});
    event.shapeless(item.of(nuggetItem, 9), [ingotItem])

    }

    if (nuggetItem !== null && crushedItem !== null) {

    //Create Washing
    event.remove({id: `create:splashing/crushed_${nameUnify}_ore`})
    event.remove({id: `create:splashing/thermal/crushed_${nameUnify}_ore`})
    event.remove({id: `create:splashing/mekanism/crushed_${nameUnify}_ore`})
    event.remove({id: `create:splashing/immersiveengineering/crushed_${nameUnify}_ore`})

    event.recipes.create.splashing([item.of(nuggetItem, 10), Item.of(nuggetItem, 5).withChance(0.5)], crushedItem)

    }

    if (moltenFluid !== null && nuggetItem !== null) {

    //Tinker's Casting
    event.remove({id: `tconstruct:smeltery/casting/metal/${nameUnify}/nugget_gold_cast`})
    event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
          "item": "tconstruct:nugget_cast"
        },
        "fluid": {
          "name": moltenFluid,
          "amount": 16
        },
        "result": nuggetItem,
        "cooling_time": castingNuggetTime
    })

    event.remove({id: `tconstruct:smeltery/casting/metal/${nameUnify}/nugget_sand_cast`})
    event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
          "tag": "tconstruct:casts/single_use/nugget"
        },
        "cast_consumed": true,
        "fluid": {
          "name": moltenFluid,
          "amount": 16
        },
        "result": nuggetItem,
        "cooling_time": castingNuggetTime
    })

    }

    //Manual Recipe
    event.replaceOutput({}, 'iceandfire:copper_nugget', 'thermal:copper_nugget')
    event.replaceOutput({}, 'iceandfire:silver_nugget', 'thermal:silver_nugget')

    //-----------------------------------------------------
    //unifyOre Block
    //-----------------------------------------------------

    if (blockItem !== null) {

    //Crafting
    event.remove({ output: `#forge:storage_blocks/${nameUnify}`, type: 'minecraft:crafting_shaped'});
    event.shaped(blockItem, ['III', 'III', 'III'], {
        I: ingotItem
    })

    }

    if (moltenFluid !== null && blockItem !== null) {

    //Tinker's Casting
    event.remove({id: `tconstruct:smeltery/casting/metal/${nameUnify}/block`})
    event.custom({
        "type": "tconstruct:casting_basin",
        "fluid": {
          "name": moltenFluid,
          "amount": 1296
        },
        "result": blockItem,
        "cooling_time": castingBlockTime
    })

    }

    //-----------------------------------------------------
    //unifyOre Dust & Crushed Ore
    //-----------------------------------------------------
    
    if (crushedItem !== null){

    //Create Milling Remove
    event.remove({ output: crushedItem, type: 'create:milling'});

    //Create Crushing Remove
    event.remove({ output: crushedItem, type: 'create:crushing'});

    }

    if (dustItem !== null) {

    //Crafting
    event.remove({id: `immersiveengineering:crafting/hammercrushing_${nameUnify}`})
    event.remove({ output: `#forge:dusts/${nameUnify}`, type: 'minecraft:crafting_shapeless'});

    //Thermal Pulverizer - Ingot into Dust
    event.remove({ output: `#forge:dusts/${nameUnify}`, type: 'thermal:pulverizer'});
    event.recipes.thermal.pulverizer(dustItem, ingotItem)

    //Mekanism Crusher - 1 Ingot into Dust
    event.remove({ output: `#forge:dusts/${nameUnify}`, type: 'mekanism:crushing'});
    event.recipes.mekanism.crushing(dustItem, ingotItem)

    //IE Crusher - Ingot into Dust
    event.remove({ output: `#forge:dusts/${nameUnify}`, type: 'immersiveengineering:crusher'});
    event.recipes.immersiveengineering.crusher(dustItem, ingotItem)

    //Create Crusher
    event.remove({ output: `#forge:dusts/${nameUnify}`, type: 'create:crushing'});

    //Create Milling - 1 Ingot into Dust
    event.remove({ output: `#forge:dusts/${nameUnify}`, type: 'create:milling'});
    event.recipes.create.milling(dustItem, ingotItem)

    //Mekanism Enrichment Chamber
    event.remove({ output: `#forge:dusts/${nameUnify}`, type: 'mekanism:enriching'});

    }

    if (dirtyDustItem !== null) {

    //Mekanism Enrichment Chamber - 1 Dirty Dust into Dust
    event.recipes.mekanism.enriching(dustItem, dirtyDustItem)

    }

    if (oreItem !== null) {

    //Thermal Pulverizer
    event.recipes.thermal.pulverizer(Item.of(dustItem, 2), oreItem)

    //Mekanism Enrichment Chamber
    event.recipes.mekanism.enriching(Item.of(dustItem, 2), oreItem)

    //IE Crusher
    event.recipes.immersiveengineering.crusher(Item.of(dustItem, 2), oreItem)

    }

    if (oreItem !== null && crushedItem !== null) {

    //Create Crusher
    event.recipes.create.crushing([Item.of(crushedItem), Item.of(dustItem).withChance(0.30), Item.of('minecraft:cobblestone').withChance(0.35)], oreItem, 350)

    //IE Crusher
    event.recipes.immersiveengineering.crusher(Item.of(dustItem, 2), crushedItem, Item.of(crusherBonus).withChance(0.15))

    }

    //Manual Recipe
    event.remove({id: 'thermal:compat/create/pulverizer_create__zinc_ore'})

    //-----------------------------------------------------
    //unifyOre Plate
    //-----------------------------------------------------

    if (plateItem !== null) {

    event.remove({ output:  `#forge:plates/${nameUnify}`});
    
    //IE Metal Press
    event.remove({ output: `#forge:plates/${nameUnify}`, type: 'immersiveengineering:metal_press'});
    event.recipes.immersiveengineering.metal_press(plateItem, ingotItem, 'immersiveengineering:mold_plate')

    //Create Press
    event.remove({ output: `#forge:plates/${nameUnify}`, type: 'create:pressing'});
    event.recipes.create.pressing(plateItem, ingotItem)

    }

    //-----------------------------------------------------
    //unifyOre Gear
    //-----------------------------------------------------

    if (gearItem !== null) {

    event.remove({ output: `#forge:gears/${nameUnify}`});

    //IE Metal Press
    event.remove({ output: `#forge:gears/${nameUnify}`, type: 'immersiveengineering:metal_press'});
    event.recipes.immersiveengineering.metal_press(gearItem, Item.of(ingotItem, 4), 'immersiveengineering:mold_gear')

    }

    //-----------------------------------------------------
    //unifyOre Rod
    //-----------------------------------------------------

    if (rodItem !== null) {
    
    event.remove({ output: `#forge:rods/${nameUnify}`});

    //IE Metal Press
    event.remove({ output: `#forge:rods/${nameUnify}`, type: 'immersiveengineering:metal_press'});
    event.recipes.immersiveengineering.metal_press(Item.of(rodItem, 2), ingotItem, 'immersiveengineering:mold_rod')

    //Create Additions Rolling
    event.remove({id: `createaddition:rolling/${nameUnify}_ingot`})
    event.custom({
        "type":"createaddition:rolling",
        "input": {
              "item": ingotItem
        },
        "result": {
            "item":  rodItem,
            "count": 2
        }
    })

    }

    //-----------------------------------------------------
    //unifyOre Wire
    //-----------------------------------------------------

    if (wireItem !== null) {

    event.remove({ output: `#forge:wires/${nameUnify}`});

    //IE Metal Press
    event.remove({ output: `#forge:wires/${nameUnify}`, type: 'immersiveengineering:metal_press'});
    event.recipes.immersiveengineering.metal_press(Item.of(wireItem, 2), ingotItem, 'immersiveengineering:mold_wire')

    //Create Additions Rolling
    event.remove({id: `createaddition:rolling/${nameUnify}_plate`})
    event.custom({
        "type":"createaddition:rolling",
        "input": {
              "item": plateItem
        },
        "result": {
            "item":  wireItem,
            "count": 2
        }
    })

    }

    }

    unifyOre('iron', 'minecraft:iron_ore', 'minecraft:iron_ingot', 'thermal:iron_dust', 'mekanism:dirty_dust_iron', 'minecraft:iron_block', 'minecraft:iron_nugget', 'thermal:iron_gear', 'thermal:iron_plate', 'create:crushed_iron_ore', 'immersiveengineering:stick_iron', 'createaddition:iron_wire', 'tconstruct:molten_iron', 180, 60, 20, 'thermal:nickel_dust');
    unifyOre('gold', 'minecraft:gold_ore', 'minecraft:gold_ingot', 'thermal:gold_dust', 'mekanism:dirty_dust_gold', 'minecraft:gold_block', 'minecraft:gold_nugget', 'thermal:gold_gear', 'thermal:gold_plate', 'create:crushed_gold_ore', 'createaddition:gold_rod', 'createaddition:gold_wire', 'tconstruct:molten_gold', 171, 57, 19, 'ftbquests:missing_item');    
    unifyOre('copper', 'thermal:copper_ore', 'thermal:copper_ingot', 'thermal:copper_dust', 'mekanism:dirty_dust_copper', 'thermal:copper_block', 'thermal:copper_nugget', 'thermal:copper_gear', 'thermal:copper_plate', 'create:crushed_copper_ore', 'createaddition:copper_rod', 'immersiveengineering:wire_copper', 'tconstruct:molten_copper', 150, 50, 17, 'thermal:gold_dust');
    unifyOre('tin', 'thermal:tin_ore', 'thermal:tin_ingot', 'thermal:tin_dust', 'mekanism:dirty_dust_tin', 'thermal:tin_block', 'thermal:tin_nugget', 'thermal:tin_gear', 'thermal:tin_plate', 'create:crushed_tin_ore', null, null, 'tconstruct:molten_tin', 117, 39, 13, 'thermal:iron_dust');
    unifyOre('lead', 'thermal:lead_ore', 'thermal:lead_ingot', 'thermal:lead_dust', 'mekanism:dirty_dust_lead', 'thermal:lead_block', 'thermal:lead_nugget', 'thermal:lead_gear', 'thermal:lead_plate', 'create:crushed_lead_ore', null, null, 'tconstruct:molten_lead', 130, 43, 14, 'thermal:silver_dust');
    unifyOre('silver', 'thermal:silver_ore', 'thermal:silver_ingot', 'thermal:silver_dust', null, 'thermal:silver_block', 'thermal:silver_nugget', 'thermal:silver_gear', 'thermal:silver_plate', 'create:crushed_silver_ore', null, null, 'tconstruct:molten_silver', 179, 60, 20, 'thermal:lead_dust');
    unifyOre('nickel', 'thermal:nickel_ore', 'thermal:nickel_ingot', 'thermal:nickel_dust', null, 'thermal:nickel_block', 'thermal:nickel_nugget', 'thermal:nickel_gear', 'thermal:nickel_plate', 'create:crushed_nickel_ore', null, null, 'tconstruct:molten_nickel', 194, 65, 22, 'thermal:iron_dust');
    unifyOre('uranium', 'mekanism:uranium_ore', 'mekanism:ingot_uranium', 'mekanism:dust_uranium', 'mekanism:dirty_dust_uranium', 'mekanism:block_uranium', 'mekanism:nugget_uranium', null, 'immersiveengineering:plate_uranium', 'create:crushed_uranium_ore', null, null, 'tconstruct:molten_uranium', 183, 61, 20, 'thermal:iron_dust');
    unifyOre('aluminum', 'immersiveengineering:ore_aluminum', 'immersiveengineering:ingot_aluminum', 'immersiveengineering:dust_aluminum', null, 'immersiveengineering:storage_aluminum', 'immersiveengineering:nugget_aluminum', null, 'immersiveengineering:plate_aluminum', 'create:crushed_aluminum_ore', 'immersiveengineering:stick_aluminum', 'immersiveengineering:wire_aluminum', 'tconstruct:molten_aluminum', 141, 47, 16, 'thermal:iron_dust');
    unifyOre('osmium', 'mekanism:osmium_ore', 'mekanism:ingot_osmium', 'mekanism:dust_osmium', 'mekanism:dirty_dust_osmium', 'mekanism:block_osmium', 'mekanism:nugget_osmium', null, null, 'create:crushed_osmium_ore', null, null, 'tconstruct:molten_osmium', 233, 78, 26, 'ftbquests:missing_item');
    unifyOre('zinc', 'create:zinc_ore', 'create:zinc_ingot', 'ftbquests:missing_item', null, 'create:zinc_block', 'create:zinc_nugget', null, 'createaddition:zinc_sheet', 'create:crushed_zinc_ore', null, null, 'tconstruct:molten_zinc', 141, 47, 16, 'ftbquests:missing_item');
    unifyOre('electrum', null, 'thermal:electrum_ingot', 'thermal:electrum_dust', null, 'thermal:electrum_block', 'thermal:electrum_nugget', 'thermal:electrum_gear', 'thermal:electrum_plate', null, null, 'immersiveengineering:wire_electrum', 'tconstruct:molten_electrum', 177, 59, 20, null);
    unifyOre('constantan', null, 'thermal:constantan_ingot', 'thermal:constantan_dust', null, 'thermal:constantan_block', 'thermal:constantan_nugget', 'thermal:constantan_gear', 'thermal:constantan_plate', null, null, null, 'tconstruct:molten_constantan', 192, 64, 21, null);
    unifyOre('invar', null, 'thermal:invar_ingot', 'thermal:invar_dust', null, 'thermal:invar_block', 'thermal:invar_nugget', 'thermal:invar_gear', 'thermal:invar_plate', null, null, null, 'tconstruct:molten_invar', 190, 63, 21, null);
    unifyOre('bronze', null, 'thermal:bronze_ingot', 'thermal:bronze_dust', null, 'thermal:bronze_block', 'thermal:bronze_nugget', 'thermal:bronze_gear', 'thermal:bronze_plate', null, null, null, 'tconstruct:molten_bronze', 171, 57, 19, null);
    unifyOre('steel', null, 'mekanism:ingot_steel', 'mekanism:dust_steel', null, 'mekanism:block_steel', 'mekanism:nugget_steel', null, 'immersiveengineering:plate_steel', null, 'immersiveengineering:stick_steel', 'immersiveengineering:wire_steel', 'tconstruct:molten_steel', 217, 72, 24, null);
    unifyOre('enderium', null, 'thermal:enderium_ingot', 'thermal:enderium_dust', null, 'thermal:enderium_block', 'thermal:enderium_nugget', 'thermal:enderium_gear', 'thermal:enderium_plate', null, null, null, null, 0, 0, 0, null);
    unifyOre('signalum', null, 'thermal:signalum_ingot', 'thermal:signalum_dust', null, 'thermal:signalum_block', 'thermal:signalum_nugget', 'thermal:signalum_gear', 'thermal:signalum_plate', null, null, null, null, 0, 0, 0, null);
    unifyOre('lumium', null, 'thermal:lumium_ingot', 'thermal:lumium_dust', null, 'thermal:lumium_block', 'thermal:lumium_nugget', 'thermal:lumium_gear', 'thermal:lumium_plate', null, null, null, null, 0, 0, 0, null);

});
