// Массив всех файлов с указанием раздела
const files = [
    { name: "1Пособие по орнаменту222.docx", path: "doc/1Пособие по орнаменту222.docx", label: "Скачать документ", section: "dpi-kostyum" },
    { name: "армянский кост белокрылова +.pptx", path: "pttx/армянский кост белокрылова +.pptx", label: "Скачать презентацию", section: "dpi-kostyum" },
    { name: "Технология ковроткачества.pptx", path: "pptx/Технология ковроткачества.pptx", label: "Скачать презентацию", section: "dpi-kover1" },
    { name: "Тюменский ковёр.pdf", path: "pdf/Tyumenskiy_kovyor_pptx.pdf", label: "Скачать PDF", section: "dpi-kover" },
    { name: "Тюменская жизнь наследие в искусстве и культуре.pdf", path: "pdf/«Тюменская жизнь_ наследие в искусстве и культуре».pdf", label: "Скачать PDF", section: "dpi-pdf2" },
    { name: "Тюменское здочество.pdf", path: "pdf/Tyumenskoe_zodchestvo_pptx.pdf", label: "Скачать PDF", section: "dpi-pdf4" },
    { name: "Каманская роспись.pdf", path: "pdf/Tyumenskaya_karmatskaya_rospis.pdf", label: "Скачать PDF", section: "dpi-pdfq" }
  ];

  // Иконки для различных типов файлов
  const icons = {
    doc: "https://img.icons8.com/color/48/000000/ms-word.png",
    docx: "https://img.icons8.com/color/48/000000/ms-word.png",
    ppt: "https://img.icons8.com/color/48/000000/microsoft-powerpoint-2019.png",
    pptx: "https://img.icons8.com/color/48/000000/microsoft-powerpoint-2019.png",
    pdf: "https://img.icons8.com/color/48/000000/pdf.png",
    default: "https://img.icons8.com/color/48/000000/file.png"
  };

  // Функция для генерации блока загрузки
  function createDownloadBlock(file) {
    const fileExtension = file.name.split('.').pop().toLowerCase();
    const iconSrc = icons[fileExtension] || icons.default;

    return `
      <div class="download-block">
        <a class="download-link" download="${file.path}" href="${file.path}">
          <img class="file-icon" alt="File icon" src="${iconSrc}">
          <span class="file-name">${file.name}</span>
          <span class="custom-file-name">${file.label}</span>
        </a>
      </div>
    `;
  }

  // Функция для отображения файлов в указанном контейнере по ID
  function displayFiles(sectionId) {
    const sectionFiles = files.filter(file => file.section === sectionId);
    const container = document.getElementById(sectionId);
    if (container) {
      container.innerHTML = sectionFiles.map(createDownloadBlock).join('');
    }
  }

  // Вызов функции для каждого раздела
displayFiles("dpi-kostyum");
displayFiles("dpi-kover");