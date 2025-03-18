// Task 1: No Parameters: Activate Hyperdrive
const activateHyperdrive = () => {
    console.log("Hyperdrive activated!");
  };
  
  activateHyperdrive();
  
  // Task 2: Implicit Return: Scan for Lifeforms
  const scanForLife = () => "No lifeforms detected";
  console.log(scanForLife());
  
  // Task 3: Implicit Return with Objects: Log Coordinates
  const currentCoordinates = () => ({ x: 100, y: 250, z: 50 });
  console.log(currentCoordinates());
  
  // Task 4: Understanding `this`: Message from Home Base
  const spacecraft = {
    receiveMessage: (message) => {
      console.log("Message received: " + message);
    }
  };
  
  spacecraft.receiveMessage("Hello, Commander!");
  
  // Observation=
  // In the `receiveMessage` method, the `this` keyword doesn't refer to the `spacecraft` object because 
  // arrow functions don't have their own `this` context. Instead, `this` would refer to the surrounding scope.
  