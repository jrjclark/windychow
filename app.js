const TOTAL_COPIES = 4;
const HAND_SIZE = 13;

const suitInfo = {
  b: { name: "Bamboo", short: "Bam", className: "bamboo" },
  c: { name: "Characters", short: "Char", className: "character" },
  d: { name: "Dots", short: "Dot", className: "dot" },
};

const suitOrder = ["b", "c", "d"];
const windIds = ["we", "ws", "ww", "wn"];
const dragonIds = ["dr", "dg", "dw"];
const honorIds = [...windIds, ...dragonIds];
const flowerIds = ["fl1", "fl2", "fl3", "fl4"];
const seasonIds = ["se1", "se2", "se3", "se4"];
const animalIds = ["acat", "amouse", "arooster", "acentipede"];
const americanFlowerId = "amf";
const jokerId = "jk";
const validGameVersions = new Set([
  "australian-nz-western",
  "hong-kong-cantonese",
  "singapore-malaysian",
  "riichi",
  "american",
]);
const validLanguages = new Set(["english", "cantonese", "mandarin"]);
const languageCopy = {
  english: {
    appTitle: "Mahjong Odds Helper",
    setupTitle: "Game setup",
    mahjongVersion: "Mahjong version",
    language: "Language",
    players: "Players",
    fourPlayers: "4 players",
    threePlayers: "3 players",
    start: "Start",
    currentHand: "Current Hand",
    gameSettings: "Settings",
    expose: "Expose",
    unexpose: "Unexpose",
    kong: "Kong",
    undo: "Undo",
    clear: "Clear",
    seatWind: "Seat wind",
    east: "East",
    south: "South",
    west: "West",
    north: "North",
    lastPickup: "Last pickup",
    bestDiscard: "Best discard",
    suggestedDiscard: "Suggested discard",
    discardedTiles: "Discarded Tiles",
    lastDiscarded: "Last discarded",
    tileSelector: "Select Tiles",
    myTurn: "My Turn",
    otherPlayer: "Other Player",
    autoRotate: "Auto rotate",
    wallPickup: "Wall Pickup",
    tablePickup: "Table Pickup",
    discard: "Discard",
    bestHands: "Best Hands",
    one: "One",
    top: "Top",
    best: "Best",
    all: "All",
    discarded: "Discarded",
    pickedUp: "Picked Up",
    none: "None",
    noneYet: "None yet",
    remove: "Remove",
    cannotDiscardClaimed: "Cannot discard claimed",
    undoDiscard: "Undo discard",
    undoPickup: "Undo pickup",
    tablePickupAction: "Table pickup",
    minimiseDiscardSection: "Minimise discard section",
    expandDiscardSection: "Expand discard section",
    minimiseTileSelector: "Minimise tile selector",
    expandTileSelector: "Expand tile selector",
    minimiseBestHands: "Minimise best hands",
    expandBestHands: "Expand best hands",
    concealed: "Concealed",
    exposed: "Exposed",
    concealedExposed: "Concealed / Exposed",
    win: "Win",
    fish: "Fish",
    calculateWin: "Calculate Win",
    han: "Han",
    faan: "Faan",
    yakuman: "Yakuman",
    complete: "Complete",
    oneDrawAway: "One draw away",
    unavailable: "Unavailable",
    neededTiles: "Needed tiles",
    suggestedDiscards: "Suggested discards",
    handIsComplete: "Hand is complete",
    noLiveCopiesLeft: "No live copies left",
    alreadyComplete: "Already complete",
    neededTilesGone: "Needed tiles are gone",
    noSingleTileTarget: "No single tile target",
    noDiscardNeeded: "No discard needed",
    noLiveRoute: "No live route",
    noClearDiscard: "No clear discard",
    noMatchingHands: "No hands match the selected filters.",
    select14Tiles: "Select 14 tiles",
    select14TileHint: "Select 13 hand tiles and one latest draw to calculate next-draw odds.",
    noMatchingHandsShort: "No matching hands",
    arrangeHandFor: "Arrange current hand for",
    remaining: "remaining",
    bamboo: "Bamboo",
    characters: "Characters",
    dots: "Dots",
    windsAndDragons: "Winds and dragons",
    flowersAndSeasons: "Flowers And Seasons",
    flowersSeasonsAnimals: "Flowers, Seasons and Animals",
  },
  cantonese: {
    appTitle: "麻雀機率助手",
    setupTitle: "遊戲設定",
    mahjongVersion: "麻雀版本",
    language: "語言",
    players: "玩家",
    fourPlayers: "4 位玩家",
    threePlayers: "3 位玩家",
    start: "開始",
    currentHand: "目前手牌",
    gameSettings: "設定",
    expose: "明牌",
    unexpose: "取消明牌",
    kong: "槓",
    undo: "復原",
    clear: "清除",
    seatWind: "座風",
    east: "東",
    south: "南",
    west: "西",
    north: "北",
    lastPickup: "最新摸牌",
    bestDiscard: "最佳打出",
    suggestedDiscard: "建議打出",
    discardedTiles: "已打出的牌",
    lastDiscarded: "最後打出",
    tileSelector: "選牌",
    myTurn: "我嘅回合",
    otherPlayer: "其他玩家",
    autoRotate: "自動輪轉",
    wallPickup: "摸牌",
    tablePickup: "檯面拾牌",
    discard: "打出",
    bestHands: "最佳牌型",
    one: "一個",
    top: "最佳",
    best: "最佳",
    all: "全部",
    discarded: "已打出",
    pickedUp: "已拾牌",
    none: "無",
    noneYet: "暫無",
    remove: "移除",
    cannotDiscardClaimed: "不能打出已拾牌",
    undoDiscard: "復原打出",
    undoPickup: "復原拾牌",
    tablePickupAction: "檯面拾牌",
    minimiseDiscardSection: "收起已打出的牌",
    expandDiscardSection: "展開已打出的牌",
    minimiseTileSelector: "收起選牌",
    expandTileSelector: "展開選牌",
    minimiseBestHands: "收起最佳牌型",
    expandBestHands: "展開最佳牌型",
    concealed: "暗章",
    exposed: "明章",
    concealedExposed: "暗章 / 明章",
    win: "食糊",
    fish: "叫糊",
    calculateWin: "計算食糊",
    han: "番",
    faan: "番",
    yakuman: "役滿",
    complete: "完成",
    oneDrawAway: "差一張",
    unavailable: "不可用",
    neededTiles: "需要嘅牌",
    suggestedDiscards: "建議打出",
    handIsComplete: "已完成",
    noLiveCopiesLeft: "已無可用牌",
    alreadyComplete: "已完成",
    neededTilesGone: "需要嘅牌已用完",
    noSingleTileTarget: "未有單一目標牌",
    noDiscardNeeded: "唔需要打牌",
    noLiveRoute: "無可行路線",
    noClearDiscard: "冇明確建議",
    noMatchingHands: "沒有符合篩選嘅牌型。",
    select14Tiles: "請選 14 張牌",
    select14TileHint: "請選 13 張手牌同 1 張最新摸牌，以計算下一張牌機率。",
    noMatchingHandsShort: "沒有符合牌型",
    arrangeHandFor: "整理手牌以配合",
    remaining: "剩餘",
    bamboo: "索子",
    characters: "萬子",
    dots: "筒子",
    windsAndDragons: "風牌同三元牌",
    flowersAndSeasons: "花牌同季節牌",
    flowersSeasonsAnimals: "花牌、季節牌同動物牌",
  },
  mandarin: {
    appTitle: "麻将概率助手",
    setupTitle: "游戏设置",
    mahjongVersion: "麻将版本",
    language: "语言",
    players: "玩家",
    fourPlayers: "4 位玩家",
    threePlayers: "3 位玩家",
    start: "开始",
    currentHand: "当前手牌",
    gameSettings: "设置",
    expose: "明牌",
    unexpose: "取消明牌",
    kong: "杠",
    undo: "撤销",
    clear: "清除",
    seatWind: "座风",
    east: "东",
    south: "南",
    west: "西",
    north: "北",
    lastPickup: "最新摸牌",
    bestDiscard: "最佳打出",
    suggestedDiscard: "建议打出",
    discardedTiles: "已打出的牌",
    lastDiscarded: "最后打出",
    tileSelector: "选牌",
    myTurn: "我的回合",
    otherPlayer: "其他玩家",
    autoRotate: "自动轮转",
    wallPickup: "摸牌",
    tablePickup: "桌面拾牌",
    discard: "打出",
    bestHands: "最佳牌型",
    one: "一个",
    top: "最佳",
    best: "最佳",
    all: "全部",
    discarded: "已打出",
    pickedUp: "已拾牌",
    none: "无",
    noneYet: "暂无",
    remove: "移除",
    cannotDiscardClaimed: "不能打出已拾牌",
    undoDiscard: "撤销打出",
    undoPickup: "撤销拾牌",
    tablePickupAction: "桌面拾牌",
    minimiseDiscardSection: "收起已打出的牌",
    expandDiscardSection: "展开已打出的牌",
    minimiseTileSelector: "收起选牌",
    expandTileSelector: "展开选牌",
    minimiseBestHands: "收起最佳牌型",
    expandBestHands: "展开最佳牌型",
    concealed: "门清",
    exposed: "明牌",
    concealedExposed: "门清 / 明牌",
    win: "胡牌",
    fish: "听牌",
    calculateWin: "计算胡牌",
    han: "番",
    faan: "番",
    yakuman: "役满",
    complete: "完成",
    oneDrawAway: "差一张",
    unavailable: "不可用",
    neededTiles: "需要的牌",
    suggestedDiscards: "建议打出",
    handIsComplete: "已完成",
    noLiveCopiesLeft: "已无可用牌",
    alreadyComplete: "已完成",
    neededTilesGone: "需要的牌已用完",
    noSingleTileTarget: "没有单一目标牌",
    noDiscardNeeded: "不需要打牌",
    noLiveRoute: "无可行路线",
    noClearDiscard: "无明确建议",
    noMatchingHands: "没有符合筛选的牌型。",
    select14Tiles: "请选择 14 张牌",
    select14TileHint: "请选择 13 张手牌和 1 张最新摸牌，以计算下一张牌概率。",
    noMatchingHandsShort: "没有符合牌型",
    arrangeHandFor: "整理手牌以配合",
    remaining: "剩余",
    bamboo: "条子",
    characters: "万子",
    dots: "筒子",
    windsAndDragons: "风牌和三元牌",
    flowersAndSeasons: "花牌和季节牌",
    flowersSeasonsAnimals: "花牌、季节牌和动物牌",
  },
};
const gameVersionLabels = {
  english: {
    "australian-nz-western": "Australian/NZ Western",
    "hong-kong-cantonese": "Hong Kong / Cantonese",
    "singapore-malaysian": "Singapore / Malaysian",
    riichi: "Riichi",
    american: "American Mah Jongg",
  },
  cantonese: {
    "australian-nz-western": "澳洲 / 紐西蘭西式",
    "hong-kong-cantonese": "香港 / 廣東牌",
    "singapore-malaysian": "新加坡 / 馬來西亞",
    riichi: "日本立直",
    american: "美國麻將",
  },
  mandarin: {
    "australian-nz-western": "澳大利亚 / 新西兰西式",
    "hong-kong-cantonese": "香港 / 广东麻将",
    "singapore-malaysian": "新加坡 / 马来西亚",
    riichi: "日本立直",
    american: "美国麻将",
  },
};
const languageLabels = {
  english: { english: "English", cantonese: "廣東話", mandarin: "普通话" },
  cantonese: { english: "English", cantonese: "廣東話", mandarin: "普通话" },
  mandarin: { english: "English", cantonese: "廣東話", mandarin: "普通话" },
};
const faanHandTranslations = {
  cantonese: {
    "all-chows": {
      name: "平糊",
      note: "四組順子和一對數牌雀頭。",
    },
    "value-tiles": {
      name: "番牌",
      note: "三元牌刻子或座風刻子，加上任何普通和牌。",
    },
    "mixed-one-suit": {
      name: "混一色",
      note: "只用一門數牌，可包含風牌或三元牌。",
    },
    "all-pungs": {
      name: "對對糊",
      note: "四組刻子或槓子，加上一對雀頭。",
    },
    "seven-pairs": {
      name: "七對子",
      note: "七對雀頭。",
    },
    "pure-straight": {
      name: "一條龍",
      note: "同一門的 1-2-3、4-5-6、7-8-9，再加一組牌和一對雀頭。",
    },
    "mixed-triple-chow": {
      name: "三色同順",
      note: "索、萬、筒三門各有同樣順子，再加一組牌和一對雀頭。",
    },
    "mixed-triple-pung": {
      name: "三色同刻",
      note: "三門都有相同數字的刻子，再加一組牌和一對雀頭。",
    },
    "little-three-dragons": {
      name: "小三元",
      note: "兩組三元牌刻子，和第三種三元牌的一對。",
    },
    "big-three-dragons": {
      name: "大三元",
      note: "三種三元牌刻子，再加一組牌和一對雀頭。",
    },
    "little-four-winds": {
      name: "小四喜",
      note: "三組風牌刻子，和第四種風牌的一對。",
    },
    "big-four-winds": {
      name: "大四喜",
      note: "四組風牌刻子，另加任何一對雀頭。",
    },
    "full-flush": {
      name: "清一色",
      note: "只用一門數牌。",
    },
    "all-honours": {
      name: "字一色",
      note: "只用風牌和三元牌。",
    },
    "all-terminals": {
      name: "清么九",
      note: "只用一和九。",
    },
    "mixed-terminals-and-honours": {
      name: "混么九",
      note: "只用風牌、三元牌、一和九。",
    },
    "thirteen-orphans": {
      name: "十三么",
      note: "每種么九牌和字牌各一張，再加其中任何一張作對。",
    },
    "nine-gates": {
      name: "九蓮寶燈",
      note: "同一門組成 1112345678999，再加同門任何一張。",
    },
    "all-green": {
      name: "綠一色",
      note: "只用綠色索子和青發。",
    },
  },
  mandarin: {
    "all-chows": {
      name: "平和",
      note: "四组顺子和一对数牌雀头。",
    },
    "value-tiles": {
      name: "役牌",
      note: "三元牌刻子或座风刻子，加上任意普通和牌。",
    },
    "mixed-one-suit": {
      name: "混一色",
      note: "只用一种数牌，可包含风牌或三元牌。",
    },
    "all-pungs": {
      name: "对对胡",
      note: "四组刻子或杠子，加上一对雀头。",
    },
    "seven-pairs": {
      name: "七对子",
      note: "七对雀头。",
    },
    "pure-straight": {
      name: "一条龙",
      note: "同一门的 1-2-3、4-5-6、7-8-9，再加一组牌和一对雀头。",
    },
    "mixed-triple-chow": {
      name: "三色同顺",
      note: "条、万、筒三门各有相同顺子，再加一组牌和一对雀头。",
    },
    "mixed-triple-pung": {
      name: "三色同刻",
      note: "三门都有相同数字的刻子，再加一组牌和一对雀头。",
    },
    "little-three-dragons": {
      name: "小三元",
      note: "两组三元牌刻子，和第三种三元牌的一对。",
    },
    "big-three-dragons": {
      name: "大三元",
      note: "三种三元牌刻子，再加一组牌和一对雀头。",
    },
    "little-four-winds": {
      name: "小四喜",
      note: "三组风牌刻子，和第四种风牌的一对。",
    },
    "big-four-winds": {
      name: "大四喜",
      note: "四组风牌刻子，另加任意一对雀头。",
    },
    "full-flush": {
      name: "清一色",
      note: "只用一种数牌。",
    },
    "all-honours": {
      name: "字一色",
      note: "只用风牌和三元牌。",
    },
    "all-terminals": {
      name: "清幺九",
      note: "只用一和九。",
    },
    "mixed-terminals-and-honours": {
      name: "混幺九",
      note: "只用风牌、三元牌、一和九。",
    },
    "thirteen-orphans": {
      name: "十三幺",
      note: "每种幺九牌和字牌各一张，再加其中任意一张作对。",
    },
    "nine-gates": {
      name: "九莲宝灯",
      note: "同一门组成 1112345678999，再加同门任意一张。",
    },
    "all-green": {
      name: "绿一色",
      note: "只用绿色条子和发财。",
    },
  },
};
const riichiHandTranslations = {
  cantonese: {
    tanyao: {
      name: "斷么九",
      note: "全是 2 至 8 的數牌，沒有么九牌或字牌。",
    },
    pinfu: {
      name: "平和",
      note: "四組順子和一對非役牌雀頭。",
    },
    yakuhai: {
      name: "役牌",
      note: "三元牌刻子，或自風刻子。",
    },
    iipeikou: {
      name: "一盃口",
      note: "同一門有兩組完全相同的順子，再加兩組牌和一對雀頭。",
    },
    toitoi: {
      name: "對對和",
      note: "四組刻子或槓子，加上一對雀頭。",
    },
    chiitoitsu: {
      name: "七對子",
      note: "七對雀頭。",
    },
    "sanshoku-doujun": {
      name: "三色同順",
      note: "三門都有相同順子。",
    },
    ittsu: {
      name: "一氣通貫",
      note: "同一門有 1 至 9 的三組順子。",
    },
    "sanshoku-doukou": {
      name: "三色同刻",
      note: "三門都有相同數字的刻子。",
    },
    shousangen: {
      name: "小三元",
      note: "兩組三元牌刻子，和第三種三元牌的一對。",
    },
    honitsu: {
      name: "混一色",
      note: "只用一門數牌，可包含字牌。",
    },
    chinitsu: {
      name: "清一色",
      note: "只用一門數牌。",
    },
    honroutou: {
      name: "混老頭",
      note: "只用么九牌和字牌。",
    },
    daisangen: {
      name: "大三元",
      note: "三種三元牌刻子。",
    },
    "kokushi-musou": {
      name: "國士無雙",
      note: "每種么九牌和字牌各一張，再加其中任何一張作對。",
    },
    tsuuiisou: {
      name: "字一色",
      note: "只用風牌和三元牌。",
    },
    chinroutou: {
      name: "清老頭",
      note: "只用一和九。",
    },
    ryuuiisou: {
      name: "綠一色",
      note: "只用綠色索子和青發。",
    },
    shousuushii: {
      name: "小四喜",
      note: "三組風牌刻子，和第四種風牌的一對。",
    },
    daisuushii: {
      name: "大四喜",
      note: "四組風牌刻子。",
    },
    "chuuren-poutou": {
      name: "九蓮寶燈",
      note: "同一門組成 1112345678999，再加同門任何一張。",
    },
  },
  mandarin: {
    tanyao: {
      name: "断幺九",
      note: "全是 2 至 8 的数牌，没有幺九牌或字牌。",
    },
    pinfu: {
      name: "平和",
      note: "四组顺子和一对非役牌雀头。",
    },
    yakuhai: {
      name: "役牌",
      note: "三元牌刻子，或自风刻子。",
    },
    iipeikou: {
      name: "一杯口",
      note: "同一门有两组完全相同的顺子，再加两组牌和一对雀头。",
    },
    toitoi: {
      name: "对对和",
      note: "四组刻子或杠子，加上一对雀头。",
    },
    chiitoitsu: {
      name: "七对子",
      note: "七对雀头。",
    },
    "sanshoku-doujun": {
      name: "三色同顺",
      note: "三门都有相同顺子。",
    },
    ittsu: {
      name: "一气通贯",
      note: "同一门有 1 至 9 的三组顺子。",
    },
    "sanshoku-doukou": {
      name: "三色同刻",
      note: "三门都有相同数字的刻子。",
    },
    shousangen: {
      name: "小三元",
      note: "两组三元牌刻子，和第三种三元牌的一对。",
    },
    honitsu: {
      name: "混一色",
      note: "只用一种数牌，可包含字牌。",
    },
    chinitsu: {
      name: "清一色",
      note: "只用一种数牌。",
    },
    honroutou: {
      name: "混老头",
      note: "只用幺九牌和字牌。",
    },
    daisangen: {
      name: "大三元",
      note: "三种三元牌刻子。",
    },
    "kokushi-musou": {
      name: "国士无双",
      note: "每种幺九牌和字牌各一张，再加其中任意一张作对。",
    },
    tsuuiisou: {
      name: "字一色",
      note: "只用风牌和三元牌。",
    },
    chinroutou: {
      name: "清老头",
      note: "只用一和九。",
    },
    ryuuiisou: {
      name: "绿一色",
      note: "只用绿色条子和发财。",
    },
    shousuushii: {
      name: "小四喜",
      note: "三组风牌刻子，和第四种风牌的一对。",
    },
    daisuushii: {
      name: "大四喜",
      note: "四组风牌刻子。",
    },
    "chuuren-poutou": {
      name: "九莲宝灯",
      note: "同一门组成 1112345678999，再加同门任意一张。",
    },
  },
};
const rulesetGameIds = new Set(["hong-kong-cantonese", "singapore-malaysian", "riichi"]);
const dragonNames = {
  dr: ["Red Dragon", "Red", "R", "dragon red", "dragon-red"],
  dg: ["Green Dragon", "Green", "G", "dragon green", "dragon-green"],
  dw: ["White Dragon", "White", "Wh", "dragon white", "dragon-white"],
};
const windNames = {
  we: ["East Wind", "East", "E"],
  ws: ["South Wind", "South", "S"],
  ww: ["West Wind", "West", "W"],
  wn: ["North Wind", "North", "N"],
};

const tiles = [];
const tileById = new Map();
const indexById = new Map();

for (const suit of suitOrder) {
  for (let rank = 1; rank <= 9; rank += 1) {
    const id = `${suit}${rank}`;
    const info = suitInfo[suit];
    tiles.push({
      id,
      suit,
      rank,
      type: "suit",
      name: `${rank} ${info.name}`,
      short: `${rank}${info.short[0]}`,
      face: String(rank),
      label: info.short,
      className: info.className,
      chipClass: info.className,
    });
  }
}

for (const id of windIds) {
  const [name, short, face] = windNames[id];
  tiles.push({
    id,
    type: "wind",
    name,
    short,
    face,
    label: "Wind",
    className: "wind",
    chipClass: "wind",
  });
}

for (const id of dragonIds) {
  const [name, short, face, className, chipClass] = dragonNames[id];
  tiles.push({
    id,
    type: "dragon",
    name,
    short,
    face,
    label: "Dragon",
    className,
    chipClass,
  });
}

for (const id of flowerIds) {
  const number = Number(id.replace("fl", ""));
  tiles.push({
    id,
    type: "flower",
    name: `Flower ${number}`,
    short: `F${number}`,
    face: String(number),
    label: "Flower",
    className: "flower",
    chipClass: "flower",
    copies: 1,
  });
}

for (const id of seasonIds) {
  const number = Number(id.replace("se", ""));
  tiles.push({
    id,
    type: "season",
    name: `Season ${number}`,
    short: `S${number}`,
    face: String(number),
    label: "Season",
    className: "season",
    chipClass: "season",
    copies: 1,
  });
}

const animalTiles = [
  { id: "acat", name: "Cat", short: "Cat", face: "Cat" },
  { id: "amouse", name: "Mouse", short: "Mouse", face: "Mouse" },
  { id: "arooster", name: "Rooster", short: "Roos", face: "Roos" },
  { id: "acentipede", name: "Centipede", short: "Cent", face: "Cent" },
];

for (const animal of animalTiles) {
  tiles.push({
    ...animal,
    type: "animal",
    label: "Animal",
    className: "animal",
    chipClass: "animal",
    copies: 1,
  });
}

tiles.push(
  {
    id: americanFlowerId,
    type: "american-flower",
    name: "American Flower",
    short: "Flower",
    face: "F",
    label: "Flower",
    className: "american-flower",
    chipClass: "flower",
    copies: 8,
  },
  {
    id: jokerId,
    type: "joker",
    name: "Joker",
    short: "Joker",
    face: "J",
    label: "Joker",
    className: "joker",
    chipClass: "joker",
    copies: 8,
  },
);

tiles.forEach((tile, index) => {
  tile.index = index;
  tile.art = `./assets/tiles/${tile.id}.png`;
  tileById.set(tile.id, tile);
  indexById.set(tile.id, index);
});

const TILE_COUNT = tiles.length;
const suitTileIds = (suit, ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9]) =>
  ranks.map((rank) => `${suit}${rank}`);
const suitedIds = suitOrder.flatMap((suit) => suitTileIds(suit));
const standardTileIds = [...suitedIds, ...honorIds];
const allTileIds = standardTileIds;
const terminalIds = suitOrder.flatMap((suit) => [`${suit}1`, `${suit}9`]);
const honorAndTerminalIds = [...honorIds, ...terminalIds];
const greenBambooIds = suitTileIds("b", [2, 3, 4, 6, 8]);
const redBambooIds = suitTileIds("b", [1, 5, 7, 9]);
const allBambooColorIds = [...redBambooIds, ...greenBambooIds];
const blueDotIds = suitTileIds("d", [2, 3, 4, 5, 8, 9]);
const evenDotIds = suitTileIds("d", [2, 4, 6, 8]);
const evenCharacterIds = suitTileIds("c", [2, 4, 6, 8]);
const oddCharacterIds = suitTileIds("c", [1, 3, 5, 7, 9]);
const playerLabels = {
  me: "Me",
  left: "Left",
  opposite: "Opposite",
  right: "Right",
};

function validGameVersion(value) {
  return validGameVersions.has(value) ? value : "australian-nz-western";
}

function validLanguage(value) {
  return validLanguages.has(value) ? value : "english";
}

function currentLanguage() {
  try {
    return validLanguage(state.game.language);
  } catch {
    return "english";
  }
}

function t(key) {
  const language = currentLanguage();
  return languageCopy[language]?.[key] || languageCopy.english[key] || key;
}

function versionLabel(value) {
  const language = currentLanguage();
  const version = validGameVersion(value);
  return gameVersionLabels[language]?.[version] || gameVersionLabels.english[version];
}

function languageLabel(value) {
  const language = currentLanguage();
  const selected = validLanguage(value);
  return languageLabels[language]?.[selected] || languageLabels.english[selected];
}

function exposureText(label) {
  if (label === "Concealed") return t("concealed");
  if (label === "Exposed") return t("exposed");
  if (label === "Concealed / Exposed") return t("concealedExposed");
  return label;
}

function translatedScoreValue(value) {
  return value === "Calculate Win" ? t("calculateWin") : scoreLabel(value);
}

function limitLabel(value) {
  return value === "Yakuman" ? t("yakuman") : value;
}

function tilesNeededText(count) {
  if (currentLanguage() === "english") return count === 1 ? "1 tile needed" : `${count} tiles needed`;
  return currentLanguage() === "cantonese" ? `需要 ${count} 張牌` : `需要 ${count} 张牌`;
}

function rulesetBaseId(pattern) {
  const prefix = `${pattern.game}-`;
  return pattern.id?.startsWith(prefix) ? pattern.id.slice(prefix.length) : pattern.id;
}

function rulesetHandTranslation(pattern) {
  const language = currentLanguage();
  if (language === "english" || !rulesetGameIds.has(pattern.game)) return null;

  const baseId = rulesetBaseId(pattern);
  if (pattern.game === "riichi") return riichiHandTranslations[language]?.[baseId] || null;
  return faanHandTranslations[language]?.[baseId] || null;
}

function patternDisplayName(pattern) {
  return rulesetHandTranslation(pattern)?.name || pattern.name;
}

function patternDisplayNote(pattern) {
  return rulesetHandTranslation(pattern)?.note || pattern.note;
}

function tileGroupsForVersion(version = state.game.version) {
  const selectedVersion = validGameVersion(version);
  const groups = [
    { title: t("bamboo"), ids: suitTileIds("b"), grid: "tile-grid" },
    { title: t("characters"), ids: suitTileIds("c"), grid: "tile-grid" },
    { title: t("dots"), ids: suitTileIds("d"), grid: "tile-grid" },
    { title: t("windsAndDragons"), ids: [...honorIds], grid: "tile-grid honor-grid" },
  ];

  if (selectedVersion === "australian-nz-western" || selectedVersion === "hong-kong-cantonese") {
    groups.push({
      title: t("flowersAndSeasons"),
      ids: [...flowerIds, ...seasonIds],
      grid: "tile-grid bonus-grid",
    });
  }

  if (selectedVersion === "singapore-malaysian") {
    groups.push({
      title: t("flowersSeasonsAnimals"),
      ids: [...flowerIds, ...seasonIds, ...animalIds],
      grid: "tile-grid bonus-grid",
    });
  }

  if (selectedVersion === "american") {
    groups[3] = {
      title: t("windsAndDragons"),
      ids: [...honorIds, americanFlowerId, jokerId],
      grid: "tile-grid honor-grid extended-honor-grid",
    };
  }

  return groups;
}

function selectableTileIdsForVersion(version = state.game.version) {
  return tileGroupsForVersion(version).flatMap((groupDef) => groupDef.ids);
}

function selectableTileSetForVersion(version = state.game.version) {
  return new Set(selectableTileIdsForVersion(version));
}

function maxTileCopies(indexOrId) {
  const tile = typeof indexOrId === "number" ? tiles[indexOrId] : tileById.get(indexOrId);
  return tile?.copies ?? TOTAL_COPIES;
}

function activeTileCopies(indexOrId, version = state.game.version) {
  const tile = typeof indexOrId === "number" ? tiles[indexOrId] : tileById.get(indexOrId);
  if (!tile) return 0;
  return selectableTileSetForVersion(version).has(tile.id) ? maxTileCopies(tile.id) : 0;
}

function totalTileCopiesForVersion(version = state.game.version) {
  return selectableTileIdsForVersion(version).reduce((total, id) => total + maxTileCopies(id), 0);
}

function pointFilterOptionsForVersion(version = state.game.version) {
  const selectedVersion = validGameVersion(version);
  if (selectedVersion === "american") return [25, 30, "35plus"];
  if (selectedVersion === "riichi") return [1, 2, 3, 5, 6, 13];
  if (selectedVersion === "hong-kong-cantonese" || selectedVersion === "singapore-malaysian") {
    return [1, 2, 3, 4, 5, 6, 8, 10, 13];
  }
  return [500, 1000, 2000];
}

function pointFilterLabel(value) {
  return value === "35plus" ? "≥35" : String(value);
}

function pointFilterMatchesValue(filter, value) {
  if (filter === "35plus") return value >= 35;
  return value === filter;
}

function sortPointFilters(filters, options = pointFilterOptionsForVersion()) {
  return [...filters].sort((a, b) => options.indexOf(a) - options.indexOf(b));
}

const state = {
  configured: false,
  game: {
    version: "australian-nz-western",
    language: "english",
    players: "4",
  },
  hand: [],
  draw: null,
  kongTiles: [],
  activePlayer: "me",
  lastDiscard: null,
  discardsByPlayer: {
    me: [],
    left: [],
    opposite: [],
    right: [],
  },
  pickedUpByPlayer: {
    me: [],
    left: [],
    opposite: [],
    right: [],
  },
  lockedHandSlots: [],
  lockedDraw: false,
  lockedPickedUpByPlayer: {
    me: [],
    left: [],
    opposite: [],
    right: [],
  },
  trackAllPlayers: true,
  autoRotate: false,
  autoRotateUserSet: false,
  exposeMode: false,
  kongMode: false,
  kongReplacementPending: false,
  heldResults: null,
  drawSlotPurpose: "last-pickup",
  mode: "hand",
  seatWind: "we",
  filter: "best",
  pointFilters: [],
  ui: {
    discardCollapsed: false,
    pickupCollapsed: false,
    resultsCollapsed: false,
  },
  history: [],
};

const dom = {
  appShell: document.querySelector("#app-shell"),
  setupScreen: document.querySelector("#setup-screen"),
  setupForm: document.querySelector("#setup-form"),
  setupVersion: document.querySelector("#setup-version"),
  setupLanguage: document.querySelector("#setup-language"),
  setupChange: document.querySelector("#setup-change-button"),
  expose: document.querySelector("#expose-button"),
  kong: document.querySelector("#kong-button"),
  handGrid: document.querySelector("#current-hand-grid"),
  handSlots: document.querySelector("#hand-slots"),
  drawSlot: document.querySelector("#draw-slot"),
  drawSlotLabel: document.querySelector("#draw-slot-label"),
  kongRow: document.querySelector("#kong-row"),
  kongSlots: document.querySelector("#kong-slots"),
  lastDiscardSlot: document.querySelector("#last-discard-slot"),
  discardSlots: document.querySelector("#discard-slots"),
  discardSection: document.querySelector("#discard-section"),
  discardToggle: document.querySelector("#discard-toggle"),
  pickupSection: document.querySelector("#pickup-section"),
  pickupToggle: document.querySelector("#pickup-toggle"),
  resultsSection: document.querySelector("#results-section"),
  resultsToggle: document.querySelector("#results-toggle"),
  handCount: document.querySelector("#hand-count"),
  drawCount: document.querySelector("#draw-count"),
  palette: document.querySelector("#tile-palette"),
  turnMe: document.querySelector("#turn-me"),
  turnOther: document.querySelector("#turn-other"),
  autoRotate: document.querySelector("#auto-rotate"),
  modeDraw: document.querySelector("#mode-draw"),
  modeTable: document.querySelector("#mode-table"),
  modeDiscard: document.querySelector("#mode-discard"),
  selectorLastDiscard: document.querySelector("#selector-last-discard"),
  undo: document.querySelector("#undo-button"),
  clear: document.querySelector("#clear-button"),
  seatWind: document.querySelector("#seat-wind"),
  discardRecommendation: document.querySelector("#discard-recommendation"),
  results: document.querySelector("#results-list"),
  scoreFilters: document.querySelector(".score-filters"),
  filterOne: document.querySelector("#filter-one"),
  filterBest: document.querySelector("#filter-best"),
  filterAll: document.querySelector("#filter-all"),
  pointFilterControls: document.querySelector("#point-filter-controls"),
  pointFilters: Array.from(document.querySelectorAll("[data-point-filter]")),
};

function zeros() {
  return new Uint8Array(TILE_COUNT);
}

function copyVec(vec) {
  return new Uint8Array(vec);
}

function keyFromCounts(counts) {
  return Array.from(counts).join("");
}

function totalInVec(vec) {
  let total = 0;
  for (const count of vec) total += count;
  return total;
}

function idToIndex(id) {
  return indexById.get(id);
}

function entriesToVec(entries) {
  const vec = zeros();
  for (const [id, amount] of entries) {
    const index = idToIndex(id);
    vec[index] += amount;
    if (vec[index] > maxTileCopies(index)) return null;
  }
  return vec;
}

function single(id) {
  return entriesToVec([[id, 1]]);
}

function pair(id) {
  return entriesToVec([[id, 2]]);
}

function pung(id) {
  return entriesToVec([[id, 3]]);
}

function group(ids) {
  return entriesToVec(ids.map((id) => [id, 1]));
}

function runGroup(suit, start, end) {
  const ids = [];
  for (let rank = start; rank <= end; rank += 1) ids.push(`${suit}${rank}`);
  return group(ids);
}

function chowGroup(suit, start) {
  return group([`${suit}${start}`, `${suit}${start + 1}`, `${suit}${start + 2}`]);
}

function addVec(target, source) {
  for (let i = 0; i < TILE_COUNT; i += 1) {
    const next = target[i] + source[i];
    if (next > maxTileCopies(i)) {
      for (let j = 0; j < i; j += 1) target[j] -= source[j];
      return false;
    }
    target[i] = next;
  }
  return true;
}

function removeVec(target, source) {
  for (let i = 0; i < TILE_COUNT; i += 1) target[i] -= source[i];
}

function uniqueVectors(vectors, requiredTotal = 14) {
  const map = new Map();
  for (const vec of vectors) {
    if (!vec || totalInVec(vec) !== requiredTotal) continue;
    map.set(keyFromCounts(vec), vec);
  }
  return Array.from(map.values());
}

function combineOptionLists(optionLists, requiredTotal = 14) {
  const results = new Map();
  const acc = zeros();

  function walk(position) {
    if (position === optionLists.length) {
      if (totalInVec(acc) === requiredTotal) {
        results.set(keyFromCounts(acc), copyVec(acc));
      }
      return;
    }

    for (const option of optionLists[position]) {
      if (addVec(acc, option)) {
        walk(position + 1);
        removeVec(acc, option);
      }
    }
  }

  walk(0);
  return Array.from(results.values());
}

function chooseItems(items, amount, callback, start = 0, picked = []) {
  if (picked.length === amount) {
    callback([...picked]);
    return;
  }
  for (let i = start; i <= items.length - (amount - picked.length); i += 1) {
    picked.push(items[i]);
    chooseItems(items, amount, callback, i + 1, picked);
    picked.pop();
  }
}

function chooseGroups(groups, amount, repeat = false) {
  const out = new Map();
  const acc = zeros();

  function walk(depth, start) {
    if (depth === amount) {
      out.set(keyFromCounts(acc), copyVec(acc));
      return;
    }
    for (let i = start; i < groups.length; i += 1) {
      if (addVec(acc, groups[i])) {
        walk(depth + 1, repeat ? i : i + 1);
        removeVec(acc, groups[i]);
      }
    }
  }

  walk(0, 0);
  return Array.from(out.values());
}

function pairOptions(ids) {
  return ids.map(pair);
}

function pungOptions(ids) {
  return ids.map(pung);
}

function singleOptions(ids) {
  return ids.map(single);
}

function chowOptions(suit, starts = [1, 2, 3, 4, 5, 6, 7]) {
  return starts.map((start) => chowGroup(suit, start));
}

function allChowOptions() {
  return suitOrder.flatMap((suit) => chowOptions(suit));
}

function allPungOptions() {
  return pungOptions(allTileIds);
}

function vecFromIds(ids) {
  return group(ids);
}

function mergeGroups(groupsToMerge) {
  const acc = zeros();
  for (const item of groupsToMerge) {
    if (!addVec(acc, item)) return null;
  }
  return acc;
}

function idsInVec(vec) {
  const ids = [];
  for (let i = 0; i < TILE_COUNT; i += 1) {
    if (vec[i] > 0) ids.push(tiles[i].id);
  }
  return ids;
}

function makeTargetPattern({ id, name, category, winning, fishing, generate, note }) {
  const cache = new Map();
  return {
    id,
    name,
    category,
    winning,
    fishing,
    note,
    getTargets(context) {
      const cacheKey = context.seatWind || "we";
      if (!cache.has(cacheKey)) {
        cache.set(cacheKey, prepareTargets(generate(context)));
      }
      return cache.get(cacheKey).targets;
    },
    getTargetKeys(context) {
      const cacheKey = context.seatWind || "we";
      if (!cache.has(cacheKey)) {
        cache.set(cacheKey, prepareTargets(generate(context)));
      }
      return cache.get(cacheKey).keys;
    },
    isWin(counts, context) {
      if (totalInVec(counts) !== 14) return false;
      return this.getTargetKeys(context).has(keyFromCounts(counts));
    },
    distance(counts, context) {
      return bestMissingFromTargets(counts, this.getTargets(context), context?.liveCopies);
    },
  };
}

function makeCustomPattern({ id, name, category, winning, fishing, isWin, distance, note }) {
  return { id, name, category, winning, fishing, isWin, distance, note };
}

const exposureDotCounts = {
  ordinary: 1,
  purity: 1,
  "dragons-tail": 1,
  "red-lantern": 1,
  dragonfly: 1,
  lillypilly: 1,
  "moon-at-bottom-of-well": 1,
  "all-honour-hand": 1,
  "windy-ones": 1,
  "windy-nines": 1,
  "three-sisters": 1,
  "seven-brothers": 1,
  "green-jade": 2,
  "imperial-jade": 2,
  "lily-of-the-valley": 2,
  "red-lily": 2,
  "royal-ruby": 2,
  "ruby-jade": 2,
  "red-waratah": 2,
  "red-coral": 2,
  "white-opal": 2,
  "blue-mountains": 2,
  "white-elephant": 2,
  "driven-snow": 2,
  "dragons-scales": 2,
  "dragons-teeth": 2,
  "windy-dragons": 2,
  "all-winds-and-dragons": 2,
  "four-blessings": 2,
  "civil-war": 2,
  "heads-and-tails": 2,
  "numbers-in-parallel": 2,
  "three-great-scholars": 2,
};

function exposureLabelForPattern(pattern) {
  const dots = exposureDotCounts[pattern.id] || 0;
  if (dots >= 2) return "Exposed";
  if (dots === 1) return "Concealed / Exposed";
  return "Concealed";
}

function canShowWithExposedHand(pattern) {
  if (pattern.game === "american") return pattern.exposure !== "concealed";
  if (rulesetGameIds.has(pattern.game)) return pattern.exposure !== "concealed";
  return (exposureDotCounts[pattern.id] || 0) > 0;
}

function hasOwnTablePickupExposure() {
  return (state.pickedUpByPlayer.me || []).length > 0
    || state.kongTiles.length > 0
    || state.lockedHandSlots.some(Boolean)
    || state.lockedDraw === true;
}

const calculateExposureScoreIds = new Set(["ordinary", "all-honour-hand", "purity"]);

function usesCalculatedExposureScore(pattern) {
  return calculateExposureScoreIds.has(pattern.id)
    || ["All Honour Hand", "All Honour Hands", "Purity", "Ordinary Mah Jong", "Ordinary Mahjong"].includes(pattern.name);
}

function splitExposureScores(pattern) {
  const dots = exposureDotCounts[pattern.id] || 0;
  if (usesCalculatedExposureScore(pattern)) {
    return [{ label: "Concealed / Exposed", win: "Calculate Win", fish: null }];
  }
  if (dots === 1) {
    if (pattern.id === "red-lantern") {
      return [
        { label: "Concealed", win: 2000, fish: 800 },
        { label: "Exposed", win: 1000, fish: 400 },
      ];
    }
    return [
      { label: "Concealed", win: 1000, fish: 400 },
      { label: "Exposed", win: 500, fish: 200 },
    ];
  }
  return [{ label: exposureLabelForPattern(pattern), win: pattern.winning, fish: pattern.fishing }];
}

function scoreLineLabel(score) {
  const label = exposureText(score.label);
  if (score.fish == null) return `${label} · ${translatedScoreValue(score.win)}`;
  return `${label} · ${t("win")} ${translatedScoreValue(score.win)} · ${t("fish")} ${scoreLabel(score.fish)}`;
}

function scoreMetaHTML(pattern) {
  if (pattern.game === "american") {
    const exposure = pattern.exposure === "concealed" ? t("concealed") : t("exposed");
    return `<div class="result-meta">${exposure} · ${t("win")} ${scoreLabel(pattern.winning)}</div>`;
  }

  if (rulesetGameIds.has(pattern.game)) {
    const scoreUnit = pattern.game === "riichi" ? t("han") : t("faan");
    const concealedLabel = pattern.game === "riichi" && pattern.limit ? limitLabel(pattern.limit) : `${scoreUnit} ${scoreLabel(pattern.winning)}`;
    if (pattern.openWinning && pattern.openWinning !== pattern.winning) {
      return `
        <div class="result-meta result-score-lines">
          <span>${t("concealed")} · ${scoreUnit} ${scoreLabel(pattern.winning)}</span>
          <span>${t("exposed")} · ${scoreUnit} ${scoreLabel(pattern.openWinning)}</span>
        </div>
      `;
    }
    const exposure = pattern.exposure === "concealed" ? t("concealed") : t("concealedExposed");
    return `<div class="result-meta">${exposure} · ${concealedLabel}</div>`;
  }

  const scores = splitExposureScores(pattern);
  if (scores.length === 1) return `<div class="result-meta">${scoreLineLabel(scores[0])}</div>`;
  return `
    <div class="result-meta result-score-lines">
      ${scores.map((score) => `<span>${scoreLineLabel(score)}</span>`).join("\n")}
    </div>
  `;
}

function winningPointValuesForPattern(pattern) {
  if (pattern.game === "american") return typeof pattern.winning === "number" ? [pattern.winning] : [];
  if (rulesetGameIds.has(pattern.game)) {
    return [pattern.winning, pattern.openWinning].filter((value) => typeof value === "number");
  }
  return splitExposureScores(pattern)
    .map((score) => score.win)
    .filter((value) => typeof value === "number");
}

function topWinningPointForPattern(pattern) {
  const values = winningPointValuesForPattern(pattern);
  return values.length ? Math.max(...values) : 0;
}

function prepareTargets(rawTargets) {
  const targets = uniqueVectors(rawTargets);
  return {
    targets,
    keys: new Set(targets.map(keyFromCounts)),
  };
}

function bestMissingFromTargets(counts, targets, liveCopies = null) {
  let best = emptyBestMissing();

  for (const target of targets) {
    const stopAfter = best.blocked ? Infinity : best.missing;
    best = chooseBetterMissing(best, missingAgainstTarget(counts, target, stopAfter, liveCopies));
  }

  if (!Number.isFinite(best.missing)) {
    return { missing: 14, needed: [], discards: [], blocked: true, deadNeeded: [] };
  }

  return {
    missing: best.missing,
    needed: best.needed,
    discards: best.discards,
    blocked: best.blocked,
    deadNeeded: best.deadNeeded,
  };
}

function emptyBestMissing() {
  return { missing: Infinity, needed: [], discards: [], blocked: false, deadNeeded: [] };
}

function chooseBetterMissing(best, candidate) {
  if (!candidate) return best;
  if (!Number.isFinite(best.missing)) return candidate;
  if (candidate.blocked !== best.blocked) return candidate.blocked ? best : candidate;
  if (candidate.missing < best.missing) return candidate;
  if (candidate.missing === best.missing && candidate.deadNeeded.length < best.deadNeeded.length) {
    return candidate;
  }
  if (candidate.missing === best.missing && candidate.needed.length < best.needed.length) {
    return candidate;
  }
  return best;
}

function missingAgainstTarget(counts, target, stopAfter = Infinity, liveCopies = null) {
  let missing = 0;
  const needed = [];
  const discards = [];
  const neededCounts = zeros();
  const deadNeeded = [];
  const lockedCounts = lockedSelectionCounts();

  for (let i = 0; i < TILE_COUNT; i += 1) {
    if (target[i] < lockedCounts[i]) return null;
    if (target[i] > counts[i]) {
      const amount = target[i] - counts[i];
      missing += amount;
      if (missing > stopAfter) return null;
      neededCounts[i] = amount;
      for (let copy = 0; copy < amount; copy += 1) needed.push(i);
    } else if (counts[i] > target[i]) {
      const amount = counts[i] - target[i];
      for (let copy = 0; copy < amount; copy += 1) discards.push(i);
    }
  }

  if (liveCopies) {
    for (let i = 0; i < TILE_COUNT; i += 1) {
      const unavailable = Math.max(0, neededCounts[i] - liveCopies[i]);
      for (let copy = 0; copy < unavailable; copy += 1) deadNeeded.push(i);
    }
  }

  return { missing, needed, discards, blocked: deadNeeded.length > 0, deadNeeded };
}

function bestMissingFromOptionLists(counts, optionLists, best = emptyBestMissing(), liveCopies = null) {
  const acc = zeros();

  function walk(position) {
    if (position === optionLists.length) {
      const stopAfter = best.blocked ? Infinity : best.missing;
      best = chooseBetterMissing(best, missingAgainstTarget(counts, acc, stopAfter, liveCopies));
      return;
    }

    for (const option of optionLists[position]) {
      if (addVec(acc, option)) {
        walk(position + 1);
        removeVec(acc, option);
      }
    }
  }

  walk(0);
  if (!Number.isFinite(best.missing)) {
    return { missing: 14, needed: [], blocked: true, deadNeeded: [], discards: [] };
  }

  return {
    missing: best.missing,
    needed: best.needed,
    discards: best.discards,
    blocked: best.blocked,
    deadNeeded: best.deadNeeded,
  };
}

function selectionCounts() {
  const counts = zeros();
  for (const id of state.hand) counts[idToIndex(id)] += 1;
  if (state.draw) counts[idToIndex(state.draw)] += 1;
  return counts;
}

function currentPlayerOrder() {
  return state.game.players === "3" ? ["me", "left", "right"] : ["me", "left", "opposite", "right"];
}

function trackedPlayerOrder() {
  return currentPlayerOrder();
}

function previousPlayer(player = state.activePlayer) {
  const order = currentPlayerOrder();
  const index = order.indexOf(player);
  if (index < 0) return "me";
  return order[(index + order.length - 1) % order.length];
}

function tablePickupSourceOrder(player = state.activePlayer) {
  const order = currentPlayerOrder();
  const previous = previousPlayer(player);
  return [
    previous,
    ...order.filter((sourcePlayer) => sourcePlayer !== player && sourcePlayer !== previous),
  ];
}

function findTableDiscardSource(id, player = state.activePlayer) {
  for (const sourcePlayer of tablePickupSourceOrder(player)) {
    const discards = state.discardsByPlayer[sourcePlayer] || [];
    const index = discards.lastIndexOf(id);
    if (index >= 0) return { sourcePlayer, index };
  }
  return null;
}

function canPickupTableTile(id, player = state.activePlayer) {
  if (player === "me" && totalSelected() >= HAND_SIZE + 1) return false;
  if (findTableDiscardSource(id, player)) return true;
  return (countSelectedById().get(id) || 0) < activeTileCopies(id);
}

function hasAnyTablePickup(player = state.activePlayer) {
  if (player === "me" && totalSelected() >= HAND_SIZE + 1) return false;
  return true;
}

function modeForMyTurnTileCount() {
  if (state.kongReplacementPending) return "draw";
  if (totalSelected() >= HAND_SIZE + 1) return "discard";
  if (state.hand.length >= HAND_SIZE) return "draw";
  return "hand";
}

function normalizeModeForState() {
  if (!currentPlayerOrder().includes(state.activePlayer)) state.activePlayer = "me";

  if (state.activePlayer !== "me") {
    state.exposeMode = false;
    state.kongMode = false;
    state.kongReplacementPending = false;
    if (state.mode === "table" && hasAnyTablePickup()) return;
    state.mode = "discard";
    return;
  }

  if (state.kongReplacementPending) {
    state.mode = "draw";
    return;
  }

  if (totalSelected() >= HAND_SIZE + 1) {
    state.mode = "discard";
    return;
  }

  if (state.mode === "table" && hasAnyTablePickup()) return;
  state.mode = state.hand.length >= HAND_SIZE ? "draw" : "hand";
}

function rotateToNextPlayer() {
  if (!state.autoRotate) {
    state.mode = state.activePlayer === "me" ? modeForMyTurnTileCount() : "discard";
    normalizeModeForState();
    return;
  }

  const order = currentPlayerOrder();
  const currentIndex = Math.max(0, order.indexOf(state.activePlayer));
  state.activePlayer = order[(currentIndex + 1) % order.length];
  state.mode = state.activePlayer === "me" ? modeForMyTurnTileCount() : "discard";
  normalizeModeForState();
}

function allDiscards() {
  return trackedPlayerOrder().flatMap((player) => state.discardsByPlayer[player] || []);
}

function allPickedUpTiles() {
  return trackedPlayerOrder()
    .filter((player) => player !== "me")
    .flatMap((player) => state.pickedUpByPlayer[player] || []);
}

function displayedPickedUpTiles() {
  return trackedPlayerOrder().flatMap((player) => state.pickedUpByPlayer[player] || []);
}

function rowTilesForCollection(collection) {
  return trackedPlayerOrder().flatMap((player) =>
    (collection[player] || []).map((id, index) => ({ player, id, index })),
  );
}

function isLockedPickedUpTile(player, index) {
  const locks = state.lockedPickedUpByPlayer[player] || [];
  return locks[index] !== false;
}

function lockedSelectionCounts() {
  const counts = zeros();
  state.hand.forEach((id, index) => {
    if (state.lockedHandSlots[index]) counts[idToIndex(id)] += 1;
  });
  if (state.draw && state.lockedDraw) counts[idToIndex(state.draw)] += 1;
  return counts;
}

function discardableSelectionCounts() {
  const counts = zeros();
  state.hand.forEach((id, index) => {
    if (!state.lockedHandSlots[index]) counts[idToIndex(id)] += 1;
  });
  if (state.draw && !state.lockedDraw) counts[idToIndex(state.draw)] += 1;
  return counts;
}

function knownCounts() {
  const counts = selectionCounts();
  for (const id of state.kongTiles) counts[idToIndex(id)] += 1;
  for (const id of allDiscards()) counts[idToIndex(id)] += 1;
  for (const id of allPickedUpTiles()) counts[idToIndex(id)] += 1;
  return counts;
}

function liveCopiesFromKnown(known) {
  return Array.from(known, (count, index) => Math.max(0, activeTileCopies(index) - count));
}

function totalSelected() {
  return state.hand.length + (state.draw ? 1 : 0);
}

function totalKnown() {
  return totalSelected() + state.kongTiles.length + allDiscards().length + allPickedUpTiles().length;
}

function countSelectedById() {
  const counts = new Map();
  for (const id of state.hand) counts.set(id, (counts.get(id) || 0) + 1);
  if (state.draw) counts.set(state.draw, (counts.get(state.draw) || 0) + 1);
  for (const id of state.kongTiles) counts.set(id, (counts.get(id) || 0) + 1);
  for (const id of allDiscards()) counts.set(id, (counts.get(id) || 0) + 1);
  for (const id of allPickedUpTiles()) counts.set(id, (counts.get(id) || 0) + 1);
  return counts;
}

function canUseTile(id, replacingDraw = false) {
  const counts = countSelectedById();
  const current = counts.get(id) || 0;
  const drawAdjustment = replacingDraw && state.draw === id ? 1 : 0;
  return current - drawAdjustment < activeTileCopies(id);
}

function resetDrawSlotPurpose() {
  state.drawSlotPurpose = "last-pickup";
}

function pushHistory() {
  state.history.push({
    hand: [...state.hand],
    draw: state.draw,
    kongTiles: [...state.kongTiles],
    activePlayer: state.activePlayer,
    lastDiscard: state.lastDiscard,
    discardsByPlayer: structuredCloneDiscards(),
    pickedUpByPlayer: structuredClonePickedUp(),
    lockedHandSlots: [...state.lockedHandSlots],
    lockedDraw: state.lockedDraw,
    lockedPickedUpByPlayer: structuredCloneLockedPickedUp(),
    trackAllPlayers: state.trackAllPlayers,
    autoRotate: state.autoRotate,
    autoRotateUserSet: state.autoRotateUserSet,
    exposeMode: state.exposeMode,
    kongMode: state.kongMode,
    kongReplacementPending: state.kongReplacementPending,
    heldResults: state.heldResults,
    drawSlotPurpose: state.drawSlotPurpose,
    mode: state.mode,
    seatWind: state.seatWind,
    filter: state.filter,
  });
  if (state.history.length > 60) state.history.shift();
}

function restore(snapshot) {
  state.hand = [...snapshot.hand];
  state.draw = snapshot.draw;
  state.kongTiles = Array.isArray(snapshot.kongTiles) ? snapshot.kongTiles.filter((id) => tileById.has(id)) : [];
  state.activePlayer = currentPlayerOrder().includes(snapshot.activePlayer) ? snapshot.activePlayer : "me";
  state.lastDiscard = tileById.has(snapshot.lastDiscard) ? snapshot.lastDiscard : null;
  state.discardsByPlayer = normalizeDiscardsByPlayer(snapshot.discardsByPlayer || { me: snapshot.discards || [] });
  state.pickedUpByPlayer = normalizeDiscardsByPlayer(snapshot.pickedUpByPlayer || {});
  state.lockedHandSlots = normalizeLockList(snapshot.lockedHandSlots, state.hand.length, false);
  state.lockedDraw = snapshot.lockedDraw === true && !!state.draw;
  state.lockedPickedUpByPlayer = normalizeLockedPickedUpByPlayer(snapshot.lockedPickedUpByPlayer);
  state.trackAllPlayers = true;
  state.autoRotateUserSet = snapshot.autoRotateUserSet === true;
  state.autoRotate = state.autoRotateUserSet && snapshot.autoRotate === true;
  state.exposeMode = snapshot.exposeMode === true;
  state.kongMode = snapshot.kongMode === true;
  state.kongReplacementPending = snapshot.kongReplacementPending === true;
  state.heldResults = snapshot.heldResults || null;
  state.drawSlotPurpose = snapshot.drawSlotPurpose === "suggested-discard" ? "suggested-discard" : "last-pickup";
  state.mode = snapshot.mode;
  state.seatWind = snapshot.seatWind;
  state.filter = snapshot.filter;
}

function structuredCloneDiscards() {
  return {
    me: [...(state.discardsByPlayer.me || [])],
    left: [...(state.discardsByPlayer.left || [])],
    opposite: [...(state.discardsByPlayer.opposite || [])],
    right: [...(state.discardsByPlayer.right || [])],
  };
}

function structuredClonePickedUp() {
  return {
    me: [...(state.pickedUpByPlayer.me || [])],
    left: [...(state.pickedUpByPlayer.left || [])],
    opposite: [...(state.pickedUpByPlayer.opposite || [])],
    right: [...(state.pickedUpByPlayer.right || [])],
  };
}

function structuredCloneLockedPickedUp() {
  return {
    me: [...(state.lockedPickedUpByPlayer.me || [])],
    left: [...(state.lockedPickedUpByPlayer.left || [])],
    opposite: [...(state.lockedPickedUpByPlayer.opposite || [])],
    right: [...(state.lockedPickedUpByPlayer.right || [])],
  };
}

function normalizeLockList(raw, length, defaultValue = false) {
  return Array.from({ length }, (_, index) => {
    if (typeof raw?.[index] === "boolean") return raw[index];
    return defaultValue;
  });
}

function normalizeLockedPickedUpByPlayer(raw = {}) {
  return {
    me: normalizeLockList(raw.me, (state.pickedUpByPlayer.me || []).length, true),
    left: normalizeLockList(raw.left, (state.pickedUpByPlayer.left || []).length, true),
    opposite: normalizeLockList(raw.opposite, (state.pickedUpByPlayer.opposite || []).length, true),
    right: normalizeLockList(raw.right, (state.pickedUpByPlayer.right || []).length, true),
  };
}

function normalizeDiscardsByPlayer(raw) {
  const normalized = { me: [], left: [], opposite: [], right: [] };
  for (const player of Object.keys(normalized)) {
    normalized[player] = Array.isArray(raw[player]) ? raw[player].filter((id) => tileById.has(id)) : [];
  }
  return normalized;
}

function sanitizeTilesForVersion(version = state.game.version) {
  const counts = new Map();

  function keepTile(id) {
    if (!tileById.has(id)) return false;
    const maxCopies = activeTileCopies(id, version);
    const used = counts.get(id) || 0;
    if (used >= maxCopies) return false;
    counts.set(id, used + 1);
    return true;
  }

  const nextHand = [];
  const nextHandLocks = [];
  state.hand.forEach((id, index) => {
    if (nextHand.length >= HAND_SIZE) return;
    if (keepTile(id)) {
      nextHand.push(id);
      nextHandLocks.push(state.lockedHandSlots[index] === true);
    }
  });
  state.hand = nextHand;
  state.lockedHandSlots = nextHandLocks;

  if (state.draw && keepTile(state.draw)) {
    state.lockedDraw = state.lockedDraw === true;
  } else {
    state.draw = null;
    state.lockedDraw = false;
  }

  state.kongTiles = (state.kongTiles || []).filter(keepTile);
  if (!state.kongTiles.length) state.kongReplacementPending = false;

  for (const player of Object.keys(state.discardsByPlayer)) {
    state.discardsByPlayer[player] = (state.discardsByPlayer[player] || []).filter(keepTile);
  }

  for (const player of Object.keys(state.pickedUpByPlayer)) {
    const nextPickedUp = [];
    const nextPickedUpLocks = [];
    (state.pickedUpByPlayer[player] || []).forEach((id, index) => {
      if (keepTile(id)) {
        nextPickedUp.push(id);
        nextPickedUpLocks.push(isLockedPickedUpTile(player, index));
      }
    });
    state.pickedUpByPlayer[player] = nextPickedUp;
    state.lockedPickedUpByPlayer[player] = nextPickedUpLocks;
  }

  if (state.mode === "discard" && state.activePlayer === "me" && !state.draw) {
    state.mode = state.hand.length >= HAND_SIZE ? "draw" : "hand";
  }
  if (state.mode === "draw" && state.hand.length < HAND_SIZE && !state.kongReplacementPending) state.mode = "hand";
}

function addTile(id) {
  if (state.mode === "discard") return;
  if (state.mode === "table") {
    pickupTileFromTable(id);
    return;
  }

  if (state.hand.length < HAND_SIZE) {
    if (canUseTile(id)) {
      pushHistory();
      state.heldResults = null;
      resetDrawSlotPurpose();
      state.hand.push(id);
      state.lockedHandSlots.push(false);
      if (state.kongReplacementPending) state.kongReplacementPending = false;
      normalizeModeForState();
      render();
    }
    return;
  }

  if (state.mode === "draw") {
    if (!canUseTile(id, true)) return;
    pushHistory();
    state.heldResults = null;
    resetDrawSlotPurpose();
    state.draw = id;
    state.lockedDraw = false;
    if (state.kongReplacementPending) state.kongReplacementPending = false;
    normalizeModeForState();
    render();
    return;
  }
}

function finishKongDeclaration(id) {
  state.kongTiles.push(id);
  state.activePlayer = "me";
  state.exposeMode = false;
  state.kongMode = false;
  state.kongReplacementPending = true;
  state.mode = "draw";
}

function declareKongHandTile(index) {
  const id = state.hand[index];
  if (state.activePlayer !== "me" || !id) return;
  pushHistory();
  state.heldResults = null;
  resetDrawSlotPurpose();
  state.hand.splice(index, 1);
  state.lockedHandSlots.splice(index, 1);
  finishKongDeclaration(id);
  render();
}

function declareKongDrawTile() {
  if (state.activePlayer !== "me" || !state.draw) return;
  pushHistory();
  state.heldResults = null;
  resetDrawSlotPurpose();
  const id = state.draw;
  state.draw = null;
  state.lockedDraw = false;
  finishKongDeclaration(id);
  render();
}

function removeHandTile(index) {
  pushHistory();
  state.heldResults = null;
  resetDrawSlotPurpose();
  state.hand.splice(index, 1);
  state.lockedHandSlots.splice(index, 1);
  if (state.hand.length < HAND_SIZE) state.mode = "hand";
  render();
}

function discardHandTile(index) {
  const id = state.hand[index];
  if (!id || state.lockedHandSlots[index]) return;
  pushHistory();
  holdCurrentResults();
  resetDrawSlotPurpose();
  state.discardsByPlayer.me.push(id);
  state.lastDiscard = id;

  if (state.draw) {
    state.hand[index] = state.draw;
    state.lockedHandSlots[index] = state.lockedDraw;
    state.draw = null;
    state.lockedDraw = false;
  } else {
    state.hand.splice(index, 1);
    state.lockedHandSlots.splice(index, 1);
  }

  rotateToNextPlayer();
  render();
}

function discardDrawTile() {
  if (!state.draw || state.lockedDraw) return;
  pushHistory();
  holdCurrentResults();
  resetDrawSlotPurpose();
  const id = state.draw;
  state.discardsByPlayer.me.push(id);
  state.lastDiscard = id;
  state.draw = null;
  state.lockedDraw = false;
  rotateToNextPlayer();
  render();
}

function discardOwnSelectedTile(id) {
  if (state.draw === id && !state.lockedDraw) {
    discardDrawTile();
    return;
  }

  const handIndex = state.hand.findIndex((handId, index) => handId === id && !state.lockedHandSlots[index]);
  if (handIndex >= 0) discardHandTile(handIndex);
}

function canDiscardOwnTile(id) {
  return (state.draw === id && !state.lockedDraw)
    || state.hand.some((handId, index) => handId === id && !state.lockedHandSlots[index]);
}

function setUnitLocked(unit, locked = true) {
  if (unit.origin === "draw") {
    state.lockedDraw = locked && !!state.draw;
    return;
  }
  if (unit.origin === "hand" && unit.originIndex >= 0 && unit.originIndex < state.lockedHandSlots.length) {
    state.lockedHandSlots[unit.originIndex] = locked;
  }
}

function toggleHandExposure(index) {
  if (state.activePlayer !== "me" || !state.hand[index]) return;
  pushHistory();
  state.heldResults = null;
  resetDrawSlotPurpose();
  state.lockedHandSlots[index] = state.lockedHandSlots[index] !== true;
  render();
}

function toggleDrawExposure() {
  if (state.activePlayer !== "me" || !state.draw) return;
  pushHistory();
  state.heldResults = null;
  resetDrawSlotPurpose();
  state.lockedDraw = state.lockedDraw !== true;
  render();
}

function claimedUnitFromRef(claimedRef) {
  if (claimedRef?.origin === "draw" && state.draw) {
    return {
      id: state.draw,
      locked: state.lockedDraw === true,
      origin: "draw",
      originIndex: HAND_SIZE,
      claimed: true,
    };
  }
  if (claimedRef?.origin === "hand" && state.hand[claimedRef.index]) {
    return {
      id: state.hand[claimedRef.index],
      locked: state.lockedHandSlots[claimedRef.index] === true,
      origin: "hand",
      originIndex: claimedRef.index,
      claimed: true,
    };
  }
  return null;
}

function unitsWithClaimed(claimedRef) {
  const claimed = claimedUnitFromRef(claimedRef);
  return selectedTileUnits().map((unit) => ({
    ...unit,
    claimed: Boolean(claimed && unit.origin === claimed.origin && unit.originIndex === claimed.originIndex),
  }));
}

function pickUnitsForIds(units, ids, claimedUnit) {
  const chosen = [];
  const used = new Set();
  const unitKey = (unit) => `${unit.origin}:${unit.originIndex}`;

  if (claimedUnit) {
    chosen.push(claimedUnit);
    used.add(unitKey(claimedUnit));
  }

  const needed = new Map();
  for (const id of ids) needed.set(id, (needed.get(id) || 0) + 1);
  if (claimedUnit) needed.set(claimedUnit.id, (needed.get(claimedUnit.id) || 0) - 1);

  for (const [id, count] of needed) {
    for (let i = 0; i < count; i += 1) {
      const unit = units.find((candidate) => candidate.id === id && !used.has(unitKey(candidate)));
      if (!unit) return null;
      chosen.push(unit);
      used.add(unitKey(unit));
    }
  }

  return chosen;
}

function sameKindExposeCandidates(units, claimedUnit, size, allowJokers) {
  const candidates = [];
  const claimedIsJoker = claimedUnit.id === jokerId;
  const baseIds = claimedIsJoker
    ? Array.from(new Set(units.map((unit) => unit.id))).filter((id) => id !== jokerId)
    : [claimedUnit.id];

  for (const baseId of baseIds) {
    const baseTile = tileById.get(baseId);
    if (!baseTile || baseTile.type === "joker") continue;
    const naturalUnits = units.filter((unit) => unit.id === baseId);
    const jokerUnits = allowJokers ? units.filter((unit) => unit.id === jokerId) : [];
    if (naturalUnits.length + jokerUnits.length < size) continue;
    if (allowJokers && naturalUnits.length < 1) continue;
    if (!allowJokers && naturalUnits.length < size) continue;

    const chosen = [];
    const used = new Set();
    const key = (unit) => `${unit.origin}:${unit.originIndex}`;
    chosen.push(claimedUnit);
    used.add(key(claimedUnit));

    const addMatching = (pool, needed) => {
      for (const unit of pool) {
        if (chosen.length >= size || needed <= 0) break;
        if (used.has(key(unit))) continue;
        chosen.push(unit);
        used.add(key(unit));
        needed -= 1;
      }
      return needed;
    };

    let neededNatural = claimedIsJoker ? Math.min(naturalUnits.length, size - 1) : Math.min(naturalUnits.length - 1, size - 1);
    if (claimedIsJoker) {
      neededNatural = Math.min(naturalUnits.length, size - 1);
    }
    addMatching(naturalUnits, neededNatural);
    if (allowJokers) addMatching(jokerUnits, size - chosen.length);

    if (chosen.length === size) {
      candidates.push({
        kind: size === 5 ? "quint" : size === 4 ? "kong" : "pung",
        priority: size === 5 ? 50 : size === 4 ? 40 : 30,
        units: chosen,
        naturalCount: chosen.filter((unit) => unit.id === baseId).length,
      });
    }
  }

  return candidates;
}

function chowExposeCandidates(units, claimedUnit) {
  if (state.game.version === "american") return [];
  const tile = tileById.get(claimedUnit.id);
  if (tile?.type !== "suit") return [];

  const candidates = [];
  const firstStart = Math.max(1, tile.rank - 2);
  const lastStart = Math.min(tile.rank, 7);
  for (let start = firstStart; start <= lastStart; start += 1) {
    const ids = [`${tile.suit}${start}`, `${tile.suit}${start + 1}`, `${tile.suit}${start + 2}`];
    const chosen = pickUnitsForIds(units, ids, claimedUnit);
    if (chosen) {
      candidates.push({
        kind: "chow",
        priority: 20,
        units: chosen,
        naturalCount: 3,
      });
    }
  }
  return candidates;
}

function bestExposeCandidateForClaim(claimedRef) {
  const units = unitsWithClaimed(claimedRef);
  const claimedUnit = units.find((unit) => unit.claimed);
  if (!claimedUnit) return null;

  const allowJokers = state.game.version === "american";
  const sizes = allowJokers ? [5, 4, 3] : [4, 3];
  const candidates = [
    ...sizes.flatMap((size) => sameKindExposeCandidates(units, claimedUnit, size, allowJokers)),
    ...chowExposeCandidates(units, claimedUnit),
  ];

  return candidates.sort((a, b) =>
    b.priority - a.priority ||
    b.units.filter((unit) => unit.locked).length - a.units.filter((unit) => unit.locked).length ||
    b.naturalCount - a.naturalCount ||
    a.units.map((unit) => idToIndex(unit.id)).join("-").localeCompare(b.units.map((unit) => idToIndex(unit.id)).join("-")),
  )[0] || null;
}

function autoExposeClaimedTile(claimedRef) {
  const candidate = bestExposeCandidateForClaim(claimedRef);
  if (!candidate) return;
  for (const unit of candidate.units) setUnitLocked(unit, true);
}

function pickupTileFromTable(id) {
  const source = findTableDiscardSource(id);
  if (!source && !canPickupTableTile(id)) return;

  pushHistory();
  state.heldResults = null;
  resetDrawSlotPurpose();
  if (source) state.discardsByPlayer[source.sourcePlayer].splice(source.index, 1);

  if (state.activePlayer === "me") {
    state.pickedUpByPlayer.me.push(id);
    state.lockedPickedUpByPlayer.me.push(true);
    let claimedRef = null;
    if (state.hand.length < HAND_SIZE) {
      state.hand.push(id);
      state.lockedHandSlots.push(true);
      claimedRef = { origin: "hand", index: state.hand.length - 1 };
    } else {
      state.draw = id;
      state.lockedDraw = true;
      claimedRef = { origin: "draw" };
    }
    autoExposeClaimedTile(claimedRef);
  } else {
    state.pickedUpByPlayer[state.activePlayer].push(id);
    state.lockedPickedUpByPlayer[state.activePlayer].push(true);
  }

  state.mode = "discard";
  normalizeModeForState();
  render();
}

function addOtherPlayerDiscard(id) {
  if (state.activePlayer === "me" || !canUseTile(id)) return;
  pushHistory();
  resetDrawSlotPurpose();
  state.discardsByPlayer[state.activePlayer].push(id);
  state.lastDiscard = id;
  rotateToNextPlayer();
  render();
}

function claimDiscardTile(sourcePlayer, index) {
  const sourceDiscards = state.discardsByPlayer[sourcePlayer];
  const id = sourceDiscards?.[index];
  if (!id || state.mode !== "table") return;

  pushHistory();
  state.heldResults = null;
  resetDrawSlotPurpose();
  sourceDiscards.splice(index, 1);

  if (state.activePlayer === "me") {
    state.pickedUpByPlayer.me.push(id);
    state.lockedPickedUpByPlayer.me.push(true);
    let claimedRef = null;
    if (state.hand.length < HAND_SIZE) {
      state.hand.push(id);
      state.lockedHandSlots.push(true);
      claimedRef = { origin: "hand", index: state.hand.length - 1 };
    } else {
      state.draw = id;
      state.lockedDraw = true;
      claimedRef = { origin: "draw" };
    }
    autoExposeClaimedTile(claimedRef);
    state.mode = "discard";
  } else {
    state.pickedUpByPlayer[state.activePlayer].push(id);
    state.lockedPickedUpByPlayer[state.activePlayer].push(true);
    state.mode = "discard";
  }

  normalizeModeForState();
  render();
}

function removeOnePickedUpTile(player, id) {
  const pickedUp = state.pickedUpByPlayer[player] || [];
  const index = pickedUp.indexOf(id);
  if (index >= 0) {
    pickedUp.splice(index, 1);
    state.lockedPickedUpByPlayer[player]?.splice(index, 1);
  }
}

function removeDiscardTile(player, index) {
  pushHistory();
  state.heldResults = null;
  state.discardsByPlayer[player].splice(index, 1);
  render();
}

function removePickedUpTile(player, index) {
  pushHistory();
  state.heldResults = null;
  state.pickedUpByPlayer[player].splice(index, 1);
  state.lockedPickedUpByPlayer[player]?.splice(index, 1);
  render();
}

function removeDrawTile() {
  if (!state.draw) return;
  pushHistory();
  state.heldResults = null;
  resetDrawSlotPurpose();
  state.draw = null;
  state.lockedDraw = false;
  state.mode = "draw";
  render();
}

function tileHTML(id) {
  const tile = tileById.get(id);
  if (tile.art) {
    return `
      <span class="tile ${tile.className} has-art" aria-hidden="true">
        <img class="tile-art" src="${tile.art}" alt="" draggable="false" />
      </span>
    `;
  }

  return `
    <span class="tile ${tile.className}">
      <span class="face">${tile.face}</span>
      <span class="suit">${tile.label}</span>
    </span>
  `;
}

function chipHTML(indexOrId, suffix = "", options = {}) {
  const tile = typeof indexOrId === "number" ? tiles[indexOrId] : tileById.get(indexOrId);
  const remain = options.remaining;
  const remainLabel = Number.isFinite(remain) ? `, ${remain} ${t("remaining")}` : "";
  const remainBadge = Number.isFinite(remain) ? `<span class="chip-remain">${remain}</span>` : "";
  const remainClass = Number.isFinite(remain) ? " with-remain" : "";
  return `<span class="chip ${tile.chipClass}${remainClass}" title="${tile.name}${remainLabel}">${tile.short}${suffix}${remainBadge}</span>`;
}

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
}

function renderLanguage() {
  const language = currentLanguage();
  document.documentElement.lang = language === "cantonese" ? "yue-Hant" : language === "mandarin" ? "zh-Hans" : "en";
  document.title = t("appTitle");

  setText("#setup-title", t("setupTitle"));
  setText("#setup-form .field:nth-of-type(1) > span", t("mahjongVersion"));
  setText("#setup-form .field:nth-of-type(2) > span", t("language"));
  setText("#setup-form .player-field legend", t("players"));
  setText('#setup-form input[name="setup-players"][value="4"] + span', t("fourPlayers"));
  setText('#setup-form input[name="setup-players"][value="3"] + span', t("threePlayers"));
  setText("#setup-form .primary-button", t("start"));

  for (const option of dom.setupVersion.options) option.textContent = versionLabel(option.value);
  for (const option of dom.setupLanguage.options) option.textContent = languageLabel(option.value);

  setText("#app-title", t("currentHand"));
  setText(".topbar-seat-wind label", t("seatWind"));
  setText("#setup-change-button", t("gameSettings"));
  setText("#expose-button", t("expose"));
  setText("#kong-button", t("kong"));
  dom.undo.title = t("undo");
  dom.undo.setAttribute("aria-label", t("undo"));
  dom.clear.title = t("clear");
  dom.clear.setAttribute("aria-label", t("clear"));
  const windOptionLabels = { we: t("east"), ws: t("south"), ww: t("west"), wn: t("north") };
  for (const option of dom.seatWind.options) option.textContent = windOptionLabels[option.value] || option.textContent;

  setText("#discard-title", t("discardedTiles"));
  setText(".last-discard-heading > span", t("lastDiscarded"));
  setText("#pickup-title", t("tileSelector"));
  setText("#turn-me", t("myTurn"));
  setText("#turn-other", t("otherPlayer"));
  setText(".auto-rotate-toggle > span", t("autoRotate"));
  setText("#mode-draw", t("wallPickup"));
  setText("#mode-table", t("tablePickup"));
  setText("#mode-discard", t("discard"));
  setText("#results-title", t("bestHands"));
  setText("#filter-one", t("one"));
  setText("#filter-best", t("top"));
  setText("#filter-all", t("all"));
}

function renderSlots() {
  dom.handCount.textContent = `${state.hand.length} / ${HAND_SIZE}`;
  dom.drawCount.textContent = `${state.draw ? 1 : 0} / 1`;
  dom.drawSlotLabel.textContent = state.drawSlotPurpose === "suggested-discard" && state.draw
    ? t("bestDiscard")
    : t("lastPickup");

  const slots = [];
  for (let i = 0; i < HAND_SIZE; i += 1) {
    const id = state.hand[i];
    if (id) {
      const locked = state.lockedHandSlots[i] === true;
      const kongSelectable = state.kongMode && state.activePlayer === "me";
      const exposeSelectable = state.exposeMode && state.activePlayer === "me";
      const lockedDiscard = !kongSelectable && !exposeSelectable && state.mode === "discard" && locked;
      const action = kongSelectable ? t("kong") : exposeSelectable ? (locked ? t("unexpose") : t("expose")) : lockedDiscard ? t("cannotDiscardClaimed") : state.mode === "discard" ? t("discard") : t("remove");
      slots.push(`
        <button class="slot filled ${locked ? "locked-pickup" : ""}" type="button" title="${action} ${tileById.get(id).name}" aria-label="${action} ${tileById.get(id).name}" data-remove-hand="${i}" ${lockedDiscard ? "disabled" : ""}>
          ${tileHTML(id)}
        </button>
      `);
    } else {
      slots.push(`<div class="slot empty" aria-hidden="true"></div>`);
    }
  }
  dom.handSlots.innerHTML = slots.join("");

  if (state.draw) {
    const kongSelectable = state.kongMode && state.activePlayer === "me";
    const exposeSelectable = state.exposeMode && state.activePlayer === "me";
    const lockedDiscard = !kongSelectable && !exposeSelectable && state.mode === "discard" && state.lockedDraw;
    const action = kongSelectable ? t("kong") : exposeSelectable ? (state.lockedDraw ? t("unexpose") : t("expose")) : lockedDiscard ? t("cannotDiscardClaimed") : state.mode === "discard" ? t("discard") : t("remove");
    dom.drawSlot.innerHTML = `
      <button class="slot filled ${state.lockedDraw ? "locked-pickup" : ""}" type="button" title="${action} ${tileById.get(state.draw).name}" aria-label="${action} ${tileById.get(state.draw).name}" data-remove-draw="true" ${lockedDiscard ? "disabled" : ""}>
        ${tileHTML(state.draw)}
      </button>
    `;
  } else {
    dom.drawSlot.innerHTML = `<div class="slot empty" aria-hidden="true"></div>`;
  }

  dom.kongRow.classList.toggle("hidden", state.kongTiles.length === 0);
  dom.kongSlots.innerHTML = state.kongTiles
    .map((id) => `
      <div class="slot filled locked-pickup kong-tile" title="${t("kong")} ${tileById.get(id).name}">
        ${tileHTML(id)}
      </div>
    `)
    .join("");

  const discardedTiles = rowTilesForCollection(state.discardsByPlayer);
  const pickedUpTiles = rowTilesForCollection(state.pickedUpByPlayer);
  const lastDiscardId = state.lastDiscard || discardedTiles[discardedTiles.length - 1]?.id || null;
  const lastDiscardCanPickup = Boolean(lastDiscardId && findTableDiscardSource(lastDiscardId) && canPickupTableTile(lastDiscardId));

  if (lastDiscardId) {
    dom.lastDiscardSlot.innerHTML = `
      <div class="slot filled last-discard-tile" title="${tileById.get(lastDiscardId).name}">
        ${tileHTML(lastDiscardId)}
      </div>
    `;
  } else {
    dom.lastDiscardSlot.innerHTML = `<span class="discard-placeholder">${t("noneYet")}</span>`;
  }

  if (lastDiscardId) {
    dom.selectorLastDiscard.innerHTML = `
      <span>${t("lastDiscarded")}</span>
      <button class="selector-last-discard-button" type="button" title="${t("tablePickupAction")} ${tileById.get(lastDiscardId).name}" aria-label="${t("tablePickupAction")} ${tileById.get(lastDiscardId).name}" data-selector-table-pickup="${lastDiscardId}" ${lastDiscardCanPickup ? "" : "disabled"}>
        <span class="slot filled last-discard-tile">
          ${tileHTML(lastDiscardId)}
        </span>
      </button>
    `;
  } else {
    dom.selectorLastDiscard.innerHTML = `
      <span>${t("lastDiscarded")}</span>
      <span class="discard-placeholder">${t("none")}</span>
    `;
  }

  const discardedTilesHTML =
    discardedTiles
      .map(
        ({ id, player, index }) => `
          <button class="slot filled" type="button" title="${t("undoDiscard")} ${tileById.get(id).name}" aria-label="${t("undoDiscard")} ${tileById.get(id).name}" data-discard-player="${player}" data-remove-discard="${index}">
            ${tileHTML(id)}
          </button>
        `,
      )
      .join("") || `<span class="discard-placeholder">${t("none")}</span>`;
  const pickedUpTilesHTML =
    pickedUpTiles
      .map(
        ({ id, player, index }) => `
          <button class="slot filled ${isLockedPickedUpTile(player, index) ? "locked-pickup" : ""}" type="button" title="${t("undoPickup")} ${tileById.get(id).name}" aria-label="${t("undoPickup")} ${tileById.get(id).name}" data-pickup-player="${player}" data-remove-pickup="${index}">
            ${tileHTML(id)}
          </button>
        `,
      )
      .join("") || `<span class="discard-placeholder">${t("none")}</span>`;

  dom.discardSlots.innerHTML = `
    <div class="discard-player-rows simple-discard-rows">
      <div class="discard-row-label">${t("discarded")}</div>
      <div class="discard-tile-row">${discardedTilesHTML}</div>
      <div class="discard-row-label">${t("pickedUp")}</div>
      <div class="discard-tile-row">${pickedUpTilesHTML}</div>
    </div>
  `;
}

function renderMode() {
  normalizeModeForState();
  renderPointFilters();
  dom.modeDraw.classList.toggle("active", state.mode === "draw");
  dom.modeTable.classList.toggle("active", state.mode === "table");
  dom.modeDiscard.classList.toggle("active", state.mode === "discard");
  dom.modeDraw.setAttribute("aria-pressed", String(state.mode === "draw"));
  dom.modeTable.setAttribute("aria-pressed", String(state.mode === "table"));
  dom.modeDiscard.setAttribute("aria-pressed", String(state.mode === "discard"));
  const otherPlayerActive = state.activePlayer !== "me";
  if (otherPlayerActive) state.exposeMode = false;
  if (otherPlayerActive) state.kongMode = false;
  const total = totalSelected();
  dom.turnMe.classList.toggle("active", !otherPlayerActive);
  dom.turnOther.classList.toggle("active", otherPlayerActive);
  dom.turnMe.setAttribute("aria-pressed", String(!otherPlayerActive));
  dom.turnOther.setAttribute("aria-pressed", String(otherPlayerActive));
  dom.autoRotate.checked = state.autoRotate;
  dom.expose.classList.toggle("active", state.exposeMode);
  dom.expose.disabled = otherPlayerActive;
  dom.expose.setAttribute("aria-pressed", String(state.exposeMode));
  dom.kong.classList.toggle("active", state.kongMode);
  dom.kong.disabled = otherPlayerActive || totalSelected() === 0;
  dom.kong.setAttribute("aria-pressed", String(state.kongMode));
  dom.modeDraw.disabled = otherPlayerActive || (!state.kongReplacementPending && state.hand.length < HAND_SIZE) || total >= HAND_SIZE + 1;
  dom.modeTable.disabled = !hasAnyTablePickup();
  dom.modeDiscard.disabled = !otherPlayerActive && total < HAND_SIZE + 1;
  dom.handGrid.classList.toggle("locked-zone", otherPlayerActive);
  dom.handSlots.classList.toggle("locked-zone", otherPlayerActive);
  dom.drawSlot.classList.toggle("locked-zone", otherPlayerActive);
  dom.setupVersion.value = state.game.version;
  dom.setupLanguage.value = state.game.language;
  const playerInput = dom.setupForm.querySelector(`input[name="setup-players"][value="${state.game.players}"]`);
  if (playerInput) playerInput.checked = true;
  dom.setupScreen.classList.toggle("hidden", state.configured);
  dom.appShell.classList.toggle("hidden", !state.configured);
  dom.seatWind.value = state.seatWind;
  dom.filterOne.classList.toggle("active", state.filter === "one");
  dom.filterBest.classList.toggle("active", state.filter === "best");
  dom.filterAll.classList.toggle("active", state.filter === "all");
  dom.scoreFilters.classList.toggle("hidden", state.filter === "one" || state.ui.resultsCollapsed);
}

function renderPointFilters() {
  const options = pointFilterOptionsForVersion();
  state.pointFilters = state.pointFilters.filter((value) => options.includes(value));
  dom.pointFilterControls.innerHTML = options
    .map(
      (value) => `
        <button class="segmented point-filter ${state.pointFilters.includes(value) ? "active" : ""}" type="button" data-point-filter="${value}" aria-pressed="${state.pointFilters.includes(value)}">
          ${pointFilterLabel(value)}
        </button>
      `,
    )
    .join("");
  dom.pointFilters = Array.from(dom.pointFilterControls.querySelectorAll("[data-point-filter]"));
}

function renderCollapsibleSections() {
  const sections = [
    {
      collapsed: state.ui.discardCollapsed,
      element: dom.discardSection,
      toggle: dom.discardToggle,
      expandedLabel: t("minimiseDiscardSection"),
      collapsedLabel: t("expandDiscardSection"),
    },
    {
      collapsed: state.ui.pickupCollapsed,
      element: dom.pickupSection,
      toggle: dom.pickupToggle,
      expandedLabel: t("minimiseTileSelector"),
      collapsedLabel: t("expandTileSelector"),
    },
    {
      collapsed: state.ui.resultsCollapsed,
      element: dom.resultsSection,
      toggle: dom.resultsToggle,
      expandedLabel: t("minimiseBestHands"),
      collapsedLabel: t("expandBestHands"),
    },
  ];

  for (const section of sections) {
    section.element.classList.toggle("is-collapsed", section.collapsed);
    section.toggle.textContent = section.collapsed ? "+" : "-";
    section.toggle.title = section.collapsed ? section.collapsedLabel : section.expandedLabel;
    section.toggle.setAttribute("aria-label", section.collapsed ? section.collapsedLabel : section.expandedLabel);
    section.toggle.setAttribute("aria-expanded", String(!section.collapsed));
  }
}

function renderPalette() {
  const selectedCounts = countSelectedById();
  const groups = tileGroupsForVersion();

  dom.palette.innerHTML = groups
    .map((groupDef) => {
      const buttons = groupDef.ids
        .map((id) => {
          const used = selectedCounts.get(id) || 0;
          const remaining = activeTileCopies(id) - used;
          let disabled = false;
          if (state.mode === "table") {
            disabled = !canPickupTableTile(id);
          } else if (state.activePlayer === "me" && state.mode === "discard") {
            disabled = !canDiscardOwnTile(id);
          } else if (state.activePlayer !== "me") {
            disabled = state.mode !== "discard" || remaining <= 0;
          } else if (state.mode === "hand") {
            disabled = state.hand.length >= HAND_SIZE || remaining <= 0;
          } else if (state.mode === "draw") {
            disabled = (!state.kongReplacementPending && state.hand.length < HAND_SIZE) || totalSelected() >= HAND_SIZE + 1 || remaining <= 0;
          }
          return `
            <button class="tile-button" type="button" data-tile="${id}" title="${tileById.get(id).name}" ${disabled ? "disabled" : ""}>
              ${tileHTML(id)}
              <span class="remain">${remaining}</span>
            </button>
          `;
        })
        .join("");
      return `
        <div class="tile-group">
          <div class="tile-group-header">
            <span>${groupDef.title}</span>
          </div>
          <div class="${groupDef.grid}">
            ${buttons}
          </div>
        </div>
      `;
    })
    .join("");
}

function isOrdinaryMahjongWin(counts) {
  if (totalInVec(counts) !== 14) return false;

  for (const suit of suitOrder) {
    if (!usesOnlySuitAndHonours(counts, suit)) continue;
    const work = Array.from(counts);

    for (let pairIndex = 0; pairIndex < TILE_COUNT; pairIndex += 1) {
      if (work[pairIndex] < 2) continue;
      work[pairIndex] -= 2;
      if (canFormOrdinaryMelds(work, suit, 0, 0)) {
        work[pairIndex] += 2;
        return true;
      }
      work[pairIndex] += 2;
    }
  }

  return false;
}

function isPurityWin(counts) {
  if (totalInVec(counts) !== 14) return false;

  for (const suit of suitOrder) {
    if (!usesOnlySuit(counts, suit)) continue;
    const work = Array.from(counts);

    for (const id of suitTileIds(suit)) {
      const pairIndex = idToIndex(id);
      if (work[pairIndex] < 2) continue;
      work[pairIndex] -= 2;
      if (canFormOrdinaryMelds(work, suit, 0, 0)) {
        work[pairIndex] += 2;
        return true;
      }
      work[pairIndex] += 2;
    }
  }

  return false;
}

function usesOnlySuit(counts, allowedSuit) {
  for (let i = 0; i < TILE_COUNT; i += 1) {
    const tile = tiles[i];
    if (counts[i] > 0 && (tile.type !== "suit" || tile.suit !== allowedSuit)) return false;
  }
  return true;
}

function usesOnlySuitAndHonours(counts, allowedSuit) {
  for (let i = 0; i < TILE_COUNT; i += 1) {
    const tile = tiles[i];
    if (counts[i] > 0 && tile.type === "suit" && tile.suit !== allowedSuit) return false;
  }
  return true;
}

function canFormOrdinaryMelds(counts, suit, melds, chows) {
  let first = -1;
  for (let i = 0; i < TILE_COUNT; i += 1) {
    if (counts[i] > 0) {
      first = i;
      break;
    }
  }

  if (first === -1) {
    return melds === 4 && chows <= 1;
  }

  if (counts[first] >= 3) {
    counts[first] -= 3;
    if (canFormOrdinaryMelds(counts, suit, melds + 1, chows)) {
      counts[first] += 3;
      return true;
    }
    counts[first] += 3;
  }

  const tile = tiles[first];
  if (chows < 1 && tile.type === "suit" && tile.suit === suit && tile.rank <= 7) {
    const nextA = idToIndex(`${tile.suit}${tile.rank + 1}`);
    const nextB = idToIndex(`${tile.suit}${tile.rank + 2}`);
    if (counts[nextA] > 0 && counts[nextB] > 0) {
      counts[first] -= 1;
      counts[nextA] -= 1;
      counts[nextB] -= 1;
      if (canFormOrdinaryMelds(counts, suit, melds + 1, chows + 1)) {
        counts[first] += 1;
        counts[nextA] += 1;
        counts[nextB] += 1;
        return true;
      }
      counts[first] += 1;
      counts[nextA] += 1;
      counts[nextB] += 1;
    }
  }

  return false;
}

function ordinaryMahjongDistance(counts, liveCopies = null) {
  let best = emptyBestMissing();

  for (const suit of suitOrder) {
    const allowedIds = [...suitTileIds(suit), ...honorIds];
    const pungs = pungOptions(allowedIds);
    const pairs = pairOptions(allowedIds);

    best = bestMissingFromOptionLists(counts, [chooseGroups(pungs, 4), pairs], best, liveCopies);
    best = bestMissingFromOptionLists(counts, [chooseGroups(pungs, 3), chowOptions(suit), pairs], best, liveCopies);
  }

  return best;
}

function purityDistance(counts, liveCopies = null) {
  let best = emptyBestMissing();

  for (const suit of suitOrder) {
    const allowedIds = suitTileIds(suit);
    const pungs = pungOptions(allowedIds);
    const pairs = pairOptions(allowedIds);

    best = bestMissingFromOptionLists(counts, [chooseGroups(pungs, 4), pairs], best, liveCopies);
    best = bestMissingFromOptionLists(counts, [chooseGroups(pungs, 3), chowOptions(suit), pairs], best, liveCopies);
  }

  return best;
}

function makeSevenPairsChecker({ allowedResolver, sameSuitOnly = false }) {
  function allowedForCounts(counts) {
    if (sameSuitOnly) {
      const sets = [];
      for (const suit of suitOrder) {
        const allowed = new Set(suitTileIds(suit).map(idToIndex));
        let ok = true;
        for (let i = 0; i < TILE_COUNT; i += 1) {
          if (counts[i] > 0 && !allowed.has(i)) {
            ok = false;
            break;
          }
        }
        if (ok) sets.push(allowed);
      }
      return sets;
    }

    const allowed = allowedResolver ? allowedResolver(counts) : new Set(allTileIds.map(idToIndex));
    if (Array.isArray(allowed)) return allowed;
    return [allowed];
  }

  return {
    isWin(counts) {
      if (totalInVec(counts) !== 14) return false;
      return allowedForCounts(counts).some((allowed) => {
        let pairs = 0;
        for (let i = 0; i < TILE_COUNT; i += 1) {
          const count = counts[i];
          if (!count) continue;
          if (!allowed.has(i) || count % 2 !== 0) return false;
          pairs += count / 2;
        }
        return pairs === 7;
      });
    },
    distance(counts, liveCopies = null) {
      let best = 7;
      let needed = [];
      let deadNeeded = [];
      for (const allowed of allowedForCounts(counts)) {
        let pairs = 0;
        const singles = [];
        const unavailableSingles = [];
        for (let i = 0; i < TILE_COUNT; i += 1) {
          if (!allowed.has(i)) continue;
          pairs += Math.floor(counts[i] / 2);
          if (counts[i] % 2 === 1) {
            if (!liveCopies || liveCopies[i] > 0) {
              singles.push(i);
            } else {
              unavailableSingles.push(i);
            }
          }
        }
        const missing = Math.max(0, 7 - pairs);
        const blocked = unavailableSingles.length > 0 && singles.length < missing;
        if (missing < best || (missing === best && deadNeeded.length > unavailableSingles.length)) {
          best = missing;
          needed = singles.slice(0, 8);
          deadNeeded = blocked ? unavailableSingles.slice(0, Math.max(1, missing - singles.length)) : [];
        }
      }
      return { missing: best, needed, blocked: deadNeeded.length > 0, deadNeeded, discards: [] };
    },
  };
}

const anySevenPairs = makeSevenPairsChecker({});
const heavenlyTwins = makeSevenPairsChecker({ sameSuitOnly: true });
const allPairHonours = makeSevenPairsChecker({
  allowedResolver: () => new Set(honorAndTerminalIds.map(idToIndex)),
});
const allPairOneSuitHonours = makeSevenPairsChecker({
  allowedResolver: () =>
    suitOrder.map((suit) => new Set([...honorIds, ...suitTileIds(suit)].map(idToIndex))),
});

function generateSevenPairTargets(allowedIds, predicate = () => true) {
  const ids = [...allowedIds];
  const out = [];
  const acc = zeros();

  function walk(start, pairUnits) {
    if (pairUnits === 7) {
      if (predicate(acc)) out.push(copyVec(acc));
      return;
    }
    for (let i = start; i < ids.length; i += 1) {
      const index = idToIndex(ids[i]);
      if (acc[index] <= 2) {
        acc[index] += 2;
        walk(i, pairUnits + 1);
        acc[index] -= 2;
      }
    }
  }

  walk(0, 0);
  return out;
}

function removeVectorFromArray(counts, vec) {
  for (let i = 0; i < TILE_COUNT; i += 1) {
    if (counts[i] < vec[i]) {
      for (let j = 0; j < i; j += 1) counts[j] += vec[j];
      return false;
    }
    counts[i] -= vec[i];
  }
  return true;
}

function restoreVectorToArray(counts, vec) {
  for (let i = 0; i < TILE_COUNT; i += 1) counts[i] += vec[i];
}

function remainderIsPungPair(counts) {
  if (counts.reduce((sum, count) => sum + count, 0) !== 5) return false;

  for (let pungIndex = 0; pungIndex < TILE_COUNT; pungIndex += 1) {
    if (counts[pungIndex] < 3) continue;
    counts[pungIndex] -= 3;
    let pairFound = false;
    let clean = true;
    for (let i = 0; i < TILE_COUNT; i += 1) {
      if (counts[i] === 0) continue;
      if (counts[i] === 2 && !pairFound) {
        pairFound = true;
      } else {
        clean = false;
        break;
      }
    }
    counts[pungIndex] += 3;
    if (pairFound && clean) return true;
  }

  return false;
}

function isLittleRobertWin(counts) {
  if (totalInVec(counts) !== 14) return false;
  const work = Array.from(counts);

  for (const bChow of chowOptions("b")) {
    if (!removeVectorFromArray(work, bChow)) continue;
    for (const cChow of chowOptions("c")) {
      if (!removeVectorFromArray(work, cChow)) continue;
      for (const dChow of chowOptions("d")) {
        if (removeVectorFromArray(work, dChow)) {
          if (remainderIsPungPair(work)) {
            restoreVectorToArray(work, dChow);
            restoreVectorToArray(work, cChow);
            restoreVectorToArray(work, bChow);
            return true;
          }
          restoreVectorToArray(work, dChow);
        }
      }
      restoreVectorToArray(work, cChow);
    }
    restoreVectorToArray(work, bChow);
  }

  return false;
}

function littleRobertDistance(counts, liveCopies = null) {
  return bestMissingFromOptionLists(counts, [
    chowOptions("b"),
    chowOptions("c"),
    chowOptions("d"),
    allPungOptions(),
    pairOptions(allTileIds),
  ], emptyBestMissing(), liveCopies);
}

const simpleTileIds = suitOrder.flatMap((suit) => suitTileIds(suit, [2, 3, 4, 5, 6, 7, 8]));
const nonTerminalChowStarts = [2, 3, 4, 5, 6];

function makeRulesetTargetPattern({ game, id, name, category, winning, openWinning = null, limit = null, exposure = "open", generate, note }) {
  const pattern = makeTargetPattern({
    id: `${game}-${id}`,
    name,
    category,
    winning,
    fishing: null,
    note,
    generate,
  });
  return Object.assign(pattern, { game, exposure, openWinning, limit });
}

function makeRulesetCustomPattern({ game, id, name, category, winning, openWinning = null, limit = null, exposure = "open", isWin, distance, note }) {
  const pattern = makeCustomPattern({
    id: `${game}-${id}`,
    name,
    category,
    winning,
    fishing: null,
    note,
    isWin,
    distance,
  });
  return Object.assign(pattern, { game, exposure, openWinning, limit });
}

function standardMeldOptions(allowedIds, { chows = true, pungs = true, chowStarts = [1, 2, 3, 4, 5, 6, 7] } = {}) {
  const allowed = new Set(allowedIds);
  const options = [];

  if (pungs) {
    for (const id of allowedIds) {
      const tile = tileById.get(id);
      if (tile?.type === "suit" || tile?.type === "wind" || tile?.type === "dragon") {
        options.push(pung(id));
      }
    }
  }

  if (chows) {
    for (const suit of suitOrder) {
      for (const option of chowOptions(suit, chowStarts)) {
        if (idsInVec(option).every((id) => allowed.has(id))) options.push(option);
      }
    }
  }

  return options.filter(Boolean);
}

function standardPatternConfigs(configs, context) {
  const raw = typeof configs === "function" ? configs(context) : configs;
  return (Array.isArray(raw) ? raw : [raw]).map((config) => {
    const allowedIds = config.allowedIds || allTileIds;
    return {
      allowedIds,
      pairIds: config.pairIds || allowedIds,
      chows: config.chows !== false,
      pungs: config.pungs !== false,
      chowStarts: config.chowStarts || [1, 2, 3, 4, 5, 6, 7],
      requiredPungIds: config.requiredPungIds || [],
    };
  });
}

function isStandardWinForConfig(counts, config) {
  if (totalInVec(counts) !== 14) return false;
  const allowedIndexes = new Set(config.allowedIds.map(idToIndex));
  const pairIndexes = new Set(config.pairIds.map(idToIndex));
  const requiredPungIndexes = new Set((config.requiredPungIds || []).map(idToIndex));

  for (let i = 0; i < TILE_COUNT; i += 1) {
    if (counts[i] > 0 && !allowedIndexes.has(i)) return false;
  }

  const work = Array.from(counts);
  for (let pairIndex = 0; pairIndex < TILE_COUNT; pairIndex += 1) {
    if (work[pairIndex] < 2 || !pairIndexes.has(pairIndex)) continue;
    work[pairIndex] -= 2;
    if (canFormConfiguredMelds(work, config, allowedIndexes, requiredPungIndexes, requiredPungIndexes.size === 0)) {
      work[pairIndex] += 2;
      return true;
    }
    work[pairIndex] += 2;
  }

  return false;
}

function canFormConfiguredMelds(counts, config, allowedIndexes, requiredPungIndexes, requiredMet) {
  let first = -1;
  for (let i = 0; i < TILE_COUNT; i += 1) {
    if (counts[i] > 0) {
      first = i;
      break;
    }
  }

  if (first === -1) return requiredMet;

  if (config.pungs && counts[first] >= 3) {
    counts[first] -= 3;
    if (canFormConfiguredMelds(counts, config, allowedIndexes, requiredPungIndexes, requiredMet || requiredPungIndexes.has(first))) {
      counts[first] += 3;
      return true;
    }
    counts[first] += 3;
  }

  const tile = tiles[first];
  if (config.chows && tile.type === "suit" && tile.rank <= 7 && (config.chowStarts || []).includes(tile.rank)) {
    const nextA = idToIndex(`${tile.suit}${tile.rank + 1}`);
    const nextB = idToIndex(`${tile.suit}${tile.rank + 2}`);
    if (
      allowedIndexes.has(first)
      && allowedIndexes.has(nextA)
      && allowedIndexes.has(nextB)
      && counts[nextA] > 0
      && counts[nextB] > 0
    ) {
      counts[first] -= 1;
      counts[nextA] -= 1;
      counts[nextB] -= 1;
      if (canFormConfiguredMelds(counts, config, allowedIndexes, requiredPungIndexes, requiredMet)) {
        counts[first] += 1;
        counts[nextA] += 1;
        counts[nextB] += 1;
        return true;
      }
      counts[first] += 1;
      counts[nextA] += 1;
      counts[nextB] += 1;
    }
  }

  return false;
}

function standardDistanceForConfig(counts, config, best, liveCopies = null) {
  const melds = distanceMeldOptions(standardMeldOptions(config.allowedIds, config), counts);
  const pairs = pairOptions(config.pairIds);
  const requiredPungIds = (config.requiredPungIds || []).filter((id) => config.allowedIds.includes(id));

  if (!requiredPungIds.length) {
    return bestMissingFromOptionLists(counts, [chooseGroups(melds, 4, true), pairs], best, liveCopies);
  }

  for (const requiredId of requiredPungIds) {
    best = bestMissingFromOptionLists(counts, [[pung(requiredId)], chooseGroups(melds, 3, true), pairs], best, liveCopies);
  }

  return best;
}

function distanceMeldOptions(melds, counts) {
  const scored = melds
    .map((vec, index) => ({
      vec,
      index,
      overlap: vec.reduce((total, amount, tileIndex) => total + Math.min(amount, counts[tileIndex]), 0),
      count: totalInVec(vec),
    }))
    .sort((a, b) => b.overlap - a.overlap || a.index - b.index);
  const touchingHand = scored.filter((item) => item.overlap > 0);
  const source = touchingHand.length ? touchingHand : scored;
  const maxOptions = touchingHand.length ? 24 : 14;
  const selected = source.slice(0, maxOptions).map((item) => item.vec);
  return selected.length ? selected : melds;
}

function makeStandardRulesetPattern({ game, id, name, category, winning, openWinning = null, limit = null, exposure = "open", configs, note }) {
  return makeRulesetCustomPattern({
    game,
    id,
    name,
    category,
    winning,
    openWinning,
    limit,
    exposure,
    note,
    isWin: (counts, context) => standardPatternConfigs(configs, context).some((config) => isStandardWinForConfig(counts, config)),
    distance: (counts, context) => {
      let best = emptyBestMissing();
      for (const config of standardPatternConfigs(configs, context)) {
        best = standardDistanceForConfig(counts, config, best, context.liveCopies);
      }
      if (!Number.isFinite(best.missing)) return { missing: 14, needed: [], blocked: true, deadNeeded: [], discards: [] };
      return best;
    },
  });
}

function targetsWithFixedGroups({ fixedGroups = [], extraMelds = 0, allowedIds = allTileIds, pairIds = allTileIds, chows = true, pungs = true, chowStarts }) {
  const base = mergeGroups(fixedGroups);
  if (!base) return [];
  const lists = [[base]];
  if (extraMelds > 0) {
    lists.push(chooseGroups(standardMeldOptions(allowedIds, { chows, pungs, chowStarts }), extraMelds, true));
  }
  if (pairIds) lists.push(pairOptions(pairIds));
  return combineOptionLists(lists);
}

function allChowTargets(pairIds = suitedIds) {
  return targetsWithFixedGroups({
    extraMelds: 4,
    allowedIds: suitedIds,
    pairIds,
    chows: true,
    pungs: false,
  });
}

function pureStraightTargets(allowedIds = allTileIds, pairIds = allTileIds) {
  const out = [];
  for (const suit of suitOrder) {
    out.push(...targetsWithFixedGroups({
      fixedGroups: [chowGroup(suit, 1), chowGroup(suit, 4), chowGroup(suit, 7)],
      extraMelds: 1,
      allowedIds,
      pairIds,
    }));
  }
  return out;
}

function mixedTripleChowTargets(allowedIds = allTileIds, pairIds = allTileIds) {
  const out = [];
  for (let start = 1; start <= 7; start += 1) {
    out.push(...targetsWithFixedGroups({
      fixedGroups: suitOrder.map((suit) => chowGroup(suit, start)),
      extraMelds: 1,
      allowedIds,
      pairIds,
    }));
  }
  return out;
}

function mixedTriplePungTargets(allowedIds = allTileIds, pairIds = allTileIds) {
  const out = [];
  for (let rank = 1; rank <= 9; rank += 1) {
    out.push(...targetsWithFixedGroups({
      fixedGroups: suitOrder.map((suit) => pung(`${suit}${rank}`)),
      extraMelds: 1,
      allowedIds,
      pairIds,
    }));
  }
  return out;
}

function littleThreeDragonTargets() {
  const out = [];
  for (const pairDragon of dragonIds) {
    const pungs = dragonIds.filter((id) => id !== pairDragon).map(pung);
    out.push(...targetsWithFixedGroups({
      fixedGroups: [...pungs, pair(pairDragon)],
      extraMelds: 2,
      pairIds: null,
    }));
  }
  return out;
}

function bigThreeDragonTargets() {
  return targetsWithFixedGroups({
    fixedGroups: dragonIds.map(pung),
    extraMelds: 1,
    pairIds: allTileIds,
  });
}

function littleFourWindTargets() {
  const out = [];
  for (const pairWind of windIds) {
    const pungs = windIds.filter((id) => id !== pairWind).map(pung);
    out.push(...targetsWithFixedGroups({
      fixedGroups: [...pungs, pair(pairWind)],
      extraMelds: 1,
      pairIds: null,
    }));
  }
  return out;
}

function bigFourWindTargets() {
  return targetsWithFixedGroups({
    fixedGroups: windIds.map(pung),
    extraMelds: 0,
    pairIds: allTileIds,
  });
}

function thirteenOrphansTargets() {
  const base = vecFromIds(honorAndTerminalIds);
  return honorAndTerminalIds.map((id) => mergeGroups([base, single(id)]));
}

function nineGatesTargets() {
  const out = [];
  for (const suit of suitOrder) {
    const baseEntries = [
      [`${suit}1`, 3],
      [`${suit}2`, 1],
      [`${suit}3`, 1],
      [`${suit}4`, 1],
      [`${suit}5`, 1],
      [`${suit}6`, 1],
      [`${suit}7`, 1],
      [`${suit}8`, 1],
      [`${suit}9`, 3],
    ];
    for (let rank = 1; rank <= 9; rank += 1) {
      out.push(entriesToVec([...baseEntries, [`${suit}${rank}`, 1]]));
    }
  }
  return out;
}

function allGreenTargets() {
  return targetsWithFixedGroups({
    extraMelds: 4,
    allowedIds: [...greenBambooIds, "dg"],
    pairIds: [...greenBambooIds, "dg"],
  });
}

function oneSuitConfigs({ honours = false, chows = true, pungs = true } = {}) {
  return suitOrder.map((suit) => ({
    allowedIds: honours ? [...suitTileIds(suit), ...honorIds] : suitTileIds(suit),
    chows,
    pungs,
  }));
}

function terminalHonourTripletConfig() {
  return { allowedIds: honorAndTerminalIds, chows: false, pungs: true };
}

function terminalTripletConfig() {
  return { allowedIds: terminalIds, chows: false, pungs: true };
}

function dragonOrSeatPungConfigs(context) {
  return [...dragonIds, context.seatWind || "we"].map((id) => ({
    allowedIds: allTileIds,
    requiredPungIds: [id],
  }));
}

function commonFaanPatterns(game, singapore = false) {
  const label = singapore ? "Singapore / Malaysian" : "Hong Kong";
  return [
    makeStandardRulesetPattern({
      game,
      id: "all-chows",
      name: "All Chows",
      category: label,
      winning: 1,
      configs: { allowedIds: suitedIds, pairIds: suitedIds, chows: true, pungs: false },
      note: "Four chows and a suited pair.",
    }),
    makeStandardRulesetPattern({
      game,
      id: "value-tiles",
      name: "Value Tiles",
      category: label,
      winning: 1,
      configs: dragonOrSeatPungConfigs,
      note: "A dragon pung or your seat-wind pung, plus any standard hand.",
    }),
    makeStandardRulesetPattern({
      game,
      id: "mixed-one-suit",
      name: "Mixed One Suit",
      category: label,
      winning: 3,
      configs: () => oneSuitConfigs({ honours: true }),
      note: "One numbered suit with winds or dragons allowed.",
    }),
    makeStandardRulesetPattern({
      game,
      id: "all-pungs",
      name: "All Pungs",
      category: label,
      winning: 3,
      configs: { allowedIds: allTileIds, chows: false, pungs: true },
      note: "Four pungs or kongs and a pair.",
    }),
    makeRulesetCustomPattern({
      game,
      id: "seven-pairs",
      name: "Seven Pairs",
      category: label,
      winning: 4,
      exposure: "concealed",
      note: "Seven pairs.",
      isWin: (counts) => anySevenPairs.isWin(counts),
      distance: (counts, context) => anySevenPairs.distance(counts, context.liveCopies),
    }),
    makeRulesetTargetPattern({
      game,
      id: "pure-straight",
      name: "Pure Straight",
      category: label,
      winning: 1,
      note: "Runs 1-2-3, 4-5-6 and 7-8-9 in the same suit, plus a set and pair.",
      generate: () => pureStraightTargets(),
    }),
    makeRulesetTargetPattern({
      game,
      id: "mixed-triple-chow",
      name: "Mixed Triple Chow",
      category: label,
      winning: 1,
      note: "The same chow in bamboo, characters and dots, plus a set and pair.",
      generate: () => mixedTripleChowTargets(),
    }),
    makeRulesetTargetPattern({
      game,
      id: "mixed-triple-pung",
      name: "Mixed Triple Pung",
      category: label,
      winning: 2,
      note: "The same-number pung in each suit, plus a set and pair.",
      generate: () => mixedTriplePungTargets(),
    }),
    makeRulesetTargetPattern({
      game,
      id: "little-three-dragons",
      name: "Little Three Dragons",
      category: label,
      winning: 5,
      note: "Two dragon pungs and a pair of the third dragon.",
      generate: () => littleThreeDragonTargets(),
    }),
    makeRulesetTargetPattern({
      game,
      id: "big-three-dragons",
      name: "Big Three Dragons",
      category: label,
      winning: 8,
      note: "Three dragon pungs, plus a set and pair.",
      generate: () => bigThreeDragonTargets(),
    }),
    makeRulesetTargetPattern({
      game,
      id: "little-four-winds",
      name: "Little Four Winds",
      category: label,
      winning: 10,
      note: "Three wind pungs and a pair of the fourth wind.",
      generate: () => littleFourWindTargets(),
    }),
    makeRulesetTargetPattern({
      game,
      id: "big-four-winds",
      name: "Big Four Winds",
      category: label,
      winning: 13,
      note: "Four wind pungs and any pair.",
      generate: () => bigFourWindTargets(),
    }),
    makeStandardRulesetPattern({
      game,
      id: "full-flush",
      name: "Full Flush",
      category: label,
      winning: singapore ? 6 : 7,
      configs: () => oneSuitConfigs(),
      note: "One numbered suit only.",
    }),
    makeStandardRulesetPattern({
      game,
      id: "all-honours",
      name: "All Honours",
      category: label,
      winning: 10,
      configs: { allowedIds: honorIds, chows: false, pungs: true },
      note: "Only winds and dragons.",
    }),
    makeStandardRulesetPattern({
      game,
      id: "all-terminals",
      name: "All Terminals",
      category: label,
      winning: 10,
      configs: terminalTripletConfig(),
      note: "Only ones and nines.",
    }),
    makeStandardRulesetPattern({
      game,
      id: "mixed-terminals-and-honours",
      name: "Mixed Terminals and Honours",
      category: label,
      winning: 1,
      configs: terminalHonourTripletConfig(),
      note: "Only winds, dragons, ones and nines.",
    }),
    makeRulesetTargetPattern({
      game,
      id: "thirteen-orphans",
      name: "Thirteen Orphans",
      category: label,
      winning: 13,
      exposure: "concealed",
      note: "One of every terminal and honour, plus any one duplicate.",
      generate: () => thirteenOrphansTargets(),
    }),
    makeRulesetTargetPattern({
      game,
      id: "nine-gates",
      name: "Nine Gates",
      category: label,
      winning: 10,
      exposure: "concealed",
      note: "1112345678999 in one suit, plus one extra tile from that suit.",
      generate: () => nineGatesTargets(),
    }),
    makeRulesetTargetPattern({
      game,
      id: "all-green",
      name: "All Green",
      category: label,
      winning: 8,
      note: "Only green bamboo tiles and green dragons.",
      generate: () => allGreenTargets(),
    }),
  ];
}

function hongKongPatternList() {
  return commonFaanPatterns("hong-kong-cantonese");
}

function singaporePatternList() {
  return commonFaanPatterns("singapore-malaysian", true);
}

function riichiPatternList() {
  const game = "riichi";
  return [
    makeStandardRulesetPattern({
      game,
      id: "tanyao",
      name: "Tanyao",
      category: "Riichi",
      winning: 1,
      configs: { allowedIds: simpleTileIds, pairIds: simpleTileIds, chowStarts: nonTerminalChowStarts },
      note: "All simples: no terminals and no honours.",
    }),
    makeStandardRulesetPattern({
      game,
      id: "pinfu",
      name: "Pinfu",
      category: "Riichi",
      winning: 1,
      exposure: "concealed",
      configs: { allowedIds: suitedIds, pairIds: suitedIds, chows: true, pungs: false },
      note: "Four chows and a non-honour pair.",
    }),
    makeStandardRulesetPattern({
      game,
      id: "yakuhai",
      name: "Yakuhai",
      category: "Riichi",
      winning: 1,
      configs: dragonOrSeatPungConfigs,
      note: "A dragon pung or your seat-wind pung.",
    }),
    makeRulesetTargetPattern({
      game,
      id: "iipeikou",
      name: "Iipeikou",
      category: "Riichi",
      winning: 1,
      exposure: "concealed",
      note: "Two identical chows in the same suit, plus two sets and a pair.",
      generate: () => {
        const out = [];
        for (const suit of suitOrder) {
          for (let start = 1; start <= 7; start += 1) {
            out.push(...targetsWithFixedGroups({
              fixedGroups: [chowGroup(suit, start), chowGroup(suit, start)],
              extraMelds: 2,
              pairIds: allTileIds,
            }));
          }
        }
        return out;
      },
    }),
    makeStandardRulesetPattern({
      game,
      id: "toitoi",
      name: "Toitoi",
      category: "Riichi",
      winning: 2,
      configs: { allowedIds: allTileIds, chows: false, pungs: true },
      note: "Four pungs or kongs and a pair.",
    }),
    makeRulesetCustomPattern({
      game,
      id: "chiitoitsu",
      name: "Chiitoitsu",
      category: "Riichi",
      winning: 2,
      exposure: "concealed",
      note: "Seven pairs.",
      isWin: (counts) => anySevenPairs.isWin(counts),
      distance: (counts, context) => anySevenPairs.distance(counts, context.liveCopies),
    }),
    makeRulesetTargetPattern({
      game,
      id: "sanshoku-doujun",
      name: "Sanshoku Doujun",
      category: "Riichi",
      winning: 2,
      openWinning: 1,
      note: "The same chow in all three suits.",
      generate: () => mixedTripleChowTargets(),
    }),
    makeRulesetTargetPattern({
      game,
      id: "ittsu",
      name: "Ittsu",
      category: "Riichi",
      winning: 2,
      openWinning: 1,
      note: "A straight from 1 to 9 in one suit.",
      generate: () => pureStraightTargets(),
    }),
    makeRulesetTargetPattern({
      game,
      id: "sanshoku-doukou",
      name: "Sanshoku Doukou",
      category: "Riichi",
      winning: 2,
      note: "The same-number pung in all three suits.",
      generate: () => mixedTriplePungTargets(),
    }),
    makeRulesetTargetPattern({
      game,
      id: "shousangen",
      name: "Shousangen",
      category: "Riichi",
      winning: 2,
      note: "Two dragon pungs and a pair of the third dragon.",
      generate: () => littleThreeDragonTargets(),
    }),
    makeStandardRulesetPattern({
      game,
      id: "honitsu",
      name: "Honitsu",
      category: "Riichi",
      winning: 3,
      openWinning: 2,
      configs: () => oneSuitConfigs({ honours: true }),
      note: "One numbered suit with honours allowed.",
    }),
    makeStandardRulesetPattern({
      game,
      id: "chinitsu",
      name: "Chinitsu",
      category: "Riichi",
      winning: 6,
      openWinning: 5,
      configs: () => oneSuitConfigs(),
      note: "One numbered suit only.",
    }),
    makeStandardRulesetPattern({
      game,
      id: "honroutou",
      name: "Honroutou",
      category: "Riichi",
      winning: 2,
      configs: terminalHonourTripletConfig(),
      note: "Only terminals and honours.",
    }),
    makeRulesetTargetPattern({
      game,
      id: "daisangen",
      name: "Daisangen",
      category: "Riichi",
      winning: 13,
      limit: "Yakuman",
      note: "Three dragon pungs.",
      generate: () => bigThreeDragonTargets(),
    }),
    makeRulesetTargetPattern({
      game,
      id: "kokushi-musou",
      name: "Kokushi Musou",
      category: "Riichi",
      winning: 13,
      limit: "Yakuman",
      exposure: "concealed",
      note: "One of every terminal and honour, plus any one duplicate.",
      generate: () => thirteenOrphansTargets(),
    }),
    makeStandardRulesetPattern({
      game,
      id: "tsuuiisou",
      name: "Tsuuiisou",
      category: "Riichi",
      winning: 13,
      limit: "Yakuman",
      configs: { allowedIds: honorIds, chows: false, pungs: true },
      note: "Only winds and dragons.",
    }),
    makeStandardRulesetPattern({
      game,
      id: "chinroutou",
      name: "Chinroutou",
      category: "Riichi",
      winning: 13,
      limit: "Yakuman",
      configs: terminalTripletConfig(),
      note: "Only ones and nines.",
    }),
    makeRulesetTargetPattern({
      game,
      id: "ryuuiisou",
      name: "Ryuuiisou",
      category: "Riichi",
      winning: 13,
      limit: "Yakuman",
      note: "Only green bamboo tiles and green dragons.",
      generate: () => allGreenTargets(),
    }),
    makeRulesetTargetPattern({
      game,
      id: "shousuushii",
      name: "Shousuushii",
      category: "Riichi",
      winning: 13,
      limit: "Yakuman",
      note: "Three wind pungs and a pair of the fourth wind.",
      generate: () => littleFourWindTargets(),
    }),
    makeRulesetTargetPattern({
      game,
      id: "daisuushii",
      name: "Daisuushii",
      category: "Riichi",
      winning: 13,
      limit: "Yakuman",
      note: "Four wind pungs.",
      generate: () => bigFourWindTargets(),
    }),
    makeRulesetTargetPattern({
      game,
      id: "chuuren-poutou",
      name: "Chuuren Poutou",
      category: "Riichi",
      winning: 13,
      limit: "Yakuman",
      exposure: "concealed",
      note: "1112345678999 in one suit, plus one extra tile from that suit.",
      generate: () => nineGatesTargets(),
    }),
  ];
}

function patternList() {
  const patterns = [];

  patterns.push(
    makeCustomPattern({
      id: "ordinary",
      name: "Ordinary Mah Jong",
      category: "Core",
      winning: "Calculate",
      fishing: null,
      note: "One numbered suit, with winds and/or dragons allowed: four pungs/kongs, or three pungs/kongs and one chow, plus a pair.",
      isWin: (counts) => isOrdinaryMahjongWin(counts),
      distance: (counts, context) => ordinaryMahjongDistance(counts, context.liveCopies),
    }),
    makeCustomPattern({
      id: "purity",
      name: "Purity",
      category: "One Suit",
      winning: "Calculate",
      fishing: null,
      note: "One numbered suit only, with no winds or dragons: four pungs/kongs, or three pungs/kongs and one chow, plus a pair.",
      isWin: (counts) => isPurityWin(counts),
      distance: (counts, context) => purityDistance(counts, context.liveCopies),
    }),
  );

  patterns.push(
    makeCustomPattern({
      id: "seven-twins",
      name: "Seven Twins",
      category: "Pairs",
      winning: 500,
      fishing: 200,
      note: "Seven pairs, allowing four of a kind as two pairs.",
      isWin: (counts) => anySevenPairs.isWin(counts),
      distance: (counts, context) => anySevenPairs.distance(counts, context.liveCopies),
    }),
    makeCustomPattern({
      id: "all-pair",
      name: "All Pair",
      category: "Pairs",
      winning: 500,
      fishing: 200,
      note: "Seven pairs in one suit with honours allowed.",
      isWin: (counts) => allPairOneSuitHonours.isWin(counts),
      distance: (counts, context) => allPairOneSuitHonours.distance(counts, context.liveCopies),
    }),
    makeCustomPattern({
      id: "heavenly-twins",
      name: "Heavenly Twins",
      category: "Pairs",
      winning: 1000,
      fishing: 400,
      note: "Seven pairs all in one suit.",
      isWin: (counts) => heavenlyTwins.isWin(counts),
      distance: (counts, context) => heavenlyTwins.distance(counts, context.liveCopies),
    }),
    makeCustomPattern({
      id: "all-pair-honours",
      name: "All Pair Honours",
      category: "All Honours",
      winning: 1000,
      fishing: 400,
      note: "Pairs from winds, dragons, ones and nines.",
      isWin: (counts) => allPairHonours.isWin(counts),
      distance: (counts, context) => allPairHonours.distance(counts, context.liveCopies),
    }),
  );

  patterns.push(
    makeTargetPattern({
      id: "unique-wonder",
      name: "Unique Wonder",
      category: "All Honours",
      winning: 2000,
      fishing: 800,
      note: "All winds, all dragons, all ones and nines, plus a duplicate.",
      generate: () => {
        const baseIds = [...honorIds, ...terminalIds];
        const base = vecFromIds(baseIds);
        return singleOptions(baseIds).map((extra) => mergeGroups([base, extra]));
      },
    }),
    makeTargetPattern({
      id: "knitting",
      name: "Knitting",
      category: "Pairs",
      winning: 500,
      fishing: 200,
      note: "Seven same-number knitted pairs in two suits.",
      generate: () => {
        const out = [];
        chooseItems(suitOrder, 2, ([a, b]) => {
          chooseItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 7, (ranks) => {
            out.push(vecFromIds(ranks.flatMap((rank) => [`${a}${rank}`, `${b}${rank}`])));
          });
        });
        return out;
      },
    }),
    makeTargetPattern({
      id: "triple-knitting",
      name: "Triple Knitting",
      category: "Three Suits",
      winning: 500,
      fishing: 200,
      note: "Four numbers across all three suits, plus a knitted pair.",
      generate: () => {
        const out = [];
        chooseItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 4, (ranks) => {
          const base = vecFromIds(ranks.flatMap((rank) => suitOrder.map((suit) => `${suit}${rank}`)));
          for (const rank of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
            chooseItems(suitOrder, 2, (pairSuits) => {
              out.push(mergeGroups([base, vecFromIds(pairSuits.map((suit) => `${suit}${rank}`))]));
            });
          }
        });
        return out;
      },
    }),
    makeTargetPattern({
      id: "gerties-garter",
      name: "Gertie's Garter",
      category: "Runs",
      winning: 1000,
      fishing: 400,
      note: "Run 1 to 7 in two suits.",
      generate: () => {
        const out = [];
        chooseItems(suitOrder, 2, ([a, b]) => out.push(mergeGroups([runGroup(a, 1, 7), runGroup(b, 1, 7)])));
        return out;
      },
    }),
    makeTargetPattern({
      id: "yin-yang",
      name: "Yin Yang",
      category: "Two Suits",
      winning: 1000,
      fishing: 400,
      note: "11,234,55 in one suit and 55,678,99 in another.",
      generate: () => {
        const out = [];
        for (const a of suitOrder) {
          for (const b of suitOrder) {
            if (a === b) continue;
            out.push(
              entriesToVec([
                [`${a}1`, 2],
                [`${a}2`, 1],
                [`${a}3`, 1],
                [`${a}4`, 1],
                [`${a}5`, 2],
                [`${b}5`, 2],
                [`${b}6`, 1],
                [`${b}7`, 1],
                [`${b}8`, 1],
                [`${b}9`, 2],
              ]),
            );
          }
        }
        return out;
      },
    }),
    makeTargetPattern({
      id: "big-robert",
      name: "Big Robert",
      category: "Runs",
      winning: 500,
      fishing: 200,
      note: "Three runs of four tiles (one run in each suit), plus an honour pair.",
      generate: () => {
        const out = [];
        for (let bStart = 1; bStart <= 6; bStart += 1) {
          for (let cStart = 1; cStart <= 6; cStart += 1) {
            for (let dStart = 1; dStart <= 6; dStart += 1) {
              const runIds = [
                ...[0, 1, 2, 3].map((offset) => `b${bStart + offset}`),
                ...[0, 1, 2, 3].map((offset) => `c${cStart + offset}`),
                ...[0, 1, 2, 3].map((offset) => `d${dStart + offset}`),
              ];
              for (const pairVec of pairOptions(honorIds)) out.push(mergeGroups([vecFromIds(runIds), pairVec]));
            }
          }
        }
        return out;
      },
    }),
    makeTargetPattern({
      id: "big-robert-matching",
      name: "Big Robert (Matching)",
      category: "Runs",
      winning: 1000,
      fishing: 400,
      note: "Three matching runs of four tiles (one run in each suit), plus an honour pair.",
      generate: () => {
        const out = [];
        for (let start = 1; start <= 6; start += 1) {
          const runIds = suitOrder.flatMap((suit) => [0, 1, 2, 3].map((offset) => `${suit}${start + offset}`));
          for (const pairVec of pairOptions(honorIds)) out.push(mergeGroups([vecFromIds(runIds), pairVec]));
        }
        return out;
      },
    }),
  );

  patterns.push(
    makeTargetPattern({
      id: "run-pung-pair",
      name: "Run, Pung and Pair",
      category: "Runs",
      winning: 1000,
      fishing: 400,
      note: "Run 1 to 9, a pung and a pair, all one suit.",
      generate: () => {
        const out = [];
        for (const suit of suitOrder) {
          out.push(...combineOptionLists([[runGroup(suit, 1, 9)], pungOptions(suitTileIds(suit)), pairOptions(suitTileIds(suit))]));
        }
        return out;
      },
    }),
    makeTargetPattern({
      id: "gates-of-heaven",
      name: "Gates of Heaven",
      category: "Runs",
      winning: 1000,
      fishing: 400,
      note: "111, 999, run 2 to 8, plus one paired middle tile.",
      generate: () => {
        const out = [];
        for (const suit of suitOrder) {
          for (let pairRank = 2; pairRank <= 8; pairRank += 1) {
            const entries = [
              [`${suit}1`, 3],
              [`${suit}9`, 3],
            ];
            for (let rank = 2; rank <= 8; rank += 1) entries.push([`${suit}${rank}`, 1]);
            entries.push([`${suit}${pairRank}`, 1]);
            out.push(entriesToVec(entries));
          }
        }
        return out;
      },
    }),
    makeTargetPattern({
      id: "confused-gates",
      name: "Confused Gates",
      category: "Three Suits",
      winning: 1000,
      fishing: 400,
      note: "111, 999 and run 2 to 8 in three different suits.",
      generate: () => {
        const out = [];
        for (const runSuit of suitOrder) {
          const otherSuits = suitOrder.filter((suit) => suit !== runSuit);
          for (const oneSuit of otherSuits) {
            const nineSuit = otherSuits.find((suit) => suit !== oneSuit);
            for (let pairRank = 2; pairRank <= 8; pairRank += 1) {
              const entries = [
                [`${oneSuit}1`, 3],
                [`${nineSuit}9`, 3],
              ];
              for (let rank = 2; rank <= 8; rank += 1) entries.push([`${runSuit}${rank}`, 1]);
              entries.push([`${runSuit}${pairRank}`, 1]);
              out.push(entriesToVec(entries));
            }
          }
        }
        return out;
      },
    }),
    makeTargetPattern({
      id: "wriggly-snake",
      name: "Wriggly Snake",
      category: "Winds",
      winning: 1000,
      fishing: 400,
      note: "Run 1 to 9, all winds, plus a duplicate from the hand.",
      generate: () => {
        const out = [];
        for (const suit of suitOrder) {
          const baseIds = [...suitTileIds(suit), ...windIds];
          const base = vecFromIds(baseIds);
          for (const extra of singleOptions(baseIds)) out.push(mergeGroups([base, extra]));
        }
        return out;
      },
    }),
    makeTargetPattern({
      id: "guardian-winds",
      name: "Guardian Winds",
      category: "Winds",
      winning: 1000,
      fishing: 400,
      note: "Run 1 to 9, a wind pung and a wind pair.",
      generate: () => {
        const out = [];
        for (const suit of suitOrder) out.push(...combineOptionLists([[runGroup(suit, 1, 9)], pungOptions(windIds), pairOptions(windIds)]));
        return out;
      },
    }),
    makeTargetPattern({
      id: "wriggly-dragon",
      name: "Wriggly Dragon",
      category: "Dragons",
      winning: 1000,
      fishing: 400,
      note: "Run 1 to 9, all dragons, plus a dragon pair.",
      generate: () => {
        const out = [];
        for (const suit of suitOrder) out.push(...combineOptionLists([[runGroup(suit, 1, 9)], [vecFromIds(dragonIds)], pairOptions(dragonIds)]));
        return out;
      },
    }),
    makeTargetPattern({
      id: "guardian-dragons",
      name: "Guardian Dragons",
      category: "Dragons",
      winning: 1000,
      fishing: 400,
      note: "Run 1 to 9, a dragon pung and a dragon pair.",
      generate: () => {
        const out = [];
        for (const suit of suitOrder) out.push(...combineOptionLists([[runGroup(suit, 1, 9)], pungOptions(dragonIds), pairOptions(dragonIds)]));
        return out;
      },
    }),
    makeTargetPattern({
      id: "grand-sequence",
      name: "Grand Sequence",
      category: "Runs",
      winning: 1000,
      fishing: 400,
      note: "Run 1 to 9 with two duplicated run tiles and an honour pung.",
      generate: () => {
        const out = [];
        for (const suit of suitOrder) {
          const base = runGroup(suit, 1, 9);
          const runIds = suitTileIds(suit);
          chooseItems(runIds, 2, (pairedIds) => {
            const extras = vecFromIds(pairedIds);
            for (const honorPung of pungOptions(honorIds)) out.push(mergeGroups([base, extras, honorPung]));
          });
        }
        return out;
      },
    }),
    makeTargetPattern({
      id: "dragons-tail",
      name: "Dragon's Tail",
      category: "Winds and dragons",
      winning: 1000,
      fishing: 400,
      note: "Run 1 to 9 with a pung in winds or dragons and a pair in the other honour type.",
      generate: () => {
        const out = [];
        for (const suit of suitOrder) {
          out.push(...combineOptionLists([[runGroup(suit, 1, 9)], pungOptions(dragonIds), pairOptions(windIds)]));
          out.push(...combineOptionLists([[runGroup(suit, 1, 9)], pungOptions(windIds), pairOptions(dragonIds)]));
        }
        return out;
      },
    }),
    makeTargetPattern({
      id: "gretas-garden",
      name: "Greta's Garden",
      category: "Winds and dragons",
      winning: 500,
      fishing: 200,
      note: "Run 1 to 7, all winds and all dragons.",
      generate: () => suitOrder.map((suit) => mergeGroups([runGroup(suit, 1, 7), vecFromIds([...windIds, ...dragonIds])])),
    }),
    makeTargetPattern({
      id: "gretas-dragon",
      name: "Greta's Dragon",
      category: "Winds and dragons",
      winning: 1000,
      fishing: 400,
      note: "Run 1 to 7, all winds and a dragon pung.",
      generate: () => {
        const out = [];
        for (const suit of suitOrder) out.push(...combineOptionLists([[runGroup(suit, 1, 7)], [vecFromIds(windIds)], pungOptions(dragonIds)]));
        return out;
      },
    }),
    makeTargetPattern({
      id: "red-lantern",
      name: "Red Lantern",
      category: "Winds and dragons",
      winning: 2000,
      fishing: 800,
      note: "Run 1 to 7, red dragon pung, seat wind pung, plus a duplicate.",
      generate: (context) => {
        const out = [];
        for (const suit of suitOrder) {
          const baseIds = [...suitTileIds(suit, [1, 2, 3, 4, 5, 6, 7]), "dr", context.seatWind];
          const base = mergeGroups([runGroup(suit, 1, 7), pung("dr"), pung(context.seatWind)]);
          for (const extra of singleOptions(baseIds)) out.push(mergeGroups([base, extra]));
        }
        return out;
      },
    }),
    makeTargetPattern({
      id: "five-odd-honours",
      name: "Five Odd Honours",
      category: "Winds and dragons",
      winning: 500,
      fishing: 200,
      note: "Run 1 to 9 with five different honours.",
      generate: () => {
        const out = [];
        chooseItems(honorIds, 5, (honours) => {
          for (const suit of suitOrder) out.push(mergeGroups([runGroup(suit, 1, 9), vecFromIds(honours)]));
        });
        return out;
      },
    }),
  );

  patterns.push(
    makeTargetPattern({
      id: "dragonfly",
      name: "Dragonfly",
      category: "Dragons",
      winning: 1000,
      fishing: 400,
      note: "All dragons, a pung in each suit and a suited pair.",
      generate: () => combineOptionLists([[vecFromIds(dragonIds)], pungOptions(suitTileIds("b")), pungOptions(suitTileIds("c")), pungOptions(suitTileIds("d")), pairOptions(suitedIds)]),
    }),
    makeTargetPattern({
      id: "dragonette",
      name: "Dragonette",
      category: "Winds and dragons",
      winning: 1000,
      fishing: 400,
      note: "All winds, all dragons with one dragon paired, and three inside pairs in one suit.",
      generate: () => {
        const out = [];
        for (const suit of suitOrder) {
          const insidePairs = chooseGroups(pairOptions(suitTileIds(suit, [2, 3, 4, 5, 6, 7, 8])), 3);
          for (const dragonExtra of singleOptions(dragonIds)) {
            for (const pairs of insidePairs) out.push(mergeGroups([vecFromIds([...windIds, ...dragonIds]), dragonExtra, pairs]));
          }
        }
        return out;
      },
    }),
    makeTargetPattern({
      id: "hachi-ban",
      name: "Hachi Ban",
      category: "Pairs",
      winning: 1000,
      fishing: 400,
      note: "Run 1 to 8 or 2 to 9, plus three honour pairs.",
      generate: () => {
        const out = [];
        const honorPairCombos = chooseGroups(pairOptions(honorIds), 3);
        for (const suit of suitOrder) {
          for (const run of [runGroup(suit, 1, 8), runGroup(suit, 2, 9)]) {
            for (const pairs of honorPairCombos) out.push(mergeGroups([run, pairs]));
          }
        }
        return out;
      },
    }),
    makeTargetPattern({
      id: "windfall",
      name: "Windfall",
      category: "Winds",
      winning: 1000,
      fishing: 400,
      note: "All winds and five pairs in one suit.",
      generate: () => {
        const out = [];
        for (const suit of suitOrder) {
          const pairCombos = chooseGroups(pairOptions(suitTileIds(suit)), 5);
          for (const pairs of pairCombos) out.push(mergeGroups([vecFromIds(windIds), pairs]));
        }
        return out;
      },
    }),
    makeTargetPattern({
      id: "windy-chow",
      name: "Windy Chow",
      category: "Chows",
      winning: 500,
      fishing: 200,
      note: "A chow in each suit, all winds, plus a wind duplicate.",
      generate: () => {
        const out = [];
        for (const bChow of chowOptions("b")) {
          for (const cChow of chowOptions("c")) {
            for (const dChow of chowOptions("d")) {
              for (const windExtra of singleOptions(windIds)) out.push(mergeGroups([bChow, cChow, dChow, vecFromIds(windIds), windExtra]));
            }
          }
        }
        return out;
      },
    }),
    makeTargetPattern({
      id: "chop-suey",
      name: "Chop Suey",
      category: "Chows",
      winning: 1000,
      fishing: 400,
      note: "Chow 123 in each suit, all winds, plus a wind duplicate.",
      generate: () => {
        const base = mergeGroups([chowGroup("b", 1), chowGroup("c", 1), chowGroup("d", 1), vecFromIds(windIds)]);
        return singleOptions(windIds).map((extra) => mergeGroups([base, extra]));
      },
    }),
    makeTargetPattern({
      id: "chow-mien",
      name: "Chow Mien",
      category: "Chows",
      winning: 1000,
      fishing: 400,
      note: "Chow 789 in each suit, all winds, plus a wind duplicate.",
      generate: () => {
        const base = mergeGroups([chowGroup("b", 7), chowGroup("c", 7), chowGroup("d", 7), vecFromIds(windIds)]);
        return singleOptions(windIds).map((extra) => mergeGroups([base, extra]));
      },
    }),
    makeTargetPattern({
      id: "hovering-angel",
      name: "Hovering Angel",
      category: "Chows",
      winning: 1000,
      fishing: 400,
      note: "A chow in each suit, seat wind pung and a dragon pair.",
      generate: (context) => {
        const out = [];
        for (const bChow of chowOptions("b")) {
          for (const cChow of chowOptions("c")) {
            for (const dChow of chowOptions("d")) {
              for (const dragonPair of pairOptions(dragonIds)) out.push(mergeGroups([bChow, cChow, dChow, pung(context.seatWind), dragonPair]));
            }
          }
        }
        return out;
      },
    }),
    makeTargetPattern({
      id: "little-brother",
      name: "Little Brother",
      category: "Chows",
      winning: 500,
      fishing: 200,
      note: "A chow in each suit, seat wind pair and a fourth chow.",
      generate: (context) => {
        const out = [];
        for (const bChow of chowOptions("b")) {
          for (const cChow of chowOptions("c")) {
            for (const dChow of chowOptions("d")) {
              for (const fourth of allChowOptions()) out.push(mergeGroups([bChow, cChow, dChow, pair(context.seatWind), fourth]));
            }
          }
        }
        return out;
      },
    }),
    makeTargetPattern({
      id: "apple-blossom",
      name: "Apple Blossom",
      category: "Chows",
      winning: 1000,
      fishing: 400,
      note: "Same chow in all three suits, white dragon pung and green dragon pair.",
      generate: () => {
        const out = [];
        for (let start = 1; start <= 7; start += 1) out.push(mergeGroups([chowGroup("b", start), chowGroup("c", start), chowGroup("d", start), pung("dw"), pair("dg")]));
        return out;
      },
    }),
    makeTargetPattern({
      id: "the-professors",
      name: "The Professors",
      category: "Chows",
      winning: 500,
      fishing: 200,
      note: "Same chow in all three suits, all dragons and seat wind pair.",
      generate: (context) => {
        const out = [];
        for (let start = 1; start <= 7; start += 1) out.push(mergeGroups([chowGroup("b", start), chowGroup("c", start), chowGroup("d", start), vecFromIds(dragonIds), pair(context.seatWind)]));
        return out;
      },
    }),
    makeTargetPattern({
      id: "chow-chow",
      name: "Chow Chow",
      category: "One Suit",
      winning: 500,
      fishing: 200,
      note: "Four chows and a pair, all in one suit.",
      generate: () => {
        const out = [];
        for (const suit of suitOrder) {
          const chowCombos = chooseGroups(chowOptions(suit), 4, true);
          for (const chows of chowCombos) {
            for (const pairVec of pairOptions(suitTileIds(suit))) out.push(mergeGroups([chows, pairVec]));
          }
        }
        return out;
      },
    }),
    makeCustomPattern({
      id: "little-robert",
      name: "Little Robert",
      category: "Chows",
      winning: 500,
      fishing: 200,
      note: "A chow in each suit, plus a pung and a pair.",
      isWin: (counts) => isLittleRobertWin(counts),
      distance: (counts, context) => littleRobertDistance(counts, context.liveCopies),
    }),
  );

  patterns.push(
    makeTargetPattern({
      id: "sparrows-sanctuary",
      name: "Sparrow's Sanctuary",
      category: "Bamboo",
      winning: 1500,
      fishing: 600,
      note: "Four 1 Bamboo and pairs of 2, 3, 4, 6 and 8 Bamboo.",
      generate: () => [
        entriesToVec([
          ["b1", 4],
          ["b2", 2],
          ["b3", 2],
          ["b4", 2],
          ["b6", 2],
          ["b8", 2],
        ]),
      ],
    }),
    makeTargetPattern({
      id: "all-pair-jade",
      name: "All Pair Jade",
      category: "Bamboo",
      winning: 1000,
      fishing: 400,
      note: "Green dragon and green bamboo pairs.",
      generate: () =>
        generateSevenPairTargets(["dg", ...greenBambooIds], (vec) => vec[idToIndex("dg")] >= 2),
    }),
    makeTargetPattern({
      id: "all-pair-ruby-jade",
      name: "All Pair Ruby Jade",
      category: "Bamboo",
      winning: 1000,
      fishing: 400,
      note: "Red and green dragons with red and green bamboo pairs.",
      generate: () =>
        generateSevenPairTargets(["dr", "dg", ...allBambooColorIds], (vec) => vec[idToIndex("dr")] >= 2 && vec[idToIndex("dg")] >= 2),
    }),
    makeTargetPattern({
      id: "green-jade",
      name: "Green Jade",
      category: "Bamboo",
      winning: 1000,
      fishing: 400,
      note: "Green dragon pung, three bamboo pungs and a bamboo pair.",
      generate: () => combineOptionLists([[pung("dg")], chooseGroups(pungOptions(suitTileIds("b")), 3), pairOptions(suitTileIds("b"))]),
    }),
    makeTargetPattern({
      id: "imperial-jade",
      name: "Imperial Jade",
      category: "Bamboo",
      winning: 2000,
      fishing: 800,
      note: "Green dragon pung, three bamboo sets and a green bamboo pair.",
      generate: () => {
        const bambooMelds = [...pungOptions(suitTileIds("b")), ...chowOptions("b")];
        return combineOptionLists([[pung("dg")], chooseGroups(bambooMelds, 3, true), pairOptions(greenBambooIds)]);
      },
    }),
    makeTargetPattern({
      id: "lily-of-the-valley",
      name: "Lily of the Valley",
      category: "Bamboo",
      winning: 2000,
      fishing: 800,
      note: "Green and white dragon pungs, two bamboo pungs and a green bamboo pair.",
      generate: () => combineOptionLists([[pung("dg")], [pung("dw")], chooseGroups(pungOptions(suitTileIds("b")), 2), pairOptions(greenBambooIds)]),
    }),
    makeTargetPattern({
      id: "red-lily",
      name: "Red Lily",
      category: "Bamboo",
      winning: 2000,
      fishing: 800,
      note: "Red and white dragon pungs, two bamboo pungs and a red bamboo pair.",
      generate: () => combineOptionLists([[pung("dr")], [pung("dw")], chooseGroups(pungOptions(suitTileIds("b")), 2), pairOptions(redBambooIds)]),
    }),
    makeTargetPattern({
      id: "royal-ruby",
      name: "Royal Ruby",
      category: "Bamboo",
      winning: 2000,
      fishing: 800,
      note: "Red dragon pung, three red bamboo pungs and a red bamboo pair.",
      generate: () => combineOptionLists([[pung("dr")], chooseGroups(pungOptions(redBambooIds), 3), pairOptions(redBambooIds)]),
    }),
    makeTargetPattern({
      id: "ruby-jade",
      name: "Ruby Jade",
      category: "Bamboo",
      winning: 1000,
      fishing: 400,
      note: "Red and green dragon pungs, two bamboo pungs and a bamboo pair.",
      generate: () => combineOptionLists([[pung("dr")], [pung("dg")], chooseGroups(pungOptions(suitTileIds("b")), 2), pairOptions(allBambooColorIds)]),
    }),
    makeTargetPattern({
      id: "red-waratah",
      name: "Red Waratah",
      category: "Dragons",
      winning: 1000,
      fishing: 400,
      note: "Red dragon pung, green dragon pair, and one pung in each suit.",
      generate: () => combineOptionLists([[pung("dr")], [pair("dg")], pungOptions(redBambooIds), pungOptions(suitTileIds("c")), pungOptions(suitTileIds("d"))]),
    }),
    makeTargetPattern({
      id: "red-coral",
      name: "Red Coral",
      category: "Characters",
      winning: 1000,
      fishing: 400,
      note: "Red dragon pung, three character pungs and a character pair.",
      generate: () => combineOptionLists([[pung("dr")], chooseGroups(pungOptions(suitTileIds("c")), 3), pairOptions(suitTileIds("c"))]),
    }),
    makeTargetPattern({
      id: "white-opal",
      name: "White Opal",
      category: "Dots",
      winning: 1000,
      fishing: 400,
      note: "White dragon pung, three dot pungs and a dot pair.",
      generate: () => combineOptionLists([[pung("dw")], chooseGroups(pungOptions(suitTileIds("d")), 3), pairOptions(suitTileIds("d"))]),
    }),
    makeTargetPattern({
      id: "lillypilly",
      name: "Lillypilly",
      category: "Dots",
      winning: 1000,
      fishing: 400,
      note: "Green dragon pung, white dragon pair and three dot pungs.",
      generate: () => combineOptionLists([[pung("dg")], [pair("dw")], chooseGroups(pungOptions(suitTileIds("d")), 3)]),
    }),
    makeTargetPattern({
      id: "blue-mountains",
      name: "Blue Mountains",
      category: "Dots",
      winning: 1000,
      fishing: 400,
      note: "Green dragon pung, three dot pungs and a blue dot pair.",
      generate: () => combineOptionLists([[pung("dg")], chooseGroups(pungOptions(suitTileIds("d")), 3), pairOptions(blueDotIds)]),
    }),
    makeTargetPattern({
      id: "white-elephant",
      name: "White Elephant",
      category: "Dots",
      winning: 1000,
      fishing: 400,
      note: "White dragon pung, three dot pungs and an even dot pair.",
      generate: () => combineOptionLists([[pung("dw")], chooseGroups(pungOptions(suitTileIds("d")), 3), pairOptions(evenDotIds)]),
    }),
    makeTargetPattern({
      id: "driven-snow",
      name: "Driven Snow",
      category: "Characters",
      winning: 1000,
      fishing: 400,
      note: "White dragon pung, three character pungs and an odd character pair.",
      generate: () => combineOptionLists([[pung("dw")], chooseGroups(pungOptions(suitTileIds("c")), 3), pairOptions(oddCharacterIds)]),
    }),
    makeTargetPattern({
      id: "dragons-scales",
      name: "Dragon's Scales",
      category: "Characters",
      winning: 1000,
      fishing: 400,
      note: "Red dragon pung, three character pungs and an even character pair.",
      generate: () => combineOptionLists([[pung("dr")], chooseGroups(pungOptions(suitTileIds("c")), 3), pairOptions(evenCharacterIds)]),
    }),
    makeTargetPattern({
      id: "dragons-teeth",
      name: "Dragon's Teeth",
      category: "Dragons",
      winning: 1000,
      fishing: 400,
      note: "Red and white dragon pungs, plus run 1 to 7 or 2 to 8 with one duplicate in characters or dots.",
      generate: () => {
        const out = [];
        for (const suit of ["c", "d"]) {
          for (const [start, end] of [
            [1, 7],
            [2, 8],
          ]) {
            const run = runGroup(suit, start, end);
            const ids = suitTileIds(suit, Array.from({ length: end - start + 1 }, (_, offset) => start + offset));
            for (const extra of singleOptions(ids)) out.push(mergeGroups([pung("dr"), pung("dw"), run, extra]));
          }
        }
        return out;
      },
    }),
    makeTargetPattern({
      id: "moon-at-bottom-of-well",
      name: "Moon at Bottom of Well",
      category: "Dots",
      winning: 1000,
      fishing: 400,
      note: "Four dot chows and a dot pair.",
      generate: () => {
        const out = [];
        const chowCombos = chooseGroups(chowOptions("d"), 4, true);
        for (const chows of chowCombos) {
          for (const pairVec of pairOptions(suitTileIds("d"))) out.push(mergeGroups([chows, pairVec]));
        }
        return out;
      },
    }),
  );

  patterns.push(
    makeTargetPattern({
      id: "windy-dragons",
      name: "Windy Dragons",
      category: "All Honours",
      winning: 1000,
      fishing: 400,
      note: "Pairs of all winds and two dragon pungs.",
      generate: () => combineOptionLists([pairOptions(["we"]), pairOptions(["ws"]), pairOptions(["ww"]), pairOptions(["wn"]), chooseGroups(pungOptions(dragonIds), 2)]),
    }),
    makeTargetPattern({
      id: "all-winds-and-dragons",
      name: "All Winds and Dragons",
      category: "All Honours",
      winning: 1000,
      fishing: 400,
      note: "Four honour pungs and an honour pair.",
      generate: () => combineOptionLists([chooseGroups(pungOptions(honorIds), 4), pairOptions(honorIds)]),
    }),
    makeTargetPattern({
      id: "all-honour-hand",
      name: "All Honour Hand",
      category: "All Honours",
      winning: "Calculate",
      fishing: null,
      note: "Four pungs and a pair from honours, ones and nines.",
      generate: () => combineOptionLists([chooseGroups(pungOptions(honorAndTerminalIds), 4), pairOptions(honorAndTerminalIds)]),
    }),
    makeTargetPattern({
      id: "four-blessings",
      name: "Four Blessings",
      category: "All Honours",
      winning: 1500,
      fishing: 600,
      note: "Four wind pungs and any pair.",
      generate: () => combineOptionLists([[pung("we")], [pung("ws")], [pung("ww")], [pung("wn")], pairOptions(allTileIds)]),
    }),
    makeTargetPattern({
      id: "windy-ones",
      name: "Windy Ones",
      category: "Winds",
      winning: 1000,
      fishing: 400,
      note: "All winds, pungs of 1s in each suit, plus a wind duplicate.",
      generate: () => windyRankTargets(1),
    }),
    makeTargetPattern({
      id: "windy-nines",
      name: "Windy Nines",
      category: "Winds",
      winning: 1000,
      fishing: 400,
      note: "All winds, pungs of 9s in each suit, plus a wind duplicate.",
      generate: () => windyRankTargets(9),
    }),
    makeTargetPattern({
      id: "windyane",
      name: "Windyane",
      category: "Winds",
      winning: 1000,
      fishing: 400,
      note: "All winds, matching pungs in each suit, plus a wind duplicate.",
      generate: () => [2, 4, 5, 6, 8].flatMap((rank) => windyRankTargets(rank)),
    }),
    makeTargetPattern({
      id: "three-sisters",
      name: "Three Sisters",
      category: "Winds",
      winning: 1000,
      fishing: 400,
      note: "All winds, pungs of 3s in each suit, plus a wind duplicate.",
      generate: () => windyRankTargets(3),
    }),
    makeTargetPattern({
      id: "seven-brothers",
      name: "Seven Brothers",
      category: "Winds",
      winning: 1000,
      fishing: 400,
      note: "All winds, pungs of 7s in each suit, plus a wind duplicate.",
      generate: () => windyRankTargets(7),
    }),
    makeTargetPattern({
      id: "civil-war",
      name: "Civil War",
      category: "Winds",
      winning: 1500,
      fishing: 600,
      note: "North and south wind pungs, plus 1861 in one suit and 1865 in another.",
      generate: () => {
        const out = [];
        for (const a of suitOrder) {
          for (const b of suitOrder) {
            if (a === b) continue;
            out.push(
              entriesToVec([
                ["wn", 3],
                ["ws", 3],
                [`${a}1`, 2],
                [`${a}8`, 1],
                [`${a}6`, 1],
                [`${b}1`, 1],
                [`${b}8`, 1],
                [`${b}6`, 1],
                [`${b}5`, 1],
              ]),
            );
          }
        }
        return out;
      },
    }),
    makeTargetPattern({
      id: "heads-and-tails",
      name: "Heads and Tails",
      category: "Three Suits",
      winning: 1000,
      fishing: 400,
      note: "Four terminal pungs and a terminal pair.",
      generate: () => combineOptionLists([chooseGroups(pungOptions(terminalIds), 4), pairOptions(terminalIds)]),
    }),
    makeTargetPattern({
      id: "odds-and-evens",
      name: "Odds and Evens",
      category: "Three Suits",
      winning: 1500,
      fishing: 600,
      note: "Odd numbers in two suits and even numbers in the third.",
      generate: () => {
        const out = [];
        for (const evenSuit of suitOrder) {
          const oddSuits = suitOrder.filter((suit) => suit !== evenSuit);
          out.push(vecFromIds([...oddSuits.flatMap((suit) => suitTileIds(suit, [1, 3, 5, 7, 9])), ...suitTileIds(evenSuit, [2, 4, 6, 8])]));
        }
        return out;
      },
    }),
    makeTargetPattern({
      id: "numbers-in-parallel",
      name: "Numbers in Parallel",
      category: "Winds and dragons",
      winning: 1500,
      fishing: 600,
      note: "An honour pung and pair with matching no-terminal pungs in each suit.",
      generate: () => {
        const out = [];
        for (let rank = 2; rank <= 8; rank += 1) {
          const suitedPungs = mergeGroups(suitOrder.map((suit) => pung(`${suit}${rank}`)));
          out.push(...combineOptionLists([[suitedPungs], pungOptions(honorIds), pairOptions(honorIds)]));
        }
        return out;
      },
    }),
    makeTargetPattern({
      id: "three-great-scholars",
      name: "Three Great Scholars",
      category: "Dragons",
      winning: 1500,
      fishing: 600,
      note: "Three dragon pungs, plus a suited set and suited pair.",
      generate: () => {
        const out = [];
        const dragonPungs = mergeGroups(dragonIds.map(pung));
        for (const suit of suitOrder) {
          const melds = [...pungOptions(suitTileIds(suit)), ...chowOptions(suit)];
          out.push(...combineOptionLists([[dragonPungs], melds, pairOptions(suitTileIds(suit))]));
        }
        return out;
      },
    }),
  );

  return patterns;
}

function windyRankTargets(rank) {
  const base = mergeGroups([vecFromIds(windIds), ...suitOrder.map((suit) => pung(`${suit}${rank}`))]);
  return singleOptions(windIds).map((extra) => mergeGroups([base, extra]));
}

const americanDragonForSuit = { b: "dg", c: "dr", d: "dw" };

function americanPatternList() {
  const n = (color, rank, count) => ({ kind: "number", color, rank, count });
  const d = (color, count) => ({ kind: "dragon", color, count });
  const f = (count) => ({ kind: "fixed", id: americanFlowerId, count });
  const soap = (count) => ({ kind: "fixed", id: "dw", count });
  const wind = (id, count) => ({ kind: "fixed", id, count });
  const singles = (items) => ({ kind: "singles", items });
  const one = (color, rank) => ({ kind: "number", color, rank });
  const dr = (color) => ({ kind: "dragon", color });
  const fixed = (id) => ({ kind: "fixed", id });
  const year = (color2 = "a", color6 = color2) => singles([one(color2, 2), fixed("dw"), one(color2, 2), one(color6, 6)]);
  const run = (color, ranks) => singles(ranks.map((rank) => one(color, rank)));
  const shifted = (color, offsets) => singles(offsets.map((offset) => one(color, { startOffset: offset })));
  const A = (section, display, points, exposure, groups, rankOptions = [{}]) => ({
    section,
    display,
    points,
    exposure,
    groups,
    rankOptions,
  });
  const anyRank = Array.from({ length: 9 }, (_, index) => ({ same: index + 1 }));
  const consecutiveStarts = (length) => Array.from({ length: 10 - length }, (_, index) => ({ start: index + 1 }));

  const specs = [
    A("2026", "222 000 2222 6666", 25, "exposed", [n("a", 2, 3), soap(3), n("b", 2, 4), n("b", 6, 4)]),
    A("2026", "2026 DDD 2222 DDD", 25, "exposed", [year("a", "a"), d("b", 3), n("c", 2, 4), d("c", 3)]),
    A("2026", "FF 2026 2222 6666", 25, "exposed", [f(2), year("a", "a"), n("b", 2, 4), n("b", 6, 4)]),
    A("2026", "22 00 222 666 NEWS", 30, "exposed", [n("a", 2, 2), soap(2), n("b", 2, 3), n("c", 6, 3), singles([fixed("wn"), fixed("we"), fixed("ww"), fixed("ws")])]),

    A("2468", "222 444 6666 8888", 25, "exposed", [n("a", 2, 3), n("a", 4, 3), n("b", 6, 4), n("b", 8, 4)]),
    A("2468", "222 444 6666 8888", 25, "exposed", [n("a", 2, 3), n("b", 4, 3), n("c", 6, 4), n("c", 8, 4)]),
    A("2468", "FF 2222 44 66 8888", 30, "exposed", [f(2), n("a", 2, 4), n("b", 4, 2), n("b", 6, 2), n("c", 8, 4)]),
    A("2468", "EE 22 444 666 88 WW", 30, "exposed", [wind("we", 2), n("a", 2, 2), n("a", 4, 3), n("b", 6, 3), n("b", 8, 2), wind("ww", 2)]),
    A("2468", "2222 DDD 8888 DDD", 25, "exposed", [n("a", 2, 4), d("a", 3), n("b", 8, 4), d("b", 3)]),
    A("2468", "FF 22 44 666 8888", 25, "exposed", [f(2), n("a", 2, 2), n("a", 4, 2), n("b", 6, 3), n("b", 8, 4)]),
    A("2468", "2468 2222 D 2222 D", 25, "exposed", [run("a", [2, 4, 6, 8]), n("b", 2, 4), d("b", 1), n("c", 2, 4), d("c", 1)]),
    A("2468", "FFF 2468 FFF 2222", 30, "concealed", [f(3), run("a", [2, 4, 6, 8]), f(3), n("b", 2, 4)]),

    A("Any Like Numbers", "111 FFFFF 1111", 30, "exposed", [n("a", "same", 3), f(5), n("b", "same", 4)], anyRank),
    A("Any Like Numbers", "1111 D 111 D 1111 D", 25, "exposed", [n("a", "same", 4), d("a", 1), n("b", "same", 3), d("b", 1), n("c", "same", 4), d("c", 1)], anyRank),
    A("Any Like Numbers", "FF 1111 1111 1111", 25, "exposed", [f(2), n("a", "same", 4), n("b", "same", 4), n("c", "same", 4)], anyRank),

    A("Quints", "1111 11111 11111", 40, "exposed", [n("a", "same", 4), n("b", "same", 5), n("c", "same", 5)], anyRank),
    A("Quints", "FF 1111 22 33333 D", 45, "exposed", [f(2), n("a", { startOffset: 0 }, 4), n("a", { startOffset: 1 }, 2), n("a", { startOffset: 2 }, 5), d("a", 1)], consecutiveStarts(3)),
    A("Quints", "1111 44444 DDDD D", 40, "exposed", [n("a", "same", 4), n("b", "same", 5), d("b", 4), d("b", 1)], anyRank),

    A("Consecutive Run", "11 22 33 444 5555", 25, "exposed", [n("a", { startOffset: 0 }, 2), n("a", { startOffset: 1 }, 2), n("a", { startOffset: 2 }, 2), n("b", { startOffset: 3 }, 3), n("b", { startOffset: 4 }, 4)], consecutiveStarts(5)),
    A("Consecutive Run", "55 666 77 888 9999", 25, "exposed", [n("a", { startOffset: 4 }, 2), n("a", { startOffset: 5 }, 3), n("b", { startOffset: 6 }, 2), n("b", { startOffset: 7 }, 3), n("b", { startOffset: 8 }, 4)], [{ start: 1 }]),
    A("Consecutive Run", "FFF 111 234 5555", 25, "exposed", [f(3), n("a", { startOffset: 0 }, 3), shifted("b", [1, 2, 3]), n("a", { startOffset: 4 }, 4)], consecutiveStarts(5)),
    A("Consecutive Run", "11 22 111 222 3333", 25, "exposed", [n("a", { startOffset: 0 }, 2), n("a", { startOffset: 1 }, 2), n("b", { startOffset: 0 }, 3), n("b", { startOffset: 1 }, 3), n("b", { startOffset: 2 }, 4)], consecutiveStarts(3)),
    A("Consecutive Run", "111 222 3333 4444", 25, "exposed", [n("a", { startOffset: 0 }, 3), n("a", { startOffset: 1 }, 3), n("b", { startOffset: 2 }, 4), n("b", { startOffset: 3 }, 4)], consecutiveStarts(4)),
    A("Consecutive Run", "FFF 11 22 333 DDDD", 25, "exposed", [f(3), n("a", { startOffset: 0 }, 2), n("a", { startOffset: 1 }, 2), n("a", { startOffset: 2 }, 3), d("a", 4)], consecutiveStarts(3)),
    A("Consecutive Run", "111 FFFFF 2222", 30, "exposed", [n("a", { startOffset: 0 }, 3), f(5), n("a", { startOffset: 1 }, 4)], consecutiveStarts(2)),
    A("Consecutive Run", "FF 111 2222 3333", 25, "exposed", [f(2), n("a", { startOffset: 0 }, 3), n("a", { startOffset: 1 }, 4), n("a", { startOffset: 2 }, 4)], consecutiveStarts(3)),
    A("Consecutive Run", "122 333 122 333 44", 35, "concealed", [singles([one("a", { startOffset: 0 })]), n("a", { startOffset: 1 }, 2), n("a", { startOffset: 2 }, 3), singles([one("b", { startOffset: 0 })]), n("b", { startOffset: 1 }, 2), n("b", { startOffset: 2 }, 3), n("c", { startOffset: 3 }, 2)], consecutiveStarts(4)),

    A("13579", "11 333 55 777 9999", 25, "exposed", [n("a", 1, 2), n("a", 3, 3), n("a", 5, 2), n("b", 7, 3), n("b", 9, 4)]),
    A("13579", "111 333 3333 5555", 25, "exposed", [n("a", 1, 3), n("a", 3, 3), n("b", 3, 4), n("b", 5, 4)]),
    A("13579", "555 777 7777 9999", 30, "exposed", [n("a", 5, 3), n("a", 7, 3), n("b", 7, 4), n("b", 9, 4)]),
    A("13579", "NN 111 33 5555 SS", 25, "exposed", [wind("wn", 2), n("a", 1, 3), n("a", 3, 2), n("a", 5, 4), wind("ws", 2)]),
    A("13579", "NN 5555 77 9999 SS", 30, "exposed", [wind("wn", 2), n("a", 5, 4), n("a", 7, 2), n("a", 9, 4), wind("ws", 2)]),
    A("13579", "113579 111 111", 25, "concealed", [singles([one("a", 1), one("a", 1), one("a", 3), one("a", 5), one("a", 7), one("a", 9)]), n("b", 1, 3), n("c", 1, 3)]),
    A("13579", "FFF 11 33 555 DDDD", 25, "exposed", [f(3), n("a", 1, 2), n("a", 3, 2), n("a", 5, 3), d("a", 4)]),
    A("13579", "FFF 55 77 999 DDDD", 25, "exposed", [f(3), n("a", 5, 2), n("a", 7, 2), n("a", 9, 3), d("a", 4)]),
    A("13579", "11 33 111 333 5555", 25, "exposed", [n("a", 1, 2), n("a", 3, 2), n("b", 1, 3), n("b", 3, 3), n("b", 5, 4)]),
    A("13579", "55 77 555 777 9999", 25, "exposed", [n("a", 5, 2), n("a", 7, 2), n("b", 5, 3), n("b", 7, 3), n("b", 9, 4)]),
    A("13579", "11 33 55 77 9999", 30, "exposed", [n("a", 1, 2), n("a", 3, 2), n("a", 5, 2), n("a", 7, 2), n("b", 9, 4)]),
    A("13579", "FF 135 777 999 DDD", 30, "concealed", [f(2), run("a", [1, 3, 5]), n("b", 7, 3), n("b", 9, 3), d("b", 3)]),

    A("Winds Dragons", "NNNN EEE WWW SSSS", 25, "exposed", [wind("wn", 4), wind("we", 3), wind("ww", 3), wind("ws", 4)]),
    A("Winds Dragons", "NNN EEE WWW SSS", 25, "exposed", [wind("wn", 3), wind("we", 3), wind("ww", 3), wind("ws", 3), f(2)]),
    A("Winds Dragons", "1234 DDD DDD DDD", 25, "exposed", [run("a", [1, 2, 3, 4]), d("a", 3), d("b", 3), d("c", 3)]),
    A("Winds Dragons", "NNN 111 111 SSS", 25, "exposed", [wind("wn", 3), n("a", "same", 3), n("b", "same", 3), wind("ws", 3), f(2)], anyRank),
    A("Winds Dragons", "EEE 2222 2222 WWW", 25, "exposed", [wind("we", 3), n("a", "same", 4), n("b", "same", 4), wind("ww", 3)], anyRank),
    A("Winds Dragons", "FF NNNN EEE DDDD", 25, "exposed", [f(2), wind("wn", 4), wind("we", 3), d("a", 4)]),
    A("Winds Dragons", "1 N 2 EE 3 WWW 4 SSSS", 25, "exposed", [singles([one("a", 1), fixed("wn"), one("a", 2)]), wind("we", 2), singles([one("a", 3)]), wind("ww", 3), singles([one("a", 4)]), wind("ws", 4)]),
    A("Winds Dragons", "FF NNNN SSSS DD DD", 25, "exposed", [f(2), wind("wn", 4), wind("ws", 4), d("a", 2), d("b", 2)]),
    A("Winds Dragons", "FF EEE WWWW DD DD", 25, "exposed", [f(2), wind("we", 3), wind("ww", 4), d("a", 2), d("b", 2), singles([dr("c")])]),
    A("Winds Dragons", "NN EEE 2026 WWW SS", 30, "concealed", [wind("wn", 2), wind("we", 3), year("a", "a"), wind("ww", 3), wind("ws", 2)]),

    A("369", "333 666 6666 9999", 25, "exposed", [n("a", 3, 3), n("a", 6, 3), n("b", 6, 4), n("b", 9, 4)]),
    A("369", "33 66 333 666 9999", 25, "exposed", [n("a", 3, 2), n("a", 6, 2), n("b", 3, 3), n("b", 6, 3), n("b", 9, 4)]),
    A("369", "FFF 33 666 99 DDDD", 25, "exposed", [f(3), n("a", 3, 2), n("a", 6, 3), n("a", 9, 2), d("a", 4)]),
    A("369", "33 66 666 999 NEWS", 30, "exposed", [n("a", 3, 2), n("a", 6, 2), n("b", 6, 3), n("b", 9, 3), singles([fixed("wn"), fixed("we"), fixed("ww"), fixed("ws")])]),
    A("369", "FF 3369 3333 3333", 25, "exposed", [f(2), run("a", [3, 3, 6, 9]), n("b", 3, 4), n("c", 3, 4)]),
    A("369", "FF 333 666 999 369", 30, "concealed", [f(2), n("a", 3, 3), n("a", 6, 3), n("a", 9, 3), run("b", [3, 6, 9])]),

    A("Singles & Pairs", "11 22 33 44 55 66 77", 50, "concealed", [n("a", { startOffset: 0 }, 2), n("a", { startOffset: 1 }, 2), n("a", { startOffset: 2 }, 2), n("a", { startOffset: 3 }, 2), n("a", { startOffset: 4 }, 2), n("a", { startOffset: 5 }, 2), n("a", { startOffset: 6 }, 2)], consecutiveStarts(7)),
    A("Singles & Pairs", "FF 3369 3369 3369", 50, "concealed", [f(2), run("a", [3, 3, 6, 9]), run("b", [3, 3, 6, 9]), run("c", [3, 3, 6, 9])]),
    A("Singles & Pairs", "11 357 99 11 357 99", 50, "concealed", [n("a", 1, 2), run("a", [3, 5, 7]), n("a", 9, 2), n("b", 1, 2), run("b", [3, 5, 7]), n("b", 9, 2)]),
    A("Singles & Pairs", "FF 2026 2026 2026", 75, "concealed", [f(2), year("a", "a"), year("b", "b"), year("c", "c")]),
  ];

  return specs.map(makeAmericanPattern);
}

function makeAmericanPattern(spec, index) {
  const pattern = makeTargetPattern({
    id: `american-${index + 1}`,
    name: `${spec.section}: ${spec.display}`,
    category: spec.section,
    winning: spec.points,
    fishing: null,
    note: "",
    generate: () => generateAmericanTargets(spec),
  });
  return Object.assign(pattern, {
    game: "american",
    exposure: spec.exposure,
    display: spec.display,
    displayHTML: americanDisplayHTML(spec.groups),
  });
}

function americanDisplayHTML(groups) {
  return groups.map(americanGroupDisplayHTML).join(" ");
}

function americanGroupDisplayHTML(groupDef) {
  if (groupDef.kind === "singles") {
    return `<span class="american-card-group">${groupDef.items.map((item) => americanItemDisplayHTML(item, 1)).join("")}</span>`;
  }
  return `<span class="american-card-group">${americanItemDisplayHTML(groupDef, groupDef.count)}</span>`;
}

function americanItemDisplayHTML(item, count = 1) {
  const text = americanItemDisplayText(item).repeat(count);
  return `<span class="${americanCardClass(item)}">${text}</span>`;
}

function americanItemDisplayText(item) {
  if (item.kind === "number") return String(americanDisplayRank(item.rank));
  if (item.kind === "dragon") return "D";
  if (item.kind === "fixed") {
    if (item.id === americanFlowerId) return "F";
    if (item.id === "dw") return "0";
    return tileById.get(item.id)?.face || tileById.get(item.id)?.short || "";
  }
  return "";
}

function americanDisplayRank(rank) {
  if (typeof rank === "number") return rank;
  if (rank === "same") return 1;
  if (rank && typeof rank === "object" && Number.isFinite(rank.startOffset)) return rank.startOffset + 1;
  return rank;
}

function americanCardClass(item) {
  if (item.color) return `american-card-color american-card-${item.color}`;
  if (item.kind === "fixed" && ["we", "ws", "ww", "wn"].includes(item.id)) return "american-card-color american-card-a";
  if (item.kind === "fixed" && item.id === "dw") return "american-card-color american-card-a";
  if (item.kind === "fixed" && item.id === americanFlowerId) return "american-card-color american-card-a";
  return "american-card-color american-card-a";
}

function generateAmericanTargets(spec) {
  const targets = [];
  for (const vars of spec.rankOptions || [{}]) {
    for (const colorMap of americanColorMaps(spec.groups)) {
      const options = spec.groups.map((groupDef) => americanGroupOptions(groupDef, colorMap, vars));
      if (options.some((groupOptions) => groupOptions.length === 0)) continue;
      targets.push(...combineOptionLists(options));
    }
  }
  return targets;
}

function americanColorMaps(groups) {
  const colors = Array.from(americanColorsInGroups(groups));
  if (!colors.length) return [{}];
  const maps = [];
  chooseItems(suitOrder, colors.length, (chosenSuits) => {
    for (const suits of permutations(chosenSuits)) {
      maps.push(Object.fromEntries(colors.map((color, index) => [color, suits[index]])));
    }
  });
  return maps;
}

function americanColorsInGroups(groups) {
  const colors = new Set();
  const collect = (item) => {
    if ((item.kind === "number" || item.kind === "dragon") && item.color) colors.add(item.color);
  };
  for (const groupDef of groups) {
    collect(groupDef);
    if (groupDef.kind === "singles") groupDef.items.forEach(collect);
  }
  return colors;
}

function permutations(items) {
  if (items.length <= 1) return [items];
  const out = [];
  items.forEach((item, index) => {
    const rest = [...items.slice(0, index), ...items.slice(index + 1)];
    for (const tail of permutations(rest)) out.push([item, ...tail]);
  });
  return out;
}

function americanGroupOptions(groupDef, colorMap, vars) {
  if (groupDef.kind === "singles") {
    const entries = [];
    for (const item of groupDef.items) entries.push([americanItemId(item, colorMap, vars), 1]);
    const vec = entriesToVec(entries);
    return vec ? [vec] : [];
  }

  const id = americanItemId(groupDef, colorMap, vars);
  return americanRepeatOptions(id, groupDef.count);
}

function americanItemId(item, colorMap, vars) {
  if (item.kind === "fixed") return item.id;
  if (item.kind === "number") {
    const suit = colorMap[item.color];
    return `${suit}${americanRank(item.rank, vars)}`;
  }
  if (item.kind === "dragon") {
    return americanDragonForSuit[colorMap[item.color]];
  }
  return item.id;
}

function americanRank(rank, vars) {
  if (typeof rank === "number") return rank;
  if (rank === "same") return vars.same;
  if (rank && typeof rank === "object" && Number.isFinite(rank.startOffset)) return vars.start + rank.startOffset;
  return Number(rank);
}

function americanRepeatOptions(id, count) {
  const allowJokers = count >= 3;
  const maxNatural = maxTileCopies(id);
  const minJokers = allowJokers ? Math.max(0, count - maxNatural) : 0;
  const maxJokers = allowJokers ? Math.min(count, maxTileCopies(jokerId)) : 0;
  const options = [];

  for (let jokers = minJokers; jokers <= maxJokers; jokers += 1) {
    const natural = count - jokers;
    if (natural > maxNatural) continue;
    const entries = [];
    if (natural > 0) entries.push([id, natural]);
    if (jokers > 0) entries.push([jokerId, jokers]);
    const vec = entriesToVec(entries);
    if (vec) options.push(vec);
  }

  return options;
}

const australianPatterns = patternList();
const hongKongPatterns = hongKongPatternList();
const singaporePatterns = singaporePatternList();
const riichiPatterns = riichiPatternList();
const americanPatterns = americanPatternList();

function activePatterns() {
  if (state.game.version === "american") return americanPatterns;
  if (state.game.version === "hong-kong-cantonese") return hongKongPatterns;
  if (state.game.version === "singapore-malaysian") return singaporePatterns;
  if (state.game.version === "riichi") return riichiPatterns;
  return australianPatterns;
}

function evaluateOneDraw(pattern, counts, known, context) {
  const liveCopies = Array.from(known, (count, index) => activeTileCopies(index) - count);
  const discardableCounts = context.discardableCounts || counts;
  const denominator = totalTileCopiesForVersion() - totalInVec(known);
  let bestOuts = 0;
  let bestDiscards = [];
  let bestWaits = new Map();

  for (let discard = 0; discard < TILE_COUNT; discard += 1) {
    if (counts[discard] <= 0 || discardableCounts[discard] <= 0) continue;
    counts[discard] -= 1;
    const waits = new Map();
    let outs = 0;

    for (let draw = 0; draw < TILE_COUNT; draw += 1) {
      const live = liveCopies[draw];
      if (live <= 0) continue;
      counts[draw] += 1;
      if (pattern.isWin(counts, context)) {
        waits.set(draw, live);
        outs += live;
      }
      counts[draw] -= 1;
    }

    counts[discard] += 1;

    if (outs > bestOuts) {
      bestOuts = outs;
      bestDiscards = [discard];
      bestWaits = waits;
    } else if (outs === bestOuts && outs > 0) {
      bestDiscards.push(discard);
      for (const [tileIndex, live] of waits) {
        bestWaits.set(tileIndex, Math.max(bestWaits.get(tileIndex) || 0, live));
      }
    }
  }

  return {
    outs: bestOuts,
    denominator,
    probability: denominator > 0 ? bestOuts / denominator : 0,
    discards: bestDiscards,
    waits: bestWaits,
  };
}

function evaluatePatterns() {
  const counts = selectionCounts();
  const known = knownCounts();
  const liveCopies = liveCopiesFromKnown(known);
  const discardableCounts = discardableSelectionCounts();
  const total = totalInVec(counts);
  const context = { seatWind: state.seatWind, liveCopies, discardableCounts };
  if (total !== 14) return [];

  return activePatterns()
    .map((pattern) => {
      const complete = pattern.isWin(counts, context);
      const oneDraw = evaluateOneDraw(pattern, counts, known, context);
      const distance = complete
        ? { missing: 0, needed: [], discards: [] }
        : oneDraw.outs > 0
          ? { missing: 1, needed: Array.from(oneDraw.waits.keys()), discards: oneDraw.discards }
          : pattern.distance(counts, context);
      const status = complete ? "complete" : oneDraw.outs > 0 ? "fishing" : "longer";
      return { pattern, complete, oneDraw, distance, status };
    })
    .sort((a, b) => {
      if (a.complete !== b.complete) return a.complete ? -1 : 1;
      if (a.oneDraw.outs !== b.oneDraw.outs) return b.oneDraw.outs - a.oneDraw.outs;
      const aBlocked = a.distance.blocked && !a.complete && a.oneDraw.outs === 0;
      const bBlocked = b.distance.blocked && !b.complete && b.oneDraw.outs === 0;
      if (aBlocked !== bBlocked) return aBlocked ? 1 : -1;
      if (a.distance.missing !== b.distance.missing) return a.distance.missing - b.distance.missing;
      const scoreA = topWinningPointForPattern(a.pattern);
      const scoreB = topWinningPointForPattern(b.pattern);
      return scoreB - scoreA || a.pattern.name.localeCompare(b.pattern.name);
    });
}

function scoreLabel(value) {
  return value == null ? "n/a" : String(value);
}

function holdCurrentResults() {
  if (state.hand.length !== HAND_SIZE || !state.draw || totalSelected() !== 14) return;
  const evaluated = evaluatePatterns();
  state.heldResults = {
    completeCount: evaluated.filter((item) => item.complete).length,
    fishingCount: evaluated.filter((item) => item.oneDraw.outs > 0).length,
    discardedCount: allDiscards().length,
    evaluated,
  };
}

function visibleResults(evaluated) {
  const exposureResults = hasOwnTablePickupExposure()
    ? evaluated.filter((item) => canShowWithExposedHand(item.pattern))
    : evaluated;
  if (state.filter === "one") return exposureResults.slice(0, 1);
  const scoreFilteredResults = !state.pointFilters.length ? exposureResults : exposureResults.filter((item) =>
    winningPointValuesForPattern(item.pattern).some((value) =>
      state.pointFilters.some((filter) => pointFilterMatchesValue(filter, value)),
    ),
  );
  if (state.filter === "all") return scoreFilteredResults;
  const topResults = exposureResults.filter((item, index) => {
    const blocked = item.distance.blocked && !item.complete && item.oneDraw.outs === 0;
    return !blocked && (index < 18 || item.complete || item.oneDraw.outs > 0);
  });
  if (!state.pointFilters.length) return topResults;
  return topResults.filter((item) =>
    winningPointValuesForPattern(item.pattern).some((value) =>
      state.pointFilters.some((filter) => pointFilterMatchesValue(filter, value)),
    ),
  );
}

function isBlockedResult(result) {
  return !result.complete && result.oneDraw.outs === 0 && result.distance.blocked;
}

function resultMissingCount(result) {
  if (result.complete) return 0;
  if (result.oneDraw.outs > 0) return 1;
  return result.distance.missing;
}

function suggestedDiscardIndexesForResult(result) {
  if (result.complete || isBlockedResult(result)) return [];
  const discardableCounts = discardableSelectionCounts();
  const indexes = result.oneDraw.outs > 0 ? result.oneDraw.discards : result.distance.discards || [];
  return Array.from(new Set(indexes)).filter((index) => discardableCounts[index] > 0);
}

function displayedResultItems() {
  if (totalSelected() === HAND_SIZE + 1 && state.hand.length === HAND_SIZE && state.draw) {
    return visibleResults(evaluatePatterns());
  }
  return state.heldResults ? visibleResults(state.heldResults.evaluated) : [];
}

function selectedTileUnits() {
  const units = state.hand.map((id, index) => ({
    id,
    locked: state.lockedHandSlots[index] === true,
    origin: "hand",
    originIndex: index,
  }));
  if (state.draw) {
    units.push({
      id: state.draw,
      locked: state.lockedDraw === true,
      origin: "draw",
      originIndex: HAND_SIZE,
    });
  }
  return units;
}

function applyTileUnitsToHand(units) {
  const normalized = units.slice(0, HAND_SIZE + 1);
  state.hand = normalized.slice(0, HAND_SIZE).map((unit) => unit.id);
  state.lockedHandSlots = normalized.slice(0, HAND_SIZE).map((unit) => unit.locked === true);
  const drawUnit = normalized[HAND_SIZE];
  state.draw = drawUnit?.id || null;
  state.lockedDraw = drawUnit?.locked === true && !!drawUnit;
}

function removeFirstUnit(units, predicate, preferDraw = false) {
  let index = -1;
  if (preferDraw) index = units.findIndex((unit) => unit.origin === "draw" && predicate(unit));
  if (index < 0) index = units.findIndex(predicate);
  if (index < 0) return null;
  return units.splice(index, 1)[0];
}

function tileUnitSort(a, b) {
  return idToIndex(a.id) - idToIndex(b.id) || Number(a.locked) - Number(b.locked);
}

function targetForResultOrdering(result, primaryDiscardIndex = null) {
  if (typeof result.pattern.getTargets !== "function") return null;
  const context = {
    seatWind: state.seatWind,
    liveCopies: liveCopiesFromKnown(knownCounts()),
    discardableCounts: discardableSelectionCounts(),
  };
  const counts = selectionCounts();
  let best = null;

  for (const target of result.pattern.getTargets(context)) {
    const candidate = missingAgainstTarget(counts, target, Infinity, context.liveCopies);
    if (!candidate) continue;
    const hasPrimaryDiscard = primaryDiscardIndex == null || candidate.discards.includes(primaryDiscardIndex);
    const score = [
      hasPrimaryDiscard ? 0 : 1,
      candidate.blocked ? 1 : 0,
      candidate.missing,
      candidate.deadNeeded.length,
      candidate.needed.length,
      candidate.discards.length,
    ];
    if (!best || compareScores(score, best.score) < 0) best = { target, score };
  }

  return best?.target || null;
}

function compareScores(a, b) {
  for (let i = 0; i < Math.max(a.length, b.length); i += 1) {
    const diff = (a[i] || 0) - (b[i] || 0);
    if (diff) return diff;
  }
  return 0;
}

function groupsForOrdering(vec, pattern) {
  const counts = Array.from(vec);
  const groups = [];
  const text = `${pattern.name || ""} ${pattern.category || ""} ${pattern.note || ""}`.toLowerCase();
  const chowSignals = ["chow", "straight", "run", "pinfu", "ittsu", "sanshoku doujun", "sequence"];
  const pungSignals = ["pung", "triplet", "dragon", "wind", "honour", "terminal", "green", "toitoi"];
  const chowsFirst = chowSignals.some((signal) => text.includes(signal))
    || !pungSignals.some((signal) => text.includes(signal));

  if (chowsFirst) {
    extractChowGroups(counts, groups);
    extractSameTileGroups(counts, groups, 3);
  } else {
    extractSameTileGroups(counts, groups, 3);
    extractChowGroups(counts, groups);
  }

  extractSameTileGroups(counts, groups, 2);
  extractSingleGroups(counts, groups);
  return groups;
}

function extractChowGroups(counts, groups) {
  for (const suit of suitOrder) {
    let found = true;
    while (found) {
      found = false;
      for (let rank = 1; rank <= 7; rank += 1) {
        const indexes = [idToIndex(`${suit}${rank}`), idToIndex(`${suit}${rank + 1}`), idToIndex(`${suit}${rank + 2}`)];
        if (indexes.every((index) => counts[index] > 0)) {
          indexes.forEach((index) => { counts[index] -= 1; });
          groups.push(indexes.map((index) => tiles[index].id));
          found = true;
          break;
        }
      }
    }
  }
}

function extractSameTileGroups(counts, groups, minimum) {
  for (let index = 0; index < TILE_COUNT; index += 1) {
    while (counts[index] >= minimum) {
      const amount = minimum === 3 ? counts[index] : 2;
      counts[index] -= amount;
      groups.push(Array.from({ length: amount }, () => tiles[index].id));
    }
  }
}

function extractSingleGroups(counts, groups) {
  for (let index = 0; index < TILE_COUNT; index += 1) {
    while (counts[index] > 0) {
      counts[index] -= 1;
      groups.push([tiles[index].id]);
    }
  }
}

function orderUnitsByGroups(units, groups) {
  const available = [...units];
  const ordered = [];

  for (const group of groups) {
    const groupUnits = [];
    for (const id of group) {
      const index = available.findIndex((unit) => unit.id === id);
      if (index >= 0) groupUnits.push(available.splice(index, 1)[0]);
    }
    if (groupUnits.length) ordered.push(...groupUnits);
  }

  return [...ordered, ...available.sort(tileUnitSort)];
}

function orderUnitsForResult(units, result, primaryDiscardIndex = null) {
  const target = targetForResultOrdering(result, primaryDiscardIndex);
  if (target) return orderUnitsByGroups(units, groupsForOrdering(target, result.pattern));

  const current = zeros();
  for (const unit of units) current[idToIndex(unit.id)] += 1;
  return orderUnitsByGroups(units, groupsForOrdering(current, result.pattern));
}

function arrangeHandForResult(result) {
  if (state.activePlayer !== "me" || totalSelected() !== HAND_SIZE + 1 || state.hand.length !== HAND_SIZE || !state.draw) return false;

  const suggestedIndexes = suggestedDiscardIndexesForResult(result);
  const units = selectedTileUnits();
  const primaryDiscardIndex = suggestedIndexes.find((tileIndex) =>
    units.some((unit) => !unit.locked && idToIndex(unit.id) === tileIndex),
  );
  const primaryDiscardUnit = Number.isFinite(primaryDiscardIndex)
    ? removeFirstUnit(units, (unit) => !unit.locked && idToIndex(unit.id) === primaryDiscardIndex, true)
    : null;
  const reservedDrawUnit = primaryDiscardUnit
    ? null
    : removeFirstUnit(units, (unit) => unit.origin === "draw", true);
  const extraDiscardUnits = [];

  for (const tileIndex of suggestedIndexes) {
    if (tileIndex === primaryDiscardIndex) continue;
    const unit = removeFirstUnit(units, (candidate) => !candidate.locked && idToIndex(candidate.id) === tileIndex);
    if (unit) extraDiscardUnits.push(unit);
  }

  const orderedMainUnits = orderUnitsForResult(units, result, primaryDiscardIndex);
  const nextUnits = [
    ...orderedMainUnits,
    ...extraDiscardUnits.sort(tileUnitSort),
    ...(primaryDiscardUnit ? [primaryDiscardUnit] : []),
    ...(reservedDrawUnit ? [reservedDrawUnit] : []),
  ];

  pushHistory();
  applyTileUnitsToHand(nextUnits);
  state.drawSlotPurpose = primaryDiscardUnit ? "suggested-discard" : "last-pickup";
  state.mode = "discard";
  normalizeModeForState();
  render();
  return true;
}

function recommendationFallback(text) {
  return `<span>${t("suggestedDiscard")}</span><strong>${text}</strong>`;
}

function discardRecommendationHTML(evaluated) {
  const visible = visibleResults(evaluated);
  if (!visible.length) return recommendationFallback(t("noMatchingHandsShort"));
  if (visible.some((result) => result.complete)) return recommendationFallback(t("noDiscardNeeded"));

  const counts = discardableSelectionCounts();
  const playable = visible
    .map((result) => ({
      result,
      missing: resultMissingCount(result),
      suggested: suggestedDiscardIndexesForResult(result).filter((index) => counts[index] > 0),
    }))
    .filter((item) => Number.isFinite(item.missing) && item.suggested.length > 0);

  if (!playable.length) return recommendationFallback(t("noClearDiscard"));

  const minimumMissing = Math.min(...playable.map((item) => item.missing));
  const closest = playable.filter((item) => item.missing === minimumMissing);
  const candidates = new Map();

  for (const item of closest) {
    for (const index of item.suggested) {
      if (!candidates.has(index)) {
        candidates.set(index, {
          index,
          closestCount: 0,
          allCount: 0,
          weightedCount: 0,
          oneDrawOuts: 0,
          pointTotal: 0,
          latestPickup: state.draw && idToIndex(state.draw) === index ? 1 : 0,
        });
      }
      const candidate = candidates.get(index);
      candidate.closestCount += 1;
    }
  }

  for (const item of playable) {
    const uniqueSuggested = new Set(item.suggested);
    for (const index of uniqueSuggested) {
      const candidate = candidates.get(index);
      if (!candidate) continue;
      candidate.allCount += 1;
      candidate.weightedCount += 1 / Math.max(1, item.missing);
      candidate.oneDrawOuts += item.result.oneDraw.outs || 0;
      candidate.pointTotal += topWinningPointForPattern(item.result.pattern);
    }
  }

  const best = Array.from(candidates.values()).sort((a, b) =>
    b.closestCount - a.closestCount ||
    b.allCount - a.allCount ||
    b.weightedCount - a.weightedCount ||
    b.oneDrawOuts - a.oneDrawOuts ||
    b.pointTotal - a.pointTotal ||
    b.latestPickup - a.latestPickup ||
    tiles[a.index].short.localeCompare(tiles[b.index].short),
  )[0];

  return `
    <span>${t("suggestedDiscard")}</span>
    <strong>${chipHTML(best.index)}</strong>
  `;
}

function resultListHTML(evaluated) {
  const visible = visibleResults(evaluated);
  if (visible.length) return visible.map((result, index) => resultCardHTML(result, index)).join("");
  return `
    <div class="empty-state">
      ${t("noMatchingHands")}
    </div>
  `;
}

function renderResults() {
  const total = totalSelected();

  if (total !== 14 || state.hand.length !== HAND_SIZE || !state.draw) {
    if (state.heldResults) {
      if (dom.discardRecommendation) dom.discardRecommendation.innerHTML = discardRecommendationHTML(state.heldResults.evaluated);
      dom.results.innerHTML = resultListHTML(state.heldResults.evaluated);
      return;
    }

    if (dom.discardRecommendation) dom.discardRecommendation.innerHTML = recommendationFallback(t("select14Tiles"));
    dom.results.innerHTML = `
      <div class="empty-state">
        ${t("select14TileHint")}
      </div>
    `;
    return;
  }

  const evaluated = evaluatePatterns();
  if (dom.discardRecommendation) dom.discardRecommendation.innerHTML = discardRecommendationHTML(evaluated);
  dom.results.innerHTML = resultListHTML(evaluated);
}

function resultCardHTML(result, resultIndex) {
  const { pattern, oneDraw, distance, status } = result;
  const liveCopies = liveCopiesFromKnown(knownCounts());
  const isAmerican = pattern.game === "american";
  const resultTitle = isAmerican ? pattern.category : patternDisplayName(pattern);
  const patternLine = isAmerican
    ? `<div class="american-card-pattern" aria-label="${pattern.display}">${pattern.displayHTML}</div>`
    : "";
  const displayNote = patternDisplayNote(pattern);
  const noteLine = displayNote ? `<div class="result-note">${displayNote}</div>` : "";
  const hasOneDrawWait = !result.complete && oneDraw.outs > 0;
  const blocked = !result.complete && !hasOneDrawWait && distance.blocked;
  const neededText = tilesNeededText(distance.missing);
  const statusText = result.complete
    ? t("complete")
    : hasOneDrawWait
      ? t("oneDrawAway")
      : blocked
        ? t("unavailable")
        : neededText;
  const statusClass = result.complete ? "complete" : oneDraw.outs > 0 ? "fishing" : blocked ? "blocked" : "longer";
  const suggestedDiscardIndexes = suggestedDiscardIndexesForResult(result);
  const suggestedDiscards = suggestedDiscardIndexes.slice(0, 10).map((index) => chipHTML(index)).join("");
  const neededIndexes = blocked && distance.deadNeeded?.length ? distance.deadNeeded : distance.needed;
  const needed = neededIndexes
    .slice(0, 12)
    .map((index) => chipHTML(index, "", { remaining: Math.max(0, liveCopies[index] || 0) }))
    .join("");

  return `
    <article class="result-card ${statusClass}" role="button" tabindex="0" data-result-index="${resultIndex}" title="${t("arrangeHandFor")} ${resultTitle}">
      <div class="result-main">
        <h3 class="result-name">${resultTitle}</h3>
        ${scoreMetaHTML(pattern)}
        ${patternLine}
        ${noteLine}
        <span class="status-pill ${statusClass}">${statusText}</span>
      </div>
      <div class="result-side">
        <div class="result-needed">
          <div class="result-meta">${result.complete ? t("handIsComplete") : blocked ? t("noLiveCopiesLeft") : t("neededTiles")}</div>
          <div class="chip-row">${result.complete ? t("alreadyComplete") : needed || (blocked ? t("neededTilesGone") : t("noSingleTileTarget"))}</div>
        </div>
        <div class="result-discards">
          <div class="result-meta">${t("suggestedDiscards")}</div>
          <div class="chip-row">${result.complete ? t("noDiscardNeeded") : blocked ? t("noLiveRoute") : suggestedDiscards || t("noClearDiscard")}</div>
        </div>
      </div>
    </article>
  `;
}

function render() {
  renderLanguage();
  renderSlots();
  renderMode();
  renderCollapsibleSections();
  renderPalette();
  renderResults();
  saveState();
}

function saveState() {
  localStorage.setItem(
    "mahjong-helper-state",
    JSON.stringify({
      configured: state.configured,
      game: state.game,
      hand: state.hand,
      draw: state.draw,
      kongTiles: state.kongTiles,
      lockedHandSlots: state.lockedHandSlots,
      lockedDraw: state.lockedDraw,
      activePlayer: state.activePlayer,
      lastDiscard: state.lastDiscard,
      discardsByPlayer: state.discardsByPlayer,
      pickedUpByPlayer: state.pickedUpByPlayer,
      lockedPickedUpByPlayer: state.lockedPickedUpByPlayer,
      trackAllPlayers: state.trackAllPlayers,
      autoRotate: state.autoRotate,
      autoRotateUserSet: state.autoRotateUserSet,
      exposeMode: state.exposeMode,
      kongMode: state.kongMode,
      kongReplacementPending: state.kongReplacementPending,
      drawSlotPurpose: state.drawSlotPurpose,
      mode: state.mode,
      seatWind: state.seatWind,
      filter: state.filter,
      pointFilters: state.pointFilters,
      ui: state.ui,
    }),
  );
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("mahjong-helper-state") || "null");
    if (!saved) return;
    state.configured = saved.configured === true;
    if (saved.game) {
      state.game = {
        version: validGameVersion(saved.game.version),
        language: validLanguage(saved.game.language),
        players: saved.game.players === "3" ? "3" : "4",
      };
    }
    state.hand = Array.isArray(saved.hand) ? saved.hand.filter((id) => tileById.has(id)).slice(0, HAND_SIZE) : [];
    state.draw = tileById.has(saved.draw) ? saved.draw : null;
    state.kongTiles = Array.isArray(saved.kongTiles) ? saved.kongTiles.filter((id) => tileById.has(id)) : [];
    state.lockedHandSlots = normalizeLockList(saved.lockedHandSlots, state.hand.length, false);
    state.lockedDraw = saved.lockedDraw === true && !!state.draw;
    state.lastDiscard = tileById.has(saved.lastDiscard) ? saved.lastDiscard : null;
    state.discardsByPlayer = normalizeDiscardsByPlayer(saved.discardsByPlayer || { me: saved.discards || [] });
    state.pickedUpByPlayer = normalizeDiscardsByPlayer(saved.pickedUpByPlayer || {});
    state.lockedPickedUpByPlayer = normalizeLockedPickedUpByPlayer(saved.lockedPickedUpByPlayer);
    state.trackAllPlayers = true;
    state.autoRotateUserSet = saved.autoRotateUserSet === true;
    state.autoRotate = state.autoRotateUserSet && saved.autoRotate === true;
    state.exposeMode = saved.exposeMode === true;
    state.kongMode = saved.kongMode === true;
    state.kongReplacementPending = saved.kongReplacementPending === true;
    state.drawSlotPurpose = saved.drawSlotPurpose === "suggested-discard" ? "suggested-discard" : "last-pickup";
    state.activePlayer = currentPlayerOrder().includes(saved.activePlayer) ? saved.activePlayer : "me";
    state.mode = ["draw", "table", "discard"].includes(saved.mode) ? saved.mode : "hand";
    state.seatWind = windIds.includes(saved.seatWind) ? saved.seatWind : "we";
    state.filter = ["one", "all", "best"].includes(saved.filter) ? saved.filter : "best";
    const pointOptions = pointFilterOptionsForVersion(state.game.version);
    state.pointFilters = Array.isArray(saved.pointFilters)
      ? saved.pointFilters.filter((value) => pointOptions.includes(value))
      : [];
    state.ui = {
      discardCollapsed: saved.ui?.discardCollapsed === true,
      pickupCollapsed: saved.ui?.pickupCollapsed === true,
      resultsCollapsed: saved.ui?.resultsCollapsed === true,
    };
    sanitizeTilesForVersion();
    normalizeModeForState();
  } catch {
    // Ignore stale state from older builds.
  }
}

dom.palette.addEventListener("click", (event) => {
  const button = event.target.closest("[data-tile]");
  if (!button || button.disabled) return;
  if (state.activePlayer !== "me") {
    if (state.mode === "table") {
      pickupTileFromTable(button.dataset.tile);
      return;
    }
    addOtherPlayerDiscard(button.dataset.tile);
    return;
  }
  if (state.mode === "discard") {
    discardOwnSelectedTile(button.dataset.tile);
    return;
  }
  addTile(button.dataset.tile);
});

dom.turnMe.addEventListener("click", () => {
  state.activePlayer = "me";
  state.mode = modeForMyTurnTileCount();
  normalizeModeForState();
  render();
});

dom.turnOther.addEventListener("click", () => {
  state.activePlayer = "left";
  state.mode = "discard";
  normalizeModeForState();
  render();
});

dom.autoRotate.addEventListener("change", () => {
  pushHistory();
  state.autoRotateUserSet = true;
  state.autoRotate = dom.autoRotate.checked;
  normalizeModeForState();
  render();
});

dom.setupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const playerInput = dom.setupForm.querySelector('input[name="setup-players"]:checked');
  state.game = {
    version: validGameVersion(dom.setupVersion.value),
    language: validLanguage(dom.setupLanguage.value),
    players: playerInput?.value === "3" ? "3" : "4",
  };
  state.history = [];
  sanitizeTilesForVersion();
  if (!currentPlayerOrder().includes(state.activePlayer)) state.activePlayer = "me";
  state.configured = true;
  state.heldResults = null;
  resetDrawSlotPurpose();
  render();
});

dom.setupLanguage.addEventListener("change", () => {
  state.game.language = validLanguage(dom.setupLanguage.value);
  render();
});

dom.setupVersion.addEventListener("change", () => {
  state.game.version = validGameVersion(dom.setupVersion.value);
  state.pointFilters = [];
  sanitizeTilesForVersion();
  normalizeModeForState();
  render();
});

dom.setupChange.addEventListener("click", () => {
  state.configured = false;
  render();
});

dom.expose.addEventListener("click", () => {
  if (state.activePlayer !== "me") return;
  state.exposeMode = !state.exposeMode;
  if (state.exposeMode) state.kongMode = false;
  render();
});

dom.kong.addEventListener("click", () => {
  if (state.activePlayer !== "me") return;
  state.kongMode = !state.kongMode;
  if (state.kongMode) state.exposeMode = false;
  render();
});

dom.handSlots.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-hand]");
  if (!button) return;
  const index = Number(button.dataset.removeHand);
  if (state.kongMode && state.activePlayer === "me") {
    declareKongHandTile(index);
  } else if (state.exposeMode && state.activePlayer === "me") {
    toggleHandExposure(index);
  } else if (state.mode === "discard") {
    discardHandTile(index);
  } else {
    removeHandTile(index);
  }
});

dom.drawSlot.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-draw]");
  if (!button) return;
  if (state.kongMode && state.activePlayer === "me") {
    declareKongDrawTile();
  } else if (state.exposeMode && state.activePlayer === "me") {
    toggleDrawExposure();
  } else if (state.mode === "discard") {
    discardDrawTile();
  } else {
    removeDrawTile();
  }
});

dom.discardSlots.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-discard]");
  if (button) {
    if (state.mode === "table") {
      claimDiscardTile(button.dataset.discardPlayer, Number(button.dataset.removeDiscard));
    } else {
      removeDiscardTile(button.dataset.discardPlayer, Number(button.dataset.removeDiscard));
    }
    return;
  }

  const pickupButton = event.target.closest("[data-remove-pickup]");
  if (!pickupButton) return;
  removePickedUpTile(pickupButton.dataset.pickupPlayer, Number(pickupButton.dataset.removePickup));
});

dom.discardToggle.addEventListener("click", () => {
  state.ui.discardCollapsed = !state.ui.discardCollapsed;
  render();
});

dom.pickupToggle.addEventListener("click", () => {
  state.ui.pickupCollapsed = !state.ui.pickupCollapsed;
  render();
});

dom.resultsToggle.addEventListener("click", () => {
  state.ui.resultsCollapsed = !state.ui.resultsCollapsed;
  render();
});

dom.modeDraw.addEventListener("click", () => {
  state.mode = "draw";
  normalizeModeForState();
  render();
});

dom.modeTable.addEventListener("click", () => {
  state.mode = "table";
  normalizeModeForState();
  render();
});

dom.modeDiscard.addEventListener("click", () => {
  state.mode = "discard";
  normalizeModeForState();
  render();
});

dom.selectorLastDiscard.addEventListener("click", (event) => {
  const button = event.target.closest("[data-selector-table-pickup]");
  if (!button || button.disabled) return;
  pickupTileFromTable(button.dataset.selectorTablePickup);
});

dom.results.addEventListener("click", (event) => {
  const card = event.target.closest("[data-result-index]");
  if (!card) return;
  const result = displayedResultItems()[Number(card.dataset.resultIndex)];
  if (result) arrangeHandForResult(result);
});

dom.results.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-result-index]");
  if (!card) return;
  event.preventDefault();
  const result = displayedResultItems()[Number(card.dataset.resultIndex)];
  if (result) arrangeHandForResult(result);
});

dom.filterOne.addEventListener("click", () => {
  state.filter = "one";
  render();
});

dom.filterBest.addEventListener("click", () => {
  state.filter = "best";
  render();
});

dom.filterAll.addEventListener("click", () => {
  state.filter = "all";
  render();
});

dom.pointFilterControls.addEventListener("click", (event) => {
  const button = event.target.closest("[data-point-filter]");
  if (!button) return;
  const rawPointValue = button.dataset.pointFilter;
  const pointValue = rawPointValue === "35plus" ? rawPointValue : Number(rawPointValue);
  if (state.pointFilters.includes(pointValue)) {
    state.pointFilters = state.pointFilters.filter((value) => value !== pointValue);
  } else {
    state.pointFilters = sortPointFilters([...state.pointFilters, pointValue]);
  }
  render();
});

dom.seatWind.addEventListener("change", () => {
  pushHistory();
  state.seatWind = dom.seatWind.value;
  render();
});

dom.undo.addEventListener("click", () => {
  const previous = state.history.pop();
  if (!previous) return;
  restore(previous);
  render();
});

dom.clear.addEventListener("click", () => {
  if (
    !state.hand.length &&
    !state.draw &&
    !state.kongTiles.length &&
    !allDiscards().length &&
    !displayedPickedUpTiles().length &&
    !state.lastDiscard
  ) {
    return;
  }
  pushHistory();
  state.hand = [];
  state.draw = null;
  state.kongTiles = [];
  state.lockedHandSlots = [];
  state.lockedDraw = false;
  state.discardsByPlayer = { me: [], left: [], opposite: [], right: [] };
  state.pickedUpByPlayer = { me: [], left: [], opposite: [], right: [] };
  state.lockedPickedUpByPlayer = { me: [], left: [], opposite: [], right: [] };
  state.lastDiscard = null;
  state.activePlayer = "me";
  state.exposeMode = false;
  state.kongMode = false;
  state.kongReplacementPending = false;
  state.heldResults = null;
  resetDrawSlotPurpose();
  state.mode = "hand";
  render();
});

loadState();
render();
