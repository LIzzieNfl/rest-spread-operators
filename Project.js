//Task 1 create the participant object with shorthand property names
const name = 'Liz';
const age = 37;
const studyField = 'Chemistry';
const participant = { name, age, studyField };
console.log(participant);
//Why? creates object participant with properties(name,age and studyField)
//const participant automatically creates the properties (name,age,studyfield inside participant by using the values of the corresponding variables)
///REMEMBER TO HIT SAVE BEFORE TESTING WITH NODE

//task 2- implementing a shorthand function to display the participants info
participant.displayInfo = function() {  // Define the method to display info
    console.log(`Name: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`);
};
participant.displayInfo();  // To display the participant's info


  //Task 3: using an Arrow Function for displayInfo
  const participantArrow = {
    name: 'Liz',
    age: 37,
    studyField: 'Chemistry',
    displayInfo: () => {
        console.log(`Name: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`); // This will not work as expected because 'this' doesn't refer to the object
    }
};
participantArrow.displayInfo(); // shows undefined because of 'this'
  //so arrow function doesn't refer to the participantArrow but the global scope
  //so undefined is this.age, this.name and this.studyfield are underfined
  //Task 4: Using Computed Property Names
  function updateParticipantInfo(participant, propertyName, value) {    
    return {
        ...participant,
        [propertyName]: value  // Dynamically updates the property of the object
    };
}

const updatedParticipant = updateParticipantInfo(participant, 'age', 38); 
console.log(updatedParticipant); 