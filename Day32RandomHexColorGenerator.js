const randomhexColor = () => {

/*        --- Hex Random color generator 👇---

    Hexa Decimal : hexadecimal is a base-16 numbering system 
    commonly used in computing. In hexadecimal, digits range 
    from 0 to 9, and then continue with the letters A to F, 
    where A represents 10, B represents 11, and so on up to F, 
    which represents 15.

 */
  return "#" + Math.random().toString(16).slice(2, 8).padEnd(6, 0);
};

console.log(randomhexColor()); // Output : #df0763
