interface Rapport {
    libelle: string;
    dividende: number;
    dividendePourUnEuro: number;
    combinaison: (number | string)[];
    nombreGagnants: number;
    dividendePourUneMiseDeBase: number;
    dividendeUnite: string;
}

export interface RapportDefinitif {
    typePari: string;
    miseBase: number;
    rembourse: boolean;
    rapports: Rapport[];
    audience: string;
    famillePari: string;
    dividendeUnite: string;
}