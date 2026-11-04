# eNose Tea Research — Integrated Dashboard

Static, responsive research dashboard for the eNose tea project.

## Website
- Entry point: `index.html`
- No build step or external chart library is required.
- GitHub Pages can publish from the `main` branch and repository root.

## Sections
1. Overview — 10 eNose tea classes, analytical techniques and project workflow.
2. eNose — sensor array, R10-S120-P60-F200 protocol, FFT preprocessing and PCA summary.
3. GC-MS — HS-SPME-GC-MS workflow, 6 chemical groups and 6 aroma groups.
4. Integrated results — Hojicha/Hojicha-F TPC and GC-MS comparison with eNose context.
5. Blend study — Asahi/Ujitawara blend design and replicate counts.
6. Methods & QC — processing details, limitations and missing instrument metadata.

## Data boundaries
- PCA is exploratory and must not be described as classification accuracy.
- The GC column model and GC oven program were not present in the supplied result workbooks; verify from the instrument method before reporting.
- TPC values shown are solution concentrations in µg/mL GAE, not mg GAE/g dry tea.
- GC-MS 6-group profiles cover Hojicha, Hojicha-F, Inome and Inome-F; the separate GC-MS summary workbook contains tea samples A–H.
- eNose raw compilation and FFT analysis are distinct workbooks. The blend workbook is raw-data compilation only and does not contain validated blend prediction results.
- Preserve original workbooks as source records; update the dashboard only when source data and interpretation are verified.
