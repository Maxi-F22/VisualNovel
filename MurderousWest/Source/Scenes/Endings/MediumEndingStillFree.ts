namespace Game {
    export async function MediumEndingStillFree(): ƒS.SceneReturn {
        await ƒS.Location.show(locations.middlefree);
        await ƒS.update(transitions.circleslider.duration, transitions.circleslider.alpha, transitions.circleslider.edge);
    }
}