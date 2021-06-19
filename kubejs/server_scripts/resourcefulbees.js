//priority: 1500

events.listen('recipes', function (event) {

    //Centrifuge Casing
    event.remove({output: 'resourcefulbees:centrifuge_casing'})
    event.shaped(Item.of('resourcefulbees:centrifuge_casing', 4), ['BCB', 'AIA', 'BCB'], {
        C: 'superpackutils:cupronickel_ingot',
        A: 'superpackutils:sturdy_capacitor',
        B: '#forge:sheetmetals/nickel',
        I: 'mekanism:steel_casing'
  })

  //Centrifuge Controller
  event.remove({output: 'resourcefulbees:centrifuge_controller'})
  event.shaped('resourcefulbees:centrifuge_controller', [
    'PEP',
    'GHG',
    'PFP'
  ], {
    P: 'resourcefulbees:centrifuge_casing',
    E: 'superpackutils:circuit_board',
    F: 'superpackutils:energetic_processor',
    G: 'mekanism:basic_control_circuit',
    H: 'mekanism:steel_casing'
  })

  //Manual Centrfuge
  event.remove({output: 'resourcefulbees:mechanical_centrifuge'})
  event.shaped('resourcefulbees:mechanical_centrifuge', ['BCB', 'AIA', 'BCB'], {
    C:'immersiveengineering:sheetmetal_steel',
    A: 'create:hand_crank',
    B: 'immersiveengineering:treated_wood_horizontal',
    I: 'refinedstorage:machine_casing'
  })

  //Centrifuge
  event.remove({output: 'resourcefulbees:centrifuge'})
  event.shaped('resourcefulbees:centrifuge', ['BCB', 'AIA', 'BDB'], {
    C: 'create:propeller',
    D: 'create:mechanical_press',
    A: 'superpackutils:reinforced_capacitor',
    B: 'immersiveengineering:sheetmetal_steel',
    I: 'resourcefulbees:mechanical_centrifuge'
  })

});