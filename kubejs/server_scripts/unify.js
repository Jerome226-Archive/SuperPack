//priority: 1200

onEvent('recipes', event => {

  function unifyOre(isGem, nameUnify, oreItem, ingotItem, dustItem, dirtyDustItem, blockItem, nuggetItem, coinItem, gearItem, plateItem, crushedItem, rodItem, wireItem, moltenFluid, castingBlockTime, castingIngotTime, castingNuggetTime, crusherBonus, oreDoublingOutput, oreDoublingBonus) {
  
  //-----------------------------------------------------
  //unifyOre Ingot
  //-----------------------------------------------------

  if (ingotItem !== null && isGem == false) {
  
    //Crafting Remove
    event.remove({ output: `#forge:ingots/${nameUnify}`, type: 'minecraft:crafting_shapeless'});
    event.remove({ output: `#forge:ingots/${nameUnify}`, type: 'minecraft:crafting_shaped'});
  
    //Smelting Remove
    event.remove({ output: `#forge:ingots/${nameUnify}`, type: 'minecraft:smelting'});
    event.remove({ output: `#forge:ingots/${nameUnify}`, type: 'minecraft:blasting'});
  
    //Alloy Kiln Remove
    event.remove({id: `immersiveengineering:alloysmelter/${nameUnify}`})
  
    //Arc Furnace Remove
    event.remove({id: `immersiveengineering:arcfurnace/alloy_${nameUnify}`})
  
    //Thermal Induction Smelter
    event.remove({id: `thermal:machine/smelter/smelter_alloy_${nameUnify}`})
    event.remove({id: `thermal:compat/create/smelter_create_alloy_${nameUnify}`})
    event.remove({id: `thermal:compat/tconstruct/smelter_alloy_tconstruct_${nameUnify}_ingot`})
  
  }

  if (ingotItem !== null && isGem == true) {

    event.remove({id: `mekanism:processing/${nameUnify}/from_dust`})

    //Crafting Remove
    event.remove({ output: `#forge:gems/${nameUnify}`, type: 'minecraft:crafting_shapeless'});
    event.remove({ output: `#minecraft:${nameUnify}s`, type: 'minecraft:crafting_shapeless'});
    event.remove({ output: `#forge:${nameUnify}`, type: 'minecraft:crafting_shapeless'});
    event.remove({ output: `#forge:gems/${nameUnify}`, type: 'minecraft:crafting_shaped'});
    event.remove({ output: `#minecraft:${nameUnify}s`, type: 'minecraft:crafting_shaped'});
    event.remove({ output: `#forge:${nameUnify}`, type: 'minecraft:crafting_shaped'});

    //Smelting Remove
    event.remove({ output: `#forge:gems/${nameUnify}`, type: 'minecraft:smelting'});
    event.remove({ output: `#minecraft:${nameUnify}s`, type: 'minecraft:smelting'});
    event.remove({ output: `#forge:${nameUnify}`, type: 'minecraft:smelting'});
    event.remove({ output: `#forge:gems/${nameUnify}`, type: 'minecraft:blasting'});
    event.remove({ output: `#minecraft:${nameUnify}s`, type: 'minecraft:blasting'});
    event.remove({ output: `#forge:${nameUnify}`, type: 'minecraft:blasting'});

  }

  if (ingotItem !== null && blockItem !== null) {

  event.shapeless(item.of(ingotItem, 9), [blockItem])

  }

  if (ingotItem !== null && nuggetItem !== null) {

  event.shaped(ingotItem, ['III', 'III', 'III'], {
      I: nuggetItem
  })

  }

  if (oreItem !== null && ingotItem !== null) {

  event.smelting(ingotItem, oreItem).xp(0.5)
  event.recipes.minecraft.blasting(ingotItem, oreItem).xp(0.5)

  }

  if (crushedItem !== null && ingotItem !== null) {

  event.smelting(ingotItem, crushedItem).xp(0.1)
  event.recipes.minecraft.blasting(ingotItem, crushedItem).xp(0.1)

  }

  if (dustItem !== null && ingotItem !== null && isGem == false) {

  event.smelting(ingotItem, dustItem).xp(0.35)
  event.recipes.minecraft.blasting(ingotItem, dustItem).xp(0.35)

  }

  if (moltenFluid !== null && ingotItem !== null && isGem == false) {

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

  //Manual Recipe
  event.remove({id: `thermal:compat/tconstruct/smelter_alloy_tconstruct_pigiron_ingot`}) //Typo on Thermal side. Fixed on the Next Release.
  event.remove({id: `thermal:compat/tconstruct/smelter_alloy_tconstruct_soulsteel_ingot`}) //Secret Ingot. Probably removed in next release.

  //-----------------------------------------------------
  //unifyOre Nugget
  //-----------------------------------------------------

  if (nuggetItem !== null) {
  
    //Crafting
    event.remove({ output: `#forge:nuggets/${nameUnify}`, type: 'minecraft:crafting_shapeless'});
  
  }

  if (nuggetItem !== null && ingotItem !== null) {

    event.shapeless(item.of(nuggetItem, 9), [ingotItem])

  }

  if (nuggetItem !== null && crushedItem !== null) {

  //Create Washing
  event.remove({id: `create:splashing/crushed_${nameUnify}_ore`})
  event.remove({id: `create:splashing/thermal/crushed_${nameUnify}_ore`})
  event.remove({id: `create:splashing/iceandfire/crushed_${nameUnify}_ore`})
  event.remove({id: `create:splashing/mekanism/crushed_${nameUnify}_ore`})
  event.remove({id: `create:splashing/immersiveengineering/crushed_${nameUnify}_ore`})

  event.recipes.create.splashing([item.of(nuggetItem, 10), Item.of(nuggetItem, 5).withChance(0.5)], crushedItem)

  }

  if (moltenFluid !== null && nuggetItem !== null && isGem == false) {

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
  event.remove({ output: `#forge:storage_blocks/${nameUnify}`, type: 'minecraft:crafting_shapeless'});
  event.shaped(blockItem, ['III', 'III', 'III'], {
      I: ingotItem
  })

  }

  if (moltenFluid !== null && blockItem !== null && isGem == false) {

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
  event.remove({ output: `#forge:gems/${nameUnify}`, type: 'thermal:pulverizer'});
  event.remove({ output: `#minecraft:${nameUnify}s`, type: 'thermal:pulverizer'});
  event.recipes.thermal.pulverizer(dustItem, ingotItem).energy(4000)

  //Mekanism Crusher - 1 Ingot into Dust
  event.remove({ output: `#forge:dusts/${nameUnify}`, type: 'mekanism:crushing'});
  event.remove({ output: `#forge:gems/${nameUnify}`, type: 'mekanism:crushing'});
  event.remove({ output: `#minecraft:${nameUnify}s`, type: 'mekanism:crushing'});
  event.recipes.mekanism.crushing(dustItem, ingotItem)

  //IE Crusher - Ingot into Dust
  event.remove({ output: `#forge:dusts/${nameUnify}`, type: 'immersiveengineering:crusher'});
  event.remove({ output: `#forge:gems/${nameUnify}`, type: 'immersiveengineering:crusher'});
  event.remove({ output: `#minecraft:${nameUnify}s`, type: 'immersiveengineering:crusher'});
  event.recipes.immersiveengineering.crusher(dustItem, ingotItem)

  //Create Crusher
  event.remove({ output: `#forge:gems/${nameUnify}`, type: 'create:crushing'});
  event.remove({ output: `#forge:dusts/${nameUnify}`, type: 'create:crushing'});
  event.remove({ output: `#minecraft:${nameUnify}s`, type: 'create:crushing'});

  //Create Milling - 1 Ingot into Dust
  event.remove({ output: `#forge:dusts/${nameUnify}`, type: 'create:milling'});
  event.remove({ output: `#forge:gems/${nameUnify}`, type: 'create:milling'});
  event.remove({ output: `#minecraft:${nameUnify}s`, type: 'create:milling'});
  event.recipes.create.milling(dustItem, ingotItem)

  //Mekanism Enrichment Chamber
  event.remove({ output: `#forge:dusts/${nameUnify}`, type: 'mekanism:enriching'});
  event.remove({ output: `#forge:gems/${nameUnify}`, type: 'mekanism:enriching'});
  event.remove({ output: `#minecraft:${nameUnify}s`, type: 'mekanism:enriching'});

  }

  if (dirtyDustItem !== null && dustItem !== null && isGem == false) {

  //Mekanism Enrichment Chamber - 1 Dirty Dust into Dust
  event.recipes.mekanism.enriching(dustItem, dirtyDustItem)

  //Create Encased Fan
  event.recipes.create.splashing(dustItem, dirtyDustItem)

  }

  if (oreItem !== null && dustItem !== null && isGem == false) {

  //Thermal Pulverizer
  event.recipes.thermal.pulverizer(Item.of(dustItem, oreDoublingOutput), oreItem)

  //Mekanism Enrichment Chamber
  event.recipes.mekanism.enriching(Item.of(dustItem, oreDoublingOutput), oreItem)

  //IE Crusher
  event.recipes.immersiveengineering.crusher(Item.of(dustItem, oreDoublingOutput), oreItem)

  }

  if (oreItem !== null && ingotItem !== null && isGem == true && nameUnify !== 'charcoal') {

  //Thermal Pulverizer
  event.recipes.thermal.pulverizer(Item.of(ingotItem, oreDoublingOutput), oreItem)
  
  //Mekanism Enrichment Chamber
  event.recipes.mekanism.enriching(Item.of(ingotItem, oreDoublingOutput), oreItem)
  
  //IE Crusher
  event.recipes.immersiveengineering.crusher(Item.of(ingotItem, oreDoublingOutput), oreItem)

  //Create Crusher
  event.recipes.create.crushing([Item.of(ingotItem, oreDoublingOutput), Item.of(ingotItem, oreDoublingBonus).withChance(0.30), Item.of('minecraft:cobblestone').withChance(0.35)], oreItem, 350)
  
  }

  if (oreItem !== null && crushedItem !== null && oreItem !== null && isGem == false) {

  //Create Crusher
  event.recipes.create.crushing([Item.of(crushedItem), Item.of(dustItem).withChance(0.30), Item.of('minecraft:cobblestone').withChance(0.35)], oreItem, 350)

  //IE Crusher
  event.recipes.immersiveengineering.crusher(Item.of(dustItem, 2), crushedItem, Item.of(crusherBonus).withChance(0.15))

  }

  //Manual Recipe
  event.remove({id: 'thermal:compat/create/pulverizer_create_zinc_ore'})

  //-----------------------------------------------------
  //unifyOre Plate
  //-----------------------------------------------------

  if (plateItem !== null && isGem == false) {

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
          "count": 1
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
          "count": 1
      }
  })

  }

  }

  unifyOre(false, 'iron', 'minecraft:iron_ore', 'minecraft:iron_ingot', 'thermal:iron_dust', 'mekanism:dirty_dust_iron', 'minecraft:iron_block', 'minecraft:iron_nugget', 'thermal:iron_coin', 'thermal:iron_gear', 'thermal:iron_plate', 'create:crushed_iron_ore', 'immersiveengineering:stick_iron', 'createaddition:iron_wire', 'tconstruct:molten_iron', 180, 60, 20, 'thermal:nickel_dust', 2, null);
  unifyOre(false, 'gold', 'minecraft:gold_ore', 'minecraft:gold_ingot', 'thermal:gold_dust', 'mekanism:dirty_dust_gold', 'minecraft:gold_block', 'minecraft:gold_nugget', 'thermal:gold_coin', 'thermal:gold_gear', 'thermal:gold_plate', 'create:crushed_gold_ore', 'createaddition:gold_rod', 'createaddition:gold_wire', 'tconstruct:molten_gold', 171, 57, 19, 'superpackutils:platinum_dust', 2, null);    
  unifyOre(false, 'copper', 'thermal:copper_ore', 'thermal:copper_ingot', 'thermal:copper_dust', 'mekanism:dirty_dust_copper', 'thermal:copper_block', 'thermal:copper_nugget', 'thermal:copper_coin', 'thermal:copper_gear', 'thermal:copper_plate', 'create:crushed_copper_ore', 'createaddition:copper_rod', 'immersiveengineering:wire_copper', 'tconstruct:molten_copper', 150, 50, 17, 'thermal:gold_dust', 2, null);
  unifyOre(false, 'tin', 'thermal:tin_ore', 'thermal:tin_ingot', 'thermal:tin_dust', 'mekanism:dirty_dust_tin', 'thermal:tin_block', 'thermal:tin_nugget', 'thermal:tin_coin', 'thermal:tin_gear', 'thermal:tin_plate', 'create:crushed_tin_ore', null, null, 'tconstruct:molten_tin', 117, 39, 13, 'thermal:iron_dust', 2, null);
  unifyOre(false, 'lead', 'thermal:lead_ore', 'thermal:lead_ingot', 'thermal:lead_dust', 'mekanism:dirty_dust_lead', 'thermal:lead_block', 'thermal:lead_nugget', 'thermal:lead_coin', 'thermal:lead_gear', 'thermal:lead_plate', 'create:crushed_lead_ore', null, null, 'tconstruct:molten_lead', 130, 43, 14, 'thermal:silver_dust', 2, null);
  unifyOre(false, 'silver', 'thermal:silver_ore', 'thermal:silver_ingot', 'thermal:silver_dust', null, 'thermal:silver_block', 'thermal:silver_nugget', 'thermal:silver_coin', 'thermal:silver_gear', 'thermal:silver_plate', 'create:crushed_silver_ore', null, null, 'tconstruct:molten_silver', 179, 60, 20, 'thermal:lead_dust', 2, null);
  unifyOre(false, 'nickel', 'thermal:nickel_ore', 'thermal:nickel_ingot', 'thermal:nickel_dust', null, 'thermal:nickel_block', 'thermal:nickel_nugget', 'thermal:nickel_coin', 'thermal:nickel_gear', 'thermal:nickel_plate', 'create:crushed_nickel_ore', null, null, 'tconstruct:molten_nickel', 194, 65, 22, 'thermal:iron_dust', 2, null);
  unifyOre(false, 'uranium', 'mekanism:uranium_ore', 'mekanism:ingot_uranium', 'mekanism:dust_uranium', 'mekanism:dirty_dust_uranium', 'mekanism:block_uranium', 'mekanism:nugget_uranium', null, 'superpackutils:uranium_gear', 'immersiveengineering:plate_uranium', 'create:crushed_uranium_ore', null, null, 'tconstruct:molten_uranium', 183, 61, 20, 'thermal:iron_dust', 2, null);
  unifyOre(false, 'aluminum', 'immersiveengineering:ore_aluminum', 'immersiveengineering:ingot_aluminum', 'immersiveengineering:dust_aluminum', null, 'immersiveengineering:storage_aluminum', 'immersiveengineering:nugget_aluminum', null, 'superpackutils:aluminium_gear', 'immersiveengineering:plate_aluminum', 'create:crushed_aluminum_ore', 'immersiveengineering:stick_aluminum', 'immersiveengineering:wire_aluminum', 'tconstruct:molten_aluminum', 141, 47, 16, 'thermal:iron_dust', 2, null);
  unifyOre(false, 'osmium', 'mekanism:osmium_ore', 'mekanism:ingot_osmium', 'mekanism:dust_osmium', 'mekanism:dirty_dust_osmium', 'mekanism:block_osmium', 'mekanism:nugget_osmium', null, 'superpackutils:osmium_gear', null, 'create:crushed_osmium_ore', null, null, 'tconstruct:molten_osmium', 233, 78, 26, 'superpackutils:depleted_mythril_dust', 2, null);
  unifyOre(false, 'zinc', 'create:zinc_ore', 'create:zinc_ingot', 'superpackutils:zinc_dust', null, 'create:zinc_block', 'create:zinc_nugget', null, null, 'createaddition:zinc_sheet', 'create:crushed_zinc_ore', null, null, 'tconstruct:molten_zinc', 141, 47, 16, 'ftbquests:missing_item', 2, null);
  unifyOre(false, 'electrum', null, 'thermal:electrum_ingot', 'thermal:electrum_dust', null, 'thermal:electrum_block', 'thermal:electrum_nugget', 'thermal:electrum_coin', 'thermal:electrum_gear', 'thermal:electrum_plate', null, null, 'immersiveengineering:wire_electrum', 'tconstruct:molten_electrum', 177, 59, 20, null, 2, null);
  unifyOre(false, 'constantan', null, 'thermal:constantan_ingot', 'thermal:constantan_dust', null, 'thermal:constantan_block', 'thermal:constantan_nugget', 'thermal:constantan_coin', 'thermal:constantan_gear', 'thermal:constantan_plate', null, null, null, 'tconstruct:molten_constantan', 192, 64, 21, null, 2, null);
  unifyOre(false, 'invar', null, 'thermal:invar_ingot', 'thermal:invar_dust', null, 'thermal:invar_block', 'thermal:invar_nugget', 'thermal:invar_coin', 'thermal:invar_gear', 'thermal:invar_plate', null, null, null, 'tconstruct:molten_invar', 190, 63, 21, null, 2, null);
  unifyOre(false, 'bronze', null, 'thermal:bronze_ingot', 'thermal:bronze_dust', null, 'thermal:bronze_block', 'thermal:bronze_nugget', 'thermal:bronze_coin', 'thermal:bronze_gear', 'thermal:bronze_plate', null, null, null, 'tconstruct:molten_bronze', 171, 57, 19, null, 2, null);
  unifyOre(false, 'steel', null, 'mekanism:ingot_steel', 'mekanism:dust_steel', null, 'mekanism:block_steel', 'mekanism:nugget_steel', null, 'superpackutils:steel_gear', 'immersiveengineering:plate_steel', null, 'immersiveengineering:stick_steel', 'immersiveengineering:wire_steel', 'tconstruct:molten_steel', 217, 72, 24, null, 2, null);
  unifyOre(false, 'platinum', null, 'superpackutils:platinum_ingot', 'superpackutils:platinum_dust', null, 'superpackutils:platinum_block', 'superpackutils:platinum_nugget', null, null, null, null, null, null, 'tconstruct:molten_platinum', 196, 65, 22, null, 2, null);
  unifyOre(false, 'enderium', null, 'thermal:enderium_ingot', 'thermal:enderium_dust', null, 'thermal:enderium_block', 'thermal:enderium_nugget', 'thermal:enderium_coin', 'thermal:enderium_gear', 'thermal:enderium_plate', null, null, null, null, 0, 0, 0, null, 2, null);
  unifyOre(false, 'signalum', null, 'thermal:signalum_ingot', 'thermal:signalum_dust', null, 'thermal:signalum_block', 'thermal:signalum_nugget', 'thermal:signalum_coin', 'thermal:signalum_gear', 'thermal:signalum_plate', null, null, null, null, 0, 0, 0, null, 2, null);
  unifyOre(false, 'lumium', null, 'thermal:lumium_ingot', 'thermal:lumium_dust', null, 'thermal:lumium_block', 'thermal:lumium_nugget', 'thermal:lumium_coin', 'thermal:lumium_gear', 'thermal:lumium_plate', null, null, null, null, 0, 0, 0, null, 2, null);
  unifyOre(false, 'cobalt', 'tconstruct:cobalt_ore', 'tconstruct:cobalt_ingot', null, null, 'tconstruct:cobalt_block', 'tconstruct:cobalt_nugget', null, null, null, null, null, null, 'tconstruct:molten_cobalt', 194, 65, 22, null, 2, null);  
  unifyOre(false, 'rose_gold', null, 'tconstruct:rose_gold_ingot', null, null, 'tconstruct:rose_gold_block', 'tconstruct:rose_gold_nugget', null, null, null, null, null, null, 'tconstruct:molten_rose_gold', 155, 52, 17, null, 2, null);
  unifyOre(false, 'pig_iron', null, 'tconstruct:pig_iron_ingot', null, null, 'tconstruct:pig_iron_block', 'tconstruct:pig_iron_nugget', null, null, null, null, null, null, 'tconstruct:molten_pig_iron', 181, 60, 20, null, 2, null);
  unifyOre(false, 'silicon_bronze', null, 'tconstruct:tinkers_bronze_ingot', null, null, 'tconstruct:tinkers_bronze_block', 'tconstruct:tinkers_bronze_nugget', null, null, null, null, null, null, 'tconstruct:molten_tinkers_bronze', 171, 57, 19, null, 2, null);
  unifyOre(false, 'slimesteel', null, 'tconstruct:slimesteel_ingot', null, null, 'tconstruct:slimesteel_block', 'tconstruct:slimesteel_nugget', null, null, null, null, null, null, 'tconstruct:molten_slimesteel', 190, 63, 21, null, 2, null);
  unifyOre(false, 'queens_slime', null, 'tconstruct:queens_slime_ingot', null, null, 'tconstruct:queens_slime_block', 'tconstruct:queens_slime_nugget', null, null, null, null, null, null, 'tconstruct:molten_queens_slime', 212, 71, 24, null, 2, null);
  unifyOre(false, 'manyullyn', null, 'tconstruct:manyullyn_ingot', null, null, 'tconstruct:manyullyn_block', 'tconstruct:manyullyn_nugget', null, null, null, null, null, null, 'tconstruct:molten_manyullyn', 216, 72, 24, null, 2, null);
  unifyOre(false, 'hepatizon', null, 'tconstruct:hepatizon_ingot', null, null, 'tconstruct:hepatizon_block', 'tconstruct:hepatizon_nugget', null, null, null, null, null, null, 'tconstruct:molten_hepatizon', 233, 78, 26, null, 2, null);
  unifyOre(false, 'brass', null, 'create:brass_ingot', null, null, 'create:brass_block', 'create:brass_nugget', null, null, 'create:brass_sheet', 'create:crushed_brass', 'createaddition:brass_rod', null, 'tconstruct:molten_brass', 233, 78, 26, null, 2, null);
  unifyOre(false, 'netherite', null, 'minecraft:netherite_ingot', 'mekanism:dust_netherite', null, 'minecraft:netherite_block', 'tconstruct:netherite_nugget', null, null, null, null, null, null, 'tconstruct:molten_netherite', 221, 74, 25, null, 2, null);
  
  unifyOre(true, 'diamond', 'minecraft:diamond_ore', 'minecraft:diamond', 'thermal:diamond_dust', null, 'minecraft:diamond_block', null, null, 'thermal:diamond_gear', null, null, null, null, null, 0, 0, 0, null, 2, 1);
  unifyOre(true, 'coal', 'minecraft:coal_ore', 'minecraft:coal', 'mekanism:dust_coal', null, 'minecraft:coal_block', null, null, null, null, null, null, null, null, 0, 0, 0, null, 2, 1);
  unifyOre(true, 'coal_coke', null, 'thermal:coal_coke', 'immersiveengineering:dust_coke', null, 'thermal:coal_coke_block', null, null, null, null, null, null, null, null, 0, 0, 0, null, 2, 1);
  unifyOre(true, 'charcoal', '#minecraft:logs_that_burn', 'minecraft:charcoal', 'mekanism:dust_charcoal', null, 'thermal:charcoal_block', null, null, null, null, null, null, null, null, 0, 0, 0, null, 2, 1);
  unifyOre(true, 'emerald', 'minecraft:emerald_ore', 'minecraft:emerald', 'thermal:emerald_dust', null, 'minecraft:emerald_block', null, null, 'thermal:emerald_gear', null, null, null, null, null, 0, 0, 0, null, 2, 1);
  unifyOre(true, 'lapis', 'minecraft:lapis_ore', 'minecraft:lapis_lazuli', 'thermal:lapis_dust', null, 'minecraft:lapis_block', null, null, 'thermal:lapis_gear', null, null, null, null, null, 0, 0, 0, null, 12, 8);
  //unifyOre(true, 'certus_quartz', 'appliedenergistics2:quartz_ore', 'appliedenergistics2:certus_quartz_crystal', 'appliedenergistics2:certus_quartz_dust', null, 'appliedenergistics2:quartz_block', null, null, null, null, null, null, null, null, 0, 0, 0, null, 2, 1);
  //unifyOre(true, 'certus_quartz', 'appliedenergistics2:charged_quartz_ore', 'appliedenergistics2:charged_certus_quartz_crystal', 'appliedenergistics2:certus_quartz_dust', null, 'appliedenergistics2:quartz_block', null, null, null, null, null, null, null, null, 0, 0, 0, null, 2, 1);

});
