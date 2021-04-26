//priority: 1500

events.listen('recipes', function (event) {

    //-----------------------------------------------------
    //Astral Sorcery
    //-----------------------------------------------------

    //Luminous Crafting Table Compat
    event.custom({
        "type": "astralsorcery:block_transmutation",
        "input": [
          {
            "block": "tconstruct:crafting_station",
            "display": {
              "item": "tconstruct:crafting_station",
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
          "_LDL_",
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
            "item": "botania:manasteel_ingot"
          },
          "L": {
            "item": "botania:livingwood"
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
            "item": "astralsorcery:starmetal_ingot"
          },
          "C": {
            "item": "botania:pixie_dust"
          },
          "D": {
            "item": "astralsorcery:marble_chiseled"
          },
          "E": {
            "item": "botania:elementium_ingot"
          },
          "L": {
            "item": "botania:livingrock"
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

});