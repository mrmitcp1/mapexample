let employeeMap = new Map();
employeeMap.set('mickey',20)
employeeMap.set('sam',12)
employeeMap.set('jack',26)
employeeMap.set('blueSky',24)
for (let name of employeeMap.keys()){
    console.log('Employee Names = ' +name)
}
for  ( let  age of employeeMap.values()){
    console.log('Employee Age = ' + age)
}
console.log(' the employeeMap entries are : ')
for (let entry of employeeMap.entries()){
    console.log(entry[0],entry[1])
}