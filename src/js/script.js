(function() {
	
	document.getElementById('hamburger').addEventListener('click', function(e) {
		
		var menu = document.getElementById('menu');
		
		if(menu.className.indexOf('open') != -1)
			menu.className = menu.className.replace(/\bopen\b/,'');
		else
			menu.className += " open";
		
	});
	
})();