//priority: 1500

events.listen('recipes', function (event) { 

    //Smeltery Controller
    event.remove({id: 'tconstruct:smeltery/casting/seared/smeltery_controller'})
    event.custom({"type":"immersiveengineering:bottling_machine","result":{"item":"tconstruct:smeltery_controller"},"input":{"item":"tconstruct:seared_heater"},"fluid":{"tag":"tconstruct:molten_constantan","amount":576}})

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
          "item": "tconstruct:ichor_crystal"
        },
        "result": {
          "fluid": "superpackutils:ichor",
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
          "fluid": "superpackutils:ichor",
          "amount": 1750
        },
        "temperature": 36,
        "time": 107
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

    //Mud Bricks
    event.remove({id: 'tconstruct:smeltery/casting/mud_bricks'})
    event.recipes.create.filling('tconstruct:mud_bricks', ['minecraft:dirt', fluid.of('minecraft:water', 100)]),

    //Lavawood
    event.remove({id: 'tconstruct:smeltery/casting/lavawood'})
    event.recipes.create.filling('tconstruct:lavawood', ['#minecraft:planks', fluid.of('minecraft:lava', 100)]),

    //Blazewood
    event.remove({id: 'tconstruct:smeltery/casting/blazewood'})
    event.recipes.create.filling('tconstruct:blazewood', ['#minecraft:planks', fluid.of('tconstruct:blazing_blood', 100)])

    //Ichor Crystal
    event.remove({id: 'minecraft:tools/modifiers/slime_crystal/ichor'})
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
                    "item": "tconstruct:ichor_slime_ball",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:redstone",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "thermal:ruby",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "thermal:cinnabar",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "eidolon:crimson_essence",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "create:polished_rose_quartz",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "thermal:bronze_ingot",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "tconstruct:blazing_blood",
                    "amount": 250
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "tconstruct:ichor_slime_crystal",
                    "count": 1
                }
            }
        ]
    })

    //Skyslime Crystal
    event.remove({id: 'minecraft:tools/modifiers/slime_crystal/sky'})
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
                    "item": "tconstruct:sky_slime_ball",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:diamond",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "thermal:sapphire",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "thermal:apatite",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "eidolon:warped_sprouts",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "superpackutils:polished_mana_quartz",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "superpackutils:electrical_hsla_steel_ingot",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "youmatter:stabilizer",
                    "amount": 250
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "tconstruct:sky_slime_crystal",
                    "count": 1
                }
            }
        ]
    })

    //Enderslime Crystal
    event.remove({id: 'minecraft:tools/modifiers/slime_crystal/ender'})
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
                    "item": "tconstruct:ender_slime_ball",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "mekanism:ingot_refined_obsidian",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "botania:dragonstone",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:shulker_shell",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "eidolon:shadow_gem",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "bloodmagic:steadfastcrystal",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "libvulpes:ingottitanium",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "youmatter:umatter",
                    "amount": 250
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "tconstruct:ender_slime_crystal",
                    "count": 1
                }
            }
        ]
    })

});