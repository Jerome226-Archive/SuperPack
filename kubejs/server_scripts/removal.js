//priority 10
events.listen('recipes', function (event) {

var outputRemoval = [

    //Factoriores
    //'factoriores:sulfur_block',
    
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

    //Ex Nihilo
    'exnihilosequentia:chunk_copper',
    'exnihilosequentia:chunk_lead',
    'exnihilosequentia:chunk_nickel',
    'exnihilosequentia:chunk_silver',
    'exnihilosequentia:chunk_tin',
    'exnihilosequentia:chunk_aluminum',
    'exnihilosequentia:chunk_uranium',
    'exnihilosequentia:chunk_zinc',
    'exnihilosequentia:chunk_iron',
    'exnihilosequentia:chunk_gold',
    'exnihilosequentia:chunk_osmium',
    'exnihilosequentia:chunk_cobalt',
    'exnihilosequentia:chunk_platinum',
    'exnihilosequentia:porcelain_clay',

    //Engineer's Decor
    'engineersdecor:small_tree_cutter',
    'engineersdecor:small_block_breaker',
    'engineersdecor:small_solar_panel',
    'engineersdecor:factory_placer',
    'engineersdecor:fluid_barrel',

    //Crates
    'quark:carrot_crate',
    'thermal:carrot_block',
    'quark:potato_crate',
    'thermal:potato_block',
    'quark:beetroot_crate',
    'thermal:beetroot_block',
    'thermal:tomato_block',
    'thermal:onion_block',

    'thermal:onion',
    'thermal:onion_seeds',
    'sushigocrafting:rice',
    'sushigocrafting:rice_seeds',
    'thermal:rice',
    'thermal:rice_seeds',
    'thermal:strawberry',
    'thermal:strawberry_seeds',
    'thermal:tomato',
    'thermal:tomato_seeds',

    //Silicon
    'tinyredstone:silicon',

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