//priority: 1500

events.listen('recipes', function (event) {

    //Tallow Remove
    event.remove({id: 'eidolon:tallow'})

    //Wooden Table
    event.remove({output: 'eidolon:wooden_altar'})
    event.shaped('eidolon:wooden_altar', ['WWW', 'A A', 'A A'], {
        A: 'eidolon:polished_planks',
        W: 'eidolon:polished_planks_slab'
    })

    //Stone Altar
    event.remove({output: 'eidolon:stone_altar'})
    event.shaped('eidolon:stone_altar', ['WWW', 'A A', 'A A'], {
        A: 'eidolon:smooth_stone_bricks',
        W: 'eidolon:smooth_stone_bricks_slab'
    })

    //Crucible
    event.remove({output: 'eidolon:crucible'})
    event.shaped('eidolon:crucible', ['ABA', 'AWA', 'AAA'], {
        A: 'eidolon:pewter_ingot',
        B: 'minecraft:wooden_shovel',
        W: 'exnihilosequentia:crucible_fired'
    })

    //Magic Workbench
    event.remove({output: 'eidolon:worktable'})
    event.shaped('eidolon:worktable', ['BCB', 'TWT', 'AAA'], {
        A: 'eidolon:polished_planks',
        W: 'eidolon:wooden_altar',
        B: 'eidolon:polished_planks_slab',
        C: 'minecraft:red_carpet',
        T: 'eidolon:pewter_inlay'
    })

});