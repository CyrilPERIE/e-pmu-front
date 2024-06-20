import { Reunion } from "./reunion.js";
import { Utilite } from "../enums/ep_utilite"

export interface Programme {
    cached: boolean;
    date: number;
    datePMU: string;
    dateProgrammeActif: number;
    timezoneOffset: number;
    reunions?: Reunion[];
    prochainesCoursesAPartir: String[]
    datesProgrammesDisponibles: String[];
    ep_utilite: Utilite
}