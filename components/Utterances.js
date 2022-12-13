import { memo } from "react";

function Utterances() {
  // component 안에서 스크립트생성 하기
  return (
    <section
      ref={(ele) => {
        if (!ele) {
          return;
        }
        const scriptElement = document.createElement("script");
        scriptElement.src = "https://utteranc.es/client.js";
        scriptElement.async = true;
        scriptElement.setAttribute("repo", "julboy2/nextjs-blog");
        scriptElement.setAttribute("issue-term", "pathname");
        scriptElement.setAttribute("theme", "github-dark-orange");
        scriptElement.crossorigin = "anonymous";
        ele.appendChild(scriptElement);
      }}
    ></section>
  );
}

export default memo(Utterances);
