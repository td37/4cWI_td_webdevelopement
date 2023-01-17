const loadData = () => {
    fetch("https://api.openligadb.de/getmatchdata/wm2022/2022").then((result) => {
        result.json().then((data) => {
            console.log(data);
            giveOutput(data);
        });
    });
};

const giveOutput = (data) => {
    let html = "";

    data.forEach(element => {
        html += "<div>" + element.team1.teamName + " " + element.matchResults[0].pointsTeam1 + " - " + element.matchResults[0].pointsTeam2 + " " + element.team2.teamName + "</div>";
    });

    document.getElementById("result").innerHTML = html;
}

loadData();