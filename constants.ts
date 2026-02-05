import { MenuItem, GalleryItem, CouponItem, ReviewItem, FaqItem, StaffItem } from './types';

export const PROBLEM_LIST = [
  "ジェルネイルの繰り返しで爪が薄くなった",
  "すぐに浮いたり欠けたりしてしまう",
  "定額サロンだと可愛いデザインがない",
  "オフの時に熱さや痛みを感じる"
];

export const STRONG_POINTS = [
  {
    title: "自爪を削らない「パラジェル」",
    description: "爪表面を削らずにジェルを密着させるため、健康な爪のままネイルを楽しめます。",
    icon: "fa-hand-sparkles"
  },
  {
    title: "高技術スタッフによる「美フォルム」",
    description: "ただ塗るだけでなく、爪の形を整え、横から見ても美しいアーチを作ります。",
    icon: "fa-gem"
  },
  {
    title: "毎月変わる「トレンド定額デザイン」",
    description: "流行を取り入れた大人可愛いデザインを、リーズナブルな定額プライスでご用意。",
    icon: "fa-palette"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, image: "https://placehold.co/600x600/fbcfe8/831843?text=Nuance", title: "大人ニュアンス", category: "Nuance" },
  { id: 2, image: "https://placehold.co/600x600/fce7f3/831843?text=One+Color", title: "オフィス上品", category: "Simple" },
  { id: 3, image: "https://placehold.co/600x600/fdf2f8/831843?text=French", title: "王道フレンチ", category: "French" },
  { id: 4, image: "https://placehold.co/600x600/fae8ff/831843?text=Magnet", title: "旬のマグネット", category: "Trend" },
];

export const MENU_ITEMS: MenuItem[] = [
  { name: "ワンカラー / ラメグラ", price: "5,500円" },
  { name: "定額シンプルコース", price: "6,980円" },
  { name: "定額トレンドコース", price: "7,980円" },
  { name: "持ち込みデザイン", price: "8,980円〜" },
  { name: "他店オフ（付替）", price: "初回無料" },
];

export const STAFF_MEMBERS: StaffItem[] = [
  {
    id: 1,
    name: "桜井 美樹",
    role: "Owner Nailist",
    image: "https://placehold.co/400x400/fbcfe8/831843?text=Miki",
    message: "「爪が薄い」「形に自信がない」そんなお悩みもぜひご相談ください。お客様一人ひとりのライフスタイルに合わせ、一番美しく見える指先をプロデュースします。",
    tags: ["パラジェル講師", "似合わせカラー"]
  },
  {
    id: 2,
    name: "伊藤 結衣",
    role: "Top Nailist",
    image: "https://placehold.co/400x400/fce7f3/831843?text=Yui",
    message: "トレンドを取り入れた大人可愛いデザインが得意です。手描きのフラワーアートやニュアンスネイルならお任せください！一緒に「可愛い」を作りましょう♪",
    tags: ["手描きアート", "トレンドデザイン"]
  },
  {
    id: 3,
    name: "佐藤 華",
    role: "Nailist",
    image: "https://placehold.co/400x400/fae8ff/831843?text=Hana",
    message: "丁寧なケアとマッサージに定評があります。ネイルの時間が日々の癒しになるよう、笑顔でおもてなしさせていただきます。シンプル上品なネイルが好きです。",
    tags: ["丁寧なケア", "オフィスネイル"]
  }
];

export const OFFER_COUPON: CouponItem = {
  title: "New Guest Coupon",
  subtitle: "ご新規様限定キャンペーン",
  price: "5,980円",
  originalPrice: "7,980円",
  conditions: ["平日限定", "定額トレンドコース (オフ込)"]
};

export const FLOW_STEPS = [
  { title: "丁寧なカウンセリング", desc: "お爪の状態やお悩み、ご希望のデザインをお伺いします。" },
  { title: "ドライケア・甘皮処理", desc: "Mimiが最も重視する工程。美しい仕上がりの土台を作ります。" },
  { title: "ジェル塗布・アート", desc: "パラジェルを使用し、丁寧にデザインを施します。" },
  { title: "保湿オイルでお仕上げ", desc: "指先までしっかりと保湿して完了です。" }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 1,
    content: "初めてのパラジェルでしたが、丁寧に説明していただき安心して施術を受けられました。仕上がりもとても綺麗で満足です！",
    user: "Y.K様",
    age: "20代"
  },
  {
    id: 2,
    content: "毎月トレンドのデザインが変わるので楽しみです。オフィスでも浮かない上品なデザインが多くて助かっています。",
    user: "M.S様",
    age: "30代"
  },
  {
    id: 3,
    content: "スタッフの方の対応が素晴らしく、居心地の良いサロンです。爪の悩みも相談に乗ってくれるので信頼しています。",
    user: "A.T様",
    age: "30代"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "予約は必要ですか？",
    answer: "はい、当サロンは完全予約制となっております。ホットペッパービューティー、またはお電話にてご予約をお願いいたします。"
  },
  {
    question: "ジェルネイルはどれくらい持ちますか？",
    answer: "個人差はありますが、ハンドで約3〜4週間、フットで約4〜6週間程度楽しんでいただけます。"
  },
  {
    question: "クレジットカードは使えますか？",
    answer: "はい、VISA / Master / JCB / AMEX / Diners がご利用いただけます。"
  },
  {
    question: "オフのみでも利用できますか？",
    answer: "はい、可能です。自店オフ、他店オフともに承っております。"
  }
];

export const AI_SYSTEM_INSTRUCTION = `
あなたはネイルサロン「Mimi (ミミ)」の専属AIデザインコンサルタントです。
お客様の「今の気分」「行く予定のイベント」「好きな色」「服装の系統」などの入力に対して、
Mimiのコンセプトである「大人可愛い」「上品」なネイルデザインを提案してください。

Mimiの特徴：
- 自爪を削らないパラジェル認定サロン
- オフィスでも浮かない上品なトレンドデザインが得意
- 肌馴染みの良いピンクやベージュ系のカラーが豊富

トーン＆マナー：
- 20代〜30代の女性に好かれる、柔らかく丁寧な口調。
- 共感を示し、提案は具体的かつ魅力的に。
- 絵文字を適度に使用（💅✨🌸など）。

回答の構成例：
1. 共感（「春らしいイベントですね🌸」など）
2. 具体的なデザイン提案（「シアーなピンクベージュに、先端ラメラインはいかがでしょうか？」など）
3. おすすめポイント（「指先が長く見え、オフィスでも好印象ですよ✨」）
`;