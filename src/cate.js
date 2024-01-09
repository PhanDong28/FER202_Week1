const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12"
  }
};

// 1. Print the name of each company using forEach
companies.forEach(company => {
  console.log(company.name);
});

// 2. Print the name of each company that started after 1987
companies
  .filter(company => company.start > 1987)
  .forEach(company => {
    console.log(company.name);
  });

// 3. Get only the companies that have category "Retail", increment their start by 1, and append in the DOM a div
const retailCompanies = companies.filter(company => company.category === 'Retail');
retailCompanies.forEach(company => {
  company.start += 1;
  const div = document.createElement('div');
  div.innerHTML = `<p>Name: ${company.name}</p><p>Category: ${company.category}</p><p>Start: ${company.start}</p><p>End: ${company.end}</p>`;
  document.body.appendChild(div);
});

// 4. Sort the companies based on their end date in ascending order
const sortedCompanies = companies.sort((a, b) => a.end - b.end);
console.log(sortedCompanies);

// 5. Sort the ages array in descending order
const sortedAges = ages.sort((a, b) => b - a);
console.log(sortedAges);

// 6. Print the sum if you add all the ages using reduce
const ageSum = ages.reduce((acc, age) => acc + age, 0);
console.log(ageSum);

// 7. Make a new object with properties name and category same as the companies [0]
const { name, category } = companies[0];
const newObj = { name, category, print: function () { console.log(this.name); } };
newObj.print();

// 8. Create a function that takes an unknown number of arguments that are numbers and return their sum
function sumNumbers(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumNumbers(1, 2, 3, 4, 5));

// 9. Make a function that takes an unknown number of arguments of any type and adds them in an array
function addToArray(...args) {
  const resultArray = [];
  args.forEach(arg => {
    if (Array.isArray(arg)) {
      resultArray.push(...arg);
    } else {
      resultArray.push(arg);
    }
  });
  return resultArray;
}

console.log(addToArray(1, 'two', [3, 4], { prop: 'value' }));

// 10. Destructuring the property street in a variable named street from the object person
const { address: { street } } = person;
console.log(street);

// 11. Write a function that every time you call it, it returns a number that increments starting from 0
function createIncrementalCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}

const incrementalCounter = createIncrementalCounter();
console.log(incrementalCounter()); // Output: 0
console.log(incrementalCounter()); // Output: 1
console.log(incrementalCounter()); // Output: 2

// 12. Create a function that destructors the query parameters of a URL and adds them in an object as key-value pairs
function getQueryParameters(url) {
  const queryString = url.split('?')[1];
  if (!queryString) return {};
  const paramsArray = queryString.split('&');
  const paramsObject = {};
  paramsArray.forEach(param => {
    const [key, value] = param.split('=');
    paramsObject[key] = value;
  });
  return paramsObject;
}

const url = 'http://example.com/path?name=John&age=30&city=NewYork';
console.log(getQueryParameters(url));
