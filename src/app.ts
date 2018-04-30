import { inject, autoinject } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";
import { Calc } from "./utilities/calc";

@autoinject
export class App {
    constructor(private calc: Calc) {
    }

    private message: string;
    private router: Router;

    configureRouter(config: RouterConfiguration, router: Router){
        this.router = router;

        config.map([
            {route: "", name: "home", moduleId: "pages/home"},
            {route: "/about", name: "about", moduleId: "pages/about"}
        ]);
    }

    add(a: number, b: number) {
        return this.calc.add(a, b);
    }

}