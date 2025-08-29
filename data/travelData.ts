import type { TravelLocation } from '../types';

export const travelData: TravelLocation[] = [
  {
    id: 1,
    city: { ja: "東京", en: "Tokyo", zh: "东京", ko: "도쿄" },
    country: { ja: "日本", en: "Japan", zh: "日本", ko: "일본" },
    coordinates: [35.6812, 139.7671],
    description: {
      ja: "日本の首都　4日ほどですべて満喫できる　おすすめ - 東京駅周辺、はとバスナイトプレミアムツアー、渋谷、新宿、お台場",
      en: "Japan's capital city: Enjoy everything in just 4 days - Recommended - Tokyo Station area, Hato Bus Night Premium Tour, Shibuya, Shinjuku, Odaiba",
      zh: "日本首都：4天畅玩所有景点 - 推荐 - 东京站周边、哈多巴士夜间尊享之旅、涩谷、新宿、台场",
      ko: "일본의 수도 4일 정도로 모두 만끽할 수 있는 추천 - 도쿄역 주변, 하토 버스 나이트 프리미엄 투어, 시부야, 신주쿠, 오다이바"
    },
    youtubeVideoIds: ["Zl_lBD09KnM", "rWxn0nsQKQ8" , "nZHuF_8nIpQ"],
  },
  {
    id: 2,
    city: { ja: "関西（大阪、京都、奈良）", en: "Kansai (Osaka, Kyoto, Nara)", zh: "关西（大阪、京都、奈良）", ko: "간사이 (오사카, 교토, 나라)" },
    country: { ja: "日本", en: "Japan", zh: "日本", ko: "일본" },
    coordinates: [34.6937, 135.5023],
    description: {
      ja: "日本の伝統の中心を巡る旅。　おすすめ - 奈良公園、清水寺、千本神社、USJ、道頓堀",
      en: "A journey through the traditional heart of Japan. We enjoyed the street food of Osaka, the tranquil temples of Kyoto, and the friendly deer of Nara. Recommended places - Nara Park, Kiyomizu-dera Temple, Senbon Shrine, Universal Studios Japan, Dotonbori",
      zh: "探索日本传统文化的心脏地带。我们品尝了大阪的街头美食、京都的静谧寺庙，以及奈良友善的鹿群。推荐景点：奈良公园、清水寺、千本神社、日本环球影城、道顿堀",
      ko: "일본의 전통의 중심을 둘러싼 여행. 오사카의 거리 음식, 교토의 조용한 사원, 나라의 친절한 사슴을 즐겼습니다. 추천 - 나라 공원, 기요미즈데라, 센본 신사, USJ, 도톤보리"
    },
    youtubeVideoIds: ["leTsYKl3nHc"],
  },
  {
    id: 3,
    city: { ja: "新潟", en: "Niigata", zh: "新潟", ko: "니가타" },
    country: { ja: "日本", en: "Japan", zh: "日本", ko: "일본" },
    coordinates: [37.9161, 139.0364],
    description: {
      ja: "おすすめのスキー場　・NASPA ニューオータニ　・苗場プリンスホテル",
      en: "Recommended ski resorts: NASPA New Otani, Naeba Prince Hotel",
      zh: "推荐滑雪场：NASPA新大谷、苗场王子大饭店",
      ko: "추천 스키장 · NASPA 뉴 오타니 · 나에바 프린스 호텔"
    },
    youtubeVideoIds: ["X0Gcr11KWNM" , "RjalE08KyNc"],
  },
  {
    id: 4,
    city: { ja: "横浜", en: "Yokohama", zh: "横滨", ko: "요코하마" },
    country: { ja: "日本", en: "Japan", zh: "日本", ko: "일본" },
    coordinates: [35.4437, 139.6380],
    description: {
      ja: "横浜は、日本有数の港町として栄え、開港以来、西洋文化を積極的に取り入れてきた歴史を持つ国際都市です。異国情緒あふれる街並みと、洗練された近代的な景色が共存しています。おすすめ - ・横浜ランドマークタワー　・横浜赤レンガ倉庫　・横浜中華街　・山下公園　・みなとみらい21　・新横浜ラーメン博物館　・元町中華街　・横浜みなと博物館　・三溪園　・横浜・八景島シーパラダイス",
      en: "Yokohama is an international city that has flourished as one of Japan's leading port towns, and has a history of actively incorporating Western culture since the port opened. Exotic cityscapes coexist with sophisticated modern scenery. 10 recommended spots: Yokohama Landmark Tower, Yokohama Red Brick Warehouse, Yokohama Chinatown, Yamashita Park, Minato Mirai 21, Shin-Yokohama Ramen Museum, Motomachi Shopping Street, Yokohama Port Museum, Sankeien Garden, Yokohama Hakkeijima Sea Paradise",
      zh: "横滨是一座国际化都市，作为日本屈指可数的港口城市之一蓬勃发展，自开港以来一直积极吸收西方文化。充满异国情调的城市景观与精致的现代景观和谐共存。推荐10个景点：横滨地标塔、横滨红砖仓库、横滨中华街、山下公园、港未来21、新横滨拉面博物馆、元町商店街、横滨港博物馆、三溪园、横滨八景岛海岛乐园",
      ko: "요코하마는, 일본 유수의 항구 마을로서 번창해, 개항 이래, 서양 문화를 적극적으로 도입해 온 역사를 가지는 국제 도시입니다. 이국 정서 넘치는 거리 풍경과 세련된 현대적인 경치가 공존하고 있습니다. 추천 명소 10선 요코하마 랜드마크 타워 요코하마 아카렌가 창고 요코하마 중화가 야마시타 공원 미나토미라이 21 새 요코하마 라면 박물관."
    },
    youtubeVideoIds: ["riMd-qn128w"],
  },
  {
    id: 5,
    city: { ja: "江の島", en: "Enoshima", zh: "江之岛", ko: "에노시마" },
    country: { ja: "日本", en: "Japan", zh: "日本", ko: "일본" },
    coordinates: [35.3000, 139.4800],
    description: {
      ja: "江の島への爽やかな夏の訪問。洞窟を探検し、神社を訪れ、美しい海の景色を楽しもう",
      en: "A refreshing summer visit to the island of Enoshima. We explored the caves, visited the shrines, and enjoyed the beautiful ocean views.",
      zh: "一次清爽的夏日江之岛之旅。我们探索了洞穴，参观了神社，并欣赏了美丽的无敌海景。",
      ko: "상쾌한 여름에 에노시마 섬을 방문했습니다. 동굴을 탐험하고 신사를 방문하며 아름다운 바다 전망을 즐겼습니다."
    },
    youtubeVideoIds: ["kKTpbqljmMY"],
  },
  {
    id: 6,
    city: { ja: "伊豆半島", en: "Izu Peninsula", zh: "伊豆半岛", ko: "이즈 반도" },
    country: { ja: "日本", en: "Japan", zh: "日本", ko: "일본" },
    coordinates: [34.9756, 138.9324],
    description: {
      ja: "東伊豆半島は温泉地や美しい海岸線が魅力の観光エリア。豊かな自然と歴史を感じられる名所が多く、海と山の絶景を楽しめます。おすすめ - ・修善寺温泉エリア　・下田海中水族館　・白浜中央海水浴場　・大室山　・城ヶ崎海岸",
      en: "The Higashiizu Peninsula is a popular tourist area with hot springs and a beautiful coastline. There are many famous places where you can feel the rich nature and history, and enjoy the spectacular views of the sea and mountains. Recommended: Shuzenji Onsen Area, Shimoda Aquarium, Shirahama Central Beach, Mt. Omuroyama, Jogasaki Coast",
      zh: "东伊豆半岛是热门的旅游胜地，拥有温泉和美丽的海岸线。这里有许多著名景点，您可以感受丰富的自然和历史，欣赏壮丽的海景和山景。推荐景点：修善寺温泉区、下田水族馆、白滨中央海滩、大室山、城崎海岸",
      ko: "히가시이즈 반도는 온천지와 아름다운 해안선이 매력적인 관광지. 풍부한 자연과 역사를 느낄 수 있는 명소가 많아 바다와 산의 절경을 즐길 수 있습니다. 추천 - ・슈젠지 온천 에리어 ・시모다 해중 수족관 ・시라하마 중앙 해수욕장 ・오무로야마 ・시로가사키 해안"
    },
    youtubeVideoIds: ["14O9DM_pFTk"],
  },
  {
    id: 7,
    city: { ja: "三島", en: "Mishima", zh: "三岛", ko: "미시마" },
    country: { ja: "日本", en: "Japan", zh: "日本", ko: "일본" },
    coordinates: [35.1190, 138.9189],
    description: {
      ja: "おすすめ - ・三島スカイウォーク　・三島スカイウォークロングジップライン　・ドラゴンキャッスル（アスレチック）",
      en: "Recommended: Mishima Skywalk, Mishima Skywalk Long Zipline, Dragon Castle (Athletics)",
      zh: "我推荐：三岛天空步道、三岛天空步道长滑索、龙城（竞技）",
      ko: "추천 - · 미시마 스카이 워크 · 미시마 스카이 워크 롱 Zipline · 드래곤 캐슬 (애슬레틱)"
    },
    youtubeVideoIds: ["5RTXqt1cx6I"],
  },
  {
    id: 8,
    city: { ja: "プーケット", en: "Phuket", zh: "普吉岛", ko: "푸켓" },
    country: { ja: "タイ", en: "Thailand", zh: "泰国", ko: "태국" },
    coordinates: [7.8804, 98.3923],
    description: {
      ja: "1日目プーケット国際空港→Pamookkoo→昼食→Pamookkoo→Patong Beach付近　　2日目：ジップライン→タイ=仏教=仏教寺院→プーケットサンデーナイトマーケット　　3日目：KATA付近 散策　　4日目：KATA→Rawai→Banana Bay→ホテル→Rawai散策　　5日目：Rawai→ホテル　　6日目：ホテル→Phuket Jet Ski　Pamookkoo Resort　https://pamookkoo.katagroup.com/　Meet Holiday Hotel Rawai　https://meetholidayhotel.com/　　 Phuket Orchid Resort and Spa　https://orchid.katagroup.com/　　",
      en: "Day 1: Phuket International Airport → Pamookkoo → Lunch → Pamookkoo → Near Patong Beach Day 2: Zipline → Thailand = Buddhism = Buddhist Temple → Phuket Sunday Night Market Day 3: Stroll around KATA Day 4: KATA → Rawai → Banana Bay → Hotel → Stroll around Rawai Day 5: Rawai → Hotel Day 6: Hotel → Phuket Jet Ski Pamookkoo Resort https://pamookkoo.katagroup.com/ Meet Holiday Hotel Rawai https://meetholidayhotel.com/ Phuket Orchid Resort and Spa https://orchid.katagroup.com/ Amari Watergate Bangkok https://jp.amari.com/bangkok/",
      zh: "第 1 天：普吉国际机场 → Pamookkoo → 午餐 → Pamookkoo → 芭东海滩附近 第 2 天：Zipline → 泰国 = 佛教 = 佛寺 → 普吉岛周日夜市 第 3 天：卡塔周边漫步 第 4 天：卡塔 → 拉威 → 香蕉湾 → 酒店 → 拉威周边漫步 第 5 天：拉威 → 酒店 第 6 天：酒店 → 普吉岛摩托艇 Pamookkoo 度假村 https://pamookkoo.katagroup.com/ 遇见假日酒店拉威 https://meetholidayhotel.com/ 普吉岛兰花度假村及水疗中心 https://orchid.katagroup.com/ 曼谷阿玛瑞水门酒店 https://jp.amari.com/bangkok/",
      ko: "1일째 푸켓 국제공항→Pamookkoo→점심→Pamookkoo→Patong Beach 부근 2일째: Zipline→태국=불교=불교 사원→푸켓 선데이 나이트 마켓 3일째: KATA 부근 산책 4일째: KATA→Rawai Bay→호텔→Rawai 산책 5일째:Rawai→호텔6일째:호텔→Phuket Jet Ski Pamookkoo Resort https://pamookkoo.katagroup.com/Meet Holiday Hotel RawaiSpa https://orchid.katagroup.com/아마리 워터 게이트 방콕 https://kr.amari.com/bangkok/"
    },
    youtubeVideoIds: ["EUCeTnRvCWM"],
  },
  {
    id: 9,
    city: { ja: "バンコク", en: "Bangkok", zh: "曼谷", ko: "방콕" },
    country: { ja: "タイ", en: "Thailand", zh: "泰国", ko: "태국" },
    coordinates: [13.7563, 100.5018],
    description: {
      ja: "ドンムアン国際空港→アマリウォーターゲートバンコクhttps://jp.amari.com/bangkok/ →　キングパワー・マハナコンタワー→centralwOrld→オレンジライン（船）→ICONSIAM　　下記動画では1:00:00からです",
      en: "Don Mueang International Airport → Amari Watergate Bangkok https://jp.amari.com/bangkok/ → King Power Mahanakhon Tower → centralwOrld → Orange Line (ship) → ICONSIAM",
      zh: "廊曼国际机场 → 曼谷阿玛瑞水门酒店 https://jp.amari.com/bangkok/ → 王权大京都大厦 → centralwOrld → 橙线（船）→ ICONSIAM",
      ko: "돈무앙 국제공항→아마리 워터게이트 방콕"
    },
    youtubeVideoIds: ["EUCeTnRvCWM"],
  },
];