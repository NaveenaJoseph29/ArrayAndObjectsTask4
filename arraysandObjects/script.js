
// Create your own resume data in JSON format

let arrObj={
    Firstname : "Naveena",
    email : "naveena@gmail.com",
    mobile : "5864523121",
    degree : "",
    website: "www.naveena.com",
    summary: "A skillful talented experienced software developer",
    location:{
        address : "3576,villapuram Housing Board",
        postalcode:"625012",
        city: "Madurai",
        countrycode:"IN"
    },
    work:{
        "company":"Tata Consultancy services",
        "position":"Assistant system Engineer Trainee",
        "website":"www.naveena.com",
        "startDate":"2019",
        "endDate":"2020",
    },
    education : 
        {
          "institution": "Sethu Institute of Technology",
          "area": "Electronics and Communication Engineering",
          "startDate": "2015",
          "endDate": "2019",
          "gpa": "",
    },
}
let {Firstname,email,mobile,degree,website,summary,work,education,} = arrObj 
console.log(arrObj)
console.log(Firstname)
console.log(email)
console.log(mobile)
console.log(website)
console.log(summary)
console.log(arrObj.location['address'])
console.log(arrObj.location['postalcode'])
console.log(arrObj.location['city'])
console.log(arrObj.location['countrycode'])
console.log(arrObj.work['company'])
console.log(arrObj.work['position'])
console.log(arrObj.work['website'])
console.log(arrObj.work['startDate'])
console.log(arrObj.work['endDate'])
console.log(arrObj.education['institution'])
console.log(arrObj.education['area'])
console.log(arrObj.education['startDate'])
console.log(arrObj.education['endDate'])
console.log(arrObj.education['gpa'])

// For the above JSON, iterate over all for loops

//For

let number = "";

for (let i = 0; i < 5; i++) {
    number += "The number is " + i + " ";
}
console.log(number)

//forEach

const jsonObject = {
    name: 'John',
    age: 30,
    city: 'New York'
};
Object.entries(jsonObject).forEach(([key, value]) => {
console.log(key + ': ' + value);
});

//for In
const person = {fname:"John", lname:"Doe", age:25}; 
let txt = "";
for (let x in person) {
    txt += person[x] + " ";
}
console.log(txt)   

//far of

const cars = ["BMW", "Volvo", "Mini"];

let output = "";
for (let x of cars) {
    output += x + " ";
}
console.log(output)


