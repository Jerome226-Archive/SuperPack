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

    event.get('forge:ingots/starmetal').add('astralsorcery:starmetal_ingot')
    event.get('forge:storage_blocks/starmetal').add('astralsorcery:starmetal')
    event.get('forge:dusts/starmetal').add('astralsorcery:stardust')
    event.get('forge:ores/starmetal').add('astralsorcery:starmetal_ore')

    event.get('forge:storage_blocks/steel').remove('immersiveengineering:storage_steel')

});

events.listen('fluid.tags', function (event) {

    event.get('superpackutils:silicon_dioxide').add('superpackutils:liquid_silicon_dioxide_fluid')

});