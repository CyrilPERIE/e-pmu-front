import { InfosJackpot } from "./infosJackpot.js";

export interface Paris {
    complement: boolean;
    codePari: string;
    ordre: boolean;
    combine: boolean;
    spotAutorise: boolean;
    nbChevauxReglementaire: number;
    typePari: string;
    miseBase: number;
    enVente: boolean;
    audience: string;
    reportable: boolean;
    infosJackpot?: InfosJackpot | null;
}