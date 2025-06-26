document.addEventListener('DOMContentLoaded', () => {
  const listings = [
    {
      title: "2 BHK in Bangalore",
      location: "Indiranagar",
      price: 25000,
      description: "Spacious and well-lit"
    },
    {
      title: "Studio in Mumbai",
      location: "Andheri",
      price: 20000,
      description: "Compact and cozy"
    }
  ];

  const container = document.getElementById('listing-container');
  const searchInput = document.getElementById('search');

  function displayListings(data) {
    container.innerHTML = "";
    data.forEach(listing => {
      const div = document.createElement('div');
      div.className = 'listing';
      div.innerHTML = `
        <h3>${listing.title}</h3>
        <p><strong>Location:</strong> ${listing.location}</p>
        <p><strong>Price:</strong> ₹${listing.price}</p>
        <p>${listing.description}</p>
      `;
      container.appendChild(div);
    });
  }

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = listings.filter(l =>
      l.location.toLowerCase().includes(query) ||
      l.title.toLowerCase().includes(query)
    );
    displayListings(filtered);
  });

  displayListings(listings);
});
