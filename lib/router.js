Router.map(function() {

	this.route('home', {
		path: '/',
		template: 'home'
	});

	this.route('about', {
		path: '/about',
		template: 'about'
	});

		this.route('samples', {
		path: '/PortfolioLinks',
		template: 'samples'
	});

		this.route('contact', {
		path: '/contact',
		template: 'contact'
	});	

});
