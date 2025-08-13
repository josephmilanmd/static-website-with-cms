import { useEffect, useState } from "react";

type Content = {
  companyName: string;
  tagline: string;
  about: string;
};

export const App = () => {
  const [content, setContent] = useState<Content | null>(null);

  useEffect(() => {
    fetch("/content.json")
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, []);

  if (!content) return <p>Loading...</p>;

  return (
    <div>
      <h1>{content.companyName}</h1>
      <h2>{content.tagline}</h2>
      <p>{content.about}</p>
    </div>
  );
};
