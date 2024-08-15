const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//   console.table(companies)

  for(let i=0;i<companies.length;i++){
    console.log(companies[i])
  }

  companies.forEach((items,index)=>{
    console.log(items)
  })

  for(let i=0;i<ages.length;i++){
    console.log(ages[i])
  }

  const adults = ages.filter((age)=>{
    if(age>=18){
        return true
    }
  })

  const retailers = companies.filter((items)=>  items.category=="Retail")
  const newArr = companies.map((items,index)=>{
    return items
  })
  console.log(adults)
  console.log(retailers)

  console.log(newArr)