const speakerFirstCards = [
  {
    image: 'images/teacger-1.jpg',
    shape: 'shapes/pattern.png',
    name: 'Jane Garcia',
    proffesional: 'Frontend Developer',
    tag: ' Jane is a frontend developer who believes in the power of design to create beautiful and intuitive user experiences. With her passion for creative problem solving and her expertise in HTML,CSS, and JavaScript',
  },
  {
    image: 'images/hero.png',
    shape: 'shapes/pattern.png',
    name: 'Mark Thompson',
    proffesional: 'Full Stack Developer',
    tag: ' Mark is a full stack developer who loves to build applications that have a positive impact on people lives. His ability to work with a wide range oftechnologies, from React to Node.js, allows him to create dynamic and responsive applications that users love to use',

  },
];

speakerFirstCards.forEach((speakerFirst) => {
  const speakerFirstSection = document.querySelector('.desktop-speakers');
  const first = document.createElement('div');
  first.className = 'card-staff flex';
  first.innerHTML = `<div class="images-section">
  <div class="card-shape">
    <img class="images-absolute" src="${speakerFirst.shape}" alt="pattern shape">
    <img class="images-fixed" src="${speakerFirst.image}" alt="teacher">
  </div>
</div>
<div class="staff-tag flex-column">
  <div class="staff-title flex-column">
    <h1>${speakerFirst.name}</h1>
    <p>${speakerFirst.proffesional}</p>
    <hr class="horizontal-line">
  </div>
  <div class="staff-desc">
    <p>${speakerFirst.tag}</p>
  </div>
</div>`;
  speakerFirstSection.append(first);
});

const speakerSecondCards = [
  {
    image: 'images/teacger-1.jpg',
    shape: 'shapes/pattern.png',
    name: 'Emily Chen',
    proffesional: 'UI/UX Designer',
    tag: 'Emily is a UI/UX designer who is passionate about creating interfaces that are both beautiful and intuitive. With her ability to understand user behavior and her expertise in design tools like Sketch and Figma, she is able to create interfaces that delight users and drive engagement.',
  },
  {
    image: 'images/teacger-1.jpg',
    shape: 'shapes/pattern.png',
    name: 'Mike Johnson',
    proffesional: 'Backend Developer',
    tag: 'Mike is a backend developer who believes in the power of technology to change the world. His expertise in Python, Java, and SQL allows him to create reliable and scalable solutions that are critical to the success of modern businesses',
  },
  {
    image: 'images/staff1.jpg',
    shape: 'shapes/pattern.png',
    name: 'Kate Wilson',
    proffesional: 'Mobile App Developer',
    tag: 'Kate is a mobile app developer who loves to build applications that people use every day. Her expertise in Swift and Java allows her to create fast and responsive applications that are loved by users around the world.',
  },
  {
    image: 'images/teacher-2.jpg',
    shape: 'shapes/pattern.png',
    name: 'Max Rodriguez',
    proffesional: 'DevOps Engineer',
    tag: 'Max is a DevOps engineer who believes in the power of automation to make software development more efficient and effective. His expertise in tools like Docker and Kubernetes allows him to create streamlined workflows that help developers focus on what they do best: writing great code.',
  },
];

speakerSecondCards.forEach((speakerSecond) => {
  const speakerSecondSection = document.querySelector('.more-listed-cards');
  const second = document.createElement('div');
  second.className = 'card-staff flex';
  second.innerHTML = `<div class="images-section">
  <div class="card-shape">
    <img class="images-absolute" src="${speakerSecond.shape}" alt="pattern shape">
    <img class="images-fixed" src="${speakerSecond.image}" alt="teacher">
  </div>
</div>
<div class="staff-tag flex-column">
  <div class="staff-title flex-column">
    <h1>${speakerSecond.name}</h1>
    <p>${speakerSecond.proffesional}</p>
    <hr class="horizontal-line">
  </div>
  <div class="staff-desc">
    <p>
     ${speakerSecond.tag}
    </p>
  </div>
</div>`;
  speakerSecondSection.append(second);
});