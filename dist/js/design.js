import { portoUI, modalDetail, imgModal } from './templatePorto.js'

const data_gambar = [
  {
    id: "1",
    url: "../assets/portfolio/amplop/damplop7.png",
    category: "design",
    type: "harizontal",
    theme: "Graphel",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain amplop - tema Graphel?'
  },
  {
    id: "2",
    url: "../assets/portfolio/mobile/dmobile4.png",
    category: "design",
    type: "harizontal",
    theme: "Asmodeus",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain aplikasi - tema Asmodeus?'
  },
  {
    id: "3",
    url: "../assets/portfolio/banner/dbanner2.png",
    category: "design",
    type: "harizontal",
    theme: "Cipher",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain banner - tema Cipher?'
  },
  {
    id: "4",
    url: "../assets/portfolio/brochure/dbrochure5.png",
    category: "design",
    type: "vertical",
    theme: "Empathy",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain brosur - tema Empathy?'
  },
  {
    id: "5",
    url: "../assets/portfolio/calendar/dcalendar1.png",
    category: "design",
    type: "harizontal",
    theme: "Azure",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain kalender - tema Azure?'
  },
  {
    id: "6",
    url: "../assets/portfolio/cardname/dcardname2.png",
    category: "design",
    type: "harizontal",
    theme: "Maxie",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain kartu nama - tema Maxie?'
  },
  {
    id: "7",
    url: "../../assets/portfolio/website/dweb5.png",
    category: "design",
    type: "harizontal",
    theme: "Kithunder",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain website - tema Kithunder?'
  },
  {
    id: "8",
    url: "../../assets/portfolio/amplop/damplop3.png",
    category: "design",
    type: "harizontal",
    theme: "Clesber",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain amlop - tema Clesber?'
  },
  {
    id: "9",
    url: "../assets/portfolio/mobile/dmobile6.png",
    category: "design",
    type: "harizontal",
    theme: "Tachyon",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain brosur - tema Tachyon?'
  },
  {
    id: "10",
    url: "../assets/portfolio/banner/dbanner1.png",
    category: "design",
    type: "harizontal",
    theme: "Photon",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain banner - tema Photon?'
  },
  {
    id: "11",
    url: "../assets/portfolio/brochure/dbrochure1.png",
    category: "design",
    type: "vertical",
    theme: "Aberforth",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain brosur - tema Aberforth?'
  },
  {
    id: "12",
    url: "../assets/portfolio/calendar/dcalendar2.png",
    category: "design",
    type: "harizontal",
    theme: "BlazBlue",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain kalender - tema BlazBlue?'
  },
  {
    id: "13",
    url: "../assets/portfolio/cardname/dcardname6.png",
    category: "design",
    type: "harizontal",
    theme: "Aocean",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain kartu nama - tema Aocean?'
  },
  {
    id: "14",
    url: "../../assets/portfolio/website/dweb4.png",
    category: "design",
    type: "harizontal",
    theme: "Dorothy",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain brosur - tema Dorothy?'
  },
]

const porto_gambar = document.getElementById("porto_gambar");
portoUI(data_gambar, porto_gambar)

// Modal Detail Image
const images = porto_gambar.querySelectorAll(".design");
const chat_btn = document.getElementById("chat-btn");
const testi_card = document.getElementById("controls-carousel");
const body = document.querySelector("html")
let img_src;

modalDetail(images, img_src, chat_btn, body, testi_card, porto_gambar);

