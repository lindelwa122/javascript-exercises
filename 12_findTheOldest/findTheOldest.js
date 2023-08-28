const getAge = (person) => {
    if (!person.yearOfDeath) {
        const currentYear = (new Date).getFullYear();
        return currentYear - person.yearOfBirth;
    }

    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(arr) {
    const peopleAges = arr.map((person) => getAge(person));
    const highestAge = Math.max(...peopleAges);
    const index = peopleAges.findIndex((age) => age === highestAge);
    return arr[index];
};

// Do not edit below this line
module.exports = findTheOldest;
