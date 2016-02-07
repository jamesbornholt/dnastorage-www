LaTeX to Markdown:

```bash
pandoc paper.tex -o paper.md
```

Markdown to HTML (after installing `pandoc-citeproc`):

```bash
pandoc dnastorage.md --smart --standalone --bibliography paper.bib --csl=/Users/james/Downloads/acm-sig-proceedings.csl.txt -o dnastorage.html
```
