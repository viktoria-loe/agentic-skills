---
name: address-review
description: Answer every open review thread on your factory pull request, fixing what is right and explaining what you will not change, and leave resolving to the reviewer. Use when the reviewer has opened threads, or the factory asks you to fix them.
---

# Address review

You are done when every open review thread has an answer and your fixes are pushed to the same branch. The reviewer checks each fix on the next round and resolves its own threads.

## Steps

1. List every open thread, with its file, line and finding.
2. For each thread, decide:
   - **Fix**: the finding is right. Change the code, add or adjust the test that shows it, and run the checks.
   - **Won't fix**: the finding is wrong or outside the ticket. Write why, with the line or criterion that shows it.
3. Commit the fixes; one commit may cover several threads.
4. Answer each thread with the commit that fixes it, or with "won't fix" and the reason. Where you cannot reply inside a thread, answer them all in one pull request comment, naming each thread by its file and line.
5. Update **Evidence** for any goal the fixes touched, and push.

## Keep in mind

- Leave every thread for the reviewer to resolve.
- Change only what the threads ask for; new work goes to a new issue.
- After three fix rounds a person decides, so make each round count: fix every thread you agree with in one push.
