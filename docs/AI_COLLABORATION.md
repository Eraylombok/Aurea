# Auréa Studio — collaboration Claude / OpenAI

Status: SETUP IN PROGRESS, NOT ACTIVE. This branch adds a read-only CI smoke test. It does not call either API, edit code autonomously, deploy, or spend credits.

## Approved policy

- Combined Claude + OpenAI orchestrator budget: EUR 20/month.
- At most 3 repair cycles per task.
- Stop immediately on quota, billing, authentication or budget-gate errors.
- Generated changes must use dedicated branches and pull requests.
- Production deployment only after automated tests and a configured rollback.
- Never commit credentials, expose them in client-side HTML, or log them.
- No privileged jobs triggered from untrusted pull-request code.
- Only one orchestrator run at once, with execution time limits.
- Subscription credit balances for ChatGPT and Claude are not available to this GitHub workflow; API usage needs separate verified accounting.
- If a hard financial cap cannot be guaranteed, pause unattended API execution and ask the owner.

## Prerequisites

1. Make the repository private if access to the source should be restricted.
2. Generate separate Anthropic and OpenAI API credentials.
3. Add ANTHROPIC_API_KEY and OPENAI_API_KEY in GitHub repository Settings > Secrets and variables > Actions > Secrets. Never paste secrets in a chat.
4. Determine a reliable enforcement mechanism for the EUR 20 monthly combined spending cap, including conversion from USD, retries, races and a persistent ledger. Prefer provider-side caps plus a server ledger.
5. Set up a staging/production hosting target with secure deployment secrets and rollback.
6. Implement the orchestrator, API tests, PR feedback loop and deployment pipeline, disabled until independently audited.

## Current product scope

index.html is a static prototype with mocked generations. A production SaaS also needs identity, payments, tenant isolation, media storage, a server backend, Higgsfield jobs, and real tests. The included smoke test checks only a few static invariants.
