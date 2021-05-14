//priority: 1500

events.listen('recipes', function (event) {

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

});