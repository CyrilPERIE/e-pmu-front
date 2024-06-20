import { Hippodrome } from "./hippodrome.js";
import { Pays } from "./pays.js";
import { Course } from "./course.js";
import { ParisEvenement } from "./parisEvenement.js";
import { Meteo } from "./meteo.js";
import { Cagnottes } from "./cagnottes.js";

export interface Reunion {
    cached: boolean;
    timezoneOffset: number;
    dateReunion: number;
    numOfficiel: number;
    numOfficielReunionPrecedente: number | null;
    numOfficielReunionSuivante: number;
    numExterne: number;
    nature: string;
    hippodrome?: Hippodrome;
    pays?: Pays;
    courses?: Course[];
    audience: string;
    statut: string;
    disciplinesMere: string[];
    specialites: string[];
    derniereReunion: boolean;
    parisEvenement?: ParisEvenement[];
    meteo?: Meteo;
    offresInternet: boolean;
    cagnottes?: Cagnottes[];
    reportPlusFpaMax: number;
    id_programme?: number;
}