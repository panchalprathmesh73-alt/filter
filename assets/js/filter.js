let cl=console.log;
var companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
let result=companies.filter((params)=>{
    return params.start >=1980 && params.start <=1989;
});
cl(result);

let result2=[];
for ( i=0; i<companies.length;i++){
    if((companies[i].start >=1980 && companies[i].start <=1989) && (companies[i].category.toLowerCase().trim()==='retail')){
        result2.push(companies[i]);
    };
};
cl(result2);

let result3=companies.filter((comp1)=>{
    return (comp1.start >=1980 && comp1.start <=1989)
});