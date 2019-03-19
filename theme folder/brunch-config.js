// See http://brunch.io for documentation.
exports.files = {
  // Je demande à Brunch de compiler mes fichiers javascript...
  javascripts: {joinTo: {
    // dans js/app.js si le fichier d'origine se trouve dans le dossier "app"
    'js/app.js': /^app/,
    // dans js/vendors.js si le fichier d'origine se trouve dans le dossier "node_modules"
    'js/vendors.js': /^node_modules/}
  },
  stylesheets: {joinTo: {
    'css/app.css': /^app/,
    'css/vendors.css': /^node_modules/}
  }
};

// J'ajoute des configurations pour mes modules NPM
exports.npm = {
  styles: {
    'font-awesome': ['css/font-awesome.css'],
    'normalize.css': ['normalize.css']
  }
};

// J'ajoute des configurations pour le comportement de Brunch vis à vis des modules 
exports.modules = {
  // Je demande à Brunch d'autorequire "initialize" présent dans "app.js"
  autoRequire: {
    'js/app.js': ['initialize']
    // Cela me permet de ne pas écrire dans mon html:
    // <script>require('initialize');</script>
  }
};

// J'ajoute des configurations pour mes plugins
exports.plugins = {
  // Je demande à copycat de créer un dossier "fonts" dans "public"
  // Dans le dossier, je lui dit de copier/coller le contenu du dossier
  // "fonts", présent dans "font-awesome"
  copycat: {
    'fonts': ['node_modules/font-awesome/fonts']
  },

  // Je demande à browserSync de regarder TOUT les fichiers
  browserSync: {
    files: ['*']
  }
};

// Je demande à Browser Sync d'attendre la fin de génération
// de la page avant de recharger la page
exports.watcher = {
  usePolling: true,
  awaitWriteFinish: true
};
