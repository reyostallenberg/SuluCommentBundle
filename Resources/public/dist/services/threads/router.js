define(["services/husky/util","services/husky/mediator"],function(a,b){"use strict";function c(){}var d=null,e=function(){return null===d&&(d=new c),d},f=function(a){b.emit("sulu.router.navigate",a,!0,!0)};return c.prototype={toList:function(){f("threads")},toEdit:function(a,b){f("threads/edit:"+a+"/"+(b||"details"))}},e()});