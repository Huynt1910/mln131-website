export type TeamMember = {
  name: string;
  role: string;
  tag: string;
  subtitle: string;
  description: string;
  avatarLabel: string;
  avatarTone: "green" | "slate" | "sky" | "amber" | "rose";
};

export const aboutPageData = {
  pageTitle: "About Us",
  hero: {
    eyebrow: "Chúng tôi",
    title: "Đội ngũ sinh viên MLN131 với 5 thành viên năng động.",
    description:
      "Chúng tôi cùng hợp tác để xây dựng một website học tập thực thụ cho môn Triết. Mỗi thành viên đều góp phần tạo ra tài liệu, bài tập và nội dung hỗ trợ bạn tiếp cận triết học một cách hiệu quả.",
  },
  vision: {
    eyebrow: "Tầm nhìn",
    description:
      "Xây dựng môi trường học tập triết lý thân thiện, rõ ràng và có chiều sâu để sinh viên tiếp thu kiến thức, thảo luận và tự tin trong các kỳ thi.",
  },
  team: {
    sectionNumber: "04",
    eyebrow: "Đội ngũ",
    title: "Giới thiệu thành viên",
    members: [
      {
        name: "Nguyễn Minh Anh",
        role: "Nhóm trưởng",
        tag: "Leader",
        subtitle: "Điều phối nội dung",
        description:
          "Phụ trách định hướng nội dung, phân công nhiệm vụ, tổng hợp tiến độ và giữ sự thống nhất cho toàn bộ website học tập.",
        avatarLabel: "MA",
        avatarTone: "green",
      },
      {
        name: "Trần Thị Hạnh",
        role: "Phân tích tư liệu",
        tag: "Member 01",
        subtitle: "Nghiên cứu học liệu",
        description:
          "Tập trung nghiên cứu triết lý, chọn lọc tài liệu tham khảo, ghi chú luận điểm quan trọng và hỗ trợ nội dung bài học.",
        avatarLabel: "TH",
        avatarTone: "slate",
      },
      {
        name: "Lê Văn Tuấn",
        role: "Thiết kế nội dung",
        tag: "Member 02",
        subtitle: "Trình bày trực quan",
        description:
          "Xây dựng bố cục tài liệu, thiết kế cách trình bày minh họa và giúp nội dung trở nên dễ theo dõi trên từng section.",
        avatarLabel: "VT",
        avatarTone: "sky",
      },
      {
        name: "Phạm Thị Lan",
        role: "Bài tập nhóm",
        tag: "Member 03",
        subtitle: "Biên soạn bài tập",
        description:
          "Soạn thảo bài tập, kiểm duyệt câu hỏi, đề xuất hướng giải và chuẩn bị các gợi ý thảo luận cho nhóm.",
        avatarLabel: "PL",
        avatarTone: "amber",
      },
      {
        name: "Hoàng Quốc Bảo",
        role: "Truyền thông",
        tag: "Member 04",
        subtitle: "Kết nối và trình bày",
        description:
          "Phụ trách thông tin liên lạc, giới thiệu dự án, chuẩn bị nội dung trình bày và hỗ trợ hoàn thiện sản phẩm cuối.",
        avatarLabel: "QB",
        avatarTone: "rose",
      },
    ] satisfies TeamMember[],
  },
  goals: {
    title: "Mục tiêu của nhóm",
    description:
      "Chúng tôi cam kết phối hợp chặt chẽ để mang đến tài liệu học tập chất lượng, nội dung trình bày rõ ràng và hỗ trợ bạn tiến bộ trong môn Triết học MLN131. Mỗi thành viên đều đóng góp chuyên môn và tư duy sáng tạo để giúp website trở thành nguồn học thiết thực.",
  },
} as const;
