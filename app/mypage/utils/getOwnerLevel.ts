export interface LevelResult {
  level: string;
  nextLevel?: {
    name: string;
    remainingCount: number;
  };
}

export function getOwnerLevel(shareCount: number): LevelResult {
  const levels = ["비기너", "새싹", "새싹2", "새싹3", "새싹4"] as const;
  const thresholds = [0, 1, 5, 10, 20] as const;

  const index =
    shareCount === 0
      ? 0
      : thresholds.findIndex(
          (min, i) =>
            i < thresholds.length - 1 && shareCount >= min && shareCount < thresholds[i + 1]
        );

  if (index === -1 || index === thresholds.length - 1) {
    return { level: levels[levels.length - 1] };
  }

  return {
    level: levels[index],
    nextLevel: {
      name: levels[index + 1],
      remainingCount: thresholds[index + 1] - shareCount,
    },
  };
}
