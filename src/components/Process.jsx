
function Process() {
  const steps = [
    {
      number: "01-N",
      title: "Nurture",
      text: "We start by listening, understanding your business, and nurturing the idea into something worth building.",
      color: "gold",
    },
    {
      number: "02-I",
      title: "Imagine",
      text: "We explore possibilities and imagine how your brand can take shape in the digital world.",
      color: "turquoise",
    },
    {
      number: "03-V",
      title: "Visualize",
      text: "We turn the direction into a visual language, clear structure, and an experience that feels like you.",
      color: "lavender",
    },
    {
      number: "04-A",
      title: "Actualize",
      text: "We bring everything together, build the experience, and give your idea a real place online.",
      color: "pink",
    },
  ];

  return (
    <section className="process bubble-process" id="process">

      <div className="process-intro">

        <span className="section-number">
          04 / THE NIVA WAY
        </span>

        <div className="process-heading">

          <h2>
            From thought
            <span>to NIVA.</span>
          </h2>

          <p>
            A thoughtful process that takes an idea from its first spark
            to something real, visual, and ready to be experienced.
          </p>

        </div>

      </div>


      <div className="bubble-process-track">

        {steps.map((step, index) => (

          <div
            className={`bubble-step bubble-${step.color}`}
            key={step.number}
          >

            <div className="process-bubble">

              <span className="process-bubble-number">
                {step.number}
              </span>

              <div className="process-bubble-title">
                {step.title}
              </div>

              <div className="process-bubble-detail">

                <span>{step.title}</span>

                <p>{step.text}</p>

              </div>

            </div>


            {index < steps.length - 1 && (
              <div className="bubble-connector">

                <span></span>
                <span></span>
                <span></span>

              </div>
            )}

          </div>

        ))}

      </div>


      <div className="process-footer">

        <span>THE NIVA WAY</span>

        <span>
          NURTURE → IMAGINE → VISUALIZE → ACTUALIZE
        </span>

      </div>

    </section>
  );
}

export default Process;
