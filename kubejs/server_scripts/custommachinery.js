//priority: 1500

events.listen('recipes', function (event) {

    //Resonator
    event.shaped(Item.of('custommachinery:custom_machine_item', {machine:"custommachinery:resonator"}), ['CAC', 'BHB', 'PAP'], {
        P: 'immersiveengineering:plate_steel',
        A: 'thermal:rf_coil',
        B: 'mekanism:basic_control_circuit',
        H: 'refinedstorage:machine_casing',
        C: 'superpackutils:steel_gear'
    }),

    //Distiller
    event.shaped(Item.of('custommachinery:custom_machine_item', {machine:"custommachinery:distiller"}), ['CJC', 'BHB', 'PAP'], {
        P: 'thermal:silver_plate',
        A: 'createaddition:heater',
        J: 'mekanismgenerators:solar_panel',
        B: 'mekanism:elite_control_circuit',
        H: 'refinedstorage:machine_casing',
        C: 'thermal:silver_gear'
    })

});