const findAgeOfPerson = (dob) => {
    //    👉find Age of Person with their Date of Birth📅
    //    1: currentDate() 📆
    //    2: currentDate.year & birthDate.year() 🎂
    //    3: age = currentYear - birthYear 🕰️
    //    4: month of Each DOB and CurrentDate() 🗓️
  
    let todayDate = new Date(); // 📅
    console.log(todayDate);
    let birthDate = new Date(dob); // 🎂
    let age = todayDate.getFullYear() - birthDate.getFullYear(); // 🕰️
    console.log(age);
    let monthDiff = todayDate.getMonth() - birthDate.getMonth(); // 🗓️
    console.log(monthDiff);
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && todayDate.getDate() < birthDate.getDate())
    ) {
      age--; // ⬇️
    }
    return age; // 👵
  };
  
  console.log(findAgeOfPerson("2000-02-02")); //Output age: 24 🎉
  console.log(findAgeOfPerson("1990-02-15")); //Output age: 34 🎉
  