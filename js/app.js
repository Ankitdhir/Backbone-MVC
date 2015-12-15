/*global $ */
/*jshint unused:false */
var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;

$(function () {
	'use strict';
	// kick things off by creating the `App`
	new app.AppView();
});

//load template dynamically and store them in cache
TemplateManager = {
	templates: {},
	get: function(id, callback){
		var template = this.templates[id];
		if (template) {
			callback(template);
		} else {
			var that = this;
			$.get("templates/" + id + ".html", function(template){
				// template engine
				var $tmpl = Handlebars.compile(template);
				that.templates[id] = $tmpl;
				callback($tmpl);
			});
		}
	}
}