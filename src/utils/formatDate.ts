import moment from "moment";

export default function formatDate(date: Date) {
  // return moment(date, 'DDD MM YYYY');
  return new Intl.DateTimeFormat("en-US").format(date);
}
