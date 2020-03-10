const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let userLanguages = users.filter(langs => langs.languages.length >= 3);
    console.log(userLanguages);

let userEmail = users.map(uEmail => uEmail.email);
console.log(userEmail);

let totalYears = users.reduce((total, users) => total + users.yearsOfExperience, 0);
const avgYears = totalYears / users.length;
console.log(avgYears);

let longEmail = users.reduce((longest, users) => {
    if (users.email.length > currentLength) {
        currentLength = users.email.length
    }
}
