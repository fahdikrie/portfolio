export const convertDateFormat = (date: string): string => {
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const dateObj = new Date(date);

  return `${MONTHS[dateObj.getMonth()]} ${dateObj.getUTCDate()}`;
};

export const convertIntToStars = (rating: string): string => {
  const ratingInFloat = parseFloat(rating).toFixed(1);

  const RATINGS = {
    '5.0': '★★★★★',
    '4.5': '★★★★½',
    '4.0': '★★★★',
    '3.5': '★★★½',
    '3.0': '★★★',
    '2.5': '★★½',
    '2.0': '★★',
    '1.5': '★½',
    '1.0': '★',
    '0.5': '½',
    '0.0': '—',
  };

  return RATINGS[String(ratingInFloat)];
};
