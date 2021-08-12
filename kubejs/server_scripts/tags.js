//priority 100000

events.listen('item.tags', function (event) {

    event.get('forge:slag').remove('immersiveengineering:slag')
    event.get('forge:gears/compressed_iron').add('pneumaticcraft:compressed_iron_gear')

    event.get('forge:gears/steel').remove('libvulpes:gearsteel')

    event.get('forge:silicon').remove('voluminousenergy:silicon')

    event.get('forge:ingots/starmetal').add('astralsorcery:starmetal_ingot')
    event.get('forge:storage_blocks/starmetal').add('astralsorcery:starmetal')
    event.get('forge:dusts/starmetal').add('astralsorcery:stardust')
    event.get('forge:ores/starmetal').add('astralsorcery:starmetal_ore')
    
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

events.listen('block.tags', function (event) {

    //Metallurgic Fabricator
    event.get('superpack:metallurgic_fabricator/optional/item_input').add('superpackutils:metallurgic_casing')
    event.get('superpack:metallurgic_fabricator/optional/item_input').add('masterfulmachinery:metallurgic_fabricator_basic_port_items_input')

    event.get('superpack:metallurgic_fabricator/item_input').add('masterfulmachinery:metallurgic_fabricator_basic_port_items_input')
    event.get('superpack:metallurgic_fabricator/item_input').add('masterfulmachinery:metallurgic_fabricator_advanced_port_items_input')

    event.get('superpack:metallurgic_fabricator/item_output').add('masterfulmachinery:metallurgic_fabricator_basic_port_items_output')
    event.get('superpack:metallurgic_fabricator/item_output').add('masterfulmachinery:metallurgic_fabricator_advanced_port_items_output')


    //Improved Metallurgic Fabricator
    event.get('superpack:improved_metallurgic_fabricator/optional/item_input').add('superpackutils:improved_metallurgic_casing')
    event.get('superpack:improved_metallurgic_fabricator/optional/item_input').add('masterfulmachinery:improved_metallurgic_fabricator_basic_port_items_input')

    event.get('superpack:improved_metallurgic_fabricator/item_input').add('masterfulmachinery:improved_metallurgic_fabricator_basic_port_items_input')
    event.get('superpack:improved_metallurgic_fabricator/item_input').add('masterfulmachinery:improved_metallurgic_fabricator_advanced_port_items_input')

    event.get('superpack:improved_metallurgic_fabricator/item_output').add('masterfulmachinery:improved_metallurgic_fabricator_basic_port_items_output')
    event.get('superpack:improved_metallurgic_fabricator/item_output').add('masterfulmachinery:improved_metallurgic_fabricator_advanced_port_items_output')

    //Assembler
    event.get('superpack:assembler/optional/item_input').add('superpackutils:assembler_frame')
    event.get('superpack:assembler/optional/item_input').add('masterfulmachinery:assembler_basic_port_items_input')

    event.get('superpack:assembler/item_input').add('masterfulmachinery:assembler_basic_port_items_input')
    event.get('superpack:assembler/item_input').add('masterfulmachinery:assembler_advanced_port_items_input')

    event.get('superpack:assembler/item_output').add('masterfulmachinery:assembler_basic_port_items_output')
    event.get('superpack:assembler/item_output').add('masterfulmachinery:assembler_advanced_port_items_output')

    //Infuser
    event.get('superpack:infuser/optional/item_input').add('superpackutils:infuser_casing')
    event.get('superpack:infuser/optional/item_input').add('masterfulmachinery:infuser_basic_port_items_input')

    event.get('superpack:infuser/item_input').add('masterfulmachinery:infuser_basic_port_items_input')
    event.get('superpack:infuser/item_input').add('masterfulmachinery:infuser_advanced_port_items_input')

    event.get('superpack:infuser/item_output').add('masterfulmachinery:infuser_basic_port_items_output')
    event.get('superpack:infuser/item_output').add('masterfulmachinery:infuser_advanced_port_items_output')

    //Alchemical Mixer
    event.get('superpack:mixer/optional/item_input').add('superpackutils:mixer_casing')
    event.get('superpack:mixer/optional/item_input').add('masterfulmachinery:mixer_basic_port_items_input')

    event.get('superpack:mixer/item_input').add('masterfulmachinery:mixer_basic_port_items_input')
    event.get('superpack:mixer/item_input').add('masterfulmachinery:mixer_advanced_port_items_input')

    event.get('superpack:mixer/item_output').add('masterfulmachinery:mixer_basic_port_items_output')
    event.get('superpack:mixer/item_output').add('masterfulmachinery:mixer_advanced_port_items_output')

    //Inscriber
    event.get('superpack:inscriber/optional/item_input').add('superpackutils:inscriber_casing')
    event.get('superpack:inscriber/optional/item_input').add('masterfulmachinery:inscriber_basic_port_items_input')

    event.get('superpack:inscriber/item_input').add('masterfulmachinery:inscriber_basic_port_items_input')
    event.get('superpack:inscriber/item_input').add('masterfulmachinery:inscriber_advanced_port_items_input')

    event.get('superpack:inscriber/item_output').add('masterfulmachinery:inscriber_basic_port_items_output')
    event.get('superpack:inscriber/item_output').add('masterfulmachinery:inscriber_advanced_port_items_output')

    //Pressurized Alloyer
    event.get('superpack:alloyer/optional/item_input').add('superpackutils:alloyer_casing')
    event.get('superpack:alloyer/optional/item_input').add('masterfulmachinery:alloyer_basic_port_items_input')

    event.get('superpack:alloyer/item_input').add('masterfulmachinery:alloyer_basic_port_items_input')
    event.get('superpack:alloyer/item_input').add('masterfulmachinery:alloyer_advanced_port_items_input')

    event.get('superpack:alloyer/item_output').add('masterfulmachinery:alloyer_basic_port_items_output')
    event.get('superpack:alloyer/item_output').add('masterfulmachinery:alloyer_advanced_port_items_output')

});

events.listen('fluid.tags', function (event) {

    
    event.get('forge:nitrogen').add('advancedrocketry:nitrogen')
    event.get('forge:stabilizer').add('youmatter:stabilizer')

    event.get('forge:heavy_oil').add('thermal:heavy_oil')
    event.get('forge:light_oil').add('thermal:light_oil')

    event.get('minecraft:water').remove('create:honey')
    event.get('minecraft:water').remove('create:flowing_honey')
    event.get('minecraft:water').remove('create:chocolate')
    event.get('minecraft:water').remove('create:flowing_chocolate')
    event.get('minecraft:water').remove('betterportals:portal_fluid_still')
    event.get('minecraft:water').remove('betterportals:portal_fluid_flowing')
    event.get('minecraft:water').remove('exnihilosequentia:sea_water')
    event.get('minecraft:water').remove('exnihilosequentia:sea_water_flow')
    //event.get('minecraft:water').remove('factoriores:sulfuric_acid')
    //event.get('minecraft:water').remove('factoriores:flowing_sulfuric_acid')
    event.get('minecraft:water').remove('createaddition:seed_oil')
    event.get('minecraft:water').remove('createaddition:flowing_seed_oil')

    event.get('forge:ethanol').remove('pneumaticcraft:ethanol')

    event.get('forge:steam').remove('advgenerators:steam')

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