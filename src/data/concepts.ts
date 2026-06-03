import type { ScenarioType } from "@/src/data/scenarios";

export type Concept = {
  type: ScenarioType;
  title: string;
  shortTitle: string;
  icon: string;
  iconImage: string;
  summary: string;
  signs: string[];
  examples: string[];
  note: string;
};

export const concepts: Concept[] = [
  {
    type: "religion",
    title: "Tôn giáo là gì?",
    shortTitle: "Tôn giáo",
    icon: "TG",
    iconImage: "/images/icons/religion-icon.png",
    summary:
      "Tôn giáo là một hình thái ý thức xã hội, phản ánh đời sống tinh thần của con người thông qua niềm tin vào lực lượng siêu nhiên. Tôn giáo thường có hệ thống giáo lý, giáo luật, lễ nghi, tổ chức tôn giáo, cơ sở thờ tự và cộng đồng tín đồ.",
    signs: [
      "Có niềm tin vào đấng siêu nhiên",
      "Có giáo lý, giáo luật, lễ nghi",
      "Có tổ chức tôn giáo, chức sắc và tín đồ",
      "Có cơ sở thờ tự và sinh hoạt cộng đồng",
      "Hoạt động tích cực khi phù hợp văn hóa và pháp luật",
    ],
    examples: [
      "Phật giáo",
      "Công giáo",
      "Tin Lành",
      "Hồi giáo",
      "Cao Đài",
      "Phật giáo Hòa Hảo",
    ],
    note: "Tôn giáo không đồng nghĩa với mê tín; cần tôn trọng quyền tự do tín ngưỡng, tôn giáo.",
  },
  {
    type: "belief",
    title: "Tín ngưỡng là gì?",
    shortTitle: "Tín ngưỡng",
    icon: "TN",
    iconImage: "/images/icons/belief-icon.png",
    summary:
      "Tín ngưỡng là niềm tin của con người vào những giá trị thiêng liêng, gắn với phong tục, truyền thống và văn hóa cộng đồng. Tín ngưỡng thường không có hệ thống giáo lý và tổ chức chặt chẽ như tôn giáo.",
    signs: [
      "Gắn với truyền thống, phong tục",
      "Mang giá trị văn hóa cộng đồng",
      "Không nhất thiết có giáo lý, giáo luật",
      "Không có tổ chức chặt chẽ như tôn giáo",
      "Không gây hại nếu được thực hiện đúng mực",
    ],
    examples: [
      "Thờ cúng tổ tiên",
      "Giỗ Tổ Hùng Vương",
      "Thờ anh hùng dân tộc",
      "Đi chùa đầu năm cầu bình an",
      "Cúng giỗ ông bà",
    ],
    note: "Tín ngưỡng truyền thống có thể góp phần giữ gìn bản sắc văn hóa dân tộc.",
  },
  {
    type: "superstition",
    title: "Mê tín dị đoan là gì?",
    shortTitle: "Mê tín dị đoan",
    icon: "MT",
    iconImage: "/images/icons/superstition-icon.png",
    summary:
      "Mê tín dị đoan là niềm tin mù quáng vào những điều huyền bí, không có cơ sở khoa học, có thể dẫn đến hành vi sai lệch, gây thiệt hại về tiền bạc, sức khỏe, tinh thần hoặc ảnh hưởng xấu đến xã hội.",
    signs: [
      "Tin mù quáng, không kiểm chứng",
      "Phụ thuộc hoàn toàn vào bói toán, bùa chú, giải hạn",
      "Có thể bị lợi dụng để trục lợi",
      "Gây sợ hãi, hoang mang",
      "Làm con người bỏ qua khoa học, y tế, pháp luật",
    ],
    examples: [
      "Bỏ chữa bệnh để đi cúng bái",
      "Vay tiền làm lễ giải hạn",
      "Tin bói toán quyết định toàn bộ tương lai",
      "Mua bùa để trúng số",
      "Đốt vàng mã quá mức gây lãng phí",
    ],
    note: "Cần đấu tranh với hành vi lợi dụng tôn giáo, tín ngưỡng để trục lợi hoặc gây hại.",
  },
];
