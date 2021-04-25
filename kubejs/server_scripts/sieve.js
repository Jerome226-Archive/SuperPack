onEvent('recipes', event => {
    function sieve(name, oreBlock, orePieceItem, sandType, chance) {

        event.shaped(oreBlock, ['II', 'II'], {
            I: orePieceItem
        })

    }

    sieve('iron', 'minecraft:iron_ore', 'superpackutils:iron_ore_piece', null, null)
    sieve('gold', 'minecraft:gold_ore', 'superpackutils:gold_ore_piece', null, null)
    sieve('copper', 'thermal:copper_ore', 'superpackutils:copper_ore_piece', null, null)
    sieve('tin', 'thermal:tin_ore', 'superpackutils:tin_ore_piece', null, null)
    sieve('lead', 'thermal:lead_ore', 'superpackutils:lead_ore_piece', null, null)
    sieve('silver', 'thermal:silver_ore', 'superpackutils:silver_ore_piece', null, null)
    sieve('nickel', 'thermal:nickel_ore', 'superpackutils:nickel_ore_piece', null, null)
    sieve('uranium', 'mekanism:uranium_ore', 'superpackutils:uranium_ore_piece', null, null)
    sieve('osmium', 'mekanism:osmium_ore', 'superpackutils:osmium_ore_piece', null, null)
    sieve('aluminum', 'immersiveengineering:ore_aluminum', 'superpackutils:aluminium_ore_piece', null, null)

});