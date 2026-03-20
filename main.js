const productsData = {
  "건조": [
    { tier: "고가", name: "라 메르 크렘 드 라 메르", price: "400,000원~" },
    { tier: "중가", name: "키엘 울트라 훼이셜 크림", price: "45,000원~" },
    { tier: "저가", name: "일리윤 세라마이드 아토 집중 크림", price: "15,000원~" }
  ],
  "여드름": [
    { tier: "고가", name: "SK-II 페이셜 트리트먼트 에센스", price: "200,000원~" },
    { tier: "중가", name: "라로슈포제 에빠끌라 듀[+]", price: "30,000원~" },
    { tier: "저가", name: "닥터지 레드 블레미쉬 클리어 수딩 크림", price: "18,000원~" }
  ],
  "미백": [
    { tier: "고가", name: "설화수 자음생세럼", price: "200,000원~" },
    { tier: "중가", name: "아이오페 비타민 C23", price: "50,000원~" },
    { tier: "저가", name: "멜라노 CC 비타민 C 미백 에센스", price: "12,000원~" }
  ],
  "기본": [
    { tier: "고가", name: "샤넬 수블리마지 라 크렘", price: "500,000원~" },
    { tier: "중가", name: "에스티 로더 어드밴스드 나이트 리페어", price: "150,000원~" },
    { tier: "저가", name: "라운드랩 독도 토너", price: "15,000원~" }
  ]
};

const recommendBtn = document.getElementById('recommend-btn');
const inputField = document.getElementById('concern-input');
const resultsContainer = document.getElementById('recommendations');

recommendBtn.addEventListener('click', () => {
  const userInput = inputField.value;
  if (!userInput.trim()) {
    alert('피부 고민을 입력해주세요!');
    return;
  }

  let category = "기본";
  if (userInput.includes("건조") || userInput.includes("당겨") || userInput.includes("보습")) {
    category = "건조";
  } else if (userInput.includes("여드름") || userInput.includes("트러블") || userInput.includes("피지")) {
    category = "여드름";
  } else if (userInput.includes("미백") || userInput.includes("하얗게") || userInput.includes("잡티")) {
    category = "미백";
  }

  displayRecommendations(category);
});

function displayRecommendations(category) {
  resultsContainer.innerHTML = '';
  const products = productsData[category];

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <span class="price-tier">${product.tier}</span>
      <div class="product-name">${product.name}</div>
      <div class="product-price">${product.price}</div>
    `;
    resultsContainer.appendChild(card);
  });
}
