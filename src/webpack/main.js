import ScrollAnimejs from './modules/scroll-animejs';
import loadImages from './modules/image-load';

window.addEventListener(
  'load',
  () => {
    loadImages([
      `https://dummyimage.com/600x4000/000/fff?1`,
      `https://dummyimage.com/600x400/000/fff?2`,
      `https://dummyimage.com/600x400/000/fff?3`
    ]).then(
      () => {
        const scrollAnimejs = new ScrollAnimejs();

        scrollAnimejs.addEvent();
      },
      err => {
        console.log(err);
      }
    );
  },
  false
);
