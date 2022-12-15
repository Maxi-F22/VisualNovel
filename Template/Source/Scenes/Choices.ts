namespace Game {
  export async function Choices(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");
    
    ƒS.Speech.hide();

    await ƒS.Location.show(locations.beachDay);
    await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);


    let pages: string[] = ["<strong>Ende-zu-Ende-Verschlüsselung:</strong><br\>Nur beide Kommunikationspartner nehmen das Ver- und Entschlüsseln der übertragenen Informationen direkt vor. \
          Andere Stationen die an der Übertragung der Informationen beteiligt sind, können nicht darauf zugreifen.<br\><br\><br\><br\><br\><br\><br\>Seite 1", "Langzeitverschlüsselung,\
          <br\>Verschlüsselte Nutzerprofile,<br\>Telefonbuch-Kontakte werden nicht auf die Betriebsserver geladen,<br\>Sicherung und Schutz persönlicher Informationen durch persönliche PIN,\
          <br\>Gesprächsverschlüsselung,<br\>kein Tracking \
          <br\><br\>Seite 2", "Seite 3", "Seite 4", "Seite 5", "Seite 6", "Seite 7", "Seite 8"];
    let current: number = 0;
    let flip = { back: "Back", next: "Next", done: "Close" };
    let choice: string;
    ƒS.Text.addClass("flip");
    do {
      ƒS.Text.print(pages[current]);
      choice = await ƒS.Menu.getInput(flip, "flipInput");
      switch (choice) {
        case flip.back: current = Math.max(0, current - 1); break;
        case flip.next: current = Math.min(6, current + 1); break;
      }
    } while (choice != flip.done);
    ƒS.Text.close();


  }
}