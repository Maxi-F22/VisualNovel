namespace Game {
  export async function Chapter1HorsesPath(): ƒS.SceneReturn {

    let text = {
      protagonist: {
        T0001: "So, damit wären nun alle Pferde gefüttert. Ich glaube ich werde nun einen kleinen Ausritt zum alten Brunnen machen. Aber mit dem Mörder, der hier auf freiem Fuß ist, nehme ich besser etwas zur Selbstverteidigung mit. Aber was am besten?",
        T0002: "Ach ja, mein Lieblingsplatz hier in der Gegend. So, das Pferd kann hier trinken und grasen und ich machs mir auch gemütlich.",
        T0003: "Hallo, ist da jemand???",
        T0004: "Naja Chester, hab ich mir wohl nur eingebildet. Da war niema...",
        T0005: "Sheriff, ich brauch Hilfe, ich wurde angegriffen von einer schwarz vermummten Gestalt. Wahrscheinlich war es der Mörder. Auch wenn es mir nicht gefällt, ich werde euch helfen ihn zu suchen.",
        T0006: "Bist du der Mörder?",
        T0007: "Damit wirst du nie durchkommen!",
        T0008: "Du wolltest was? Dein neuestes Opfer entsorgen oder was?",
        T0009: "Nein bitte bitte. Ich hab dir nichts getan.",
        T0010: "Bitte was, besondere Pläne?",
        T0011: "Du widerst mich an!",
      },
      murderer: {
        T0001: "Warum bist du hier? Es sollte niemand hier sein!",
        T0002: "Was ist das da an deinem Gürtel? Oh nein, so einfach ist das hier nicht mein Guter.",
        T0003: "Ok, es reicht mir jetzt mit dir.",
        T0004: "Grüß deinen Vater von mir.",
        T0005: "Halt die Schnauze, ich muss nachdenken.",
        T0006: "Was denkst du, hmm?",
        T0007: "Du solltest nicht hier sein, ich wollte nur...",
        T0008: "Du kennst mich nicht. Ich entsorge meine Opfer nicht. Ich... Nein du wirst nichts aus mir herausbekommen.",
        T0009: "Du nervst mit deinem Betteln, halt jetzt dein Maul!",
        T0010: "Ok, wir machen es folgendermaßen: Du bist noch nicht dran, für dich habe ich besondere Pläne.",
        T0011: "Leise, ich will dich gehen lassen. Du sitzt jetzt auf dein Pferd und reitest einfach weg. Solltest du die Polizei holen und wieder her kommen, werde ich schon längst weg sein. Also los!!!",
      },
      narration: {
        N0001: dataForSave.nameProtagonist + " macht sich auf den Weg. Er besteigt sein Pferd Chester und reitet gemütlich und mit vielen Umwegen, um die Landschaft zu bewundern, zum alten Brunnen.",
        N0002: "Nach einer Weile ist ein leichtes Schnarchen zu hören, während " + dataForSave.nameProtagonist + " sich mit dem Hut über den Augen in der Sonne ausruht.",
        N0003: "Doch plötzlich reißt ihn das Geräusch eines brechenden Astes aus dem Schlaf.",
        N0004: "KNACK!!!",
        N0005: "(Stille)",
        N0006: "PONK!!!",
        N0007: "Ein dumpfer Schlag trifft " + dataForSave.nameProtagonist + " am Kopf und er verliert das Bewusstsein. Als er wieder zu sich kommt, ist er an Armen und Beinen gefesselt.",
        N0008: "Er hört eine Stimme, die sehr offensichtlich verstellt ist.",
        N0009: "Mit verschwommener Sicht, nimmt " + dataForSave.nameProtagonist + " eine vermummte Gestalt ganz in schwarz wahr. Neben ihr auf dem Boden liegt ein Mehlsack in Form eines Menschen.",
        N0010: "Unauffällig zieht " + dataForSave.nameProtagonist + " das Messer aus seinem Gürtel und schneidet die Fesseln an seinen Armen durch. Danach löst er sich die Beinfesseln und stürzt ohne sich umzudrehen los in Richtung Chester.",
        N0011: "Kurz vor dem Aufsteigen auf das Pferd, glänzt etwas am Boden. Als " + dataForSave.nameProtagonist + " sich bückt, um es aufzuheben, wird es klar, dass es eine Zange ist, wie sie Zahnärzte benutzen um Zähne zu ziehen. Dann macht er sich auf in Richtung Stadt.",
        N0012: "Die Gestalt greift an den Gürtel, zieht eine Waffe und hält sie " + dataForSave.nameProtagonist + " an die Brust.",
        NH: "Hinweispunkte + 1",
        NI001: "Revolver ins Inventar gepackt",
        NI002: "Messer ins Inventar gepackt",
        NI003: "Zange ins Inventar gepackt",
      }
    };

    let weaponChoice = {
      gun: "Revolver",
      knife: "Messer",
    };

    let actionChoice = {
      grabWeapon: "Nach Waffe greifen",
      talk: "Mit schwarzer Gestalt reden",
    };

    let talkChoice1 = {
      whoareyou: "Hey, wer bist du?",
      letmego: "Lass mich gehen, bitte",
    };

    let talkChoice2 = {
      notgettingaway: "Damit wirst du nicht durchkommen",
      please: "Ich bitte dich",
    };

    let chosenKnife = false;


    await ƒS.Location.show(locations.stable);
    await ƒS.update(transitions.updownslider.duration, transitions.updownslider.alpha, transitions.updownslider.edge);
    
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0001);

    
    let weaponChoiceElement = await ƒS.Menu.getInput(weaponChoice, "choices");

    switch (weaponChoiceElement) {
      case weaponChoice.gun:
        ƒS.Inventory.add(items.gun);
        await ƒS.Speech.tell("", text.narration.NI001, true, "italic");
        break;
      case weaponChoice.knife:
        ƒS.Inventory.add(items.knife);
        await ƒS.Speech.tell("", text.narration.NI002, true, "italic");
        chosenKnife = true;
        break;
    };

    await ƒS.Location.show(locations.well);
    await ƒS.update(transitions.updownslider.duration, transitions.updownslider.alpha, transitions.updownslider.edge);

    await ƒS.Speech.tell("", text.narration.N0001, true, "italic");
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0002);
    await ƒS.Speech.tell("", text.narration.N0002, true, "italic");
    await ƒS.Speech.tell("", text.narration.N0003, true, "italic");
    await ƒS.Speech.tell("", text.narration.N0004, true, "italic");
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0003);
    await ƒS.Speech.tell("", text.narration.N0005, true, "italic");
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0004);
    await ƒS.Speech.tell("", text.narration.N0006, true, "italic");
    await ƒS.Speech.tell("", text.narration.N0007, true, "italic");
    await ƒS.Speech.tell("", text.narration.N0008, true, "italic");
    await ƒS.Character.show(characters.murderer, characters.murderer.pose.normal, ƒS.positionPercent(20, 90));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.murderer, text.murderer.T0001);
    await ƒS.Speech.tell("", text.narration.N0009, true, "italic");
    
    let actionChoiceElement = await ƒS.Menu.getInput(actionChoice, "choices");

    switch (actionChoiceElement) {
      case actionChoice.grabWeapon:
        if (chosenKnife) {
          await ƒS.Speech.tell("", text.narration.N0010, true, "italic");
          await ƒS.Speech.tell("", text.narration.N0011, true, "italic");
          await ƒS.Character.hide(characters.murderer);
          await ƒS.update(1);

          ƒS.Inventory.add(items.pliers);
          dataForSave.foundPliers = true;
          await ƒS.Speech.tell("", text.narration.NI003, true, "italic");

          await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0005);
          await ƒS.Character.hide(characters.protagonist);
          await ƒS.update(1);
          ƒS.Speech.clear();
          ƒS.Speech.hide();
          await ƒS.Location.show(locations.black);
          await ƒS.update(2);
        }
        else {
          await ƒS.Speech.tell(characters.murderer, text.murderer.T0002);
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0011);
          await ƒS.Speech.tell(characters.murderer, text.murderer.T0003);
          await ƒS.Speech.tell("", text.narration.N0012, true, "italic");
          await ƒS.Speech.tell(characters.murderer, text.murderer.T0004);

          await ƒS.Character.hide(characters.murderer);
          await ƒS.Character.hide(characters.protagonist);
          await ƒS.update(1);
          ƒS.Speech.clear();
          ƒS.Speech.hide();
          await ƒS.update(1);
          return "bad_ending";
        }
        break;
      case actionChoice.talk:
        let talkChoice1Element = await ƒS.Menu.getInput(talkChoice1, "choices");

        switch (talkChoice1Element) {
          case talkChoice1.whoareyou:
            await ƒS.Speech.tell(characters.murderer, text.murderer.T0005);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0006);
            await ƒS.Speech.tell(characters.murderer, text.murderer.T0006);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0007);
            await ƒS.Speech.tell(characters.murderer, text.murderer.T0010);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0010);
            await ƒS.Speech.tell("", text.narration.NH, true, "italic underlined");
            dataForSave.cluePoints += 1;
            await ƒS.Speech.tell(characters.murderer, text.murderer.T0011);
            await ƒS.Speech.tell("", text.narration.N0011, true, "italic");
            await ƒS.Character.hide(characters.murderer);
            await ƒS.update(1);

            ƒS.Inventory.add(items.pliers);
            dataForSave.foundPliers = true;
            await ƒS.Speech.tell("", text.narration.NI003, true, "italic");

            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0005);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(1);
            ƒS.Speech.clear();
            ƒS.Speech.hide();
            await ƒS.Location.show(locations.black);
            await ƒS.update(2);
            break;
          case talkChoice1.letmego:
            await ƒS.Speech.tell(characters.murderer, text.murderer.T0007);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0008);
            await ƒS.Speech.tell(characters.murderer, text.murderer.T0008);
    
            let talkChoice2Element = await ƒS.Menu.getInput(talkChoice2, "choices");
        
            switch (talkChoice2Element) {
              case talkChoice2.notgettingaway:
                await ƒS.Speech.tell(characters.murderer, text.murderer.T0010);
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0010);
                await ƒS.Speech.tell("", text.narration.NH, true, "italic");
                dataForSave.cluePoints += 1;
                await ƒS.Speech.tell(characters.murderer, text.murderer.T0011);
                await ƒS.Speech.tell("", text.narration.N0011, true, "italic");
                await ƒS.Character.hide(characters.murderer);
                await ƒS.update(1);
    
                ƒS.Inventory.add(items.pliers);
                dataForSave.foundPliers = true;
                await ƒS.Speech.tell("", text.narration.NI003, true, "italic");
    
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0005);
                await ƒS.Character.hide(characters.protagonist);
                await ƒS.update(1);
                ƒS.Speech.clear();
                ƒS.Speech.hide();
                await ƒS.Location.show(locations.black);
                await ƒS.update(2);
                break;
              case talkChoice2.please:
                await ƒS.Speech.tell(characters.murderer, text.murderer.T0009);
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0009);
                await ƒS.Speech.tell(characters.murderer, text.murderer.T0003);
                await ƒS.Speech.tell("", text.narration.N0012, true, "italic");
                await ƒS.Speech.tell(characters.murderer, text.murderer.T0004);
      
                await ƒS.Character.hide(characters.murderer);
                await ƒS.Character.hide(characters.protagonist);
                await ƒS.update(1);
                ƒS.Speech.clear();
                ƒS.Speech.hide();
                await ƒS.update(1);
                return "bad_ending";
            };
            break;
        };
        break;
    };
  }
}