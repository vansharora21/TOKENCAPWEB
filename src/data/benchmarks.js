// v3.2.0 task-pack benchmark: the figures published in the TokenCap README
// (benchmarks/fair/ in the TokenCap repository). Keep them identical to it.
export const benchmarkOverview = {
  version: "v3.2.0",
  tokenizer: "js-tiktoken (exact counts)",
  model: "gpt-4o ($2.50 / 1M input tokens)",
  budget: 12000,
  totalTasks: 100,
  totalRepos: 9,
  languages: "JavaScript, TypeScript, Vue, Python, Go, Rust, Java",
  aggregates: {
    naiveAvgTokens: 380912,
    tokencapAvgTokens: 10156,
    naiveCostPerTask: "$0.9523",
    tokencapCostPerTask: "$0.0254",
    medianSaving: "18.4×",
    neededFiles: "89%",
    naiveNeededFiles: "96%",
    topTenSaving: "7.4×",
    topTenNeededFiles: "76%",
    editLines: "74%",
    heldOutNeededFiles: "89%",
    heldOutMedianSaving: "18.0×",
  },
};

export const benchmarkRepos = [
  { name: "fastify-example-todo", repoPath: "fastify/fastify-example-todo", language: "JavaScript (small)", tasks: 9, naiveAvgTokens: 2661, tokencapTokens: 2036, ratio: "1.4×", neededFiles: "100%" },
  { name: "full-stack-fastapi-template", repoPath: "fastapi/full-stack-fastapi-template", language: "Python + TypeScript", tasks: 10, naiveAvgTokens: 84393, tokencapTokens: 9391, ratio: "8.0×", neededFiles: "93%" },
  { name: "flask", repoPath: "pallets/flask", language: "Python", tasks: 12, naiveAvgTokens: 119779, tokencapTokens: 11317, ratio: "11.5×", neededFiles: "95%" },
  { name: "cobra", repoPath: "spf13/cobra", language: "Go", tasks: 12, naiveAvgTokens: 148640, tokencapTokens: 9418, ratio: "14.0×", neededFiles: "92%" },
  { name: "httpx", repoPath: "encode/httpx", language: "Python", tasks: 12, naiveAvgTokens: 201369, tokencapTokens: 11140, ratio: "19.3×", neededFiles: "96%" },
  { name: "gin", repoPath: "gin-gonic/gin", language: "Go", tasks: 12, naiveAvgTokens: 197638, tokencapTokens: 10883, ratio: "19.8×", neededFiles: "96%" },
  { name: "gson", repoPath: "google/gson", language: "Java", tasks: 12, naiveAvgTokens: 388374, tokencapTokens: 12171, ratio: "34.7×", neededFiles: "75%" },
  { name: "ripgrep", repoPath: "BurntSushi/ripgrep", language: "Rust", tasks: 11, naiveAvgTokens: 453379, tokencapTokens: 11412, ratio: "41.0×", neededFiles: "74%" },
  { name: "hoppscotch", repoPath: "hoppscotch/hoppscotch", language: "TypeScript + Vue (large)", tasks: 10, naiveAvgTokens: 1956661, tokencapTokens: 11873, ratio: "183.8×", neededFiles: "79%" },
];

export const benchmarkLimits = [
  { title: "Savings grow with repository size", text: "On the small repository a pack saves little: in 3 of its 9 tasks the pack was larger than the naive read." },
  { title: "Reading everything finds more", text: "Every matching file, read in full, holds the needed files 96% of the time against 89% for the pack, at many times the tokens. The 10 best-matching files hold them 76% of the time, at a median 7.4× more tokens than the pack." },
  { title: "Spans can miss the edit", text: "On average 74% of the exact lines a commit edited are in the pack; it is lowest on repositories with very large files." },
  { title: "No model is called", text: "This measures whether the context contains what the task needs, not the quality of a model's answer." },
  { title: "Half the tasks were held out", text: "50 tasks were used while changing the code and 50 were not. The held-out half scored 89% needed files and an 18.0× median saving." },
  { title: "Scope", text: "Measured on the task pack built by tokencap ask \"<task>\" and the Companion bridge, at a 12,000-token budget. The tokencap make capsule is not measured here." },
];

export const benchmarkLinks = {
  results: "https://github.com/vansharora21/TOKENCAP/tree/main/benchmarks/fair",
  honestNumbers: "https://github.com/vansharora21/TOKENCAP/blob/main/docs/HONEST-NUMBERS.md",
};
