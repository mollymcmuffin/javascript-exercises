const findTheOldest = function(array) {

    function getAge(person){
        let year = new Date().getFullYear();
        if (person.yearOfDeath === undefined){
            let age = year - person.yearOfBirth;
            return age;
        }
        else {
            let age = person.yearOfDeath - person.yearOfBirth;
            return age;
        }
    }

    const person = array.reduce((oldest, currentPerson) => { //reduce will ke
        const oldestAge = getAge(oldest);
        const currentAge = getAge(currentPerson);
        return (oldestAge < currentAge) ? currentPerson : oldest;
    });

    return person;
}





// Do not edit below this line
module.exports = findTheOldest;
