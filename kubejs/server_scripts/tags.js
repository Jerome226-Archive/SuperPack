//priority 100000

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
    event.get('forge:ores/platinum').add('superpackutils:platinum_ore')
    
    event.get('forge:crops/strawberry').add('neapolitan:strawberries')

    event.get('forge:ores/copper').remove('exnihilosequentia:chunk_copper')
    event.get('forge:ores/lead').remove('exnihilosequentia:chunk_lead')
    event.get('forge:ores/nickel').remove('exnihilosequentia:chunk_nickel')
    event.get('forge:ores/silver').remove('exnihilosequentia:chunk_silver')
    event.get('forge:ores/tin').remove('exnihilosequentia:chunk_tin')
    event.get('forge:ores/aluminum').remove('exnihilosequentia:chunk_aluminum')
    event.get('forge:ores/uranium').remove('exnihilosequentia:chunk_uranium')
    event.get('forge:ores/zinc').remove('exnihilosequentia:chunk_zinc')
    event.get('forge:ores/iron').remove('exnihilosequentia:chunk_iron')
    event.get('forge:ores/gold').remove('exnihilosequentia:chunk_gold')
    event.get('forge:ores/osmium').remove('exnihilosequentia:chunk_osmium')
    event.get('forge:ores/cobalt').remove('exnihilosequentia:chunk_cobalt')

});

events.listen('fluid.tags', function (event) {

    event.get('forge:nitrogen').add('advancedrocketry:nitrogen')
    event.get('forge:stabilizer').add('youmatter:stabilizer')
    event.get('forge:molten_bioplastic').add('superpackutils:molten_bio_plastic_fluid')

    event.get('minecraft:water').remove('create:honey')
    event.get('minecraft:water').remove('create:flowing_honey')
    event.get('minecraft:water').remove('create:chocolate')
    event.get('minecraft:water').remove('create:flowing_chocolate')
    event.get('minecraft:water').remove('betterportals:portal_fluid_still')
    event.get('minecraft:water').remove('betterportals:portal_fluid_flowing')
    event.get('minecraft:water').remove('exnihilosequentia:sea_water')

    event.get('forge:ethanol').remove('pneumaticcraft:ethanol')

    event.get('forge:plantoil').remove('pneumaticcraft:vegetable_oil')
    event.get('forge:plantoil').remove('createaddition:seed_oil')
    event.get('forge:plantoil').remove('createaddition:flowing_seed_oil')

    event.get('forge:biodiesel').remove('pneumaticcraft:biodiesel')

    event.get('forge:diesel').remove('pneumaticcraft:diesel')

    event.get('forge:crude_oil').remove('pneumaticcraft:oil')
    event.get('forge:crude_oil').remove('thermal:crude_oil')

    event.get('forge:creosote').remove('thermal:creosote')

    event.get('forge:gasoline').remove('pneumaticcraft:gasoline')

    event.get('forge:lubricant').remove('pneumaticcraft:lubricant')

});