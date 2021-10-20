//priority: 1500

events.listen('recipes', function (event) { 

    //Smeltery Controller
    event.remove({id: 'tconstruct:smeltery/casting/seared/smeltery_controller'})
    event.custom({"type":"immersiveengineering:bottling_machine","result":{"item":"tconstruct:smeltery_controller"},"input":{"item":"superpackutils:smeltery_assembly"},"fluid":{"tag":"tconstruct:molten_constantan","amount":576}})
    event.custom({"type":"immersiveengineering:blueprint","inputs":[{"count":1,"base_ingredient":{"item":"superpackutils:integrated_circuit"}},{"count":1,"base_ingredient":{"item":"tconstruct:seared_melter"}},{"count":1,"base_ingredient":{"item":"tconstruct:scorched_alloyer"}},{"count":1,"base_ingredient":{"item":"tconstruct:seared_heater"}}],"category":"components","result":{"item":"superpackutils:smeltery_assembly","count":1}})

    //Treated Wood Recipe
    event.remove({id: 'tconstruct:compat/immersiveengineering/treated_wood'})

    //Seared Melter
    event.remove({output: 'tconstruct:seared_melter'})
    event.shaped('tconstruct:seared_melter', [' C ', 'BIB', 'BBB'], {
        C: 'minecraft:blast_furnace',
        B: 'tconstruct:seared_brick',
        I: 'tconstruct:seared_fuel_gauge'
    }),

    //Seared Heater
    event.remove({output: 'tconstruct:seared_heater'})
    event.shaped('tconstruct:seared_heater', ['BBB', 'BCB', 'BBB'], {
        C: 'minecraft:furnace',
        B: 'tconstruct:seared_brick'
    }),

    //Scorched Alloyer
    event.remove({output: 'tconstruct:scorched_alloyer'})
    event.shaped('tconstruct:scorched_alloyer', [' C ', 'BIB', 'BBB'], {
        C: 'create:mechanical_mixer',
        B: 'tconstruct:scorched_brick',
        I: 'tconstruct:scorched_fuel_gauge'
    }),

    //Ichor Slimeball
    event.custom({
        "type": "tconstruct:casting_table",
        "fluid": {
          "tag": "forge:ichor",
          "amount": 250
        },
        "result": "tconstruct:ichor_slime_ball",
        "cooling_time": 40
    })

    //Ichor Congealed 
    event.custom({
        "type": "tconstruct:casting_basin",
        "fluid": {
          "tag": "forge:ichor",
          "amount": 1000
        },
        "result": "tconstruct:ichor_congealed_slime",
        "cooling_time": 79
    })

    //Ichor Block
    event.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
          "item": "tconstruct:ichor_congealed_slime"
        },
        "cast_consumed": true,
        "fluid": {
          "tag": "forge:ichor",
          "amount": 1250
        },
        "result": "tconstruct:ichor_slime",
        "cooling_time": 89
    })

    //Melting Ball
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
          "tag": "forge:slimeball/ichor"
        },
        "result": {
          "fluid": "superpackutils:ichor",
          "amount": 250
        },
        "temperature": 36,
        "time": 30
    })

    //Melting Block
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
          "item": "tconstruct:ichor_slime"
        },
        "result": {
          "fluid": "superpackutils:ichor",
          "amount": 2250
        },
        "temperature": 36,
        "time": 90
    })

    //Melting Boots
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
          "item": "tconstruct:ichor_slime_boots"
        },
        "result": {
          "fluid": "superpackutils:ichor",
          "amount": 2500
        },
        "temperature": 36,
        "time": 125
    })

    //Melting Congealed
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
          "item": "tconstruct:ichor_congealed_slime"
        },
        "result": {
          "fluid": "superpackutils:ichor",
          "amount": 1000
        },
        "temperature": 36,
        "time": 60
    })

    //Melting Sapling
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
          "item": "tconstruct:ichor_slime_sapling"
        },
        "result": {
          "fluid": "superpackutils:ichor",
          "amount": 250
        },
        "temperature": 36,
        "time": 40
    })

    //Melting Ichor Crystal
    event.custom({
        "type": "tconstruct:damagable_melting",
        "ingredient": {
          "item": "tconstruct:ichor_slime_crystal"
        },
        "result": {
          "fluid": "superpackutils:ichor",
          "amount": 250
        },
        "temperature": 36,
        "time": 41
    })

    //Pyrotheum Fuel
    event.custom({
        "type": "tconstruct:melting_fuel",
        "fluid": {
          "name": "superpackutils:pyrotheum",
          "amount": 50
        },
        "duration": 200,
        "temperature": 2000
    })

    //Nether Grout
    event.remove({output: 'tconstruct:nether_grout'})
    event.recipes.create.mixing(Item.of('tconstruct:nether_grout', 2), ['minecraft:magma_cream', 'minecraft:soul_sand']).heated()

    //Mud Bricks
    event.remove({id: 'tconstruct:smeltery/casting/mud_bricks'})
    event.recipes.create.filling('tconstruct:mud_bricks', ['minecraft:dirt', fluid.of('minecraft:water', 100)]),

    //Lavawood
    event.remove({id: 'tconstruct:smeltery/casting/lavawood'})
    event.recipes.create.filling('tconstruct:lavawood', ['#minecraft:planks', fluid.of('minecraft:lava', 100)]),

    //Blazewood
    event.remove({id: 'tconstruct:smeltery/casting/blazewood'})
    event.recipes.create.filling('tconstruct:blazewood', ['#minecraft:planks', fluid.of('tconstruct:blazing_blood', 100)])

});