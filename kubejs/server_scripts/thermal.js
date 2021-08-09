//priority: 1500

events.listen('recipes', function (event) { 

    //-----------------------------------------------------
    //Early Thermal
    //-----------------------------------------------------

    //Replace slag in concrete recipes
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'immersiveengineering:slag', 'thermal:slag')
    event.replaceInput({type: 'immersiveengineering:turn_and_copy'}, 'immersiveengineering:slag', 'thermal:slag')
    event.replaceInput({type: 'immersiveengineering:shaped_fluid'}, 'immersiveengineering:slag', 'thermal:slag')

    //Easy Sawdust
    event.remove({id: 'thermal:machine/pulverizer/pulverizer_logs'})

    //Cured Rubber
    event.remove({id: 'thermal:smelting/cured_rubber_from_smelting'})
    event.remove({id: 'thermal:machine/smelter/smelter_cured_rubber'})
    event.custom({"type":"mekanism:purifying","itemInput":{"ingredient":{"item":"thermal:rubber"}},"gasInput":{"amount":1,"gas":"superpackutils:carbon_dioxide"},"output":{"item":"thermal:cured_rubber"}})

    //Sap Bottle Empying
    event.recipes.create.emptying([fluid.of('thermal:sap', 250), 'minecraft:glass_bottle'], 'autumnity:sap_bottle')

    //Syrup Bottle Empying
    event.recipes.create.emptying([fluid.of('thermal:syrup', 250), 'minecraft:glass_bottle'], 'autumnity:syrup_bottle')

    //Hardened Glass
    event.remove({output: 'thermal:obsidian_glass'})
    event.recipes.create.mixing(Item.of('thermal:obsidian_glass', 2), ['thermal:quartz_dust', 'minecraft:obsidian', '#forge:sand'])

    //Blizz Rod
    event.custom({
      "type": "tconstruct:casting_table",
      "cast": {
        "tag": "tconstruct:casts/multi_use/rod"
      },
      "fluid": {
        "name": "superpackutils:molten_blizz",
        "amount": 100
      },
      "result": "thermal:blizz_rod",
      "cooling_time": 57
    })

    event.custom({
      "type": "tconstruct:casting_table",
      "cast": {
        "tag": "tconstruct:casts/single_use/rod"
      },
      "cast_consumed": true,
      "fluid": {
        "name": "superpackutils:molten_blizz",
        "amount": 100
      },
      "result": "thermal:blizz_rod",
      "cooling_time": 57
    })

    //Blitz Rod
    event.custom({
      "type": "tconstruct:casting_table",
      "cast": {
        "tag": "tconstruct:casts/multi_use/rod"
      },
      "fluid": {
        "name": "superpackutils:molten_blitz",
        "amount": 100
      },
      "result": "thermal:blitz_rod",
      "cooling_time": 86
    })

    event.custom({
      "type": "tconstruct:casting_table",
      "cast": {
        "tag": "tconstruct:casts/single_use/rod"
      },
      "cast_consumed": true,
      "fluid": {
        "name": "superpackutils:molten_blitz",
        "amount": 100
      },
      "result": "thermal:blitz_rod",
      "cooling_time": 86
    })

    //Basalz Rod
    event.custom({
      "type": "tconstruct:casting_table",
      "cast": {
        "tag": "tconstruct:casts/multi_use/rod"
      },
      "fluid": {
        "name": "superpackutils:molten_basalz",
        "amount": 100
      },
      "result": "thermal:basalz_rod",
      "cooling_time": 134
    })

    event.custom({
      "type": "tconstruct:casting_table",
      "cast": {
        "tag": "tconstruct:casts/single_use/rod"
      },
      "cast_consumed": true,
      "fluid": {
        "name": "superpackutils:molten_basalz",
        "amount": 100
      },
      "result": "thermal:basalz_rod",
      "cooling_time": 134
    })

    //Signalum Glass
    event.remove({output: 'thermal:signalum_glass'})
    event.custom({
      "type": "pneumaticcraft:pressure_chamber",
      "inputs": [
        {
          "item": "thermal:obsidian_glass"
        },
        {
          "item": "thermal:signalum_dust"
        },
      ],
      "pressure": 3,
      "results": [
        {
          "item": "thermal:signalum_glass"
        }
      ]
  })
  
    //Lumium Glass
    event.remove({output: 'thermal:lumium_glass'})
    event.custom({
      "type": "pneumaticcraft:pressure_chamber",
      "inputs": [
        {
          "item": "thermal:obsidian_glass"
        },
        {
          "item": "thermal:lumium_dust"
        },
      ],
      "pressure": 3,
      "results": [
        {
          "item": "thermal:lumium_glass"
        }
      ]
  })

    //Enderium Glass
    event.remove({output: 'thermal:enderium_glass'})
    event.custom({
      "type": "pneumaticcraft:pressure_chamber",
      "inputs": [
        {
          "item": "thermal:obsidian_glass"
        },
        {
          "item": "thermal:enderium_dust"
        },
      ],
      "pressure": 3,
      "results": [
        {
          "item": "thermal:enderium_glass"
        }
      ]
  })

    //Thermal Arboreal Extractor
    event.remove({output: 'thermal:device_tree_extractor'})
    event.shaped('thermal:device_tree_extractor', ['TDT', 'BCB', 'TST'], {
        T: '#forge:treated_wood',
        C: 'create:andesite_casing',
        B: 'minecraft:bucket',
        D: 'superpackutils:treetap',
        S: 'thermal:iron_plate'
    }),

    //Redstone Servo
    event.remove({output: 'thermal:redstone_servo'})
    event.shaped('thermal:redstone_servo', ['TST', 'BCB', 'TST'], {
        T: 'minecraft:redstone',
        C: 'minecraft:iron_ingot',
        B: 'immersiveengineering:stick_steel',
        S: 'thermal:invar_plate'
    }),

    event.recipes.mekanism.metallurgic_infusing('thermal:redstone_servo', 'immersiveengineering:component_iron', 'mekanism:redstone', 20),

    //Thermal Aqueous Accumulator
    event.remove({output: 'thermal:device_water_gen'})
    event.shaped('thermal:device_water_gen', ['TDT', 'BCB', 'TST'], {
        T: '#forge:sheetmetals/lead',
        C: 'create:copper_casing',
        B: '#forge:ingots/copper',
        D: '#create:valve_handles', 
        S: 'create:hose_pulley'
    }),

    //Phyto-Soil Infuser
    event.remove({output: 'thermal:device_soil_infuser'})
    event.shaped('thermal:device_soil_infuser', ['TDT', 'BCB', 'TST'], {
        T: 'immersiveengineering:treated_wood_horizontal',
        C: 'immersiveengineering:light_engineering',
        B: 'superpackutils:phyto_filter',
        D: 'createaddition:capacitor', 
        S: 'botania:agricarnation'
    }),

    //Thermal Hive Hopper
    event.remove({output: 'thermal:device_hive_extractor'})
    event.shaped('thermal:device_hive_extractor', ['TNT', 'RCD', 'TST'], {
        T: '#forge:treated_wood',
        C: 'create:andesite_casing',
        R: 'minecraft:shears',
        N: '#forge:plates/nickel',
        D: 'minecraft:dispenser',
        S: 'thermal:iron_plate'
    }),

    //Thermal Nullifier
    event.remove({output: 'thermal:device_nullifier'})
    event.shaped('thermal:device_nullifier', ['LBL', 'PCP', 'AOA'], {
        C: 'create:andesite_casing',
        A: '#forge:sheetmetals/aluminum',
        L: '#forge:sheetmetals/lead',
        P: '#forge:plates/aluminum',
        B: 'minecraft:lava_bucket',
        O: '#forge:obsidian'
    }),

    //Thermal Igneous Extruder
    event.remove({output: 'thermal:device_rock_gen'})
    event.shaped('thermal:device_rock_gen', ['LBL', 'PCP', 'AOA'], {
        C: 'immersiveengineering:light_engineering',
        A: '#forge:sheetmetals/aluminum',
        L: '#forge:sheetmetals/lead',
        P: '#forge:plates/invar',
        B: 'botania:manasteel_pick',
        O: 'thermal:drill_head'
    }),

    //Thermal Vacuumulator
    event.remove({output: 'thermal:device_collector'})
    event.shaped('thermal:device_collector', ['LBL', 'PCP', 'AOA'], {
        C: 'immersiveengineering:light_engineering',
        A: '#forge:sheetmetals/aluminum',
        L: '#forge:sheetmetals/lead',
        P: '#forge:plates/lead',
        B: 'minecraft:hopper',
        O: 'botania:hopperhock'
    }),

    //Energetic Infuser
    event.remove({output: 'thermal:charge_bench'})
    event.shaped('thermal:charge_bench', ['ECE', 'PBP', 'LRL'], {
        E: '#forge:sheetmetals/electrum',
        C: 'immersiveengineering:charging_station',
        P: '#forge:plates/copper',
        B: 'create:brass_casing',
        L: '#forge:sheetmetals/lead',
        R: 'superpackutils:reinforced_capacitor'
    }),

    //Decoctive Diffuser
    event.remove({output: 'thermal:device_potion_diffuser'})
    event.shaped('thermal:device_potion_diffuser', ['ECE', 'PBP', 'LRL'], {
        E: '#forge:sheetmetals/lead',
        C: 'minecraft:glass_bottle',
        P: '#forge:plates/silver',
        B: 'immersiveengineering:light_engineering',
        L: '#forge:sheetmetals/aluminum',
        R: 'minecraft:dropper'
    }),

    //Tinker's Workbench
    event.remove({output: 'thermal:tinker_bench'})
    event.shaped('thermal:tinker_bench', ['LML', 'TAT', 'TCT'], {
        A: 'create:andesite_casing',
        L: '#forge:sheetmetals/lead',
        C: 'superpackutils:sturdy_capacitor',
        M: 'engineersdecor:metal_crafting_table',
        T: '#forge:treated_wood'
    }),

    //Redstone Flux Coil
    event.remove({id: 'thermal:rf_coil'})
    event.recipes.mekanism.metallurgic_infusing('thermal:rf_coil', 'immersiveengineering:coil_mv', 'mekanism:redstone', 160),

    //Rubber
    event.remove({id: 'thermal:rubber_from_vine'})
    event.remove({id: 'thermal:rubber_3'})
    event.remove({id: 'thermal:rubber_from_dandelion'})
    event.recipes.create.compacting(Item.of('thermal:rubber', 3), [fluid.of('thermal:latex', 1000)]),

    //Ingot Cast
    event.remove({output: 'thermal:chiller_ingot_cast'})
    event.shaped('thermal:chiller_ingot_cast', [' C ', 'CIC', ' C '], {
        C: '#forge:plates/bronze',
        I: '#forge:ingots'
    }),

    //Rod Cast
    event.remove({output: 'thermal:chiller_rod_cast'})
    event.shaped('thermal:chiller_rod_cast', [' C ', 'CIC', ' C '], {
        C: '#forge:plates/bronze',
        I: '#forge:rods'
    }),

    //Rich Slag
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "infuser",
        "controllerId": "infuser",
        "ticks": 1000,
        "inputs": [
            {
                "type": "masterfulmachinery:energy",
                "data":{
                    "amount": 1000
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "thermal:slag",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "immersivepetroleum:napalm",
                    "amount": 35
                }
            },
            {
                "type": "masterfulmachinery:mekanism_gas",
                "data":{
                    "gas": "mekanism:sulfur_dioxide",
                    "amount": 100
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "thermal:rich_slag",
                    "count": 1
                }
            }
        ]
    })

    //Enderium
    event.custom({
      "type": "masterfulmachinery:machine_process",
      "structureId": "improved_metallurgic_fabricator",
      "controllerId": "improved_metallurgic_fabricator",
      "ticks": 1000,
      "inputs": [
          {
              "type": "masterfulmachinery:pncr_pressure",
              "data":{
                  "air": 100
              }
          },
          {
              "type": "masterfulmachinery:items",
              "data":{
                  "item": "thermal:blizz_powder",
                  "count": 1
              }
          },
          {
              "type": "masterfulmachinery:items",
              "data":{
                  "item": "superpackutils:platinum_ingot",
                  "count": 1
              }
          },
          {
              "type": "masterfulmachinery:items",
              "data":{
                  "item": "thermal:lead_ingot",
                  "count": 1
              }
          },
          {
              "type": "masterfulmachinery:items",
              "data":{
                  "item": "mekanism:ingot_refined_obsidian",
                  "count": 1
              }
          }
      ],
      "outputs":[
          {
              "type": "masterfulmachinery:items",
              "data":{
                  "item": "thermal:enderium_ingot",
                  "count": 1
              }
          }
      ]
  })

  //Signalum
  event.custom({
      "type": "masterfulmachinery:machine_process",
      "structureId": "improved_metallurgic_fabricator",
      "controllerId": "improved_metallurgic_fabricator",
      "ticks": 1000,
      "inputs": [
          {
              "type": "masterfulmachinery:pncr_pressure",
              "data":{
                  "air": 100
              }
          },
          {
              "type": "masterfulmachinery:items",
              "data":{
                  "item": "thermal:basalz_powder",
                  "count": 1
              }
          },
          {
              "type": "masterfulmachinery:items",
              "data":{
                  "item": "thermal:copper_ingot",
                  "count": 1
              }
          },
          {
              "type": "masterfulmachinery:items",
              "data":{
                  "item": "thermal:silver_ingot",
                  "count": 1
              }
          },
          {
              "type": "masterfulmachinery:items",
              "data":{
                  "item": "superpackutils:refined_redstone_ingot",
                  "count": 1
              }
          }
      ],
      "outputs":[
          {
              "type": "masterfulmachinery:items",
              "data":{
                  "item": "thermal:signalum_ingot",
                  "count": 1
              }
          }
      ]
  })

  //Lumium
  event.custom({
      "type": "masterfulmachinery:machine_process",
      "structureId": "improved_metallurgic_fabricator",
      "controllerId": "improved_metallurgic_fabricator",
      "ticks": 1000,
      "inputs": [
          {
              "type": "masterfulmachinery:pncr_pressure",
              "data":{
                  "air": 100
              }
          },
          {
              "type": "masterfulmachinery:items",
              "data":{
                  "item": "thermal:blitz_powder",
                  "count": 1
              }
          },
          {
              "type": "masterfulmachinery:items",
              "data":{
                  "item": "thermal:silver_ingot",
                  "count": 1
              }
          },
          {
              "type": "masterfulmachinery:items",
              "data":{
                  "item": "thermal:tin_ingot",
                  "count": 1
              }
          },
          {
              "type": "masterfulmachinery:items",
              "data":{
                  "item": "mekanism:ingot_refined_glowstone",
                  "count": 1
              }
          }
      ],
      "outputs":[
          {
              "type": "masterfulmachinery:items",
              "data":{
                  "item": "thermal:lumium_ingot",
                  "count": 1
              }
          }
      ]
  })
  
    //Coal Coke
    event.remove({id: 'thermal:machine/pyrolyzer/pyrolyzer_logs'})
    event.custom({
        "type": "thermal:pyrolyzer",
        "ingredient": {
          "tag": "minecraft:logs"
        },
        "result": [
          {
            "item": "minecraft:charcoal"
          },
          {
            "fluid": "immersiveengineering:creosote",
            "amount": 250
          }
        ],
        "experience": 0.15
    }),

    event.remove({id: 'thermal:machine/pyrolyzer/pyrolyzer_coal'})
    event.custom({
        "type": "thermal:pyrolyzer",
        "ingredient": {
          "item": "minecraft:coal"
        },
        "result": [
          {
            "item": "thermal:coal_coke"
          },
          {
            "item": "thermal:tar",
            "chance": 0.25
          },
          {
            "fluid": "immersiveengineering:creosote",
            "amount": 500
          }
        ],
        "experience": 0.15
    })

    //Oil Sand
    event.remove({id: 'thermal:machine/centrifuge/centrifuge_oil_red_sand'})
    event.custom({
      "type": "thermal:centrifuge",
      "ingredient": {
        "item": "thermal:oil_red_sand"
      },
      "result": [
        {
          "item": "minecraft:red_sand",
          "chance": 0.75,
          "locked": true
        },
        {
          "item": "thermal:bitumen",
          "chance": 1.5
        },
        {
          "item": "thermal:tar",
          "chance": 1.0
        },
        {
          "fluid": "immersivepetroleum:oil",
          "amount": 100
        }
      ],
      "energy": 20000
    })

    event.remove({id: 'thermal:machine/centrifuge/centrifuge_oil_sand'})
    event.custom({
      "type": "thermal:centrifuge",
      "ingredient": {
        "item": "thermal:oil_sand"
      },
      "result": [
        {
          "item": "minecraft:sand",
          "chance": 0.75,
          "locked": true
        },
        {
          "item": "thermal:bitumen",
          "chance": 1.5
        },
        {
          "item": "thermal:tar",
          "chance": 1.0
        },
        {
          "fluid": "immersivepetroleum:oil",
          "amount": 100
        }
      ],
      "energy": 20000
    })

});