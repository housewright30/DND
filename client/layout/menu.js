Session.setDefault('appName', 'Project Manager');
Session.set('currentMenu', "welcomeMenu");

Template.menu.appName = function(){
    return Session.get('appName');
}

Template.menu.helpers({
    isCurrentPage: function(pageName){
        //alert(pageName);

        return Router.current().route.getName() == pageName
    }
})

Template.menu.events({
    'click li': function(event, template) {

        Session.set('currentMenu', $(event.currentTarget).attr("class"));

    }
});
