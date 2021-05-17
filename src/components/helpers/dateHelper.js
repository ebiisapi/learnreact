import moment from 'moment';

const dateToHuman = (date) => {
    let result = moment(date).format("dddd, D MMMM YYYY");
    return result;
}

export {
    dateToHuman
}