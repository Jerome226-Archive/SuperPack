//priority: 1500

events.listen('recipes', function (event) {

    //Silicon
    event.recipes.immersiveengineering.arc_furnace(['libvulpes:ingotsilicon'], 'refinedstorage:silicon')

    //Nitrogen
    event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:nitrogen"},"gasOutput":{"gas":"superpackutils:nitrogen","amount":1},"gasInput":{"amount":1,"gas":"superpackutils:nitrogen"},"fluidOutput":{"fluid":"advancedrocketry:nitrogen","amount":1}})

});