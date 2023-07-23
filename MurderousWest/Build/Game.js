"use strict";
var Game;
(function (Game) {
    Game.ƒ = FudgeCore;
    Game.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Game.dataForSave = {
        nameProtagonist: "",
        cluePoints: 0,
        foundPliers: false,
        chapter2Accused: "",
        canLookatPages: 0
    };
    Game.transitions = {
        updownslider: {
            duration: 2,
            alpha: "Images/updownslider.png",
            edge: 1
        },
        middleslider: {
            duration: 2,
            alpha: "Images/middleslider.png",
            edge: 1
        },
        circleslider: {
            duration: 2,
            alpha: "Images/circleslider.png",
            edge: 1
        },
        spiralslider: {
            duration: 2,
            alpha: "Images/spiralslider.png",
            edge: 1
        }
    };
    Game.sound = {
        // Themes
        action: "Audio/action.mp3",
        dream: "Audio/dream.mp3",
        relax: "Audio/relax.mp3",
        west: "Audio/west.mp3",
        // SFX
        accuse: "Audio/Sounds/accuse.mp3",
        gun: "Audio/Sounds/gun.mp3",
        knife: "Audio/Sounds/knife.mp3",
        well: "Audio/Sounds/well.mp3"
    };
    Game.locations = {
        stable: {
            name: "Stable",
            background: "Images/Backgrounds/stable.png"
        },
        bedroom: {
            name: "Bedroom",
            background: "Images/Backgrounds/bedroom.png"
        },
        bureau: {
            name: "Bureau",
            background: "Images/Backgrounds/bureau.png"
        },
        dream: {
            name: "Dream",
            background: "Images/Backgrounds/dream.png"
        },
        graveyard: {
            name: "Graveyard",
            background: "Images/Backgrounds/graveyard.png"
        },
        well: {
            name: "Well",
            background: "Images/Backgrounds/well.png"
        },
        town: {
            name: "Town",
            background: "Images/Backgrounds/town.png"
        },
        black: {
            name: "black",
            background: "Images/Backgrounds/black.png"
        },
        intro: {
            name: "intro",
            background: "Images/Backgrounds/intro.png"
        },
        chapter1: {
            name: "chapter1",
            background: "Images/Backgrounds/chapter1.png"
        },
        chapter2: {
            name: "chapter2",
            background: "Images/Backgrounds/chapter2.png"
        },
        chapter3: {
            name: "chapter3",
            background: "Images/Backgrounds/chapter3.png"
        },
        badend: {
            name: "badend",
            background: "Images/Endings/badend.png"
        },
        goodend: {
            name: "goodend",
            background: "Images/Endings/goodend.png"
        },
        middlefree: {
            name: "middlefree",
            background: "Images/Endings/middlefree.png"
        },
        middlekiller: {
            name: "middlekiller",
            background: "Images/Endings/middlekiller.png"
        },
        middleunsolved: {
            name: "middleunsolved",
            background: "Images/Endings/middleunsolved.png"
        }
    };
    Game.characters = {
        protagonist: {
            name: Game.dataForSave.nameProtagonist,
            origin: Game.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/mc.png"
            }
        },
        father: {
            name: "Vater",
            origin: Game.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/father.png"
            }
        },
        sheriff: {
            name: "Sheriff",
            origin: Game.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/sheriff.png"
            }
        },
        deputy: {
            name: "Deputy",
            origin: Game.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/deputy.png",
                evil: "Images/Characters/deputy_evil.png"
            }
        },
        jenkins: {
            name: "Jenkins",
            origin: Game.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/cowboy.png"
            }
        },
        patty: {
            name: "Patty",
            origin: Game.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/patty.png"
            }
        },
        evilguy: {
            name: "Bankräuber",
            origin: Game.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/badguy.png"
            }
        },
        murderer: {
            name: "???",
            origin: Game.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/badguy.png"
            }
        }
    };
    Game.items = {
        bread: {
            name: "Brot",
            description: "Ein leckerer Laib Brot",
            image: "Images/Items/bread.png"
        },
        gun: {
            name: "Revolver",
            description: "Der alte Revolver deines Vaters",
            image: "Images/Items/gun.png",
            static: true
        },
        hammer: {
            name: "Hammer",
            description: "Gefunden am Tor des Friedhofs",
            image: "Images/Items/hammer.png",
            static: true
        },
        knife: {
            name: "Messer",
            description: "Besonders gut geeignet zum Schnitzen",
            image: "Images/Items/knife.png",
            static: true
        },
        pliers: {
            name: "Zange",
            description: "Wird genutzt, um Zähne zu ziehen",
            image: "Images/Items/pliers.png",
            static: true
        }
    };
    function hitLeftCharAnimation() {
        return {
            start: { translation: Game.ƒS.positionPercent(20, 90), color: Game.ƒS.Color.CSS("#FF6060", 1) },
            end: { translation: Game.ƒS.positionPercent(20, 88), color: Game.ƒS.Color.CSS("#FF5050", 1) },
            duration: 0.2,
            playmode: Game.ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
        };
    }
    Game.hitLeftCharAnimation = hitLeftCharAnimation;
    function hitMiddleCharAnimation() {
        return {
            start: { translation: Game.ƒS.positionPercent(30, 90), color: Game.ƒS.Color.CSS("#FF6060", 1) },
            end: { translation: Game.ƒS.positionPercent(30, 88), color: Game.ƒS.Color.CSS("#FF5050", 1) },
            duration: 0.2,
            playmode: Game.ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
        };
    }
    Game.hitMiddleCharAnimation = hitMiddleCharAnimation;
    function moveLeftCharAnimation() {
        return {
            start: { translation: Game.ƒS.positionPercent(20, 90), color: Game.ƒS.Color.CSS("#FFFFFF", 1) },
            end: { translation: Game.ƒS.positionPercent(15, 90), color: Game.ƒS.Color.CSS("#FFFFFF", 1) },
            duration: 0.2,
            playmode: Game.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Game.moveLeftCharAnimation = moveLeftCharAnimation;
    function moveLeftCharBackAnimation() {
        return {
            start: { translation: Game.ƒS.positionPercent(15, 90), color: Game.ƒS.Color.CSS("#FFFFFF", 1) },
            end: { translation: Game.ƒS.positionPercent(20, 90), color: Game.ƒS.Color.CSS("#FFFFFF", 1) },
            duration: 0.2,
            playmode: Game.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Game.moveLeftCharBackAnimation = moveLeftCharBackAnimation;
    function credits() {
        Game.ƒS.Text.setClass("credits");
        Game.ƒS.Text.print("<h1>Credits</h1>Music by moodmode from Pixabay<br>Music by Lesfm from Pixabay<br>Music by Daddy_s_Music from Pixabay<br>Music by Magnetic_Trailer from Pixabay<br><br>Sound Effect from Pixabay<br>Sound Effect by GregorQuendel_SoundDesign from Pixabay<br><br>Alle Hintergründe sind mit KI generiert worden auf https://playgroundai.com/<br><br>Alle Charaktere und Items wurden selbst erstellt auf https://www.pixilart.com/<br><br>Alle Musikstücke und Sounds stammen von https://pixabay.com/");
    }
    let inGameMenuButtons = {
        save: "Speichern",
        load: "Laden",
        close: "Menü schließen",
        credits: "Credits"
    };
    let gameMenu;
    let menuIsOpen = false;
    async function buttonFunctionalities(_option) {
        switch (_option) {
            case inGameMenuButtons.save:
                await Game.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await Game.ƒS.Progress.load();
                break;
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
            case inGameMenuButtons.credits:
                credits();
                break;
        }
    }
    // Menu Shortcuts
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Game.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Game.ƒS.Progress.save();
                break;
            case Game.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Game.ƒS.Progress.load();
                break;
            case Game.ƒ.KEYBOARD_CODE.I:
                console.log("Inventory");
                await Game.ƒS.Inventory.open();
                break;
            case Game.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Close");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Game.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "game-menu");
        buttonFunctionalities(inGameMenuButtons.close);
        let scenes = [
            { id: "opening_scene", scene: Game.Opening, name: "OpeningScene", next: "dream_scene" },
            { id: "dream_scene", scene: Game.Dream, name: "DreamScene", next: "chapter_one_breakfast" },
            { id: "chapter_one_breakfast", scene: Game.Chapter1BreakfastPath, name: "Chapter1BreakfastScene", next: "chapter_two_main" },
            { id: "chapter_one_horses", scene: Game.Chapter1HorsesPath, name: "Chapter1HorsesScene", next: "chapter_two_main" },
            { id: "chapter_two_main", scene: Game.Chapter2Main, name: "Chapter2MainScene" },
            { id: "chapter_two_accusation", scene: Game.Chapter2AccusationPath, name: "Chapter2AccusationScene" },
            { id: "chapter_three_graveyard", scene: Game.Chapter3Graveyard, name: "Chapter3GraveyardScene" },
            { id: "chapter_three_well_beginning", scene: Game.Chapter3WellBeginning, name: "Chapter3WellBeginningScene" },
            { id: "chapter_three_well_interrogation", scene: Game.Chapter3WellInterrogation, name: "Chapter3WellInterrogationScene" },
            { id: "bad_ending", scene: Game.BadEndingDead, name: "BadEndingScene", next: "empty" },
            { id: "good_ending", scene: Game.GoodEnding, name: "GoodEndingScene", next: "empty" },
            { id: "medium_ending_killer", scene: Game.MediumEndingKiller, name: "MediumEndingKillerScene", next: "empty" },
            { id: "medium_ending_free", scene: Game.MediumEndingStillFree, name: "MediumEndingStillFreeScene", next: "empty" },
            { id: "medium_ending_unsolved", scene: Game.MediumEndingUnsolved, name: "MediumEndingUnsolvedScene", next: "empty" },
            { id: "empty", scene: Game.Empty, name: "Empty Scene" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Game.dataForSave = Game.ƒS.Progress.setData(Game.dataForSave, uiElement);
        // start the sequence
        Game.ƒS.Progress.go(scenes);
    }
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function Empty() {
        console.log("Ende");
    }
    Game.Empty = Empty;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function Chapter1BreakfastPath() {
        let text = {
            protagonist: {
                T0001: "Verdammt, immer wieder dieser Albtraum. Allerdings hatte ich ihn echt schon lange nicht mehr. Wahrscheinlich haben mich diese Morde in der Stadt daran erinnert. Das war das letzte Mal, dass es hier gewaltsame Tode gab. ",
                T0002: "(blickt in den Himmel) Vater, es tut mir Leid, dass ich deiner letzten Bitte nicht nachkommen konnte, aber ich bekomme immer noch Panikattacken wenn ich daran denke, auch Sheriff zu werden.",
                T0003: "Naja, es ist eh Zeit zum Aufstehen. Aber was mache ich jetzt zuerst?",
                T0004: "Oh ja, jetzt ein gutes deftiges Frühstück. Warte mal, mir fällt gerade ein, dass ich gar kein Brot mehr da habe. Ich geh wohl besser zum Hof vom alten Bäcker und hole ein paar Laibe.",
                T0005: "Danke für das Brot und Grüß deine Frau und deine Kinder von mir!",
                T0006: "Hallo Sheriff, Hallo Deputy, Was kann ich für euch tun?",
                T0007: "Ja, also der alte Jenkins hat mir ein wenig erzählt. Schrecklich das Ganze! Aber was hat das mit mir zu tun?",
                T0008: "Oh nein, es tut mir Leid aber ich kann euch nicht helfen. Die Panikattacken...",
                T0009: "Nochmal, es tut mir Leid aber ich kann euch nicht helfen. Ich muss nach Hause und meine Pferde füttern.",
                T0010: "Na gut, ich höre mir zumindest mal an, wo euer Problem liegt. Aber sobald es mir zu viel wird, werde ich nach Hause gehen!"
            },
            sheriff: {
                T0001: Game.dataForSave.nameProtagonist + ", gut dass wir dich zufällig hier treffen. Wir waren eh auf dem Weg zu dir nach Hause.",
                T0002: "Dein alter Herr war der beste Sheriff, den diese Stadt jemals hatte. Und wir wissen, dass seine Auffassungsgabe und sein Gespür auf dich übergegangen sind.",
                T0003: "Das verstehen wir und wir würden dich auch niemals bitten, wenn es nicht so wichtig wäre. Wir sind mit unseren Kräften langsam echt am Ende. Niemand hat auch nur eine Ahnung, wie wir weiter vorgehen könnten."
            },
            deputy: {
                T0001: "Du hast doch sicher von diesen schrecklichen, grauenhaften Morden gehört, die zurzeit die Stadt heimsuchen oder?"
            },
            narration: {
                N0001: "Schweißgebadet wacht " + Game.dataForSave.nameProtagonist + " auf.",
                N0002: "An der Tür vom Haus des Bäckers",
                N0003: Game.dataForSave.nameProtagonist + " verlässt das Grundstück und macht sich auf den Weg Richtung zuhause."
            }
        };
        let getUpChoice = {
            breakfast: "Frühstücken",
            horses: "Die Pferde füttern"
        };
        let goWithSheriffChoice = {
            agree: "Einwilligen",
            turndown: "Ablehnen"
        };
        Game.ƒS.Speech.hide();
        Game.ƒS.Sound.play(Game.sound.relax, 0.1, true);
        await Game.ƒS.Location.show(Game.locations.chapter1);
        await Game.ƒS.update(5);
        await Game.ƒS.Location.show(Game.locations.bedroom);
        await Game.ƒS.update(Game.transitions.middleslider.duration, Game.transitions.middleslider.alpha, Game.transitions.middleslider.edge);
        await Game.ƒS.Speech.tell("", text.narration.N0001, true, "italic");
        await Game.ƒS.Character.show(Game.characters.protagonist, Game.characters.protagonist.pose.normal, Game.ƒS.positionPercent(80, 90));
        await Game.ƒS.update(1);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0001);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0002);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0003);
        let getUpChoiceElement = await Game.ƒS.Menu.getInput(getUpChoice, "choices");
        switch (getUpChoiceElement) {
            case getUpChoice.breakfast:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0004);
                Game.ƒS.Inventory.add(Game.items.bread);
                Game.ƒS.Inventory.add(Game.items.bread);
                Game.ƒS.Inventory.add(Game.items.bread);
                await Game.ƒS.Location.show(Game.locations.town);
                await Game.ƒS.update(Game.transitions.updownslider.duration, Game.transitions.updownslider.alpha, Game.transitions.updownslider.edge);
                await Game.ƒS.Speech.tell("", text.narration.N0002, true, "italic");
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0005);
                await Game.ƒS.Speech.tell("", text.narration.N0003, true, "italic");
                await Game.ƒS.Character.show(Game.characters.sheriff, Game.characters.sheriff.pose.normal, Game.ƒS.positionPercent(15, 90));
                await Game.ƒS.Character.show(Game.characters.deputy, Game.characters.deputy.pose.normal, Game.ƒS.positionPercent(30, 90));
                await Game.ƒS.update(1);
                await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0001);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0006);
                await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0001);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0007);
                await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0002);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0008);
                await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0003);
                let goWithSheriffChoiceElement = await Game.ƒS.Menu.getInput(goWithSheriffChoice, "choices");
                switch (goWithSheriffChoiceElement) {
                    case goWithSheriffChoice.agree:
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0010);
                        await Game.ƒS.Character.hide(Game.characters.protagonist);
                        await Game.ƒS.Character.hide(Game.characters.deputy);
                        await Game.ƒS.Character.hide(Game.characters.sheriff);
                        await Game.ƒS.update(1);
                        Game.ƒS.Speech.clear();
                        Game.ƒS.Speech.hide();
                        await Game.ƒS.Location.show(Game.locations.black);
                        await Game.ƒS.update(2);
                        break;
                    case goWithSheriffChoice.turndown:
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0009);
                        await Game.ƒS.Character.hide(Game.characters.protagonist);
                        await Game.ƒS.Character.hide(Game.characters.deputy);
                        await Game.ƒS.Character.hide(Game.characters.sheriff);
                        await Game.ƒS.update(1);
                        return "chapter_one_horses";
                }
                break;
            case getUpChoice.horses:
                await Game.ƒS.Character.hide(Game.characters.protagonist);
                await Game.ƒS.update(1);
                return "chapter_one_horses";
        }
    }
    Game.Chapter1BreakfastPath = Chapter1BreakfastPath;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function Chapter1HorsesPath() {
        let text = {
            protagonist: {
                T0001: "So, damit wären nun alle Pferde gefüttert. Ich glaube ich werde nun einen kleinen Ausritt zum alten Brunnen machen. Aber mit dem Mörder, der hier auf freiem Fuß ist, nehme ich besser etwas zur Selbstverteidigung mit. Aber was am besten?",
                T0002: "Ach ja, mein Lieblingsplatz hier in der Gegend. So, das Pferd kann hier trinken und grasen und ich machs mir auch gemütlich.",
                T0003: "Hallo, ist da jemand???",
                T0004: "Naja Chester, hab ich mir wohl nur eingebildet. Da war niema...",
                T0005: "Sheriff, ich brauch Hilfe, ich wurde angegriffen von einer schwarz vermummten Gestalt. Wahrscheinlich war es der Mörder. Auch wenn es mir nicht gefällt, ich werde euch helfen ihn zu suchen.",
                T0006: "Bist du der Mörder?",
                T0007: "Damit wirst du nie durchkommen!",
                T0008: "Du wolltest was? Dein neuestes Opfer entsorgen oder was?",
                T0009: "Nein bitte bitte. Ich hab dir nichts getan.",
                T0010: "Bitte was, besondere Pläne?",
                T0011: "Du widerst mich an!"
            },
            murderer: {
                T0001: "Warum bist du hier? Es sollte niemand hier sein!",
                T0002: "Was ist das da an deinem Gürtel? Oh nein, so einfach ist das hier nicht mein Guter.",
                T0003: "Ok, es reicht mir jetzt mit dir.",
                T0004: "Grüß deinen Vater von mir.",
                T0005: "Halt die Schnauze, ich muss nachdenken.",
                T0006: "Was denkst du, hmm?",
                T0007: "Du solltest nicht hier sein, ich wollte nur...",
                T0008: "Du kennst mich nicht. Ich entsorge meine Opfer nicht. Ich... Nein du wirst nichts aus mir herausbekommen.",
                T0009: "Du nervst mit deinem Betteln, halt jetzt dein Maul!",
                T0010: "Ok, wir machen es folgendermaßen: Du bist noch nicht dran, für dich habe ich besondere Pläne.",
                T0011: "Leise, ich will dich gehen lassen. Du sitzt jetzt auf dein Pferd und reitest einfach weg. Solltest du die Polizei holen und wieder her kommen, werde ich schon längst weg sein. Also los!!!"
            },
            narration: {
                N0001: Game.dataForSave.nameProtagonist + " macht sich auf den Weg. Er besteigt sein Pferd Chester und reitet gemütlich und mit vielen Umwegen, um die Landschaft zu bewundern, zum alten Brunnen.",
                N0002: "Nach einer Weile ist ein leichtes Schnarchen zu hören, während " + Game.dataForSave.nameProtagonist + " sich mit dem Hut über den Augen in der Sonne ausruht.",
                N0003: "Doch plötzlich reißt ihn das Geräusch eines brechenden Astes aus dem Schlaf.",
                N0004: "KNACK!!!",
                N0005: "(Stille)",
                N0006: "PONK!!!",
                N0007: "Ein dumpfer Schlag trifft " + Game.dataForSave.nameProtagonist + " am Kopf und er verliert das Bewusstsein. Als er wieder zu sich kommt, ist er an Armen und Beinen gefesselt.",
                N0008: "Er hört eine Stimme, die sehr offensichtlich verstellt ist.",
                N0009: "Mit verschwommener Sicht, nimmt " + Game.dataForSave.nameProtagonist + " eine vermummte Gestalt ganz in schwarz wahr. Neben ihr auf dem Boden liegt ein Mehlsack in Form eines Menschen.",
                N0010: "Unauffällig zieht " + Game.dataForSave.nameProtagonist + " das Messer aus seinem Gürtel und schneidet die Fesseln an seinen Armen durch. Danach löst er sich die Beinfesseln und stürzt ohne sich umzudrehen los in Richtung Chester.",
                N0011: "Kurz vor dem Aufsteigen auf das Pferd, glänzt etwas am Boden. Als " + Game.dataForSave.nameProtagonist + " sich bückt, um es aufzuheben, wird es klar, dass es eine Zange ist, wie sie Zahnärzte benutzen um Zähne zu ziehen. Dann macht er sich auf in Richtung Stadt.",
                N0012: "Die Gestalt greift an den Gürtel, zieht eine Waffe und hält sie " + Game.dataForSave.nameProtagonist + " an die Brust.",
                NH: "Hinweispunkte + 1",
                NI001: "Revolver ins Inventar gepackt",
                NI002: "Messer ins Inventar gepackt",
                NI003: "Zange ins Inventar gepackt"
            }
        };
        let weaponChoice = {
            gun: "Revolver",
            knife: "Messer"
        };
        let actionChoice = {
            grabWeapon: "Nach Waffe greifen",
            talk: "Mit schwarzer Gestalt reden"
        };
        let talkChoice1 = {
            whoareyou: "Hey, wer bist du?",
            letmego: "Lass mich gehen, bitte"
        };
        let talkChoice2 = {
            notgettingaway: "Damit wirst du nicht durchkommen",
            please: "Ich bitte dich"
        };
        let chosenKnife = false;
        await Game.ƒS.Location.show(Game.locations.stable);
        await Game.ƒS.update(Game.transitions.updownslider.duration, Game.transitions.updownslider.alpha, Game.transitions.updownslider.edge);
        await Game.ƒS.Character.show(Game.characters.protagonist, Game.characters.protagonist.pose.normal, Game.ƒS.positionPercent(80, 90));
        await Game.ƒS.update(1);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0001);
        let weaponChoiceElement = await Game.ƒS.Menu.getInput(weaponChoice, "choices");
        switch (weaponChoiceElement) {
            case weaponChoice.gun:
                Game.ƒS.Inventory.add(Game.items.gun);
                await Game.ƒS.Speech.tell("", text.narration.NI001, true, "italic");
                break;
            case weaponChoice.knife:
                Game.ƒS.Inventory.add(Game.items.knife);
                await Game.ƒS.Speech.tell("", text.narration.NI002, true, "italic");
                chosenKnife = true;
                break;
        }
        await Game.ƒS.Location.show(Game.locations.well);
        await Game.ƒS.update(Game.transitions.updownslider.duration, Game.transitions.updownslider.alpha, Game.transitions.updownslider.edge);
        Game.ƒS.Sound.play(Game.sound.well, 0.1, true);
        await Game.ƒS.Speech.tell("", text.narration.N0001, true, "italic");
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0002);
        await Game.ƒS.Speech.tell("", text.narration.N0002, true, "italic");
        await Game.ƒS.Speech.tell("", text.narration.N0003, true, "italic");
        await Game.ƒS.Speech.tell("", text.narration.N0004, true, "italic");
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0003);
        await Game.ƒS.Speech.tell("", text.narration.N0005, true, "italic");
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0004);
        await Game.ƒS.Speech.tell("", text.narration.N0006, true, "italic");
        await Game.ƒS.Speech.tell("", text.narration.N0007, true, "italic");
        await Game.ƒS.Speech.tell("", text.narration.N0008, true, "italic");
        Game.ƒS.Sound.fade(Game.sound.relax, 0, 0.5, false);
        Game.ƒS.Sound.play(Game.sound.action, 0.1, true);
        await Game.ƒS.Character.show(Game.characters.murderer, Game.characters.murderer.pose.normal, Game.ƒS.positionPercent(20, 90));
        await Game.ƒS.update(1);
        await Game.ƒS.Speech.tell(Game.characters.murderer, text.murderer.T0001);
        await Game.ƒS.Speech.tell("", text.narration.N0009, true, "italic");
        let actionChoiceElement = await Game.ƒS.Menu.getInput(actionChoice, "choices");
        switch (actionChoiceElement) {
            case actionChoice.grabWeapon:
                if (chosenKnife) {
                    Game.ƒS.Sound.play(Game.sound.knife, 0.2, false);
                    await Game.ƒS.Speech.tell("", text.narration.N0010, true, "italic");
                    await Game.ƒS.Speech.tell("", text.narration.N0011, true, "italic");
                    await Game.ƒS.Character.hide(Game.characters.murderer);
                    await Game.ƒS.update(1);
                    Game.ƒS.Inventory.add(Game.items.pliers);
                    Game.dataForSave.foundPliers = true;
                    await Game.ƒS.Speech.tell("", text.narration.NI003, true, "italic");
                    await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0005);
                    await Game.ƒS.Character.hide(Game.characters.protagonist);
                    await Game.ƒS.update(1);
                    Game.ƒS.Speech.clear();
                    Game.ƒS.Speech.hide();
                    Game.ƒS.Sound.fade(Game.sound.action, 0, 0.5, false);
                    Game.ƒS.Sound.fade(Game.sound.well, 0, 0.5, false);
                    await Game.ƒS.Location.show(Game.locations.black);
                    await Game.ƒS.update(2);
                }
                else {
                    await Game.ƒS.Speech.tell(Game.characters.murderer, text.murderer.T0002);
                    await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0011);
                    await Game.ƒS.Speech.tell(Game.characters.murderer, text.murderer.T0003);
                    await Game.ƒS.Speech.tell("", text.narration.N0012, true, "italic");
                    await Game.ƒS.Speech.tell(Game.characters.murderer, text.murderer.T0004);
                    await Game.ƒS.Character.hide(Game.characters.murderer);
                    await Game.ƒS.Character.hide(Game.characters.protagonist);
                    await Game.ƒS.update(1);
                    Game.ƒS.Speech.clear();
                    Game.ƒS.Speech.hide();
                    Game.ƒS.Sound.fade(Game.sound.action, 0, 0.5, false);
                    Game.ƒS.Sound.fade(Game.sound.well, 0, 0.5, false);
                    await Game.ƒS.update(1);
                    return "bad_ending";
                }
                break;
            case actionChoice.talk:
                let talkChoice1Element = await Game.ƒS.Menu.getInput(talkChoice1, "choices");
                switch (talkChoice1Element) {
                    case talkChoice1.whoareyou:
                        await Game.ƒS.Speech.tell(Game.characters.murderer, text.murderer.T0005);
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0006);
                        await Game.ƒS.Speech.tell(Game.characters.murderer, text.murderer.T0006);
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0007);
                        await Game.ƒS.Speech.tell(Game.characters.murderer, text.murderer.T0010);
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0010);
                        await Game.ƒS.Speech.tell("", text.narration.NH, true, "italic underlined");
                        Game.dataForSave.cluePoints += 1;
                        await Game.ƒS.Speech.tell(Game.characters.murderer, text.murderer.T0011);
                        await Game.ƒS.Speech.tell("", text.narration.N0011, true, "italic");
                        await Game.ƒS.Character.hide(Game.characters.murderer);
                        await Game.ƒS.update(1);
                        Game.ƒS.Inventory.add(Game.items.pliers);
                        Game.dataForSave.foundPliers = true;
                        await Game.ƒS.Speech.tell("", text.narration.NI003, true, "italic");
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0005);
                        await Game.ƒS.Character.hide(Game.characters.protagonist);
                        await Game.ƒS.update(1);
                        Game.ƒS.Speech.clear();
                        Game.ƒS.Speech.hide();
                        Game.ƒS.Sound.fade(Game.sound.action, 0, 0.5, false);
                        Game.ƒS.Sound.fade(Game.sound.well, 0, 0.5, false);
                        await Game.ƒS.Location.show(Game.locations.black);
                        await Game.ƒS.update(2);
                        break;
                    case talkChoice1.letmego:
                        await Game.ƒS.Speech.tell(Game.characters.murderer, text.murderer.T0007);
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0008);
                        await Game.ƒS.Speech.tell(Game.characters.murderer, text.murderer.T0008);
                        let talkChoice2Element = await Game.ƒS.Menu.getInput(talkChoice2, "choices");
                        switch (talkChoice2Element) {
                            case talkChoice2.notgettingaway:
                                await Game.ƒS.Speech.tell(Game.characters.murderer, text.murderer.T0010);
                                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0010);
                                await Game.ƒS.Speech.tell("", text.narration.NH, true, "italic");
                                Game.dataForSave.cluePoints += 1;
                                await Game.ƒS.Speech.tell(Game.characters.murderer, text.murderer.T0011);
                                await Game.ƒS.Speech.tell("", text.narration.N0011, true, "italic");
                                await Game.ƒS.Character.hide(Game.characters.murderer);
                                await Game.ƒS.update(1);
                                Game.ƒS.Inventory.add(Game.items.pliers);
                                Game.dataForSave.foundPliers = true;
                                await Game.ƒS.Speech.tell("", text.narration.NI003, true, "italic");
                                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0005);
                                await Game.ƒS.Character.hide(Game.characters.protagonist);
                                await Game.ƒS.update(1);
                                Game.ƒS.Speech.clear();
                                Game.ƒS.Speech.hide();
                                Game.ƒS.Sound.fade(Game.sound.action, 0, 0.5, false);
                                Game.ƒS.Sound.fade(Game.sound.well, 0, 0.5, false);
                                await Game.ƒS.Location.show(Game.locations.black);
                                await Game.ƒS.update(2);
                                break;
                            case talkChoice2.please:
                                await Game.ƒS.Speech.tell(Game.characters.murderer, text.murderer.T0009);
                                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0009);
                                await Game.ƒS.Speech.tell(Game.characters.murderer, text.murderer.T0003);
                                await Game.ƒS.Speech.tell("", text.narration.N0012, true, "italic");
                                await Game.ƒS.Speech.tell(Game.characters.murderer, text.murderer.T0004);
                                await Game.ƒS.Character.hide(Game.characters.murderer);
                                await Game.ƒS.Character.hide(Game.characters.protagonist);
                                await Game.ƒS.update(1);
                                Game.ƒS.Speech.clear();
                                Game.ƒS.Speech.hide();
                                Game.ƒS.Sound.fade(Game.sound.action, 0, 0.5, false);
                                Game.ƒS.Sound.fade(Game.sound.well, 0, 0.5, false);
                                await Game.ƒS.update(1);
                                return "bad_ending";
                        }
                        break;
                }
                break;
        }
    }
    Game.Chapter1HorsesPath = Chapter1HorsesPath;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function Chapter2AccusationPath() {
        let text = {
            protagonist: {
                T0001: "Ich habe eben so ein Gefühl. Also, lass mich nochmal nachdenken...",
                T0002: "Ich habe gestern mit Jenkins gesporchen. Er hat mir gesagt, sein Lieblingsort ist der alte Baumstumpf und zu euch sagt er, dass er am liebsten beim Brunnen ist. Mmh irgendetwas ist da doch faul.",
                T0003: "Ja, ist wahrscheinlich am Besten. Weißt du zufällig wo er sich gerade aufhält?",
                T0004: "Würdest du Deputy nochmal hereinbitten?",
                T0005: "Deputy, nimm bitte... den Sheriff fest.",
                T0006: "Es macht alles Sinn. Du benutzt deinen Deckmantel als Sheriff um die Morde zu begehen und sie zu vertuschen. Ich bin mir sicher.",
                T0007: "Sheriff, ich glaube dass der Deputy irgendwas zu verbergen hat."
            },
            sheriff: {
                T0001: "Was? Komm schon, ich weiß, dass du diese Gabe geerbt hast, aber so gut kannst du doch auch nicht sein. Woher willst du denn jetzt schon wissen wer es war?",
                T0002: "Wir besuchen ihn am besten und fragen, was es damit auf sich hat und warum er überhaupt beim Brunnen war.",
                T0003: "Meine Leute sind immer noch dabei, ihn zu befragen. Also müsste er noch am Brunnen sein. Lass uns zu ihm gehen",
                T0004: "Deputy, herkommen bitte.",
                T0005: "Bist du denn von allen guten Geistern verlassen Junge? Was soll denn das?",
                T0006: "Das ist alles ein Fehler! Warum sollte ich diese Morde begehen?",
                T0007: "Deputy, sofort herkommen!",
                T0008: "Wir ziehen am besten noch keine voreiligen Schlüsse. Los, machen wir uns auf die Suche nach ihr! Vielleicht gehen wir dafür an die Orte, von denen wir wissen, dass der Mörder sie besucht hat."
            },
            deputy: {
                T0001: "Sheriff, Hände hoch und mitkommen!!!",
                T0002: "Erklär das dem Richter!"
            },
            policeman: {
                T0001: "Sheriff, sie ist vor etwa 10 Minuten gegangen. Sie wollte uns nicht sagen wohin aber sie sah aus, als hätte sie es ziemlich eilig."
            },
            narration: {
                N0001: "Deputy kommt in den Raum",
                N0002: "Nachdem der Sheriff im Gefängnis gelandet ist, hören die Morde für ein paar Wochen auf. Doch als sich der Staub gelegt hat, fangen sie wieder an. Noch schlimmer und brutaler als zuvor. " + Game.dataForSave.nameProtagonist + " sieht seinen Irrtum ein und versucht den Sheriff aus dem Gefängnis zu holen. Doch an dem Tag, als er das versuchen möchte, geschieht es. Es erwischt ihn auf seinem Hof, gerade als er die Pferde füttern möchte. Das neueste Opfer des Mörders ist " + Game.dataForSave.nameProtagonist + ".",
                N0003: "(Stille)",
                NH: "Hinweispunkte + 1"
            }
        };
        let lookForDeputyChoice = {
            well: "Na gut, auf zum Brunnen",
            graveyard: "Na gut, auf zum Friedhof"
        };
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0001);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0001);
        let current = 0;
        let choice = { back: "Vorherige Seite", buy_clue: "Neuen Hinweis kaufen", next: "Nächste Seite", accuse: "Beschuldigen" };
        let choiceNoBuy = { back: "Vorherige Seite", next: "Nächste Seite", accuse: "Beschuldigen" };
        let accusation = { jenkins: "Jenkins beschuldigen", sheriff: "Sheriff beschuldigen", deputy: "Deputy beschuldigen" };
        let choiceInput;
        let choiceNoBuyInput;
        let accusationInput;
        Game.ƒS.Text.addClass("accusemenu");
        do {
            let pages = [
                "<strong><u>Beschuldigunsmenü</u></strong><br\><br\><strong>Verbleibende Hinweispunkte: " + Game.dataForSave.cluePoints + "</strong><br\><br\><br\><br\><br\><br\><br\>",
                "Hinweis 1,<br\><br\>Der Mörder trägt einen Hut.<br\><br\><br\><br\><br\><br\>",
                "Hinweis 2,<br\><br\>Der Mörder hat etwas mit Zähnen zu tun.<br\><br\><br\><br\><br\><br\>",
                "Hinweis 3,<br\><br\>Der Mörder wurde adoptiert.<br\><br\><br\><br\><br\><br\>",
                "Hinweis 4,<br\><br\>Der Mörder ist eine Frau.<br\><br\><br\><br\><br\><br\>"
            ];
            Game.ƒS.Text.print(pages[current]);
            if (Game.dataForSave.cluePoints === 0 || Game.dataForSave.canLookatPages === (pages.length - 1)) {
                choiceNoBuyInput = await Game.ƒS.Menu.getInput(choiceNoBuy, "accusemenu-input");
                switch (choiceNoBuyInput) {
                    case choiceNoBuy.back:
                        current = Math.max(0, current - 1);
                        break;
                    case choiceNoBuy.next:
                        current = Math.min(Game.dataForSave.canLookatPages, current + 1);
                        break;
                    case choiceNoBuy.accuse:
                        accusationInput = await Game.ƒS.Menu.getInput(accusation, "accusemenu-input");
                        switch (accusationInput) {
                            case accusation.jenkins:
                                Game.ƒS.Sound.play(Game.sound.accuse, 0.2, false);
                                Game.dataForSave.chapter2Accused = "jenkins";
                                break;
                            case accusation.sheriff:
                                Game.ƒS.Sound.play(Game.sound.accuse, 0.2, false);
                                Game.dataForSave.chapter2Accused = "sheriff";
                                break;
                            case accusation.deputy:
                                Game.ƒS.Sound.play(Game.sound.accuse, 0.2, false);
                                Game.dataForSave.chapter2Accused = "deputy";
                                break;
                        }
                        break;
                }
            }
            else {
                choiceInput = await Game.ƒS.Menu.getInput(choice, "accusemenu-input");
                switch (choiceInput) {
                    case choice.back:
                        current = Math.max(0, current - 1);
                        break;
                    case choice.next:
                        current = Math.min(Game.dataForSave.canLookatPages, current + 1);
                        break;
                    case choice.buy_clue:
                        Game.dataForSave.canLookatPages += 1;
                        current = Game.dataForSave.canLookatPages;
                        Game.dataForSave.cluePoints = Game.dataForSave.cluePoints - 1;
                        break;
                    case choice.accuse:
                        accusationInput = await Game.ƒS.Menu.getInput(accusation, "accusemenu-input");
                        switch (accusationInput) {
                            case accusation.jenkins:
                                Game.ƒS.Sound.play(Game.sound.accuse, 0.2, false);
                                Game.dataForSave.chapter2Accused = "jenkins";
                                break;
                            case accusation.sheriff:
                                Game.ƒS.Sound.play(Game.sound.accuse, 0.2, false);
                                Game.dataForSave.chapter2Accused = "sheriff";
                                break;
                            case accusation.deputy:
                                Game.ƒS.Sound.play(Game.sound.accuse, 0.2, false);
                                Game.dataForSave.chapter2Accused = "deputy";
                                break;
                        }
                        break;
                }
            }
        } while (Game.dataForSave.chapter2Accused === "");
        Game.ƒS.Text.close();
        if (Game.dataForSave.chapter2Accused === "jenkins") {
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0002);
            await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0002);
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0003);
            await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0003);
            await Game.ƒS.Location.show(Game.locations.well);
            Game.ƒS.Sound.fade(Game.sound.west, 0, 0.5, false);
            await Game.ƒS.update(Game.transitions.updownslider.duration, Game.transitions.updownslider.alpha, Game.transitions.updownslider.edge);
            return "chapter_three_well_interrogation";
        }
        else if (Game.dataForSave.chapter2Accused === "sheriff") {
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0004);
            await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0004);
            await Game.ƒS.Speech.tell("", text.narration.N0001, true, "italic");
            await Game.ƒS.Character.animate(Game.characters.sheriff, Game.characters.sheriff.pose.normal, Game.moveLeftCharAnimation());
            await Game.ƒS.Character.show(Game.characters.deputy, Game.characters.deputy.pose.normal, Game.ƒS.positionPercent(30, 90));
            await Game.ƒS.update(1);
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0005);
            await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0005);
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0006);
            await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0001);
            await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0006);
            await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0002);
            await Game.ƒS.Character.hide(Game.characters.deputy);
            await Game.ƒS.Character.hide(Game.characters.protagonist);
            await Game.ƒS.Character.hide(Game.characters.sheriff);
            await Game.ƒS.update(1);
            await Game.ƒS.Speech.tell("", text.narration.N0002, true, "italic");
            Game.ƒS.Speech.clear();
            Game.ƒS.Speech.hide();
            Game.ƒS.Sound.fade(Game.sound.west, 0, 0.5, false);
            await Game.ƒS.Location.show(Game.locations.black);
            await Game.ƒS.update(2);
            return "bad_ending";
        }
        else if (Game.dataForSave.chapter2Accused === "deputy") {
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0004);
            await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0004);
            await Game.ƒS.Speech.tell("", text.narration.N0003, true, "italic");
            await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0007);
            await Game.ƒS.Speech.tell("Anderer Gesetzeshüter", text.policeman.T0001);
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0007);
            await Game.ƒS.Speech.tell("", text.narration.NH, true, "italic");
            Game.dataForSave.cluePoints += 1;
            await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0008);
            let lookForDeputyElement = await Game.ƒS.Menu.getInput(lookForDeputyChoice, "choices");
            await Game.ƒS.Character.hide(Game.characters.protagonist);
            await Game.ƒS.Character.hide(Game.characters.sheriff);
            await Game.ƒS.update(1);
            Game.ƒS.Speech.clear();
            Game.ƒS.Speech.hide();
            Game.ƒS.Sound.fade(Game.sound.west, 0, 0.5, false);
            await Game.ƒS.Location.show(Game.locations.black);
            await Game.ƒS.update(2);
            switch (lookForDeputyElement) {
                case lookForDeputyChoice.well:
                    return "chapter_three_well_beginning";
                case lookForDeputyChoice.graveyard:
                    return "chapter_three_graveyard";
            }
        }
    }
    Game.Chapter2AccusationPath = Chapter2AccusationPath;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function Chapter2Main() {
        let text = {
            protagonist: {
                T0001: "Ok, was wolltet ihr mir denn zeigen?",
                T0002: "Oh Gott ihr hättet mich auch ruhig vorwarnen können bevor ihr mir hier eine Leiche zeigt.",
                T0003: "Ist das etwa die Frau des alten Fischers? Wer würde so etwas schreckliches tun?",
                T0004: "Die Zähne fehlen, aber warum? Ist mir bei ihr vorher nie aufgefallen.",
                T0005: "Ich habe ja vorhin erzählt, dass mir der Mörder begegnet ist. Habt ihr schon Leute zum alten Brunnen geschickt?",
                T0006: "Ich hab beim wegreiten was vom Boden aufgehoben, so eine Art Zahnarztzange. Ihr könnt ja mal schauen, ob die vielleicht irgendwie zum Mörder führen könnte.",
                T0007: "Das ist ja schrecklich! Und habt ihr sonst noch irgendwelche Anhaltspunkte?"
            },
            sheriff: {
                T0001: "Schau mal hier.",
                T0002: "Das ist die Frage. Uns ist noch etwas aufgefallen. Schau mal in ihren Mund.",
                T0003: "Wir vermuten, dass sie erst nach dem Tod entfernt wurden. Bei den anderen Opfern ist es genau dasselbe.",
                T0004: "Ja, aber als sie dort ankamen, war nur die Leiche vorzufinden. Vom Mörder keine Spur. Unterwegs haben sie nur den alten Jenkins getroffen, der zum Brunnen wollte. Hat behauptet, das ist sein Lieblingsplatz im Dorf. Und wieder das gleiche Muster beim Opfer, keine Schneidezähne mehr.",
                T0005: "Wow das ist ein wichtiger Fund. Ich gebe es gleich mal meiner Kollegin. Deputy, kommen Sie mal her.",
                T0006: Game.dataForSave.nameProtagonist + " hat sie gefunden, als der Mörder ihn angegriffen hat.",
                T0008: "Leider nicht. Deswegen bist du ja da, um uns zu helfen.",
                T0009: "Danke Deputy, sie können abtreten.",
                T0011: "Wie wärs, sollen wir als nächstes zum alten Brunnen, damit du mit deiner Gabe schauen kannst, ob dir etwas auffällt, das wir übersehen haben oder sollen wir zum Friedhof, dem Ort, wo die letzte Leiche gefunden wurde?"
            },
            deputy: {
                T0001: "Hallo Sheriff, sie haben Glück, ich bin gerade wieder da vom Postbüro. Warum liegt da eine Zahnarztzange?",
                T0002: "Oh, interessant.",
                T0003: "Sheriff, wir haben noch eine Leiche gefunden, am alten Brunnen. Beziehungsweise der alte Jenkins hat sie gefunden. Hat behauptet, das ist seine Lieblingsstelle im Dorf. Genau das gleiche Muster, wie bei den anderen Opfern. Die Schneidezähne 11 und 21 fehlen.",
                T0004: "Ach nichts besonderes, mein Adoptivvater ist Doktor für Zähne drüben in Jamestown.",
                T0005: "Nein, soweit ich es beurteilen konnte nicht. Das einzige, was alle Opfer gemein haben sind die Zähne."
            },
            narration: {
                N0001: "(" + Game.dataForSave.nameProtagonist + " schaut genauer hin)",
                N0002: "Als " + Game.dataForSave.nameProtagonist + " in den Mund der Verstorbenen blickt fällt ihm direkt auf, dass die beiden oberen vorderen Schneidezähne fehlen.",
                N0003: "Deputy kommt in den Raum.",
                N0004: "Deputy verlässt Raum.",
                NH: "Hinweispunkte + 1",
                NI001: "Revolver ins Inventar gepackt"
            }
        };
        let askDeputyChoice = {
            teeth: "Oh wow, warum kennen Sie sich so gut mit Zähnen aus?",
            other: "Gibt es noch etwas anderes Auffälliges?"
        };
        let nextPlaceChoice = {
            graveyard: "Zum Friedhof",
            well: "Zum Brunnen",
            accuse: "Nicht so schnell, ich habe eine Vermutung"
        };
        Game.ƒS.Speech.hide();
        Game.ƒS.Sound.play(Game.sound.west, 0.1, true);
        await Game.ƒS.Location.show(Game.locations.chapter2);
        await Game.ƒS.update(5);
        await Game.ƒS.Location.show(Game.locations.bureau);
        await Game.ƒS.update(Game.transitions.middleslider.duration, Game.transitions.middleslider.alpha, Game.transitions.middleslider.edge);
        await Game.ƒS.Character.show(Game.characters.protagonist, Game.characters.protagonist.pose.normal, Game.ƒS.positionPercent(80, 90));
        await Game.ƒS.update(1);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0001);
        await Game.ƒS.Character.show(Game.characters.sheriff, Game.characters.sheriff.pose.normal, Game.ƒS.positionPercent(20, 90));
        await Game.ƒS.update(1);
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0001);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0002);
        await Game.ƒS.Speech.tell("", text.narration.N0001, true, "italic");
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0003);
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0002);
        await Game.ƒS.Speech.tell("", text.narration.N0002, true, "italic");
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0004);
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0003);
        if (Game.dataForSave.foundPliers) {
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0005);
            await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0004);
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0006);
            await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0005);
            await Game.ƒS.Speech.tell("", text.narration.N0003, true, "italic");
            await Game.ƒS.Character.animate(Game.characters.sheriff, Game.characters.sheriff.pose.normal, Game.moveLeftCharAnimation());
            await Game.ƒS.Character.show(Game.characters.deputy, Game.characters.deputy.pose.normal, Game.ƒS.positionPercent(30, 90));
            await Game.ƒS.update(1);
            await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0001);
            await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0006);
            await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0002);
            await Game.ƒS.Speech.tell("", text.narration.NH, true, "italic");
            Game.dataForSave.cluePoints += 1;
            await Game.ƒS.Speech.tell("", text.narration.N0004, true, "italic");
            await Game.ƒS.Character.hide(Game.characters.deputy);
            await Game.ƒS.Character.animate(Game.characters.sheriff, Game.characters.sheriff.pose.normal, Game.moveLeftCharBackAnimation());
        }
        else {
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0007);
            await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0008);
            await Game.ƒS.Speech.tell("", text.narration.N0003, true, "italic");
            await Game.ƒS.Character.animate(Game.characters.sheriff, Game.characters.sheriff.pose.normal, Game.moveLeftCharAnimation());
            await Game.ƒS.Character.show(Game.characters.deputy, Game.characters.deputy.pose.normal, Game.ƒS.positionPercent(30, 90));
            await Game.ƒS.update(1);
            await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0003);
            let askDeputyChoiceElement = await Game.ƒS.Menu.getInput(askDeputyChoice, "choices");
            switch (askDeputyChoiceElement) {
                case askDeputyChoice.teeth:
                    await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0004);
                    await Game.ƒS.Speech.tell("", text.narration.NH, true, "italic");
                    Game.dataForSave.cluePoints += 1;
                    await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0009);
                    break;
                case askDeputyChoice.other:
                    await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0005);
                    await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0009);
                    break;
            }
            await Game.ƒS.Speech.tell("", text.narration.N0004, true, "italic");
            await Game.ƒS.Character.hide(Game.characters.deputy);
            await Game.ƒS.Character.animate(Game.characters.sheriff, Game.characters.sheriff.pose.normal, Game.moveLeftCharBackAnimation());
        }
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0011);
        let nextPlaceChoiceElement = await Game.ƒS.Menu.getInput(nextPlaceChoice, "choices");
        switch (nextPlaceChoiceElement) {
            case nextPlaceChoice.graveyard:
                await Game.ƒS.Character.hide(Game.characters.protagonist);
                await Game.ƒS.Character.hide(Game.characters.sheriff);
                await Game.ƒS.update(1);
                Game.ƒS.Speech.clear();
                Game.ƒS.Speech.hide();
                Game.ƒS.Sound.fade(Game.sound.west, 0, 0.5, false);
                await Game.ƒS.Location.show(Game.locations.black);
                await Game.ƒS.update(2);
                return "chapter_three_graveyard";
            case nextPlaceChoice.well:
                await Game.ƒS.Character.hide(Game.characters.protagonist);
                await Game.ƒS.Character.hide(Game.characters.sheriff);
                await Game.ƒS.update(1);
                Game.ƒS.Speech.clear();
                Game.ƒS.Speech.hide();
                Game.ƒS.Sound.fade(Game.sound.west, 0, 0.5, false);
                await Game.ƒS.Location.show(Game.locations.black);
                await Game.ƒS.update(2);
                return "chapter_three_well_beginning";
            case nextPlaceChoice.accuse:
                return "chapter_two_accusation";
        }
    }
    Game.Chapter2Main = Chapter2Main;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function Chapter3Graveyard() {
        let text = {
            protagonist: {
                T0001: "Ok, also hier wurde die letzte Leiche gefunden was?",
                T0002: "Ist ja ganz praktisch, dass sie hier gefunden wurde was?",
                T0003: "Ok, tut mir Leid. Zu früh... Wer ist das da vorne?",
                T0004: "Oh ok verstehe.",
                T0005: "(zu Patty) Mein aufrichtiges Beileid, Ma'am",
                T0006: "Hier ist sonst nichts!",
                T0007: "Hast Recht, wollte nur auf Nummer sicher gehen.",
                T0008: "Hey Sheriff, warum steht dieser Grabstein da hinten so weit ab vom Schuss?",
                T0009: "Ah gut, dass Sie da sind. Sheriff, kommen Sie mal her!",
                T0010: "Wir sind hier nochmals alles wegen der letzten Leiche, Stan. Was machen Sie hier?",
                T0011: "Genug jetzt. Ich weiß, wer der Mörder ist.",
                T0012: "Es war... der Sheriff selbst.",
                T0013: "Es macht Sinn. Du benutzt deinen Deckmantel als Sheriff um die Morde zu begehen und sie zu vertuschen. Ich bin mir sicher.",
                T0014: "Die Mörderin ist... Patty. Sie hat ihren Mann umgebracht, um sein ganzes Goldgräbervermögen nur für sich allein zu haben. Die anderen Morde hat sie bestimmt aus Vergnügen begangen.",
                T0015: "Als ich den Namen auf dem Grabstein gelesen habe, kam ich erst nicht drauf. Sawyer. Wo habe ich den Namen schonmal gehört? Dann fiel es mir wieder ein. Ich habe es in der Zeitung gelesen, damals, zusammen mit der Todesanzeige meines Vaters. Die Tochter des Mörders meines Vaters, ein Randy Sawyer, wurde adoptiert von einem Zahnarzt in Jamestown. Und sie ist heute hier, um Ihren Vater zu besuchen. Deputy, deren wahrer Nachname Sawyer ist.",
                T0016: "Das was dein Vater getan hat, was du getan hast... Ihr seid beide Mörder!",
                T0017: "Oh Gott das wollte ich nicht, es war ein Reflex.",
                T0018: "Stopp, bitte, lass uns darüber reden!",
                T0019: "Ich verstehe, was du durchmachst. Als mein Vater starb, wollte ich auch alles und jeden dafür verantwortlich machen.",
                T0020: "Nein, ich muss versuchen, mit ihr zu reden.",
                T0021: "(zu Deputy) Hey, bitte, lass uns reden.",
                T0022: "Ruby!!! Nimm die Waffe runter.",
                T0023: "Ruby, es tut mir Leid was dir passiert ist. Aber das ist doch kein Grund, die unschuldigen Einwohner dieser Stadt umzubringen.",
                T0024: "Bitte Ruby, versteh doch. Das Einzige, was du mit den Morden bewirkst, ist noch mehr Schmerz, wie wir ihn damals erlebt haben. Willst du das anderen Kindern zumuten?",
                T0025: "Glaub mir, ich wollte auch alles und jedem die Schuld geben, aber das geht so nicht.",
                T0026: "Ruby, ich bin vielleicht der Einzige hier der dich versteht. Wir haben beide unsere Väter verloren an diesem Tag.",
                T0027: "NEEIINN!!!",
                T0028: "(zu Patty) Geben Sie mir doch die Waffe!"
            },
            sheriff: {
                T0001: "Genau. Sie lag unter einem der Bäume da vorne.",
                T0002: "...",
                T0003: "Patty, was machen Sie denn hier?",
                T0004: "Sie stören doch keineswegs. Bleiben Sie nur hier, wir sind am Hinweise sammeln.",
                T0005: "Alles klar, wir fangen am besten damit an, nochmal die Spuren hier zu untersuchen. Welche willst du anschauen?",
                T0006: "Ich weiß nicht, ob du hier noch was finden wirst, meine Leute haben so ziemlich alles wichtige schon eingesackt.",
                T0007: "Es tut mir Leid, das ist der Grabstein vom Mörder von deinem Vater...",
                T0008: "Deputy, wo waren Sie? Sie können nicht einfach mitten am Tag abhauen ohne jemandem Bescheid zu sagen!",
                T0009: "Wen möchten Sie denn hier eigentlich besuchen, Deputy?",
                T0010: "Und wer genau?",
                T0011: "Weichen sie nicht meiner Frage aus, Deputy. Was machen Sie hier?",
                T0012: "Guter Scherz Junge aber jetzt sag uns wer der wahre Mörder ist.",
                T0013: "Das ist eine Lüge. Und falls ich mal weg bin, dann um Zeit mit meiner Familie zu verbringen. Ihr seid doch alle verrückt.",
                T0014: "Das ist ein Fehler! Der wahre Mörder ist noch auf freiem Fuß.",
                T0015: "Sag mal, hörst du dir überhaupt zu oder was? Du denkst wirklich, dass Patty so viele Menschen umbringen könnte? Vielleicht war es wirklich ein Fehler, dich dem Fall hinzuzuziehen. Hiermit bist du offziell entlassen. Ich übernehme das ab hier.",
                T0016: "Hände hoch und Waffe fallen lassen!",
                T0017: "Bitte Ruby, ich habe dich damals unter meine Fittiche genommen, weil ich großes Talent in dir sah. Warum tust du das?",
                T0018: "Komm schon, das ist nicht fair",
                T0019: "(zu " + Game.dataForSave.nameProtagonist + ") Ihr Mann war Stan. Er war die Leiche, die hier gefunden wurde.",
                T0020: "Nimm deine Hände hoch, du hast all diese Menschen umgebracht.",
                T0021: "Ruby, letzte Warnung.",
                T0022: "Du weißt, dass ich das nicht kann."
            },
            deputy: {
                T0001: "Was macht ihr hier?",
                T0002: "Ja es tut mir Leid. Heute ist nur der Jahrestag vom Tod von...",
                T0003: "Ähh, ich möchte einen Verwandten besuchen.",
                T0004: "Jemand, der mir sehr wichtig war und der mir zu früh weggenommen wurde.",
                T0005: "Ist ihnen eigentlich aufgefallen, dass Patty eine riesige Perlenkette trägt? Vor dem Tod ihres Mannes hatte sie nie so eine an.",
                T0006: "Das gleiche könnte ich Sie fragen Sheriff? Sie fragen hier einen Bauernjungen, der keine Ahnung von Polizeiarbeit hat nach Hilfe. Für was, um die eigenen Spuren zu verwischen oder was?",
                T0007: "Ja jetzt wo Sie es sagen, der Sheriff war in letzter Zeit öfter weg als sonst.",
                T0008: "Sheriff! Waffe wegwerfen und Hände hoch! Sie sind verhaftet.",
                T0009: "Erzähl das dem Richter",
                T0010: "Hahaha... Ich dachte schon du kommst nie drauf! Damals hat dein Vater meinen Vater kaltblütig ermordet! Er wollte nur für mich Sorgen! Er wollte nie jemanden verletzen. Nur das Geld und abhauen. Aber dein Vater hat alles ruiniert! Ich bin bei dem Zahnarzt und seiner Familie untergekommen. Wie der letzte Dreck haben die mich behandelt. Also hab ich irgendwann das Zahnarztequipment geschnappt und sie einen nach dem anderen getötet.",
                T0011: "Ich, vielleicht aber wag es nicht meinen Vater einen Mörder zu nennen. Er war ein Held.",
                T0012: "Worüber denn? Dass dein Vater meinen ermordet hat?",
                T0013: "Du verstehst gar nichts. Eigentlich wollte ich mir deinen Tod für später aufheben, aber was solls?",
                T0014: "Halt dich da raus, alter Mann!",
                T0015: "Oh ja du bist ja so tooolll. Und wo warst du damals, als ich ein Kind war?",
                T0016: "Ich habe nichts mehr zu sagen.",
                T0017: "Ahh es reicht mir jetzt!",
                T0018: "Oh nein so leicht mach ich es dir nicht",
                T0019: "Unschuldig? Ihr seid alle Schuld am Tod meines Vater, dein Vater besonders",
                T0020: "(unter Tränen) Aber was soll ich denn machen? Ich kann die Dinge nicht ungeschehen machen. Ich wollte nur Rache dafür, was mir angetan wurde.",
                T0021: "Und ich bin dann nach Jamestown gekommen, wo mein Leben die Hölle war. Kannst du mich immer noch verstehen? Mhh?",
                T0022: "Auch von mir die letzte Warnung, alter Mann. Lass mich einfach gehen.",
                T0023: "Ihre Zähne habe ich als Trophäen behalten, weil er das auch mit seinen Patienten gemacht hat. Das stand nicht in deiner tollen Zeitung was? Und dann bin ich zurück hierher gekommen und Deputy geworden. Niemand hat etwas geahnt als ich angefangen habe, mich an diesem Ort zu rächen für das was ihr mir angetan habt."
            },
            patty: {
                T0001: "(weinend) Oh hallo Sheriff, es tut mir Leid falls ich störe, ich wollte mich nur nochmal von meinem Stan verabschieden.",
                T0002: "Ich wusste von Anfang an, dass etwas mit ihr nicht stimmt. Hier, mein Junge, nimm meine Waffe."
            },
            narration: {
                N0001: "Patty nickt in die Richtung von " + Game.dataForSave.nameProtagonist + ".",
                N0002: "Am Tor findet " + Game.dataForSave.nameProtagonist + " nur einen Hammer, der im Gras liegt.",
                N0003: "Die Grabsteine sind alt und nur schwer zu lesen. Bis auf ein paar bekannte Name fällt " + Game.dataForSave.nameProtagonist + " nichts ungewöhnliches auf, bis...",
                N0004: "Mit Kloß in der Brust tritt " + Game.dataForSave.nameProtagonist + " vor das Grab. Er kann einen Namen erkennen. Randy Sawyer. Irgendwo hat er diesen Namen schonmal gehört. Plötzlich ertönt eine Stimme hinter ihm.",
                N0005: "Als " + Game.dataForSave.nameProtagonist + " sich umdreht, sieht er Deputy mit Blumen in der Hand vor sich stehen. ",
                N0006: Game.dataForSave.nameProtagonist + " deutet auf die Blumen.",
                N0007: "Nachdem der Sheriff im Gefängnis gelandet ist, hören die Morde für ein paar Wochen auf. Doch als sich der Staub gelegt hat, fangen sie wieder an. Noch schlimmer und brutaler als zuvor. " + Game.dataForSave.nameProtagonist + " sieht seinen Irrtum ein und versucht den Sheriff aus dem Gefängnis zu holen. Doch an dem Tag, als er das versuchen möchte, geschieht es. Es erwischt ihn auf seinem Hof, gerade als er die Pferde füttern möchte. Das neueste Opfer des Mörders ist " + Game.dataForSave.nameProtagonist + ".",
                N0008: "Nachdem " + Game.dataForSave.nameProtagonist + " vom Fall abgezogen wurde, wurden 3 weitere Menschen getötet. Der Sheriff und seine Leute bleiben ratlos.",
                N0009: "Deputy wirft die Blumen in ihrer Hand auf den Sheriff und stürmt auf " + Game.dataForSave.nameProtagonist + " zu.",
                N0010: "Wie aus einem Reflex heraus, zieht " + Game.dataForSave.nameProtagonist + " den einzigen Gegenstand, den er an sich trägt, und schwingt ihn in einem großen Bogen. Der Hammer trifft Deputy genau an der Schläfe und sie sackt zusammen.",
                N0011: "Der Sheriff eilt auft sie zu, aber sie hat bereits zu viel Blut verloren.",
                N0012: "Als Deputy " + Game.dataForSave.nameProtagonist + " erreicht fallen beide zu Boden.",
                N0013: "Mit diesen Worten greift Deputy nach ihrem Revolver und will ihn auf " + Game.dataForSave.nameProtagonist + " richten, doch in diesem Moment.",
                N0014: "Abgelenkt vom Gespräch, bekommt Deputy nicht mit, dass " + Game.dataForSave.nameProtagonist + " sich heimlich davongerobbt hat. Hinter einem Baum steht er auf und bemerkt, dass dort Patty in Deckung ist.",
                N0015: "Sie zieht eine Waffe aus einem Holster unter ihrem Rock und will sie " + Game.dataForSave.nameProtagonist + " überreichen.",
                N0016: "Ruby gibt sich geschlagen. Sie wirft ihre Waffe weg und lässt sich ohne Worte vom Sheriff festnehmen. Während der Sheriff Ruby wegführt, steht " + Game.dataForSave.nameProtagonist + " nur still daneben und sieht zu. Nach einer Weile setzt aber doch die Erleichterung ein, dass die Stadt nun endlich wieder sicher ist.",
                N0017: "Mit einem Schrei schießt Deputy ihre Waffe in Richtung Sheriff ab. Die Kugel trifft genau oberhalb des Gürtels in den Bauch des Sheriffs. Vor Schmerzen keuchend bricht dieser zusammen.",
                NH: "Hinweispunkte + 1",
                NI001: "Hammer ins Inventar gepackt"
            }
        };
        let lookAtChoice = {
            grave: "Grabsteine",
            tree: "Baum",
            gate: "Friedhoftor"
        };
        let useHammerChoice = {
            use: "Hammer benutzen",
            dont: "Hammer nicht benutzen"
        };
        let useGunChoice = {
            take: "Waffe nehmen",
            dont: "Waffe nicht nehmen"
        };
        let dialogChoice = {
            understand: "Ich verstehe dich",
            sorry: "Es tut mir Leid"
        };
        let duelChoice = {
            shoot: "Schießen",
            dont: "Nicht schießen"
        };
        let pickedUpHammer = true;
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.chapter3);
        await Game.ƒS.update(5);
        Game.ƒS.Sound.play(Game.sound.west, 0.1, true);
        await Game.ƒS.Location.show(Game.locations.graveyard);
        await Game.ƒS.update(Game.transitions.middleslider.duration, Game.transitions.middleslider.alpha, Game.transitions.middleslider.edge);
        await Game.ƒS.Character.show(Game.characters.protagonist, Game.characters.protagonist.pose.normal, Game.ƒS.positionPercent(80, 90));
        await Game.ƒS.update(1);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0001);
        await Game.ƒS.Character.show(Game.characters.sheriff, Game.characters.sheriff.pose.normal, Game.ƒS.positionPercent(20, 90));
        await Game.ƒS.update(1);
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0001);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0002);
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0002);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0003);
        await Game.ƒS.Character.animate(Game.characters.sheriff, Game.characters.sheriff.pose.normal, Game.moveLeftCharAnimation());
        await Game.ƒS.Character.show(Game.characters.patty, Game.characters.patty.pose.normal, Game.ƒS.positionPercent(30, 90));
        await Game.ƒS.update(1);
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0003);
        await Game.ƒS.Speech.tell(Game.characters.patty, text.patty.T0001);
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0004);
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0019);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0004);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0005);
        await Game.ƒS.Speech.tell("", text.narration.N0001, true, "italic");
        await Game.ƒS.Character.hide(Game.characters.patty);
        await Game.ƒS.update(1);
        await Game.ƒS.Character.animate(Game.characters.sheriff, Game.characters.sheriff.pose.normal, Game.moveLeftCharBackAnimation());
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0005);
        let lookAtChoiceElement = await Game.ƒS.Menu.getInput(lookAtChoice, "choices");
        switch (lookAtChoiceElement) {
            case lookAtChoice.grave:
                break;
            case lookAtChoice.tree:
                await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0006);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0007);
                break;
            case lookAtChoice.gate:
                await Game.ƒS.Speech.tell("", text.narration.N0002, true, "italic");
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0006);
                Game.ƒS.Inventory.add(Game.items.hammer);
                await Game.ƒS.Speech.tell("", text.narration.NI001, true, "italic");
                pickedUpHammer = true;
                break;
        }
        await Game.ƒS.Speech.tell("", text.narration.N0003, true, "italic");
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0008);
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0007);
        await Game.ƒS.Speech.tell("", text.narration.N0004, true, "italic");
        await Game.ƒS.Character.animate(Game.characters.sheriff, Game.characters.sheriff.pose.normal, Game.moveLeftCharAnimation());
        await Game.ƒS.Character.show(Game.characters.deputy, Game.characters.deputy.pose.normal, Game.ƒS.positionPercent(30, 90));
        await Game.ƒS.update(1);
        await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0001);
        if (Game.dataForSave.chapter2Accused === "deputy") {
            await Game.ƒS.Speech.tell("", text.narration.N0005, true, "italic");
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0009);
            await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0008);
            await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0002);
            await Game.ƒS.Speech.tell("", text.narration.NH, true, "italic");
            Game.dataForSave.cluePoints += 1;
        }
        else {
            await Game.ƒS.Speech.tell("", text.narration.N0005, true, "italic");
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0010);
            await Game.ƒS.Speech.tell("", text.narration.N0006, true, "italic");
            await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0003);
        }
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0009);
        await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0004);
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0010);
        await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0005);
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0011);
        await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0006);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0011);
        let accused = "";
        let current = 0;
        let choice = { back: "Vorherige Seite", buy_clue: "Neuen Hinweis kaufen", next: "Nächste Seite", accuse: "Beschuldigen" };
        let choiceNoBuy = { back: "Vorherige Seite", next: "Nächste Seite", accuse: "Beschuldigen" };
        let accusation = { patty: "Patty beschuldigen", sheriff: "Sheriff beschuldigen", deputy: "Deputy beschuldigen" };
        let choiceInput;
        let choiceNoBuyInput;
        let accusationInput;
        Game.ƒS.Text.addClass("accusemenu");
        do {
            let pages = [
                "<strong><u>Beschuldigunsmenü</u></strong><br\><br\><strong>Verbleibende Hinweispunkte: " + Game.dataForSave.cluePoints + "</strong><br\><br\><br\><br\><br\><br\><br\>",
                "Hinweis 1,<br\><br\>Der Mörder trägt einen Hut.<br\><br\><br\><br\><br\><br\>",
                "Hinweis 2,<br\><br\>Der Mörder hat etwas mit Zähnen zu tun.<br\><br\><br\><br\><br\><br\>",
                "Hinweis 3,<br\><br\>Der Mörder wurde adoptiert.<br\><br\><br\><br\><br\><br\>",
                "Hinweis 4,<br\><br\>Der Mörder ist eine Frau.<br\><br\><br\><br\><br\><br\>"
            ];
            Game.ƒS.Text.print(pages[current]);
            if (Game.dataForSave.cluePoints === 0 || Game.dataForSave.canLookatPages === (pages.length - 1)) {
                choiceNoBuyInput = await Game.ƒS.Menu.getInput(choiceNoBuy, "accusemenu-input");
                switch (choiceNoBuyInput) {
                    case choiceNoBuy.back:
                        current = Math.max(0, current - 1);
                        break;
                    case choiceNoBuy.next:
                        current = Math.min(Game.dataForSave.canLookatPages, current + 1);
                        break;
                    case choiceNoBuy.accuse:
                        accusationInput = await Game.ƒS.Menu.getInput(accusation, "accusemenu-input");
                        switch (accusationInput) {
                            case accusation.patty:
                                Game.ƒS.Sound.play(Game.sound.accuse, 0.2, false);
                                accused = "patty";
                                break;
                            case accusation.sheriff:
                                Game.ƒS.Sound.play(Game.sound.accuse, 0.2, false);
                                accused = "sheriff";
                                break;
                            case accusation.deputy:
                                Game.ƒS.Sound.play(Game.sound.accuse, 0.2, false);
                                accused = "deputy";
                                break;
                        }
                        break;
                }
            }
            else {
                choiceInput = await Game.ƒS.Menu.getInput(choice, "accusemenu-input");
                switch (choiceInput) {
                    case choice.back:
                        current = Math.max(0, current - 1);
                        break;
                    case choice.next:
                        current = Math.min(Game.dataForSave.canLookatPages, current + 1);
                        break;
                    case choice.buy_clue:
                        Game.dataForSave.canLookatPages += 1;
                        current = Game.dataForSave.canLookatPages;
                        Game.dataForSave.cluePoints = Game.dataForSave.cluePoints - 1;
                        break;
                    case choice.accuse:
                        accusationInput = await Game.ƒS.Menu.getInput(accusation, "accusemenu-input");
                        switch (accusationInput) {
                            case accusation.patty:
                                Game.ƒS.Sound.play(Game.sound.accuse, 0.2, false);
                                accused = "patty";
                                break;
                            case accusation.sheriff:
                                Game.ƒS.Sound.play(Game.sound.accuse, 0.2, false);
                                accused = "sheriff";
                                break;
                            case accusation.deputy:
                                Game.ƒS.Sound.play(Game.sound.accuse, 0.2, false);
                                accused = "deputy";
                                break;
                        }
                        break;
                }
            }
        } while (accused === "");
        Game.ƒS.Text.close();
        if (accused === "patty") {
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0014);
            await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0015);
            await Game.ƒS.Character.hide(Game.characters.deputy);
            await Game.ƒS.Character.hide(Game.characters.protagonist);
            await Game.ƒS.Character.hide(Game.characters.sheriff);
            await Game.ƒS.update(1);
            await Game.ƒS.Speech.tell("", text.narration.N0008, true, "italic");
            Game.ƒS.Speech.clear();
            Game.ƒS.Speech.hide();
            Game.ƒS.Sound.fade(Game.sound.west, 0, 0.5, false);
            await Game.ƒS.Location.show(Game.locations.black);
            await Game.ƒS.update(2);
            return "medium_ending_free";
        }
        else if (accused === "sheriff") {
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0012);
            await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0012);
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0013);
            await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0007);
            await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0013);
            await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0008);
            await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0014);
            await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0009);
            await Game.ƒS.Character.hide(Game.characters.deputy);
            await Game.ƒS.Character.hide(Game.characters.protagonist);
            await Game.ƒS.Character.hide(Game.characters.sheriff);
            await Game.ƒS.update(1);
            await Game.ƒS.Speech.tell("", text.narration.N0007, true, "italic");
            Game.ƒS.Speech.clear();
            Game.ƒS.Speech.hide();
            Game.ƒS.Sound.fade(Game.sound.west, 0, 0.5, false);
            await Game.ƒS.Location.show(Game.locations.black);
            await Game.ƒS.update(2);
            return "bad_ending";
        }
        else {
            Game.ƒS.Sound.fade(Game.sound.west, 0, 0.5, false);
            Game.ƒS.Sound.play(Game.sound.action, 0.1, true);
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0015);
            await Game.ƒS.Character.hide(Game.characters.deputy);
            await Game.ƒS.Character.show(Game.characters.deputy, Game.characters.deputy.pose.evil, Game.ƒS.positionPercent(30, 90));
            await Game.ƒS.update(0.5);
            await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0010);
            await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0023);
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0016);
            await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0011);
            await Game.ƒS.Speech.tell("", text.narration.N0009, true, "italic");
            if (pickedUpHammer) {
                let useHammerChoiceElement = await Game.ƒS.Menu.getInput(useHammerChoice, "choices");
                switch (useHammerChoiceElement) {
                    case useHammerChoice.use:
                        await Game.ƒS.Speech.tell("", text.narration.N0010, true, "italic");
                        await Game.ƒS.Character.animate(Game.characters.deputy, Game.characters.deputy.pose.evil, Game.hitMiddleCharAnimation());
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0017);
                        await Game.ƒS.Speech.tell("", text.narration.N0011, true, "italic");
                        await Game.ƒS.Character.hide(Game.characters.deputy);
                        await Game.ƒS.Character.hide(Game.characters.protagonist);
                        await Game.ƒS.Character.hide(Game.characters.sheriff);
                        await Game.ƒS.update(1);
                        Game.ƒS.Speech.clear();
                        Game.ƒS.Speech.hide();
                        Game.ƒS.Sound.fade(Game.sound.action, 0, 0.5, false);
                        await Game.ƒS.Location.show(Game.locations.black);
                        await Game.ƒS.update(2);
                        return "medium_ending_killer";
                    case useHammerChoice.dont:
                        break;
                }
            }
        }
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0018);
        await Game.ƒS.Speech.tell("", text.narration.N0012, true, "italic");
        await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0012);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0019);
        await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0013);
        await Game.ƒS.Speech.tell("", text.narration.N0013, true, "italic");
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0016);
        await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0014);
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0017);
        await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0015);
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0018);
        await Game.ƒS.Speech.tell("", text.narration.N0014, true, "italic");
        await Game.ƒS.Character.hide(Game.characters.deputy);
        await Game.ƒS.Character.hide(Game.characters.sheriff);
        await Game.ƒS.update(1);
        await Game.ƒS.Character.show(Game.characters.patty, Game.characters.patty.pose.normal, Game.ƒS.positionPercent(20, 90));
        await Game.ƒS.update(1);
        await Game.ƒS.Speech.tell(Game.characters.patty, text.patty.T0002);
        await Game.ƒS.Speech.tell("", text.narration.N0015, true, "italic");
        let useGunChoiceElement = await Game.ƒS.Menu.getInput(useGunChoice, "choices");
        switch (useGunChoiceElement) {
            case useGunChoice.take:
                await Game.ƒS.Character.hide(Game.characters.patty);
                await Game.ƒS.update(1);
                await Game.ƒS.Character.show(Game.characters.deputy, Game.characters.deputy.pose.evil, Game.ƒS.positionPercent(20, 90));
                await Game.ƒS.update(1);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0022);
                await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0018);
                let duelChoiceElement = await Game.ƒS.Menu.getInput(duelChoice, "choices");
                switch (duelChoiceElement) {
                    case duelChoice.shoot:
                        Game.ƒS.Sound.play(Game.sound.gun, 0.2, false);
                        await Game.ƒS.Character.hide(Game.characters.deputy);
                        await Game.ƒS.Character.hide(Game.characters.protagonist);
                        await Game.ƒS.Character.hide(Game.characters.sheriff);
                        await Game.ƒS.update(1);
                        Game.ƒS.Speech.clear();
                        Game.ƒS.Speech.hide();
                        Game.ƒS.Sound.fade(Game.sound.action, 0, 0.5, false);
                        await Game.ƒS.Location.show(Game.locations.black);
                        await Game.ƒS.update(2);
                        return "medium_ending_killer";
                    case duelChoice.dont:
                        await Game.ƒS.Character.hide(Game.characters.deputy);
                        await Game.ƒS.Character.hide(Game.characters.protagonist);
                        await Game.ƒS.Character.hide(Game.characters.sheriff);
                        await Game.ƒS.update(1);
                        Game.ƒS.Speech.clear();
                        Game.ƒS.Speech.hide();
                        Game.ƒS.Sound.fade(Game.sound.action, 0, 0.5, false);
                        await Game.ƒS.Location.show(Game.locations.black);
                        await Game.ƒS.update(2);
                        return "bad_ending";
                }
                break;
            case useGunChoice.dont:
                await Game.ƒS.Character.hide(Game.characters.patty);
                await Game.ƒS.update(1);
                await Game.ƒS.Character.show(Game.characters.sheriff, Game.characters.sheriff.pose.normal, Game.ƒS.positionPercent(30, 90));
                await Game.ƒS.Character.show(Game.characters.deputy, Game.characters.deputy.pose.evil, Game.ƒS.positionPercent(15, 90));
                await Game.ƒS.update(1);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0020);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0021);
                await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0016);
                await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0020);
                await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0017);
                let dialogChoiceElement = await Game.ƒS.Menu.getInput(dialogChoice, "choices");
                switch (dialogChoiceElement) {
                    case dialogChoice.sorry:
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0023);
                        await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0019);
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0024);
                        await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0020);
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0025);
                        await Game.ƒS.Speech.tell("", text.narration.N0016, true, "italic");
                        await Game.ƒS.Character.hide(Game.characters.deputy);
                        await Game.ƒS.Character.hide(Game.characters.protagonist);
                        await Game.ƒS.Character.hide(Game.characters.sheriff);
                        await Game.ƒS.update(1);
                        Game.ƒS.Speech.clear();
                        Game.ƒS.Speech.hide();
                        Game.ƒS.Sound.fade(Game.sound.action, 0, 0.5, false);
                        await Game.ƒS.Location.show(Game.locations.black);
                        await Game.ƒS.update(2);
                        return "good_ending";
                    case dialogChoice.understand:
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0026);
                        await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0021);
                        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0021);
                        await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0022);
                        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0022);
                        await Game.ƒS.Speech.tell("", text.narration.N0016, true, "italic");
                        await Game.ƒS.Character.animate(Game.characters.sheriff, Game.characters.sheriff.pose.normal, Game.hitMiddleCharAnimation());
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0027);
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0028);
                        await Game.ƒS.Character.hide(Game.characters.sheriff);
                        await Game.ƒS.Character.animate(Game.characters.deputy, Game.characters.deputy.pose.evil, Game.moveLeftCharBackAnimation());
                        await Game.ƒS.update(1);
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0022);
                        await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0018);
                        let duelChoiceElement = await Game.ƒS.Menu.getInput(duelChoice, "choices");
                        switch (duelChoiceElement) {
                            case duelChoice.shoot:
                                Game.ƒS.Sound.play(Game.sound.gun, 0.2, false);
                                await Game.ƒS.Character.hide(Game.characters.deputy);
                                await Game.ƒS.Character.hide(Game.characters.protagonist);
                                await Game.ƒS.Character.hide(Game.characters.sheriff);
                                await Game.ƒS.update(1);
                                Game.ƒS.Speech.clear();
                                Game.ƒS.Speech.hide();
                                Game.ƒS.Sound.fade(Game.sound.action, 0, 0.5, false);
                                await Game.ƒS.Location.show(Game.locations.black);
                                await Game.ƒS.update(2);
                                return "medium_ending_killer";
                            case duelChoice.dont:
                                await Game.ƒS.Character.hide(Game.characters.deputy);
                                await Game.ƒS.Character.hide(Game.characters.protagonist);
                                await Game.ƒS.Character.hide(Game.characters.sheriff);
                                await Game.ƒS.update(1);
                                Game.ƒS.Speech.clear();
                                Game.ƒS.Speech.hide();
                                Game.ƒS.Sound.fade(Game.sound.action, 0, 0.5, false);
                                await Game.ƒS.Location.show(Game.locations.black);
                                await Game.ƒS.update(2);
                                return "bad_ending";
                        }
                        break;
                }
                break;
        }
    }
    Game.Chapter3Graveyard = Chapter3Graveyard;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function Chapter3WellBeginning() {
        let text = {
            protagonist: {
                T0001: "Ok, was soll ich mir anschauen?",
                T0002: "Sheriff, kommt dir diese Feder bekannt vor?",
                T0003: "Mhhh, was ist das hier für eine Streichholzschachtel?",
                T0004: "Oh... gerne.",
                T0005: "Dieser Apfel! Vielleicht hat der Mörder in ihn gebissen und wir können Mundgrößen vergleichen.",
                T0006: "Warum das denn?"
            },
            sheriff: {
                T0001: "So da wären wir. Jenkins wird da hinten befragt von meinen Leuten, falls du auch noch mit ihm reden möchtest. Was willst du zuerst erledigen?",
                T0002: "Wenn du dir nun alles angesehen hast, wird es Zeit, mit Jenkins zu reden.",
                T0003: "Mmh, die könnte von einem Hut stammen."
            },
            policeman: {
                T0001: "Oh mist, das ist mir gerade aus der Tasche gefallen, danke fürs Aufheben!"
            },
            jenkins: {
                T0001: "(von weiter weg rufend) Da wirst du Pech haben mein Junge. Außer der Mörder hat ein Riesengebiss.",
                T0002: "Den Apfel hat mein Pferd angebissen..."
            },
            narration: {
                N0001: Game.dataForSave.nameProtagonist + " schaut sich um und bemerkt mehrere Gegenstände, die um den Brunnen verteilt herumliegen.",
                NH: "Hinweispunkte + 1"
            }
        };
        let searchChoice = {
            look: "Umschauen",
            ask: "Jenkins befragen"
        };
        let lookAroundChoice = {
            feather: "Feder",
            matches: "Streichholzschachtel",
            apple: "Angebissenen Apfel"
        };
        Game.ƒS.Speech.hide();
        Game.ƒS.Sound.play(Game.sound.west, 0.1, true);
        Game.ƒS.Sound.play(Game.sound.well, 0.1, true);
        await Game.ƒS.Location.show(Game.locations.chapter3);
        await Game.ƒS.update(5);
        await Game.ƒS.Location.show(Game.locations.well);
        await Game.ƒS.update(Game.transitions.middleslider.duration, Game.transitions.middleslider.alpha, Game.transitions.middleslider.edge);
        await Game.ƒS.Character.show(Game.characters.sheriff, Game.characters.sheriff.pose.normal, Game.ƒS.positionPercent(20, 90));
        await Game.ƒS.update(1);
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0001);
        await Game.ƒS.Character.show(Game.characters.protagonist, Game.characters.protagonist.pose.normal, Game.ƒS.positionPercent(80, 90));
        await Game.ƒS.update(1);
        let searchChoiceElement = await Game.ƒS.Menu.getInput(searchChoice, "choices");
        switch (searchChoiceElement) {
            case searchChoice.look:
                await Game.ƒS.Speech.tell("", text.narration.N0001, true, "italic");
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0001);
                let lookAroundChoiceElement = await Game.ƒS.Menu.getInput(lookAroundChoice, "choices");
                switch (lookAroundChoiceElement) {
                    case lookAroundChoice.feather:
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0002);
                        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0003);
                        await Game.ƒS.Speech.tell("", text.narration.NH, true, "italic");
                        Game.dataForSave.cluePoints += 1;
                        break;
                    case lookAroundChoice.matches:
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0003);
                        await Game.ƒS.Speech.tell("Anderer Polizist", text.policeman.T0001);
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0004);
                        break;
                    case lookAroundChoice.apple:
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0005);
                        await Game.ƒS.Speech.tell(Game.characters.jenkins, text.jenkins.T0001);
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0006);
                        await Game.ƒS.Speech.tell(Game.characters.jenkins, text.jenkins.T0002);
                        break;
                }
                await Game.ƒS.Character.animate(Game.characters.sheriff, Game.characters.sheriff.pose.normal, Game.moveLeftCharAnimation());
                await Game.ƒS.Character.show(Game.characters.jenkins, Game.characters.jenkins.pose.normal, Game.ƒS.positionPercent(30, 90));
                Game.ƒS.Sound.fade(Game.sound.west, 0, 0.5, false);
                await Game.ƒS.update(1);
                return "chapter_three_well_interrogation";
            case searchChoice.ask:
                await Game.ƒS.Character.animate(Game.characters.sheriff, Game.characters.sheriff.pose.normal, Game.moveLeftCharAnimation());
                await Game.ƒS.Character.show(Game.characters.jenkins, Game.characters.jenkins.pose.normal, Game.ƒS.positionPercent(30, 90));
                Game.ƒS.Sound.fade(Game.sound.west, 0, 0.5, false);
                await Game.ƒS.update(1);
                return "chapter_three_well_interrogation";
        }
    }
    Game.Chapter3WellBeginning = Chapter3WellBeginning;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function Chapter3WellInterrogation() {
        let text = {
            protagonist: {
                T0001: "Hallo Jenkins! Wie gehts dir und deinem neuen Pferd?",
                T0002: "Ich würde dir auch noch gerne ein paar Fragen stellen wenn es dir nichts ausmacht.",
                T0003: "Ja aber es muss sein. Warum warst du überhaupt hier?",
                T0004: "Ach ja? Zu mir hast du gesagt, dein Lieblingsplatz ist der alte Baumstumpf.",
                T0005: "Naja, du weißt doch, dass das hier mein liebster Ort zum Entspannen ist. Ich hab dir das schon oft erzählt, als du bei mir zum Hufeisen aufsetzen warst und da ist dir nie in den Sinn gekommen zu erwähnen, dass du auch gern herkommst.",
                T0006: "(zu Sheriff) Ich glaube nach wie vor nicht, dass er wirklich etwas damit zu tun hat. Es ist immerhin Jenkins. Der kann keiner Fliege was anhaben.",
                T0007: "Ich hatte dich vorhin schon im Verdacht Jenkins, aber jetzt da du dich so verhältst, wirst du immer verdächtiger!",
                T0008: "Du hast ja Recht Jenkins. Du warst halt einfach zur falschen Zeit am falschen Ort.",
                T0009: "Genug jetzt. Ich glaube ich habe genug gehört!",
                T0010: "Es war der alte Jenkins hier. Er hat das Equipment um die Zähne zu ziehen und er hat gelogen, was er hier am Brunnen macht.",
                T0011: "Es war... der Sheriff selbst.",
                T0012: "Es macht Sinn. Du benutzt deinen Deckmantel als Sheriff um die Morde zu begehen und sie zu vertuschen. Ich bin mir sicher.",
                T0013: "Deputy! Sie selbst sind die Mörderin. Jetzt ist mir alles klar. Als ich hörte, dass Sie adoptiert sind kam ich ins stutzen. Ich dachte immer, sie sind von hier aus dem Dorf. Aber sie wurden adoptiert und von einem Zahnarzt drüben in Jamestown aufgezogen. Ich habe darüber in der Zeitung gelesen. Sie sind die Tochter von dem Mann, der damals meinen Vater...",
                T0014: "Das was dein Vater getan hat, was du getan hast... Ihr seid beide Mörder!",
                T0015: "Ich verstehe, was du durchmachst. Als mein Vater starb, wollte ich auch alles und jeden dafür verantwortlich machen.",
                T0016: "Gib auf, damit wirst du nicht davonkommen. Du bist umzingelt von Polizisten.",
                T0017: "Unsere beiden Väter sind gestorben an diesem Tag. Verbindet uns das nicht irgendwie?"
            },
            sheriff: {
                T0001: "Jenkins, wir wollen nur auf Nummer sicher gehen.",
                T0002: "Jenkins, das Ganze hier sieht gerade ziemlich schlecht für dich aus. Du spuckst besser aus was du hier gemacht hast.",
                T0003: "(zu " + Game.dataForSave.nameProtagonist + ") Du hast ja Recht. Und es ist schon sehr verdächtigt, dass der Deputy so lange unterwegs ist ohne Bescheid zu sagen, wo sie ist.",
                T0004: "Ok immer langsam Jenkins, was soll das werden?",
                T0005: "Deputy, wo waren Sie?",
                T0006: "Ach ist das so? Was für einer Spur?",
                T0007: "Und haben Sie etwas herausgefunden?",
                T0008: "Was wollen Sie denn damit andeuten? Das ist locker schon 20 Jahre her. Und außerdem ist ihr eigener Adoptivvater doch Zahnarzt.",
                T0009: "Und was haben Sie damit vor?",
                T0010: "Sie wissen aber, dass das illegal ist. Sie kommen hinter Gittern, egal ob Sie nun der Mörder sind oder nicht.",
                T0011: "Guter Scherz Junge aber jetzt sag uns wer der wahre Mörder ist.",
                T0012: "Das ist eine Lüge. Und falls ich mal weg bin, dann um Zeit mit meiner Familie zu verbringen. Ihr seid doch alle verrückt.",
                T0013: "Das ist ein Fehler! Der wahre Mörder ist noch auf freiem Fuß.",
                T0014: "Und wer hat deinen Opfern Mitgefühl gezeigt? Du wirst nie mehr das Tageslicht sehen, Ruby."
            },
            jenkins: {
                T0001: "Ich sagte es euch doch schon! Ich komm einfach gerne hierher. Lasst mich doch in Ruhe.",
                T0002: Game.dataForSave.nameProtagonist + ", schön dich zu sehen. Hopper gehts spitze. Ich wollte einfach nur ein bisschen ausreiten, als ich hier am Brunnen eine Leiche entdeckt hab. Und nun lässt mich die Polizei nicht gehen!",
                T0003: "Es macht mir aber was aus. Ich will jetzt einfach nur noch von hier verschwinden.",
                T0004: "Das hier ist mein Lieblingsplatz in der Umgebung.",
                T0005: "Na und? Kann man nicht zwei Lieblingsplätze haben.",
                T0006: "Ähh naja also...",
                T0007: "Beruhigt euch, ich hol nur das raus, weswegen ich hier bin. Das hier ist... ",
                T0008: "Kommt schon, ich bin doch nicht der Mörder! Was für ein Motiv sollte ich denn haben?",
                T0009: "Ja genau. Ich...",
                T0010: "Ja ich mache das bei Tieren. Was würde ich denn mit den Zähnen von Menschen wollen?",
                T0011: "Das ist ja wohl ein Witz. Warum sollte ich das tun? Und was ich euch vorhin zeigen wollte, war das hier.",
                T0012: "Ganz ruhig, das ist Rinderblut.",
                T0013: "Ach, ich wollte es in den Brunnen kippen, wie ich es immer mache."
            },
            deputy: {
                T0001: "Hallo Sheriff. Hallo " + Game.dataForSave.nameProtagonist + ".",
                T0002: "Ich bin einer Spur nachgegangen Sheriff.",
                T0003: "Ähh, ich habe untersucht, wer in der Stadt etwas mit Zähnen zu tun haben könnte. Sie wissen schon, wegen den fehlenden Schneidezähnen und so.",
                T0004: "Naja Sheriff, ich will ja nichts sagen, aber sie wissen, dass in ihrem Haus früher Patienten die Zähne gezogen wurden oder?",
                T0005: "Ja ist ja gut. Was ich noch herausgefunden habe, ist dass der alte Jenkins hier manchmal Kühen und Pferden die Zähne zieht wenn sie Probleme haben.",
                T0006: "Ja jetzt wo Sie es sagen, der Sheriff war in letzter Zeit öfter weg als sonst.",
                T0007: "Sheriff! Waffe wegwerfen und Hände hoch! Sie sind verhaftet.",
                T0008: "Erzähl das dem Richter",
                T0009: "Hahaha... Ich dachte schon du kommst nie drauf! Damals hat dein Vater meinen Vater kaltblütig ermordet! Er wollte nur für mich Sorgen! Er wollte nie jemanden verletzen. Nur das Geld und abhauen. Aber dein Vater hat alles ruiniert! Ich bin bei dem Zahnarzt und seiner Familie untergekommen. Wie der letzte Dreck haben die mich behandelt. Also hab ich irgendwann das Zahnarztequipment geschnappt und sie einen nach dem anderen getötet.",
                T0010: "Ich, vielleicht aber wag es nicht meinen Vater einen Mörder zu nennen. Er war ein Held.",
                T0011: "Du verstehst gar nichts. Was ich in Jamestown durchmachen musste...",
                T0012: "Zumindest einen kann ich ja noch mitnehmen. Dich wollte ich mir für später aufheben. Du bist der Sohn des Mörders meines Vaters. Du muss auch sterben.",
                T0013: "Uns verbindet gar nichts. Was ich in Jamestown durchmachen musste...",
                T0014: "Das hatte ich noch nie... Mitgefühl.",
                T0015: "Ihre Zähne habe ich als Trophäen behalten, weil er das auch mit seinen Patienten gemacht hat. Das stand nicht in deiner tollen Zeitung was? Und dann bin ich zurück hierher gekommen und Deputy geworden. Niemand hat etwas geahnt als ich angefangen habe, mich an diesem Ort zu rächen für das was ihr mir angetan habt."
            },
            narration: {
                N0001: Game.dataForSave.nameProtagonist + " bemerkt, dass Jenkins nun etwas nervös wird.",
                N0002: "Die Beiden werden unterbrochen, als Deputy dazukommt.",
                N0003: "Jenkins greift nach etwas in seiner Jackentasche.",
                N0004: "Jenkins wird unterbrochen als Deputy dazukommt.",
                N0005: "Jenkins holt eine Flasche gefüllt mit Blut hervor. Der Sheriff zieht seine Pistole.",
                N0006: "Nachdem Jenkins ins Gefängnis wandert, hören die Morde auf. Ob er der Mörder war oder nicht, bleibt ungeklärt.",
                N0007: "Nachdem der Sheriff im Gefängnis gelandet ist, hören die Morde für ein paar Wochen auf. Doch als sich der Staub gelegt hat, fangen sie wieder an. Noch schlimmer und brutaler als zuvor. " + Game.dataForSave.nameProtagonist + " sieht seinen Irrtum ein und versucht den Sheriff aus dem Gefängnis zu holen. Doch an dem Tag, als er das versuchen möchte, geschieht es. Es erwischt ihn auf seinem Hof, gerade als er die Pferde füttern möchte. Das neueste Opfer des Mörders ist " + Game.dataForSave.nameProtagonist + ".",
                N0008: "Mit diesen Worten zieht Deputy ihren Revolver und richtet ihn auf " + Game.dataForSave.nameProtagonist + ". " + Game.dataForSave.nameProtagonist + " greift aus Reflex nach dem Revolver des Sheriffs und steht nun dem Deputy gegenüber. Die beiden blicken sich stumm an und warten, wer den ersten Schritt macht.",
                N0009: "Sie wirkt abgelenkt, während sie an ihre Kindheit denkt.",
                N0010: "Sie wirkt abgelenkt, während sie an ihre Kindheit denkt.",
                N0011: "Als sie diese Worte hört, senkt Deputy langsam ihre Waffe, während der Sheriff und alle Polizisten auf sie zustürmen.",
                N0012: "Während der Sheriff Ruby wegführt, steht " + Game.dataForSave.nameProtagonist + " nur still daneben und sieht zu. Nach einer Weile setzt aber doch die Erleichterung ein, dass die Stadt nun endlich wieder sicher ist.",
                N0013: "Der Schuss von " + Game.dataForSave.nameProtagonist + " trifft Deputy genau in die Rippen. Sheriff eilt zu ihr aber die Wunde blutet bereits zu stark."
            }
        };
        let confrontChoice = {
            talk: "Versuchen, mit ihr zu reden",
            duel: "Auf Duell einlassen"
        };
        let talkChoice = {
            understand: "Ich verstehe, was du durchmachst",
            notgetaway: "Damit wirst du nicht davonkommen"
        };
        let sorryOrShootChoice = {
            sorry: "Es tut mir Leid",
            shoot: "SCHIEßEN"
        };
        let duelChoice = {
            shoot: "Schießen",
            dont: "Nicht schießen"
        };
        Game.ƒS.Sound.play(Game.sound.west, 0.1, true);
        await Game.ƒS.Speech.tell(Game.characters.jenkins, text.jenkins.T0001);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0001);
        await Game.ƒS.Speech.tell(Game.characters.jenkins, text.jenkins.T0002);
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0001);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0002);
        await Game.ƒS.Speech.tell(Game.characters.jenkins, text.jenkins.T0003);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0003);
        await Game.ƒS.Speech.tell(Game.characters.jenkins, text.jenkins.T0004);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0004);
        await Game.ƒS.Speech.tell(Game.characters.jenkins, text.jenkins.T0005);
        await Game.ƒS.Speech.tell("", text.narration.N0001, true, "italic");
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0005);
        await Game.ƒS.Speech.tell(Game.characters.jenkins, text.jenkins.T0006);
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0002);
        if (Game.dataForSave.chapter2Accused === "deputy") {
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0006);
            await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0003);
            await Game.ƒS.Speech.tell("", text.narration.N0002, true, "italic");
        }
        else if (Game.dataForSave.chapter2Accused === "jenkins") {
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0007);
            await Game.ƒS.Speech.tell("", text.narration.N0003, true, "italic");
            await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0004);
            await Game.ƒS.Speech.tell(Game.characters.jenkins, text.jenkins.T0007);
            await Game.ƒS.Speech.tell("", text.narration.N0004, true, "italic");
        }
        else {
            await Game.ƒS.Speech.tell(Game.characters.jenkins, text.jenkins.T0008);
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0008);
            await Game.ƒS.Speech.tell(Game.characters.jenkins, text.jenkins.T0009);
            await Game.ƒS.Speech.tell("", text.narration.N0004, true, "italic");
        }
        await Game.ƒS.Character.show(Game.characters.deputy, Game.characters.deputy.pose.normal, Game.ƒS.positionPercent(45, 90));
        await Game.ƒS.update(1);
        await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0001);
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0005);
        await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0002);
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0006);
        await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0003);
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0007);
        await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0004);
        await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0008);
        await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0005);
        await Game.ƒS.Speech.tell(Game.characters.jenkins, text.jenkins.T0010);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0009);
        let accused = "";
        let current = 0;
        let choice = { back: "Vorherige Seite", buy_clue: "Neuen Hinweis kaufen", next: "Nächste Seite", accuse: "Beschuldigen" };
        let choiceNoBuy = { back: "Vorherige Seite", next: "Nächste Seite", accuse: "Beschuldigen" };
        let accusation = { jenkins: "Jenkins beschuldigen", sheriff: "Sheriff beschuldigen", deputy: "Deputy beschuldigen" };
        let choiceInput;
        let choiceNoBuyInput;
        let accusationInput;
        Game.ƒS.Text.addClass("accusemenu");
        do {
            let pages = [
                "<strong><u>Beschuldigunsmenü</u></strong><br\><br\><strong>Verbleibende Hinweispunkte: " + Game.dataForSave.cluePoints + "</strong><br\><br\><br\><br\><br\><br\><br\>",
                "Hinweis 1,<br\><br\>Der Mörder trägt einen Hut.<br\><br\><br\><br\><br\><br\>",
                "Hinweis 2,<br\><br\>Der Mörder hat etwas mit Zähnen zu tun.<br\><br\><br\><br\><br\><br\>",
                "Hinweis 3,<br\><br\>Der Mörder wurde adoptiert.<br\><br\><br\><br\><br\><br\>",
                "Hinweis 4,<br\><br\>Der Mörder ist eine Frau.<br\><br\><br\><br\><br\><br\>"
            ];
            Game.ƒS.Text.print(pages[current]);
            if (Game.dataForSave.cluePoints === 0 || Game.dataForSave.canLookatPages === (pages.length - 1)) {
                choiceNoBuyInput = await Game.ƒS.Menu.getInput(choiceNoBuy, "accusemenu-input");
                switch (choiceNoBuyInput) {
                    case choiceNoBuy.back:
                        current = Math.max(0, current - 1);
                        break;
                    case choiceNoBuy.next:
                        current = Math.min(Game.dataForSave.canLookatPages, current + 1);
                        break;
                    case choiceNoBuy.accuse:
                        accusationInput = await Game.ƒS.Menu.getInput(accusation, "accusemenu-input");
                        switch (accusationInput) {
                            case accusation.jenkins:
                                Game.ƒS.Sound.play(Game.sound.accuse, 0.2, false);
                                accused = "jenkins";
                                break;
                            case accusation.sheriff:
                                Game.ƒS.Sound.play(Game.sound.accuse, 0.2, false);
                                accused = "sheriff";
                                break;
                            case accusation.deputy:
                                Game.ƒS.Sound.play(Game.sound.accuse, 0.2, false);
                                accused = "deputy";
                                break;
                        }
                        break;
                }
            }
            else {
                choiceInput = await Game.ƒS.Menu.getInput(choice, "accusemenu-input");
                switch (choiceInput) {
                    case choice.back:
                        current = Math.max(0, current - 1);
                        break;
                    case choice.next:
                        current = Math.min(Game.dataForSave.canLookatPages, current + 1);
                        break;
                    case choice.buy_clue:
                        Game.dataForSave.canLookatPages += 1;
                        current = Game.dataForSave.canLookatPages;
                        Game.dataForSave.cluePoints = Game.dataForSave.cluePoints - 1;
                        break;
                    case choice.accuse:
                        accusationInput = await Game.ƒS.Menu.getInput(accusation, "accusemenu-input");
                        switch (accusationInput) {
                            case accusation.jenkins:
                                Game.ƒS.Sound.play(Game.sound.accuse, 0.2, false);
                                accused = "jenkins";
                                break;
                            case accusation.sheriff:
                                Game.ƒS.Sound.play(Game.sound.accuse, 0.2, false);
                                accused = "sheriff";
                                break;
                            case accusation.deputy:
                                Game.ƒS.Sound.play(Game.sound.accuse, 0.2, false);
                                accused = "deputy";
                                break;
                        }
                        break;
                }
            }
        } while (accused === "");
        Game.ƒS.Text.close();
        if (accused === "jenkins") {
            await Game.ƒS.Character.hide(Game.characters.deputy);
            await Game.ƒS.update(1);
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0010);
            await Game.ƒS.Speech.tell(Game.characters.jenkins, text.jenkins.T0011);
            await Game.ƒS.Speech.tell("", text.narration.N0005, true, "italic");
            await Game.ƒS.Speech.tell(Game.characters.jenkins, text.jenkins.T0012);
            await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0009);
            await Game.ƒS.Speech.tell(Game.characters.jenkins, text.jenkins.T0013);
            await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0010);
            await Game.ƒS.Character.hide(Game.characters.protagonist);
            await Game.ƒS.Character.hide(Game.characters.sheriff);
            await Game.ƒS.Character.hide(Game.characters.jenkins);
            await Game.ƒS.update(1);
            await Game.ƒS.Speech.tell("", text.narration.N0006, true, "italic");
            Game.ƒS.Speech.clear();
            Game.ƒS.Speech.hide();
            Game.ƒS.Sound.fade(Game.sound.west, 0, 0.5, false);
            Game.ƒS.Sound.fade(Game.sound.well, 0, 0.5, false);
            await Game.ƒS.Location.show(Game.locations.black);
            await Game.ƒS.update(2);
            return "medium_ending_unsolved";
        }
        else if (accused === "sheriff") {
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0011);
            await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0011);
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0012);
            await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0006);
            await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0012);
            await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0007);
            await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0013);
            await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0008);
            await Game.ƒS.Character.hide(Game.characters.deputy);
            await Game.ƒS.Character.hide(Game.characters.protagonist);
            await Game.ƒS.Character.hide(Game.characters.sheriff);
            await Game.ƒS.Character.hide(Game.characters.jenkins);
            await Game.ƒS.update(1);
            await Game.ƒS.Speech.tell("", text.narration.N0002, true, "italic");
            Game.ƒS.Speech.clear();
            Game.ƒS.Speech.hide();
            Game.ƒS.Sound.fade(Game.sound.west, 0, 0.5, false);
            Game.ƒS.Sound.fade(Game.sound.well, 0, 0.5, false);
            await Game.ƒS.Location.show(Game.locations.black);
            await Game.ƒS.update(2);
            return "bad_ending";
        }
        else {
            Game.ƒS.Sound.fade(Game.sound.west, 0, 0.5, false);
            Game.ƒS.Sound.play(Game.sound.action, 0.1, true);
            await Game.ƒS.Character.hide(Game.characters.jenkins);
            await Game.ƒS.update(1);
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0013);
            await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0009);
            await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0015);
            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0014);
            await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0010);
            await Game.ƒS.Speech.tell("", text.narration.N0002, true, "italic");
            let confrontChoiceElement = await Game.ƒS.Menu.getInput(confrontChoice, "choices");
            switch (confrontChoiceElement) {
                case confrontChoice.talk:
                    let talkChoiceElement = await Game.ƒS.Menu.getInput(talkChoice, "choices");
                    switch (talkChoiceElement) {
                        case talkChoice.understand:
                            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0015);
                            await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0011);
                            await Game.ƒS.Speech.tell("", text.narration.N0009, true, "italic");
                            let sorryOrShootChoiceElement1 = await Game.ƒS.Menu.getInput(sorryOrShootChoice, "choices");
                            switch (sorryOrShootChoiceElement1) {
                                case sorryOrShootChoice.sorry:
                                    await Game.ƒS.Speech.tell("", text.narration.N0011, true, "italic");
                                    await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0014);
                                    await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0014);
                                    await Game.ƒS.Speech.tell("", text.narration.N0012, true, "italic");
                                    await Game.ƒS.Character.hide(Game.characters.deputy);
                                    await Game.ƒS.Character.hide(Game.characters.protagonist);
                                    await Game.ƒS.Character.hide(Game.characters.sheriff);
                                    await Game.ƒS.update(1);
                                    Game.ƒS.Speech.clear();
                                    Game.ƒS.Speech.hide();
                                    Game.ƒS.Sound.fade(Game.sound.well, 0, 0.5, false);
                                    Game.ƒS.Sound.fade(Game.sound.action, 0, 0.5, false);
                                    await Game.ƒS.Location.show(Game.locations.black);
                                    await Game.ƒS.update(2);
                                    return "good_ending";
                                case sorryOrShootChoice.shoot:
                                    Game.ƒS.Sound.play(Game.sound.gun, 0.2, false);
                                    await Game.ƒS.Speech.tell("", text.narration.N0013, true, "italic");
                                    await Game.ƒS.Character.hide(Game.characters.deputy);
                                    await Game.ƒS.Character.hide(Game.characters.protagonist);
                                    await Game.ƒS.Character.hide(Game.characters.sheriff);
                                    await Game.ƒS.update(1);
                                    Game.ƒS.Speech.clear();
                                    Game.ƒS.Speech.hide();
                                    Game.ƒS.Sound.fade(Game.sound.well, 0, 0.5, false);
                                    Game.ƒS.Sound.fade(Game.sound.action, 0, 0.5, false);
                                    await Game.ƒS.Location.show(Game.locations.black);
                                    await Game.ƒS.update(2);
                                    return "medium_ending_killer";
                            }
                            break;
                        case talkChoice.notgetaway:
                            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0016);
                            await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0012);
                            await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0017);
                            await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0013);
                            await Game.ƒS.Speech.tell("", text.narration.N0010, true, "italic");
                            let sorryOrShootChoiceElement2 = await Game.ƒS.Menu.getInput(sorryOrShootChoice, "choices");
                            switch (sorryOrShootChoiceElement2) {
                                case sorryOrShootChoice.sorry:
                                    await Game.ƒS.Speech.tell("", text.narration.N0011, true, "italic");
                                    await Game.ƒS.Speech.tell(Game.characters.deputy, text.deputy.T0014);
                                    await Game.ƒS.Speech.tell(Game.characters.sheriff, text.sheriff.T0014);
                                    await Game.ƒS.Speech.tell("", text.narration.N0012, true, "italic");
                                    await Game.ƒS.Character.hide(Game.characters.deputy);
                                    await Game.ƒS.Character.hide(Game.characters.protagonist);
                                    await Game.ƒS.Character.hide(Game.characters.sheriff);
                                    await Game.ƒS.update(1);
                                    Game.ƒS.Speech.clear();
                                    Game.ƒS.Speech.hide();
                                    Game.ƒS.Sound.fade(Game.sound.well, 0, 0.5, false);
                                    Game.ƒS.Sound.fade(Game.sound.action, 0, 0.5, false);
                                    await Game.ƒS.Location.show(Game.locations.black);
                                    await Game.ƒS.update(2);
                                    return "good_ending";
                                case sorryOrShootChoice.shoot:
                                    Game.ƒS.Sound.play(Game.sound.gun, 0.2, false);
                                    await Game.ƒS.Speech.tell("", text.narration.N0013, true, "italic");
                                    await Game.ƒS.Character.hide(Game.characters.deputy);
                                    await Game.ƒS.Character.hide(Game.characters.protagonist);
                                    await Game.ƒS.Character.hide(Game.characters.sheriff);
                                    await Game.ƒS.update(1);
                                    Game.ƒS.Speech.clear();
                                    Game.ƒS.Speech.hide();
                                    Game.ƒS.Sound.fade(Game.sound.well, 0, 0.5, false);
                                    Game.ƒS.Sound.fade(Game.sound.action, 0, 0.5, false);
                                    await Game.ƒS.Location.show(Game.locations.black);
                                    await Game.ƒS.update(2);
                                    return "medium_ending_killer";
                            }
                            break;
                    }
                    break;
                case confrontChoice.duel:
                    let duelChoiceElement = await Game.ƒS.Menu.getInput(duelChoice, "choices");
                    switch (duelChoiceElement) {
                        case duelChoice.shoot:
                            Game.ƒS.Sound.play(Game.sound.gun, 0.2, false);
                            await Game.ƒS.Character.hide(Game.characters.deputy);
                            await Game.ƒS.Character.hide(Game.characters.protagonist);
                            await Game.ƒS.Character.hide(Game.characters.sheriff);
                            await Game.ƒS.update(1);
                            Game.ƒS.Speech.clear();
                            Game.ƒS.Speech.hide();
                            Game.ƒS.Sound.fade(Game.sound.well, 0, 0.5, false);
                            Game.ƒS.Sound.fade(Game.sound.action, 0, 0.5, false);
                            await Game.ƒS.Location.show(Game.locations.black);
                            await Game.ƒS.update(2);
                            return "medium_ending_killer";
                        case duelChoice.dont:
                            await Game.ƒS.Character.hide(Game.characters.deputy);
                            await Game.ƒS.Character.hide(Game.characters.protagonist);
                            await Game.ƒS.Character.hide(Game.characters.sheriff);
                            await Game.ƒS.update(1);
                            Game.ƒS.Speech.clear();
                            Game.ƒS.Speech.hide();
                            Game.ƒS.Sound.fade(Game.sound.well, 0, 0.5, false);
                            Game.ƒS.Sound.fade(Game.sound.action, 0, 0.5, false);
                            await Game.ƒS.Location.show(Game.locations.black);
                            await Game.ƒS.update(2);
                            return "bad_ending";
                    }
                    break;
            }
        }
    }
    Game.Chapter3WellInterrogation = Chapter3WellInterrogation;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function BadEndingDead() {
        await Game.ƒS.Location.show(Game.locations.badend);
        await Game.ƒS.update(Game.transitions.circleslider.duration, Game.transitions.circleslider.alpha, Game.transitions.circleslider.edge);
    }
    Game.BadEndingDead = BadEndingDead;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function GoodEnding() {
        await Game.ƒS.Location.show(Game.locations.goodend);
        await Game.ƒS.update(Game.transitions.circleslider.duration, Game.transitions.circleslider.alpha, Game.transitions.circleslider.edge);
    }
    Game.GoodEnding = GoodEnding;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function MediumEndingKiller() {
        await Game.ƒS.Location.show(Game.locations.middlekiller);
        await Game.ƒS.update(Game.transitions.circleslider.duration, Game.transitions.circleslider.alpha, Game.transitions.circleslider.edge);
    }
    Game.MediumEndingKiller = MediumEndingKiller;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function MediumEndingStillFree() {
        await Game.ƒS.Location.show(Game.locations.middlefree);
        await Game.ƒS.update(Game.transitions.circleslider.duration, Game.transitions.circleslider.alpha, Game.transitions.circleslider.edge);
    }
    Game.MediumEndingStillFree = MediumEndingStillFree;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function MediumEndingUnsolved() {
        await Game.ƒS.Location.show(Game.locations.middleunsolved);
        await Game.ƒS.update(Game.transitions.circleslider.duration, Game.transitions.circleslider.alpha, Game.transitions.circleslider.edge);
    }
    Game.MediumEndingUnsolved = MediumEndingUnsolved;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function Dream() {
        let text = {
            father: {
                T0001: "Hände hoch! Sie sind umzingelt!",
                T0002: "Ach ja? Und warum nicht?",
                T0003: "Es muss niemand sterben! Was wollen Sie genau?",
                T0004: "(zu seinen Kollegen) Es bleibt uns nichts anderes übrig, als ihm zu gehorchen. Es darf niemand sterben!",
                T0005: "(zu Bankräuber) Na schön. Wir lassen Sie wegreiten. Was passiert mit der Geisel?",
                T0006: "Das Ganze wird nicht gut für Sie ausgehen. Ergeben Sie sich einfach.",
                T0007: "Ahhh...",
                T0008: "Bringt mich zum Doktor! Ich muss noch so viel erledigen. Mein Sohn... Seine Gabe... Er... soll sie nutzen um Gutes zu bewirken..."
            },
            evilguy: {
                T0001: "Pah! Ich glaube nicht, dass ihr wirklich auf mich schießen werdet ihr Schweine.",
                T0002: "Ich habe hier vier Menschen hinter dem Tresen sitzen und wenn ihr auch nur in die Nähe dieser Bank kommt, werde ich sie Einen nach dem Anderen abknallen!",
                T0003: "Ich will das ganze Geld aus dem Tresor in meinen Sack packen. Dann werde ich zusammen mit dem Geld und einer Geisel auf mein Pferd sitzen und in Richtung Osten verschwinden. Solltet ihr mir folgen, stirbt die Geisel.",
                T0004: "Ich sehe Sie sind vernünftig, Sheriff. Die Geisel werde ich am alten Brunnen gehen lassen. Aber falls ihr dort auf mich wartet, wisst ihr was passiert.",
                T0005: "Ach verdammt. Komm sofort wieder hier hoch du Mistkerl.",
                T0006: "Sie wissen gar nichts über mich Sheriff. Ich muss das hier tun. Meine Kleine..."
            },
            police: {
                T0001: "Es tut mir so Leid Junge, dein Vater... Er... Er ist an seinen Verletzungen auf dem Weg zum Arzt gestorben. Das letzte, was er sagte war..."
            },
            narration: {
                N0001: "Der Bankräuber folgt seinem Plan und beginnt mit der Geisel nach Osten zu reiten. Nach 100 Metern passiert jedoch etwas unerwartetes. Die Geisel zappelt so auf dem Pferd herum dass sie schließlich auf den Boden fällt und von dem Bankräuber wegrollt.",
                N0002: "Doch genau auf so eine Situation haben der Sheriff und seine Leute gewartet. Sie warten bis die Geisel weit genug weg ist und fangen an, auf den Bankräuber zu schießen. Dieser springt von seinem Pferd ab und sucht Deckung hinter einer nahgelegen Mauer.",
                N0003: "Verzweifelt beginnt der Bankräuber zurückzuschießen. Er liefert sich einen heftigen Schusswechsel mit den Polizisten bis schließlich...",
                N0004: "Ein Schuss des Bankräuber trifft den Sheriff genau über seinem Abzeichen in die Brust. Vor Schmerzen zuckend, schießt der Sheriff noch ein letztes Mal seinen Revolver bevor er zusammensackt.",
                N0005: "Stille...",
                N0006: "Von beiden Seiten ertönen keine Schüsse mehr. Während drei der Polizisten sich um ihren Sheriff kümmern, gehen zwei andere nachsehen, was mit dem Bankräuber passiert ist. Als sie hinter die Mauer sehen, liegt er da, in einer Blutlache. Der letzte Schuss des Sheriffs hat ihn genau zwischen die Augen getroffen.",
                N0007: "Später..."
            }
        };
        Game.ƒS.Speech.hide();
        Game.ƒS.Sound.play(Game.sound.dream, 0.1, true);
        await Game.ƒS.Location.show(Game.locations.dream);
        await Game.ƒS.update(Game.transitions.spiralslider.duration, Game.transitions.spiralslider.alpha, Game.transitions.spiralslider.edge);
        await Game.ƒS.Character.show(Game.characters.father, Game.characters.father.pose.normal, Game.ƒS.positionPercent(20, 90));
        await Game.ƒS.update(1);
        await Game.ƒS.Speech.tell(Game.characters.father, text.father.T0001);
        await Game.ƒS.Character.show(Game.characters.evilguy, Game.characters.evilguy.pose.normal, Game.ƒS.positionPercent(80, 90));
        await Game.ƒS.update(1);
        await Game.ƒS.Speech.tell(Game.characters.evilguy, text.evilguy.T0001);
        await Game.ƒS.Speech.tell(Game.characters.father, text.father.T0002);
        await Game.ƒS.Speech.tell(Game.characters.evilguy, text.evilguy.T0002);
        await Game.ƒS.Speech.tell(Game.characters.father, text.father.T0003);
        await Game.ƒS.Speech.tell(Game.characters.evilguy, text.evilguy.T0003);
        await Game.ƒS.Speech.tell(Game.characters.father, text.father.T0004);
        await Game.ƒS.Speech.tell(Game.characters.father, text.father.T0005);
        await Game.ƒS.Speech.tell(Game.characters.evilguy, text.evilguy.T0004);
        await Game.ƒS.Speech.tell("", text.narration.N0001, true, "italic");
        await Game.ƒS.Speech.tell(Game.characters.evilguy, text.evilguy.T0005);
        await Game.ƒS.Speech.tell("", text.narration.N0002, true, "italic");
        await Game.ƒS.Speech.tell(Game.characters.father, text.father.T0006);
        await Game.ƒS.Speech.tell(Game.characters.evilguy, text.evilguy.T0006);
        await Game.ƒS.Speech.tell("", text.narration.N0003, true, "italic");
        await Game.ƒS.Speech.tell(Game.characters.father, text.father.T0007);
        Game.ƒS.Sound.play(Game.sound.gun, 0.2, false);
        await Game.ƒS.Character.animate(Game.characters.father, Game.characters.father.pose.normal, Game.hitLeftCharAnimation());
        await Game.ƒS.Speech.tell("", text.narration.N0004, true, "italic");
        await Game.ƒS.Speech.tell("", text.narration.N0005, true, "italic");
        await Game.ƒS.Speech.tell("", text.narration.N0006, true, "italic");
        await Game.ƒS.Character.hide(Game.characters.evilguy);
        await Game.ƒS.update(1);
        await Game.ƒS.Speech.tell(Game.characters.father, text.father.T0008);
        await Game.ƒS.Character.hide(Game.characters.father);
        await Game.ƒS.update(1);
        await Game.ƒS.Speech.tell("", text.narration.N0007, true, "italic");
        await Game.ƒS.Speech.tell("Hilfssheriff", text.police.T0001);
        Game.ƒS.Speech.clear();
        Game.ƒS.Speech.hide();
        Game.ƒS.Sound.fade(Game.sound.dream, 0, 0.5, false);
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(Game.transitions.spiralslider.duration, Game.transitions.spiralslider.alpha, Game.transitions.spiralslider.edge);
    }
    Game.Dream = Dream;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function Opening() {
        let text = {
            protagonist: {
                T0001: "Und hier haben wir ihr Pferd. Sein Name ist Hopper und wie man unschwer erkennen kann, ist er der Nachkomme ihres letzten Pferdes.",
                T0002: "Es tut mir immer noch leid für ihr altes Pferd.",
                T0003: "Ja... Haben Sie eigentlich gehört was so in der Stadt los ist? Ich habe hier draußen nicht so viel mitbekommen.",
                T0004: "So, es wird spät. Zeit, die Tiere in den Stall zu bringen und dann gehts ab in die Falle für mich.",
                T0005: "Oh Gott! Und sie haben immer noch nicht herausgefunden wer dahintersteckt?",
                T0006: "Aber, aber... Es gab keine Morde mehr in dieser Stadt seit...",
                T0007: "Nein warten Sie! Es tut mir leid, ich war nur so erschrocken darüber, was Sie gesagt haben. Ein Mörder? Hier? Es gab keine Morde mehr in dieser Stadt seit...",
                T0008: "Ach, Sie kennen mich doch, ich bin "
            },
            jenkins: {
                T0001: "Er wird sich noch an mich gewöhnen müssen aber ich werde ihn genau so gut behandeln wie seinen alten Herrn, das kannst du mir glauben Junge.",
                T0002: "Ach er hatte ein langes und erfülltes Leben und jetzt gallopiert er eben an einem anderen Ort weiter.",
                T0003: "Heutzutage bin ich ja nicht mehr viel in der Stadt unterwegs. Bin lieber auf meiner Ranch, reite durch die Prärie oder bin an meinem liebsten Platz hier im Ort, am alten abgebrannten Baumstumpf westlich von hier. Aber ein paar Sachen habe selbst ich gehört. Es treibt anscheinen ein Mörder sein Unwesen in der Stadt.",
                T0004: "Ganz genau! Und noch dazu ein Serienkiller wie es scheint. 3 Leichen wurden bereits gefunden. 2 weitere Menschen werden vermisst.",
                T0005: "Leider nicht mein Sohn. Leider nicht.",
                T0006: "Hör zu Junge! Ich hab besseres zu tun als mich hier von nem Jungspund wie dir als Lügner bezeichnen zu lassen. Das Ganze ist kein Witz. 3 Leute hat der Typ schon auf dem Gewissen und 2 weitere werden vermisst. Danke für das Pferd aber jetzt muss ich auch wirklich mal los.",
                T0007: "Ich weiß mein Sohn, ich weiß...",
                T0008: "Danke... äh tut mir Leid mein Junge, mein Gedächtnis ist nicht mehr das, was es mal war. Wie heißt du nochmal?"
            },
            narration: {
                N0001: "Der alte Cowboy Jenkins reitet auf seinem neuen Pferd davon. Die Staubwolke, die den Beiden folgt, als Hopper über den trockenen Wüstenboden gallopiert, legt sich langsam und hinter ihr kommt der Sonnenuntergang zum Vorschein."
            }
        };
        let dialog = {
            what: "Was, ein Mörder?",
            kidding: "Sie wollen mich verarschen, oder?"
        };
        Game.ƒS.Speech.hide();
        Game.ƒS.Sound.play(Game.sound.relax, 0.1, true);
        await Game.ƒS.Location.show(Game.locations.intro);
        await Game.ƒS.update(5);
        await Game.ƒS.Location.show(Game.locations.stable);
        await Game.ƒS.update(Game.transitions.middleslider.duration, Game.transitions.middleslider.alpha, Game.transitions.middleslider.edge);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0001);
        await Game.ƒS.Character.show(Game.characters.jenkins, Game.characters.jenkins.pose.normal, Game.ƒS.positionPercent(20, 90));
        await Game.ƒS.update(0.5);
        await Game.ƒS.Speech.tell(Game.characters.jenkins, text.jenkins.T0008);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0008);
        Game.dataForSave.nameProtagonist = await Game.ƒS.Speech.getInput();
        Game.characters.protagonist.name = Game.dataForSave.nameProtagonist;
        await Game.ƒS.Character.show(Game.characters.protagonist, Game.characters.protagonist.pose.normal, Game.ƒS.positionPercent(80, 90));
        await Game.ƒS.update(0.5);
        await Game.ƒS.Speech.tell(Game.characters.jenkins, text.jenkins.T0001);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0002);
        await Game.ƒS.Speech.tell(Game.characters.jenkins, text.jenkins.T0002);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0003);
        await Game.ƒS.Speech.tell(Game.characters.jenkins, text.jenkins.T0003);
        let dialogElement = await Game.ƒS.Menu.getInput(dialog, "choices");
        switch (dialogElement) {
            case dialog.what:
                // continue path here
                await Game.ƒS.Speech.tell(Game.characters.jenkins, text.jenkins.T0004);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0005);
                await Game.ƒS.Speech.tell(Game.characters.jenkins, text.jenkins.T0005);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0006);
                await Game.ƒS.Speech.tell(Game.characters.jenkins, text.jenkins.T0007);
                break;
            case dialog.kidding:
                // continue path here
                await Game.ƒS.Speech.tell(Game.characters.jenkins, text.jenkins.T0006);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0007);
                await Game.ƒS.Speech.tell(Game.characters.jenkins, text.jenkins.T0007);
                break;
        }
        await Game.ƒS.Character.hide(Game.characters.jenkins);
        await Game.ƒS.Speech.tell("", text.narration.N0001, true, "italic");
        await Game.ƒS.update(1);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0004);
        await Game.ƒS.Character.hide(Game.characters.protagonist);
        await Game.ƒS.update(1);
        Game.ƒS.Speech.clear();
        Game.ƒS.Speech.hide();
        Game.ƒS.Sound.fade(Game.sound.relax, 0, 0.5, false);
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(3);
    }
    Game.Opening = Opening;
})(Game || (Game = {}));
//# sourceMappingURL=Game.js.map