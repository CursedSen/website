let originalTitle = "技術は、どんなに速くても無駄になることがある。だが、経験は裏切らない。~ ";
let title = originalTitle;
let scrollSpeed = 450;

function scrollTitle() {
    document.title = title;
    title = title.substring(1) + title.charAt(0);
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(scrollTitle, scrollSpeed);

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach(section => section.style.display = 'none');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            sections.forEach(section => section.style.display = 'none');
            
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).style.display = 'block';
        });
    });

    let sentences = [
        "I'm a 19-year old catto from the Netherlands.",
        "Interested in systems, security and networking.",
        "Cat lover! :3",
        "Avid Arch Linux user, btw.",
        "Open-source enthusiast.",
        "System administrator.",
        "Hobby programmer.",
        "Dark Souls speedrunner.",
        "OptiFine shill.",
    ];
    let sentenceIndex = 0;
    let textElement = document.getElementById("typingText");
    let typingSpeed = 20;
    let deletingSpeed = 10;
    let pauseBetweenSentences = 2500;

    function typeText() {
        let sentence = sentences[sentenceIndex];
        let i = 0;
        textElement.textContent = "";
        let typingInterval = setInterval(() => {
            textElement.textContent += sentence.charAt(i);
            i++;
            if (i === sentence.length) {
                clearInterval(typingInterval);
                setTimeout(deleteText, pauseBetweenSentences);
            }
        }, typingSpeed);
    }

    function deleteText() {
        let i = textElement.textContent.length;
        let deletingInterval = setInterval(() => {
            textElement.textContent = textElement.textContent.slice(0, i - 1);
            i--;
            if (i === 0) {
                clearInterval(deletingInterval);
                sentenceIndex = (sentenceIndex + 1) % sentences.length;
                setTimeout(typeText, 500);
            }
        }, deletingSpeed);
    }

    typeText();
}); 