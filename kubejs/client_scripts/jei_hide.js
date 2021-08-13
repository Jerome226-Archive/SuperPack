//priority: 2000

onEvent('jei.hide.items', event => {

    
 var color = [
    'white',
    'orange',
    'magenta',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray',
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black'
];

    event.hide([

        //Light Source
        'advancedrocketry:lightsource',

        //Refined Storage
        'refinedstorage:crafter',
        'refinedstorage:crafting_monitor',
        'refinedstorage:crafter_manager',
        'refinedstorage:pattern_grid',
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

        //Unused Ports
        'masterfulmachinery:improved_metallurgic_fabricator_basic_port_energy_output',
        'masterfulmachinery:metallurgic_fabricator_basic_port_energy_output',
        'masterfulmachinery:inscriber_basic_port_energy_output',
        'masterfulmachinery:infuser_basic_port_fluids_output',
        'masterfulmachinery:infuser_basic_port_energy_output',
        'masterfulmachinery:improved_metallurgic_fabricator_basic_port_pncr_pressure_output',
        'masterfulmachinery:collector_basic_port_energy_output',
        'masterfulmachinery:assembler_basic_port_energy_output',
        'masterfulmachinery:assembler_basic_port_fluids_output',
        'masterfulmachinery:assembler_basic_port_pncr_pressure_output',
        'masterfulmachinery:crusher_basic_port_items_input',
        'masterfulmachinery:crusher_basic_port_energy_output',
        'masterfulmachinery:crusher_basic_port_pncr_pressure_output',
        'masterfulmachinery:mixer_basic_port_pncr_pressure_output',
        'masterfulmachinery:mixer_basic_port_botania_mana_output',
        'masterfulmachinery:mixer_basic_port_energy_output',
        'masterfulmachinery:chemical_reactor_basic_port_items_output',
        'masterfulmachinery:chemical_reactor_basic_port_pncr_pressure_output',
        'masterfulmachinery:washer_basic_port_fluids_output',
        'masterfulmachinery:washer_basic_port_energy_output',
        'masterfulmachinery:advanced_mixer_basic_port_pncr_pressure_output',
        'masterfulmachinery:alloyer_basic_port_pncr_pressure_output',
        'masterfulmachinery:alloyer_basic_port_energy_output',
        'masterfulmachinery:compacter_basic_port_mekanism_gas_output',
        'masterfulmachinery:compacter_basic_port_fluids_input',
        'masterfulmachinery:compacter_basic_port_pncr_pressure_output',
        'masterfulmachinery:compacter_basic_port_energy_output',
        'masterfulmachinery:advanced_mixer_basic_port_energy_output',

        //Ex Nihilo
        'exnihilosequentia:crushed_andesite',
        'exnihilosequentia:crushed_diorite',
        'exnihilosequentia:crushed_granite',

        //Mekanism Pipes
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

        //Mini Utilities
        'miniutilities:mechanical_placer',
        'miniutilities:mechanical_miner',

        //Pneumaticcraft
        'pneumaticcraft:logistics_configurator',
        Item.of('pneumaticcraft:logistics_configurator', {"pneumaticcraft:air":30000}),
        'pneumaticcraft:logistics_frame_storage',
        'pneumaticcraft:logistics_frame_default_storage',
        'pneumaticcraft:logistics_frame_passive_provider',
        'pneumaticcraft:logistics_frame_active_provider',
        'pneumaticcraft:logistics_frame_requester',
        'pneumaticcraft:logistics_core',
        'pneumaticcraft:logistics_drone',
        Item.of('pneumaticcraft:logistics_drone', {"pneumaticcraft:air":120000}),
        'pneumaticcraft:logistics_module',

        'pneumaticcraft:programmable_controller',
        'pneumaticcraft:programmer',
        'pneumaticcraft:programming_puzzle',
        'pneumaticcraft:network_api',
        'pneumaticcraft:network_data_storage',
        'pneumaticcraft:drone',
        Item.of('pneumaticcraft:drone', {"pneumaticcraft:air":120000}),

        'pneumaticcraft:lubricant_bucket',
        'pneumaticcraft:gasoline_bucket',
        'pneumaticcraft:oil_bucket',
        'pneumaticcraft:biodiesel_bucket',
        'pneumaticcraft:vegetable_oil_bucket',
        'pneumaticcraft:ethanol_bucket',

        'pneumaticcraft:small_tank',
        'pneumaticcraft:medium_tank',
        'pneumaticcraft:large_tank',
        'pneumaticcraft:huge_tank',

        //Engineer's Decor
        'engineersdecor:small_tree_cutter',
        'engineersdecor:small_block_breaker',
        'engineersdecor:small_solar_panel',
        'engineersdecor:factory_placer',
        'engineersdecor:fluid_barrel',

        //Ex Nihilo
        'exnihilosequentia:porcelain_clay',

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

        'neapolitan:chocolate_bar',

        //Silicon
        'tinyredstone:silicon',

        //Storage Drawers
        'storagedrawers:compacting_drawers_3',

        //Emerald
        'mekanism:dust_emerald',

        //Quartz
        'mekanism:dust_quartz',

        //Sulfur
        'bloodmagic:sulfur',
        'immersiveengineering:dust_sulfur',
        'mekanism:dust_sulfur',
        'eidolon:sulfur',
        //'factoriores:sulfur_dust',

        //Sulfur Block
        //'factoriores:sulfur_block',

        //Sawdust
        'immersiveengineering:dust_wood',
        'mekanism:sawdust',

        //Bitumen
        'immersivepetroleum:bitumen',

        //Coke
        'immersiveengineering:coal_coke',
        'immersiveengineering:coke',

        //Buzzier Bees
        'buzzier_bees:honey_apple',

        //Diamond Dust
        'mekanism:dust_diamond',
        'createaddition:diamond_grit',

        //CreateA Wires
        'createaddition:copper_spool',
        'createaddition:gold_spool',
        'createaddition:iron_spool',
        'createaddition:connector',
        'createaddition:accumulator',
        'createaddition:redstone_relay',

        //Iron Dust
        'bloodmagic:ironsand',
        'mekanism:dust_iron',
        'immersiveengineering:dust_iron',
        'libvulpes:dustiron',

        //Iron Plate
        'immersiveengineering:plate_iron',
        'create:iron_sheet',
        'libvulpes:plateiron',

        //Iron Rod
        'createaddition:iron_rod',

        //Gold Dust
        'bloodmagic:goldsand',
        'mekanism:dust_gold',
        'immersiveengineering:dust_gold',
        'libvulpes:dustgold',

        //Gold Plate
        'immersiveengineering:plate_gold',
        'create:golden_sheet',
        'libvulpes:plategold',

        //Gold Rod
        'immersiveposts:stick_gold',

        //Copper Ingot
        'iceandfire:copper_ingot',
        'mekanism:ingot_copper',
        'create:copper_ingot',
        'immersiveengineering:ingot_copper',
        'tconstruct:copper_ingot',
        'libvulpes:ingotcopper',
        'exnihilosequentia:ingot_copper',

        //Copper Dust
        'immersiveengineering:dust_copper',
        'mekanism:dust_copper',
        'libvulpes:dustcopper',

        //Copper Nugget
        'iceandfire:copper_nugget',
        'mekanism:nugget_copper',
        'create:copper_nugget',
        'immersiveengineering:nugget_copper',
        'tconstruct:copper_nugget',
        'libvulpes:nuggetcopper',

        //Copper Plate
        'immersiveengineering:plate_copper',
        'create:copper_sheet',
        'libvulpes:platecopper',

        //Copper Rod
        'immersiveposts:stick_copper',

        //Copper Wire
        'createaddition:copper_wire',

        //Tin Ingot
        'mekanism:ingot_tin',
        'libvulpes:ingottin',
        'exnihilosequentia:ingot_tin',

        //Tin Dust
        'mekanism:dust_tin',
        'libvulpes:dusttin',

        //Tin Nugget
        'mekanism:nugget_tin',
        'libvulpes:nuggettin',

        //Tin Plate
        'libvulpes:platetin',

        //Lead Ingot
        'immersiveengineering:ingot_lead',
        'mekanism:ingot_lead',
        'exnihilosequentia:ingot_lead',
        'eidolon:lead_ingot',
        'voluminousenergy:lead_ingot',

        //Lead Dust
        'immersiveengineering:dust_lead',
        'mekanism:dust_lead',

        //Lead Nugget
        'immersiveengineering:nugget_lead',
        'mekanism:nugget_lead',
        'eidolon:lead_nugget',

        //Lead Plate
        'immersiveengineering:plate_lead',

        //Silver Ingot
        'immersiveengineering:ingot_silver',
        'iceandfire:silver_ingot',
        'exnihilosequentia:ingot_silver',
        'voluminousenergy:silver_ingot',

        //Silver Dust
        'immersiveengineering:dust_silver',

        //Silver Nugget
        'immersiveengineering:nugget_silver',
        'iceandfire:silver_nugget',

        //Silver Plate
        'immersiveengineering:plate_silver',

        //Nickel Ingot
        'immersiveengineering:ingot_nickel',
        'exnihilosequentia:ingot_nickel',

        //Nickel Dust
        'immersiveengineering:dust_nickel',

        //Nickel Nugget
        'immersiveengineering:nugget_nickel',

        //Nickel Plate
        'immersiveengineering:plate_nickel',

        //Uranium Ingot
        'immersiveengineering:ingot_uranium',
        'exnihilosequentia:ingot_uranium',

        //Uranium Nugget
        'immersiveengineering:nugget_uranium',

        //Uranium Dust
        'immersiveengineering:dust_uranium',

        //Steel Ingot
        'immersiveengineering:ingot_steel',
        'libvulpes:ingotsteel',
        'voluminousenergy:steel_ingot',

        //Steel Nugget
        'immersiveengineering:nugget_steel',
        'libvulpes:nuggetsteel',

        //Steel Dust
        'immersiveengineering:dust_steel',
        'libvulpes:duststeel',

        //Steel Plate
        'libvulpes:platesteel',

        //Steel Gear
        'libvulpes:gearsteel',

        //Zinc Ingot
        'exnihilosequentia:ingot_zinc',

        //Electrum Ingot
        'immersiveengineering:ingot_electrum',

        //Electrum Dust
        'immersiveengineering:dust_electrum',

        //Electrum Plate
        'immersiveengineering:plate_electrum',

        //Electrum Nugget
        'immersiveengineering:nugget_electrum',

        //Constantan Ingot
        'immersiveengineering:ingot_constantan',

        //Constantan Dust
        'immersiveengineering:dust_constantan',

        //Constantan Nugget
        'immersiveengineering:nugget_constantan',

        //Constantan Plate
        'immersiveengineering:plate_constantan',

        //Bronze Ingot
        'mekanism:ingot_bronze',

        //Bronze Dust
        'mekanism:dust_bronze',

        //Bronze Nugget
        'mekanism:nugget_bronze',

        //Titanium Ingot
        'voluminousenergy:titanium_ingot',

        //Aluminum Dust
        'libvulpes:dustaluminum',

        //Aluminum Ingot
        'libvulpes:ingotaluminum',
        'exnihilosequentia:ingot_aluminum',
        'voluminousenergy:aluminum_ingot',
        
        //Aluminum Nugget
        'libvulpes:nuggetaluminum',

        //Aluminum Plate
        'libvulpes:platealuminum'

    ]);

    color.forEach(c => event.hide(`refinedstorage:${c}_creative_controller`));
    color.forEach(c => event.hide(`refinedstorage:${c}_controller`));
    color.forEach(c => event.hide(`refinedstorage:${c}_grid`));
    color.forEach(c => event.hide(`refinedstorage:${c}_crafting_grid`));
    color.forEach(c => event.hide(`refinedstorage:${c}_fluid_grid`));
    color.forEach(c => event.hide(`refinedstorage:${c}_detector`));
    color.forEach(c => event.hide(`refinedstorage:${c}_relay`));
    color.forEach(c => event.hide(`refinedstorage:${c}_network_receiver`));
    color.forEach(c => event.hide(`refinedstorage:${c}_network_transmitter`));
    color.forEach(c => event.hide(`refinedstorage:${c}_network_relay`));
    color.forEach(c => event.hide(`refinedstorage:${c}_network_detector`));
    color.forEach(c => event.hide(`refinedstorage:${c}_security_manager`));
    color.forEach(c => event.hide(`refinedstorage:${c}_wireless_transmitter`));
    color.forEach(c => event.hide(`refinedstorage:${c}_disk_manipulator`));
    color.forEach(c => event.hide(`refinedstorage:${c}_pattern_grid`));
    color.forEach(c => event.hide(`refinedstorage:${c}_crafter_manager`));  
    color.forEach(c => event.hide(`refinedstorage:${c}_crafting_monitor`));
    color.forEach(c => event.hide(`refinedstorage:${c}_crafter`));

})




onEvent('jei.hide.fluids', event => {

    event.hide([

        //Pneumaticcraft Liquids
        'pneumaticcraft:lubricant',
        'pneumaticcraft:gasoline',
        'pneumaticcraft:oil',
        'pneumaticcraft:biodiesel',
        'pneumaticcraft:vegetable_oil',
        'pneumaticcraft:ethanol'

    ]);

})
