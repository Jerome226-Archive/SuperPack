// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  // Change recipes here

  //lists
  let wood = ['oak','birch','spruce','jungle','acacia','dark_oak']

  //remove tool recipes
  event.remove({output: /minecraft:.+_sword/})
  event.remove({output: /minecraft:.+_pickaxe/})
  event.remove({output: /minecraft:.+_axe/})
  event.remove({output: /minecraft:.+_shovel/})
  event.remove({output: /minecraft:.+_hoe/})
  event.remove({output: 'minecraft:bow'})

//bow
  event.shaped(Item.of('tetra:modular_bow', {"bow/stave":"bow/straight_stave",HideFlags:1,"bow/basic_string_material":"basic_string/string","bow/string":"bow/basic_string","bow/straight_stave_material":"straight_stave/stick"}), [
      ' SF',
      'S F',
      ' SF'
  ], {
    S: `minecraft:stick`,
    F: `minecraft:string`
  })

//wooden swords
  wood.forEach(wood => {
        event.shaped(Item.of('tetra:modular_sword', {"sword/basic_hilt_material":"basic_hilt/stick",HideFlags:1,"sword/hilt":"sword/basic_hilt","sword/blade":"sword/basic_blade","sword/basic_blade_material":`basic_blade/${wood}`}), [
      ' P ',
      ' P ',
      ' S '
    ], {
      P: `minecraft:${wood}_planks`,
      S: `minecraft:stick`
    })
  });

//wooden pickaxes
  wood.forEach(wood => {
        event.shaped(Item.of('tetra:modular_double', {"double/handle":"double/basic_handle","double/head_left":"double/basic_pickaxe_left",HideFlags:1,"double/head_right":"double/basic_pickaxe_right","double/basic_pickaxe_right_material":`basic_pickaxe/${wood}`,"double/basic_pickaxe_left_material":`basic_pickaxe/${wood}`,"double/basic_handle_material":"basic_handle/stick"}), [
      'PPP',
      ' S ',
      ' S '
    ], {
      P: `minecraft:${wood}_planks`,
      S: `minecraft:stick`
    })
  });

//wooden axes
  wood.forEach(wood => {
      event.shaped(Item.of('tetra:modular_double', {"double/butt_right_material":`butt/${wood}`,"double/basic_axe_left_material":`basic_axe/${wood}`,"double/handle":"double/basic_handle","double/head_left":"double/basic_axe_left",HideFlags:1,"double/head_right":"double/butt_right","double/basic_handle_material":"basic_handle/stick"}), [
    'PP ',
    'PS ',
    ' S '
    ], {
      P: `minecraft:${wood}_planks`,
      S: `minecraft:stick`
    })
  });

//wooden hoes
  wood.forEach(wood => {
      event.shaped(Item.of('tetra:modular_double', {"double/butt_right_material":`butt/${wood}`,"double/handle":"double/basic_handle","double/head_left":"double/hoe_left",HideFlags:1,"double/head_right":"double/butt_right","double/hoe_left_material":`hoe/${wood}`,"double/basic_handle_material":"basic_handle/stick"}), [
    'PP ',
    ' S ',
    ' S '
    ], {
      P: `minecraft:${wood}_planks`,
      S: `minecraft:stick`
    })
  });

//wooden shovels
  wood.forEach(wood => {
    event.shaped(Item.of('tetra:modular_single', {"single/basic_shovel_material":`basic_shovel/${wood}`,HideFlags:1,"single/head":"single/basic_shovel","single/handle":"single/basic_handle","single/basic_handle_material":"basic_handle/stick"}), [
    ' P ',
    ' S ',
    ' S '
    ], {
      P: `minecraft:${wood}_planks`,
      S: `minecraft:stick`
    })
  });
})




onEvent('item.tags', event => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.get('forge:cobblestone').add('minecraft:diamond_ore')
  
  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})