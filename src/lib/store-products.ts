// ============================================================
// 笨蛋号铺 · 商品数据（改价格 / 加商品只动这个文件）
// 定价规则：货源价 ×1.5 左右，尾数 .9
// 补货 / 调价流程：curl 货源 API → scripts 流程 → 更新本文件 → push
// ============================================================

export interface StoreItem {
  name: string;
  price: number;
  hot: boolean;
}

export interface StoreGroup {
  id: string;
  name: string;
  items: StoreItem[];
}

export const STORE_GROUPS: StoreGroup[] = [
  {
    id: 'tg-hot',
    name: '🔥 TG 电报号 · 满月精品',
    items: [
      { name: "美国 ＋1 API链接 精养99天＋ 稳定推荐👍👍【店主推荐】", price: 23.9, hot: true },
      { name: "🏴‍☠️混合国家老号 ｢双向号｣✦ API 秒连 撸毛稳荐", price: 19.9, hot: true },
      { name: "美国＋1 精养半年＋镇店之宝防冻结推荐👍👍👍", price: 25.9, hot: true },
      { name: "孟加拉＋880 满月沉淀 ✦ API 【2-5月】", price: 22.9, hot: true },
      { name: "哥伦比亚＋57实卡注册 ✦ API 秒连", price: 22.9, hot: true },
      { name: "缅甸 95 满月沉淀 ✦ API 秒连【2-5月】促销👍", price: 22.9, hot: true },
      { name: "尼日利亚＋234 满月沉淀 ✦ API 秒连", price: 22.9, hot: true },
      { name: "加拿大＋1【6-9月沉淀】 ✦ API 秒连", price: 23.9, hot: true },
      { name: "古巴＋53 高质量1-7年随机发", price: 25.9, hot: true },
      { name: "TG号＋单月电报会员【促销】", price: 17.9, hot: true },
      { name: "实卡美国＋1 真机注册 API秒连", price: 31.9, hot: true },
      { name: "阿尔及利亚 213 满月沉淀 ✦ API 秒连", price: 23.9, hot: true },
      { name: "香港＋852 满月沉淀 ✦ API 秒连", price: 38.9, hot: false },
      { name: "尼泊尔＋977 满月沉淀 ✦ API 秒连", price: 25.9, hot: false },
    ],
  },
  {
    id: 'tg-old',
    name: 'TG 老号 · 半年 / 年号专区',
    items: [
      { name: "🇺🇸+1美国 6-12月", price: 35.9, hot: true },
      { name: "🇮🇳+91印度 6-12月", price: 33.9, hot: true },
      { name: "🇲🇲+95缅甸 6-12月", price: 35.9, hot: false },
      { name: "🇮🇳+91印度 2年以上", price: 37.9, hot: false },
      { name: "🇨🇴+57哥伦比亚 6-12月", price: 37.9, hot: false },
      { name: "🇨🇱+56智利 1年以上", price: 37.9, hot: false },
      { name: "🇮🇷+98伊朗 1年以上", price: 42.9, hot: false },
      { name: "🇳🇬+234尼日利亚 6-12月", price: 34.9, hot: false },
      { name: "🇪🇬+20埃及 2年以上", price: 45.9, hot: false },
      { name: "🇲🇦+212摩洛哥 1年以上", price: 39.9, hot: false },
      { name: "🇲🇲+95缅甸 1年以上", price: 39.9, hot: false },
      { name: "🇳🇬+234尼日利亚 1年以上", price: 36.9, hot: false },
    ],
  },
  {
    id: 'tg-vip',
    name: 'TG 靓号 · 稀缺会员',
    items: [
      { name: "+6666泰国靓号 API秒上", price: 58.9, hot: true },
      { name: "+666 泰国靓号 API秒上", price: 49.9, hot: false },
      { name: "＋222靓号 API链接", price: 49.9, hot: false },
      { name: "＋2222靓号 高端定制API链接", price: 53.9, hot: false },
      { name: "🇺🇸+1美国（3个月-3年老号）会员盲盒随机天数", price: 57.9, hot: false },
      { name: "🇺🇸+1美国 三天会员 11.6过期", price: 45.9, hot: false },
      { name: "🇺🇳混合国家（30天-365天会员）", price: 84.9, hot: false },
      { name: "🇺🇳混合国家 会员VIP（盲盒低于两天可退换）", price: 57.9, hot: false },
    ],
  },
  {
    id: 'x',
    name: '𝕏 推特账号',
    items: [
      { name: "推特/X｜2019–2025年注册｜Hotmail邮箱可用｜开启2fa ｜支持token", price: 22.9, hot: true },
      { name: "推特/X 老号｜2006–2018年注册｜微软邮箱可用｜2FA+Token登录 🔥", price: 23.9, hot: true },
      { name: "Twitter | 已启用 2FA。注册年份：2010–2020。已通过 @hotmail.com/outlook.com 邮箱验证，邮箱包含在内。个人资料已部分填写。注册国家/地区：MIX。", price: 33.9, hot: true },
      { name: "推特/X｜2019–2025年注册｜手机已验证｜微软邮箱可用｜2FA+Token 🔥", price: 24.9, hot: true },
      { name: "2006-2025-（热门搜索热门外显号）无暗影封禁——hotmail |2FA或令牌登录", price: 25.9, hot: false },
      { name: "Twitter | 已启用 2FA。注册年份：2010–2020。已通过 @hotmail.com/outlook.com 邮箱验证，邮箱包含在内。个人资料已部分填写。注册国家/地区：美国。", price: 33.9, hot: false },
      { name: "Twitter | 已启用 2FA。新增：100 + 位粉丝。注册年份：2010–2020。已通过 @hotmail.com/outlook.com 邮箱验证，邮箱包含在内。注册国家/地区：MIX。", price: 41.9, hot: false },
      { name: "Twitter | 已启用 2FA。注册年份：2021。已通过手机号码验证。已通过 @hotmail.com/outlook.com 邮箱验证，邮箱包含在内。个人资料已部分填写。注册国家/地区：MIX。", price: 34.9, hot: false },
      { name: "Twitter | 已启用 2FA。注册年份：2020。已通过手机号码验证。已通过 @hotmail.com/outlook.com 邮箱验证，邮箱包含在内。个人资料已部分填写。注册国家/地区：MIX。", price: 34.9, hot: false },
      { name: "Twitter | 已启用 2FA。注册年份：2011。已通过 @hotmail.com/outlook.com 邮箱验证，邮箱包含在内。个人资料已部分填写。注册国家/地区：MIX。", price: 36.9, hot: false },
      { name: "Twitter新号｜已开启2FA｜真实手机设备注册｜绑定iCloud邮箱(不可用)｜附带Auth Token/CT0", price: 18.9, hot: false },
      { name: "推特/X 老号｜2006–2018年注册｜手机已验证｜微软邮箱可用｜2FA+Token 🔥", price: 25.9, hot: false },
    ],
  },
  {
    id: 'ig',
    name: 'Instagram 账号',
    items: [
      { name: "Instagram 优质账号-混合IP-2FA开启", price: 18.9, hot: true },
      { name: "Instagram | 已启用 2FA。注册年份：2023-2025。已通过 @firstmail.ltd 邮箱验证，邮箱包含在内。已通过手机号验证。注册国家/地区：MIX。", price: 26.9, hot: true },
      { name: "Instagram｜2026年04月注册｜API自动注册｜已开启2FA", price: 23.9, hot: true },
      { name: "Instagram | 已开启 2FA。已通过手机号验证。注册国家：日本。", price: 20.9, hot: true },
      { name: "Instagram｜2026年05月注册｜API自动注册｜已开启2FA", price: 22.9, hot: true },
      { name: "Instagram 注册1–30 天-邮箱手机绑定-2FA", price: 19.9, hot: true },
      { name: "Instagram 2025年4月老号-邮箱绑定支持Cookie登录-已开启2FA", price: 28.9, hot: true },
      { name: "Instagram | 已启用 2FA。已通过邮箱或手机号验证。注册国家/地区：MIX。", price: 18.9, hot: false },
      { name: "Instagram 最大 Reels 浏览量。10+ 天 老号。API。真实手机。IAM 格式。IP随机", price: 18.9, hot: false },
      { name: "Instagram新号｜手机号注册｜2FA已开启｜已设置头像", price: 23.9, hot: false },
      { name: "Instagram 2023老号已养号-可Cookie登录-已开启2FA", price: 39.9, hot: false },
      { name: "Instagram账号｜混合IP｜已开启2FA｜高品质", price: 18.9, hot: false },
    ],
  },
  {
    id: 'fb',
    name: 'Facebook 账号',
    items: [
      { name: "1 年 老号 2FA FACEBOOK 账号｜IP随机", price: 19.9, hot: true },
      { name: "2FA FACEBOOK 账号｜手工注册", price: 17.9, hot: false },
      { name: "14 天前的 Android Facebook 账户。Cookie JSON。高质量", price: 18.9, hot: false },
      { name: "FACEBOOK 账号 USA. 2FA. 长期存活. 真实 PHONE 注册", price: 19.9, hot: false },
      { name: "Facebook 越南账号｜2025年注册｜0好友｜已开启2FA｜已添加 TempMail.plus 邮箱", price: 23.9, hot: false },
      { name: "ANDROID FACEBOOK 账户。2FA。COOKIE JSON。高品质", price: 18.9, hot: false },
      { name: "Facebook外国姓名账号｜2025年注册｜0个好友｜已开启2FA｜已添加TempMail.Plus临时邮箱", price: 23.9, hot: false },
      { name: "Facebook 香港IP-UID 615x-10–500好友-Hotmail可信邮箱-已开启2FA", price: 61.9, hot: false },
      { name: "Facebook 越南已养号7–9个月-20–200个好友-5–20条帖子-可用于广告-已开启2FA", price: 63.9, hot: false },
      { name: "Facebook 女性老账号-Hotmail可信-2000–5000好友-未开启2FA", price: 211.9, hot: false },
      { name: "Facebook 美国账号-已养号-已开启2FA", price: 37.9, hot: false },
      { name: "Facebook账号｜Gmail邮箱已验证｜安卓设备注册｜稳定性强", price: 19.9, hot: false },
    ],
  },
  {
    id: 'gmail',
    name: '谷歌邮箱 Gmail',
    items: [
      { name: "【优质】全新个人谷歌Gmail邮箱（混合注册7天以上/2FA/直登不弹验证）", price: 25.9, hot: true },
      { name: "gmail老号2025|混合ip|带2fa|个别使用痕迹100%登录|非常推荐⭐️⭐️⭐️⭐️⭐️⭐️", price: 30.9, hot: true },
      { name: "【美区一手新号】gmail|pc直登|稳定满月|开启2fa|人名格式|高性价比|推荐☀️☀️", price: 30.9, hot: true },
      { name: "【一手全新】优质gmail｜全球随机ip｜ios|pc直登不扫码|人名格式", price: 25.9, hot: true },
      { name: "gmail2025-2026|至少半年以上老号|混合地区ip|已开启2fa|稳定推荐⭐⭐⭐⭐⭐", price: 29.9, hot: true },
      { name: "【美区一手新号】gmail|pc直登|稳定无2fa带辅助|人名格式|高性价比|推荐☀️☀️", price: 29.9, hot: true },
      { name: "gmail老号2020-2024|混合ip|带2fa|个别使用痕迹", price: 29.9, hot: true },
      { name: "教育eud邮箱类型|多域名混合--二手号", price: 17.9, hot: true },
      { name: "gmail老号2023-2025|混合ip|带2fa|个别使用痕迹", price: 29.9, hot: true },
      { name: "gmail老号2024-2026|混合ip|带2fa|个别使用痕迹|推荐⭐️⭐️", price: 29.9, hot: true },
    ],
  },
  {
    id: 'apple',
    name: '苹果 ID / 礼品卡',
    items: [
      { name: "租号下载小火剪", price: 30.9, hot: true },
      { name: "美国 | 小火箭老成品号", price: 50.9, hot: true },
      { name: "美国老苹果ID (独享  可下载APP)", price: 26.9, hot: true },
      { name: "租号下载小火箭 · 永久可用 · 持续维护", price: 38.9, hot: true },
      { name: "美国老苹果ID", price: 31.9, hot: true },
      { name: "美国老苹果ID（已开通iCloud）", price: 35.9, hot: true },
      { name: "美国 | 小火煎成品老号（已激活iCloud）", price: 59.9, hot: true },
      { name: "香港老苹果ID", price: 31.9, hot: true },
      { name: "日本老苹果ID", price: 31.9, hot: false },
      { name: "日本老苹果ID（已开通iCloud）", price: 35.9, hot: false },
    ],
  },
  {
    id: 'ai',
    name: 'AI 会员充值',
    items: [
      { name: "GPT Go 充值月卡卡密(卡付)", price: 78.9, hot: false },
      { name: "Claude Max 5X 充值月卡 (美区卡付)", price: 1420.9, hot: false },
      { name: "Claude Max 20X 充值月卡 (美区卡付)", price: 2863.9, hot: false },
      { name: "ChatGPT Plus 菲区半价优惠代充卡密", price: 125.9, hot: false },
      { name: "Suno Premier 自助充值月卡", price: 416.9, hot: false },
      { name: "Grok·X·Cursor 三合一订阅 Plus 月卡", price: 114.9, hot: false },
      { name: "Grok·X·Cursor 三合一订阅 Premium 月卡", price: 426.9, hot: false },
      { name: "Grok·X·Cursor 三合一订阅 Super 月卡", price: 1381.9, hot: false },
      { name: "Grok·X·Cursor 三合一订阅 Ultra 月卡", price: 2746.9, hot: false },
      { name: "GPT PRO 50X 埃及区充值1个月(500刀版本)", price: 5769.9, hot: false },
      { name: "GPT PRO 5X 埃及区充值1个月", price: 1176.9, hot: false },
      { name: "GPT 50X PRO 充值卡密(iOS美区质保)", price: 6022.9, hot: false },
    ],
  },
  {
    id: 'discord',
    name: 'Discord 账号',
    items: [
      { name: "Discord | 年龄：2+ 个月。已通过 @rambler.ru 邮箱验证，邮箱随账号一起提供。注册国家/地区：MIX.", price: 18.9, hot: false },
      { name: "Discord | 已启用 2FA。已通过 @gmail.com 邮箱验证。已通过手机号验证。注册国家：MIX。", price: 18.9, hot: false },
      { name: "Discord | 年龄：6+ 个月。 已通过 @firstmail.ltd 邮箱验证，邮箱随账号提供。注册国家：MIX。", price: 18.9, hot: false },
      { name: "Discord | 注册年份：2025。已通过 @rambler.ru 邮箱验证，邮箱随账号提供。已通过手机号码验证。Token随账号提供。注册国家：MIX。", price: 22.9, hot: false },
      { name: "Discord | 年龄：1+ 个月。已通过 @rambler.ru 邮箱验证，邮箱随账号一起提供。部分通过手机号验证。注册国家/地区：MIX.", price: 18.9, hot: false },
      { name: "Discord | 年龄：3+ 个月。 已通过 @rambler.ru 邮箱验证，邮箱随账号提供。已通过手机号码验证。注册国家：MIX。", price: 18.9, hot: false },
      { name: "Discord | 已启用 2FA。注册年份：2024。已通过 @mail.com 邮箱验证，邮箱包含在内。注册国家/地区：MIX。", price: 28.9, hot: false },
      { name: "Discord | 已启用 2FA。注册年份：2023。已通过 @mail.com 邮箱验证，邮箱包含在内。注册国家/地区：MIX。", price: 29.9, hot: false },
    ],
  },
  {
    id: 'ms',
    name: '微软 Outlook 白号',
    items: [
      { name: "英国满月白(outlook注册-带接码链接)", price: 21.9, hot: true },
      { name: "新加坡满月白(outlook注册-带接码链接)", price: 21.9, hot: true },
      { name: "日本满月白user开头(outlook注册----带邮箱接码API)", price: 20.9, hot: false },
      { name: "日本满月白(outlook注册-带接码链接)", price: 21.9, hot: false },
      { name: "韩国满月白(outlook注册-带接码链接)", price: 21.9, hot: false },
      { name: "台湾满月白(outlook注册-带接码链接)", price: 21.9, hot: false },
      { name: "台湾满3个月白号（outlook注册-带接码链接）", price: 25.9, hot: false },
      { name: "新加坡满3个月白号（outlook注册-带接码链接）", price: 23.9, hot: false },
      { name: "法国满月白(outlook注册-带接码链接)", price: 21.9, hot: false },
      { name: "马来满月白(outlook注册-带接码链接)", price: 21.9, hot: false },
      { name: "英国满3个月白号（outlook注册-带接码链接）", price: 23.9, hot: false },
    ],
  },
];
