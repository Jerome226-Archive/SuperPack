//priority 69420

events.listen('item.tags', function (event) {

    event.get('thermal:crafting/casts').add('superpackutils:chiller_nugget_cast')
    event.get('thermal:crafting/casts').add('superpackutils:chiller_gear_cast')
    event.get('thermal:crafting/casts').add('superpackutils:chiller_plate_cast')
    event.get('thermal:crafting/casts').add('superpackutils:chiller_coin_cast')

    event.get('forge:slag').remove('immersiveengineering:slag')
    event.get('forge:gears/compressed_iron').add('pneumaticcraft:compressed_iron_gear')

    event.get('forge:ingots/iron').remove('dustrial_decor:rusty_iron_ingot')
    event.get('forge:nuggets/iron').remove('dustrial_decor:rusty_iron_nugget')

    event.get('forge:gears/steel').remove('libvulpes:gearsteel')

    event.get('forge:ingots/starmetal').add('astralsorcery:starmetal_ingot')
    event.get('forge:storage_blocks/starmetal').add('astralsorcery:starmetal')
    event.get('forge:dusts/starmetal').add('astralsorcery:stardust')
    event.get('forge:ores/starmetal').add('astralsorcery:starmetal_ore')
    
});

events.listen('fluid.tags', function (event) {

    event.get('forge:nitrogen').add('advancedrocketry:nitrogen')
    event.get('forge:stabilizer').add('youmatter:stabilizer')

    event.get('minecraft:water').remove('create:honey')
    event.get('minecraft:water').remove('create:flowing_honey')
    event.get('minecraft:water').remove('create:chocolate')
    event.get('minecraft:water').remove('create:flowing_chocolate')
    event.get('minecraft:water').remove('betterportals:portal_fluid_still')
    event.get('minecraft:water').remove('betterportals:portal_fluid_flowing')

    event.get('forge:ethanol').remove('pneumaticcraft:ethanol')

    event.get('forge:plantoil').remove('pneumaticcraft:vegetable_oil')
    event.get('forge:plantoil').remove('createaddition:seed_oil')
    event.get('forge:plantoil').remove('createaddition:flowing_seed_oil')

    event.get('forge:biodiesel').remove('pneumaticcraft:biodiesel')

    event.get('forge:diesel').remove('pneumaticcraft:diesel')

    event.get('forge:crude_oil').remove('pneumaticcraft:oil')
    event.get('forge:crude_oil').remove('thermal:crude_oil')

    event.get('forge:creosote').remove('thermal:crude_oil')

    event.get('forge:gasoline').remove('pneumaticcraft:gasoline')

    event.get('forge:lubricant').remove('pneumaticcraft:lubricant')

});