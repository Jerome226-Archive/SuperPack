//priority: 1500

events.listen('recipes', function (event) {

    //-----------------------------------------------------
    //Superpack: Utils
    //-----------------------------------------------------

    function oilCracking(inputOil, inputFluid, outputOil) {

    //Refinery
    event.custom({"type":"immersiveengineering:refinery","result":{"fluid":`${outputOil}`,"amount":100},"input0":{"tag":`${inputFluid}`,"amount":10},"input1":{"tag":`${inputOil}`,"amount":100},"energy":120})

    }

    oilCracking('forge:naphtha', 'forge:steam', 'superpackutils:sc_naphtha')
    oilCracking('forge:naphtha', 'forge:hydrogen', 'superpackutils:hc_naphtha')

    oilCracking('forge:light_oil', 'forge:steam', 'superpackutils:sc_light_oil')
    oilCracking('forge:light_oil', 'forge:hydrogen', 'superpackutils:hc_light_oil')

    oilCracking('forge:heavy_oil', 'forge:steam', 'superpackutils:sc_heavy_oil')
    oilCracking('forge:heavy_oil', 'forge:hydrogen', 'superpackutils:hc_heavy_oil')

    //ABS Sheet
    event.shaped('superpackutils:abs_sheet', ['AAA', 'A A', 'AAA'], {
      A: 'superpackutils:abs_pellet'
    }),

    event.recipes.mekanism.enriching('superpackutils:abs_sheet', Item.of('superpackutils:abs_pellet', 3))

    //Napalm
    event.custom({
      "type": "immersiveengineering:mixer",
      "inputs": [
        {
          "count": 3,
          "base_ingredient": {
            "item": "superpackutils:polystyrene_bar"
          }
        }
      ],
      "result": {
        "fluid": "superpackutils:napalm_b",
        "amount": 500
      },
      "fluid": {
        "tag": "forge:ho_gasoline",
        "amount": 500
      },
      "energy": 10000
    })

    //Propene
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:propene"},"gasOutput":{"gas":"superpackutils:propene","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:propene"},"fluidOutput":{"fluid":"superpackutils:propene","amount":1}})
  
    //Benzene
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:benzene"},"gasOutput":{"gas":"superpackutils:benzene","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:benzene"},"fluidOutput":{"fluid":"superpackutils:benzene","amount":1}})

    //Ethyl Benzene
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:ethyl_benzene"},"gasOutput":{"gas":"superpackutils:ethyl_benzene","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:ethyl_benzene"},"fluidOutput":{"fluid":"superpackutils:ethyl_benzene","amount":1}})

    //Butadiene
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:butadiene"},"gasOutput":{"gas":"superpackutils:butadiene","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:butadiene"},"fluidOutput":{"fluid":"superpackutils:butadiene","amount":1}})

    //Acrylonitrile
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:acrylonitrile"},"gasOutput":{"gas":"superpackutils:acrylonitrile","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:acrylonitrile"},"fluidOutput":{"fluid":"superpackutils:acrylonitrile","amount":1}})

    //ABS
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:abs"},"gasOutput":{"gas":"superpackutils:abs","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:abs"},"fluidOutput":{"fluid":"superpackutils:abs","amount":1}})

    //Ethyl Chloride
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:ethyl_chloride"},"gasOutput":{"gas":"superpackutils:ethyl_chloride","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:ethyl_chloride"},"fluidOutput":{"fluid":"superpackutils:ethyl_chloride","amount":1}})

    //Silicon Dioxide
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:silicon_dioxide"},"gasOutput":{"gas":"superpackutils:silicon_dioxide","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:silicon_dioxide"},"fluidOutput":{"fluid":"superpackutils:silicon_dioxide","amount":1}})

    //Polyethene
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:polyethene"},"gasOutput":{"gas":"superpackutils:polyethene","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:polyethene"},"fluidOutput":{"fluid":"superpackutils:polyethene","amount":1}})

    //Chemical Death
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:chemical_death"},"gasOutput":{"gas":"superpackutils:chemical_death","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:chemical_death"},"fluidOutput":{"fluid":"superpackutils:chemical_death","amount":1}})

    //Ammonia
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:ammonia"},"gasOutput":{"gas":"superpackutils:ammonia","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:ammonia"},"fluidOutput":{"fluid":"superpackutils:ammonia","amount":1}})
    
    //Cyanide
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:cyanide"},"gasOutput":{"gas":"superpackutils:cyanide","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:cyanide"},"fluidOutput":{"fluid":"superpackutils:cyanide","amount":1}})

    //Carbon Dioxide
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:carbon_dioxide"},"gasOutput":{"gas":"superpackutils:carbon_dioxide","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:carbon_dioxide"},"fluidOutput":{"fluid":"superpackutils:carbon_dioxide","amount":1}})
   
    //Methane
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:methane"},"gasOutput":{"gas":"superpackutils:methane","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:methane"},"fluidOutput":{"fluid":"superpackutils:methane","amount":1}})

    //Butane
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:butane"},"gasOutput":{"gas":"superpackutils:butane","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:butane"},"fluidOutput":{"fluid":"superpackutils:butane","amount":1}})

    //Butene
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:butene"},"gasOutput":{"gas":"superpackutils:butene","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:butene"},"fluidOutput":{"fluid":"superpackutils:butene","amount":1}})

    //Propane
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:propane"},"gasOutput":{"gas":"superpackutils:propane","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:propane"},"fluidOutput":{"fluid":"superpackutils:propane","amount":1}})

    //Isoprene
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:isoprene"},"gasOutput":{"gas":"superpackutils:isoprene","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:isoprene"},"fluidOutput":{"fluid":"superpackutils:isoprene","amount":1}})

    //ETBE
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:etbe"},"gasOutput":{"gas":"superpackutils:etbe","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:etbe"},"fluidOutput":{"fluid":"superpackutils:etbe","amount":1}})

    //Styrene
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:styrene"},"gasOutput":{"gas":"superpackutils:styrene","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:styrene"},"fluidOutput":{"fluid":"superpackutils:styrene","amount":1}})

    //Pure Sulfuric
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:pure_sulfuric_acid"},"gasOutput":{"gas":"superpackutils:pure_sulfuric_acid","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:pure_sulfuric_acid"},"fluidOutput":{"fluid":"superpackutils:pure_sulfuric_acid","amount":1}})

    //Toluene
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:toluene"},"gasOutput":{"gas":"superpackutils:toluene","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:toluene"},"fluidOutput":{"fluid":"superpackutils:toluene","amount":1}})

    //Octane
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:octane"},"gasOutput":{"gas":"superpackutils:octane","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:octane"},"fluidOutput":{"fluid":"superpackutils:octane","amount":1}})

    //Nitrous Oxide
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:nitrous_oxide"},"gasOutput":{"gas":"superpackutils:nitrous_oxide","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:nitrous_oxide"},"fluidOutput":{"fluid":"superpackutils:nitrous_oxide","amount":1}})

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

    //ABS Sheet
    event.custom({"type":"mekanism:reaction","itemInput":{"ingredient":{"item":"superpackutils:polydimethylsiloxane_pulp"}},"fluidInput":{"amount":50,"tag":"forge:oxygen"},"gasInput":{"amount":500,"gas":"superpackutils:abs"},"energyRequired":3000,"duration":60,"itemOutput":{"item":"superpackutils:abs_pellet"},"gasOutput":{"gas":"superpackutils:plastic_waste","amount":200}})
  
    //Electrical Platinum Ingot
    event.recipes.immersiveengineering.arc_furnace([Item.of('superpackutils:electrical_platinum_ingot', 4)], 'superpackutils:platinum_ingot', ['thermal:electrum_dust', Item.of('thermal:silver_dust', 2)], 'thermal:slag')
 
    //Electrical Steel Ingot
    event.recipes.immersiveengineering.arc_furnace([Item.of('superpackutils:electrical_steel_ingot', 4)], 'mekanism:ingot_steel', ['thermal:electrum_dust', Item.of('thermal:silver_dust', 2)], 'thermal:slag')

    //Electrical HSLA Steel Ingot
    event.recipes.immersiveengineering.arc_furnace([Item.of('superpackutils:electrical_hsla_steel_ingot', 4)], 'superpackutils:hsla_steel_ingot', ['thermal:electrum_dust', Item.of('thermal:silver_dust', 2)], 'thermal:slag')

    //Rune
    event.recipes.create.pressing('superpackutils:rune', 'botania:livingrock')

    //Enriched Oil Carbon
    event.recipes.mekanism.enriching('superpackutils:enriched_petcoke', 'immersivepetroleum:petcoke_dust')

    //Basic Alloy
    event.recipes.mekanism.metallurgic_infusing('superpackutils:basic_alloy', 'superpackutils:rich_slag_alloy', 'superpackutils:petroleum_coke', 160),

    //Petroleum Coke
    event.custom({"type":"mekanism:infusion_conversion","input":{"ingredient":{"item":'immersivepetroleum:petcoke_dust'}},"output":{"infuse_type":`superpackutils:petroleum_coke`,"amount":10}})
    event.custom({"type":"mekanism:infusion_conversion","input":{"ingredient":{"item":'superpackutils:enriched_petcoke'}},"output":{"infuse_type":`superpackutils:petroleum_coke`,"amount":80}})

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

    //Propene
    event.custom({"type":"mekanism:separating","input":{"amount":4,"tag":"forge:propane"},"leftGasOutput":{"gas":"superpackutils:propene","amount":3},"rightGasOutput":{"gas":"superpackutils:methane","amount":1}})
    
    //Butene
    event.custom({"type":"mekanism:separating","input":{"amount":4,"tag":"forge:butane"},"leftGasOutput":{"gas":"superpackutils:butene","amount":3},"rightGasOutput":{"gas":"superpackutils:methane","amount":1}})

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
                "amount": 144
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

    //Mythril Ingot
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
                    "item": "superpackutils:depleted_mythril_dust",
                    "count": 3
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "botania:quartz_mana",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "superpackutils:azure_pigment",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "botania:manasteel_ingot",
                    "count": 1
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "superpackutils:mythril_ingot",
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
                    "item": "tconstruct:queens_slime_ingot",
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

    //Enriched Carbon Brick
    event.custom({
      "type": "thermal:bottler",
      "ingredient": [
        {
          "item": "advancedrocketry:carbon_brick"
        },
        {
          "fluid": "thermal:refined_fuel",
          "amount": 300
        }
      ],
      "result": [
        {
          "item": "superpackutils:enriched_carbon_brick"
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
            "item": "superpackutils:refined_redstone_dust"
          },
        ],
        "pressure": -0.75,
        "results": [
          {
            "item": "superpackutils:redstone_alloy_ingot"
          }
        ]
    })

    //Glowstone Alloy
    event.custom({
      "type": "pneumaticcraft:pressure_chamber",
      "inputs": [
        {
          "item": "minecraft:iron_ingot"
        },
        {
          "item": "superpackutils:refined_glowstone_dust"
        },
      ],
      "pressure": -0.75,
      "results": [
        {
          "item": "superpackutils:redstone_alloy_ingot"
        }
      ]
  })

  //Obsidian Alloy
  event.custom({
    "type": "pneumaticcraft:pressure_chamber",
    "inputs": [
      {
        "item": "minecraft:iron_ingot"
      },
      {
        "item": "mekanism:dust_refined_obsidian"
      },
    ],
    "pressure": -0.75,
    "results": [
      {
        "item": "superpackutils:obsidian_alloy_ingot"
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
    event.shaped(Item.of('superpackutils:inscriber_casing', 4), ['BCB', 'AIA', 'BCB'], {
          C: 'refinedstorage:quartz_enriched_iron',
          A: 'superpackutils:reinforced_capacitor',
          B: '#forge:sheetmetals/aluminum',
          I: 'refinedstorage:machine_casing'
    }),

    //Metallurgic Casing
    event.shaped(Item.of('superpackutils:metallurgic_casing', 4), ['BCB', 'AIA', 'BCB'], {
          C: 'libvulpes:ingotsilicon',
          A: 'superpackutils:reinforced_capacitor',
          B: '#forge:sheetmetals/lead',
          I: 'refinedstorage:machine_casing'
    }),

    //Mixer Casing
    event.shaped(Item.of('superpackutils:mixer_casing', 4), ['BCB', 'AIA', 'BCB'], {
      C: 'superpackutils:compressed_steel_ingot',
      A: 'superpackutils:reinforced_capacitor',
      B: '#forge:sheetmetals/steel',
      I: 'refinedstorage:machine_casing'
    }),

    //Infuser Casing
    event.shaped(Item.of('superpackutils:infuser_casing', 4), ['BCB', 'AIA', 'BCB'], {
          C: 'thermal:constantan_ingot',
          A: 'superpackutils:sturdy_capacitor',
          B: '#forge:sheetmetals/copper',
          I: 'mekanism:steel_casing'
    }),

    //Improved Metallurgic Casing
    event.shaped(Item.of('superpackutils:improved_metallurgic_casing', 4), ['BCB', 'AIA', 'BCB'], {
        C: 'superpackutils:abs_sheet',
        A: 'superpackutils:doublelayered_capacitor',
        B: 'superpackutils:metallurgic_casing',
        I: 'superpackutils:big_steel_casing'
    }),

    //Assembler Casing
    event.shaped(Item.of('superpackutils:assembler_frame', 4), ['BCB', 'AIA', 'BCB'], {
          C: 'superpackutils:electrical_platinum_ingot',
          A: 'superpackutils:doublelayered_capacitor',
          B: 'superpackutils:electrical_hsla_steel_ingot',
          I: 'mekanism:steel_casing'
    }),

    //Refined Redstone Dust
    event.recipes.mekanism.metallurgic_infusing('superpackutils:refined_redstone_dust', 'minecraft:redstone', 'mekanism:diamond', 10),

    //Refined Glowstone Dust
    event.recipes.mekanism.metallurgic_infusing('superpackutils:refined_redstone_dust', 'minecraft:glowstone_dust', 'mekanism:diamond', 10),

    //Mixed Alloy Ingot
    event.shaped('superpackutils:mixed_alloy_ingot', ['III', 'NNN', 'CCC'], {
      C: 'thermal:copper_plate',
      N: 'thermal:nickel_plate',
      I: 'thermal:tin_plate'
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
                  "item": "superpackutils:advanced_casing",
                  "count": 3
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
                    "item": "superpackutils:electrical_hsla_steel_ingot",
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

    //Heating Element
    event.shaped(Item.of('superpackutils:heating_element', 2), ['ICI', 'EEE', 'ICI'], {
        C: 'superpackutils:redstone_alloy_ingot',
        E: 'superpackutils:superheated_bronze_ingot',
        I: 'immersiveengineering:stick_steel'
    })

    //Circuit Board
    event.custom({"type":"immersiveengineering:blueprint","inputs":[{"count":1,"base_ingredient":{"item":"create:integrated_circuit"}},{"count":1,"base_ingredient":{"item":"advgenerators:power_io"}},{"count":1,"base_ingredient":{"item":"advgenerators:iron_wiring"}},{"count":1,"base_ingredient":{"item":"mekanism:basic_control_circuit"}}],"category":"components","result":{"item":"superpackutils:circuit_board","count":1}})

    //Copper Solenoid
    event.custom({"type":"immersiveengineering:blueprint","inputs":[{"count":3,"base_ingredient":{"item":"thermal:copper_plate"}},{"count":1,"base_ingredient":{"item":"immersiveengineering:wire_electrum"}},{"count":2,"base_ingredient":{"item":"immersiveengineering:stick_aluminum"}},{"count":1,"base_ingredient":{"item":"superpackutils:mixed_alloy_ingot"}}],"category":"components","result":{"item":"superpackutils:copper_solenoid","count":1}})

    //Polished Quartz
    event.recipes.create.sandpaper_polishing('superpackutils:polished_quartz', 'minecraft:quartz')
    event.recipes.mekanism.enriching('superpackutils:polished_quartz', 'minecraft:quartz')

    //Silicon Dioxide Oxiding
    event.custom({"type":"mekanism:oxidizing","input":{"ingredient":{"tag":"forge:dusts/quartz"}},"output":{"gas":"superpackutils:silicon_dioxide","amount":100}})

    //Ethyl Chloride
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1,"gas":"mekanism:hydrogen_chloride"},"rightInput":{"amount":1,"gas":"mekanism:ethene"},"output":{"gas":"superpackutils:ethyl_chloride","amount":1}})

    //Ethyl Benzene
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1,"gas":"superpackutils:benzene"},"rightInput":{"amount":1,"gas":"mekanism:ethene"},"output":{"gas":"superpackutils:ethyl_benzene","amount":1}})

    //Acrylonitrile
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1,"gas":"superpackutils:propylene"},"rightInput":{"amount":1,"gas":"superpackutils:ammonia"},"output":{"gas":"superpackutils:acrylonitrile","amount":1}})

    //Ammonia
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1,"gas":"mekanism:hydrogen"},"rightInput":{"amount":1,"gas":"superpackutils:nitrogen"},"output":{"gas":"superpackutils:ammonia","amount":1}})

    //Methane
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":4,"gas":"mekanism:hydrogen"},"rightInput":{"amount":1,"gas":"superpackutils:carbon_dioxide"},"output":{"gas":"superpackutils:methane","amount":5}})

    //Nitrous Oxide
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1,"gas":"mekanism:oxygen"},"rightInput":{"amount":1,"gas":"superpackutils:nitrogen"},"output":{"gas":"superpackutils:nitrous_oxyde","amount":2}})

    //Polyethylene
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":2,"gas":"mekanism:ethene"},"rightInput":{"amount":1,"gas":"superpackutils:oxygen"},"output":{"gas":"superpackutils:polyethene","amount":5}})

    //Cyanide
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1,"gas":"superpackutils:ammonia"},"rightInput":{"amount":1,"gas":"superpackutils:methane"},"output":{"gas":"superpackutils:cyanide","amount":1}})

    //Tetraethyl Lead Dust
    event.custom({"type":"mekanism:reaction","itemInput":{"ingredient":{"item":"thermal:lead_dust"}},"fluidInput":{"amount":50,"tag":"forge:sodium"},"gasInput":{"amount":100,"gas":"superpackutils:ethyl_chloride"},"energyRequired":200,"duration":400,"itemOutput":{"item":"superpackutils:tetraethyl_lead_dust","count":1},"gasOutput":{"gas":"mekanism:oxygen","amount":10}})

    //Polydimethylsiloxane
    event.custom({"type":"mekanism:reaction","itemInput":{"ingredient":{"item":"mekanism:substrate"}},"fluidInput":{"amount":25,"tag":"forge:methane"},"gasInput":{"amount":50,"gas":"mekanism:chlorine"},"energyRequired":300,"duration":200,"itemOutput":{"item":"superpackutils:polydimethylsiloxane_pulp","count":1},"gasOutput":{"gas":"mekanism:hydrogen_chloride","amount":25}})

    //Chemical Death
    event.custom({"type":"mekanism:reaction","itemInput":{"amount":1,"ingredient":{"item":"botania:living_root"}},"fluidInput":{"amount":600,"tag":"minecraft:water"},"gasInput":{"amount":200,"gas":"superpackutils:cyanide"},"energyRequired":200,"duration":37,"itemOutput":{"item":"biomesoplenty:dead_branch","count":1},"gasOutput":{"gas":"superpackutils:chemical_death","amount":100}})

    //Industrial Sand
    event.custom({
        "type": "exnihilosequentia:fluid_item",
        "fluid": {
          "fluid": "mekanism:heavy_water"
        },
        "input": {
          "item": "create:limesand"
        },
        "result": {
          "item": "superpackutils:industrial_sand"
        }
    })

    //Advanced Machine Casing
    event.custom({"type":"mekanism:compressing","itemInput":{"ingredient":{"item":"superpackutils:mixed_alloy_ingot"}},"gasInput":{"amount":1,"gas":"mekanism:liquid_osmium"},"output":{"item":"superpackutils:advanced_casing","count":1}})

    //Bedrock Dust & Limestone Dust
    event.recipes.create.crushing([Item.of('superpackutils:limestone_dust').withChance(0.35), 'superpackutils:bedrock_dust', Item.of('superpackutils:bedrock_dust').withChance(0.45)], 'superpackutils:deepslate', 350)

    //Bloody Pigment
    event.recipes.immersiveengineering.crusher('thermal:sawdust', 'superpackutils:bloody_sawdust', Item.of('superpackutils:bloody_pigment').withChance(0.30))
    event.custom({
        "type": "resourcefulbees:centrifuge",
        "ingredient": {
          "item": "superpackutils:bloody_sawdust"
        },
        "results": [
          {
            "item": "superpackutils:bloody_pigment"
          },
          {
            "item": "thermal:sawdust"
          },
          {
            "item": "superpackutils:blood_bottle"
          }
        ],
        "time": 200
    })

    event.custom({
        "type": "resourcefulbees:centrifuge",
        "ingredient": {
          "item": "superpackutils:bloody_sawdust"
        },
        "results": [
          {
            "item": "superpackutils:bloody_pigment"
          },
          {
            "item": "thermal:sawdust"
          },
          {
            "fluid": "tconstruct:blood"
          }
        ],
        "time": 200,
        "noBottleInput": true
    })

    //Grassy Pigment
    event.recipes.immersiveengineering.crusher('thermal:sawdust', 'superpackutils:grassy_sawdust', Item.of('superpackutils:grassy_pigment').withChance(0.30))
    event.custom({
        "type": "resourcefulbees:centrifuge",
        "ingredient": {
          "item": "superpackutils:grassy_sawdust"
        },
        "results": [
          {
            "item": "superpackutils:grassy_pigment"
          },
          {
            "item": "thermal:sawdust"
          },
          {
            "item": "superpackutils:slime_bottle"
          }
        ],
        "time": 200
    })

    event.custom({
        "type": "resourcefulbees:centrifuge",
        "ingredient": {
          "item": "superpackutils:grassy_sawdust"
        },
        "results": [
          {
            "item": "superpackutils:grassy_pigment"
          },
          {
            "item": "thermal:sawdust"
          },
          {
            "fluid": "tconstruct:earth_slime"
          }
        ],
        "time": 200,
        "noBottleInput": true
    })

    //Azure Pigment
    event.recipes.immersiveengineering.crusher('thermal:sawdust', 'superpackutils:azure_sawdust', Item.of('superpackutils:azure_pigment').withChance(0.30))
    event.custom({
        "type": "resourcefulbees:centrifuge",
        "ingredient": {
          "item": "superpackutils:azure_sawdust"
        },
        "results": [
          {
            "item": "superpackutils:azure_pigment"
          },
          {
            "item": "thermal:sawdust"
          },
          {
            "item": "superpackutils:skyslime_bottle"
          }
        ],
        "time": 200
    })

    event.custom({
        "type": "resourcefulbees:centrifuge",
        "ingredient": {
          "item": "superpackutils:azure_sawdust"
        },
        "results": [
          {
            "item": "superpackutils:azure_pigment"
          },
          {
            "item": "thermal:sawdust"
          },
          {
            "fluid": "tconstruct:sky_slime"
          }
        ],
        "time": 200,
        "noBottleInput": true
    })

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

    //Energetic Core
    event.recipes.create.mixing('superpackutils:energetic_processor', ['refinedstorage:destruction_core', 'superpackutils:energetic_alloy_ingot', 'tconstruct:pig_iron_ingot'])

    //Vibrant Core
    event.recipes.create.mixing('superpackutils:vibrant_processor', ['refinedstorage:construction_core', 'superpackutils:vibrant_alloy_ingot', 'botania:terrasteel_ingot'])

    //Rich Slag Alloy
    event.recipes.create.mixing('superpackutils:rich_slag_alloy', ['thermal:rich_slag', 'create:andesite_alloy'])
    
    //Dyingrock
    event.custom({
        "type": "botania:pure_daisy",
        "input": {
          "type": "block",
          "block": "astralsorcery:black_marble_raw"
        },
        "output": {
          "name": "superpackutils:dyingrock"
        }
    })
    
    //Superheated Bronze Ingot
    event.recipes.create.compacting('superpackutils:superheated_bronze_ingot', ['#forge:ingots/bronze', fluid.of('tconstruct:magma_cream', 50)]).superheated(),

    //Weird Fungu
    event.recipes.create.filling('superpackutils:weird_fungu', ['minecraft:crimson_fungus', fluid.of('mekanismgenerators:bioethanol', 1000)]),

    //Bio Plastic
    event.custom({"type":"immersiveengineering:mixer","inputs":[{"item":"thermal:sawdust"},{"item":"thermal:rubber"}],"result":{"fluid":"superpackutils:molten_bio_plastic","amount":1000},"fluid":{"tag":"forge:biodiesel","amount":1000},"energy":3200}),
    event.recipes.create.compacting(Item.of('superpackutils:bio_plastic', 1), [fluid.of('superpackutils:molten_bio_plastic', 1000)]),

    //Infused Stone
    event.recipes.create.mixing(Item.of('superpackutils:infused_stone', 2), ['create:limestone', 'botania:livingrock'])

    //Compressed Steel Ingot
    event.custom({"type":"immersiveengineering:squeezer","result":{"item":"superpackutils:compressed_steel_ingot"},"input":{"count":1,"base_ingredient":{"tag":"forge:ingots/steel"}},"energy":19200})

    //Quartz Enriched Iron
    event.remove({output: 'refinedstorage:quartz_enriched_iron'})
    event.recipes.immersiveengineering.alloy(Item.of('superpackutils:quartz_enriched_blend', 2), 'thermal:iron_dust', 'thermal:quartz_dust')
    event.smelting('refinedstorage:quartz_enriched_iron', 'superpackutils:quartz_enriched_blend')
    event.recipes.minecraft.blasting('refinedstorage:quartz_enriched_iron', 'superpackutils:quartz_enriched_blend')

    //Cupronickel Blend
    event.recipes.immersiveengineering.alloy(Item.of('superpackutils:cupronickel_blend', 2), 'thermal:nickel_dust', 'thermal:copper_dust')
    event.smelting('superpackutils:cupronickel_ingot', 'superpackutils:cupronickel_blend')
    event.recipes.minecraft.blasting('superpackutils:cupronickel_ingot', 'superpackutils:cupronickel_blend')

    //Alchemical Dusts
    function mixer(alchemicalDustItem, catalystItem) {

    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "mixer",
        "controllerId": "mixer",
        "ticks": 100,
        "inputs": [
            {
                "type": "masterfulmachinery:energy",
                "data":{
                    "amount": 100
                }
            },
            {
                "type": "masterfulmachinery:botania_mana",
                "data":{
                    "amount": 300
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "superpackutils:alchemical_powder",
                    "count": 3
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": catalystItem,
                    "count": 4
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": alchemicalDustItem,
                    "count": 1
                }
            }
        ]
    })

    }

    mixer('superpackutils:alchemical_iron_dust', 'superpackutils:iron_wax')
    mixer('superpackutils:alchemical_gold_dust', 'superpackutils:gold_wax')
    mixer('superpackutils:alchemical_copper_dust', 'superpackutils:copper_wax')
    mixer('superpackutils:alchemical_aluminum_dust', 'superpackutils:aluminum_wax')
    mixer('superpackutils:alchemical_lead_dust', 'superpackutils:lead_wax')
    mixer('superpackutils:alchemical_nickel_dust', 'superpackutils:nickel_wax')
    mixer('superpackutils:alchemical_silver_dust', 'superpackutils:silver_wax')
    mixer('superpackutils:alchemical_tin_dust', 'superpackutils:tin_wax')
    mixer('superpackutils:alchemical_zinc_dust', 'superpackutils:zinc_wax')
    mixer('superpackutils:alchemical_platinum_dust', 'superpackutils:platinum_wax')
    mixer('superpackutils:alchemical_uranium_dust', 'superpackutils:uranium_wax')
    mixer('superpackutils:alchemical_osmium_dust', 'superpackutils:osmium_wax')
    mixer('superpackutils:alchemical_aluminum_dust', 'superpackutils:aluminum_wax')
    mixer('superpackutils:alchemical_cobalt_dust', 'superpackutils:cobalt_wax')

});