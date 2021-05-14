//priority: 1500

events.listen('recipes', function (event) { 

    //Quartz Enriched Iron
    event.remove({output: 'refinedstorage:quartz_enriched_iron'})
    event.recipes.immersiveengineering.alloy(Item.of('refinedstorage:quartz_enriched_iron', 4), 'minecraft:quartz', Item.of('minecraft:iron_ingot', 3))
    
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
        P: 'immersiveengineering:sheetmetal_steel',
        S: 'refinedstorage:destruction_core',
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
    event.shaped('refinedstorage:construction_core', [' P ', 'ACA', ' P '], {
        P: 'botania:manasteel_ingot',
        A: 'tconstruct:slimesteel_ingot',
        C: 'refinedstorage:advanced_processor'
    })

    //Destruction Core
    event.remove({output: 'refinedstorage:destruction_core'})
    event.shaped('refinedstorage:destruction_core', [' P ', 'ACA', ' P '], {
        P: 'tconstruct:rose_gold_ingot',
        A: 'superpackutils:superheated_bronze_ingot',
        C: 'refinedstorage:improved_processor'
    })

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
    event.shaped('refinedstorage:grid', ['ZBC', 'GPA', 'ZDC'], {
        P: 'refinedstorage:machine_casing',
        A: 'superpackutils:platinum_ingot',
        B: 'refinedstorage:construction_core',
        D: 'refinedstorage:destruction_core',
        G: 'create:integrated_circuit',
        C: 'botania:mana_glass',
        Z: 'refinedstorage:improved_processor'
    })

    //Storage Monitor
    event.remove({output: 'refinedstorage:storage_monitor'})
    event.shaped('refinedstorage:storage_monitor', ['ZBC', 'GPA', 'ZDC'], {
        P: 'refinedstorage:machine_casing',
        A: 'superpackutils:platinum_ingot',
        B: 'refinedstorage:construction_core',
        D: 'refinedstorage:destruction_core',
        G: 'create:integrated_circuit',
        C: 'botania:mana_glass',
        Z: 'refinedstorage:basic_processor'
    })

    //Interface
    event.remove({output: 'refinedstorage:interface'})
    event.shaped('refinedstorage:interface', ['PDP', 'SCS', 'PDP'], {
        P: 'refinedstorage:quartz_enriched_iron',
        S: 'superpackutils:energetic_alloy_ingot',
        D: 'create:brass_funnel',
        C: 'refinedstorage:machine_casing'
    }),

    //Silicon
    event.remove({id: 'refinedstorage:silicon'})
    event.recipes.immersiveengineering.arc_furnace(['refinedstorage:silicon'], 'superpackutils:polished_quartz')

    //Advanced Processor
    event.remove({id: 'refinedstorage:advanced_processor'})
    event.recipes.create.compacting('refinedstorage:advanced_processor', ['refinedstorage:raw_advanced_processor', 'superpackutils:bio_plastic'])

    //Improved Processor
    event.remove({id: 'refinedstorage:improved_processor'})
    event.recipes.create.compacting('refinedstorage:improved_processor', ['refinedstorage:raw_improved_processor', 'superpackutils:bio_plastic'])

    //Basic Processor
    event.remove({id: 'refinedstorage:basic_processor'})
    event.recipes.create.compacting('refinedstorage:basic_processor', ['refinedstorage:raw_basic_processor', 'superpackutils:bio_plastic'])

    //Processing Binding
    event.remove({output: 'refinedstorage:processor_binding'})
    event.shaped(Item.of('refinedstorage:processor_binding', 8), ['PCP'], {
        P: 'botania:mana_string',
        C: '#forge:slimeball/green'
    })

});