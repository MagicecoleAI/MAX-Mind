# CLAUDE.md — MAX Mind 협업 가이드

> **이 문서는 AI 에이전트(Claude Code 등)와 신규 합류자가 처음 읽는 프로젝트 지도입니다.**
> 최종 수정: 2026-04-18 · 담당: @magic · 상태: 🟢 초기 버전

---

## 1. 프로젝트 한 줄 요약

**MAX Mind**는 Tauri 2.0 기반의 네이티브 데스크톱 **마인드맵 애플리케이션**으로,
XMind Zen 파일 포맷(`.xmind`)과 완벽 호환되며 HTML5 Canvas 커스텀 렌더링으로 빠른 성능을 제공한다.

- **핵심 차별점**: `.xmind` 파일을 그대로 열고 저장 · 4가지 구조 레이아웃 · 네이티브 데스크톱 앱
- **운영 상태(2026-04-18)**: Phase 2 (성능 최적화: 더티 플래그·뷰포트 컬링·Quadtree) 반영 완료
- **다음 마일스톤**: [docs/improvements/code-quality.md](docs/improvements/code-quality.md)의 3 Phase 리팩토링 (테스트 도입·스토어 분리·보안 강화)

---

## 2. 기술 스택 & 런타임

| 구분 | 사용 기술 |
|------|----------|
| 앱 프레임워크 | Tauri 2.0 (macOS: WebKit / Windows: WebView2) |
| 프론트엔드 | React 19 + TypeScript 5 + Vite 7 |
| 렌더링 | HTML5 Canvas (커스텀 엔진, `CanvasRenderer`/`Camera`/`Quadtree`) |
| 상태관리 | Zustand + immer + zundo (undo/redo) |
| 스타일 | Tailwind CSS 4 |
| 백엔드 | Rust (src-tauri) — ZIP 처리, 내보내기/가져오기 |
| 파일 포맷 | ZIP + `content.json` (XMind Zen 호환, `.xmind` 확장자) |
| 보조 라이브러리 | `culori`(색상), `jspdf`(PDF), `lucide-react`(아이콘), `nanoid`, `tinykeys` |
| Testing (계획) | Vitest (unit/integration), Playwright (e2e), `cargo test` (Rust) |
| Runtime | Node.js 20+, Rust 1.77.2+ |

**개발 포트**: Vite `5173`

---

## 3. 필수 명령어

```bash
# 개발
npm run dev                  # Vite 웹 개발 서버 (브라우저용)
npm run tauri:dev            # Tauri 데스크톱 앱 개발 모드 (hot reload)
npm run build                # tsc 타입체크 + vite 빌드
npm run tauri:build          # Tauri 프로덕션 번들 (네이티브 앱)
npm run preview              # 빌드 결과 로컬 미리보기
npm run typecheck            # TypeScript 타입만 검사 (tsc --noEmit)

# Rust (src-tauri/)
cd src-tauri && cargo check  # Rust 컴파일 검증
cd src-tauri && cargo test   # Rust 단위 테스트 (현재 0건, 계획 상태)
```

**작업 완료 판정 기준**:
1. `npm run typecheck` 통과 (TypeScript 에러 0)
2. `npm run build` 성공 (Vite 번들 정상)
3. Rust 변경 시 `cd src-tauri && cargo check` 통과
4. UI 변경 시 `npm run tauri:dev`로 실제 데스크톱 앱에서 수동 확인
5. (도입 후) 관련 `test:*` 및 `lint` 실행

> **현재 한계**: ESLint/Vitest 미도입. [T-001 이후 code-quality Phase 1](docs/improvements/code-quality.md)에서 정식 도입 예정.

---

## 4. 읽기 순서 (신규 합류자 · AI 에이전트)

**15분 온보딩 루트**:
1. [README.md](README.md) — 1분 개요
2. **이 문서 (CLAUDE.md)** — 협업 규칙 · 전체 지도
3. [docs/INDEX.md](docs/INDEX.md) — 모든 문서 네비게이션
4. [docs/architecture.md](docs/architecture.md) — 시스템 구조 + Phase 상태
5. [docs/changelog.md](docs/changelog.md) — 최근 의사결정

**목적별 심화 읽기**:
- 렌더링/레이아웃 엔진 → [docs/design/layout-algorithms.md](docs/design/layout-algorithms.md)
- 데이터 타입 계층 → [docs/design/data-model.md](docs/design/data-model.md)
- XMind 파일 포맷 호환 → [docs/design/file-format.md](docs/design/file-format.md)
- 앱 사용법 (사용자) → [docs/guides/user-manual.md](docs/guides/user-manual.md)
- 코드 품질 개선 계획 → [docs/improvements/code-quality.md](docs/improvements/code-quality.md)
- 신규 기능 로드맵 → [docs/strategy/top5-feature-plan.md](docs/strategy/top5-feature-plan.md)
- 테스트 전략 → [docs/testing/strategy.md](docs/testing/strategy.md)

---

## 5. 디렉토리 책임 매트릭스

| 경로 | 역할 | 수정 시 주의 |
|------|------|------------|
| `src/canvas/` | Canvas 렌더링 엔진 (`CanvasRenderer`, `Camera`, `Quadtree`) | 더티 플래그/뷰포트 컬링 깨지 않도록 주의 (Phase 2 최적화) |
| `src/components/` | React 컴포넌트 (`Canvas/`, `Toolbar/`, `Sidebar/`, `Outliner/`) | UI 변경 시 `tauri:dev`로 실제 확인 |
| `src/layout/algorithms/` | 4가지 레이아웃 알고리즘 (Mind Map, Logic, Org, Tree) | 알고리즘 변경 시 `heightCache` 무효화 고려 |
| `src/model/` | 핵심 타입 (`Topic`, `Sheet`, `Workbook`) | XMind 호환 위해 `_xmindRaw` 필드 보존 필수 |
| `src/services/` | XMind 변환, Tauri 브리지, 내보내기 | `xmindConverter.ts`는 XMind Zen 포맷 계약, 변경 시 왕복 테스트 |
| `src/store/` | Zustand 스토어 | 현재 God Object 상태 — Phase 1에서 분리 예정 |
| `src/themes/` | 테마 프리셋 | 테마 추가 시 `user-manual.md` 업데이트 |
| `src-tauri/src/` | Rust 백엔드 (파일 I/O, ZIP) | `#[tauri::command]`는 프론트엔드와 계약 — 변경 시 `src/services/tauriBridge.ts` 동기화 |
| `src-tauri/icons/` | 앱 아이콘 | 변경 금지(요청 시 한정) |
| `tests/unit/` | 단위 테스트 (Vitest — 도입 대기) | Phase 1에서 활성화 |
| `tests/integration/` | 통합 테스트 | Phase 1에서 활성화 |
| `tests/e2e/` | Playwright E2E | Phase 1에서 활성화 |
| `docs/` | 모든 산출물·가이드 문서 | 신규 문서는 [docs/INDEX.md](docs/INDEX.md)에 반드시 등재 |
| `docs/orders/` | 일일/주간 작업 지시서 | `YYYY-MM-DD.md` 또는 `WYYYY-NN.md` — [사용법](docs/orders/README.md) |
| `docs/plans/` | 타스크 수행/완료 보고서 | `T-NNN-slug.md` 형식 — [사용법](docs/plans/README.md) |
| `docs/feedback/` | 피드백·의사결정·백로그 | [사용법](docs/feedback/README.md) · [백로그](docs/feedback/backlog.md) |
| `.claude/` | Claude Code 설정 | 팀 규칙은 본 CLAUDE.md에도 반영 |

---

## 6. 핵심 규칙 & 금기 사항

### ✅ 항상 하기

- **XMind 호환성 보존**: `src/services/xmindConverter.ts`의 타입과 `_xmindRaw` 필드는 왕복(round-trip) 호환 보장. 변경 시 실제 `.xmind` 파일로 검증
- **Canvas 렌더링은 더티 플래그 기반**: 매 프레임 전체 다시 그리기 금지, 변경된 영역만 렌더
- **히트 테스트는 Quadtree 경유**: O(n) 전체 순회 금지 (Phase 2에서 확립)
- **Tauri 커맨드 변경 시 브리지 동기화**: `src-tauri/src/*.rs`의 `#[tauri::command]` 수정 시 `src/services/tauriBridge.ts`도 함께 업데이트
- **레이아웃 변경은 `heightCache` 고려**: 서브트리 높이 캐시 무효화 조건 확인

### ❌ 하지 않기

- **XMind 포맷 관련 이름 변경 금지**: `XMindSheet`, `XMindTopic`, `_xmindRaw`, `.xmind` 확장자 등은 **파일 포맷 호환성** 목적이므로 프로젝트 이름(`MAX Mind`)과 혼동하여 리네임 금지
- **src-tauri/icons/ 변경 금지**: 아이콘은 현재 버전 유지 (사용자 방침 2026-04-18)
- **JSON.parse/stringify로 상태 전체 복사 금지** ([B-001 참조](docs/feedback/backlog.md)): immer 패치만 사용
- **Canvas 외부에서 DOM 직접 렌더 유혹 금지**: 렌더링 일관성 깨지고 카메라/좌표 변환이 이중화됨
- **innerHTML/SVG 주입 시 미검증 텍스트 전달 금지** (XSS 위험, [B-005](docs/feedback/backlog.md))
- **레이아웃 알고리즘에 사이드 이펙트 넣기 금지**: `LayoutEngine`은 순수 함수여야 테스트/캐시 가능

---

## 7. 현재 알려진 이슈 · 우회책

| 이슈 | 우회책 | 추적 |
|------|-------|------|
| 테스트 코드 0건 — 리팩토링 안전망 부재 | Phase 1에서 Vitest 도입 예정 | [B-002](docs/feedback/backlog.md) · [code-quality.md](docs/improvements/code-quality.md) |
| God Object Store — 27개 메서드가 단일 스토어에 집중 | Phase 1에서 도메인별 분리 예정 | [B-003](docs/feedback/backlog.md) |
| SVG 내보내기에서 XSS 위험 가능 | 텍스트 이스케이프 도입 전까지 신뢰된 입력만 가정 | [B-005](docs/feedback/backlog.md) |
| ESLint 미도입 — 스타일 편차 발생 가능 | Phase 1에서 도입 예정 | [B-004](docs/feedback/backlog.md) |
| `_xmindRaw` 필드가 타입 `Record<string, any>` | round-trip 호환 우선, 추후 점진 타입화 | [B-006](docs/feedback/backlog.md) |
| `mindmap.xmind` 루트 파일이 git에 미추적 | 샘플 파일 정리 정책 미정 | [B-007](docs/feedback/backlog.md) |
| MAX-Tutor 대비 CI/자동화 부재 | Phase 3에서 GitHub Actions 고려 | [B-008](docs/feedback/backlog.md) |

> 이슈가 추가/해소되면 [docs/feedback/backlog.md](docs/feedback/backlog.md) 업데이트.

---

## 8. 프로젝트 관리 체계 (점진 도입 중)

본 프로젝트는 [rhwp 온보딩 가이드](https://github.com/edumagiceco/rhwp/blob/main/mydocs/manual/onboarding_guide.md)와
**패밀리 프로젝트 [MAX-Tutor](../MAX-Tutor/CLAUDE.md)** 의 관리 체계를 참조해
**작업 흐름 문서 레이어**를 점진 도입한다.

| 단계 | 산출물 | 상태 |
|------|--------|------|
| Phase 1 | CLAUDE.md(본 문서), README.md, docs/INDEX.md, docs 디렉토리 재구조화, 문서 메타 표준 | 🟢 완료 (2026-04-18, T-001) |
| Phase 2 | [docs/orders/](docs/orders/README.md), [docs/plans/](docs/plans/README.md), [docs/feedback/](docs/feedback/README.md) 운영 | 🟢 운영 중 (2026-04-18 시드) |
| Phase 3 | GitHub Issues 경량 도입, 테스트·린트 CI, INDEX 자동 생성 | ⚪ 대기 (code-quality Phase 1 이후) |

### 문서 메타데이터 표준 (신규/수정 시 적용)

각 문서 최상단에 2줄 추가:
```markdown
> **최종 수정**: YYYY-MM-DD · **담당**: @handle · **상태**: 🟢 최신 / 🟡 검토 필요 / 🔴 폐기 예정
> 상위 문서: [CLAUDE.md](../../CLAUDE.md) · [docs/INDEX.md](../INDEX.md)
```

### 타스크 ID 규칙

- 형식: `T-NNN` (예: `T-001`)
- 파일: `docs/plans/T-NNN-slug.md`
- 브랜치: `feat/T-NNN-slug` 또는 `fix/T-NNN-slug`
- 커밋 메시지: `T-NNN: 메시지` (예: `T-001: docs 재구조화 및 관리 체계 도입`)
- GitHub Issues 도입 시(Phase 3) Issue 번호와 통일

### 백로그 ID 규칙

- 형식: `B-NNN`
- 위치: [docs/feedback/backlog.md](docs/feedback/backlog.md)

---

## 9. 커뮤니케이션 원칙 (AI ↔ 인간)

- **정량 우선**: "느림" ❌ → "1000노드 렌더 16ms → 목표 8ms" ✅
- **파일:라인 참조**: 코드 언급 시 항상 `src/canvas/CanvasRenderer.ts:142` 형식
- **원복은 즉시**: 방향이 틀렸다는 피드백이 오면 논쟁 전에 먼저 원복 (git checkout/revert)
- **결정 이력은 문서에**: 구두 합의만 있고 [docs/feedback/](docs/feedback/) 에 없으면 없는 것으로 간주
- **XMind 포맷 관련 이름**은 프로젝트 이름 변경과 분리하여 처리

---

## 10. 빠른 체크리스트

**PR 내기 전**:
- [ ] `npm run typecheck` 통과
- [ ] `npm run build` 통과
- [ ] Rust 변경 시 `cd src-tauri && cargo check` 통과
- [ ] UI 변경 시 `npm run tauri:dev`로 실제 동작 확인 (스크린샷 첨부 권장)
- [ ] 관련 `.xmind` 샘플 파일 왕복 테스트 (포맷 관련 변경 시)
- [ ] 아키텍처 변경 시 [docs/architecture.md](docs/architecture.md) + [docs/changelog.md](docs/changelog.md) 갱신
- [ ] 신규 문서 생성 시 [docs/INDEX.md](docs/INDEX.md) 테이블에 등재

**새 기능 착수 전**:
- [ ] [docs/INDEX.md](docs/INDEX.md)에서 관련 기존 문서 검색
- [ ] [docs/feedback/backlog.md](docs/feedback/backlog.md)에서 이미 논의된 이슈인지 확인
- [ ] XMind 파일 포맷 호환성 영향도 검토
- [ ] Phase 0/1 ON, Phase 2 최적화 전제 유지 확인 (더티 플래그·Quadtree·뷰포트 컬링)
