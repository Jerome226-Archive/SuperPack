
//priority: 1500

events.listen('recipes', function (event) {

    //Silicon
    event.recipes.immersiveengineering.arc_furnace(['libvulpes:ingotsilicon'], 'refinedstorage:silicon')

    //Basalt Sediment
    event.custom({
        "type": "advgenerators:exchanger_cooling",
        "input": {
          "fluids": {
            "fluid": "superpackutils:pahoehoe_lava"
          },
          "amount": 1
        },
        "output": {
          "item": "advancedrocketry:basalt",
          "amount": 0.001
        },
        "heat": 50
    })
    
    //Nitrogen
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:nitrogen"},"gasOutput":{"gas":"superpackutils:nitrogen","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:nitrogen"},"fluidOutput":{"fluid":"advancedrocketry:nitrogen","amount":1}})

});