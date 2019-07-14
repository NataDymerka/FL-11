function formatTime(t) {
    const hour = 60; //minutes in hour 
    const day = 24; //hours in day
    let minutesAmount;
    let hoursAmount;
    let hoursAmountRemainder;
    let daysAmount;
    minutesAmount = t % hour; // remain of minutes
    hoursAmount = (t - minutesAmount) / hour; // quantity of total hours 
    hoursAmountRemainder = hoursAmount % day; //remain of hours which are not in a day
    daysAmount = (hoursAmount - hoursAmountRemainder) / day; // quantity of total days
    return daysAmount + ' day(s) ' + hoursAmountRemainder + ' hour(s) ' + minutesAmount + ' minute(s)'
}
formatTime(1446);