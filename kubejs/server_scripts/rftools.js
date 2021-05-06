//priority: 1500

events.listen('recipes', function (event) { 

    //Machine Base
    event.remove({output: 'rftoolsbase:machine_base'})
    event.recipes.create.mechanical_crafting('rftoolsbase:machine_base', ['CEC', 'SHS'], {
        C: 'immersiveengineering:slab_storage_steel',
        S: '#forge:sheetmetals/steel',
        H: 'immersiveengineering:heavy_engineering',
        E: '#forge:storage_blocks/electrum'
    }),

    //Machine Frame
    event.remove({output: 'rftoolsbase:machine_frame'})
    event.recipes.create.mechanical_crafting('rftoolsbase:machine_frame', ['SCS', 'IBI', 'SCS'], {
        S: 'superpackutils:tetraethyl_lead_ingot',
        C: 'superpackutils:doublelayered_capacitor',
        B: 'mekanism:steel_casing',
        I: '#forge:ingots/osmium'
    }),

    //Storage Scanner
    event.remove({output: 'rftoolsstorage:storage_scanner'})
    event.recipes.create.mechanical_crafting('rftoolsstorage:storage_scanner', ['HLTLH', 'GPSEG', 'HRTRH'], {
        T: 'rftoolsbase:machine_base',
        G: 'botania:mana_pearl',
        E: 'immersiveengineering:circuit_board',
        L: 'createaddition:capacitor',
        R: '#forge:ingots/terrasteel',
        H: 'immersiveengineering:plate_steel',
        S: 'rftoolsbase:information_screen',
        P: 'create:integrated_circuit'
    }),
    
    ///Modular Storage
    event.remove({output: 'rftoolsstorage:modular_storage'})
    event.shaped('rftoolsstorage:modular_storage', ['CSC', 'HBH', 'ESE'], {
        C: 'superpackutils:doublelayered_capacitor',
        S: 'mekanism:personal_chest',
        H: '#forge:glass/colorless',
        B: 'rftoolsbase:machine_base',
        E: 'mekanism:alloy_infused'
    })

});