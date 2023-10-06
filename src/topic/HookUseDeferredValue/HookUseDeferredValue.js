import { useState, useEffect } from "react";
import { Comments } from "./Comments";

const filterBySearch = (entities, search) =>
  entities.filter((item) => item.name.concat(item.body).includes(search));

function HookUseDeferredValue() {
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
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
      <Comments entities={filterBySearch(comments, search)} />
    </div>
  );
}

export default HookUseDeferredValue;
