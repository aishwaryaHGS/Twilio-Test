function calculatePower(powerSettings) {
    let totalPower = 0;
    powerSettings.forEach(element => {
        totalPower = totalPower + element * 2
    });
    return totalPower;
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const laserPower = calculatePower([1, 3, 8]);
  console.log("Required laser power is " + laserPower); // should be 24