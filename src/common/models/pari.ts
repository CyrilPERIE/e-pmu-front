export interface Pari {
    typePari: string;
    miseBase: number;
    rembourse: boolean;
    rapports?: Rapports[];
    audience: string;
    famillePari: string;
    dividendeUnite: string;
}

export interface Rapports {
    libelle: string;
    dividende: number;
    dividendePourUnEuro: number;
    combinaison: number[];
    nombreGagnants: number;
    dividendePourUneMiseDeBase: number;
    dividendeUnite: string;
}