//priority 999999999
events.listen('recipes', function (event) {

var outputRemoval = [
    'thermal:machine_frame',
    'youmatter:scanner',
    'youmatter:encoder',
    'youmatter:creator',
    'youmatter:replicator',
    'mekanismgenerators:fission_reactor_casing',
    'mekanismgenerators:fission_reactor_port',
    'mekanismgenerators:fission_reactor_logic_adapter',
    'mekanismgenerators:fission_fuel_assembly',
    'mekanism:elite_control_circuit',
    'mekanism:ultimate_control_circuit',
    'mekanism:mekasuit_helmet',
    'mekanism:mekasuit_bodyarmor',
    'mekanism:mekasuit_pants',
    'mekanism:mekasuit_boots',
    'mekanism:solar_neutron_activator',
    'mekanism:modification_station',

];

var modRemoval = [
    'pneumaticcraft',
    'bloodmagic',
    
];

outputRemoval.forEach((removal) => {
    event.remove({ output: removal });
});

modRemoval.forEach((removal) => {
    event.remove({ mod: removal });
});

});