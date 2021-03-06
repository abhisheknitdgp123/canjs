// index.js
import {Component, route, DefineMap} from "can";
import view from "./index.stache";
import Todo from "~/models/todo";
import "~/models/todos-fixture";
import test from "can-todomvc-test";


route.register("{filter}");

Component.extend({
	tag: "todo-mvc",
	view,
	ViewModel: {
		appName: {default: "TodoMVC"},
		routeData: {
			default(){
				route.start();
				return route.data;
			}
		},
		allTodos: {
			get: function(lastSet, resolve) {
				Todo.getList({}).then(resolve);
			}
		},
		get todosList() {
			if(this.allTodos) {
				if(this.routeData.filter === "complete") {
					return this.allTodos.complete;
				} else if(this.routeData.filter === "active") {
					return this.allTodos.active;
				} else {
					return this.allTodos;
				}
			}
		},
		get allChecked() {
			return this.todosList && this.todosList.allComplete;
		},
		set allChecked(newVal) {
			this.todosList && this.todosList.updateCompleteTo(newVal);
		}
	}
});

const appVM = window.appVM = document.querySelector("todo-mvc").viewModel;

test(appVM);
