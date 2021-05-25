//priority: 1500

events.listen('recipes', function (event) {

    //-----------------------------------------------------
    //Inscriber Recipes
    //-----------------------------------------------------

        //Inscriber Controller
        event.recipes.create.mechanical_crafting('masterfulmachinery:inscriber_controller', [
            'PEP',
            'GHG',
            'PEP'
          ], {
            P: 'superpackutils:inscriber_casing',
            E: 'superpackutils:copper_solenoid',
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
                "block": "minecraft:piston"
            },
            "O": {
                "block": "masterfulmachinery:inscriber_basic_port_items_output"
            }
        }
    })

    //-----------------------------------------------------
    //Metallurgic Fabricator Recipes
    //-----------------------------------------------------
    
        //Metallurgic Fabricator Controller
        event.recipes.create.mechanical_crafting('masterfulmachinery:metallurgic_fabricator_controller', [
            ' PEP ',
            'CGHGD',
            ' PEP '
          ], {
            P: 'superpackutils:metallurgic_casing',
            C: 'refinedstorage:construction_core',
            D: 'refinedstorage:destruction_core',
            E: 'superpackutils:copper_solenoid',
            G: 'mekanism:basic_control_circuit',
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
    //Assembling Machine
    //-----------------------------------------------------

    event.custom({
        "type": "masterfulmachinery:machine_structure",
        "id": "assembler",
        "controllerId": "assembler",
        "name": "Assembling Machine",
        "layout": [
          [
            " BBB ",
            "BBBBB",
            "BBZBB",
            "BBBBB",
            " BBB "
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
            " BBB ",
            "BBBBB",
            "BBLBB",
            "BBBBB",
            " BBB"
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
            "block": "masterfulmachinery:assembler_basic_port_items_input"
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
            "block": "masterfulmachinery:assembler_basic_port_items_output"
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
        event.recipes.create.mechanical_crafting('masterfulmachinery:improved_metallurgic_fabricator_controller', [
            ' PEP ',
            'CGHGD',
            ' PEP '
          ], {
            P: 'superpackutils:improved_metallurgic_casing',
            C: 'refinedstorage:construction_core',
            D: 'refinedstorage:destruction_core',
            E: 'superpackutils:copper_solenoid',
            G: 'mekanism:advanced_control_circuit',
            H: 'mekanism:steel_casing'
        })
    
        //Improved Metallurgic Fabricator Item Output
        event.shaped('masterfulmachinery:improved_metallurgic_fabricator_basic_port_items_output', ['ACA', 'CIC', 'ACA'], {
          I: 'create:integrated_circuit',
          A: 'thermal:copper_ingot',
          C: 'superpackutils:improved_metallurgic_casing'
      }),
    
        //Improved Metallurgic Fabricator Item Input
        event.shaped('masterfulmachinery:improved_metallurgic_fabricator_basic_port_items_input', ['ACA', 'CIC', 'ACA'], {
          I: 'create:integrated_circuit',
          A: 'tconstruct:cobalt_ingot',
          C: 'superpackutils:improved_metallurgic_casing'
      }),
    
        //Improved Metallurgic Fabricator Energy Input
        event.shaped('masterfulmachinery:improved_metallurgic_fabricator_basic_port_energy_input', ['ACA', 'CIC', 'ACA'], {
          I: 'create:integrated_circuit',
          A: 'mekanism:energy_tablet',
          C: 'superpackutils:improved_metallurgic_casing'
      }),

        //Improved Metallurgic Fabricator Presssure Input
        event.shaped('masterfulmachinery:improved_metallurgic_fabricator_basic_port_pncr_pressure_input', ['ACA', 'CIC', 'ACA'], {
            I: 'create:integrated_circuit',
            A: 'pneumaticcraft:ingot_iron_compressed',
            C: 'superpackutils:improved_metallurgic_casing'
        }),
  

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
            "F": {
                "block": "mekanism:metallurgic_infuser"
            },
            "P": {
                "block": "masterfulmachinery:improved_metallurgic_fabricator_basic_port_pncr_pressure_input"
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
    //Collector Recipes
    //-----------------------------------------------------
    
        //Collector Controller
        event.recipes.create.mechanical_crafting('masterfulmachinery:collector_controller', [
            ' PEP ',
            'CGHGD',
            ' PEP '
          ], {
            P: 'mekanism:pressure_disperser',
            C: 'refinedstorage:construction_core',
            D: 'refinedstorage:destruction_core',
            E: 'superpackutils:copper_solenoid',
            G: 'mekanism:advanced_control_circuit',
            H: 'refinedstorage:machine_casing'
        })
    
        //Collector Gas Output
        event.shaped('masterfulmachinery:collector_basic_port_mekanism_gas_output', ['OCO', 'CIC', 'ACA'], {
          I: 'create:integrated_circuit',
          A: 'mekanism:basic_chemical_tank',
          O: 'thermal:copper_ingot',
          C: 'mekanism:pressure_disperser'
      }),

        //Collector Gas Input
        event.shaped('masterfulmachinery:collector_basic_port_mekanism_gas_input', ['OCO', 'CIC', 'ACA'], {
            I: 'create:integrated_circuit',
            A: 'mekanism:basic_chemical_tank',
            O: 'tconstruct:cobalt_ingot',
            C: 'mekanism:pressure_disperser'
        }),
    
        //Collector Energy Input
        event.shaped('masterfulmachinery:collector_basic_port_energy_input', ['ACA', 'CIC', 'ACA'], {
          I: 'create:integrated_circuit',
          A: 'mekanism:energy_tablet',
          C: 'mekanism:pressure_disperser'
      }),

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
    //Infuser Recipes
    //-----------------------------------------------------
    
        //Infuser Controller
        event.recipes.create.mechanical_crafting('masterfulmachinery:infuser_controller', [
            ' PEP ',
            'CGHGD',
            ' PEP '
          ], {
            P: 'superpackutils:infuser_casing',
            C: 'refinedstorage:construction_core',
            D: 'refinedstorage:destruction_core',
            E: 'superpackutils:copper_solenoid',
            G: 'mekanism:basic_control_circuit',
            H: 'mekanism:steel_casing'
        })
    
        //Infuser Gas Input
        event.shaped('masterfulmachinery:infuser_basic_port_mekanism_gas_input', ['OCO', 'CIC', 'ACA'], {
            I: 'create:integrated_circuit',
            A: 'mekanism:basic_chemical_tank',
            O: 'tconstruct:cobalt_ingot',
            C: 'superpackutils:infuser_casing'
        }),

        //Infuser Fluid Input
        event.shaped('masterfulmachinery:infuser_basic_port_fluids_input', ['OCO', 'CIC', 'ACA'], {
            I: 'create:integrated_circuit',
            A: 'create:fluid_tank',
            O: 'tconstruct:cobalt_ingot',
            C: 'superpackutils:infuser_casing'
        }),

        //Infuser Gas Output
        event.shaped('masterfulmachinery:infuser_basic_port_mekanism_gas_output', ['OCO', 'CIC', 'ACA'], {
            I: 'create:integrated_circuit',
            A: 'mekanism:basic_chemical_tank',
            O: 'thermal:copper_ingot',
            C: 'superpackutils:infuser_casing'
        }),
    
        //Infuser Energy Input
        event.shaped('masterfulmachinery:infuser_basic_port_energy_input', ['ACA', 'CIC', 'ACA'], {
          I: 'create:integrated_circuit',
          A: 'mekanism:energy_tablet',
          C: 'superpackutils:infuser_casing'
        }),

        //Infuser Items Output
        event.shaped('masterfulmachinery:infuser_basic_port_items_output', ['ACA', 'CIC', 'ACA'], {
            I: 'create:integrated_circuit',
            A: 'thermal:copper_ingot',
            C: 'superpackutils:infuser_casing'
        }),

        //Infuser Items Input
        event.shaped('masterfulmachinery:infuser_basic_port_items_input', ['ACA', 'CIC', 'ACA'], {
            I: 'create:integrated_circuit',
            A: 'tconstruct:cobalt_ingot',
            C: 'superpackutils:infuser_casing'
        }),

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
                "block": "immersiveengineering:heavy_engineering"
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
});