/* eslint-disable no-undef */
export function DateToTime(date) {
  const time = new Date(date);
  let hours = time.getHours();
  let minutes = time.getMinutes();
  hours = (hours < 10) ? (`0${hours}`) : hours;
  minutes = (minutes < 10) ? (`0${minutes}`) : minutes;
  return `${hours}:${minutes}`;
}

export default function ToLocal(item, key) {
  let storageArray = JSON.parse(localStorage.getItem(key));
  if (storageArray === null) {
    storageArray = [];
  }
  storageArray.push(item);
  localStorage.setItem(key, JSON.stringify(storageArray));
}
