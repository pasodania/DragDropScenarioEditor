var popmenuitem_icon = [
{label: "左に表示", value: "left"},
{label: "右に表示", value: "right"},
{label: "メッセージ枠に表示", value: "msg"}
];

var popmenuitem_pop = [
{label: "左に表示", value: "left"},
{label: "右に表示", value: "right"}
];

/* とりあえず必須パラメータではないので一旦止めとく* /
var popmenuitem_bg = [
{label: "フェード", value: ""},
{label: "スライド", value: "slide"},
{label: "ズームイン", value: "zoomIn"},
{label: "ダーク", value: "dark"},
{label: "クロスフェードもどき", value: "trans"},
];
/* */

var cmd_ols = [
{type: "ol", label: "ラベル"          , value: "[label:ラベル名(半角)]"},
{type: "ol", label: "ラベル移動"      , value: "[goto:移動先ラベル名]"},
{type: "ol", label: "選択肢"          , value: "[select:選択肢名:移動先ラベル名]"},
];

var cmd_icons = [
{type: "icon", label: "キャラを消す", value:  "empty::icon:"},
{type: "icon", label: "モブキャラ", value:  "sp_mob::icon:名前"},
{type: "icon", label: "霊夢", value:  "reimu::icon:"},
{type: "icon", label: "魔理沙", value:  "marisa::icon:"},
{type: "icon", label: "ルーミア", value:  "rumia::icon:"},
{type: "icon", label: "大妖精", value:  "daiyousei::icon:"},
{type: "icon", label: "チルノ", value:  "cirno::icon:"},
{type: "icon", label: "美鈴", value:  "meirin::icon:"},
{type: "icon", label: "小悪魔", value:  "koakuma::icon:"},
{type: "icon", label: "パチュリー", value:  "patyu::icon:"},
{type: "icon", label: "咲夜", value:  "sakuya::icon:"},
{type: "icon", label: "レミリア", value:  "remilia::icon:"},
{type: "icon", label: "フラン", value:  "flan::icon:"},
{type: "icon", label: "レティ", value:  "letty::icon:"},
{type: "icon", label: "橙", value:  "chen::icon:"},
{type: "icon", label: "アリス", value:  "alice::icon:"},
{type: "icon", label: "上海人形", value:  "syanhai::icon:"},
{type: "icon", label: "リリーホワイト", value:  "lily::icon:"},
{type: "icon", label: "ルナサ", value:  "runasa::icon:"},
{type: "icon", label: "メルラン", value:  "merupo::icon:"},
{type: "icon", label: "リリカ", value:  "ririka::icon:"},
{type: "icon", label: "プリズムリバー三姉妹", value:  "niji::icon:"},
{type: "icon", label: "妖夢", value:  "youmu::icon:"},
{type: "icon", label: "幽々子", value:  "yuyuko::icon:"},
{type: "icon", label: "八雲 藍", value:  "ran::icon:"},
{type: "icon", label: "八雲 紫", value:  "yukari::icon:"},
{type: "icon", label: "リグル", value:  "nightbug::icon:"},
{type: "icon", label: "ミスティア", value:  "mystia::icon:"},
{type: "icon", label: "慧音", value:  "keine::icon:"},
{type: "icon", label: "てゐ", value:  "tewi::icon:"},
{type: "icon", label: "うどんげ", value:  "udongein::icon:"},
{type: "icon", label: "永琳", value:  "eirin::icon:"},
{type: "icon", label: "輝夜", value:  "kaguya::icon:"},
{type: "icon", label: "妹紅", value:  "mokou::icon:"},
{type: "icon", label: "萃香", value:  "suika::icon:"},
{type: "icon", label: "リリーブラック", value:  "lily_b::icon:"},
{type: "icon", label: "メディスン", value:  "medicine::icon:"},
{type: "icon", label: "射命丸文", value:  "aya::icon:"},
{type: "icon", label: "風見 幽香", value:  "yuuka::icon:"},
{type: "icon", label: "小町", value:  "komachi::icon:"},
{type: "icon", label: "ヤマザナドゥ", value:  "eiki::icon:"},
{type: "icon", label: "宇佐見 蓮子", value:  "renko::icon:"},
{type: "icon", label: "マエリベリー", value:  "maeri::icon:"},
{type: "icon", label: "阿求", value:  "akyu::icon:"},
{type: "icon", label: "森近 霖之助", value:  "korin::icon:"},
{type: "icon", label: "サニーミルク", value:  "sunny::icon:"},
{type: "icon", label: "スターサファイア", value:  "star::icon:"},
{type: "icon", label: "ルナチャイルド", value:  "luna::icon:"},
{type: "icon", label: "朱鷺子", value:  "toki::icon:"},
{type: "icon", label: "秋静葉", value:  "sizuha::icon:"},
{type: "icon", label: "秋穣子", value:  "minoriko::icon:"},
{type: "icon", label: "鍵山 雛", value:  "hina::icon:"},
{type: "icon", label: "河城 にとり", value:  "nitori::icon:"},
{type: "icon", label: "犬走 椛", value:  "momizi::icon:"},
{type: "icon", label: "東風谷 早苗", value:  "sanae::icon:"},
{type: "icon", label: "八坂 神奈子", value:  "kanako::icon:"},
{type: "icon", label: "洩矢 諏訪子", value:  "suwako::icon:"},
{type: "icon", label: "綿月 豊姫", value:  "toyohime::icon:"},
{type: "icon", label: "綿月 依姫", value:  "yorihime::icon:"},
{type: "icon", label: "レイセン", value:  "reisen::icon:"},
{type: "icon", label: "月の都の門番", value:  "monban::icon:"},
{type: "icon", label: "永江 衣玖", value:  "iku::icon:"},
{type: "icon", label: "比那名居 天子", value:  "tenko::icon:"},
{type: "icon", label: "キスメ", value:  "kisume::icon:"},
{type: "icon", label: "黒谷 ヤマメ", value:  "yamame::icon:"},
{type: "icon", label: "水橋 パルスィ", value:  "parsee::icon:"},
{type: "icon", label: "星熊 勇儀", value:  "yugi::icon:"},
{type: "icon", label: "古明地 さとり", value:  "satori::icon:"},
{type: "icon", label: "火焔猫 燐", value:  "orin::icon:"},
{type: "icon", label: "霊烏路 空", value:  "utsuho::icon:"},
{type: "icon", label: "古明地 こいし", value:  "koishi::icon:"},
{type: "icon", label: "ヤゴコロ", value:  "yagokoro::icon:"},
{type: "icon", label: "ナズーリン", value:  "nazrin::icon:"},
{type: "icon", label: "多々良 小傘", value:  "kogasa::icon:"},
{type: "icon", label: "雲居 一輪", value:  "ichirin::icon:"},
{type: "icon", label: "雲山", value:  "unzan::icon:"},
{type: "icon", label: "村紗 水蜜", value:  "minamitsu::icon:"},
{type: "icon", label: "寅丸 星", value:  "syou::icon:"},
{type: "icon", label: "聖 白蓮", value:  "byakuren::icon:"},
{type: "icon", label: "封獣 ぬえ", value:  "nue::icon:"},
{type: "icon", label: "大ナマズ", value:  "namazu::icon:"},
{type: "icon", label: "姫海棠 はたて", value:  "hatate::icon:"},
{type: "icon", label: "EXルーミア", value:  "EXrumia::icon:"},
{type: "icon", label: "EX慧音", value:  "EXkeine::icon:"},
{type: "icon", label: "EXリグル", value:  "EXriguru::icon:"},
{type: "icon", label: "博麗靈夢", value:  "reimu2::icon:"},
{type: "icon", label: "神玉1", value:  "singyoku1::icon:"},
{type: "icon", label: "神玉2", value:  "singyoku2::icon:"},
{type: "icon", label: "幽幻魔眼", value:  "yuugen::icon:"},
{type: "icon", label: "エリス", value:  "eris::icon:"},
{type: "icon", label: "サリエル", value:  "sariel::icon:"},
{type: "icon", label: "魅魔", value:  "mima::icon:"},
{type: "icon", label: "菊理", value:  "kikuri::icon:"},
{type: "icon", label: "矜羯羅", value:  "kongara::icon:"},
{type: "icon", label: "玄爺", value:  "genjii::icon:"},
{type: "icon", label: "里香", value:  "rika::icon:"},
{type: "icon", label: "EX里香", value:  "EXrika::icon:"},
{type: "icon", label: "明羅", value:  "meira::icon:"},
{type: "icon", label: "霧雨魔梨沙", value:  "marisa2::icon:"},
{type: "icon", label: "エレン", value:  "ellen::icon:"},
{type: "icon", label: "小兎姫", value:  "kotohime::icon:"},
{type: "icon", label: "カナ＝アナベラル", value:  "kana::icon:"},
{type: "icon", label: "朝倉理香子", value:  "rikako::icon:"},
{type: "icon", label: "北白河ちゆり", value:  "tiyuri::icon:"},
{type: "icon", label: "岡崎夢美", value:  "yumemi::icon:"},
{type: "icon", label: "る～こと", value:  "ru-koto::icon:"},
{type: "icon", label: "オレンジ", value:  "orange::icon:"},
{type: "icon", label: "くるみ", value:  "kurumi::icon:"},
{type: "icon", label: "エリー", value:  "eri::icon:"},
{type: "icon", label: "旧作幽香", value:  "yuuka2::icon:"},
{type: "icon", label: "幻月", value:  "gengetu::icon:"},
{type: "icon", label: "夢月", value:  "mugetu::icon:"},
{type: "icon", label: "サラ", value:  "sara::icon:"},
{type: "icon", label: "ルイズ", value:  "ruiz::icon:"},
{type: "icon", label: "旧作アリス", value:  "alice2::icon:"},
{type: "icon", label: "ユキ", value:  "yuki::icon:"},
{type: "icon", label: "マイ", value:  "mai::icon:"},
{type: "icon", label: "夢子", value:  "yumeko::icon:"},
{type: "icon", label: "神綺", value:  "shinki::icon:"},
{type: "icon", label: "茨木 華扇", value:  "kasen::icon:"},
];


var cmd_pops = [
{type: "pop", value: "empty::pop:", label: "キャラを消す"},
{type: "pop", value: "reimu::pop:", label: "霊夢"},
{type: "pop", value: "marisa::pop:", label: "魔理沙"},
{type: "pop", value: "rumia::pop:", label: "ルーミア"},
{type: "pop", value: "daiyousei::pop:", label: "大妖精"},
{type: "pop", value: "cirno::pop:", label: "チルノ"},
{type: "pop", value: "meirin::pop:", label: "美鈴"},
{type: "pop", value: "koakuma::pop:", label: "小悪魔"},
{type: "pop", value: "patyu::pop:", label: "パチュリー"},
{type: "pop", value: "sakuya::pop:", label: "咲夜"},
{type: "pop", value: "remilia::pop:", label: "レミリア"},
{type: "pop", value: "flan::pop:", label: "フラン"},
{type: "pop", value: "letty::pop:", label: "レティ"},
{type: "pop", value: "chen::pop:", label: "橙"},
{type: "pop", value: "alice::pop:", label: "アリス"},
{type: "pop", value: "lily::pop:", label: "リリーホワイト"},
{type: "pop", value: "runasa::pop:", label: "ルナサ"},
{type: "pop", value: "merupo::pop:", label: "メルラン"},
{type: "pop", value: "ririka::pop:", label: "リリカ"},
{type: "pop", value: "youmu::pop:", label: "妖夢"},
{type: "pop", value: "yuyuko::pop:", label: "幽々子"},
{type: "pop", value: "ran::pop:", label: "八雲 藍"},
{type: "pop", value: "yukari::pop:", label: "八雲 紫"},
{type: "pop", value: "nightbug::pop:", label: "リグル"},
{type: "pop", value: "mystia::pop:", label: "ミスティア"},
{type: "pop", value: "keine::pop:", label: "慧音"},
{type: "pop", value: "tewi::pop:", label: "てゐ"},
{type: "pop", value: "udongein::pop:", label: "うどんげ"},
{type: "pop", value: "eirin::pop:", label: "永琳"},
{type: "pop", value: "kaguya::pop:", label: "輝夜"},
{type: "pop", value: "mokou::pop:", label: "妹紅"},
{type: "pop", value: "suika::pop:", label: "萃香"},
{type: "pop", value: "medicine::pop:", label: "メディスン"},
{type: "pop", value: "aya::pop:", label: "射命丸文"},
{type: "pop", value: "yuuka::pop:", label: "風見 幽香"},
{type: "pop", value: "komachi::pop:", label: "小町"},
{type: "pop", value: "eiki::pop:", label: "ヤマザナドゥ"},
{type: "pop", value: "renko::pop:", label: "宇佐見 蓮子"},
{type: "pop", value: "maeri::pop:", label: "マエリベリー"},
{type: "pop", value: "akyu::pop:", label: "阿求"},
{type: "pop", value: "korin::pop:", label: "森近 霖之助"},
{type: "pop", value: "sunny::pop:", label: "サニーミルク"},
{type: "pop", value: "star::pop:", label: "スターサファイア"},
{type: "pop", value: "luna::pop:", label: "ルナチャイルド"},
{type: "pop", value: "sizuha::pop:", label: "秋静葉"},
{type: "pop", value: "minoriko::pop:", label: "秋穣子"},
{type: "pop", value: "hina::pop:", label: "鍵山 雛"},
{type: "pop", value: "nitori::pop:", label: "河城 にとり"},
{type: "pop", value: "momizi::pop:", label: "犬走 椛"},
{type: "pop", value: "sanae::pop:", label: "東風谷 早苗"},
{type: "pop", value: "kanako::pop:", label: "八坂 神奈子"},
{type: "pop", value: "suwako::pop:", label: "洩矢 諏訪子"},
{type: "pop", value: "yorihime::pop:", label: "綿月 依姫"},
{type: "pop", value: "iku::pop:", label: "永江 衣玖"},
{type: "pop", value: "tenko::pop:", label: "比那名居 天子"},
{type: "pop", value: "kisume::pop:", label: "キスメ"},
{type: "pop", value: "yamame::pop:", label: "黒谷 ヤマメ"},
{type: "pop", value: "parsee::pop:", label: "水橋 パルスィ"},
{type: "pop", value: "yugi::pop:", label: "星熊 勇儀"},
{type: "pop", value: "satori::pop:", label: "古明地 さとり"},
{type: "pop", value: "orin::pop:", label: "火焔猫 燐"},
{type: "pop", value: "utsuho::pop:", label: "霊烏路 空"},
{type: "pop", value: "koishi::pop:", label: "古明地 こいし"},
{type: "pop", value: "nazrin::pop:", label: "ナズーリン"},
{type: "pop", value: "kogasa::pop:", label: "多々良 小傘"},
{type: "pop", value: "ichirin::pop:", label: "雲居 一輪"},
{type: "pop", value: "minamitsu::pop:", label: "村紗 水蜜"},
{type: "pop", value: "syou::pop:", label: "寅丸 星"},
{type: "pop", value: "byakuren::pop:", label: "聖 白蓮"},
{type: "pop", value: "nue::pop:", label: "封獣 ぬえ"},
{type: "pop", value: "hatate::pop:", label: "姫海棠 はたて"},
{type: "pop", value: "EXrumia::pop:", label: "EXルーミア"},
];

var cmd_bgs = [
{type: "bg", label: "黒背景", value:  "[bg_black:場面名:]"},
{type: "bg", label: "博麗神社", value:  "[bg_hakurei_jinja:場面名:]"},
{type: "bg", label: "魔法の森", value:  "[bg_mahou_no_mori:場面名:]"},
{type: "bg", label: "マーガトロイド邸", value:  "[bg_alice_room:場面名:]"},
{type: "bg", label: "香霖堂", value:  "[bg_kourin_dou:場面名:]"},
{type: "bg", label: "永遠亭廊下", value:  "[bg_eien_tei_rouka:場面名:]"},
{type: "bg", label: "紅魔館", value:  "[bg_kouma_kan:場面名:]"},
{type: "bg", label: "縁側", value:  "[bg_engawa:場面名:]"},
{type: "bg", label: "和風室内", value:  "[bg_wafu_situnai:場面名:]"},
{type: "bg", label: "川", value:  "[bg_kawa:場面名:]"},
{type: "bg", label: "田園", value:  "[bg_denen:場面名:]"},
{type: "bg", label: "商店街", value:  "[bg_shotengai:場面名:]"},
{type: "bg", label: "湯呑み", value:  "[bg_yunomi:場面名:]"},
{type: "bg", label: "紅魔館内部", value:  "[bg_kouma_kan_in:場面名:]"},
{type: "bg", label: "道中", value:  "[bg_douchu:場面名:]"},
{type: "bg", label: "竹林", value:  "[bg_chikurin:場面名:]"},
{type: "bg", label: "湖", value:  "[bg_mizuumi:場面名:]"},
{type: "bg", label: "さいたま", value:  "[bg_saitama:場面名:]"},
{type: "bg", label: "新聞", value:  "[bg_sinbun:場面名:]"},
{type: "bg", label: "赤青玉弾幕", value:  "[bg_danmaku_akaao:場面名:]"},
{type: "bg", label: "地下の橋", value:  "[bg_chika_hashi:場面名:]"},
{type: "bg", label: "寺", value:  "[bg_tera:場面名:]"},
{type: "bg", label: "地下の街", value:  "[bg_chika_machi:場面名:]"},
{type: "bg", label: "洋館", value:  "[bg_youkan:場面名:]"},
{type: "bg", label: "彼岸", value:  "[bg_higan:場面名:]"},
{type: "bg", label: "玄武の沢", value:  "[bg_genbu_sawa:場面名:]"},
{type: "bg", label: "現代っぽい部屋", value:  "[bg_gendai_heya:場面名:]"},
{type: "bg", label: "紅魔館部屋", value:  "[bg_kouma_kan_heya:場面名:]"},
{type: "bg", label: "白玉楼の庭園", value:  "[bg_hakugyoku_teien:場面名:]"},
{type: "bg", label: "無縁塚", value:  "[bg_muenzuka:場面名:]"},
{type: "bg", label: "崖", value:  "[bg_gake:場面名:]"},
{type: "bg", label: "月夜", value:  "[bg_tukiyo:場面名:]"},
{type: "bg", label: "守矢神社", value:  "[bg_moriya:場面名:]"},
{type: "bg", label: "空", value:  "[bg_sky:場面名:]"},
{type: "bg", label: "洞窟内", value:  "[bg_dungeon:場面名:]"},
{type: "bg", label: "洞窟のラスボス部屋", value:  "[bg_dungeon_room:場面名:]"},
{type: "bg", label: "遠目からの弾幕", value:  "[bg_danmaku_far:場面名:]"},
{type: "bg", label: "狂気的な弾幕", value:  "[bg_danmaku_fanatic:場面名:]"},
{type: "bg", label: "路地裏", value:  "[bg_rojiura:場面名:]"},
{type: "bg", label: "温泉", value:  "[bg_onsen:場面名:]"},
{type: "bg", label: "小屋", value:  "[bg_koya:場面名:]"},
{type: "bg", label: "星蓮船内部", value:  "[bg_seireisen_naibu:場面名:]"},
{type: "bg", label: "階段", value:  "[bg_kaidan:場面名:]"},
{type: "bg", label: "地霊殿客間", value:  "[bg_chireiden_heya:場面名:]"},
{type: "bg", label: "図書館", value:  "[bg_toshokan:場面名:]"},
{type: "bg", label: "山の中", value:  "[bg_yama:場面名:]"},
{type: "bg", label: "和室", value:  "[bg_washitu:場面名:]"},
{type: "bg", label: "お祭り", value:  "[bg_maturi:場面名:]"},
{type: "bg", label: "倉庫", value:  "[bg_souko:場面名:]"},
{type: "bg", label: "海", value:  "[bg_sea:場面名:]"},
{type: "bg", label: "地獄の事務所", value:  "[bg_jigokujimusho:場面名:]"},
{type: "bg", label: "血痕", value:  "[bg_kekkon:場面名:]"},
{type: "bg", label: "団子", value:  "[bg_dango:場面名:]"},
{type: "bg", label: "永琳の診察室", value:  "[bg_shinsatsu:場面名:]"},
{type: "bg", label: "有頂天っぽい", value:  "[bg_uchoten:場面名:]"},
{type: "bg", label: "寺子屋", value:  "[bg_terakoya:場面名:]"},
{type: "bg", label: "鈴蘭畑", value:  "[bg_suzuran:場面名:]"},
{type: "bg", label: "向日葵畑", value:  "[bg_himawari:場面名:]"},
{type: "bg", label: "通学路", value:  "[bg_gd_tugakuro:場面名:]"},
{type: "bg", label: "廊下", value:  "[bg_gd_rouka:場面名:]"},
{type: "bg", label: "リビング", value:  "[bg_gd_living:場面名:]"},
{type: "bg", label: "教室", value:  "[bg_gd_kyoshitu:場面名:]"},
{type: "bg", label: "校門", value:  "[bg_gd_koumon:場面名:]"},
{type: "bg", label: "ベンチ", value:  "[bg_gd_benchi:場面名:]"},
{type: "bg", label: "家の廊下", value:  "[bg_gd_house_rouka:場面名:]"},
{type: "bg", label: "現代家外観", value:  "[bg_gd_house:場面名:]"},
{type: "bg", label: "現代商店街", value:  "[bg_gd_shotengai:場面名:]"},
{type: "bg", label: "電車内", value:  "[bg_gd_densha:場面名:]"}
];

var cmd_efs = [
{type: "ef", label: "画面揺れる", value:  "[effect:earthquake]"},
{type: "ef", label: "左キャラをスライド退場", value:  "[effect:runaway_left]"},
{type: "ef", label: "右キャラをスライド退場", value:  "[effect:runaway_right]"},
{type: "ef", label: "小窓を表示する", value:  "[effect:show_swindow]"},
{type: "ef", label: "小窓を隠す", value:  "[effect:hide_swindow]"},
{type: "ef", label: "メッセージ窓を表示する", value:  "[effect:show_mwindow]"},
{type: "ef", label: "メッセージ窓を隠す", value:  "[effect:hide_mwindow]"},
{type: "ef", label: "右キャラに怒マーク", value:  "[effect:angry_right]"},
{type: "ef", label: "左キャラに怒マーク", value:  "[effect:angry_left]"},
{type: "ef", label: "右キャラに汗", value:  "[effect:ase_right]"},
{type: "ef", label: "左キャラに汗", value:  "[effect:ase_left]"},
{type: "ef", label: "右アイコンに怒マーク", value:  "[effect:angry_right_icon]"},
{type: "ef", label: "左アイコンに怒マーク", value:  "[effect:angry_left_icon]"},
{type: "ef", label: "右アイコンに汗", value:  "[effect:ase_right_icon]"},
{type: "ef", label: "左アイコンに汗", value:  "[effect:ase_left_icon]"},
{type: "ef", label: "右アイコンに気づきマーク", value:  "[effect:kizuki_right_icon]"},
{type: "ef", label: "左アイコンに気づきマーク", value:  "[effect:kizuki_left_icon]"},
{type: "ef", label: "右アイコンに「…」吹き出し", value:  "[effect:tenten_right_icon]"},
{type: "ef", label: "左アイコンに「…」吹き出し", value:  "[effect:tenten_left_icon]"},
{type: "ef", label: "右アイコンにイライラマーク", value:  "[effect:iraira_right_icon]"},
{type: "ef", label: "左アイコンにイライラマーク", value:  "[effect:iraira_left_icon]"},
{type: "ef", label: "右アイコンに呆れマーク", value:  "[effect:damepo_right_icon]"},
{type: "ef", label: "左アイコンに呆れマーク", value:  "[effect:damepo_left_icon]"},
{type: "ef", label: "右アイコンを揺らす", value:  "[effect:damage_right_icon]"},
{type: "ef", label: "左アイコンを揺らす", value:  "[effect:damage_left_icon]"},
{type: "ef", label: "「ノベル的」モードに", value:  "[effect:start_talenote]"},
{type: "ef", label: "ノベル時のページめくり", value: ">>"          },
{type: "ef", label: "「ノベル的」を終了する", value:  "[effect:end_talenote]"},
{type: "ef", label: "「スライド」モードに", value:  "[effect:start_slidenote]"},
{type: "ef", label: "「スライド」を終了する", value:  "[effect:end_slidenote]"},
{type: "ef", label: "右アイコンにこやか", value:  "[effect:niko_right_icon]"},
{type: "ef", label: "左アイコンにこやか", value:  "[effect:niko_left_icon]"},
{type: "ef", label: "右アイコンうなずく", value:  "[effect:unazuki_right_icon]"},
{type: "ef", label: "左アイコンうなずく", value:  "[effect:unazuki_left_icon]"},
{type: "ef", label: "右アイコン跳ねる", value:  "[effect:jump_right_icon]"},
{type: "ef", label: "左アイコン跳ねる", value:  "[effect:jump_left_icon]"},
{type: "ef", label: "右アイコン縮まる", value:  "[effect:mini_right_icon]"},
{type: "ef", label: "左アイコン縮まる", value:  "[effect:mini_left_icon]"},
{type: "ef", label: "右アイコン血がブワーッ", value:  "[effect:hanaji_right_icon]"},
{type: "ef", label: "左アイコン血がブワーッ", value:  "[effect:hanaji_left_icon]"},
{type: "ef", label: "フラッシュ", value:  "[effect:flash]"},
{type: "ef", label: "フェードインアウト", value:  "[effect:fade]"},
{type: "ef", label: "雪を降らせる", value:  "[effect:snow]"},
{type: "ef", label: "雪を止める", value:  "[effect:snow_end]"},
{type: "ef", label: "雨を降らせる", value:  "[effect:rain]"},
{type: "ef", label: "雨を止める", value:  "[effect:rain_end]"},
{type: "ef", label: "暗闇フィルタ", value:  "[effect:darkScope]"},
{type: "ef", label: "暗闇を解除", value:  "[effect:darkScope_end]"},
{type: "ef", label: "右ポップに怒マーク", value:  "[effect:angry_right_pop]"},
{type: "ef", label: "左ポップに怒マーク", value:  "[effect:angry_left_pop]"},
{type: "ef", label: "右ポップに汗", value:  "[effect:ase_right_pop]"},
{type: "ef", label: "左ポップに汗", value:  "[effect:ase_left_pop]"},
{type: "ef", label: "右ポップに気づきマーク", value:  "[effect:kizuki_right_pop]"},
{type: "ef", label: "左ポップに気づきマーク", value:  "[effect:kizuki_left_pop]"},
{type: "ef", label: "右ポップに「…」吹き出し", value:  "[effect:tenten_right_pop]"},
{type: "ef", label: "左ポップに「…」吹き出し", value:  "[effect:tenten_left_pop]"},
{type: "ef", label: "右ポップにイライラマーク", value:  "[effect:iraira_right_pop]"},
{type: "ef", label: "左ポップにイライラマーク", value:  "[effect:iraira_left_pop]"},
{type: "ef", label: "右ポップに呆れマーク", value:  "[effect:damepo_right_pop]"},
{type: "ef", label: "左ポップに呆れマーク", value:  "[effect:damepo_left_pop]"},
{type: "ef", label: "右ポップにこやか", value:  "[effect:niko_right_pop]"},
{type: "ef", label: "左ポップにこやか", value:  "[effect:niko_left_pop]"},
{type: "ef", label: "右ポップ血がブワーッ", value:  "[effect:hanaji_right_pop]"},
{type: "ef", label: "左ポップ血がブワーッ", value:  "[effect:hanaji_left_pop]"},
{type: "ef", label: "右ポップを揺らす", value:  "[effect:damage_right_pop]"},
{type: "ef", label: "左ポップを揺らす", value:  "[effect:damage_left_pop]"},
{type: "ef", label: "右ポップ跳ねる", value:  "[effect:jump_right_pop]"},
{type: "ef", label: "左ポップ跳ねる", value:  "[effect:jump_left_pop]"},
];

var cmd_etc = [
];
