//priority: 1500

events.listen('recipes', function (event) {

    //-----------------------------------------------------
    //Superpack: Utils
    //-----------------------------------------------------

    //Lubrified LPG
    event.custom({
        "type": "pneumaticcraft:fluid_mixer",
        "input1": {
          "type": "pneumaticcraft:fluid",
          "fluid": "pneumaticcraft:lpg",
          "amount": 25
        },
        "input2": {
          "type": "pneumaticcraft:fluid",
          "fluid": "immersivepetroleum:lubricant",
          "amount": 25
        },
        "fluid_output": {
          "fluid": "superpackutils:lubrified_lpg_fluid",
          "amount": 50
        },
        "pressure": 2.0,
        "time": 300
    }),
  
    //Dimensional Plasma
    event.custom({
        "type": "astralsorcery:lightwell",
        "input": {
          "item": "superpackutils:dimensional_stone"
        },
        "output": "betterportals:portal_fluid_still",
        "productionMultiplier": 2.0,
        "shatterMultiplier": 30.0,
        "color": -11310593
    }),

    //Reinforced Steel Casing 
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "assembler",
        "controllerId": "assembler",
        "ticks": 100,
        "inputs": [
            {
                "type": "masterfulmachinery:energy",
                "data":{
                    "amount": 1000
                }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "youmatter:stabilizer",
                    "amount": 1500
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "pneumaticcraft:ingot_iron_compressed",
                    "count": 8
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "mekanism:ingot_osmium",
                    "count": 2
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "superpackutils:doublelayered_capacitor",
                    "count": 2
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "superpackutils:electrical_steel_ingot",
                    "count": 4
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "mekanism:steel_casing",
                    "count": 1
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "superpackutils:big_steel_casing",
                    "count": 1
                }
            }
        ]
    })

    //Redstone Alloy
    event.custom({
      "type": "pneumaticcraft:pressure_chamber",
      "inputs": [
        {
          "item": "minecraft:iron_ingot"
        },
        {
          "item": "minecraft:redstone"
        },
      ],
      "pressure": -0.75,
      "results": [
        {
          "item": "superpackutils:redstone_alloy_ingot"
        }
      ]
  })
  
    //Dimensional Rock
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "superpackutils:dimensional_stone"
        },
        "ingredients": [
          {
            "item": "minecraft:obsidian"
          },
          {
            "item": "minecraft:obsidian"
          },
          {
            "item": "minecraft:obsidian"
          },
          {
            "item": "minecraft:obsidian"
          },
          {
            "item": "minecraft:obsidian"
          },
          {
            "item": "minecraft:obsidian"
          },
          {
            "item": "botania:rune_mana"
          },
          {
            "item": "botania:livingrock"
          },
          {
            "item": "botania:mana_pearl"
          },
          {
            "tag": "forge:ingots/manasteel"
          }
        ]
    }),
  
    //Electrical Platinum Ingot
    event.recipes.immersiveengineering.arc_furnace([Item.of('superpackutils:electrical_platinum_ingot', 4)], 'superpackutils:platinum_ingot', ['thermal:electrum_dust', Item.of('thermal:silver_dust', 2)], 'thermal:slag')
 
    //Electrical Steel Ingot
    event.recipes.immersiveengineering.arc_furnace([Item.of('superpackutils:electrical_steel_ingot', 4)], 'mekanism:ingot_steel', ['superpackutils:hsla_steel_ingot', Item.of('thermal:silver_dust', 2)], 'thermal:slag')

    //Rune
    event.recipes.create.pressing('superpackutils:rune', 'botania:livingrock')

    //Basic Alloy
    event.shaped('superpackutils:basic_alloy', [' C ', 'EIE', ' C '], {
        C: '#mekanism:enriched/carbon',
        E: 'thermal:rich_slag',
        I: 'create:andesite_alloy'
    }),

    //Nugget Cast
    event.shaped('superpackutils:chiller_nugget_cast', [' C ', 'CIC', ' C '], {
        C: '#forge:plates/bronze',
        I: '#forge:nuggets'
    }),

    //Gear Cast
    event.shaped('superpackutils:chiller_gear_cast', [' C ', 'CIC', ' C '], {
        C: '#forge:plates/bronze',
        I: '#forge:gears'
    }),

    //Plates Cast
    event.shaped('superpackutils:chiller_plate_cast', [' C ', 'CIC', ' C '], {
        C: '#forge:plates/bronze',
        I: '#forge:plates'
    }),

    //Coin Cast
    event.shaped('superpackutils:chiller_coin_cast', [' C ', 'CIC', ' C '], {
        C: '#forge:plates/bronze',
        I: '#forge:coins'
    }),

    //Stabilizer
    event.custom({
      "type": "masterfulmachinery:machine_process",
      "structureId": "infuser",
      "controllerId": "infuser",
      "ticks": 100,
      "inputs": [
          {
              "type": "masterfulmachinery:energy",
              "data":{
                  "amount": 1000
              }
          },
          {
              "type": "masterfulmachinery:mekanism_gas",
              "data":{
                  "gas": "superpackutils:ammonia",
                  "amount": 200
              }
          },
          {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "tconstruct:molten_osmium",
                "amount": 100
            }
        },
          {
              "type": "masterfulmachinery:items",
              "data":{
                  "item": "superpackutils:tetraethyl_lead_dust",
                  "count": 1
              }
          }
      ],
      "outputs":[
          {
              "type": "masterfulmachinery:mekanism_gas",
              "data":{
                  "gas": "superpackutils:stabilizer",
                  "amount": 250
              }
          }
      ]
  })

    //Igneous Deepslate Generation
    event.custom({
      "type": "thermal:rock_gen",
      "adjacent": "minecraft:water",
      "below": "minecraft:bedrock",
      "result": {
        "item": "superpackutils:deepslate"
      }
    })

    //Nitrogen
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "collector",
        "controllerId": "collector",
        "ticks": 20,
        "inputs": [
          {
            "type": "masterfulmachinery:mekanism_gas",
            "data":{
                "gas": "mekanism:hydrogen",
                "amount": 20
            }
            },
            {
                "type": "masterfulmachinery:energy",
                "data":{
                    "amount": 20
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:mekanism_gas",
                "data":{
                    "gas": "superpackutils:nitrogen",
                    "amount": 20
                }
            }
        ]
    })

    //Carbon Dioxide
    event.custom({
      "type": "masterfulmachinery:machine_process",
      "structureId": "collector",
      "controllerId": "collector",
      "ticks": 20,
      "inputs": [
        {
          "type": "masterfulmachinery:mekanism_gas",
          "data":{
              "gas": "mekanism:oxygen",
              "amount": 40
          }
          },
          {
              "type": "masterfulmachinery:energy",
              "data":{
                  "amount": 20
              }
          }
      ],
      "outputs":[
          {
              "type": "masterfulmachinery:mekanism_gas",
              "data":{
                  "gas": "superpackutils:carbon_dioxide",
                  "amount": 20
              }
          }
      ]
  })

      //Energetic Alloy
      event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "metallurgic_fabricator",
        "controllerId": "metallurgic_fabricator",
        "ticks": 1000,
        "inputs": [
            {
                "type": "masterfulmachinery:energy",
                "data":{
                    "amount": 5000
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:glowstone_dust",
                    "count": 3
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "botania:quartz_blaze",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "superpackutils:bloody_pigment",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "create:brass_ingot",
                    "count": 1
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "superpackutils:energetic_alloy_ingot",
                    "count": 1
                }
            }
        ]
    })

    //Vibrant Alloy
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "metallurgic_fabricator",
        "controllerId": "metallurgic_fabricator",
        "ticks": 1000,
        "inputs": [
            {
                "type": "masterfulmachinery:energy",
                "data":{
                    "amount": 10000
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "thermal:ender_pearl_dust",
                    "count": 3
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "botania:quartz_elven",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "superpackutils:grassy_pigment",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "mekanism:ingot_uranium",
                    "count": 1
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "superpackutils:vibrant_alloy_ingot",
                    "count": 1
                }
            }
        ]
    })

    //HSLA Steel Ingot
    event.custom({
      "type": "masterfulmachinery:machine_process",
      "structureId": "metallurgic_fabricator",
      "controllerId": "metallurgic_fabricator",
      "ticks": 1000,
      "inputs": [
          {
              "type": "masterfulmachinery:energy",
              "data":{
                  "amount": 2000
              }
          },
          {
              "type": "masterfulmachinery:items",
              "data":{
                  "item": "immersiveengineering:dust_hop_graphite",
                  "count": 1
              }
          },
          {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "minecraft:iron_ingot",
                "count": 1
            }
        },
          {
              "type": "masterfulmachinery:items",
              "data":{
                  "item": "superpackutils:manganese_dust",
                  "count": 1
              }
          }
      ],
      "outputs":[
          {
              "type": "masterfulmachinery:items",
              "data":{
                  "item": "superpackutils:hsla_steel_ingot",
                  "count": 1
              }
          }
      ]
  })

    //Starlight Shard
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "infuser",
        "controllerId": "infuser",
        "ticks": 3000,
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
                    "item": "superpackutils:ender_pearl_nugget",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "astralsorcery:liquid_starlight",
                    "amount": 250
                }
            },
            {
                "type": "masterfulmachinery:mekanism_gas",
                "data":{
                    "gas": "superpackutils:chemical_death",
                    "amount": 100
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "superpackutils:starlight_shard",
                    "count": 1
                }
            }
        ]
    })

    //Inscriber Casing
    event.remove({output: 'superpackutils:inscriber_casing'})
    event.shaped(Item.of('superpackutils:inscriber_casing', 4), ['BCB', 'AIA', 'BCB'], {
          C: 'refinedstorage:quartz_enriched_iron',
          A: 'superpackutils:reinforced_capacitor',
          B: '#forge:sheetmetals/aluminum',
          I: 'refinedstorage:machine_casing'
    }),

    //Metallurgic Casing
    event.remove({output: 'superpackutils:metallurgic_casing'})
    event.shaped(Item.of('superpackutils:metallurgic_casing', 4), ['BCB', 'AIA', 'BCB'], {
          C: 'libvulpes:ingotsilicon',
          A: 'superpackutils:reinforced_capacitor',
          B: '#forge:sheetmetals/lead',
          I: 'refinedstorage:machine_casing'
    }),

    //Infuser Casing
    event.remove({output: 'superpackutils:infuser_casing'})
    event.shaped(Item.of('superpackutils:infuser_casing', 4), ['BCB', 'AIA', 'BCB'], {
          C: 'thermal:constantan_ingot',
          A: 'superpackutils:sturdy_capacitor',
          B: '#forge:sheetmetals/copper',
          I: 'mekanism:steel_casing'
    }),

    //Mixed Alloy Ingot
    event.shaped('superpackutils:mixed_alloy_ingot', ['III', 'NNN', 'CCC'], {
      C: 'thermal:copper_plate',
      N: 'thermal:nickel_plate',
      I: 'thermal:tin_plate'
    }),
  
    //Copper Solenoid
    event.custom({"type":"immersiveengineering:blueprint","inputs":[{"count":3,"base_ingredient":{"item":"thermal:copper_plate"}},{"count":1,"base_ingredient":{"item":"immersiveengineering:wire_electrum"}},{"count":2,"base_ingredient":{"item":"immersiveengineering:stick_aluminum"}},{"count":1,"base_ingredient":{"item":"superpackutils:mixed_alloy_ingot"}}],"category":"components","result":{"item":"superpackutils:copper_solenoid","count":1}})

    //Polished Quartz
    event.recipes.create.sandpaper_polishing('superpackutils:polished_quartz', 'minecraft:quartz')
    event.recipes.mekanism.enriching('superpackutils:polished_quartz', 'minecraft:quartz')

    //Silicon Dioxide Oxiding
    event.custom({"type":"mekanism:oxidizing","input":{"ingredient":{"tag":"forge:dusts/quartz"}},"output":{"gas":"superpackutils:silicon_dioxide","amount":100}})

    //Ethyl Chloride
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1,"gas":"mekanism:hydrogen_chloride"},"rightInput":{"amount":1,"gas":"mekanism:ethene"},"output":{"gas":"superpackutils:ethyl_chloride","amount":1}})

    //Ammonia
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1,"gas":"mekanism:hydrogen"},"rightInput":{"amount":1,"gas":"superpackutils:nitrogen"},"output":{"gas":"superpackutils:ammonia","amount":1}})

    //Methane
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":4,"gas":"mekanism:hydrogen"},"rightInput":{"amount":1,"gas":"superpackutils:carbon_dioxide"},"output":{"gas":"superpackutils:methane","amount":5}})

    //Cyanide
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1,"gas":"superpackutils:ammonia"},"rightInput":{"amount":1,"gas":"superpackutils:methane"},"output":{"gas":"superpackutils:cyanide","amount":1}})

    //Tetraethyl Lead Dust
    event.custom({"type":"mekanism:reaction","itemInput":{"ingredient":{"item":"thermal:lead_dust"}},"fluidInput":{"amount":50,"tag":"forge:sodium"},"gasInput":{"amount":100,"gas":"superpackutils:ethyl_chloride"},"energyRequired":200,"duration":400,"itemOutput":{"item":"superpackutils:tetraethyl_lead_dust","count":1},"gasOutput":{"gas":"mekanism:oxygen","amount":10}})

    //Chemical Death
    event.custom({"type":"mekanism:reaction","itemInput":{"amount":1,"ingredient":{"item":"botania:living_root"}},"fluidInput":{"amount":600,"tag":"minecraft:water"},"gasInput":{"amount":200,"gas":"superpackutils:cyanide"},"duration":37,"gasOutput":{"gas":"superpackutils:chemical_death","amount":100}})

    //Industrial Sand
    event.recipes.immersiveengineering.crusher('superpackutils:industrial_sand', 'create:limesand')

    //Bedrock Dust & Limestone Dust
    event.recipes.create.crushing([Item.of('superpackutils:limestone_dust').withChance(0.35), 'superpackutils:bedrock_dust', Item.of('superpackutils:bedrock_dust').withChance(0.45)], 'superpackutils:deepslate', 350)

    //Bloody Pigment
    event.recipes.immersiveengineering.crusher('thermal:sawdust', 'superpackutils:bloody_sawdust', Item.of('superpackutils:bloody_pigment').withChance(0.30))

    //Grassy Pigment
    event.recipes.immersiveengineering.crusher('thermal:sawdust', 'superpackutils:grassy_sawdust', Item.of('superpackutils:grassy_pigment').withChance(0.30))

    //Azure Pigment
    event.recipes.immersiveengineering.crusher('thermal:sawdust', 'superpackutils:azure_sawdust', Item.of('superpackutils:azure_pigment').withChance(0.30))

    //Ender Pearl Nugget
    event.custom({
      "type": "tconstruct:casting_table",
      "cast": {
        "tag": "tconstruct:casts/single_use/nugget"
      },
      "cast_consumed": true,
      "fluid": {
        "name": "tconstruct:molten_ender",
        "amount": 28
      },
      "result": "superpackutils:ender_pearl_nugget",
      "cooling_time": 7
    })

    event.custom({
      "type": "tconstruct:casting_table",
      "cast": {
        "tag": "tconstruct:casts/multi_use/nugget"
      },
      "fluid": {
        "name": "tconstruct:molten_ender",
        "amount": 28
      },
      "result": "superpackutils:ender_pearl_nugget",
      "cooling_time": 7
    })
    
    //Reinforced Capacitor 
    event.shaped('superpackutils:reinforced_capacitor', ['III', 'BAB', 'CCC'], {
      C: '#forge:nuggets/electrum',
      A: 'createaddition:capacitor',
      B: 'superpackutils:bedrock_dust',
      I: '#forge:plates/iron'
    }),

    //Sturdy Capacitor
    event.shaped('superpackutils:sturdy_capacitor', ['ISI', 'BAB', 'CCC'], {
      C: '#forge:nuggets/electrum',
      A: 'superpackutils:reinforced_capacitor',
      B: 'superpackutils:energetic_alloy_ingot',
      S: 'immersiveengineering:component_steel',
      I: '#forge:plates/steel'
    }),

    //Double-Layered Capacitor
    event.shaped('superpackutils:doublelayered_capacitor', ['ISI', 'BAB', 'CCC'], {
      C: '#forge:nuggets/electrum',
      A: 'superpackutils:sturdy_capacitor',
      B: 'superpackutils:vibrant_alloy_ingot',
      S: 'superpackutils:reinforced_capacitor',
      I: '#forge:gears/compressed_iron'
    }),

    //Starlight-Infused Mana Pearl
    event.custom({
      "type": "mythicbotany:infusion",
      "group": "infuser",
      "output": {
        "item": "superpackutils:starlight_infused_mana_pearl"
      },
      "mana": 1000000,
      "ingredients": [
        {
          "item": "youmatter:black_hole"
        },
        {
          "item": "botania:mana_pearl"
        },
        {
          "item": "superpackutils:starlight_shard"
        }
      ],
      "fromColor": 11645874,
      "toColor": 2742742
    })

    //Starlight-Infused Mana Diamond
    event.custom({
      "type": "mythicbotany:infusion",
      "group": "infuser",
      "output": {
        "item": "superpackutils:starlight_infused_mana_diamond"
      },
      "mana": 1000000,
      "ingredients": [
        {
          "item": "youmatter:black_hole"
        },
        {
          "item": "botania:mana_diamond"
        },
        {
          "item": "superpackutils:starlight_shard"
        }
      ],
      "fromColor": 11645874,
      "toColor": 2742742
    })

    //Dyingrock
    event.recipes.mekanism.metallurgic_infusing('superpackutils:dyingrock', 'botania:livingrock', 'mekanism:carbon', 80),

    //Superheated Bronze Ingot
    event.recipes.create.compacting('superpackutils:superheated_bronze_ingot', ['#forge:ingots/bronze', fluid.of('tconstruct:magma_cream', 50)]).superheated(),

    //Weird Fungu
    event.recipes.create.filling('superpackutils:weird_fungu', ['minecraft:crimson_fungus', fluid.of('mekanismgenerators:bioethanol', 1000)]),

    //Bio Plastic
    event.custom({"type":"immersiveengineering:mixer","inputs":[{"item":"thermal:sawdust"},{"item":"thermal:rubber"}],"result":{"fluid":"superpackutils:molten_bio_plastic_fluid","amount":1000},"fluid":{"tag":"forge:biodiesel","amount":1000},"energy":3200}),
    event.recipes.create.compacting('superpackutils:bio_plastic', [fluid.of('superpackutils:molten_bio_plastic_fluid', 1000)]),
  
    //Compressed Steel Ingot
    event.custom({"type":"immersiveengineering:squeezer","result":{"item":"superpackutils:compressed_steel_ingot"},"input":{"count":1,"base_ingredient":{"tag":"forge:ingots/steel"}},"energy":19200})

});