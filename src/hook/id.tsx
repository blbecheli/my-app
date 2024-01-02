import { useState, useEffect } from "react";

const useId = () => {
  const [id, setId] = useState(0);

  useEffect(() => {
    setId(id + 1);
  }, []);

  return id;
}

export default useId;