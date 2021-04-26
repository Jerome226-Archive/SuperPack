onEvent('recipes', event => {
    function sieve(name, oreBlock, orePieceItem) {

        //Sand
        //event.remove({id: 'create:splashing/sand'})
        //event.recipes.create.splashing([Item.of('minecraft:lapis_lazuli').withChance(0.06), Item.of('astralsorcery:aquamarine').withChance(0.03), Item.of('minecraft:coal').withChance(0.08), Item.of('superpackutils:gold_ore_piece').withChance(0.035), Item.of('superpackutils:copper_ore_piece').withChance(0.086), Item.of('superpackutils:iron_ore_piece').withChance(0.15)], 'minecraft:sand')

        //event.recipes.create.splashing([Item.of('superpackutils:silver_ore_piece').withChance(0.028), Item.of('superpackutils:lead_ore_piece').withChance(0.03), Item.of('superpackutils:tin_ore_piece').withChance(0.05), Item.of('superpackutils:aluminium_ore_piece').withChance(0.043), Item.of('superpackutils:nickel_ore_piece').withChance(0.025), Item.of('thermal:sulfur').withChance(0.13), Item.of('astralsorcery:rock_crystal').withChance(0.006)], 'create:limesand')

        event.shaped(oreBlock, ['II', 'II'], {
            I: orePieceItem
        })

    }

    sieve('iron', 'minecraft:iron_ore', 'superpackutils:iron_ore_piece')
    sieve('gold', 'minecraft:gold_ore', 'superpackutils:gold_ore_piece')
    sieve('copper', 'thermal:copper_ore', 'superpackutils:copper_ore_piece')
    sieve('tin', 'thermal:tin_ore', 'superpackutils:tin_ore_piece')
    sieve('lead', 'thermal:lead_ore', 'superpackutils:lead_ore_piece')
    sieve('silver', 'thermal:silver_ore', 'superpackutils:silver_ore_piece')
    sieve('nickel', 'thermal:nickel_ore', 'superpackutils:nickel_ore_piece')
    sieve('uranium', 'mekanism:uranium_ore', 'superpackutils:uranium_ore_piece')
    sieve('osmium', 'mekanism:osmium_ore', 'superpackutils:osmium_ore_piece')
    sieve('aluminum', 'immersiveengineering:ore_aluminum', 'superpackutils:aluminium_ore_piece')

});