Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  this.route('welcome', {
    path: '/'
  });

  this.route('gameS', {
    path: '/Game_Slection'
  });
  this.route('newG', {
    path: '/NewGame'
  });


  this.route('fGame', {
    path: '/Find_Game'
  });
  
  //   this.route('techsWorking', {
  //     path: '/techsWorking'
  //   });

});
