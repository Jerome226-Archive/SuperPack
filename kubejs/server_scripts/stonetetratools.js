// priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  // Change recipes here

  //lists
  let stone = ['andesite','diorite','granite']

//stone swords
  stone.forEach(stone => {
        event.shaped(Item.of('tetra:modular_sword', {"sword/basic_hilt_material":"basic_hilt/stick",HideFlags:1,"sword/hilt":"sword/basic_hilt","sword/blade":"sword/basic_blade","sword/basic_blade_material":`basic_blade/${stone}`}), [
      ' P ',
      ' P ',
      ' S '
    ], {
      P: `minecraft:${stone}`,
      S: `minecraft:stick`
    })
  });

//stone pickaxes
  stone.forEach(stone => {
        event.shaped(Item.of('tetra:modular_double', {"double/handle":"double/basic_handle","double/head_left":"double/basic_pickaxe_left",HideFlags:1,"double/head_right":"double/basic_pickaxe_right","double/basic_pickaxe_right_material":`basic_pickaxe/${stone}`,"double/basic_pickaxe_left_material":`basic_pickaxe/${stone}`,"double/basic_handle_material":"basic_handle/stick"}), [
      'PPP',
      ' S ',
      ' S '
    ], {
      P: `minecraft:${stone}`,
      S: `minecraft:stick`
    })
  });

//stone axes
  stone.forEach(stone => {
      event.shaped(Item.of('tetra:modular_double', {"double/butt_right_material":`butt/${stone}`,"double/basic_axe_left_material":`basic_axe/${stone}`,"double/handle":"double/basic_handle","double/head_left":"double/basic_axe_left",HideFlags:1,"double/head_right":"double/butt_right","double/basic_handle_material":"basic_handle/stick"}), [
    'PP ',
    'PS ',
    ' S '
    ], {
      P: `minecraft:${stone}`,
      S: `minecraft:stick`
    })
  });

//stone hoes
  stone.forEach(stone => {
      event.shaped(Item.of('tetra:modular_double', {"double/butt_right_material":`butt/${stone}`,"double/handle":"double/basic_handle","double/head_left":"double/hoe_left",HideFlags:1,"double/head_right":"double/butt_right","double/hoe_left_material":`hoe/${stone}`,"double/basic_handle_material":"basic_handle/stick"}), [
    'PP ',
    ' S ',
    ' S '
    ], {
      P: `minecraft:${stone}`,
      S: `minecraft:stick`
    })
  });

//stone shovels
  stone.forEach(stone => {
    event.shaped(Item.of('tetra:modular_single', {"single/basic_shovel_material":`basic_shovel/${stone}`,HideFlags:1,"single/head":"single/basic_shovel","single/handle":"single/basic_handle","single/basic_handle_material":"basic_handle/stick"}), [
    ' P ',
    ' S ',
    ' S '
    ], {
      P: `minecraft:${stone}`,
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