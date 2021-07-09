//priority: 10000

onEvent('recipes', event => {

  function unifyOre(isGem, nameUnify, oreItem, ingotItem, dustItem, dirtyDustItem, blockItem, nuggetItem, coinItem, gearItem, plateItem, crushedItem, rodItem, wireItem, moltenFluid, castingBlockTime, castingIngotTime, castingNuggetTime, castingGearTime, crusherBonusChance, crusherBonus, oreDoublingOutput, oreDoublingBonus, orePieceItem, clumpItem, shardItem, crystalItem, minimumProcessing, normalOreItem, alchemicalDustItem, alchemicalInfuseType, dirtySlurry, cleanSlurry, chunkItem, purifiedCrushedItem) {
  
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

    //Blast Chiller
    event.remove({id: `thermal:compat/tconstruct/chiller_tconstruct_${nameUnify}_ingot`});

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

  if (ingotItem !== null && blockItem !== null && nameUnify !== 'quartz' && nameUnify !== 'ender_pearl') {

  event.shapeless(item.of(ingotItem, 9), [blockItem])

  }

  if (ingotItem !== null && nuggetItem !== null) {

  event.shaped(ingotItem, ['III', 'III', 'III'], {
      I: nuggetItem
  })

  //Block Crushing
  event.custom({
    "type": "exnihilosequentia:hammer",
    "results": [
      {
        "chance": 1.0,
        "item": ingotItem,
        "count": 9      }
    ],
    "input": {
      "item": blockItem
    }
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

  //Thermal Chiller
  event.custom({
    "type": "thermal:chiller",
    "input": [
      {
        "fluid": moltenFluid,
        "amount": 144
      },
      {
        "item": "thermal:chiller_ingot_cast"
      }
    ],
    "result": [
      {
        "item": ingotItem,
        "count": 1
      }
    ],
    "energy": 5000
  })

  }

  //Manual Recipe
  event.remove({id: `thermal:compat/tconstruct/smelter_alloy_tconstruct_pigiron_ingot`}) //Typo on Thermal side. Fixed on the Next Release.
  event.remove({id: `thermal:compat/tconstruct/smelter_alloy_tconstruct_soulsteel_ingot`}) //Secret Ingot. Probably removed in next release.
  event.remove({id: `thermal:compat/tconstruct/smelter_alloy_tconstruct_tinkers_bronze_ingot`}) //Secret Ingot. Probably removed in next release.

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
  event.remove({id: `create:splashing/crushed_${nameUnify}`})
  event.remove({id: `create:splashing/thermal/crushed_${nameUnify}_ore`})
  event.remove({id: `create:splashing/iceandfire/crushed_${nameUnify}_ore`})
  event.remove({id: `create:splashing/mekanism/crushed_${nameUnify}_ore`})
  event.remove({id: `create:splashing/immersiveengineering/crushed_${nameUnify}_ore`})
  event.remove({id: `create:splashing/eidolon/crushed_${nameUnify}_ore`})

  event.recipes.create.splashing([Item.of(nuggetItem, 10), Item.of(nuggetItem, 5).withChance(0.5)], crushedItem)

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

    //Thermal Chiller
    event.custom({
      "type": "thermal:chiller",
      "input": [
        {
          "fluid": moltenFluid,
          "amount": 16
        },
        {
          "item": "superpackutils:chiller_nugget_cast"
        }
      ],
      "result": [
        {
          "item": nuggetItem,
          "count": 1
        }
      ],
      "energy": 5000
    })

  }

  //Manual Recipe
  event.replaceOutput({}, 'iceandfire:copper_nugget', 'thermal:copper_nugget')
  event.replaceOutput({}, 'iceandfire:silver_nugget', 'thermal:silver_nugget')
  event.replaceOutput({}, 'immersiveengineering:nugget_steel', 'mekanism:nugget_steel')

  //-----------------------------------------------------
  //unifyOre Block
  //-----------------------------------------------------

  if (blockItem !== null && nameUnify !== 'quartz' && nameUnify !== 'ender_pearl') {

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

  //Thermal Chiller
  event.custom({
    "type": "thermal:chiller",
    "input": [
      {
        "fluid": moltenFluid,
        "amount": 1296
      }
    ],
    "result": [
      {
        "item": blockItem,
        "count": 1
      }
    ],
    "energy": 5000
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

  //Induction Smelter
  event.remove({id: `thermal:machine/smelter/smelter_${nameUnify}_dust`})
  event.recipes.thermal.smelter(ingotItem, dustItem)

  }

  if (oreItem !== null && dustItem !== null && isGem == false && nameUnify !== 'starmetal') {

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
  event.recipes.create.crushing([Item.of(crushedItem), Item.of(dustItem).withChance(0.15), Item.of('minecraft:cobblestone').withChance(0.35)], oreItem, 350)

  }

  if (oreItem !== null && crushedItem !== null && oreItem !== null && isGem == false) {

  //IE Crusher
  event.recipes.immersiveengineering.crusher(Item.of(dustItem, 2), crushedItem, Item.of(crusherBonus).withChance(crusherBonusChance))

  }  

  //Manual Recipe
  event.remove({id: 'thermal:compat/create/pulverizer_create_zinc_ore'})

  //-----------------------------------------------------
  //unifyOre Purified Crushed Ore
  //-----------------------------------------------------

  if (purifiedCrushedItem !== null && crushedItem !== null) {

  //Purified Crushed Ore
  event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "washer",
        "controllerId": "washer",
        "ticks": 100,
        "inputs": [
            {
                "type": "masterfulmachinery:energy",
                "data":{
                    "amount": 100
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": `${crushedItem}`,
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "minecraft:water",
                    "amount": 100
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item":  `${purifiedCrushedItem}`,
                    "count": 1
                }
            }
        ]
  })

  }

  //-----------------------------------------------------
  //unifyOre Mekanism Ore Processing
  //-----------------------------------------------------

  if (dirtyDustItem !== null && dustItem !== null && clumpItem !== null && shardItem !== null) {

    //Create Encased Fan
    event.recipes.create.splashing(dustItem, dirtyDustItem)

    //Crusher
    event.remove({id: `mekanism:processing/${nameUnify}/dirty_dust/from_clump`})
    event.recipes.mekanism.crushing(dirtyDustItem, clumpItem)

    //Purification Chamber
    event.remove({id: `mekanism:processing/${nameUnify}/clump/from_shard`})
    event.recipes.mekanism.purifying(clumpItem, shardItem, {gas: 'mekanism:oxygen', amount: 1})

    //Chemical Injection Chamber
    event.remove({id: `mekanism:processing/${nameUnify}/shard/from_crystal`})
    event.recipes.mekanism.injecting(shardItem, crystalItem, {gas: 'mekanism:hydrogen_chloride', amount: 1})

    //Chemical Crystallizer
    event.remove({id: `mekanism:processing/${nameUnify}/crystal/from_slurry`})
    event.custom({"type":"mekanism:crystallizing","chemicalType":"slurry","input":{"amount":200,"slurry":cleanSlurry},"output":{"item":crystalItem}})

    //Chemical Washer
    event.remove({id: `mekanism:processing/${nameUnify}/slurry/clean`})
    event.custom({"type":"mekanism:washing","fluidInput":{"amount":5,"tag":"minecraft:water"},"slurryInput":{"amount":1,"slurry":dirtySlurry},"output":{"slurry":cleanSlurry,"amount":1}})
  
    //Chemical Dissolution Chamber
    event.custom({"type":"mekanism:dissolution","itemInput":{"ingredient":{"item":chunkItem}},"gasInput":{"amount":1,"gas":"superpackutils:pure_sulfuric_acid"},"output":{"slurry":dirtySlurry,"amount":200,"chemicalType":"slurry"}})

  }

  if (dirtyDustItem !== null && dustItem !== null && clumpItem !== null && shardItem !== null && oreItem !== null && minimumProcessing == null) {

    //Purification Chamber
    event.remove({id: `mekanism:processing/${nameUnify}/clump/from_ore`})
    event.recipes.mekanism.purifying(Item.of(clumpItem, 3), oreItem, {gas: 'mekanism:oxygen', amount: 1})

    //Chemical Injection Chamber
    event.remove({id: `mekanism:processing/${nameUnify}/shard/from_ore`})
    event.recipes.mekanism.injecting(Item.of(shardItem, 4), oreItem, {gas: 'mekanism:hydrogen_chloride', amount: 1})

    //Chemical Dissolution Chamber
    event.remove({id: `mekanism:processing/${nameUnify}/slurry/dirty`})
    event.custom({"type":"mekanism:dissolution","itemInput":{"ingredient":{"item":oreItem}},"gasInput":{"amount":1,"gas":"superpackutils:pure_sulfuric_acid"},"output":{"slurry":dirtySlurry,"amount":1000,"chemicalType":"slurry"}})
  
  }

  if (dirtyDustItem !== null && dustItem !== null && clumpItem !== null && shardItem !== null && normalOreItem !== null && minimumProcessing == 3) {

    //Smeltery
    event.remove({id: `tconstruct:smeltery/melting/metal/${nameUnify}/ore`})

    //Arc Furnace
    event.remove({id: `immersiveengineering:arcfurnace/ore_${nameUnify}`})

    //Purification Chamber
    event.remove({id: `mekanism:processing/${nameUnify}/clump/from_ore`})
    event.recipes.mekanism.purifying(Item.of(clumpItem, 3), normalOreItem, {gas: 'mekanism:oxygen', amount: 1})

    //Chemical Injection Chamber
    event.remove({id: `mekanism:processing/${nameUnify}/shard/from_ore`})
    event.recipes.mekanism.injecting(Item.of(shardItem, 4), normalOreItem, {gas: 'mekanism:hydrogen_chloride', amount: 1})

    //Chemical Dissolution Chamber
    event.remove({id: `mekanism:processing/${nameUnify}/slurry/dirty`})
    event.custom({"type":"mekanism:dissolution","itemInput":{"ingredient":{"item":normalOreItem}},"gasInput":{"amount":1,"gas":"superpackutils:pure_sulfuric_acid"},"output":{"slurry":dirtySlurry,"amount":1000,"chemicalType":"slurry"}})

  }

  if (dirtyDustItem !== null && dustItem !== null && clumpItem !== null && shardItem !== null && normalOreItem !== null && minimumProcessing == 4) {

    //Smeltery
    event.remove({id: `tconstruct:smeltery/melting/metal/${nameUnify}/ore`})

    //Arc Furnace
    event.remove({id: `immersiveengineering:arcfurnace/ore_${nameUnify}`})

    //Purification Chamber
    event.remove({id: `mekanism:processing/${nameUnify}/clump/from_ore`})

    //Chemical Injection Chamber
    event.remove({id: `mekanism:processing/${nameUnify}/shard/from_ore`})
    event.recipes.mekanism.injecting(Item.of(shardItem, 4), normalOreItem, {gas: 'mekanism:hydrogen_chloride', amount: 1})

    //Chemical Dissolution Chamber
    event.remove({id: `mekanism:processing/${nameUnify}/slurry/dirty`})
    event.custom({"type":"mekanism:dissolution","itemInput":{"ingredient":{"item":normalOreItem}},"gasInput":{"amount":1,"gas":"superpackutils:pure_sulfuric_acid"},"output":{"slurry":dirtySlurry,"amount":1000,"chemicalType":"slurry"}})

  }

  if (dirtyDustItem !== null && normalOreItem !== null) {

    //Dirty Dust into Infused Ores
    event.recipes.mekanism.combining(oreItem, 'superpackutils:infused_stone', Item.of(dirtyDustItem, 8))

  }

  if (orePieceItem !== null && alchemicalDustItem !== null && alchemicalInfuseType !== null) {

    //Metallurgic Infuser
    event.recipes.mekanism.metallurgic_infusing(orePieceItem, 'superpackutils:crystal_shard', alchemicalInfuseType, 10)

    //Alchemical Dust into Infusion Type
    event.custom({"type":"mekanism:infusion_conversion","input":{"ingredient":{"item":alchemicalDustItem}},"output":{"infuse_type":alchemicalInfuseType,"amount":10}})

  }

  if (orePieceItem !== null && nameUnify !== 'osmium' && nameUnify !== 'uranium') {

  }

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

  //Advanced Rocketry Rolling Machine
  event.custom({
    "type": "advancedrocketry:rollingmachine",
    "itemingredients":
    [
        
        {
            "item": ingotItem
        }
    ],
    "fluidingredients":
    [
        {
            "fluid": "minecraft:water",
            "amount": 10
        }
    ],
    "time": 300,
    "energy": 20,
    "itemresults":
    {
            "item": plateItem,
            "count": 1
    }
  })

  }

  if (plateItem !== null && blockItem !== null && isGem == false) {

    //Advanced Rocketry Rolling Machine
    event.custom({
      "type": "advancedrocketry:rollingmachine",
      "itemingredients":
      [
          
          {
              "item": blockItem
          }
      ],
      "fluidingredients":
      [
          {
              "fluid": "minecraft:water",
              "amount": 10
          }
      ],
      "time": 300,
      "energy": 20,
      "itemresults":
      {
              "item": plateItem,
              "count": 9
      }
  })

  }

  if (plateItem !== null && moltenFluid !== null && isGem == false) {

  //Tinker's Casting
  event.remove({id: `tconstruct:smeltery/casting/metal/${nameUnify}/plate_gold_cast`})
  event.custom({
      "type": "tconstruct:casting_table",
      "cast": {
        "item": "tconstruct:plate_cast"
      },
      "fluid": {
        "name": moltenFluid,
        "amount": 144
      },
      "result": plateItem,
      "cooling_time": castingIngotTime
  })

  event.remove({id: `tconstruct:smeltery/casting/metal/${nameUnify}/plate_sand_cast`})
  event.custom({
      "type": "tconstruct:casting_table",
      "cast": {
        "tag": "tconstruct:casts/single_use/plate"
      },
      "cast_consumed": true,
      "fluid": {
        "name": moltenFluid,
        "amount": 144
      },
      "result": plateItem,
      "cooling_time": castingIngotTime
  })

    //Thermal Chiller
    event.custom({
      "type": "thermal:chiller",
      "input": [
        {
          "fluid": moltenFluid,
          "amount": 144
        },
        {
          "item": "superpackutils:chiller_plate_cast"
        }
      ],
      "result": [
        {
          "item": plateItem,
          "count": 1
        }
      ],
      "energy": 5000
    })

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

  if (gearItem !== null && moltenFluid !== null) {

    //Tinker's Casting
    event.remove({id: `tconstruct:smeltery/casting/metal/${nameUnify}/gear_gold_cast`})
    event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
          "item": "tconstruct:gear_cast"
        },
        "fluid": {
          "name": moltenFluid,
          "amount": 576
        },
        "result": gearItem,
        "cooling_time": castingGearTime
    })
  
    event.remove({id: `tconstruct:smeltery/casting/metal/${nameUnify}/gear_sand_cast`})
    event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
          "tag": "tconstruct:casts/single_use/gear"
        },
        "cast_consumed": true,
        "fluid": {
          "name": moltenFluid,
          "amount": 576
        },
        "result": gearItem,
        "cooling_time": castingGearTime
    })

    //Thermal Chiller
    event.custom({
      "type": "thermal:chiller",
      "input": [
        {
          "fluid": moltenFluid,
          "amount": 576
        },
        {
          "item": "superpackutils:chiller_gear_cast"
        }
      ],
      "result": [
        {
          "item": gearItem,
          "count": 1
        }
      ],
      "energy": 5000
    })
  
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

  //Advanced Rocketry Lathe
  event.custom({
    "type": "advancedrocketry:lathe",
        "itemingredients":
        [
            
            {
                "item": ingotItem
            }
        ],
        "time": 300,
        "energy": 20,
        "itemresults":
        {
                "item": rodItem,
                "count": 2
        }
    })

  }

  if (rodItem !== null && moltenFluid !== null) {

  //Thermal Chiller
  event.custom({
    "type": "thermal:chiller",
    "input": [
      {
        "fluid": moltenFluid,
        "amount": 72
      },
      {
        "item": "thermal:chiller_rod_cast"
      }
    ],
    "result": [
      {
        "item": rodItem,
        "count": 1
      }
    ],
    "energy": 5000
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

  //-----------------------------------------------------
  //unifyOre Coin
  //-----------------------------------------------------

  if (coinItem !== null && moltenFluid !== null) {

    //Thermal Chiller
    event.custom({
      "type": "thermal:chiller",
      "input": [
        {
          "fluid": moltenFluid,
          "amount": 48
        },
        {
          "item": "superpackutils:chiller_coin_cast"
        }
      ],
      "result": [
        {
          "item": coinItem,
          "count": 1
        }
      ],
      "energy": 5000
    })
  
  }

  }

  unifyOre(false, 'iron', 'minecraft:iron_ore', 'minecraft:iron_ingot', 'thermal:iron_dust', 'mekanism:dirty_dust_iron', 'minecraft:iron_block', 'minecraft:iron_nugget', 'thermal:iron_coin', 'thermal:iron_gear', 'thermal:iron_plate', 'create:crushed_iron_ore', 'immersiveengineering:stick_iron', 'createaddition:iron_wire', 'tconstruct:molten_iron', 180, 60, 20, 120, 0.15, 'thermal:nickel_dust', 2, null, 'exnihilosequentia:piece_iron', 'mekanism:clump_iron', 'mekanism:shard_iron', 'mekanism:crystal_iron', null, null, 'superpackutils:alchemical_iron_dust', 'superpackutils:alchemical_iron', 'mekanism:dirty_iron', 'mekanism:clean_iron', 'exnihilosequentia:chunk_iron', 'superpackutils:purified_crushed_iron_ore');
  unifyOre(false, 'gold', 'minecraft:gold_ore', 'minecraft:gold_ingot', 'thermal:gold_dust', 'mekanism:dirty_dust_gold', 'minecraft:gold_block', 'minecraft:gold_nugget', 'thermal:gold_coin', 'thermal:gold_gear', 'thermal:gold_plate', 'create:crushed_gold_ore', 'createaddition:gold_rod', 'createaddition:gold_wire', 'tconstruct:molten_gold', 171, 57, 19, 114, 0.30, 'thermal:silver_dust', 2, null, 'exnihilosequentia:piece_gold', 'mekanism:clump_gold', 'mekanism:shard_gold', 'mekanism:crystal_gold', null, null, 'superpackutils:alchemical_gold_dust', 'superpackutils:alchemical_gold', 'mekanism:dirty_gold', 'mekanism:clean_gold', 'exnihilosequentia:chunk_gold', 'superpackutils:purified_crushed_gold_ore');    
  unifyOre(false, 'copper', 'thermal:copper_ore', 'thermal:copper_ingot', 'thermal:copper_dust', 'mekanism:dirty_dust_copper', 'thermal:copper_block', 'thermal:copper_nugget', 'thermal:copper_coin', 'thermal:copper_gear', 'thermal:copper_plate', 'create:crushed_copper_ore', 'createaddition:copper_rod', 'immersiveengineering:wire_copper', 'tconstruct:molten_copper', 150, 50, 17, 100, 0.15, 'thermal:gold_dust', 2, null, 'exnihilosequentia:piece_copper', 'mekanism:clump_copper', 'mekanism:shard_copper', 'mekanism:crystal_copper', null, null, 'superpackutils:alchemical_copper_dust', 'superpackutils:alchemical_copper', 'mekanism:dirty_copper', 'mekanism:clean_copper', 'exnihilosequentia:chunk_copper', 'superpackutils:purified_crushed_copper_ore');
  unifyOre(false, 'tin', 'thermal:tin_ore', 'thermal:tin_ingot', 'thermal:tin_dust', 'mekanism:dirty_dust_tin', 'thermal:tin_block', 'thermal:tin_nugget', 'thermal:tin_coin', 'thermal:tin_gear', 'thermal:tin_plate', 'create:crushed_tin_ore', null, null, 'tconstruct:molten_tin', 117, 39, 13, 78, 0.15, 'thermal:copper_dust', 2, null, 'exnihilosequentia:piece_tin', 'mekanism:clump_tin', 'mekanism:shard_tin', 'mekanism:crystal_tin', null, null, 'superpackutils:alchemical_tin_dust', 'superpackutils:alchemical_tin', 'mekanism:dirty_tin', 'mekanism:clean_tin', 'exnihilosequentia:chunk_tin', 'superpackutils:purified_crushed_tin_ore');
  unifyOre(false, 'lead', 'thermal:lead_ore', 'thermal:lead_ingot', 'thermal:lead_dust', 'mekanism:dirty_dust_lead', 'thermal:lead_block', 'thermal:lead_nugget', 'thermal:lead_coin', 'thermal:lead_gear', 'thermal:lead_plate', 'create:crushed_lead_ore', 'immersiveposts:stick_lead', 'immersiveengineering:wire_lead', 'tconstruct:molten_lead', 130, 43, 14, 86, 0.15, 'thermal:silver_dust', 2, null, 'exnihilosequentia:piece_lead', 'mekanism:clump_lead', 'mekanism:shard_lead', 'mekanism:crystal_lead', null, null, 'superpackutils:alchemical_lead_dust', 'superpackutils:alchemical_lead', 'mekanism:dirty_lead', 'mekanism:clean_lead', 'exnihilosequentia:chunk_lead', 'superpackutils:purified_crushed_lead_ore');
  unifyOre(false, 'silver', 'thermal:silver_ore', 'thermal:silver_ingot', 'thermal:silver_dust', null, 'thermal:silver_block', 'thermal:silver_nugget', 'thermal:silver_coin', 'thermal:silver_gear', 'thermal:silver_plate', 'create:crushed_silver_ore', 'immersiveposts:stick_silver', null, 'tconstruct:molten_silver', 179, 60, 20, 120, 0.15, 'thermal:lead_dust', 2, null, 'exnihilosequentia:piece_silver', null, null, null, null, null, 'superpackutils:alchemical_silver_dust', 'superpackutils:alchemical_silver', null, null, 'exnihilosequentia:chunk_silver', 'superpackutils:purified_crushed_silver_ore');
  unifyOre(false, 'nickel', 'thermal:nickel_ore', 'thermal:nickel_ingot', 'thermal:nickel_dust', 'superpackutils:dirty_dust_nickel', 'thermal:nickel_block', 'thermal:nickel_nugget', 'thermal:nickel_coin', 'thermal:nickel_gear', 'thermal:nickel_plate', 'create:crushed_nickel_ore', 'immersiveposts:stick_nickel', null, 'tconstruct:molten_nickel', 194, 65, 22, 130, 0.15, 'superpackutils:platinum_dust', 2, null, 'exnihilosequentia:piece_nickel', 'superpackutils:clump_nickel', 'superpackutils:shard_nickel', 'superpackutils:crystal_nickel', null, null, 'superpackutils:alchemical_nickel_dust', 'superpackutils:alchemical_nickel', 'superpackutils:dirty_nickel', 'superpackutils:clean_nickel', 'exnihilosequentia:chunk_nickel', 'superpackutils:purified_crushed_nickel_ore');
  unifyOre(false, 'uranium', 'superpackutils:infused_uranium_ore', 'mekanism:ingot_uranium', 'mekanism:dust_uranium', 'mekanism:dirty_dust_uranium', 'mekanism:block_uranium', 'mekanism:nugget_uranium', null, 'superpackutils:uranium_gear', 'immersiveengineering:plate_uranium', 'create:crushed_uranium_ore', 'immersiveposts:stick_uranium', null, 'tconstruct:molten_uranium', 183, 61, 20, 122, 0.15, 'superpackutils:zinc_dust', 2, null, 'exnihilosequentia:piece_uranium', 'mekanism:clump_uranium', 'mekanism:shard_uranium', 'mekanism:crystal_uranium', 3, 'mekanism:uranium_ore', 'superpackutils:alchemical_uranium_dust', 'superpackutils:alchemical_uranium', 'mekanism:dirty_uranium', 'mekanism:clean_uranium', 'exnihilosequentia:chunk_uranium', 'superpackutils:purified_crushed_uranium_ore');
  unifyOre(false, 'aluminum', 'immersiveengineering:ore_aluminum', 'immersiveengineering:ingot_aluminum', 'immersiveengineering:dust_aluminum', null, 'immersiveengineering:storage_aluminum', 'immersiveengineering:nugget_aluminum', null, 'superpackutils:aluminium_gear', 'immersiveengineering:plate_aluminum', 'create:crushed_aluminum_ore', 'immersiveengineering:stick_aluminum', 'immersiveengineering:wire_aluminum', 'tconstruct:molten_aluminum', 141, 47, 16, 94, 0.15, 'thermal:iron_dust', 2, null, 'exnihilosequentia:piece_aluminum', null, null, null, null, null, 'superpackutils:alchemical_aluminum_dust', 'superpackutils:alchemical_aluminum', null, null, 'exnihilosequentia:chunk_aluminum', 'superpackutils:purified_crushed_aluminum_ore');
  unifyOre(false, 'osmium', 'superpackutils:infused_osmium_ore', 'mekanism:ingot_osmium', 'mekanism:dust_osmium', 'mekanism:dirty_dust_osmium', 'mekanism:block_osmium', 'mekanism:nugget_osmium', null, 'superpackutils:osmium_gear', null, 'create:crushed_osmium_ore', null, null, 'tconstruct:molten_osmium', 233, 78, 26, 156, 0.15, 'superpackutils:manganese_dust', 2, null, 'exnihilosequentia:piece_osmium', 'mekanism:clump_osmium', 'mekanism:shard_osmium', 'mekanism:crystal_osmium', 4, 'mekanism:osmium_ore', 'superpackutils:alchemical_osmium_dust', 'superpackutils:alchemical_osmium', 'mekanism:dirty_osmium', 'mekanism:clean_osmium', 'exnihilosequentia:chunk_osmium', 'superpackutils:purified_crushed_osmium_ore');
  unifyOre(false, 'zinc', 'create:zinc_ore', 'create:zinc_ingot', 'superpackutils:zinc_dust', null, 'create:zinc_block', 'create:zinc_nugget', null, null, 'createaddition:zinc_sheet', 'create:crushed_zinc_ore', null, null, 'tconstruct:molten_zinc', 141, 47, 16, 94, 0.15, 'thermal:tin_dust', 2, null, 'exnihilosequentia:piece_zinc', null, null, null, null, null, 'superpackutils:alchemical_zinc_dust', 'superpackutils:alchemical_zinc', null, null, 'exnihilosequentia:chunk_zinc', 'superpackutils:purified_crushed_zinc_ore');
  unifyOre(false, 'electrum', null, 'thermal:electrum_ingot', 'thermal:electrum_dust', null, 'thermal:electrum_block', 'thermal:electrum_nugget', 'thermal:electrum_coin', 'thermal:electrum_gear', 'thermal:electrum_plate', null, 'immersiveposts:stick_electrum', 'immersiveengineering:wire_electrum', 'tconstruct:molten_electrum', 177, 59, 20, 118, 0.15, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'constantan', null, 'thermal:constantan_ingot', 'thermal:constantan_dust', null, 'thermal:constantan_block', 'thermal:constantan_nugget', 'thermal:constantan_coin', 'thermal:constantan_gear', 'thermal:constantan_plate', null, 'immersiveposts:stick_constantan', null, 'tconstruct:molten_constantan', 192, 64, 21, 128, 0.15, null, 2, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'invar', null, 'thermal:invar_ingot', 'thermal:invar_dust', null, 'thermal:invar_block', 'thermal:invar_nugget', 'thermal:invar_coin', 'thermal:invar_gear', 'thermal:invar_plate', null, null, null, 'tconstruct:molten_invar', 190, 63, 21, 126, 0.15, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'bronze', null, 'thermal:bronze_ingot', 'thermal:bronze_dust', null, 'thermal:bronze_block', 'thermal:bronze_nugget', 'thermal:bronze_coin', 'thermal:bronze_gear', 'thermal:bronze_plate', null, null, null, 'tconstruct:molten_bronze', 171, 57, 19, 114, 0.15, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'steel', null, 'mekanism:ingot_steel', 'mekanism:dust_steel', null, 'mekanism:block_steel', 'mekanism:nugget_steel', null, 'superpackutils:steel_gear', 'immersiveengineering:plate_steel', null, 'immersiveengineering:stick_steel', 'immersiveengineering:wire_steel', 'tconstruct:molten_steel', 217, 72, 24, 144, 0.15, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'platinum', 'superpackutils:platinum_ore', 'superpackutils:platinum_ingot', 'superpackutils:platinum_dust', null, 'superpackutils:platinum_block', 'superpackutils:platinum_nugget', null, 'superpackutils:platinum_gear', 'superpackutils:platinum_plate', 'create:crushed_platinum_ore', null, null, 'tconstruct:molten_platinum', 196, 65, 22, 130, 0.20, 'thermal:gold_dust', 2, null, 'exnihilosequentia:piece_platinum', null, null, null, null, null, 'superpackutils:alchemical_platinum_dust', 'superpackutils:alchemical_platinum', null, null, 'exnihilosequentia:chunk_platinum', 'superpackutils:purified_crushed_platinum_ore');
  unifyOre(false, 'mythril', null, 'superpackutils:mythril_ingot', 'superpackutils:mythril_dust', null, 'superpackutils:mythril_block', 'superpackutils:mythril_nugget', null, 'superpackutils:mythril_gear', 'superpackutils:mythril_plate', null, null, null, null, null, 0, 0, 0, 0, null, 0, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'enderium', null, 'thermal:enderium_ingot', 'thermal:enderium_dust', null, 'thermal:enderium_block', 'thermal:enderium_nugget', 'thermal:enderium_coin', 'thermal:enderium_gear', 'thermal:enderium_plate', null, null, null, null, null, 0, 0, 0, 0, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'signalum', null, 'thermal:signalum_ingot', 'thermal:signalum_dust', null, 'thermal:signalum_block', 'thermal:signalum_nugget', 'thermal:signalum_coin', 'thermal:signalum_gear', 'thermal:signalum_plate', null, null, null, null, null, 0, 0, 0, 0, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'lumium', null, 'thermal:lumium_ingot', 'thermal:lumium_dust', null, 'thermal:lumium_block', 'thermal:lumium_nugget', 'thermal:lumium_coin', 'thermal:lumium_gear', 'thermal:lumium_plate', null, null, null, null, 0, 0, 0, 0, 0, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'cobalt', 'tconstruct:cobalt_ore', 'tconstruct:cobalt_ingot', 'superpackutils:cobalt_dust', null, 'tconstruct:cobalt_block', 'tconstruct:cobalt_nugget', null, null, null, 'superpackutils:crushed_cobalt_ore', null, null, 'tconstruct:molten_cobalt', 194, 65, 22, 0, 0.15, 'thermal:iron_dust', 2, null, 'exnihilosequentia:piece_cobalt', null, null, null, null, null, 'superpackutils:alchemical_cobalt_dust', 'superpackutils:alchemical_cobalt', null, null, 'exnihilosequentia:chunk_cobalt', 'superpackutils:purified_crushed_cobalt_ore');  
  unifyOre(false, 'rose_gold', null, 'tconstruct:rose_gold_ingot', null, null, 'tconstruct:rose_gold_block', 'tconstruct:rose_gold_nugget', null, null, null, null, null, null, 'tconstruct:molten_rose_gold', 155, 52, 17, 0, 0, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'pig_iron', null, 'tconstruct:pig_iron_ingot', null, null, 'tconstruct:pig_iron_block', 'tconstruct:pig_iron_nugget', null, null, null, null, null, null, 'tconstruct:molten_pig_iron', 181, 60, 20, 0, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'silicon_bronze', null, 'tconstruct:tinkers_bronze_ingot', null, null, 'tconstruct:tinkers_bronze_block', 'tconstruct:tinkers_bronze_nugget', null, null, null, null, null, null, 'tconstruct:molten_tinkers_bronze', 171, 57, 19, 0, 0, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'titanium', 'libvulpes:orerutile', 'libvulpes:ingottitanium', 'libvulpes:dusttitanium', null, 'libvulpes:blocktitanium', 'libvulpes:nuggettitanium', null, 'libvulpes:geartitanium', 'libvulpes:platetitanium', null, 'libvulpes:sticktitanium', null, null, 0, 0, 0, 0, 0, 0, 2, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'titaniumiridium', null, 'advancedrocketry:ingottitaniumiridium', 'advancedrocketry:dusttitaniumiridium', null, 'advancedrocketry:blocktitaniumiridium', 'advancedrocketry:nuggettitaniumiridium', null, 'advancedrocketry:geartitaniumiridium', 'advancedrocketry:platetitaniumiridium', null, 'advancedrocketry:sticktitaniumiridium', null, null, 0, 0, 0, 0, 0, 0, 2, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'titaniumaluminide', null, 'advancedrocketry:ingottitaniumaluminide', 'advancedrocketry:dusttitaniumaluminide', null, 'advancedrocketry:blocktitaniumaluminide', 'advancedrocketry:nuggettitaniumaluminide', null, 'advancedrocketry:geartitaniumaluminide', 'advancedrocketry:platetitaniumaluminide', null, 'advancedrocketry:sticktitaniumaluminide', null, null, 0, 0, 0, 0, 0, 0, 2, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'iridium', 'libvulpes:oreiridium', 'libvulpes:ingotiridium', 'libvulpes:dustiridium', null, 'libvulpes:blockiridium', 'libvulpes:nuggetiridium', null, null, 'libvulpes:plateiridium', null, 'libvulpes:stickiridium', null, null, 0, 0, 0, 0, 0, 0, 2, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'silicon', null, 'libvulpes:ingotsilicon', 'libvulpes:dustsilicon', null, null, 'libvulpes:nuggetsilicon', null, null, 'libvulpes:platesilicon', null, null, null, null, 0, 0, 0, 0, 0, 0, 0, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'manganese', null, 'superpackutils:manganese_ingot', 'superpackutils:manganese_dust', null, 'superpackutils:manganese_block', 'superpackutils:manganese_nugget', null, null, null, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'cupronickel', null, 'superpackutils:cupronickel_ingot', null, null, 'superpackutils:cupronickel_block', 'superpackutils:cupronickel_nugget', null, null, null, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'slimesteel', null, 'tconstruct:slimesteel_ingot', null, null, 'tconstruct:slimesteel_block', 'tconstruct:slimesteel_nugget', null, null, null, null, null, null, 'tconstruct:molten_slimesteel', 190, 63, 21, 0, 0, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'queens_slime', null, 'tconstruct:queens_slime_ingot', null, null, 'tconstruct:queens_slime_block', 'tconstruct:queens_slime_nugget', null, null, null, null, null, null, 'tconstruct:molten_queens_slime', 212, 71, 24, 0, 0, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'manyullyn', null, 'tconstruct:manyullyn_ingot', null, null, 'tconstruct:manyullyn_block', 'tconstruct:manyullyn_nugget', null, null, null, null, null, null, 'tconstruct:molten_manyullyn', 216, 72, 24, 0, 0, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'hepatizon', null, 'tconstruct:hepatizon_ingot', null, null, 'tconstruct:hepatizon_block', 'tconstruct:hepatizon_nugget', null, null, null, null, null, null, 'tconstruct:molten_hepatizon', 233, 78, 26, 0, 0, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'compressed_iron', null, 'pneumaticcraft:ingot_iron_compressed', null, null, 'pneumaticcraft:compressed_iron_block', null, null, 'pneumaticcraft:compressed_iron_gear', null, null, null, null, null, 0, 0, 0, 0, 0, null, 0, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'starmetal', 'astralsorcery:starmetal_ore', 'astralsorcery:starmetal_ingot', 'astralsorcery:stardust', null, 'astralsorcery:starmetal', null, null, null, null, null, null, null, null, 0, 0, 0, 0, 0, null, 0, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'tetraethyl', null, 'superpackutils:tetraethyl_lead_ingot', 'superpackutils:tetraethyl_lead_dust', null, 'superpackutils:tetraethyl_lead_block', 'superpackutils:tetraethyl_lead_nugget', null, null, null, null, null, null, null, 0, 0, 0, 0, 0, null, 0, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'vibrant_alloy', null, 'superpackutils:vibrant_alloy_ingot', 'superpackutils:vibrant_alloy_dust', null, 'superpackutils:vibrant_alloy_block', 'superpackutils:vibrant_alloy_nugget', null, null, null, null, null, null, null, 0, 0, 0, 0, 0, null, 0, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'energetic_alloy', null, 'superpackutils:energetic_alloy_ingot', 'superpackutils:energetic_alloy_dust', null, 'superpackutils:energetic_alloy_block', 'superpackutils:energetic_alloy_nugget', null, null, null, null, null, null, null, 0, 0, 0, 0, 0, null, 0, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'brass', null, 'create:brass_ingot', null, null, 'create:brass_block', 'create:brass_nugget', null, null, 'create:brass_sheet', 'create:crushed_brass', 'createaddition:brass_rod', null, 'tconstruct:molten_brass', 233, 78, 26, 0, 0, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'netherite', null, 'minecraft:netherite_ingot', 'mekanism:dust_netherite', null, 'minecraft:netherite_block', 'tconstruct:netherite_nugget', null, null, null, null, null, null, 'tconstruct:molten_netherite', 221, 74, 25, 0, 0, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(false, 'dark_steel', null, 'superpackutils:dark_steel_ingot', null, null, 'superpackutils:dark_steel_block', 'superpackutils:dark_steel_nugget', null, null, null, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, null, null, null, null, null, null, null, null, null, null, null, null, null);

  unifyOre(true, 'diamond', 'minecraft:diamond_ore', 'minecraft:diamond', 'thermal:diamond_dust', null, 'minecraft:diamond_block', null, null, 'thermal:diamond_gear', null, null, null, null, 'tconstruct:molten_diamond', 237, 79, 0, 158, 0, null, 2, 1, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(true, 'coal', 'minecraft:coal_ore', 'minecraft:coal', 'mekanism:dust_coal', null, 'minecraft:coal_block', null, null, null, null, null, null, null, null, 0, 0, 0, 0, 0, null, 2, 1, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(true, 'coal_coke', null, 'thermal:coal_coke', 'immersiveengineering:dust_coke', null, 'thermal:coal_coke_block', null, null, null, null, null, null, null, null, 0, 0, 0, 0, 0, null, 2, 1, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(true, 'coal_petcoke', null, 'immersivepetroleum:petcoke', 'immersivepetroleum:petcoke_dust', null, 'immersivepetroleum:petcoke_block', null, null, null, null, null, null, null, null, 0, 0, 0, 0, 0, null, 2, 1, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(true, 'charcoal', '#minecraft:logs_that_burn', 'minecraft:charcoal', 'mekanism:dust_charcoal', null, 'thermal:charcoal_block', null, null, null, null, null,  null, null, null, 0, 0, 0, 0, 0, null, 2, 1, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(true, 'emerald', 'minecraft:emerald_ore', 'minecraft:emerald', 'thermal:emerald_dust', null, 'minecraft:emerald_block', null, null, 'thermal:emerald_gear', null, null, null, null, 'tconstruct:molten_emerald', 193, 64, 0, 128, 0, null, 2, 1, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(true, 'lapis', 'minecraft:lapis_ore', 'minecraft:lapis_lazuli', 'thermal:lapis_dust', null, 'minecraft:lapis_block', null, null, 'thermal:lapis_gear', null, null, null, null, null, 0, 0, 0, 0, 0, null, 12, 8, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(true, 'fluorite', 'mekanism:fluorite_ore', 'mekanism:fluorite_gem', 'mekanism:dust_fluorite', null, null, null, null, null, null, null, null, null, null, 0, 0, 0, 0, 0, null, 6, 2, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(true, 'quartz', 'minecraft:nether_quartz_ore', 'minecraft:quartz', 'thermal:quartz_dust', null, 'minecraft:quartz_block', null, null, 'thermal:quartz_gear', null, null, null, null, 'tconstruct:molten_quartz', 110, 55, 0, 0, 0, null, 2, 2, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(true, 'apatite', 'thermal:apatite_ore', 'thermal:apatite', 'thermal:apatite_dust', null, 'thermal:apatite_block', null, null, null, null, null, null, null, null, 0, 0, 0, 0, 0, null, 2, 1, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(true, 'cinnabar', 'thermal:cinnabar_ore', 'thermal:cinnabar', 'thermal:cinnabar_dust', null, 'thermal:cinnabar_block', null, null, null, null, null, null, null, null, 0, 0, 0, 0, 0, null, 2, 1, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(true, 'niter', 'thermal:niter_ore', 'thermal:niter', 'thermal:niter_dust', null, 'thermal:niter_block', null, null, null, null, null, null, null, null, 0, 0, 0, 0, 0, null, 2, 1, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(true, 'ruby', 'thermal:ruby_ore', 'thermal:ruby', 'thermal:ruby_dust', null, 'thermal:ruby_block', null, null, 'thermal:ruby_gear', null, null, null, null, null, 0, 0, 0, 0, 0, null, 2, 1, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(true, 'sapphire', 'thermal:sapphire_ore', 'thermal:sapphire', 'thermal:sapphire_dust', null, 'thermal:sapphire_block', null, null, 'thermal:sapphire_gear', null, null, null, null, null, 0, 0, 0, 0, 0, null, 2, 1, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(true, 'sulfur', 'thermal:sulfur_ore', 'thermal:sulfur', 'thermal:sulfur_dust', null, 'thermal:sulfur_block', null, null, null, null, null, null, null, null, 0, 0, 0, 0, 0, null, 2, 1, null, null, null, null, null, null, null, null, null, null, null, null);
  unifyOre(true, 'ender_pearl', null, 'minecraft:ender_pearl', 'thermal:ender_pearl_dust', null, 'architects_palette:ender_pearl_block', null, null, null, null, null, null, null, null, 0, 0, 0, 0, 0, null, 0, 0, null, null, null, null, null, null, null, null, null, null, null, null);

});