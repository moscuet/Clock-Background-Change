export const timeDate = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let currentDate = new Date();
    let date = currentDate.getDate();
    let month = monthNames[currentDate.getMonth()];
    let years = currentDate.getFullYear();
    let hours = currentDate.getHours();
    let min = currentDate.getMinutes();
    let sec = currentDate.getSeconds();
    let fullDate =
      month + " " + date + ", " + years + " " + hours + ":" + min + ":" + sec;
    return fullDate;
  };