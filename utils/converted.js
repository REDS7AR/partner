
// --- КОНВЕРТАЦИЯ ПИКСЕЛЕЙ В EM --- //

  const FONT_SIZE = 14; // Базовый размер шрифта в body

  let pixelToEm = (pixels, fontSize) => {
    return pixels / fontSize + 'em';
  }

  let pixels = 16; // Размер шрифта в пикселях

  const result = pixelToEm(pixels, FONT_SIZE);

  console.log(result);

