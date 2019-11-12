export default formatDate = function(date) {
    date = date.split("-");
    let month = Number(date[1]);
    date = date[2].split("T");
    let day = Number(date[0]);
    date = date[1].split(":");
    let hours = Number(date[0])
    let ampm = "AM";
    if (hours > 12) {
        ampm = "PM";
    }
    hours = hours % 12;
    if (hours === 0) {
        hours = 12;
    }
    time = hours + ":" + date[1] + " " + ampm;
    return month + "/" + day + " " + time;
}