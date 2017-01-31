import {inject, autoinject} from "aurelia-framework";
import {Calc} from "./utilities/calc";

@autoinject
// @inject(Calc)
export class App {
    constructor(private calc: Calc){
    }

    message: string;

    add(a: number, b: number) {
        return this.calc.add(a, b);
    }

}