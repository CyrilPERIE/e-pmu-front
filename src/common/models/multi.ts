import { Infos } from "./infos.js";
import { Rapport } from "./rapport.js";

export interface Multi {
    rapport?: Rapport[];
    infos?: Infos;
}