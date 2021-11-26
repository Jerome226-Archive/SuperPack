//priority: 1500

events.listen('recipes', function (event) {

    //-----------------------------------------------------
    //Superpack: Utils
    //-----------------------------------------------------

    function oilCracking(inputOil, inputFluid, outputOil) {

    //Refinery
    event.custom({"type":"immersiveengineering:refinery","result":{"fluid":outputOil,"amount":100},"input0":{"tag":inputFluid,"amount":10},"input1":{"tag":inputOil,"amount":100},"energy":120})

    }

    oilCracking('forge:naphtha', 'forge:steam', 'superpackutils:sc_naphtha')
    oilCracking('forge:naphtha', 'forge:hydrogen', 'superpackutils:hc_naphtha')

    oilCracking('forge:light_oil', 'forge:steam', 'superpackutils:sc_light_oil')
    oilCracking('forge:light_oil', 'forge:hydrogen', 'superpackutils:hc_light_oil')

    oilCracking('forge:heavy_oil', 'forge:steam', 'superpackutils:sc_heavy_oil')
    oilCracking('forge:heavy_oil', 'forge:hydrogen', 'superpackutils:hc_heavy_oil')

    function oiling(machine, inputItem, outputFluid, outputAmount) {

    event.custom({"type":`immersiveengineering:${machine}`,"fluid":{"fluid":outputFluid,"amount":outputAmount},"input":{"item":inputItem},"energy":6400})

    }


    oiling('squeezer', 'minecraft:cod', 'superpackutils:fish_oil', 45)
    oiling('squeezer', 'minecraft:salmon', 'superpackutils:fish_oil', 45)
    oiling('squeezer', 'minecraft:pufferfish', 'superpackutils:fish_oil', 100)
    oiling('squeezer', 'minecraft:tropical_fish', 'superpackutils:fish_oil', 60)
    oiling('squeezer', 'aquaculture:atlantic_cod', 'superpackutils:fish_oil', 80)
    oiling('squeezer', 'aquaculture:blackfish', 'superpackutils:fish_oil', 50)
    oiling('squeezer', 'aquaculture:pacific_halibut', 'superpackutils:fish_oil', 80)
    oiling('squeezer', 'aquaculture:atlantic_halibut', 'superpackutils:fish_oil', 80)
    oiling('squeezer', 'aquaculture:atlantic_herring', 'superpackutils:fish_oil', 50)
    oiling('squeezer', 'aquaculture:pink_salmon', 'superpackutils:fish_oil', 50)
    oiling('squeezer', 'aquaculture:pollock', 'superpackutils:fish_oil', 50)
    oiling('squeezer', 'aquaculture:rainbow_trout', 'superpackutils:fish_oil', 50)
    oiling('squeezer', 'aquaculture:bayad', 'superpackutils:fish_oil', 60)
    oiling('squeezer', 'aquaculture:boulti', 'superpackutils:fish_oil', 50)
    oiling('squeezer', 'aquaculture:capitaine', 'superpackutils:fish_oil', 80)
    oiling('squeezer', 'aquaculture:synodontis', 'superpackutils:fish_oil', 50)
    oiling('squeezer', 'aquaculture:smallmouth_bass', 'superpackutils:fish_oil', 50)
    oiling('squeezer', 'aquaculture:bluegill', 'superpackutils:fish_oil', 50)
    oiling('squeezer', 'aquaculture:brown_trout', 'superpackutils:fish_oil', 50)
    oiling('squeezer', 'aquaculture:carp', 'superpackutils:fish_oil', 50)
    oiling('squeezer', 'aquaculture:gar', 'superpackutils:fish_oil', 50)
    oiling('squeezer', 'aquaculture:minnow', 'superpackutils:fish_oil', 50)
    oiling('squeezer', 'aquaculture:muskellunge', 'superpackutils:fish_oil', 50)
    oiling('squeezer', 'aquaculture:perch', 'superpackutils:fish_oil', 50)
    oiling('squeezer', 'aquaculture:piranha', 'superpackutils:fish_oil', 50)
    oiling('squeezer', 'aquaculture:tambaqui', 'superpackutils:fish_oil', 50)
    oiling('squeezer', 'upgrade_aquatic:lionfish', 'superpackutils:fish_oil', 50)
    oiling('squeezer', 'aquaculture:red_grouper', 'superpackutils:fish_oil', 50)
    oiling('squeezer', 'upgrade_aquatic:pike', 'superpackutils:fish_oil', 65)
    oiling('squeezer', 'aquaculture:catfish', 'superpackutils:fish_oil', 65)
    oiling('squeezer', 'aquaculture:tuna', 'superpackutils:fish_oil', 80)
    oiling('squeezer', 'aquaculture:arapaima', 'superpackutils:fish_oil', 80)

    oiling('squeezer', 'thermal:barley_seeds', 'immersiveengineering:plantoil', 80)
    oiling('squeezer', 'thermal:corn_seeds', 'immersiveengineering:plantoil', 80)
    oiling('squeezer', 'thermal:flax_seeds', 'immersiveengineering:plantoil', 80)
    oiling('squeezer', 'thermal:radish_seeds', 'immersiveengineering:plantoil', 80)
    oiling('squeezer', 'thermal:sadiroot_seeds', 'immersiveengineering:plantoil', 80)
    oiling('squeezer', 'thermal:spinach_seeds', 'immersiveengineering:plantoil', 80)
    oiling('squeezer', 'thermal:bell_pepper_seeds', 'immersiveengineering:plantoil', 80)
    oiling('squeezer', 'thermal:eggplant_seeds', 'immersiveengineering:plantoil', 80)
    oiling('squeezer', 'thermal:green_bean_seeds', 'immersiveengineering:plantoil', 80)
    oiling('squeezer', 'thermal:peanut_seeds', 'immersiveengineering:plantoil', 80)
    oiling('squeezer', 'thermal:hops_seeds', 'immersiveengineering:plantoil', 80)
    oiling('squeezer', 'thermal:tea_seeds', 'immersiveengineering:plantoil', 80)
    oiling('squeezer', 'thermal:frost_melon_seeds', 'immersiveengineering:plantoil', 120)
    oiling('squeezer', 'supplementaries:flax_seeds', 'immersiveengineering:plantoil', 80)

    //ABS Sheet
    event.shaped('superpackutils:abs_sheet', ['AAA', 'A A', 'AAA'], {
      A: 'superpackutils:abs_pellet'
    }),

    event.recipes.mekanism.enriching('superpackutils:abs_sheet', Item.of('superpackutils:abs_pellet', 3))

    //PVC Sheet
    event.shaped('superpackutils:pvc_sheet', ['AAA', 'A A', 'AAA'], {
      A: 'superpackutils:pvc_pellet'
    }),

    event.recipes.mekanism.enriching('superpackutils:pvc_sheet', Item.of('superpackutils:pvc_pellet', 3))

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

    //Plastic Waste
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:plastic_waste"},"gasOutput":{"gas":"superpackutils:plastic_waste","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:plastic_waste"},"fluidOutput":{"fluid":"superpackutils:plastic_waste","amount":1}})

    //Hydrogen Cyanide
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:hydrogen_cyanide"},"gasOutput":{"gas":"superpackutils:hydrogen_cyanide","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:hydrogen_cyanide"},"fluidOutput":{"fluid":"superpackutils:hydrogen_cyanide","amount":1}})

    //Diborane
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:diborane"},"gasOutput":{"gas":"superpackutils:diborane","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:diborane"},"fluidOutput":{"fluid":"superpackutils:diborane","amount":1}})
    
    //Boric Acid
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:boric_acid"},"gasOutput":{"gas":"superpackutils:boric_acid","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:boric_acid"},"fluidOutput":{"fluid":"superpackutils:boric_acid","amount":1}})

    //Acetylene
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:acetylene"},"gasOutput":{"gas":"superpackutils:acetylene","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:acetylene"},"fluidOutput":{"fluid":"superpackutils:acetylene","amount":1}})

    //Vinyl Chloride
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:vinyl_chloride"},"gasOutput":{"gas":"superpackutils:vinyl_chloride","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:vinyl_chloride"},"fluidOutput":{"fluid":"superpackutils:vinyl_chloride","amount":1}})

    //Polyvinyl Chloride
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:polyvinyl_chloride"},"gasOutput":{"gas":"superpackutils:polyvinyl_chloride","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:polyvinyl_chloride"},"fluidOutput":{"fluid":"superpackutils:polyvinyl_chloride","amount":1}})

    //Silicon Tetrachloride
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:silicon_tetrachloride"},"gasOutput":{"gas":"superpackutils:silicon_tetrachloride","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:silicon_tetrachloride"},"fluidOutput":{"fluid":"superpackutils:silicon_tetrachloride","amount":1}})

    //Sodium Chloride
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:sodium_chloride"},"gasOutput":{"gas":"superpackutils:sodium_chloride","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:sodium_chloride"},"fluidOutput":{"fluid":"superpackutils:sodium_chloride","amount":1}})

    //Sodium Hypochlorite
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:sodium_hypochlorite"},"gasOutput":{"gas":"superpackutils:sodium_hypochlorite","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:sodium_hypochlorite"},"fluidOutput":{"fluid":"superpackutils:sodium_hypochlorite","amount":1}})

    //Phenol
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:phenol"},"gasOutput":{"gas":"superpackutils:phenol","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:phenol"},"fluidOutput":{"fluid":"superpackutils:phenol","amount":1}})

    //Cumene
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:cumene"},"gasOutput":{"gas":"superpackutils:cumene","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:cumene"},"fluidOutput":{"fluid":"superpackutils:cumene","amount":1}})

    //Chloroform
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:chloroform"},"gasOutput":{"gas":"superpackutils:chloroform","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:chloroform"},"fluidOutput":{"fluid":"superpackutils:chloroform","amount":1}})

    //Bisphenol A
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:bisphenol_a"},"gasOutput":{"gas":"superpackutils:chloroform","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:chloroform"},"fluidOutput":{"fluid":"superpackutils:chloroform","amount":1}})

    //Acetone
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:acetone"},"gasOutput":{"gas":"superpackutils:acetone","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:acetone"},"fluidOutput":{"fluid":"superpackutils:acetone","amount":1}})

    //Polystyrene
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:polystyrene"},"gasOutput":{"gas":"superpackutils:polystyrene","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:polystyrene"},"fluidOutput":{"fluid":"superpackutils:polystyrene","amount":1}})

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

    //Pahoehoe Lava
    event.remove({id: 'advgenerators:exchanger/lava_to_obsidian'})
    event.custom({
      "type": "advgenerators:exchanger_cooling",
      "input": {
        "fluids": {
          "fluid": "minecraft:lava"
        },
        "amount": 1
      },
      "output": {
        "fluid": "superpackutils:pahoehoe_lava",
        "amount": 1
      },
      "heat": 30
    })

    //Biomass
    event.recipes.create.compacting(Item.of('superpackutils:biomass', 3), [fluid.of('voluminousenergy:biofuel', 1000)]),

    //Fermented Biomass
    event.custom({"type":"immersiveengineering:fermenter","fluid":{"fluid":"superpackutils:fermented_biomass","amount":50},"input":{"item":"superpackutils:biomass"},"energy":3000})

    //Bioslag Alloy
    event.recipes.create.mixing('superpackutils:bioslag_ingot', [fluid.of('immersiveengineering:herbicide', 125), 'immersiveengineering:slag', 'thermal:tin_ingot']).heated()

    //ABS Sheet
    event.custom({"type":"mekanism:reaction","itemInput":{"ingredient":{"item":"superpackutils:polydimethylsiloxane_pulp"}},"fluidInput":{"amount":50,"tag":"forge:oxygen"},"gasInput":{"amount":500,"gas":"superpackutils:abs"},"energyRequired":3000,"duration":60,"itemOutput":{"item":"superpackutils:abs_pellet"},"gasOutput":{"gas":"superpackutils:plastic_waste","amount":200}})
  
    //Electrical Platinum Ingot
    event.recipes.immersiveengineering.arc_furnace([Item.of('superpackutils:electrical_platinum_ingot', 4)], 'superpackutils:platinum_ingot', ['superpackutils:electrical_pulp', Item.of('thermal:silver_dust', 2)], 'thermal:slag')
 
    //Electrical Steel Ingot
    event.recipes.immersiveengineering.arc_furnace([Item.of('superpackutils:electrical_steel_ingot', 4)], 'mekanism:ingot_steel', ['superpackutils:electrical_pulp', Item.of('thermal:silver_dust', 2)], 'thermal:slag')

    //Electrical HSLA Steel Ingot
    event.recipes.immersiveengineering.arc_furnace([Item.of('superpackutils:electrical_hsla_steel_ingot', 4)], 'superpackutils:hsla_steel_ingot', ['superpackutils:electrical_pulp', Item.of('thermal:silver_dust', 2)], 'thermal:slag')

    //Rune
    event.recipes.create.pressing('superpackutils:rune', 'botania:livingrock')

    //Enriched Oil Carbon
    event.recipes.mekanism.enriching('superpackutils:enriched_petcoke', 'immersivepetroleum:petcoke_dust')

    //Enriched Slime 
    event.recipes.mekanism.enriching('superpackutils:enriched_slime', 'tconstruct:earth_slime_crystal')

    //Enriched Blood
    event.recipes.mekanism.enriching('superpackutils:enriched_blood', 'superpackutils:blood_crystal')

    //Enriched Skyslime
    event.recipes.mekanism.enriching('superpackutils:enriched_skyslime', 'tconstruct:sky_slime_crystal')

    //Enriched Enderslime
    event.recipes.mekanism.enriching('superpackutils:enriched_enderslime', 'tconstruct:ender_slime_crystal')

    //Enriched Ichor
    event.recipes.mekanism.enriching('superpackutils:enriched_ichor', 'tconstruct:ichor_slime_crystal')

    //Basic Alloy
    event.recipes.mekanism.metallurgic_infusing('superpackutils:basic_alloy', 'voluminousenergy:silicon', 'superpackutils:petroleum_coke', 160),

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
                    "item": "superpackutils:energium_pulp",
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
                    "item": "superpackutils:vibrium_pulp",
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
      C: 'botania:manasteel_ingot',
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
        I: 'superpackutils:thermopneumatic_hull'
    }),

    //Assembler Casing
    event.shaped(Item.of('superpackutils:assembler_frame', 4), ['BCB', 'AIA', 'BCB'], {
          C: 'superpackutils:electrical_platinum_ingot',
          A: 'superpackutils:doublelayered_capacitor',
          B: 'superpackutils:electrical_hsla_steel_ingot',
          I: 'mekanism:steel_casing'
    }),

    //Molten Blizz
    event.custom({
      "type": "tconstruct:entity_melting",
      "entity": {
        "type": "thermal:blizz"
      },
      "result": {
        "fluid": "superpackutils:molten_blizz",
        "amount": 20
      },
      "damage": 2
    })

    //Molten Blitz
    event.custom({
      "type": "tconstruct:entity_melting",
      "entity": {
        "type": "thermal:blitz"
      },
      "result": {
        "fluid": "superpackutils:molten_blitz",
        "amount": 20
      },
      "damage": 2
    })

    //Molten Basalz
    event.custom({
      "type": "tconstruct:entity_melting",
      "entity": {
        "type": "thermal:basalz"
      },
      "result": {
        "fluid": "superpackutils:molten_basalz",
        "amount": 20
      },
      "damage": 2
    })

    //Basic Logic Circuit
    event.recipes.immersiveengineering.metal_press('superpackutils:basic_circuit', 'refinedstorage:raw_basic_processor', 'immersiveengineering:mold_plate')

    //Improved Logic Circuit
    event.recipes.immersiveengineering.metal_press('superpackutils:improved_circuit', 'refinedstorage:raw_improved_processor', 'immersiveengineering:mold_plate')

    //Advanced Logic Circuit
    event.recipes.immersiveengineering.metal_press('superpackutils:advanced_circuit', 'refinedstorage:raw_advanced_processor', 'immersiveengineering:mold_plate')

    //Withering Logic Circuit
    event.recipes.immersiveengineering.metal_press('superpackutils:withering_circuit', 'extradisks:raw_withering_processor', 'immersiveengineering:mold_plate')

    //Refined Redstone Dust
    event.recipes.mekanism.metallurgic_infusing('superpackutils:refined_redstone_dust', 'minecraft:redstone', 'mekanism:diamond', 10),

    //Refined Glowstone Dust
    event.recipes.mekanism.metallurgic_infusing('superpackutils:refined_glowstone_dust', 'minecraft:glowstone_dust', 'mekanism:diamond', 10),

    //Crystallized Slime
    event.custom({"type":"mekanism:infusion_conversion","input":{"ingredient":{"item":"tconstruct:earth_slime_crystal"}},"output":{"infuse_type":"superpackutils:slime_crystal","amount":10}})
    event.custom({"type":"mekanism:infusion_conversion","input":{"ingredient":{"item":"superpackutils:enriched_slime"}},"output":{"infuse_type":"superpackutils:slime_crystal","amount":80}})

    //Crystallized Ichor
    event.custom({"type":"mekanism:infusion_conversion","input":{"ingredient":{"item":"tconstruct:ichor_slime_crystal"}},"output":{"infuse_type":"superpackutils:ichor_crystal","amount":10}})
    event.custom({"type":"mekanism:infusion_conversion","input":{"ingredient":{"item":"superpackutils:enriched_ichor"}},"output":{"infuse_type":"superpackutils:ichor_crystal","amount":80}})

    //Crystallized Blood
    event.custom({"type":"mekanism:infusion_conversion","input":{"ingredient":{"item":"superpackutils:blood_crystal"}},"output":{"infuse_type":"superpackutils:blood_crystal","amount":10}})
    event.custom({"type":"mekanism:infusion_conversion","input":{"ingredient":{"item":"superpackutils:enriched_blood"}},"output":{"infuse_type":"superpackutils:blood_crystal","amount":80}})

    //Crystallized Skyslime
    event.custom({"type":"mekanism:infusion_conversion","input":{"ingredient":{"item":"tconstruct:sky_slime_crystal"}},"output":{"infuse_type":"superpackutils:skyslime_crystal","amount":10}})
    event.custom({"type":"mekanism:infusion_conversion","input":{"ingredient":{"item":"superpackutils:enriched_skyslime"}},"output":{"infuse_type":"superpackutils:skyslime_crystal","amount":80}})

    //Crystallized Enderslime
    event.custom({"type":"mekanism:infusion_conversion","input":{"ingredient":{"item":"tconstruct:ender_slime_crystal"}},"output":{"infuse_type":"superpackutils:enderslime_crystal","amount":10}})
    event.custom({"type":"mekanism:infusion_conversion","input":{"ingredient":{"item":"superpackutils:enriched_enderslime"}},"output":{"infuse_type":"superpackutils:enderslime_crystal","amount":80}})

    //Resonating Coil
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "custommachinery:resonator",
      "time": 200,
      "requirements": [
        {
          "type": "custommachinery:item",
          "item": "superpackutils:redstone_wire",
          "amount": 1,
          "mode": "input"
        },
        {
          "type": "custommachinery:energy_per_tick",
          "amount": 100,
          "mode": "input"
        },
        {
          "type": "custommachinery:item",
          "item": "superpackutils:resonating_coil",
          "amount": 1,
          "mode": "output"
        }
      ]
    })

    //Fumed Silica
    event.custom({"type":"mekanism:evaporating","input":{"amount":10,"tag":"forge:silicon_tetrachloride"},"output":{"fluid":"superpackutils:fumed_silica","amount":1}})

    //Distiller
    event.custom({
      "type": "custommachinery:custom_machine",
      "machine": "custommachinery:distiller",
      "time": 30,
      "requirements": [
        {
          "type": "custommachinery:fluid",
          "tag": "minecraft:water",
          "amount": 10,
          "mode": "input"
        },
        {
          "type": "custommachinery:energy_per_tick",
          "amount": 100,
          "mode": "input"
        },
        {
          "type": "custommachinery:fluid",
          "fluid": "superpackutils:distilled_water",
          "amount": 10,
          "mode": "output"
        }
      ]
    })

    //Mixed Alloy Ingot
    event.shaped('superpackutils:mixed_alloy_ingot', ['III', 'NNN', 'CCC'], {
      C: 'thermal:copper_plate',
      N: 'thermal:nickel_plate',
      I: 'thermal:tin_plate'
    }),

    //Treetap
    event.shaped('superpackutils:treetap', [' C ', 'CCC', '  C'], {
      C: '#forge:treated_wood'
    })

    //Phyto-Filter
    event.shaped('superpackutils:phyto_filter', ['CSC'], {
      S: 'botania:mana_string',
      C: 'thermal:phytogro'
    })

    //Triple Iron Rod
    event.shapeless('superpackutils:triple_iron_rod', [item.of('immersiveengineering:stick_iron', 3)])

    //Neutron Collector
    event.shaped('superpackutils:neutron_collector', ['SCS', 'CTC', 'SCS'], {
      S: 'superpackutils:beryllium_ingot',
      T: 'mythicbotany:mana_collector',
      C: 'libvulpes:plateiridium'
    })

    //Circuit Board
    event.custom({"type":"immersiveengineering:blueprint","inputs":[{"count":1,"base_ingredient":{"item":"superpackutils:integrated_circuit"}},{"count":1,"base_ingredient":{"item":"advgenerators:power_io"}},{"count":1,"base_ingredient":{"item":"advgenerators:iron_wiring"}},{"count":1,"base_ingredient":{"item":"mekanism:basic_control_circuit"}}],"category":"components","result":{"item":"superpackutils:circuit_board","count":1}})

    //Copper Solenoid
    event.custom({"type":"immersiveengineering:blueprint","inputs":[{"count":3,"base_ingredient":{"item":"thermal:copper_plate"}},{"count":1,"base_ingredient":{"item":"immersiveengineering:wire_electrum"}},{"count":2,"base_ingredient":{"item":"immersiveengineering:stick_aluminum"}},{"count":1,"base_ingredient":{"item":"superpackutils:mixed_alloy_ingot"}}],"category":"components","result":{"item":"superpackutils:copper_solenoid","count":1}})

    //Polished Quartz
    event.recipes.create.sandpaper_polishing('superpackutils:polished_quartz', 'minecraft:quartz')
    event.recipes.mekanism.enriching('superpackutils:polished_quartz', 'minecraft:quartz')

    //Polished Mana Quartz
    event.recipes.create.sandpaper_polishing('superpackutils:polished_mana_quartz', 'botania:quartz_mana')
    event.recipes.mekanism.enriching('superpackutils:polished_mana_quartz', 'botania:quartz_mana')

    //Polished Certus Quartz
    event.recipes.create.sandpaper_polishing('superpackutils:polished_certus_quartz', 'superpackutils:certus_quartz')
    event.recipes.mekanism.enriching('superpackutils:polished_certus_quartz', 'superpackutils:certus_quartz')

    //Silicon Dioxide Oxiding
    event.custom({"type":"mekanism:oxidizing","input":{"ingredient":{"tag":"forge:dusts/quartz"}},"output":{"gas":"superpackutils:silicon_dioxide","amount":100}})

    //Ethyl Chloride
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1,"gas":"mekanism:hydrogen_chloride"},"rightInput":{"amount":1,"gas":"mekanism:ethene"},"output":{"gas":"superpackutils:ethyl_chloride","amount":1}})

    //Ethyl Benzene
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1,"gas":"superpackutils:benzene"},"rightInput":{"amount":1,"gas":"mekanism:ethene"},"output":{"gas":"superpackutils:ethyl_benzene","amount":1}})

    //Acrylonitrile
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1,"gas":"superpackutils:hydrogen_cyanide"},"rightInput":{"amount":1,"gas":"superpackutils:acetylene"},"output":{"gas":"superpackutils:acrylonitrile","amount":1}})

    //Silicon Tetrachloride
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1,"gas":"mekanism:chlorine"},"rightInput":{"amount":1,"gas":"superpackutils:silicon_dioxide"},"output":{"gas":"superpackutils:silicon_tetrachloride","amount":1}})

    //Vynil Chloride
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1,"gas":"mekanism:ethene"},"rightInput":{"amount":2,"gas":"mekanism:chlorine"},"output":{"gas":"superpackutils:vynil_chloride","amount":1}})

    //Polyvynil Chloride
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1,"gas":"superpackutils:vynil_chloride"},"rightInput":{"amount":1,"gas":"mekanism:oxygen"},"output":{"gas":"superpackutils:polyvynil_chloride","amount":1}})

    //Polyethylene
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1,"gas":"mekanism:ethene"},"rightInput":{"amount":1,"gas":"mekanism:oxygen"},"output":{"gas":"superpackutils:polyethene","amount":1}})

    //Cumene
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1,"gas":"superpackutils:benzene"},"rightInput":{"amount":1,"gas":"superpackutils:propene"},"output":{"gas":"superpackutils:cumene","amount":1}})

    //Chloroform
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1,"gas":"superpackutils:acetone"},"rightInput":{"amount":1,"gas":"superpackutils:sodium_hypochlorite"},"output":{"gas":"superpackutils:chloroform","amount":1}})

    //Ammonia
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1,"gas":"mekanism:hydrogen"},"rightInput":{"amount":1,"gas":"superpackutils:nitrogen"},"output":{"gas":"superpackutils:ammonia","amount":1}})

    //Methane
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":4,"gas":"mekanism:hydrogen"},"rightInput":{"amount":1,"gas":"superpackutils:carbon_dioxide"},"output":{"gas":"superpackutils:methane","amount":5}})

    //Nitrous Oxide
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1,"gas":"mekanism:oxygen"},"rightInput":{"amount":1,"gas":"superpackutils:nitrogen"},"output":{"gas":"superpackutils:nitrous_oxide","amount":2}})

    //Polyethylene
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":2,"gas":"mekanism:ethene"},"rightInput":{"amount":1,"gas":"mekanism:oxygen"},"output":{"gas":"superpackutils:polyethene","amount":5}})

    //Cyanide
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1,"gas":"superpackutils:ammonia"},"rightInput":{"amount":1,"gas":"superpackutils:methane"},"output":{"gas":"superpackutils:cyanide","amount":1}})

    //Tetraethyl Lead Dust
    event.custom({"type":"mekanism:reaction","itemInput":{"ingredient":{"item":"thermal:lead_dust"}},"fluidInput":{"amount":50,"tag":"forge:sodium"},"gasInput":{"amount":100,"gas":"superpackutils:ethyl_chloride"},"energyRequired":200,"duration":400,"itemOutput":{"item":"superpackutils:tetraethyl_lead_dust","count":1},"gasOutput":{"gas":"mekanism:oxygen","amount":10}})

    //Polydimethylsiloxane
    event.custom({"type":"mekanism:reaction","itemInput":{"ingredient":{"item":"mekanism:substrate"}},"fluidInput":{"amount":25,"tag":"forge:methane"},"gasInput":{"amount":50,"gas":"mekanism:chlorine"},"energyRequired":300,"duration":200,"itemOutput":{"item":"superpackutils:polydimethylsiloxane_pulp","count":1},"gasOutput":{"gas":"mekanism:hydrogen_chloride","amount":25}})

    //Chemical Death
    event.custom({"type":"mekanism:reaction","itemInput":{"amount":1,"ingredient":{"item":"botania:living_root"}},"fluidInput":{"amount":600,"tag":"minecraft:water"},"gasInput":{"amount":200,"gas":"superpackutils:cyanide"},"energyRequired":200,"duration":37,"itemOutput":{"item":"biomesoplenty:dead_branch","count":1},"gasOutput":{"gas":"superpackutils:chemical_death","amount":100}})

    //Cumene
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1,"gas":"superpackutils:propene"},"rightInput":{"amount":1,"gas":"superpackutils:benzene"},"output":{"gas":"superpackutils:cumene","amount":1}})

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
    
    //Weird Fungu
    event.recipes.create.filling('superpackutils:weird_fungu', ['minecraft:crimson_fungus', fluid.of('mekanismgenerators:bioethanol', 1000)]),

    //Bio Plastic
    event.custom({"type":"immersiveengineering:mixer","inputs":[{"item":"thermal:sawdust"},{"item":"thermal:rubber"}],"result":{"fluid":"superpackutils:molten_bio_plastic","amount":1000},"fluid":{"tag":"forge:biodiesel","amount":1000},"energy":3200}),
    event.recipes.create.compacting(Item.of('superpackutils:bio_plastic', 1), [fluid.of('superpackutils:molten_bio_plastic', 1000)]),

    //Napalm-B
    event.custom({"type":"immersiveengineering:mixer","inputs":[{"count": 3,"base_ingredient": {"item": "superpackutils:manganese_dust"}}],"result":{"fluid":"superpackutils:napalm_b","amount":500},"fluid":{"tag":"forge:ho_gasoline","amount":500},"energy":12000}),

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

    // Selenium
    event.custom({
      "type": "mekanism:separating",
      "input": {
        "amount": 10,
        "fluid": "superpackutils:anode_sludge"
      },
      "leftGasOutput": {
        "gas": "superpackutils:selenium",
        "amount": 3
      },
      "rightGasOutput": {
        "gas": "superpackutils:tellurium",
        "amount": 3
      }
    })

 });
