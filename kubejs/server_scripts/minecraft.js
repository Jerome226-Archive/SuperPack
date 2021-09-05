//priority: 1500

events.listen('recipes', function (event) { 

    //-----------------------------------------------------
    //Minecraft
    //-----------------------------------------------------

    //Smithing Table
    event.remove({output: 'minecraft:smithing_table'})
    event.shaped('minecraft:smithing_table', ['LLL', 'WHS', 'TTT'], {
        T: '#forge:treated_wood',
        L: '#forge:sheetmetals/lead',
        S: 'immersiveengineering:screwdriver',
        W: 'immersiveengineering:wirecutter',
        H: 'immersiveengineering:hammer'
    }),

    //Stonecutter
    event.remove({output: 'minecraft:stonecutter'})
    event.shaped('minecraft:stonecutter', [' C ', 'III'], {
        C: 'thermal:saw_blade',
        I: 'minecraft:stone'
    }),

    //Igneous Sand Generation
    event.custom({
        "type": "thermal:rock_gen",
        "adjacent": "astralsorcery:liquid_starlight",
        "result": {
          "item": "minecraft:sand"
        }
    })

    //Blaze Powder
    event.custom({
        "type": "create:filling",
        "ingredients": [
          {
            "item": "minecraft:glowstone_dust"
          },
          {
            "fluid": "create:potion",
            "nbt": {
              "Bottle": "REGULAR",
              "Potion": "quark:resistance"
            },
            "amount": 25
          }
        ],
        "results": [
          {
            "item": "minecraft:blaze_powder"
          }
        ]
    })

    //Alchemical Powder
    event.custom({
        "type": "create:filling",
        "ingredients": [
          {
            "item": "minecraft:blaze_powder"
          },
          {
            "fluid": "create:potion",
            "nbt": {
              "Bottle": "REGULAR",
              "Potion": "minecraft:harming"
            },
            "amount": 25
          }
        ],
        "results": [
          {
            "item": "superpackutils:alchemical_powder"
          }
        ]
    })
  
    //Ender Eye
    event.remove({output: 'minecraft:ender_eye'})
    event.recipes.create.mixing('minecraft:ender_eye', ['minecraft:ender_pearl', 'minecraft:blaze_powder']).heated()

    //Crimson Fungus
    event.custom({"type":"immersiveengineering:cloche","results":[{"item":"minecraft:crimson_fungus","count":2}],"input":{"item":"minecraft:crimson_fungus"},"soil":{"item":"minecraft:crimson_nylium"},"time":480,"render":{"type":"generic","block":"minecraft:crimson_fungus"}})

    //Warped Fungus
    event.custom({"type":"immersiveengineering:cloche","results":[{"item":"minecraft:warped_fungus","count":2}],"input":{"item":"minecraft:warped_fungus"},"soil":{"item":"minecraft:warped_nylium"},"time":480,"render":{"type":"generic","block":"minecraft:warped_fungus"}})
    
    //Chorus Fruit
    event.custom({"type":"immersiveengineering:cloche","results":[{"item":"minecraft:chorus_fruit"}],"input":{"item":"minecraft:chorus_flower"},"soil":{"item":"minecraft:end_stone"},"time":480,"render":{"type":"chorus","block":"minecraft:chorus_flower"}})

    //Cactus
    event.custom({"type":"immersiveengineering:cloche","results":[{"item":"minecraft:cactus"}],"input":{"item":"minecraft:cactus"},"soil":{"tag":"forge:sand"},"time":560,"render":{"type":"stacking","block":"minecraft:cactus"}})

    //Red Mushroom
    event.custom({"type":"immersiveengineering:cloche","results":[{"item":"minecraft:red_mushroom"}],"input":{"item":"minecraft:red_mushroom"},"soil":[{"item":"minecraft:mycelium"},{"item":"minecraft:podzol"}],"time":480,"render":{"type":"generic","block":"minecraft:red_mushroom"}})

    //Brown Mushroom
    event.custom({"type":"immersiveengineering:cloche","results":[{"item":"minecraft:brown_mushroom"}],"input":{"item":"minecraft:brown_mushroom"},"soil":[{"item":"minecraft:mycelium"},{"item":"minecraft:podzol"}],"time":480,"render":{"type":"generic","block":"minecraft:brown_mushroom"}})

    //Red Mushroom Colony
    event.custom({"type":"immersiveengineering:cloche","results":[{"item":"farmersdelight:red_mushroom_colony"}],"input":{"item":"farmersdelight:red_mushroom_colony"},"soil":[{"item":"minecraft:mycelium"},{"item":"minecraft:podzol"}],"time":480,"render":{"type":"generic","block":"minecraft:red_mushroom"}})

    //Brown Mushroom Colony
    event.custom({"type":"immersiveengineering:cloche","results":[{"item":"farmersdelight:brown_mushroom_colony"}],"input":{"item":"farmersdelight:brown_mushroom_colony"},"soil":[{"item":"minecraft:mycelium"},{"item":"minecraft:podzol"}],"time":480,"render":{"type":"generic","block":"minecraft:brown_mushroom"}})

    //Crimson Roots
    event.custom({"type":"immersiveengineering:cloche","results":[{"item":"minecraft:crimson_roots"}],"input":{"item":"minecraft:crimson_roots"},"soil":[{"item":"minecraft:crimson_nylium"}],"time":480,"render":{"type":"generic","block":"minecraft:crimson_rooots"}})

    //Warped Roots
    event.custom({"type":"immersiveengineering:cloche","results":[{"item":"minecraft:warped_roots"}],"input":{"item":"minecraft:warped_roots"},"soil":[{"item":"minecraft:warped_nylium"}],"time":480,"render":{"type":"generic","block":"minecraft:warped_rooots"}})

    //Livingroot
    event.custom({"type":"immersiveengineering:cloche","results":[{"item":"botania:living_root"}],"input":{"item":"minecraft:dead_bush"},"soil":[{"item":"farmersdelight:organic_compost"}],"time":1200,"render":{"type":"generic","block":"minecraft:dead_bush"}})

    //Caveroot
    event.custom({"type":"immersiveengineering:cloche","results":[{"item":"quark:root_item"}],"input":{"item":"quark:root_item"},"soil":[{"item":"farmersdelight:organic_compost"}],"time":1200,"render":{"type":"generic","block":"minecraft:dead_bush"}})

    //Glowstone Pre-Nether
    event.recipes.create.filling('minecraft:glowstone_dust', ['minecraft:gunpowder', fluid.of('astralsorcery:liquid_starlight', 25)]),

    //Gunpowder
    event.remove({id: 'create:filling/gunpowder'})
    event.recipes.immersiveengineering.crusher('minecraft:gunpowder', 'minecraft:flint')

    //Redstone
    event.remove({id: 'create:filling/redstone'})
    event.custom({
        "type": "create:filling",
        "ingredients": [
          {
            "item": "minecraft:gunpowder"
          },
          {
            "fluid": "create:potion",
            "nbt": {
              "Bottle": "REGULAR",
              "Potion": "minecraft:strength"
            },
            "amount": 25
          }
        ],
        "results": [
          {
            "item": "minecraft:redstone"
          }
        ]
    })

    //Glowstone
    event.remove({id: 'create:filling/glowstone'})
    event.custom({
        "type": "create:filling",
        "ingredients": [
          {
            "item": "minecraft:gunpowder"
          },
          {
            "fluid": "create:potion",
            "nbt": {
              "Bottle": "REGULAR",
              "Potion": "minecraft:night_vision"
            },
            "amount": 25
          }
        ],
        "results": [
          {
            "item": "minecraft:glowstone_dust"
          }
        ]
    })

    //Soul Lantern 
    event.remove({id: 'tconstruct:smeltery/casting/metal/iron/soul_lantern'})
    event.recipes.create.filling('minecraft:soul_lantern', ['minecraft:soul_torch', fluid.of('tconstruct:molten_iron', 128)]),

    //Lantern
    event.remove({id: 'tconstruct:smeltery/casting/metal/iron/lantern'})
    event.recipes.create.filling('minecraft:lantern', ['minecraft:torch', fluid.of('tconstruct:molten_iron', 128)]),

    //Golden Apple
    event.remove({id: 'tconstruct:smeltery/casting/metal/gold/apple'})
    event.recipes.create.filling('minecraft:golden_apple', ['minecraft:apple', fluid.of('tconstruct:molten_gold', 1152)]),

    //Golden Carrot
    event.remove({id: 'tconstruct:smeltery/casting/metal/gold/carrot'})
    event.recipes.create.filling('minecraft:golden_carrot', ['minecraft:carrot', fluid.of('tconstruct:molten_gold', 128)]),

    //Glistering melon
    event.remove({id: 'tconstruct:smeltery/casting/metal/gold/melon'})
    event.recipes.create.filling('minecraft:glistering_melon_slice', ['minecraft:melon_slice', fluid.of('tconstruct:molten_gold', 128)]),

    //Ender Chest
    event.remove({id: 'tconstruct:smeltery/casting/obsidian/chest'})
    event.recipes.create.filling('minecraft:ender_chest', ['minecraft:ender_eye', fluid.of('tconstruct:molten_obsidian', 8000)]),

    //Ice Automation
    event.custom({
      "type": "advgenerators:exchanger_cooling",
      "input": {
        "fluids": {
          "fluid": "minecraft:water"
        },
        "amount": 1
      },
      "output": {
        "item": "minecraft:ice",
        "amount": 0.001
      },
      "heat": 10
  })
    //Compass
    event.remove({id: 'tconstruct:smeltery/casting/metal/iron/compass'})
    event.recipes.create.filling('minecraft:compass', ['minecraft:redstone', fluid.of('tconstruct:molten_iron', 576)]),

    //Clock
    event.remove({id: 'tconstruct:smeltery/casting/metal/gold/clock'})
    event.recipes.create.filling('minecraft:clock', ['minecraft:redstone', fluid.of('tconstruct:molten_gold', 576)])

    //Remove Soup
    event.remove({id: 'minecraft:beetroot_soup'})

    //Netherrack
    event.custom({
        "type": "astralsorcery:block_transmutation",
        "input": [
          {
            "block": "minecraft:red_sandstone",
            "display": {
              "item": "minecraft:red_sandstone",
              "count": 1
            }
          }
        ],
        "output": {
          "block": "minecraft:netherrack"
        },
        "display": {
          "item": "minecraft:netherrack",
          "count": 1
        },
        "starlight": 200.0
    })

});
