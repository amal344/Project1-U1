fetch('https://api.themoviedb.org/3/movie/550?api_key=15f549e163353de0911dbd4759b4e337')
.then(function(response) {
  return response.json()})
  .then(function (json) { 
    // you can access the data only in this code block
    console.log(json)
    
    // you could pass the data to another function or simply write your js code that would modify the html over here
    // example:
    // create a ul list then loop over the data to create li elements and append them to ul
  })
   let count=0;
  let User=[]
fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=15f549e163353de0911dbd4759b4e337&language=en-US')
.then(function(response) {
  return response.json()})
  .then(function (json) { 
    // you can access the data only in this code block
    const dc4=document.querySelector(".class4")
    dc4.style.display="none";
    console.log(json.results)
    let row=document.createElement("div")
    // const body=document.querySelector("body")
    const dc1=document.querySelector(".class1")
    row.className="row";
    for(let i=0;i<4;i++){
    let colo=document.createElement("div")
    colo.className="column";
    let card=document.createElement("div")
    card.className="card"
    let imh =document.createElement("img")
    let h3 =document.createElement("h4")
    h3.id="name"+i
    let p=document.createElement("p")
    let text=""+json.results[i].title+", "+json.results[i].release_date;
    h3.innerText=text
    imh.style.height="300px"
    imh.style.width="200px"
    imh.src="https://image.tmdb.org/t/p/w500/"+json.results[i].poster_path
    let icone=document.createElement("i")
    icone.className="fa fa-thumbs-up";
    icone.id="icone"+i
    let br=document.createElement("br")
    let br2=document.createElement("br")
    p.append(icone)
    card.append(imh)
    card.append(h3)
    card.append(p)
    card.append(br)
    card.append(br2)
    let a5=document.createElement("a")
    a5.className="button"
    a5.href="#popup"+i
    a5.innerText="More"
    card.append(a5)
    dc1.append(row)
    row.append(colo)
    colo.append(card)

    
    let div =document.createElement("div")
    div.id="popup"+i
    div.className="overlay"
    let div2=document.createElement("div")
    div2.className="popup"
    let h2=document.createElement("h2")
    h2.innerText="Details"
    let a =document.createElement("a")
    a.className="close"
    a.href="#"
    a.innerHTML="&times;"
    let div3=document.createElement("div")
    div3.className="content"
    let text1=document.createElement("p")
    let text2=document.createElement("p")
    let text3=document.createElement("p")
    let hed1=document.createElement("h5")
    let hed2=document.createElement("h5")
    let hed3=document.createElement("h5")

    hed1.innerText="Original_title: "
    text1.innerText=""+json.results[i].original_title
    hed2.innerText="Original_language: "
    text2.innerText=""+json.results[i].original_language
    hed3.innerText="Overview: "
    text3.innerText=""+json.results[i].overview
    dc1.append(div)
    div.append(div2)
    div2.append(h2)
    div2.append(a)
    div2.append(div3)
    div3.append(hed1)
    div3.append(text1)
    div3.append(hed2)
    div3.append(text2)
    div3.append(hed3)
    div3.append(text3)
    

    }

    let row2=document.createElement("div")
    row2.className="row";
    for(let i=4;i<8;i++){
    let colo=document.createElement("div")
    colo.className="column";
    let card=document.createElement("div")
    card.className="card"
    let imh =document.createElement("img")
    let h3 =document.createElement("h4")
    h3.id="name"+i
    let p=document.createElement("p")
    let text=""+json.results[i].title+", "+json.results[i].release_date;
    // p.innerText=json.results[i].release_date
    h3.innerText=text
    imh.style.height="300px"
    imh.style.width="200px"
    imh.src="https://image.tmdb.org/t/p/w500/"+json.results[i].poster_path
    imh.href="#popup"+i
    let icone=document.createElement("i")
    icone.className="fa fa-thumbs-up";
    icone.id="icone"+i
    let br=document.createElement("br")
    let br2=document.createElement("br")
    p.append(icone)
    card.append(imh)
    card.append(h3)
    card.append(p)
    card.append(br)
    card.append(br2)
    let a5=document.createElement("a")
    a5.className="button"
    a5.href="#popup"+i
    a5.innerText="More"
    card.append(a5)
    dc1.append(row2)
    row2.append(colo)
    colo.append(card)

    let div =document.createElement("div")
    div.id="popup"+i
    div.className="overlay"
    let div2=document.createElement("div")
    div2.className="popup"
    let h2=document.createElement("h2")
    h2.innerText="Details"
    let a =document.createElement("a")
    a.className="close"
    a.href="#"
    a.innerHTML="&times;"
    let div3=document.createElement("div")
    div3.className="content"
    let text1=document.createElement("p")
    let text2=document.createElement("p")
    let text3=document.createElement("p")
    let hed1=document.createElement("h5")
    let hed2=document.createElement("h5")
    let hed3=document.createElement("h5")

    hed1.innerText="Original_title: "
    text1.innerText=""+json.results[i].original_title
    hed2.innerText="Original_language: "
    text2.innerText=""+json.results[i].original_language
    hed3.innerText="Overview: "
    text3.innerText=""+json.results[i].overview
    dc1.append(div)
    div.append(div2)
    div2.append(h2)
    div2.append(a)
    div2.append(div3)
    div3.append(hed1)
    div3.append(text1)
    div3.append(hed2)
    div3.append(text2)
    div3.append(hed3)
    div3.append(text3)

    }

    let row3=document.createElement("div")
    row3.className="row";
    for(let i=8;i<12;i++){
    let colo=document.createElement("div")
    colo.className="column";
    let card=document.createElement("div")
    card.className="card"
    let imh =document.createElement("img")
    let h3 =document.createElement("h4")
    let p=document.createElement("p")
    let p2=document.createElement("p")
    let text=""+json.results[i].title+", "+json.results[i].release_date;
    let icone=document.createElement("i")
    icone.className="fa fa-thumbs-up";
    p.append(icone)
    h3.innerText=text
    h3.id="name"+i
    imh.style.height="300px"
    imh.style.width="200px"
    imh.src="https://image.tmdb.org/t/p/w500/"+json.results[i].poster_path
    icone.className="fa fa-thumbs-up";
    icone.id="icone"+i
    let br=document.createElement("br")
    let br2=document.createElement("br")
    p.append(icone)
    card.append(imh)
    card.append(h3)
    card.append(p)
    card.append(br)
    card.append(br2)
    let a5=document.createElement("a")
    a5.className="button"
    a5.href="#popup"+i
    a5.innerText="More"
    card.append(a5)
    dc1.append(row3)
    row3.append(colo)
    colo.append(card)
    
    let div =document.createElement("div")
    div.id="popup"+i
    div.className="overlay"
    let div2=document.createElement("div")
    div2.className="popup"
    let h2=document.createElement("h2")
    h2.innerText="Details"
    let a =document.createElement("a")
    a.className="close"
    a.href="#"
    a.innerHTML="&times;"
    let div3=document.createElement("div")
    div3.className="content"
    let text1=document.createElement("p")
    let text2=document.createElement("p")
    let text3=document.createElement("p")
    let hed1=document.createElement("h5")
    let hed2=document.createElement("h5")
    let hed3=document.createElement("h5")

    hed1.innerText="Original_title: "
    text1.innerText=""+json.results[i].original_title
    hed2.innerText="Original_language: "
    text2.innerText=""+json.results[i].original_language
    hed3.innerText="Overview: "
    text3.innerText=""+json.results[i].overview
    dc1.append(div)
    div.append(div2)
    div2.append(h2)
    div2.append(a)
    div2.append(div3)
    div3.append(hed1)
    div3.append(text1)
    div3.append(hed2)
    div3.append(text2)
    div3.append(hed3)
    div3.append(text3)

    }
  search(json.results)
  Favorite(json.results)
  FavoriteDisplay(json.results)
  movi()
  login()
  // user()
  modify(json.results)
  })

  function search(data){
   document.querySelector("#search").addEventListener("change", function (e){
    let search=document.querySelector("#search").value
     for(let i=0;i<data.length;i++){
       if(search===data[i].title){
         const dc1=document.querySelector(".class1")
         dc1.style.display="none";
         const dc3=document.querySelector(".class3")
         dc3.style.display="none";
         const dc4=document.querySelector(".class4")
         dc4.style.display="none";
         let dc2=document.querySelector(".class2")
         dc2.style.display=""
         let row=document.createElement("div")
         row.className="row"
         let colo=document.createElement("div")
    colo.className="column";
    let card=document.createElement("div")
    card.className="card"
    let imh =document.createElement("img")
    let h3 =document.createElement("h4")
    let p=document.createElement("p")
    let p2=document.createElement("p")
    let text=""+data[i].title+", "+data[i].release_date;
    let icone=document.createElement("i")
    icone.className="fa fa-thumbs-up";
    p.append(icone)
    h3.innerText=text
    h3.id="name"+i
    imh.style.height="300px"
    imh.style.width="200px"
    imh.src="https://image.tmdb.org/t/p/w500/"+data[i].poster_path
    icone.className="fa fa-thumbs-up";
    icone.id="icone"+i
    let br=document.createElement("br")
    let br2=document.createElement("br")
    p.append(icone)
    card.append(imh)
    card.append(h3)
    card.append(p)
    card.append(br)
    card.append(br2)
    let a5=document.createElement("a")
    a5.className="button"
    a5.href="#popup"+i
    a5.innerText="More"
    card.append(a5)
    dc2.append(row)
    row.append(colo)
    colo.append(card)
    
    let div =document.createElement("div")
    div.id="popup"+i
    div.className="overlay"
    let div2=document.createElement("div")
    div2.className="popup"
    let h2=document.createElement("h2")
    h2.innerText="Details"
    let a =document.createElement("a")
    a.className="close"
    a.href="#"
    a.innerHTML="&times;"
    let div3=document.createElement("div")
    div3.className="content"
    let text1=document.createElement("p")
    let text2=document.createElement("p")
    let text3=document.createElement("p")
    let hed1=document.createElement("h5")
    let hed2=document.createElement("h5")
    let hed3=document.createElement("h5")

    hed1.innerText="Original_title: "
    text1.innerText=""+data[i].original_title
    hed2.innerText="Original_language: "
    text2.innerText=""+data[i].original_language
    hed3.innerText="Overview: "
    text3.innerText=""+data[i].overview
    dc2.append(div)
    div.append(div2)
    div2.append(h2)
    div2.append(a)
    div2.append(div3)
    div3.append(hed1)
    div3.append(text1)
    div3.append(hed2)
    div3.append(text2)
    div3.append(hed3)
    div3.append(text3)

       }
     }
     
   })
   document.querySelector("#search").addEventListener("change", function (e){
    let search=document.querySelector("#search").value
    if(search===""){
      const dc1=document.querySelector(".class1")
      const dc2=document.querySelector(".class2")
      dc1.style.display="";
      dc2.innerHTML=""

    }


  })
  
}

function Favorite(data){
   console.log(data)
    for (let i=0;i<12;i++){
      document.querySelector("#icone"+i).addEventListener("click", function (e){
        localStorage.setItem("item"+count,data[i].title)
        count++
      })
    }
  }

  function FavoriteDisplay(data){
    let countt2=count;
    document.querySelector("#Favorate").addEventListener("click", function (e){
      const dc5=document.querySelector(".class5")
      dc5.style.display="none"
      let dc1=document.querySelector(".class1")
      dc1.style.display="none"
      let dc2=document.querySelector(".class2")
      dc2.style.display="none"
      let dc4=document.querySelector(".class4")
      dc4.style.display="none"
      let dc3=document.querySelector(".class3")
      dc3.style.display=""
      let row=document.createElement("div")
      row.className="row"
     for(let i=0;i<12;i++){
       for(let j=0;j<localStorage.length;j++){
         if(data[i].title===localStorage.getItem("item"+j)){
          let colo=document.createElement("div")
          colo.className="column";
          let card=document.createElement("div")
          card.className="card"
          let imh =document.createElement("img")
          let h3 =document.createElement("h4")
          let p=document.createElement("p")
          let p2=document.createElement("p")
          let text=""+data[i].title+", "+data[i].release_date;
          let icone=document.createElement("i")
          icone.className="fa fa-thumbs-up";
          p.append(icone)
          h3.innerText=text
          h3.id="name"+i
          imh.style.height="300px"
          imh.style.width="200px"
          imh.src="https://image.tmdb.org/t/p/w500/"+data[i].poster_path
          icone.className="fa fa-thumbs-up";
          icone.id="icone"+i
          let br=document.createElement("br")
          let br2=document.createElement("br")
          p.append(icone)
          card.append(imh)
          card.append(h3)
          card.append(p)
          card.append(br)
          card.append(br2)
          let a5=document.createElement("a")
          a5.className="button"
          a5.href="#popup"+i
          a5.innerText="More"
          card.append(a5)
          dc3.append(row)
          row.append(colo)
          colo.append(card)
          
          let div =document.createElement("div")
          div.id="popup"+i
          div.className="overlay"
          let div2=document.createElement("div")
          div2.className="popup"
          let h2=document.createElement("h2")
          h2.innerText="Details"
          let a =document.createElement("a")
          a.className="close"
          a.href="#"
          a.innerHTML="&times;"
          let div3=document.createElement("div")
          div3.className="content"
          let text1=document.createElement("p")
          let text2=document.createElement("p")
          let text3=document.createElement("p")
          let hed1=document.createElement("h5")
          let hed2=document.createElement("h5")
          let hed3=document.createElement("h5")
      
          hed1.innerText="Original_title: "
          text1.innerText=""+data[i].original_title
          hed2.innerText="Original_language: "
          text2.innerText=""+data[i].original_language
          hed3.innerText="Overview: "
          text3.innerText=""+data[i].overview
          dc3.append(div)
          div.append(div2)
          div2.append(h2)
          div2.append(a)
          div2.append(div3)
          div3.append(hed1)
          div3.append(text1)
          div3.append(hed2)
          div3.append(text2)
          div3.append(hed3)
          div3.append(text3)
         }
       }
     }
  })
}
    

function movi(){

  document.querySelector("#movi").addEventListener("click", function (e){
    let dc1=document.querySelector(".class1")
    dc1.style.display=""
    let dc3=document.querySelector(".class3")
    dc3.style.display="none"
    let dc4=document.querySelector(".class4")
    dc4.style.display="none"
    let dc5=document.querySelector(".class5")
    dc5.style.display="none"

  })
}
function login(){
  document.querySelector("#login").addEventListener("click", function (e){
    let dc1=document.querySelector(".class1")
    dc1.style.display="none"
    let dc2=document.querySelector(".class2")
    dc2.style.display="none"
    let dc3=document.querySelector(".class3")
    dc3.style.display="none"
    let dc4=document.querySelector(".class4")
    dc4.style.display=""
    document.querySelector("#submitlog").addEventListener("click",function (e){
      e.preventDefault()
      let userName=document.querySelector("#username").value
      let passowrd=document.querySelector("#passowrd").value
      addUser(userName,passowrd)
      if(userName==="Amal"){
        let modify=document.querySelector("#modify")
        console.log(modify)
        modify.innerText="MODIFY";
      }

    })

  })
}
function addUser(name,passowrd){
  let count=0;
  for(let i=0;i<User.length;i++){
    if(name===User[i].name){
      break
    }else{
      count++
    }

  } 
  if(count===User.length){
    let user={
      name:name,
      passowrd:passowrd,
      favrate:"",
    }
   User.push(user)}
   alert("Welcome "+name)
  console.log(User)
}

function modify(data){
  document.querySelector("#modify").addEventListener("click",function(e){
  const dc4=document.querySelector(".class4")
  dc4.style.display="none";
  const dc3=document.querySelector(".class3")
  dc3.style.display="none";
  const dc2=document.querySelector(".class2")
  dc2.style.display="none";
  const dc1=document.querySelector(".class1")
  dc1.style.display="none";
  const dc5=document.querySelector(".class5")
  dc5.style.display=""
  let row=document.createElement("div")
  row.className="row";
  for(let i=0;i<4;i++){
  let colo=document.createElement("div")
  colo.className="column";
  let card=document.createElement("div")
  card.className="card"
  let imh =document.createElement("img")
  let h3 =document.createElement("h4")
  h3.id="name"+i
  let p=document.createElement("p")
  let text=""+data[i].title+", "+data[i].release_date;
  h3.innerText=text
  imh.style.height="300px"
  imh.style.width="200px"
  imh.src="https://image.tmdb.org/t/p/w500/"+data[i].poster_path
  let br=document.createElement("br")
  let br2=document.createElement("br")
  card.append(imh)
  card.append(h3)
  card.append(p)
  card.append(br)
  card.append(br2)
  let butt=document.createElement("button")
  butt.id="button"+i
  butt.style.backgroundColor="red"
  butt.innerText="Delet"
  card.append(butt)
  dc5.append(row)
  row.append(colo)
  colo.append(card)
  
  }
  let row2=document.createElement("div")
  row2.className="row";
  for(let i=4;i<8;i++){
    let colo=document.createElement("div")
    colo.className="column";
    let card=document.createElement("div")
    card.className="card"
    let imh =document.createElement("img")
    let h3 =document.createElement("h4")
    h3.id="name"+i
    let p=document.createElement("p")
    let text=""+data[i].title+", "+data[i].release_date;
    h3.innerText=text
    imh.style.height="300px"
    imh.style.width="200px"
    imh.src="https://image.tmdb.org/t/p/w500/"+data[i].poster_path
    let br=document.createElement("br")
    let br2=document.createElement("br")
    card.append(imh)
    card.append(h3)
    card.append(p)
    card.append(br)
    card.append(br2)
    let butt=document.createElement("button")
    butt.id="button"+i
    butt.style.backgroundColor="red"
    butt.innerText="Delet"
    card.append(butt)
    dc5.append(row2)
    row2.append(colo)
    colo.append(card)
    
    }
    let row3=document.createElement("div")
    row3.className="row";
    for(let i=8;i<12;i++){
      let colo=document.createElement("div")
      colo.className="column";
      let card=document.createElement("div")
      card.className="card"
      let imh =document.createElement("img")
      let h3 =document.createElement("h4")
      h3.id="name"+i
      let p=document.createElement("p")
      let text=""+data[i].title+", "+data[i].release_date;
      h3.innerText=text
      imh.style.height="300px"
      imh.style.width="200px"
      imh.src="https://image.tmdb.org/t/p/w500/"+data[i].poster_path
      let br=document.createElement("br")
      let br2=document.createElement("br")
      card.append(imh)
      card.append(h3)
      card.append(p)
      card.append(br)
      card.append(br2)
      let butt=document.createElement("button")
      butt.id="button"+i
      butt.style.backgroundColor="red"
      butt.innerText="Delet"
      card.append(butt)
      dc5.append(row3)
      row3.append(colo)
      colo.append(card)
      
      }

      for (let i=0;i<12;i++){
        document.querySelector("#button"+i).addEventListener("click", function (e){
          let title =data[i].title;
          console.log(title)
          moviupdate(data,title)
        })
      }
  })
}
function moviupdate(data,title){
  let row=document.createElement("div")
  const dc1=document.querySelector(".class1")
  row.className="row";
  for(let i=0;i<4;i++){
    if(data[i].title===title){
      console.log("i am in if at i ="+i)
      continue
    }
  let colo=document.createElement("div")
  colo.className="column";
  let card=document.createElement("div")
  card.className="card"
  let imh =document.createElement("img")
  let h3 =document.createElement("h4")
  h3.id="name"+i
  let p=document.createElement("p")
  let text=""+data[i].title+", "+data[i].release_date;
  h3.innerText=text
  imh.style.height="300px"
  imh.style.width="200px"
  imh.src="https://image.tmdb.org/t/p/w500/"+data[i].poster_path
  let icone=document.createElement("i")
  icone.className="fa fa-thumbs-up";
  icone.id="icone"+i
  let br=document.createElement("br")
  let br2=document.createElement("br")
  p.append(icone)
  card.append(imh)
  card.append(h3)
  card.append(p)
  card.append(br)
  card.append(br2)
  let a5=document.createElement("a")
  a5.className="button"
  a5.href="#popup"+i
  a5.innerText="More"
  card.append(a5)
  dc1.append(row)
  row.append(colo)
  colo.append(card)

  
  let div =document.createElement("div")
  div.id="popup"+i
  div.className="overlay"
  let div2=document.createElement("div")
  div2.className="popup"
  let h2=document.createElement("h2")
  h2.innerText="Details"
  let a =document.createElement("a")
  a.className="close"
  a.href="#"
  a.innerText="&times;"
  let div3=document.createElement("div")
  div3.className="content"
  let text1=document.createElement("p")
  let text2=document.createElement("p")
  let text3=document.createElement("p")
  let hed1=document.createElement("h5")
  let hed2=document.createElement("h5")
  let hed3=document.createElement("h5")

  hed1.innerText="Original_title: "
  text1.innerText=""+data[i].original_title
  hed2.innerText="Original_language: "
  text2.innerText=""+data[i].original_language
  hed3.innerText="Overview: "
  text3.innerText=""+data[i].overview
  dc1.append(div)
  div.append(div2)
  div2.append(h2)
  div2.append(a)
  div2.append(div3)
  div3.append(hed1)
  div3.append(text1)
  div3.append(hed2)
  div3.append(text2)
  div3.append(hed3)
  div3.append(text3)
  

  }

  let row2=document.createElement("div")
  row2.className="row";
  for(let i=4;i<8;i++){
  let colo=document.createElement("div")
  colo.className="column";
  let card=document.createElement("div")
  card.className="card"
  let imh =document.createElement("img")
  let h3 =document.createElement("h4")
  h3.id="name"+i
  let p=document.createElement("p")
  let text=""+data[i].title+", "+data[i].release_date;
  // p.innerText=json.results[i].release_date
  h3.innerText=text
  imh.style.height="300px"
  imh.style.width="200px"
  imh.src="https://image.tmdb.org/t/p/w500/"+data[i].poster_path
  imh.href="#popup"+i
  let icone=document.createElement("i")
  icone.className="fa fa-thumbs-up";
  icone.id="icone"+i
  let br=document.createElement("br")
  let br2=document.createElement("br")
  p.append(icone)
  card.append(imh)
  card.append(h3)
  card.append(p)
  card.append(br)
  card.append(br2)
  let a5=document.createElement("a")
  a5.className="button"
  a5.href="#popup"+i
  a5.innerText="More"
  card.append(a5)
  dc1.append(row2)
  row2.append(colo)
  colo.append(card)

  let div =document.createElement("div")
  div.id="popup"+i
  div.className="overlay"
  let div2=document.createElement("div")
  div2.className="popup"
  let h2=document.createElement("h2")
  h2.innerText="Details"
  let a =document.createElement("a")
  a.className="close"
  a.href="#"
  a.innerText="&times;"
  let div3=document.createElement("div")
  div3.className="content"
  let text1=document.createElement("p")
  let text2=document.createElement("p")
  let text3=document.createElement("p")
  let hed1=document.createElement("h5")
  let hed2=document.createElement("h5")
  let hed3=document.createElement("h5")

  hed1.innerText="Original_title: "
  text1.innerText=""+data[i].original_title
  hed2.innerText="Original_language: "
  text2.innerText=""+data[i].original_language
  hed3.innerText="Overview: "
  text3.innerText=""+data[i].overview
  dc1.append(div)
  div.append(div2)
  div2.append(h2)
  div2.append(a)
  div2.append(div3)
  div3.append(hed1)
  div3.append(text1)
  div3.append(hed2)
  div3.append(text2)
  div3.append(hed3)
  div3.append(text3)

  }

  let row3=document.createElement("div")
  row3.className="row";
  for(let i=8;i<12;i++){
  let colo=document.createElement("div")
  colo.className="column";
  let card=document.createElement("div")
  card.className="card"
  let imh =document.createElement("img")
  let h3 =document.createElement("h4")
  let p=document.createElement("p")
  let p2=document.createElement("p")
  let text=""+data[i].title+", "+data[i].release_date;
  let icone=document.createElement("i")
  icone.className="fa fa-thumbs-up";
  p.append(icone)
  h3.innerText=text
  h3.id="name"+i
  imh.style.height="300px"
  imh.style.width="200px"
  imh.src="https://image.tmdb.org/t/p/w500/"+data[i].poster_path
  icone.className="fa fa-thumbs-up";
  icone.id="icone"+i
  let br=document.createElement("br")
  let br2=document.createElement("br")
  p.append(icone)
  card.append(imh)
  card.append(h3)
  card.append(p)
  card.append(br)
  card.append(br2)
  let a5=document.createElement("a")
  a5.className="button"
  a5.href="#popup"+i
  a5.innerText="More"
  card.append(a5)
  dc1.append(row3)
  row3.append(colo)
  colo.append(card)
  
  let div =document.createElement("div")
  div.id="popup"+i
  div.className="overlay"
  let div2=document.createElement("div")
  div2.className="popup"
  let h2=document.createElement("h2")
  h2.innerText="Details"
  let a =document.createElement("a")
  a.className="close"
  a.href="#"
  a.innerText="&times;"
  let div3=document.createElement("div")
  div3.className="content"
  let text1=document.createElement("p")
  let text2=document.createElement("p")
  let text3=document.createElement("p")
  let hed1=document.createElement("h5")
  let hed2=document.createElement("h5")
  let hed3=document.createElement("h5")

  hed1.innerText="Original_title: "
  text1.innerText=""+data[i].original_title
  hed2.innerText="Original_language: "
  text2.innerText=""+data[i].original_language
  hed3.innerText="Overview: "
  text3.innerText=""+data[i].overview
  dc1.append(div)
  div.append(div2)
  div2.append(h2)
  div2.append(a)
  div2.append(div3)
  div3.append(hed1)
  div3.append(text1)
  div3.append(hed2)
  div3.append(text2)
  div3.append(hed3)
  div3.append(text3)

  }
}

  




