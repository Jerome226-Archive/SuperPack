onEvent('recipes', event => {
    
    function disk(type, tier1, tier2, tier3, tier4) {

    event.remove({output: `refinedstorage:${tier1}_storage_disk`})
    event.recipes.mekanism.combining(`refinedstorage:${tier1}_storage_disk`, 'refinedstorage:storage_housing', `refinedstorage:${tier1}_storage_part`)

    event.remove({output: `refinedstorage:${tier2}_storage_disk`})
    event.recipes.mekanism.combining(`refinedstorage:${tier2}_storage_disk`, 'refinedstorage:storage_housing', `refinedstorage:${tier2}_storage_part`)

    event.remove({output: `refinedstorage:${tier3}_storage_disk`})
    event.recipes.mekanism.combining(`refinedstorage:${tier3}_storage_disk`, 'refinedstorage:storage_housing', `refinedstorage:${tier3}_storage_part`)

    event.remove({output: `refinedstorage:${tier4}_storage_disk`})
    event.recipes.mekanism.combining(`refinedstorage:${tier4}_storage_disk`, 'refinedstorage:storage_housing', `refinedstorage:${tier4}_storage_part`)

    }

    disk('item', '1k', '4k', '16k', '64k')
    disk('fluid', '64k_fluid', '256k_fluid', '1024k_fluid', '4096k_fluid')

});