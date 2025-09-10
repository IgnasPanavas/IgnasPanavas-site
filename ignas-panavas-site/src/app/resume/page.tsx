import React from "react";
import Link from "next/link";
import PDFViewer from "@/components/PDFViewer";

export default function Resume() {
  return (
    <div className="min-h-screen py-20 px-8 pt-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-light text-gray-800 mb-4">Resume</h1>
          <p className="text-xl text-gray-600 font-light">
            My professional experience, skills, and achievements in software development and finance
          </p>
        </div>

        {/* PDF Viewer Component */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
          <PDFViewer input="resources/resume_CS.pdf" />
        </div>
        
        {/* Download Button */}
        <div className="mt-8 text-center">
          <a
            href="/resources/resume_CS.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </a>
        </div>
        
        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
