namespace Game {
  export async function Chapter1BreakfastPath(): ƒS.SceneReturn {

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
        T0001: dataForSave.nameProtagonist + ", gut dass wir dich zufällig hier treffen. Wir waren eh auf dem Weg zu dir nach Hause.",
        T0002: "Dein alter Herr war der beste Sheriff, den diese Stadt jemals hatte. Und wir wissen, dass seine Auffassungsgabe und sein Gespür auf dich übergegangen sind.",
        T0003: "Das verstehen wir und wir würden dich auch niemals bitten, wenn es nicht so wichtig wäre. Wir sind mit unseren Kräften langsam echt am Ende. Niemand hat auch nur eine Ahnung, wie wir weiter vorgehen könnten."
      },
      deputy: {
        T0001: "Du hast doch sicher von diesen schrecklichen, grauenhaften Morden gehört, die zurzeit die Stadt heimsuchen oder?"
      },
      narration: {
        N0001: "Schweißgebadet wacht " + dataForSave.nameProtagonist + " auf.",
        N0002: "An der Tür vom Haus des Bäckers",
        N0003: dataForSave.nameProtagonist + " verlässt das Grundstück und macht sich auf den Weg Richtung zuhause."
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

    ƒS.Speech.hide();
    ƒS.Sound.play(sound.relax, 0.1, true);
    await ƒS.Location.show(locations.chapter1);
    await ƒS.update(5);

    await ƒS.Location.show(locations.bedroom);
    await ƒS.update(transitions.middleslider.duration, transitions.middleslider.alpha, transitions.middleslider.edge);

    await ƒS.Speech.tell("", text.narration.N0001, true, "italic");

    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.normal, ƒS.positionPercent(80, 90));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0001);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0002);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0003);

    let getUpChoiceElement = await ƒS.Menu.getInput(getUpChoice, "choices");

    switch (getUpChoiceElement) {
      case getUpChoice.breakfast:
    
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0004);
    
        ƒS.Inventory.add(items.bread);
        ƒS.Inventory.add(items.bread);
        ƒS.Inventory.add(items.bread);

        
        await ƒS.Location.show(locations.town);
        await ƒS.update(transitions.updownslider.duration, transitions.updownslider.alpha, transitions.updownslider.edge);
    
        await ƒS.Speech.tell("", text.narration.N0002, true, "italic");
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0005);
        await ƒS.Speech.tell("", text.narration.N0003, true, "italic");
    
        await ƒS.Character.show(characters.sheriff, characters.sheriff.pose.normal, ƒS.positionPercent(15, 90));
        await ƒS.Character.show(characters.deputy, characters.deputy.pose.normal, ƒS.positionPercent(30, 90));
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0001);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0006);
        await ƒS.Speech.tell(characters.deputy, text.deputy.T0001);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0007);
        await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0002);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0008);
        await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0003);
    
        let goWithSheriffChoiceElement = await ƒS.Menu.getInput(goWithSheriffChoice, "choices");
    
        switch (goWithSheriffChoiceElement) {
          case goWithSheriffChoice.agree:
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0010);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.Character.hide(characters.deputy);
            await ƒS.Character.hide(characters.sheriff);
            await ƒS.update(1);
            ƒS.Speech.clear();
            ƒS.Speech.hide();
            await ƒS.Location.show(locations.black);
            await ƒS.update(2);
            break;
          case goWithSheriffChoice.turndown:
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0009);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.Character.hide(characters.deputy);
            await ƒS.Character.hide(characters.sheriff);
            await ƒS.update(1);
            return "chapter_one_horses";
        }

        break;
      case getUpChoice.horses:
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(1);
        return "chapter_one_horses";
    }

  }
}