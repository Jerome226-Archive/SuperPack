//priority: 1500

events.listen('recipes', function (event) {

    //-----------------------------------------------------
    //Create Additions
    //-----------------------------------------------------
    
    //Capacitor
    event.remove({output: 'createaddition:capacitor'})
    event.shaped('createaddition:capacitor', [' S ', 'PCP', 'PMP'], {
        S: '#forge:plates/zinc',
        P: '#forge:plates/iron',
        C: 'superpackutils:compressed_steel_ingot',
        M: '#forge:plates/copper'
    })

    //Easy Seed Oil Remove
    event.remove({id: 'createaddition:compacting/seed_oil'})

    //Induction Heater
    event.remove({output: 'createaddition:heater'})
    event.shaped('createaddition:heater', [' C ', 'IBI', 'SPS'], {
        S: '#forge:ingots/brass',
        C: 'superpackutils:reinforced_capacitor',
        B: 'mekanismgenerators:heat_generator',
        P: '#forge:plates/iron',
        I: 'immersiveengineering:wirecoil_copper'
    }),

    //Alternator
    event.remove({id: 'createaddition:mechanical_crafting/alternator'})
    event.recipes.create.mechanical_crafting('createaddition:alternator', [
        ' PWP ',
        'PLELP',
        'WLBLW',
        'PRRRP',
        ' PWP '
      ], {
        P: '#forge:plates/invar',
        W: '#forge:plates/electrum',
        R: 'immersiveengineering:wirecoil_electrum',
        L: 'immersiveengineering:wirecoil_copper',
        B: '#forge:rods/brass',
        E: 'create:integrated_circuit'
    })

    //Electric Motor
    event.remove({id: 'createaddition:mechanical_crafting/electric_motor'})
    event.recipes.create.mechanical_crafting('createaddition:electric_motor', [
        '  B  ',
        ' BEB ',
        'BWRWB',
        ' BWB ',
        '  C  '
      ], {
        B: '#forge:plates/brass',
        C: 'createaddition:capacitor',
        W: 'immersiveengineering:wirecoil_electrum',
        R: '#forge:rods/iron',
        E: 'create:integrated_circuit'
    })

});