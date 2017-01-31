import { Aurelia } from "aurelia-framework";
import env from "./env";

export function configure(aurelia: Aurelia) {
    aurelia
        .use
        .standardConfiguration();

    if(env.debug) {
        aurelia.use.developmentLogging();
    }

    aurelia.start().then(a => a.setRoot());
}