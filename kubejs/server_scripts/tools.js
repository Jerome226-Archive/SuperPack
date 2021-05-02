//priority: 1500

events.listen('recipes', function (event) { 

//Netherite Tools Remove
event.remove({output: 'minecraft:netherite_shovel'})
event.remove({output: 'minecraft:netherite_pickaxe'})
event.remove({output: 'minecraft:netherite_axe'})
event.remove({output: 'minecraft:netherite_sword'})
event.remove({output: 'minecraft:netherite_hoe'})

//Shovel
var shovel = [
    'minecraft:wooden_shovel',
    'minecraft:stone_shovel',
    'minecraft:iron_shovel',
    'minecraft:diamond_shovel',
    'minecraft:golden_shovel',
    'minecraft:netherite_shovel',
    'iceandfire:silver_shovel',
    'iceandfire:copper_shovel',

];

shovel.forEach((removal) => {
    event.replaceOutput({type: 'minecraft:crafting_shaped'}, removal, 'superpackutils:shovel')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, removal, 'superpackutils:shovel');
    event.replaceInput({type: 'minecraft:smithing'}, removal, 'superpackutils:shovel');
    event.remove({input: removal});
});

//Pickaxe
var pickaxe = [
    'minecraft:wooden_pickaxe',
    'minecraft:stone_pickaxe',
    'minecraft:iron_pickaxe',
    'minecraft:diamond_pickaxe',
    'minecraft:golden_pickaxe',
    'minecraft:netherite_pickaxe',
    'iceandfire:silver_pickaxe',
    'iceandfire:copper_pickaxe',
];

pickaxe.forEach((removal) => {
    event.replaceOutput({type: 'minecraft:crafting_shaped'}, removal, 'superpackutils:pickaxe')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, removal, 'superpackutils:pickaxe');
    event.replaceInput({type: 'minecraft:smithing'}, removal, 'superpackutils:pickaxe');
    event.remove({input: removal});
});

//Axe
var axe = [
    'minecraft:wooden_axe',
    'minecraft:stone_axe',
    'minecraft:iron_axe',
    'minecraft:diamond_axe',
    'minecraft:golden_axe',
    'minecraft:netherite_axe',
    'iceandfire:silver_axe',
    'iceandfire:copper_axe',
];

axe.forEach((removal) => {
    event.replaceOutput({type: 'minecraft:crafting_shaped'}, removal, 'superpackutils:axe')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, removal, 'superpackutils:axe');
    event.replaceInput({type: 'minecraft:smithing'}, removal, 'superpackutils:axe');
    event.remove({input: removal});
});

//Sword
var sword = [
    'minecraft:wooden_sword',
    'minecraft:stone_sword',
    'minecraft:iron_sword',
    'minecraft:diamond_sword',
    'minecraft:netherite_sword',
    'minecraft:golden_axe',
    'iceandfire:silver_sword',
    'iceandfire:copper_sword',
];

sword.forEach((removal) => {
    event.replaceOutput({type: 'minecraft:crafting_shaped'}, removal, 'superpackutils:sword')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, removal, 'superpackutils:sword');
    event.replaceInput({type: 'minecraft:smithing'}, removal, 'superpackutils:sword');
    event.remove({input: removal});
});

//Hoe
var hoe = [
    'minecraft:wooden_hoe',
    'minecraft:stone_hoe',
    'minecraft:iron_hoe',
    'minecraft:diamond_hoe',
    'minecraft:netherite_hoe',
    'minecraft:golden_hoe',
    'iceandfire:silver_hoe',
    'iceandfire:copper_hoe',
];

hoe.forEach((removal) => {
    event.replaceOutput({type: 'minecraft:crafting_shaped'}, removal, 'superpackutils:hoe')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, removal, 'superpackutils:hoe');
    event.replaceInput({type: 'minecraft:smithing'}, removal, 'superpackutils:hoe');
    event.remove({input: removal});
});


});