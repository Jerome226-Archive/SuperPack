//priority: 1500

events.listen('recipes', function (event) {

    //Ore Piece Removal 
    event.remove({ id: 'exnihilosequentia:sieve/ens_piece_aluminum_gravel' });
    event.remove({ id: 'exnihilosequentia:sieve/ens_piece_copper_gravel' });
    event.remove({ id: 'exnihilosequentia:sieve/ens_piece_gold_crushed_netherrack' });
    event.remove({ id: 'exnihilosequentia:sieve/ens_piece_gold_gravel' });
    event.remove({ id: 'exnihilosequentia:sieve/ens_piece_iron_gravel' });
    event.remove({ id: 'exnihilosequentia:sieve/ens_piece_iron_sand' });
    event.remove({ id: 'exnihilosequentia:sieve/ens_piece_lead_gravel' });
    event.remove({ id: 'exnihilosequentia:sieve/ens_piece_nickel_gravel' });
    event.remove({ id: 'exnihilosequentia:sieve/ens_piece_platinum_gravel' });
    event.remove({ id: 'exnihilosequentia:sieve/ens_piece_silver_gravel' });
    event.remove({ id: 'exnihilosequentia:sieve/ens_piece_tin_gravel' });
    event.remove({ id: 'exnihilosequentia:sieve/ens_piece_uranium_gravel' });
    event.remove({ id: 'exnihilosequentia:sieve/ens_piece_zinc_gravel' });
    event.remove({ id: 'exnihilomekanism:sieve/ens_piece_osmium_1' });
    event.remove({ id: 'exnihilotinkers:sieve/ens_piece_cobalt' });
    event.remove({ id: 'exnihilosequentia:sieve/ens_glowstone' });
    event.remove({ id: 'exnihilosequentia:sieve/ens_gunpowder' });
    event.remove({ id: 'exnihilosequentia:sieve/ens_redstone' });
    event.remove({ id: 'exnihilosequentia:sieve/ens_blaze_powder' });

    //Crucible Heat Sources
    event.custom({
        "type": "exnihilosequentia:heat",
        "block": "tconstruct:blazing_blood",
        "amount": 8
    });

    //Dust
    event.remove({ id: 'exnihilosequentia:hammer/ens_dust' });
    event.custom({
        "type": "exnihilosequentia:fluid_item",
        "fluid": {
          "fluid": "exnihilosequentia:sea_water"
        },
        "input": {
          "item": "create:limesand"
        },
        "result": {
          "item": "exnihilosequentia:dust"
        }
    });

    //End Sand
    event.custom({
      "type": "exnihilosequentia:fluid_item",
      "fluid": {
        "fluid": "exnihilosequentia:witchwater"
      },
      "input": {
          "item": "create:limesand"
      },
      "result": {
        "item": "byg:end_sand"
      }
  });

    function hammerCrushing(needSmelting, name, stoneItem, cobblestoneItem) {
    
    //Hammer Crushing
    event.custom({
        "type": "exnihilosequentia:hammer",
        "results": [
          {
            "chance": 1.0,
            "item": `${cobblestoneItem}`,
            "count": 1
          }
        ],
        "input": {
          "item": `${stoneItem}`
        }
    });

    //Recipe Removal
    event.remove({ id: `exnihilosequentia:hammer/ens_${name}` });
    event.remove({ id: `create:${name}_cobblestone_from_${name}_stonecutting` });

    //Ceramics Kiln
    event.custom({
      "type": "ceramics:kiln",
      "ingredient": {
        "item": `${cobblestoneItem}`
      },
      "result": `${stoneItem}`,
      "experience": 0.1,
      "cookingtime": 100
    })

    if (needSmelting == true) {

    //Smelting Recipe
    event.smelting(`${stoneItem}`, `${cobblestoneItem}`).xp(0.1)

    }

    }

    hammerCrushing(false, 'metamorphic_forest', 'botania:metamorphic_forest_stone', 'botania:metamorphic_forest_cobblestone')
    hammerCrushing(false, 'metamorphic_plains', 'botania:metamorphic_plains_stone', 'botania:metamorphic_plains_cobblestone')
    hammerCrushing(false, 'metamorphic_mountain', 'botania:metamorphic_mountain_stone', 'botania:metamorphic_mountain_cobblestone')
    hammerCrushing(false, 'metamorphic_fungal', 'botania:metamorphic_fungal_stone', 'botania:metamorphic_fungal_cobblestone')
    hammerCrushing(false, 'metamorphic_swamp', 'botania:metamorphic_swamp_stone', 'botania:metamorphic_swamp_cobblestone')
    hammerCrushing(false, 'metamorphic_desert', 'botania:metamorphic_desert_stone', 'botania:metamorphic_desert_cobblestone')
    hammerCrushing(false, 'metamorphic_taiga', 'botania:metamorphic_taiga_stone', 'botania:metamorphic_taiga_cobblestone')
    hammerCrushing(false, 'metamorphic_mesa', 'botania:metamorphic_mesa_stone', 'botania:metamorphic_mesa_cobblestone')
    hammerCrushing(false, 'metamorphic_mesa', 'botania:metamorphic_mesa_stone', 'botania:metamorphic_mesa_cobblestone')
    hammerCrushing(false, 'granite', 'minecraft:granite', 'create:granite_cobblestone')
    hammerCrushing(false, 'diorite', 'minecraft:diorite', 'create:diorite_cobblestone')
    hammerCrushing(false, 'andesite', 'minecraft:andesite', 'create:andesite_cobblestone')
    hammerCrushing(false, 'limestone', 'create:limestone', 'create:limestone_cobblestone')
    hammerCrushing(false, 'weathered_limestone', 'create:weathered_limestone', 'create:weathered_limestone_cobblestone')
    hammerCrushing(false, 'dolomite', 'create:dolomite', 'create:dolomite_cobblestone')
    hammerCrushing(false, 'gabbro', 'create:gabbro', 'create:gabbro_cobblestone')
    hammerCrushing(false, 'scoria', 'create:scoria', 'create:scoria_cobblestone')
    hammerCrushing(true, 'dark_scoria', 'create:dark_scoria', 'create:dark_scoria_cobblestone')
    hammerCrushing(false, 'dacite', 'byg:dacite', 'byg:dacite_cobblestone')
    hammerCrushing(false, 'scoria', 'byg:scoria_stone', 'byg:scoria_cobblestone')
    hammerCrushing(false, 'seared', 'tconstruct:seared_stone', 'tconstruct:seared_cobble')

    //Crushed Endstone
    event.remove({ id: 'exnihilosequentia:hammer/ens_end_stone' });
    event.recipes.create.mixing(Item.of('exnihilosequentia:crushed_end_stone', 2), ['minecraft:end_stone', 'byg:end_sand']);

    //Crushed Netherrack
    event.remove({ id: 'exnihilosequentia:hammer/ens_netherrack' });
    event.recipes.create.mixing(Item.of('exnihilosequentia:crushed_netherrack', 2), ['minecraft:netherrack', 'minecraft:soul_sand']);

    //Salt
    event.remove({ id: 'exnihilomekanism:sieve/ens_piece_osmium_3' });
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.01,
            "mesh": "flint"
          },
          {
            "chance": 0.02,
            "mesh": "iron"
          },
          {
            "chance": 0.4,
            "mesh": "diamond"
          }
        ],
        "input": {
          "item": "exnihilosequentia:dust"
        },
        "result": {
          "item": "mekanism:salt"
        }
    });

    //Prismarine Crystals
    event.remove({ id: 'exnihilosequentia:sieve/ens_prismarine_crystals' });
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.01,
            "mesh": "diamond"
          }
        ],
        "input": {
            "item": "exnihilosequentia:dust"
        },
        "result": {
          "item": "minecraft:prismarine_crystals"
        }
    });

    //Prismarine Shards
    event.remove({ id: 'exnihilosequentia:sieve/ens_prismarine_shard' });
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.02,
            "mesh": "iron"
          },
          {
            "chance": 0.04,
            "mesh": "diamond"
          }
        ],
        "input": {
            "item": "exnihilosequentia:dust"
        },
        "result": {
          "item": "minecraft:prismarine_shard"
        }
    });

    //Aquamarine
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.02,
            "mesh": "iron"
          },
          {
            "chance": 0.04,
            "mesh": "diamond"
          }
        ],
        "input": {
            "item": "exnihilosequentia:dust"
        },
        "result": {
          "item": "astralsorcery:aquamarine"
        }
    });

    //Sea Pickle Egg
    event.remove({ id: 'exnihilosequentia:sieve/ens_seed_pickle' });
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.05,
            "mesh": "string"
          }
        ],
        "input": {
            "item": "exnihilosequentia:dust"
        },
        "result": {
          "item": "exnihilosequentia:seed_pickle"
        },
        "waterlogged": true
    });

    //Kelp Seeds
    event.remove({ id: 'exnihilosequentia:sieve/ens_seed_kelp' });
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.05,
            "mesh": "string"
          }
        ],
        "input": {
            "item": "exnihilosequentia:dust"
        },
        "result": {
          "item": "exnihilosequentia:seed_kelp"
        },
        "waterlogged": true
    });

    //Blue Coral
    event.remove({ id: 'exnihilosequentia:sieve/ens_seed_blue_coral' });
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.05,
            "mesh": "iron"
          }
        ],
        "input": {
           "item": "exnihilosequentia:dust"
        },
        "result": {
          "item": "exnihilosequentia:seed_blue_coral"
        },
        "waterlogged": true
    });

    //Pink Coral
    event.remove({ id: 'exnihilosequentia:sieve/ens_seed_pink_coral' });
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.05,
            "mesh": "iron"
          }
        ],
        "input": {
            "item": "exnihilosequentia:dust"
        },
        "result": {
          "item": "exnihilosequentia:seed_pink_coral"
        },
        "waterlogged": true
    });

    //Purple Coral
    event.remove({ id: 'exnihilosequentia:sieve/ens_seed_purple_coral' });
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.05,
            "mesh": "iron"
          }
        ],
        "input": {
            "item": "exnihilosequentia:dust"
        },
        "result": {
          "item": "exnihilosequentia:seed_purple_coral"
        },
        "waterlogged": true
    });

    //Yellow Coral
    event.remove({ id: 'exnihilosequentia:sieve/ens_seed_yellow_coral' });
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.05,
            "mesh": "iron"
          }
        ],
        "input": {
            "item": "exnihilosequentia:dust"
        },
        "result": {
          "item": "exnihilosequentia:seed_yellow_coral"
        },
        "waterlogged": true
    });

    //Seagrass
    event.remove({ id: 'exnihilosequentia:sieve/ens_sea_grass' });
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.05,
            "mesh": "iron"
          }
        ],
        "input": {
            "item": "exnihilosequentia:dust"
        },
        "result": {
          "item": "minecraft:seagrass"
        },
        "waterlogged": true
    });

    //Apatite
    event.remove({ id: 'exnihilothermal:sieve/ens_apatite' });
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.05,
            "mesh": "flint"
          },
          {
            "chance": 0.1,
            "mesh": "iron"
          },
          {
            "chance": 0.15,
            "mesh": "diamond"
          }
        ],
        "input": {
            "item": "superpackutils:industrial_sand"
        },
        "result": {
          "item": "thermal:apatite"
        }
    });

    //Cinnabar
    event.remove({ id: 'exnihilothermal:sieve/ens_cinnabar' });
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.05,
            "mesh": "flint"
          },
          {
            "chance": 0.1,
            "mesh": "iron"
          },
          {
            "chance": 0.15,
            "mesh": "diamond"
          }
        ],
        "input": {
            "item": "superpackutils:industrial_sand"
        },
        "result": {
          "item": "thermal:cinnabar"
        }
    });

    //Niter
    event.remove({ id: 'exnihilothermal:sieve/ens_niter' });
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.05,
            "mesh": "flint"
          },
          {
            "chance": 0.1,
            "mesh": "iron"
          },
          {
            "chance": 0.15,
            "mesh": "diamond"
          }
        ],
        "input": {
            "item": "superpackutils:industrial_sand"
        },
        "result": {
          "item": "thermal:niter"
        }
    });

    //Sulfur
    event.remove({ id: 'exnihilothermal:sieve/ens_sulfur' });
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.05,
            "mesh": "flint"
          },
          {
            "chance": 0.1,
            "mesh": "iron"
          },
          {
            "chance": 0.15,
            "mesh": "diamond"
          }
        ],
        "input": {
            "item": "superpackutils:industrial_sand"
        },
        "result": {
          "item": "thermal:sulfur"
        }
    });

    //Ruby
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.05,
            "mesh": "flint"
          },
          {
            "chance": 0.1,
            "mesh": "iron"
          },
          {
            "chance": 0.15,
            "mesh": "diamond"
          }
        ],
        "input": {
            "item": "superpackutils:industrial_sand"
        },
        "result": {
          "item": "thermal:ruby"
        }
    });

    //Sapphire
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.05,
            "mesh": "flint"
          },
          {
            "chance": 0.1,
            "mesh": "iron"
          },
          {
            "chance": 0.15,
            "mesh": "diamond"
          }
        ],
        "input": {
            "item": "superpackutils:industrial_sand"
        },
        "result": {
          "item": "thermal:sapphire"
        }
    });

    //Coal
    event.remove({ id: 'exnihilosequentia:sieve/ens_coal' });
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.125,
            "mesh": "flint"
          }
        ],
        "input": {
            "item": "superpackutils:industrial_sand"
        },
        "result": {
          "item": "minecraft:coal"
        }
    });

    //Diamond
    event.remove({ id: 'exnihilosequentia:sieve/ens_diamond' });
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.008,
            "mesh": "iron"
          },
          {
            "chance": 0.016,
            "mesh": "diamond"
          }
        ],
        "input": {
            "item": "superpackutils:industrial_sand"
        },
        "result": {
          "item": "minecraft:diamond"
        }
    });

    //Emerald
    event.remove({ id: 'exnihilosequentia:sieve/ens_emerald' });
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.008,
            "mesh": "iron"
          },
          {
            "chance": 0.016,
            "mesh": "diamond"
          }
        ],
        "input": {
            "item": "superpackutils:industrial_sand"
        },
        "result": {
          "item": "minecraft:emerald"
        }
    });

    //Fluorite
    event.remove({ id: 'exnihilomekanism:sieve/ens_piece_osmium_2' });
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.025,
            "mesh": "iron"
          },
          {
            "chance": 0.05,
            "mesh": "diamond"
          }
        ],
        "input": {
            "item": "superpackutils:industrial_sand"
        },
        "result": {
          "item": "mekanism:fluorite_gem"
        }
    });

    //Lapis Lazuli
    event.remove({ id: 'exnihilosequentia:sieve/ens_lapis_lazuli' });
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.05,
            "mesh": "flint"
          }
        ],
        "input": {
            "item": "superpackutils:industrial_sand"
        },
        "result": {
          "item": "minecraft:lapis_lazuli"
        }
    });

    //Ender Biotite
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.01,
            "mesh": "flint"
          },
          {
            "chance": 0.02,
            "mesh": "iron"
          },
          {
            "chance": 0.4,
            "mesh": "diamond"
          }
        ],
        "input": {
          "item": "exnihilosequentia:crushed_end_stone"
        },
        "result": {
          "item": "quark:biotite"
        }
    });

    //Quartz
    event.remove({ id: 'exnihilosequentia:sieve/ens_quartz' });
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 1.0,
            "mesh": "flint"
          },
          {
            "chance": 0.33,
            "mesh": "flint"
          },
          {
            "chance": 1.0,
            "mesh": "diamond"
          },
          {
            "chance": 0.8,
            "mesh": "diamond"
          }
        ],
        "input": {
          "item": "exnihilosequentia:crushed_netherrack"
        },
        "result": {
          "item": "minecraft:quartz"
        }
    });

    //Ghast Tear
    event.remove({ id: 'exnihilosequentia:sieve/ens_ghast_tear' });
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.02,
            "mesh": "diamond"
          }
        ],
        "input": {
            "item": "exnihilosequentia:crushed_netherrack"
        },
        "result": {
          "item": "minecraft:ghast_tear"
        }
    });

    //Chorus Fruit
    event.custom({
        "type": "exnihilosequentia:sieve",
        "rolls": [
          {
            "chance": 0.1,
            "mesh": "string"
          }
        ],
        "input": {
          "item": "byg:end_sand"
        },
        "result": {
          "item": "minecraft:chorus_fruit"
        }
    });

    //Sieve
    function sieve(slabItem, sieveItem) {

    event.remove({output: sieveItem})
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 0,
        "duration": 20,
        "starlight": 50,
        "pattern": [
          "_____",
          "_BZB_",
          "_ACA_",
          "_A_A_",
          "_____"
        ],
        "key": {
          "A": {
            "item": "botania:livingwood_twig"
          },
          "C": {
            "item": "superpackutils:mythril_gear"
          },
          "Z": {
            "item": slabItem
          },
          "B": {
            "item": "botania:glimmering_livingwood"
          }
        },
        "output": [
          {
            "item": sieveItem,
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_discovery_central_beam"
        ]
    })

    }
    
    sieve("minecraft:oak_slab", "exnihilosequentia:sieve")
    sieve("minecraft:spruce_slab", "exnihilosequentia:spruce_sieve")
    sieve("minecraft:acacia_slab", "exnihilosequentia:acacia_sieve")
    sieve("minecraft:birch_slab", "exnihilosequentia:birch_sieve")
    sieve("minecraft:dark_oak_slab", "exnihilosequentia:dark_oak_sieve")
    sieve("minecraft:warped_slab", "exnihilosequentia:warped_sieve")
    sieve("minecraft:crimson_slab", "exnihilosequentia:crimson_sieve")
    sieve("minecraft:jungle_slab", "exnihilosequentia:jungle_sieve")

});