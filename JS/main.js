// New variables that store information from the HTML
const students = document.getElementsByClassName('student-item');
const pages = document.getElementsByTagName('a');
const ulContainer = document.getElementsByClassName('student-list');

//An addEventListener that runs what ever is in it when the window(the whole page) loads
window.addEventListener("load", function(){
     //A for loop that loops through each student identified by the class name "student-item"
     for (let i = 0; i < students.length; i++) {
       //An if statement that says if i loops from 0 to 63 depending of how many students for now (64)students
       //if i is less then 10 (first 10 students) that loop through show them or else the rest don't show them.
       if(i < 10){
         students[i].style.display = 'block';
       }else{
         students[i].style.display = 'none';
       }
     }
     //This runs the function appendPageLinks with an argument of students
     appendPageLinks(students);
     // searchList();
});

function showPage(pageNumber, studentList){
  //A for loop that loops through each student
  for (let i = 0; i < studentList.length; i++) {
    //sets all the students to display none (not showing)
    studentList[i].style.display = 'none';
    //if statement that says if i is less then the pageNumber + 0 (ie: 30)
    // and if i is greater than or equal to the pageNumber + 0 (ie: 30) - 10 = 20
    //show the students. aka the 10 per page
    if(i < pageNumber + 0 && i >= (pageNumber + 0) - 10){
      studentList[i].style.display = 'block';
    }
  }
}


function appendPageLinks(studentList){
  //a var that stores takes the length of the student-item 64 and divides it by 10 to determine
  //how many pages for 10 students per page. Uses Math.ceil to round it to the highest
  let pageNum = Math.ceil(studentList.length / 10);
  //This var is storing the first part containing the page buttons
  let pageLink = '<div class="pagination"><ul>';

    //A for loop that loops through the amount of pages
    for (let i = 1; i < pageNum + 1; i++) {
      //adding the button to the pageLink for the amount of buttons
      pageLink += '<li><a href="#">' + i + '</a></li>';
    }
      //finally adding the closing tags
      pageLink += '</ul></div>';
    //Inside the container UL tag at the bottom it adds to the HTML all the buttons stored in the pageLink variable.
    ulContainer[0].insertAdjacentHTML('afterend', pageLink);
    //And then sets the first button to active
    pages[0].className = 'active';

    //A for loop for each button
    for (let p = 0; p < pageNum; p++) {
      //An addEventListener that listens for a click on each button
      pages[p].addEventListener("click", function(e){
        //After a buttin is pressed it runs the function showPage which takes two arguments
        // First this.innerHTML is the button itself it takes the number inside the tag as well as the amount of students.
        showPage(this.innerHTML, studentList);
        //A for loop that sets each buttons class to nothing everytime the button is pressed
        for (let y = 0; y < pageNum; y++) {
          pages[y].className = "";
        }
        //When a button is pressed it sets it as active
          this.className = 'active';
      });
     }
  }



//TODO Work on after more coding practice -- Attempted and works but too many bugs --

//   function searchList(){
//     const searchPlace = document.querySelector('div.page-header');
//     // console.log(searchPlace);
//     searchPlace.insertAdjacentHTML("beforeend", '<div class="student-search"><input placeholder="Search for students..."><button>Search</button></div>');
//     // ulContainer[0].insertAdjacentHTML('afterend', "<div class='noStudents'>No Student's Found</div>");
//
//
//
//     const searchButton = document.getElementsByTagName('button');
//     searchButton[0].addEventListener("click", function(){
//
//     const searchInput = document.getElementsByTagName('input');
//     let searchValue = searchInput[0].value;
//     const studentNames = document.getElementsByTagName('h3');
//     const studentEmails = document.getElementsByClassName('email');
//     let studentMatchArr = [];
//
//       // if(){
//       //
//       // }
//       //TODO This is not removing
//       // console.log(document.querySelector('.pagination'));
//       // $('div').remove('.pagination');
//       $('div.pagination ul').remove();
//
//
//     for (let i = 0; i < students.length; i++) {
//       students[i].style.display = 'none';
//
//       const indexOfStudents = studentNames[i].innerHTML.toUpperCase().indexOf(searchValue.toUpperCase());
//       const indexOfEmails = studentEmails[i].innerHTML.toUpperCase().indexOf(searchValue.toUpperCase());
// //TODO add so if they dont wright and search it shows nothing rather than everyone
//       if(indexOfStudents > -1 || indexOfEmails > -1){
//         // studentMatchArr.push(students[i]);
//         // students[i].style.display = "block";
//         studentMatchArr.push(students[i]);
//       }
//     }
//
//     const studentsFoundDiv = document.getElementsByClassName('found');
// //TODO this should use the appendPageLinks function again when the input length is 0
//     if(searchValue.length === 0){
//       console.log("wroks");
//       console.log(studentMatchArr);
//       // students.style.display = 'block';
//       appendPageLinks(students);
//       // searchList();
//     }
//     else if(studentMatchArr.length >= 0){//&& searchValue.length !== 0
//       console.log('show');
//       for (var i = 0; i < studentMatchArr.length; i++) {
//         if(studentMatchArr.length > 10){
//             appendPageLinks(studentMatchArr.length);
//         }
//         // studentMatchArr[i].style.display = 'block';
//       }
//
//       if(studentsFoundDiv.length === 1){
//         studentsFoundDiv[0].remove();
//       }
//     }
//     // else if(){
//     //
//     //
//     // }
//     else{
//
//       if(studentsFoundDiv.length === 0){
//       ulContainer[0].insertAdjacentHTML('afterend', "<div class='found'>No Student's Found</div>");
//       console.log('nothing');
//       }
//     }
//
//     // if(studentMatchArr.length === 0){
//     //   if(studentsFoundDiv.length === 0){
//     //   ulContainer[0].insertAdjacentHTML('afterend', "<div class='found'>No Student's Found</div>");
//     //   console.log('nothing');
//     //   }
//     // }
//     // console.log(searchValue.length);
//     // console.log(studentsFoundDiv);
//     // console.log(studentsFoundDiv.length);
//     // // console.log(studentMatchArr);
//     // console.log(studentMatchArr);
//   });
//
//
//
//
//
//     // searchButton.addEventListener("click", function(){
//     //   console.log('e');
//     //   console.log(searchValue);
//     // });
//   //
//   //
//   //
//   //
//   //
//   }
