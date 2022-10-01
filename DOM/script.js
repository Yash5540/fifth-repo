// // const listItemElements = document.querySelectorAll('li');
//                          //OR

// const listItemElements = document.getElementsByTagName('li');
// for(const e1 of listItemElements){
//   console.dir(e1);
// }           

// const h1 = document.getElementById('main-title');
// h1.style.color = 'red';
// h1.style.backgroundColor = 'black';
// h1.textContent = 'This is the changed h1'
// h1.id = 'new-ID';  // See this change in the "Elements" section in inspect

// const li = document.querySelector('li');
// li.textContent = li.textContent + '(Changed)';

// // const body = document.body.querySelector();

// const ul = document.body.firstElementChild.nextElementSibling; // this gets acces to header first and then ul
// const firstLi = ul.firstElementChild;
// console.log(firstLi);

                                                      // JS Style
                                         /* <section> tag is added from here */

const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = 'blue';
section.className = 'red-bg';

button.addEventListener('click', () => {

  // if(section.className === 'red-bg visible'){
  // section.className = 'red-bg invisible';
  // }
  // else{
  //   section.className = 'red-bg visible';
  // }

                                    // OR(we can use classList object to section to make the work easier)
  
  //section.classList.toggle('visible');We can use without this too since it mainly depends on invisibility
  section.classList.toggle('invisible');
});

  
  //-----------------------------ADDING ELEMENTS-----------------------------------------------------------
  
  // section.textContent = 'New Content';
  // section.innerHTML= '<h2>A new Title</h2>'; // this replaces all the direct child nodes and any descendants

  // to add a single element and keep the old elements we do below stuff
   const ul = document.querySelector('ul');
   ul.insertAdjacentHTML('beforeend' ,'<li>Item 4</li>');

   const newLi2 = document.createElement('li');
   newLi2.textContent = 'Item-5';
  ul.append(newLi2);

  // const newLi3 = document.createElement('li');
  //  newLi3.textContent = 'Item-5';
  //  ul.append(newLi3);

   const newLi3 = newLi2.cloneNode(true);
   ul.append(newLi3);

  





