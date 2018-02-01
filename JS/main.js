const students = document.getElementsByClassName('student-item');
// const page = document.getElementsByClassName('pages');

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
  const student = document.querySelectorAll('.student-list');
  student[0].style.display = 'none';
// console.log(studentList[0]);
  for (var i = 0; i < studentList.length; i++) {
    // console.log(i);
    // console.log(pageNumber);
    // console.log(studentList[i]);
    //TODO Find out what to put in if statement so it displays 10 students per page
    // if(i % pageNumber){
    //   console.log('ya');
    // //   // students[i].style.display = 'block';
    // }
    // console.log(pageNumber);
  }
}


function appendPageLinks(studentList){
  let pages = Math.ceil(studentList.length / 10);
  let pageLink = '<ul>';
  // '<li class="pages"><a href="#">2</a></li>'
    for (var i = 1; i < pages + 1; i++) {
      pageLink += '<li class="pages"><a href="#">' + i + '</a></li>';
    }
    pageLink += '</ul>';

    const paginationContainer = document.getElementsByClassName('pagination');
    paginationContainer[0].innerHTML = pageLink;

    // const liContainer = paginationContainer[0].querySelectorAll('li a');
//TODO Fix this ISSUE It selcts the ul on the page
      paginationContainer[0].addEventListener("click", function(e){
        // console.log(e.target.className = 'active');
        showPage(e.target, studentList)
        e.target.className = 'active';
      });


  }


// function links(){
//   var pages = 10;
//   // var arr = [];
//
//   for (var i = 0; i < students.length; i++) {
//     // pages += 1;
//     // console.log(i);
//     // if(i == 10){
//     //   pages += 20;
//     //   // console.log("hello");
//     // }
//     if(i === pages){
//       pages += 10;
//       console.log('new page');
//     }
//       // if(){
//       //   pages += 1;
//       // }
//     // }
//   }
//   console.log('---------------')
//   console.log(pages);
// }
// links();

// var pagination = document.querySelector(".pagination");
// pagination.addEventListener("click", function(e){
//
//
//   // console.log(e.target);
//   // console.log(e);
//   // if(e.target.className === ''){
//   //   // for (var i = 0; i < array.length; i++) {
//   //   //   array[i]
//   //   // }
//   //   // var d = e.target.length;
//   //   // console.log(d);
//   // }
//
//
//
//     // e.target.className = 'active';
//     // var pagA = getElementsByTagName('a');
//     // pagA.removeAttribute('active');
//     // console.log(pagA);
//
//
// });
