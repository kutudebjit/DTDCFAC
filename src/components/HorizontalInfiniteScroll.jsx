import React from "react";

// HorizontalInfiniteScroll.jsx
// A smooth infinite scrolling text line (right to left)

export default function HorizontalInfiniteScroll({
  text = "Paper Submission deadline: 30 Nov, 2025      ☆      Paper Acceptance Notification:10 Dec, 2025     ☆     Camera ready Paper Submission:20 Dec, 2025     ☆     Paper Registration Deadline:24 Dec, 2025     ☆     ",
  speed = 30, // smaller = faster
}) {
  return (
    <div className="scroll-container">
      <div
        className="scroll-content"
        style={{ animationDuration: `${speed}s` }}
      >
        <span>{text.repeat(1000)}</span>
      </div>
    </div>
  );
}
