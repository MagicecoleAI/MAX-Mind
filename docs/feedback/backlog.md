# 백로그

> **최종 수정**: 2026-04-18 · **담당**: @magic · **상태**: 🟢 최신
> 상위 문서: [CLAUDE.md](../../CLAUDE.md) · [docs/INDEX.md](../INDEX.md) · [docs/feedback/README.md](README.md)

---

지금 당장 해결하지 않지만 잊으면 안 되는 항목을 `B-NNN`으로 번호 채번해 누적.
해결되면 해당 타스크(`T-NNN`)로 승격 후 상태를 ✅로 변경.

| 상태 | ID | 제목 | 영역 | 우선순위 | 근거 · 비고 |
|:---:|:---:|---|---|:---:|---|
| 📋 | **B-001** | JSON.parse/stringify 전체 복사 제거 | performance | P1 | `improvements/code-quality.md` §1 "핵심 문제 TOP 5" 1번. 모든 상태 변경마다 O(n) 직렬화 — immer patch로 대체 |
| 📋 | **B-002** | 테스트 코드 0건 → Vitest 도입 | testing | P1 | `improvements/code-quality.md` Phase 1. 리팩토링 안전망 부재. `testing/strategy.md`에 전략 있으나 실 구현 없음 |
| 📋 | **B-003** | God Object Store 분리 | architecture | P1 | `improvements/code-quality.md` §1 4번. 27개 메서드가 단일 스토어에 집중 — 도메인별 분리 |
| 📋 | **B-004** | ESLint + Prettier 도입 | quality | P2 | 스타일 편차 방지. 현재 `npm run lint` 스크립트 자체 없음 |
| 📋 | **B-005** | SVG 내보내기 XSS 방어 | security | P1 | `improvements/code-quality.md` §1 5번. `src/services/exportService.ts`(또는 상응 위치) 텍스트 이스케이프 도입 필요 |
| 📋 | **B-006** | `_xmindRaw: Record<string, any>` 점진 타입화 | design | P3 | round-trip 호환 우선으로 `any` 허용. XMind Zen 스펙 커버 범위를 점진 타입화 |
| 📋 | **B-007** | `mindmap.xmind` 루트 샘플 파일 위치 정책 | housekeeping | P3 | 현재 git 미추적. `samples/` 디렉토리 도입 또는 `.gitignore` 명시 결정 필요 |
| 📋 | **B-008** | GitHub Actions CI 도입 (typecheck/build/cargo check) | devops | P2 | MAX-Tutor 대비 자동화 부재. 관리 체계 Phase 3 산출물 |

### 상태 이모지

- 📋 대기 · 🔄 진행(플랜 존재) · 🚧 블로커 · ✅ 해결(타스크 완료) · 🔴 폐기

---

## 해결/폐기 로그

(아직 없음. 해결 시 아래에 `YYYY-MM-DD · B-NNN · 해결 — T-NNN 참조 / 폐기 사유` 형식으로 추가)

---

## 백로그 관리 규칙

1. **새 항목은 번호만 증가**. 기존 번호 재사용 금지 (이력 일관성)
2. **해결된 항목은 표에서 유지**하되 상태 ✅ 및 해결 타스크 링크 추가
3. **폐기는 🔴로 표시** + 사유 1줄 (같은 아이디어 재제안 시 근거)
4. **우선순위**: P1(품질/보안 위험, 즉시 대응 선호), P2(중요하나 여유 있음), P3(개선성/청소)
5. **월 1회 정리 세션** 권장 — 오래 방치된 P1은 승격 또는 강등 재판단
