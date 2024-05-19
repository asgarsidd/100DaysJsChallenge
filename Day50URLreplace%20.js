/* URLify: write a method to replace all spaces
   in a String with "%20".
*/
const urliFy = (url) => {
  // Method 1: Through forLoop ♾️
  let updatedUrl = "";
  for (let i = 0; i < url.length; i++) {
    if (url[i] === " ") {
      updatedUrl += "%20";
    } else {
      updatedUrl += url[i];
    }
  }
  console.log(updatedUrl);
  //Method 2: Through replaceAll method🚮
  return url.replaceAll(" ", "%20");
};

console.log(urliFy("🔗asgar .in/foreverJS"));
//Output: '🔗asgar%20.in/foreverJS'
