onEvent('recipes', event => {
    //computers
    event.remove({output: 'computercraft:computer_normal'})
    event.shaped('computercraft:computer_normal', [
        'SSS',
        'SIS',
        'SMS'
    ], {
        S: 'pneumaticcraft:plastic',
        M: 'computercraft:monitor_normal',
        I: 'create:integrated_circuit'
    })
    event.remove({output: 'computercraft:computer_advanced'})
    event.shaped('computercraft:computer_advanced', [
        'HHH',
        'HBH',
        'HMH'
    ], {
        H: 'mekanism:hdpe_sheet',
        B: 'mekanism:basic_control_circuit',
        M: 'computercraft:monitor_advanced'
    })
    //monitors
    event.remove({output: 'computercraft:monitor_normal'})
    event.shaped('computercraft:monitor_normal', [
        'PGP',
        'GLG',
        'PGP'
    ], {
        P: '#forge:plates/invar',
        G: 'thermal:obsidian_glass',
        L: 'minecraft:redstone_lamp'
    })
    event.remove({output: 'computercraft:monitor_advanced'})
    event.shaped('computercraft:monitor_advanced', [
        'PGP',
        'GLG',
        'PGP'
    ], {
        P: '#forge:plates/lumium',
        G: 'thermal:lumium_glass',
        L: 'minecraft:redstone_lamp'
    })
})