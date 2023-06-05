const bonDice1 = document.getElementById("bonDice1")
const bonDice2 = document.getElementById("bonDice2")
const bonDice3 = document.getElementById("bonDice3")
const bonDice4 = document.getElementById("bonDice4")
const bonDice5 = document.getElementById("bonDice5")
const bonCard1 = document.getElementById("bonCard1")
const bonCard2 = document.getElementById("bonCard2")
const bonCard3 = document.getElementById("bonCard3")
const bonCard4 = document.getElementById("bonCard4")
const bonCard5 = document.getElementById("bonCard5")


const depositBtn = document.getElementById("depositBtn");
const bet20 = document.getElementById("bet20");
const bet40 = document.getElementById("bet40");
const bet60 = document.getElementById("bet60");
const bet80 = document.getElementById("bet80");
const bet1 = document.getElementById("bet1");
const betMax = document.getElementById("betMax");
const rollBtn = document.getElementById("roll");

const score = document.getElementById("score");
const balance = document.getElementById("balance");
balance.setAttribute("total", 0)
//const rounds = document.getElementById("rounds");
const rolls = document.getElementById("rolls");
rolls.setAttribute("total", 3)
rolls.innerHTML = 3
const rollsLabel = document.getElementById("rollsLabel")
//rounds.setAttribute("total", 13)
//rounds.innerHTML = 13
const betValue = document.getElementById("bet");
const returnBtn = document.getElementById("return")
const gotoYahtzeeBtn = document.getElementById("gotoYahtzee")
const gotoPokerBtn = document.getElementById("gotoPoker")

const log = document.getElementById("log");
const dice1 = document.getElementById("dice1");
dice1.setAttribute("click", false)
const dice2 = document.getElementById("dice2");
dice2.setAttribute("click", false)
const dice3 = document.getElementById("dice3");
dice3.setAttribute("click", false)
const dice4 = document.getElementById("dice4");
dice4.setAttribute("click", false)
const dice5 = document.getElementById("dice5");
dice5.setAttribute("click", false)
const dice6 = document.getElementById("dice6");
dice6.setAttribute("click", false)
const dice7 = document.getElementById("dice7");
dice7.setAttribute("click", false)
const dice8 = document.getElementById("dice8");
dice8.setAttribute("click", false)
const dice9 = document.getElementById("dice9");
dice9.setAttribute("click", false)
const dice10 = document.getElementById("dice10");
dice10.setAttribute("click", false)
const dice11 = document.getElementById("dice11");
dice11.setAttribute("click", false)
const dice12 = document.getElementById("dice12");
dice12.setAttribute("click", false)
const dice13 = document.getElementById("dice13");
dice13.setAttribute("click", false)
const dice14 = document.getElementById("dice14");
dice14.setAttribute("click", false)
const dice15 = document.getElementById("dice15");
dice15.setAttribute("click", false)

const slotsTable = document.getElementById("slotsGame");
const slotsGame = [rollBtn, dice1, dice2, dice3, dice4, dice5, dice6, dice7, dice8, dice9, dice10, dice11, dice12, dice13, dice14, dice15];

const dealBtn = document.getElementById("deal");
const dice16 = document.getElementById("dice16");
dice16.setAttribute("click", false)
const dice17 = document.getElementById("dice17");
dice17.setAttribute("click", false)
const dice18 = document.getElementById("dice18");
dice18.setAttribute("click", false)
const dice19 = document.getElementById("dice19");
dice19.setAttribute("click", false)
const dice20 = document.getElementById("dice20");
dice20.setAttribute("click", false)

const pokerTable = document.getElementById("pokerGame");
const pokerLine = [dice16, dice17, dice18, dice19, dice20];

let deck = [];

const cards = {
    _as: 0,
    _2s: 1,
    _3s: 2,
    _4s: 3,
    _5s: 4,
    _6s: 5,
    _7s: 6,
    _8s: 7,
    _9s: 8,
    _10s: 9,
    _js: 10,
    _qs: 11,
    _ks: 12,
    _ah: 13,
    _2h: 14,
    _3h: 15,
    _4h: 16,
    _5h: 17,
    _6h: 18,
    _7h: 19,
    _8h: 20,
    _9h: 21,
    _10h: 22,
    _jh: 23,
    _qh: 24,
    _kh: 25,
    _ad: 26,
    _2d: 27,
    _3d: 28,
    _4d: 29,
    _5d: 30,
    _6d: 31,
    _7d: 32,
    _8d: 33,
    _9d: 34,
    _10d: 35,
    _jd: 36,
    _qd: 37,
    _kd: 38,
    _ac: 39,
    _2c: 40,
    _3c: 41,
    _4c: 42,
    _5c: 43,
    _6c: 44,
    _7c: 45,
    _8c: 46,
    _9c: 47,
    _10c: 48,
    _jc: 49,
    _qc: 50,
    _kc: 51
};

suit = {
    spades: 0,
    hearts: 1,
    diamonds: 2,
    clubs: 3
}

rank_A_low = {
    A: 1,
    _2: 2,
    _3: 3,
    _4: 4,
    _5: 5,
    _6: 6,
    _7: 7,
    _8: 8,
    _9: 9,
    _10: 10,
    J: 11,
    Q:12,
    K:13
}

rank_A_high  = {
    _2: 2,
    _3: 3,
    _4: 4,
    _5: 5,
    _6: 6,
    _7: 7,
    _8: 8,
    _9: 9,
    _10: 10,
    J: 11,
    Q:12,
    K:13,
    A:14
}

rank_BJ = {
    A1: 1,
    _2: 2,
    _3: 3,
    _4: 4,
    _5: 5,
    _6: 6,
    _7: 7,
    _8: 8,
    _9: 9,
    _10: 10,
    J: 10,
    Q:10,
    K:10,
    A11: 11
}

deck_A_low = {
    _as: [suit.spades, rank_A_low.A, cardImgs[cards._as]],
    _2s: [suit.spades, rank_A_low._2, cardImgs[cards._2s]],
    _3s: [suit.spades, rank_A_low._3, cardImgs[cards._3s]],
    _4s: [suit.spades, rank_A_low._4, cardImgs[cards._4s]],
    _5s: [suit.spades, rank_A_low._5, cardImgs[cards._5s]],
    _6s: [suit.spades, rank_A_low._6, cardImgs[cards._6s]],
    _7s: [suit.spades, rank_A_low._7, cardImgs[cards._7s]],
    _8s: [suit.spades, rank_A_low._8, cardImgs[cards._8s]],
    _9s: [suit.spades, rank_A_low._9, cardImgs[cards._9s]],
    _10s: [suit.spades, rank_A_low._10, cardImgs[cards._10s]],
    _js: [suit.spades, rank_A_low.J, cardImgs[cards._js]],
    _qs: [suit.spades, rank_A_low.Q, cardImgs[cards._qs]],
    _ks: [suit.spades, rank_A_low.K, cardImgs[cards._ks]],
    _ah: [suit.hearts, rank_A_low.A, cardImgs[cards._ah]],
    _2h: [suit.hearts, rank_A_low._2, cardImgs[cards._2h]],
    _3h: [suit.hearts, rank_A_low._3, cardImgs[cards._3h]],
    _4h: [suit.hearts, rank_A_low._4, cardImgs[cards._4h]],
    _5h: [suit.hearts, rank_A_low._5, cardImgs[cards._5h]],
    _6h: [suit.hearts, rank_A_low._6, cardImgs[cards._6h]],
    _7h: [suit.hearts, rank_A_low._7, cardImgs[cards._7h]],
    _8h: [suit.hearts, rank_A_low._8, cardImgs[cards._8h]],
    _9h: [suit.hearts, rank_A_low._9, cardImgs[cards._9h]],
    _10h: [suit.hearts, rank_A_low._10, cardImgs[cards._10h]],
    _jh: [suit.hearts, rank_A_low.J, cardImgs[cards._jh]],
    _qh: [suit.hearts, rank_A_low.Q, cardImgs[cards._qh]],
    _kh: [suit.hearts, rank_A_low.K, cardImgs[cards._kh]],
    _ad: [suit.diamonds, rank_A_low.A, cardImgs[cards._ad]],
    _2d: [suit.diamonds, rank_A_low._2, cardImgs[cards._2d]],
    _3d: [suit.diamonds, rank_A_low._3, cardImgs[cards._3d]],
    _4d: [suit.diamonds, rank_A_low._4, cardImgs[cards._4d]],
    _5d: [suit.diamonds, rank_A_low._5, cardImgs[cards._5d]],
    _6d: [suit.diamonds, rank_A_low._6, cardImgs[cards._6d]],
    _7d: [suit.diamonds, rank_A_low._7, cardImgs[cards._7d]],
    _8d: [suit.diamonds, rank_A_low._8, cardImgs[cards._8d]],
    _9d: [suit.diamonds, rank_A_low._9, cardImgs[cards._9d]],
    _10d: [suit.diamonds, rank_A_low._10, cardImgs[cards._10d]],
    _jd: [suit.diamonds, rank_A_low.J, cardImgs[cards._jd]],
    _qd: [suit.diamonds, rank_A_low.Q, cardImgs[cards._qd]],
    _kd: [suit.diamonds, rank_A_low.K, cardImgs[cards._kd]],
    _ac: [suit.clubs, rank_A_low.A, cardImgs[cards._ac]],
    _2c: [suit.clubs, rank_A_low._2, cardImgs[cards._2c]],
    _3c: [suit.clubs, rank_A_low._3, cardImgs[cards._3c]],
    _4c: [suit.clubs, rank_A_low._4, cardImgs[cards._4c]],
    _5c: [suit.clubs, rank_A_low._5, cardImgs[cards._5c]],
    _6c: [suit.clubs, rank_A_low._6, cardImgs[cards._6c]],
    _7c: [suit.clubs, rank_A_low._7, cardImgs[cards._7c]],
    _8c: [suit.clubs, rank_A_low._8, cardImgs[cards._8c]],
    _9c: [suit.clubs, rank_A_low._9, cardImgs[cards._9c]],
    _10c: [suit.clubs, rank_A_low._10, cardImgs[cards._10c]],
    _jc: [suit.clubs, rank_A_low.J, cardImgs[cards._jc]],
    _qc: [suit.clubs, rank_A_low.Q, cardImgs[cards._qc]],
    _kc: [suit.clubs, rank_A_low.K, cardImgs[cards._kc]],
}

deck_A_high = {
    _as: [suit.spades, rank_A_high.A, cardImgs[cards._as]],
    _2s: [suit.spades, rank_A_high._2, cardImgs[cards._2s]],
    _3s: [suit.spades, rank_A_high._3, cardImgs[cards._3s]],
    _4s: [suit.spades, rank_A_high._4, cardImgs[cards._4s]],
    _5s: [suit.spades, rank_A_high._5, cardImgs[cards._5s]],
    _6s: [suit.spades, rank_A_high._6, cardImgs[cards._6s]],
    _7s: [suit.spades, rank_A_high._7, cardImgs[cards._7s]],
    _8s: [suit.spades, rank_A_high._8, cardImgs[cards._8s]],
    _9s: [suit.spades, rank_A_high._9, cardImgs[cards._9s]],
    _10s: [suit.spades, rank_A_high._10, cardImgs[cards._10s]],
    _js: [suit.spades, rank_A_high.J, cardImgs[cards._js]],
    _qs: [suit.spades, rank_A_high.Q, cardImgs[cards._qs]],
    _ks: [suit.spades, rank_A_high.K, cardImgs[cards._ks]],
    _ah: [suit.hearts, rank_A_high.A, cardImgs[cards._ah]],
    _2h: [suit.hearts, rank_A_high._2, cardImgs[cards._2h]],
    _3h: [suit.hearts, rank_A_high._3, cardImgs[cards._3h]],
    _4h: [suit.hearts, rank_A_high._4, cardImgs[cards._4h]],
    _5h: [suit.hearts, rank_A_high._5, cardImgs[cards._5h]],
    _6h: [suit.hearts, rank_A_high._6, cardImgs[cards._6h]],
    _7h: [suit.hearts, rank_A_high._7, cardImgs[cards._7h]],
    _8h: [suit.hearts, rank_A_high._8, cardImgs[cards._8h]],
    _9h: [suit.hearts, rank_A_high._9, cardImgs[cards._9h]],
    _10h: [suit.hearts, rank_A_high._10, cardImgs[cards._10h]],
    _jh: [suit.hearts, rank_A_high.J, cardImgs[cards._jh]],
    _qh: [suit.hearts, rank_A_high.Q, cardImgs[cards._qh]],
    _kh: [suit.hearts, rank_A_high.K, cardImgs[cards._kh]],
    _ad: [suit.diamonds, rank_A_high.A, cardImgs[cards._ad]],
    _2d: [suit.diamonds, rank_A_high._2, cardImgs[cards._2d]],
    _3d: [suit.diamonds, rank_A_high._3, cardImgs[cards._3d]],
    _4d: [suit.diamonds, rank_A_high._4, cardImgs[cards._4d]],
    _5d: [suit.diamonds, rank_A_high._5, cardImgs[cards._5d]],
    _6d: [suit.diamonds, rank_A_high._6, cardImgs[cards._6d]],
    _7d: [suit.diamonds, rank_A_high._7, cardImgs[cards._7d]],
    _8d: [suit.diamonds, rank_A_high._8, cardImgs[cards._8d]],
    _9d: [suit.diamonds, rank_A_high._9, cardImgs[cards._9d]],
    _10d: [suit.diamonds, rank_A_high._10, cardImgs[cards._10d]],
    _jd: [suit.diamonds, rank_A_high.J, cardImgs[cards._jd]],
    _qd: [suit.diamonds, rank_A_high.Q, cardImgs[cards._qd]],
    _kd: [suit.diamonds, rank_A_high.K, cardImgs[cards._kd]],
    _ac: [suit.clubs, rank_A_high.A, cardImgs[cards._ac]],
    _2c: [suit.clubs, rank_A_high._2, cardImgs[cards._2c]],
    _3c: [suit.clubs, rank_A_high._3, cardImgs[cards._3c]],
    _4c: [suit.clubs, rank_A_high._4, cardImgs[cards._4c]],
    _5c: [suit.clubs, rank_A_high._5, cardImgs[cards._5c]],
    _6c: [suit.clubs, rank_A_high._6, cardImgs[cards._6c]],
    _7c: [suit.clubs, rank_A_high._7, cardImgs[cards._7c]],
    _8c: [suit.clubs, rank_A_high._8, cardImgs[cards._8c]],
    _9c: [suit.clubs, rank_A_high._9, cardImgs[cards._9c]],
    _10c: [suit.clubs, rank_A_high._10, cardImgs[cards._10c]],
    _jc: [suit.clubs, rank_A_high.J, cardImgs[cards._jc]],
    _qc: [suit.clubs, rank_A_high.Q, cardImgs[cards._qc]],
    _kc: [suit.clubs, rank_A_high.K, cardImgs[cards._kc]],
}

deck_BJ = {
    _as: [suit.spades, rank_BJ.A1, cardImgs[cards._as]],
    _2s: [suit.spades, rank_BJ._2, cardImgs[cards._2s]],
    _3s: [suit.spades, rank_BJ._3, cardImgs[cards._3s]],
    _4s: [suit.spades, rank_BJ._4, cardImgs[cards._4s]],
    _5s: [suit.spades, rank_BJ._5, cardImgs[cards._5s]],
    _6s: [suit.spades, rank_BJ._6, cardImgs[cards._6s]],
    _7s: [suit.spades, rank_BJ._7, cardImgs[cards._7s]],
    _8s: [suit.spades, rank_BJ._8, cardImgs[cards._8s]],
    _9s: [suit.spades, rank_BJ._9, cardImgs[cards._9s]],
    _10s: [suit.spades, rank_BJ._10, cardImgs[cards._10s]],
    _js: [suit.spades, rank_BJ.J, cardImgs[cards._js]],
    _qs: [suit.spades, rank_BJ.Q, cardImgs[cards._qs]],
    _ks: [suit.spades, rank_BJ.K, cardImgs[cards._ks]],
    _ah: [suit.hearts, rank_BJ.A1, cardImgs[cards._ah]],
    _2h: [suit.hearts, rank_BJ._2, cardImgs[cards._2h]],
    _3h: [suit.hearts, rank_BJ._3, cardImgs[cards._3h]],
    _4h: [suit.hearts, rank_BJ._4, cardImgs[cards._4h]],
    _5h: [suit.hearts, rank_BJ._5, cardImgs[cards._5h]],
    _6h: [suit.hearts, rank_BJ._6, cardImgs[cards._6h]],
    _7h: [suit.hearts, rank_BJ._7, cardImgs[cards._7h]],
    _8h: [suit.hearts, rank_BJ._8, cardImgs[cards._8h]],
    _9h: [suit.hearts, rank_BJ._9, cardImgs[cards._9h]],
    _10h: [suit.hearts, rank_BJ._10, cardImgs[cards._10h]],
    _jh: [suit.hearts, rank_BJ.J, cardImgs[cards._jh]],
    _qh: [suit.hearts, rank_BJ.Q, cardImgs[cards._qh]],
    _kh: [suit.hearts, rank_BJ.K, cardImgs[cards._kh]],
    _ad: [suit.diamonds, rank_BJ.A1, cardImgs[cards._ad]],
    _2d: [suit.diamonds, rank_BJ._2, cardImgs[cards._2d]],
    _3d: [suit.diamonds, rank_BJ._3, cardImgs[cards._3d]],
    _4d: [suit.diamonds, rank_BJ._4, cardImgs[cards._4d]],
    _5d: [suit.diamonds, rank_BJ._5, cardImgs[cards._5d]],
    _6d: [suit.diamonds, rank_BJ._6, cardImgs[cards._6d]],
    _7d: [suit.diamonds, rank_BJ._7, cardImgs[cards._7d]],
    _8d: [suit.diamonds, rank_BJ._8, cardImgs[cards._8d]],
    _9d: [suit.diamonds, rank_BJ._9, cardImgs[cards._9d]],
    _10d: [suit.diamonds, rank_BJ._10, cardImgs[cards._10d]],
    _jd: [suit.diamonds, rank_BJ.J, cardImgs[cards._jd]],
    _qd: [suit.diamonds, rank_BJ.Q, cardImgs[cards._qd]],
    _kd: [suit.diamonds, rank_BJ.K, cardImgs[cards._kd]],
    _ac: [suit.clubs, rank_BJ.A1, cardImgs[cards._ac]],
    _2c: [suit.clubs, rank_BJ._2, cardImgs[cards._2c]],
    _3c: [suit.clubs, rank_BJ._3, cardImgs[cards._3c]],
    _4c: [suit.clubs, rank_BJ._4, cardImgs[cards._4c]],
    _5c: [suit.clubs, rank_BJ._5, cardImgs[cards._5c]],
    _6c: [suit.clubs, rank_BJ._6, cardImgs[cards._6c]],
    _7c: [suit.clubs, rank_BJ._7, cardImgs[cards._7c]],
    _8c: [suit.clubs, rank_BJ._8, cardImgs[cards._8c]],
    _9c: [suit.clubs, rank_BJ._9, cardImgs[cards._9c]],
    _10c: [suit.clubs, rank_BJ._10, cardImgs[cards._10c]],
    _jc: [suit.clubs, rank_BJ.J, cardImgs[cards._jc]],
    _qc: [suit.clubs, rank_BJ.Q, cardImgs[cards._qc]],
    _kc: [suit.clubs, rank_BJ.K, cardImgs[cards._kc]],
}


const yahtzeeRollBtn = document.getElementById("yahtzeeRoll")
const dice21 = document.getElementById("dice21");
dice21.setAttribute("click", false)
dice21.setAttribute("item", -1)
const dice22 = document.getElementById("dice22");
dice22.setAttribute("click", false)
dice22.setAttribute("item", -1)
const dice23 = document.getElementById("dice23");
dice23.setAttribute("click", false)
dice23.setAttribute("item", -1)
const dice24 = document.getElementById("dice24");
dice24.setAttribute("click", false)
dice24.setAttribute("item", -1)
const dice25 = document.getElementById("dice25");
dice25.setAttribute("click", false)
dice25.setAttribute("item", -1)

const yahtzeeTable = document.getElementById("yahtzeeGame");
const yahtzeeScoreTable = document.getElementById("yahtzeeScore")
const y1sBtn = document.getElementById("1sBtn");
const y2sBtn = document.getElementById("2sBtn");
const y3sBtn = document.getElementById("3sBtn");
const y4sBtn = document.getElementById("4sBtn");
const y5sBtn = document.getElementById("5sBtn");
const y6sBtn = document.getElementById("6sBtn");
const _3oakBtn = document.getElementById("3oakBtn")
const _4oakBtn = document.getElementById("4oakBtn")
const fullHouseBtn = document.getElementById("fullhouseBtn")
const smStraightBtn = document.getElementById("smstraightBtn")
const lgStraightBtn = document.getElementById("lgstraightBtn")
const yahtzeeBtn = document.getElementById("yahtzeeBtn")
const chanceBtn = document.getElementById("chanceBtn")
const y1s = document.getElementById("1s")
y1s.setAttribute("total", -1)
const y2s = document.getElementById("2s")
y2s.setAttribute("total", -1)
const y3s = document.getElementById("3s")
y3s.setAttribute("total", -1)
const y4s = document.getElementById("4s")
y4s.setAttribute("total", -1)
const y5s = document.getElementById("5s")
y5s.setAttribute("total", -1)
const y6s = document.getElementById("6s")
y6s.setAttribute("total", -1)
const topBonus = document.getElementById("topBonus")
topBonus.setAttribute("total", -1)
const topScore = document.getElementById("topTotal")
topScore.setAttribute("total", -1)
const _3oak = document.getElementById("3oak")
_3oak.setAttribute("total", -1)
const _4oak = document.getElementById("4oak")
_4oak.setAttribute("total", -1)
const fullHouse = document.getElementById("fullhouse")
fullHouse.setAttribute("total", -1)
const smStraight = document.getElementById("smstraight")
smStraight.setAttribute("total", -1)
const lgStraight = document.getElementById("lgstraight")
lgStraight.setAttribute("total", -1)
const yahtzee = document.getElementById("yahtzee")
yahtzee.setAttribute("total", -1)
const chance = document.getElementById("chance")
chance.setAttribute("total", -1)
const numYahtzees = document.getElementById("numYahtzees")
numYahtzees.setAttribute("total", 0)
const numYahtzeesScore = document.getElementById("numYahtzeesScore")
numYahtzeesScore.setAttribute("total", 0)
const bottomScore = document.getElementById("bottomTotal")
bottomScore.setAttribute("total", 0)
const grandScore = document.getElementById("grandTotal")
grandScore.setAttribute("total", 0)
const yahtzeeTopLabels = document.getElementById("yahtzeeTopLabels")
yahtzeeTopLabels.style.display = "None"
const yahtzeeBottomLabels = document.getElementById("yahtzeeBottomLabels")
yahtzeeBottomLabels.style.display = "None"
const yahtzeeTopInstructions = document.getElementById("yahtzeeTopInstructions")
const yahtzeeBottomInstructions = document.getElementById("yahtzeeBottomInstructions")
const yahtzeeLine = [dice21, dice22, dice23, dice24, dice25];
const yahtzeeTopScoreLine = [y1sBtn, y2sBtn, y3sBtn, y4sBtn, y5sBtn, y6sBtn]
const yahtzeeBottomScoreLine = [_3oakBtn, _4oakBtn, fullHouseBtn, smStraightBtn, lgStraightBtn, yahtzeeBtn, chanceBtn]

const yahtzeeDice = {
    _1: 0,
    _2: 1,
    _3: 2,
    _4: 3,
    _5: 4,
    _6: 5
}

yahtzeeTopComplete = false;
yahtzeeBottomComplete = false;

const imgDir = "";
//const imgDir"img/"
//const imgs = ["Coin.png", "Crown.png", "Jewel.png", "Horseshoe.png", "Clover.png", "Bell.png", "Strawberry.png", "Bananas.png", "Grapes.png", "Orange.png", "Lemon.png", "Cherries.png", "Seven.png", "Win.png", "Bar.png", "Card Spade.png", "Card Diamond.png", "Card Club.png", "Card Heart.png", "Dice 1.png", "Dice 2.png", "Dice 3.png", "Dice 4.png", "Dice 5.png", "Dice 6.png", "blank"];
//const cardImgs = ["AS.png", "2S.png", "3S.png", "4S.png", "5S.png", "6S.png", "7S.png", "8S.png", "9S.png", "10S.png", "JS.png", "QS.png", "KS.png", "AH.png", "2H.png", "3H.png", "4H.png", "5H.png", "6H.png", "7H.png", "8H.png", "9H.png", "10H.png", "JH.png", "QH.png", "KH.png", "AD.png", "2D.png", "3D.png", "4D.png", "5D.png", "6D.png", "7D.png", "8D.png", "9D.png", "10D.png", "JD.png", "QD.png", "KD.png", "AC.png", "2C.png", "3C.png", "4C.png", "5C.png", "6C.png", "7C.png", "8C.png", "9C.png", "10C.png", "JC.png", "QC.png", "KC.png"]
//const diceImgs = ["Dice 1.png", "Dice 2.png", "Dice 3.png", "Dice 4.png", "Dice 5.png", "Dice 6.png"]
const items = {
    coin: 0,
    crown: 1,
    jewel: 2,
    horseshoe: 3,
    clover: 4,
    bell: 5,
    strawberry: 6,
    bananas: 7,
    grapes: 8,
    orange: 9,
    lemon: 10,
    cherries: 11,
    seven: 12,
    win: 13,
    bar: 14,
    spade: 15,
    diamond: 16,
    club: 17,
    heart: 18,
    _1: 19,
    _2: 20,
    _3: 21,
    _4: 22,
    _5: 23,
    _6: 24,
    blank: 25
};





//array corresponding with how many times each symbol "appears on the reel"
const weights = [];
weights[items.coin] = 3;
weights[items.crown] = 2;
weights[items.jewel] = 1;
weights[items.horseshoe] = 4;
weights[items.clover] = 5;
weights[items.bell] = 13;
weights[items.strawberry] = 15;
weights[items.bananas] = 15;
weights[items.grapes] = 15;
weights[items.orange] = 15;
weights[items.lemon] = 15;
weights[items.cherries] = 20;
weights[items.seven] = 10;
weights[items.win] = 6;
weights[items.bar] = 6;
weights[items.spade] = 6;
weights[items.diamond] = 8;
weights[items.club] = 9;
weights[items.heart] = 8;
weights[items._1] = 4;
weights[items._2] = 4;
weights[items._3] = 4;
weights[items._4] = 4;
weights[items._5] = 4;
weights[items._6] = 4;
//weights[items.blank] = 10;

const itemDist = createItemDist(items, weights);

function createItemDist(items, weights) {
    let itemDist = [];
    for (let i = 0; i < weights.length; i++) {
        for (let j = 0; j < weights[i]; j++) {
            itemDist.push(Object.keys(items)[i]);
        }
    }
    return itemDist;
}

const gameStatus = {
    slots: 0,
    poker: 1,
    yahtzee: 2,
    treasure: 3
}

const slotsStatus = {
    betting: 0,
    rolling: 1
}

//XXXXX  XX.XX  XX...  X...X  X....  X.X.X  X...X  .....  ..X..  .XXX.  .X.X.  .....  ..... .....  .....  .....  ...XX  .....  ....X  .....  ..X..
//.....  ..X..  ..X..  .XXX.  .XXX.  .X.X.  .X.X.  XXXXX  XX.XX  X...X  X.X.X  XX.XX  X...X X.X.X  .....  ..X..  ..X..  .XXX.  .XXX.  .X.X.  .X.X.
//.....  .....  ...XX  .....  ....X  .....  ..X..  .....  .....  .....  .....  ..X..  .XXX. .X.X.  XXXXX  XX.XX  XX...  X...X  X....  X.X.X  X...X
const line0 = [dice1, dice2, dice3, dice4, dice5, dice6, dice7, dice8, dice9, dice10, dice11, dice12, dice13, dice14, dice15];
const line1 = [dice1, dice2, dice3, dice4, dice5];
//XXXXX
//.....
//.....
const line2 = [dice1, dice2, dice8, dice4, dice5];
//XX.XX
//..X..
//.....
const line3 = [dice1, dice2, dice8, dice14, dice15];
//XX...
//..X..
//...XX
const line4 = [dice1, dice7, dice8, dice9, dice5];
//X...X
//.XXX.
//.....
const line5 = [dice1, dice7, dice8, dice9, dice15];
//X....
//.XXX.
//....X
const line6 = [dice1, dice7, dice3, dice9, dice5];
//X.X.X
//.X.X.
//.....
const line7 = [dice1, dice7, dice13, dice9, dice5];
//X...X
//.X.X.
//..X..
const line8 = [dice6, dice7, dice8, dice9, dice10];
//.....
//XXXXX
//.....
const line9 = [dice6, dice7, dice3, dice9, dice10];
//..X..
//XX.XX
//.....
const line10 = [dice6, dice2, dice3, dice4, dice10];
//.XXX.
//X...X
//.....
const line11 = [dice6, dice2, dice8, dice4, dice10];
//.X.X.
//X.X.X
//.....
const line12 = [dice6, dice7, dice13, dice9, dice10];
//.....
//XX.XX
//..X..
const line13 = [dice6, dice12, dice13, dice14, dice10];
//.....
//X...X
//.XXX.
const line14 = [dice6, dice12, dice8, dice14, dice10];
//.....
//X.X.X
//.X.X.
const line15 = [dice11, dice12, dice13, dice14, dice15];
//.....
//.....
//XXXXX
const line16 = [dice11, dice12, dice8, dice14, dice15];
//.....
//..X..
//XX.XX
const line17 = [dice11, dice12, dice8, dice4, dice5];
//...XX
//..X..
//XX...
const line18 = [dice11, dice7, dice8, dice9, dice15];
//.....
//.XXX.
//X...X
const line19 = [dice11, dice7, dice8, dice9, dice5];
//....X
//.XXX.
//X....
const line20 = [dice11, dice7, dice13, dice9, dice15];
//.....
//.X.X.
//X.X.X
const line21 = [dice11, dice7, dice3, dice9, dice15];
//..X..
//.X.X.
//X...X
const lines = [line1, line2, line3, line4, line5, line6, line7, line8, line9, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, line21];
const linePics = ["<span style=\"font-Family:Monospace\">XXXXX<br>.....<br>.....<br></span>",
    "<span style=\"font-Family:Monospace\">XX.XX<br>..X..<br>.....<br></span>",
    "<span style=\"font-Family:Monospace\">XX...<br>..X..<br>...XX<br></span>",
    "<span style=\"font-Family:Monospace\">X...X<br>.XXX.<br>.....<br></span>",
    "<span style=\"font-Family:Monospace\">X....<br>.XXX.<br>....X<br></span>",
    "<span style=\"font-Family:Monospace\">X.X.X<br>.X.X.<br>.....<br></span>",
    "<span style=\"font-Family:Monospace\">X...X<br>.X.X.<br>..X..<br></span>",
    "<span style=\"font-Family:Monospace\">.....<br>XXXXX<br>.....<br></span>",
    "<span style=\"font-Family:Monospace\">..X..<br>XX.XX<br>.....<br></span>",
    "<span style=\"font-Family:Monospace\">.XXX.<br>X...X<br>.....<br></span>",
    "<span style=\"font-Family:Monospace\">.X.X.<br>X.X.X<br>.....<br></span>",
    "<span style=\"font-Family:Monospace\">.....<br>XX.XX<br>..X..<br></span>",
    "<span style=\"font-Family:Monospace\">.....<br>X...X<br>.XXX.<br></span>",
    "<span style=\"font-Family:Monospace\">.....<br>X.X.X<br>.X.X.<br></span>",
    "<span style=\"font-Family:Monospace\">.....<br>.....<br>XXXXX<br></span>",
    "<span style=\"font-Family:Monospace\">.....<br>..X..<br>XX.XX<br></span>",
    "<span style=\"font-Family:Monospace\">...XX<br>..X..<br>XX...<br></span>",
    "<span style=\"font-Family:Monospace\">.....<br>.XXX.<br>X...X<br></span>",
    "<span style=\"font-Family:Monospace\">....X<br>.XXX.<br>X....<br></span>",
    "<span style=\"font-Family:Monospace\">.....<br>.X.X.<br>X.X.X<br></span>",
    "<span style=\"font-Family:Monospace\">..X..<br>.X.X.<br>X...X<br></span>"
]


//Slots Paytable
//3,4,5 - symbol
//10,20,30 or x1.25 - Cherries
//20,30,40 or x1.5 - Lemons
//30,40,50 or x1.75 - Oranges
//40,50,60 or x2 - Grapes
//50,60,70 or x2.5 - Bananas
//60,70,80 or x3 - Strawberry
//70,80,90 or x3.5 - Bells
//80,90,100 or x7 - 7s
//100,200,300 or x10 - Bar
//1000,2000,3000 or x50 - Win
//x1.34,x2.68,x4 - Clubs/2s (one or the other)
//x2.00,x4.00,x6 - Diamonds/3s (one or the other)
//x2.66,x5.34,x8 - Hearts/4s (one or the other)
//x3.34,x6.66,x10 - Spades/5s (one or the other)
//Clovers/1s - Wild (5 of Clovers or 1s = x5 your bet)
//Horseshoes/6s - Wild x2 (5 of HShoe or 6s = 30x your bet, 4 of HShoe or 6s = 16x multiplier, 3 of HShoe of 6s = 8x payout, 2 of HShoe or 6s = 4x payout, 1 of HShoe or 6s = 2x payout)
//50,100,150 - Coins
//300,400,500 - Crowns
//500, 750, 1000 - Jewels

//Less than 3, per symbol on winning payline
//10 - Coins
//20 - Crowns
//50 - Jewels

//Slots Paylines
//XXXXX  XX.XX  XX...  X...X  X....  X.X.X  X...X  .....  ..X..  .XXX.  .X.X.  .....  ..... .....  .....  .....  ...XX  .....  ....X  .....  ..X..
//.....  ..X..  ..X..  .XXX.  .XXX.  .X.X.  .X.X.  XXXXX  XX.XX  X...X  X.X.X  XX.XX  X...X X.X.X  .....  ..X..  ..X..  .XXX.  .XXX.  .X.X.  .X.X.
//.....  .....  ...XX  .....  ....X  .....  ..X..  .....  .....  .....  .....  ..X..  .XXX. .X.X.  XXXXX  XX.XX  XX...  X...X  X....  X.X.X  X...X

//Slots Rules
//Starting Balance = 1 point
//Game Over = 0 points
//1 bet = 5 Rolls
//Minimum bet = 0.20 points (Default)
//All bets may be decimals, anything past 2 decimal points will be truncated
//Every winning payline will automatically score the highest points possible with the combination of symbols present on the line
//Points will accumulate in the pot until they are banked
//?????Banking points forfeits all further rolls in that round?????
//Any number of slot positions may be held at a price of bet * 0.25 per roll
//Any slot positions that are held but not "accounted for" after the final roll will result in the loss of all points that haven't been banked
//Bonus rounds tirggered on any payline are immediately played before normal rolls resume
//Free rolls are played immediately after they are triggered/earned and automatically deactivate any "held" positions resetting the entire board
//Once free rolls are complete, normal rolls will resume until all remaining rolls are spent
//Once all 5 rolls and any free rolls are complete, points are automatically banked, barring any conditions that result in loss of unbanked points

//Video Card/Dice Poker -- Triggered by full board of cards
//Card Poker Hands
//40 - Pair
//60 - 2 Pair
//80 - 3 of a Kind
//100 - Full House
//200 - Straight (1,2,3,4,5)
//400 - 4 of a Kind
//1000 - 5 of a Kind / Flush
//2000 - "Royal Straight" (2,3,4,5,6)
//Horseshoe - Wild - x2
//Clover - Wild
//Any Blank - 0
//Video Poker Rules
//Roll 2 times, holding any desired cards, for 10 rounds

//Yahtzee -- Triggered by board full of dice
//Dice Yahtzee Values
//1 - 1s
//2 - 2s
//3 - 3s
//4 - 4s
//5 - 5s
//6 - 6s
//horseshoes - Wild - x2 per
//blank - 0
//Yahtzee Categories - Top
//Total 1s - 1s
//Total 2s - 2s
//Total 3s - 3s
//Total 4s - 4s
//Total 5s - 5s
//Total 6s - 6s
//35 - Bonus for 63 or more points
//Total All Top Points - Total
//Yahtzee Categories - Bottom
//Total all Dice - 3 of a Kind
//Total all Dice - 4 of a Kind
//25 - Full House
//30 - Small Straight (Sequence of 4)
//40 - Large Straight (Sequence of 5)
//50 - Yahtzee
//100 per Yahzee - Yahtzee Bonus
//Total All Bottom Points - Total
//Add Top and Bottom Totals - Grand Total
//Yahtzee Rules
//have total of three rolls of 5 dice for 12 rounds
//can hold any dice in between rolls
//once all categories are filled, score is displayed as alert
//once OK is hit, points are added to Slots Balance

//Treasure Trove -- can unlock one of the four progressive jackpots, triggering doubles all jackpots
//Triggered by board full of Coins, Crowns, Jewels, and Horseshoes
//7 Coins - Mini Jackpot - +50% of bet per roll
//7 Horseshoes - Small Jackpot - +100% of bet per roll
//7 Crowns - Medium Jackpot - +150% of bet per roll + board paylines per roll
//7 Jewels - Big Jackpot - +200% of bet per roll + freeform paylines per roll
//15 Crowns - Super Jackpot - Mini gain per roll + small gain per roll + medium gain per roll + big gain per roll
//15 Jewels - MEGA Jackpot - Super Jackpot gain per roll + freeform paylines per roll
//Treasure Trove Rules
//10 free rolls, hold any slot positions for free, aiming to get the jackpot and as many points as possible.
//Only Coins, Crowns, Jewels, Horseshoes get points

initSlots();

function initSlots() {
    rolls.style.display = "None"
    rollsLabel.style.display = "None"
    
    showSlots();
    hidePoker();
    hideYahtzee();
    hideYahtzeeScoring();
    balance.setAttribute("total", 0)
    returnBtn.style.display = "None"
    gotoYahtzeeBtn.style.display = "None"
    gotoPokerBtn.style.display = "None"
}

function prepSlots() {

    showSlots();
    hidePoker();
    hideYahtzee();
    hideYahtzeeScoring();
    score.innerHTML = 0
}

function prepPoker() {
    hideSlots();
    showPoker();
    hideYahtzee();
    hideYahtzeeScoring();
    score.innerHTML = 0
}

function prepYahtzee() {

    rolls.style.display = null
    rollsLabel.style.display = null
    hideSlots();
    hidePoker();
    showYahtzee();
    showYahtzeeBtns();
    showYahtzeeScoring();
    score.innerHTML = 0
}

function resetYahtzee() {
    rolls.setAttribute("total", 3)
    rolls.innerHTML = 3

    score.innerHTML = 0

    yahtzeeTopComplete = false
    yahtzeeBottomComplete = false

    y1s.setAttribute("total", -1)
    y1s.innerHTML = "___"
    y1sBtn.disabled = false
    y1sBtn.setAttribute("click", "false")
    y2s.setAttribute("total", -1)
    y2s.innerHTML = "___"
    y2sBtn.disabled = false
    y2sBtn.setAttribute("click", "false")
    y3s.setAttribute("total", -1)
    y3s.innerHTML = "___"
    y3sBtn.disabled = false
    y3sBtn.setAttribute("click", "false")
    y4s.setAttribute("total", -1)
    y4s.innerHTML = "___"
    y4sBtn.disabled = false
    y4sBtn.setAttribute("click", "false")
    y5s.setAttribute("total", -1)
    y5s.innerHTML = "___"
    y5sBtn.disabled = false
    y5sBtn.setAttribute("click", "false")
    y6s.setAttribute("total", -1)
    y6s.innerHTML = "___"
    y6sBtn.disabled = false
    y6sBtn.setAttribute("click", "false")
    topBonus.setAttribute("total", -1)
    topBonus.innerHTML = "___"
    topScore.setAttribute("total", -1)
    topScore.innerHTML = "___"
    _3oak.setAttribute("total", -1)
    _3oak.innerHTML = "___"
    _3oakBtn.disabled = false
    _3oakBtn.setAttribute("click", "false")
    _4oak.setAttribute("total", -1)
    _4oak.innerHTML = "___"
    _4oakBtn.disabled = false
    _4oakBtn.setAttribute("click", "false")
    fullHouse.setAttribute("total", -1)
    fullHouse.innerHTML = "___"
    fullHouseBtn.disabled = false
    fullHouseBtn.setAttribute("click", "false")
    smStraight.setAttribute("total", -1)
    smStraight.innerHTML = "___"
    smStraightBtn.disabled = false
    smStraightBtn.setAttribute("click", "false")
    lgStraight.setAttribute("total", -1)
    lgStraight.innerHTML = "___"
    lgStraightBtn.disabled = false
    lgStraightBtn.setAttribute("click", "false")
    yahtzee.setAttribute("total", -1)
    yahtzee.innerHTML = "___"
    yahtzeeBtn.disabled = false
    yahtzeeBtn.setAttribute("click", "false")
    chance.setAttribute("total", -1)
    chance.innerHTML = "___"
    chanceBtn.disabled = false
    chanceBtn.setAttribute("click", "false")
    numYahtzees.setAttribute("total", 0)
    numYahtzees.innerHTML = "___"
    numYahtzeesScore.setAttribute("total", 0)
    numYahtzeesScore.innerHTML = "___"
    bottomScore.setAttribute("total", 0)
    bottomScore.innerHTML = "___"
    grandScore.setAttribute("total", 0)
    grandScore.innerHTML="___"
}

function hideSlots() {
    slotsTable.style.display = "None"
}

function showSlots() {
    slotsTable.style.display = null
}

function hidePoker() {
    pokerTable.style.display = "None"
}

function showPoker() {
    pokerTable.style.display = null
}

function hideYahtzee() {
    yahtzeeTable.style.display = "None"
}

function showYahtzee() {
    rolls.style.display = null
    rollsLabel.style.display = null
    yahtzeeTable.style.display = null
}

function hideYahtzeeScoring() {
    rolls.style.display = "None"
    rollsLabel.style.display = "None"
    yahtzeeScoreTable.style.display = "None"
}

function showYahtzeeScoring() {
    yahtzeeScoreTable.style.display = null
}

function newDeck(){
    for (let i = 0; i < cardImgs.length; i++){
        deck[i] = deck_A_high[Object.keys(cards)[i]]
    }
}

function deal(){
    cardPos = Math.floor(Math.random() * deck.length)
    card = deck.splice(cardPos,1)[0]
    return card;
}


function countBooty(line, bet) {

    scale = Math.ceil(bet / .3)
    let coin1 = 10 * scale;
    let crown1 = 20 * scale;
    let jewel1 = 50 * scale;

    let coin = 0;
    let crown = 0;
    let jewel = 0;
    let clover = 0;
    let horseshoe = 0;

    for (let i = 0; i < line.length; i++) {
        switch (Number(line[i].getAttribute("item"))) {
            case items.coin:
                coin++;
                break;
            case items.crown:
                crown++;
                break;
            case items.jewel:
                jewel++;
                break;
            case items.clover:
                clover++;
                break;
            case items.horseshoe:
                horseshoe++;
                break;
            default:
                break;
        }
    }
    if (jewel + clover + horseshoe > 2) {
        return 0
    }
    else if (crown + clover + horseshoe > 2) {
        return 0
    }
    else if (coin + clover + horseshoe > 2) {
        return 0
    }
    else {
        return coin1 * coin + crown1 * crown + jewel1 * jewel
    }
}

function evalLine(bet, line) {
    //Slots Paytable
    //3,4,5 - symbol
    //10,20,30 or x1.25 - Cherries
    //20,30,40 or x1.5 - Lemons
    //30,40,50 or x1.75 - Oranges
    //40,50,60 or x2 - Grapes
    //50,60,70 or x2.5 - Bananas
    //60,70,80 or x3 - Strawberry
    //70,80,90 or x3.5 - Bells
    //80,90,100 or x7 - 7s
    //100,200,300 or x10 - Bar
    //1000,2000,3000 or x50 - Win

    //50,100,150 - Coins
    //300,400,500 - Crowns
    //500, 750, 1000 - Jewels

    //Less than 3, per symbol on winning payline
    //10 - Coins
    //20 - Crowns
    //50 - Jewels

    //x1.34,x2.68,x4 - Clubs/2s (one or the other)
    //x2.00,x4.00,x6 - Diamonds/3s (one or the other)
    //x2.66,x5.34,x8 - Hearts/4s (one or the other)
    //x3.34,x6.66,x10 - Spades/5s (one or the other)
    //Clovers/1s - Wild (5 of Clovers or 1s = x5 your bet)
    //Horseshoes/6s - Wild x2 (5 of HShoe or 6s = 30x your bet, 4 of HShoe or 6s = 16x multiplier, 3 of HShoe of 6s = 8x payout, 2 of HShoe or 6s = 4x payout, 1 of HShoe or 6s = 2x payout)

    scale = Math.ceil(bet / .1)
    let cherries3 = 2 * scale;
    let cherries4 = 4 * scale;
    let cherries5 = 10 * scale;
    let cherries5mult = 1.25;
    let lemon3 = 4 * scale;
    let lemon4 = 6 * scale;
    let lemon5 = 20 * scale;
    let lemon5mult = 1.5 * scale;
    let orange3 = 6 * scale;
    let orange4 = 8 * scale;
    let orange5 = 30 * scale;
    let orange5mult = 1.75 * scale;
    let grapes3 = 8 * scale;
    let grapes4 = 10 * scale;
    let grapes5 = 40 * scale;
    let grapes5mult = 2 * scale;
    let bananas3 = 10 * scale;
    let bananas4 = 12 * scale;
    let bananas5 = 50 * scale;
    let bananas5mult = 2.5 * scale;
    let strawberry3 = 12 * scale;
    let strawberry4 = 14 * scale;
    let strawberry5 = 60 * scale;
    let strawberry5mult = 3 * scale;
    let bell3 = 14 * scale;
    let bell4 = 16 * scale;
    let bell5 = 70 * scale;
    let bell5mult = 3.5 * scale
    let seven3 = 16 * scale;
    let seven4 = 18 * scale;
    let seven5 = 80 * scale;
    let seven5mult = 7 * scale;
    let bar3 = 20 * scale;
    let bar4 = 40 * scale;
    let bar5 = 250 * scale;
    let bar5mult = 10 * scale;
    let win3 = 80 * scale;
    let win4 = 100 * scale;
    let win5 = 1000 * scale;
    let win5mult = 50 * scale;
    let coin3 = 10 * scale;
    let coin4 = 20 * scale;
    let coin5 = 90 * scale;
    let crown3 = 60 * scale;
    let crown4 = 80 * scale;
    let crown5 = 300 * scale;
    let jewel3 = 100 * scale;
    let jewel4 = 150 * scale;
    let jewel5 = 1000 * scale;
    let _2club3mult = 1.34 * scale;
    let _2club4mult = 2.68 * scale;
    let _2club5mult = 4 * scale;
    let _3diamond3mult = 2 * scale;
    let _3diamond4mult = 4 * scale;
    let _3diamond5mult = 6 * scale;
    let _4heart3mult = 2.66 * scale;
    let _4heart4mult = 5.34 * scale;
    let _4heart5mult = 8 * scale;
    let _5spade3mult = 3.34 * scale;
    let _5spade4mult = 6.66 * scale;
    let _5spade5mult = 10 * scale;

    let coin = 0;
    let crown = 0;
    let bell = 0;
    let win = 0;
    let bar = 0;
    let jewel = 0;
    let clover = 0;
    let strawberry = 0;
    let bananas = 0;
    let grapes = 0;
    let orange = 0;
    let lemon = 0;
    let cherries = 0;
    let seven = 0;
    let horseshoe = 0;
    let spade = 0;
    let diamond = 0;
    let club = 0;
    let heart = 0;
    let _1 = 0;
    let _2 = 0;
    let _3 = 0;
    let _4 = 0;
    let _5 = 0;
    let _6 = 0;
    let blank = 0

    for (let i = 0; i < line.length; i++) {
        switch (Number(line[i].getAttribute("item"))) {
            case items.coin:
                coin++;
                break;
            case items.crown:
                crown++;
                break;
            case items.bell:
                bell++;
                break;
            case items.win:
                win++;
                break;
            case items.bar:
                bar++;
                break;
            case items.jewel:
                jewel++;
                break;
            case items.clover:
                clover++;
                break;
            case items.strawberry:
                strawberry++;
                break;
            case items.bananas:
                bananas++;
                break;
            case items.grapes:
                grapes++;
                break;
            case items.orange:
                orange++;
                break;
            case items.lemon:
                lemon++;
                break;
            case items.cherries:
                cherries++;
                break;
            case items.seven:
                seven++;
                break;
            case items.horseshoe:
                horseshoe++;
                break;
            case items.spade:
                spade++;
                break;
            case items.diamond:
                diamond++;
                break;
            case items.club:
                club++;
                break;
            case items.heart:
                heart++;
                break;
            case items._1:
                _1++;
                break;
            case items._2:
                _2++;
                break;
            case items._3:
                _3++;
                break;
            case items._4:
                _4++;
                break;
            case items._5:
                _5++;
                break;
            case items._6:
                _6++;
                break;
            case items.blank:
                blank++;
                break;
            default:
                break;
        }
    }
    if (blank > 0) {
        return 0
    }
    else if (win + (horseshoe + _6) + (clover + _1) > 2) {
        if (win + (horseshoe + _6) + (clover + _1) == 3) {
            return ((horseshoe + _6) > 0 ? win3 * 2 * (horseshoe + _6) : win3)
        }
        else if (win + (horseshoe + _6) + (clover + _1) == 4) {
            return ((horseshoe + _6) > 0 ? win4 * 2 * (horseshoe + _6) : win4)
        }
        else if (win + (horseshoe + _6) + (clover + _1) == 5) {
            if (bet * win5mult > win5) {
                return ((horseshoe + _6) > 0 ? bet * win5mult * 2 * (horseshoe + _6) : bet * win5mult)
            }
            else {
                return ((horseshoe + _6) > 0 ? win5 * 2 * (horseshoe + _6) : win5)
            }
        }
    }
    else if (bar + (horseshoe + _6) + (clover + _1) > 2) {
        if (bar + (horseshoe + _6) + (clover + _1) == 3) {
            return ((horseshoe + _6) > 0 ? bar3 * 2 * (horseshoe + _6) : bar3)
        }
        else if (bar + (horseshoe + _6) + (clover + _1) == 4) {
            return ((horseshoe + _6) > 0 ? bar4 * 2 * (horseshoe + _6) : bar4)
        }
        else if (bar + (horseshoe + _6) + (clover + _1) == 5) {
            if (bet * bar5mult > bar5) {
                return ((horseshoe + _6) > 0 ? bet * bar5mult * 2 * (horseshoe + _6) : bet * bar5mult)
            }
            else {
                return ((horseshoe + _6) > 0 ? bar5 * 2 * (horseshoe + _6) : bar5)
            }
        }
    }
    else if (seven + (horseshoe + _6) + (clover + _1) > 2) {
        if (seven + (horseshoe + _6) + (clover + _1) == 3) {
            return ((horseshoe + _6) > 0 ? seven3 * 2 * (horseshoe + _6) : seven3)
        }
        else if (seven + (horseshoe + _6) + (clover + _1) == 4) {
            return ((horseshoe + _6) > 0 ? seven4 * 2 * (horseshoe + _6) : seven4)
        }
        else if (seven + (horseshoe + _6) + (clover + _1) == 5) {
            if (bet * seven5mult > seven5) {
                return ((horseshoe + _6) > 0 ? bet * seven5mult * 2 * (horseshoe + _6) : bet * seven5mult)
            }
            else {
                return ((horseshoe + _6) > 0 ? seven5 * 2 * (horseshoe + _6) : seven5)
            }
        }
    }
    else if (bell + (horseshoe + _6) + (clover + _1) > 2) {
        if (bell + (horseshoe + _6) + (clover + _1) == 3) {
            return ((horseshoe + _6) > 0 ? bell3 * 2 * (horseshoe + _6) : bell3)
        }
        else if (bell + (horseshoe + _6) + (clover + _1) == 4) {
            return ((horseshoe + _6) > 0 ? bell4 * 2 * (horseshoe + _6) : bell4)
        }
        else if (bell + (horseshoe + _6) + (clover + _1) == 5) {
            if (bet * bell5mult > bell5) {
                return ((horseshoe + _6) > 0 ? bet * bell5mult * 2 * (horseshoe + _6) : bet * bell5mult)
            }
            else {
                return ((horseshoe + _6) > 0 ? bell5 * 2 * (horseshoe + _6) : bell5)
            }
        }
    }
    else if (strawberry + (horseshoe + _6) + (clover + _1) > 2) {
        if (strawberry + (horseshoe + _6) + (clover + _1) == 3) {
            return ((horseshoe + _6) > 0 ? strawberry3 * 2 * (horseshoe + _6) : strawberry3)
        }
        else if (strawberry + (horseshoe + _6) + (clover + _1) == 4) {
            return ((horseshoe + _6) > 0 ? strawberry4 * 2 * (horseshoe + _6) : strawberry4)
        }
        else if (strawberry + (horseshoe + _6) + (clover + _1) == 5) {
            if (bet * strawberry5mult > strawberry5) {
                return ((horseshoe + _6) > 0 ? bet * strawberry5mult * 2 * (horseshoe + _6) : bet * strawberry5mult)
            }
            else {
                return ((horseshoe + _6) > 0 ? strawberry5 * 2 * (horseshoe + _6) : strawberry5)
            }
        }
    }
    else if (bananas + (horseshoe + _6) + (clover + _1) > 2) {
        if (bananas + (horseshoe + _6) + (clover + _1) == 3) {
            return ((horseshoe + _6) > 0 ? bananas3 * 2 * (horseshoe + _6) : bananas3)
        }
        else if (bananas + (horseshoe + _6) + (clover + _1) == 4) {
            return ((horseshoe + _6) > 0 ? bananas4 * 2 * (horseshoe + _6) : bananas4)
        }
        else if (bananas + (horseshoe + _6) + (clover + _1) == 5) {
            if (bet * 2.5 > 70) {
                return ((horseshoe + _6) > 0 ? bet * bananas5mult * 2 * (horseshoe + _6) : bet * bananas5mult)
            }
            else {
                return ((horseshoe + _6) > 0 ? bananas5 * 2 * (horseshoe + _6) : bananas5)
            }
        }
    }
    else if (grapes + (horseshoe + _6) + (clover + _1) > 2) {
        if (grapes + (horseshoe + _6) + (clover + _1) == 3) {
            return ((horseshoe + _6) > 0 ? grapes3 * 2 * (horseshoe + _6) : grapes3)
        }
        else if (grapes + (horseshoe + _6) + (clover + _1) == 4) {
            return ((horseshoe + _6) > 0 ? grapes4 * 2 * (horseshoe + _6) : grapes4)
        }
        else if (grapes + (horseshoe + _6) + (clover + _1) == 5) {
            if (bet * 2 > 60) {
                return ((horseshoe + _6) > 0 ? bet * grapes5mult * 2 * (horseshoe + _6) : bet * grapes5mult)
            }
            else {
                return ((horseshoe + _6) > 0 ? grapes5 * 2 * (horseshoe + _6) : grapes5)
            }
        }
    }
    else if (orange + (horseshoe + _6) + (clover + _1) > 2) {
        if (orange + (horseshoe + _6) + (clover + _1) == 3) {
            return ((horseshoe + _6) > 0 ? orange3 * 2 * (horseshoe + _6) : orange3)
        }
        else if (orange + (horseshoe + _6) + (clover + _1) == 4) {
            return ((horseshoe + _6) > 0 ? orange4 * 2 * (horseshoe + _6) : orange4)
        }
        else if (orange + (horseshoe + _6) + (clover + _1) == 5) {
            if (bet * 1.75 > 50) {
                return ((horseshoe + _6) > 0 ? bet * orange5mult * 2 * (horseshoe + _6) : bet * orange5mult)
            }
            else {
                return ((horseshoe + _6) > 0 ? orange5 * 2 * (horseshoe + _6) : orange5)
            }
        }
    }
    else if (lemon + (horseshoe + _6) + (clover + _1) > 2) {
        if (lemon + (horseshoe + _6) + (clover + _1) == 3) {
            return ((horseshoe + _6) > 0 ? lemon3 * 2 * (horseshoe + _6) : lemon3)
        }
        else if (lemon + (horseshoe + _6) + (clover + _1) == 4) {
            return ((horseshoe + _6) > 0 ? lemon4 * 2 * (horseshoe + _6) : lemon4)
        }
        else if (lemon + (horseshoe + _6) + (clover + _1) == 5) {
            if (bet * 1.5 > 40) {
                return ((horseshoe + _6) > 0 ? bet * lemon5mult * 2 * (horseshoe + _6) : bet * lemon5mult)
            }
            else {
                return ((horseshoe + _6) > 0 ? lemon5 * 2 * (horseshoe + _6) : lemon5)
            }
        }
    }
    else if (cherries + (horseshoe + _6) + (clover + _1) > 2) {
        if (cherries + (horseshoe + _6) + (clover + _1) == 3) {
            return ((horseshoe + _6) > 0 ? cherries3 * 2 * (horseshoe + _6) : cherries3)
        }
        else if (cherries + (horseshoe + _6) + (clover + _1) == 4) {
            return ((horseshoe + _6) > 0 ? cherries4 * 2 * (horseshoe + _6) : cherries4)
        }
        else if (cherries + (horseshoe + _6) + (clover + _1) == 5) {
            if (bet * 1.25 > 30) {
                return ((horseshoe + _6) > 0 ? bet * cherries5mult * 2 * (horseshoe + _6) : bet * cherries5mult)
            }
            else {
                return ((horseshoe + _6) > 0 ? cherries5 * 2 * (horseshoe + _6) : cherries5)
            }
        }
    }
    else if (club + (horseshoe + _6) + (clover + _1) > 2 || _2 + (horseshoe + _6) + (clover + _1) > 2) {
        if (club + (horseshoe + _6) + (clover + _1) == 3 || _2 + (horseshoe + _6) + (clover + _1) == 3) {
            return ((horseshoe + _6) > 0 ? bet * _2club3mult * 2 * (horseshoe + _6) : bet * _2club3mult)
        }
        else if (club + (horseshoe + _6) + (clover + _1) == 4 || _2 + (horseshoe + _6) + (clover + _1) == 4) {
            return ((horseshoe + _6) > 0 ? bet * _2club4mult * 2 * (horseshoe + _6) : bet * _2club4mult)
        }
        else if (club + (horseshoe + _6) + (clover + _1) == 5 || _2 + (horseshoe + _6) + (clover + _1) == 5) {
            return ((horseshoe + _6) > 0 ? bet * _2club5mult * 2 * (horseshoe + _6) : bet * _2club5mult)
        }
    }
    else if (diamond + (horseshoe + _6) + (clover + _1) > 2 || _3 + (horseshoe + _6) + (clover + _1) > 2) {
        if (diamond + (horseshoe + _6) + (clover + _1) == 3 || _3 + (horseshoe + _6) + (clover + _1) == 3) {
            return ((horseshoe + _6) > 0 ? bet * _3diamond3mult * 2 * (horseshoe + _6) : bet * _3diamond3mult)
        }
        else if (diamond + (horseshoe + _6) + (clover + _1) == 4 || _3 + (horseshoe + _6) + (clover + _1) == 4) {
            return ((horseshoe + _6) > 0 ? bet * _3diamond4mult * 2 * (horseshoe + _6) : bet * _3diamond4mult)
        }
        else if (diamond + (horseshoe + _6) + (clover + _1) == 5 || _3 + (horseshoe + _6) + (clover + _1) == 5) {
            return ((horseshoe + _6) > 0 ? bet * _3diamond5mult * 2 * (horseshoe + _6) : bet * _3diamond5mult)
        }
    }
    else if (heart + (horseshoe + _6) + (clover + _1) > 2 || _4 + (horseshoe + _6) + (clover + _1) > 2) {
        if (heart + (horseshoe + _6) + (clover + _1) == 3 || _4 + (horseshoe + _6) + (clover + _1) == 3) {
            return ((horseshoe + _6) > 0 ? bet * _4heart3mult * 2 * (horseshoe + _6) : bet * _4heart3mult)
        }
        else if (heart + (horseshoe + _6) + (clover + _1) == 4 || _4 + (horseshoe + _6) + (clover + _1) == 4) {
            return ((horseshoe + _6) > 0 ? bet * _4heart4mult * 2 * (horseshoe + _6) : bet * _4heart4mult)
        }
        else if (heart + (horseshoe + _6) + (clover + _1) == 5 || _4 + (horseshoe + _6) + (clover + _1) == 5) {
            return ((horseshoe + _6) > 0 ? bet * _4heart5mult * 2 * (horseshoe + _6) : bet * _4heart5mult)
        }
    }
    else if (spade + (horseshoe + _6) + (clover + _1) > 2 || _5 + (horseshoe + _6) + (clover + _1) > 2) {
        if (spade + (horseshoe + _6) + (clover + _1) == 3 || _5 + (horseshoe + _6) + (clover + _1) == 3) {
            return ((horseshoe + _6) > 0 ? bet * _5spade3mult * 2 * (horseshoe + _6) : bet * _5spade3mult)
        }
        else if (spade + (horseshoe + _6) + (clover + _1) == 4 || _5 + (horseshoe + _6) + (clover + _1) == 4) {
            return ((horseshoe + _6) > 0 ? bet * _5spade4mult * 2 * (horseshoe + _6) : bet * _5spade4mult)
        }
        else if (spade + (horseshoe + _6) + (clover + _1) == 5 || _5 + (horseshoe + _6) + (clover + _1) == 5) {
            return ((horseshoe + _6) > 0 ? bet * _5spade5mult * 2 * (horseshoe + _6) : bet * _5spade5mult)
        }
    }
    else if (clover == 5 || _1 == 5) {
        return bet * 5
    }
    else if ((clover + _1) + (horseshoe + _6) == 5) {
        if (horseshoe == 5 || _6 == 5) {
            return bet * 30
        }
        else {
            return bet * 2 * (horseshoe + _6)
        }
    }
    else if (coin + crown + jewel + clover + horseshoe == 5) {
        if (jewel + clover + horseshoe > 2) {
            if (jewel + clover + horseshoe == 3) {
                return (horseshoe > 0 ? (500 + jewel3) * 2 * horseshoe : 500 + jewel3)
            }
            else if (jewel + clover + horseshoe == 4) {
                return (horseshoe > 0 ? (500 + jewel4) * 2 * horseshoe : 500 + jewel4)
            }
            else if (jewel + clover + horseshoe == 5) {
                return (horseshoe > 0 ? (500 + jewel5) * 2 * horseshoe : 500 + jewel5)
            }
        }
        else if (crown + clover + horseshoe > 2) {
            if (crown + clover + horseshoe == 3) {
                return (horseshoe > 0 ? (500 + crown3) * 2 * horseshoe : 500 + crown3)
            }
            else if (crown + clover + horseshoe == 4) {
                return (horseshoe > 0 ? (500 + crown4) * 2 * horseshoe : 500 + crown4)
            }
            else if (crown + clover + horseshoe == 5) {
                return (horseshoe > 0 ? (500 + crown5) * 2 * horseshoe : 500 + crown5)
            }
        }
        else if (coin + clover + horseshoe > 2) {
            if (coin + clover + horseshoe == 3) {
                return (horseshoe > 0 ? (500 + coin3) * 2 * horseshoe : 500 + coin3)
            }
            else if (coin + clover + horseshoe == 4) {
                return (horseshoe > 0 ? (500 + coin4) * 2 * horseshoe : 500 + coin4)
            }
            else if (coin + clover + horseshoe == 5) {
                return (horseshoe > 0 ? (500 + coin5) * 2 * horseshoe : 500 + coin5)
            }
        }
    }
    else if (jewel + clover + horseshoe > 2) {
        if (jewel + clover + horseshoe == 3) {
            return (horseshoe > 0 ? jewel3 * 2 * horseshoe : jewel3)
        }
        else if (jewel + clover + horseshoe == 4) {
            return (horseshoe > 0 ? jewel4 * 2 * horseshoe : jewel4)
        }
        else if (jewel + clover + horseshoe == 5) {
            return (horseshoe > 0 ? jewel5 * 2 * horseshoe : jewel5)
        }
    }
    else if (crown + clover + horseshoe > 2) {
        if (crown + clover + horseshoe == 3) {
            return (horseshoe > 0 ? crown3 * 2 * horseshoe : crown3)
        }
        else if (crown + clover + horseshoe == 4) {
            return (horseshoe > 0 ? crown4 * 2 * horseshoe : crown4)
        }
        else if (crown + clover + horseshoe == 5) {
            return (horseshoe > 0 ? crown5 * 2 * horseshoe : crown5)
        }
    }
    else if (coin + clover + horseshoe > 2) {
        if (coin + clover + horseshoe == 3) {
            return (horseshoe > 0 ? coin3 * 2 * horseshoe : coin3)
        }
        else if (coin + clover + horseshoe == 4) {
            return (horseshoe > 0 ? coin4 * 2 * horseshoe : coin4)
        }
        else if (coin + clover + horseshoe == 5) {
            return (horseshoe > 0 ? coin5 * 2 * horseshoe : coin5)
        }
    }
    else {
        return 0;
    }

}

function evalBoard(bet) {
    let total = 0;
    let prize = 0;
    let booty = 0;
    let log = ""
    for (let i = 0; i < lines.length; i++) {
        prize = 0
        booty = 0
        prize = evalLine(bet, lines[i])
        prize = Math.ceil(prize/20)/100
        if (prize > 0) {
            log = log.concat("Line " + (i + 1) + " wins $" + prize.toFixed(2) + ".<br>")
            booty = countBooty(lines[i], bet)
            booty = Math.ceil(booty)/100
            if (booty > 0) {
                log = log.concat("Line " + (i + 1) + " wins $" + booty.toFixed(2) + " (Treasure!).<br>")
            }
            log = log.concat(linePics[i])
        }
        total += booty
        total += prize
    }
    evalBonus()
    return [total, log]

}

function evalBonus() {

    let coin = 0;
    let crown = 0;
    let bell = 0;
    let win = 0;
    let bar = 0;
    let jewel = 0;
    let clover = 0;
    let strawberry = 0;
    let bananas = 0;
    let grapes = 0;
    let orange = 0;
    let lemon = 0;
    let cherries = 0;
    let seven = 0;
    let horseshoe = 0;
    let spade = 0;
    let diamond = 0;
    let club = 0;
    let heart = 0;
    let _1 = 0;
    let _2 = 0;
    let _3 = 0;
    let _4 = 0;
    let _5 = 0;
    let _6 = 0;
    let blank = 0

    for (let i = 0; i < line0.length; i++) {
        switch (Number(line0[i].getAttribute("item"))) {
            case items.coin:
                coin++;
                break;
            case items.crown:
                crown++;
                break;
            case items.bell:
                bell++;
                break;
            case items.win:
                win++;
                break;
            case items.bar:
                bar++;
                break;
            case items.jewel:
                jewel++;
                break;
            case items.clover:
                clover++;
                break;
            case items.strawberry:
                strawberry++;
                break;
            case items.bananas:
                bananas++;
                break;
            case items.grapes:
                grapes++;
                break;
            case items.orange:
                orange++;
                break;
            case items.lemon:
                lemon++;
                break;
            case items.cherries:
                cherries++;
                break;
            case items.seven:
                seven++;
                break;
            case items.horseshoe:
                horseshoe++;
                break;
            case items.spade:
                spade++;
                break;
            case items.diamond:
                diamond++;
                break;
            case items.club:
                club++;
                break;
            case items.heart:
                heart++;
                break;
            case items._1:
                _1++;
                break;
            case items._2:
                _2++;
                break;
            case items._3:
                _3++;
                break;
            case items._4:
                _4++;
                break;
            case items._5:
                _5++;
                break;
            case items._6:
                _6++;
                break;
            case items.blank:
                blank++;
                break;
            default:
                break;
        }
    }

    if (_1 + _2 + _3 + _4 + _5 + _6 > 5) {
        alert("YAHTZEE BONUS")
        gotoYahtzeeBtn.style.display = null;
    }
    else if (spade + heart + diamond + club > 6) {
        alert("POKER BONUS")
        gotoPokerBtn.style.display = null;
    }
    else if (coin + crown + jewel > 4) {
        alert("TREASURE TROVE")
    }

    return
}

returnBtn.addEventListener('click', function() {
    if(yahtzeeTopComplete && yahtzeeBottomComplete){
        resetYahtzee()
    }
    prepSlots()
    returnBtn.style.display = "None";

})

gotoYahtzeeBtn.addEventListener('click', function() {
    prepYahtzee()
    gotoYahtzeeBtn.style.display = "None";
})

gotoPokerBtn.addEventListener('click', function() {
    prepPoker()
    gotoPokerBtn.style.display = "None";
})

depositBtn.addEventListener('click', function() {
    let deposit = Number(document.getElementById("deposit").value.replace("$","").replace(",",""))
    let bal = Number(balance.getAttribute("total"))
    bal += deposit
    balance.setAttribute("total", bal)
    balance.innerHTML = bal.toFixed(2)
})

bet20.addEventListener('click', function() {
    betValue.setAttribute("total", 0.20)
    bet.innerHTML = "0.20"
})

bet40.addEventListener('click', function() {
    betValue.setAttribute("total", 0.40)
    bet.innerHTML = "0.40"
})

bet60.addEventListener('click', function() {
    betValue.setAttribute("total", 0.60)
    bet.innerHTML = "0.60"
})

bet80.addEventListener('click', function() {
    betValue.setAttribute("total", 0.80)
    bet.innerHTML = "0.80"
})

bet1.addEventListener('click', function() {
    betValue.setAttribute("total", 1.00)
    bet.innerHTML = "1.00"
})

betMax.addEventListener('click', function() {
    betValue.setAttribute("total", 5.00)
    bet.innerHTML = "5.00"
})

function updateCardDie(dice, card){
    dice.style.backgroundImage = "url(\'" + card[2] + "\')"
    dice.setAttribute("item", JSON.stringify(card))
}

function updateDie(dice, item) {
    dice.style.backgroundImage = "url(\'" + imgDir + imgs[items[itemDist[item]]] + "\')"
    dice.setAttribute("item", items[itemDist[item]])
}

rollBtn.addEventListener('click', function() {
    let bal = Number(balance.getAttribute("total"))

    let bonDice1val = Math.floor(Math.random() * yahtzeeDice.length)
    let bonDice2val = Math.floor(Math.random() * yahtzeeDice.length)
    let bonDice3val = Math.floor(Math.random() * yahtzeeDice.length)
    let bonDice4val = Math.floor(Math.random() * yahtzeeDice.length)
    let bonDice5val = Math.floor(Math.random() * yahtzeeDice.length)
    let dice1val = Math.floor(Math.random() * itemDist.length)
    let dice2val = Math.floor(Math.random() * itemDist.length)
    let dice3val = Math.floor(Math.random() * itemDist.length)
    let dice4val = Math.floor(Math.random() * itemDist.length)
    let dice5val = Math.floor(Math.random() * itemDist.length)
    let dice6val = Math.floor(Math.random() * itemDist.length)
    let dice7val = Math.floor(Math.random() * itemDist.length)
    let dice8val = Math.floor(Math.random() * itemDist.length)
    let dice9val = Math.floor(Math.random() * itemDist.length)
    let dice10val = Math.floor(Math.random() * itemDist.length)
    let dice11val = Math.floor(Math.random() * itemDist.length)
    let dice12val = Math.floor(Math.random() * itemDist.length)
    let dice13val = Math.floor(Math.random() * itemDist.length)
    let dice14val = Math.floor(Math.random() * itemDist.length)
    let dice15val = Math.floor(Math.random() * itemDist.length)
    
    //updateYahtzeeDie(bonDice1,bonDice1val)
    //updateYahtzeeDie(bonDice2,bonDice2val)
    //updateYahtzeeDie(bonDice3,bonDice3val)
    //updateYahtzeeDie(bonDice4,bonDice4val)
    //updateYahtzeeDie(bonDice5,bonDice5val)
    
    newDeck()
    bonCard1val = deal()
    bonCard2val = deal()
    bonCard3val = deal()
    bonCard4val = deal()
    bonCard5val = deal()
    
    updateCardDie(bonCard1, bonCard1val)
    updateCardDie(bonCard2, bonCard2val)
    updateCardDie(bonCard3, bonCard3val)
    updateCardDie(bonCard4, bonCard4val)
    updateCardDie(bonCard5, bonCard5val)
    
    if (dice1.getAttribute("click") != "true") {
        updateDie(dice1, dice1val)
    }
    if (dice2.getAttribute("click") != "true") {
        updateDie(dice2, dice2val)
    }
    if (dice3.getAttribute("click") != "true") {
        updateDie(dice3, dice3val)
    }
    if (dice4.getAttribute("click") != "true") {
        updateDie(dice4, dice4val)
    }
    if (dice5.getAttribute("click") != "true") {
        updateDie(dice5, dice5val)
    }
    if (dice6.getAttribute("click") != "true") {
        updateDie(dice6, dice6val)
    }
    if (dice7.getAttribute("click") != "true") {
        updateDie(dice7, dice7val)
    }
    if (dice8.getAttribute("click") != "true") {
        updateDie(dice8, dice8val)
    }
    if (dice9.getAttribute("click") != "true") {
        updateDie(dice9, dice9val)
    }
    if (dice10.getAttribute("click") != "true") {
        updateDie(dice10, dice10val)
    }
    if (dice11.getAttribute("click") != "true") {
        updateDie(dice11, dice11val)
    }
    if (dice12.getAttribute("click") != "true") {
        updateDie(dice12, dice12val)
    }
    if (dice13.getAttribute("click") != "true") {
        updateDie(dice13, dice13val)
    }
    if (dice14.getAttribute("click") != "true") {
        updateDie(dice14, dice14val)
    }
    if (dice15.getAttribute("click") != "true") {
        updateDie(dice15, dice15val)
    }

    let bet = Number(betValue.getAttribute("total"));
    let board = evalBoard(bet);

    score.innerHTML = board[0].toFixed(2)
    bal += board[0]
    bal -= bet
    balance.setAttribute("total", bal)
    balance.innerHTML = bal.toFixed(2)
    log.innerHTML = board[1]

    //alert("Bet: "+ bet +"\nRoll: "+ roll);
})

dice1.addEventListener('click', function() {
    if (dice1.getAttribute("click") != "true") {
        dice1.setAttribute("click", true)
        dice1.style.backgroundColor = "yellow"
    }
    else {
        dice1.setAttribute("click", false)
        dice1.style.backgroundColor = "transparent"
    }
})

dice2.addEventListener('click', function() {
    if (dice2.getAttribute("click") != "true") {
        dice2.setAttribute("click", true)
        dice2.style.backgroundColor = "yellow"
    }
    else {
        dice2.setAttribute("click", false)
        dice2.style.backgroundColor = "transparent"
    }
})

dice3.addEventListener('click', function() {
    if (dice3.getAttribute("click") != "true") {
        dice3.setAttribute("click", true)
        dice3.style.backgroundColor = "yellow"
    }
    else {
        dice3.setAttribute("click", false)
        dice3.style.backgroundColor = "transparent"
    }
})

dice4.addEventListener('click', function() {
    if (dice4.getAttribute("click") != "true") {
        dice4.setAttribute("click", true)
        dice4.style.backgroundColor = "yellow"
    }
    else {
        dice4.setAttribute("click", false)
        dice4.style.backgroundColor = "transparent"
    }
})

dice5.addEventListener('click', function() {
    if (dice5.getAttribute("click") != "true") {
        dice5.setAttribute("click", true)
        dice5.style.backgroundColor = "yellow"
    }
    else {
        dice5.setAttribute("click", false)
        dice5.style.backgroundColor = "transparent"
    }
})

dice6.addEventListener('click', function() {
    if (dice6.getAttribute("click") != "true") {
        dice6.setAttribute("click", true)
        dice6.style.backgroundColor = "yellow"
    }
    else {
        dice6.setAttribute("click", false)
        dice6.style.backgroundColor = "transparent"
    }
})

dice7.addEventListener('click', function() {
    if (dice7.getAttribute("click") != "true") {
        dice7.setAttribute("click", true)
        dice7.style.backgroundColor = "yellow"
    }
    else {
        dice7.setAttribute("click", false)
        dice7.style.backgroundColor = "transparent"
    }
})

dice8.addEventListener('click', function() {
    if (dice8.getAttribute("click") != "true") {
        dice8.setAttribute("click", true)
        dice8.style.backgroundColor = "yellow"
    }
    else {
        dice8.setAttribute("click", false)
        dice8.style.backgroundColor = "transparent"
    }
})

dice9.addEventListener('click', function() {
    if (dice9.getAttribute("click") != "true") {
        dice9.setAttribute("click", true)
        dice9.style.backgroundColor = "yellow"
    }
    else {
        dice9.setAttribute("click", false)
        dice9.style.backgroundColor = "transparent"
    }
})

dice10.addEventListener('click', function() {
    if (dice10.getAttribute("click") != "true") {
        dice10.setAttribute("click", true)
        dice10.style.backgroundColor = "yellow"
    }
    else {
        dice10.setAttribute("click", false)
        dice10.style.backgroundColor = "transparent"
    }
})

dice11.addEventListener('click', function() {
    if (dice11.getAttribute("click") != "true") {
        dice11.setAttribute("click", true)
        dice11.style.backgroundColor = "yellow"
    }
    else {
        dice11.setAttribute("click", false)
        dice11.style.backgroundColor = "transparent"
    }
})

dice12.addEventListener('click', function() {
    if (dice12.getAttribute("click") != "true") {
        dice12.setAttribute("click", true)
        dice12.style.backgroundColor = "yellow"
    }
    else {
        dice12.setAttribute("click", false)
        dice12.style.backgroundColor = "transparent"
    }
})

dice13.addEventListener('click', function() {
    if (dice13.getAttribute("click") != "true") {
        dice13.setAttribute("click", true)
        dice13.style.backgroundColor = "yellow"
    }
    else {
        dice13.setAttribute("click", false)
        dice13.style.backgroundColor = "transparent"
    }
})

dice14.addEventListener('click', function() {
    if (dice14.getAttribute("click") != "true") {
        dice14.setAttribute("click", true)
        dice14.style.backgroundColor = "yellow"
    }
    else {
        dice14.setAttribute("click", false)
        dice14.style.backgroundColor = "transparent"
    }
})

dice15.addEventListener('click', function() {
    if (dice15.getAttribute("click") != "true") {
        dice15.setAttribute("click", true)
        dice15.style.backgroundColor = "yellow"
    }
    else {
        dice15.setAttribute("click", false)
        dice15.style.backgroundColor = "transparent"
    }
})

/////YAHTZEE/////

function checkJoker(diceVals) {

    if (Number(yahtzee.getAttribute("total")) > 0) {
        if (diceVals[yahtzeeDice._1] == 5 && Number(y1s.getAttribute("total")) > -1 ||
            diceVals[yahtzeeDice._2] == 5 && Number(y2s.getAttribute("total")) > -1 ||
            diceVals[yahtzeeDice._3] == 5 && Number(y3s.getAttribute("total")) > -1 ||
            diceVals[yahtzeeDice._4] == 5 && Number(y4s.getAttribute("total")) > -1 ||
            diceVals[yahtzeeDice._5] == 5 && Number(y5s.getAttribute("total")) > -1) {
            return true
        }
    }
    return false
}

function checkYahtzee(diceVals) {

    let hasYahtzee = false
    for (let i = 0; i < diceVals.length; i++) {
        if (diceVals[i] == 5) {
            hasYahtzee = true
            break
        }
    }

    if (hasYahtzee && Number(yahtzee.getAttribute("total")) > 0) {
        numYahtzees.setAttribute("total", (1 + Number(numYahtzees.getAttribute("total"))))
    }

    return hasYahtzee
}

function clearYahtzeeDice() {
    for (let i = 0; i < yahtzeeLine.length; i++) {
        yahtzeeLine[i].setAttribute("item", null)
        yahtzeeLine[i].style.backgroundImage = "url(\'" + imgDir + "blank\')"
        yahtzeeLine[i].style.backgroundColor = "transparent"
        yahtzeeLine[i].setAttribute("click", "false")
    }
}

function completeGame() {

    if (yahtzeeTopComplete & yahtzeeBottomComplete) {
        let yScore = Number(topScore.getAttribute("total")) + Number(bottomScore.getAttribute("total"))
        grandScore.setAttribute("total", yScore)
        grandScore.innerHTML = yScore
        score.innerHTML = yScore / 10
        score.setAttribute("total", yScore / 10)
        let bal = Number(balance.getAttribute("total"))
        bal += yScore / 10
        balance.setAttribute("total", bal)
        balance.innerHTML = bal
        alert("You won $" + yScore / 10 + "!")
        returnBtn.style.display = null
    }

}

function completeBottom() {
    let bal = Number(balance.getAttribute("total"))
    let complete = true

    for (let i = 0; i < yahtzeeBottomScoreLine.length; i++) {
        complete = complete && yahtzeeBottomScoreLine[i].getAttribute("click") == "true"
    }

    if (complete && !yahtzeeBottomComplete) {
        let yScore = evalBottomScore();
        let ybonScore = Number(numYahtzees.getAttribute("total")) * 100
        bottomScore.setAttribute("total", yScore)
        bottomScore.innerHTML = yScore
        numYahtzees.innerHTML = numYahtzees.getAttribute("total")
        numYahtzeesScore.setAttribute("total", ybonScore)
        numYahtzeesScore.innerHTML = ybonScore

        yScore += ybonScore

        score.innerHTML = yScore / 10
        score.setAttribute("total", yScore / 10)
        bal += yScore / 10
        balance.setAttribute("total", bal)
        balance.innerHTML = bal
        alert("You won $" + yScore / 10 + "!")
        yahtzeeBottomComplete=true;
        return true
    }

    return false

}

function completeTop() {
    let bal = Number(balance.getAttribute("total"))

    let complete = true
    for (let i = 0; i < yahtzeeTopScoreLine.length; i++) {
        complete = complete && yahtzeeTopScoreLine[i].getAttribute("click") == "true"
    }
    if (complete && !yahtzeeTopComplete) {
        let yScore = evalTopScore();
        if (yScore > 63) {
            topBonus.setAttribute("total", 35)
            topBonus.innerHTML = 35
            topScore.setAttribute("total", yScore + 35)
            topScore.innerHTML = (yScore + 35)

            score.innerHTML = (yScore + 35) / 10
            bal += (yScore + 35) / 10
            balance.setAttribute("total", bal)
            balance.innerHTML = bal.toFixed(2)
            yahtzeeTopComplete = true
        }
        else {
            topBonus.innerHTML = 0
            topScore.setAttribute("total", yScore)
            topScore.innerHTML = (yScore)

            score.innerHTML = yScore / 10
            bal += yScore / 10
            balance.setAttribute("total", bal)
            balance.innerHTML = bal.toFixed(2)
            yahtzeeTopComplete = true
        }

        return true
    }
    return false
}

function evalBottomScore() {
    return (
        Number(_3oak.getAttribute("total")) +
        Number(_4oak.getAttribute("total")) +
        Number(fullHouse.getAttribute("total")) +
        Number(smStraight.getAttribute("total")) +
        Number(lgStraight.getAttribute("total")) +
        Number(yahtzee.getAttribute("total")) +
        Number(chance.getAttribute("total")) +
        Number(numYahtzees.getAttribute("total")) * 100
    )
}

function evalTopScore() {
    return (
        Number(y1s.getAttribute("total")) + Number(y2s.getAttribute("total")) + Number(y3s.getAttribute("total")) + Number(y4s.getAttribute("total")) + Number(y5s.getAttribute("total")) + Number(y6s.getAttribute("total"))
    )
}

function evalYahtzee() {

    let _1 = 0;
    let _2 = 0;
    let _3 = 0;
    let _4 = 0;
    let _5 = 0;
    let _6 = 0;

    for (let i = 0; i < yahtzeeLine.length; i++) {
        switch (Number(yahtzeeLine[i].getAttribute("item"))) {
            case yahtzeeDice._1:
                _1++;
                break;
            case yahtzeeDice._2:
                _2++;
                break;
            case yahtzeeDice._3:
                _3++;
                break;
            case yahtzeeDice._4:
                _4++;
                break;
            case yahtzeeDice._5:
                _5++;
                break;
            case yahtzeeDice._6:
                _6++;
                break;
            default:
                break;
        }
    }

    return [_1, _2, _3, _4, _5, _6]

}

function updateYahtzeeDie(dice, item) {
    dice.style.backgroundImage = "url(\'" + imgDir + diceImgs[item] + "\')"
    dice.setAttribute("item", item)
}

function hideYahtzeeBtns() {
    yahtzeeTable.style.display = "None"
    for (let i = 0; i < yahtzeeTopScoreLine.length; i++) {
        yahtzeeTopScoreLine[i].style.display = "None"
    }
    for (let i = 0; i < yahtzeeBottomScoreLine.length; i++) {
        yahtzeeBottomScoreLine[i].style.display = "None"
    }
    yahtzeeTopInstructions.style.display = "None"
    yahtzeeBottomInstructions.style.display = "None"
    yahtzeeTopLabels.style.display = null
    yahtzeeBottomLabels.style.display = null
}

function showYahtzeeBtns() {
    yahtzeeTable.style.display = null
    for (let i = 0; i < yahtzeeTopScoreLine.length; i++) {
        yahtzeeTopScoreLine[i].style.display = null
    }
    for (let i = 0; i < yahtzeeBottomScoreLine.length; i++) {
        yahtzeeBottomScoreLine[i].style.display = null
    }
    yahtzeeTopInstructions.style.display = null
    yahtzeeBottomInstructions.style.display = null
    yahtzeeTopLabels.style.display = "None"
    yahtzeeBottomLabels.style.display = "None"
}

yahtzeeRollBtn.addEventListener('click', function() {


    let dice21val = Math.floor(Math.random() * diceImgs.length)
    let dice22val = Math.floor(Math.random() * diceImgs.length)
    let dice23val = Math.floor(Math.random() * diceImgs.length)
    let dice24val = Math.floor(Math.random() * diceImgs.length)
    let dice25val = Math.floor(Math.random() * diceImgs.length)
    let rollsLeft = Number(rolls.getAttribute("total"))

    if (rollsLeft != 0) {
        if (dice21.getAttribute("click") != "true") {
            updateYahtzeeDie(dice21, dice21val)
        }
        if (dice22.getAttribute("click") != "true") {
            updateYahtzeeDie(dice22, dice22val)
        }
        if (dice23.getAttribute("click") != "true") {
            updateYahtzeeDie(dice23, dice23val)
        }
        if (dice24.getAttribute("click") != "true") {
            updateYahtzeeDie(dice24, dice24val)
        }
        if (dice25.getAttribute("click") != "true") {
            updateYahtzeeDie(dice25, dice25val)
        }
        rollsLeft--;
        rolls.setAttribute("total", rollsLeft)
        rolls.innerHTML = rollsLeft
    }

    if (rollsLeft == 0) {
        yahtzeeRollBtn.disabled = true
    }


})
dice21.addEventListener('click', function() {
    if (dice21.getAttribute("click") != "true") {
        dice21.setAttribute("click", true)
        dice21.style.backgroundColor = "yellow"
    }
    else {
        dice21.setAttribute("click", false)
        dice21.style.backgroundColor = "transparent"
    }
})
dice22.addEventListener('click', function() {
    if (dice22.getAttribute("click") != "true") {
        dice22.setAttribute("click", true)
        dice22.style.backgroundColor = "yellow"
    }
    else {
        dice22.setAttribute("click", false)
        dice22.style.backgroundColor = "transparent"
    }
})
dice23.addEventListener('click', function() {
    if (dice23.getAttribute("click") != "true") {
        dice23.setAttribute("click", true)
        dice23.style.backgroundColor = "yellow"
    }
    else {
        dice23.setAttribute("click", false)
        dice23.style.backgroundColor = "transparent"
    }
})
dice24.addEventListener('click', function() {
    if (dice24.getAttribute("click") != "true") {
        dice24.setAttribute("click", true)
        dice24.style.backgroundColor = "yellow"
    }
    else {
        dice24.setAttribute("click", false)
        dice24.style.backgroundColor = "transparent"
    }
})
dice25.addEventListener('click', function() {
    if (dice25.getAttribute("click") != "true") {
        dice25.setAttribute("click", true)
        dice25.style.backgroundColor = "yellow"
    }
    else {
        dice25.setAttribute("click", false)
        dice25.style.backgroundColor = "transparent"
    }
})

y1sBtn.addEventListener('click', function() {
    let diceVals = evalYahtzee();
    let yScore = diceVals[yahtzeeDice._1] * 1
    let bal = Number(balance.getAttribute("total"))

    y1s.setAttribute("total", yScore)
    y1s.innerHTML = yScore
    y1sBtn.disabled = true
    y1sBtn.setAttribute("click", "true")

    score.innerHTML = yScore / 10
    bal += yScore / 10
    balance.setAttribute("total", bal)
    balance.innerHTML = bal.toFixed(2)
    alert("You won $" + (yScore / 10).toFixed(2) + "!")

    rolls.setAttribute("total", 3)
    rolls.innerHTML = 3
    yahtzeeRollBtn.disabled = false

    clearYahtzeeDice()
    returnBtn.style.display = null
    completeTop()
    completeGame()
    hideYahtzeeBtns()
})

y2sBtn.addEventListener('click', function() {
    let diceVals = evalYahtzee();
    let yScore = diceVals[yahtzeeDice._2] * 2
    let bal = Number(balance.getAttribute("total"))

    y2s.setAttribute("total", yScore)
    y2s.innerHTML = yScore
    y2sBtn.disabled = true
    y2sBtn.setAttribute("click", "true")

    score.innerHTML = yScore / 10
    bal += yScore / 10
    balance.setAttribute("total", bal)
    balance.innerHTML = bal.toFixed(2)
    alert("You won $" + (yScore / 10).toFixed(2) + "!")

    rolls.setAttribute("total", 3)
    rolls.innerHTML = 3
    yahtzeeRollBtn.disabled = false

    clearYahtzeeDice()
    returnBtn.style.display = null
    completeTop()
    completeGame()
    hideYahtzeeBtns()

})

y3sBtn.addEventListener('click', function() {
    let diceVals = evalYahtzee();
    let yScore = diceVals[yahtzeeDice._3] * 3
    let bal = Number(balance.getAttribute("total"))

    y3s.setAttribute("total", yScore)
    y3s.innerHTML = yScore
    y3sBtn.disabled = true
    y3sBtn.setAttribute("click", "true")

    score.innerHTML = yScore / 10
    bal += yScore / 10
    balance.setAttribute("total", bal)
    balance.innerHTML = bal.toFixed(2)
    alert("You won $" + (yScore / 10).toFixed(2) + "!")

    rolls.setAttribute("total", 3)
    rolls.innerHTML = 3
    yahtzeeRollBtn.disabled = false

    clearYahtzeeDice()
    returnBtn.style.display = null
    completeTop()
    completeGame()
    hideYahtzeeBtns()

})

y4sBtn.addEventListener('click', function() {
    let diceVals = evalYahtzee();
    let yScore = diceVals[yahtzeeDice._4] * 4
    let bal = Number(balance.getAttribute("total"))

    y4s.setAttribute("total", yScore)
    y4s.innerHTML = yScore
    y4sBtn.disabled = true
    y4sBtn.setAttribute("click", "true")

    score.innerHTML = yScore / 10
    bal += yScore / 10
    balance.setAttribute("total", bal)
    balance.innerHTML = bal.toFixed(2)
    alert("You won $" + (yScore / 10).toFixed(2) + "!")

    rolls.setAttribute("total", 3)
    rolls.innerHTML = 3
    yahtzeeRollBtn.disabled = false

    clearYahtzeeDice()
    returnBtn.style.display = null
    completeTop()
    completeGame()
    hideYahtzeeBtns()

})

y5sBtn.addEventListener('click', function() {
    let diceVals = evalYahtzee();
    let yScore = diceVals[yahtzeeDice._5] * 5
    let bal = Number(balance.getAttribute("total"))

    y5s.setAttribute("total", yScore)
    y5s.innerHTML = yScore
    y5sBtn.disabled = true
    y5sBtn.setAttribute("click", "true")

    score.innerHTML = yScore / 10
    bal += yScore / 10
    balance.setAttribute("total", bal)
    balance.innerHTML = bal.toFixed(2)
    alert("You won $" + (yScore / 10).toFixed(2) + "!")

    rolls.setAttribute("total", 3)
    rolls.innerHTML = 3
    yahtzeeRollBtn.disabled = false

    clearYahtzeeDice()
    returnBtn.style.display = null
    completeTop()
    completeGame()
    hideYahtzeeBtns()

})

y6sBtn.addEventListener('click', function() {
    let diceVals = evalYahtzee();
    let yScore = diceVals[yahtzeeDice._6] * 6
    let bal = Number(balance.getAttribute("total"))

    y6s.setAttribute("total", yScore)
    y6s.innerHTML = yScore
    y6sBtn.disabled = true
    y6sBtn.setAttribute("click", "true")

    score.innerHTML = yScore / 10
    bal += yScore / 10
    balance.setAttribute("total", bal)
    balance.innerHTML = bal.toFixed(2)
    alert("You won $" + (yScore / 10).toFixed(2) + "!")
    
    rolls.setAttribute("total", 3)
    rolls.innerHTML = 3
    yahtzeeRollBtn.disabled = false

    clearYahtzeeDice()
    returnBtn.style.display = null
    completeTop()
    completeGame()
    hideYahtzeeBtns()

})

_3oakBtn.addEventListener('click', function() {
    let diceVals = evalYahtzee();
    let yScore = (diceVals[yahtzeeDice._1] +
        diceVals[yahtzeeDice._2] * 2 +
        diceVals[yahtzeeDice._3] * 3 +
        diceVals[yahtzeeDice._4] * 4 +
        diceVals[yahtzeeDice._5] * 5 +
        diceVals[yahtzeeDice._6] * 6)
    let bal = Number(balance.getAttribute("total"))
    _3oakBtn.setAttribute("click", "true")

    has3oak = false;
    for (let i = 0; i < diceVals.length; i++) {
        if (diceVals[i] >= 3) {
            has3oak = true;
            break;
        }
    }

    let hasYahtzee = checkYahtzee(diceVals)
    let hasJoker = false
    if (hasYahtzee) {
        hasJoker = checkJoker(diceVals)
    }

    if (has3oak || hasJoker) {
        _3oak.setAttribute("total", yScore)
        _3oak.innerHTML = yScore

        score.innerHTML = yScore / 10
        bal += yScore / 10
        balance.setAttribute("total", bal)
        balance.innerHTML = bal.toFixed(2)
        alert("You won $" + (yScore / 10).toFixed(2) + "!")

    }
    else {
        _3oak.setAttribute("total", 0)
        _3oak.innerHTML = 0
        score.innerHTML = 0
        alert("You won $0.00")
    }

    rolls.setAttribute("total", 3)
    rolls.innerHTML = 3
    yahtzeeRollBtn.disabled = false

    _3oakBtn.disabled = true

    clearYahtzeeDice()
    returnBtn.style.display = null
    completeBottom()
    completeGame()
    hideYahtzeeBtns()

})

_4oakBtn.addEventListener('click', function() {
    let diceVals = evalYahtzee();
    let yScore = (diceVals[yahtzeeDice._1] +
        diceVals[yahtzeeDice._2] * 2 +
        diceVals[yahtzeeDice._3] * 3 +
        diceVals[yahtzeeDice._4] * 4 +
        diceVals[yahtzeeDice._5] * 5 +
        diceVals[yahtzeeDice._6] * 6)
    let bal = Number(balance.getAttribute("total"))
    _4oakBtn.setAttribute("click", "true")

    has4oak = false;
    for (let i = 0; i < diceVals.length; i++) {
        if (diceVals[i] >= 4) {
            has4oak = true;
            break;
        }
    }

    let hasYahtzee = checkYahtzee(diceVals)
    let hasJoker = false
    if (hasYahtzee) {
        hasJoker = checkJoker(diceVals)
    }

    if (has4oak || hasJoker) {
        _4oak.setAttribute("total", yScore)
        _4oak.innerHTML = yScore

        score.innerHTML = yScore / 10
        bal += yScore / 10
        balance.setAttribute("total", bal)
        balance.innerHTML = bal.toFixed(2)
        alert("You won $" + (yScore / 10).toFixed(2) + "!")

    }
    else {
        _4oak.setAttribute("total", 0)
        _4oak.innerHTML = 0
        score.innerHTML = 0
        alert("You won $0.00")
    }

    rolls.setAttribute("total", 3)
    rolls.innerHTML = 3
    yahtzeeRollBtn.disabled = false

    _4oakBtn.disabled = true

    clearYahtzeeDice()
    returnBtn.style.display = null
    completeBottom()
    completeGame()
    hideYahtzeeBtns()

})

fullHouseBtn.addEventListener('click', function() {
    let diceVals = evalYahtzee();
    let yScore = 25
    let bal = Number(balance.getAttribute("total"))
    fullHouseBtn.setAttribute("click", "true")

    hasfullhouse = false;
    for (let i = 0; i < diceVals.length; i++) {
        if (diceVals[i] == 5) {
            hasfullhouse = true;
            break;
        }
        if (diceVals[i] == 4) {
            hasfullhouse = false
            break;
        }
        if (diceVals[i] == 3) {
            for (let j = 0; j < diceVals.length; j++) {
                if (diceVals[j] == 2) {
                    hasfullhouse = true
                    break;
                }
            }
        }
    }

    let hasYahtzee = checkYahtzee(diceVals)
    let hasJoker = false
    if (hasYahtzee) {
        hasJoker = checkJoker(diceVals)
    }

    if (hasfullhouse || hasJoker) {
        fullHouse.setAttribute("total", yScore)
        fullHouse.innerHTML = yScore

        score.innerHTML = yScore / 10
        bal += yScore / 10
        balance.setAttribute("total", bal)
        balance.innerHTML = bal.toFixed(2)
        alert("You won $" + (yScore / 10).toFixed(2) + "!")

    }
    else {
        fullHouse.setAttribute("total", 0)
        fullHouse.innerHTML = 0
        score.innerHTML = 0
        alert("You won $0.00")
    }

    rolls.setAttribute("total", 3)
    rolls.innerHTML = 3
    yahtzeeRollBtn.disabled = false

    fullHouseBtn.disabled = true

    clearYahtzeeDice()
    returnBtn.style.display = null
    completeBottom()
    completeGame()
    hideYahtzeeBtns()

})

smStraightBtn.addEventListener('click', function() {
    let diceVals = evalYahtzee();
    let yScore = 30
    let bal = Number(balance.getAttribute("total"))
    smStraightBtn.setAttribute("click", "true")

    hasSmStraight = false;
    if ((diceVals[yahtzeeDice._1] >= 1 &&
            diceVals[yahtzeeDice._2] >= 1 &&
            diceVals[yahtzeeDice._3] >= 1 &&
            diceVals[yahtzeeDice._4] >= 1) ||
        (diceVals[yahtzeeDice._2] >= 1 &&
            diceVals[yahtzeeDice._3] >= 1 &&
            diceVals[yahtzeeDice._4] >= 1 &&
            diceVals[yahtzeeDice._5] >= 1) ||
        (diceVals[yahtzeeDice._3] >= 1 &&
            diceVals[yahtzeeDice._4] >= 1 &&
            diceVals[yahtzeeDice._5] >= 1 &&
            diceVals[yahtzeeDice._6] >= 1)) {
        hasSmStraight = true
    }

    let hasYahtzee = checkYahtzee(diceVals)
    let hasJoker = false
    if (hasYahtzee) {
        hasJoker = checkJoker(diceVals)
    }

    if (hasSmStraight || hasJoker) {
        smStraight.setAttribute("total", yScore)
        smStraight.innerHTML = yScore

        score.innerHTML = yScore / 10
        bal += yScore / 10
        balance.setAttribute("total", bal)
        balance.innerHTML = bal.toFixed(2)
        alert("You won $" + (yScore / 10).toFixed(2) + "!")

    }
    else {
        smStraight.setAttribute("total", 0)
        smStraight.innerHTML = 0
        score.innerHTML = 0
        alert("You won $0.00")
    }

    rolls.setAttribute("total", 3)
    rolls.innerHTML = 3
    yahtzeeRollBtn.disabled = false

    smStraightBtn.disabled = true

    clearYahtzeeDice()
    returnBtn.style.display = null
    completeBottom()
    completeGame()
    hideYahtzeeBtns()

})

lgStraightBtn.addEventListener('click', function() {
    let diceVals = evalYahtzee();
    let yScore = 40
    let bal = Number(balance.getAttribute("total"))
    lgStraightBtn.setAttribute("click", "true")

    hasLgStraight = false;
    if ((diceVals[yahtzeeDice._1] >= 1 &&
            diceVals[yahtzeeDice._2] >= 1 &&
            diceVals[yahtzeeDice._3] >= 1 &&
            diceVals[yahtzeeDice._4] >= 1 &&
            diceVals[yahtzeeDice._5] >= 1) ||
        (diceVals[yahtzeeDice._2] >= 1 &&
            diceVals[yahtzeeDice._3] >= 1 &&
            diceVals[yahtzeeDice._4] >= 1 &&
            diceVals[yahtzeeDice._5] >= 1 &&
            diceVals[yahtzeeDice._6] >= 1)) {
        hasLgStraight = true
    }

    let hasYahtzee = checkYahtzee(diceVals)
    let hasJoker = false
    if (hasYahtzee) {
        hasJoker = checkJoker(diceVals)
    }

    if (hasLgStraight || hasJoker) {
        lgStraight.setAttribute("total", yScore)
        lgStraight.innerHTML = yScore

        score.innerHTML = yScore / 10
        bal += yScore / 10
        balance.setAttribute("total", bal)
        balance.innerHTML = bal.toFixed(2)
        alert("You won $" + (yScore / 10).toFixed(2) + "!")

    }
    else {
        lgStraight.setAttribute("total", 0)
        lgStraight.innerHTML = 0
        score.innerHTML = 0
        alert("You won $0.00")
    }

    rolls.setAttribute("total", 3)
    rolls.innerHTML = 3
    yahtzeeRollBtn.disabled = false

    lgStraightBtn.disabled = true

    clearYahtzeeDice()
    returnBtn.style.display = null
    completeBottom()
    completeGame()
    hideYahtzeeBtns()

})

yahtzeeBtn.addEventListener('click', function() {
    let diceVals = evalYahtzee();
    let yScore = 50
    let bal = Number(balance.getAttribute("total"))
    yahtzeeBtn.setAttribute("click", "true")


    let hasYahtzee = checkYahtzee(diceVals)
    let hasJoker = false

    if (hasYahtzee) {
        yahtzee.setAttribute("total", yScore)
        yahtzee.innerHTML = yScore

        score.innerHTML = yScore / 10
        bal += yScore / 10
        balance.setAttribute("total", bal)
        balance.innerHTML = bal.toFixed(2)
        alert("You won $" + (yScore / 10).toFixed(2) + "!")

    }
    else {
        yahtzee.setAttribute("total", 0)
        yahtzee.innerHTML = 0
        score.innerHTML = 0
        alert("You won $0.00")
    }

    rolls.setAttribute("total", 3)
    rolls.innerHTML = 3
    yahtzeeRollBtn.disabled = false

    yahtzeeBtn.disabled = true

    clearYahtzeeDice()
    returnBtn.style.display = null
    completeBottom()
    completeGame()
    hideYahtzeeBtns()

})

chanceBtn.addEventListener('click', function() {
    let diceVals = evalYahtzee();
    let yScore = (diceVals[yahtzeeDice._1] +
        diceVals[yahtzeeDice._2] * 2 +
        diceVals[yahtzeeDice._3] * 3 +
        diceVals[yahtzeeDice._4] * 4 +
        diceVals[yahtzeeDice._5] * 5 +
        diceVals[yahtzeeDice._6] * 6)
    let bal = Number(balance.getAttribute("total"))
    chanceBtn.setAttribute("click", "true")

    let hasYahtzee = checkYahtzee(diceVals)
    let hasJoker = false
    if (hasYahtzee) {
        hasJoker = checkJoker(diceVals)
    }

    chance.setAttribute("total", yScore)
    chance.innerHTML = yScore

    score.innerHTML = yScore / 10
    bal += yScore / 10
    balance.setAttribute("total", bal)
    balance.innerHTML = bal.toFixed(2)
    alert("You won $" + (yScore / 10).toFixed(2) + "!")

    rolls.setAttribute("total", 3)
    rolls.innerHTML = 3
    yahtzeeRollBtn.disabled = false

    chanceBtn.disabled = true

    clearYahtzeeDice()
    returnBtn.style.display = null
    completeBottom()
    completeGame()
    hideYahtzeeBtns()

})

