# MAX Mind 문서 인덱스

> 프로젝트의 모든 산출물·가이드·보고서를 목적별로 모은 네비게이션 맵.
> **최종 수정**: 2026-04-18 · **담당**: @magic · **상태**: 🟢 최신 (T-001 재구조화 완료)
> **최상위 가이드**: [CLAUDE.md](../CLAUDE.md)를 먼저 읽어주세요.

---

## 🚨 현재 상태 (한눈에 파악)

> **최종 갱신**: 2026-04-18 · 매일 `orders/` 최신 파일과 이 섹션을 함께 갱신

| 항목 | 상태 |
|------|------|
| 📅 **최신 작업 기록** | [orders/2026-04-18.md](orders/2026-04-18.md) — 오늘 맥락 |
| ✅ **최근 완료** | [T-001 docs 재구조화 + 관리 체계 도입](plans/T-001-docs-restructure.md) |
| 🔄 **진행 중 타스크** | 없음 (T-001 완료 직후) |
| 🚧 **블로커** | 없음 |
| 📋 **활성 백로그** | [feedback/backlog.md](feedback/backlog.md) — 8건 (B-001~B-008) |
| 🎛️ **Phase 상태** | 기본 Phase 0·1 완료 / Phase 2 성능 최적화 반영 / 코드 품질 3 Phase 대기 |

> 🤖 **신규 Claude Code 세션에게**: 이 섹션과 [orders/](orders/)의 **가장 최신 파일**을 먼저 확인하세요. "지금 뭘 해야 하나?"에 대한 답은 여기서 출발합니다.

---

## 🚀 15분 온보딩 루트 (신규 합류자 · AI 에이전트)

1. [README.md](../README.md) — 1분 개요
2. [CLAUDE.md](../CLAUDE.md) — 협업 규칙, 디렉토리 책임, 금기 사항
3. **이 문서 (docs/INDEX.md)** — 전체 문서 지도
4. [architecture.md](architecture.md) — 시스템 구조 + 현재 Phase 상태
5. [changelog.md](changelog.md) — 최근 의사결정과 변경 이력

---

## 📁 디렉토리 구조

```
docs/
├── INDEX.md                  (이 파일)
├── architecture.md           (🎯 루트 허브 — 시스템 구조)
├── changelog.md              (🎯 루트 허브 — 변경 이력)
│
├── strategy/                 (전략·제품·로드맵)
├── design/                   (설계·타입·포맷·알고리즘)
├── guides/                   (사용자 매뉴얼·API 가이드)
├── improvements/             (진행/예정 개선 계획)
├── testing/                  (검증·성능 보고)
│
├── orders/                   (일일/주간 작업 지시)      ← Phase 2
├── plans/                    (타스크별 수행/완료 보고)   ← Phase 2
├── feedback/                 (피드백·의사결정·백로그)    ← Phase 2
│
└── archive/                  (완료/폐기 문서 보관)
```

---

## 🎯 시작하기 & 환경

| 문서 | 한 줄 요약 |
|------|----------|
| [../README.md](../README.md) | 1분 개요·빠른 시작·주요 기능 |
| [../CLAUDE.md](../CLAUDE.md) ⭐ | 협업 규칙·디렉토리 책임·금기·체크리스트 |
| [architecture.md](architecture.md) ⭐ | 시스템 구조(Tauri/React/Canvas/Rust) + Phase 상태 |

---

## 📐 전략·제품·로드맵 — `strategy/`

| 문서 | 한 줄 요약 |
|------|----------|
| [strategy/top5-feature-plan.md](strategy/top5-feature-plan.md) ⭐ | TOP5 신규 기능 개발 계획 (PNG/SVG 내보내기·Notes·Zen Mode·Outliner·Markers) |

---

## 🏗️ 설계·아키텍처·계약 — `design/`

| 문서 | 한 줄 요약 |
|------|----------|
| [design/data-model.md](design/data-model.md) ⭐ | 핵심 타입 계층 (`Workbook`·`Sheet`·`Topic` 트리) |
| [design/file-format.md](design/file-format.md) ⭐ | `.xmind` ZIP 아카이브 구조, XMind Zen 호환 |
| [design/layout-algorithms.md](design/layout-algorithms.md) | 4가지 레이아웃 알고리즘 (Mind Map/Logic/Org/Tree), 높이 메모이제이션 |

---

## 🔧 가이드·매뉴얼 — `guides/`

| 문서 | 한 줄 요약 |
|------|----------|
| [guides/user-manual.md](guides/user-manual.md) ⭐ | 사용자 매뉴얼 — 화면 구성·기본 사용법·스타일·내보내기 (스크린샷 포함) |

---

## 📈 진행/예정 개선 계획 — `improvements/`

| 문서 | 한 줄 요약 |
|------|----------|
| [improvements/code-quality.md](improvements/code-quality.md) ⭐ | 코드 품질 개선 3 Phase (테스트 도입·스토어 분리·보안 강화) |

---

## 🧪 검증·테스트 보고 — `testing/`

| 문서 | 한 줄 요약 |
|------|----------|
| [testing/strategy.md](testing/strategy.md) | 테스트 레벨·핵심 케이스 (Vitest/Playwright/cargo test) — 전략만 기술, 실제 구현 대기 |

---

## 📜 변경 이력

| 문서 | 한 줄 요약 |
|------|----------|
| [changelog.md](changelog.md) ⭐ | 전체 변경 이력 — 리네임·재구조화·관리 체계 도입 |

---

## 📂 작업 흐름 관리 (Phase 2 — 운영 중)

| 디렉토리 | 용도 | 진입점 |
|---------|------|-------|
| [orders/](orders/) | 일일/주간 작업 지시 · 진행 기록 | [orders/README.md](orders/README.md) |
| [plans/](plans/) | 타스크별 수행 계획 + 완료 보고 (`T-NNN-slug.md`) | [plans/README.md](plans/README.md) |
| [feedback/](feedback/) | 피드백 4유형 분류, 의사결정, 백로그 | [feedback/README.md](feedback/README.md) · [feedback/backlog.md](feedback/backlog.md) |

### 빠른 시작

1. **오늘 작업 시작** → `docs/orders/YYYY-MM-DD.md` 작성 (일일) 또는 `docs/orders/WYYYY-NN.md` (주간)
2. **타스크 착수** → `docs/plans/T-NNN-slug.md` 작성 — [템플릿](plans/README.md)
3. **피드백/백로그** → [feedback/backlog.md](feedback/backlog.md)에 `B-NNN`으로 등록

---

## 📦 아카이브 — `archive/`

완료·대체·폐기된 문서 보관. 원칙: **삭제 대신 이동**.
자세한 정책: [archive/README.md](archive/README.md)

---

## 📝 문서 작성·관리 규칙

### 메타데이터 2줄 (신규/수정 시 적용)

각 문서 최상단에:
```markdown
> **최종 수정**: YYYY-MM-DD · **담당**: @handle · **상태**: 🟢 최신 / 🟡 검토 필요 / 🔴 폐기 예정
> 상위 문서: [CLAUDE.md](../../CLAUDE.md) · [docs/INDEX.md](../INDEX.md)
```

### 네이밍 규칙 (2026-04-18부터 강제)

- **모든 신규 파일은 영문 kebab-case** (예: `new-feature-plan.md`)
- 체크포인트: `<주제>-<YYYY-MM-DD>.md` (예: `format-alignment-2026-05-15.md`)
- 타스크 문서: `T-NNN-slug.md` (plans/ 내부에서만)
- 백로그 항목: `B-NNN` (feedback/backlog.md 내부)

### 배치 규칙

새 문서를 만들 때 어느 디렉토리로 가야 할지:

| 성격 | 위치 |
|------|------|
| 전략·제품·로드맵 | `strategy/` |
| 시스템 설계·타입·포맷·알고리즘 | `design/` |
| 사용자 매뉴얼·API 가이드 | `guides/` |
| 진행 중/예정 개선 계획 | `improvements/` |
| 테스트·QA·성능 보고서 | `testing/` |
| 일일/주간 작업 지시 | `orders/` |
| 타스크별 수행 보고 | `plans/` |
| 피드백·의사결정·백로그 | `feedback/` |
| 완료/대체/폐기된 이전 문서 | `archive/` |

### 신규 문서 체크리스트

1. 적절한 디렉토리에 영문 kebab-case 이름으로 생성
2. 상단 메타데이터 2줄 기입
3. **이 INDEX.md 해당 테이블에 한 줄로 등재** — 빠뜨리면 고립 문서가 됨
4. 관련 허브([architecture.md](architecture.md), [changelog.md](changelog.md))에 역참조 링크 추가

### 문서 상태 전이

- 🟢 최신 → 정상 참조 가능
- 🟡 검토 필요 → 신뢰도 낮음, 최신화 예정
- 🔴 폐기 예정 → 대체 문서 링크 필수. 1~2개월 후 [archive/](archive/)로 이동

---

## ⭐ 허브 Top 5 (자주 참조되는)

작업 착수 시 이 5개를 먼저 훑어보면 대부분 맥락 파악 가능:

1. [CLAUDE.md](../CLAUDE.md) — 협업 규칙·디렉토리 책임
2. [architecture.md](architecture.md) — 시스템 전체 구조
3. [changelog.md](changelog.md) — 최근 변경·의사결정
4. [strategy/top5-feature-plan.md](strategy/top5-feature-plan.md) — 기능 로드맵
5. [improvements/code-quality.md](improvements/code-quality.md) — 품질 개선 로드맵

---

## 🔗 패밀리 프로젝트

| 프로젝트 | 역할 | 관리 체계 링크 |
|---------|------|--------------|
| [MAX-Tutor](../../MAX-Tutor/) | AI 튜터링 플랫폼 | [CLAUDE.md](../../MAX-Tutor/CLAUDE.md) · [docs/INDEX.md](../../MAX-Tutor/docs/INDEX.md) |
| **MAX-Mind** (현 저장소) | 마인드맵 애플리케이션 | 본 문서 |

관리 체계는 [rhwp 온보딩 가이드](https://github.com/edumagiceco/rhwp/blob/main/mydocs/manual/onboarding_guide.md) 기준으로 통일.
