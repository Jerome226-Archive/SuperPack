//priority: 1500

events.listen('recipes', function (event) { 

    //-----------------------------------------------------
    //Misc
    //-----------------------------------------------------

    //Natures Compass
    event.remove({output: 'naturescompass:naturescompass'})
    event.shaped('naturescompass:naturescompass', ['TWT', 'WAW', 'TWT'], {
        A: 'minecraft:compass',
        W: '#minecraft:logs',
        T: '#botania:runes/earth'
    }),

    //Portable Black Hole
    event.remove({output: 'youmatter:black_hole'})
    event.recipes.mekanism.combining('youmatter:black_hole', 'botania:ender_air_bottle', Item.of('mythicbotany:alfsteel_ingot', 1))

    //Golden Frog Leg
    event.recipes.create.filling('quark:golden_frog_leg', ['quark:frog_leg', fluid.of('tconstruct:molten_gold', 128)]),

    //Golden Habanera
    event.recipes.create.filling('simplefarming:golden_habanero', ['simplefarming:habanero', fluid.of('tconstruct:molten_gold', 128)]),
    
    //-----------------------------------------------------
    //Create Additions
    //-----------------------------------------------------
    
    //Capacitor
    event.remove({output: 'createaddition:capacitor'})
    event.shaped('createaddition:capacitor', [' S ', 'PCP', 'PMP'], {
        S: '#forge:plates/zinc',
        P: '#forge:plates/iron',
        C: 'superpackutils:compressed_steel_ingot',
        M: 'immersiveengineering:component_steel'
    })

});