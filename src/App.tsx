import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center h-[100vh]">
      <p className="text-3xl text-indigo-300">Hello Gsap!</p>
    </div>
  );
};

export default App;
