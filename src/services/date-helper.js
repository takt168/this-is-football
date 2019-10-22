export const formatDate = (date) => {
  const dt = new Date(date);
  return dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();
}

export const tomorrowsDate = () => {
  const today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  return tomorrow;
}

export const saturdayDate = () => {
  const today = new Date();
  if (today.getDay === 6) {
    return today;
  } else {
    let saturdayDate = new Date();
    const dayofWeekNum = today.getDay();
    const offset = 6 - dayofWeekNum;
    saturdayDate.setDate(today.getDate() + offset);
    return saturdayDate;
  }
}

export const sundayDate = () => {
  const today = new Date();
  if (today.getDay === 0) {
    return today;
  } else {
    let sundayDate = new Date();
    const dayofWeekNum = today.getDay();
    const offset = 7 - dayofWeekNum;
    sundayDate.setDate(today.getDate() + offset);
    return sundayDate;
  }

}