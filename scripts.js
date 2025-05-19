// Активация ссылок в навигации
document.querySelectorAll('.choosing_tour_link').forEach(link => {
    link.addEventListener('click', (e) => {
        document.querySelectorAll('.choosing_tour_link').forEach(item => {
            item.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
    });
});

// Переключение радио-кнопок
document.querySelectorAll('.choose').forEach(choose => {
    choose.addEventListener('click', () => {
        document.querySelectorAll('.circle').forEach(circle => {
            circle.classList.remove('active');
        });
        choose.querySelector('.circle').classList.add('active');
    });
});