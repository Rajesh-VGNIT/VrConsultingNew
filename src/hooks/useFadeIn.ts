import { useEffect } from "react";

export default function useFadeIn() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}