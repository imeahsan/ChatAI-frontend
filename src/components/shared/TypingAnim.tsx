import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Chat With Your OWN AI ",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Built wtih OpenAI 🤖",
        2000,
        "Your Own Customised Chat.Ai 💻",
        1500,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "50px", display: "inline-block", color: "white" }}
      repeat={Infinity}
    />
  );
};

export default TypingAnimation;
