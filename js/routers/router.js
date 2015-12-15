/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Router
	// ----------
	var TodoRouter = Backbone.Router.extend({
		routes: {
			"todo/:id": "getTodo",
			'*filter': 'setFilter'
		},

		getTodo: function (param) {
			//app.todoId = param;
			app.todos.trigger('getTodo',param);
		},

		setFilter: function (param) {
			// Set the current filter to be used
			app.TodoFilter = param || '';
			app.todoId = '';
			// Trigger a collection filter event, causing hiding/unhiding
			// of Todo view items
			app.todos.trigger('filter');
		}
	});

	app.TodoRouter = new TodoRouter();
	Backbone.history.start();
})();
