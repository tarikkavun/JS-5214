function myFunction() {
    var a = document.getElementById("myLinks"), elg1 = document.getElementById("largened1"), elg2 = document.getElementById("largened2"), elg3 = document.getElementById("largened3");
    
    if (a.style.display === "block") {
      a.style.display = "none"
      elg1.style.display = "none"
      elg2.style.display = "none"
      elg3.style.display = "none"

    } else {
      a.style.display = "block"
      elg1.style.display = "block"
      elg2.style.display = "block"
      elg3.style.display = "block"
      elg1.style.color = "white"
      elg2.style.color = "white"
      elg3.style.color = "white"
      elg1.style.padding = "14px 16px"
      elg2.style.padding = "14px 16px"
      elg3.style.padding = "14px 16px"
      elg1.style.textDecoration = "none"
      elg2.style.textDecoration = "none"
      elg3.style.textDecoration = "none"
      elg1.style.backgroundColor = "#333"
      elg2.style.backgroundColor = "#333"
      elg3.style.backgroundColor = "#333"

    }
  }