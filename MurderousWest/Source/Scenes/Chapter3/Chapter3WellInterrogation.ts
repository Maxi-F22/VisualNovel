namespace Game {
    export async function Chapter3WellInterrogation(): ƒS.SceneReturn {
  
      let text = {
        protagonist: {
          T0001: "Hallo Jenkins! Wie gehts dir und deinem neuen Pferd?",
          T0002: "Ich würde dir auch noch gerne ein paar Fragen stellen wenn es dir nichts ausmacht.",
          T0003: "Ja aber es muss sein. Warum warst du überhaupt hier?",
          T0004: "Ach ja? Zu mir hast du gesagt, dein Lieblingsplatz ist der alte Baumstumpf.",
          T0005: "Naja, du weißt doch, dass das hier mein liebster Ort zum Entspannen ist. Ich hab dir das schon oft erzählt, als du bei mir zum Hufeisen aufsetzen warst und da ist dir nie in den Sinn gekommen zu erwähnen, dass du auch gern herkommst.",
          T0006: "(zu Sheriff) Ich glaube nach wie vor nicht, dass er wirklich etwas damit zu tun hat. Es ist immerhin Jenkins. Der kann keiner Fliege was anhaben.",
          T0007: "Ich hatte dich vorhin schon im Verdacht Jenkins, aber jetzt da du dich so verhältst, wirst du immer verdächtiger!",
          T0008: "Du hast ja Recht Jenkins. Du warst halt einfach zur falschen Zeit am falschen Ort.",
          T0009: "Genug jetzt. Ich glaube ich habe genug gehört!",
          T0010: "Es war der alte Jenkins hier. Er hat das Equipment um die Zähne zu ziehen und er hat gelogen, was er hier am Brunnen macht.",
          T0011: "Es war... der Sheriff selbst.",
          T0012: "Es macht Sinn. Du benutzt deinen Deckmantel als Sheriff um die Morde zu begehen und sie zu vertuschen. Ich bin mir sicher.",
          T0013: "Deputy! Sie selbst sind die Mörderin. Jetzt ist mir alles klar. Als ich hörte, dass Sie adoptiert sind kam ich ins stutzen. Ich dachte immer, sie sind von hier aus dem Dorf. Aber sie wurden adoptiert und von einem Zahnarzt drüben in Jamestown aufgezogen. Ich habe darüber in der Zeitung gelesen. Sie sind die Tochter von dem Mann, der damals meinen Vater...",
          T0014: "Das was dein Vater getan hat, was du getan hast... Ihr seid beide Mörder!",
          T0015: "Ich verstehe, was du durchmachst. Als mein Vater starb, wollte ich auch alles und jeden dafür verantwortlich machen.",
          T0016: "Gib auf, damit wirst du nicht davonkommen. Du bist umzingelt von Polizisten.",
          T0017: "Unsere beiden Väter sind gestorben an diesem Tag. Verbindet uns das nicht irgendwie?"
        },
        sheriff: {
          T0001: "Jenkins, wir wollen nur auf Nummer sicher gehen.",
          T0002: "Jenkins, das Ganze hier sieht gerade ziemlich schlecht für dich aus. Du spuckst besser aus was du hier gemacht hast.",
          T0003: "(zu " + dataForSave.nameProtagonist + ") Du hast ja Recht. Und es ist schon sehr verdächtigt, dass der Deputy so lange unterwegs ist ohne Bescheid zu sagen, wo sie ist.",
          T0004: "Ok immer langsam Jenkins, was soll das werden?",
          T0005: "Deputy, wo waren Sie?",
          T0006: "Ach ist das so? Was für einer Spur?",
          T0007: "Und haben Sie etwas herausgefunden?",
          T0008: "Was wollen Sie denn damit andeuten? Das ist locker schon 20 Jahre her. Und außerdem ist ihr eigener Adoptivvater doch Zahnarzt.",
          T0009: "Und was haben Sie damit vor?",
          T0010: "Sie wissen aber, dass das illegal ist. Sie kommen hinter Gittern, egal ob Sie nun der Mörder sind oder nicht.",
          T0011: "Guter Scherz Junge aber jetzt sag uns wer der wahre Mörder ist.",
          T0012: "Das ist eine Lüge. Und falls ich mal weg bin, dann um Zeit mit meiner Familie zu verbringen. Ihr seid doch alle verrückt.",
          T0013: "Das ist ein Fehler! Der wahre Mörder ist noch auf freiem Fuß.",
          T0014: "Und wer hat deinen Opfern Mitgefühl gezeigt? Du wirst nie mehr das Tageslicht sehen, Ruby."
        },
        jenkins: {
          T0001: "Ich sagte es euch doch schon! Ich komm einfach gerne hierher. Lasst mich doch in Ruhe.",
          T0002: dataForSave.nameProtagonist + ", schön dich zu sehen. Hopper gehts spitze. Ich wollte einfach nur ein bisschen ausreiten, als ich hier am Brunnen eine Leiche entdeckt hab. Und nun lässt mich die Polizei nicht gehen!",
          T0003: "Es macht mir aber was aus. Ich will jetzt einfach nur noch von hier verschwinden.",
          T0004: "Das hier ist mein Lieblingsplatz in der Umgebung.",
          T0005: "Na und? Kann man nicht zwei Lieblingsplätze haben.",
          T0006: "Ähh naja also...",
          T0007: "Beruhigt euch, ich hol nur das raus, weswegen ich hier bin. Das hier ist... ",
          T0008: "Kommt schon, ich bin doch nicht der Mörder! Was für ein Motiv sollte ich denn haben?",
          T0009: "Ja genau. Ich...",
          T0010: "Ja ich mache das bei Tieren. Was würde ich denn mit den Zähnen von Menschen wollen?",
          T0011: "Das ist ja wohl ein Witz. Warum sollte ich das tun? Und was ich euch vorhin zeigen wollte, war das hier.",
          T0012: "Ganz ruhig, das ist Rinderblut.",
          T0013: "Ach, ich wollte es in den Brunnen kippen, wie ich es immer mache."
        },
        deputy: {
          T0001: "Hallo Sheriff. Hallo " + dataForSave.nameProtagonist + ".",
          T0002: "Ich bin einer Spur nachgegangen Sheriff.",
          T0003: "Ähh, ich habe untersucht, wer in der Stadt etwas mit Zähnen zu tun haben könnte. Sie wissen schon, wegen den fehlenden Schneidezähnen und so.",
          T0004: "Naja Sheriff, ich will ja nichts sagen, aber sie wissen, dass in ihrem Haus früher Patienten die Zähne gezogen wurden oder?",
          T0005: "Ja ist ja gut. Was ich noch herausgefunden habe, ist dass der alte Jenkins hier manchmal Kühen und Pferden die Zähne zieht wenn sie Probleme haben.",
          T0006: "Ja jetzt wo Sie es sagen, der Sheriff war in letzter Zeit öfter weg als sonst.",
          T0007: "Sheriff! Waffe wegwerfen und Hände hoch! Sie sind verhaftet.",
          T0008: "Erzähl das dem Richter",
          T0009: "Hahaha... Ich dachte schon du kommst nie drauf! Damals hat dein Vater meinen Vater kaltblütig ermordet! Er wollte nur für mich Sorgen! Er wollte nie jemanden verletzen. Nur das Geld und abhauen. Aber dein Vater hat alles ruiniert! Ich bin bei dem Zahnarzt und seiner Familie untergekommen. Wie der letzte Dreck haben die mich behandelt. Also hab ich irgendwann das Zahnarztequipment geschnappt und sie einen nach dem anderen getötet.",
          T0010: "Ich, vielleicht aber wag es nicht meinen Vater einen Mörder zu nennen. Er war ein Held.",
          T0011: "Du verstehst gar nichts. Was ich in Jamestown durchmachen musste...",
          T0012: "Zumindest einen kann ich ja noch mitnehmen. Dich wollte ich mir für später aufheben. Du bist der Sohn des Mörders meines Vaters. Du muss auch sterben.",
          T0013: "Uns verbindet gar nichts. Was ich in Jamestown durchmachen musste...",
          T0014: "Das hatte ich noch nie... Mitgefühl.",
          T0015: "Ihre Zähne habe ich als Trophäen behalten, weil er das auch mit seinen Patienten gemacht hat. Das stand nicht in deiner tollen Zeitung was? Und dann bin ich zurück hierher gekommen und Deputy geworden. Niemand hat etwas geahnt als ich angefangen habe, mich an diesem Ort zu rächen für das was ihr mir angetan habt."
        },
        narration: {
          N0001: dataForSave.nameProtagonist + " bemerkt, dass Jenkins nun etwas nervös wird.",
          N0002: "Die Beiden werden unterbrochen, als Deputy dazukommt.",
          N0003: "Jenkins greift nach etwas in seiner Jackentasche.",
          N0004: "Jenkins wird unterbrochen als Deputy dazukommt.",
          N0005: "Jenkins holt eine Flasche gefüllt mit Blut hervor. Der Sheriff zieht seine Pistole.",
          N0006: "Nachdem Jenkins ins Gefängnis wandert, hören die Morde auf. Ob er der Mörder war oder nicht, bleibt ungeklärt.",
          N0007: "Nachdem der Sheriff im Gefängnis gelandet ist, hören die Morde für ein paar Wochen auf. Doch als sich der Staub gelegt hat, fangen sie wieder an. Noch schlimmer und brutaler als zuvor. " + dataForSave.nameProtagonist + " sieht seinen Irrtum ein und versucht den Sheriff aus dem Gefängnis zu holen. Doch an dem Tag, als er das versuchen möchte, geschieht es. Es erwischt ihn auf seinem Hof, gerade als er die Pferde füttern möchte. Das neueste Opfer des Mörders ist " + dataForSave.nameProtagonist + ".",
          N0008: "Mit diesen Worten zieht Deputy ihren Revolver und richtet ihn auf " + dataForSave.nameProtagonist + ". " + dataForSave.nameProtagonist + " greift aus Reflex nach dem Revolver des Sheriffs und steht nun dem Deputy gegenüber. Die beiden blicken sich stumm an und warten, wer den ersten Schritt macht.",
          N0009: "Sie wirkt abgelenkt, während sie an ihre Kindheit denkt.",
          N0010: "Sie wirkt abgelenkt, während sie an ihre Kindheit denkt.",
          N0011: "Als sie diese Worte hört, senkt Deputy langsam ihre Waffe, während der Sheriff und alle Polizisten auf sie zustürmen.",
          N0012: "Während der Sheriff Ruby wegführt, steht " + dataForSave.nameProtagonist + " nur still daneben und sieht zu. Nach einer Weile setzt aber doch die Erleichterung ein, dass die Stadt nun endlich wieder sicher ist.",
          N0013: "Der Schuss von " + dataForSave.nameProtagonist + " trifft Deputy genau in die Rippen. Sheriff eilt zu ihr aber die Wunde blutet bereits zu stark."
        }
      };
  
      let confrontChoice = {
        talk: "Versuchen, mit ihr zu reden",
        duel: "Auf Duell einlassen"
      };
  
      let talkChoice = {
        understand: "Ich verstehe, was du durchmachst",
        notgetaway: "Damit wirst du nicht davonkommen"
      };
  
      let sorryOrShootChoice = {
        sorry: "Es tut mir Leid",
        shoot: "SCHIEßEN"
      };

      let duelChoice = {
        shoot: "Schießen",
        dont: "Nicht schießen"
      };
  
      ƒS.Sound.play(sound.west, 0.1, true);
      await ƒS.Speech.tell(characters.jenkins, text.jenkins.T0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0001);
      await ƒS.Speech.tell(characters.jenkins, text.jenkins.T0002);
      await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0002);
      await ƒS.Speech.tell(characters.jenkins, text.jenkins.T0003);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0003);
      await ƒS.Speech.tell(characters.jenkins, text.jenkins.T0004);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0004);
      await ƒS.Speech.tell(characters.jenkins, text.jenkins.T0005);
      await ƒS.Speech.tell("", text.narration.N0001, true, "italic");
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0005);
      await ƒS.Speech.tell(characters.jenkins, text.jenkins.T0006);
      await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0002);

      if (dataForSave.chapter2Accused === "deputy") {
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0006);
        await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0003);
        await ƒS.Speech.tell("", text.narration.N0002, true, "italic");
      }
      else if (dataForSave.chapter2Accused === "jenkins") {
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0007);
        await ƒS.Speech.tell("", text.narration.N0003, true, "italic");
        await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0004);
        await ƒS.Speech.tell(characters.jenkins, text.jenkins.T0007);
        await ƒS.Speech.tell("", text.narration.N0004, true, "italic");
      }
      else {
        await ƒS.Speech.tell(characters.jenkins, text.jenkins.T0008);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0008);
        await ƒS.Speech.tell(characters.jenkins, text.jenkins.T0009);
        await ƒS.Speech.tell("", text.narration.N0004, true, "italic");
      }
  
      await ƒS.Character.show(characters.deputy, characters.deputy.pose.normal, ƒS.positionPercent(45, 90));
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.deputy, text.deputy.T0001);
      await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0005);
      await ƒS.Speech.tell(characters.deputy, text.deputy.T0002);
      await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0006);
      await ƒS.Speech.tell(characters.deputy, text.deputy.T0003);
      await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0007);
      await ƒS.Speech.tell(characters.deputy, text.deputy.T0004);
      await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0008);
      await ƒS.Speech.tell(characters.deputy, text.deputy.T0005);
      await ƒS.Speech.tell(characters.jenkins, text.jenkins.T0010);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0009);

      let accused: string = "";

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
                  ƒS.Sound.play(sound.accuse, 0.2, false);
                  accused = "jenkins";
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
                case accusation.jenkins: 
                  ƒS.Sound.play(sound.accuse, 0.2, false);
                  accused = "jenkins";
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

      if (accused === "jenkins") {
        await ƒS.Character.hide(characters.deputy);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0010);
        await ƒS.Speech.tell(characters.jenkins, text.jenkins.T0011);
        await ƒS.Speech.tell("", text.narration.N0005, true, "italic");
        await ƒS.Speech.tell(characters.jenkins, text.jenkins.T0012);
        await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0009);
        await ƒS.Speech.tell(characters.jenkins, text.jenkins.T0013);
        await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0010);

        await ƒS.Character.hide(characters.protagonist);
        await ƒS.Character.hide(characters.sheriff);
        await ƒS.Character.hide(characters.jenkins);
        await ƒS.update(1);
        await ƒS.Speech.tell("", text.narration.N0006, true, "italic");
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Sound.fade(sound.west, 0, 0.5, false);
        ƒS.Sound.fade(sound.well, 0, 0.5, false);
        await ƒS.Location.show(locations.black);
        await ƒS.update(2);
        return "medium_ending_unsolved";
      }
      else if (accused === "sheriff") {
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0011);
        await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0011);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0012);
        await ƒS.Speech.tell(characters.deputy, text.deputy.T0006);
        await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0012);
        await ƒS.Speech.tell(characters.deputy, text.deputy.T0007);
        await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0013);
        await ƒS.Speech.tell(characters.deputy, text.deputy.T0008);

        await ƒS.Character.hide(characters.deputy);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.Character.hide(characters.sheriff);
        await ƒS.Character.hide(characters.jenkins);
        await ƒS.update(1);
        await ƒS.Speech.tell("", text.narration.N0002, true, "italic");
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Sound.fade(sound.west, 0, 0.5, false);
        ƒS.Sound.fade(sound.well, 0, 0.5, false);
        await ƒS.Location.show(locations.black);
        await ƒS.update(2);
        return "bad_ending";
      }
      else {
        ƒS.Sound.fade(sound.west, 0, 0.5, false);
        ƒS.Sound.play(sound.action, 0.1, true);
        await ƒS.Character.hide(characters.jenkins);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0013);
        await ƒS.Speech.tell(characters.deputy, text.deputy.T0009);
        await ƒS.Speech.tell(characters.deputy, text.deputy.T0015);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0014);
        await ƒS.Speech.tell(characters.deputy, text.deputy.T0010);
        await ƒS.Speech.tell("", text.narration.N0002, true, "italic");
      
        let confrontChoiceElement = await ƒS.Menu.getInput(confrontChoice, "choices");
    
        switch (confrontChoiceElement) {
          case confrontChoice.talk:
        
            let talkChoiceElement = await ƒS.Menu.getInput(talkChoice, "choices");
            
            switch (talkChoiceElement) {
              case talkChoice.understand:

                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0015);
                await ƒS.Speech.tell(characters.deputy, text.deputy.T0011);
                await ƒS.Speech.tell("", text.narration.N0009, true, "italic");

                let sorryOrShootChoiceElement1 = await ƒS.Menu.getInput(sorryOrShootChoice, "choices");
        
                switch (sorryOrShootChoiceElement1) {
                  case sorryOrShootChoice.sorry:
                    await ƒS.Speech.tell("", text.narration.N0011, true, "italic");
                    await ƒS.Speech.tell(characters.deputy, text.deputy.T0014);
                    await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0014);
                    await ƒS.Speech.tell("", text.narration.N0012, true, "italic");
                    await ƒS.Character.hide(characters.deputy);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.Character.hide(characters.sheriff);
                    await ƒS.update(1);
                    ƒS.Speech.clear();
                    ƒS.Speech.hide();
                    ƒS.Sound.fade(sound.well, 0, 0.5, false);
                    ƒS.Sound.fade(sound.action, 0, 0.5, false);
                    await ƒS.Location.show(locations.black);
                    await ƒS.update(2);
                    return "good_ending";
                  case sorryOrShootChoice.shoot:
                    ƒS.Sound.play(sound.gun, 0.2, false);
                    await ƒS.Speech.tell("", text.narration.N0013, true, "italic");
                    await ƒS.Character.hide(characters.deputy);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.Character.hide(characters.sheriff);
                    await ƒS.update(1);
                    ƒS.Speech.clear();
                    ƒS.Speech.hide();
                    ƒS.Sound.fade(sound.well, 0, 0.5, false);
                    ƒS.Sound.fade(sound.action, 0, 0.5, false);
                    await ƒS.Location.show(locations.black);
                    await ƒS.update(2);
                    return "medium_ending_killer";
                }
                break;
              case talkChoice.notgetaway:

                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0016);
                await ƒS.Speech.tell(characters.deputy, text.deputy.T0012);
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0017);
                await ƒS.Speech.tell(characters.deputy, text.deputy.T0013);
                await ƒS.Speech.tell("", text.narration.N0010, true, "italic");

                let sorryOrShootChoiceElement2 = await ƒS.Menu.getInput(sorryOrShootChoice, "choices");
        
                switch (sorryOrShootChoiceElement2) {
                  case sorryOrShootChoice.sorry:
                    await ƒS.Speech.tell("", text.narration.N0011, true, "italic");
                    await ƒS.Speech.tell(characters.deputy, text.deputy.T0014);
                    await ƒS.Speech.tell(characters.sheriff, text.sheriff.T0014);
                    await ƒS.Speech.tell("", text.narration.N0012, true, "italic");
                    await ƒS.Character.hide(characters.deputy);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.Character.hide(characters.sheriff);
                    await ƒS.update(1);
                    ƒS.Speech.clear();
                    ƒS.Speech.hide();
                    ƒS.Sound.fade(sound.well, 0, 0.5, false);
                    ƒS.Sound.fade(sound.action, 0, 0.5, false);
                    await ƒS.Location.show(locations.black);
                    await ƒS.update(2);
                    return "good_ending";
                  case sorryOrShootChoice.shoot:
                    ƒS.Sound.play(sound.gun, 0.2, false);
                    await ƒS.Speech.tell("", text.narration.N0013, true, "italic");
                    await ƒS.Character.hide(characters.deputy);
                    await ƒS.Character.hide(characters.protagonist);
                    await ƒS.Character.hide(characters.sheriff);
                    await ƒS.update(1);
                    ƒS.Speech.clear();
                    ƒS.Speech.hide();
                    ƒS.Sound.fade(sound.well, 0, 0.5, false);
                    ƒS.Sound.fade(sound.action, 0, 0.5, false);
                    await ƒS.Location.show(locations.black);
                    await ƒS.update(2);
                    return "medium_ending_killer";
                }
                break;
            }
            break;
          case confrontChoice.duel:

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
                ƒS.Sound.fade(sound.well, 0, 0.5, false);
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
                ƒS.Sound.fade(sound.well, 0, 0.5, false);
                ƒS.Sound.fade(sound.action, 0, 0.5, false);
                await ƒS.Location.show(locations.black);
                await ƒS.update(2);
                return "bad_ending";
            }
            break;
        }
      }
    }
  }