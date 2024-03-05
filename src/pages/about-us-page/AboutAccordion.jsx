import "./New folder/aboutUsGeneral.css";

import "./New folder/aboutAccordion.css"
function AboutAccordion() {
  return (
    <>
  {/* -----------------------start Accordion---------- */}
  <div className="accordion-container">
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="bold accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            A wondrfull start.
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Our story starts with a man who wondered about a better way. In
            2007, Stuart Lombard made a personal goal to reduce his
            environmental footprint. After discovering that heating and cooling
            make up 40% to 60% of home energy use, he attempted to program his
            own thermostat to conserve energy while away on vacation. When he
            and his family returned home to Toronto to a shockingly cold house,
            he began to envision a better efficiency solution that could
            conserve energy without compromising comfort. Assembling a small
            team of likeminded experts, the new Canadian company of ecobee was
            formed. Together, the ecobee team was able to launch the first ever
            smart thermostat. Since then, ecobee customers across North America
            have saved more than 27.8 TWh of energy, which is the annual
            equivalent of saving enough energy to take all the homes in Los
            Angeles and Chicago off the grid for a year. And that impact
            continues to grow every day.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="bold accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            A different approach.
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            At ecobee, we do things differently. We’re Planet Positive. We
            believe that through technology, we can improve the way people,
            homes, and cities use and consume energy to create a sustainable
            future. We aspire to be a Welcome Guest. As a guest in your home,
            ecobee is always ready to help and respects your privacy by not
            selling or misusing your data. We set ourselves apart through
            Thoughtful Innovation. We don’t just innovate for innovation’s sake.
            Instead, ecobee reimagines the everyday in ways that go beyond
            simple improvements to challenge the status quo. ecobee believes in
            Memorable Care. We offer the right help at the right time, including
            human support that exceeds expectations. Finally, ecobee offers
            Seamless Experiences, which means effortless solutions that just
            work, on their own or with other smart home systems.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button
            className="bold accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            A smarter future.
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            The connected home of the future isn’t just smart. It learns,
            adjusts, and adapts based on your needs, behaviors, and preferences.
            It’s not just about more devices with flashy features, it’s about
            meaningful solutions that work so well together, they fade into the
            background to become part of your life. The ecobee home is a
            harmonious place that offers comfort when you’re there and peace of
            mind when you’re away. Inviting ecobee into your home allows us to
            make an even greater impact. Because the more homes we are in, the
            more we can help build a sustainable world. Please consider this
            your invitation to join us in wondering about a better world.
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ----------------end Accordion------------ */}
</>

  )
}

export default AboutAccordion