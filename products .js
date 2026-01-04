const info = document.getElementById("categoryInfo");

function showCategory(category) {
  const descriptions = {
    "Fruits": {
      en: "Fresh fruits for your daily needs.",
      ta: "உங்கள் தினசரி தேவைகளுக்கான புதிய பழங்கள்."
    },
    "Vegetables": {
      en: "Fresh vegetables every day.",
      ta: "தினமும் புதிய காய்கறிகள்."
    },
    "Groceries": {
      en: "All essential grocery items for your home.",
      ta: "உங்கள் வீட்டிற்கான அனைத்து அத்தியாவசிய கிரொசரி பொருட்கள்."
    },
    "Dairy": {
      en: "Milk, curd, and other dairy products.",
      ta: "பால், தயிர் மற்றும் பிற பால் பொருட்கள்."
    },
    "Household": {
      en: "Household cleaning and daily use items.",
      ta: "வீட்டு சுத்தம் மற்றும் தினசரி பயன்படுத்தும் பொருட்கள்."
    }
  };

  const desc = descriptions[category];
  info.innerHTML = `<h3>${category}</h3>
                    <p>${desc.en} / ${desc.ta}</p>`;
}

// Show default category
showCategory("Fruits");
