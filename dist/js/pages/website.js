import { portoUI, modalDetail, imgModal } from '../templatePorto.js'

const data_gambar = [
  {
    id: "1",
    url: "../../assets/portfolio/website/dweb1.png",
    category: "website",
    type: "harizontal",
    theme: "Alfred",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain website - tema Alfred?'
  },
  {
    id: "2",
    url: "../../assets/portfolio/website/dweb2.png",
    category: "website",
    type: "harizontal",
    theme: "Beatrice",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain website - tema Beatrice?'
  },
  {
    id: "3",
    url: "../../assets/portfolio/website/dweb3.png",
    category: "website",
    type: "harizontal",
    theme: "Chemor",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain website - tema Chemor?'
  },
  {
    id: "4",
    url: "../../assets/portfolio/website/dweb4.png",
    category: "website",
    type: "harizontal",
    theme: "Dorothy",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain website - tema Dorothy?'
  },
  {
    id: "5",
    url: "../../assets/portfolio/website/dweb5.png",
    category: "website", 
    type: "harizontal",
    theme: "Edgar",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain website - tema Edgar?'
  },
]

const porto_gambar = document.getElementById("porto_gambar");
portoUI(data_gambar, porto_gambar)

// Modal Detail Image
const images = porto_gambar.querySelectorAll(".website");
const chat_btn = document.getElementById("chat-btn");
const testi_card = document.getElementById("controls-carousel");
const body = document.querySelector("html")
let img_src;

modalDetail(images, img_src, chat_btn, body, testi_card, porto_gambar);

