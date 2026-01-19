export const featureFlags = {
  comments: import.meta.env.VITE_ENABLE_COMMENTS === "true",
};

console.log("FEATURE COMMENTS:", import.meta.env.VITE_ENABLE_COMMENTS);
