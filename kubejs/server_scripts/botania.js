//priority: 1500

events.listen('recipes', function (event) {

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
        "__A__",
        "_BCB_",
        "_BBB_",
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

    //Elven Gateway
    event.remove({id: 'botania:alfheim_portal'})
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 1,
        "duration": 200,
        "starlight": 1400,
        "pattern": [
          "E___E",
          "_LAL_",
          "_TDT_",
          "_LAL_",
          "G___G"
        ],
        "key": {
          "E": {
            "item": "botania:rune_earth"
          },
          "G": {
            "item": "botania:rune_greed"
          },
          "T": {
            "item": "botania:terrasteel_ingot"
          },
          "L": {
            "item": "botania:glimmering_livingwood"
          },
          "A": {
            "item": "tconstruct:queens_slime_ingot"
          },
          "D": {
            "item": "superpackutils:starlight_shard"
          }
        },
        "output": [
          {
            "item": "botania:alfheim_portal",
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_discovery_central_beam",
          "astralsorcery:gateway_edge",
          "astralsorcery:built_in_effect_attunement_sparkle"
        ]
    })

    //Terrestrial Agglomeration Plate
    event.remove({id: 'botania:terra_plate'})
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 1,
        "duration": 200,
        "starlight": 600,
        "pattern": [
          "A___W",
          "_SSS_",
          "_DMD_",
          "_LCL_",
          "E___F"
        ],
        "key": {
          "E": {
            "item": "botania:rune_earth"
          },
          "W": {
            "item": "botania:rune_water"
          },
          "A": {
            "item": "botania:rune_air"
          },
          "F": {
            "item": "botania:rune_fire"
          },
          "M": {
            "item": "botania:rune_mana"
          },
          "S": {
            "item": "superpackutils:mythril_ingot"
          },
          "D": {
            "item": "astralsorcery:stardust"
          },
          "C": {
            "item": "tconstruct:cobalt_block"
          },
          "L": {
            "item": "botania:livingrock"
          }
        },
        "output": [
          {
            "item": "botania:terra_plate",
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_discovery_central_beam",
          "astralsorcery:gateway_edge",
          "astralsorcery:built_in_effect_attunement_sparkle"
        ]
    })

    //Glimmering Livingwood
    event.remove({output: 'botania:glimmering_livingwood'})
    event.shaped('botania:glimmering_livingwood', ['FIF', 'ILI', 'FIF'], {
        F: 'botania:fertilizer',
        I: 'astralsorcery:illumination_powder',
        L: '#botania:livingwood'
    }),

    //Glimmering Dreamwood
    event.remove({output: 'botania:glimmering_dreamwood'})
    event.shaped('botania:glimmering_dreamwood', ['FIF', 'ILI', 'FIF'], {
        F: 'eidolon:wicked_weave',
        I: 'astralsorcery:illumination_powder',
        L: 'botania:dreamwood'
    }),

    //Bowl of Water
    event.recipes.create.filling('botania:water_bowl', ['minecraft:bowl', fluid.of('minecraft:water', 1000)]),

    //Mana Lens
    event.remove({output: 'botania:lens_normal'})
    event.shaped('botania:lens_normal', [' F ', 'FIF', ' F '], {
        F: 'botania:manasteel_ingot',
        I: 'astralsorcery:glass_lens'
    }),

    //Alchemy Catalyst
    event.remove({output: 'botania:alchemy_catalyst'})
    event.shaped('botania:alchemy_catalyst', ['CAC', 'IBI', 'CAC'], {
          C: 'botania:livingrock',
          A: 'minecraft:gold_ingot',
          B: 'botania:mana_pearl',
          I: 'botania:brewery'
    }),

    //Manaweave Cloth
    event.remove({output: 'botania:manaweave_cloth'})
    event.shaped('botania:manaweave_cloth', ['ACA', 'CAC', 'ACA'], {
          C: 'immersiveengineering:hemp_fiber',
          A: 'botania:mana_string'
    }),

    //Mana Spreader
    event.remove({id: 'botania:mana_spreader'})
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

    //Livingwood Planks
    event.custom({
      "type": "botania:pure_daisy",
      "input": {
        "type": "block",
        "block": "astralsorcery:infused_wood_planks"
      },
      "output": {
        "name": "botania:livingwood_planks"
      }
    }),

    //Livingwood Planks Slab
    event.custom({
      "type": "botania:pure_daisy",
      "input": {
        "type": "block",
        "block": "astralsorcery:infused_wood_slab"
      },
      "output": {
        "name": "botania:livingwood_planks_slab"
      }
    }),

    //Livingwood Planks Stairs
    event.custom({
      "type": "botania:pure_daisy",
      "input": {
        "type": "block",
        "block": "astralsorcery:infused_wood_stairs"
      },
      "output": {
        "name": "botania:livingwood_planks_stairs"
      }
    }),

    //Livingrock Bricks
    event.custom({
      "type": "botania:pure_daisy",
      "input": {
        "type": "block",
        "block": "astralsorcery:marble_bricks"
      },
      "output": {
        "name": "botania:livingrock_bricks"
      }
    }),

    //Livingrock Slab
    event.custom({
      "type": "botania:pure_daisy",
      "input": {
        "type": "block",
        "block": "astralsorcery:marble_slab"
      },
      "output": {
        "name": "botania:livingrock_bricks_slab"
      }
    }),

    //Livingrock Stairs
    event.custom({
      "type": "botania:pure_daisy",
      "input": {
        "type": "block",
        "block": "astralsorcery:marble_stairs"
      },
      "output": {
        "name": "botania:livingrock_bricks_stairs"
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

    //Golden Seeds
    event.remove({output: 'botania:golden_seeds'})
    event.recipes.create.filling('botania:golden_seeds', ['botania:grass_seeds', fluid.of('tconstruct:molten_gold', 64)]),

    //Lavender Quartz
    event.remove({id: 'botania:quartz_lavender'})
    event.custom({
      "type": "botania:runic_altar",
      "output": {
        "item": "botania:quartz_lavender",
        "count": 4
      },
      "mana": 2000,
      "ingredients": [
        {
          "item": "botania:quartz_mana"
        },
        {
          "item": "botania:quartz_mana"
        },
        {
          "item": "botania:quartz_mana"
        },
        {
          "item": "botania:quartz_mana"
        },
        {
          "item": "botania:rune_mana"
        },
        {
          "item": "biomesoplenty:lavender"
        }
      ]
    })

    //Smokey Quartz
    event.remove({id: 'botania:quartz_dark'})
    event.custom({
      "type": "botania:runic_altar",
      "output": {
        "item": "botania:quartz_dark",
        "count": 4
      },
      "mana": 2000,
      "ingredients": [
        {
          "item": "botania:quartz_mana"
        },
        {
          "item": "botania:quartz_mana"
        },
        {
          "item": "botania:quartz_mana"
        },
        {
          "item": "botania:quartz_mana"
        },
        {
          "item": "botania:rune_pride"
        },
        {
          "item": "quark:biotite"
        }
      ]
    })

    //Red Quartz
    event.remove({id: 'botania:quartz_red'})
    event.custom({
      "type": "botania:runic_altar",
      "output": {
        "item": "botania:quartz_red",
        "count": 4
      },
      "mana": 2000,
      "ingredients": [
        {
          "item": "botania:quartz_mana"
        },
        {
          "item": "botania:quartz_mana"
        },
        {
          "item": "botania:quartz_mana"
        },
        {
          "item": "botania:quartz_mana"
        },
        {
          "item": "botania:rune_wrath"
        },
        {
          "item": "superpackutils:redstone_alloy_ingot"
        }
      ]
    })
  
    //Blaze Quartz
    event.remove({id: 'botania:quartz_blaze'})
    event.recipes.create.mixing('botania:quartz_blaze', ['botania:quartz_mana', fluid.of('tconstruct:blazing_blood', 28)]).heated()

    //Redstone Root
    event.remove({id: 'botania:redstone_root'})
    event.recipes.mekanism.metallurgic_infusing('botania:redstone_root', 'botania:living_root', 'mekanism:redstone', 40),

    //Elven Quartz
    event.remove({id: 'botania:elven_trade/elf_quartz'})
    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            {
                "item": "superpackutils:ender_pearl_nugget"
            },
            {
              "item": "botania:terrasteel_nugget"
          },
          {
            "item": "botania:quartz_mana"
          }
        ],
        "output": [
          {
            "item": "botania:quartz_elven"
          }
        ]
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
            "item": "superpackutils:rune"
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
            "item": "minecraft:nether_brick"
          },
          {
            "item": "minecraft:nether_wart"
          },
          {
            "item": "minecraft:quartz"
          },
          {
            "item": "superpackutils:rune"
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
            "item": "minecraft:fishing_rod"
          },
          {
            "item": "immersiveengineering:waterwheel_segment"
          },
          {
            "item": "minecraft:kelp"
          },
          {
            "item": "superpackutils:rune"
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
            "tag": "minecraft:saplings"
          },
          {
            "tag": "forge:stone"
          },
          {
            "item": "create:tree_fertilizer"
          },
          {
            "item": "superpackutils:rune"
          }
        ]
    })

    //Rune of Autumn
    event.remove({id: 'botania:runic_altar/autumn'})
    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "botania:rune_autumn",
          "count": 1
        },
        "mana": 8000,
        "ingredients": [
          {
            "item": "botania:rune_air"
          },
          {
            "item": "botania:rune_fire"
          },
          {
            "item": "create:honeyed_apple"
          },
          {
            "item": "farmersdelight:hot_cocoa"
          },
          {
            "item": "minecraft:spider_eye"
          },
          {
            "item": "superpackutils:mythril_ingot"
          }
        ]
    })

    //Rune of Summer
    event.remove({id: 'botania:runic_altar/summer'})
    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "botania:rune_summer",
          "count": 1
        },
        "mana": 8000,
        "ingredients": [
          {
            "item": "botania:rune_air"
          },
          {
            "item": "botania:rune_earth"
          },
          {
            "item": "farmersdelight:apple_pie"
          },
          {
            "item": "farmersdelight:melon_popsicle"
          },
          {
            "item": "minecraft:apple"
          },
          {
            "item": "superpackutils:mythril_ingot"
          }
        ]
    })

    //Rune of Spring
    event.remove({id: 'botania:runic_altar/spring'})
    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "botania:rune_spring",
          "count": 1
        },
        "mana": 8000,
        "ingredients": [
          {
            "item": "botania:rune_water"
          },
          {
            "item": "botania:rune_fire"
          },
          {
            "item": "farmersdelight:red_mushroom_colony"
          },
          {
            "item": "atmospheric:aloe_leaves"
          },
          {
            "item": "autumnity:sap_bottle"
          },
          {
            "item": "superpackutils:mythril_ingot"
          }
        ]
    })

    //Rune of Winter
    event.remove({id: 'botania:runic_altar/winter'})
    event.custom({
        "type": "botania:runic_altar",
        "output": {
          "item": "botania:rune_winter",
          "count": 1
        },
        "mana": 8000,
        "ingredients": [
          {
            "item": "botania:rune_water"
          },
          {
            "item": "botania:rune_earth"
          },
          {
            "item": "minecraft:cake"
          },
          {
            "item": "thermal:frost_melon_slice"
          },
          {
            "item": "minecraft:packed_ice"
          },
          {
            "item": "superpackutils:mythril_ingot"
          }
        ]
    })

    //Rune of Lust
    event.remove({id: 'botania:runic_altar/lust'})
    event.custom({
      "type": "botania:runic_altar",
      "output": {
        "item": "botania:rune_lust"
      },
      "mana": 12000,
      "ingredients": [
        {
          "tag": "forge:gems/dragonstone"
        },
        {
          "tag": "botania:runes/summer"
        },
        {
          "tag": "botania:runes/air"
        },
        {
          "item": "quark:violet_crystal_cluster"
        },
        {
          "item": "eidolon:lesser_soul_gem"
        }
      ]
    })

    //Rune of Gluttony
    event.remove({id: 'botania:runic_altar/gluttony'})
    event.custom({
      "type": "botania:runic_altar",
      "output": {
        "item": "botania:rune_gluttony"
      },
      "mana": 12000,
      "ingredients": [
        {
          "tag": "forge:gems/dragonstone"
        },
        {
          "tag": "botania:runes/fire"
        },
        {
          "tag": "botania:runes/winter"
        },
        {
          "item": "quark:white_crystal_cluster"
        },
        {
          "item": "eidolon:enchanted_ash"
        }
      ]
    })

    //Rune of Greed
    event.remove({id: 'botania:runic_altar/greed'})
    event.custom({
      "type": "botania:runic_altar",
      "output": {
        "item": "botania:rune_greed"
      },
      "mana": 12000,
      "ingredients": [
        {
          "tag": "forge:gems/dragonstone"
        },
        {
          "tag": "botania:runes/water"
        },
        {
          "tag": "botania:runes/spring"
        },
        {
          "item": "quark:green_crystal_cluster"
        },
        {
          "item": "eidolon:warped_sprouts"
        }
      ]
    })

    //Rune of Sloth
    event.remove({id: 'botania:runic_altar/sloth'})
    event.custom({
      "type": "botania:runic_altar",
      "output": {
        "item": "botania:rune_sloth"
      },
      "mana": 12000,
      "ingredients": [
        {
          "tag": "forge:gems/dragonstone"
        },
        {
          "tag": "botania:runes/air"
        },
        {
          "tag": "botania:runes/autumn"
        },
        {
          "item": "quark:orange_crystal_cluster"
        },
        {
          "item": "eidolon:fungus_sprouts"
        }
      ]
    })

    //Rune of Wrath
    event.remove({id: 'botania:runic_altar/wrath'})
    event.custom({
      "type": "botania:runic_altar",
      "output": {
        "item": "botania:rune_wrath"
      },
      "mana": 12000,
      "ingredients": [
        {
          "tag": "forge:gems/dragonstone"
        },
        {
          "tag": "botania:runes/earth"
        },
        {
          "tag": "botania:runes/winter"
        },
        {
          "item": "quark:red_crystal_cluster"
        },
        {
          "item": "eidolon:crimson_essence"
        }
      ]
    })

    //Rune of Envy
    event.remove({id: 'botania:runic_altar/envy'})
    event.custom({
      "type": "botania:runic_altar",
      "output": {
        "item": "botania:rune_envy"
      },
      "mana": 12000,
      "ingredients": [
        {
          "tag": "forge:gems/dragonstone"
        },
        {
          "tag": "botania:runes/water"
        },
        {
          "tag": "botania:runes/winter"
        },
        {
          "item": "quark:indigo_crystal_cluster"
        },
        {
          "item": "eidolon:shadow_gem"
        }
      ]
    })

    //Rune of Pride
    event.remove({id: 'botania:runic_altar/pride'})
    event.custom({
      "type": "botania:runic_altar",
      "output": {
        "item": "botania:rune_pride"
      },
      "mana": 12000,
      "ingredients": [
        {
          "tag": "forge:gems/dragonstone"
        },
        {
          "tag": "botania:runes/fire"
        },
        {
          "tag": "botania:runes/summer"
        },
        {
          "item": "quark:black_crystal_cluster"
        },
        {
          "item": "eidolon:death_essence"
        }
      ]
    })

});
