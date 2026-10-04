import { useState, useEffect } from "react";

export function useFilterOptions(fetchFn) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFn()
      .then((data) => {
        setItems(
          data.map((name) => ({
            id: name.toLowerCase(),
            name,
            checked: false,
          }))
        );
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [fetchFn]);

  const toggle = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return { items, toggle, loading };
}
