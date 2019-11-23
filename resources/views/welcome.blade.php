<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/app.css">
        <title>TodoList</title>
    </head>
    <body>
    <div id="app">
        <main>
            <section class="list-container">
                        <todo-list></todo-list>
            </section>

        </main>
    </div>
    <script src="../js/app.js"></script>
    </body>
</html>
