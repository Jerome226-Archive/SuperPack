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
    })

});