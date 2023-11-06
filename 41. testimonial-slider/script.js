document.addEventListener('DOMContentLoaded', () => {
        const reviews = [
        {
            author: 'Sarah Smith',
            job: 'Business Owner',
            text: 'I had a fantastic experience working with CodeWise Solutions and Tech Services. Their web development team delivered a stunning website for my business. The e-commerce solutions they provided have boosted our online sales. Their UI/UX design made the site user-friendly, and their cloud computing services ensure our data is secure and accessible. Highly recommended!'
        },            
        {
            author: 'John Johnson',
            job: 'IT Manager',
            text: 'CodeWise Solutions and Tech Services is a game-changer! As an IT manager, I needed a partner with expertise. Their web development expertise transformed our outdated site into a modern, responsive masterpiece. The e-commerce solutions they implemented have streamlined our sales process. The UI/UX design is top-notch, making navigation a breeze. Their cloud computing services provide peace of mind. A top-notch tech partner!'
        },
        {
            author: 'Emily Davis',
            job: 'Marketing Manager',
            text: 'CodeWise Solutions and Tech Services exceeded my expectations. As a marketing manager, I needed a website that reflects our brand. Their web development team created a website that\'s beautiful. The e-commerce solutions have simplified our online transactions. The UI/UX design is intuitive. Their cloud computing services ensure our data is safe. A reliable and innovative tech partner'
        },
        {
            author: 'Lisa Brown',
            job: 'E-commerce Manager',
            text: 'CodeWise Solutions and Tech Services is a true tech powerhouse. As an e-commerce manager, I needed solutions that boost sales. Their web development expertise transformed our site. The e-commerce solutions have boosted our sales. The UI/UX design is clean and user-friendly. Their cloud computing services keep our data safe and accessible. I\'m delighted with their services and support!'
        },
        {
            author: 'Micheal Wilson',
            job: 'Software Developer',
            text: 'CodeWise Solutions and Tech Services is a professional and efficient tech partner. As a software developer, I appreciate their work. Their web development service revamped our website\'s performance. The e-commerce solutions have increased our online sales significantly. The UI/UX design is sleek and functional. With their cloud computing, our data is always secure. I\'m impressed with their work!'
        }

    ]

    const myAuthor = document.getElementById('author');
    const myJob = document.getElementById('job');
    const myText = document.getElementById('text');
    const prev = document.getElementById('prev-btn');
    const next = document.getElementById('next-btn');

    let indexNum = 0;
    let length = reviews.length;

    next.addEventListener('click', function () {
        indexNum++;
        if (indexNum > length-1) {
            indexNum = 0;
            myAuthor.innerHTML = reviews[indexNum].author;
            myJob.innerHTML = reviews[indexNum].job;
            myText.innerHTML = reviews[indexNum].text;
        }
        else {
            myAuthor.innerHTML = reviews[indexNum].author;
            myJob.innerHTML = reviews[indexNum].job;
            myText.innerHTML = reviews[indexNum].text;
        }
    })

    prev.addEventListener('click', function () {
        indexNum--;
        if (indexNum < 0) {
            indexNum = 4;
            myAuthor.innerHTML = reviews[indexNum].author;
            myJob.innerHTML = reviews[indexNum].job;
            myText.innerHTML = reviews[indexNum].text;
        }
        else {
            myAuthor.innerHTML = reviews[indexNum].author;
            myJob.innerHTML = reviews[indexNum].job;
            myText.innerHTML = reviews[indexNum].text;
        }
    })
})