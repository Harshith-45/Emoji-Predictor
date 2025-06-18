async function predictEmoji() {
  const input = document.getElementById("textInput").value.toLowerCase().trim();
  const result = document.getElementById("output");

  try {
    const res = await fetch("emoji_db.json");
    const data = await res.json();

    if (data[input]) {
      result.textContent = data[input];
    } else {
      result.textContent = "🤷";
    }
  } catch (e) {
    result.textContent = "❌ Error loading emoji data.";
  }
}
