//priority: 2000

events.listen('jei.information', function (event) {

    event.add(fluid.of('mekanismgenerators:bioethanol'), ['Bioethanol is a byproduct of the Bio Generator.'])
    event.add('astralsorcery:infused_wood', ['Drop some planks in Liquid Starlight to get Infused Wood.'])

});