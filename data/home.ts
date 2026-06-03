export const homePageData = {
  pageTitle: "Website học tập môn Triết",
  hero: {
    eyebrow: "Triết học MLN131",
    title: "Học tập hệ thống, sáng tạo tư duy, phát triển năng lực.",
    description:
      "MLN131 là trang học tập chuyên nghiệp dành cho sinh viên môn Triết. Tại đây, bạn sẽ tiếp cận nội dung bài giảng, bài tập, thảo luận nhóm và nguồn tài liệu được tổ chức rõ ràng, phù hợp với chương trình học.",
    primaryAction: {
      href: "/about",
      label: "Xem đội ngũ sinh viên",
    },
    secondaryAction: {
      href: "#course",
      label: "Khám phá nội dung",
    },
  },
  overview: [
    {
      title: "Mã môn học",
      description: "MLN131",
      isLarge: true,
    },
    {
      title: "Phạm vi học",
      description:
        "Các chủ đề cơ bản về triết học phương Tây và triết học phương Đông, tư duy phản biện, đạo đức, chính trị và nhân sinh quan.",
      isLarge: false,
    },
    {
      title: "Mục tiêu",
      description:
        "Giúp sinh viên hiểu sâu nội dung, vận dụng lý thuyết vào phân tích vấn đề và nâng cao kỹ năng trình bày luận văn, thảo luận nhóm.",
      isLarge: false,
    },
  ],
  courseItems: [
    {
      title: "Tài liệu bài giảng",
      description:
        "Tổng hợp giáo trình, slides và bài đọc tham khảo giúp bạn ôn tập hiệu quả từng chủ đề.",
    },
    {
      title: "Thảo luận nhóm",
      description:
        "Các nội dung bài tập và bài luận được trình bày rõ ràng, hỗ trợ hoạt động nhóm và phản biện.",
    },
    {
      title: "Chuẩn bị kiểm tra",
      description:
        "Mẫu đề thi, bài tập tự luyện và hướng dẫn trả lời giúp bạn tự tin trong kỳ thi học phần.",
    },
  ],
} as const;
