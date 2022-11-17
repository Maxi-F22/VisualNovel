"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Template.transitions = {
        puzzle: {
            duration: 1,
            alpha: "Images/jigsaw_06.jpg",
            edge: 1
        }
    };
    Template.sound = {
        // Themes
        // SFX
        coin: "Audio/coin.mp3"
    };
    Template.locations = {
        beachDay: {
            name: "Beach Day",
            background: "Images/newyork.jpg"
        }
    };
    Template.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: ""
        },
        Jerry: {
            name: "Jerry",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "PFAD ZUM PNG",
                happy: "Images/jerry.png",
                upset: "PFAD ZUM PNG"
            }
        }
    };
    Template.dataForSave = {
        nameProtagonist: ""
    };
    function ghostAnimation() {
        return {
            start: { translation: Template.ƒS.positions.bottomright, color: Template.ƒS.Color.CSS("green", 1) },
            end: { translation: Template.ƒS.positions.bottomleft, color: Template.ƒS.Color.CSS("blue", 0) },
            duration: 3,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.LOOP
        };
    }
    Template.ghostAnimation = ghostAnimation;
    // let inGameMenuButtons = {
    //   save: "Save",
    //   load: "Load",
    //   close: "Close"
    // };
    // let gameMenu: ƒS.Menu;
    // let menuIsOpen: boolean = true;
    // async function buttonFunctionalities(_option: string): Promise<void> {
    //   switch (_option) {
    //     case inGameMenuButtons.save:
    //       await ƒS.Progress.save();
    //       break;
    //     case inGameMenuButtons.load:
    //       await ƒS.Progress.load();
    //       break;
    //     case inGameMenuButtons.close:
    //       gameMenu.close();
    //       menuIsOpen = false;
    //       break;
    //   }
    // }
    // Menu Shortcuts
    // document.addEventListener("keydown", hndKeyPress);
    // async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    //   switch (_event.code) {
    //     case ƒ.KEYBOARD_CODE.F8:
    //       console.log("Save");
    //       await ƒS.Progress.save();
    //       break;
    //     case ƒ.KEYBOARD_CODE.F9:
    //       console.log("Load");
    //       await ƒS.Progress.load();
    //       break;
    //     case ƒ.KEYBOARD_CODE.M:
    //       if (menuIsOpen) {
    //         console.log("Close");
    //         gameMenu.close();
    //         menuIsOpen = false;
    //       }
    //       else {
    //         console.log("Open");
    //         gameMenu.open();
    //         menuIsOpen = true;
    //       }
    //       break;
    //   }
    // }
    window.addEventListener("load", start);
    function start(_event) {
        // gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "game-menu");
        // buttonFunctionalities("Close");
        let scenes = [
            { scene: Template.Scene, name: "Scene" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
        let text = {
            Jerry: {
                T0001: "Hast du Lust einen Döner mit mir essen zu gehen?",
                T0002: "Hallo, wie gehts?"
            }
        };
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.beachDay);
        await Template.ƒS.update(Template.transitions.puzzle.duration, Template.transitions.puzzle.alpha, Template.transitions.puzzle.edge);
        await Template.ƒS.Character.show(Template.characters.Jerry, Template.characters.Jerry.pose.happy, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.Character.animate(Template.characters.Jerry, Template.characters.Jerry.pose.happy, Template.ghostAnimation());
        Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.Jerry, text.Jerry.T0002);
        await Template.ƒS.Speech.tell(Template.characters.Jerry, text.Jerry.T0001);
        let dialogue = {
            iSayYes: "Jawoll",
            iSayOk: "Joa",
            iSayNo: "Nein danke"
        };
        let dialogElement = await Template.ƒS.Menu.getInput(dialogue, "choices");
        switch (dialogElement) {
            case dialogue.iSayYes:
                // continue path here
                console.log("testyes");
                await Template.ƒS.Speech.tell(Template.characters.Jerry, "Juhuuuuuuuuu");
                break;
            case dialogue.iSayOk:
                // continue path here
                console.log("testok");
                await Template.ƒS.Speech.tell(Template.characters.Jerry, "Wenns sein muss");
                break;
            case dialogue.iSayNo:
                // continue path here
                console.log("testno");
                await Template.ƒS.Speech.tell(Template.characters.Jerry, "Och nöö");
                break;
        }
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map