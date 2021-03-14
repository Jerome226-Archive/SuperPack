onEvent('recipes', event => {
    //computers
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
    // there'll be more here, just had to stop a lil early
})