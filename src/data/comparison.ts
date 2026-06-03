export type ComparisonRow = {
  criterion: string;
  religion: string;
  belief: string;
  superstition: string;
};

export const comparisonRows: ComparisonRow[] = [
  {
    criterion: "Bản chất",
    religion: "Hệ thống niềm tin có tổ chức",
    belief: "Niềm tin văn hóa, truyền thống",
    superstition: "Niềm tin mù quáng, thiếu cơ sở",
  },
  {
    criterion: "Cơ sở niềm tin",
    religion: "Đức tin, giáo lý",
    belief: "Phong tục, truyền thống",
    superstition: "Sợ hãi, đồn đoán, bói toán",
  },
  {
    criterion: "Có tổ chức không",
    religion: "Có tổ chức, chức sắc, tín đồ",
    belief: "Không hoặc ít tổ chức chặt chẽ",
    superstition: "Không có tổ chức chính thống, dễ bị lợi dụng",
  },
  {
    criterion: "Có giáo lý/giáo luật không",
    religion: "Có",
    belief: "Không rõ ràng hoặc không có",
    superstition: "Không có",
  },
  {
    criterion: "Giá trị văn hóa",
    religion: "Có thể có",
    belief: "Có giá trị văn hóa truyền thống",
    superstition: "Không có giá trị tích cực rõ ràng",
  },
  {
    criterion: "Tác động xã hội",
    religion: "Tích cực nếu hoạt động đúng pháp luật",
    belief: "Góp phần giữ gìn bản sắc văn hóa",
    superstition: "Có thể gây hại, lãng phí, bị lợi dụng",
  },
  {
    criterion: "Ví dụ",
    religion: "Đi lễ nhà thờ, sinh hoạt Phật giáo",
    belief: "Thờ cúng tổ tiên, cúng giỗ",
    superstition: "Bói toán cực đoan, cúng giải hạn trục lợi",
  },
];
