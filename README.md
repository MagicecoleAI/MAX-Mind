# MAX Mind

![MAX Mind Logo](logo.png)

> 빠르고 가벼운 네이티브 데스크톱 마인드맵 애플리케이션 · XMind Zen 포맷 호환

**MAX Mind**는 Tauri 2.0 기반의 데스크톱 마인드맵 앱입니다.
HTML5 Canvas 커스텀 렌더링 엔진으로 수천 개 노드에서도 부드럽게 동작하며,
XMind Zen 파일 포맷(`.xmind`)과 완벽하게 호환됩니다.

---

## ✨ 주요 기능

- 🗺️ **4가지 구조 레이아웃**: Mind Map / Logic Chart / Org Chart / Tree Chart
- 📂 **XMind 호환**: `.xmind` 파일을 그대로 열고 저장 (Zen 포맷 round-trip)
- ⚡ **Canvas 렌더링**: 더티 플래그 + 뷰포트 컬링 + Quadtree 공간 인덱싱
- 🎨 **테마/스타일**: 컬러 프리셋, 토픽 스타일, 마커·아이콘
- 📝 **Outliner View**: 트리 구조를 아웃라이너로 편집
- 🧘 **Zen Mode**: 집중 모드로 배경/UI 최소화
- 🔁 **Undo/Redo**: zundo 기반 전체 히스토리
- 📤 **내보내기**: PNG / SVG / PDF
- 💻 **네이티브 데스크톱**: macOS / Windows / Linux (Tauri 2.0)

---

## 🚀 빠른 시작

### 요구 사항
- Node.js 20+
- Rust 1.77.2+ (Tauri 빌드용)

### 설치 & 실행

```bash
# 의존성 설치
npm install

# 데스크톱 앱 개발 모드 (권장)
npm run tauri:dev

# 웹 개발 서버만 (브라우저에서 UI만 확인)
npm run dev

# 프로덕션 번들 (네이티브 설치 파일 생성)
npm run tauri:build
```

---

## 📖 문서

프로젝트에 합류하신다면 다음 순서로 읽어주세요:

1. **[CLAUDE.md](CLAUDE.md)** — 협업 규칙·디렉토리 책임·금기 사항 (필수)
2. **[docs/INDEX.md](docs/INDEX.md)** — 전체 문서 네비게이션
3. **[docs/architecture.md](docs/architecture.md)** — 시스템 구조
4. **[docs/guides/user-manual.md](docs/guides/user-manual.md)** — 사용자 매뉴얼

주요 설계 문서:
- [docs/design/data-model.md](docs/design/data-model.md) — 타입 계층
- [docs/design/file-format.md](docs/design/file-format.md) — `.xmind` 포맷
- [docs/design/layout-algorithms.md](docs/design/layout-algorithms.md) — 레이아웃 엔진
- [docs/strategy/top5-feature-plan.md](docs/strategy/top5-feature-plan.md) — 기능 로드맵
- [docs/improvements/code-quality.md](docs/improvements/code-quality.md) — 코드 품질 개선 계획

---

## 🛠️ 기술 스택

**Frontend**: React 19 · TypeScript 5 · Vite 7 · Tailwind CSS 4 · Zustand + immer + zundo
**Rendering**: HTML5 Canvas (커스텀 엔진) · Quadtree 공간 인덱싱
**Backend**: Rust (Tauri 2.0) · ZIP 처리 · 파일 I/O
**Packaging**: Tauri Bundler (macOS · Windows · Linux)

---

## 📌 현재 상태

- ✅ Phase 0/1 — 기본 기능 완성 (XMind 호환, 4 레이아웃, 내보내기)
- ✅ Phase 2 — 성능 최적화 반영 (더티 플래그, 뷰포트 컬링, Quadtree)
- 🔄 다음 — [코드 품질 개선 3 Phase](docs/improvements/code-quality.md) (테스트 도입, 스토어 분리, 보안 강화)

자세한 로드맵: [docs/strategy/top5-feature-plan.md](docs/strategy/top5-feature-plan.md)

---

## 📄 라이선스

(미정 — 추후 결정)

---

*최종 수정: 2026-04-18 · 담당: @magic*
