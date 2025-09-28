document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.product-tabs ul li');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => tab.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });
});