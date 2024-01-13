import { data } from './data/data.js';


// navbar fixed top scroll 
document.addEventListener("scroll", function () {
  const navbar = document.querySelector("#navbar-home");
  if (this.body.scrollTop > 1 || this.documentElement.scrollTop > 1) {
    navbar.classList.add(["bg-white"], ["shadow-card"]);
  } else {
    navbar.classList.remove(["bg-white"], ["shadow-card"]);
  }
});



// Testimonial Data Display

// Main Parent
const container = document.getElementById('testi-parent');
// Display Data
const parent = document.createElement("div");
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn');

container.appendChild(parent);

parent.innerHTML = `
  <div class="">
      <div class="flex justify-center items-center w-full h-full flex-col">
      <div class="bg-white relative border-2 border-gray-100 h-full w-9/12 md:w-10/12 md:space-y-3 space-y-2  rounded-xl">
          <div class="p-4 sm:p-7 md:space-y-3 space-y-2">
          <div class="bg-slightblue rounded-full p-1.5 w-fit flex items-center break-words">
              <img
              src="${data[0].profile}"
              class="rounded-full w-10 md:w-14 img_testi" />
          </div>
          <h2 class="font-extrabold sm:text-3xl text-xl name_testi">${data[0].name}</h2>
          <div class="text-md sm:text-xl content_testi">${data[0].testi}
          </div>
          </div>

          <div class="w-full">
          <div class="w-full p-4 md:p-7">
              <div class="flex flex-col sm:flex-row items-center justify-between">
              <p class="text-md sm:text-xl font-extrabold date_testi">${data[0].date}</p>
              <img src="./../../assets/brand.png" class="h-6 sm:h-7 mr-3" alt="Servirn logo">
              </div>
          </div>
          </div>
      </div>
      </div>
  </div>
`

// testimonial
const testiImg = document.querySelector('.img_testi');
const testiName = document.querySelector('.name_testi');
const testiContent = document.querySelector('.content_testi');
const testiDate = document.querySelector('.date_testi');

let idx = 0;
prevBtn.addEventListener('click', () => {
  idx--;
  changeTesti();
})
nextBtn.addEventListener('click', () => {
  idx++;
  changeTesti();
})

function changeTesti() {
  if (idx <= 0) {
    idx = data.length - 1;
  } else if (idx >= 5) {
    idx = 0;
  }
  testiImg.src = data[idx].profile;
  testiName.innerText = data[idx].name;
  testiContent.innerText = data[idx].testi;
  testiDate.innerText = data[idx].date;
}

// form contact google sheets
const scriptURL = "https://script.google.com/macros/s/AKfycbwj2XGwyx192FvU2_VFvU6QHPcwW5GgxrkQEdsr2gLyia9Zl8HHumu-zInzBOJ9T3A7qw/exec"
const form = document.querySelectorAll("#servirn_form");
const loadingEl = document.querySelector("#loading");
const sendBtn = document.querySelector("#send-btn");
form.forEach(el => {
  el.addEventListener("submit", e => {
    e.preventDefault();
    loadingEl.classList.toggle("hidden");
    sendBtn.classList.toggle("hidden");
    fetch(scriptURL, { method: 'POST', body: new FormData(el) })
      .then(response => {
        console.log('Success!');
        loadingEl.classList.toggle("hidden");
        sendBtn.classList.toggle("hidden");
        // clear form input
        const all_input_el = el.querySelectorAll("input");
        all_input_el.forEach(el => {
          el.value = ""
        })
        const message_input = el.querySelector("textarea")
        message_input.value = ""
      })
      .catch(error => {
        console.error('Error!', error.message)
        loadingEl.classList.toggle("hidden");
        sendBtn.classList.toggle("hidden");
      } )
  });
})


// chat kami 
const chatKamiBtn = document.querySelector("#chat-btn")
let space_string,
line_break,
wa_url;
const noteText = chatKamiBtn.getAttribute("note")
space_string = noteText.replace(/ /g, "%20");
line_break = space_string.replace(/(\r\n|\n|\r)/gm, "%0A");
wa_url = `https://wa.me/62089636406145?text=${line_break}`
chatKamiBtn.href = wa_url

