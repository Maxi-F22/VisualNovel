namespace Game {
    export async function GoodEnding(): ƒS.SceneReturn {
        await ƒS.Location.show(locations.goodend);
        await ƒS.update(transitions.circleslider.duration, transitions.circleslider.alpha, transitions.circleslider.edge);
    }
}