namespace Game {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  export let dataForSave = {
    nameProtagonist: "",
    cluePoints: 0,
    foundPliers: false,
    chapter2Accused: "",
    canLookatPages: 0
  };

  export let transitions = {
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

  export let sound = {
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

  export let locations = {
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

  export let characters = {
    protagonist: {
      name: dataForSave.nameProtagonist,
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/mc.png"
      }
    },
    father: {
      name: "Vater",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/father.png"
      }
    },
    sheriff: {
      name: "Sheriff",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/sheriff.png"
      }
    },
    deputy: {
      name: "Deputy",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/deputy.png",
        evil: "Images/Characters/deputy_evil.png"
      }
    },
    jenkins: {
      name: "Jenkins",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/cowboy.png"
      }
    },
    patty: {
      name: "Patty",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/patty.png"
      }
    },
    evilguy: {
      name: "Bankräuber",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/badguy.png"
      }
    },
    murderer: {
      name: "???",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/badguy.png"
      }
    }
  };
  export let items = {
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


  export function hitLeftCharAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(20, 90), color: ƒS.Color.CSS("#FF6060", 1) },
      end: { translation: ƒS.positionPercent(20, 88), color: ƒS.Color.CSS("#FF5050", 1) },
      duration: 0.2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
    };
  }

  export function hitMiddleCharAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(30, 90), color: ƒS.Color.CSS("#FF6060", 1) },
      end: { translation: ƒS.positionPercent(30, 88), color: ƒS.Color.CSS("#FF5050", 1) },
      duration: 0.2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
    };
  }

  export function moveLeftCharAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(20, 90), color: ƒS.Color.CSS("#FFFFFF", 1) },
      end: { translation: ƒS.positionPercent(15, 90), color: ƒS.Color.CSS("#FFFFFF", 1) },
      duration: 0.2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function moveLeftCharBackAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(15, 90), color: ƒS.Color.CSS("#FFFFFF", 1) },
      end: { translation: ƒS.positionPercent(20, 90), color: ƒS.Color.CSS("#FFFFFF", 1) },
      duration: 0.2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  function credits(): void {
    ƒS.Text.setClass("credits");
    ƒS.Text.print("<h1>Credits</h1>Music by moodmode from Pixabay<br>Music by Lesfm from Pixabay<br>Music by Daddy_s_Music from Pixabay<br>Music by Magnetic_Trailer from Pixabay<br><br>Sound Effect from Pixabay<br>Sound Effect by GregorQuendel_SoundDesign from Pixabay<br><br>Alle Hintergründe sind mit KI generiert worden auf https://playgroundai.com/<br><br>Alle Charaktere und Items wurden selbst erstellt auf https://www.pixilart.com/<br><br>Alle Musikstücke und Sounds stammen von https://pixabay.com/");
  }

  let inGameMenuButtons = {
    save: "Speichern",
    load: "Laden",
    close: "Menü schließen",
    credits: "Credits"
  };

  let gameMenu: ƒS.Menu;

  let menuIsOpen: boolean = false;

  async function buttonFunctionalities(_option: string): Promise<void> {
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
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
  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.I:
        console.log("Inventory");
        await ƒS.Inventory.open();
        break;
      case ƒ.KEYBOARD_CODE.M:
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
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "game-menu");
    buttonFunctionalities(inGameMenuButtons.close);

    let scenes: ƒS.Scenes = [
      { id: "opening_scene", scene: Opening, name: "OpeningScene", next: "dream_scene" },
      { id: "dream_scene", scene: Dream, name: "DreamScene", next: "chapter_one_breakfast" },
      { id: "chapter_one_breakfast", scene: Chapter1BreakfastPath, name: "Chapter1BreakfastScene", next: "chapter_two_main" },
      { id: "chapter_one_horses", scene: Chapter1HorsesPath, name: "Chapter1HorsesScene", next: "chapter_two_main" },
      { id: "chapter_two_main", scene: Chapter2Main, name: "Chapter2MainScene" },
      { id: "chapter_two_accusation", scene: Chapter2AccusationPath, name: "Chapter2AccusationScene" },
      { id: "chapter_three_graveyard", scene: Chapter3Graveyard, name: "Chapter3GraveyardScene" },
      { id: "chapter_three_well_beginning", scene: Chapter3WellBeginning, name: "Chapter3WellBeginningScene" },
      { id: "chapter_three_well_interrogation", scene: Chapter3WellInterrogation, name: "Chapter3WellInterrogationScene" },

      { id: "bad_ending", scene: BadEndingDead, name: "BadEndingScene", next: "empty" },
      { id: "good_ending", scene: GoodEnding, name: "GoodEndingScene", next: "empty" },
      { id: "medium_ending_killer", scene: MediumEndingKiller, name: "MediumEndingKillerScene", next: "empty" },
      { id: "medium_ending_free", scene: MediumEndingStillFree, name: "MediumEndingStillFreeScene", next: "empty" },
      { id: "medium_ending_unsolved", scene: MediumEndingUnsolved, name: "MediumEndingUnsolvedScene", next: "empty" },
      { id: "empty", scene: Empty, name: "Empty Scene" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}