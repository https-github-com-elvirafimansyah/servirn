import { portoUI, modalDetail, imgModal } from '../templatePorto.js'

const data_gambar = [
  {
    id: "1",
    url: "../../assets/portfolio/mobile/dmobile1.png",
    category: "mobile",
    note:"harizontal",
    theme: "Hecadoth",
      note: 'Selamat pagi/siang/malam, saya mau pesan/order desain aplikasi - tema Hecadoth?'
  },
  {
    id: "2",
    url: "../../assets/portfolio/mobile/dmobile2.png",
    category: "mobile",
    type: "harizontal",
    theme: "Endora",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain aplikasi - tema Endora?'
  },
  {
    id: "3",
    url: "../../assets/portfolio/mobile/dmobile3.png",
    category: "mobile",
    type: "harizontal",
    theme: "Enchantra",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain aplikasi - tema Enchantra?'
  },
  {
    id: "4",
    url: "../../assets/portfolio/mobile/dmobile4.png",
    category: "mobile",
    type: "harizontal",
    theme: "Asmodeus",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain aplikasi - tema Asmodeus?'
  },
  {
    id: "5",
    url: "../../assets/portfolio/mobile/dmobile5.png",
    category: "mobile",
    type: "harizontal",
    theme: "Vixis",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain aplikasi - tema Vixis?'
  },
  {
    id: "6",
    url: "../../assets/portfolio/mobile/dmobile6.png",
    category: "mobile",
    type: "harizontal",
    theme: "Tachyon",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain aplikasi - tema Tachyon?'
  },
]

const porto_gambar = document.getElementById("porto_gambar");
portoUI(data_gambar, porto_gambar)

// Modal Detail Image
const images = porto_gambar.querySelectorAll(".mobile");
const chat_btn = document.getElementById("chat-btn");
const testi_card = document.getElementById("controls-carousel");
const body = document.querySelector("html")
let img_src;

modalDetail(images, img_src, chat_btn, body, testi_card, porto_gambar);