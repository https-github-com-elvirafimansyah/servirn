import { portoUI, modalDetail, imgModal } from '../templatePorto.js'

const data_gambar = [
  {
    id: "1",
    url: "../../assets/portfolio/banner/dbanner1.png",
    category: "banner",
    type: "horizontal",
    theme: "Photon",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain banner - tema Photon?'
  },
  {
    id: "2",
    url: "../../assets/portfolio/banner/dbanner2.png",
    category: "banner",
    type: "horizontal",
    theme: "Cipher ",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain banner - tema Cipher?'
  },
  {
    id: "3",
    url: "../../assets/portfolio/banner/dbanner3.png",
    category: "banner",
    type: "horizontal",
    theme: "Mirage",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain banner - tema Mirage?'
  },
  {
    id: "4",
    url: "../../assets/portfolio/banner/dbanner4.png",
    category: "banner",
    type: "horizontal",
    theme: "Rebellion",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain banner - tema Rebellion?'
  },
  {
    id: "5",
    url: "../../assets/portfolio/banner/dbanner5.png",
    category: "banner",
    type: "horizontal",
    theme: "Vortex",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain banner - tema Vortex?'
  },
  {
    id: "6",
    url: "../../assets/portfolio/banner/dbanner6.png",
    category: "banner",
    type: "horizontal",
    theme: "Blade",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain banner - tema Blade?'
  },
]

const porto_gambar = document.getElementById("porto_gambar");
portoUI(data_gambar, porto_gambar)

// Modal Detail Image
const images = porto_gambar.querySelectorAll(".banner");
const chat_btn = document.getElementById("chat-btn");
const testi_card = document.getElementById("controls-carousel");
const body = document.querySelector("html")
let img_src;

modalDetail(images, img_src, chat_btn, body, testi_card, porto_gambar);