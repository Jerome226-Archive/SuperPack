//priority: 1500

events.listen('recipes', function (event) { 

    event.remove({id: 'botania:mana_infusion/cocoa_beans_to_wheat_seeds'})

    //Cabbage 
    event.custom({
        "type": "botania:mana_infusion",
        "input": {
          "item": "minecraft:cocoa_beans"
        },
        "output": {
          "item": "farmersdelight:cabbage_seeds"
        },
        "mana": 6000,
        "group": "botania:crop_cycle",
        "catalyst": {
          "type": "block",
          "block": "botania:alchemy_catalyst"
        }
    })

    //Tomato
    event.custom({
        "type": "botania:mana_infusion",
        "input": {
          "item": "farmersdelight:cabbage_seeds"
        },
        "output": {
          "item": "farmersdelight:tomato_seeds"
        },
        "mana": 6000,
        "group": "botania:crop_cycle",
        "catalyst": {
          "type": "block",
          "block": "botania:alchemy_catalyst"
        }
    })

    //Frost Melon
    event.custom({
        "type": "botania:mana_infusion",
        "input": {
          "item": "farmersdelight:tomato_seeds"
        },
        "output": {
          "item": "thermal:frost_melon_seeds"
        },
        "mana": 6000,
        "group": "botania:crop_cycle",
        "catalyst": {
          "type": "block",
          "block": "botania:alchemy_catalyst"
        }
    })

    //Industrial Hemp Seeds
    event.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item": "thermal:frost_melon_seeds"
        },
        "output": {
          "item": "immersiveengineering:seed"
        },
        "mana": 6000,
        "group": "botania:crop_cycle",
        "catalyst": {
          "type": "block",
          "block": "botania:alchemy_catalyst"
        }
    })

    //Barley Seeds
    event.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item": "immersiveengineering:seed"
        },
        "output": {
          "item": "thermal:barley_seeds"
        },
        "mana": 6000,
        "group": "botania:crop_cycle",
        "catalyst": {
          "type": "block",
          "block": "botania:alchemy_catalyst"
        }
    })

    //Corn Seeds
    event.custom({
      "type": "botania:mana_infusion",
      "input": {
        "item": "thermal:barley_seeds"
      },
      "output": {
        "item": "thermal:corn_seeds"
      },
      "mana": 6000,
      "group": "botania:crop_cycle",
      "catalyst": {
        "type": "block",
        "block": "botania:alchemy_catalyst"
      }
  })

  //Onion Seeds
  event.custom({
    "type": "botania:mana_infusion",
    "input": {
      "item": "thermal:corn_seeds"
    },
    "output": {
      "item": "thermal:onion_seeds"
    },
    "mana": 6000,
    "group": "botania:crop_cycle",
    "catalyst": {
      "type": "block",
      "block": "botania:alchemy_catalyst"
    }
})

  //Radish Seeds
  event.custom({
    "type": "botania:mana_infusion",
    "input": {
      "item": "thermal:onion_seeds"
    },
    "output": {
      "item": "thermal:radish_seeds"
    },
    "mana": 6000,
    "group": "botania:crop_cycle",
    "catalyst": {
      "type": "block",
      "block": "botania:alchemy_catalyst"
    }
})

//Rice Seeds
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "thermal:radish_seeds"
  },
  "output": {
    "item": "thermal:rice_seeds"
  },
  "mana": 6000,
  "group": "botania:crop_cycle",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  }
})

//Sadiroot Seeds
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "thermal:rice_seeds"
  },
  "output": {
    "item": "thermal:sadiroot_seeds"
  },
  "mana": 6000,
  "group": "botania:crop_cycle",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  }
})

//Spinach Seeds
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "thermal:sadiroot_seeds"
  },
  "output": {
    "item": "thermal:spinach_seeds"
  },
  "mana": 6000,
  "group": "botania:crop_cycle",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  }
})

//Bell Pepper Seeds
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "thermal:spinach_seeds"
  },
  "output": {
    "item": "thermal:bell_pepper_seeds"
  },
  "mana": 6000,
  "group": "botania:crop_cycle",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  }
})

//Eggplant Seeds
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "thermal:bell_pepper_seeds"
  },
  "output": {
    "item": "thermal:eggplant_seeds"
  },
  "mana": 6000,
  "group": "botania:crop_cycle",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  }
})

//Green Bean Seeds
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "thermal:eggplant_seeds"
  },
  "output": {
    "item": "thermal:green_bean_seeds"
  },
  "mana": 6000,
  "group": "botania:crop_cycle",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  }
})

//Peanut Seeds
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "thermal:green_bean_seeds"
  },
  "output": {
    "item": "thermal:peanut_seeds"
  },
  "mana": 6000,
  "group": "botania:crop_cycle",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  }
})

//Strawberry Seeds
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "thermal:peanut_seeds"
  },
  "output": {
    "item": "thermal:strawberry_seeds"
  },
  "mana": 6000,
  "group": "botania:crop_cycle",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  }
})

//Tomato Seeds
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "thermal:strawberry_seeds"
  },
  "output": {
    "item": "thermal:tomato_seeds"
  },
  "mana": 6000,
  "group": "botania:crop_cycle",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  }
})

//Hops Seeds
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "thermal:tomato_seeds"
  },
  "output": {
    "item": "thermal:hops_seeds"
  },
  "mana": 6000,
  "group": "botania:crop_cycle",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  }
})

//Tea Seeds
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "thermal:hops_seeds"
  },
  "output": {
    "item": "thermal:tea_seeds"
  },
  "mana": 6000,
  "group": "botania:crop_cycle",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  }
})

//Flax Seeds
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "thermal:tea_seeds"
  },
  "output": {
    "item": "supplementaries:flax_seeds"
  },
  "mana": 6000,
  "group": "botania:crop_cycle",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  }
})

//Onion
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "supplementaries:flax_seeds"
  },
  "output": {
    "item": "farmersdelight:onion"
  },
  "mana": 6000,
  "group": "botania:crop_cycle",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  }
})

//Rice Panicle
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "farmersdelight:onion"
  },
  "output": {
    "item": "farmersdelight:rice_panicle"
  },
  "mana": 6000,
  "group": "botania:crop_cycle",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  }
})

//Wheat Seeds
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "farmersdelight:rice_panicle"
  },
  "output": {
    "item": "minecraft:wheat_seeds"
  },
  "mana": 6000,
  "group": "botania:crop_cycle",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  }
})

});