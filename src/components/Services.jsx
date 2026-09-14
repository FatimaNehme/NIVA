import Reveal from "./Reveal";

function Services() {
  return (
    <section className="services" id="services">

      <div className="services-header">
        <div>
          <span className="section-number">02 / WHAT WE CREATE</span>
          <h2>
            More than
            <span>a website.</span>
          </h2>
        </div>

        <p>
          Your website should feel like your business —
          not like everyone else's.
        </p>
      </div>

      <Reveal className="reveal-stagger">
  <div className="services-list">

        <div className="service-item">
          <div className="service-number">01</div>

          <div className="service-main">
            <h3>Business Websites</h3>
            <p>
              A thoughtful digital home for your business,
              built to introduce your brand and turn visitors
              into customers.
            </p>
          </div>

          <div className="service-preview preview-business">
            <span>YOUR<br />BUSINESS</span>
          </div>

        </div>

        <div className="service-item">
          <div className="service-number">02</div>

          <div className="service-main">
            <h3>Landing Pages</h3>
            <p>
              Focused pages designed around one idea,
              one offer, and one clear action.
            </p>
          </div>

          <div className="service-preview preview-landing">
            <span>ONE<br />IDEA</span>
          </div>

        </div>

        <div className="service-item">
          <div className="service-number">03</div>

          <div className="service-main">
            <h3>Online Shops</h3>
            <p>
              Beautiful, easy-to-use shopping experiences
              that make your products feel as good online
              as they do in real life.
            </p>
          </div>

          <div className="service-preview preview-shop">
            <span>SHOP<br />ONLINE</span>
          </div>

        </div>

        <div className="service-item">
          <div className="service-number">04</div>

          <div className="service-main">
            <h3>Custom Experiences</h3>
            <p>
              Something different? We shape digital
              experiences around the idea you have in mind.
            </p>
          </div>

          <div className="service-preview preview-custom">
            <span>YOUR<br />VISION</span>
          </div>

        </div>

        </div>
        </Reveal>

    </section>
  );
}

export default Services;