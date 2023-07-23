namespace Game {
  export async function Chapter3WellBeginning(): ƒS.SceneReturn {

    let text = {
      protagonist: {
        T0001: "Ok, was soll ich mir anschauen?",
        T0002: "Sheriff, kommt dir diese Feder bekannt vor?",
        T0003: "Mhhh, was ist das hier für eine Streichholzschachtel?",
        T0004: "Oh... gerne.",
        T0005: "Dieser Apfel! Vielleicht hat der Mörder in ihn gebissen und wir können Mundgrößen vergleichen.",
        T0006: "Warum das denn?",
      },
      sheriff: {
        T0001: "So da wären wir. Jenkins wird da hinten befragt von meinen Leuten, falls du auch noch mit ihm reden möchtest. Was willst du zuerst erledigen?",
        T0002: "Wenn du dir nun alles angesehen hast, wird es Zeit, mit Jenkins zu reden.",
        T0003: "Mmh, die könnte von einem Hut stammen.",
      },
      policeman: {
        T0001: "Oh mist, das ist mir gerade aus der Tasche gefallen, danke fürs Aufheben!",
      },
      jenkins: {
        T0001: "(von weiter weg rufend) Da wirst du Pech haben mein Junge. Außer der Mörder hat ein Riesengebiss.",
        T0002: "Den Apfel hat mein Pferd angebissen...",
      },
      narration: {
        N0001: dataForSave.nameProtagonist + " schaut sich um und bemerkt mehrere Gegenstände, die um den Brunnen verteilt herumliegen.",
        NH: "Hinweispunkte + 1",
      }
    };

    let searchChoice = {
      look: "Umschauen",
      ask: "Jenkins befragen",
    };

    let lookAroundChoice = {
      feather: "Feder",
      matches: "Streichholzschachtel",
      apple: "Angebissenen Apfel",
    };

    await ƒS.Location.show(locations.chapter3);
    await ƒS.update(5);

    await ƒS.Location.show(locations.well);
    await ƒS.update(transitions.middleslider.duration, transitions.middleslider.alpha, transitions.middleslider.edge);

    await ƒS.Character.show(characters.sheriff, characters.sheriff.pose.normal, ƒS.positionPercent(20, 90));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0001);

    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.normal, ƒS.positionPercent(80, 90));
    await ƒS.update(1);

    let searchChoiceElement = await ƒS.Menu.getInput(searchChoice, "choices");

    switch (searchChoiceElement) {
      case searchChoice.look:
        await ƒS.Speech.tell("", text.narration.N0001, true, "italic");
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0001);

        let lookAroundChoiceElement = await ƒS.Menu.getInput(lookAroundChoice, "choices");
    
        switch (lookAroundChoiceElement) {
          case lookAroundChoice.feather:
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0002);
            await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0003);
            await ƒS.Speech.tell("", text.narration.NH, true, "italic");
            dataForSave.cluePoints += 1;
            break;
          case lookAroundChoice.matches:
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0003);
            await ƒS.Speech.tell("Anderer Polizist", text.policeman.T0001);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0004);
            break;
          case lookAroundChoice.apple:
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0005);
            await ƒS.Speech.tell(characters.jenkins, text.jenkins.T0001);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0006);
            await ƒS.Speech.tell(characters.jenkins, text.jenkins.T0002);
            break;
        };

        await ƒS.Character.animate(characters.sheriff, characters.sheriff.pose.normal, moveLeftCharAnimation());
        await ƒS.Character.show(characters.jenkins, characters.jenkins.pose.normal, ƒS.positionPercent(30, 90));
        await ƒS.update(1);
        return "chapter_three_well_interrogation";
      case searchChoice.ask:
        await ƒS.Character.animate(characters.sheriff, characters.sheriff.pose.normal, moveLeftCharAnimation());
        await ƒS.Character.show(characters.jenkins, characters.jenkins.pose.normal, ƒS.positionPercent(30, 90));
        await ƒS.update(1);
        return "chapter_three_well_interrogation";
    };


  }
}