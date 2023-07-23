namespace Game {
    export async function MediumEndingUnsolved(): ƒS.SceneReturn {
        await ƒS.Location.show(locations.middleunsolved);
        await ƒS.update(transitions.circleslider.duration, transitions.circleslider.alpha, transitions.circleslider.edge);
    }
}