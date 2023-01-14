fetch("https://dummyjson.com/users")
.then(res => {
  return res.json();
})

.then(data =>{
  let i= 0
  data.users.forEach(user => 
{i++; if (i <= 12)

{
const newUser = document.getElementById("users")
// const newClass = document.querySelector()
const userData = document.createElement("div")
userData.innerHTML = `<div class="user">
<h1 class="name">${user.firstName} ${user.lastName}</h1>
<img src="${user.image}" alt="img">
<p class="gender">${user.gender}</p>
<p class="username">${user.username}</p>
</div>`;
// const newContent= document.importNode(newClass)
newUser.appendChild(userData);
}}
)
  }
)

    
// document.getElementById(userData)
//   })}
//   =>{
//   data.forEach(user =>{

  // })
// }
//   ,
   

  

// )
// .catch(error => {
//   console.log(error)
// });
// array.forEach(element => {
  
// });