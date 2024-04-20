// Declare options constant outside the function (memoized)
const dateFormatterOptions = { 
  year: 'numeric', 
  month: 'short', 
  day: '2-digit' 
};

// Memoize the Intl.DateTimeFormat instance
const dateFormatter = new Intl.DateTimeFormat("en-US", dateFormatterOptions);

// Export the optimized formatDate function
export default function formatDate(date: Date) {
  return dateFormatter.format(date);
}
