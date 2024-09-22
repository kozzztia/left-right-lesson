export const dictionary = {
    english: {
        left: "left",
        right: "right"
    },
    french: {
        left: "gauche",
        right: "droite"
    },
    german: {
        left: "links",
        right: "rechts"
    },
    spanish: {
        left: "izquierda",
        right: "derecha"
    },
    italian: {
        left: "sinistra",
        right: "destra"
    },
    portuguese: {
        left: "esquerda",
        right: "direita"
    },
    dutch: {
        left: "links",
        right: "rechts"
    },
    swedish: {
        left: "vänster",
        right: "höger"
    },
    polish: {
        left: "lewo",
        right: "prawo"
    },
    romanian: {
        left: "stânga",
        right: "dreapta"
    }
};

export const getDictionary = (lang) => {
    return dictionary[lang]
}