Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  this.route('welcome', {
    path: '/'
  });

  this.route('mess', {
    path: '/Messages'
  });
  // this.route('Feedback', {
  //   path: '/Feedback'
  // });
  //
  //
  // this.route('Status', {
  //   path: '/Status'
  // });
  //
  //   this.route('techsWorking', {
  //     path: '/techsWorking'
  //   });

});
