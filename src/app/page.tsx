// filepath: /Users/karthikrao/Desktop/next-contentful/src/app/page.tsx
import * as contentful from "contentful";
import Story from "@/components/Story";

// Initialize Contentful client
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  environment: process.env.CONTENTFUL_ENVIRONMENT || "master", // default to 'master' if not set
});

export default async function Home() {
  const result = await client.getEntry(process.env.ENTRY_ID!, { include: 2 });
  return <Story result={result} />;
}