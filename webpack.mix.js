const mix = require('laravel-mix');
mix.js('resources/js/app.js', 'public/js')
	.js('resources/js/bootstrap.js', 'public/js')
	.sass('resources/sass/app.scss', 'public/css');

mix.styles([
	'public/css/app.css',
	'public/css/vendor/main.css',
	'public/css/vendor/bootstrap.css',
	'public/css/vendor/font-awesome.min.css',
	'public/css/vendor/ion.rangeSlider.css',
	'public/css/vendor/ion.rangeSlider.skinFlat.css',
	'public/css/vendor/jquerysctipttop.css',
	'public/css/vendor/linearicons.css',
	'public/css/vendor/magnific-popup.css',
	'public/css/vendor/main.css',
	'public/css/vendor/nice-select.css',
	'public/css/vendor/nouislider.min.css',
	'public/css/vendor/owl.carousel.css',
	'public/css/vendor/themify-icons.css'
], 'public/css/all.css');
mix.scripts([
	'public/js/vendor/jquery-2.2.4.min.js',
	'public/js/vendor/popper.js',
	'public/js/vendor/bootstrap.min.js',
	'public/js/vendor/gmaps.min.js',
	'public/js/vendor/ion.rangeSlider.js',
	'public/js/vendor/jquery-2.2.4.min.js',
	'public/js/vendor/jquery.ajaxchimp.min.js',
	'public/js/vendor/jquery.magnific-popup.min.js',
	'public/js/vendor/jquery.nice-select.min.js',
	'public/js/vendor/jquery.sticky.js',
	'public/js/vendor/main.js',
	'public/js/vendor/popper.js',
	'public/js/vendor/parallax.min.js',
	'public/js/vendor/owl.carousel.min.js',
	'public/js/vendor/nouislider.min.js',
], 'public/js/all.js');
