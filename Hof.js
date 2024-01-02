// const companies= [
//     {name: "Company One", category: "Finance", start: 1981, end: 2004},
//     {name: "Company Two", category: "Retail", start: 1992, end: 2008},
//     {name: "Company Three", category: "Auto", start: 1999, end: 2007},
//     {name: "Company Four", category: "Retail", start: 1989, end: 2010},
//     {name: "Company Five", category: "Technology", start: 2009, end: 2014},
//     {name: "Company Six", category: "Finance", start: 1987, end: 2010},
//     {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
//     {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//     {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
//   ];
  
//   const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Create array of company names
const companyNames = companies.map(function(company) {
    return company.name;
  });
  console.log(companyNames);
  
  /** 
      Output :-
          0 : "Company One"
          1 : "Company Two"
          2 : "Company Three"
          3 : "Company Four"
          4 : "Company Five"
          5 : "Company Six"
          6 : "Company Seven"
          7 : "Company Eight"
          8 : "Company Nine"
      length : 9
  **/
  
  const testMap = companies.map(function(company) {
    return `${company.name} [${company.start} - ${company.end}]`;
  });
  
  console.log(testMap);
  
  /** 
      Output :
          0 : "Company One [1981 - 2004]"
          1 : "Company Two [1992 - 2008]"
          2 : "Company Three [1999 - 2007]"
          3 : "Company Four [1989 - 2010]"
          4 : "Company Five [2009 - 2014]"
          5 : "Company Six [1987 - 2010]"
          6 : "Company Seven [1986 - 1996]"
          7 : "Company Eight [2011 - 2016]"
          8 : "Company Nine [1981 - 1989]"
      length : 9 
  **/
  
  const testMap1 = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
  console.log(testMap1);
  
  /** 
      Output :
          0 : "Company One [1981 - 2004]"
          1 : "Company Two [1992 - 2008]"
          2 : "Company Three [1999 - 2007]"
          3 : "Company Four [1989 - 2010]"
          4 : "Company Five [2009 - 2014]"
          5 : "Company Six [1987 - 2010]"
          6 : "Company Seven [1986 - 1996]"
          7 : "Company Eight [2011 - 2016]"
          8 : "Company Nine [1981 - 1989]"
      length : 9 
  **/
  
  const ageSqure = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
  console.log(ageSqure);
  
  const ageSqure1 = ages.map(age => Math.sqrt(age));
  console.log(ageSqure1);
  
  const ageTimeTwo = ages.map(age => age * 2);
  console.log(ageTimeTwo);
  /** 
      Output :-
          0 : 66
          1 : 24
          2 : 40
          3 : 32
          4 : 10
          5 : 108
          6 : 42
          7 : 88
          8 : 122
          9 : 26
          10 : 30
          11 : 90
          12 : 50
          13 : 128
          14 : 64
      length : 15
  **/
  
  const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);
  
    console.log(ageMap);
  /**
      Output :- 
          0 : 11.489125293076057
          1 : 6.928203230275509
          2 : 8.94427190999916
          3 : 8
          4 : 4.47213595499958
          5 : 14.696938456699069
          6 : 9.16515138991168
          7 : 13.2664991614216
          8 : 15.620499351813308
          9 : 7.211102550927978
          10 : 7.745966692414834
          11 : 13.416407864998739
          12 : 10
          13 : 16
          14 : 11.313708498984761
      length : 15
  **/

let ageSum = 0;
for(let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}

console.log(ageSum);

const ageSum1 = ages.reduce(function(total, age) {
  return total + age;
}, 0);

console.log(ageSum1);

const ageSum2 = ages.reduce((total, age) => total + age, 0);
console.log(ageSum2);

// Get total years for all companies

const totalYears = companies.reduce(function(total, company) {
  return total + (company.end - company.start);
}, 0);
console.log(totalYears);

const totalYears1 = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears1);

// Get 21 and older

let canDrink = [];
for(let i = 0; i < ages.length; i++) {
  if(ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}
console.log(canDrink);
/** 
    Output :-
        (9) [33, 54, 21, 44, 61, 45, 25, 64, 32]
        0 : 33
        1 : 54 
        2 : 21
        3 : 44 
        4 : 61
        5 : 45
        6 : 25
        7 : 64
        8 : 32
        length: 9
    **/

const canDrink1 = ages.filter(function(age) {
  if(age >= 21) {
    return true;
  }
});

console.log(canDrink1);

/** 
    Output :-
        (9) [33, 54, 21, 44, 61, 45, 25, 64, 32]
        0 : 33
        1 : 54 
        2 : 21
        3 : 44 
        4 : 61
        5 : 45
        6 : 25
        7 : 64
        8 : 32
    length: 9
**/
const canDrink2 = ages.filter(age => age >= 21);

console.log(canDrink2);

/** 
    Output :-
        (9) [33, 54, 21, 44, 61, 45, 25, 64, 32]
        0 : 33
        1 : 54 
        2 : 21
        3 : 44 
        4 : 61
        5 : 45
        6 : 25
        7 : 64
        8 : 32
    length: 9
**/

// Filter retail companies

const retailCompanies = companies.filter(function(company) {
  if(company.category === 'Retail') {
    return true;
  }
});
console.log(retailCompanies);

/** 
    Output :
        0 : {name: 'Company Two', category: 'Retail', start: 1992, end: 2008}
        1 : {name: 'Company Four', category: 'Retail', start: 1989, end: 2010}
        2 : {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989}
    length : 3
**/

const retailCompanies1 = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies1);

/** 
    Output :
        0 : {name: 'Company Two', category: 'Retail', start: 1992, end: 2008}
        1 : {name: 'Company Four', category: 'Retail', start: 1989, end: 2010}
        2 : {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989}
    length : 3
**/

// Get 80s companies

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
console.log(eightiesCompanies);

/**
    Output :-
        0 : {name: 'Company One', category: 'Finance', start: 1981, end: 2004}
        1 : {name: 'Company Four', category: 'Retail', start: 1989, end: 2010}
        2 : {name: 'Company Six', category: 'Finance', start: 1987, end: 2010}
        3 : {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996}   
        4 : {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989}
    length : 5
**/

// Get companies that lasted 10 years or more

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
console.log(lastedTenYears);

/** 
    Output :-
        0 : {name: 'Company One', category: 'Finance', start: 1981, end: 2004}
        1 : {name: 'Company Two', category: 'Retail', start: 1992, end: 2008}
        2 : {name: 'Company Four', category: 'Retail', start: 1989, end: 2010}
        3 : {name: 'Company Six', category: 'Finance', start: 1987, end: 2010}
        4 : {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996}
    length : 5
**/
// 3️. Array Subsection 3 How to sort an Array

// Array.prototype.sort()

// ==> The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

const months = ["March", "Jan", "Feb", "April", "Dec", "Nov"];
console.log(months.sort());

/*** 
    Output :-
        [ 'April', 'Dec', 'Feb', 'Jan', 'March', 'Nov' ]
***/

const array1 = [1, 30, 4, 21, 100000, 99];
console.log(array1.sort());

/*** 
    Output :-
        [ 1, 100000, 21, 30, 4, 99 ]
***/

// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce an incorrect result when sorting numbers.

// Sort companies by start year

const sortedCompanies  = companies.sort(function(c1, c2) {
  if(c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});
console.log(sortedCompanies);

const sortedCompanies1 = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies1);

// Sort ages
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);

