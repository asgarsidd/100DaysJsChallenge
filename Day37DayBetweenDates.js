const dayBetweenTwoDates = (date1, date2) => {
    // Days = 24hrs * 60Min * 60Sec * 1000MiliSec
    const date_1 = new Date(date1);
    const date_2 = new Date(date2);
  
    const diff = Math.abs(date_2 - date_1);
    // Convert milliseconds to days
    const days = diff / (24 * 60 * 60 * 1000);
    
    return days;
  };
  
  // Example usage:
  const startDate = "2024-01-01";
  const endDate = "2024-01-31";
  const daysBetween = dayBetweenTwoDates(startDate, endDate);
  console.log(`📆 The duration between ${startDate} and ${endDate} is ${daysBetween} days.`);
  //Output : '📆 The duration between 2024-01-01 and 2024-01-31 is 30 days.