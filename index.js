var school = {
    'name': 'Highschool',
    'average class size': 200,
    mascot: 'tiger',
};
var schoolDescription = `The school name is ${school.name}, the average class size is ${school['average class size']}, and the mascot is a ${school['mascot']}`;
document.getElementById('result').innerHTML = `${school.name} has an average class size of ${school['average class size']} and their mascot is a ${school['mascot']}`