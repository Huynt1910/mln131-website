export type ScenarioType = "religion" | "belief" | "superstition";

export interface Scenario {
  id: number;
  title: string;
  description: string;
  answer: ScenarioType;
  explanation: string;
  image: string;
}

export const scenarioLabels: Record<ScenarioType, string> = {
  religion: "Tôn giáo",
  belief: "Tín ngưỡng",
  superstition: "Mê tín dị đoan",
};

export const scenarioTone: Record<
  ScenarioType,
  { accent: string; bg: string; border: string; text: string }
> = {
  religion: {
    accent: "bg-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    text: "text-indigo-800",
  },
  belief: {
    accent: "bg-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
    text: "text-sky-800",
  },
  superstition: {
    accent: "bg-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-800",
  },
};

export const scenarios: Scenario[] = [
  {
    id: 1,
    title: "Mèo đen chạy qua đường",
    description:
      "Minh đang đi đường thì thấy một con mèo đen chạy qua. Minh lập tức quay xe đi đường khác vì tin rằng nếu tiếp tục đi thì ngày hôm đó sẽ gặp tai nạn.",
    answer: "superstition",
    explanation:
      "Đây là mê tín dị đoan vì Minh tin mù quáng vào điềm xấu không có cơ sở kiểm chứng, để nỗi sợ chi phối hành vi thực tế.",
    image:
      "/images/cards/z7895035254695_03e24a4256e2544549be2a338ea9fd1e.jpg",
  },
  {
    id: 2,
    title: "Chữa sốt bằng tàn nhang",
    description:
      'Ba anh Bình bị sốt cao liên miên. Thay vì đưa đi bệnh viện, anh Bình lấy nước hòa với tàn nhang trên bàn thờ cho ba uống vì tin rằng "bề trên" sẽ che chở và làm lành bệnh.',
    answer: "superstition",
    explanation:
      "Đây là mê tín dị đoan vì bỏ qua y tế và dùng niềm tin không có cơ sở để chữa bệnh, có thể gây nguy hiểm trực tiếp đến sức khỏe.",
    image:
      "/images/cards/z7895035260933_436c8a84becb30371ed9103ed9f7521e.jpg",
  },
  {
    id: 3,
    title: "Thắp hương ngày giỗ",
    description:
      "Vào ngày giỗ của ông nội, Nam thắp hương lên bàn thờ để bày tỏ lòng biết ơn và cầu mong gia đình bình an.",
    answer: "belief",
    explanation:
      "Đây là tín ngưỡng thờ cúng tổ tiên, gắn với truyền thống gia đình và văn hóa tưởng nhớ người đã khuất của người Việt.",
    image:
      "/images/cards/z7895035263343_b70b187d7293aa28df0e7e6b623204d6.jpg",
  },
  {
    id: 4,
    title: "Nộp tiền làm lễ tránh tai ương",
    description:
      "Thầy bói phán gia đình bà Hoa sắp gặp tai ương lớn, yêu cầu bà phải nộp 50 triệu đồng để làm lễ mua hàng trăm hình nhân thế mạng và đốt lượng lớn vàng mã nhằm giảm tội.",
    answer: "superstition",
    explanation:
      "Đây là mê tín dị đoan vì gieo sợ hãi, lợi dụng niềm tin để trục lợi tiền bạc và thúc đẩy hành vi lãng phí, thiếu cơ sở.",
    image:
      "/images/cards/z7895035266485_5decc4581ec2b62bb8be7e53d5697ce9.jpg",
  },
  {
    id: 5,
    title: "Đi chùa đầu năm cầu bình an",
    description:
      "Vào ngày mùng 1 Tết, bà Lan cùng con cháu lên chùa thắp hương, hái lộc đầu năm và cầu mong một năm mới sức khỏe, hanh thông cho cả nhà.",
    answer: "belief",
    explanation:
      "Đây có thể xem là tín ngưỡng khi được thực hiện như một phong tục văn hóa, nhu cầu tinh thần lành mạnh, không mê muội hay gây hại.",
    image:
      "/images/cards/z7895035271645_f94f60d0c4ae0d8ea70420b34cb49203.jpg",
  },
  {
    id: 6,
    title: "Treo gương bát quái trước cửa",
    description:
      "Sau khi xây nhà xong, ông Hùng xem hướng thấy cửa chính đối diện với ngã ba đường nên treo một chiếc gương bát quái trước cửa với mong muốn điều hòa luồng khí và an tâm hơn khi ở.",
    answer: "belief",
    explanation:
      "Đây nghiêng về tín ngưỡng dân gian nếu chỉ là quan niệm phong tục để tạo sự an tâm, không gây hại và không thay thế các quyết định thực tế.",
    image:
      "/images/cards/z7895035274983_8853382cc4a548c301ed45afebdbe49c.jpg",
  },
  {
    id: 7,
    title: "Chọn ngày hoàng đạo mở cửa hàng",
    description:
      'Chị Mai chọn một ngày có thời tiết đẹp, trùng với ngày "hoàng đạo" trong lịch vạn niên để làm lễ cúng nhỏ và mở cửa hàng quần áo mới.',
    answer: "belief",
    explanation:
      "Đây là tín ngưỡng nếu việc xem ngày chỉ mang ý nghĩa tinh thần, văn hóa và chị Mai vẫn chuẩn bị kinh doanh bằng các điều kiện thực tế.",
    image:
      "/images/cards/z7895035277059_9d687afa64f19aa609836bfb06f558b0.jpg",
  },
  {
    id: 8,
    title: "Vỡ gương và hủy phỏng vấn",
    description:
      "Linh vô tình làm vỡ chiếc gương trang điểm. Cô suy sụp, khóc lóc cả ngày và hủy bỏ buổi phỏng vấn xin việc quan trọng vào ngày mai vì tin rằng mình sẽ bị xui xẻo đeo bám suốt 7 năm tới.",
    answer: "superstition",
    explanation:
      "Đây là mê tín dị đoan vì Linh phụ thuộc mù quáng vào quan niệm xui rủi, để nó gây hoang mang và làm mất cơ hội quan trọng.",
    image:
      "/images/cards/z7895035281713_abfc88e7ead79bc179459a1cca038131.jpg",
  },
  {
    id: 9,
    title: "Ép sinh mổ theo giờ thầy phán",
    description:
      "Dù bác sĩ cảnh báo thai nhi chưa đủ tuần tuổi và việc sinh non rất nguy hiểm, bà Yến vẫn ép con dâu phải nhập viện sinh mổ đúng vào giờ Tý ngày rằm vì thầy phán sinh giờ đó sau này đứa trẻ sẽ thành tài.",
    answer: "superstition",
    explanation:
      "Đây là mê tín dị đoan nghiêm trọng vì đặt bói toán lên trên y tế, có thể gây nguy hiểm cho mẹ và trẻ.",
    image:
      "/images/cards/z7895035286689_81c44a0e0cb3be2f22caf2b21277fa7f.jpg",
  },
  {
    id: 10,
    title: "Vu Lan báo hiếu và ăn chay",
    description:
      "Vào tháng 7 âm lịch, chị Hạnh quyết định ăn chay cả tháng và tích cực đi làm từ thiện để cầu siêu cho cha mẹ đã khuất và tích đức cho con cái.",
    answer: "religion",
    explanation:
      "Đây là hoạt động gắn với Phật giáo và lễ Vu Lan, có nghi lễ, giáo lý nhân quả - báo hiếu và thực hành đạo đức trong cộng đồng tôn giáo.",
    image:
      "/images/cards/z7895035386376_998a9dfd74dfdeb3c386caaf46ada563.jpg",
  },
];

export function getScenarioImage(scenario: Scenario) {
  return scenario.image;
}
