# Hệ Thống Kiểm Thử Tự Động Cho Website Shopee Sử Dụng Playwright

Dự án đồ án tốt nghiệp xây dựng bộ khung kiểm thử tự động (Automation Testing Framework) theo kiến trúc **Page Object Model (POM)** bằng **Playwright** và **TypeScript** cho các luồng nghiệp vụ cốt lõi trên sàn thương mại điện tử Shopee.

## 1. Công nghệ sử dụng
- **Framework kiểm thử:** Playwright Test
- **Ngôn ngữ lập trình:** TypeScript / Node.js
- **Kiến trúc thiết kế:** Page Object Model (POM)
- **Kỹ thuật xử lý Anti-bot:** Network Mocking (`page.route`) & Browser Stealth
- **Tích hợp liên tục (CI/CD):** GitHub Actions

## 2. Cấu trúc thư mục dự án
```text
├── .github/workflows/      # Cấu hình CI/CD tự động chạy test trên GitHub Actions
├── src/pages/              # Các lớp Page Object đại diện cho từng màn hình
│   ├── base.page.ts        # Lớp cơ sở chứa các phương thức dùng chung
│   ├── home.page.ts        # Trang chủ & thanh tìm kiếm
│   ├── search.page.ts      # Trang kết quả tìm kiếm sản phẩm
│   ├── product-detail.page.ts # Trang chi tiết sản phẩm
│   ├── cart.page.ts        # Trang quản lý giỏ hàng & mã giảm giá
│   └── checkout.page.ts    # Trang thanh toán và đặt hàng
├── tests/                  # Các kịch bản kiểm thử (Test Suites)
│   ├── shopee.spec.ts      # Kịch bản kiểm thử luồng tìm kiếm & tra cứu
│   └── cart.spec.ts        # Kịch bản kiểm thử luồng giỏ hàng & thanh toán
├── playwright.config.ts    # Cấu hình trình duyệt, baseURL và báo cáo
└── package.json            # Danh sách thư viện phụ thuộc