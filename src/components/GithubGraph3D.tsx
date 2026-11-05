import { useState, useEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useReveal } from '../hooks/useReveal';

const ROWS = 7;
const COLS = 12;

interface GitHubEvent {
  created_at: string;
}

function generateMockData(): number[][] {
  return Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => Math.random()),
  );
}

function processEvents(events: GitHubEvent[]): number[][] {
  const grid: number[][] = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => 0),
  );

  const now = new Date();
  events.forEach((event) => {
    const date = new Date(event.created_at);
    const diffDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24),
    );
    const week = Math.floor(diffDays / 7);
    const day = date.getDay();
    if (week >= 0 && week < COLS && day >= 0 && day < ROWS) {
      grid[day][week] += 1;
    }
  });

  // Normalize to 0-1
  let max = 0;
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] > max) max = grid[r][c];
    }
  }
  if (max > 0) {
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        grid[r][c] /= max;
      }
    }
  }

  return grid;
}

const colorLow = new THREE.Color('#161b22');
const colorHigh = new THREE.Color('#388bfd');

function ContributionBar({
  row,
  col,
  value,
}: {
  row: number;
  col: number;
  value: number;
}) {
  const height = value * 5 + 0.1;
  const color = useMemo(() => {
    const c = new THREE.Color();
    c.lerpColors(colorLow, colorHigh, value);
    return c;
  }, [value]);

  return (
    <Float speed={1} floatIntensity={0.3}>
      <Box
        args={[1, 1, 1]}
        position={[col - 6, height / 2, row - 3.5]}
        scale={[0.8, height, 0.8]}
      >
        <meshStandardMaterial color={color} />
      </Box>
    </Float>
  );
}

export default function GithubGraph3D() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [grid, setGrid] = useState<number[][] | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/Madhu-36/events?per_page=100')
      .then((res) => {
        if (!res.ok) throw new Error('fetch failed');
        return res.json();
      })
      .then((events: GitHubEvent[]) => setGrid(processEvents(events)))
      .catch(() => setGrid(generateMockData()));
  }, []);

  if (!grid) return null;

  return (
    <section id="github" className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''}`}
        >
          <span className="eyebrow mb-6">
            <span className="h-px w-8 bg-accent-400" />
            GitHub Activity
          </span>
          <h2 className="heading-lg mb-16 max-w-2xl text-balance">
            Contribution landscape.
          </h2>

          <div className="h-[400px] rounded-2xl border border-ink-800 overflow-hidden">
            <Canvas camera={{ position: [0, 8, 12], fov: 50 }}>
              <ambientLight intensity={0.4} />
              <directionalLight position={[5, 10, 5]} intensity={1} />
              {grid.map((rowData, row) =>
                rowData.map((value, col) => (
                  <ContributionBar
                    key={`${row}-${col}`}
                    row={row}
                    col={col}
                    value={value}
                  />
                )),
              )}
              <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={0.5}
              />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
