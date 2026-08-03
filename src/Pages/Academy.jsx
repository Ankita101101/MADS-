import { useState } from "react";

import Sidebar from "../Components/Sidebar";

import { unit1Cards } from "../data/unit1";
import { unit2Cards } from "../data/unit2";
import { unit3Cards } from "../data/unit3";
import { unit4Cards } from "../data/unit4";

const formatInlineMarkdown = (text) => {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index} className="font-bold text-cyan-100">{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={index} className="rounded bg-cyan-950/70 px-1.5 py-0.5 font-mono text-base text-cyan-200">{part.slice(1, -1)}</code>;
    }

    return part;
  });
};

const MarkdownNotes = ({ content }) => {
  if (!content) {
    return <p className="text-gray-400">Notes for this topic will be added soon.</p>;
  }

  const lines = content.replace(/\r/g, "").split("\n");
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim() || line === "---") {
      index += 1;
      continue;
    }

    if (line.startsWith("```")) {
      const codeLines = [];
      index += 1;
      while (index < lines.length && !lines[index].startsWith("```")) {
        codeLines.push(lines[index]);
        index += 1;
      }
      blocks.push(<pre key={index} className="overflow-x-auto rounded-2xl border border-cyan-500/20 bg-[#020817] p-5 text-base leading-relaxed text-cyan-100"><code>{codeLines.join("\n")}</code></pre>);
      index += 1;
      continue;
    }

    if (/^#{1,3}\s/.test(line)) {
      const level = line.match(/^#+/)[0].length;
      const headingClass = level === 1 ? "text-3xl" : level === 2 ? "text-2xl" : "text-xl";
      blocks.push(<h3 key={index} className={`${headingClass} mt-8 font-bold text-cyan-300`}>{formatInlineMarkdown(line.replace(/^#{1,3}\s/, ""))}</h3>);
      index += 1;
      continue;
    }

    if (line.startsWith("|") && lines[index + 1]?.match(/^\|[\s|:-]+\|$/)) {
      const headers = line.split("|").slice(1, -1).map((cell) => cell.trim());
      index += 2;
      const rows = [];
      while (index < lines.length && lines[index].startsWith("|")) {
        rows.push(lines[index].split("|").slice(1, -1).map((cell) => cell.trim()));
        index += 1;
      }
      blocks.push(
        <div key={index} className="overflow-x-auto rounded-2xl border border-cyan-500/20">
          <table className="w-full min-w-[600px] border-collapse text-left text-lg">
            <thead className="bg-cyan-500/15 text-cyan-100"><tr>{headers.map((header, cellIndex) => <th key={cellIndex} className="border-b border-cyan-500/20 px-4 py-3 font-bold">{formatInlineMarkdown(header)}</th>)}</tr></thead>
            <tbody>{rows.map((row, rowIndex) => <tr key={rowIndex} className="border-b border-cyan-500/10 last:border-0">{row.map((cell, cellIndex) => <td key={cellIndex} className="px-4 py-3 align-top text-gray-200">{formatInlineMarkdown(cell)}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
      continue;
    }

    if (/^\s*[-*]\s/.test(line) || /^\s*\d+\.\s/.test(line)) {
      const ordered = /^\s*\d+\.\s/.test(line);
      const items = [];
      while (index < lines.length && (ordered ? /^\s*\d+\.\s/.test(lines[index]) : /^\s*[-*]\s/.test(lines[index]))) {
        items.push(lines[index].replace(ordered ? /^\s*\d+\.\s/ : /^\s*[-*]\s/, ""));
        index += 1;
      }
      const ListTag = ordered ? "ol" : "ul";
      blocks.push(<ListTag key={index} className={`${ordered ? "list-decimal" : "list-disc"} ml-7 space-y-2 text-gray-200`}>{items.map((item, itemIndex) => <li key={itemIndex}>{formatInlineMarkdown(item)}</li>)}</ListTag>);
      continue;
    }

    const paragraph = [];
    while (index < lines.length && lines[index].trim() && lines[index] !== "---" && !/^#{1,3}\s/.test(lines[index]) && !lines[index].startsWith("```") && !/^\s*[-*]\s/.test(lines[index]) && !/^\s*\d+\.\s/.test(lines[index]) && !lines[index].startsWith("|")) {
      paragraph.push(lines[index]);
      index += 1;
    }
    blocks.push(<p key={index} className="text-gray-200">{formatInlineMarkdown(paragraph.join(" "))}</p>);
  }

  return <div className="space-y-5">{blocks}</div>;
};

const siteUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

const Academy = () => {
  const [activeSection, setActiveSection] = useState("unit1");

  const [expandedCard, setExpandedCard] = useState(null);

  const allDocs = [
    {
      category: "Source PDFs",
      items: [
        { name: "MADS-OOPS-1.pdf", url: "/allpdfs/src-assets/MADS-OOPS-1.pdf", type: "PDF" },
        { name: "MADS-OOPS-2.pdf", url: "/allpdfs/src-assets/MADS-OOPS-2.pdf", type: "PDF" },
        { name: "Question bank.pdf", url: "/allpdfs/src-assets/Question bank.pdf", type: "PDF" },
      ],
    },
    {
      category: "Root Documents",
      items: [
        { name: "Fundamentals of Android Application Development (1).pdf", url: "/allpdfs/root/Fundamentals of Android Application Development (1).pdf", type: "PDF" },
        { name: "Fundamentals of Android ApplicationsR.pptx", url: "/allpdfs/root/Fundamentals of Android ApplicationsR.pptx", type: "PPTX" },
        { name: "ICSF_303_SEM_5_Mobile Application Development & Security.doc", url: "/allpdfs/root/ICSF_303_SEM_5_Mobile Application Development & Security.doc", type: "DOC" },
        { name: "introduction.docx", url: "/allpdfs/root/introduction.docx", type: "DOCX" },
      ],
    },
    {
      category: "Notes",
      items: [
        { name: "ICSF_303_SEM_5_Mobile Application Development & Security.doc", url: "/allpdfs/notes/ICSF_303_SEM_5_Mobile Application Development & Security.doc", type: "DOC" },
        { name: "MADS-OOPS-1.pdf", url: "/allpdfs/notes/MADS-OOPS-1.pdf", type: "PDF" },
        { name: "MADS-OOPS-2.pptx", url: "/allpdfs/notes/MADS-OOPS-2.pptx", type: "PPTX" },
        { name: "S.pdf", url: "/allpdfs/notes/S.pdf", type: "PDF" },
        { name: "software design.pdf", url: "/allpdfs/notes/software design.pdf", type: "PDF" },
      ],
    },
    {
      category: "Assignments",
      items: [
        { name: "assignment 02- answer key.docx", url: "/allpdfs/assignment/assignment 02- answer key.docx", type: "DOCX" },
        { name: "Assignment 1.docx", url: "/allpdfs/assignment/Assignment 1.docx", type: "DOCX" },
        { name: "Assignment with solution.docx", url: "/allpdfs/assignment/Assignment with solution.docx", type: "DOCX" },
        { name: "Assignment-02.docx", url: "/allpdfs/assignment/Assignment-02.docx", type: "DOCX" },
        { name: "S.E assignment 3.docx", url: "/allpdfs/assignment/S.E assignment 3.docx", type: "DOCX" },
        { name: "S.E assignment 4.docx", url: "/allpdfs/assignment/S.E assignment 4.docx", type: "DOCX" },
      ],
    },
  ];

  const renderDocLink = (doc) => (
    <a
      key={doc.url}
      href={encodeURI(siteUrl(doc.url))}
      target="_blank"
      rel="noreferrer noopener"
      className="block rounded-3xl border border-cyan-500/20 bg-white/5 p-5 transition hover:border-cyan-300 hover:bg-cyan-500/10"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-lg font-semibold text-white">{doc.name}</p>
          <p className="text-sm text-gray-400">{doc.type}</p>
        </div>
        <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-200">
          Open
        </span>
      </div>
    </a>
  );

  const renderCards = (cards, prefix = "") => {
    return cards.map((card, index) => {
      const cardId = `${prefix}${index}`;

      return (
        <div
          key={cardId}
          onClick={() =>
            setExpandedCard(
              expandedCard === cardId ? null : cardId
            )
          }
          className="
            bg-white/5
            backdrop-blur-xl
            border border-cyan-500/20
            rounded-3xl
            p-8
            cursor-pointer
            transition-all
            duration-300
            hover:bg-cyan-500/10
            hover:border-cyan-400
            hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
            hover:-translate-y-1
          "
        >
          <h2 className="text-cyan-300 text-4xl font-bold tracking-wide mb-6">
            {card.title}
          </h2>

          <p className="text-gray-400 text-xl">
            {card.short}
          </p>

          {expandedCard === cardId && (
            <div className="mt-10 border-t border-cyan-500/20 pt-10">

              <div className="space-y-6">

                <h2 className="text-red-400 text-4xl font-bold">
                  {card.title}
                </h2>

                {card.subtopics ? (

                  <div className="space-y-10">

                    {card.subtopics.map((topic, index) => (

                      <div
  key={index}
  className="
  bg-[#071529]
  border-2
  border-cyan-500/30
  rounded-3xl
  p-10
  mb-10
  backdrop-blur-xl
  shadow-[0_0_25px_rgba(0,255,255,0.10)]
  hover:shadow-[0_0_35px_rgba(0,255,255,0.20)]
  transition-all
  duration-300
  "
>

                        <div
  className="
  text-gray-200
  text-[22px]
  leading-[1.8]
  whitespace-pre-line
  font-light
  text-center
  w-full
  flex
  flex-col
  items-center
  justify-center
  "
>

                          <h3
                            className="
                            text-red-400
                            text-4xl
                            leading-[1.6rem]
                            font-extrabold
                            tracking-wide
                            "
                          >
                            {topic.heading}
                          </h3>

                          {topic.image && (
                            <img
                              src={siteUrl(topic.image)}
                              alt={topic.imageAlt || `${topic.heading} diagram`}
                              className="mt-8 w-full max-w-3xl rounded-2xl border border-cyan-500/20 bg-black object-contain"
                            />
                          )}

                        </div>

                        <div
                          className="
                          text-gray-200
                          text-2xl
                          leading-loose
                          whitespace-pre-line
                          "
                        >
                          {topic.notes}
                        </div>

                      </div>

                    ))}

                  </div>

                ) : (

                  <div
                    className="
                    text-gray-300
                    text-xl
                    leading-loose
                    "
                  >
                    <MarkdownNotes content={card.content} />
                  </div>

                )}

              </div>

            </div>
          )}

        </div>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020817] via-[#071129] to-[#020817] text-white flex">

      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <div className="flex-1 overflow-y-auto p-10">

        {activeSection === "unit1" && (
          <div>

            <h1 className="text-5xl font-bold text-cyan-400 mb-4">
              Unit 1 — Fundamentals of Android Application Development
            </h1>

            <p className="text-gray-400 text-lg mb-12 max-w-4xl">
              "Explore the evolution of mobile devices and operating systems, mobile application types, object-oriented programming concepts, software engineering principles, SDLC models, Android architecture, 
                              and the Android development environment."
            </p>

            <div className="space-y-8">
              {renderCards(unit1Cards, "u1-")}
            </div>

          </div>
        )}

        {activeSection === "unit2" && (
          <div>

            <h1 className="text-5xl font-bold text-cyan-400 mb-4">
              Unit 2 — Java Revisited
            </h1>

            <p className="text-gray-400 text-lg mb-12 max-w-4xl">
              "Study Java programming fundamentals and object-oriented programming concepts 
              used in Android application development, including classes, objects, inheritance, 
              polymorphism, interfaces, packages, and exception handling."
            </p>

            <div className="space-y-8">
              {renderCards(unit2Cards, "u2-")}
            </div>

          </div>
        )}
        {activeSection === "unit3" && (
  <div>

    <h1 className="text-5xl font-bold text-cyan-400 mb-4">
      Unit 3 — Android Framework and Architecture
    </h1>

    <p className="text-gray-400 text-lg mb-12 max-w-4xl">
      Study Android fundamentals, Android architecture,
      development tools, virtual devices, runtime environments,
      SDK components, application framework, and APK structure.
    </p>

    <div className="space-y-8">
      {renderCards(unit3Cards, "u3-")}
    </div>

  </div>
)}
        {activeSection === "unit4" && (
  <div>

    <h1 className="text-5xl font-bold text-cyan-400 mb-4">
      Unit 4 — Android Application Development and Security
    </h1>

    <p className="text-gray-400 text-lg mb-12 max-w-4xl">
      Learn Android user interface design, layouts, widgets,
      intents, activity lifecycle, multimedia handling,
      location services, networking, and secure mobile application development.
    </p>

    <div className="space-y-8">
      {renderCards(unit4Cards, "u4-")}
    </div>

  </div>
)}
        

        {activeSection === "allpdfs" && (
          <div>
            <h1 className="text-5xl font-bold text-cyan-400 mb-10">
              All PDFs, DOCs and PPTs
            </h1>

            <p className="text-gray-400 text-lg mb-10 max-w-4xl">
              A consolidated list of all available study materials, presentations, and documents.
            </p>

            <div className="space-y-10">
              {allDocs.map((group) => (
                <div key={group.category} className="space-y-6">
                  <h2 className="text-3xl font-semibold text-cyan-300">
                    {group.category}
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {group.items.map((doc) => renderDocLink(doc))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Academy;
