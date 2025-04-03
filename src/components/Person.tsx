"use client";

import Image from "next/image";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Person({ person }: { person: any }) {
  if (!person) return null;

  return (
    <div className="my-12 text-center">
      <h2 className="text-4xl mb-4">{person.fields.title || "No Title"}</h2>
      {person.fields.image && (
        <Image
          src={`https:${person.fields.image.fields.file.url}`}
          alt={person.fields.image.fields.title || "Person Media"}
          width={300}
          height={300}
          className="rounded-full"
        />
      )}
    </div>
  );
}