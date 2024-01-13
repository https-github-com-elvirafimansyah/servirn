import { portoUI, modalDetail, imgModal } from '../templatePorto.js'

const data_gambar = [
  {
    id: "1",
    url: "../../assets/portfolio/cardname/dcardname1.png",
    category: "cardname",
    type: "harizontal",
    theme: "Clyde",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain kartu nama - tema Clyde?'
  },
  {
    id: "2",
    url: "../../assets/portfolio/cardname/dcardname2.png",
    category: "cardname", 
    type: "harizontal",
    theme: "Maxie",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain kartu nama - tema Maxie?'
  },
  {
    id: "3",
    url: "../../assets/portfolio/cardname/dcardname3.png",
    category: "cardname",
    type: "harizontal",
    theme: "Aluxes",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain kartu nama - tema Aluxes?'
  },
  {
    id: "4",
    url: "../../assets/portfolio/cardname/dcardname4.png",
    category: "cardname", 
    type: "harizontal",
    theme: "Heral",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain kartu nama - tema Heral?'
  },
  {
    id: "5",
    url: "../../assets/portfolio/cardname/dcardname5.png",
    category: "cardname",  
    type: "harizontal",
    theme: "Knight",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain kartu nama - tema Knight?'
  },
  {
    id: "6",
    url: "../../assets/portfolio/cardname/dcardname6.png",
    category: "cardname", 
    type: "harizontal",
    theme: "Aocean",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain kartu nama - tema Aocean?'
  },
  {
    id: "7",
    url: "../../assets/portfolio/cardname/dcardname7.png",
    category: "cardname",  
    type: "harizontal",
    theme: "Kithunder",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain kartu nama - tema Kithunder?'
  },
]

const porto_gambar = document.getElementById("porto_gambar");
portoUI(data_gambar, porto_gambar)

// Modal Detail Image
const images = porto_gambar.querySelectorAll(".cardname");
const chat_btn = document.getElementById("chat-btn");
const testi_card = document.getElementById("controls-carousel");
const body = document.querySelector("html")
let img_src;

modalDetail(images, img_src, chat_btn, body, testi_card, porto_gambar);

