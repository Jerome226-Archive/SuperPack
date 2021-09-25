//priority: 1500

events.listen('recipes', function (event) { 

    //-----------------------------------------------------
    //Pneumaticcraft
    //-----------------------------------------------------

    //Delete Gas conversion
    event.remove({id: 'pneumaticcraft:thermo_plant/lubricant_from_biodiesel'})
    event.remove({id: 'pneumaticcraft:thermo_plant/lubricant_from_diesel'})
    event.remove({id: 'pneumaticcraft:thermo_plant/lpg'})
    event.remove({id: 'pneumaticcraft:thermo_plant/kerosene'})
    event.remove({id: 'pneumaticcraft:thermo_plant/gasoline'})

    //Ethanol & Plant Oil
    event.remove({id: 'pneumaticcraft:thermo_plant/ethanol_from_poisonous_potato'})
    event.remove({id: 'pneumaticcraft:thermo_plant/ethanol_from_potato'})
    event.remove({id: 'pneumaticcraft:thermo_plant/ethanol_from_sweet_berries'})
    event.remove({id: 'pneumaticcraft:thermo_plant/ethanol_from_apple'})
    event.remove({id: 'pneumaticcraft:thermo_plant/ethanol_from_melon'})
    event.remove({id: 'pneumaticcraft:thermo_plant/ethanol_from_sugar'})

    event.remove({id: 'pneumaticcraft:thermo_plant/vegetable_oil_from_seeds'})
    event.remove({id: 'pneumaticcraft:thermo_plant/vegetable_oil_from_crops'})

    //Sourdough
    event.recipes.create.filling('pneumaticcraft:sourdough', ['pneumaticcraft:wheat_flour', fluid.of('pneumaticcraft:yeast_culture', 125)]),

    //Refinery
    event.remove({id: 'pneumaticcraft:refinery/oil_2'})
    event.remove({id: 'pneumaticcraft:refinery/oil_3'})
    event.remove({id: 'pneumaticcraft:refinery/oil_4'})

    //Hydro-Cracked Naphtha
    event.custom({
      "type": "pneumaticcraft:refinery",
      "input": {
        "type": "pneumaticcraft:fluid",
        "tag": "forge:hc_naphtha",
        "amount": 1000
      },
      "temperature": {
        "min_temp": 373
      },
      "results": [
        {
          "fluid": "superpackutils:methane",
          "amount": 750
        },
        {
          "fluid": "superpackutils:propane",
          "amount": 750
        },
        {
          "fluid": "superpackutils:octane",
          "amount": 300
        },
        {
          "fluid": "superpackutils:butane",
          "amount": 750
        }
      ]
    })

    //Steam-Cracked Naphtha
    event.custom({
      "type": "pneumaticcraft:refinery",
      "input": {
        "type": "pneumaticcraft:fluid",
        "tag": "forge:sc_naphtha",
        "amount": 1000
      },
      "temperature": {
        "min_temp": 373
      },
      "results": [
        {
          "fluid": "superpackutils:propene",
          "amount": 600
        },
        {
          "fluid": "superpackutils:butadiene",
          "amount": 400
        },
        {
          "fluid": "superpackutils:toluene",
          "amount": 200
        },
        {
          "fluid": "superpackutils:benzene",
          "amount": 400
        }
      ]
    })

    //Hydro-Cracked Light Fuel
    event.custom({
      "type": "pneumaticcraft:refinery",
      "input": {
        "type": "pneumaticcraft:fluid",
        "tag": "forge:hc_light_oil",
        "amount": 1000
      },
      "temperature": {
        "min_temp": 373
      },
      "results": [
        {
          "fluid": "superpackutils:methane",
          "amount": 200
        },
        {
          "fluid": "superpackutils:propane",
          "amount": 400
        },
        {
          "fluid": "superpackutils:butane",
          "amount": 400
        },
        {
          "fluid": "superpackutils:naphtha",
          "amount": 200
        }
      ]
    })

    //Steam-Cracked Light Fuel
    event.custom({
      "type": "pneumaticcraft:refinery",
      "input": {
        "type": "pneumaticcraft:fluid",
        "tag": "forge:sc_light_oil",
        "amount": 1000
      },
      "temperature": {
        "min_temp": 373
      },
      "results": [
        {
          "fluid": "superpackutils:propene",
          "amount": 450
        },
        {
          "fluid": "superpackutils:butadiene",
          "amount": 300
        },
        {
          "fluid": "superpackutils:naphtha",
          "amount": 100
        },
        {
          "fluid": "superpackutils:benzene",
          "amount": 300
        }
      ]
    })

    //Hydro-Cracked Heavy Fuel
    event.custom({
      "type": "pneumaticcraft:refinery",
      "input": {
        "type": "pneumaticcraft:fluid",
        "tag": "forge:hc_heavy_oil",
        "amount": 1000
      },
      "temperature": {
        "min_temp": 373
      },
      "results": [
        {
          "fluid": "superpackutils:methane",
          "amount": 75
        },
        {
          "fluid": "superpackutils:propane",
          "amount": 100
        },
        {
          "fluid": "superpackutils:butane",
          "amount": 100
        },
        {
          "fluid": "thermal:light_oil",
          "amount": 800
        }
      ]
    })

    //Steam-Cracked Heavy Fuel
    event.custom({
      "type": "pneumaticcraft:refinery",
      "input": {
        "type": "pneumaticcraft:fluid",
        "tag": "forge:sc_heavy_oil",
        "amount": 1000
      },
      "temperature": {
        "min_temp": 373
      },
      "results": [
        {
          "fluid": "superpackutils:methane",
          "amount": 300
        },
        {
          "fluid": "superpackutils:propene",
          "amount": 300
        },
        {
          "fluid": "superpackutils:benzene",
          "amount": 200
        },
        {
          "fluid": "thermal:light_oil",
          "amount": 100
        }
      ]
    })

    //Charging Station
    event.remove({output: 'pneumaticcraft:charging_station'})
    event.shaped('pneumaticcraft:charging_station', [' SE', 'CCC', 'PPP'], {
        P: 'pneumaticcraft:reinforced_stone_slab',
        C: 'mekanism:enriched_redstone',
        S: 'mekanism:chargepad',
        E: 'pneumaticcraft:pressure_tube'
    }),

    //Plastic
    event.remove({id: 'pneumaticcraft:thermo_plant/plastic_from_biodiesel'})
    event.remove({id: 'pneumaticcraft:thermo_plant/plastic_from_lpg'})
    event.custom({"type":"immersiveengineering:mixer","inputs":[{"item":"thermal:sawdust"},{"item":"mekanism:dust_charcoal"}],"result":{"fluid":"pneumaticcraft:molten_plastic","amount":1000},"fluid":{"tag":"forge:lpg","amount":1000},"energy":3200}),
    
    event.recipes.create.compacting(Item.of('pneumaticcraft:plastic', 1), [fluid.of('pneumaticcraft:plastic', 1000)]),
    event.remove({id: 'pneumaticcraft:heat_frame_cooling/plastic'})

    //Biodiesel
    event.remove({id: 'pneumaticcraft:fluid_mixer/biodiesel'})
    event.custom({
      "type": "pneumaticcraft:fluid_mixer",
      "input1": {
        "type": "pneumaticcraft:fluid",
        "tag": "forge:plantoil",
        "amount": 25
      },
      "input2": {
        "type": "pneumaticcraft:fluid",
        "tag": "forge:ethanol",
        "amount": 25
      },
      "fluid_output": {
        "fluid": "immersiveengineering:biodiesel",
        "amount": 50
      },
      "item_output": {
        "item": "pneumaticcraft:glycerol"
      },
      "pressure": 2.0,
      "time": 300
    })

    //Pressure Chamber Walls
    event.remove({output: 'pneumaticcraft:pressure_chamber_wall'})
    event.shaped(Item.of('pneumaticcraft:pressure_chamber_wall', 16), ['BCB', 'AIA', 'BCB'], {
      C: 'pneumaticcraft:ingot_iron_compressed',
      A: 'superpackutils:doublelayered_capacitor',
      B: 'mekanism:pressure_disperser',
      I: 'superpackutils:big_steel_casing'
    }),
    
    //Pressure Chamber Glass
    event.remove({output: 'pneumaticcraft:pressure_chamber_glass'})
    event.shaped(Item.of('pneumaticcraft:pressure_chamber_glass', 16), ['AAA', 'AIA', 'AAA'], {
      A: 'pneumaticcraft:reinforced_bricks',
      I: 'thermal:obsidian_glass'
    }),
	
    event.shapeless('4x pneumaticcraft:pressure_chamber_glass', ['thermal:obsidian_glass', '4x pneumaticcraft:pressure_chamber_wall'])
    event.shapeless('pneumaticcraft:pressure_chamber_glass', ['thermal:obsidian_glass', 'pneumaticcraft:pressure_chamber_wall'])
	
    //Pressure Tube
    event.remove({output: 'pneumaticcraft:pressure_tube'})
    event.shaped(Item.of('pneumaticcraft:pressure_tube', 8), ['ACA'], {
      C: 'thermal:obsidian_glass',
      A: '#forge:ingots/compressed_iron'
    }),  
        
    //Yeast Culture
    event.remove({id: 'pneumaticcraft:thermo_plant/yeast_culture'})
    event.custom({"type":"immersiveengineering:fermenter","fluid":{"fluid":"pneumaticcraft:yeast_culture","amount":50},"input":{"item":"superpackutils:weird_fungu"},"energy":5000})

    //Compressed Ingot Early
    event.remove({id: 'pneumaticcraft:explosion_crafting/compressed_iron_ingot'})
    event.remove({id: 'pneumaticcraft:explosion_crafting/compressed_iron_block'})
    event.custom({"type":"mekanism:compressing","itemInput":{"ingredient":{"item":"minecraft:iron_block"}},"gasInput":{"amount":1,"gas":"mekanism:liquid_osmium"},"output":{"item":"pneumaticcraft:ingot_iron_compressed","count":5}})

});
