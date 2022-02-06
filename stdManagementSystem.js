//UC 1&2: Adding and displaying student data in student management system.
const studentDetails = [
    {rollNo: 1, firstName:'Vivek', lastName: 'Singh', address:'UnityApt', physicsMarks: 95, chemistryMarks:87,mathMarks:92},
    {rollNo: 2, firstName:'Rohit',lastName: 'Raj', address:'UtsavApt', physicsMarks:97, chemistryMarks:95,mathMarks:83},
    {rollNo: 3, firstName:'Vikash',lastName: 'Malhotra',address:'AasthaKunj', physicsMarks:38, chemistryMarks:70,mathMarks:42},
    ];


console.log('Adding student data and displaying it ',studentDetails);
//UC3 : Use hashmap to store the student data.
const hashMap = new Map();

hashMap.set(1, { firstName:'Mohit', lastName: 'Pandey', address:'Rohini18 E', physicsMarks: 92, chemistryMarks:83,mathMarks:80});
hashMap.set(2, { firstName:'Saurabh', lastName: 'Goyel', address:'Rohoni18 A', physicsMarks: 87, chemistryMarks:87,mathMarks:70});
hashMap.set(3, { firstName:'Aparna', lastName: 'Singh', address:'Rohini13 A', physicsMarks: 98, chemistryMarks:95,mathMarks:92});
hashMap.set(4, { firstName:'Anjali', lastName: 'Sinha', address:'Rohini11 B', physicsMarks: 49, chemistryMarks:63,mathMarks:42});
hashMap.set(5, { firstName:'Akash', lastName: 'Sharan', address:'Rohini 18 F', physicsMarks: 54, chemistryMarks:39,mathMarks:37});

console.log(hashMap);

//UC4 : Filter out the student based on marks.
    hashMap.forEach(function(value, key){
    console.log(key + ' = ' + JSON.stringify(value))
    if(value.mathMarks < 70) {
    console.log(value.mathMarks,'Filtering students who got less than 70 marks in maths :-')
    }})

    //UC5 : Edit student data.

    var editStudentDetails = hashMap.get(5)
    editStudentDetails.firstName = 'Komal'
    editStudentDetails.lastName = 'Sinha'
    editStudentDetails.address = 'Rohini 3 A'
    console.log(editStudentDetails)
  
    var editStudentDetails = hashMap.get(4)
    editStudentDetails.firstName = 'Praksh'
    editStudentDetails.lastName = 'Roy'
    editStudentDetails.address = 'Rohini 15'
    console.log(editStudentDetails)
  
    console.log(hashMap , "Edited Student Details")
       
