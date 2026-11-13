import type { ReactNode } from "react";
import styles from "./adaptive-content-grid.module.css";

type GridItem = {
  id: string;
  title: string;
  text: string;
};

function splitFor(items: GridItem[], start: number) {
  const remaining = items.length - start;
  const first = items[start];
  if (!first) return 1;

  if (first.text.length > 720) return 1;
  if (first.text.length > 420) return Math.min(2, remaining);
  if (first.text.length > 260) return Math.min(3, remaining);
  return Math.min(4, remaining);
}

export function AdaptiveContentGrid({
  items,
  rowSplits,
  renderItem,
}: {
  items: readonly GridItem[];
  rowSplits?: readonly number[];
  renderItem: (item: GridItem, index: number) => ReactNode;
}) {
  const rows: GridItem[][] = [];
  let cursor = 0;
  let rowIndex = 0;

  while (cursor < items.length) {
    const requestedSplit = rowSplits?.[rowIndex];
    const count = requestedSplit
      ? Math.max(1, Math.min(requestedSplit, items.length - cursor))
      : splitFor([...items], cursor);
    rows.push([...items].slice(cursor, cursor + count));
    cursor += count;
    rowIndex += 1;
  }

  return (
    <div className={styles.grid}>
      {rows.map((row, index) => (
        <div className={styles.row} data-split={row.length} key={`row-${index}`}>
          {row.map((item, itemIndex) => (
            <div className={styles.cell} key={item.id}>
              {renderItem(item, cursor - row.length + itemIndex)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
