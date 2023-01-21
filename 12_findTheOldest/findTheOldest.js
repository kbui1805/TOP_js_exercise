const findTheOldest = function(people_list) {
    let oldest_person;
    let current_oldest_age = 0;
    function getAge(person) {
        let person_age;
        if (person.hasOwnProperty('yearOfDeath')) {
            person_age = person.yearOfDeath - person.yearOfBirth;
        } else {
            let currentYear = new Date();
            person_age = currentYear.getFullYear() - person.yearOfBirth;
        }
        return person_age;
    }

    for (let people of people_list) {
        if (getAge(people) > current_oldest_age) {
            let result_age = getAge(people);
            oldest_person = people;
            current_oldest_age = result_age;
        }
    }

    return oldest_person;
};

// Do not edit below this line
module.exports = findTheOldest;
