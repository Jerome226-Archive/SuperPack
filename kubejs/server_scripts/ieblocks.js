onEvent('recipes', event => {
    //multiblock bits
    event.remove({id: 'immersiveengineering:crafting/light_engineering'})
    event.shaped('immersiveengineering:light_engineering', [
        'SBS',
        'CWC',
        'SBS'
    ], {
        S: '#forge:sheetmetals/iron',
        W: 'immersiveengineering:wirecoil_copper',
        C: 'immersiveengineering:component_iron',
        B: '#forge:ingots/brass'
    })
    event.remove({id: 'immersiveengineering:crafting/rs_engineering'})
    event.shaped('immersiveengineering:rs_engineering', [
        'ASA',
        'CRC',
        'ASA'
    ], {
        A: '#forge:sheetmetals/aluminum',
        S: 'thermal:redstone_servo',
        C: 'create:integrated_circuit',
        R: 'immersiveengineering:wirecoil_redstone'
    })
})