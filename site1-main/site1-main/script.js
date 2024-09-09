// script.js
document.addEventListener("DOMContentLoaded", function() {
  const routes = {
      "/Ideas": renderIdeas,
      "/FileUpload": renderFileUpload,
      "/About": renderAbout,
      "/Contact": renderContact,
  };

  const rootDiv = document.getElementById('content');

  function renderIdeas() {
      rootDiv.innerHTML = `
          <section id="about" class="about-content">
              <div class="Content">
                  <p>At VANGUARD 3D Home Builders, we revolutionize the way homes are built by leveraging cutting-edge 3D printing technology. Our mission is to create sustainable, high-quality homes faster and more affordably than traditional construction methods. With a commitment to innovation and customer satisfaction, we turn your dream home into reality with precision and care.</p>
              </div>
              <div class="video-content">
                  <video width="100%" style="max-width: 500px;" height="450" autoplay muted playsinline loop>
                      <source src="main-page-hero-tablet.mp4" type="video/mp4">
                  </video>
              </div>
          </section>

          <section id="buttons" class="container">
              <h2>ABOUT</h2>
              <div class="button-group">
                  <div class="button-item">
                      <button>EXPLORE GIVEN IDEAS</button>
                      <p>Get inspired by innovative 3D-printed home designs, sustainable building practices, and cutting-edge architectural trends shaping the future of home construction.</p>
                  </div>
                  <div class="button-item">
                      <button>EXPLORE MORE IDEAS</button>
                      <p>Discover creative architectural solutions, modern construction techniques, and the latest trends in sustainable housing.</p>
                  </div>
                  <div class="button-item">
                      <button>LEARN ABOUT TRENDS</button>
                      <p>Stay updated with the newest advancements in 3D-printed homes, eco-friendly materials, and futuristic design concepts.</p>
                  </div>
              </div>
          </section>
          <main class="main">
              <h2 class="bph">Get Ideas</h2>
              <p class="bpn">Showcase of most creative interior design projects & home decor ideas</p>
              <div class="blueprints">
                  <img src="https://arbulider.netlify.app/img/portfolio/11.jpg" alt="Blueprint 1">
                  <img src="https://arbulider.netlify.app/img/portfolio/08.jpeg" alt="Blueprint 2">
              </div>
              <div class="button-row">
                  <div class="buttons">
                      <button>MODEL</button>
                      <button>COST ESTIMATION</button>
                  </div>
                  <div class="buttons1">
                      <button>MODEL</button>
                      <button>COST ESTIMATION</button>
                  </div>
              </div>
              <div>
                  <a href="#" onclick="navigate('/FileUpload')">Have your own customized plan?</a>
              </div>
          </main>
          <footer class="footer">
              <div class="contact">
                  <h1>Contact Us</h1>
                  <a href="https://wa.me/+919789697906" target="_blank" rel="noopener noreferrer">+91 97896 97906</a><br>
                  <a href="mailto:virtualbuilders123@gmail.com" class="btn hire-btn" target="_blank" rel="noopener noreferrer">virtualbuilders123@gmail.com</a>
              </div>
          </footer>
      `;
  }

  function renderFileUpload() {
      rootDiv.innerHTML = `
          <div>
              <h1>Single File Upload Component</h1>
              <p>Upload your file here.</p>
              <a href="#" onclick="navigate('/Ideas')" class="nav-link">Go to Ideas</a>
          </div>
      `;
  }

  function renderAbout() {
      rootDiv.innerHTML = `
          <div>
              <h1>About Component</h1>
              <p>About VR Vanguard.</p>
              <a href="#" onclick="navigate('/Ideas')" class="nav-link">Go to Ideas</a>
          </div>
      `;
  }

  function renderContact() {
      rootDiv.innerHTML = `
          <div>
              <h1>Contact Component</h1>
              <p>Contact VR Vanguard.</p>
              <a href="#" onclick="navigate('/Ideas')" class="nav-link">Go to Ideas</a>
          </div>
      `;
  }

  function navigate(path) {
      window.history.pushState({}, path, window.location.origin + path);
      routes[path]();
  }

  window.onpopstate = function() {
      routes[window.location.pathname]();
  };

  // Initial render
  routes[window.location.pathname] || renderIdeas();
});
