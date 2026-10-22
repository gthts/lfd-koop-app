'use strict';
/* Texte in Deutsch (de), Englisch (en) und Koreanisch (ko).
   Kartenbeschreibungen nach REGELWERK.md, Abschnitt 6. */

let LANG = 'de';

const L = {
  /* ============================ Deutsch ============================ */
  de: {
    langTitle: 'Sprache · Language · 언어',
    langBtn: 'Sprache',
    kicker: 'Living Forest Duel',
    h1: 'Kooperative Fassung',
    chooseGoal: 'Spielziel wählen',
    chooseTracker: 'Rundentracker wählen',
    back: '‹ Zurück',
    goal_harmonie: 'Ewige Harmonie',
    goal_dickicht: 'Schützendes Dickicht',
    goal_unbeugsam: 'Unbeugsam bis zum Schluss',
    goaltext_harmonie: 'Werbe sämtliche Tiere des Waldes an.',
    goaltext_dickicht: 'In beiden Wäldern entsteht je ein 3×3-Wald, bevor die Zeit abläuft.',
    goaltext_unbeugsam: 'Durchhalten, bis die letzte Runde des Trackers zu Ende gespielt ist.',
    grp_empf: 'Empfohlen', grp_leicht: 'Leicht', grp_schwer: 'Schwierig', grp_kurz: 'Kurze Partie',
    tn: { training: 'Training', standard: 'Standard', hardcore: 'Hardcore', kurzspiel: 'Kurzspiel' },
    trackerName: (id, nm) => `Tracker ${id} · ${L.de.tn[nm]}`,
    oneForest: 'Hier genügt der 3×3-Wald eines Spielers.',
    roundsN: n => `${n} Runden`,
    twoThree: (a, b) => `2 Karten ab Runde ${a}, 3 ab ${b}`,
    round: 'Runde',
    next: 'Nächste Runde ›',
    last: 'Letzte Runde!',
    restart: '↻ Neustart',
    restartTitle: 'Neustart?',
    restartText: 'Die laufende Partie wird beendet; es geht zurück zur Wahl des Spielziels.',
    cancel: 'Abbrechen',
    restartYes: 'Neustart',
    deck: n => `Ereignisstapel · <b>${n}</b>`,
    discard: n => `Ablage · <b>${n}</b>`,
    drop: 'Karte hierher ziehen',
    msgDrag: 'Karte auf die Auslage ziehen.',
    msgFull: 'Auslage voll – weiter mit „Nächste Runde“.',
    msgFinish: 'Diese Runde wird noch zu Ende gespielt.',
    msgOhoh: 'Oh-Oh!',
    msgShuffle: 'Die Ablage wird gemischt …',
    msgNewDeck: 'Neuer Ereignisstapel bereit.',
    infoHint: (e, p) => `Spielende nach Runde ${e}. Partnerwald ab Runde ${p}.`,
    fanNote: 'Inoffizielle Fanerweiterung – nicht von den Herausgebern von Living Forest Duel.',
    btnManual: 'Anleitung', btnGloss: 'Glossar',
    tapHint: 'Über eine Karte der Auslage wischen wendet sie und zeigt ihre Beschreibung. Über die Trackerkarte wischen zeigt die Rundenreferenz.',
    close: 'Schließen',
    arten: {
      marsch: 'Onibi-Marsch', dunkel: 'Verdunkelung / Erhellung', faeule: 'Baumfäule', funken: 'Funkenflug',
      einsam: 'Einsamkeit', entfremd: 'Entfremdung', besessen: 'Onibi-Besessenheit', hirsch: 'Hirschlosung',
      wurzel: 'Wurzelwanderung', lockruf: 'Waran-Lockruf', ruhe: 'Ruhe'
    },
    saison: { S: 'Sommer', W: 'Winter', G: 'Größter Wald' },
    el: { zahl: 'Baumwert', licht: 'Licht', spross: 'Spross', wasser: 'Wasser', geist: 'Geist' },
    name: k => ({
      dunkel: k.p.m === 'dunkel' ? 'Verdunkelung' : 'Erhellung'
    }[k.art] || L.de.arten[k.art]),
    sub: k => {
      const d = L.de, p = k.p;
      switch (k.art) {
        case 'marsch': return `${p.n} ${p.n > 1 ? 'Schritte' : 'Schritt'} · ${d.saison[p.s]}`;
        case 'faeule': return `${d.el[p.kind]} · ${d.saison[p.s]}`;
        case 'wurzel': return d.saison[p.s];
        case 'dunkel': return p.m === 'dunkel' ? 'Winter gestärkt' : 'Sommer gestärkt';
        case 'funken': return `${p.n} ${p.n > 1 ? 'Flammen' : 'Flamme'}`;
        case 'einsam': return `+${p.n} Einzelgänger`;
        case 'besessen': return p.s === 'S' ? 'Sommer · nach links' : 'Winter · nach rechts';
        case 'hirsch': return p.s === 'S' ? 'Sonne · Sommer' : 'Mond · Winter';
        default: return '';
      }
    },
    desc: k => {
      const d = L.de, p = k.p;
      switch (k.art) {
        case 'marsch': return `Der Onibi läuft ${p.n} ${p.n > 1 ? 'Schritte' : 'Schritt'} zum näheren Rand der Lichtung, nie zur Mitte hin. Steht er genau in der Mitte, läuft er zum ${p.s === 'S' ? 'Sommer-Ende (links)' : 'Winter-Ende (rechts)'}, wie es das Symbol der Karte angibt. Wird er über den Rand hinaus gedrängt, ist die Partie verloren.`;
        case 'dunkel': return `Aus der Nachschubreihe wird das günstigste Tier der anderen Jahreszeit entfernt und durch das oberste Tier des persönlichen Stapels der gestärkten Jahreszeit (${p.m === 'dunkel' ? 'Winter' : 'Sommer'}) ersetzt, solange dadurch das Ungleichgewicht der Farben größer wird. Haben mehrere Tiere die gleichen Kosten, wählen die Spieler. Andernfalls bleibt die Karte ohne Wirkung.`;
        case 'faeule': return `Der betroffene Spieler (${d.saison[p.s]}) muss einen Baum aus seinem Wald vernichten, ${p.kind === 'zahl' ? 'dessen Baumwert mindestens 2 beträgt' : 'dessen Baumelement ' + d.el[p.kind] + ' ist'}. Der Startbaum ist ausgenommen. Bäume, die dadurch von der Quelle abgetrennt werden, sterben mit ab; überdeckte Bäume sind geschützt. Findet sich kein passender Baum, geschieht nichts.`;
        case 'wurzel': return `Der betroffene Spieler (${p.s === 'G' ? 'der mit dem größeren Wald, bei Gleichstand der Sommer' : d.saison[p.s]}) wählt einen beliebigen Baumstapel außer dem Startbaum und muss ihn auf einen anderen freien Platz versetzen, an dem er nach den Pflanzregeln erlaubt ist. Findet der Stapel keinen solchen Platz, vertrocknet er. Danach vertrocknen auch alle Bäume, die ohne Verbindung zur Quelle zurückbleiben, es sei denn, der versetzte Stapel bindet sie wieder an.`;
        case 'funken': return `Es werden ${p.n} zusätzliche Flammen-Plättchen gelegt, abwechselnd auf die beiden Nachbarkarten des Onibi, am Rand mit Umlauf. Begonnen wird auf der Nachbarkarte mit dem höheren Brandwert. Reicht der Vorrat an Plättchen nicht aus, ist die Partie verloren.`;
        case 'einsam': return `In dieser Runde zählen ${p.n} zusätzliche Einzelgängersymbole für beide Spieler. Sie können schon vor dem ersten Aufdecken Aktionsmarker kosten.`;
        case 'entfremd': return 'In dieser Runde dürfen gezogene Tierkarten nur dann in die Gemeinsame Tier-Reihe gelegt werden, wenn sie ein Einzelgängersymbol tragen; andere Karten werden abgelegt. Karten, die in den persönlichen Bereich kommen, sind nicht betroffen.';
        case 'besessen': return `Der Onibi und jedes Flammen-Plättchen rücken ein Feld in Richtung ${p.s === 'S' ? 'Sommer (nach links)' : 'Winter (nach rechts)'}. Plättchen, die über den Rand geschoben werden, springen auf die andere Seite der Lichtung. Wird der Onibi über den Rand geschoben, ist die Partie verloren. Der Bonus des Zielfelds wird nicht ausgelöst.`;
        case 'hirsch': return `Liegt der Hirsch noch auf seinem Platz in der Mitte der Nachschubreihe, wird er aus der Partie genommen, und die oberste Tierkarte vom Tierstapel des ${p.s === 'S' ? 'Sommers' : 'Winters'} wird an seine Stelle gelegt; ist dieser Stapel leer, bleibt der Platz leer. Liegt der Hirsch nicht mehr dort, geschieht nichts. Dadurch verschiebt sich das Gleichgewicht in der nächsten Runde.`;
        case 'ruhe': return 'Diese Karte hat keine Wirkung. Sie sorgt nur für die Schwankung im Ereignisstapel.';
        case 'lockruf': return 'In dieser Runde werden die Einzelgängersymbole auf ausgelegten Feuer-Waranen ignoriert. Die Wirkung gilt ab dem Ziehen der Karte bis zum Rundenende.';
        default: return '';
      }
    }
  },

  /* ============================ Englisch ============================ */
  en: {
    langTitle: 'Sprache · Language · 언어',
    langBtn: 'Language',
    kicker: 'Living Forest Duel',
    h1: 'Cooperative Variant',
    chooseGoal: 'Choose your goal',
    chooseTracker: 'Choose a round tracker',
    back: '‹ Back',
    goal_harmonie: 'Eternal Harmony',
    goal_dickicht: 'Protective Thicket',
    goal_unbeugsam: 'Unyielding to the End',
    goaltext_harmonie: 'Recruit all the animals of the forest.',
    goaltext_dickicht: 'Grow a 3×3 forest in each of the two forests before time runs out.',
    goaltext_unbeugsam: 'Hold out until the last round of the tracker has been played to the end.',
    grp_empf: 'Recommended', grp_leicht: 'Easy', grp_schwer: 'Hard', grp_kurz: 'Short game',
    tn: { training: 'Training', standard: 'Standard', hardcore: 'Hardcore', kurzspiel: 'Short game' },
    trackerName: (id, nm) => `Tracker ${id} · ${L.en.tn[nm]}`,
    oneForest: 'Here the 3×3 forest of one player is enough.',
    roundsN: n => `${n} rounds`,
    twoThree: (a, b) => `2 cards from round ${a}, 3 from ${b}`,
    round: 'Round',
    next: 'Next round ›',
    last: 'Last round!',
    restart: '↻ Restart',
    restartTitle: 'Restart?',
    restartText: 'The current game ends and you return to the choice of the goal.',
    cancel: 'Cancel',
    restartYes: 'Restart',
    deck: n => `Event deck · <b>${n}</b>`,
    discard: n => `Discard · <b>${n}</b>`,
    drop: 'Drag a card here',
    msgDrag: 'Drag the card onto the display.',
    msgFull: 'Display full – continue with “Next round”.',
    msgFinish: 'This round is still played to the end.',
    msgOhoh: 'Uh-oh!',
    msgShuffle: 'Shuffling the discard pile …',
    msgNewDeck: 'New event deck ready.',
    infoHint: (e, p) => `Game ends after round ${e}. Partner forest from round ${p}.`,
    fanNote: 'Unofficial fan expansion – not affiliated with the publishers of Living Forest Duel.',
    btnManual: 'Rules', btnGloss: 'Glossary',
    tapHint: 'Swipe across a card in the display to turn it over and read its description. Swipe across the tracker card to see the round reference.',
    close: 'Close',
    arten: {
      marsch: 'Onibi March', dunkel: 'Darkening / Brightening', faeule: 'Tree Blight', funken: 'Flying Sparks',
      einsam: 'Loneliness', entfremd: 'Estrangement', besessen: 'Onibi Obsession', hirsch: 'Deer Droppings',
      wurzel: 'Root Migration', lockruf: 'Monitor Lizard Call', ruhe: 'Calm'
    },
    saison: { S: 'Summer', W: 'Winter', G: 'Largest forest' },
    el: { zahl: 'Tree value', licht: 'Light', spross: 'Sprout', wasser: 'Water', geist: 'Spirit' },
    name: k => ({
      dunkel: k.p.m === 'dunkel' ? 'Darkening' : 'Brightening'
    }[k.art] || L.en.arten[k.art]),
    sub: k => {
      const d = L.en, p = k.p;
      switch (k.art) {
        case 'marsch': return `${p.n} ${p.n > 1 ? 'steps' : 'step'} · ${d.saison[p.s]}`;
        case 'faeule': return `${d.el[p.kind]} · ${d.saison[p.s]}`;
        case 'wurzel': return d.saison[p.s];
        case 'dunkel': return p.m === 'dunkel' ? 'Winter strengthened' : 'Summer strengthened';
        case 'funken': return `${p.n} ${p.n > 1 ? 'flames' : 'flame'}`;
        case 'einsam': return `+${p.n} loner`;
        case 'besessen': return p.s === 'S' ? 'Summer · to the left' : 'Winter · to the right';
        case 'hirsch': return p.s === 'S' ? 'Sun · Summer' : 'Moon · Winter';
        default: return '';
      }
    },
    desc: k => {
      const d = L.en, p = k.p;
      switch (k.art) {
        case 'marsch': return `The Onibi walks ${p.n} ${p.n > 1 ? 'steps' : 'step'} toward the nearer edge of the clearing, never toward the middle. If it stands exactly in the middle, it heads for the ${p.s === 'S' ? 'summer end (left)' : 'winter end (right)'}, as shown by the symbol on the card. If it is pushed past the edge, the game is lost.`;
        case 'dunkel': return `The cheapest animal of the other season is removed from the supply row and replaced by the top animal of the personal pile of the strengthened season (${p.m === 'dunkel' ? 'Winter' : 'Summer'}), as long as this widens the colour imbalance. If several animals cost the same, the players choose. Otherwise the card has no effect.`;
        case 'faeule': return `The affected player (${d.saison[p.s]}) must destroy a tree in their forest ${p.kind === 'zahl' ? 'whose tree value is at least 2' : 'whose tree element is ' + d.el[p.kind]}. The starting tree is exempt. Trees that are cut off from the source die as well; covered trees are protected. If no suitable tree exists, nothing happens.`;
        case 'wurzel': return `The affected player (${p.s === 'G' ? 'the one with the larger forest, Summer on a tie' : d.saison[p.s]}) chooses any tree stack except the starting tree and must move it to another free place where it is allowed under the planting rules. If the stack finds no such place, it withers. Then all trees left without a connection to the source also wither, unless the moved stack reconnects them.`;
        case 'funken': return `${p.n} additional flame tokens are placed, alternating on the two neighbouring cards of the Onibi, wrapping around at the edge. Start with the neighbour that has the higher burn value. If the supply of tokens runs out, the game is lost.`;
        case 'einsam': return `In this round ${p.n} additional loner symbols count for both players. They can cost action markers even before the first card is revealed.`;
        case 'entfremd': return 'In this round, drawn animal cards may only be placed in the shared animal row if they show a loner symbol; other cards are discarded. Cards that go to the personal area are not affected.';
        case 'besessen': return `The Onibi and every flame token move one space toward ${p.s === 'S' ? 'Summer (to the left)' : 'Winter (to the right)'}. Tokens pushed over the edge jump to the other side of the clearing. If the Onibi is pushed over the edge, the game is lost. The bonus of the target space is not triggered.`;
        case 'hirsch': return `If the stag is still in its place in the middle of the supply row, it is removed from the game and the top animal card of ${p.s === 'S' ? 'Summer\'s' : 'Winter\'s'} animal pile is placed in its spot; if that pile is empty, the place stays empty. If the stag is no longer there, nothing happens. This shifts the balance in the next round.`;
        case 'ruhe': return 'This card has no effect. It only provides variation in the event deck.';
        case 'lockruf': return 'In this round the loner symbols on fire monitor lizards in play are ignored. The effect lasts from drawing the card until the end of the round.';
        default: return '';
      }
    }
  },

  /* ============================ Koreanisch ============================ */
  ko: {
    langTitle: 'Sprache · Language · 언어',
    langBtn: '언어',
    kicker: 'Living Forest Duel',
    h1: '협동 규칙',
    chooseGoal: '게임 목표 선택',
    chooseTracker: '라운드 트래커 선택',
    back: '‹ 뒤로',
    goal_harmonie: '영원한 조화',
    goal_dickicht: '보호하는 덤불',
    goal_unbeugsam: '끝까지 굽히지 않기',
    goaltext_harmonie: '숲의 모든 동물을 끌어오세요.',
    goaltext_dickicht: '시간이 다하기 전에 두 숲 각각에 3×3 숲을 만듭니다.',
    goaltext_unbeugsam: '트래커의 마지막 라운드가 끝날 때까지 버팁니다.',
    grp_empf: '추천', grp_leicht: '쉬움', grp_schwer: '어려움', grp_kurz: '짧은 게임',
    tn: { training: '훈련', standard: '표준', hardcore: '하드코어', kurzspiel: '단기전' },
    trackerName: (id, nm) => `트래커 ${id} · ${L.ko.tn[nm]}`,
    oneForest: '여기서는 한 플레이어의 3×3 숲이면 충분합니다.',
    roundsN: n => `${n}라운드`,
    twoThree: (a, b) => `${a}라운드부터 2장, ${b}라운드부터 3장`,
    round: '라운드',
    next: '다음 라운드 ›',
    last: '마지막 라운드!',
    restart: '↻ 다시 시작',
    restartTitle: '다시 시작할까요?',
    restartText: '진행 중인 게임이 끝나고 게임 목표 선택 화면으로 돌아갑니다.',
    cancel: '취소',
    restartYes: '다시 시작',
    deck: n => `사건 더미 · <b>${n}</b>`,
    discard: n => `버린 더미 · <b>${n}</b>`,
    drop: '카드를 여기로 끌어오세요',
    msgDrag: '카드를 전시 칸으로 끌어오세요.',
    msgFull: '전시 칸이 가득 찼습니다. “다음 라운드”로 진행하세요.',
    msgFinish: '이번 라운드는 끝까지 진행합니다.',
    msgOhoh: '어이쿠!',
    msgShuffle: '버린 더미를 섞는 중 …',
    msgNewDeck: '새 사건 더미가 준비되었습니다.',
    infoHint: (e, p) => `${e}라운드 이후 게임 종료. 파트너 숲은 ${p}라운드부터.`,
    fanNote: '비공식 팬 확장입니다 – Living Forest Duel 발행사와 관련이 없습니다.',
    btnManual: '설명서', btnGloss: '용어집',
    tapHint: '전시된 카드를 옆으로 쓸면 카드가 뒤집혀 설명이 나옵니다. 트래커 카드를 옆으로 쓰면 라운드 안내가 나옵니다.',
    close: '닫기',
    arten: {
      marsch: '오니비 행군', dunkel: '어두워짐 / 밝아짐', faeule: '나무 썩음', funken: '불티',
      einsam: '고독', entfremd: '소외', besessen: '오니비의 집착', hirsch: '사슴의 배설물',
      wurzel: '뿌리 이동', lockruf: '왕도마뱀의 부름', ruhe: '고요'
    },
    saison: { S: '여름', W: '겨울', G: '가장 큰 숲' },
    el: { zahl: '나무 값', licht: '빛', spross: '새싹', wasser: '물', geist: '영혼' },
    name: k => ({
      dunkel: k.p.m === 'dunkel' ? '어두워짐' : '밝아짐'
    }[k.art] || L.ko.arten[k.art]),
    sub: k => {
      const d = L.ko, p = k.p;
      switch (k.art) {
        case 'marsch': return `${p.n}칸 · ${d.saison[p.s]}`;
        case 'faeule': return `${d.el[p.kind]} · ${d.saison[p.s]}`;
        case 'wurzel': return d.saison[p.s];
        case 'dunkel': return p.m === 'dunkel' ? '겨울 강화' : '여름 강화';
        case 'funken': return `불꽃 ${p.n}개`;
        case 'einsam': return `외톨이 +${p.n}`;
        case 'besessen': return p.s === 'S' ? '여름 · 왼쪽으로' : '겨울 · 오른쪽으로';
        case 'hirsch': return p.s === 'S' ? '해 · 여름' : '달 · 겨울';
        default: return '';
      }
    },
    desc: k => {
      const d = L.ko, p = k.p;
      switch (k.art) {
        case 'marsch': return `오니비는 빈터의 더 가까운 가장자리 쪽으로 ${p.n}칸 이동하며, 결코 중앙 쪽으로는 가지 않습니다. 정확히 중앙에 서 있으면 카드의 기호대로 ${p.s === 'S' ? '여름 쪽 끝(왼쪽)' : '겨울 쪽 끝(오른쪽)'}으로 향합니다. 가장자리 밖으로 밀려나면 게임에서 패배합니다.`;
        case 'dunkel': return `공급 줄에서 다른 계절의 가장 저렴한 동물을 제거하고, 강화되는 계절(${p.m === 'dunkel' ? '겨울' : '여름'})의 개인 더미 맨 위 동물로 바꿉니다. 단, 색 불균형이 더 커지는 경우에만 적용됩니다. 가격이 같은 동물이 여럿이면 플레이어들이 고릅니다. 그렇지 않으면 이 카드는 아무 효과가 없습니다.`;
        case 'faeule': return `해당 플레이어(${d.saison[p.s]})는 자신의 숲에서 ${p.kind === 'zahl' ? '나무 값이 2 이상인' : '나무 요소가 ' + d.el[p.kind] + '인'} 나무 한 그루를 없애야 합니다. 시작 나무는 제외됩니다. 이로 인해 샘에서 끊어진 나무도 함께 죽으며, 가려진 나무는 보호됩니다. 알맞은 나무가 없으면 아무 일도 일어나지 않습니다.`;
        case 'wurzel': return `해당 플레이어(${p.s === 'G' ? '숲이 더 큰 쪽, 같으면 여름' : d.saison[p.s]})는 시작 나무를 제외한 나무 더미 하나를 골라, 심기 규칙상 허용되는 다른 빈 자리로 옮겨야 합니다. 더미를 놓을 자리가 없으면 그 더미는 시듭니다. 그다음 샘과 연결되지 않은 채 남은 모든 나무도 시듭니다. 다만 옮긴 더미가 다시 이어 주는 나무는 남습니다.`;
        case 'funken': return `불꽃 조각 ${p.n}개를 추가로 놓습니다. 오니비의 양쪽 이웃 카드에 번갈아 놓으며, 가장자리에서는 반대편으로 이어집니다. 화력 값이 더 높은 이웃 카드부터 시작합니다. 조각의 비축분이 모자라면 게임에서 패배합니다.`;
        case 'einsam': return `이번 라운드에는 외톨이 기호 ${p.n}개가 두 플레이어 모두에게 추가로 계산됩니다. 첫 카드를 뒤집기 전에도 행동 마커를 잃을 수 있습니다.`;
        case 'entfremd': return '이번 라운드에는 뽑은 동물 카드에 외톨이 기호가 있을 때만 공용 동물 줄에 놓을 수 있습니다. 그렇지 않은 카드는 버립니다. 개인 구역에 들어가는 카드는 해당되지 않습니다.';
        case 'besessen': return `오니비와 모든 불꽃 조각이 ${p.s === 'S' ? '여름 쪽(왼쪽)' : '겨울 쪽(오른쪽)'}으로 한 칸 이동합니다. 가장자리 밖으로 밀린 조각은 빈터의 반대편으로 넘어갑니다. 오니비가 가장자리 밖으로 밀려나면 게임에서 패배합니다. 도착한 칸의 보너스는 발동하지 않습니다.`;
        case 'hirsch': return `사슴이 아직 공급 줄 가운데 자리에 있으면 게임에서 제거하고, 그 자리에 ${p.s === 'S' ? '여름' : '겨울'}의 동물 더미 맨 위 카드를 놓습니다. 그 더미가 비어 있으면 자리는 빈 채로 남습니다. 사슴이 이미 그곳에 없으면 아무 일도 일어나지 않습니다. 이로 인해 다음 라운드의 균형이 바뀝니다.`;
        case 'ruhe': return '이 카드는 아무 효과가 없습니다. 사건 더미에 변화를 주는 역할만 합니다.';
        case 'lockruf': return '이번 라운드에는 놓여 있는 화염 왕도마뱀의 외톨이 기호가 무시됩니다. 이 효과는 카드를 뽑은 때부터 라운드가 끝날 때까지 이어집니다.';
        default: return '';
      }
    }
  }
};

/* Zugriff auf einen Text; fehlt er in der gewählten Sprache, gilt Deutsch */
function tr(key, ...a) {
  const v = (L[LANG] && L[LANG][key] !== undefined) ? L[LANG][key] : L.de[key];
  return typeof v === 'function' ? v(...a) : v;
}
const kartenName = k => L[LANG].name(k);
const kartenZusatz = k => L[LANG].sub(k);
const kartenText = k => L[LANG].desc(k);

/* Flaggen als eingebettete Vektorgrafik */
const FLAGGEN = {
  de: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="90" height="20" fill="#000"/><rect y="20" width="90" height="20" fill="#dd0000"/><rect y="40" width="90" height="20" fill="#ffce00"/></svg>`,
  en: `<svg viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg"><clipPath id="uk"><path d="M0 0h60v30H0z"/></clipPath><g clip-path="url(#uk)"><path d="M0 0v30h60V0z" fill="#012169"/><path d="M0 0l60 30m0-30L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0l60 30m0-30L0 30" stroke="#C8102E" stroke-width="2.4" clip-path="url(#uk)"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/></g></svg>`,
  ko: `<svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg"><rect width="90" height="60" fill="#fff"/>
    <g transform="translate(45 30)"><circle r="15" fill="#003478"/><path d="M-15 0a15 15 0 0 1 30 0a7.5 7.5 0 0 1-15 0a7.5 7.5 0 0 0-15 0z" fill="#cd2e3a"/>
    <circle cx="7.5" r="7.5" fill="#003478"/><circle cx="-7.5" r="7.5" fill="#cd2e3a"/>
    <path d="M-15 0a15 15 0 0 1 30 0" fill="none"/></g>
    <g fill="#000"><g transform="translate(17 12) rotate(-33.7)"><rect x="-8" y="-4" width="16" height="2.4"/><rect x="-8" y="-0.2" width="16" height="2.4"/><rect x="-8" y="3.6" width="16" height="2.4"/></g>
    <g transform="translate(73 12) rotate(33.7)"><rect x="-8" y="-4" width="7" height="2.4"/><rect x="1" y="-4" width="7" height="2.4"/><rect x="-8" y="-0.2" width="16" height="2.4"/><rect x="-8" y="3.6" width="7" height="2.4"/><rect x="1" y="3.6" width="7" height="2.4"/></g>
    <g transform="translate(17 48) rotate(33.7)"><rect x="-8" y="-4" width="16" height="2.4"/><rect x="-8" y="-0.2" width="7" height="2.4"/><rect x="1" y="-0.2" width="7" height="2.4"/><rect x="-8" y="3.6" width="16" height="2.4"/></g>
    <g transform="translate(73 48) rotate(-33.7)"><rect x="-8" y="-4" width="7" height="2.4"/><rect x="1" y="-4" width="7" height="2.4"/><rect x="-8" y="-0.2" width="16" height="2.4"/><rect x="-8" y="3.6" width="7" height="2.4"/><rect x="1" y="3.6" width="7" height="2.4"/></g></g></svg>`
};

/* Spielersymbole (Sommer: Blatt, Winter: Schneeflocke), wie auf den Ereigniskarten */
const SYMBOLE = {
  S: `<svg viewBox="0 0 60 66" xmlns="http://www.w3.org/2000/svg"><path d="M30 2 56 17v32L30 64 4 49V17z" fill="#e8f3d4" stroke="#6aa63a" stroke-width="4"/><path d="M18 44C16 28 28 16 44 16c1 17-8 30-26 28z" fill="#4f9a2a" stroke="#2f6a14" stroke-width="2"/><path d="M18 44 38 24" stroke="#e8f3d4" stroke-width="2.5" fill="none"/></svg>`,
  W: `<svg viewBox="0 0 60 66" xmlns="http://www.w3.org/2000/svg"><path d="M30 2 56 17v32L30 64 4 49V17z" fill="#4b3fb0" stroke="#2a2278" stroke-width="4"/><g stroke="#fff" stroke-width="3.5" stroke-linecap="round"><path d="M30 14v38M13 23.5l34 19M13 42.5l34-19"/><path d="M30 20l-5-5M30 20l5-5M30 46l-5 5M30 46l5 5M18 26l-1 7M18 26l7-2M42 40l1-7M42 40l-7 2M18 40l-1-7M18 40l7 2M42 26l1 7M42 26l-7-2" stroke-width="2.5"/></g></svg>`
};
