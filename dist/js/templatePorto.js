// template porto ui
export function portoUI(data, container) {
  data.forEach((item) => {
    const div_parent = document.createElement("div");
    div_parent.classList.add(`${item.category}`)
    div_parent.setAttribute("type", `${item.type}`);
    div_parent.setAttribute("theme", `${item.theme}`)
    div_parent.setAttribute('note', `${item.note}`)
    div_parent.innerHTML = `
      <img src="${item.url}" class="rounded-md max-w-full h-auto mb-3" />
    `
    container.appendChild(div_parent)
  })
}

// template porto ui website
export function portoWebUI(data, container) {
  data.forEach((item) => {
    const div_parent = document.createElement("div");
    div_parent.classList.add(`${item.category}`)
    div_parent.setAttribute("type", `${item.type}`);
    div_parent.setAttribute("theme", `${item.theme}`)
    div_parent.setAttribute('note', `${item.note}`)
    div_parent.innerHTML = `
      <a href="${item.link}" target="_blank"><img src="${item.url}" class="rounded-md max-w-full h-auto mb-3" /></a>
    `
    container.appendChild(div_parent)
  })
}

// modal detail image
export function modalDetail(images, img_src, chat_element, html_element, testi_element, container_e) {
  images.forEach((img) => {
    img.addEventListener('click', (e) => {
      img_src = e.target.src;
      chat_element.classList.add('hidden');
      html_element.classList.add("overflow-hidden");
      testi_element.classList.add("hidden");
      imgModal(img_src, container_e, chat_element, html_element, testi_element, img)
    })
  })
}

export function imgModal(src, container_e, chat_element, html_element, testi_element, img_e) {
  const modal = document.createElement("div");
  const modalContent = document.createElement("div");
  modalContent.setAttribute("class", "flex justify-center items-center flex-col ")
  modal.setAttribute("class", "fixed top-0 left-0 z-99 w-screen h-screen bg-black/80 flex justify-center items-center animate-modal")
  container_e.append(modal);
  // Modal Img
  const modalImg = document.createElement("img");
  modalImg.setAttribute("class", `sm:w-3/4 ${img_e.getAttribute("type") === "vertical" ? "lg:w-1/3 md:w-3/5 mt-5"  : "lg:w-1/2 lg:mt-10"}`)
  modalImg.setAttribute("src", src)
  // Caption Text
  const captionText = document.createElement("p");
  captionText.innerText = `${img_e.getAttribute("theme")}`
  captionText.setAttribute("class", "text-lg text-white pt-2 font-medium")
  modalContent.append(modalImg, captionText)
  // Close Modal
  const closeModal = document.createElement("button");
  closeModal.setAttribute("class", "absolute top-16 right-3 md:top-32 lg:top-20 md:right-5")
  closeModal.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" class="bi bi-x" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg>
  `
  closeModal.addEventListener("click", () => {
    modal.remove();
    html_element.classList.remove("overflow-hidden");
    chat_element.classList.remove('hidden');
    testi_element.classList.remove("hidden");
  })

  // Order Button
  const orderBtn = document.createElement("a");
  const noteText = img_e.getAttribute("note");
  // konversi plain text ke encode 
  let space_string,
  line_break,
  wa_url;
  space_string = noteText.replace(/ /g, "%20");
  line_break = space_string.replace(/(\r\n|\n|\r)/gm, "%0A");
  console.log(line_break)
  wa_url = `https://wa.me/62089636406145?text=${line_break}`
  // order ui
  orderBtn.setAttribute("class", `bg-white shadow-chat pr-[5rem] pl-6 py-4 fixed md:right-10 md:bottom-10 rounded-2xl text-darkcolor font-medium right-5 bottom-5`)
  orderBtn.setAttribute("href", `${wa_url}`)
  orderBtn.setAttribute("target", "_blank")
  orderBtn.innerHTML = `
    <div class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart " viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>&nbsp;&nbsp;
      <p class="text-sm">Pesan Tema <br> ${img_e.getAttribute("theme")}</p>
    </div>
    <div class="absolute -top-1 -right-3">
      <div class="bg-limegreen flex items-center justify-center w-[5rem] h-[5rem] rounded-full">
        <iconify-icon icon="ic:baseline-whatsapp" class="text-white" width="40" height="40"></iconify-icon>
      </div>
    </div>
  `

  // Apply
  modal.append( modalContent, closeModal, orderBtn )
};