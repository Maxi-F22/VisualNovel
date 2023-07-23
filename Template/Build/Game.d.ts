declare namespace Game {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        nameProtagonist: string;
        cluePoints: number;
        foundPliers: boolean;
        chapter2Accused: string;
        canLookatPages: number;
    };
    let transitions: {
        updownslider: {
            duration: number;
            alpha: string;
            edge: number;
        };
        middleslider: {
            duration: number;
            alpha: string;
            edge: number;
        };
        circleslider: {
            duration: number;
            alpha: string;
            edge: number;
        };
        spiralslider: {
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
        stable: {
            name: string;
            background: string;
        };
        bedroom: {
            name: string;
            background: string;
        };
        bureau: {
            name: string;
            background: string;
        };
        dream: {
            name: string;
            background: string;
        };
        graveyard: {
            name: string;
            background: string;
        };
        well: {
            name: string;
            background: string;
        };
        town: {
            name: string;
            background: string;
        };
        black: {
            name: string;
            background: string;
        };
        intro: {
            name: string;
            background: string;
        };
        chapter1: {
            name: string;
            background: string;
        };
        chapter2: {
            name: string;
            background: string;
        };
        chapter3: {
            name: string;
            background: string;
        };
        badend: {
            name: string;
            background: string;
        };
        goodend: {
            name: string;
            background: string;
        };
        middlefree: {
            name: string;
            background: string;
        };
        middlekiller: {
            name: string;
            background: string;
        };
        middleunsolved: {
            name: string;
            background: string;
        };
    };
    let characters: {
        protagonist: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        father: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        sheriff: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        deputy: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                evil: string;
            };
        };
        jenkins: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        patty: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        evilguy: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        murderer: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
    };
    let items: {
        bread: {
            name: string;
            description: string;
            image: string;
        };
        gun: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        hammer: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        knife: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        pliers: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
    function hitLeftCharAnimation(): ƒS.AnimationDefinition;
    function hitMiddleCharAnimation(): ƒS.AnimationDefinition;
    function moveLeftCharAnimation(): ƒS.AnimationDefinition;
    function moveLeftCharBackAnimation(): ƒS.AnimationDefinition;
}
declare namespace Game {
    function Empty(): ƒS.SceneReturn;
}
declare namespace Game {
    function Chapter1BreakfastPath(): ƒS.SceneReturn;
}
declare namespace Game {
    function Chapter1HorsesPath(): ƒS.SceneReturn;
}
declare namespace Game {
    function Chapter2AccusationPath(): ƒS.SceneReturn;
}
declare namespace Game {
    function Chapter2Main(): ƒS.SceneReturn;
}
declare namespace Game {
    function Chapter3Graveyard(): ƒS.SceneReturn;
}
declare namespace Game {
    function Chapter3WellBeginning(): ƒS.SceneReturn;
}
declare namespace Game {
    function Chapter3WellInterrogation(): ƒS.SceneReturn;
}
declare namespace Game {
    function BadEndingDead(): ƒS.SceneReturn;
}
declare namespace Game {
    function GoodEnding(): ƒS.SceneReturn;
}
declare namespace Game {
    function MediumEndingKiller(): ƒS.SceneReturn;
}
declare namespace Game {
    function MediumEndingStillFree(): ƒS.SceneReturn;
}
declare namespace Game {
    function MediumEndingUnsolved(): ƒS.SceneReturn;
}
declare namespace Game {
    function Dream(): ƒS.SceneReturn;
}
declare namespace Game {
    function Opening(): ƒS.SceneReturn;
}
