const specialiteDict = {
    TROT_ATTELE: "Attelé",
    TROT_MONTE: "Monté",
    PLAT: "Plat",
    OBSTACLE: "Obstacle",
}

export function getSpecialiteValue(key: string) {
    switch(key) {
        case "TROT_ATTELE":
            return specialiteDict.TROT_ATTELE;
        case "TROT_MONTE":
            return specialiteDict.TROT_MONTE;
        case "PLAT":
            return specialiteDict.PLAT;
        case "OBSTACLE":
            return specialiteDict.OBSTACLE;
        default:
            return "Inconnue";
    }
}

const sexeDict = {
    HONGRES: "H",
    FEMELLES: "F",
    MALES: "M",
}

export function getSexeValue(key: string) {
    switch(key) {
        case "HONGRES":
            return sexeDict.HONGRES;
        case "FEMELLES":
            return sexeDict.FEMELLES;
        case "MALES":
            return sexeDict.MALES;
        default:
            return "Inconnue";
    }
}

const cordeDict = {
    CORDE_DROITE : "Corde à droite",
    CORDE_GAUCHE: "Corde à gauche"
}

export function getCordeValue(key: string) {
    switch(key) {
        case "CORDE_DROITE":
            return cordeDict.CORDE_DROITE;
        case "CORDE_GAUCHE":
            return cordeDict.CORDE_GAUCHE;
        default:
            return "Inconnue";
    }
}