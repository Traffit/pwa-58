const reviews = document.querySelector(".reviews__container");

const reviews_data = [
  {
    img: "../../media/photos/comments/Samuel_Fry.png",
    name: "Liam Smith",
    comment:
      "Що може бути краще, ніж насолоджуватися цукерками та вигравати велико? Hamster Kombat - це мій вибір для найдорожчих перемог!",
  },
  {
    img: "../../media/photos/comments/comment2.png",
    name: "Olivia Tremblay",
    comment:
      "Граю в Hamster Kombat протягом кількох тижнів - це просто захоплююче! Постійні перемоги та безліч безкоштовних обертів. Абсолютно обожнюю цей слот!",
  },
  {
    img: "../../media/photos/comments/comment3.png",
    name: "Noah MacKenzie",
    comment:
      "Ця гра - справжній адреналін від солодощів! Яскраві кольори Hamster Kombat та неперервна дія роблять її привабливою та захоплюючою.",
  },
  {
    img: "../../media/photos/comments/comment4.png",
    name: "Emma Gagnon",
    comment:
      "Hamster Kombat - це насолода для очей і гаманця! Обожнюю постійне захоплення від послідовних перемог і безліч безкоштовних cпiнiв.",
  },
  {
    img: "../../media/photos/comments/comment5.png",
    name: "Lucas Leblanc",
    comment:
      "Не можу насититися слотом на тему солодощів! Hamster Kombat - це моя гріховна насолода з фантастичною графікою та великим потенціалом виграшу.",
  },
  {
    img: "../../media/photos/comments/comment6.png",
    name: "Ava Dubois",
    comment:
      "Ця гра - мов солодкий магазин виграшів! Безкоштовні оберти Hamster Kombat завжди приносять ці смачні перемоги.",
  },
  {
    img: "../../media/photos/comments/comment7.png",
    name: "Ethan Roy",
    comment:
      "Абсолютно залежний від Hamster Kombat! Захоплення від послідовних перемог з функцією тамбл неперевершене.",
  },
  {
    img: "../../media/photos/comments/comment8.png",
    name: "Charlotte Lefebvre",
    comment:
      "Hamster Kombat задовольняє моє прагнення як до солодкого, так і до перемог. Це чудове поєднання розваг і можливих великих виплат.",
  },
  {
    img: "../../media/photos/comments/comment9.png",
    name: "Benjamin Beaulieu",
    comment:
      "Така весела гра! Безкоштовні оберти у Hamster Kombat заставляють мене повертатися сюди знову та знову, а візуальний дизайн просто в захваті.",
  },
  {
    img: "../../media/photos/comments/comment10.png",
    name: "Sophia Caron",
    comment:
      "Hamster Kombat ніколи не розчаровує! Я обожнюю адреналіновий сплеск, коли з'являються послідовні перемоги. Щиро рекомендую!",
  },
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Shuffle the reviews_data array
const shuffledReviews = shuffle(reviews_data);

// Take the first three reviews for display
shuffledReviews.slice(0, 3).forEach((review) => getReview(review));

function getReview(data) {
  // Your existing getReview function remains the same
  const review_template = `
  <div class="review">
          <div class="review__top c-black">
            <div class="review__img">
              <img src="${data.img}" alt="${data.name} comment" />
            </div>
            <div class="review__name">
              <h3>${data.name}</h3>
            </div>
            <div class="review__more-box">
              <a class="review__more" aria-label="More reviews">
                <i class="_icon-more_vert_black"></i>
              </a>
              <div class="review__more-open">
                <!-- <a class="watch-history__btn">Посмотреть историю изменений</a> -->
                <a class="unacceptable__btn" aria-label="Flag as inappropriate">Flag as inappropriate</a>
                <a class="spam__btn" aria-label="Flag as spam">Flag as spam</a>
              </div>
            </div>
          </div>
          <div class="review__rating">
            <div class="Stars" style="--rating: 5.0;" aria-label="Rating of this product is 5.0 out of 5."></div>
            <span class="review-date c-text">26.02.24</span>
          </div>
          <div class="review__text webkit c-text">
            <p>
             ${data.comment}
            </p>
          </div>
          <div class="review__qna">
            <span>Was this review helpful?</span>
            <div class="review__true-false c-black">
              <a class="btn-true" aria-label="Yes">Так</a>
              <a class="btn-false" aria-label="No">Hi</a>
            </div>
          </div>
        </div>
  `;
  return (reviews.innerHTML += review_template);
}
