export const LikedPosts = () => {
  const map = new Map();
  map.set("1234", { 12: 5134 });
  map.set("59", { 11: "banana" });

  return <div>{JSON.stringify(Object.fromEntries(map))}</div>;
};
