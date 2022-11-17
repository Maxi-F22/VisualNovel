namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  export let transitions = {
    puzzle: {
      duration: 1,
      alpha: "Images/jigsaw_06.jpg",
      edge: 1
    }
  };

  export let sound = {
    // Themes

    // SFX
    coin: "Audio/coin.mp3"
  };

  export let locations = {
    beachDay: {
      name: "Beach Day",
      background: "Images/newyork.jpg"
    }
  };

  export let characters = {
    narrator: {
      name: ""
    },
    protagonist: {
      name: ""
    },
    Jerry: {
      name: "Jerry",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "PFAD ZUM PNG",
        happy: "Images/jerry.png",
        upset: "PFAD ZUM PNG"
      }
    }
  };

  export let dataForSave = {
    nameProtagonist: ""
  };


  export function ghostAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomright, color: ƒS.Color.CSS("green", 1) },
      end: { translation: ƒS.positions.bottomleft, color: ƒS.Color.CSS("blue", 0) },
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.LOOP
    };
  }


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
  function start(_event: Event): void {
    // gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "game-menu");
    // buttonFunctionalities("Close");

    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}