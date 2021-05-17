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
            S: 'create:zinc_ingot',
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
        "blocks": [

    //-----------------------------------------------------
    //Layer 1
    //-----------------------------------------------------

            {
                "pos":{
                    "x": -1,
                    "y": 0,
                    "z": -1
                },
                "block": "masterfulmachinery:inscriber_basic_port_items_input"
            },
            {
                "pos":{
                    "x": 1,
                    "y": 0,
                    "z": -1
                },
                "block": "masterfulmachinery:inscriber_basic_port_items_output"
            },
            {
                "pos":{
                    "x": 0,
                    "y": 0,
                    "z": -2
                },
                "block": "masterfulmachinery:inscriber_basic_port_energy_input"
            },

            {
                "pos":{
                    "x": 0,
                    "y": 0,
                    "z": -1
                },
                "block": "superpackutils:inscriber_casing"
            },
            {
                "pos":{
                    "x": -1,
                    "y": 0,
                    "z": 0
                },
                "block": "superpackutils:inscriber_casing"
            },
            {
                "pos":{
                    "x": -1,
                    "y": 0,
                    "z": -2
                },
                "block": "superpackutils:inscriber_casing"
            },
            {
                "pos":{
                    "x": 1,
                    "y": 0,
                    "z": 0
                },
                "block": "superpackutils:inscriber_casing"
            },
            {
                "pos":{
                    "x": 1,
                    "y": 0,
                    "z": -2
                },
                "block": "superpackutils:inscriber_casing"
            },

    //-----------------------------------------------------
    //Layer 2
    //-----------------------------------------------------

            {
                "pos":{
                    "x": 0,
                    "y": 1,
                    "z": -1
                },
                "block": "refinedstorage:machine_casing"
            },
            {
                "pos":{
                    "x": -1,
                    "y": 1,
                    "z": 0
                },
                "block": "superpackutils:inscriber_casing"
            },
            {
                "pos":{
                    "x": -1,
                    "y": 1,
                    "z": -2
                },
                "block": "superpackutils:inscriber_casing"
            },
            {
                "pos":{
                    "x": 1,
                    "y": 1,
                    "z": 0
                },
                "block": "superpackutils:inscriber_casing"
            },
            {
                "pos":{
                    "x": 1,
                    "y": 1,
                    "z": -2
                },
                "block": "superpackutils:inscriber_casing"
            },
        
    //-----------------------------------------------------
    //Layer 3
    //-----------------------------------------------------

        {
            "pos":{
                "x": -1,
                "y": 2,
                "z": -1
            },
            "block": "create:mechanical_press"
        },
        {
            "pos":{
                "x": 1,
                "y": 2,
                "z": -1
            },
            "block": "create:mechanical_press"
        },
        {
            "pos":{
                "x": 0,
                "y": 2,
                "z": -2
            },
            "block": "create:mechanical_press"
        },
        {
            "pos":{
                "x": 0,
                "y": 2,
                "z": 0
            },
            "block": "create:mechanical_press"
        },
        {
            "pos":{
                "x": -1,
                "y": 2,
                "z": 0
            },
            "block": "superpackutils:inscriber_casing"
        },
        {
            "pos":{
                "x": -1,
                "y": 2,
                "z": -2
            },
            "block": "superpackutils:inscriber_casing"
        },
        {
            "pos":{
                "x": 1,
                "y": 2,
                "z": 0
            },
            "block": "superpackutils:inscriber_casing"
        },
        {
            "pos":{
                "x": 1,
                "y": 2,
                "z": -2
            },
            "block": "superpackutils:inscriber_casing"
        },
        
    //-----------------------------------------------------
    //Layer 4
    //-----------------------------------------------------

    {
        "pos":{
            "x": 0,
            "y": 3,
            "z": -1
        },
        "block": "superpackutils:inscriber_casing"
    },
    {
        "pos":{
            "x": -1,
            "y": 3,
            "z": -1
        },
        "block": "superpackutils:inscriber_casing"
    },
    {
        "pos":{
            "x": 1,
            "y": 3,
            "z": -1
        },
        "block": "superpackutils:inscriber_casing"
    },
    {
        "pos":{
            "x": 0,
            "y": 3,
            "z": -2
        },
        "block": "superpackutils:inscriber_casing"
    },
    {
        "pos":{
            "x": 0,
            "y": 3,
            "z": 0
        },
        "block": "superpackutils:inscriber_casing"
    },
    {
        "pos":{
            "x": -1,
            "y": 3,
            "z": 0
        },
        "block": "superpackutils:inscriber_casing"
    },
    {
        "pos":{
            "x": -1,
            "y": 3,
            "z": -2
        },
        "block": "superpackutils:inscriber_casing"
    },
    {
        "pos":{
            "x": 1,
            "y": 3,
            "z": 0
        },
        "block": "superpackutils:inscriber_casing"
    },
    {
        "pos":{
            "x": 1,
            "y": 3,
            "z": -2
        },
        "block": "superpackutils:inscriber_casing"
    },

        ]
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
        "blocks": [

    //-----------------------------------------------------
    //Layer 1
    //-----------------------------------------------------

            {
                "pos":{
                    "x": -1,
                    "y": 0,
                    "z": -1
                },
                "block": "masterfulmachinery:metallurgic_fabricator_basic_port_items_input"
            },
            {
                "pos":{
                    "x": 1,
                    "y": 0,
                    "z": -1
                },
                "block": "masterfulmachinery:metallurgic_fabricator_basic_port_items_output"
            },
            {
                "pos":{
                    "x": 0,
                    "y": 0,
                    "z": -2
                },
                "block": "masterfulmachinery:metallurgic_fabricator_basic_port_energy_input"
            },

            {
                "pos":{
                    "x": 0,
                    "y": 0,
                    "z": -1
                },
                "block": "superpackutils:metallurgic_casing"
            },
            {
                "pos":{
                    "x": -1,
                    "y": 0,
                    "z": 0
                },
                "block": "superpackutils:metallurgic_casing"
            },
            {
                "pos":{
                    "x": -1,
                    "y": 0,
                    "z": -2
                },
                "block": "superpackutils:metallurgic_casing"
            },
            {
                "pos":{
                    "x": 1,
                    "y": 0,
                    "z": 0
                },
                "block": "superpackutils:metallurgic_casing"
            },
            {
                "pos":{
                    "x": 1,
                    "y": 0,
                    "z": -2
                },
                "block": "superpackutils:metallurgic_casing"
            },

    //-----------------------------------------------------
    //Layer 2
    //-----------------------------------------------------

    {
        "pos":{
            "x": -1,
            "y": 1,
            "z": -1
        },
        "block": "immersiveengineering:heavy_engineering"
    },
    {
        "pos":{
            "x": 1,
            "y": 1,
            "z": -1
        },
        "block": "immersiveengineering:heavy_engineering"
    },
    {
        "pos":{
            "x": 0,
            "y": 1,
            "z": -2
        },
        "block": "immersiveengineering:heavy_engineering"
    },
    {
        "pos":{
            "x": 0,
            "y": 1,
            "z": 0
        },
        "block": "mekanism:metallurgic_infuser"
    },

            {
                "pos":{
                    "x": 0,
                    "y": 1,
                    "z": -1
                },
                "block": "refinedstorage:machine_casing"
            },
            {
                "pos":{
                    "x": -1,
                    "y": 1,
                    "z": 0
                },
                "block": "superpackutils:metallurgic_casing"
            },
            {
                "pos":{
                    "x": -1,
                    "y": 1,
                    "z": -2
                },
                "block": "superpackutils:metallurgic_casing"
            },
            {
                "pos":{
                    "x": 1,
                    "y": 1,
                    "z": 0
                },
                "block": "superpackutils:metallurgic_casing"
            },
            {
                "pos":{
                    "x": 1,
                    "y": 1,
                    "z": -2
                },
                "block": "superpackutils:metallurgic_casing"
            },
        
    //-----------------------------------------------------
    //Layer 3
    //-----------------------------------------------------

    {
        "pos":{
            "x": 0,
            "y": 2,
            "z": -1
        },
        "block": "superpackutils:metallurgic_casing"
    },
        {
            "pos":{
                "x": -1,
                "y": 2,
                "z": -1
            },
            "block": "superpackutils:metallurgic_casing"
        },
        {
            "pos":{
                "x": 1,
                "y": 2,
                "z": -1
            },
            "block": "superpackutils:metallurgic_casing"
        },
        {
            "pos":{
                "x": 0,
                "y": 2,
                "z": -2
            },
            "block": "superpackutils:metallurgic_casing"
        },
        {
            "pos":{
                "x": 0,
                "y": 2,
                "z": 0
            },
            "block": "superpackutils:metallurgic_casing"
        },
        {
            "pos":{
                "x": -1,
                "y": 2,
                "z": 0
            },
            "block": "superpackutils:metallurgic_casing"
        },
        {
            "pos":{
                "x": -1,
                "y": 2,
                "z": -2
            },
            "block": "superpackutils:metallurgic_casing"
        },
        {
            "pos":{
                "x": 1,
                "y": 2,
                "z": 0
            },
            "block": "superpackutils:metallurgic_casing"
        },
        {
            "pos":{
                "x": 1,
                "y": 2,
                "z": -2
            },
            "block": "superpackutils:metallurgic_casing"
        },

        ]
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
                    "amount": 2000
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:redstone",
                    "count": 2
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
    //Infuser
    //-----------------------------------------------------

    event.custom({
        "type": "masterfulmachinery:machine_structure",
        "controllerId": "infuser",
        "id": "infuser",
        "blocks": [

    //-----------------------------------------------------
    //Layer 1
    //-----------------------------------------------------

            {
                "pos":{
                    "x": -1,
                    "y": 0,
                    "z": -1
                },
                "block": "masterfulmachinery:infuser_basic_port_mekanism_gas_input"
            },
            {
                "pos":{
                    "x": 1,
                    "y": 0,
                    "z": -1
                },
                "block": "masterfulmachinery:infuser_basic_port_mekanism_gas_output"
            },
            {
                "pos":{
                    "x": 0,
                    "y": 0,
                    "z": -2
                },
                "block": "masterfulmachinery:infuser_basic_port_energy_input"
            },

            {
                "pos":{
                    "x": 0,
                    "y": 0,
                    "z": -1
                },
                "block": "superpackutils:infuser_casing"
            },
            {
                "pos":{
                    "x": -1,
                    "y": 0,
                    "z": 0
                },
                "block": "superpackutils:infuser_casing"
            },
            {
                "pos":{
                    "x": -1,
                    "y": 0,
                    "z": -2
                },
                "block": "superpackutils:infuser_casing"
            },
            {
                "pos":{
                    "x": 1,
                    "y": 0,
                    "z": 0
                },
                "block": "superpackutils:infuser_casing"
            },
            {
                "pos":{
                    "x": 1,
                    "y": 0,
                    "z": -2
                },
                "block": "superpackutils:infuser_casing"
            },

    //-----------------------------------------------------
    //Layer 2
    //-----------------------------------------------------

    {
        "pos":{
            "x": -1,
            "y": 1,
            "z": -1
        },
        "block": "masterfulmachinery:infuser_basic_port_items_input"
    },
    {
        "pos":{
            "x": 1,
            "y": 1,
            "z": -1
        },
        "block": "masterfulmachinery:infuser_basic_port_items_output"
    },

            {
                "pos":{
                    "x": 0,
                    "y": 1,
                    "z": -1
                },
                "block": "create:depot"
            },
            {
                "pos":{
                    "x": -1,
                    "y": 1,
                    "z": 0
                },
                "block": "immersiveengineering:steel_fence"
            },
            {
                "pos":{
                    "x": -1,
                    "y": 1,
                    "z": -2
                },
                "block": "immersiveengineering:steel_fence"
            },
            {
                "pos":{
                    "x": 1,
                    "y": 1,
                    "z": 0
                },
                "block": "immersiveengineering:steel_fence"
            },
            {
                "pos":{
                    "x": 1,
                    "y": 1,
                    "z": -2
                },
                "block": "immersiveengineering:steel_fence"
            },
        
    //-----------------------------------------------------
    //Layer 3
    //-----------------------------------------------------

    {
        "pos":{
            "x": -1,
            "y": 2,
            "z": 0
        },
        "block": "immersiveengineering:steel_fence"
    },
    {
        "pos":{
            "x": -1,
            "y": 2,
            "z": -2
        },
        "block": "immersiveengineering:steel_fence"
    },
    {
        "pos":{
            "x": 1,
            "y": 2,
            "z": 0
        },
        "block": "immersiveengineering:steel_fence"
    },
    {
        "pos":{
            "x": 1,
            "y": 2,
            "z": -2
        },
        "block": "immersiveengineering:steel_fence"
    },

    //-----------------------------------------------------
    //Layer 4
    //-----------------------------------------------------

    {
        "pos":{
            "x": -1,
            "y": 3,
            "z": 0
        },
        "block": "immersiveengineering:steel_fence"
    },
    {
        "pos":{
            "x": -1,
            "y": 3,
            "z": -2
        },
        "block": "immersiveengineering:steel_fence"
    },
    {
        "pos":{
            "x": 1,
            "y": 3,
            "z": 0
        },
        "block": "immersiveengineering:steel_fence"
    },
    {
        "pos":{
            "x": 1,
            "y": 3,
            "z": -2
        },
        "block": "immersiveengineering:steel_fence"
    },
    {
        "pos":{
            "x": 0,
            "y": 3,
            "z": -1
        },
        "block": "create:spout"
    },

    //-----------------------------------------------------
    //Layer 5
    //-----------------------------------------------------

    {
        "pos":{
            "x": 0,
            "y": 4,
            "z": -1
        },
        "block": "masterfulmachinery:infuser_basic_port_fluids_input"
    },
        {
            "pos":{
                "x": -1,
                "y": 4,
                "z": -1
            },
            "block": "superpackutils:infuser_casing"
        },
        {
            "pos":{
                "x": 1,
                "y": 4,
                "z": -1
            },
            "block": "superpackutils:infuser_casing"
        },
        {
            "pos":{
                "x": 0,
                "y": 4,
                "z": -2
            },
            "block": "superpackutils:infuser_casing"
        },
        {
            "pos":{
                "x": 0,
                "y": 4,
                "z": 0
            },
            "block": "superpackutils:infuser_casing"
        },
        {
            "pos":{
                "x": -1,
                "y": 4,
                "z": 0
            },
            "block": "superpackutils:infuser_casing"
        },
        {
            "pos":{
                "x": -1,
                "y": 4,
                "z": -2
            },
            "block": "superpackutils:infuser_casing"
        },
        {
            "pos":{
                "x": 1,
                "y": 4,
                "z": 0
            },
            "block": "superpackutils:infuser_casing"
        },
        {
            "pos":{
                "x": 1,
                "y": 4,
                "z": -2
            },
            "block": "superpackutils:infuser_casing"
        },

        ]
    })

        //-----------------------------------------------------
    //Metallurgic Recipe
    //-----------------------------------------------------
    
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "inscriber",
        "controllerId": "inscriber",
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
});