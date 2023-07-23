namespace Game {
    export async function MediumEndingKiller(): ƒS.SceneReturn {
        await ƒS.Location.show(locations.middlekiller);
        await ƒS.update(transitions.circleslider.duration, transitions.circleslider.alpha, transitions.circleslider.edge);
    }
}