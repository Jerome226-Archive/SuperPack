//priority: 1500

events.listen('recipes', function (event) {

    //-----------------------------------------------------
    //Astral Sorcery
    //-----------------------------------------------------

    //Wand Recipe Removal
    event.remove({id: 'astralsorcery:altar/wand'})
    event.remove({output: 'astralsorcery:wand'})
    event.remove({id: 'astralsorcery:altar/illumination_wand'})
    event.remove({id: 'astralsorcery:altar/architect_wand'})
    event.remove({id: 'astralsorcery:altar/exchange_wand'})
    event.remove({id: 'astralsorcery:altar/grapple_wand'})
    event.remove({id: 'astralsorcery:altar/blink_wand'})

    //Luminous Crafting Table
    event.remove({id: 'astralsorcery:block_transmutation/craftingtable_altar'})
    event.custom({
        "type": "astralsorcery:block_transmutation",
        "input": [
          {
            "block": "eidolon:worktable",
            "display": {
              "item": "eidolon:worktable",
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
    }),

    //Black Marble
    event.recipes.mekanism.metallurgic_infusing(Item.of('astralsorcery:black_marble_raw', 8), Item.of('astralsorcery:marble_raw', 8), 'mekanism:carbon', 10),
  
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
          "_ZDZ_",
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
            "item": "superpackutils:mythril_ingot"
          },
          "L": {
            "item": "botania:mana_quartz"
          },
          "Z": {
            "item": "botania:lavender_quartz"
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

    //Celestial Altar
    event.remove({id: 'astralsorcery:altar/altar_constellation'})
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 1,
        "duration": 200,
        "starlight": 1400,
        "pattern": [
          "A___A",
          "_BDB_",
          "_CFC_",
          "_ELE_",
          "N___N"
        ],
        "key": {
          "A": {
            "item": "botania:terrasteel_ingot"
          },
          "B": {
            "item": "botania:red_quartz"
          },
          "C": {
            "item": "botania:pixie_dust"
          },
          "D": {
            "item": "astralsorcery:starmetal_ingot"
          },
          "E": {
            "item": "botania:sunny_quartz"
          },
          "L": {
            "item": "botania:elementium_ingot"
          },
          "N": {
            "item": "botania:dragonstone"
          },
          "F": {
            "type": "astralsorcery:crystal",
            "hasToBeAttuned": false,
            "hasToBeCelestial": false,
            "canBeAttuned": true,
            "canBeCelestialCrystal": true
          }
        },
        "recipe_class": "astralsorcery:constellation_upgrade",
        "output": [
          {
            "item": "astralsorcery:altar_constellation",
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_discovery_central_beam",
          "astralsorcery:upgrade_altar",
          "astralsorcery:built_in_effect_attunement_sparkle"
        ]
    })

    //Igneous Marble Generation
    event.custom({
      "type": "thermal:rock_gen",
      "adjacent": "minecraft:water",
      "below": "create:limestone",
      "result": {
        "item": "astralsorcery:marble_raw"
      }
    })

    //Glass Lens
    event.remove({id: 'astralsorcery:altar/glass_lens'})
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 0,
        "duration": 100,
        "starlight": 200,
        "pattern": [
          "_____",
          "__A__",
          "_ABA_",
          "__A__",
          "_____"
        ],
        "key": {
          "A": {
            "item": "astralsorcery:aquamarine"
          },
          "B": {
            "item": "botania:mana_glass_pane"
          }
        },
        "output": [
          {
            "item": "astralsorcery:glass_lens",
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_discovery_central_beam"
        ]
    })

    event.remove({id: 'astralsorcery:infuser/glass_pane'})
    event.custom({
      "type": "astralsorcery:infuser",
      "fluidInput": "astralsorcery:liquid_starlight",
      "input": {
        "item": "botania:mana_glass_pane"
      },
      "output": {
        "item": "astralsorcery:glass_lens",
        "count": 1
      },
      "consumptionChance": 0.1,
      "duration": 100,
      "consumeMultipleFluids": false,
      "acceptChaliceInput": true,
      "copyNBTToOutputs": false
    })

    //Attunement Altar
    event.remove({id: 'astralsorcery:altar/attunement_altar'})
    event.custom({
      "type": "astralsorcery:altar",
      "altar_type": 1,
      "duration": 200,
      "starlight": 1600,
      "pattern": [
        "A___A",
        "_____",
        "_ENE_",
        "_PCP_",
        "B___B"
      ],
      "key": {
        "A": {
          "item": "astralsorcery:aquamarine"
        },
        "B": {
          "item": "tconstruct:tinkers_bronze_ingot"
        },
        "N": {
          "item": "astralsorcery:nocturnal_powder"
        },
        "C": {
          "item": "astralsorcery:spectral_relay"
        },
        "P": {
          "item": "create:brass_ingot"
        },
        "E": {
          "tag": "astralsorcery:starmetal"
        }
      },
      "output": [
        {
          "item": "astralsorcery:attunement_altar",
          "count": 1
        }
      ],
      "effects": [
        "astralsorcery:pillar_sparkle",
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:altar_default_lightbeams",
        "astralsorcery:altar_default_sparkle",
        "astralsorcery:built_in_effect_attunement_sparkle"
      ]
    })


});