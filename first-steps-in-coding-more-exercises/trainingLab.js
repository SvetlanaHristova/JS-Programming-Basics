function trainingLab(input) {
    let w = Number(input[0]);
    let h = Number(input[1]);

    let deskInW = Math.floor(w / 1.2);
    let deskInH = Math.floor((h - 1) / 0.7);
    let totalDesk = deskInH * deskInW - 3;

    console.log(totalDesk);
}
trainingLab(["8.4", "5.2"])