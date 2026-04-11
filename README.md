Nguyễn Thị Diễm Quỳnh
23810310350
Thực hành 23/03/2026 (N2): Nectar App - P2 - Home Screen, Product Detail, Explore, Beverages 
<img width="497" height="1070" alt="Screenshot 2026-03-29 084340" src="https://github.com/user-attachments/assets/1ec6eecb-69c5-4776-9ae6-357e418d0a43" />
<img width="506" height="1069" alt="Screenshot 2026-03-29 084352" src="https://github.com/user-attachments/assets/f6d2f584-0221-4b31-9d85-eafa2e507f60" />
<img width="509" height="1080" alt="Screenshot 2026-03-29 084359" src="https://github.com/user-attachments/assets/742b8875-4f15-4dcb-a539-7aedbc2e0f91" />
<img width="496" height="1067" alt="Screenshot 2026-03-29 084406" src="https://github.com/user-attachments/assets/0d97665a-e043-4f9c-a583-9d5878468daa" />
<img width="469" height="1018" alt="Screenshot 2026-04-06 083927" src="https://github.com/user-attachments/assets/153db348-543b-499f-9bae-d2052ab0682b" />
<img width="465" height="1025" alt="Screenshot 2026-04-06 084137" src="https://github.com/user-attachments/assets/fe835688-78da-44b1-bea8-f3952e614775" />
<img width="477" height="1023" alt="Screenshot 2026-04-06 084007" src="https://github.com/user-attachments/assets/8e823472-a0a5-4876-9a11-dc7829c7c495" />
<img width="461" height="1012" alt="Screenshot 2026-04-06 084017" src="https://github.com/user-attachments/assets/38587a9d-ce8a-49b7-9197-366d63c49528" />
<<<<<<< HEAD
<img width="492" height="1062" alt="Screenshot 2026-04-10 084454" src="https://github.com/user-attachments/assets/24f52aed-6a0e-4037-b8df-0076b65f2f5f" />
<img width="490" height="1052" alt="Screenshot 2026-04-10 084511" src="https://github.com/user-attachments/assets/b0b56d93-8893-4d60-a53d-ab9f506d8552" />
<img width="495" height="1056" alt="Screenshot 2026-04-10 084529" src="https://github.com/user-attachments/assets/02bb00b0-6d56-42e8-915d-993940ccd842" />
<img width="498" height="1057" alt="Screenshot 2026-04-10 084543" src="https://github.com/user-attachments/assets/5f19a02b-c935-4985-b426-f552e26372ea" />

=======

1. AsyncStorage hoạt động như thế nào?
AsyncStorage là một hệ thống lưu trữ dữ liệu dạng key-value trên thiết bị, hoạt động bất đồng bộ (asynchronous). Nó cho phép lưu trữ dữ liệu dưới dạng chuỗi (string) và dữ liệu này vẫn tồn tại ngay cả khi ứng dụng bị tắt hoặc khởi động lại. Khi sử dụng, lập trình viên thường lưu dữ liệu bằng setItem() và lấy dữ liệu bằng getItem(). Do chỉ hỗ trợ string, nên khi lưu object hoặc array cần chuyển đổi bằng JSON.stringify(), và khi đọc cần dùng JSON.parse().

2. Vì sao dùng AsyncStorage thay vì biến state?
Biến state trong React chỉ dùng để lưu trữ dữ liệu tạm thời trong quá trình ứng dụng đang chạy và sẽ mất đi khi component bị unmount hoặc khi ứng dụng tắt. Trong khi đó, AsyncStorage cho phép lưu trữ dữ liệu lâu dài trên thiết bị. Do đó, AsyncStorage được dùng khi cần giữ lại thông tin như token đăng nhập, cài đặt người dùng hoặc dữ liệu cần sử dụng lại sau khi mở app. Tuy nhiên, AsyncStorage không thể thay thế state vì nó không tự động làm cập nhật giao diện (UI). Thông thường, dữ liệu sẽ được lấy từ AsyncStorage rồi đưa vào state để hiển thị.

3. So sánh AsyncStorage với Context API
Context API là một công cụ của React dùng để chia sẻ dữ liệu giữa các component mà không cần truyền props qua nhiều cấp. Nó giúp quản lý state toàn cục (global state) trong ứng dụng. Tuy nhiên, Context API không lưu trữ dữ liệu lâu dài, dữ liệu sẽ mất khi ứng dụng tắt.

So sánh:
- State: quản lý dữ liệu trong component, có re-render, không lưu lâu dài.
- Context API: chia sẻ dữ liệu toàn app, có re-render khi thay đổi, không lưu lâu dài.
- AsyncStorage: lưu dữ liệu lâu dài trên thiết bị, không tự re-render.

Kết luận:
State dùng để hiển thị dữ liệu hiện tại, Context dùng để chia sẻ dữ liệu giữa các component, còn AsyncStorage dùng để lưu trữ dữ liệu lâu dài. Trong thực tế, thường kết hợp cả ba để xây dựng ứng dụng hiệu quả.
>>>>>>> 4a4a2dc (continue update)
