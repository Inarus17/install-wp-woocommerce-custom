# Mise en place WordPress
-------------------------

## Installation via composer

    Marche à suivre :
        1- Créer un nouveau dossier pour le projet.
        2- Copier dans ce dossier le contenu de ce dossier.
        3- Exécuter la commande “composer install”.
        4- Créer la base de données qui sera utilisée dans ce projet. Attention à bien utiliser le jeu de caractères "utf8-general-ci". Si ça n'est pas le cas, se connecter sur PhpMyAdmin, aller sur votre bdd, puis aller sur l'onglet "Opérations". Dans "interclassement", choisir "UTF8-general-ci" et cliquer sur "éxecuter".
        5- Dupliquer “wp-config-sample.php”, le renommer “wp-config.php” et le compléter (infos de la base de données, clés de salage, liens vers “/content”, paramètres de débug).
        6- Depuis le terminal:
            - modifier le nom du groupe propriétaire des fichiers/dossiers du projet :
            _(commande : sudo chown -R <nom_utilisateur>:www-data . )_
            - modifier les droits des fichiers du projet :
            _(commande : sudo find . -type f -exec chmod 664 {} + )_
            - modifier les droits des dossiers du projet :
            _(commande : sudo find . -type d -exec chmod 775 {} + )_
            - modifier les droits sur le fichier “.htaccess” :
            (commande: sudo chmod 644 .htacces )
        7- Aller sur la page du projet avec un navigateur et paramétrer WordPress (choix de la langue, …)
        8- Modifier les permaliens (choisir “nom de l’article”), et supprimer “/wp” à la fin de “adresse du web site (URL). (Nb: penser à sauvegarder les changements).

		Raccourci : 
			sudo chown -R <mon-utilisateur>:www-data .
			sudo find . -type f -exec chmod 664 {} +
			sudo find . -type d -exec chmod 775 {} +
			sudo chmod 644 .htaccess

## Mise en place Brunch

    1- Renommer le dossier _"theme folder"_ au nom du thème que l'on souhaite créer.
    2- Avec le terminal, se déplacer dans ce dossier, puis effectuer la commande _"npm install"_. Cela devrait installer les dépendacnes et créer le dossier _"public"_ ou sera compilé le contenu du dossier _"app"_.
    3- Dans le fichier “index.html” de “app”, dans le head, ajouter les balises style et script nécessaires.
    4- Dans le terminal, saisir la commande “npm start” pour lancer le watcher, ou la commande “npm run build” pour mettre à jour le dossier “public”.
    5- Travailler dans le dossier _"app"_ pour créer le contenu désiré (la structure html du site dans _"assets/index.html"_).
    6- Pour visualiser en temps réel les changements grâce au watcher, lancer un navigateur, et dans l’URL saisir “localhost:3333”. Les changements se feront à chaque enregistrement de modifications sur l’éditeur de texte.
    7- A l’aide du terminal, aller dans le dossier _“app/stylesheets”_. Puis toujours à l’aide du terminal, créer les fichiers nécessaires à la réalisation de l'integration scss selon le _pattern 7.1_ (commande _“touch nom-du-fichier”_).  Ne pas oublier les fichiers “_shame.scss” et “main.scss”.
    Tous les noms de fichiers .scss en dehors du fichier “main” devront commencer par un _.
    Le fichier “main.scss” devra ensuite tous les compiler via des “@import ‘dossier/fichier’ “. Toujours commencer par le fichier de variables et terminer par le fichier “shame”.

    Et voila, tout est prêt !
