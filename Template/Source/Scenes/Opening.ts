namespace Game {
  export async function Opening(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    let text = {
      Jerry: {
        T0001: "Hast du Lust einen Döner mit mir essen zu gehen?",
        T0002: "Hallo, wie gehts?"
      }
    };

    let signalDelay3: ƒS.Signal = ƒS.Progress.defineSignal([() =>  ƒS.Progress.delay(3)]);

    ƒS.Sound.fade(sound.nightclub, 0.02, 2, true);
    ƒS.Sound.fade(sound.river, 0.02, 2, true);
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.beachDay);
    await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
    await ƒS.Character.show(characters.Jerry, characters.Jerry.pose.happy, ƒS.positionPercent(70, 100));
    // await ƒS.Character.animate(characters.Jerry, characters.Jerry.pose.happy, ghostAnimation());
    ƒS.update(2);
    await ƒS.Speech.tell(characters.Jerry, text.Jerry.T0002);
    ƒS.Inventory.add(items.blobBU);
    ƒS.Inventory.add(items.blobBU);
    ƒS.Inventory.add(items.blobRED);
    signalDelay3();
    
    await ƒS.Inventory.open();

    await ƒS.Speech.tell(characters.Jerry, text.Jerry.T0001);
    ƒS.Sound.play(sound.cough, 0.04, false);

    let dialogue = {
      iSayYes: "Ja gerne",
      iSayOk: "Joa",
      iSayNo: "Nein danke"
    };

    let dialogElement = await ƒS.Menu.getInput(dialogue, "choices");

    var badEnding: boolean = false;

    switch (dialogElement) {
      case dialogue.iSayYes:
        // continue path here
        console.log("testyes");
        await ƒS.Speech.tell(characters.Jerry, "*happy*");
        ƒS.Sound.play(sound.coin, 0.4, false);
        break;
      case dialogue.iSayOk:
        // continue path here
        console.log("testok");
        await ƒS.Speech.tell(characters.Jerry, "Wenns sein muss");
        ƒS.Sound.play(sound.coin, 0.4, false);
        break;
      case dialogue.iSayNo:
        // continue path here
        console.log("testno");
        await ƒS.Speech.tell(characters.Jerry, "Och nöö");
        dataForSave.character1TrustPoints += 10;
        ƒS.Sound.play(sound.coin, 0.4, false);
        badEnding = true;
        break;
    }
    ƒS.Sound.fade(sound.river, 0, 2, false);
    ƒS.Sound.fade(sound.nightclub, 0, 2, false);
    if (badEnding) {
      return "bad_choice_scene";
    }
  }
}