const articleImg = document.querySelector(".article-img");
const articleData = [
  {
    id: 1,
    image: "assets/image-currency.jpg",
    className: "article-money",
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
  },

  {
    id: 2,
    image: "assets/image-restaurant.jpg",
    className: "article-food",
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting features allows you to separate out your spending and set realistic limits each month. That means you..",
  },
  {
    id: 3,
    image: "assets/image-plane.jpg",
    className: "article-air",
    author: "Agu Chidimma",
    title: "Take your Digitalbank card wherever you go",
    description:
      "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even..",
  },

  {
    id: 4,
    image: "assets/image-confetti.jpg",
    className: "article-water",
    author: "Mr Wisdom",
    title: "Our Invite-only Beta accounts are now live!",
    description:
      "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through....",
  },
];

let content = "";
articleData.forEach((data) => {
  content += `
 <div class="${data.className}">
 <img src="${data.image}">
 <a>By ${data.author}</a>
 <h3>${data.title}</h3>
 <p class="bottom-artice">${data.description}</p>

 </div>

  `;
  articleImg.innerHTML = content;
});
