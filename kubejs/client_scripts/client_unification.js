//---------------------------------------------------------------------------------------------------------------------
//CLIENT UNIFICATION SCRIPT - Hide the disabled items in JEI.
//---------------------------------------------------------------------------------------------------------------------

onEvent('jei.hide.items', event => {

    event.hide([
        //CreateA Wires
        'createaddition:copper_spool',
        'createaddition:gold_spool',
        'createaddition:iron_spool',
        'createaddition:connector',

        //Multiservo Press
        'thermal:machine_press',
        
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

        //Copper Dust
        'immersiveengineering:dust_copper',
        'mekanism:dust_copper',

        //Copper Nugget
        'iceandfire:copper_nugget',
        'mekanism:nugget_copper',
        'create:copper_nugget',
        'immersiveengineering:nugget_copper',

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
