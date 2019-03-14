 // Функция инициализации табов

 function initializeTabs(element, activeTab = 1) {
  if (!element) {
    throw new Error('Нет элемента для инициализации табов');
  }

  const tabsControls = Array.from(element.querySelectorAll('.js-tab-button'));
  const tabs = Array.from(element.querySelectorAll('.js-tab'));
  const tabsControlsCount = tabsControls.length;
  const tabsCount = tabs.length;
  


  if (tabsControlsCount !== tabsCount) {
    throw new Error('Количество элементов управления не соответствует количеству табов')
  } else if (tabsControlsCount === 0) {
    throw new Error('Отсутствуют элементы управления')
  } else if (tabsCount === 0) {
    throw new Error('Отсутствуют табы')
  }

  const setActiveTab = activeTab => {
    tabsControls.forEach((button, index) => {
      if (index === (activeTab - 1)) {
        button.classList.add('active');
        
      } else {
        button.classList.remove('active');
       
      }
    })
    tabs.forEach((tab, index) => {
      if (index === (activeTab - 1)) {
        // tab.style.display = 'flex';
        tab.classList.add('active');
      } else {
        // tab.style.display = 'none';
        tab.classList.remove('active');
      }
    })
  }


  tabsControls.forEach(button => button.addEventListener('click', function(event) {
    event.preventDefault();
    const activeTab = tabsControls.indexOf(this) + 1;
    if (this.disabled === true) {
      return false;
    } else {
      setActiveTab(activeTab);
    }
  }))

  setActiveTab(activeTab);
}

function makeTabsController() {
  return initializeTabs;
}

// Экспортируем фабрику функций

export default makeTabsController;

