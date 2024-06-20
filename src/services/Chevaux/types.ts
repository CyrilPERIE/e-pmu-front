export interface Cheval  {
    numPmu: string,
    urlCasaque: string,
    nom: string,
    cote: string,
    optimizedEnsembleClassifier: string,
    ordreArrivee: string,
}

export enum NavBarType {
    COURSES = "Courses",
    REUNIONS = "Réunions",
}

export enum DisplayType {
    DASHBOARD = "Dashboard",
    NAVBAR = "NavBar",
}
