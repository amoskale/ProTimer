# ProTimer

Powerful JavaScript timer class

Open source (BSD License)

By Raphaël Dujardin (rdujardin.com | github.com/rdujardin)


* protimer.js : documented source code

* protimer.min.js : minified script

ProTimer provides a class Timer, which is a autoplayable/pausable/stoppable/loopable timer
based on the setTimeout function. The timer will callback a specified function.

The constructor takes its parameters as an object, which required properties are delay (in 
milliseconds) and callback (function), and optional properties are loop (boolean, defaults to true),
autoplay (boolean, defaults to true).


Example :

var t=new Timer({

	delay: 1000,
	
	callback: foo.bind(bar),
	
	loop: false
	
});


If the autoplay property is not explicitly set to false, the method play() is automatically
called by the constructor.

Then you can run/resume/restart the timer :

t.play();

You can pause it :

t.pause();

And you can stop it :

t.stop();

The difference between pause and stop is that when play() will be called, if the timer
is paused it will end its period, if it's stopped it will restart from zero.

----------------------------------------------------------------------------------------

# ProTimer

Une puissante classe de timers pour JavaScript

Open source (Licence BSD)

Par Raphaël Dujardin (rdujardin.com | github.com/rdujardin)


* protimer.js : code source documenté

* protimer.min.js : script optimisé

ProTimer fournit une classe Timer, un timer basé sur la fonction setTimeout qui a les 
capacités d'autoplay, d'être mis en pause, arrêté, et d'être joué en boucle. Le timer 
appellera une fonction callback spécifiée.

Le constructeur prend ses paramètres via un objet, dont les propriétés obligatoirement 
requises sont delay (en millisecondes) et callback (fonction), et dont les propriétés 
optionnelles sont loop (booléen, vrai par défaut), autoplay (booléen, vrai par défaut).


Exemple :

var t=new Timer({

	delay: 1000,
	
	callback: foo.bind(bar),
	
	loop: false
	
});


Si la propriété autoplay n'est pas explicitement fixée à false, la méthode play()
est automatiquement appelée par le constructeur.

Vous pouvez ensuite (re)lancer le timer :

t.play();

Vous pouvez le mettre en pause :

t.pause();

Et l'arrêter :

t.stop();

La différence entre la pause et l'arrêt réside dans le fait que quand play() sera
ensuite appelée, si le timer est en pause il terminera sa période, alors que s'il
est arrêté il reprendra à zéro.