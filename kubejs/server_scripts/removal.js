//priority 10
events.listen('recipes', function (event) {

var outputRemoval = [

    //Lib Vulpes
    'libvulpes:gearsteel',

    //Refined Storage
    '#refinedstorage:crafter',
    '#refinedstorage:crafting_monitor',
    '#refinedstorage:crafter_manager',
    '#refinedstorage:pattern_grid',
    'refinedstorage:exporter',
    'refinedstorage:importer',
    'refinedstorage:constructor',
    'refinedstorage:destructor',
    'refinedstorage:pattern',
    'refinedstorage:fortune_3_upgrade',
    'refinedstorage:fortune_2_upgrade',
    'refinedstorage:fortune_1_upgrade',
    'refinedstorage:silk_touch_upgrade',
    'refinedstorage:crafting_upgrade',

    //Mekanism
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

    //Engineer's Decor
    'engineersdecor:small_tree_cutter',
    'engineersdecor:small_block_breaker',
    'engineersdecor:small_solar_panel',
    'engineersdecor:factory_placer',

    //Storage Drawers
    'storagedrawers:compacting_drawers_3',

    //Create Additions
    'createaddition:copper_spool',
    'createaddition:gold_spool',
    'createaddition:connector',
    'createaddition:accumulator',
    'createaddition:redstone_relay',

    //Pneumaticcraft
    'pneumaticcraft:logistics_configurator',
    'pneumaticcraft:logistics_frame_storage',
    'pneumaticcraft:logistics_frame_default_storage',
    'pneumaticcraft:logistics_frame_passive_provider',
    'pneumaticcraft:logistics_frame_active_provider',
    'pneumaticcraft:logistics_frame_requester',
    'pneumaticcraft:logistics_core',
    'pneumaticcraft:logistics_drone',
    'pneumaticcraft:logistics_module',

    'pneumaticcraft:programmable_controller',
    'pneumaticcraft:programmer',
    'pneumaticcraft:programming_puzzle',
    'pneumaticcraft:network_api',
    'pneumaticcraft:network_data_storage',
    'pneumaticcraft:drone',

    '#pneumaticcraft:fluid_tanks',

    //Buzzier Bees
    'buzzier_bees:honey_apple',
];

var typeRemoval = [

    'immersiveengineering:cloche',
    'thermal:press',
    
];

outputRemoval.forEach((removal) => {
    event.remove({ output: removal });
});

typeRemoval.forEach((removal) => {
    event.remove({ type: removal });
});

});