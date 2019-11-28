export default function formatDate(dateString, optionsObj) {
    let defaultOptions = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    };

    let arr = dateString.split('-');
    let date = new Date(+arr[0], +arr[1] - 1, +arr[2]);
    let formatter = new Intl.DateTimeFormat("en", optionsObj || defaultOptions);
    return formatter.format(date)
}