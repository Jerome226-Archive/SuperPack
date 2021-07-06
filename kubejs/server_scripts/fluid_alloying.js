//priority: 1500

events.listen('recipes', function (event) {

    //Invar
    event.remove({id: 'tconstruct:smeltery/alloys/molten_invar'})
    event.recipes.create.mixing(fluid.of('tconstruct:molten_invar', 432), [fluid.of('tconstruct:molten_nickel', 144), fluid.of('tconstruct:molten_iron', 288)]).heated()

    //Bronze
    event.remove({id: 'tconstruct:smeltery/alloys/molten_bronze'})
    event.remove({id: 'mekanism:processing/bronze/dust/from_infusing'})
    event.remove({id: 'mekanism:processing/bronze/ingot/from_infusing'})
    event.recipes.create.mixing(fluid.of('tconstruct:molten_bronze', 576), [fluid.of('tconstruct:molten_tin', 144), fluid.of('tconstruct:molten_copper', 432)]).heated()

    //Brass
    event.remove({id: 'tconstruct:smeltery/alloys/molten_brass'})
    event.remove({id: 'create:mixing/crushed_brass'})
    event.remove({id: 'create:mixing/brass_ingot'})
    event.recipes.create.mixing(fluid.of('tconstruct:molten_brass', 288), [fluid.of('tconstruct:molten_zinc', 144), fluid.of('tconstruct:molten_copper', 144)]).heated()

    //Constantan
    event.remove({id: 'tconstruct:smeltery/alloys/molten_constantan'})
    event.recipes.create.mixing(fluid.of('tconstruct:molten_constantan', 288), [fluid.of('tconstruct:molten_nickel', 144), fluid.of('tconstruct:molten_copper', 144)]).heated()

    //Electrum
    event.remove({id: 'tconstruct:smeltery/alloys/molten_electrum'})
    event.recipes.create.mixing(fluid.of('tconstruct:molten_electrum', 288), [fluid.of('tconstruct:molten_silver', 144), fluid.of('tconstruct:molten_gold', 144)]).heated()

    //Tinker's Bronze
    event.remove({id: 'tconstruct:smeltery/alloys/molten_tinkers_bronze'})
    event.recipes.create.mixing(fluid.of('tconstruct:molten_tinkers_bronze', 288), [fluid.of('tconstruct:molten_copper', 144), fluid.of('tconstruct:molten_glass', 288)]).heated()

    //Rose Gold
    event.remove({id: 'tconstruct:smeltery/alloys/molten_rose_gold'})
    event.recipes.create.mixing(fluid.of('tconstruct:molten_rose_gold', 576), [fluid.of('tconstruct:molten_copper', 432), fluid.of('tconstruct:molten_gold', 144)]).heated()

    //Pewter
    event.remove({id: 'tconstruct:smeltery/alloys/molten_pewter'})
    event.recipes.create.mixing(fluid.of('tconstruct:molten_pewter', 288), [fluid.of('tconstruct:molten_iron', 144), fluid.of('tconstruct:molten_lead', 144)]).heated()

    //Pig Iron
    event.remove({id: 'tconstruct:smeltery/alloys/molten_pig_iron'})
    event.custom({
        "type": "tconstruct:alloy",
        "inputs": [
          {
            "name": "tconstruct:molten_iron",
            "amount": 144
          },
          {
            "name": "tconstruct:blood",
            "amount": 250
          },
          {
            "name": "tconstruct:molten_rose_gold",
            "amount": 288
          },
          {
            "name": "tconstruct:molten_clay",
            "amount": 250
          }
        ],
        "result": {
          "fluid": "tconstruct:molten_pig_iron",
          "amount": 288
        },
        "temperature": 1200
    })

    //Queens Slime
    event.remove({id: 'tconstruct:smeltery/alloys/molten_queens_slime'})
    event.custom({
        "type": "tconstruct:alloy",
        "inputs": [
          {
            "name": "tconstruct:molten_cobalt",
            "amount": 144
          },
          {
            "name": "tconstruct:molten_gold",
            "amount": 144
          },
          {
            "name": "tconstruct:molten_uranium",
            "amount": 144
          },
          {
            "tag": "forge:magma",
            "amount": 250
          }
        ],
        "result": {
          "fluid": "tconstruct:molten_queens_slime",
          "amount": 288
        },
        "temperature": 1650
    })

    //Hepatizon
    event.remove({id: 'tconstruct:smeltery/alloys/molten_hepatizon'})
    event.custom({
        "type": "tconstruct:alloy",
        "inputs": [
          {
            "name": "tconstruct:molten_copper",
            "amount": 288
          },
          {
            "name": "tconstruct:molten_lead",
            "amount": 288
          },
          {
            "name": "tconstruct:molten_cobalt",
            "amount": 144
          },
          {
            "name": "tconstruct:molten_obsidian",
            "amount": 1000
          }
        ],
        "result": {
          "fluid": "tconstruct:molten_hepatizon",
          "amount": 288
        },
        "temperature": 1800
    })

    //Slimesteel
    event.remove({id: 'tconstruct:smeltery/alloys/molten_slimesteel'})
    event.custom({
        "type": "tconstruct:alloy",
        "inputs": [
          {
            "name": "tconstruct:molten_iron",
            "amount": 144
          },
          {
            "name": "tconstruct:sky_slime",
            "amount": 250
          },
          {
            "name": "tconstruct:seared_stone",
            "amount": 144
          }
        ],
        "result": {
          "fluid": "tconstruct:molten_slimesteel",
          "amount": 288
        },
        "temperature": 1100
    })


    //Steel
    event.remove({id: 'immersiveengineering:blastfurnace/steel'})
    event.remove({id: 'immersiveengineering:arcfurnace/steel'})
    event.remove({id: 'immersivepetroleum:arcfurnace/steel'})
    event.remove({output: 'mekanism:enriched_iron'})
    event.remove({id: 'mekanism:processing/steel/enriched_iron_to_dust'})
    event.remove({id: 'immersiveengineering:blastfurnace/steel_block'})
    event.remove({id: 'immersiveengineering:blastfurnace/steel_block'})

    event.recipes.create.mixing(Item.of('mekanism:enriched_iron', 3), ['thermal:iron_dust', 'thermal:nickel_dust', 'superpackutils:zinc_dust'])

    event.recipes.immersiveengineering.blast_furnace('mekanism:ingot_steel', 'mekanism:enriched_iron', 'thermal:slag')

    event.recipes.immersiveengineering.arc_furnace(['mekanism:ingot_steel'], 'mekanism:enriched_iron', ['immersiveengineering:dust_coke'], 'thermal:slag')
    event.recipes.immersiveengineering.arc_furnace(['mekanism:ingot_steel'], 'mekanism:enriched_iron', ['immersivepetroleum:petcoke_dust'], 'thermal:slag')
    event.recipes.immersiveengineering.arc_furnace(['mekanism:ingot_steel'], 'mekanism:enriched_iron', [Item.of('mekanism:dust_charcoal', 3)], 'thermal:slag')

});