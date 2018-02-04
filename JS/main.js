const students = document.getElementsByClassName('student-item');
const pages = document.getElementsByTagName('a');
const ulContainer = document.getElementsByClassName('student-list');

window.addEventListener("load", function(){
     // var l = document.querySelector()
     // console.log(students.length);
     for (var i = 0; i < students.length; i++) {
       // console.log(i);
       // students[i].style.display = 'none';
       if(i < 10){
         // console.log(true);
         students[i].style.display = 'block';
       }else{
         // console.log(false);
         students[i].style.display = 'none';
       }
     }
     appendPageLinks(students);

     // const pages = Math.ceil(students.length / 10);
     // showPage(pages, students);

});

function showPage(pageNumber, studentList){

  // const student = document.querySelectorAll('.student-list');
  // student[0].style.display = 'none';
// console.log(studentList[0]);
  for (let i = 0; i < studentList.length; i++) {
    studentList[i].style.display = 'none';
    // console.log(i);
    // console.log(i < pageNumber + 0 && i >= (pageNumber + 0) - 10);
    //TODO Find out what to put in if statement so it displays 10 students per page
    if(i < pageNumber + 0 && i >= (pageNumber + 0) - 10){
      studentList[i].style.display = 'block';
    }
  }
}


function appendPageLinks(studentList){
  let pageNum = Math.ceil(studentList.length / 10);
  let pageLink = '<div class="pagination"><ul>';
  // '<li class="pages"><a href="#">2</a></li>'
    for (let i = 1; i < pageNum + 1; i++) {
      pageLink += '<li><a href="#">' + i + '</a></li>';
    }
    pageLink += '</ul></div>';


    // paginationContainer[0].innerHTML = pageLink;
    ulContainer[0].insertAdjacentHTML('afterend', pageLink);

    pages[0].className = 'active';

    for (let p = 0; p < pageNum; p++) {
        //TODO Fix this ISSUE It selcts the ul on the page
      pages[p].addEventListener("click", function(e){
        // console.log(this);
        // console.log(this.classList[0]);
        // console.log(this.className !== 'pages active');
        showPage(this.innerHTML, studentList);
        // console.log(pages[p]);
        // console.log(pages[p].classList.remove('active'));
        for (let y = 0; y < pageNum; y++) {
          // console.log(pages[y]);
          pages[y].className = "";
        }
          this.className = 'active';
      });
     }
  }




  searchList();
  function searchList(){
    const searchPlace = document.querySelector('.page .page-header');
    searchPlace.insertAdjacentHTML("beforeend", '<div class="student-search"><input placeholder="Search for students..."><button>Search</button></div>');
    // ulContainer[0].insertAdjacentHTML('afterend', "<div class='noStudents'>No Student's Found</div>");

    const searchButton = document.getElementsByTagName('button');
    searchButton[0].addEventListener("click", function(){


    const searchInput = document.getElementsByTagName('input');
    let searchValue = searchInput[0].value;
    const studentNames = document.getElementsByTagName('h3');
    const studentEmails = document.getElementsByClassName('email');
    // console.log(searchValue.toLowerCase());
    // console.log("-------------");
    // let studentMatchArr = [];

    for (let i = 0; i < students.length; i++) {
      // let studentString = "";
      // console.log(searchValue.toLowerCase());
      // console.log(searchValue.length);
      // console.log(document.getElementsByTagName('h3')[i].innerHTML);
      // console.log(studentNames[i].innerHTML.toUpperCase().indexOf(searchValue.toUpperCase()) > -1);
      // console.log(studentEmails[i].innerHTML.toUpperCase().indexOf(searchValue.toUpperCase()) > -1);
      // studentNames[i].innerHTML.join();
      // studentArr += studentNames[i].innerHTML.split("", searchValue.length);
      // console.log(studentArr);
      // console.log(studentArr);

      // console.log(searchValue.toLowerCase() == studentNames[i].innerHTML);
      // console.log(studentNames[i].innerHTML.length);
      // console.log(searchValue.toLowerCase() == studentNames[i].innerHTML);
      // console.log(searchValue.toLowerCase().indexOf(studentNames[i].innerHTML) >= 0);
      // console.log('______________');
      // console.log(document.getElementsByClassName('email')[i].innerHTML);
      // console.log(studentNames[i].innerHTML.toUpperCase().indexOf(searchValue.toUpperCase()) === 0);
      // console.log(document.getElementsByTagName('h3')[i].innerHTML);

      // console.log(studentNames[i].innerHTML.toUpperCase().indexOf(searchValue.toUpperCase()) === -1);
      // console.log(studentNames[i].innerHTML.toUpperCase().indexOf(searchValue.toUpperCase()) > -1 );
      const indexOfStudents = studentNames[i].innerHTML.toUpperCase().indexOf(searchValue.toUpperCase());
      const indexOfEmails = studentEmails[i].innerHTML.toUpperCase().indexOf(searchValue.toUpperCase());
//TODO add so if they dont wright and search it shows nothing rather than everyone
      if(indexOfStudents > -1 || indexOfEmails > -1){
        // studentMatchArr.push(students[i]);
        students[i].style.display = "block";
      }
      else{
        students[i].style.display = "none";
      }
      // console.log(indexOfStudents > -1);

      // if(students[i].style.display === "none"){
      //   ulContainer[0].insertAdjacentHTML('afterend', "<div class='noStudents'>No Student's Found</div>");
      // }
      // if(indexOfStudents === -1){
      //   students[i].style.display = "none";
      //   // console.log('work');
      // }
      // if(studentNames[i].style.display === 'none'){
      //   ulContainer[0].insertAdjacentHTML('afterend', "<div class='noStudents'>No Student's Found</div>");
      // }
      // if(students[i].style.display = "block"){
      //   students[i].style.display = "none";
      // }

      // if(students[i].style.display = "none"){
      //   ulContainer[0].insertAdjacentHTML('afterend', "<div>No Student's Found</div>");
      // }
      // else{
      //   students[i].style.display = "none";
      //   ulContainer[0].insertAdjacentHTML('afterend', "<div>No Student's Found</div>");
      // }
      // if(indexOfStudents === -1 || indexOfStudents === 0){
      //   students[i].style.display = "none";
      //   ulContainer[0].insertAdjacentHTML('afterend', "<div>No Student's Found</div>");
      // }

      // if(studentNames[i].innerHTML.toUpperCase().indexOf(searchValue.toUpperCase()) > -1 || studentEmails[i].innerHTML.toUpperCase().indexOf(searchValue.toUpperCase()) > -1){
      //   students[i].style.display = "none";
      //   // ulContainer[0].innerHTML = "<div>No Student's Found</div>";
      // }
      // if(studentNames[i].indexOf('searchValue') >= 0){
      //   console.log(true);
      // }
    }
    // console.log(studentMatchArr);
  });





    // searchButton.addEventListener("click", function(){
    //   console.log('e');
    //   console.log(searchValue);
    // });
  //
  //
  //
  //
  //
  }
