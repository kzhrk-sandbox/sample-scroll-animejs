function loadImage(imgPath) {
  return new Promise((resolve, reject) => {
    const newImage = new Image();

    newImage.addEventListener('load', () => {
      resolve(newImage);
    });

    newImage.addEventListener('error', () => {
      reject(`[ERROR] ${imgPath} is not found.`);
    });

    newImage.src = imgPath;
  });
}

export default async function loadImages(imagePaths) {
  const result = [];

  for (let i = 0; i < imagePaths.length; i++) {
    result.push(await loadImage(imagePaths[i]));
  }

  return result;
}
