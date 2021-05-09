module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    dateFormat: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
        new Date(date).getFullYear() + 5
      }`;
    },
  };
  