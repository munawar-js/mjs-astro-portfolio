import moment from "moment";

export default function formatDate(date: Date) {
  return moment(date, 'YYYYMMDD').fromNow();
  // return new Intl.DateTimeFormat("en-US").format(date);
}
