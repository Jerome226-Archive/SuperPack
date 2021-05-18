//priority: 1500

events.listen('recipes', function (event) {

    //-----------------------------------------------------
    //Inscriber Recipes
    //-----------------------------------------------------

        //Inscriber Controller
        event.recipes.create.mechanical_crafting('masterfulmachinery:inscriber_controller', [
            'CPPPC',
            'PSESP',
            'PGHGP',
            'PSESP',
            'CPPPC'
          ], {
            C: 'thermal:invar_plate',
            P: 'superpackutils:inscriber_casing',
            S: 'immersiveengineering:ingot_aluminum',
            E: 'create:integrated_circuit',
            G: 'immersiveengineering:circuit_board',
            H: 'refinedstorage:machine_casing'
        })
    
        //Inscriber Item Output
        event.shaped('masterfulmachinery:inscriber_basic_port_items_output', ['ACA', 'CIC', 'ACA'], {
          I: 'create:integrated_circuit',
          A: 'thermal:copper_ingot',
          C: 'superpackutils:inscriber_casing'
      }),
    
        //Inscriber Item Input
        event.shaped('masterfulmachinery:inscriber_basic_port_items_input', ['ACA', 'CIC', 'ACA'], {
          I: 'create:integrated_circuit',
          A: 'tconstruct:cobalt_ingot',
          C: 'superpackutils:inscriber_casing'
      }),
    
        //Inscriber Energy Input
        event.shaped('masterfulmachinery:inscriber_basic_port_energy_input', ['ACA', 'CIC', 'ACA'], {
          I: 'create:integrated_circuit',
          A: 'mekanism:energy_tablet',
          C: 'superpackutils:inscriber_casing'
      }),

    //-----------------------------------------------------
    //Inscriber
    //-----------------------------------------------------

    event.custom({
        "type": "masterfulmachinery:machine_structure",
        "controllerId": "inscriber",
        "id": "inscriber",
        "name": "Inscriber",
        "layout": [
            [
              "AEA",
              "IAO",
              "ACA"
            ],
            [
              "A A",
              " M ",
              "A A"
            ],
            [
                "APA",
                "P P",
                "APA"
            ],
            [
                "AAA",
                "AAA",
                "AAA"
            ],
            
          ],
          "legend": {
            "A": {
                "block": "superpackutils:inscriber_casing"
            },
            "E": {
                "block": "masterfulmachinery:inscriber_basic_port_energy_input"
            },
            "I":  {
                "block": "masterfulmachinery:inscriber_basic_port_items_input"
            },
            "C":  {
              "block": "masterfulmachinery:inscriber_controller"
            },
            "M":  {
                "block": "refinedstorage:machine_casing"
            },
            "P":  {
                "block": "create:mechanical_press"
            },
            "O": {
                "block": "masterfulmachinery:inscriber_basic_port_items_output"
            }
        }
    })

    //-----------------------------------------------------
    //Inscriber Recipe
    //-----------------------------------------------------

    //Basic Processor
    event.remove({output: 'refinedstorage:raw_basic_processor'})
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "inscriber",
        "controllerId": "basic",
        "ticks": 100,
        "inputs": [
            {
                "type": "masterfulmachinery:energy",
                "data":{
                    "amount": 1000
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "refinedstorage:quartz_enriched_iron",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:redstone",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "refinedstorage:processor_binding",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "refinedstorage:silicon",
                    "count": 1
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "refinedstorage:raw_basic_processor",
                    "count": 1
                }
            }
        ]
    })

  //Improved Processor
  event.remove({output: 'refinedstorage:raw_improved_processor'})
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "inscriber",
    "controllerId": "basic",
    "ticks": 200,
    "inputs": [
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 2000
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "thermal:electrum_ingot",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "minecraft:redstone",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "refinedstorage:processor_binding",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "refinedstorage:silicon",
                "count": 1
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "refinedstorage:raw_improved_processor",
                "count": 1
            }
        }
    ]
})

//Advanced Processor
event.remove({output: 'refinedstorage:raw_advanced_processor'})
event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "inscriber",
    "controllerId": "basic",
    "ticks": 500,
    "inputs": [
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 5000
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "superpackutils:platinum_ingot",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "minecraft:redstone",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "refinedstorage:processor_binding",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "refinedstorage:silicon",
                "count": 1
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "refinedstorage:raw_advanced_processor",
                "count": 1
            }
        }
    ]
})

    //-----------------------------------------------------
    //Metallurgic Fabricator Recipes
    //-----------------------------------------------------
    
        //Metallurgic Fabricator Controller
        event.recipes.create.mechanical_crafting('masterfulmachinery:metallurgic_fabricator_controller', [
            'CPPPC',
            'PSESP',
            'PGHGP',
            'PSESP',
            'CPPPC'
          ], {
            C: 'libvulpes:platesilicon',
            P: 'superpackutils:metallurgic_casing',
            S: 'immersiveengineering:ingot_hop_graphite',
            E: 'create:integrated_circuit',
            G: 'immersiveengineering:circuit_board',
            H: 'refinedstorage:machine_casing'
        })
    
        //Metallurgic Fabricator Item Output
        event.shaped('masterfulmachinery:metallurgic_fabricator_basic_port_items_output', ['ACA', 'CIC', 'ACA'], {
          I: 'create:integrated_circuit',
          A: 'thermal:copper_ingot',
          C: 'superpackutils:metallurgic_casing'
      }),
    
        //Metallurgic Fabricator Item Input
        event.shaped('masterfulmachinery:metallurgic_fabricator_basic_port_items_input', ['ACA', 'CIC', 'ACA'], {
          I: 'create:integrated_circuit',
          A: 'tconstruct:cobalt_ingot',
          C: 'superpackutils:metallurgic_casing'
      }),
    
        //Metallurgic Fabricator Energy Input
        event.shaped('masterfulmachinery:metallurgic_fabricator_basic_port_energy_input', ['ACA', 'CIC', 'ACA'], {
          I: 'create:integrated_circuit',
          A: 'mekanism:energy_tablet',
          C: 'superpackutils:metallurgic_casing'
      }),

    //-----------------------------------------------------
    //Metallurgic Fabricator
    //-----------------------------------------------------

    event.custom({
        "type": "masterfulmachinery:machine_structure",
        "controllerId": "metallurgic_fabricator",
        "id": "metallurgic_fabricator",
        "name": "Metallurgic Fabricator",
        "layout": [
            [
              "AEA",
              "IAO",
              "ACA"
            ],
            [
              "AFA",
              "FMF",
              "APA"
            ],
            [
                "AAA",
                "AAA",
                "AAA"
            ]
          ],
          "legend": {
            "A": {
                "block": "superpackutils:metallurgic_casing"
            },
            "E": {
                "block": "masterfulmachinery:metallurgic_fabricator_basic_port_energy_input"
            },
            "I":  {
                "block": "masterfulmachinery:metallurgic_fabricator_basic_port_items_input"
            },
            "C":  {
              "block": "masterfulmachinery:metallurgic_fabricator_controller"
            },
            "M":  {
                "block": "refinedstorage:machine_casing"
            },
            "P":  {
                "block": "mekanism:metallurgic_infuser"
            },
            "F":  {
                "block": "immersiveengineering:heavy_engineering"
            },
            "O": {
                "block": "masterfulmachinery:metallurgic_fabricator_basic_port_items_output"
            }
        }
    })

    //-----------------------------------------------------
    //Metallurgic Recipe
    //-----------------------------------------------------
    
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "metallurgic_fabricator",
        "controllerId": "metallurgic_fabricator",
        "ticks": 1000,
        "inputs": [
            {
                "type": "masterfulmachinery:energy",
                "data":{
                    "amount": 5000
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:glowstone_dust",
                    "count": 3
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "botania:quartz_blaze",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "superpackutils:bloody_pigment",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "create:brass_ingot",
                    "count": 1
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "superpackutils:energetic_alloy_ingot",
                    "count": 1
                }
            }
        ]
    })

    //-----------------------------------------------------
    //Improved Metallurgic Fabricator
    //-----------------------------------------------------

    event.custom({
        "type": "masterfulmachinery:machine_structure",
        "controllerId": "improved_metallurgic_fabricator",
        "id": "improved_metallurgic_fabricator",
        "name": "Improved Metallurgic Fabricator",
        "layout": [
            [
              "AAIAA",
              "AAAAA",
              "AAAAA",
              "EAAAO"
            ],
            [
              "AAAAA",
              "ASSSA",
              "ASSSA",
              "AFCFA"
            ],
            [
                " AAA ",
                "AGGGA",
                "AGGGA",
                " AAA "
            ]
          ],
          "legend": {
            "A": {
                "block": "superpackutils:improved_metallurgic_casing"
            },
            "S": {
                "block": "mekanism:superheating_element"
            },
            "G": {
                "block": "thermal:obsidian_glass"
            },
            "F": {
                "block": "mekanism:metallurgic_infuser"
            },
            "E": {
                "block": "masterfulmachinery:improved_metallurgic_fabricator_basic_port_items_input"
            },
            "O": {
                "block": "masterfulmachinery:improved_metallurgic_fabricator_basic_port_items_output"
            },
            "I":  {
                "block": "masterfulmachinery:improved_metallurgic_fabricator_basic_port_energy_input"
            },
            "C":  {
              "block": "masterfulmachinery:improved_metallurgic_fabricator_controller"
            }
        }
    })

    //-----------------------------------------------------
    //Improved Metallurgic Fabricator Recipe
    //-----------------------------------------------------
    
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "improved_metallurgic_fabricator",
        "controllerId": "improved_metallurgic_fabricator",
        "ticks": 1000,
        "inputs": [
            {
                "type": "masterfulmachinery:energy",
                "data":{
                    "amount": 10000
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "thermal:ender_pearl_dust",
                    "count": 3
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "botania:quartz_elven",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "superpackutils:grassy_pigment",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "mekanism:ingot_uranium",
                    "count": 1
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "superpackutils:vibrant_alloy_ingot",
                    "count": 1
                }
            }
        ]
    })

    //-----------------------------------------------------
    //Infuser
    //-----------------------------------------------------

    event.custom({
        "type": "masterfulmachinery:machine_structure",
        "controllerId": "infuser",
        "id": "infuser",
        "name": "Infuser",
        "layout": [
            [
              "AEA",
              "IAO",
              "ACA"
            ],
            [
              "P P",
              "ZMW",
              "P P"
            ],
            [
                "P P",
                "   ",
                "P P"
            ],
            [
                "P P",
                " S ",
                "P P"
            ],
            [
                "AAA",
                "AFA",
                "AAA"
            ]
          ],
          "legend": {
            "A": {
                "block": "superpackutils:infuser_casing"
            },
            "E": {
                "block": "masterfulmachinery:infuser_basic_port_energy_input"
            },
            "I":  {
                "block": "masterfulmachinery:infuser_basic_port_mekanism_gas_input"
            },
            "C":  {
              "block": "masterfulmachinery:infuser_controller"
            },
            "M":  {
                "block": "create:depot"
            },
            "S":  {
                "block": "create:spout"
            },
            "F":  {
                "block": "masterfulmachinery:infuser_basic_port_fluids_input"
            },
            "P":  {
                "block": "immersiveengineering:steel_fence"
            },
            "Z":  {
                "block": "masterfulmachinery:infuser_basic_port_items_input"
            },
            "W":  {
                "block": "masterfulmachinery:infuser_basic_port_items_output"
            },
            "O": {
                "block": "masterfulmachinery:infuser_basic_port_mekanism_gas_output"
            }
        }
    })

    //-----------------------------------------------------
    //Infuser Recipe
    //-----------------------------------------------------
    
    //Rich Slag
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "infuser",
        "controllerId": "infuser",
        "ticks": 1000,
        "inputs": [
            {
                "type": "masterfulmachinery:energy",
                "data":{
                    "amount": 1000
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "thermal:slag",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "immersivepetroleum:napalm",
                    "amount": 35
                }
            },
            {
                "type": "masterfulmachinery:mekanism_gas",
                "data":{
                    "gas": "mekanism:sulfur_dioxide",
                    "amount": 100
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "thermal:rich_slag",
                    "count": 1
                }
            }
        ]
    })

    //Starlight Shard
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "infuser",
        "controllerId": "infuser",
        "ticks": 3000,
        "inputs": [
            {
                "type": "masterfulmachinery:energy",
                "data":{
                    "amount": 1000
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "superpackutils:ender_pearl_nugget",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "astralsorcery:liquid_starlight",
                    "amount": 250
                }
            },
            {
                "type": "masterfulmachinery:mekanism_gas",
                "data":{
                    "gas": "superpackutils:chemical_death",
                    "amount": 100
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "superpackutils:starlight_shard",
                    "count": 1
                }
            }
        ]
    })
});