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

    //Control Circuit
    event.remove({output: 'advgenerators:controller'})
    event.shaped('advgenerators:controller', ['EIE', 'ICI', 'EIE'], {
        C: 'superpackutils:coated_circuit_board',
        E: 'superpackutils:polished_certus_quartz',
        I: 'superpackutils:carbon_plate'
    }),


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
        A: 'createaddition:iron_wire',
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