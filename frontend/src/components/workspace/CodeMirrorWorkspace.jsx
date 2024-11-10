import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";
import ProblemStatementCard from "./ProblemStatementCard";


const CodeMirrorWorkspace = ({ data }) => {
  const { id } = useParams();
  const problem = data[id];
  const [language, setLanguage] = useState("html");
  const [theme, setTheme] = useState("vs-dark");
  const [htmlCode, setHtmlCode] = useState(
    localStorage.getItem("htmlCode") ||
      `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1>Hello, World!</h1>
    </body>
  </html>`
  );

  const [cssCode, setCssCode] = useState(
    localStorage.getItem("cssCode") ||
      `body { font-family: Arial; background-color:white; color: black;}`
  );
  const [jsCode, setJsCode] = useState(
    localStorage.getItem("jsCode") || "console.log('Hello from JavaScript');"
  );
  const iframeRef = useRef(null);

  const updateIframe = () => {
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

      // Create a blob URL to ensure fresh content
      const blob = new Blob([content], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      iframe.src = url;

      // Clean up the previous blob URL to prevent memory leaks
      iframe.onload = () => URL.revokeObjectURL(url);
    }
  };


  useEffect(() => {
    updateIframe();

    // Save code to localStorage
    localStorage.setItem("htmlCode", htmlCode);
    localStorage.setItem("cssCode", cssCode);
    localStorage.setItem("jsCode", jsCode);
  }, [htmlCode, cssCode, jsCode]);

  if (!problem) {
    return <div className="text-center">Problem not found!</div>;
  }

  return (
    <div className="h-[calc(100vh-60px)] text-white flex gap-3">
      <div className="w-2/4">
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
