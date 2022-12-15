namespace Game {
  export async function BadChoice(): ƒS.SceneReturn {
    console.log("GOOD ENDING");

    let text = {
      Jerry: {
        T0001: "THE END"
      }
    };


    await ƒS.Speech.tell(characters.Jerry, text.Jerry.T0001);
    await ƒS.Text.print("Dies ist eine Novel Page. Man kann auch das Menü darin zeigen.");

  }
}