const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler');
const main = document.querySelector('main');

const menuItems = document.querySelectorAll('#menu-item');



// remove active class from all menu items

const changeActiveItem = () => {
  menuItems.forEach(item => {
    item.classList.remove('active');
  })
}


// add active classList when i click on the menu bar
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    changeActiveItem();
    item.classList.add('active');
  })
});




// show sidebar on mobile view
menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block'
})


// close sidebar on mobile view
closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none'
})

// // 2
// const closeAsideOnTouch = (event) => {
//   if(!main.contains(event.target)) {
//     sideMenu.style.display = 'none';
//   }
// }

// // Attach an event listener to the document
// sideMenu.addEventListener("touchstart", function(e)) {
//   // Check if the target of the event is outside of the navigation bar
//   if (!main.contains(e.target)) {
//     // Hide the navigation bar
//     sideMenu.style.display = "none";
//   }
// }





//  change theme
themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables')

  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})

// orders program
orders.forEach(order => {
  const tr = document.createElement('tr');
  const trContent = `
                      <td>${order.productName}</td>
                      <td>${order.productNumber}</td>
                      <td>${order.paymentStatus}</td>
                      <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shipping}</td>
                      <td class="primary">Details</td>`;
  tr.innerHTML = trContent;
  document.querySelector('table tbody').appendChild(tr);
})

console.log('Hello world');