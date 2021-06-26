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
    event.get('forge:ores/platinum').remove('exnihilosequentia:chunk_platinum')

});

events.listen('fluid.tags', function (event) {

    event.get('forge:nitrogen').add('advancedrocketry:nitrogen')
    event.get('forge:stabilizer').add('youmatter:stabilizer')
    event.get('forge:molten_bioplastic').add('superpackutils:molten_bio_plastic')
    event.get('forge:benzene').add('superpackutils:benzene')
    event.get('forge:butadiene').add('superpackutils:butadiene')
    event.get('forge:acrylonitrile').add('superpackutils:acrylonitrile')
    event.get('forge:abs').add('superpackutils:abs')
    event.get('forge:ethyl_benzene').add('superpackutils:ethyl_benzene')
    event.get('forge:ethyl_chloride').add('superpackutils:ethyl_chloride')
    event.get('forge:silicon_dioxide').add('superpackutils:silicon_dioxide')
    event.get('forge:polyethene').add('superpackutils:polyethene')
    event.get('forge:chemical_death').add('superpackutils:chemical_death')
    event.get('forge:ammonia').add('superpackutils:ammonia')
    event.get('forge:cyanide').add('superpackutils:cyanide')
    event.get('forge:methane').add('superpackutils:methane')
    event.get('forge:toluene').add('superpackutils:toluene')
    event.get('forge:octane').add('superpackutils:octane')
    event.get('forge:butane').add('superpackutils:butane')
    event.get('forge:butene').add('superpackutils:butene')
    event.get('forge:propane').add('superpackutils:propane')
    event.get('forge:propene').add('superpackutils:propene')
    event.get('forge:etbe').add('superpackutils:etbe')
    event.get('forge:isoprene').add('superpackutils:isoprene')
    event.get('forge:boric_acid').add('superpackutils:boric_acid')
    event.get('forge:diborane').add('superpackutils:diborane')
    event.get('forge:pure_sulfuric_acid').add('superpackutils:pure_sulfuric_acid')
    event.get('forge:styrene').add('superpackutils:styrene')
    event.get('forge:toluene').add('superpackutils:toluene')
    event.get('forge:octane').add('superpackutils:octane')

    event.get('forge:sulfurized_naphtha').add('superpackutils:sulfurized_naphtha')
    event.get('forge:sulfurized_light_oil').add('superpackutils:sulfurized_light_oil')
    event.get('forge:sulfurized_heavy_oil').add('superpackutils:sulfurized_heavy_oil')
    event.get('forge:sulfurized_gasoline').add('superpackutils:sulfurized_gasoline')
    event.get('forge:sc_light_oil').add('superpackutils:sc_light_oil')
    event.get('forge:hc_light_oil').add('superpackutils:hc_light_oil')
    event.get('forge:sc_heavy_oil').add('superpackutils:sc_heavy_oil')
    event.get('forge:hc_heavy_oil').add('superpackutils:hc_heavy_oil')
    event.get('forge:sc_naphtha').add('superpackutils:sc_naphtha')
    event.get('forge:hc_naphtha').add('superpackutils:hc_naphtha')

    event.get('minecraft:water').remove('create:honey')
    event.get('minecraft:water').remove('create:flowing_honey')
    event.get('minecraft:water').remove('create:chocolate')
    event.get('minecraft:water').remove('create:flowing_chocolate')
    event.get('minecraft:water').remove('betterportals:portal_fluid_still')
    event.get('minecraft:water').remove('betterportals:portal_fluid_flowing')
    event.get('minecraft:water').remove('exnihilosequentia:sea_water')
    event.get('minecraft:water').remove('exnihilosequentia:sea_water_flow')

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