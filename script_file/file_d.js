// Массив всех файлов с указанием раздела
const files = [
    { name: "1Пособие по орнаменту222.docx", path: "doc/1Пособие по орнаменту222.docx", label: "Скачать документ", section: "dpi-kostyum" },
    { name: "армянский кост белокрылова +.pptx", path: "pttx/армянский кост белокрылова +.pptx", label: "Скачать презентацию", section: "dpi-kostyum" },
    { name: "Технология ковроткачества.pptx", path: "pptx/Технология ковроткачества.pptx", label: "Скачать презентацию", section: "dpi-kover" }
  ];

  // Иконки для различных типов файлов
  const icons = {
    doc: "https://img.icons8.com/color/48/000000/ms-word.png",
    docx: "https://img.icons8.com/color/48/000000/ms-word.png",
    ppt: "https://img.icons8.com/color/48/000000/microsoft-powerpoint-2019.png",
    pptx: "https://img.icons8.com/color/48/000000/microsoft-powerpoint-2019.png",
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