const getDate = () => {
  const currentDate = new Date();

  const formatDateTime = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return {
      date: `${day}/${month}/${year}`,
      time: `${hours}:${minutes}`,
    };
  };

  return formatDateTime(currentDate);
};

export default getDate;
