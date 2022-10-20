namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  export let transition = {
    puzzle: {
      duration: 1,
      alpha: "",
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
      background: ""
    }
  };

  export let characters = {
    narrator: {
      name: "Thorsten"
    },
    protagonist: {
      name: "Seppel"
    },
    aisaka: {
      name: "Aisaka",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "PFAD ZUM PNG",
        haappy: "PFAD ZUM PNG",
        upset: "PFAD ZUM PNG"
      }
    }
  };

  export let dataForSave = {
    nameProtagonist: ""
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}