//priority: 1500

events.listen('recipes', function (event) {
    //-----------------------------------------------------
    //Blood Magic
    //-----------------------------------------------------
 
  //Soul Snare
  event.remove({id: 'bloodmagic:altar/soul_snare'})
	event.recipes.bloodmagic.altar('bloodmagic:soulsnare', 'botania:mana_string').upgradeLevel(0).altarSyphon(500).consumptionRate(5).drainRate(1)
 
	//Blank Slate
	event.remove({id: 'bloodmagic:altar/slate'})
	event.recipes.bloodmagic.altar('bloodmagic:blankslate', 'superpackutils:dyingrock').upgradeLevel(0).altarSyphon(1000).consumptionRate(5).drainRate(5)
 
	//Incense Altar
	event.remove({output: 'bloodmagic:incensealtar'})
	event.shaped('bloodmagic:incensealtar', [' P ', 'AIA', 'IZI'], {
        P: '#forge:ingots/brass',
        I: 'botania:livingrock',
        A: 'botania:livingrock_slab',
	      Z: 'bloodmagic:weakbloodorb'
  }),

  //Alchemy Table
  event.remove({output: 'bloodmagic:alchemytable'})
  event.shaped('bloodmagic:alchemytable', ['CBC', 'TAT', 'SPS'], {
        S: 'superpackutils:dyingrock',
        P: 'bloodmagic:blankslate',
        B: 'botania:brewery',
        T: 'botania:rune_wrath',
        A: 'botania:alchemy_catalyst',
        C: 'botania:vial'
  })

    //Slate-Infused Vial
    event.remove({id: 'bloodmagic:alchemytable/slate_vial'})
    event.custom({
        "type": "bloodmagic:alchemytable",
        "input": [
          {
            "item": "bloodmagic:blankslate"
          },
          {
            "item": "botania:vial"
          },
          {
            "tag": "forge:dyes/red"
          }
        ],
        "output": {
          "item": "bloodmagic:slate_vial",
          "count": 1
        },
        "syphon": 500,
        "ticks": 200,
        "upgradeLevel": 1
    })
 
	//Inscription Tool Air
	event.remove({id: 'bloodmagic:altar/air_tool'})
	event.recipes.bloodmagic.altar('bloodmagic:airscribetool', 'botania:rune_air').upgradeLevel(2).altarSyphon(1000).consumptionRate(5).drainRate(5)
 
	//Inscription Tool Fire
	event.remove({id: 'bloodmagic:altar/fire_tool'})
	event.recipes.bloodmagic.altar('bloodmagic:firescribetool', 'botania:rune_fire').upgradeLevel(2).altarSyphon(1000).consumptionRate(5).drainRate(5)
 
	//Inscription Tool Water
	event.remove({id: 'bloodmagic:altar/water_tool'})
	event.recipes.bloodmagic.altar('bloodmagic:waterscribetool', 'botania:rune_water').upgradeLevel(2).altarSyphon(1000).consumptionRate(5).drainRate(5)
 
	//Inscription Tool Earth
	event.remove({id: 'bloodmagic:altar/earth_tool'})
	event.recipes.bloodmagic.altar('bloodmagic:earthscribetool', 'botania:rune_earth').upgradeLevel(2).altarSyphon(1000).consumptionRate(5).drainRate(5)
 
	//Inscription Tool Dusk
	event.remove({id: 'bloodmagic:altar/dusk_tool'})
	event.recipes.bloodmagic.altar('bloodmagic:duskscribetool', 'botania:rune_pride').upgradeLevel(3).altarSyphon(2000).consumptionRate(20).drainRate(10)

});
