// script.js

// Загрузка постов
const posts = [
    { title: "Новый стрим!", content: "Сегодня играем на миду за Invoker. Не пропустите!" },
    { title: "Обновление DotA 2", content: "Разбираем последний патч и новые изменения." }
];

const postsContainer = document.getElementById("posts");

posts.forEach(post => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.content}</p>
  `;
    postsContainer.appendChild(postElement);
});

// Загрузка расписания
const schedule = [
    { date: "2025-05-25", time: "06:59", description: "какое расписание вы че" },
];

const scheduleContainer = document.getElementById("stream-schedule");

schedule.forEach(event => {
    const eventElement = document.createElement("li");
    eventElement.innerHTML = `
    <strong>${event.date} ${event.time}</strong>: ${event.description}
  `;
    scheduleContainer.appendChild(eventElement);
});