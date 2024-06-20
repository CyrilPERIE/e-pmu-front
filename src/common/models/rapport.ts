import { RapportNumerique } from "./rapportNumerique.js";

export interface Rapport {
    numOrdre: number;
    numDossier: number;
    typePari: string;
    rapports?: RapportNumerique[];
}