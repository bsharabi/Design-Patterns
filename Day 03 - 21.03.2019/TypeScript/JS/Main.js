"use strict";
exports.__esModule = true;
var HomeActionFacade_1 = require("./HomeActionFacade");
var home = HomeActionFacade_1.HomeActionFacade.getInstance();
var home1 = HomeActionFacade_1.HomeActionFacade.getInstance();
var home2 = HomeActionFacade_1.HomeActionFacade.getInstance();
console.log(home);
home.Sleep();
home.ExitTheHouse();
console.log(home1);
home1.Sleep();
home1.ExitTheHouse();
console.log(home2);
home2.Sleep();
home2.ExitTheHouse();
