window.addEventListener("scroll", function() { 
		
		var page = document.body.offsetHeight ;
         var posi = window.scrollY ;  
		var haut =window.innerHeight;
		var deplacement = (posi*13)/(page-haut);
		console.log(deplacement);
		document.getElementById('progress_bar').value = deplacement; // Modifie la valeur de la barre de progression pour qu'elle corresponde au déplacement du scroll
		});
		
		function myScroll() { // Définition de la fonction de scroll
		var progress = document.getElementById('progress_bar').value; // Valeur de la barre de progression
		var page = document.body.offsetHeight ;
		// Calculez ici la valeur de déplacement à efectuer lors du scroll
		var pro = progress*170;
		window.scroll(0, pro) // Déplacement de la page de 0 px latéralement et 'value' px horizontalement|^
		}
