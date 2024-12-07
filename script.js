document.addEventListener("DOMContentLoaded", () => {
  const rankElement = document.getElementById("rank");

  const fetchRank = async () => {
    try {
      const response = await fetch(
        "https://api.henrikdev.xyz/valorant/v2/mmr/ap/I%20like%20SpaceX/impac",
        {
          headers: {
            accept: "application/json",
            Authorization: "HDEV-2a3c970c-92fa-4bd5-9673-662de1a13fd7"
          }
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      const currentRank = data.data.current_data.currenttierpatched;
      const rankImage = data.data.current_data.images.large;

      rankElement.innerHTML = `
        <p>Rank: ${currentRank}</p>
        <img src="${rankImage}" alt="Rank Image" />
      `;
    } catch (error) {
      rankElement.textContent = `Failed to load rank: ${error.message}`;
    }
  };

  fetchRank();
});
