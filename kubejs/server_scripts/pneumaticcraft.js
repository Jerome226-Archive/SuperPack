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

    //Refinery
    event.remove({id: 'pneumaticcraft:refinery/oil_2'})
    event.remove({id: 'pneumaticcraft:refinery/oil_3'})
    event.remove({id: 'pneumaticcraft:refinery/oil_4'})
    event.custom({
      "type": "pneumaticcraft:refinery",
      "input": {
        "type": "pneumaticcraft:fluid",
        "tag": "forge:crude_oil",
        "amount": 10
      },
      "temperature": {
        "min_temp": 373
      },
      "results": [
        {
          "fluid": "pneumaticcraft:kerosene",
          "amount": 4
        },
        {
          "fluid": "pneumaticcraft:lpg",
          "amount": 2
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
    event.custom({
      "type": "pneumaticcraft:thermo_plant",
      "item_input": {
        "item": "thermal:cured_rubber"
      },
      "fluid_input": {
        "type": "pneumaticcraft:fluid",
        "fluid": "superpackutils:lubrified_lpg_fluid",
        "amount": 100
      },
      "fluid_output": {
        "fluid": "pneumaticcraft:plastic",
        "amount": 1000
      },
      "temperature": {
        "min_temp": 373
      },
      "pressure": 2.0,
      "speed": 0.25,
      "exothermic": false
    })

    event.remove({id: 'pneumaticcraft:heat_frame_cooling/plastic'})

    //Yeast Culture
    event.remove({id: 'pneumaticcraft:thermo_plant/yeast_culture'})
    event.custom({"type":"immersiveengineering:fermenter","fluid":{"fluid":"pneumaticcraft:yeast_culture","amount":50},"input":{"item":"superpackutils:weird_fungu"},"energy":5000})

    //Compressed Ingot Early
    event.remove({id: 'pneumaticcraft:explosion_crafting/compressed_iron_ingot'})
    event.remove({id: 'pneumaticcraft:explosion_crafting/compressed_iron_block'})
    event.custom({"type":"mekanism:compressing","itemInput":{"ingredient":{"item":"minecraft:iron_block"}},"gasInput":{"amount":1,"gas":"mekanism:liquid_osmium"},"output":{"item":"pneumaticcraft:ingot_iron_compressed","count":5}})

});