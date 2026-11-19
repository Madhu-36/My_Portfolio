# Security Architecture & AST Defense

This document details the security posture, static analysis defense models, and cryptographic safeguards implemented across Madhu S's projects.

---

## 1. CodeShield AST Security Engine

- **Abstract Syntax Tree Inspection**: Unlike regex scanners that are easily evaded via string concatenation, CodeShield constructs a full syntactic tree to detect deserialization attacks, dangerous shell executions (`os.system`, `subprocess.Popen`), and prompt injection vectors.
- **Entropy & Heuristic Scoring**: Evaluates dynamic variable names and obfuscated payloads in real-time.
- **Zero Overhead Sandbox**: Designed to execute in sub-12ms, enabling integration directly into CI/CD pipelines and runtime gateways.

---

## 2. Kavach Cryptographic Micro-Mandates

- **Problem Space**: Autonomous AI agents given tool-calling abilities may experience goal drift or prompt coercion, leading to runaway API charges or unauthorized transactions.
- **Cryptographic Enforcement**: Employs asymmetric **Ed25519 signatures** where each mandate contains an immutable budget limit, timestamp expiration, and target recipient.
- **Process Isolation**: Combines Docker container barriers with cgroups to enforce strict memory and CPU quotas on executing agents.

---

## 3. Dependency & Supply Chain Integrity

- All npm dependencies are audited for known vulnerabilities (`npm audit`).
- Zero telemetry or unverified third-party analytics scripts are embedded in the portfolio bundle.
