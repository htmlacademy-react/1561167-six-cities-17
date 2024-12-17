const convertDate = (date: Date): string => {
  const dateString = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return dateString.split('/').reverse().join('-');
};

const convertShortDate = (date: Date): string =>
  date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });


export { convertDate, convertShortDate };
