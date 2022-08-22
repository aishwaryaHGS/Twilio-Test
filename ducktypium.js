class Ducktypium {
  constructor(color) {
    // try{
      if(color !== 'red' && color !== 'blue' && color !== 'yellow'){
        throw new Error("Color must be red, yellow, or blue!")
        return
      }
      this.color = color
      this.calibrationSequence = []
    // }
    // catch(e){
      // console.log("Color must be red, yellow, or blue!");
    // }
  }
  refract = (color) =>{
    try{
      if(color !== 'red' && color !== 'blue' && color !== 'yellow'){
        throw new Error("Color must be red, yellow, or blue!")
      }
      if(this.color === color){
        return color
      }
      if((this.color === 'red' && color === 'blue') || (this.color === 'blue' && color === 'red'))
      {
        return 'purple'
      }
      else if ((this.color === 'red' && color === 'yellow') || (this.color === 'yellow' && color === 'red'))
      {
        return 'orange'
      }else if((this.color === 'yellow' && color === 'blue') || (this.color === 'blue' && color === 'yellow'))
      {
        return 'green'
      }
    }
    catch(e){
      console.log("Color must be red, yellow, or blue!");
    }
  }
  calibrate = (arr) => {
    this.calibrationSequence = arr.sort().map((el) => el * 3)
  }
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const dt = new Ducktypium("red");

console.log(dt.color); // prints 'red'

console.log(dt.refract("blue")); // prints 'purple'
console.log(dt.refract("red")); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]

