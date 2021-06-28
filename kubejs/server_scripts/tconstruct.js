//priority: 1500

events.listen('recipes', function (event) { 

    //Smeltery Controller
    event.remove({id: 'tconstruct:smeltery/casting/seared/smeltery_controller'})
    event.custom({"type":"immersiveengineering:bottling_machine","result":{"item":"tconstruct:smeltery_controller"},"input":{"item":"tconstruct:seared_heater"},"fluid":{"tag":"tconstruct:molten_constantan","amount":576}})

    //Ichor Slimeball
    event.custom({
        "type": "tconstruct:casting_table",
        "fluid": {
          "tag": "tconstruct:ichor",
          "amount": 250
        },
        "result": "tconstruct:ichor_slime_ball",
        "cooling_time": 40
    })

    //Ichor Congealed 
    event.custom({
        "type": "tconstruct:casting_basin",
        "fluid": {
          "tag": "tconstruct:ichor",
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
          "tag": "tconstruct:ichor",
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
          "fluid": "tconstruct:ichor",
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
          "fluid": "tconstruct:ichor",
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
          "fluid": "tconstruct:ichor",
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
          "fluid": "tconstruct:ichor",
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
          "fluid": "tconstruct:ichor",
          "amount": 250
        },
        "temperature": 36,
        "time": 40
    })

    //Melting Ichor Crystal
    event.custom({
        "type": "tconstruct:damagable_melting",
        "ingredient": {
          "item": "tconstruct:ichor_crystal"
        },
        "result": {
          "fluid": "tconstruct:ichor",
          "amount": 250
        },
        "temperature": 36,
        "time": 41
    })

    //Melting Sling
    event.custom({
        "type": "tconstruct:damagable_melting",
        "ingredient": {
          "item": "tconstruct:ichor_sling"
        },
        "result": {
          "fluid": "tconstruct:ichor",
          "amount": 1750
        },
        "temperature": 36,
        "time": 107
    })

    //Mud Bricks
    event.remove({id: 'tconstruct:smeltery/casting/mud_bricks'})
    event.recipes.create.filling('tconstruct:mud_bricks', ['minecraft:dirt', fluid.of('minecraft:water', 100)]),

    //Lavawood
    event.remove({id: 'tconstruct:smeltery/casting/lavawood'})
    event.recipes.create.filling('tconstruct:lavawood', ['#minecraft:planks', fluid.of('minecraft:lava', 100)]),

    //Blazewood
    event.remove({id: 'tconstruct:smeltery/casting/blazewood'})
    event.recipes.create.filling('tconstruct:blazewood', ['#minecraft:planks', fluid.of('tconstruct:molten_blaze', 100)])

});