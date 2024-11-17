import React from "react";
import PDFViewer from "@/components/PDFViewer";

export default function Resume() {
  return (
    <div className="flex flex-col items-center min-h-screen py-10">
      <h1 className="text-4xl font-bold mb-6">My Resume</h1>

      {/* PDF Viewer Component */}
      <div className="w-full max-w-4xl min-h-screen">
        <PDFViewer input="resources/resume_backup.pdf" />
      </div>
    </div>
  );
}
