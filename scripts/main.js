// side bar
$("#mainIcon").on("click", function () {
  $("#mainIcon").toggleClass(
    " fa-solid fa-align-justify  fs-3 fa-solid fs-3 fa-xmark "
  );
  let gearWidth = $(".gear-box ").innerWidth();
  if ($(".setting").css("left") == "0px") {
    $(".setting").animate({ left: `-${gearWidth}` }, 1500);
  } else {
    $(".setting").animate({ left: 0 }, 1500);
  }
  console.log(gearWidth);
});

// get api
async function getMovies(type = "now_playing") {
  getMovies = await fetch(
    `https://api.themoviedb.org/3/movie/${type}?api_key=ce2f03cda796224d28b0efccb0a10e45`
  );
  movies = await getMovies.json();
  // console.log(movies.results);

  dispaly(movies.results);
}

getMovies();

// dispaly
function dispaly(list) {
  let cartona = ``;
  for (let i = 0; i < list.length; i++) {
    cartona += `    <div class="col-md-4 ">
      <div class="img-movie ">
       <img src="${
         "https://image.tmdb.org/t/p/w500/" + list[i].poster_path
       }" class="" alt="">
       <div class="layer">
         
   <div class="container">
       
       <h2 class="title">${list[i].original_title}</h2>
       <p class="py-3">${list[i].overview}</p>
           <h4 class="py-2 fs-5">Relase Date: <span>${
             list[i].release_date
           }</span></h4>

           <h3 class="rate animate__animated animate__slideOutLeft">
               <i class="fa-solid fa-star text-warning fs-6"></i>
               <i class="fa-solid fa-star text-warning fs-6"></i>
               <i class="fa-solid fa-star text-warning fs-6"></i>
               <i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>
           </h3>
           <span class="number fs-5 d-flex justify-content-center align-items-center">${
             list[i].vote_average
           }</span>
   </div>

       
       </div>
      </div>

  
   </div>`;
  }
  document.querySelector("#myData").innerHTML = cartona;
}

let links = document.querySelectorAll(".links");

for (let i = 0; i < links.length; i++) {
  async function getMovies(type = "now_playing") {
    getMovies = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=ce2f03cda796224d28b0efccb0a10e45`
    );
    movies = await getMovies.json();
    // console.log(movies.results);

    dispaly(movies.results);
  }
  links[i].addEventListener("click", function () {
    if (this.dataset.type == "trending") {
      async function getTrending() {
        let Trending = await fetch(
          "https://api.themoviedb.org/3/trending/all/day?api_key=ce2f03cda796224d28b0efccb0a10e45"
        );
        trend = await Trending.json();

        dispaly(trend.results);
      }
      getTrending();
    } else {
      getMovies(this.dataset.type);
    }
  });
}
// api_key=ce2f03cda796224d28b0efccb0a10e45


// input
let search=document.querySelector("#search")

 async function getData(change){
getData=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ce2f03cda796224d28b0efccb0a10e45&query=The%20${change}`)
data= await getData.json()
console.log(data);
}

// getData()

search.addEventListener("input",function(e){
    console.log(search.value);
    async function getData(change){
        getData=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ce2f03cda796224d28b0efccb0a10e45&query=The%20${change}`)
        data= await getData.json()
        
            dispaly(data.results);
        }
        getData(e.target.value)
      
});

// contact
let username=document.querySelector("#userName")
let userEmail=document.querySelector("#userEmail")
let userpassword=document.querySelector("#userpassword")
let userphone=document.querySelector("#userPhone")
let userAge=document.querySelector("#userAge")

let userRepassword=document.querySelector("#rePassword")

let sumbit=document.querySelector("#sumbit")
function inputValidation()
{
  if(userNameValid()&&userEmailValid()&&userPhoneValid()&&userAgeValid()&&userpasswordValid()&&userRepasswordValid()){
   
    sumbit.removeAttribute("disabled")
  
    console.log("yes");
  }else{
    
    sumbit.setAttribute("disabled",true)
    
  }
}

function userNameValid(){
   return /^[A-Za-z ]+$/.test(username.value)

}
function userEmailValid(){
  return   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(userEmail.value)
}

function userPhoneValid(){
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(userphone.value)

}
function userAgeValid(){
  return /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(userAge.value)

}
function userpasswordValid(){
  return  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userpassword.value)
  

  // Minimum eight characters, at least one letter and one number
}
function userRepasswordValid(){
return userpassword.value== userRepassword.value

}


