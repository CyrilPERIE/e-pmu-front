/**
 * @typedef {Object} GainsParticipant
 * @property {number} gainsCarriere - Les gains de carrière du participant
 * @property {number} gainsVictoires - Les gains en gagnant du participant
 * @property {number} gainsPlace - Les gains en place du participant
 * @property {number} gainsAnneeEnCours - Les gains de l'année en cours du participant
 * @property {number} gainsAnneePrecedente - Les gains de l'année précédente du participant
 */

export interface GainsParticipant {
   gainsCarriere: number;
   gainsVictoires: number;
   gainsPlace: number;
   gainsAnneeEnCours: number;
   gainsAnneePrecedente: number;
}