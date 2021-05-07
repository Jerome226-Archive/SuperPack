//priority: 1500

events.listen('recipes', function (event) { 

    //-----------------------------------------------------
    //Early Mekanism
    //-----------------------------------------------------

    //Osmium Processing
    event.remove({id: 'mekanism:processing/osmium/clump/from_ore'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/osmium/ore'})
    event.remove({id: 'immersiveengineering:arcfurnace/ore_osmium'})

    //Uranium Processing
    event.remove({id: 'tconstruct:smeltery/melting/metal/uranium/ore'})
    event.remove({id: 'immersiveengineering:arcfurnace/ore_uranium'})

    //Sulfur Replace Output
    event.replaceOutput({}, 'mekanism:dust_sulfur', 'thermal:sulfur_dust')

    //Uranium Smelting Induction Smelter
    event.custom({
        "type": "thermal:smelter",
        "ingredient": {
          "tag": "forge:ores/uranium"
        },
        "result": [
          {
            "item": "mekanism:ingot_uranium",
            "chance": 1.0
          },
          {
            "item": "thermal:rich_slag",
            "chance": 0.2
          }
        ],
        "experience": 0.2,
        "conditions": [
          {
            "type": "forge:mod_loaded",
            "modid": "mekanism"
          }
        ]
    })

    //Refined Obsidian
    event.remove({id: 'mekanism:processing/refined_obsidian/ingot/from_dust'})
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
          {
            "item": "create:shadow_steel"
          },
          {
            "item": "mekanism:dust_refined_obsidian"
          },
        ],
        "pressure": -0.75,
        "results": [
          {
            "item": "mekanism:ingot_refined_obsidian"
          }
        ]
    })

    //Refined Glowstone
    event.remove({id: 'mekanism:processing/refined_glowstone/ingot/from_dust'})
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
          {
            "item": "create:refined_radiance"
          },
          {
            "item": "minecraft:glowstone_dust"
          },
        ],
        "pressure": -0.75,
        "results": [
          {
            "item": "mekanism:ingot_refined_glowstone"
          }
        ]
    })

    //Mekanism Energy Tablet
    event.remove({output: 'mekanism:energy_tablet'})
    event.shaped('mekanism:energy_tablet', [' P ', 'CEC', 'ZOZ'], {
        O: 'createaddition:capacitor',
        Z: 'createaddition:zinc_sheet',
        E: 'superpackutils:electrical_platinum_ingot',
        C: 'superpackutils:compressed_steel_ingot',
        P: '#forge:plates/iron'
    }),

    //Mekanism Steel Casing
    event.remove({output: 'mekanism:steel_casing'})
    event.recipes.create.mechanical_crafting(Item.of('mekanism:steel_casing', 2), [
        'CPSPC',
        'PEGEP',
        'SBHBS',
        'PEGEP',
        'CPSPC'
      ], {
        C: 'youmatter:machine_casing',
        P: '#forge:plates/steel',
        S: '#immersiveengineering:scaffoldings/steel',
        E: 'superpackutils:electrical_platinum_ingot',
        G: 'superpackutils:sturdy_capacitor',
        H: 'immersiveengineering:heavy_engineering',
        B: 'superpackutils:bio_plastic'
    })

    //Thermal Evaporation Tower
    event.remove({output: 'mekanism:thermal_evaporation_controller'})
    event.recipes.create.mechanical_crafting('mekanism:thermal_evaporation_controller', [
        'CPPPC',
        'PSESP',
        'PGHGP',
        'PSESP',
        'CPPPC'
      ], {
        C: '#forge:plates/bronze',
        P: 'mekanism:thermal_evaporation_block',
        S: 'superpackutils:superheated_bronze_ingot',
        E: 'create:integrated_circuit',
        G: '#forge:circuits/advanced',
        H: 'mekanism:steel_casing'
    })

    //Thermal Evaporation Casing
    event.remove({output: 'mekanism:thermal_evaporation_block'})
    event.shaped(Item.of('mekanism:thermal_evaporation_block', 4), ['BCB', 'CIC', 'BCB'], {
        C: 'superpackutils:tin_brass_ingot',
        B: '#forge:sheetmetals/copper',
        I: 'superpackutils:bio_plastic'
    }),

    //Metallurgic Infuser
    event.remove({output: 'mekanism:metallurgic_infuser'})
    event.shaped('mekanism:metallurgic_infuser', ['SCS', 'IBI', 'SCS'], {
        S: '#forge:sheetmetals/steel',
        C: 'create:furnace_engine',
        B: 'immersiveengineering:heavy_engineering',
        I: 'superpackutils:reinforced_capacitor'
    }),

    //Formulaic Assemblicator
    event.remove({output: 'mekanism:formulaic_assemblicator'})
    event.shaped('mekanism:formulaic_assemblicator', ['CBC', 'ASA', 'CIC'], {
        C: 'thermal:invar_plate',
        A: '#forge:circuits/basic',
        B: 'create:mechanical_crafter',
        S: 'mekanism:steel_casing',
        I: '#forge:chests/wooden'
    }),

    //Solar Panel
    event.remove({output: 'mekanismgenerators:solar_panel'})
    event.shaped('mekanismgenerators:solar_panel', ['GGG', 'OCO'], {
        G: '#forge:glass_panes/colorless',
        C: 'superpackutils:compressed_steel_ingot',
        O: '#forge:ingots/silver'
    }),

    //Solar Generator
    event.remove({output: 'mekanismgenerators:solar_generator'})
    event.shaped('mekanismgenerators:solar_generator', ['SSS', 'OCO', ' A '], {
        S: 'mekanismgenerators:solar_panel',
        A: 'create:andesite_alloy',
        O: 'superpackutils:compressed_steel_ingot',
        C: 'superpackutils:reinforced_capacitor'
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

    //Chemical Infuser
    event.remove({output: 'mekanism:chemical_infuser'})
    event.shaped('mekanism:chemical_infuser', ['SCS', 'IBI', 'SJS'], {
        S: '#forge:plates/invar',
        C: 'mekanism:metallurgic_infuser',
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

    //Chemical Injection Chamber
    event.remove({output: 'mekanism:chemical_injection_chamber'})
    event.shaped('mekanism:chemical_injection_chamber', ['GCG', 'IBI', 'SKS'], {
        S: '#forge:plates/bronze',
        C: 'create:spout',
        K: 'immersiveengineering:heavy_engineering',
        B: 'mekanism:purification_chamber',
        I: '#forge:circuits/advanced',
        G: '#forge:gears/bronze'
    }),

    //Seismic Vibrator
    event.remove({output: 'mekanism:seismic_vibrator'})
    event.shaped('mekanism:seismic_vibrator', ['SCS', 'IBI', 'SKS'], {
        S: '#forge:plates/invar',
        C: 'immersiveengineering:sample_drill',
        K: 'thermal:drill_head',
        B: 'mekanism:steel_casing',
        I: '#forge:circuits/basic'
    }),

    //Charge Pad
    event.remove({output: 'mekanism:chargepad'})
    event.shaped('mekanism:chargepad', ['PCP', 'SES'], {
        P: 'minecraft:polished_blackstone_pressure_plate',
        C: 'thermal:charge_bench',
        S: '#forge:ingots/steel',
        E: '#forge:ingots/silver'
    }),

    //Chemical Tank
    event.remove({output: 'mekanism:basic_chemical_tank'})
    event.shaped('mekanism:basic_chemical_tank', ['CSC', 'EPE', 'CSC'], {
        P: 'create:fluid_tank',
        C: 'mekanism:enriched_carbon',
        S: 'superpackutils:basic_alloy',
        E: '#forge:ingots/invar'
    }),

    //Advanced Chemical Tank
    event.remove({output: 'mekanism:advanced_chemical_tank'})
    event.shaped('mekanism:advanced_chemical_tank', ['CSC', 'EPE', 'CSC'], {
        P: 'mekanism:basic_chemical_tank',
        C: 'mekanism:enriched_redstone',
        S: 'mekanism:alloy_infused',
        E: '#forge:ingots/invar'
    }),

    //Elite Chemical Tank
    event.remove({output: 'mekanism:elite_chemical_tank'})
    event.shaped('mekanism:elite_chemical_tank', ['CSC', 'EPE', 'CSC'], {
        P: 'mekanism:advanced_chemical_tank',
        C: 'mekanism:enriched_diamond',
        S: 'mekanism:alloy_reinforced',
        E: '#forge:ingots/invar'
    }),

    //Ultimate Chemical Tank
    event.remove({output: 'mekanism:ultimate_chemical_tank'})
    event.shaped('mekanism:ultimate_chemical_tank', ['CSC', 'EPE', 'CSC'], {
        P: 'mekanism:elite_chemical_tank',
        C: 'mekanism:enriched_refined_obsidian',
        S: 'mekanism:alloy_atomic',
        E: '#forge:ingots/invar'
    }),

    //Fluid Tank
    event.remove({output: 'mekanism:basic_fluid_tank'})
    event.shaped('mekanism:basic_fluid_tank', ['CSC', 'EPE', 'CSC'], {
        P: 'create:fluid_tank',
        C: 'mekanism:enriched_carbon',
        S: 'superpackutils:basic_alloy',
        E: 'pneumaticcraft:ingot_iron_compressed'
    }),

    //Advanced Fluid Tank
    event.remove({output: 'mekanism:advanced_fluid_tank'})
    event.shaped('mekanism:advanced_fluid_tank', ['CSC', 'EPE', 'CSC'], {
        P: 'mekanism:basic_fluid_tank',
        C: 'mekanism:enriched_redstone',
        S: 'mekanism:alloy_infused',
        E: 'pneumaticcraft:ingot_iron_compressed'
    }),

    //Elite Fluid Tank
    event.remove({output: 'mekanism:elite_fluid_tank'})
    event.shaped('mekanism:elite_fluid_tank', ['CSC', 'EPE', 'CSC'], {
        P: 'mekanism:advanced_fluid_tank',
        C: 'mekanism:enriched_diamond',
        S: 'mekanism:alloy_reinforced',
        E: 'pneumaticcraft:ingot_iron_compressed'
    }),

    //Ultimate Fluid Tank
    event.remove({output: 'mekanism:ultimate_fluid_tank'})
    event.shaped('mekanism:ultimate_fluid_tank', ['CSC', 'EPE', 'CSC'], {
        P: 'mekanism:elite_fluid_tank',
        C: 'mekanism:enriched_refined_obsidian',
        S: 'mekanism:alloy_atomic',
        E: 'pneumaticcraft:ingot_iron_compressed'
    }),
    
    //Basic Energy Cube
    event.remove({output: 'mekanism:basic_energy_cube'})
    event.shaped('mekanism:basic_energy_cube', ['CSC', 'EPE', 'CSC'], {
        P: 'immersiveengineering:capacitor_hv',
        C: 'mekanism:enriched_carbon',
        S: 'superpackutils:basic_alloy',
        E: 'mekanism:energy_tablet'
    }),

    //Advanced Energy Cube
    event.remove({output: 'mekanism:advanced_energy_cube'})
    event.shaped('mekanism:advanced_energy_cube', ['CSC', 'EPE', 'CSC'], {
        P: 'mekanism:basic_energy_cube',
        C: 'mekanism:enriched_redstone',
        S: 'mekanism:alloy_infused',
        E: 'mekanism:energy_tablet'
    }),

    //Elite Energy Cube
    event.remove({output: 'mekanism:elite_energy_cube'})
    event.shaped('mekanism:elite_energy_cube', ['CSC', 'EPE', 'CSC'], {
        P: 'mekanism:advanced_energy_cube',
        C: 'mekanism:enriched_diamond',
        S: 'mekanism:alloy_reinforced',
        E: 'mekanism:energy_tablet'
    }),

    //Ultimate Energy Cube
    event.remove({output: 'mekanism:ultimate_energy_cube'})
    event.shaped('mekanism:ultimate_energy_cube', ['CSC', 'EPE', 'CSC'], {
        P: 'mekanism:elite_energy_cube',
        C: 'mekanism:enriched_refined_obsidian',
        S: 'mekanism:alloy_atomic',
        E: 'mekanism:energy_tablet'
    }),

    //Personal Chest
    event.remove({output: 'mekanism:personal_chest'})
    event.shaped('mekanism:personal_chest', ['CSC', 'EPE', 'CAC'], {
        P: 'ironchest:iron_chest',
        C: 'mekanism:enriched_carbon',
        S: 'mekanism:basic_control_circuit',
        A: 'superpackutils:compressed_steel_ingot',
        E: 'minecraft:glass'
    }),

    //Electric Pump
    event.remove({output: 'mekanism:electric_pump'})
    event.shaped('mekanism:electric_pump', ['SCS', 'IBI', 'SJS'], {
        S: '#forge:plates/lead',
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
        J: 'create:depot',
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

    //Bio Generator
    event.remove({output: 'mekanismgenerators:bio_generator'})
    event.shaped('mekanismgenerators:bio_generator', ['SCS', 'IBI', 'SDS'], {
        S: '#forge:plates/invar',
        C: 'create:millstone',
        D: 'superpackutils:reinforced_capacitor',
        B: 'immersiveengineering:light_engineering',
        I: 'mekanism:bio_fuel'
    }),

    //Bio Fuel IE Crusher
    event.recipes.immersiveengineering.crusher(Item.of('mekanism:bio_fuel', 3), '#forge:crops')

    //Bio Fuel Mek Crusher
    event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 5), '#forge:crops')

    //Heat Generator
    event.remove({output: 'mekanismgenerators:heat_generator'})
    event.shaped('mekanismgenerators:heat_generator', ['IFI', 'POP', 'CSC'], {
        I: '#forge:ingots/iron',
        F: 'minecraft:furnace',
        P: '#forge:plates/iron',
        O: 'create:andesite_casing',
        C: '#forge:ingots/copper',
        S: 'superpackutils:compressed_steel_ingot'
    }),

    //Superheating Element
    event.remove({output: 'mekanism:superheating_element'})
    event.shaped('mekanism:superheating_element', ['CSC', 'SBS', 'CSC'], {
        S: 'superpackutils:superheated_bronze_ingot',
        C: '#mekanism:enriched/redstone',
        B: 'rftoolsbase:machine_frame'
    }),

    //Pressure Dispenser
    event.remove({output: 'mekanism:pressure_disperser'})
    event.shaped('mekanism:pressure_disperser', ['SBS', 'ACA', 'SBS'], {
        S: '#forge:ingots/compressed_iron',
        C: 'mekanism:alloy_infused',
        A: 'superpackutils:compressed_steel_ingot',
        B: 'quark:grate'
    }),

    //Boiler Casing
    event.remove({output: 'mekanism:boiler_casing'})
    event.shaped(Item.of('mekanism:boiler_casing', 4), ['BCB', 'CIC', 'BCB'], {
        C: '#forge:ingots/compressed_iron',
        B: '#forge:sheetmetals/steel',
        I: 'mekanism:hdpe_sheet'
    }),

    //Sheets
    event.remove({id: 'mekanism:reaction/substrate/ethene_oxygen'})
    event.custom({"type":"mekanism:reaction","itemInput":{"ingredient":{"item":"pneumaticcraft:plastic"}},"fluidInput":{"amount":50,"tag":"forge:ethene"},"gasInput":{"amount":10,"gas":"mekanism:oxygen"},"energyRequired":1000,"duration":60,"itemOutput":{"item":"mekanism:hdpe_pellet"},"gasOutput":{"gas":"mekanism:oxygen","amount":5}})

    //Infused Alloy
    event.remove({output: 'mekanism:alloy_infused'})
    event.recipes.mekanism.metallurgic_infusing('mekanism:alloy_infused', 'superpackutils:basic_alloy', 'mekanism:redstone', 10),

    //Basic Circuit
    event.remove({id: 'mekanism:control_circuit/basic'})
    event.recipes.mekanism.metallurgic_infusing('mekanism:basic_control_circuit', 'immersiveengineering:circuit_board', 'mekanism:redstone', 20),

    //Advanced Circuit
    event.remove({output: 'mekanism:advanced_control_circuit'})
    event.remove({type: 'mekanism:combining'})
    event.recipes.mekanism.combining('mekanism:advanced_control_circuit', '#forge:circuits/basic', Item.of('mekanism:alloy_infused', 2))

});