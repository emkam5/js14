document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const activeTab = document.querySelector('.tab.active');
            const activeContent = document.querySelector('.tab-content.active');

            // Убираем класс активности у предыдущей вкладки и содержимого
            activeTab.classList.remove('active');
            activeContent.classList.remove('active');

            // Добавляем класс активности к текущей вкладке и соответствующему содержимому
            tab.classList.add('active');
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});
