const generateBarChat = (data) => {
    // 📊 Simple Bar chart from Array Data
      let arr = data.map((currEle, ind) => {
        //  console.log(`${ind+1}:`);
        let bar = "";
        let count = 0;
        while (count < currEle) {
          bar = bar + "⭐"; // Add a star emoji for each data point
          count++;
        }
        return `${ind + 1}: ${bar}`;
      });
      return arr.join("\n");
    };
    
    console.log(generateBarChat([5, 3, 9, 2]));
    // Output : 👇
    // 1: ⭐⭐⭐⭐⭐
    // 2: ⭐⭐⭐
    // 3: ⭐⭐⭐⭐⭐⭐⭐⭐⭐
    // 4: ⭐⭐
    