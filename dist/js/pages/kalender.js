import { portoUI, modalDetail, imgModal } from '../templatePorto.js'

const data_gambar = [
  {
    id: "1",
    url: "../../assets/portfolio/calendar/dcalendar1.png",
    category: "calendar",
    type: "harizontal",
    theme: "Azure",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain kalender - tema Azure?'
  },
  {
    id: "2",
    url: "../../assets/portfolio/calendar/dcalendar2.png",
    category: "calendar", 
    type: "harizontal",
    theme: "BlazBlue ",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain kalender - tema BlazBlue?'
  },
  {
    id: "3",
    url: "../../assets/portfolio/calendar/dcalendar3.png",
    category: "calendar",
    type: "harizontal",
    theme: "Retro",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain kalender - tema Retro?'
  },
  {
    id: "4",
    url: "../../assets/portfolio/calendar/dcalendar4.png",
    category: "calendar", 
    type: "harizontal",
    theme: "Malefic",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain kalender - tema Malefic?'
  },
  {
    id: "5",
    url: "../../assets/portfolio/calendar/dcalendar5.png",
    category: "calendar",  
    type: "harizontal",
    theme: "Hivolt",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain kalender - tema Hivolt?'
  },

]

const porto_gambar = document.getElementById("porto_gambar");
portoUI(data_gambar, porto_gambar)

// Modal Detail Image
const images = porto_gambar.querySelectorAll(".calendar");
const chat_btn = document.getElementById("chat-btn");
const testi_card = document.getElementById("controls-carousel");
const body = document.querySelector("html")
let img_src;

modalDetail(images, img_src, chat_btn, body, testi_card, porto_gambar);

