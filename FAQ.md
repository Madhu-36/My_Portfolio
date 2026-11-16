# Frequently Asked Questions (FAQ)

### 1. Why Vite + React instead of Next.js or Astro?
This portfolio is deployed as a zero-latency static client application on GitHub Pages. Vite provides instant sub-second Hot Module Replacement (HMR) during development and treeshakes production assets into optimized chunks. By avoiding server-side rendering runtimes, the site has zero cold-start delay, 100% offline static cacheability, and zero hosting costs.

---

### 2. How is Three.js WebGL performance handled on mobile and low-power devices?
The 3D canvas utilizes dynamic pixel ratio bounding (`Math.min(window.devicePixelRatio, 2)`), frustum culling, and low poly geometry topologies. On devices with low battery or hardware limitations, antialiasing is adjusted, and requestAnimationFrame automatically pauses rendering when the browser tab loses focus.

---

### 3. What is the difference between CodeShield and Kavach?
- **Kavach**: Focused on runtime **cryptographic micro-mandates** for autonomous AI agents, using Ed25519 signatures and OS process isolation to enforce budget boundaries on UPI/payment operations.
- **CodeShield**: An **edge-native AST security firewall** that parses syntax trees to detect prompt injection vectors, unsafe memory patterns, and vulnerable dependencies prior to execution.

---

### 4. How does the procedural UI sound engine work without audio files?
The audio system (`useSoundEffects.ts`) directly leverages the native browser Web Audio API:
- Clicks and interaction chimes are synthesized in real time using short exponential sine wave ramps on an `OscillatorNode`.
- This eliminates bandwidth bloat, avoids external audio file network requests, and ensures zero latency audio feedback.
- Sound is muted by default or easily toggled via the navbar or <kbd>Cmd</kbd>+<kbd>K</kbd>.

---

### 5. How can I trigger the Matrix Hacker Mode Easter Egg?
Type `hack` sequentially anywhere on the page, or press <kbd>Cmd</kbd>+<kbd>K</kbd> / <kbd>Ctrl</kbd>+<kbd>K</kbd> to open the Command Palette and select **Toggle Matrix / Hacker Mode**. Press <kbd>Escape</kbd> or click the "EXIT MATRIX MODE" banner button at the top to dismiss it.
