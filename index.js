var school = {
    'name': 'Highschool',
    'average class size': 200,
    mascot: 'tiger',
};
var schoolDescription = `The school name is ${school.name}, the average class size is ${school['average class size']}, and the mascot is a ${school['mascot']}`;
document.getElementById('result').innerHTML = `The school name is ${school.name}, the average class size is ${school['average class size']}, and the mascot is a ${school['mascot']}`