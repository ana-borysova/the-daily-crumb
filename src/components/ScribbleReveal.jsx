import { useEffect, useRef } from "react";
import "./_scribble.scss";

function ScribbleReveal({ src, alt, className }) {
  const svgRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (svgRef.current) {
        svgRef.current.classList.add("animate");
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`scribble-reveal ${className || ""}`}>
      <img src={src} alt={alt} className="scribble-reveal__img" />
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="100 100 800 662"
      >
        <polyline
          points="0,154 131,0 0,348 269,0 0,562 437,0 
	0,766 565,14 0,1062 719,0 289,1062 843,0 543,1062 995,0 729,1062 1161,0 947,1062 1307,0 1143,1062 1500,162 1299,1062 1500,830"
        />
      </svg>
    </div>
  );
}

export default ScribbleReveal;
