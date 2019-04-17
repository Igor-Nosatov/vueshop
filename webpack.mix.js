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
