# Trial log — The Funniest Out-of-Office (entry #4)

Competition: `u-kreutzx-the-funniest-out-of-office-054815cf` — $2, top 8.
Gate: 1–140 characters, one line. Field: 697 submissions.

## Candidates (drafted fresh in this session)

1. "I'm out of office and forwarded your email to myself. I'll ignore it
   twice as fast." — 83 chars. Angle: the auto-reply delegates to its own
   author, then brags about ignoring the sender faster. CHOSEN.
2. "Out of office — I've booked a meeting in your calendar to discuss this
   email." — 77 chars (79 bytes). Angle: the reply fights back by booking
   the sender's calendar. Runner-up.
3. "I'm out of office. I resigned Tuesday; this reply just hasn't caught up
   yet." — 76 chars. Angle: the out-of-office reply outlived the job.
   Runner-up.

## Near-duplicate checks (check_dup.py, field = 500 titles)

- Candidate 1: no exact match; max difflib 0.53, max Jaccard 0.08. PASS.
- Candidate 2: no exact match; max difflib 0.51, max Jaccard 0.14. PASS.
- Candidate 3: no exact match; max difflib 0.58, max Jaccard 0.18. PASS.
- All three below the reject thresholds (difflib >= 0.75, Jaccard >= 0.6);
  none shares its core joke mechanism with any field title.

## Why candidate 1 won

Short (83 chars, well under the gate), one genuine twist (forwarded to
myself), a voice that sounds like a real person rather than a template, and
every word earns its place — "twice as fast" is the punchline, not filler.

## Trials

- Trial 1: `ENTRY_OUTPUT=/tmp/entry-4-test.txt node main.ts` — wrote 83
  characters; file content byte-identical to the constant in main.ts.
  Status: PASS.

## Status

- Final text (83 chars, 83 bytes): "I'm out of office and forwarded your
  email to myself. I'll ignore it twice as fast."
- Bundle v1 + check: see below (added after the first bundle/check run).
