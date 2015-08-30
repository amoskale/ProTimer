# ProTimer

Powerful JavaScript timer class

Open source (BSD License)

By Rapha�l Dujardin (rdujardin.com | github.com/rdujardin)


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

Par Rapha�l Dujardin (rdujardin.com | github.com/rdujardin)


* protimer.js : code source document�

* protimer.min.js : script optimis�

ProTimer fournit une classe Timer, un timer bas� sur la fonction setTimeout qui a les 
capacit�s d'autoplay, d'�tre mis en pause, arr�t�, et d'�tre jou� en boucle. Le timer 
appellera une fonction callback sp�cifi�e.

Le constructeur prend ses param�tres via un objet, dont les propri�t�s obligatoirement 
requises sont delay (en millisecondes) et callback (fonction), et dont les propri�t�s 
optionnelles sont loop (bool�en, vrai par d�faut), autoplay (bool�en, vrai par d�faut).


Exemple :

var t=new Timer({

	delay: 1000,
	
	callback: foo.bind(bar),
	
	loop: false
	
});


Si la propri�t� autoplay n'est pas explicitement fix�e � false, la m�thode play()
est automatiquement appel�e par le constructeur.

Vous pouvez ensuite (re)lancer le timer :

t.play();

Vous pouvez le mettre en pause :

t.pause();

Et l'arr�ter :

t.stop();

La diff�rence entre la pause et l'arr�t r�side dans le fait que quand play() sera
ensuite appel�e, si le timer est en pause il terminera sa p�riode, alors que s'il
est arr�t� il reprendra � z�ro.