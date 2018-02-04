
/**
 * function calculates range of days between 2 dates
 * 
 * @param {dateTime} postDate 
 * @returns string
 */
export const rangeDays = (postDate) => {
    const today = new Date()
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    let range = (today - postDate) / millisecondsPerDay;

    return range === 0 ?  'today' : `${Math.floor(range)} Day${ range > 1 ? 's' : ''}`  
}