const adminForm = document.getElementById("adminForm");
const categorySelect = document.getElementById("category");
const englishInput = document.getElementById("descriptionEnglish");
const tamilInput = document.getElementById("descriptionTamil");
const savedMessage = document.getElementById("savedMessage");

const categories = ["Fruits", "Vegetables", "Groceries", "Dairy", "Household"];

const defaultDescriptions = {
  "Fruits": { en: "Fresh seasonal fruits available daily.", ta: "புதிய பருவ பழங்கள் தினமும் கிடைக்கின்றன." },
  "Vegetables": { en: "Organic and fresh vegetables from local farms.", ta: "உள்ளூர் தோட்டங்களில் இருந்து உயிரியல் காய்கறிகள்." },
  "Groceries": { en: "All essential grocery items for your daily needs.", ta: "தினசரி தேவைக்கான அனைத்து அத்தியாவசிய கிரொசரி பொருட்கள்." },
  "Dairy": { en: "Milk, curd, butter, and other dairy products.", ta: "பால், தயிர், வெண்ணெய் மற்றும் பிற பாலை பொருட்கள்." },
  "Household": { en: "All household cleaning and daily utility items.", ta: "வீட்டு சுத்தம் மற்றும் அன்றாட பயன்பாட்டு பொருட்கள்." }
};

// Initialize localStorage if empty
categories.forEach(cat => {
  if (!localStorage.getItem(cat)) {
    localStorage.setItem(cat, JSON.stringify(defaultDescriptions[cat]));
  }
});

// Load selected category description
function loadDescription() {
  const cat = categorySelect.value;
  const desc = JSON.parse(localStorage.getItem(cat));
  englishInput.value = desc.en;
  tamilInput.value = desc.ta;
}

categorySelect.addEventListener("change", loadDescription);
window.onload = loadDescription;

// Save description
adminForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const cat = categorySelect.value;
  const en = englishInput.value.trim();
  const ta = tamilInput.value.trim();
  if (!en || !ta) return;

  localStorage.setItem(cat, JSON.stringify({ en, ta }));
  savedMessage.textContent = `Description for "${cat}" saved successfully!`;
  setTimeout(() => savedMessage.textContent = "", 3000);
});
