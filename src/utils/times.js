import moment from 'moment';

export function getDaysArrayByMonth(mIndex, yIndex) {

    let daysInMonth = moment().year(yIndex).month(mIndex).daysInMonth();
    let arrDays = [];

    for ( let i = 1; i <= daysInMonth; i++ ) {

        let current = moment().year(yIndex).month(mIndex).date(i);
        arrDays.push({
            date: current,
        });

    }

  return arrDays;

}

export function getSingleCalendarDayAsWeek(momentObj) {

    let days = [];

    days.push([{
        date: momentObj
    }]);

    return days;
}

export function getSingleCalendarWeekInDays(momentObj) {

    let arrDays = [],
        dupe;

    for (let i = 1; i < 8; i++) {

        dupe = moment(momentObj.format("YYYY-MM-DD"));

        arrDays.push({
            date: dupe.isoWeekday(i)
        });

    }

    return arrDays;

}

export function getPrecedingDays(m) {

    let firstDay = m.day();
    let precedingDays = [];
    let day;

    for ( let i = 1; i < firstDay; i++ ) {

        day = moment(m);
        precedingDays.push({
            date: day.subtract(firstDay - i, 'days'),
        });
    }

    return precedingDays;

}

export function getFollowingDays(m) {

    let lastDay = m.day();
    let followingDays = [];
    let day;

    for ( let i = lastDay + 1; i < 8; i++ ) {

        day = moment(m);
        followingDays.push({
            date: day.add(8 - i, 'days'),
        });
    }

    return followingDays.reverse();

}

export function addSurroundingDays(mArray) {

    let preceding = getPrecedingDays(mArray[0].date);
    let following = getFollowingDays(mArray[mArray.length - 1].date);
    let result = [];

    return result.concat(preceding, mArray, following);

}

export function daysArrayToCalendarWeek(mArray) {

    let results = [],
        dupe = [],
        size = 7;

    dupe = dupe.concat(mArray);

    while ( dupe.length > 0 ) {
        results.push(dupe.splice(0, size));
    }

    return results;

}

export function getCalendarDays(momentObj) {

    let currentMonth = getDaysArrayByMonth(momentObj.month(), momentObj.year());
    let calendarMonth = addSurroundingDays(currentMonth);
    return calendarMonth;

}

export function getCalendarWeeks(daysArry) {
    return daysArrayToCalendarWeek(daysArry);
}

export function nextMonth(now) {
    return moment(now.add(1, 'month'));
}

export function previousMonth(now) {
    return moment(now.subtract(1, 'month'));
}

export function nextDay(now) {
    return moment(now.add(1, 'day'));
}

export function previousDay(now) {
    return moment(now.subtract(1, 'day'));
}

export function nextWeek(now) {
    return moment(now.add(1, 'week'));
}

export function previousWeek(now) {
    return moment(now.subtract(1, 'week'));
}

export function isSameDate(momentObj1, momentObj2) {
    const format = "YYYY-MM-DD";
    let date1 = momentObj1.format(format);
    let date2 = momentObj2.format(format);
    return (date1 === date2);
}

export function isEventInWeek(event, calendarWeek) {

    let eventMoment = moment(event.date);
    let weekStart = calendarWeek[0].date;
    let weekEnd = calendarWeek[calendarWeek.length - 1].date;

    weekStart.hours(0).minutes(0).seconds(1);
    weekEnd.hours(23).minutes(59).seconds(59);

    return (
        (weekStart < eventMoment) &&
        (weekEnd > eventMoment)
    );

}
