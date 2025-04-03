// filepath: /Users/karthikrao/Desktop/next-contentful/src/components/Story.tsx
"use client";

import Image from "next/image";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ContentfulLivePreviewProvider, useContentfulLiveUpdates } from "@contentful/live-preview/react";
import Person from "./Person";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Story({ result }: { result: any }) {
  const updatedResult = useContentfulLiveUpdates(result);

  console.log("Updated Result:", updatedResult); // Debug the API response


  // Access the referenced Person content
  const person = updatedResult.fields.reference; // Assuming 'person' is the reference field in the Story content type

  return (
    <ContentfulLivePreviewProvider locale="en-US" enableLiveUpdates={updatedResult.preview}>
      <main className="flex min-h-screen flex-col items-center">
        <h1 className="text-5xl my-12">{updatedResult.fields.title || ""}</h1>
        <p className="text-2xl my-12">{updatedResult.fields.description || ""}</p>
        <div className="text-2xl my-12">
          {documentToReactComponents(updatedResult.fields.body)}
        </div>
        {updatedResult.fields.media && (
          <div className="my-12">
            <Image
              src={`https:${updatedResult.fields.media.fields.file.url}`}
              alt={updatedResult.fields.media.fields.title || "Media"}
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        )}

       {/* Render the referenced Person content */}
       {person && <Person person={person} />}

        <p className="text-2xl my-12">{updatedResult.fields.disclosure || ""}</p>
      </main>
    </ContentfulLivePreviewProvider>
  );
}