namespace Game {
    export async function BadEndingDead(): ƒS.SceneReturn {
      await ƒS.Location.show(locations.badend);
      await ƒS.update(transitions.circleslider.duration, transitions.circleslider.alpha, transitions.circleslider.edge);
    }
}