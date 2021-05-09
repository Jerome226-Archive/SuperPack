//priority: 1500

events.listen('recipes', function (event) { 

    //Smeltery Controller
    event.remove({id: 'tconstruct:smeltery/casting/seared/smeltery_controller'})
    event.custom({"type":"immersiveengineering:bottling_machine","result":{"item":"tconstruct:smeltery_controller"},"input":{"item":"tconstruct:seared_heater"},"fluid":{"tag":"tconstruct:molten_constantan","amount":576}})

    //Bloody Pigment Melting
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
          "item": "superpackutils:bloody_pigment"
        },
        "result": {
          "fluid": "tconstruct:blood",
          "amount": 50
        },
        "temperature": 36,
        "time": 30
    })

    //Grassy Pigment Melting
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
          "item": "superpackutils:grassy_pigment"
        },
        "result": {
          "fluid": "tconstruct:earth_slime",
          "amount": 50
        },
        "temperature": 50,
        "time": 31
    })

    //Azure Pigment Melting
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
          "item": "superpackutils:azure_pigment"
        },
        "result": {
          "fluid": "tconstruct:sky_slime",
          "amount": 50
        },
        "temperature": 10,
        "time": 29
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