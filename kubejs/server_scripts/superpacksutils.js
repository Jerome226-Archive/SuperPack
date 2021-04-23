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
            "item": "superpackutils:dyingrock"
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
    event.recipes.immersiveengineering.arc_furnace([Item.of('superpackutils:electrical_platinum_ingot', 4)], 'superpackutils:platinum_ingot', [Item.of('thermal:silver_dust', 2), 'thermal:electrum_dust'], 'thermal:slag')
  
    //Dyingrock
    event.remove({id: 'botania:pure_daisy/livingrock'})
    event.custom({
        "type": "botania:pure_daisy",
        "input": {
          "type": "block",
          "block": "astralsorcery:black_marble_raw"
        },
        "output": {
          "name": "superpackutils:dyingrock"
        }
    }),

    //Bio Plastic
    event.custom({"type":"immersiveengineering:mixer","inputs":[{"item":"thermal:sawdust_block"},{"item":"thermal:rubber"}],"result":{"fluid":"superpackutils:molten_bio_plastic_fluid","amount":1000},"fluid":{"tag":"forge:biodiesel","amount":1000},"energy":3200}),
    event.recipes.create.compacting('superpackutils:bio_plastic', [fluid.of('superpackutils:molten_bio_plastic_fluid', 1000)]),
  
    //Compressed Steel Ingot
    event.custom({"type":"immersiveengineering:squeezer","result":{"item":"superpackutils:compressed_steel_ingot"},"input":{"count":1,"base_ingredient":{"tag":"forge:ingots/steel"}},"energy":19200})

});