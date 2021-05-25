//priority: 1500

events.listen('recipes', function (event) {

    //Invar
    event.remove({id: 'tconstruct:smeltery/alloys/molten_invar'})
    event.recipes.create.mixing(fluid.of('tconstruct:molten_invar', 432), [fluid.of('tconstruct:molten_nickel', 144), fluid.of('tconstruct:molten_iron', 288)]).heated()

    //Bronze
    event.remove({id: 'tconstruct:smeltery/alloys/molten_bronze'})
    event.remove({id: 'mekanism:processing/bronze/dust/from_infusing'})
    event.remove({id: 'mekanism:processing/bronze/ingot/from_infusing'})
    event.recipes.create.mixing(fluid.of('tconstruct:molten_bronze', 576), [fluid.of('tconstruct:molten_tin', 144), fluid.of('tconstruct:molten_copper', 432)]).heated()

    //Brass
    event.remove({id: 'tconstruct:smeltery/alloys/molten_brass'})
    event.remove({id: 'create:mixing/crushed_brass'})
    event.remove({id: 'create:mixing/brass_ingot'})
    event.recipes.create.mixing(fluid.of('tconstruct:molten_brass', 288), [fluid.of('tconstruct:molten_zinc', 144), fluid.of('tconstruct:molten_copper', 144)]).heated()

    //Constantan
    event.remove({id: 'tconstruct:smeltery/alloys/molten_constantan'})
    event.recipes.create.mixing(fluid.of('tconstruct:molten_constantan', 288), [fluid.of('tconstruct:molten_nickel', 144), fluid.of('tconstruct:molten_copper', 144)]).heated()

    //Electrum
    event.remove({id: 'tconstruct:smeltery/alloys/molten_electrum'})
    event.recipes.create.mixing(fluid.of('tconstruct:molten_electrum', 288), [fluid.of('tconstruct:molten_silver', 144), fluid.of('tconstruct:molten_gold', 144)]).heated()

    //Tinker's Bronze
    event.remove({id: 'tconstruct:smeltery/alloys/molten_tinkers_bronze'})
    event.recipes.create.filling('tconstruct:tinkers_bronze_ingot', ['#forge:ingots/copper', fluid.of('tconstruct:molten_glass', 500)])

    //Manyullyn
    event.remove({id: 'tconstruct:smeltery/alloys/molten_manyullyn'})
    event.recipes.create.mixing(fluid.of('tconstruct:molten_manyullyn', 576), [fluid.of('tconstruct:molten_netherite', 144), fluid.of('tconstruct:molten_cobalt', 432)]).superheated()

    //Pig Iron
    event.remove({id: 'tconstruct:smeltery/alloys/molten_pig_iron'})
    event.recipes.create.mixing(fluid.of('tconstruct:molten_pig_iron', 288), [fluid.of('tconstruct:molten_iron', 144), 'minecraft:clay_ball', fluid.of('tconstruct:blood', 250)]).heated()

    //Queens Slime
    event.remove({id: 'tconstruct:smeltery/alloys/molten_queens_slime'})
    event.recipes.create.mixing(fluid.of('tconstruct:molten_queens_slime', 288), [fluid.of('tconstruct:molten_cobalt', 144), fluid.of('tconstruct:molten_uranium', 144), 'minecraft:magma_cream']).superheated()

    //Hepatizon
    event.remove({id: 'tconstruct:smeltery/alloys/molten_hepatizon'})
    event.recipes.create.mixing(fluid.of('tconstruct:molten_hepatizon', 288), [fluid.of('tconstruct:molten_copper', 288), fluid.of('tconstruct:molten_cobalt', 144), 'minecraft:obsidian']).superheated()

    //Rose Gold
    event.remove({id: 'tconstruct:smeltery/alloys/molten_rose_gold'})
    event.recipes.create.mixing(fluid.of('tconstruct:molten_rose_gold', 576), [fluid.of('tconstruct:molten_copper', 432), fluid.of('tconstruct:molten_gold', 144)]).heated()

    //Slimesteel
    event.remove({id: 'tconstruct:smeltery/alloys/molten_slimesteel'})
    event.recipes.create.mixing(fluid.of('tconstruct:molten_slimesteel', 288), [fluid.of('tconstruct:molten_iron', 144), 'tconstruct:sky_slime_ball', fluid.of('tconstruct:seared_stone', 144)]).heated()

    //Netherite
    event.remove({id: 'tconstruct:smeltery/alloys/molten_netherite'})
    event.recipes.create.mixing(fluid.of('tconstruct:molten_netherite', 16), [fluid.of('tconstruct:molten_debris', 64), fluid.of('tconstruct:molten_gold', 32)]).superheated()

    //Steel
    event.remove({id: 'immersiveengineering:blastfurnace/steel'})
    event.remove({id: 'immersiveengineering:arcfurnace/steel'})
    event.remove({output: 'mekanism:enriched_iron'})
    event.remove({id: 'mekanism:processing/steel/enriched_iron_to_dust'})
    event.remove({id: 'immersiveengineering:blastfurnace/steel_block'})

    event.recipes.create.mixing(Item.of('mekanism:enriched_iron', 3), ['thermal:iron_dust', 'thermal:nickel_dust', 'superpackutils:zinc_dust'])

    event.recipes.immersiveengineering.blast_furnace('mekanism:ingot_steel', 'mekanism:enriched_iron', 'thermal:slag')

    event.recipes.immersiveengineering.arc_furnace(['mekanism:ingot_steel'], 'mekanism:enriched_iron', ['immersiveengineering:dust_coke'], 'thermal:slag')
    event.recipes.immersiveengineering.arc_furnace(['mekanism:ingot_steel'], 'mekanism:enriched_iron', [Item.of('mekanism:dust_charcoal', 3)], 'thermal:slag')

});