import { portoUI, modalDetail, imgModal } from '../templatePorto.js'

const data_gambar = [
  {
    id: "1",
    url: "../../assets/portfolio/brochure/dbrochure1.png",
    category: "brosur",
    type: "vertical",
    theme: "Aberforth",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain brosur - tema Hecadoth?'
  },
  {
    id: "2",
    url: "../../assets/portfolio/brochure/dbrochure2.png",
    category: "brosur",
    type: "vertical",
    theme: "Bulltaro",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain brosur - tema Bulltaro?'
  },
  {
    id: "3",
    url: "../../assets/portfolio/brochure/dbrochure3.png",
    category: "brosur", 
    type: "vertical",
    theme: "Califax",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain brosur - tema Califax?'
  },
  {
    id: "4",
    url: "../../assets/portfolio/brochure/dbrochure4.png",
    category: "brosur", 
    type: "vertical",
    theme: "Darlton",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain brosur - tema Darlton?'
  },
  {
    id: "5",
    url: "../../assets/portfolio/brochure/dbrochure5.png",
    category: "brosur", 
    type: "vertical",
    theme: "Empathy",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain brosur - tema Empathy?'
  },
  {
    id: "6",
    url: "../../assets/portfolio/brochure/dbrochure6.png",
    category: "brosur",
    type: "harizontal",
    theme: "Franklin",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain brosur - tema Franklin?'
  },
]

const porto_gambar = document.getElementById("porto_gambar");
portoUI(data_gambar, porto_gambar)

// Modal Detail Image
const images = porto_gambar.querySelectorAll(".brosur");
const chat_btn = document.getElementById("chat-btn");
const testi_card = document.getElementById("controls-carousel");
const body = document.querySelector("html")
let img_src;

modalDetail(images, img_src, chat_btn, body, testi_card, porto_gambar);

