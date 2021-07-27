import Moment from 'moment';
const MomentRange = require('moment-range')
const _moment = MomentRange.extendMoment(Moment)


export const getDateRanges = (start, end) => {
    const range = _moment.range(new Date(start), new Date(end))
    const available_dates = Array.from(range.by('day')).map(day => {
		return {title: day.format('YYYY-MM-DD'), day: day.format('YYYY-MM-DD')}
	})
    return available_dates
}
