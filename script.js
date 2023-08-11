window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    const navbar = document.getElementById("navbar");
    const navbar2 = document.getElementById("navbar2");
    const dropdownItems = document.querySelectorAll(".navbar#navbar2 .dropdown-item");
    const palaceText = document.getElementById("palace");
    const SearchText = document.getElementById("search");
    const LoginText = document.getElementById("loginbtn");
    const plant = document.getElementById("plant");
    const flower = document.getElementById("flower");
    const gift = document.getElementById("gift");
    

    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      navbar.style.padding = "10px 10px";
      navbar.style.backgroundColor = "white";
      navbar2.style.backgroundColor = "white";
      navbar2.style.color = "black";
      palaceText.style.color = "black"; // Change color to black
      SearchText.style.color = "black"; // Change color to black
      LoginText.style.color = "black"; // Change color to black
      plant.style.color = "black"; // Change color to black
      gift.style.color = "black"; // Change color to black
      flower.style.color = "black"; // Change color to black

      // Change color of dropdown items in navbar2
      for (const item of dropdownItems) {
        item.style.color = "black";
      }
    } else {
      navbar.style.padding = "";
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
      navbar2.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
      navbar2.style.color = "black";
      palaceText.style.color = "#fff"; // Change color back to greenyellow
      SearchText.style.color = "greenyellow"; // Change color back to greenyellow
      LoginText.style.color = "greenyellow"; // Change color back to greenyellow
      plant.style.color = "greenyellow"; // Change color back to greenyellow
      flower.style.color = "greenyellow"; // Change color back to greenyellow
      gift.style.color = "greenyellow"; // Change color back to greenyellow

      // Change color of dropdown items in navbar2
      for (const item of dropdownItems) {
        item.style.color = "#fff";
      }
    }
  }
    async function fetchFooter() {
    try {
      const response = await fetch('footer.json');
      const footerData = await response.json();

      const footerContainer = document.getElementById('footer-container');
      for (const section of Object.values(footerData)) {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('footer-col');

        const sectionTitle = document.createElement('h4');
        sectionTitle.textContent = section.title;
        sectionDiv.appendChild(sectionTitle);

        const linksList = document.createElement('ul');
        for (const link of section.links) {
          const listItem = document.createElement('li');
          const linkAnchor = document.createElement('a');
          linkAnchor.href = link.url;
          linkAnchor.textContent = link.text;
          listItem.appendChild(linkAnchor);
          linksList.appendChild(listItem);
        }
        sectionDiv.appendChild(linksList);

        footerContainer.appendChild(sectionDiv);
      }
    } catch (error) {
      console.error('Error fetching footer data:', error);
    }
  }

  document.addEventListener('DOMContentLoaded', fetchFooter);
  AOS.init({
    
      duration: 50, // Duration of animation  // Animation only happens once while scrolling down
      easing: 'ease-in-out', // Easing function for animations
      anchorPlacement: 'top-bottom', // How elements are animated relative to the viewport
      offset: 200  ,  // Offset (in pixels) from the original trigger point
      loop: true
    });