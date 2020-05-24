module.exports = (slide) => {
  const bindTabs = (triggerSelector, contentSelector, activeSelector) => {
    const trigger = slide.querySelectorAll(triggerSelector);
    const content = slide.querySelector(contentSelector);
    const active = activeSelector
    const child = [...content.children]
    let counter = 0;

    document.querySelectorAll('.promo-slider__tabs-item').forEach((item, index) => {
      if (index === counter) {
        item.style.display = 'block';
        counter += 3;
      }

    })

    trigger.forEach((item, i) => {
      item.addEventListener('click', (e) => {
        hideTabs();
        e.preventDefault();
        showTabs(i);
      })
    });

    const hideTabs = () => {
      trigger.forEach((item) => {
        item.classList.remove(active);
      });

      child.forEach((item) => {
        item.style.display = 'none';
      })
    };

    const showTabs = (i) => {
      trigger[i].classList.add(active);
      child[i].style.display = 'block';
    }

    hideTabs();
    showTabs(0)
  };

  bindTabs('.promo-slider___tab', '.promo-slider__tabs-catalog', 'promo-slider___tab--active');
};
