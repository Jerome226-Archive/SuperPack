onEvent('recipes', event => {
    
    function disk(type, mod, storageHousing, tier1, tier2, tier3, tier4, tier5, tier6, tier7, tier8) {

    event.remove({output: `${mod}:${tier1}_storage_disk`})
    event.recipes.mekanism.combining(`${mod}:${tier1}_storage_disk`, storageHousing, `${mod}:${tier1}_storage_part`)

    event.remove({output: `${mod}:${tier2}_storage_disk`})
    event.recipes.mekanism.combining(`${mod}:${tier2}_storage_disk`, storageHousing, `${mod}:${tier2}_storage_part`)

    event.remove({output: `${mod}:${tier3}_storage_disk`})
    event.recipes.mekanism.combining(`${mod}:${tier3}_storage_disk`, storageHousing, `${mod}:${tier3}_storage_part`)

    event.remove({output: `${mod}:${tier4}_storage_disk`})
    event.recipes.mekanism.combining(`${mod}:${tier4}_storage_disk`, storageHousing, `${mod}:${tier4}_storage_part`)

    if(mod == 'extradisks') {

    event.remove({output: `${mod}:${tier5}_storage_disk`})
    event.recipes.mekanism.combining(`${mod}:${tier5}_storage_disk`, storageHousing, `${mod}:${tier5}_storage_part`)

    }

    if (type == 'advanced_item') {

    event.remove({output: `${mod}:${tier6}_storage_disk`})
    event.recipes.mekanism.combining(`${mod}:${tier6}_storage_disk`, storageHousing, `${mod}:${tier6}_storage_part`)

    event.remove({output: `${mod}:${tier7}_storage_disk`})
    event.recipes.mekanism.combining(`${mod}:${tier7}_storage_disk`, storageHousing, `${mod}:${tier7}_storage_part`)

    event.remove({output: `${mod}:${tier8}_storage_disk`})
    event.recipes.mekanism.combining(`${mod}:${tier8}_storage_disk`, storageHousing, `${mod}:${tier8}_storage_part`)

    }

    }

    disk('item', 'refinedstorage', 'refinedstorage:storage_housing', '1k', '4k', '16k', '64k', null, null, null, null)
    disk('fluid', 'refinedstorage', 'refinedstorage:storage_housing', '64k_fluid', '256k_fluid', '1024k_fluid', '4096k_fluid', null, null, null, null)

    disk('advanced_item', 'extradisks', 'extradisks:advanced_storage_housing', '256k', '1024k', '4096k', '16384k', '65536k', '262144k', '1048576k', 'infinite')
    disk('advanced_fluid', 'extradisks', 'extradisks:advanced_storage_housing', '16384k_fluid', '65536k_fluid', '262144k_fluid', '1048576k_fluid', 'infinite_fluid', null, null, null)

});