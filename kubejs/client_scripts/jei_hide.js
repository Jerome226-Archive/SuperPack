//priority: 2000

onEvent('jei.hide.items', event => {

    event.hide([
        //Mekanism Pipes
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

        //RFTools
        'rftoolsstorage:crafting_manager',

        //Storage Drawers
        'storagedrawers:compacting_drawers_3',

        //Emerald
        'mekanism:dust_emerald',

        //Sulfur
        'bloodmagic:sulfur',
        'immersiveengineering:dust_sulfur',
        'mekanism:dust_sulfur',

        //Immersive Engineering
        'immersiveengineering:windmill',
        'immersiveengineering:watermill',

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

        //Iron Dust
        'bloodmagic:ironsand',
        'mekanism:dust_iron',
        'immersiveengineering:dust_iron',

        //Iron Plate
        'immersiveengineering:plate_iron',
        'create:iron_sheet',

        //Iron Rod
        'createaddition:iron_rod',

        //Gold Dust
        'bloodmagic:goldsand',
        'mekanism:dust_gold',
        'immersiveengineering:dust_gold',

        //Gold Plate
        'immersiveengineering:plate_gold',
        'create:golden_sheet',

        //Copper Ingot
        'iceandfire:copper_ingot',
        'mekanism:ingot_copper',
        'create:copper_ingot',
        'immersiveengineering:ingot_copper',
        'tconstruct:copper_ingot',

        //Copper Dust
        'immersiveengineering:dust_copper',
        'mekanism:dust_copper',

        //Copper Nugget
        'iceandfire:copper_nugget',
        'mekanism:nugget_copper',
        'create:copper_nugget',
        'immersiveengineering:nugget_copper',
        'tconstruct:copper_nugget',

        //Copper Plate
        'immersiveengineering:plate_copper',
        'create:copper_sheet',

        //Tin Ingot
        'mekanism:ingot_tin',

        //Tin Dust
        'mekanism:dust_tin',

        //Tin Nugget
        'mekanism:nugget_tin',

        //Lead Ingot
        'immersiveengineering:ingot_lead',
        'mekanism:ingot_lead',

        //Lead Dust
        'immersiveengineering:dust_lead',
        'mekanism:dust_lead',

        //Lead Nugget
        'immersiveengineering:nugget_lead',
        'mekanism:nugget_lead',

        //Lead Plate
        'immersiveengineering:plate_lead',

        //Silver Ingot
        'immersiveengineering:ingot_silver',
        'iceandfire:silver_ingot',

        //Silver Dust
        'immersiveengineering:dust_silver',

        //Silver Nugget
        'immersiveengineering:nugget_silver',
        'iceandfire:silver_nugget',

        //Silver Plate
        'immersiveengineering:plate_silver',

        //Nickel Ingot
        'immersiveengineering:ingot_nickel',

        //Nickel Dust
        'immersiveengineering:dust_nickel',

        //Nickel Nugget
        'immersiveengineering:nugget_nickel',

        //Nickel Plate
        'immersiveengineering:plate_nickel',

        //Uranium Ingot
        'immersiveengineering:ingot_uranium',

        //Uranium Nugget
        'immersiveengineering:nugget_uranium',

        //Uranium Dust
        'immersiveengineering:dust_uranium',

        //Steel Ingot
        'immersiveengineering:ingot_steel',

        //Steel Nugget
        'immersiveengineering:nugget_steel',

        //Steel Dust
        'immersiveengineering:dust_steel',

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
        'mekanism:nugget_bronze'
    ]);

})

onEvent('jei.hide.fluids', event => {

    event.hide([

        //Pneumaticcraft Liquids
        'pneumaticcraft:lubricant',
        'pneumaticcraft:oil',
        'pneumaticcraft:biodiesel',
        'pneumaticcraft:vegetable_oil',
        'pneumaticcraft:ethanol',

    ]);

})
