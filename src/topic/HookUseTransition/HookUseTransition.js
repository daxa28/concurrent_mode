import { useState, useEffect, useTransition } from "react";
import { Comments } from "./Comments";

const filterBySearch = (entities, search) =>
  entities.filter((item) => item.name.concat(item.body).includes(search));

function HookUseTransition() {
  const [isPending, startTransition] = useTransition();
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    startTransition(() => {
      setSearch(e.target.value);
    });
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=10")
      .then((res) => res.json())
      .then(setComments);
  }, []);

  return (
    <div className="comments">
      <input onChange={handleSearch} />
      {isPending && (
        <h1>Rendering...</h1>
      )}
      <Comments entities={filterBySearch(comments, search)} />
    </div>
  );
}

export default HookUseTransition;
