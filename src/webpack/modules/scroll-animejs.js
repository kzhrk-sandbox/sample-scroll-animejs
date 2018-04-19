import anime from 'animejs';

/**
 *  @description
 *  data-optionはJSON.parse渡すのでJSON形式
 *
 *  @example
 *  const scrollAnimejs = new ScrollAnimejs();
 *  scrollAnimejs.addEvent();
 *
 *  <div class="js-animejs" data-option='{"translateX": 100}'></div>
 */
export default class ScrollAnimejs {
  /**
   *
   * @param selector {string} CSS Selector
   */
  constructor({ selector = '.js-animejs' } = {}) {
    this.targets = document.querySelectorAll(selector);
  }

  /**
   * イベント付与
   */
  addEvent() {
    window.addEventListener('scroll', this.onScroll.bind(this), false);
  }

  /**
   * scrollイベント
   */
  onScroll() {
    [...this.targets].filter(this.canScroll).forEach(this.startAnime);
  }

  /**
   * targetのDOMが画面内に入り、アニメーション可能かどうか
   *
   * @param target {object} Element Node
   * @returns {boolean}
   */
  canScroll(target) {
    if (!target.isAnimation && !target.isCompleted) {
      const topBorder = target.dataset.top
        ? parseFloat(target.dataset.top, 10)
        : window.innerHeight;

      const bottomBorder = target.dataset.bottom
        ? window.innerHeight + -1 * parseFloat(target.dataset.bottom, 10)
        : window.innerHeight;

      return (
        target.getBoundingClientRect().top < topBorder &&
        target.getBoundingClientRect().bottom <= bottomBorder
      );
    } else {
      return false;
    }
  }

  /**
   * targetのElement Nodeのdataset.optionを元に、
   * anime.jsを実行。
   *
   * @param target {object} Element Node
   */
  startAnime(target) {
    let animeParameter = Object.assign(
      {
        targets: target,
        begin: () => {
          target.isAnimation = true;
        },
        complete: () => {
          target.isAnimation = false;
          target.isCompleted = true;
        }
      },
      JSON.parse(target.dataset.option)
    );

    anime(animeParameter);
  }
}
