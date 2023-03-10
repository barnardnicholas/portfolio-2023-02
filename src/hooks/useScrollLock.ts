import { MutableRefObject, useEffect } from 'react';

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
// const keys: Record<number, number> = { 37: 1, 38: 1, 39: 1, 40: 1 };

// type Opt = boolean | EventListenerOptions;

// function preventDefault(e) {
//   e.preventDefault();
// }

// function preventDefaultForScrollKeys(e: KeyboardEvent) {
//   if (keys[e.keyCode]) {
//     preventDefault(e);
//     return false;
//   }
// }

const cancelScrollEvent = (e: WheelEvent) => {
  e.stopImmediatePropagation();
  e.preventDefault();
  return false;
};

const useScrollLock = (elementRef: MutableRefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const element = elementRef?.current;

    // let supportsPassive = false;
    // try {
    //   // @ts-ignore
    //   window.addEventListener(
    //     'test',
    //     null,
    //     Object.defineProperty({}, 'passive', {
    //       get: function () {
    //         supportsPassive = true;
    //       },
    //     }),
    //   );
    // } catch (e) {}
    // const wheelOpt = supportsPassive ? { passive: false } : false;
    // const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    // function disableScroll() {
    //   if (!!element) {
    //     element.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    //     element.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    //     element.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    //     element.addEventListener('keydown', preventDefaultForScrollKeys, false);
    //   }
    // }

    // // call this to Enable
    // function enableScroll() {
    //   if (!!element) {
    //     element.removeEventListener('DOMMouseScroll', preventDefault, false);
    //     element.removeEventListener(
    //       wheelEvent as keyof HTMLElementEventMap,
    //       preventDefault,
    //       wheelOpt as Opt,
    //     );
    //     element.removeEventListener('touchmove', preventDefault, wheelOpt as Opt);
    //     element.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    //   }
    // }

    const onScrollHandler = (e: WheelEvent) => {
      if (!element) return;
      const scrollTop = element.scrollTop;
      const scrollHeight = element.scrollHeight;
      const height = element.clientHeight;
      const wheelDelta = e.deltaY;
      const isDeltaPositive = wheelDelta > 0;

      if (isDeltaPositive && wheelDelta > scrollHeight - height - scrollTop) {
        element.scrollTop = scrollHeight;
        return cancelScrollEvent(e);
      } else if (!isDeltaPositive && -wheelDelta > scrollTop) {
        element.scrollTop = 0;
        return cancelScrollEvent(e);
      }
    };

    if (!!element) {
      element.addEventListener('wheel', onScrollHandler, false);
    }
    // disableScroll();

    return () => {
      if (!!element) {
        element.removeEventListener('wheel', onScrollHandler, false);
      }
      //   enableScroll();
    };
  }, [elementRef]);
};

export default useScrollLock;
