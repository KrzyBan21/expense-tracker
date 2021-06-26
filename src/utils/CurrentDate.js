const months = [
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
  "December",
];

class CurrentDate {
  constructor(currentMonth = null, currentYear = null) {
    this.currentMonth =
      currentMonth === null ? new Date().getMonth() : currentMonth;
    this.currentYear =
      currentYear === null ? new Date().getFullYear() : currentYear;
    this.currentFullMonth = months[this.currentMonth];
  }

  getMonth() {
    return this.currentMonth;
  }

  getFullMonth() {
    return this.currentFullMonth;
  }

  getYear() {
    return this.currentYear;
  }

  nextMonth() {
    if (this.currentMonth >= 11) {
      this.currentMonth = 0;
      this.currentYear += 1;
    } else {
      this.currentMonth += 1;
    }
  }

  previousMonth() {
    if (this.currentMonth <= 0) {
      this.currentMonth = 11;
      this.currentYear -= 1;
    } else {
      this.currentMonth -= 1;
    }
  }
}

export default CurrentDate;
