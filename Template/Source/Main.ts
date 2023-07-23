namespace Game {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  export let dataForSave = {
    nameProtagonist: "",
    cluePoints: 0,
    foundPliers: false,
    chapter2Accused: "",
    canLookatPages: 0,
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
    },
  };

  export let sound = {
    // Themes
    nightclub: "Audio/Nightclub.ogg",

    // SFX
    coin: "Audio/coin.mp3",
    cough: "Audio/cough.mp3",
    river: "Audio/river.mp3"
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
    },
  };

  export let characters = {
    protagonist: {
      name: "???",
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
    },
  };


  export function hitLeftCharAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(20, 90), color: ƒS.Color.CSS("#FF6060", 1) },
      end: { translation: ƒS.positionPercent(20, 88), color: ƒS.Color.CSS("#FF5050", 1) },
      duration: 0.2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
    };
  };

  export function hitMiddleCharAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(30, 90), color: ƒS.Color.CSS("#FF6060", 1) },
      end: { translation: ƒS.positionPercent(30, 88), color: ƒS.Color.CSS("#FF5050", 1) },
      duration: 0.2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
    };
  };

  export function moveLeftCharAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(20, 90), color: ƒS.Color.CSS("#FFFFFF", 1) },
      end: { translation: ƒS.positionPercent(15, 90), color: ƒS.Color.CSS("#FFFFFF", 1) },
      duration: 0.2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  };

  export function moveLeftCharBackAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(15, 90), color: ƒS.Color.CSS("#FFFFFF", 1) },
      end: { translation: ƒS.positionPercent(20, 90), color: ƒS.Color.CSS("#FFFFFF", 1) },
      duration: 0.2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  };

  function credits(): void {
    ƒS.Text.setClass("credits");
    ƒS.Text.print("Halleluja");
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

    let scenes: ƒS.Scenes = [
      { id: "opening_scene", scene: Opening, name: "Opening Scene", next: "dream_scene" },
      { id: "dream_scene", scene: Dream, name: "Dream Scene", next: "chapter_one_breakfast" },
      { id: "chapter_one_breakfast", scene: Chapter1BreakfastPath, name: "Chapter1 Breakfast Scene", next: "chapter_two_main" },
      { id: "chapter_one_horses", scene: Chapter1HorsesPath, name: "Chapter1 Horses Scene", next: "chapter_two_main" },
      { id: "chapter_two_main", scene: Chapter2Main, name: "Chapter 2 Main Scene" },
      { id: "chapter_two_accusation", scene: Chapter2AccusationPath, name: "Chapter 2 Accusation Scene" },
      { id: "chapter_three_graveyard", scene: Chapter3Graveyard, name: "Chapter 3 Graveyard Scene" },
      { id: "chapter_three_well_beginning", scene: Chapter3WellBeginning, name: "Chapter 3 Well Beginning Scene" },
      { id: "chapter_three_well_interrogation", scene: Chapter3WellInterrogation, name: "Chapter 3 Well Interrogation Scene" },

      { id: "bad_ending", scene: BadEndingDead, name: "Bad Ending Scene", next: "empty" },
      { id: "good_ending", scene: GoodEnding, name: "Good Ending Scene", next: "empty" },
      { id: "medium_ending_killer", scene: MediumEndingKiller, name: "Medium Ending Killer Scene", next: "empty" },
      { id: "medium_ending_free", scene: MediumEndingStillFree, name: "Medium Ending Still Free Scene", next: "empty" },
      { id: "medium_ending_unsolved", scene: MediumEndingUnsolved, name: "Medium Ending Unsolved Scene", next: "empty" },
      { id: "empty", scene: Empty, name: "Empty Scene" },
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}