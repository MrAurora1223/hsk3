# App HSK 3 – Giáo trình New HSK

App học 1029 từ HSK 3 theo giáo trình New HSK 1–3: flashcard ôn ngắt quãng, thứ tự nét, luyện viết chấm từng nét, quiz, tiến độ. Cài như app thường trên điện thoại và máy tính, chạy cả khi không có mạng, đồng bộ 2 máy qua 1 gist bí mật trên GitHub.

## Cài lần đầu (khoảng 10 phút)

### 1. Đưa app lên GitHub Pages
1. Vào https://github.com/new
   - Repository name: `hsk3`
   - Chọn **Public**
   - Bấm **Create repository**.
2. Ở trang repo vừa tạo, bấm link **uploading an existing file**. Kéo thả **tất cả file trong folder này** vào:
   - `index.html`, `sw.js`, `manifest.webmanifest`
   - 4 file `.png`
   - `README.md`

   Xong bấm **Commit changes**.
3. Vào **Settings → Pages**:
   - Mục *Build and deployment*, Source chọn **Deploy from a branch**.
   - Branch chọn **main** và **/ (root)**, rồi bấm **Save**.
4. Chờ 1–2 phút rồi tải lại trang Settings → Pages. Link app hiện ở đầu trang, dạng `https://<tên-github>.github.io/hsk3/`.

### 2. Tạo token đồng bộ (chỉ quyền gist)
1. Mở https://github.com/settings/tokens/new?scopes=gist&description=HSK3%20app
   - Ô **gist** đã được tick sẵn. Không tick thêm ô nào khác.
   - Expiration: chọn **No expiration**, hoặc Custom một ngày sau kỳ thi, ví dụ 30/6/2027.
2. Bấm **Generate token**, rồi chép token (bắt đầu bằng `ghp_`). GitHub chỉ hiện token **một lần**.

### 3. Máy tính
1. Mở link app bằng Chrome hoặc Edge.
2. Cài app:
   - Chrome: bấm biểu tượng **Cài đặt** ở cuối thanh địa chỉ.
   - Edge: menu … → **Ứng dụng → Cài đặt trang web này dưới dạng ứng dụng**.
3. Mở app → tab **Cài đặt** → mục **Đồng bộ** → dán token → **Kết nối**.
4. Bấm **Chép link** ở mục *Link tiến độ cho gia sư*. Gửi link đó cùng link app vào chat của project HSK 3 trong Claude.

### 4. Điện thoại
1. Mở link app:
   - **Android:** dùng Chrome → menu ⋮ → **Cài đặt ứng dụng** hoặc **Thêm vào màn hình chính**.
   - **iPhone:** dùng Safari → nút Chia sẻ → **Thêm vào MH chính**.
2. Mở app **từ icon trên màn hình chính** (trên iPhone bắt buộc mở từ icon) → **Cài đặt** → **Đồng bộ** → dán token → **Kết nối**.

   Để có token trên điện thoại: trên máy tính bấm **Chép token**, gửi cho chính m qua Zalo hoặc email. Dán xong thì **xoá tin nhắn đó**.

## Dùng hằng ngày
- Mở app từ icon. App tự đồng bộ khi mở, khi học và khi thoát. Mất mạng vẫn học bình thường, có mạng lại thì tự đẩy lên.
- Mỗi Chủ nhật: vào **Cài đặt** → **Tải file sao lưu** để giữ thêm một bản trên máy.
- Không mở cùng lúc app cũ trong Claude với app này, vì 2 bản không đồng bộ với nhau.

## Cập nhật app
Khi có bản mới:
1. Vào repo `hsk3` → **Add file → Upload files**, kéo file mới vào để ghi đè → **Commit changes**.
2. Mở app 1–2 lần là app tự lấy bản mới.

Tiến độ học nằm trong máy và trong gist, nên cập nhật app không làm mất dữ liệu.

## An toàn
- Token chỉ có quyền gist: không đọc hay sửa được repo, email hay mật khẩu GitHub.
- Token lưu trong bộ nhớ của app trên từng máy. Mất điện thoại thì vào https://github.com/settings/tokens → **Delete** token đó, rồi tạo token mới.
- Gist tiến độ ở chế độ bí mật, tên `HSK3 giao trinh - tien do app (dung xoa)`. Gist này không hiện trên trang cá nhân. Người khác chỉ xem được nếu có link.

## Bản quyền
- Hanzi Writer (MIT)
- Dữ liệu nét chữ: Make Me a Hanzi / hanzi-writer-data (Arphic Public License)
