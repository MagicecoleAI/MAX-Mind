# MAX Mind 변경 이력

> **최종 수정**: 2026-04-18 · **담당**: @magic · **상태**: 🟢 최신
> 상위 문서: [CLAUDE.md](../CLAUDE.md) · [docs/INDEX.md](INDEX.md)

---

프로젝트의 주요 변경 이력, 의사결정, PR 이력을 시간 역순으로 기록한다.
세부 타스크 이력은 [plans/](plans/), 피드백·의사결정은 [feedback/](feedback/)에 있다.

---

## 2026-04-18 · docs 재구조화 + 관리 체계 도입 · T-001

**요약**: 패밀리 프로젝트 [MAX-Tutor](../../MAX-Tutor/CLAUDE.md)와 [rhwp 온보딩 가이드](https://github.com/edumagiceco/rhwp/blob/main/mydocs/manual/onboarding_guide.md)를 참조해 프로젝트 관리 체계를 정비.

### 변경 내용

- **신규 문서 생성**
  - `CLAUDE.md` (프로젝트 루트, 10섹션 지도)
  - `README.md` (프로젝트 루트, 1분 개요)
  - `docs/INDEX.md` (문서 허브)
  - `docs/changelog.md` (본 문서)
  - `docs/orders/README.md` + `docs/orders/2026-04-18.md` (시드)
  - `docs/plans/README.md` + `docs/plans/T-001-docs-restructure.md`
  - `docs/feedback/README.md` + `docs/feedback/backlog.md` (B-001~B-008 시드)
  - `docs/archive/README.md`

- **기존 문서 재배치** (git mv — 이력 보존)
  | 이전 | 신규 |
  |---|---|
  | `docs/data-model.md` | `docs/design/data-model.md` |
  | `docs/file-format.md` | `docs/design/file-format.md` |
  | `docs/layout-algorithms.md` | `docs/design/layout-algorithms.md` |
  | `docs/user-manual.md` | `docs/guides/user-manual.md` |
  | `docs/images/` | `docs/guides/images/` |
  | `docs/improvement-plan.md` | `docs/improvements/code-quality.md` |
  | `docs/top5-feature-plan.md` | `docs/strategy/top5-feature-plan.md` |
  | `docs/testing-strategy.md` | `docs/testing/strategy.md` |

- **신규 디렉토리 9종**: `strategy/`, `design/`, `guides/`, `improvements/`, `testing/`, `orders/`, `plans/`, `feedback/`, `archive/`

- **문서 메타 표준화**: 재배치된 8개 문서 상단에 `최종 수정 · 담당 · 상태` 2줄 추가

### 배경 (Why)

- 기존 `docs/`는 평탄 9개 파일로 분류가 없어 "어디에 새 문서를 둘지" 규칙이 부재
- 작업 흐름 산출물(orders/plans/feedback)이 없어 세션 간 맥락 단절
- `CLAUDE.md`/`README.md` 부재로 AI·신규 합류자가 진입 시 기준점 없음

세부: [plans/T-001-docs-restructure.md](plans/T-001-docs-restructure.md)

---

## 2026-04-18 · MAX Mind 리브랜딩 및 Cargo 패키지 정비

**요약**: 프로젝트 이름을 최종 `MAX Mind`로 확정하고, 초기 템플릿이 남아 있던 Cargo 패키지 메타데이터 정리.

### 변경 내용

- `src-tauri/Cargo.toml`: `name = "app"` → `name = "max-mind"`, `description` 최신화
- `src-tauri/Cargo.toml` `[lib]`: `name = "app_lib"` → `name = "max_mind_lib"`
- `src-tauri/src/main.rs`: `app_lib::run()` → `max_mind_lib::run()`
- 로고 이미지 교체 (`logo.png` — 보라 MAX + 검정 Mind 텍스트 로고). 이전 로고는 `logo.png.bak`로 보존
- 아이콘(`src-tauri/icons/*`) — 사용자 요청으로 **현재 버전 유지**
- `cargo check` 통과 확인 (깨끗한 빌드)

### 유지 결정

- XMind 파일 포맷 호환 목적의 식별자(`XMindSheet`, `XMindTopic`, `_xmindRaw`, `.xmind` 확장자, `"XMind Files"` 다이얼로그 필터)는 **프로젝트 이름 변경과 무관하게 보존**.
  - 근거: `docs/improvements/code-quality.md:483` — "XMind 파일 호환은 정상 동작, 건드릴 이유 없음" 방침과 정합

---

## 2026-03-19 이전 · Phase 0~2 초기 구축

> 재구조화 이전 이력은 깃 로그 기준 `git log --oneline` 또는 각 설계 문서의 상단 메타 참고.

### 마일스톤 요약 (기억에서 복원, 수정 가능)

- **Phase 0** — MVP 기본 기능: Tauri 2.0 셸·React 19 UI·Canvas 렌더링·XMind Zen 파일 포맷 저장/로드
- **Phase 1** — 편집 기능 확장: 토픽 CRUD, Undo/Redo(zundo), 스타일/테마/마커, 내보내기(PNG/SVG/PDF), Outliner View, Zen Mode
- **Phase 2** — 성능 최적화 (2026-03-19 시점 반영):
  - Canvas 더티 플래그 기반 렌더링
  - 뷰포트 컬링 (화면 밖 노드 스킵)
  - Quadtree 공간 인덱싱 (히트 테스트 O(log n))
  - 레이아웃 높이 메모이제이션 (`heightCache`)
  - React ErrorBoundary로 크래시 복구

상세: [architecture.md](architecture.md) · [design/layout-algorithms.md](design/layout-algorithms.md)

---

## 작성 규칙

- **최신이 위로**. 오래된 항목이 아래로 내려간다.
- 각 항목은 `YYYY-MM-DD · 제목 · (선택: T-NNN)` 헤더로 시작
- **요약 1~2줄 + 변경 내용 불릿**. 상세는 plans/ 링크로 위임
- 설계 원칙이 바뀐 결정은 [feedback/decisions/](feedback/) 링크 (Phase 2에서 도입)
- 월 단위로 쌓이면 연도별 아카이브 고려 (`archive/changelog-2026.md`)
