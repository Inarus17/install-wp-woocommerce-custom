var app = {
  
  init: function() {

    console.log('init');

    $body = $('body');
    $togglemenu = $('.toggle-menu');

    $togglemenu.on('click', app.toggleMenu);
  },
  toggleMenu: function(evt) {

    evt.preventDefault();

    $body.toggleClass('menu-is-open');
  }
};

$(app.init);