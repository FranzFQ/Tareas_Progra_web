export const HideKey = async (text) => {
  const response = await fetch("http://localhost:8000/api/keys/hide/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  return await response.json();
};

export const RevealSecret = async (key) => {
  const response = await fetch("http://localhost:8000/api/keys/reveal/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key }),
  });
  return await response.json();
};
