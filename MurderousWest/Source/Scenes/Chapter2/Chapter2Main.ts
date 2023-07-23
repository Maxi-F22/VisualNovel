namespace Game {
  export async function Chapter2Main(): ƒS.SceneReturn {

    let text = {
      protagonist: {
        T0001: "Ok, was wolltet ihr mir denn zeigen?",
        T0002: "Oh Gott ihr hättet mich auch ruhig vorwarnen können bevor ihr mir hier eine Leiche zeigt.",
        T0003: "Ist das etwa die Frau des alten Fischers? Wer würde so etwas schreckliches tun?",
        T0004: "Die Zähne fehlen, aber warum? Ist mir bei ihr vorher nie aufgefallen.",
        T0005: "Ich habe ja vorhin erzählt, dass mir der Mörder begegnet ist. Habt ihr schon Leute zum alten Brunnen geschickt?",
        T0006: "Ich hab beim wegreiten was vom Boden aufgehoben, so eine Art Zahnarztzange. Ihr könnt ja mal schauen, ob die vielleicht irgendwie zum Mörder führen könnte.",
        T0007: "Das ist ja schrecklich! Und habt ihr sonst noch irgendwelche Anhaltspunkte?",
      },
      sheriff: {
        T0001: "Schau mal hier.",
        T0002: "Das ist die Frage. Uns ist noch etwas aufgefallen. Schau mal in ihren Mund.",
        T0003: "Wir vermuten, dass sie erst nach dem Tod entfernt wurden. Bei den anderen Opfern ist es genau dasselbe.",
        T0004: "Ja, aber als sie dort ankamen, war nur die Leiche vorzufinden. Vom Mörder keine Spur. Unterwegs haben sie nur den alten Jenkins getroffen, der zum Brunnen wollte. Hat behauptet, das ist sein Lieblingsplatz im Dorf. Und wieder das gleiche Muster beim Opfer, keine Schneidezähne mehr.",
        T0005: "Wow das ist ein wichtiger Fund. Ich gebe es gleich mal meiner Kollegin. Deputy, kommen Sie mal her.",
        T0006: dataForSave.nameProtagonist + " hat sie gefunden, als der Mörder ihn angegriffen hat.",
        T0008: "Leider nicht. Deswegen bist du ja da, um uns zu helfen.",
        T0009: "Danke Deputy, sie können abtreten.",
        T0011: "Wie wärs, sollen wir als nächstes zum alten Brunnen, damit du mit deiner Gabe schauen kannst, ob dir etwas auffällt, das wir übersehen haben oder sollen wir zum Friedhof, dem Ort, wo die letzte Leiche gefunden wurde?",
      },
      deputy: {
        T0001: "Hallo Sheriff, sie haben Glück, ich bin gerade wieder da vom Postbüro. Warum liegt da eine Zahnarztzange?",
        T0002: "Oh, interessant.",
        T0003: "Sheriff, wir haben noch eine Leiche gefunden, am alten Brunnen. Beziehungsweise der alte Jenkins hat sie gefunden. Hat behauptet, das ist seine Lieblingsstelle im Dorf. Genau das gleiche Muster, wie bei den anderen Opfern. Die Schneidezähne 11 und 21 fehlen.",
        T0004: "Ach nichts besonderes, mein Adoptivvater ist Doktor für Zähne drüben in Jamestown.",
        T0005: "Nein, soweit ich es beurteilen konnte nicht. Das einzige, was alle Opfer gemein haben sind die Zähne.",
      },
      narration: {
        N0001: "(" + dataForSave.nameProtagonist + " schaut genauer hin)",
        N0002: "Als " + dataForSave.nameProtagonist + " in den Mund der Verstorbenen blickt fällt ihm direkt auf, dass die beiden oberen vorderen Schneidezähne fehlen.",
        N0003: "Deputy kommt in den Raum.",
        N0004: "Deputy verlässt Raum.",
        NH: "Hinweispunkte + 1",
        NI001: "Revolver ins Inventar gepackt",
      }
    };

    let askDeputyChoice = {
      teeth: "Oh wow, warum kennen Sie sich so gut mit Zähnen aus?",
      other: "Gibt es noch etwas anderes Auffälliges?",
    };

    let nextPlaceChoice = {
      graveyard: "Zum Friedhof",
      well: "Zum Brunnen",
      accuse: "Nicht so schnell, ich habe bereits eine Vermutung, wer es sein könnte",
    };

    await ƒS.Location.show(locations.chapter2);
    await ƒS.update(5);

    await ƒS.Location.show(locations.bureau);
    await ƒS.update(transitions.middleslider.duration, transitions.middleslider.alpha, transitions.middleslider.edge);

    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.normal, ƒS.positionPercent(80, 90));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0001);

    await ƒS.Character.show(characters.sheriff, characters.sheriff.pose.normal, ƒS.positionPercent(20, 90));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0001);

    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0002);
    await ƒS.Speech.tell("", text.narration.N0001, true, "italic");
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0003);
    await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0002);
    await ƒS.Speech.tell("", text.narration.N0002, true, "italic");
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0004);
    await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0003);

    if (dataForSave.foundPliers) {
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0005);
      await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0004);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0006);
      await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0005);
      await ƒS.Speech.tell("", text.narration.N0003, true, "italic");

      await ƒS.Character.animate(characters.sheriff, characters.sheriff.pose.normal, moveLeftCharAnimation());
      await ƒS.Character.show(characters.deputy, characters.deputy.pose.normal, ƒS.positionPercent(30, 90));
      await ƒS.update(1);

      await ƒS.Speech.tell(characters.deputy, text.deputy.T0001);
      await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0006);
      await ƒS.Speech.tell(characters.deputy, text.deputy.T0002);
      await ƒS.Speech.tell("", text.narration.NH, true, "italic");
      dataForSave.cluePoints += 1;
      await ƒS.Speech.tell("", text.narration.N0004, true, "italic");
      await ƒS.Character.hide(characters.deputy);
      await ƒS.Character.animate(characters.sheriff, characters.sheriff.pose.normal, moveLeftCharBackAnimation());
    }
    else {
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0007);
      await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0008);
      await ƒS.Speech.tell("", text.narration.N0003, true, "italic");

      await ƒS.Character.animate(characters.sheriff, characters.sheriff.pose.normal, moveLeftCharAnimation());
      await ƒS.Character.show(characters.deputy, characters.deputy.pose.normal, ƒS.positionPercent(30, 90));
      await ƒS.update(1);

      await ƒS.Speech.tell(characters.deputy, text.deputy.T0003);

      let askDeputyChoiceElement = await ƒS.Menu.getInput(askDeputyChoice, "choices");
      
      switch (askDeputyChoiceElement) {
        case askDeputyChoice.teeth:
          await ƒS.Speech.tell(characters.deputy, text.deputy.T0004);
          await ƒS.Speech.tell("", text.narration.NH, true, "italic");
          dataForSave.cluePoints += 1;
          await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0009);
          break;
        case askDeputyChoice.other:
          await ƒS.Speech.tell(characters.deputy, text.deputy.T0005);
          await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0009);
          break;
      };

      await ƒS.Speech.tell("", text.narration.N0004, true, "italic");
      await ƒS.Character.hide(characters.deputy);
      await ƒS.Character.animate(characters.sheriff, characters.sheriff.pose.normal, moveLeftCharBackAnimation());
    }

    await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0011);
    
    let nextPlaceChoiceElement = await ƒS.Menu.getInput(nextPlaceChoice, "choices");


    switch (nextPlaceChoiceElement) {
      case nextPlaceChoice.graveyard:
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.Character.hide(characters.sheriff);
        await ƒS.update(1);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.black);
        await ƒS.update(2);
        return "chapter_three_graveyard";
      case nextPlaceChoice.well:
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.Character.hide(characters.sheriff);
        await ƒS.update(1);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.black);
        await ƒS.update(2);
        return "chapter_three_well_beginning";
      case nextPlaceChoice.accuse:
        return "chapter_two_accusation";
    };

  }
}