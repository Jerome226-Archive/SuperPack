//priority: 1500

events.listen('recipes', function (event) {

    //WIP
    
    //Broccoli Cheese Soup
    event.remove({ output: 'simplefarming:broccoli_cheese_soup' });
    event.custom({
        "type": "farmersdelight:cooking",
        "ingredients": [
          {
            "item": "simplefarming:cheese_slice"
          },
          {
            "tag": "forge:crops/broccoli"
          }
        ],
        "result": {
          "item": "simplefarming:broccoli_cheese_soup"
        },
        "container": {
          "item": "minecraft:bowl"
        },
        "conditions": [
          {
            "type": "forge:mod_loaded",
            "modid": "simplefarming"
          }
        ]
      })
});