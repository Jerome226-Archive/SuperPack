//priority: 1500

events.listen('recipes', function (event) {
    //-----------------------------------------------------
    //Blood Magic
    //-----------------------------------------------------
 
  //Soul Snare
  event.remove({id: 'bloodmagic:altar/soul_snare'})
	event.recipes.bloodmagic.altar('bloodmagic:soulsnare', 'botania:mana_string').upgradeLevel(0).altarSyphon(500).consumptionRate(5).drainRate(1)
 
  event.shaped('bloodmagic:soulsnare', [' AB', 'AIA', 'CA '], {
    C: 'astralsorcery:starmetal_ingot',
    A: 'botania:redstone_root',
    B: 'botania:mana_string',
    I: 'botania:rune_envy'
  }),

	//Blank Slate
	event.remove({id: 'bloodmagic:altar/slate'})
	event.recipes.bloodmagic.altar('bloodmagic:blankslate', 'superpackutils:dyingrock').upgradeLevel(0).altarSyphon(1000).consumptionRate(5).drainRate(5)
 
	//Incense Altar
	event.remove({output: 'bloodmagic:incensealtar'})
	event.shaped('bloodmagic:incensealtar', [' P ', 'AIA', 'IZI'], {
        P: '#forge:ingots/brass',
        I: 'botania:livingrock',
        A: 'botania:livingrock_slab',
	      Z: 'bloodmagic:weakbloodorb'
  }),

  //Hellfire Forge
  event.remove({output: 'bloodmagic:soulforge'})
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 0,
    "duration": 100,
    "starlight": 1400,
    "pattern": [
      "_____",
      "_ABA_",
      "_ECE_",
      "_DID_",
      "_____"
    ],
    "key": {
      "A": {
        "item": "eidolon:ender_calx"
      },
      "B": {
        "item": "eidolon:shadow_gem"
      },
      "C": {
        "item": "bloodmagic:basemonstersoul"
      },
      "E": {
        "item": "botania:quartz_dark"
      },
      "I": {
        "item": "eidolon:soul_shard"
      },
      "D": {
        "item": "superpackutils:dyingrock"
      }
    },
    "output": [
      {
        "item": "bloodmagic:soulforge",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_discovery_central_beam"
    ]
  })

  //Alchemy Table
  event.remove({output: 'bloodmagic:alchemytable'})
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 0,
    "duration": 100,
    "starlight": 1500,
    "pattern": [
      "_____",
      "_DCD_",
      "_EIE_",
      "_ABA_",
      "_____"
    ],
    "key": {
      "A": {
        "item": "superpackutils:dyingrock"
      },
      "B": {
        "item": "bloodmagic:blankslate"
      },
      "C": {
        "item": "botania:brewery"
      },
      "E": {
        "item": "botania:rune_wrath"
      },
      "I": {
        "item": "botania:alchemy_catalyst"
      },
      "D": {
        "item": "botania:vial"
      }
    },
    "output": [
      {
        "item": "bloodmagic:alchemytable",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_discovery_central_beam"
    ]
  })

    //Slate-Infused Vial
    event.remove({id: 'bloodmagic:alchemytable/slate_vial'})
    event.custom({
        "type": "bloodmagic:alchemytable",
        "input": [
          {
            "item": "bloodmagic:blankslate"
          },
          {
            "item": "botania:vial"
          },
          {
            "tag": "forge:dyes/red"
          }
        ],
        "output": {
          "item": "bloodmagic:slate_vial",
          "count": 1
        },
        "syphon": 500,
        "ticks": 200,
        "upgradeLevel": 1
    })
 
  //Weak Blood Orb
  event.remove({id: 'bloodmagic:altar/weakbloodorb'})
  event.recipes.bloodmagic.altar('bloodmagic:weakbloodorb', 'botania:mana_diamond').upgradeLevel(1).altarSyphon(2000).consumptionRate(5).drainRate(1)

	//Inscription Tool Air
	event.remove({id: 'bloodmagic:altar/air_tool'})
	event.recipes.bloodmagic.altar('bloodmagic:airscribetool', 'botania:rune_air').upgradeLevel(2).altarSyphon(1000).consumptionRate(5).drainRate(5)
 
	//Inscription Tool Fire
	event.remove({id: 'bloodmagic:altar/fire_tool'})
	event.recipes.bloodmagic.altar('bloodmagic:firescribetool', 'botania:rune_fire').upgradeLevel(2).altarSyphon(1000).consumptionRate(5).drainRate(5)
 
	//Inscription Tool Water
	event.remove({id: 'bloodmagic:altar/water_tool'})
	event.recipes.bloodmagic.altar('bloodmagic:waterscribetool', 'botania:rune_water').upgradeLevel(2).altarSyphon(1000).consumptionRate(5).drainRate(5)
 
	//Inscription Tool Earth
	event.remove({id: 'bloodmagic:altar/earth_tool'})
	event.recipes.bloodmagic.altar('bloodmagic:earthscribetool', 'botania:rune_earth').upgradeLevel(2).altarSyphon(1000).consumptionRate(5).drainRate(5)
 
	//Inscription Tool Dusk
	event.remove({id: 'bloodmagic:altar/dusk_tool'})
	event.recipes.bloodmagic.altar('bloodmagic:duskscribetool', 'botania:rune_pride').upgradeLevel(3).altarSyphon(2000).consumptionRate(20).drainRate(10)

    //Blood Altar
    event.remove({output: 'bloodmagic:altar'})
    event.custom({
      "type": "astralsorcery:altar",
      "altar_type": 2,
      "duration": 500,
      "starlight": 5000,
      "pattern": [
        "AB_BA",
        "CDZDC",
        "_FEF_",
        "HGIGH",
        "CC_CC"
      ],
      "key": {
        "A": {
          "item": "pneumaticcraft:reinforced_brick_tile"
        },
        "B": {
          "item": "pneumaticcraft:reinforced_stone_slab"
        },
        "C": {
          "item": "superpackutils:dyingrock"
        },
        "D": {
          "item": "eidolon:crimson_essence"
        },
        "E": {
          "item": "create:fluid_tank"
        },
        "F": {
          "item": "botania:rune_wrath"
        },
        "G": {
          "item": "tconstruct:blazewood"
        },
        "Z": {
          "item": "bloodmagic:lavacrystal"
        },
        "I": {
          "item": "botania:runic_altar"
        },
        "H": {
          "item": "superpackutils:blood_crystal"
        }
      },
      "output": [
        {
          "item": "bloodmagic:altar",
          "count": 1
        }
      ],
      "effects": [
        "astralsorcery:built_in_effect_constellation_finish",
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:altar_default_sparkle",
        "astralsorcery:built_in_effect_constellation_lines",
        "astralsorcery:built_in_effect_attunement_sparkle"
      ]
  })

  //Lava Crystal
  event.remove({output: 'bloodmagic:lavacrystal'})
  event.recipes.bloodmagic.soulforge('bloodmagic:lavacrystal', ['bloodmagic:reagentlava', 'botania:quartz_blaze', 'eidolon:arcane_gold_ingot', 'superpackutils:alchemical_powder']).minimumDrain(30).drain(10)

});