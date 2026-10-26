# eNose Tea PCA (static site)

เว็บ static 3 หน้า (ไม่ต้อง build) · เปิด `index.html` ในเครื่องได้เลย หรือขึ้น GitHub Pages:

1. สร้าง repo ใหม่บน GitHub (เช่น `enose-tea-pca`)
2. อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้ไปที่ root ของ repo (หรือ `git init && git add . && git commit -m init && git remote add origin <URL> && git push -u origin main`)
3. Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save
4. รอ 1–2 นาที เว็บจะอยู่ที่ `https://<username>.github.io/<repo>/`

โครงสร้าง: `index.html`, `page1-3.html`, `assets/` (plotly, css, js), `data/` (ข้อมูลต่อหน้า)
