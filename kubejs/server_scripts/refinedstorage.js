//priority: 1500

events.listen('recipes', function (event) { 
    
    //Controller
    event.remove({output: 'refinedstorage:controller'})
    event.recipes.create.mechanical_crafting('refinedstorage:controller', [
        'CBABC',
        'PYEYP',
        'SEMES',
        'PYEYP',
        'CBABC'
      ], {
        C: Item.of('tconstruct:large_plate', {Material:"tconstruct:manyullyn"}),
        P: 'refinedstorage:destruction_core',
        S: 'superpackutils:circuit_board',
        A: 'storagedrawers:controller',
        M: 'refinedstorage:machine_casing',
        Y: 'superpackutils:electrical_platinum_ingot',
        E: 'tconstruct:slimesteel_ingot',
        B: 'refinedstorage:construction_core'
    })

    //Refined Storage Machine Case
    event.remove({output: 'refinedstorage:machine_casing'})
    event.recipes.create.mechanical_crafting('refinedstorage:machine_casing', ['SCS', 'ABA', 'SCS'], {
        S: 'refinedstorage:quartz_enriched_iron',
        C: 'create:electron_tube',
        A: 'superpackutils:reinforced_capacitor',
        B: 'immersiveengineering:heavy_engineering'
    })

    //Construction Core
    event.remove({output: 'refinedstorage:construction_core'})
    event.recipes.create.mixing('refinedstorage:construction_core', ['refinedstorage:advanced_processor', 'tconstruct:slimesteel_ingot', 'superpackutils:electrical_platinum_ingot'])

    //Destruction Core
    event.remove({output: 'refinedstorage:destruction_core'})
    event.recipes.create.mixing('refinedstorage:destruction_core', ['refinedstorage:improved_processor', 'thermal:bronze_ingot', 'tconstruct:rose_gold_ingot'])

    //Network Transmitter
    event.remove({output: 'refinedstorage:network_transmitter'})
    event.shaped('refinedstorage:network_transmitter', ['CPC', 'BAD', 'HRH'], {
        P: 'mekanism:quantum_entangloporter',
        A: 'refinedstorage:machine_casing',
        C: 'superpackutils:starlight_infused_mana_pearl',
        B: 'refinedstorage:construction_core',
        D: 'refinedstorage:destruction_core',
        R: 'mythicbotany:alfsteel_ingot',
        H: 'refinedstorage:improved_processor'
    })

    //Network Receiver
    event.remove({output: 'refinedstorage:network_receiver'})
    event.shaped('refinedstorage:network_receiver', ['HRH', 'BAD', 'CPC'], {
        P: 'mekanism:quantum_entangloporter',
        A: 'refinedstorage:machine_casing',
        C: 'superpackutils:starlight_infused_mana_pearl',
        B: 'refinedstorage:construction_core',
        D: 'refinedstorage:destruction_core',
        R: 'mythicbotany:alfsteel_ingot',
        H: 'refinedstorage:improved_processor'
    })

    //Grid
    event.remove({output: 'refinedstorage:grid'})
    event.shaped('refinedstorage:grid', ['ZBC', 'GPA', 'ZBC'], {
        P: 'refinedstorage:machine_casing',
        A: 'superpackutils:platinum_ingot',
        B: 'refinedstorage:construction_core',
        G: 'create:integrated_circuit',
        C: 'botania:mana_glass',
        Z: 'refinedstorage:improved_processor'
    })

    //Storage Monitor
    event.remove({output: 'refinedstorage:storage_monitor'})
    event.shaped('refinedstorage:storage_monitor', ['ZBC', 'GPA', 'ZBC'], {
        P: 'refinedstorage:machine_casing',
        A: 'superpackutils:platinum_ingot',
        B: 'refinedstorage:construction_core',
        G: 'create:integrated_circuit',
        C: 'botania:mana_glass',
        Z: 'refinedstorage:basic_processor'
    })

    //Interface
    event.remove({output: 'refinedstorage:interface'})
    event.shaped('refinedstorage:interface', ['PDP', 'SCS', 'PDP'], {
        P: 'refinedstorage:quartz_enriched_iron',
        S: 'refinedstorage:destruction_core',
        D: 'create:brass_funnel',
        C: 'refinedstorage:machine_casing'
    }),

    //Basic Processor
    event.remove({output: 'refinedstorage:raw_basic_processor'})
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "inscriber",
        "controllerId": "basic",
        "ticks": 100,
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
                    "item": "refinedstorage:quartz_enriched_iron",
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
                    "item": "refinedstorage:processor_binding",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "refinedstorage:silicon",
                    "count": 1
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "refinedstorage:raw_basic_processor",
                    "count": 1
                }
            }
        ]
    })

  //Improved Processor
  event.remove({output: 'refinedstorage:raw_improved_processor'})
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "inscriber",
    "controllerId": "basic",
    "ticks": 100,
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
                "item": "thermal:electrum_ingot",
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
                "item": "refinedstorage:processor_binding",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "refinedstorage:silicon",
                "count": 1
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "refinedstorage:raw_improved_processor",
                "count": 1
            }
        }
    ]
})

//Advanced Processor
event.remove({output: 'refinedstorage:raw_advanced_processor'})
event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "inscriber",
    "controllerId": "basic",
    "ticks": 100,
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
                "item": "superpackutils:platinum_ingot",
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
                "item": "refinedstorage:processor_binding",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "refinedstorage:silicon",
                "count": 1
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "refinedstorage:raw_advanced_processor",
                "count": 1
            }
        }
    ]
})

//Withering Processor
event.remove({output: 'extradisks:raw_withering_processor'})
event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "inscriber",
    "controllerId": "basic",
    "ticks": 100,
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
                "item": "minecraft:nether_star",
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
                "item": "refinedstorage:processor_binding",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "refinedstorage:silicon",
                "count": 1
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "extradisks:raw_withering_processor",
                "count": 1
            }
        }
    ]
})

    //Silicon
    event.remove({id: 'refinedstorage:silicon'})
    event.smelting('refinedstorage:silicon', 'tinyredstone:silicon_compound')

    //Advanced Processor
    event.remove({id: 'refinedstorage:advanced_processor'})
    event.recipes.create.compacting('refinedstorage:advanced_processor', ['refinedstorage:raw_advanced_processor', 'superpackutils:bio_plastic'])

    //Withering Processor
    event.remove({id: 'extradisks:withering_processor'})
    event.recipes.create.compacting('extradisks:withering_processor', ['extradisks:raw_withering_processor', 'superpackutils:bio_plastic'])

    //Improved Processor
    event.remove({id: 'refinedstorage:improved_processor'})
    event.recipes.create.compacting('refinedstorage:improved_processor', ['refinedstorage:raw_improved_processor', 'superpackutils:bio_plastic'])

    //Basic Processor
    event.remove({id: 'refinedstorage:basic_processor'})
    event.recipes.create.compacting('refinedstorage:basic_processor', ['refinedstorage:raw_basic_processor', 'superpackutils:bio_plastic'])

});