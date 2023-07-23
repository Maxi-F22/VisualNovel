namespace Game {
  export async function Dream(): ƒS.SceneReturn {

    let text = {
      father: {
        T0001: "Hände hoch! Sie sind umzingelt!",
        T0002: "Ach ja? Und warum nicht?",
        T0003: "Es muss niemand sterben! Was wollen Sie genau?",
        T0004: "(zu seinen Kollegen) Es bleibt uns nichts anderes übrig, als ihm zu gehorchen. Es darf niemand sterben!",
        T0005: "(zu Bankräuber) Na schön. Wir lassen Sie wegreiten. Was passiert mit der Geisel?",
        T0006: "Das Ganze wird nicht gut für Sie ausgehen. Ergeben Sie sich einfach.",
        T0007: "Ahhh...",
        T0008: "Bringt mich zum Doktor! Ich muss noch so viel erledigen. Mein Sohn... Seine Gabe... Er... soll sie nutzen um Gutes zu bewirken..."
      },
      evilguy: {
        T0001: "Pah! Ich glaube nicht, dass ihr wirklich auf mich schießen werdet ihr Schweine.",
        T0002: "Ich habe hier vier Menschen hinter dem Tresen sitzen und wenn ihr auch nur in die Nähe dieser Bank kommt, werde ich sie Einen nach dem Anderen abknallen!",
        T0003: "Ich will das ganze Geld aus dem Tresor in meinen Sack packen. Dann werde ich zusammen mit dem Geld und einer Geisel auf mein Pferd sitzen und in Richtung Osten verschwinden. Solltet ihr mir folgen, stirbt die Geisel.",
        T0004: "Ich sehe Sie sind vernünftig, Sheriff. Die Geisel werde ich am alten Brunnen gehen lassen. Aber falls ihr dort auf mich wartet, wisst ihr was passiert.",
        T0005: "Ach verdammt. Komm sofort wieder hier hoch du Mistkerl.",
        T0006: "Sie wissen gar nichts über mich Sheriff. Ich muss das hier tun. Meine Kleine..."
      },
      police: {
        T0001: "Es tut mir so Leid Junge, dein Vater... Er... Er ist an seinen Verletzungen auf dem Weg zum Arzt gestorben. Das letzte, was er sagte war..."
      },
      narration: {
        N0001: "Der Bankräuber folgt seinem Plan und beginnt mit der Geisel nach Osten zu reiten. Nach 100 Metern passiert jedoch etwas unerwartetes. Die Geisel zappelt so auf dem Pferd herum dass sie schließlich auf den Boden fällt und von dem Bankräuber wegrollt.",
        N0002: "Doch genau auf so eine Situation haben der Sheriff und seine Leute gewartet. Sie warten bis die Geisel weit genug weg ist und fangen an, auf den Bankräuber zu schießen. Dieser springt von seinem Pferd ab und sucht Deckung hinter einer nahgelegen Mauer.",
        N0003: "Verzweifelt beginnt der Bankräuber zurückzuschießen. Er liefert sich einen heftigen Schusswechsel mit den Polizisten bis schließlich...",
        N0004: "Ein Schuss des Bankräuber trifft den Sheriff genau über seinem Abzeichen in die Brust. Vor Schmerzen zuckend, schießt der Sheriff noch ein letztes Mal seinen Revolver bevor er zusammensackt.",
        N0005: "Stille...",
        N0006: "Von beiden Seiten ertönen keine Schüsse mehr. Während drei der Polizisten sich um ihren Sheriff kümmern, gehen zwei andere nachsehen, was mit dem Bankräuber passiert ist. Als sie hinter die Mauer sehen, liegt er da, in einer Blutlache. Der letzte Schuss des Sheriffs hat ihn genau zwischen die Augen getroffen.",
        N0007: "Später..."
      }
    };

    ƒS.Speech.hide();

    ƒS.Sound.play(sound.dream, 0.1, true);

    await ƒS.Location.show(locations.dream);
    await ƒS.update(transitions.spiralslider.duration, transitions.spiralslider.alpha, transitions.spiralslider.edge);

    await ƒS.Character.show(characters.father, characters.father.pose.normal, ƒS.positionPercent(20, 90));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.father, text.father.T0001);

    await ƒS.Character.show(characters.evilguy, characters.evilguy.pose.normal, ƒS.positionPercent(80, 90));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.evilguy, text.evilguy.T0001);

    await ƒS.Speech.tell(characters.father, text.father.T0002);
    await ƒS.Speech.tell(characters.evilguy, text.evilguy.T0002);
    await ƒS.Speech.tell(characters.father, text.father.T0003);
    await ƒS.Speech.tell(characters.evilguy, text.evilguy.T0003);
    await ƒS.Speech.tell(characters.father, text.father.T0004);
    await ƒS.Speech.tell(characters.father, text.father.T0005);
    await ƒS.Speech.tell(characters.evilguy, text.evilguy.T0004);

    await ƒS.Speech.tell("", text.narration.N0001, true, "italic");
    await ƒS.Speech.tell(characters.evilguy, text.evilguy.T0005);
    await ƒS.Speech.tell("", text.narration.N0002, true, "italic");
    await ƒS.Speech.tell(characters.father, text.father.T0006);
    await ƒS.Speech.tell(characters.evilguy, text.evilguy.T0006);
    await ƒS.Speech.tell("", text.narration.N0003, true, "italic");
    await ƒS.Speech.tell(characters.father, text.father.T0007);
    ƒS.Sound.play(sound.gun, 0.2, false);
    await ƒS.Character.animate(characters.father, characters.father.pose.normal, hitLeftCharAnimation());
    await ƒS.Speech.tell("", text.narration.N0004, true, "italic");
    await ƒS.Speech.tell("", text.narration.N0005, true, "italic");
    await ƒS.Speech.tell("", text.narration.N0006, true, "italic");
    await ƒS.Character.hide(characters.evilguy);
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.father, text.father.T0008);
    await ƒS.Character.hide(characters.father);
    await ƒS.update(1);

    await ƒS.Speech.tell("", text.narration.N0007, true, "italic");
    await ƒS.Speech.tell("Hilfssheriff", text.police.T0001);

    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.Sound.fade(sound.dream, 0, 0.5, false);
    await ƒS.Location.show(locations.black);
    await ƒS.update(transitions.spiralslider.duration, transitions.spiralslider.alpha, transitions.spiralslider.edge);
  }
}