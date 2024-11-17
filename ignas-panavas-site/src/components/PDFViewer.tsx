import React from "react";

interface PDFViewerProps {
  input: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ input }) => {
  return (
    <div>
      <iframe
        src={input}
        width="100%"
        height="700px"
        title="PDF Viewer"
        className="border-none"
        style={{
            margin: 0,
            padding: 0,
            border: "none",
            overflow: "hidden",
          }}
      />
    </div>
  );
};

export default PDFViewer;
