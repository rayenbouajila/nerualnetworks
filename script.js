const text = document.querySelector(".secondtxt");
const names = ["Ghazi Mouaddeb", "Ahmed Baccouche", "Mohamed Houcine","Rayen Bouajila"];
let index = 0;

const textLoad = () => {
    setInterval(() => {
        text.textContent = names[index];
        index = (index + 1) % names.length;
    }, 4000);
}

textLoad();

function scrollToClass(className) {
    const section = document.querySelector('.' + className);
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
    
    // Prevent default behavior of anchor tag
    event.preventDefault();
}