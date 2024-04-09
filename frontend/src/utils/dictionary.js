const dictionary = {
    words:["Michael David",'Montreal Impact',"New York City FC","Osvaldo Alonso Moreno"]
}

const Teamlist = {
    
 1:'Montreal Impact',
 2:"New York City FC",
 7:"Chicago Fire"

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
const Playerlist = {
  190:"Michael David",
293:"Osvaldo Alonso Moreno",
}
const Leaguelist = {
1:"USA MLS 2016",
16:"USA MLS 2015",
23:"USA MLS 2014",
  24:"USA MLS 203",
}

export  {dictionary,Teamlist,Playerlist,Leaguelist};