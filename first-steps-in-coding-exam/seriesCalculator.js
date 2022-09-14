function seriesCalculator(input) {
    let nameSeries = (input[0]);
    let numberSeasons = Number(input[1]);
    let numberEpisodes = Number(input[2]);
    let time = Number(input[3]);
    let timeOneEpisode = time + time * 0.2;
    let totalTime = Math.ceil(timeOneEpisode * numberSeasons * numberEpisodes + numberSeasons * 10);

    console.log(`Total time needed to watch the ${nameSeries} series is ${totalTime} minutes.`);
}

seriesCalculator(["Lucifer", "3", "18", "55"])
