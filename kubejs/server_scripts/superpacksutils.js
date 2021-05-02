//priority: 1500

events.listen('recipes', function (event) {

    //-----------------------------------------------------
    //Superpack: Utils
    //-----------------------------------------------------

    //Lubrified LPG
    event.custom({
        "type": "pneumaticcraft:fluid_mixer",
        "input1": {
          "type": "pneumaticcraft:fluid",
          "fluid": "pneumaticcraft:lpg",
          "amount": 25
        },
        "input2": {
          "type": "pneumaticcraft:fluid",
          "fluid": "immersivepetroleum:lubricant",
          "amount": 25
        },
        "fluid_output": {
          "fluid": "superpackutils:lubrified_lpg_fluid",
          "amount": 50
        },
        "pressure": 2.0,
        "time": 300
    }),
  
    //Dimensional Plasma
    event.custom({
        "type": "astralsorcery:lightwell",
        "input": {
          "item": "superpackutils:dimensional_stone"
        },
        "output": "betterportals:portal_fluid_still",
        "productionMultiplier": 2.0,
        "shatterMultiplier": 30.0,
        "color": -11310593
    }),
  
    //Dimensional Rock
    event.custom({
        "type": "botania:petal_apothecary",
        "output": {
          "item": "superpackutils:dimensional_stone"
        },
        "ingredients": [
          {
            "item": "minecraft:obsidian"
          },
          {
            "item": "minecraft:obsidian"
          },
          {
            "item": "minecraft:obsidian"
          },
          {
            "item": "minecraft:obsidian"
          },
          {
            "item": "minecraft:obsidian"
          },
          {
            "item": "minecraft:obsidian"
          },
          {
            "item": "minecraft:obsidian"
          },
          {
            "item": "botania:livingrock"
          },
          {
            "item": "botania:mana_pearl"
          },
          {
            "tag": "forge:ingots/manasteel"
          }
        ]
    }),
  
    //Electrical Platinum Ingot
    event.recipes.immersiveengineering.arc_furnace([Item.of('superpackutils:electrical_platinum_ingot', 4)], 'superpackutils:platinum_ingot', ['thermal:electrum_dust', Item.of('thermal:silver_dust', 2)], 'thermal:slag')
 
    //Rune
    event.recipes.create.pressing('superpackutils:rune', 'botania:livingrock')

    //Basic Alloy
    event.shaped('superpackutils:basic_alloy', [' C ', 'EIE', ' C '], {
        C: '#mekanism:enriched/carbon',
        E: 'thermal:rich_slag',
        I: 'create:andesite_alloy'
    }),

    //Nugget Cast
    event.shaped('superpackutils:chiller_nugget_cast', [' C ', 'CIC', ' C '], {
        C: '#forge:plates/bronze',
        I: '#forge:nuggets'
    }),

    //Gear Cast
    event.shaped('superpackutils:chiller_gear_cast', [' C ', 'CIC', ' C '], {
        C: '#forge:plates/bronze',
        I: '#forge:gears'
    }),

    //Plates Cast
    event.shaped('superpackutils:chiller_plate_cast', [' C ', 'CIC', ' C '], {
        C: '#forge:plates/bronze',
        I: '#forge:plates'
    }),

    //Coin Cast
    event.shaped('superpackutils:chiller_coin_cast', [' C ', 'CIC', ' C '], {
        C: '#forge:plates/bronze',
        I: '#forge:coins'
    }),

    //Igneous Deepslate Generation
    event.custom({
      "type": "thermal:rock_gen",
      "adjacent": "minecraft:water",
      "below": "minecraft:bedrock",
      "result": {
        "item": "superpackutils:deepslate"
      }
    })

    //Ethyl Chloride
    event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1,"gas":"mekanism:hydrogen_chloride"},"rightInput":{"amount":1,"gas":"mekanism:ethene"},"output":{"gas":"superpackutils:ethyl_chloride","amount":1}})

    //Tetraethyl Lead Dust
    event.custom({"type":"mekanism:reaction","itemInput":{"ingredient":{"item":"thermal:lead_dust"}},"fluidInput":{"amount":50,"tag":"forge:sodium"},"gasInput":{"amount":100,"gas":"superpackutils:ethyl_chloride"},"energyRequired":200,"duration":400,"itemOutput":{"item":"superpackutils:tetraethyl_lead_dust","count":1},"gasOutput":{"gas":"mekanism:oxygen","amount":10}})

    //Industrial Sand
    event.recipes.immersiveengineering.crusher('superpackutils:industrial_sand', 'create:limesand')

    //Bedrock Dust & Limestone Dust
    event.recipes.create.crushing([Item.of('superpackutils:limestone_dust').withChance(0.35), 'superpackutils:bedrock_dust', Item.of('superpackutils:bedrock_dust').withChance(0.45)], 'superpackutils:deepslate', 350)

    //Reinforced Capacitor 
    event.shaped('superpackutils:reinforced_capacitor', [' CI', 'CAC', 'IC '], {
      C: '#forge:plates/lead',
      A: 'createaddition:capacitor',
      I: 'superpackutils:bedrock_dust'
    }),

    //Dyingrock
    event.recipes.mekanism.metallurgic_infusing('superpackutils:dyingrock', 'botania:livingrock', 'mekanism:carbon', 80),

    //Superheated Bronze Ingot
    event.recipes.create.compacting('superpackutils:superheated_bronze_ingot', ['#forge:ingots/bronze', fluid.of('tconstruct:magma_cream', 50)]).superheated(),

    //Weird Fungu
    event.recipes.create.filling('superpackutils:weird_fungu', ['minecraft:crimson_fungus', fluid.of('mekanismgenerators:bioethanol', 1000)]),

    //Bio Plastic
    event.custom({"type":"immersiveengineering:mixer","inputs":[{"item":"thermal:sawdust"},{"item":"thermal:rubber"}],"result":{"fluid":"superpackutils:molten_bio_plastic_fluid","amount":1000},"fluid":{"tag":"forge:biodiesel","amount":1000},"energy":3200}),
    event.recipes.create.compacting('superpackutils:bio_plastic', [fluid.of('superpackutils:molten_bio_plastic_fluid', 1000)]),
  
    //Compressed Steel Ingot
    event.custom({"type":"immersiveengineering:squeezer","result":{"item":"superpackutils:compressed_steel_ingot"},"input":{"count":1,"base_ingredient":{"tag":"forge:ingots/steel"}},"energy":19200})

});