export function formatDate(dateNow: Date) {
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let yearNow = dateNow.getFullYear();
  let monthNow = months[dateNow.getMonth()];
  let dayNow = dateNow.getDate();
  let daySuffix;

  switch (dayNow) {
    case 1:
    case 21:
    case 31:
      daySuffix = 'st';
      break;
    case 2:
    case 22:
      daySuffix = 'nd';
      break;
    case 3:
    case 23:
      daySuffix = 'rd';
      break;
    default:
      daySuffix = 'th';
      break;
  }

  return `${monthNow} ${dayNow}${daySuffix}, ${yearNow}`;
}
