namespace Game {
  export async function Chapter3Graveyard(): ƒS.SceneReturn {

    let text = {
      protagonist: {
        T0001: "Ok, also hier wurde die letzte Leiche gefunden was?",
        T0002: "Ist ja ganz praktisch, dass sie hier gefunden wurde was?",
        T0003: "Ok, tut mir Leid. Zu früh... Wer ist das da vorne?",
        T0004: "Oh ok verstehe.",
        T0005: "(zu Patty) Mein aufrichtiges Beileid, Ma'am",
        T0006: "Hier ist sonst nichts!",
        T0007: "Hast Recht, wollte nur auf Nummer sicher gehen.",
        T0008: "Hey Sheriff, warum steht dieser Grabstein da hinten so weit ab vom Schuss?",
        T0009: "Ah gut, dass Sie da sind. Sheriff, kommen Sie mal her!",
        T0010: "Wir sind hier nochmals alles wegen der letzten Leiche, Stan. Was machen Sie hier?",
        T0011: "Genug jetzt. Ich weiß, wer der Mörder ist.",
        T0012: "Es war... der Sheriff selbst.",
        T0013: "Es macht Sinn. Du benutzt deinen Deckmantel als Sheriff um die Morde zu begehen und sie zu vertuschen. Ich bin mir sicher.",
        T0014: "Die Mörderin ist... Patty. Sie hat ihren Mann umgebracht, um sein ganzes Goldgräbervermögen nur für sich allein zu haben. Die anderen Morde hat sie bestimmt aus Vergnügen begangen.",
        T0015: "Als ich den Namen auf dem Grabstein gelesen habe, kam ich erst nicht drauf. Sawyer. Wo habe ich den Namen schonmal gehört? Dann fiel es mir wieder ein. Ich habe es in der Zeitung gelesen, damals, zusammen mit der Todesanzeige meines Vaters. Die Tochter des Mörders meines Vaters, ein Randy Sawyer, wurde adoptiert von einem Zahnarzt in Jamestown. Und sie ist heute hier, um Ihren Vater zu besuchen. Deputy, deren wahrer Nachname Sawyer ist.",
        T0016: "Das was dein Vater getan hat, was du getan hast... Ihr seid beide Mörder!",
        T0017: "Oh Gott das wollte ich nicht, es war ein Reflex.",
        T0018: "Stopp, bitte, lass uns darüber reden!",
        T0019: "Ich verstehe, was du durchmachst. Als mein Vater starb, wollte ich auch alles und jeden dafür verantwortlich machen.",
        T0020: "Nein, ich muss versuchen, mit ihr zu reden.",
        T0021: "(zu Deputy) Hey, bitte, lass uns reden.",
        T0022: "Ruby!!! Nimm die Waffe runter.",
        T0023: "Ruby, es tut mir Leid was dir passiert ist. Aber das ist doch kein Grund, die unschuldigen Einwohner dieser Stadt umzubringen.",
        T0024: "Bitte Ruby, versteh doch. Das Einzige, was du mit den Morden bewirkst, ist noch mehr Schmerz, wie wir ihn damals erlebt haben. Willst du das anderen Kindern zumuten?",
        T0025: "Glaub mir, ich wollte auch alles und jedem die Schuld geben, aber das geht so nicht.",
        T0026: "Ruby, ich bin vielleicht der Einzige hier der dich versteht. Wir haben beide unsere Väter verloren an diesem Tag.",
        T0027: "NEEIINN!!!",
        T0028: "(zu Patty) Geben Sie mir doch die Waffe!"
      },
      sheriff: {
        T0001: "Genau. Sie lag unter einem der Bäume da vorne.",
        T0002: "...",
        T0003: "Patty, was machen Sie denn hier?",
        T0004: "Sie stören doch keineswegs. Bleiben Sie nur hier, wir sind am Hinweise sammeln.",
        T0005: "Alles klar, wir fangen am besten damit an, nochmal die Spuren hier zu untersuchen. Welche willst du anschauen?",
        T0006: "Ich weiß nicht, ob du hier noch was finden wirst, meine Leute haben so ziemlich alles wichtige schon eingesackt.",
        T0007: "Es tut mir Leid, das ist der Grabstein vom Mörder von deinem Vater...",
        T0008: "Deputy, wo waren Sie? Sie können nicht einfach mitten am Tag abhauen ohne jemandem Bescheid zu sagen!",
        T0009: "Wen möchten Sie denn hier eigentlich besuchen, Deputy?",
        T0010: "Und wer genau?",
        T0011: "Weichen sie nicht meiner Frage aus, Deputy. Was machen Sie hier?",
        T0012: "Guter Scherz Junge aber jetzt sag uns wer der wahre Mörder ist.",
        T0013: "Das ist eine Lüge. Und falls ich mal weg bin, dann um Zeit mit meiner Familie zu verbringen. Ihr seid doch alle verrückt.",
        T0014: "Das ist ein Fehler! Der wahre Mörder ist noch auf freiem Fuß.",
        T0015: "Sag mal, hörst du dir überhaupt zu oder was? Du denkst wirklich, dass Patty so viele Menschen umbringen könnte? Vielleicht war es wirklich ein Fehler, dich dem Fall hinzuzuziehen. Hiermit bist du offziell entlassen. Ich übernehme das ab hier.",
        T0016: "Hände hoch und Waffe fallen lassen!",
        T0017: "Bitte Ruby, ich habe dich damals unter meine Fittiche genommen, weil ich großes Talent in dir sah. Warum tust du das?",
        T0018: "Komm schon, das ist nicht fair",
        T0019: "(zu " + dataForSave.nameProtagonist + ") Ihr Mann war Stan. Er war die Leiche, die hier gefunden wurde.",
        T0020: "Nimm deine Hände hoch, du hast all diese Menschen umgebracht.",
        T0021: "Ruby, letzte Warnung.",
        T0022: "Du weißt, dass ich das nicht kann."
      },
      deputy: {
        T0001: "Was macht ihr hier?",
        T0002: "Ja es tut mir Leid. Heute ist nur der Jahrestag vom Tod von...",
        T0003: "Ähh, ich möchte einen Verwandten besuchen.",
        T0004: "Jemand, der mir sehr wichtig war und der mir zu früh weggenommen wurde.",
        T0005: "Ist ihnen eigentlich aufgefallen, dass Patty eine riesige Perlenkette trägt? Vor dem Tod ihres Mannes hatte sie nie so eine an.",
        T0006: "Das gleiche könnte ich Sie fragen Sheriff? Sie fragen hier einen Bauernjungen, der keine Ahnung von Polizeiarbeit hat nach Hilfe. Für was, um die eigenen Spuren zu verwischen oder was?",
        T0007: "Ja jetzt wo Sie es sagen, der Sheriff war in letzter Zeit öfter weg als sonst.",
        T0008: "Sheriff! Waffe wegwerfen und Hände hoch! Sie sind verhaftet.",
        T0009: "Erzähl das dem Richter",
        T0010: "Hahaha... Ich dachte schon du kommst nie drauf! Damals hat dein Vater meinen Vater kaltblütig ermordet! Er wollte nur für mich Sorgen! Er wollte nie jemanden verletzen. Nur das Geld und abhauen. Aber dein Vater hat alles ruiniert! Ich bin bei dem Zahnarzt und seiner Familie untergekommen. Wie der letzte Dreck haben die mich behandelt. Also hab ich irgendwann das Zahnarztequipment geschnappt und sie einen nach dem anderen getötet.",
        T0011: "Ich, vielleicht aber wag es nicht meinen Vater einen Mörder zu nennen. Er war ein Held.",
        T0012: "Worüber denn? Dass dein Vater meinen ermordet hat?",
        T0013: "Du verstehst gar nichts. Eigentlich wollte ich mir deinen Tod für später aufheben, aber was solls?",
        T0014: "Halt dich da raus, alter Mann!",
        T0015: "Oh ja du bist ja so tooolll. Und wo warst du damals, als ich ein Kind war?",
        T0016: "Ich habe nichts mehr zu sagen.",
        T0017: "Ahh es reicht mir jetzt!",
        T0018: "Oh nein so leicht mach ich es dir nicht",
        T0019: "Unschuldig? Ihr seid alle Schuld am Tod meines Vater, dein Vater besonders",
        T0020: "(unter Tränen) Aber was soll ich denn machen? Ich kann die Dinge nicht ungeschehen machen. Ich wollte nur Rache dafür, was mir angetan wurde.",
        T0021: "Und ich bin dann nach Jamestown gekommen, wo mein Leben die Hölle war. Kannst du mich immer noch verstehen? Mhh?",
        T0022: "Auch von mir die letzte Warnung, alter Mann. Lass mich einfach gehen.",
        T0023: "Ihre Zähne habe ich als Trophäen behalten, weil er das auch mit seinen Patienten gemacht hat. Das stand nicht in deiner tollen Zeitung was? Und dann bin ich zurück hierher gekommen und Deputy geworden. Niemand hat etwas geahnt als ich angefangen habe, mich an diesem Ort zu rächen für das was ihr mir angetan habt."
      },
      patty: {
        T0001: "(weinend) Oh hallo Sheriff, es tut mir Leid falls ich störe, ich wollte mich nur nochmal von meinem Stan verabschieden.",
        T0002: "Ich wusste von Anfang an, dass etwas mit ihr nicht stimmt. Hier, mein Junge, nimm meine Waffe."
      },
      narration: {
        N0001: "Patty nickt in die Richtung von " + dataForSave.nameProtagonist + ".",
        N0002: "Am Tor findet " + dataForSave.nameProtagonist + " nur einen Hammer, der im Gras liegt.",
        N0003: "Die Grabsteine sind alt und nur schwer zu lesen. Bis auf ein paar bekannte Name fällt " + dataForSave.nameProtagonist + " nichts ungewöhnliches auf, bis...",
        N0004: "Mit Kloß in der Brust tritt " + dataForSave.nameProtagonist + " vor das Grab. Er kann einen Namen erkennen. Randy Sawyer. Irgendwo hat er diesen Namen schonmal gehört. Plötzlich ertönt eine Stimme hinter ihm.",
        N0005: "Als " + dataForSave.nameProtagonist + " sich umdreht, sieht er Deputy mit Blumen in der Hand vor sich stehen. ",
        N0006: dataForSave.nameProtagonist + " deutet auf die Blumen.",
        N0007: "Nachdem der Sheriff im Gefängnis gelandet ist, hören die Morde für ein paar Wochen auf. Doch als sich der Staub gelegt hat, fangen sie wieder an. Noch schlimmer und brutaler als zuvor. " + dataForSave.nameProtagonist + " sieht seinen Irrtum ein und versucht den Sheriff aus dem Gefängnis zu holen. Doch an dem Tag, als er das versuchen möchte, geschieht es. Es erwischt ihn auf seinem Hof, gerade als er die Pferde füttern möchte. Das neueste Opfer des Mörders ist " + dataForSave.nameProtagonist + ".",
        N0008: "Nachdem " + dataForSave.nameProtagonist + " vom Fall abgezogen wurde, wurden 3 weitere Menschen getötet. Der Sheriff und seine Leute bleiben ratlos.",
        N0009: "Deputy wirft die Blumen in ihrer Hand auf den Sheriff und stürmt auf " + dataForSave.nameProtagonist + " zu.",
        N0010: "Wie aus einem Reflex heraus, zieht " + dataForSave.nameProtagonist + " den einzigen Gegenstand, den er an sich trägt, und schwingt ihn in einem großen Bogen. Der Hammer trifft Deputy genau an der Schläfe und sie sackt zusammen.",
        N0011: "Der Sheriff eilt auft sie zu, aber sie hat bereits zu viel Blut verloren.",
        N0012: "Als Deputy " + dataForSave.nameProtagonist + " erreicht fallen beide zu Boden.",
        N0013: "Mit diesen Worten greift Deputy nach ihrem Revolver und will ihn auf " + dataForSave.nameProtagonist + " richten, doch in diesem Moment.",
        N0014: "Abgelenkt vom Gespräch, bekommt Deputy nicht mit, dass " + dataForSave.nameProtagonist + " sich heimlich davongerobbt hat. Hinter einem Baum steht er auf und bemerkt, dass dort Patty in Deckung ist.",
        N0015: "Sie zieht eine Waffe aus einem Holster unter ihrem Rock und will sie " + dataForSave.nameProtagonist + " überreichen.",
        N0016: "Ruby gibt sich geschlagen. Sie wirft ihre Waffe weg und lässt sich ohne Worte vom Sheriff festnehmen. Während der Sheriff Ruby wegführt, steht " + dataForSave.nameProtagonist + " nur still daneben und sieht zu. Nach einer Weile setzt aber doch die Erleichterung ein, dass die Stadt nun endlich wieder sicher ist.",
        N0017: "Mit einem Schrei schießt Deputy ihre Waffe in Richtung Sheriff ab. Die Kugel trifft genau oberhalb des Gürtels in den Bauch des Sheriffs. Vor Schmerzen keuchend bricht dieser zusammen.",
        NH: "Hinweispunkte + 1",
        NI001: "Hammer ins Inventar gepackt"
      }
    };

    let lookAtChoice = {
      grave: "Grabsteine",
      tree: "Baum",
      gate: "Friedhoftor"
    };

    let useHammerChoice = {
      use: "Hammer benutzen",
      dont: "Hammer nicht benutzen"
    };

    let useGunChoice = {
      take: "Waffe nehmen",
      dont: "Waffe nicht nehmen"
    };

    let dialogChoice = {
      understand: "Ich verstehe dich",
      sorry: "Es tut mir Leid"
    };

    let duelChoice = {
      shoot: "Schießen",
      dont: "Nicht schießen"
    };

    let pickedUpHammer: boolean = true;
    
    ƒS.Speech.hide();

    await ƒS.Location.show(locations.chapter3);
    await ƒS.update(5);
    ƒS.Sound.play(sound.west, 0.1, true);

    await ƒS.Location.show(locations.graveyard);
    await ƒS.update(transitions.middleslider.duration, transitions.middleslider.alpha, transitions.middleslider.edge);

    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.normal, ƒS.positionPercent(80, 90));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0001);

    await ƒS.Character.show(characters.sheriff, characters.sheriff.pose.normal, ƒS.positionPercent(20, 90));
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0001);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0002);
    await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0002);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0003);

    await ƒS.Character.animate(characters.sheriff, characters.sheriff.pose.normal, moveLeftCharAnimation());
    await ƒS.Character.show(characters.patty, characters.patty.pose.normal, ƒS.positionPercent(30, 90));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0003);
    await ƒS.Speech.tell(characters.patty, text.patty.T0001);
    await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0004);
    await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0019);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0004);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0005);
    await ƒS.Speech.tell("", text.narration.N0001, true, "italic");
    await ƒS.Character.hide(characters.patty);
    await ƒS.update(1);
    await ƒS.Character.animate(characters.sheriff, characters.sheriff.pose.normal, moveLeftCharBackAnimation());
    await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0005);

    let lookAtChoiceElement = await ƒS.Menu.getInput(lookAtChoice, "choices");

    switch (lookAtChoiceElement) {
      case lookAtChoice.grave:
        break;
      case lookAtChoice.tree:
        await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0006);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0007);
        break;
      case lookAtChoice.gate:
        await ƒS.Speech.tell("", text.narration.N0002, true, "italic");
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0006);
        ƒS.Inventory.add(items.hammer);
        await ƒS.Speech.tell("", text.narration.NI001, true, "italic");
        pickedUpHammer = true;
        break;
    }

    await ƒS.Speech.tell("", text.narration.N0003, true, "italic");
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0008);
    await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0007);
    await ƒS.Speech.tell("", text.narration.N0004, true, "italic");
    await ƒS.Character.animate(characters.sheriff, characters.sheriff.pose.normal, moveLeftCharAnimation());
    await ƒS.Character.show(characters.deputy, characters.deputy.pose.normal, ƒS.positionPercent(30, 90));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.deputy, text.deputy.T0001);

    if (dataForSave.chapter2Accused === "deputy") {
      await ƒS.Speech.tell("", text.narration.N0005, true, "italic");
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0009);
      await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0008);
      await ƒS.Speech.tell(characters.deputy, text.deputy.T0002);
      await ƒS.Speech.tell("", text.narration.NH, true, "italic");
      dataForSave.cluePoints += 1;
    }
    else {
      await ƒS.Speech.tell("", text.narration.N0005, true, "italic");
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0010);
      await ƒS.Speech.tell("", text.narration.N0006, true, "italic");
      await ƒS.Speech.tell(characters.deputy, text.deputy.T0003);
    }

    await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0009);
    await ƒS.Speech.tell(characters.deputy, text.deputy.T0004);
    await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0010);
    await ƒS.Speech.tell(characters.deputy, text.deputy.T0005);
    await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0011);
    await ƒS.Speech.tell(characters.deputy, text.deputy.T0006);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0011);

    
    let accused: string = "";

    let current: number = 0;
    let choice = { back: "Vorherige Seite", buy_clue: "Neuen Hinweis kaufen", next: "Nächste Seite", accuse: "Beschuldigen" };
    let choiceNoBuy = { back: "Vorherige Seite", next: "Nächste Seite", accuse: "Beschuldigen" };
    let accusation = { patty: "Patty beschuldigen", sheriff: "Sheriff beschuldigen", deputy: "Deputy beschuldigen" };

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
              case accusation.patty: 
                ƒS.Sound.play(sound.accuse, 0.2, false);
                accused = "patty";
                break;
              case accusation.sheriff: 
                ƒS.Sound.play(sound.accuse, 0.2, false);
                accused = "sheriff";
                break;
              case accusation.deputy: 
                ƒS.Sound.play(sound.accuse, 0.2, false);
                accused = "deputy";
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
              case accusation.patty: 
                ƒS.Sound.play(sound.accuse, 0.2, false);
                accused = "patty";
                break;
              case accusation.sheriff: 
                ƒS.Sound.play(sound.accuse, 0.2, false);
                accused = "sheriff";
                break;
              case accusation.deputy: 
                ƒS.Sound.play(sound.accuse, 0.2, false);
                accused = "deputy";
                break;
            }
            break;
        }
      }
    } while (accused === "");
    ƒS.Text.close();

    if (accused === "patty") {
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0014);
      await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0015);
      await ƒS.Character.hide(characters.deputy);
      await ƒS.Character.hide(characters.protagonist);
      await ƒS.Character.hide(characters.sheriff);
      await ƒS.update(1);
      await ƒS.Speech.tell("", text.narration.N0008, true, "italic");
      ƒS.Speech.clear();
      ƒS.Speech.hide();
      ƒS.Sound.fade(sound.west, 0, 0.5, false);
      await ƒS.Location.show(locations.black);
      await ƒS.update(2);
      return "medium_ending_free";
    }
    else if (accused === "sheriff") {
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0012);
      await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0012);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0013);
      await ƒS.Speech.tell(characters.deputy, text.deputy.T0007);
      await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0013);
      await ƒS.Speech.tell(characters.deputy, text.deputy.T0008);
      await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0014);
      await ƒS.Speech.tell(characters.deputy, text.deputy.T0009);

      await ƒS.Character.hide(characters.deputy);
      await ƒS.Character.hide(characters.protagonist);
      await ƒS.Character.hide(characters.sheriff);
      await ƒS.update(1);
      await ƒS.Speech.tell("", text.narration.N0007, true, "italic");
      ƒS.Speech.clear();
      ƒS.Speech.hide();
      ƒS.Sound.fade(sound.west, 0, 0.5, false);
      await ƒS.Location.show(locations.black);
      await ƒS.update(2);
      return "bad_ending";
    }
    else {
      ƒS.Sound.fade(sound.west, 0, 0.5, false);
      ƒS.Sound.play(sound.action, 0.1, true);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0015);
      await ƒS.Character.hide(characters.deputy);
      await ƒS.Character.show(characters.deputy, characters.deputy.pose.evil, ƒS.positionPercent(30, 90));
      await ƒS.update(0.5);
      await ƒS.Speech.tell(characters.deputy, text.deputy.T0010);
      await ƒS.Speech.tell(characters.deputy, text.deputy.T0023);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0016);
      await ƒS.Speech.tell(characters.deputy, text.deputy.T0011);
      await ƒS.Speech.tell("", text.narration.N0009, true, "italic");

      if (pickedUpHammer) {
        let useHammerChoiceElement = await ƒS.Menu.getInput(useHammerChoice, "choices");
        switch (useHammerChoiceElement) {
          case useHammerChoice.use:
            await ƒS.Speech.tell("", text.narration.N0010, true, "italic");
            await ƒS.Character.animate(characters.deputy, characters.deputy.pose.evil, hitMiddleCharAnimation());
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0017);
            await ƒS.Speech.tell("", text.narration.N0011, true, "italic");

            await ƒS.Character.hide(characters.deputy);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.Character.hide(characters.sheriff);
            await ƒS.update(1);
            ƒS.Speech.clear();
            ƒS.Speech.hide();
            ƒS.Sound.fade(sound.action, 0, 0.5, false);
            await ƒS.Location.show(locations.black);
            await ƒS.update(2);
            return "medium_ending_killer";
          case useHammerChoice.dont:
            break;
        }
      }
    }

    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0018);
    await ƒS.Speech.tell("", text.narration.N0012, true, "italic");
    await ƒS.Speech.tell(characters.deputy, text.deputy.T0012);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0019);
    await ƒS.Speech.tell(characters.deputy, text.deputy.T0013);
    await ƒS.Speech.tell("", text.narration.N0013, true, "italic");
    await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0016);
    await ƒS.Speech.tell(characters.deputy, text.deputy.T0014);
    await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0017);
    await ƒS.Speech.tell(characters.deputy, text.deputy.T0015);
    await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0018);
    await ƒS.Speech.tell("", text.narration.N0014, true, "italic");

    await ƒS.Character.hide(characters.deputy);
    await ƒS.Character.hide(characters.sheriff);
    await ƒS.update(1);

    await ƒS.Character.show(characters.patty, characters.patty.pose.normal, ƒS.positionPercent(20, 90));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.patty, text.patty.T0002);
    await ƒS.Speech.tell("", text.narration.N0015, true, "italic");

    let useGunChoiceElement = await ƒS.Menu.getInput(useGunChoice, "choices");

    switch (useGunChoiceElement) {
      case useGunChoice.take:
        await ƒS.Character.hide(characters.patty);
        await ƒS.update(1);
        await ƒS.Character.show(characters.deputy, characters.deputy.pose.evil, ƒS.positionPercent(20, 90));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0022);
        await ƒS.Speech.tell(characters.deputy, text.deputy.T0018);

        let duelChoiceElement = await ƒS.Menu.getInput(duelChoice, "choices");
        
        switch (duelChoiceElement) {
          case duelChoice.shoot:
            ƒS.Sound.play(sound.gun, 0.2, false);
            await ƒS.Character.hide(characters.deputy);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.Character.hide(characters.sheriff);
            await ƒS.update(1);
            ƒS.Speech.clear();
            ƒS.Speech.hide();
            ƒS.Sound.fade(sound.action, 0, 0.5, false);
            await ƒS.Location.show(locations.black);
            await ƒS.update(2);
            return "medium_ending_killer";
          case duelChoice.dont:
            await ƒS.Character.hide(characters.deputy);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.Character.hide(characters.sheriff);
            await ƒS.update(1);
            ƒS.Speech.clear();
            ƒS.Speech.hide();
            ƒS.Sound.fade(sound.action, 0, 0.5, false);
            await ƒS.Location.show(locations.black);
            await ƒS.update(2);
            return "bad_ending";
        }
        break;
      case useGunChoice.dont:
        await ƒS.Character.hide(characters.patty);
        await ƒS.update(1);
        await ƒS.Character.show(characters.sheriff, characters.sheriff.pose.normal, ƒS.positionPercent(30, 90));
        await ƒS.Character.show(characters.deputy, characters.deputy.pose.evil, ƒS.positionPercent(15, 90));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0020);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0021);
        await ƒS.Speech.tell(characters.deputy, text.deputy.T0016);
        await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0020);
        await ƒS.Speech.tell(characters.deputy, text.deputy.T0017);

        let dialogChoiceElement = await ƒS.Menu.getInput(dialogChoice, "choices");
        
        switch (dialogChoiceElement) {
          case dialogChoice.sorry:
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0023);
            await ƒS.Speech.tell(characters.deputy, text.deputy.T0019);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0024);
            await ƒS.Speech.tell(characters.deputy, text.deputy.T0020);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0025);
            await ƒS.Speech.tell("", text.narration.N0016, true, "italic");
            await ƒS.Character.hide(characters.deputy);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.Character.hide(characters.sheriff);
            await ƒS.update(1);
            ƒS.Speech.clear();
            ƒS.Speech.hide();
            ƒS.Sound.fade(sound.action, 0, 0.5, false);
            await ƒS.Location.show(locations.black);
            await ƒS.update(2);
            return "good_ending";
          case dialogChoice.understand:
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0026);
            await ƒS.Speech.tell(characters.deputy, text.deputy.T0021);
            await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0021);
            await ƒS.Speech.tell(characters.deputy, text.deputy.T0022);
            await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0022);
            await ƒS.Speech.tell("", text.narration.N0016, true, "italic");
            await ƒS.Character.animate(characters.sheriff, characters.sheriff.pose.normal, hitMiddleCharAnimation());
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0027);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0028);
            await ƒS.Character.hide(characters.sheriff);
            await ƒS.Character.animate(characters.deputy, characters.deputy.pose.evil, moveLeftCharBackAnimation());
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0022);
            await ƒS.Speech.tell(characters.deputy, text.deputy.T0018);

            let duelChoiceElement = await ƒS.Menu.getInput(duelChoice, "choices");
            
            switch (duelChoiceElement) {
              case duelChoice.shoot:
                ƒS.Sound.play(sound.gun, 0.2, false);
                await ƒS.Character.hide(characters.deputy);
                await ƒS.Character.hide(characters.protagonist);
                await ƒS.Character.hide(characters.sheriff);
                await ƒS.update(1);
                ƒS.Speech.clear();
                ƒS.Speech.hide();
                ƒS.Sound.fade(sound.action, 0, 0.5, false);
                await ƒS.Location.show(locations.black);
                await ƒS.update(2);
                return "medium_ending_killer";
              case duelChoice.dont:
                await ƒS.Character.hide(characters.deputy);
                await ƒS.Character.hide(characters.protagonist);
                await ƒS.Character.hide(characters.sheriff);
                await ƒS.update(1);
                ƒS.Speech.clear();
                ƒS.Speech.hide();
                ƒS.Sound.fade(sound.action, 0, 0.5, false);
                await ƒS.Location.show(locations.black);
                await ƒS.update(2);
                return "bad_ending";
            }
            break;
        }
        break;
    }
  }
}