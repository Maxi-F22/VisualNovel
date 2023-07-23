namespace Game {
  export async function Chapter2AccusationPath(): ƒS.SceneReturn {

    let text = {
      protagonist: {
        T0001: "Ich habe eben so ein Gefühl. Also, lass mich nochmal nachdenken...",
        T0002: "Ich habe gestern mit Jenkins gesporchen. Er hat mir gesagt, sein Lieblingsort ist der alte Baumstumpf und zu euch sagt er, dass er am liebsten beim Brunnen ist. Mmh irgendetwas ist da doch faul.",
        T0003: "Ja, ist wahrscheinlich am Besten. Weißt du zufällig wo er sich gerade aufhält?",
        T0004: "Würdest du Deputy nochmal hereinbitten?",
        T0005: "Deputy, nimm bitte... den Sheriff fest.",
        T0006: "Es macht alles Sinn. Du benutzt deinen Deckmantel als Sheriff um die Morde zu begehen und sie zu vertuschen. Ich bin mir sicher.",
        T0007: "Sheriff, ich glaube dass der Deputy irgendwas zu verbergen hat.",
      },
      sheriff: {
        T0001: "Was? Komm schon, ich weiß, dass du diese Gabe geerbt hast, aber so gut kannst du doch auch nicht sein. Woher willst du denn jetzt schon wissen wer es war?",
        T0002: "Wir besuchen ihn am besten und fragen, was es damit auf sich hat und warum er überhaupt beim Brunnen war.",
        T0003: "Meine Leute sind immer noch dabei, ihn zu befragen. Also müsste er noch am Brunnen sein. Lass uns zu ihm gehen",
        T0004: "Deputy, herkommen bitte.",
        T0005: "Bist du denn von allen guten Geistern verlassen Junge? Was soll denn das?",
        T0006: "Das ist alles ein Fehler! Warum sollte ich diese Morde begehen?",
        T0007: "Deputy, sofort herkommen!",
        T0008: "Wir ziehen am besten noch keine voreiligen Schlüsse. Los, machen wir uns auf die Suche nach ihr! Vielleicht gehen wir dafür an die Orte, von denen wir wissen, dass der Mörder sie besucht hat.",
      },
      deputy: {
        T0001: "Sheriff, Hände hoch und mitkommen!!!",
        T0002: "Erklär das dem Richter!",
      },
      policeman: {
        T0001: "Sheriff, sie ist vor etwa 10 Minuten gegangen. Sie wollte uns nicht sagen wohin aber sie sah aus, als hätte sie es ziemlich eilig."
      },
      narration: {
        N0001: "Deputy kommt in den Raum",
        N0002: "Nachdem der Sheriff im Gefängnis gelandet ist, hören die Morde für ein paar Wochen auf. Doch als sich der Staub gelegt hat, fangen sie wieder an. Noch schlimmer und brutaler als zuvor. " + dataForSave.nameProtagonist + " sieht seinen Irrtum ein und versucht den Sheriff aus dem Gefängnis zu holen. Doch an dem Tag, als er das versuchen möchte, geschieht es. Es erwischt ihn auf seinem Hof, gerade als er die Pferde füttern möchte. Das neueste Opfer des Mörders ist " + dataForSave.nameProtagonist + ".",
        N0003: "(Stille)",
        NH: "Hinweispunkte + 1",
      }
    };

    let lookForDeputyChoice = {
      well: "Na gut, auf zum Brunnen",
      graveyard: "Na gut, auf zum Friedhof",
    };

    await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0001);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0001);

    let current: number = 0;
    let choice = { back: "Vorherige Seite", buy_clue: "Neuen Hinweis kaufen", next: "Nächste Seite", accuse: "Beschuldigen" };
    let choiceNoBuy = { back: "Vorherige Seite", next: "Nächste Seite", accuse: "Beschuldigen" };
    let accusation = { jenkins: "Jenkins beschuldigen", sheriff: "Sheriff beschuldigen", deputy: "Deputy beschuldigen" };

    let choiceInput: string;
    let choiceNoBuyInput: string;
    let accusationInput: string;

    ƒS.Text.addClass("accusemenu");
    do {
      let pages: string[] = [
        "<strong><u>Beschuldigunsmenü</u></strong><br\><br\><strong>Verbleibende Hinweispunkte: " + dataForSave.cluePoints + "</strong><br\><br\><br\><br\><br\><br\><br\>", 
        "Hinweis 1,<br\><br\>Der Mörder trägt einen Hut.<br\><br\><br\><br\><br\><br\>", 
        "Hinweis 2,<br\><br\>Der Mörder hat etwas mit Zähnen zu tun.<br\><br\><br\><br\><br\><br\>", 
        "Hinweis 3,<br\><br\>Der Mörder wurde adoptiert.<br\><br\><br\><br\><br\><br\>", 
        "Hinweis 4,<br\><br\>Der Mörder ist eine Frau.<br\><br\><br\><br\><br\><br\>"
      ];

      ƒS.Text.print(pages[current]);
      if (dataForSave.cluePoints === 0 || dataForSave.canLookatPages === (pages.length - 1)) {
        choiceNoBuyInput = await ƒS.Menu.getInput(choiceNoBuy, "accusemenu-input");
        switch (choiceNoBuyInput) {
          case choiceNoBuy.back: 
            current = Math.max(0, current - 1); 
            break;
          case choiceNoBuy.next: 
            current = Math.min(dataForSave.canLookatPages, current + 1); 
            break;
          case choiceNoBuy.accuse: 
            accusationInput = await ƒS.Menu.getInput(accusation, "accusemenu-input");
            switch (accusationInput) {
              case accusation.jenkins: 
                dataForSave.chapter2Accused = "jenkins";
                break;
              case accusation.sheriff: 
                dataForSave.chapter2Accused = "sheriff";
                break;
              case accusation.deputy: 
                dataForSave.chapter2Accused = "deputy";
                break;
            }
            break;
        }
      }
      else {
        choiceInput = await ƒS.Menu.getInput(choice, "accusemenu-input");
        switch (choiceInput) {
          case choice.back: 
            current = Math.max(0, current - 1); 
            break;
          case choice.next: 
            current = Math.min(dataForSave.canLookatPages, current + 1); 
            break;
          case choice.buy_clue:
            dataForSave.canLookatPages += 1;
            current = dataForSave.canLookatPages;
            dataForSave.cluePoints = dataForSave.cluePoints - 1;
            break;
          case choice.accuse: 
            accusationInput = await ƒS.Menu.getInput(accusation, "accusemenu-input");
            switch (accusationInput) {
              case accusation.jenkins: 
                dataForSave.chapter2Accused = "jenkins";
                break;
              case accusation.sheriff: 
                dataForSave.chapter2Accused = "sheriff";
                break;
              case accusation.deputy: 
                dataForSave.chapter2Accused = "deputy";
                break;
            }
            break;
        }
      }
    } while (dataForSave.chapter2Accused === "");
    ƒS.Text.close();

    if (dataForSave.chapter2Accused === "jenkins") {
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0002);
      await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0002);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0003);
      await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0003);
      await ƒS.Location.show(locations.well);
      await ƒS.update(transitions.updownslider.duration, transitions.updownslider.alpha, transitions.updownslider.edge);
      return "chapter_three_well_interrogation";
    }
    
    else if (dataForSave.chapter2Accused === "sheriff") {
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0004);
      await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0004);
      await ƒS.Speech.tell("", text.narration.N0001, true, "italic");
      await ƒS.Character.animate(characters.sheriff, characters.sheriff.pose.normal, moveLeftCharAnimation());
      await ƒS.Character.show(characters.deputy, characters.deputy.pose.normal, ƒS.positionPercent(30, 90));
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0005);
      await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0005);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0006);
      await ƒS.Speech.tell(characters.deputy, text.deputy.T0001);
      await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0006);
      await ƒS.Speech.tell(characters.deputy, text.deputy.T0002);
      await ƒS.Character.hide(characters.deputy);
      await ƒS.Character.hide(characters.protagonist);
      await ƒS.Character.hide(characters.sheriff);
      await ƒS.update(1);
      await ƒS.Speech.tell("", text.narration.N0002, true, "italic");
      ƒS.Speech.clear();
      ƒS.Speech.hide();
      await ƒS.Location.show(locations.black);
      await ƒS.update(2);
      return "bad_ending";
    }
    
    
    else if (dataForSave.chapter2Accused === "deputy") {
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0004);
      await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0004);
      await ƒS.Speech.tell("", text.narration.N0003, true, "italic");
      await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0007);
      await ƒS.Speech.tell("Anderer Gesetzeshüter", text.policeman.T0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0007);
      await ƒS.Speech.tell("", text.narration.NH, true, "italic");
      dataForSave.cluePoints += 1;
      await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0008);

      let lookForDeputyElement = await ƒS.Menu.getInput(lookForDeputyChoice, "choices");

      await ƒS.Character.hide(characters.protagonist);
      await ƒS.Character.hide(characters.sheriff);
      await ƒS.update(1);
      await ƒS.Speech.tell("", text.narration.N0002, true, "italic");
      ƒS.Speech.clear();
      ƒS.Speech.hide();
      await ƒS.Location.show(locations.black);
      await ƒS.update(2);
  
      switch (lookForDeputyElement) {
        case lookForDeputyChoice.well:
          return "chapter_three_well_beginning";
        case lookForDeputyChoice.graveyard:
          return "chapter_three_graveyard";
      };
    }
  }
}