import React from "react";
import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const llmsTxtPath = path.join(process.cwd(), "llms.txt");
  const content = fs.readFileSync(llmsTxtPath, "utf-8");
  return { props: { content } };
}

const LlmsTxtPage = ({ content }: { content: string }) => (
  <main className="max-w-2xl mx-auto py-16 px-4 text-brand-light">
    <h1 className="text-3xl font-bold mb-6 text-brand-accent">llms.txt</h1>
    <pre className="bg-brand-deeperBlue rounded-lg p-4 overflow-x-auto whitespace-pre-wrap border border-brand-accent/20 text-base md:text-lg">
      {content}
    </pre>
    <p className="mt-8 text-sm text-brand-accent/70 italic text-center">
      This page displays the llms.txt file for LLMs and humans.
    </p>
  </main>
);

export default LlmsTxtPage;
