//priority 69420
events.listen('item.tags', function (event) {

    event.get('thermal:crafting/casts').add('superpackutils:chiller_nugget_cast')
    event.get('thermal:crafting/casts').add('superpackutils:chiller_gear_cast')
    event.get('thermal:crafting/casts').add('superpackutils:chiller_plate_cast')
    event.get('thermal:crafting/casts').add('superpackutils:chiller_coin_cast')

    event.get('forge:slag').remove('immersiveengineering:slag')

});