Template.lesscSheet.helpers({
  gamename: function gamename() {
    return "Function search user for game type/name"
    // return Meteor.user().find({})
  }
});

function newSheetCheck(template) {
  var might = document.getElementById("might");
  var finesse = document.getElementById("finesse");
  var fortitude = document.getElementById("fortitude");
  var grace = document.getElementById("grace");
  var will = document.getElementById("will");
  var psyche = document.getElementById("psyche");
  console.log(will);
  if (might && finesse && fortitude && grace && will && psyche == null) {
    return 2
  }
};

Template.atTable.helpers({
 allBlankCheck: function allBlankCheck(Template){
   return newSheetCheck(Template);
 }

})
