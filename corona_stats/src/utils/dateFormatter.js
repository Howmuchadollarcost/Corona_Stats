const DateFormatter = (utcDate) => {
    const date = new Date(utcDate).toLocaleString();
    return date;
}


export { DateFormatter }