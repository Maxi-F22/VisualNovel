declare namespace Game {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    function showCredits(): void;
    let transitions: {
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        nightclub: string;
        coin: string;
        cough: string;
        river: string;
    };
    let locations: {
        beachDay: {
            name: string;
            background: string;
            foreground: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
        };
        Jerry: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
    };
    let dataForSave: {
        nameProtagonist: string;
        character1TrustPoints: number;
    };
    let items: {
        blobRED: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        blobBU: {
            name: string;
            description: string;
            image: string;
        };
    };
    function ghostAnimation(): ƒS.AnimationDefinition;
}
declare namespace Game {
    function BadChoice(): ƒS.SceneReturn;
}
declare namespace Game {
    function Choices(): ƒS.SceneReturn;
}
declare namespace Game {
    function Opening(): ƒS.SceneReturn;
}
