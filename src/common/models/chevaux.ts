import { Caracteristiques } from "./caracteristiques.js";
import { Carriere } from "./carriere.js";
import { Cotes } from "./cotes.js";
import { Gains } from "./gains.js";
import { Casaque } from "./casaque.js";

export interface Chevaux {
    numOrdre: number;
    numDossier: number;
    nom: string;
    sexe: string;
    age: number;
    driver: string;
    driverVoix: string;
    entraineur: string;
    proprietaire: string;
    musique: string;
    ordreMusique: string;
    carriere?: Carriere;
    gains?: Gains;
    casaque?: Casaque;
    cotes?: Cotes;
    caracteristiques?: Caracteristiques;
}