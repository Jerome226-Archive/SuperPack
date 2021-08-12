//priority: 1500

events.listen('recipes', function (event) {

    //Power IO
    event.remove({output: 'advgenerators:power_io'})
    event.shaped('advgenerators:power_io', ['AVA', 'STL', 'AVA'], {
        A: 'advgenerators:iron_frame',
        S: 'thermal:copper_ingot',
        L: 'thermal:lead_ingot',
        V: 'thermal:redstone_servo',
        T: 'thermal:rf_coil'
    })

    //Iron-Redstone Wiring
    event.remove({output: 'advgenerators:iron_wiring'})
    event.shaped('advgenerators:iron_wiring', [' AL', 'ASA', 'LA '], {
        A: 'superpackutils:resonating_coil',
        S: 'immersiveengineering:stick_iron',
        L: 'minecraft:stick'
    })

    //Iron Tubing
    event.remove({output: 'advgenerators:iron_tubing'})
    event.shaped('advgenerators:iron_tubing', [' AL', 'ASA', 'LA '], {
        A: 'advgenerators:iron_tubing',
        S: 'immersiveengineering:stick_iron',
        L: 'minecraft:stick'
    })

    //Pressure Valve
    event.remove({output: 'advgenerators:pressure_valve'})
    event.shaped('advgenerators:pressure_valve', [' I ', 'ICI', ' I '], {
        C: '#create:valve_handles',
        I: 'advgenerators:iron_frame'
    }),

    //Advanced Pressure Valve
    event.remove({output: 'advgenerators:advanced_pressure_valve'})
    event.shaped('advgenerators:advanced_pressure_valve', [' I ', 'ICI', ' I '], {
        C: 'advgenerators:pressure_valve',
        I: 'extendedcrafting:ender_ingot'
    }),

    //Advanced Generators Iron Frame
    event.remove({output: 'advgenerators:iron_frame'})
    event.custom({
        "type":"createaddition:rolling",
        "input": {
              "item": 'superpackutils:triple_iron_rod'
        },
        "result": {
            "item": 'advgenerators:iron_frame',
            "count": 1
        }
    })

});