//priority: 1500

events.listen('recipes', function (event) { 
    
    function infusion(inputItem, outputItem) {

    //Mana Infusion
    event.custom({
      "type": "botania:mana_infusion",
      "input": {
        "item": `${inputItem}`
      },
      "output": {
        "item": `${outputItem}`
      },
      "mana": 6000,
      "group": "botania:crop_cycle",
      "catalyst": {
        "type": "block",
        "block": "botania:alchemy_catalyst"
      }
    })

    }

    event.remove({id: 'botania:mana_infusion/cocoa_beans_to_wheat_seeds'})
    infusion('minecraft:cocoa_beans', 'farmersdelight:cabbage_seeds')
    infusion('farmersdelight:cabbage_seeds', 'farmersdelight:tomato_seeds')
    infusion('farmersdelight:tomato_seeds', 'thermal:frost_melon_seeds')
    infusion('thermal:frost_melon_seeds', 'immersiveengineering:seed')
    infusion('immersiveengineering:seed', 'thermal:barley_seeds')
    infusion('thermal:barley_seeds', 'thermal:corn_seeds')
    infusion('thermal:corn_seeds', 'thermal:onion_seeds')
    infusion('thermal:onion_seeds', 'thermal:radish_seeds')
    infusion('thermal:radish_seeds', 'farmersdelight:rice')
    infusion('farmersdelight:rice', 'thermal:sadiroot_seeds')
    infusion('thermal:sadiroot_seeds', 'thermal:spinach_seeds')
    infusion('thermal:spinach_seeds', 'thermal:bell_pepper_seeds')
    infusion('thermal:bell_pepper_seeds', 'thermal:eggplant_seeds')
    infusion('thermal:eggplant_seeds', 'thermal:green_bean_seeds')
    infusion('thermal:green_bean_seeds', 'thermal:peanut_seeds')
    infusion('thermal:peanut_seeds', 'neapolitan:strawberry_pips')
    infusion('neapolitan:strawberry_pips', 'thermal:hops_seeds')
    infusion('thermal:hops_seeds', 'thermal:tea_seeds')
    infusion('thermal:tea_seeds', 'supplementaries:flax_seeds')
    infusion('supplementaries:flax_seeds', 'farmersdelight:onion')
    infusion('farmersdelight:onion', 'minecraft:wheat_seeds')

});