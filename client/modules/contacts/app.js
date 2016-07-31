export class App {
	configureRouter(config, router) {
		config.title = "Meteor Aurelia Seed";
		config.map([{
			route: [""],
			name: "exemplo1",
			moduleId: "./paginaExemplo1/exemplo1",
			nav: false,
			title: "Exemplo 1"
		}, {
			route: "contacts",
			name: "contato",
			moduleId: "./contato/contato",
			nav: true,
			title: "Contacts"
		}]);
		this.router = router;
	}
}
