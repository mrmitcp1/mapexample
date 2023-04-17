let nameMap=new Map();
nameMap.set('antoni',1000)
nameMap.set('lucas',1001)
nameMap.set('maria',1002)
nameMap.set('canifa',1003)
nameMap.set('dekku',1004)
console.log(nameMap.size)
console.log(nameMap.get('lucas'))
console.log(nameMap.get('dekku'))
for (let name of nameMap.keys()){
    console.log('Name: ' + name)
}
for (let id of nameMap.values()){
    console.log('ID: ' + id)
}
for (let [key,value] of nameMap){
    console.log(' key value paris: ', key, value )
}
nameMap.delete('lucas')
nameMap.clear()
console.log(nameMap.size)


