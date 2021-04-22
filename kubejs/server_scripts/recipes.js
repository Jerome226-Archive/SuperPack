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

    //Lubrified LPG
    event.custom({
      "type": "pneumaticcraft:fluid_mixer",
      "input1": {
        "type": "pneumaticcraft:fluid",
        "fluid": "pneumaticcraft:lpg",
        "amount": 25
      },
      "input2": {
        "type": "pneumaticcraft:fluid",
        "fluid": "immersivepetroleum:lubricant",
        "amount": 25
      },
      "fluid_output": {
        "fluid": "superpackutils:lubrified_lpg_fluid",
        "amount": 50
      },
      "pressure": 2.0,
      "time": 300
    })

    //Dimensional Plasma
    event.custom({
      "type": "astralsorcery:lightwell",
      "input": {
        "item": "superpackutils:dimensional_stone"
      },
      "output": "betterportals:portal_fluid_still",
      "productionMultiplier": 2.0,
      "shatterMultiplier": 30.0,
      "color": -11310593
    })

    //Dimensional Rock
    event.custom({
      "type": "botania:petal_apothecary",
      "output": {
        "item": "superpackutils:dimensional_stone"
      },
      "ingredients": [
        {
          "item": "minecraft:obsidian"
        },
        {
          "item": "superpackutils:dyingrock"
        },
        {
          "item": "botania:mana_pearl"
        },
        {
          "tag": "forge:ingots/manasteel"
        }
      ]
    })

    //Electrical Platinum Ingot
    event.recipes.immersiveengineering.arc_furnace([Item.of('superpackutils:electrical_platinum_ingot', 4)], 'superpackutils:platinum_ingot', [Item.of('thermal:silver_dust', 2), 'thermal:electrum_dust'], 'thermal:slag')

    //Dyingrock
    event.remove({id: 'botania:pure_daisy/livingrock'})
    event.custom({
      "type": "botania:pure_daisy",
      "input": {
        "type": "block",
        "block": "astralsorcery:black_marble_raw"
      },
      "output": {
        "name": "superpackutils:dyingrock"
      }
    })

    //Compressed Steel Ingot
    event.custom({"type":"immersiveengineering:squeezer","result":{"item":"superpackutils:compressed_steel_ingot"},"input":{"count":1,"base_ingredient":{"tag":"forge:ingots/steel"}},"energy":19200})
    
    //-----------------------------------------------------
    //Create
    //-----------------------------------------------------

    //Create Andesite Casing
    event.remove({output: 'create:andesite_casing'})
    event.shaped(Item.of('create:andesite_casing', 2), ['ATA', 'TWT', 'ATA'], {
        A: 'create:andesite_alloy',
        W: '#minecraft:logs',
        T: '#forge:treated_wood'
    }),

    //Create Andesite Alloy
    event.remove({output: 'create:andesite_alloy'})
    event.shaped('create:andesite_alloy', ['NA', 'AN'], {
        N: '#forge:nuggets/zinc',
        A: 'minecraft:andesite'
    }),

    event.recipes.create.mixing('create:andesite_alloy', [
        '#forge:nuggets/zinc',
        'minecraft:andesite'
    ])
    
    //Create Copper Casing
    event.remove({output: 'create:copper_casing'})
    event.shaped(Item.of('create:copper_casing', 2), ['CTC', 'TWT', 'CTC'], {
        C: '#forge:plates/copper',
        W: '#minecraft:logs',
        T: '#forge:treated_wood'
    }),

    //Create Brass Casing
    event.remove({output: 'create:brass_casing'})
    event.shaped(Item.of('create:brass_casing', 2), ['BTB', 'TWT', 'BTB'], {
        B: '#forge:plates/brass',
        W: '#minecraft:logs',
        T: '#forge:treated_wood'
    }),

    //Create Cogwheel
    event.remove({output: 'create:cogwheel'})
    event.shaped(Item.of('create:cogwheel', 6), ['STS', 'TAT', 'STS'], {
        A: 'create:andesite_alloy',
        T: '#forge:treated_wood',
        S: 'immersiveengineering:stick_treated'
    }),

    //Create Large Cogwheel
    event.remove({output: 'create:large_cogwheel'})
    event.shaped(Item.of('create:large_cogwheel', 3), ['WTW', 'TCT', 'WTW'], {
        C: 'create:andesite_alloy',
        T: '#forge:treated_wood',
        W: '#minecraft:logs'
    }),

    //Create Mechanical Drill
    event.remove({output: 'create:mechanical_drill'})
    event.shaped('create:mechanical_drill', [' A ', 'WCW', ' E '], {
        C: 'create:andesite_casing',
        W: 'create:cogwheel',
        A: 'create:andesite_alloy',
        E: 'thermal:drill_head'
    }),

    //Thermal Drill Head
    event.remove({output: 'thermal:drill_head'})
    event.shaped('thermal:drill_head', [' P ', 'PIP', 'PAP'], {
        P: '#forge:plates/iron',
        I: '#forge:ingots/iron',
        A: 'create:andesite_alloy'
    }),

    //Create Mechanical Saw
    event.remove({output: 'create:mechanical_saw'})
    event.shaped('create:mechanical_saw', [' A ', 'WCW', ' E '], {
        C: 'create:andesite_casing',
        W: 'create:cogwheel',
        A: 'create:andesite_alloy',
        E: 'thermal:saw_blade'
    }),

    //Thermal Saw Blade
    event.remove({output: 'thermal:saw_blade'})
    event.shaped('thermal:saw_blade', ['PIP', 'IAI', 'PIP'], {
        P: '#forge:plates/iron',
        I: '#forge:ingots/iron',
        A: 'create:andesite_alloy'
    }),

    //Create Mechanical Plough
    event.remove({output: 'create:mechanical_plough'})
    event.shaped('create:mechanical_plough', [' A ', 'WCW', ' E '], {
        C: 'create:andesite_casing',
        W: 'create:cogwheel',
        A: 'create:andesite_alloy',
        E: 'superpackutils:plough'
    }),

    //Superpack Plough
    event.remove({output: 'superpackutils:plough'})
    event.shaped('superpackutils:plough', ['PPP', 'AAA', 'III'], {
        P: '#forge:plates/iron',
        I: 'immersiveengineering:stick_iron',
        A: 'create:andesite_alloy'
    }),

    //Create Mechanical Harvester
    event.remove({output: 'create:mechanical_harvester'})
    event.shaped('create:mechanical_harvester', [' A ', 'WCW', ' E '], {
        C: 'create:andesite_casing',
        W: 'create:cogwheel',
        A: 'create:andesite_alloy',
        E: 'superpackutils:harvesting_wheel'
    }),

    //Superpack Harvesting Wheel
    event.remove({output: 'superpackutils:harvesting_wheel'})
    event.shaped('superpackutils:harvesting_wheel', ['APA', 'APA', 'III'], {
        P: '#forge:plates/iron',
        I: '#forge:ingots/iron',
        A: 'create:andesite_alloy'
    }),
    
    //Create Depot
    event.remove({output: 'create:depot'})
    event.shaped('create:depot', ['AWA'], {
        A: 'create:andesite_alloy',
        W: 'create:andesite_casing'
    }),

    //Create Basin
    event.remove({output: 'create:basin'})
    event.shaped('create:basin', ['A A', 'AAA', ' C '], {
        A: 'create:andesite_alloy',
        C: 'create:andesite_casing'
    }),

    //Create Integrated Circuit
    event.remove({output: 'create:integrated_circuit'})
    event.recipes.create.mechanical_crafting('create:integrated_circuit', [
        '  L  ',
        'ZCECZ',
        ' BBB '
    ], {
        L: '#forge:plates/lapis_lazuli',
        B: '#forge:plates/brass',
        C: 'immersiveengineering:circuit_board',
        Z: '#pneumaticcraft:plastic_sheets', //Need to replace with custom Bio Plastic
        E: 'create:electron_tube'
    }),

    //Create Electron Tube
    event.remove({output: 'create:electron_tube'})
    event.custom({"type":"immersiveengineering:blueprint","inputs":[{"count":1,"base_ingredient":{"item":"immersiveengineering:wire_electrum"}},{"count":1,"base_ingredient":{"item":"create:polished_rose_quartz"}},{"count":1,"base_ingredient":{"item":"minecraft:redstone"}},{"count":1,"base_ingredient":{"item":"mekanism:ingot_steel"}}],"category":"components","result":{"item":"create:electron_tube","count":1}}),
    
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
    }),

    //-----------------------------------------------------
    //Immersive Engineering
    //-----------------------------------------------------

    //IE Coke Brick
    event.remove({output: 'immersiveengineering:cokebrick'})
    event.shaped(Item.of('immersiveengineering:cokebrick', 3), ['ATA', 'TWT', 'ATA'], {
        A: 'tconstruct:seared_brick',
        W: '#forge:storage_blocks/clay',
        T: '#forge:ingots/brick'
    }),

    //IE Blast Brick
    event.remove({output: 'immersiveengineering:blastbrick'})
    event.shaped(Item.of('immersiveengineering:blastbrick', 3), ['ATA', 'TWT', 'ATA'], {
        A: '#forge:ingots/nether_brick',
        W: 'minecraft:blaze_powder',
        T: '#forge:ingots/brick'
    }),

    //IE Light Engineering Block
    event.remove({output: 'immersiveengineering:light_engineering'})
    event.shaped(Item.of('immersiveengineering:light_engineering', 4), ['SCS', 'IBI', 'SCS'], {
        S: '#forge:sheetmetals/aluminum',
        C: 'immersiveengineering:component_iron',
        B: '#forge:storage_blocks/nickel',
        I: '#forge:ingots/electrum'
    }),

    //IE Heavy Engineering Block
    event.remove({output: 'immersiveengineering:heavy_engineering'})
    event.recipes.create.mechanical_crafting(Item.of('immersiveengineering:heavy_engineering', 2), ['SCS', 'IBI', 'SCS'], {
        S: '#forge:sheetmetals/steel',
        C: 'immersiveengineering:component_steel',
        B: '#forge:storage_blocks/brass',
        I: '#forge:ingots/platinum'
    }),

    //IE Redstone Engineering Block
    event.remove({output: 'immersiveengineering:rs_engineering'})
    event.shaped(Item.of('immersiveengineering:rs_engineering', 2), ['SCS', 'IBI', 'SCS'], {
        S: '#forge:sheetmetals/constantan',
        C: 'immersiveengineering:circuit_board',
        B: '#forge:storage_blocks/tin',
        I: '#forge:ingots/constantan'
    }),

    //IE Cloche
    event.remove({output: 'immersiveengineering:cloche'})
    event.recipes.create.mechanical_crafting('immersiveengineering:cloche', [
        ' C ',
        'CSC',
        'C C',
        'ZMZ',
        'ZYZ'
    ], {
        S: 'immersiveengineering:electron_tube',
        C: '#forge:glass/colorless',
        Y: 'immersiveengineering:component_steel',
        Z: '#forge:treated_wood',
        M: 'create:integrated_circuit'
    }),

    //LV Wire
    event.remove({output: 'immersiveengineering:wirecoil_copper'})
    event.shaped(Item.of('immersiveengineering:wirecoil_copper', 4), [' I ', 'ICI', ' I '], {
        C: 'createaddition:spool',
        I: '#forge:wires/copper'
    }),
    
    //MV Wire
    event.remove({output: 'immersiveengineering:wirecoil_electrum'})
    event.shaped(Item.of('immersiveengineering:wirecoil_electrum', 4), [' I ', 'ICI', ' I '], {
        C: 'createaddition:spool',
        I: '#forge:wires/electrum'
    }),

    //HV Wire
    event.remove({output: 'immersiveengineering:wirecoil_steel'})
    event.shaped(Item.of('immersiveengineering:wirecoil_steel', 4), [' I ', 'JCJ', ' I '], {
        C: 'createaddition:spool',
        J: '#forge:wires/aluminum',
        I: '#forge:wires/steel'
    }),

    //Redstone Wire
    event.remove({output: 'immersiveengineering:wirecoil_redstone'})
    event.shaped(Item.of('immersiveengineering:wirecoil_redstone', 4), [' I ', 'JCJ', ' I '], {
        C: 'createaddition:spool',
        J: '#forge:wires/aluminum',
        I: 'minecraft:redstone'
    }),

    //IE Redstone Engineering Block
    event.remove({output: 'immersiveengineering:rs_engineering'})
    event.shaped(Item.of('immersiveengineering:rs_engineering', 2), ['SCS', 'IBI', 'SCS'], {
        S: '#forge:sheetmetals/constantan',
        C: 'immersiveengineering:circuit_board',
        B: '#forge:storage_blocks/tin',
        I: '#forge:ingots/constantan'
    }),

    //Fluid Pipe
    event.remove({output: 'immersiveengineering:fluid_pipe'})
    event.shaped(Item.of('immersiveengineering:fluid_pipe', 8), ['CPC'], {
        P: '#forge:ingots/iron',
        C: '#forge:plates/iron'
    }),

    //IE Steel Block
    event.remove({output: 'immersiveengineering:storage_steel'})
    event.shaped(Item.of('immersiveengineering:storage_steel', 3), ['CSC', 'SBS', 'CSC'], {
        C: 'immersiveengineering:component_steel',
        S: 'immersiveengineering:sheetmetal_steel',
        B: 'mekanism:block_steel'
    }),

    //-----------------------------------------------------
    //Early Mekanism
    //-----------------------------------------------------

    //Mekanism Energy Tablet
    event.remove({output: 'mekanism:energy_tablet'})
    event.shaped('mekanism:energy_tablet', [' P ', 'CEC', 'ZOZ'], {
        O: 'mekanism:ingot_osmium',
        Z: 'createaddition:zinc_sheet',
        E: 'superpackutils:electrical_platinum_ingot',
        C: 'superpackutils:compressed_steel_ingot',
        P: '#forge:plates/iron'
    }),

    //Teleportation Core
    event.remove({output: 'mekanism:teleportation_core'})
    event.shaped('mekanism:teleportation_core', ['BAB', 'AIA', 'BAB'], {
        I: 'rftoolsbase:infused_enderpearl',
        A: '#mekanism:alloys/atomic',
        B: 'youmatter:black_hole'
    }),

    //Mekanism Steel Casing
    event.remove({output: 'mekanism:steel_casing'})
    event.shaped('mekanism:steel_casing', ['SCS', 'IBI', 'SCS'], {
        S: '#forge:sheetmetals/steel',
        C: 'superpackutils:electrical_platinum_ingot',
        B: 'tconstruct:slimesteel_ingot',
        I: 'superpackutils:bio_plastic'
    }),

    //Metallurgic Infuser
    event.remove({output: 'mekanism:metallurgic_infuser'})
    event.shaped('mekanism:metallurgic_infuser', ['SCS', 'IBI', 'SCS'], {
        S: '#forge:sheetmetals/steel',
        C: 'create:furnace_engine',
        B: 'create:brass_casing',
        I: 'createaddition:capacitor'
    }),

    //Enrichment Chamber
    event.remove({output: 'mekanism:enrichment_chamber'})
    event.shaped('mekanism:enrichment_chamber', ['SCS', 'IBI', 'SCS'], {
        S: '#forge:plates/constantan',
        C: 'create:crushing_wheel',
        B: 'mekanism:steel_casing',
        I: '#forge:circuits/basic'
    }),

    //Energized Smelter
    event.remove({output: 'mekanism:energized_smelter'})
    event.shaped('mekanism:energized_smelter', ['SCS', 'IBI', 'SCS'], {
        S: '#forge:plates/iron',
        C: 'minecraft:furnace',
        B: 'mekanism:steel_casing',
        I: '#forge:circuits/basic'
    }),

    //Chemical Oxidizer
    event.remove({output: 'mekanism:chemical_oxidizer'})
    event.shaped('mekanism:chemical_oxidizer', ['SCS', 'IBI', 'SJS'], {
        S: '#forge:plates/invar',
        C: 'tconstruct:melter',
        J: 'mekanism:basic_chemical_tank',
        B: 'mekanism:steel_casing',
        I: '#forge:circuits/basic'
    }),

    //Rotary Condensentrator
    event.remove({output: 'mekanism:rotary_condensentrator'})
    event.shaped('mekanism:rotary_condensentrator', ['SCS', 'IBI', 'SJS'], {
        S: '#forge:plates/invar',
        C: 'mekanism:basic_fluid_tank',
        J: 'mekanism:basic_chemical_tank',
        B: 'mekanism:steel_casing',
        I: '#forge:circuits/basic'
    }),

    //Crusher
    event.remove({output: 'mekanism:crusher'})
    event.shaped('mekanism:crusher', ['SCS', 'IBI', 'SCS'], {
        S: '#forge:plates/electrum',
        C: 'create:millstone',
        B: 'mekanism:steel_casing',
        I: '#forge:circuits/basic'
    }),

    //Nutritional Liquifer
    event.remove({output: 'mekanism:nutritional_liquifier'})
    event.shaped('mekanism:nutritional_liquifier', ['SCS', 'IBI', 'SCS'], {
        S: '#forge:plates/bronze',
        C: '#forge:bowls',
        B: 'mekanism:steel_casing',
        I: '#forge:circuits/basic'
    }),

    //Combiner
    event.remove({output: 'mekanism:combiner'})
    event.shaped('mekanism:combiner', ['GCG', 'IBI', 'SKS'], {
        S: '#forge:plates/steel',
        C: 'create:mechanical_press',
        K: 'create:mechanical_mixer',
        B: 'mekanism:steel_casing',
        I: '#forge:circuits/basic',
        G: Item.of('tconstruct:large_plate', {Material:"tconstruct:steel"})
    }),

    //Pressurized Reaction Chamber
    event.remove({output: 'mekanism:pressurized_reaction_chamber'})
    event.shaped('mekanism:pressurized_reaction_chamber', ['GCG', 'IBI', 'SKS'], {
        S: 'pneumaticcraft:ingot_iron_compressed',
        C: 'create:mechanical_press',
        K: 'mekanism:dynamic_tank',
        B: 'mekanism:combiner',
        I: '#forge:circuits/advanced',
        G: 'pneumaticcraft:compressed_iron_gear'
    }),

    //Seismic Vibrator
    event.remove({output: 'mekanism:seismic_vibrator'})
    event.shaped('mekanism:seismic_vibrator', ['SCS', 'IBI', 'SKS'], {
        S: '#forge:ingots/osmium',
        C: 'immersiveengineering:sample_drill',
        K: 'thermal:drill_head',
        B: 'mekanism:steel_casing',
        I: '#forge:circuits/basic'
    }),

    //Charge Pad
    event.remove({output: 'mekanism:chargepad'})
    event.shaped('mekanism:chargepad', ['PCP', 'SES'], {
        P: 'minecraft:polished_blackstone_pressure_plate',
        C: 'immersiveengineering:charging_station',
        S: '#forge:ingots/steel',
        E: 'mekanism:energy_tablet'
    }),

    //Electric Pump
    event.remove({output: 'mekanism:electric_pump'})
    event.shaped('mekanism:electric_pump', ['SCS', 'IBI', 'SJS'], {
        S: '#forge:ingots/osmium',
        C: 'immersiveengineering:fluid_pump',
        J: 'create:mechanical_pump',
        B: 'mekanism:steel_casing',
        I: '#mekanism:alloys/infused',
    }),

    //Osmium Compressor
    event.remove({output: 'mekanism:osmium_compressor'})
    event.shaped('mekanism:osmium_compressor', ['GCG', 'IBI', 'SJS'], {
        S: '#forge:plates/bronze',
        C: 'create:mechanical_press',
        J: 'mekanism:clump_osmium',
        B: 'mekanism:steel_casing',
        I: '#forge:circuits/advanced',
        G: '#forge:gears/bronze'
    }),

    //Electrolytic Separator
    event.remove({output: 'mekanism:electrolytic_separator'})
    event.shaped('mekanism:electrolytic_separator', ['GCG', 'IBI', 'SCS'], {
        S: '#forge:plates/constantan',
        C: 'mekanism:electrolytic_core',
        B: 'mekanism:steel_casing',
        I: '#forge:circuits/advanced',
        G: '#forge:gears/constantan'
    }),

    //Purification Chamber
    event.remove({output: 'mekanism:purification_chamber'})
    event.shaped('mekanism:purification_chamber', ['GCG', 'IBI', 'SCS'], {
        S: '#forge:plates/electrum',
        C: 'create:encased_fan',
        B: 'mekanism:enrichment_chamber',
        I: '#forge:circuits/advanced',
        G: '#forge:gears/electrum'
    }),

    //Resistive Heater
    event.remove({output: 'mekanism:resistive_heater'})
    event.shaped('mekanism:resistive_heater', ['GCG', 'IBI', 'SCS'], {
        S: '#forge:plates/invar',
        C: 'immersiveengineering:blastfurnace_preheater',
        B: 'mekanism:fuelwood_heater',
        I: '#forge:circuits/advanced',
        G: '#forge:sheetmetals/aluminum'
    }),

    //Precision Sawmill
    event.remove({output: 'mekanism:precision_sawmill'})
    event.shaped('mekanism:precision_sawmill', ['SCS', 'IBI', 'SCS'], {
        S: '#forge:plates/invar',
        C: 'create:mechanical_saw',
        B: 'mekanism:steel_casing',
        I: '#forge:circuits/basic'
    }),

    //Fuelwood Heater
    event.remove({output: 'mekanism:fuelwood_heater'})
    event.shaped('mekanism:fuelwood_heater', ['SCS', 'IBI', 'SCS'], {
        S: '#forge:plates/steel',
        C: 'minecraft:furnace',
        B: 'mekanism:steel_casing',
        I: '#forge:circuits/basic'
    }),

    //Sheets
    event.remove({id: 'mekanism:reaction/substrate/ethene_oxygen'})
    event.custom({"type":"mekanism:reaction","itemInput":{"ingredient":{"item":"pneumaticcraft:plastic"}},"fluidInput":{"amount":50,"tag":"forge:ethene"},"gasInput":{"amount":10,"gas":"mekanism:oxygen"},"energyRequired":1000,"duration":60,"itemOutput":{"item":"mekanism:hdpe_pellet"},"gasOutput":{"gas":"mekanism:oxygen","amount":5}})

    //Advanced Circuit
    event.remove({output: 'mekanism:advanced_control_circuit'})
    event.remove({type: 'mekanism:combining'})
    event.recipes.mekanism.combining('mekanism:advanced_control_circuit', '#forge:circuits/basic', Item.of('mekanism:alloy_infused', 4))

    //-----------------------------------------------------
    //Pneumaticcraft
    //-----------------------------------------------------

    //Delete Gas conversion
    event.remove({id: 'pneumaticcraft:thermo_plant/lubricant_from_biodiesel'})
    event.remove({id: 'pneumaticcraft:thermo_plant/lubricant_from_diesel'})
    event.remove({id: 'pneumaticcraft:thermo_plant/lpg'})
    event.remove({id: 'pneumaticcraft:thermo_plant/kerosene'})
    event.remove({id: 'pneumaticcraft:thermo_plant/gasoline'})

    //Refinery
    event.remove({id: 'pneumaticcraft:refinery/oil_2'})
    event.remove({id: 'pneumaticcraft:refinery/oil_3'})
    event.remove({id: 'pneumaticcraft:refinery/oil_4'})
    event.custom({
      "type": "pneumaticcraft:refinery",
      "input": {
        "type": "pneumaticcraft:fluid",
        "tag": "forge:crude_oil",
        "amount": 10
      },
      "temperature": {
        "min_temp": 373
      },
      "results": [
        {
          "fluid": "pneumaticcraft:kerosene",
          "amount": 4
        },
        {
          "fluid": "pneumaticcraft:lpg",
          "amount": 2
        }
      ]
    })

    //Plastic
    event.remove({id: 'pneumaticcraft:thermo_plant/plastic_from_biodiesel'})
    event.remove({id: 'pneumaticcraft:thermo_plant/plastic_from_lpg'})
    event.custom({
      "type": "pneumaticcraft:thermo_plant",
      "item_input": {
        "item": "thermal:cured_rubber"
      },
      "fluid_input": {
        "type": "pneumaticcraft:fluid",
        "fluid": "superpackutils:lubrified_lpg_fluid",
        "amount": 100
      },
      "fluid_output": {
        "fluid": "pneumaticcraft:plastic",
        "amount": 1000
      },
      "temperature": {
        "min_temp": 373
      },
      "exothermic": false
    })

    event.remove({id: 'pneumaticcraft:heat_frame_cooling/plastic'})

    //-----------------------------------------------------
    //Botania
    //-----------------------------------------------------

    //Petal Apocatery
    event.remove({output: 'botania:apothecary_default'})
    event.custom({
      "type": "astralsorcery:altar",
      "altar_type": 0,
      "duration": 40,
      "starlight": 100,
      "pattern": [
        "_____",
        "_CBC_",
        "__A__",
        "_AAA_",
        "_____"
      ],
      "key": {
        "A": {
          "item": "minecraft:cobblestone"
        },
        "C": {
          "item": "minecraft:cobblestone_slab"
        },
        "B": {
          "type": "astralsorcery:crystal",
          "hasToBeAttuned": false,
          "hasToBeCelestial": false,
          "canBeAttuned": true,
          "canBeCelestialCrystal": true
        },
      },
      "output": [
        {
          "item": "botania:apothecary_default",
          "count": 1
        }
      ],
      "effects": [
        "astralsorcery:built_in_effect_discovery_central_beam"
      ]
    })

    //Runic Altar
    event.remove({output: 'botania:runic_altar'})
    event.custom({
      "type": "astralsorcery:altar",
      "altar_type": 0,
      "duration": 40,
      "starlight": 100,
      "pattern": [
        "_____",
        "_____",
        "_BAB_",
        "_BCB_",
        "_____"
      ],
      "key": {
        "A": {
          "item": "botania:mana_diamond"
        },
        "C": {
          "type": "astralsorcery:crystal",
          "hasToBeAttuned": false,
          "hasToBeCelestial": false,
          "canBeAttuned": true,
          "canBeCelestialCrystal": true
        },
        "B": {
          "item": "botania:livingrock"
        }
      },
      "output": [
        {
          "item": "botania:runic_altar",
          "count": 1
        }
      ],
      "effects": [
        "astralsorcery:built_in_effect_discovery_central_beam"
      ]
    })

    //Glimmering Livingwood
    event.remove({output: 'botania:glimmering_livingwood'})
    event.shaped('botania:glimmering_livingwood', ['FIF', 'ILI', 'FIF'], {
        F: 'botania:fertilizer',
        I: 'astralsorcery:illumination_powder',
        L: '#botania:livingwood'
    }),

    //Mana Lens
    event.remove({output: 'botania:lens_normal'})
    event.shaped('botania:lens_normal', [' F ', 'FIF', ' F '], {
        F: 'botania:manasteel_ingot',
        I: 'astralsorcery:glass_lens'
    }),

    //Mana Spreader
    event.remove({output: 'botania:mana_spreader'})
    event.shaped('botania:mana_spreader', ['LGL', 'LCP', 'LGL'], {
        P: '#botania:petals',
        C: 'astralsorcery:rock_crystal',
        G: 'botania:glimmering_livingwood',
        L: '#botania:livingwood'
    }),

    //Livingwood
    event.remove({id: 'botania:pure_daisy/livingwood'})
    event.custom({
      "type": "botania:pure_daisy",
      "input": {
        "type": "block",
        "block": "astralsorcery:infused_wood"
      },
      "output": {
        "name": "botania:livingwood"
      }
    }),

    //Livingrock
    event.remove({id: 'botania:pure_daisy/livingrock'})
    event.custom({
      "type": "botania:pure_daisy",
      "input": {
        "type": "block",
        "block": "astralsorcery:marble_raw"
      },
      "output": {
        "name": "botania:livingrock"
      }
    })

    //Rune of Air
    event.remove({id: 'botania:runic_altar/air'})
    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "botania:rune_air",
          "count": 2
        },
        "mana": 5200,
        "ingredients": [
          {
            "tag": "forge:dusts/mana"
          },
          {
            "tag": "forge:ingots/manasteel"
          },
          {
            "item": "create:sail_frame"
          },
          {
            "item": "immersiveengineering:windmill_blade"
          },
          {
            "item": "minecraft:string"
          },
          {
            "item": "minecraft:feather"
          },
          {
            "item": "tconstruct:sky_slime_crystal"
          }
        ]
      }),

      //Rune of Fire
      event.remove({id: 'botania:runic_altar/fire'})
      event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "botania:rune_fire",
          "count": 2
        },
        "mana": 5200,
        "ingredients": [
          {
            "tag": "forge:dusts/mana"
          },
          {
            "tag": "forge:ingots/manasteel"
          },
          {
            "item": "create:cinder_flour"
          },
          {
            "item": "tconstruct:ichor_slime_crystal"
          },
          {
            "item": "minecraft:nether_brick"
          },
          {
            "item": "minecraft:nether_wart"
          },
          {
            "item": "minecraft:quartz"
          }
        ]
      }),

      //Rune of Water
      event.remove({id: 'botania:runic_altar/water'})
      event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "botania:rune_water",
          "count": 2
        },
        "mana": 5200,
        "ingredients": [
          {
            "tag": "forge:dusts/mana"
          },
          {
            "tag": "forge:ingots/manasteel"
          },
          {
            "item": "minecraft:sugar_cane"
          },
          {
            "item": "tconstruct:ender_slime_crystal"
          },
          {
            "item": "minecraft:fishing_rod"
          },
          {
            "item": "immersiveengineering:waterwheel_segment"
          },
          {
            "item": "minecraft:kelp"
          }
        ]
      }),

      //Rune of Earth
      event.remove({id: 'botania:runic_altar/earth'})
      event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "botania:rune_earth",
          "count": 2
        },
        "mana": 5200,
        "ingredients": [
          {
            "tag": "forge:dusts/mana"
          },
          {
            "tag": "forge:ingots/manasteel"
          },
          {
            "item": "create:wheat_flour"
          },
          {
            "item": "tconstruct:earth_slime_crystal"
          },
          {
            "tag": "minecraft:saplings"
          },
          {
            "tag": "forge:stone"
          },
          {
            "item": "create:tree_fertilizer"
          }
        ]
      }),

    //-----------------------------------------------------
    //Astral Sorcery
    //-----------------------------------------------------

    //Luminous Crafting Table Compat
    event.custom({
      "type": "astralsorcery:block_transmutation",
      "input": [
        {
          "block": "tconstruct:crafting_station",
          "display": {
            "item": "tconstruct:crafting_station",
            "count": 1
          }
        }
      ],
      "output": {
        "block": "astralsorcery:altar_discovery"
      },
      "display": {
        "item": "astralsorcery:altar_discovery",
        "count": 1
      },
      "starlight": 60
    })

    //Starlight Crafting
    event.remove({id: 'astralsorcery:altar/altar_attunement'})
    event.custom({
      "type": "astralsorcery:altar",
      "altar_type": 0,
      "duration": 100,
      "starlight": 700,
      "pattern": [
        "_____",
        "_LAL_",
        "_RBR",
        "_LDL_",
        "_____"
      ],
      "key": {
        "A": {
          "item": "astralsorcery:aquamarine"
        },
        "B": {
          "type": "astralsorcery:crystal",
          "hasToBeAttuned": false,
          "hasToBeCelestial": false,
          "canBeAttuned": true,
          "canBeCelestialCrystal": true
        },
        "R": {
          "item": "botania:livingrock"
        },
        "L": {
          "item": "botania:livingwood"
        },
        "D": {
          "type": "astralsorcery:fluid",
          "fluid": [
            {
              "fluid": "astralsorcery:liquid_starlight",
              "amount": 1000
            }
          ]
        }
      },
      "recipe_class": "astralsorcery:attunement_upgrade",
      "output": [
        {
          "item": "astralsorcery:altar_attunement",
          "count": 1
        }
      ],
      "effects": [
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:upgrade_altar"
      ]
    })

    //-----------------------------------------------------
    //PneumaticCraft
    //-----------------------------------------------------

    //Compressed Ingot Early
    event.remove({id: 'pneumaticcraft:explosion_crafting/compressed_iron_ingot'})
    event.remove({id: 'pneumaticcraft:explosion_crafting/compressed_iron_block'})
    event.custom({"type":"mekanism:compressing","itemInput":{"ingredient":{"item":"minecraft:iron_block"}},"gasInput":{"amount":1,"gas":"mekanism:liquid_osmium"},"output":{"item":"pneumaticcraft:ingot_iron_compressed","count":5}})
    
    //-----------------------------------------------------
    //Early Thermal
    //-----------------------------------------------------

    //Cured Rubber
    event.remove({id: 'thermal:smelting/cured_rubber_from_smelting'})
    event.remove({id: 'thermal:machine/smelter/smelter_cured_rubber'})
    event.custom({"type":"mekanism:purifying","itemInput":{"ingredient":{"item":"thermal:rubber"}},"gasInput":{"amount":1,"gas":"mekanism:oxygen"},"output":{"item":"thermal:cured_rubber"}})

    //Thermal Arboreal Extractor
    event.remove({output: 'thermal:device_tree_extractor'})
    event.shaped('thermal:device_tree_extractor', ['TDT', 'BCB', 'TST'], {
        T: '#forge:treated_wood',
        C: 'create:andesite_casing',
        B: 'minecraft:bucket',
        D: 'minecraft:dispenser', //Will probably be replaced with custom treetap later
        S: 'thermal:iron_plate'
    }),

    //Thermal Aqueous Accumulator
    event.remove({output: 'thermal:device_water_gen'})
    event.shaped('thermal:device_water_gen', ['TDT', 'BCB', 'TST'], {
        T: '#forge:sheetmetals/lead',
        C: 'create:copper_casing',
        B: '#forge:ingots/copper',
        D: '#create:valve_handles', 
        S: 'create:hose_pulley'
    }),

    //Thermal Hive Hopper
    event.remove({output: 'thermal:device_hive_extractor'})
    event.shaped('thermal:device_hive_extractor', ['TNT', 'RCD', 'TST'], {
        T: '#forge:treated_wood',
        C: 'create:andesite_casing',
        R: 'minecraft:shears',
        N: '#forge:plates/nickel',
        D: 'minecraft:dispenser',
        S: 'thermal:iron_plate'
    }),

    //Thermal Nullifier
    event.remove({output: 'thermal:device_nullifier'})
    event.shaped('thermal:device_nullifier', ['LBL', 'PCP', 'AOA'], {
        C: 'create:andesite_casing',
        A: '#forge:sheetmetals/aluminum',
        L: '#forge:sheetmetals/lead',
        P: '#forge:plates/aluminum',
        B: 'minecraft:lava_bucket',
        O: '#forge:obsidian'
    }),

    //Thermal Igneous Extruder
    event.remove({output: 'thermal:device_rock_gen'})
    event.shaped('thermal:device_rock_gen', ['LBL', 'PCP', 'AOA'], {
        C: 'create:andesite_casing',
        A: '#forge:sheetmetals/aluminum',
        L: '#forge:sheetmetals/lead',
        P: '#forge:plates/invar',
        B: '#forge:tools/pickaxes',
        O: 'thermal:drill_head'
    }),

    //Thermal Vacuumulator
    event.remove({output: 'thermal:device_collector'})
    event.shaped('thermal:device_collector', ['LBL', 'PCP', 'AOA'], {
        C: 'create:andesite_casing',
        A: '#forge:sheetmetals/aluminum',
        L: '#forge:sheetmetals/lead',
        P: '#forge:plates/lead',
        B: 'minecraft:hopper',
        O: 'botania:mana_pearl'
    })

});