// This data will be moved to the backend later
export const level1Questions = [
  {
    id: 1,
    imageUrl: "/assets/question/question1.png",
    prompt:
      "A vibrant, cartoon-style illustration of a school gate. On one side, a clean, tidy food stall with a cheerful vendor and covered food. On the other, a messy, unhygienic stall with flies. A child stands in the middle, looking confused. The style is cute and educational for children.",
    questionText:
      "Bạn thấy hai quầy hàng xiên que trước cổng trường. Bạn sẽ chọn mua ở quầy nào?",
    options: [
      {
        id: "a",
        imageUrl: "/assets/question/question1_a.png",
        prompt:
          "Close-up on the clean food stall. The food (skewers) is delicious and neatly arranged under a glass cover. The vendor is smiling, wearing an apron and hat. Bright, sunny background. Cute cartoon style.",
        text: "Quầy hàng sạch sẽ, có che đậy",
      },
      {
        id: "b",
        imageUrl: "/assets/question/question1_b.png",
        prompt:
          "Close-up on the dirty food stall. Uncovered skewers attract flies. The stall is grimy, and the vendor looks careless. The background is darker and unappealing. Cute cartoon style.",
        text: "Quầy hàng trông mất vệ sinh, không che đậy",
      },
    ],
    correctAnswer: "a",
    explanation:
      "Luôn chọn những quầy hàng sạch sẽ, hợp vệ sinh để đảm bảo an toàn cho sức khỏe của bạn nhé!",
  },
  {
    id: 2,
    imageUrl: "/assets/question/question2.png",
    prompt:
      "A child in a supermarket aisle holding two bags of potato chips, looking at them thoughtfully. Cute, simple cartoon style for kids.",
    questionText: "Khi mua bim bim, bạn sẽ chọn gói nào?",
    options: [
      {
        id: "a",
        imageUrl: "/assets/question/question2_a.png",
        prompt:
          "A perfectly puffed-up, crisp bag of potato chips. The packaging is bright, clean, and undamaged. Looks fresh and appealing. Simple cartoon illustration.",
        text: "Gói bim bim còn nguyên vẹn, không bị rách.",
      },
      {
        id: "b",
        imageUrl: "/assets/question/question2_b.png",
        prompt:
          "A deflated, crumpled, and slightly torn bag of potato chips. It looks old and unappetizing. Simple cartoon illustration.",
        text: "Gói bim bim trông cũ và bị xẹp lép.",
      },
    ],
    correctAnswer: "a",
    explanation:
      "Hãy kiểm tra kỹ bao bì sản phẩm. Bao bì rách hoặc cũ có thể khiến không khí và vi khuẩn xâm nhập, làm hỏng thực phẩm bên trong.",
  },
  {
    id: 3,
    imageUrl: "/assets/question/question3.png",
    prompt:
      "A child about to eat an apple, with a thought bubble showing two options: a sink with soap, and a pair of trousers. Cute, educational cartoon style.",
    questionText:
      "Trước khi ăn bất kỳ món gì, việc quan trọng nhất bạn cần làm là gì?",
    options: [
      {
        id: "a",
        imageUrl: "/assets/question/question3_a.png",
        prompt:
          "Hands being washed thoroughly with soap under a running tap. Lots of bubbles. Clean and hygienic scene. Cute, simple cartoon style.",
        text: "Rửa tay sạch bằng xà phòng.",
      },
      {
        id: "b",
        imageUrl: "/assets/question/question3_b.png",
        prompt:
          "A child wiping dirty hands on their trousers before eating. The action is shown clearly. Simple, educational cartoon style.",
        text: "Chỉ cần lau tay vào quần áo là đủ.",
      },
    ],
    correctAnswer: "a",
    explanation:
      "Rửa tay bằng xà phòng trước khi ăn là cách tốt nhất để loại bỏ vi khuẩn và giữ an toàn cho chiếc bụng của bạn!",
  },
  {
    id: 4,
    imageUrl: "/assets/question/question4.png",
    prompt:
      "A child in a school canteen is holding a carton of milk and looking at it closely. The background shows other students eating. The style is a friendly, educational cartoon for kids.",
    questionText:
      "Khi mua một hộp sữa trong căn-tin, bạn cần xem thông tin nào nhất?",
    options: [
      {
        id: "a",
        imageUrl: "/assets/question/question4_a.png",
        prompt:
          "A close-up on a milk carton, focusing on a colorful, fun cartoon character printed on it. The character is smiling and looks appealing. The style is a simple, cute cartoon.",
        text: "Hình vẽ trên vỏ hộp có đẹp không.",
      },
      {
        id: "b",
        imageUrl: "/assets/question/question4_b.png",
        prompt:
          "A close-up on the bottom of a milk carton, with a finger pointing to the expiration date, which is clearly visible. The focus is on the date. Simple, clear cartoon style.",
        text: "Ngày hết hạn (Hạn sử dụng) của sữa.",
      },
    ],
    correctAnswer: "b",
    explanation:
      "Luôn luôn kiểm tra hạn sử dụng để chắc chắn rằng sản phẩm vẫn còn an toàn để uống nhé.",
  },
  {
    id: 5,
    imageUrl: "/assets/question/question5.png",
    prompt:
      "A child's face looking with wide, curious eyes at a jar of intensely colorful, almost glowing candies on a shop counter. The style is a cute and slightly exaggerated cartoon.",
    questionText:
      "Bạn thấy một loại kẹo có màu sắc sặc sỡ, bắt mắt một cách bất thường. Bạn có nên ăn không?",
    options: [
      {
        id: "a",
        imageUrl: "/assets/question/question5_a.png",
        prompt:
          "A child shaking their head and holding up a hand to refuse the overly bright candy. The expression is one of caution. A red 'X' or a stop sign could be subtly included. Cute cartoon style.",
        text: "Không nên, màu sắc quá sặc sỡ có thể chứa phẩm màu độc hại.",
      },
      {
        id: "b",
        imageUrl: "/assets/question/question5_b.png",
        prompt:
          "A child happily reaching for the jar of unnaturally vibrant, colorful candies, looking excited to eat them. The candies sparkle invitingly. Cute cartoon style.",
        text: "Nên ăn chứ, trông thật hấp dẫn!",
      },
    ],
    correctAnswer: "a",
    explanation:
      "Cẩn thận với những thực phẩm có màu sắc quá nổi bật, chúng có thể chứa phẩm màu không an toàn cho sức khỏe.",
  },
  {
    id: 6,
    imageUrl: "/assets/question/question6.png",
    prompt:
      "A street vendor is selling colorful drinks in unlabeled plastic cups from a cart on a hot, sunny day. A child is looking at the drink, feeling thirsty. The style is a simple, educational cartoon.",
    questionText:
      "Nước giải khát bán rong không có nhãn mác, nguồn gốc rõ ràng. Bạn có uống không?",
    options: [
      {
        id: "a",
        imageUrl: "/assets/question/question6_a.png",
        prompt:
          "The child is politely refusing the unlabeled drink from the street vendor, perhaps shaking their head 'no'. The child looks decisive and smart. Simple cartoon style.",
        text: "Tuyệt đối không, vì không rõ nguồn gốc và có thể không hợp vệ sinh.",
      },
      {
        id: "b",
        imageUrl: "/assets/question/question6_b.png",
        prompt:
          "The child is eagerly taking the colorful, unlabeled drink from the vendor, looking very thirsty and about to drink it. The sun is beating down. Simple cartoon style.",
        text: "Uống thử xem sao, trời đang nóng mà.",
      },
    ],
    correctAnswer: "a",
    explanation:
      "Chỉ nên sử dụng những sản phẩm có nhãn mác, nguồn gốc xuất xứ rõ ràng để đảm bảo an toàn.",
  },
  {
    id: 7,
    imageUrl: "/assets/question/question7.png",
    prompt:
      "A food vendor is shown using their bare hands, which just handled money, to pick up food for a child customer. The scene should clearly show the exchange of money and then the handling of food. The style is a clear, educational cartoon.",
    questionText:
      "Người bán hàng vừa dùng tay trần nhận tiền, vừa bốc thức ăn cho bạn. Bạn sẽ làm gì?",
    options: [
      {
        id: "a",
        imageUrl: "/assets/question/question7_a.png",
        prompt:
          "The child is accepting the food from the vendor without any concern, smiling as they take the snack. Simple cartoon style.",
        text: "Vẫn mua bình thường.",
      },
      {
        id: "b",
        imageUrl: "/assets/question/question7_b.png",
        prompt:
          "The child is politely declining the food, with a concerned but firm expression, perhaps holding up a hand to say 'stop'. The focus is on the child making a safe choice. Simple cartoon style.",
        text: "Cảm ơn và từ chối mua vì mất vệ sinh.",
      },
    ],
    correctAnswer: "b",
    explanation:
      "Tay tiếp xúc với tiền chứa rất nhiều vi khuẩn. Hãy chọn những nơi bán hàng có sử dụng găng tay hoặc dụng cụ gắp thức ăn riêng.",
  },
  {
    id: 8,
    imageUrl: "/assets/question/question8.png",
    prompt:
      "A child is holding a bottle of soda, squinting at the label which is blurry, smudged, and poorly printed. The child looks suspicious. The style is a simple, educational cartoon.",
    questionText:
      "Bạn thấy một chai nước ngọt quen thuộc nhưng tem nhãn bị mờ, in nhoè. Đây có thể là dấu hiệu của điều gì?",
    options: [
      {
        id: "a",
        imageUrl: "/assets/question/question8_a.png",
        prompt:
          "A magnifying glass is held over the blurry, poorly printed soda bottle label, highlighting the defects. A skull and crossbones symbol or a large red 'X' is subtly placed nearby to indicate danger or 'fake'. Cartoon style.",
        text: "Đây là hàng giả, hàng nhái, kém chất lượng.",
      },
      {
        id: "b",
        imageUrl: "/assets/question/question8_b.png",
        prompt:
          "The soda bottle with the blurry label has sparkles and stars around it, as if it's a special, magical edition. The child looks intrigued and happy. Cartoon style.",
        text: "Chắc là một phiên bản đặc biệt của sản phẩm.",
      },
    ],
    correctAnswer: "a",
    explanation:
      "Hàng giả thường có chất lượng in ấn trên bao bì rất kém. Hãy là người tiêu dùng thông thái để nhận biết nhé!",
  },
  {
    id: 9,
    imageUrl: "/assets/question/question9.png",
    prompt:
      "Fresh-looking vegetables (carrots, lettuce, tomatoes) are displayed for sale on a mat directly on the pavement of a busy, dusty road with cars passing by. The style is a simple, educational cartoon.",
    questionText:
      "Rau củ được bày bán ngay dưới lòng đường, không được che đậy. Bạn có nghĩ chúng sạch không?",
    options: [
      {
        id: "a",
        imageUrl: "/assets/question/question9_a.png",
        prompt:
          "A cartoon depiction of dust clouds and exhaust fumes from a passing car settling onto the uncovered vegetables on the ground. Little cartoon germs are shown on the vegetables. The tone is clearly negative. Simple cartoon style.",
        text: "Không hề, chúng đã bị nhiễm rất nhiều khói bụi và vi khuẩn từ đường phố.",
      },
      {
        id: "b",
        imageUrl: "/assets/question/question9_b.png",
        prompt:
          "The vegetables on the ground are shown looking bright, fresh, and delicious. The sun is shining on them. The background traffic is less prominent. The tone is positive. Simple cartoon style.",
        text: "Trông vẫn tươi mà, chắc là không sao.",
      },
    ],
    correctAnswer: "a",
    explanation:
      "Thực phẩm không được che đậy và bày bán ở nơi ô nhiễm sẽ không còn an toàn nữa, dù trông có tươi ngon.",
  },
  {
    id: 10,
    imageUrl: "/assets/question/question10.png",
    prompt:
      "One child is comforting another child who is clutching their stomach in pain. In the background, the food stall where they ate is visible. The style is an expressive, educational cartoon.",
    questionText:
      "Bạn của bạn bị đau bụng sau khi ăn một món ăn vặt ở cổng trường. Lần sau bạn sẽ làm gì?",
    options: [
      {
        id: "a",
        imageUrl: "/assets/question/question10_a.png",
        prompt:
          "The healthy child is talking to a group of other friends, pointing towards the food stall with a warning expression. A large red 'X' is drawn over the food stall in the background. The message is about warning others. Simple cartoon style.",
        text: "Không bao giờ ăn món đó ở hàng đó nữa và khuyên các bạn khác.",
      },
      {
        id: "b",
        imageUrl: "/assets/question/question10_b.png",
        prompt:
          "The healthy child is shrugging their shoulders and walking back to the same food stall to buy more food, ignoring their sick friend. The action shows a poor choice. Simple cartoon style.",
        text: "Chắc do bạn ấy bụng yếu thôi, mình cứ ăn.",
      },
    ],
    correctAnswer: "a",
    explanation:
      "Nếu có dấu hiệu không an toàn, hãy bảo vệ bản thân và bạn bè bằng cách tránh xa các loại thực phẩm đó.",
  },
];

// Data for Level 2 - Drag and Drop
export const level2DragAndDrop = {
  title: "Màn 2: Căn-tin Thông Thái",
  items: [
    {
      id: "item-1",
      imageUrl: "/assets/item1.png",
      text: "Hộp sữa còn hạn sử dụng",
      type: "safe",
      prompt:
        "A standard, clean-looking milk carton, shown straight-on. The design is simple and colorful. A small, clearly visible calendar icon or a sticker shows a future date, indicating it is fresh and within its expiration date. The carton is perfectly shaped and undamaged. The style is a cute, flat vector illustration on a transparent background.",
    },
    {
      id: "item-2",
      imageUrl: "/assets/item2.png",
      text: "Gói snack nguyên vẹn",
      type: "safe",
      prompt:
        "A perfectly puffed-up, sealed bag of snacks or potato chips. The packaging is bright, cheerful, and completely intact with no tears or wrinkles. It looks fresh, crisp, and appealing. The style is a simple, glossy cartoon illustration on a transparent background.",
    },
    {
      id: "item-3",
      imageUrl: "/assets/item3.png",
      text: "Gói bim bim bị xẹp lép",
      type: "unsafe",
      prompt:
        "A deflated, crumpled, and sad-looking bag of snacks. The packaging is wrinkled, and there might be a small, subtle tear or hole. It clearly looks old and unappetizing. The colors on the packaging could be slightly faded. The style is a simple cartoon illustration on a transparent background.",
    },
    {
      id: "item-4",
      imageUrl: "/assets/item4.png",
      text: "Chai nước có tem nhãn mờ",
      type: "unsafe",
      prompt:
        "A plastic bottle of a colorful drink. The label on the bottle is blurry, smudged, and difficult to read, indicating it might be a fake or low-quality product. The overall bottle looks a bit grimy or suspicious. The style is a clear, educational cartoon illustration on a transparent background.",
    },
    // Add more items here
  ],
  dropZones: [
    { id: "zone-safe", title: "✅ Nên Mua", accepts: "safe" },
    { id: "zone-unsafe", title: "❌ Không Nên Mua", accepts: "unsafe" },
  ],
};

// Data for Level 3 - Spot the Difference
export const level3SpotTheDifference = {
  title: "Màn 3: Siêu Thị Nhí",
  backgroundImageUrl: "/assets/stage3.png", // Corrected path
  correctImageUrl: "/assets/stage3_correct.png", // Corrected path
  timeLimit: 60, // seconds
  differences: [
    {
      id: "diff-1",
      x: 15,
      y: 70,
      radius: 8,
      description:
        "Thịt sống được đặt ngay trên rau củ, có thể gây nhiễm khuẩn chéo.",
    },
    {
      id: "diff-2",
      x: 50,
      y: 80,
      radius: 10,
      description: "Hộp sữa bị phồng, dấu hiệu của việc thực phẩm đã bị hỏng.",
    },
    {
      id: "diff-3",
      x: 85,
      y: 65,
      radius: 7,
      description: "Trái cây bị dập nát, nấm mốc không nên mua.",
    },
    // Coordinates are percentages (top, left)
  ],
};
