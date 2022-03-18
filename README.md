# Cayledshare

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

#ANGULAR

OPENCLASSROOMS - COURS

Un framework logiciel est un ensemble d'outils et de composants à partir desquels on peut développer des applications.

Le développement Angular passe par trois langages principaux :
* le HTML pour structurer; toutes vos connaissances avec ce langage vous seront utiles, et Angular viendra vous ajouter quelques nouveautés;

* le SCSS pour les styles; le SCSS est une sur-couche du CSS qui y apporte des fonctionnalités supplémentaires, mais qui permet également d'écrire du CSS pur si on le souhaite;

* le TypeScript pour tout ce qui est dynamique, comportement et données, un peu comme le JavaScript sur un site sans framework;  C’est du Javascript avec des syntaxes supplémentaires notamment du  typage strict.
Le typage strict nous oblige, entre autres, à spécifier le type de toutes les variables, contrairement au typage dynamique de JavaScript. Cette contrainte peut paraître gênante, mais elle permet de réduire considérablement le nombre d'erreurs au runtime, et facilite énormément le développement avec un IDE comme VS Code ou WebStorm.

Node JS - NPM -> Pour installer le CLI d’Angular(Commande Line Interface ou Interface en Ligne de Commande)
le CLI d’Angular sera l’outil principale pour Créer, Gérer et Déployer les Applications Angular.

Installer Angular/CLI
	https://angular.io/cli
	Vérifier la version de Angular/CLI 
	ng v

Construire une application avec Angular/CLI
	Générer une application ave Angular?CLI
	Découvrir la structure de base dun projet Angular
	Lancer le Serveur de Développement(Outil qui permettra de tester notre application tout au long de son Développement).

Générer une application ave Angular?CLI
ng new cayledshare --style=scss --skip-test=true
	--style=scss [ pour spécifier qu’on va utiliser du SCSS ]
	--skip-test=true [ pour spécifier qu’on va pas générer les fichiers pour les testes Unitaires ]

Lors de l’installation on va avoir : Would you like to add Angular routing? No (N comme réponse)
On va créer notre Routing Manuellement dans la suite du cours

Ouvrez une ligne de commande dans le dossier du projet (dans mon cas, le dossier Snapface), et exécutez; pour ce projet c'est le dossier cayledshare:
	ng serve
Cette commande du CLI va compiler l'application et lancer un serveur de développement sur http://localhost:4200 : vous pouvez ouvrir votre navigateur à cette adresse pour voir tourner l'application.
À chaque fois que vous enregistrerez des modifications dans un fichier de l'application, le serveur de développement les prendra en compte !

* La balise  <app-root>  correspond à AppComponent.

COMPONENTS
+ COMPONENTS = Composants de Bases des Applications Angular
+ Une Application est une arborescence de COMPONENTS
+ Un Component Associer à un Template HTML des Styles SCSS et de la Logique Typescript, du coup chaque COMPONENT correspond à trois fichiers [ un de chaque type ]; Quand un COMPONENT commence à devenir trop Gros ou trop Complexes, on essayera de le séparer en COMPONENTS plus petits et plus Simple; Souvent, on Créera des COMPONENTS réutilisables, permettant de MINIMISER le code à MAINTENIR et à ÉCRIRE tout en MAXIMISANT les fonctionnalités de notre Application.
+ Un COMPONENT va associer un fichier HTML, un fichier SCSS et un fichier TypeScript : c'est le cas de l'AppComponent généré par le CLI.

+ Supprimer le contenu de  app.component.html, ainsi que la variable  title  dans  app.component.ts. 

La variable  title  n'est pas précédée de  var,  let,  const… C’est parce qu'il s'agit d'un attribut de la classe AppComponent. Lorsqu'on déclare un attribut de classe, on n'a pas besoin de mot-clé : on le déclare simplement par son nom.

Le CLI d'Angular propose des commandes de création pour faciliter le développement
+ ng generate component share-file
+ Il a créé, dans un sous-dossier  share-file, les trois fameux fichiers du component, et il a mis à jour  app.module.ts.
+ pour utiliser un component dans une application Angular, il faut le déclarer dans un module – AppModule étant le module principal de l'application, tout comme AppComponent est le component principal. Tous les components que nous allons créer dans ce cours seront déclarés AppModule.
+ AppModule c’est le module racine de notre Application
+ AppComponent est le component racine de notre Application

+ Dans notre fichier nomDuFichierComponent.ts on : 
@Component({
  selector: 'app-share-file',
  templateUrl: './share-file.component.html',
  styleUrls: ['./share-file.component.scss']
})
Cette classe est déclarée avec un décorateur  @Component  à qui on passe un objet de configuration avec un sélecteur, un fichier de template et un fichier de styles.
Un décorateur en TypeScript permet, entre autres, d'apporter des modifications à une classe. Ici, le décorateur  @Component  vient ajouter tous les comportements nécessaires à l'utilisation de ce component dans l'application. Il est importé depuis le package  @angular/core. Tout se passe sous le capot, on n'a pas à s'en occuper !
Dès maintenant, dans le fichier  share-file.component.ts, supprimez :
* le contenu de la classe (le constructor et la méthode  ngOnInit) ;
* la partie "implements OnInit" de la déclaration de classe ;
* l'importOnInitdepuis  @angular/core  (laissez bien Component).

+ Notre Application est une arborescence de components avec AppComponent comme racine : c'est donc dans  app.component.html  qu'on va venir ajouter le sélecteur de notre nouveau component comme balise HTML.
<app-share-file></app-share-file>

En résumé
* Une application Angular peut être vue comme une arborescence de components.
* Un component lie un template HTML et des styles SCSS à du comportement TS.
* Pour créer un component, on utilise la commande  ng generate component nom-du-component
* Le sélecteur d'un component correspond à la balise HTML personnalisée qu'on utilisera pour l'insérer dans l'application.
@Component({
  selector: 'app-share-file',
  templateUrl: './share-file.component.html',
  styleUrls: ['./share-file.component.scss']
})

Affichez des données

Data-Binding <Liaison de données>
Pour afficher des données, on doit d’abord disposer de ces données.
On va créer des propriétés simples pour test en <Typescript> :
	pour ajouter des propriétés a la classe, on va ouvrir la classe et associe chaque nom de propriété a son type.
On ajoute un point d’exclamation " ! " <un Bang> au nom de chaque propriété, car Typescript a mode <Strict> qui nécessite d’initialiser les variable, pour contourner :
export class ShareFileComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;

}

On import l’Interface <OnInit de ‘@angular/core’, puis on implémente les méthodes de cette Interfaces>

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-file',
  templateUrl: './share-file.component.html',
  styleUrls: ['./share-file.component.scss']
})
export class ShareFileComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number; //number of likes

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

} 

//  <Préparation des données>
export class ShareFileComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;

  ngOnInit(): void {
    this.title = 'MOUHAMAD';
    this.description = 'Ya MOUHAMAD PSL';
    this.createdDate = new Date();
    this.snaps = 7; //number of likes
  }

}

//  On va Maitenant utiliser <String Imterpolation> pour afficher le contenu(la valeur) de ces variables
Le <String Imterpolation> est égale à {{ title }}
* On le fait dans le ficher [nomDuComponent.component.html] du component concerner 
* puis appel le selector dans le [app.component.html] principale

// On va maintenant dynamiser les données avec l'attribute <Binding>
Pour lier notre URL, on pourrait imaginer quelque chose comme ceci :
<img src="{{ imageUrl }}" alt="{{ title }}">
… et techniquement, dans ce cas précis, cette syntaxe fonctionnerait, car les valeurs de  imageUrl  et de  title  sont des  string  ! Cependant, ce n'est pas la syntaxe préférée, car les valeurs associées à des attributs ne seront pas toujours des strings, et il est préférable d'avoir une syntaxe unique pour une fonctionalité. On va donc préférer les crochets []
<img [src]="imageUrl" [alt]="title">
Là, Angular associe les valeurs des propriétés TypeScript aux attributs de l'élément HTML, et vous avez une image qui s'affiche !

//  <En Résumé>
On déclare les propriétés d'un component en haut de sa classe, et on les initialise dans la méthode  <ngOnInit()>

La méthode <ngOnInit()> est appelée une fois par instance de component au moment de la création de cette instance.

La <String Imterpolation> avec les doubles accolades  {{ }}  permet d'insérer la valeur d'une propriété TypeScript dans le template.

L'attribute <Binding> permet de lier la valeur d'une propriété TypeScript à un attribut HTML, en mettant l'attribut entre crochets  []  et en passant le nom de la propriété.
Exemple: <img [src]="imageUrl" [alt]="title">
