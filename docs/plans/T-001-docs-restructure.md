# T-001: docs 재구조화 + 프로젝트 관리 체계 도입

> **최종 수정**: 2026-04-18 · **담당**: @magic · **상태**: ✅ 완료

## 메타

- **관련 PR**: (본 세션에서 직접 변경, 별도 PR 번호 없음)
- **관련 문서**:
  - [../../CLAUDE.md](../../CLAUDE.md) (신규)
  - [../INDEX.md](../INDEX.md) (신규)
  - [../changelog.md](../changelog.md) (신규)
- **연계 order**: [../orders/2026-04-18.md](../orders/2026-04-18.md)
- **참조**:
  - 패밀리 프로젝트 [MAX-Tutor CLAUDE.md](../../../MAX-Tutor/CLAUDE.md) / [docs/INDEX.md](../../../MAX-Tutor/docs/INDEX.md)
  - [rhwp 온보딩 가이드](https://github.com/edumagiceco/rhwp/blob/main/mydocs/manual/onboarding_guide.md)
- **예상 공수**: 0.5 MD (실측 유사)
- **우선순위**: P1

---

## 1. 배경 (Why)

MAX Mind는 Phase 0~2까지 기능 구현은 완료됐으나, **프로젝트 관리 계층이 부재**한 상태였다:

| 항목 | 이전 상태 |
|---|---|
| `CLAUDE.md` (프로젝트 지도) | ❌ 없음 |
| `README.md` (1분 개요) | ❌ 없음 |
| `docs/INDEX.md` (문서 허브) | ❌ 없음 |
| `docs/changelog.md` (변경 이력) | ❌ 없음 |
| `docs/` 분류 | ⚠️ 평탄한 9개 파일, 카테고리 규칙 없음 |
| 작업 흐름 레이어 | ❌ orders/plans/feedback 없음 |
| 문서 메타 표준 | ⚠️ 일부 파일만 `> 최종 갱신: ...` 자유 형식 |

이 상태에서는:
- 신규 합류자/AI 에이전트가 "어디서부터 읽어야 하나"에 답하는 문서가 없음
- 같은 결정을 반복 논의 (의사결정 기록 부재)
- 세션 간 맥락 단절 (orders 없음)
- "새 문서를 어디 두지?" 기준 없음 → 루트 `docs/`만 계속 팽창

패밀리 프로젝트 MAX-Tutor는 이미 rhwp 기반 관리 체계를 도입해 운영 중이므로,
**동일한 뼈대를 이식해 프로젝트 간 통일성**을 확보하는 것이 가장 비용 효율적인 선택.

---

## 2. 접근 방식 (How)

MAX-Tutor docs 구조를 기준선으로, MAX Mind 실정(단일 개발자 · Tauri/Canvas 기반)에 맞게 조정.

### 단계

1. **Phase A — 이동 & 재분류**
   - 9개 서브디렉토리 생성 (`strategy/`, `design/`, `guides/`, `improvements/`, `testing/`, `orders/`, `plans/`, `feedback/`, `archive/`)
   - 기존 문서 8개를 `git mv`로 재배치 (이력 보존)
   - 재배치된 문서 상단에 메타 2줄 추가

2. **Phase B — 신규 지도 문서**
   - `CLAUDE.md` (10섹션 MAX-Tutor 패턴)
   - `README.md` (1분 개요)
   - `docs/INDEX.md` (문서 허브 + 현재상태 대시보드)
   - `docs/changelog.md` (변경 이력, T-001 첫 시드)

3. **Phase C — 작업 흐름 레이어**
   - `docs/orders/README.md` + `2026-04-18.md`
   - `docs/plans/README.md` + `T-001-docs-restructure.md` (본 파일)
   - `docs/feedback/README.md` + `backlog.md` (B-001~B-008 시드)
   - `docs/archive/README.md`

### 재배치 매핑

| 이전 경로 | 신규 경로 |
|---|---|
| `docs/data-model.md` | `docs/design/data-model.md` |
| `docs/file-format.md` | `docs/design/file-format.md` |
| `docs/layout-algorithms.md` | `docs/design/layout-algorithms.md` |
| `docs/user-manual.md` | `docs/guides/user-manual.md` |
| `docs/images/` | `docs/guides/images/` |
| `docs/improvement-plan.md` | `docs/improvements/code-quality.md` |
| `docs/top5-feature-plan.md` | `docs/strategy/top5-feature-plan.md` |
| `docs/testing-strategy.md` | `docs/testing/strategy.md` |
| `docs/architecture.md` | (유지 — 루트 허브) |

---

## 3. 검증 기준 (Definition of Done)

- [x] 9개 신규 디렉토리 생성 완료
- [x] 8개 기존 문서 `git mv`로 재배치, `git status`가 `R`(rename)으로 인식
- [x] 재배치된 문서 상단 메타 2줄 추가 (담당 @magic 통일)
- [x] `CLAUDE.md`·`README.md`·`docs/INDEX.md`·`docs/changelog.md` 생성
- [x] `orders/README.md` + 오늘 파일 시드
- [x] `plans/README.md` + 본 파일 생성
- [x] `feedback/README.md` + `backlog.md` (B-001~B-008) 생성
- [x] `archive/README.md` 생성
- [x] `user-manual.md`의 이미지 상대 경로(`images/*.png`) 깨지지 않음 — 동일 디렉토리 동반 이동으로 유효
- [x] 기존 문서들 간 크로스링크는 없었음(사전 조사 확인) → 링크 수정 불필요
- [x] 담당 핸들 `@magic`으로 통일

---

## 4. 진행 로그

- **2026-04-18**:
  - MAX-Tutor `CLAUDE.md` / `docs/INDEX.md` / `docs/plans|orders|feedback/README.md` 분석
  - rhwp 온보딩 가이드 주요 원칙 추출 (T-NNN/B-NNN, 메타 3줄, rename over delete)
  - MAX Mind 현재 docs 진단 → 매핑 테이블 확정 → 사용자 승인
  - **Phase A 실행**: `mkdir -p` + `git mv` 8건. `git status`로 `R`(rename) 확인
  - 8개 재배치 파일에 메타 2줄(담당 @magic, 상태 🟢/🟡) 추가
  - `architecture.md`는 기존 `> 최종 갱신` 라인을 통합 형식으로 교체
  - `testing/strategy.md`는 실제 테스트 0건 현실 반영해 🟡 상태
  - **Phase B 실행**: `CLAUDE.md`(10섹션), `README.md`, `docs/INDEX.md`, `docs/changelog.md` 작성
  - **Phase C 실행**: orders/plans/feedback/archive 4세트 README + 시드 파일 작성

---

## 5. 최종 결과

### 변경 요약
- **신규 디렉토리**: 9개
- **이동한 파일**: 8개 (git 이력 보존, 4~91% 유사도로 rename 인식)
- **신규 문서**: 12개 (CLAUDE.md, README.md, INDEX.md, changelog.md, 각 서브 README 4개, orders 시드 1, plans 본 파일, backlog 1, archive README 1)
- **메타 표준화된 파일**: 8개

### 측정 결과
- **문서 진입점 확보**: 0 → 3 (README.md, CLAUDE.md, docs/INDEX.md)
- **분류 카테고리**: 0(평탄) → 9(목적별 디렉토리)
- **백로그 가시성**: 미정리 → 8건 문서화(B-001~B-008)
- **MAX-Tutor와의 구조 정합**: 디렉토리·파일명·메타 포맷·타스크ID 규칙 동일화

### 부수 효과
- 없음. 코드/빌드 변경 없음. 문서·경로 이동만.

### 회고
- **잘한 점**:
  - 사전에 크로스링크 유무를 조사(grep)해 "이동 후 링크 수정" 작업을 0으로 만듦
  - `git mv`로 전부 이동 → 히스토리 보존
  - MAX-Tutor 템플릿을 참조하되 MAX Mind 현실(테스트 0건, 린트 미도입)을 메타 상태(🟡)로 정직하게 반영
- **보완점**:
  - `mindmap.xmind` 루트 샘플 파일 위치 정책 미결 → [B-007](../feedback/backlog.md) 등록만
  - CLAUDE.md "현재 알려진 이슈" 표에 나열한 B-001~B-008 모두 backlog.md에 실제 등재되어야 참조 유효 — Phase C에서 함께 처리하여 해결

### 후속 타스크 후보
- **T-002**: 코드 품질 Phase 1 착수 — Vitest 스캐폴딩 + 첫 테스트 1건 (대상: `layout/algorithms/mind-map.ts`)
- **T-003**: ESLint + Prettier 도입
- **T-004**: 스토어 분리 (God Object 해체, [B-003](../feedback/backlog.md))
- **T-005**: SVG XSS 방어 ([B-005](../feedback/backlog.md))
