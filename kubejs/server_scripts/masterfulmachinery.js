//priority: 1500

events.listen('recipes', function (event) {

    //-----------------------------------------------------
    //Inscriber Recipes
    //-----------------------------------------------------

        //Inscriber Controller
        event.shaped('masterfulmachinery:inscriber_controller', [
            'PEP',
            'GHG',
            'PFP'
          ], {
            P: 'superpackutils:inscriber_casing',
            E: 'superpackutils:integrated_circuit',
            F: 'superpackutils:bio_plastic',
            G: 'immersiveengineering:circuit_board',
            H: 'refinedstorage:machine_casing'
        })
    
        //Inscriber Item Output
        event.shapeless('masterfulmachinery:inscriber_basic_port_items_output', ['superpackutils:inscriber_casing', 'thermal:copper_ingot'])
    
        //Inscriber Item Input
        event.shapeless('masterfulmachinery:inscriber_basic_port_items_input', ['superpackutils:inscriber_casing', 'thermal:lead_ingot'])
    
        //Inscriber Energy Input
        event.shapeless('masterfulmachinery:inscriber_basic_port_energy_input', ['superpackutils:inscriber_casing', 'thermal:lead_ingot', 'superpackutils:electrical_platinum_ingot'])


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
              "TET",
              "IAO",
              "TCT"
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
                "TAT",
                "AAA",
                "TAT"
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
                "tag": "superpack:inscriber/item_output"
            },
            "T":  {
              "tag": "superpack:inscriber/optional/item_input"
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
                "tag": "superpack:inscriber/item_output"
            }
        }
    })

    //-----------------------------------------------------
    //Metallurgic Fabricator Recipes
    //-----------------------------------------------------
    
        //Metallurgic Fabricator Controller
        event.shaped('masterfulmachinery:metallurgic_fabricator_controller', [
            'PEP',
            'GHG',
            'PFP'
          ], {
            P: 'superpackutils:metallurgic_casing',
            E: 'superpackutils:circuit_board',
            F: 'refinedstorage:construction_core',
            G: 'mekanism:basic_control_circuit',
            H: 'refinedstorage:machine_casing'
        })
    
        //Metallurgic Fabricator Item Output
        event.shapeless('masterfulmachinery:metallurgic_fabricator_basic_port_items_output', ['superpackutils:metallurgic_casing', 'thermal:copper_ingot'])
    
        //Metallurgic Fabricator Item Input
        event.shapeless('masterfulmachinery:metallurgic_fabricator_basic_port_items_input', ['superpackutils:metallurgic_casing', 'thermal:lead_ingot'])

        //Metallurgic Fabricator Energy Input
        event.shapeless('masterfulmachinery:metallurgic_fabricator_basic_port_energy_input', ['superpackutils:metallurgic_casing', 'thermal:lead_ingot', 'superpackutils:electrical_platinum_ingot'])

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
              "TET",
              "IAO",
              "TCT"
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
                "tag": "superpack:metallurgic_fabricator/item_input"
            },
            "C":  {
              "block": "masterfulmachinery:metallurgic_fabricator_controller"
            },
            "T":  {
              "tag": "superpack:metallurgic_fabricator/optional/item_input"
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
                "tag": "superpack:metallurgic_fabricator/item_output"
            }
        }
    })

    //-----------------------------------------------------
    //Assembling Machine Recipes
    //-----------------------------------------------------
    
        //Assembler Controller
        event.shaped('masterfulmachinery:assembler_controller', [
          'PEP',
          'GHG',
          'PFP'
        ], {
          P: 'superpackutils:assembler_frame',
          E: 'superpackutils:circuit_board',
          F: 'superpackutils:vibrant_processor',
          G: 'mekanism:advanced_control_circuit',
          H: 'mekanism:steel_casing'
      })
  
      //Assembler Item Output
      event.shapeless('masterfulmachinery:assembler_basic_port_items_output', ['superpackutils:assembler_frame', 'thermal:copper_ingot'])

      //Assembler Item Input
      event.shapeless('masterfulmachinery:assembler_basic_port_items_input', ['superpackutils:assembler_frame', 'thermal:lead_ingot'])

      //Assembler Energy Input
      event.shapeless('masterfulmachinery:assembler_basic_port_energy_input', ['superpackutils:assembler_frame', 'thermal:lead_ingot', 'superpackutils:electrical_platinum_ingot'])

      //Assembler Presssure Input
      event.shapeless('masterfulmachinery:assembler_basic_port_pncr_pressure_input', ['superpackutils:assembler_frame', 'thermal:lead_ingot', 'pneumaticcraft:ingot_iron_compressed'])

      //Assembler Fluid Input
      event.shapeless('masterfulmachinery:assembler_basic_port_fluids_input', ['superpackutils:assembler_frame', 'thermal:lead_ingot', 'thermal:tin_ingot'])


    //-----------------------------------------------------
    //Assembling Machine
    //-----------------------------------------------------

    event.custom({
        "type": "masterfulmachinery:machine_structure",
        "id": "assembler",
        "controllerId": "assembler",
        "name": "Assembling Machine",
        "layout": [
          [
            " TBT ",
            "TBBBT",
            "BBZBB",
            "TBBBT",
            " TBT "
          ],
          [
            "BBBBB",
            "G   G",
            "G E G",
            "G   G",
            "BDDDB"
          ],
          [
            "BBIBB",
            "G E G",
            "FEHEJ",
            "G E G",
            "BDCDB"
          ],
          [
            "BBBBB",
            "G   G",
            "G E G",
            "G   G",
            "BDDDB"
          ],
          [
            " TBT ",
            "TBBBT",
            "BBLBB",
            "TBBBT",
            " TBT"
          ]
        ],
        "legend": {
          "B": {
            "block": "superpackutils:assembler_frame"
          },
          "G": {
            "block": "thermal:obsidian_glass"
          },
          "D": {
            "block": "mekanism:formulaic_assemblicator"
          },
          "E": {
            "block": "mekanism:laser"
          },
          "F": {
            "tag": "superpack:assembler/item_input"
          },
          "T":  {
            "tag": "superpack:assembler/optional/item_input"
          },
          "Z": {
            "block": "masterfulmachinery:assembler_basic_port_pncr_pressure_input"
          },
          "C": {
            "block": "masterfulmachinery:assembler_controller"
          },
          "H": {
            "block": "refinedstorage:controller"
          },
          "I": {
            "block": "masterfulmachinery:assembler_basic_port_fluids_input"
          },
          "J": {
            "tag": "superpack:assembler/item_output"
          },
          "L": {
            "block": "masterfulmachinery:assembler_basic_port_energy_input"
          }
        }
    })

    //-----------------------------------------------------
    //Improved Metallurgic Fabricator Recipes
    //-----------------------------------------------------
    
        //Improved Metallurgic Fabricator Controller
        event.shaped('masterfulmachinery:improved_metallurgic_fabricator_controller', [
            'PEP',
            'GHG',
            'PFP'
          ], {
            P: 'superpackutils:improved_metallurgic_casing',
            E: 'superpackutils:circuit_board',
            F: 'superpackutils:vibrant_processor',
            G: 'mekanism:advanced_control_circuit',
            H: 'mekanism:steel_casing'
        })
    
        //Improved Metallurgic Fabricator Item Output
        event.shapeless('masterfulmachinery:improved_metallurgic_fabricator_basic_port_items_output', ['superpackutils:improved_metallurgic_casing', 'thermal:copper_ingot'])
    
        //Improved Metallurgic Fabricator Item Input
        event.shapeless('masterfulmachinery:improved_metallurgic_fabricator_basic_port_items_input', ['superpackutils:improved_metallurgic_casing', 'thermal:lead_ingot'])

        //Improved Metallurgic Fabricator Energy Input
        event.shapeless('masterfulmachinery:improved_metallurgic_fabricator_basic_port_energy_input', ['superpackutils:improved_metallurgic_casing', 'thermal:lead_ingot', 'superpackutils:electrical_platinum_ingot'])

        //Improved Metallurgic Fabricator Pressure Input
        event.shapeless('masterfulmachinery:improved_metallurgic_fabricator_basic_port_pncr_pressure_input', ['superpackutils:improved_metallurgic_casing', 'thermal:lead_ingot', 'pneumaticcraft:ingot_iron_compressed'])

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
              "TAIAT",
              "TAAAT",
              "TAAAT",
              "EAAAO"
            ],
            [
              "AAPAA",
              "ASSSA",
              "ASSSA",
              "AFCFA"
            ],
            [
                " AAA ",
                "AAAAA",
                "AAAAA",
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
            "T":  {
              "tag": "superpack:improved_metallurgic_fabricator/optional/item_input"
            },
            "F": {
                "block": "mekanism:metallurgic_infuser"
            },
            "P": {
                "block": "masterfulmachinery:improved_metallurgic_fabricator_basic_port_pncr_pressure_input"
            },
            "E": {
                "tag": "superpack:improved_metallurgic_fabricator/item_input"
            },
            "O": {
                "tag": "superpack:improved_metallurgic_fabricator/item_output"
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
    //Collector Recipes
    //-----------------------------------------------------
    
        //Collector Controller
        event.shaped('masterfulmachinery:collector_controller', [
            'PEP',
            'GHG',
            'PFP'
          ], {
            P: 'mekanism:pressure_disperser',
            E: 'superpackutils:circuit_board',
            F: 'superpackutils:energetic_processor',
            G: 'mekanism:basic_control_circuit',
            H: 'mekanism:steel_casing'
        })
    
        //Collector Gas Output
        event.shapeless('masterfulmachinery:collector_basic_port_mekanism_gas_output', ['mekanism:pressure_disperser', 'thermal:copper_ingot', 'thermal:invar_ingot'])

        //Collector Gas Input
        event.shapeless('masterfulmachinery:collector_basic_port_mekanism_gas_input', ['mekanism:pressure_disperser', 'thermal:lead_ingot', 'thermal:invar_ingot'])

        //Collector Energy Input
        event.shapeless('masterfulmachinery:collector_basic_port_energy_input', ['mekanism:pressure_disperser', 'thermal:lead_ingot', 'superpackutils:electrical_platinum_ingot'])

    //-----------------------------------------------------
    //Collector
    //-----------------------------------------------------

    event.custom({
        "type": "masterfulmachinery:machine_structure",
        "id": "collector",
        "controllerId": "collector",
        "name": "Collector",
        "layout": [
          [
            "ABA",
            "AAA",
            "AOA"
          ],
          [
            "AZA",
            "IMI",
            "ACA"
          ],
          [
            "EIE",
            "IFI",
            "EIE"
          ]
        ],
        "legend": {
          "A": {
            "block": "mekanism:pressure_disperser"
          },
          "B": {
            "block": "masterfulmachinery:collector_basic_port_energy_input"
          },
          "O": {
            "block": "masterfulmachinery:collector_basic_port_mekanism_gas_output"
          },
          "C": {
            "block": "masterfulmachinery:collector_controller"
          },
          "Z": {
            "block": "masterfulmachinery:collector_basic_port_mekanism_gas_input"
          },
          "M": {
            "block": "refinedstorage:machine_casing"
          },
          "E": {
            "block": "immersiveengineering:slab_sheetmetal_steel"
          },
          "I": {
            "block": "immersiveengineering:sheetmetal_steel"
          },
          "F": {
            "block": "immersiveengineering:heavy_engineering"
          }
        }
    })

    //-----------------------------------------------------
    //Chemical Reactor
    //-----------------------------------------------------

    event.custom({
      "type": "masterfulmachinery:machine_structure",
      "id": "chemical_reactor",
      "controllerId": "chemical_reactor",
      "name": "Chemical Reactor",
      "layout": [
        [
          "F F",
          "   ",
          "F F"
        ],
        [
          "APA",
          "GAO",
          "ACA"
        ],
        [
          "AAA",
          "GBO",
          "AAA"
        ],
        [
          "AIA",
          "GBO",
          "AAA"
        ],
        [
          "SAS",
          "AAA",
          "SAS"
        ]
      ],
      "legend": {
        "F": {
          "block": "immersiveposts:fence_silver"
        },
        "A": {
          "block": "superpackutils:chemical_reactor_casing"
        },
        "P": {
          "block": "masterfulmachinery:chemical_reactor_basic_port_pncr_pressure_input"
        },
        "G": {
          "block": "masterfulmachinery:chemical_reactor_basic_port_mekanism_gas_input"
        },
        "O": {
          "block": "masterfulmachinery:chemical_reactor_basic_port_mekanism_gas_output"
        },
        "I": {
          "block": "masterfulmachinery:chemical_reactor_basic_port_items_input"
        },
        "B": {
          "block": "superpackutils:big_steel_casing"
        },
        "S": {
          "block": "immersiveengineering:slab_sheetmetal_silver"
        }
      }
    })

    //-----------------------------------------------------
    //Ore Washing Plant
    //-----------------------------------------------------

    event.custom({
      "type": "masterfulmachinery:machine_structure",
      "id": "washer",
      "controllerId": "washer",
      "name": "Ore Washing Plant",
      "layout": [
        [
          "WWW",
          "WWW",
          "WWW"
        ],
        [
          "WEW",
          "I O",
          "WCW"
        ],
        [
          "WWW",
          "W W",
          "WWW"
        ],
        [
          "WWW",
          "WFW",
          "WWW"
        ]
      ],
      "legend": {
        "W": {
          "block": "superpackutils:washer_casing"
        },
        "I": {
          "block": "masterfulmachinery:washer_basic_port_items_input"
        },
        "E": {
          "block": "masterfulmachinery:washer_basic_port_energy_input"
        },
        "O": {
          "block": "masterfulmachinery:washer_basic_port_items_output"
        },
        "F": {
          "block": "masterfulmachinery:washer_basic_port_fluids_input"
        }
      }
    })

    //-----------------------------------------------------
    //Alchemical Mixer Recipes
    //-----------------------------------------------------
    
        //Mixer Controller
        event.shaped('masterfulmachinery:mixer_controller', [
          'PEP',
          'GHG',
          'PFP'
        ], {
          P: 'superpackutils:mixer_casing',
          E: 'superpackutils:circuit_board',
          F: 'refinedstorage:construction_core',
          G: 'mekanism:basic_control_circuit',
          H: 'refinedstorage:machine_casing'
      })


      //Mixer Energy Input
      event.shapeless('masterfulmachinery:mixer_basic_port_energy_input', ['superpackutils:mixer_casing', 'thermal:lead_ingot', 'superpackutils:electrical_platinum_ingot'])

      //Mixer Mana Input
      event.shapeless('masterfulmachinery:mixer_basic_port_botania_mana_input', ['superpackutils:mixer_casing', 'thermal:lead_ingot', 'botania:manasteel_ingot'])

      //Mixer Pressure Input
      event.shapeless('masterfulmachinery:mixer_basic_port_pncr_pressure_input', ['superpackutils:mixer_casing', 'thermal:lead_ingot', 'pneumaticcraft:ingot_iron_compressed'])

      //Mixer Items Output
      event.shapeless('masterfulmachinery:mixer_basic_port_items_output', ['superpackutils:mixer_casing', 'thermal:copper_ingot'])

      //Mixer Items Input
      event.shapeless('masterfulmachinery:mixer_basic_port_items_input', ['superpackutils:mixer_casing', 'thermal:lead_ingot'])

    //-----------------------------------------------------
    //Alchemical Mixer
    //-----------------------------------------------------

    event.custom({
      "type": "masterfulmachinery:machine_structure",
      "controllerId": "mixer",
      "id": "mixer",
      "name": "Alchemical Mixer",
      "layout": [
          [
            "TET",
            "AAA",
            "TCT"
          ],
          [
            "PGP",
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
              "TAT",
              "AFA",
              "TAT"
          ]
        ],
        "legend": {
          "A": {
              "block": "superpackutils:mixer_casing"
          },
          "E": {
              "block": "masterfulmachinery:mixer_basic_port_energy_input"
          },
          "G": {
            "block": "masterfulmachinery:mixer_basic_port_pncr_pressure_input"
          },
          "C":  {
            "block": "masterfulmachinery:mixer_controller"
          },
          "M":  {
              "block": "create:basin"
          },
          "T":  {
            "tag": "superpack:mixer/optional/item_input"
          },
          "S":  {
              "block": "create:mechanical_mixer"
          },
          "F":  {
              "block": "masterfulmachinery:mixer_basic_port_botania_mana_input"
          },
          "P":  {
              "block": "immersiveengineering:steel_fence"
          },
          "Z":  {
              "tag": "superpack:mixer/item_input"
          },
          "W":  {
              "tag": "superpack:mixer/item_output"
          }
      }
  })

    //-----------------------------------------------------
    //Infuser Recipes
    //-----------------------------------------------------
    
        //Infuser Controller
        event.shaped('masterfulmachinery:infuser_controller', [
            'PEP',
            'GHG',
            'PFP'
          ], {
            P: 'superpackutils:infuser_casing',
            E: 'superpackutils:circuit_board',
            F: 'superpackutils:energetic_processor',
            G: 'mekanism:basic_control_circuit',
            H: 'mekanism:steel_casing'
        })
    
        //Infuser Gas Input
        event.shapeless('masterfulmachinery:infuser_basic_port_mekanism_gas_input', ['superpackutils:infuser_casing', 'thermal:lead_ingot', 'thermal:invar_ingot'])

        //Infuser Fluid Input
        event.shapeless('masterfulmachinery:infuser_basic_port_fluids_input', ['superpackutils:infuser_casing', 'thermal:lead_ingot', 'thermal:tin_ingot'])

        //Infuser Gas Output
        event.shapeless('masterfulmachinery:infuser_basic_port_mekanism_gas_output', ['superpackutils:infuser_casing', 'thermal:copper_ingot', 'thermal:invar_ingot'])

        //Infuser Energy Input
        event.shapeless('masterfulmachinery:infuser_basic_port_energy_input', ['superpackutils:infuser_casing', 'thermal:lead_ingot', 'superpackutils:electrical_platinum_ingot'])

        //Infuser Items Output
        event.shapeless('masterfulmachinery:infuser_basic_port_items_output', ['superpackutils:infuser_casing', 'thermal:copper_ingot'])

        //Infuser Items Input
        event.shapeless('masterfulmachinery:infuser_basic_port_items_input', ['superpackutils:infuser_casing', 'thermal:lead_ingot'])

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
              "TET",
              "IAO",
              "TCT"
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
                "TAT",
                "AFA",
                "TAT"
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
            "T":  {
              "tag": "superpack:infuser/optional/item_input"
            },
            "F":  {
                "block": "masterfulmachinery:infuser_basic_port_fluids_input"
            },
            "P":  {
                "block": "immersiveengineering:steel_fence"
            },
            "Z":  {
                "tag": "superpack:infuser/item_input"
            },
            "W":  {
                "tag": "superpack:infuser/item_output"
            },
            "O": {
                "block": "masterfulmachinery:infuser_basic_port_mekanism_gas_output"
            }
        }
    })
});