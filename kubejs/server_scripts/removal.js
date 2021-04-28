//priority 10
events.listen('recipes', function (event) {

var outputRemoval = [
    'mekanism:basic_universal_cable',
    'mekanism:advanced_universal_cable',
    'mekanism:elite_universal_cable',
    'mekanism:ultimate_universal_cable',

    'mekanism:basic_mechanical_pipe',
    'mekanism:advanced_mechanical_pipe',
    'mekanism:elite_mechanical_pipe',
    'mekanism:ultimate_mechanical_pipe',

    'mekanism:basic_logistical_transporter',
    'mekanism:advanced_logistical_transporter',
    'mekanism:elite_logistical_transporter',
    'mekanism:ultimate_logistical_transporter',
    'mekanism:restrictive_transporter',
    'mekanism:diversion_transporter',
    'mekanism:logistical_sorter',

    'rftoolsstorage:crafting_manager',

    'storagedrawers:compacting_drawers_3',

    'createaddition:copper_spool',
    'createaddition:gold_spool',
    'createaddition:connector',
    'createaddition:accumulator',

    'pneumaticcraft:logistics_frame_storage',
    'pneumaticcraft:logistics_frame_default_storage',
    'pneumaticcraft:logistics_frame_passive_provider',
    'pneumaticcraft:logistics_frame_active_provider',
    'pneumaticcraft:logistics_core',
    'pneumaticcraft:logistics_drone',
    'pneumaticcraft:logistics_module',

    'thermal:machine_press',

    'immersiveengineering:windmill',
    'immersiveengineering:watermill',

    'buzzier_bees:honey_apple',
];

var typeRemoval = [
    'thermal:press',
    
];

outputRemoval.forEach((removal) => {
    event.remove({ output: removal });
});

typeRemoval.forEach((removal) => {
    event.remove({ type: removal });
});

});