//priority: 1500

events.listen('recipes', function (event) {

      //Ender Ingot Ingot
      event.remove({id: 'extendedcrafting:ender_ingot'})
      event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "metallurgic_fabricator",
        "controllerId": "metallurgic_fabricator",
        "ticks": 100,
        "inputs": [
            {
                "type": "masterfulmachinery:energy",
                "data":{
                    "amount": 5000
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "tconstruct:manyullyn_ingot",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "thermal:ender_pearl_dust",
                    "count": 1
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "extendedcrafting:ender_ingot",
                    "count": 1
                }
            }
        ]
    })

      //Copper-Redstone Ingot
      event.remove({id: 'extendedcrafting:redstone_ingot'})
      event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "metallurgic_fabricator",
        "controllerId": "metallurgic_fabricator",
        "ticks": 100,
        "inputs": [
            {
                "type": "masterfulmachinery:energy",
                "data":{
                    "amount": 5000
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "thermal:copper_ingot",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:redstone",
                    "count": 1
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "extendedcrafting:redstone_ingot",
                    "count": 1
                }
            }
        ]
    })

});