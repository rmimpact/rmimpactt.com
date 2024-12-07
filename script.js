const fetchRank = async () => {
  try {
    const response = await fetch("http://localhost:3000/proxy");
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();
    const currentRank = data.data.current_data.currenttierpatched;
    const rankImage = data.data.current_data.images.large;

    document.getElementById("rank").innerHTML = `
      <p>Rank: ${currentRank}</p>
      <img src="${rankImage}" alt="Rank Image" />
    `;
  } catch (error) {
    document.getElementById("rank").textContent = `Failed to load rank: ${error.message}`;
  }
};

fetchRank();
