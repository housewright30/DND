Template.gameS.helpers({

})

Template.gameS.events({
  "click .newGame": function (event, template){
    Router.go('newG')
  }

})
Template.gameS.events({
  "click .fGameb": function (event, template){
    Router.go('fGame')
  }
})
