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

    //Elven Gateway
    event.remove({id: 'botania:alfheim_portal'})
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 1,
        "duration": 200,
        "starlight": 1400,
        "pattern": [
          "E___E",
          "_LTL_",
          "_TDT_",
          "_LTL_",
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
          "D": {
            "item": "botania:mana_diamond"
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
            "item": "astralsorcery:starmetal_ingot"
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

    //Bowl of Water
    event.recipes.create.filling('botania:water_bowl', ['minecraft:bowl', fluid.of('minecraft:water', 1000)]),

    //Mana Lens
    event.remove({output: 'botania:lens_normal'})
    event.shaped('botania:lens_normal', [' F ', 'FIF', ' F '], {
        F: 'botania:manasteel_ingot',
        I: 'astralsorcery:glass_lens'
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
    event.recipes.create.mixing(Item.of('botania:quartz_lavender', 4), ['botania:quartz_mana', 'botania:quartz_mana', 'botania:quartz_mana', 'botania:quartz_mana', 'botania:metamorphic_fungal_stone', 'minecraft:allium']).heated()

    //Red Quartz
    event.remove({id: 'botania:quartz_red'})
    event.recipes.create.mixing(Item.of('botania:quartz_red', 4), ['botania:quartz_lavender', 'botania:quartz_lavender', 'botania:quartz_lavender', 'botania:quartz_lavender', 'botania:metamorphic_mesa_stone', 'minecraft:redstone']).superheated()

    //Blaze Quartz
    event.remove({id: 'botania:quartz_blaze'})
    event.recipes.create.mixing(Item.of('botania:quartz_blaze', 4), ['botania:quartz_red', 'botania:quartz_red', 'botania:quartz_red', 'botania:quartz_red', 'botania:metamorphic_desert_stone', 'minecraft:blaze_powder']).superheated()

    //Elven Quartz
    event.remove({id: 'botania:elven_trade/elf_quartz'})
    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            {
                "item": "botania:metamorphic_plains_stone"
            },
          {
            "item": "botania:quartz_blaze"
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

    //Ender Eye
    event.remove({id: 'minecraft:ender_eye'})
    event.recipes.mekanism.combining('minecraft:ender_eye', 'minecraft:ender_pearl', 'botania:quartz_blaze')

});