// vite.config.js
import { defineConfig } from "file:///C:/Shanto-Islam-Portfolio/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Shanto-Islam-Portfolio/node_modules/@vitejs/plugin-react/dist/index.mjs";
import fs from "fs";
import path from "path";
import { PDFDocument } from "file:///C:/Shanto-Islam-Portfolio/node_modules/pdf-lib/cjs/index.js";
var resumeProxyTarget = process.env.VITE_RESUME_PROXY_TARGET || "http://localhost:3000";
var resumeDevPlugin = {
  name: "resume-dev-plugin",
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      try {
        const url = req.url || "";
        if (url === "/" || url === "") {
          req.url = "/index.html";
          next();
          return;
        }
        if (url.startsWith("/resume") || url.startsWith("/api/resume")) {
          const resumeDir = path.join(process.cwd(), "public", "resume");
          if (!fs.existsSync(resumeDir)) {
            res.statusCode = 404;
            res.end("Resume directory not found.");
            return;
          }
          const files = fs.readdirSync(resumeDir).filter((f) => !f.startsWith("."));
          if (!files || files.length === 0) {
            res.statusCode = 404;
            res.end("No resume file found.");
            return;
          }
          const pdfFiles = files.filter((f) => path.extname(f).toLowerCase() === ".pdf");
          const pickList = pdfFiles.length > 0 ? pdfFiles : files;
          const fileInfos = pickList.map((filename2) => {
            const fullPath2 = path.join(resumeDir, filename2);
            const stat = fs.statSync(fullPath2);
            return { filename: filename2, fullPath: fullPath2, mtimeMs: stat.mtimeMs };
          });
          fileInfos.sort((a, b) => b.mtimeMs - a.mtimeMs);
          let { filename, fullPath } = fileInfos[0];
          if (url === "/resume" || url === "/resume/") {
            res.statusCode = 302;
            res.setHeader("Location", `/resume/${encodeURIComponent(path.parse(filename).name)}`);
            res.end();
            return;
          }
          const m = url.match(/^\/resume\/(.+)$/);
          if (m && m[1]) {
            const requestedBase = decodeURIComponent(m[1]).toLowerCase();
            const byBase = fileInfos.find((fi) => path.parse(fi.filename).name.toLowerCase() === requestedBase);
            if (byBase) {
              filename = byBase.filename;
              fullPath = byBase.fullPath;
            }
          }
          const ext = path.extname(filename).toLowerCase();
          const mime = ext === ".pdf" ? "application/pdf" : ext === ".docx" ? "application/vnd.openxmlformats-officedocument.wordprocessingml.document" : ext === ".doc" ? "application/msword" : "application/octet-stream";
          res.setHeader("Content-Type", mime);
          res.setHeader("X-Content-Type-Options", "nosniff");
          res.setHeader("Content-Disposition", `inline; filename="${filename}"`);
          if (ext === ".pdf") {
            try {
              const baseName = path.parse(filename).name;
              const raw = fs.readFileSync(fullPath);
              const pdfDoc = await PDFDocument.load(raw);
              pdfDoc.setTitle(baseName, { showInWindowTitleBar: true });
              const modified = await pdfDoc.save();
              res.end(Buffer.from(modified));
            } catch (e) {
              console.error("Failed to set PDF title metadata (dev), streaming original:", e);
              const stream = fs.createReadStream(fullPath);
              stream.on("error", (err) => {
                console.error("Error streaming resume (vite dev):", err);
                res.statusCode = 500;
                res.end("Failed to read resume file.");
              });
              stream.pipe(res);
            }
          } else {
            const stream = fs.createReadStream(fullPath);
            stream.on("error", (err) => {
              console.error("Error streaming resume (vite dev):", err);
              res.statusCode = 500;
              res.end("Failed to read resume file.");
            });
            stream.pipe(res);
          }
          return;
        }
      } catch (err) {
        console.error("Resume dev plugin error:", err);
      }
      next();
    });
  }
};
var vite_config_default = defineConfig({
  plugins: [react(), resumeDevPlugin]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxTaGFudG8tSXNsYW0tUG9ydGZvbGlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxTaGFudG8tSXNsYW0tUG9ydGZvbGlvXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9TaGFudG8tSXNsYW0tUG9ydGZvbGlvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBQREZEb2N1bWVudCB9IGZyb20gJ3BkZi1saWInXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG4vLyBEZXYgaGVscGVyOiBwcmV2aW91c2x5IHVzZWQgYSBwcm94eSB0YXJnZXQ7IG5vdyB3ZSBzZXJ2ZSBkaXJlY3RseSB2aWEgbWlkZGxld2FyZS5cbi8vIExlZnQgaGVyZSBhcyBkb2N1bWVudGF0aW9uIGZvciBwcmlvciBhcHByb2FjaC5cbmNvbnN0IHJlc3VtZVByb3h5VGFyZ2V0ID0gcHJvY2Vzcy5lbnYuVklURV9SRVNVTUVfUFJPWFlfVEFSR0VUIHx8ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnXG5cbi8vIERldi1vbmx5IG1pZGRsZXdhcmUgbWlycm9yaW5nIHByb2R1Y3Rpb24gYmVoYXZpb3IgZm9yIGAvcmVzdW1lYC5cbi8vIC0gSW50ZXJjZXB0cyBgL3Jlc3VtZWAgYW5kIGAvYXBpL3Jlc3VtZWBcbi8vIC0gUGlja3MgYSBQREYgaWYgYXZhaWxhYmxlIChlbHNlIG1vc3QgcmVjZW50IGZpbGUpIGZyb20gYHB1YmxpYy9yZXN1bWVgXG4vLyAtIFJlZGlyZWN0cyBgL3Jlc3VtZWAgXHUyMTkyIGAvcmVzdW1lLzxiYXNlbmFtZT5gIChubyBleHRlbnNpb24pIGZvciBjbGVhbmVyIHRpdGxlc1xuLy8gLSBSZXNvbHZlcyBgL3Jlc3VtZS88bmFtZT5gIGJ5IGJhc2VuYW1lIChpZ25vcmluZyBleHRlbnNpb24pXG4vLyAtIFN0cmVhbXMgaW5saW5lIHdpdGggb3JpZ2luYWwgZmlsZW5hbWUgZm9yIGRvd25sb2Fkc1xuLy8gLSBGb3IgUERGcywgc2V0cyBUaXRsZSBtZXRhZGF0YSB0byB0aGUgYmFzZW5hbWVcbmNvbnN0IHJlc3VtZURldlBsdWdpbiA9IHtcbiAgbmFtZTogJ3Jlc3VtZS1kZXYtcGx1Z2luJyxcbiAgY29uZmlndXJlU2VydmVyKHNlcnZlcikge1xuICAgIHNlcnZlci5taWRkbGV3YXJlcy51c2UoYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSByZXEudXJsIHx8ICcnXG4gICAgICAgIC8vIEVuc3VyZSBsb2NhbGhvc3Qgcm9vdCBzZXJ2ZXMgdGhlIFNQQSBlbnRyeSBpbiBkZXYuXG4gICAgICAgIGlmICh1cmwgPT09ICcvJyB8fCB1cmwgPT09ICcnKSB7XG4gICAgICAgICAgcmVxLnVybCA9ICcvaW5kZXguaHRtbCdcbiAgICAgICAgICBuZXh0KClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy9yZXN1bWUnKSB8fCB1cmwuc3RhcnRzV2l0aCgnL2FwaS9yZXN1bWUnKSkge1xuICAgICAgICAgIGNvbnN0IHJlc3VtZURpciA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncHVibGljJywgJ3Jlc3VtZScpXG4gICAgICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKHJlc3VtZURpcikpIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDA0XG4gICAgICAgICAgICByZXMuZW5kKCdSZXN1bWUgZGlyZWN0b3J5IG5vdCBmb3VuZC4nKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMocmVzdW1lRGlyKS5maWx0ZXIoKGYpID0+ICFmLnN0YXJ0c1dpdGgoJy4nKSlcbiAgICAgICAgICBpZiAoIWZpbGVzIHx8IGZpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDRcbiAgICAgICAgICAgIHJlcy5lbmQoJ05vIHJlc3VtZSBmaWxlIGZvdW5kLicpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgcGRmRmlsZXMgPSBmaWxlcy5maWx0ZXIoKGYpID0+IHBhdGguZXh0bmFtZShmKS50b0xvd2VyQ2FzZSgpID09PSAnLnBkZicpXG4gICAgICAgICAgY29uc3QgcGlja0xpc3QgPSBwZGZGaWxlcy5sZW5ndGggPiAwID8gcGRmRmlsZXMgOiBmaWxlc1xuICAgICAgICAgIGNvbnN0IGZpbGVJbmZvcyA9IHBpY2tMaXN0Lm1hcCgoZmlsZW5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxQYXRoID0gcGF0aC5qb2luKHJlc3VtZURpciwgZmlsZW5hbWUpXG4gICAgICAgICAgICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMoZnVsbFBhdGgpXG4gICAgICAgICAgICByZXR1cm4geyBmaWxlbmFtZSwgZnVsbFBhdGgsIG10aW1lTXM6IHN0YXQubXRpbWVNcyB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICBmaWxlSW5mb3Muc29ydCgoYSwgYikgPT4gYi5tdGltZU1zIC0gYS5tdGltZU1zKVxuICAgICAgICAgIGxldCB7IGZpbGVuYW1lLCBmdWxsUGF0aCB9ID0gZmlsZUluZm9zWzBdXG5cbiAgICAgICAgICAvLyBJZiBVUkwgaXMgZXhhY3RseSAvcmVzdW1lLCByZWRpcmVjdCB0byAvcmVzdW1lLzxiYXNlbmFtZT4gKG5vIGV4dGVuc2lvbilcbiAgICAgICAgICBpZiAodXJsID09PSAnL3Jlc3VtZScgfHwgdXJsID09PSAnL3Jlc3VtZS8nKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDMwMlxuICAgICAgICAgICAgcmVzLnNldEhlYWRlcignTG9jYXRpb24nLCBgL3Jlc3VtZS8ke2VuY29kZVVSSUNvbXBvbmVudChwYXRoLnBhcnNlKGZpbGVuYW1lKS5uYW1lKX1gKVxuICAgICAgICAgICAgcmVzLmVuZCgpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBJZiBVUkwgaW5jbHVkZXMgL3Jlc3VtZS88bmFtZT4sIHRyeSB0byBtYXRjaCBieSBiYXNlbmFtZSBpZ25vcmluZyBleHRlbnNpb25cbiAgICAgICAgICBjb25zdCBtID0gdXJsLm1hdGNoKC9eXFwvcmVzdW1lXFwvKC4rKSQvKVxuICAgICAgICAgIGlmIChtICYmIG1bMV0pIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RlZEJhc2UgPSBkZWNvZGVVUklDb21wb25lbnQobVsxXSkudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgY29uc3QgYnlCYXNlID0gZmlsZUluZm9zLmZpbmQoKGZpKSA9PiBwYXRoLnBhcnNlKGZpLmZpbGVuYW1lKS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IHJlcXVlc3RlZEJhc2UpXG4gICAgICAgICAgICBpZiAoYnlCYXNlKSB7XG4gICAgICAgICAgICAgIGZpbGVuYW1lID0gYnlCYXNlLmZpbGVuYW1lXG4gICAgICAgICAgICAgIGZ1bGxQYXRoID0gYnlCYXNlLmZ1bGxQYXRoXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGV4dCA9IHBhdGguZXh0bmFtZShmaWxlbmFtZSkudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIGNvbnN0IG1pbWUgPVxuICAgICAgICAgICAgZXh0ID09PSAnLnBkZidcbiAgICAgICAgICAgICAgPyAnYXBwbGljYXRpb24vcGRmJ1xuICAgICAgICAgICAgICA6IGV4dCA9PT0gJy5kb2N4J1xuICAgICAgICAgICAgICA/ICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudCdcbiAgICAgICAgICAgICAgOiBleHQgPT09ICcuZG9jJ1xuICAgICAgICAgICAgICA/ICdhcHBsaWNhdGlvbi9tc3dvcmQnXG4gICAgICAgICAgICAgIDogJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSdcbiAgICAgICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCBtaW1lKVxuICAgICAgICAgIHJlcy5zZXRIZWFkZXIoJ1gtQ29udGVudC1UeXBlLU9wdGlvbnMnLCAnbm9zbmlmZicpXG4gICAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1EaXNwb3NpdGlvbicsIGBpbmxpbmU7IGZpbGVuYW1lPVwiJHtmaWxlbmFtZX1cImApXG4gICAgICAgICAgaWYgKGV4dCA9PT0gJy5wZGYnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCBiYXNlTmFtZSA9IHBhdGgucGFyc2UoZmlsZW5hbWUpLm5hbWVcbiAgICAgICAgICAgICAgY29uc3QgcmF3ID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoKVxuICAgICAgICAgICAgICBjb25zdCBwZGZEb2MgPSBhd2FpdCBQREZEb2N1bWVudC5sb2FkKHJhdylcbiAgICAgICAgICAgICAgcGRmRG9jLnNldFRpdGxlKGJhc2VOYW1lLCB7IHNob3dJbldpbmRvd1RpdGxlQmFyOiB0cnVlIH0pXG4gICAgICAgICAgICAgIGNvbnN0IG1vZGlmaWVkID0gYXdhaXQgcGRmRG9jLnNhdmUoKVxuICAgICAgICAgICAgICByZXMuZW5kKEJ1ZmZlci5mcm9tKG1vZGlmaWVkKSlcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHNldCBQREYgdGl0bGUgbWV0YWRhdGEgKGRldiksIHN0cmVhbWluZyBvcmlnaW5hbDonLCBlKVxuICAgICAgICAgICAgICBjb25zdCBzdHJlYW0gPSBmcy5jcmVhdGVSZWFkU3RyZWFtKGZ1bGxQYXRoKVxuICAgICAgICAgICAgICBzdHJlYW0ub24oJ2Vycm9yJywgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHN0cmVhbWluZyByZXN1bWUgKHZpdGUgZGV2KTonLCBlcnIpXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDBcbiAgICAgICAgICAgICAgICByZXMuZW5kKCdGYWlsZWQgdG8gcmVhZCByZXN1bWUgZmlsZS4nKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBzdHJlYW0ucGlwZShyZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHN0cmVhbSA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0oZnVsbFBhdGgpXG4gICAgICAgICAgICBzdHJlYW0ub24oJ2Vycm9yJywgKGVycikgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzdHJlYW1pbmcgcmVzdW1lICh2aXRlIGRldik6JywgZXJyKVxuICAgICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDUwMFxuICAgICAgICAgICAgICByZXMuZW5kKCdGYWlsZWQgdG8gcmVhZCByZXN1bWUgZmlsZS4nKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHN0cmVhbS5waXBlKHJlcylcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdSZXN1bWUgZGV2IHBsdWdpbiBlcnJvcjonLCBlcnIpXG4gICAgICB9XG4gICAgICBuZXh0KClcbiAgICB9KVxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgcmVzdW1lRGV2UGx1Z2luXSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlRLFNBQVMsb0JBQW9CO0FBQzlSLE9BQU8sV0FBVztBQUNsQixPQUFPLFFBQVE7QUFDZixPQUFPLFVBQVU7QUFDakIsU0FBUyxtQkFBbUI7QUFLNUIsSUFBTSxvQkFBb0IsUUFBUSxJQUFJLDRCQUE0QjtBQVNsRSxJQUFNLGtCQUFrQjtBQUFBLEVBQ3RCLE1BQU07QUFBQSxFQUNOLGdCQUFnQixRQUFRO0FBQ3RCLFdBQU8sWUFBWSxJQUFJLE9BQU8sS0FBSyxLQUFLLFNBQVM7QUFDL0MsVUFBSTtBQUNGLGNBQU0sTUFBTSxJQUFJLE9BQU87QUFFdkIsWUFBSSxRQUFRLE9BQU8sUUFBUSxJQUFJO0FBQzdCLGNBQUksTUFBTTtBQUNWLGVBQUs7QUFDTDtBQUFBLFFBQ0Y7QUFDQSxZQUFJLElBQUksV0FBVyxTQUFTLEtBQUssSUFBSSxXQUFXLGFBQWEsR0FBRztBQUM5RCxnQkFBTSxZQUFZLEtBQUssS0FBSyxRQUFRLElBQUksR0FBRyxVQUFVLFFBQVE7QUFDN0QsY0FBSSxDQUFDLEdBQUcsV0FBVyxTQUFTLEdBQUc7QUFDN0IsZ0JBQUksYUFBYTtBQUNqQixnQkFBSSxJQUFJLDZCQUE2QjtBQUNyQztBQUFBLFVBQ0Y7QUFDQSxnQkFBTSxRQUFRLEdBQUcsWUFBWSxTQUFTLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFdBQVcsR0FBRyxDQUFDO0FBQ3hFLGNBQUksQ0FBQyxTQUFTLE1BQU0sV0FBVyxHQUFHO0FBQ2hDLGdCQUFJLGFBQWE7QUFDakIsZ0JBQUksSUFBSSx1QkFBdUI7QUFDL0I7QUFBQSxVQUNGO0FBQ0EsZ0JBQU0sV0FBVyxNQUFNLE9BQU8sQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDLEVBQUUsWUFBWSxNQUFNLE1BQU07QUFDN0UsZ0JBQU0sV0FBVyxT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
