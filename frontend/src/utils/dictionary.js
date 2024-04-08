const dictionary = {
    words:["ronaldo","messi","virgo","merci"]
}

const Teamlist = {
    

}


export function unixToTime(unixTimestamp) {
  // Convert Unix timestamp to milliseconds
  const milliseconds = unixTimestamp * 1000;
  
  // Create a new Date object
  const dateObject = new Date(milliseconds);

  // Extract hours, minutes, and seconds
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const seconds = dateObject.getSeconds();

  // Format the time
  const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return formattedTime;
}


export const formatDate = (unixTimestamp)=> {
    // Create a new Date object from the Unix timestamp
    const date = new Date(unixTimestamp * 1000);
  
    // Get the day, month, and year components
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
  
    // Format the date in ddmmyyyy format
    return `${day}/${month}/${year}`;
  }
const Playerlist = {1:"ronaldo",2:"messi"}
const Leaguelist = {}

export  {dictionary,Teamlist,Playerlist,Leaguelist};