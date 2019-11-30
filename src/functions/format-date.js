export default function formatDate(dateString, optionsObj) {
    let defaultOptions = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    };

    let date = new Date(Date.parse(dateString));
    let formatter = new Intl.DateTimeFormat("en", optionsObj || defaultOptions);
    return formatter.format(date)
}