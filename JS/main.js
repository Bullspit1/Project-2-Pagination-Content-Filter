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
     searchList();

     // const pages = Math.ceil(students.length / 10);
     // showPage(pages, students);

});

function showPage(pageNumber, studentList){

  // const student = document.querySelectorAll('.student-list');
  // student[0].style.display = 'none';
// console.log(studentList[0]);
  for (let i = 0; i < studentList.length; i++) {
    // studentList[i].style.display = 'none';
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

    // console.log(document.getElementsByClassName('.pagination').length);
    // if(){
    //
    // }

    // paginationContainer[0].innerHTML = pageLink;
    ulContainer[0].insertAdjacentHTML('afterend', pageLink);

    pages[0].className = 'active';

    for (let p = 0; p < pageNum; p++) {

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





  function searchList(){
    const searchPlace = document.querySelector('div.page-header');
    // console.log(searchPlace);
    searchPlace.insertAdjacentHTML("beforeend", '<div class="student-search"><input placeholder="Search for students..."><button>Search</button></div>');
    // ulContainer[0].insertAdjacentHTML('afterend', "<div class='noStudents'>No Student's Found</div>");



    const searchButton = document.getElementsByTagName('button');
    searchButton[0].addEventListener("click", function(){

    const searchInput = document.getElementsByTagName('input');
    let searchValue = searchInput[0].value;
    const studentNames = document.getElementsByTagName('h3');
    const studentEmails = document.getElementsByClassName('email');
    let studentMatchArr = [];

      // if(){
      //
      // }
      //TODO This is not removing
      // console.log(document.querySelector('.pagination'));
      // $('div').remove('.pagination');
      $('div.pagination ul').remove();


    for (let i = 0; i < students.length; i++) {
      students[i].style.display = 'none';

      const indexOfStudents = studentNames[i].innerHTML.toUpperCase().indexOf(searchValue.toUpperCase());
      const indexOfEmails = studentEmails[i].innerHTML.toUpperCase().indexOf(searchValue.toUpperCase());
//TODO add so if they dont wright and search it shows nothing rather than everyone
      if(indexOfStudents > -1 || indexOfEmails > -1){
        // studentMatchArr.push(students[i]);
        // students[i].style.display = "block";
        studentMatchArr.push(students[i]);
      }
    }

    const studentsFoundDiv = document.getElementsByClassName('found');
//TODO this should use the appendPageLinks function again when the input length is 0
    if(searchValue.length === 0){
      console.log("wroks");
      console.log(studentMatchArr);
      // students.style.display = 'block';
      appendPageLinks(students);
      // searchList();
    }
    else if(studentMatchArr.length >= 0){//&& searchValue.length !== 0
      console.log('show');
      for (var i = 0; i < studentMatchArr.length; i++) {
        if(studentMatchArr.length > 10){
            appendPageLinks(studentMatchArr.length);
        }
        // studentMatchArr[i].style.display = 'block';
      }

      if(studentsFoundDiv.length === 1){
        studentsFoundDiv[0].remove();
      }
    }
    // else if(){
    //
    //
    // }
    else{

      if(studentsFoundDiv.length === 0){
      ulContainer[0].insertAdjacentHTML('afterend', "<div class='found'>No Student's Found</div>");
      console.log('nothing');
      }
    }

    // if(studentMatchArr.length === 0){
    //   if(studentsFoundDiv.length === 0){
    //   ulContainer[0].insertAdjacentHTML('afterend', "<div class='found'>No Student's Found</div>");
    //   console.log('nothing');
    //   }
    // }
    // console.log(searchValue.length);
    // console.log(studentsFoundDiv);
    // console.log(studentsFoundDiv.length);
    // // console.log(studentMatchArr);
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
