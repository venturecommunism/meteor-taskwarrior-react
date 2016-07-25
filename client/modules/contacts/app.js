export class App {
	configureRouter(config, router) {
		config.title = "Meteor Aurelia Seed";
		config.map([{
			route: ["exemplo1"],
			name: "exemplo1",
			moduleId: "./paginaExemplo1/exemplo1",
			nav: true,
			title: "Exemplo 1"
		}, {
			route: "exemplo2",
			name: "exemplo2",
			moduleId: "./paginaExemplo2/exemplo2",
			nav: true,
			title: "Exemplo 2"
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
