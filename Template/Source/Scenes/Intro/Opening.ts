namespace Game {
  export async function Opening(): ƒS.SceneReturn {

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
      kidding: "Sie wollen mich verarschen, oder?",
    };

    // ƒS.Sound.fade(sound.nightclub, 0.02, 2, true);
    // ƒS.Sound.fade(sound.river, 0.02, 2, true);
    ƒS.Speech.hide();

    // ƒS.Sound.play(sound.cough, 0.04, false);



    await ƒS.Location.show(locations.intro);
    await ƒS.update(5);

    await ƒS.Location.show(locations.stable);
    await ƒS.update(transitions.middleslider.duration, transitions.middleslider.alpha, transitions.middleslider.edge);

    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0001);

    await ƒS.Character.show(characters.jenkins, characters.jenkins.pose.normal, ƒS.positionPercent(20, 90));
    await ƒS.update(0.5);
    await ƒS.Speech.tell(characters.jenkins, text.jenkins.T0008);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0008);
    dataForSave.nameProtagonist = await ƒS.Speech.getInput();
    characters.protagonist.name = dataForSave.nameProtagonist;
    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.normal, ƒS.positionPercent(80, 90));
    await ƒS.update(0.5);
    await ƒS.Speech.tell(characters.jenkins, text.jenkins.T0001);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0002);
    await ƒS.Speech.tell(characters.jenkins, text.jenkins.T0002);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0003);
    await ƒS.Speech.tell(characters.jenkins, text.jenkins.T0003);

    let dialogElement = await ƒS.Menu.getInput(dialog, "choices");

    switch (dialogElement) {
      case dialog.what:
        // continue path here
        await ƒS.Speech.tell(characters.jenkins, text.jenkins.T0004);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0005);
        await ƒS.Speech.tell(characters.jenkins, text.jenkins.T0005);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0006);
        await ƒS.Speech.tell(characters.jenkins, text.jenkins.T0007);
        break;
      case dialog.kidding:
        // continue path here
        await ƒS.Speech.tell(characters.jenkins, text.jenkins.T0006);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0007);
        await ƒS.Speech.tell(characters.jenkins, text.jenkins.T0007);
        break;
    }

    await ƒS.Character.hide(characters.jenkins);
    await ƒS.Speech.tell("", text.narration.N0001, true, "italic");
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0004);

    await ƒS.Character.hide(characters.protagonist);
    await ƒS.update(1);

    ƒS.Speech.clear();
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.black);
    await ƒS.update(3);
  }
}