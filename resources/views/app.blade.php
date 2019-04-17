<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>VueShop</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link href=" {{ mix('css/all.css') }}" rel="stylesheet">
    </head>
    <body>
        <div id="app"></div>
        <script src="{{ mix('js/bootstrap.js') }}"></script>
        <script src="{{ mix('js/app.js') }}"></script>
        <link href=" {{ mix('js/all.js') }}" rel="stylesheet">
    </body>
</html>
