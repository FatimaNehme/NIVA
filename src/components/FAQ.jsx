
import { useEffect, useState } from "react";

function FAQ() {
  const questions = [
    {
      question: "How much does a website cost?",
      answer:
        "It depends on what your business needs. A simple business website is different from a full online shop with products, payments, and customer accounts. Once we understand your idea, we'll give you a clear quote.",
    },
    {
      question: "How long does a website take?",
      answer:
        "A small business website can take a few days to a few weeks, depending on the number of pages, features, content, and feedback.",
    },
    {
      question: "I don't have a design. Can you create one?",
      answer:
        "Absolutely. You don't need to arrive with a finished design. We'll shape the visual direction around your business, personality, and the experience you want people to have.",
    },
    {
      question: "Can my website work with Instagram?",
      answer:
        "Yes. Your website can connect naturally with Instagram and other platforms, giving your audience a place to learn more, explore your products, or get in touch.",
    },
    {
      question: "Can you build an online shop?",
      answer:
        "Yes. We can create an online shopping experience around your products, including product pages, categories, cart, checkout, and other features your business may need.",
    },
    {
      question: "Can you maintain my website after launch?",
      answer:
        "Yes. Future updates, content changes, improvements, and ongoing maintenance can be discussed depending on what your business needs after launch.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [typedAnswer, setTypedAnswer] = useState("");

  useEffect(() => {
    const answer = questions[activeIndex].answer;

    setTypedAnswer("");

    let currentIndex = 0;

    const timer = setInterval(() => {
      currentIndex++;

      setTypedAnswer(answer.slice(0, currentIndex));

      if (currentIndex >= answer.length) {
        clearInterval(timer);
      }
    }, 35);

    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className="faq" id="faq">

      <div className="faq-header">

        <span className="section-number">
          05 / FAQ
        </span>

        <h2>
          You ask.
          <span>NIVA answers.</span>
        </h2>

        <p>
          A few things you might want to know
          before bringing your idea online.
        </p>

      </div>

      <div className="faq-conversation">

        <div className="faq-questions">

          <span className="faq-side-label">
            YOU
          </span>

          {questions.map((item, index) => (

            <button
              key={index}
              className={`faq-question-bubble ${
                activeIndex === index ? "is-active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >

              <span className="faq-question-number">
                0{index + 1}
              </span>

              <span>
                {item.question}
              </span>

            </button>

          ))}

        </div>

        <div className="faq-answer-area">

          <div className="faq-answer-intro">

            <span className="faq-dot"></span>

            <span>
  NIVA / RESPONDING...
</span>

          </div>

          <div className="faq-answer-bubble">

            <span className="faq-answer-label">
              NIVA / ANSWER
            </span>

            <p>
              {typedAnswer}
              <span className="typing-cursor"></span>
            </p>

            <div className="faq-answer-meta">

              <span>
                0{activeIndex + 1}
              </span>

              <span>🫧</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FAQ;
