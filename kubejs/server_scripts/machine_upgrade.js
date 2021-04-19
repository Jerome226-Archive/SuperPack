onEvent('recipes', event => {
    function machine(machine, machineBasic, machineAdvanced, machineElite, machineUltimate) {

    event.remove({output: machineBasic})
    event.recipes.mekanism.combining(machineBasic, machine, 'mekanism:basic_tier_installer')

    event.remove({output: machineAdvanced})
    event.recipes.mekanism.combining(machineAdvanced, machineBasic, 'mekanism:advanced_tier_installer')

    event.remove({output: machineElite})
    event.recipes.mekanism.combining(machineElite, machineAdvanced, 'mekanism:elite_tier_installer')

    event.remove({output: machineUltimate})
    event.recipes.mekanism.combining(machineUltimate, machineElite, 'mekanism:ultimate_tier_installer')

    }

    machine('mekanism:energized_smelter', 'mekanism:basic_smelting_factory', 'mekanism:advanced_smelting_factory', 'mekanism:elite_smelting_factory', 'mekanism:ultimate_smelting_factory')
    machine('mekanism:enrichment_chamber', 'mekanism:basic_enriching_factory', 'mekanism:advanced_enriching_factory', 'mekanism:elite_enriching_factory', 'mekanism:ultimate_enriching_factory')
    machine('mekanism:crusher', 'mekanism:basic_crushing_factory', 'mekanism:advanced_crushing_factory', 'mekanism:elite_crushing_factory', 'mekanism:ultimate_crushing_factory')
    machine('mekanism:osmium_compressor','mekanism:basic_compressing_factory','mekanism:advanced_compressing_factory','mekanism:elite_compressing_factory','mekanism:ultimate_compressing_factory')
    machine('mekanism:combiner','mekanism:basic_combining_factory','mekanism:advanced_combining_factory','mekanism:elite_combining_factory','mekanism:ultimate_combining_factory')
    machine('mekanism:purification_chamber','mekanism:basic_purifying_factory','mekanism:advanced_purifying_factory','mekanism:elite_purifying_factory','mekanism:ultimate_purifying_factory')
    machine('mekanism:chemical_injection_chamber','mekanism:basic_injecting_factory','mekanism:advanced_injecting_factory','mekanism:elite_injecting_factory','mekanism:ultimate_injecting_factory')
    machine('mekanism:metallurgic_infuser','mekanism:basic_infusing_factory','mekanism:advanced_infusing_factory','mekanism:elite_infusing_factory','mekanism:ultimate_infusing_factory')
    machine('mekanism:precision_sawmill','mekanism:basic_sawing_factory','mekanism:advanced_sawing_factory','mekanism:elite_sawing_factory','mekanism:ultimate_sawing_factory')

});