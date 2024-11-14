import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";
import ProblemStatementCard from "./ProblemStatementCard";
import debounce from "lodash.debounce";

const CodeMirrorWorkspace = ({ data }) => {
  const { id } = useParams();
  const problem = data[id];

  const defaultHtmlTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>`;

  const defaultCssTemplate = `body { font-family: Arial; background-color: white; color: black; }`;
  const defaultJsTemplate = `console.log('Hello from JavaScript');`;

  const [htmlCode, setHtmlCode] = useState(
    localStorage.getItem(`htmlCode-${id}`) ||
      problem?.htmlTemplate ||
      defaultHtmlTemplate
  );
  const [cssCode, setCssCode] = useState(
    localStorage.getItem(`cssCode-${id}`) ||
      problem?.cssTemplate ||
      defaultCssTemplate
  );
  const [jsCode, setJsCode] = useState(
    localStorage.getItem(`jsCode-${id}`) ||
      problem?.jsTemplate ||
      defaultJsTemplate
  );

  const [language, setLanguage] = useState("html");
  const [theme, setTheme] = useState("vs-dark");
  const iframeRef = useRef(null);
  const [iframeKey, setIframeKey] = useState(Date.now());

  const updateIframe = debounce(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      const content = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Output</title>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>
            ${jsCode}
          </script>
        </body>
      </html>
    `;

      const blob = new Blob([content], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      iframe.src = url;

      iframe.onload = () => URL.revokeObjectURL(url);
    }
  }, 300);

  useEffect(() => {
    updateIframe();

    localStorage.setItem(`htmlCode-${id}`, htmlCode);
    localStorage.setItem(`cssCode-${id}`, cssCode);
    localStorage.setItem(`jsCode-${id}`, jsCode);

    setIframeKey(Date.now());
  }, [htmlCode, cssCode, jsCode, id]);

  if (!problem) {
    return <div className="text-center">Problem not found!</div>;
  }

  return (
    <div className="h-[calc(100vh-60px)] text-white flex gap-3">
      <div className="">
        <ProblemStatementCard problem={problem} />
      </div>

      <div className="w-full flex flex-col gap-2">
        <div className="flex items-center justify-between mb-2">
          <select
            className="p-1 border rounded bg-gray-800 text-white"
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
          </select>

          <select
            className="p-1 border rounded bg-gray-800 text-white"
            onChange={(e) =>
              setTheme(e.target.value === "dark" ? "vs-dark" : "vs-light")
            }
          >
            <option value="dark">Dark Theme</option>
            <option value="light">Light Theme</option>
          </select>
        </div>
        <div className="w-full flex gap-3">
          <div className="w-1/2">
            <Editor
              height="81vh"
              language={language}
              theme={theme}
              value={
                language === "html"
                  ? htmlCode
                  : language === "css"
                  ? cssCode
                  : jsCode
              }
              onChange={(newValue) => {
                if (language === "html") setHtmlCode(newValue || "");
                if (language === "css") setCssCode(newValue || "");
                if (language === "javascript") setJsCode(newValue || "");
              }}
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
              }}
            />
          </div>

          <div className="border border-gray-500 rounded overflow-hidden h-[81vh] w-1/2">
            <iframe
              key={iframeKey}
              ref={iframeRef}
              title="output"
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeMirrorWorkspace;
