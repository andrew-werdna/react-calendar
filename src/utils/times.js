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

export function calendarMonthToWeeks(mArray) {

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
    return calendarMonthToWeeks(daysArry);
}
