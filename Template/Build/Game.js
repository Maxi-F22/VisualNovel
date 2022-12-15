"use strict";
var Game;
(function (Game) {
    Game.ƒ = FudgeCore;
    Game.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    function showCredits() {
        Game.ƒS.Text.setClass("credits");
        Game.ƒS.Text.print("Halleluja");
    }
    Game.showCredits = showCredits;
    Game.transitions = {
        puzzle: {
            duration: 1,
            alpha: "Images/jigsaw_06.jpg",
            edge: 1
        }
    };
    Game.sound = {
        // Themes
        nightclub: "Audio/Nightclub.ogg",
        // SFX
        coin: "Audio/coin.mp3",
        cough: "Audio/cough.mp3",
        river: "Audio/river.mp3"
    };
    Game.locations = {
        beachDay: {
            name: "Beach Day",
            background: "Images/newyork.jpg",
            foreground: "Images/newyork.jpg"
        }
    };
    Game.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: ""
        },
        Jerry: {
            name: "Jerry",
            origin: Game.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "PFAD ZUM PNG",
                happy: "Images/jerry.png",
                upset: "PFAD ZUM PNG"
            }
        }
    };
    Game.dataForSave = {
        nameProtagonist: "",
        character1TrustPoints: 0
    };
    Game.items = {
        blobRED: {
            name: "Blob Red",
            description: "A reddish something",
            image: "Images/Items/blobRED.png",
            static: true
        },
        blobBU: {
            name: "Blob Blue",
            description: "A blueish something",
            image: "Images/Items/blobBU.png"
        }
    };
    function ghostAnimation() {
        return {
            start: { translation: Game.ƒS.positions.bottomright, color: Game.ƒS.Color.CSS("green", 1) },
            end: { translation: Game.ƒS.positions.bottomleft, color: Game.ƒS.Color.CSS("blue", 0) },
            duration: 3,
            playmode: Game.ƒS.ANIMATION_PLAYMODE.LOOP
        };
    }
    Game.ghostAnimation = ghostAnimation;
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
            { id: "first_scene", scene: Game.Opening, name: "Opening Scene" },
            { id: "second_scene", scene: Game.Choices, name: "Second Scene", next: "first_scene" },
            { id: "bad_choice_scene", scene: Game.BadChoice, name: "Bad Choice Scene" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Game.dataForSave = Game.ƒS.Progress.setData(Game.dataForSave, uiElement);
        // start the sequence
        Game.ƒS.Progress.go(scenes);
    }
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function BadChoice() {
        console.log("GOOD ENDING");
        let text = {
            Jerry: {
                T0001: "THE END"
            }
        };
        await Game.ƒS.Speech.tell(Game.characters.Jerry, text.Jerry.T0001);
        await Game.ƒS.Text.print("Dies ist eine Novel Page. Man kann auch das Menü darin zeigen.");
    }
    Game.BadChoice = BadChoice;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function Choices() {
        console.log("FudgeStory Template Scene starting");
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.beachDay);
        await Game.ƒS.update(Game.transitions.puzzle.duration, Game.transitions.puzzle.alpha, Game.transitions.puzzle.edge);
        let pages = ["<strong>Ende-zu-Ende-Verschlüsselung:</strong><br\>Nur beide Kommunikationspartner nehmen das Ver- und Entschlüsseln der übertragenen Informationen direkt vor. \
          Andere Stationen die an der Übertragung der Informationen beteiligt sind, können nicht darauf zugreifen.<br\><br\><br\><br\><br\><br\><br\>Seite 1", "Langzeitverschlüsselung,\
          <br\>Verschlüsselte Nutzerprofile,<br\>Telefonbuch-Kontakte werden nicht auf die Betriebsserver geladen,<br\>Sicherung und Schutz persönlicher Informationen durch persönliche PIN,\
          <br\>Gesprächsverschlüsselung,<br\>kein Tracking \
          <br\><br\>Seite 2", "Seite 3", "Seite 4", "Seite 5", "Seite 6", "Seite 7", "Seite 8"];
        let current = 0;
        let flip = { back: "Back", next: "Next", done: "Close" };
        let choice;
        Game.ƒS.Text.addClass("flip");
        do {
            Game.ƒS.Text.print(pages[current]);
            choice = await Game.ƒS.Menu.getInput(flip, "flipInput");
            switch (choice) {
                case flip.back:
                    current = Math.max(0, current - 1);
                    break;
                case flip.next:
                    current = Math.min(6, current + 1);
                    break;
            }
        } while (choice != flip.done);
        Game.ƒS.Text.close();
    }
    Game.Choices = Choices;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function Opening() {
        console.log("FudgeStory Template Scene starting");
        let text = {
            Jerry: {
                T0001: "Hast du Lust einen Döner mit mir essen zu gehen?",
                T0002: "Hallo, wie gehts?"
            }
        };
        let signalDelay3 = Game.ƒS.Progress.defineSignal([() => Game.ƒS.Progress.delay(3)]);
        Game.ƒS.Sound.fade(Game.sound.nightclub, 0.02, 2, true);
        Game.ƒS.Sound.fade(Game.sound.river, 0.02, 2, true);
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.beachDay);
        await Game.ƒS.update(Game.transitions.puzzle.duration, Game.transitions.puzzle.alpha, Game.transitions.puzzle.edge);
        await Game.ƒS.Character.show(Game.characters.Jerry, Game.characters.Jerry.pose.happy, Game.ƒS.positionPercent(70, 100));
        // await ƒS.Character.animate(characters.Jerry, characters.Jerry.pose.happy, ghostAnimation());
        Game.ƒS.update(2);
        await Game.ƒS.Speech.tell(Game.characters.Jerry, text.Jerry.T0002);
        Game.ƒS.Inventory.add(Game.items.blobBU);
        Game.ƒS.Inventory.add(Game.items.blobBU);
        Game.ƒS.Inventory.add(Game.items.blobRED);
        signalDelay3();
        await Game.ƒS.Inventory.open();
        await Game.ƒS.Speech.tell(Game.characters.Jerry, text.Jerry.T0001);
        Game.ƒS.Sound.play(Game.sound.cough, 0.04, false);
        let dialogue = {
            iSayYes: "Ja gerne",
            iSayOk: "Joa",
            iSayNo: "Nein danke"
        };
        let dialogElement = await Game.ƒS.Menu.getInput(dialogue, "choices");
        var badEnding = false;
        switch (dialogElement) {
            case dialogue.iSayYes:
                // continue path here
                console.log("testyes");
                await Game.ƒS.Speech.tell(Game.characters.Jerry, "*happy*");
                Game.ƒS.Sound.play(Game.sound.coin, 0.4, false);
                break;
            case dialogue.iSayOk:
                // continue path here
                console.log("testok");
                await Game.ƒS.Speech.tell(Game.characters.Jerry, "Wenns sein muss");
                Game.ƒS.Sound.play(Game.sound.coin, 0.4, false);
                break;
            case dialogue.iSayNo:
                // continue path here
                console.log("testno");
                await Game.ƒS.Speech.tell(Game.characters.Jerry, "Och nöö");
                Game.dataForSave.character1TrustPoints += 10;
                Game.ƒS.Sound.play(Game.sound.coin, 0.4, false);
                badEnding = true;
                break;
        }
        Game.ƒS.Sound.fade(Game.sound.river, 0, 2, false);
        Game.ƒS.Sound.fade(Game.sound.nightclub, 0, 2, false);
        if (badEnding) {
            return "bad_choice_scene";
        }
    }
    Game.Opening = Opening;
})(Game || (Game = {}));
//# sourceMappingURL=Game.js.map