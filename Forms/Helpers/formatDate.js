export default formatDate = function (date) {
    date = date.split(":")[0];
    return date.substring(0, date.length - 3);
}