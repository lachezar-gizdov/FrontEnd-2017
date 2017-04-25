(function () {
    const sammyApp = Sammy('#content', function () {
        this.get('#/', homeController.all);

        this.get('#/todos', todosController.all);

        this.get('#/events', eventsController.all);

        this.get('#/users', usersController.all);
    });

    $(function () {
        sammyApp.run('#/user');
    });
}());