const students = document.getElementsByClassName('student-item');
const pages = document.getElementsByTagName('a');

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

    const ulContainer = document.getElementsByClassName('student-list');
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
        // linkWipe.className = "";
          // paginationContainer[p].className = '';
          this.className = 'active';
          // if(this){
            // console.log(pages[p].classList.remove("active"));
            // if(){
            //
            // }
            // else{
            //
            // }
            // console.log('added');
            // this.className += ' active';
          // }
          // else if(pages[p].className === ){
          //   pages[p].remove()
          // }

        // else{
        //   pages[p].className = 'pages';
        // }
      });
      // if(paginationContainer[p]){
      //
      // }
     }
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
