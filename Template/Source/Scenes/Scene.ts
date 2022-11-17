namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    let text = {
      Jerry: {
        T0001: "Hast du Lust einen Döner mit mir essen zu gehen?",
        T0002: "Hallo, wie gehts?"
      }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.beachDay);
    await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
    await ƒS.Character.show(characters.Jerry, characters.Jerry.pose.happy, ƒS.positionPercent(70, 100));
    await ƒS.Character.animate(characters.Jerry, characters.Jerry.pose.happy, ghostAnimation());
    ƒS.update(2);
    await ƒS.Speech.tell(characters.Jerry, text.Jerry.T0002);
    await ƒS.Speech.tell(characters.Jerry, text.Jerry.T0001);


    let dialogue = {
      iSayYes: "Jawoll",
      iSayOk: "Joa",
      iSayNo: "Nein danke"
    };

    let dialogElement = await ƒS.Menu.getInput(dialogue, "choices");

    switch (dialogElement) {
      case dialogue.iSayYes:
        // continue path here
        console.log("testyes");
        await ƒS.Speech.tell(characters.Jerry, "Juhuuuuuuuuu");
        break;
      case dialogue.iSayOk:
        // continue path here
        console.log("testok");
        await ƒS.Speech.tell(characters.Jerry, "Wenns sein muss");
        break;
      case dialogue.iSayNo:
        // continue path here
        console.log("testno");
        await ƒS.Speech.tell(characters.Jerry, "Och nöö");
        break;
    }
  }
}