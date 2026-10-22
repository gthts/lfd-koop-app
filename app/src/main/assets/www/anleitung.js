'use strict';
/* Vollständige Anleitung der kooperativen Fassung, in drei Sprachen.
   Quellen: REGELWERK.md (Fassung 2.26) und die Anleitung des Grundspiels (Pegasus Spiele / Ludonaute). */

const ANLEITUNG = {

/* ============================== Deutsch ============================== */
de: {
  titel: 'Anleitung',
  suche: 'In der Anleitung suchen …',
  hinweis: 'Doppeltippen schließt die Anleitung. Zum Lesen nach oben oder unten wischen.',
  abschnitte: [
    { h: 'Die kooperative Fassung', p: [
      'In dieser Fassung von Living Forest Duel spielen beide Naturgeister gemeinsam: Sommer und Winter kämpfen zusammen gegen den Onibi. Der Onibi trifft keine eigenen Entscheidungen; sein Verhalten wird durch einen Stapel von Ereigniskarten gesteuert, den diese App verwaltet.',
      'Es gelten alle Regeln des Grundspiels von Living Forest Duel, soweit diese Anleitung nichts anderes sagt. Alles, was vom Grundspiel abweicht, ist hier ausdrücklich beschrieben. Die Regeln des Grundspiels, die weiter gelten, sind der Vollständigkeit halber ebenfalls wiedergegeben.',
      'Die App ersetzt nicht das Brettspiel: Gespielt wird mit dem Spielmaterial am Tisch. Die App zieht die Ereigniskarten, zeigt auf dem Rundentracker die aktuelle Runde und merkt sich den Ereignisstapel samt Ablage.'
    ]},
    { h: 'So benutzt man die App', p: [
      'Zu Beginn wird die Sprache gewählt, danach eines der drei Spielziele und anschließend ein Rundentracker. Der Tracker bestimmt, wie viele Ereigniskarten in jeder Runde ausliegen und nach welcher Runde die Partie endet. Es gibt die Tracker 1 „Training“ (leichter), 2 „Standard“ (empfohlen für alle Ziele), 3 „Hardcore“ (schwieriger) und, nur beim Schützenden Dickicht, 4 „Kurzspiel“.',
      'Die halbtransparente Spielermarkierung steht auf dem Feld der aktuellen Runde.',
      'Der Ereignisstapel liegt verdeckt bereit. Mit dem Finger oder dem Stift wird eine Karte vom Stapel auf die Auslage gezogen; dort dreht sie sich um, und unter ihr erscheint ihre Bezeichnung. Die Zahl der Plätze der Auslage (1 bis 3) entspricht der Intensität der Runde.',
      'Gehört die gezogene Karte zur selben Kategorie wie eine bereits ausliegende Karte, ertönt ein „Oh-Oh“, beide Karten blinken kurz, und die neue Karte wandert auf die Ablage. Danach wird erneut gezogen. Gibt es keine Karte anderer Kategorie mehr, bleibt die gezogene Karte liegen. Die Kategorie zeigt das Onibi-Siegel oben links auf der Karte.',
      'Sind alle Plätze belegt, ist das Ziehen gesperrt, und die Schaltfläche „Nächste Runde“ wird aktiv. Die ausliegenden Karten werden in der Reihenfolge des Ziehens ausgeführt. Mit „Nächste Runde“ wandert die Markierung auf das nächste Feld, die Auslage geht auf die Ablage, und die neue Runde beginnt. In der letzten Runde erscheint „Letzte Runde!“, und die Schaltfläche ist gesperrt. Ist der Ereignisstapel leer, wird die Ablage gemischt und bildet einen neuen Stapel.',
      'Horizontales Wischen über eine ausliegende Karte wendet sie; auf ihrer Rückseite steht ihre Beschreibung in ganzen Sätzen, und erneutes Wischen dreht sie wieder um. Wischen über die Trackerkarte wendet sie und zeigt die Rundenreferenz; ein Druck auf „Nächste Runde“ dreht sie wieder nach vorne. Die Symbole „Anleitung“ und „Glossar“ öffnen diese Anleitung und das Glossar; beide lassen sich senkrecht scrollen, und ein Doppeltipp oder das Kreuz schließt sie wieder. „Neustart“ führt zurück zur Wahl des Spielziels.'
    ]},
    { h: 'Spielmaterial', p: [
      'Zum gemeinsamen Material gehören: die Onibi-Figur, 19 Flammen-Plättchen, 3 Sanki-Karten, die Hirschkarte, 18 allgemeine Tierkarten, 7 Lichtungskarten (jede mit Brandwert und Bonusaktion) sowie 24 Baumkarten, die sich in vier Arten zu je 6 Bäumen aufteilen.',
      'Für jeden Naturgeist (Sommer und Winter): 1 Startbaum, 2 Aktionsmarker, 7 Feuer-Waran-Karten und 15 Tierkarten.',
      'Zusätzlich für die kooperative Fassung: 47 Ereigniskarten und 4 Rundentracker (beide in der App).',
      'Die Tiere gehören zu drei Gruppen: Neutrale tragen kein Symbol, Einzelgänger ein schwarzes, gesellige Tiere ein weißes. Auf jeder Tierkarte stehen die Kosten und die gelieferten Elemente. Die vier Elemente heißen Licht, Spross, Wasser und Geist, und jedes gehört zu einer Aktion: Licht zum Anlocken von Tieren, Spross zum Pflanzen von Bäumen, Wasser zum Löschen von Bränden und Geist zum Bewegen des Onibi.',
      'Jede Baumkarte zeigt ihre Kosten, ein Baumelement auf dem Holzschild (immer 1 Einheit), eine Bonusaktion und die Flüsse. Der Startbaum liefert kein Element.'
    ]},
    { h: 'Spielziele und Niederlage', p: [
      'Vor der Partie wählen die Spieler gemeinsam eines von drei Spielzielen.',
      'Ewige Harmonie: Die Spieler gewinnen, sobald die Nachschubreihe vollständig leer ist. Dazu muss der Hirsch gekauft oder durch die Hirschlosung aus der Partie genommen sein, und beide persönlichen Tierstapel müssen leer sein. Bäume zählen für dieses Ziel nicht.',
      'Schützendes Dickicht: Die Spieler gewinnen, sobald jeder Spieler einen Wald aus 9 sichtbaren Bäumen in einem 3×3-Raster gebaut hat, also in beiden Wäldern. Beim Tracker „Kurzspiel“ genügt der 3×3-Wald eines Spielers. Bäume im Partnerwald zählen für den Wald, in dem sie liegen. Eine leere Nachschubreihe ist erlaubt, bringt aber keinen Sieg.',
      'Unbeugsam bis zum Schluss: Die Spieler gewinnen, wenn sie die letzte Runde des gewählten Trackers zu Ende gespielt haben. Bäume und Nachschubreihe zählen nicht.',
      'Bei Ewiger Harmonie und Schützendem Dickicht muss das Ziel erreicht sein, bevor die Partie nach der letzten Runde des Trackers endet; es kann bis zum Ende dieser letzten Runde noch erreicht werden.',
      'Die Spieler verlieren sofort, wenn eines davon eintritt:',
      '• Der Vorrat an Flammen-Plättchen ist aufgebraucht (19 Plättchen; gelöschte Plättchen kehren in den Vorrat zurück).',
      '• Ein Spieler müsste am Rundenende einen Feuer-Waran in die Ablage legen und hat keinen mehr.',
      '• Der Onibi wird über den Rand der Lichtung hinaus gedrängt.',
      '• Die letzte Runde ist zu Ende gespielt, und das Ziel (Ewige Harmonie oder Schützendes Dickicht) ist nicht erreicht.',
      'Gegenüber dem Grundspiel entfallen die Siegbedingungen „8 Flammen-Plättchen sammeln“, „Nachschubreihe nur mit Tieren der eigenen Jahreszeit“ und „Onibi zum gegnerischen Naturgeist bewegen“. Ein leerer persönlicher Tierstapel ist keine Niederlage; sein Platz in der Nachschubreihe bleibt dann leer.'
    ]},
    { h: 'Aufbau', p: [
      'Die 7 Lichtungskarten werden in einer Reihe ausgelegt, sodass Brandwerte und Bonusaktionen sichtbar sind. Die Brandwerte steigen von der Mitte nach außen. Die Onibi-Figur steht auf der mittleren Karte; auf jede der beiden benachbarten Karten kommt 1 Flammen-Plättchen.',
      'Die 24 Baumkarten werden nach ihrer Art in vier Vorratsstapel zu je 6 Bäumen geteilt. Jeder Stapel wird für sich gemischt und liegt aufgedeckt über der Lichtung bereit. Die Hirschkarte wird unter die mittlere Lichtungskarte gelegt und bildet den Grundstein der Nachschubreihe.',
      'Sommer und Winter spielen von Beginn an zusammen. Beide stapeln ihre 7 Feuer-Waran-Karten aufgedeckt neben dem eigenen Ende der Lichtung. Dann mischt jeder seine 15 Tierkarten zu einem verdeckten persönlichen Tierstapel, zieht die obersten 3 Tiere und legt sie zwischen persönlichem Tierstapel und Hirsch in die Nachschubreihe. Betragen die Kosten dieser 3 Tiere zusammen höchstens 12, schiebt man das billigste unter den Tierstapel und deckt ein neues auf; so verfährt man, bis die Gesamtkosten über 12 liegen.',
      'Jeder legt seinen Startbaum als Basis seines persönlichen Waldes aus, dazu seine 2 Aktionsmarker, und lässt Platz für die persönliche Tier-Reihe. Die restlichen Flammen-Plättchen (der gemeinsame Vorrat, insgesamt 19 Plättchen) und die 3 Sanki-Karten liegen als Vorrat oberhalb der Lichtung.',
      'Die 18 allgemeinen Tierkarten werden gemischt und bilden den gemeinsamen Nachziehstapel unterhalb der Nachschubreihe; daneben ist Platz für den gemeinsamen Ablagestapel und die gemeinsame Tier-Reihe.',
      'Zusätzlich: Der Ereignisstapel mit 47 Karten liegt bereit (die App mischt ihn). Es wird immer der komplette Stapel verwendet. Die Partie beginnt in Runde 1 mit dem ersten Feld des Rundentrackers.'
    ]},
    { h: 'Ablauf einer Runde', p: [
      'Eine Runde besteht aus fünf Schritten.',
      '1. Gleichgewicht: Zu Beginn der Runde, noch vor Feuerdruck und Ereigniskarte, wird die Differenz D bestimmt (siehe „Gleichgewicht hell und dunkel“). Die Runde beginnt mit D Einzelgängersymbolen als Vorbelastung für beide Spieler.',
      '2. Feuerdruck: Der Onibi stört das Gleichgewicht. Es werden so viele neue Flammen-Plättchen gelegt, wie der Brandwert der Lichtungskarte unter dem Onibi angibt. Sie kommen abwechselnd auf die beiden Nachbarkarten des Onibi, beginnend auf der Karte mit dem höheren Brandwert (bei Gleichstand links), auch wenn dort schon Plättchen liegen. Im Grundspiel liegt höchstens ein Plättchen je Lichtungskarte; hier dürfen es mehrere sein. Steht der Onibi an einem Rand, gilt die Lichtung als Ring: Rechts vom rechten Rand liegt die Karte am linken Rand, links vom linken Rand die Karte am rechten Rand. Dieser Umlauf gilt nur für die Nachbarkarten beim Feuerdruck, nicht für Bewegungen des Onibi.',
      '3. Ereignis: Die Ereigniskarten der Runde werden aufgedeckt und der Reihe nach ausgeführt (siehe „Ereigniskarten“ und „Intensität und Rundentracker“).',
      '4. Spielzüge: Die Spieler decken die Tiere gemeinsam auf, eine Karte nach der anderen. Sie entscheiden gemeinsam, wann sie das Aufdecken unterbrechen und Aktionsmarker einsetzen; jeder Aktionsmarker gehört einem der beiden Spieler. Es gibt keine Spielerreihenfolge und kein Abwechseln: Ein Spieler darf auch mehrere Aktionsmarker hintereinander einsetzen. Die Runde endet, wenn beide Spieler alle ihre Aktionsmarker eingesetzt (oder verloren) haben.',
      '5. Rundenende: Flammenwert gegen Wasser, danach Aufräumen (siehe „Rundenende“).'
    ]},
    { h: 'Gleichgewicht hell und dunkel', p: [
      'Gezählt werden nur die Tiere der Nachschubreihe; der Hirsch ist neutral und zählt nicht. D ist die halbe Differenz zwischen der Zahl der Sommer- und der Wintertiere dort, abgerundet; D ist also die Zahl der Tiere, die zum Ausgleich getauscht werden müssten, und beträgt höchstens 3. Beispiele: 3 zu 3 ergibt D = 0, 4 zu 2 ergibt D = 1, 5 zu 1 ergibt D = 2, 6 zu 0 ergibt D = 3.',
      'Zu Beginn jeder Runde gelten D Einzelgängersymbole für beide Spieler als bereits sichtbar. Geselligkeitssymbole heben sie wie üblich auf. Bei D = 2 genügt also ein weiteres Einzelgängersymbol für den Verlust eines Aktionsmarkers; bei D = 3 geht zu Rundenbeginn sofort ein Marker verloren.',
      'Das Gleichgewicht verschiebt sich durch den Kauf eines Tieres der Gegenjahreszeit (die Lücke wird sofort aus dem eigenen Stapel nachgelegt; die Differenz ändert sich dadurch um 2) und beim Hirsch um 1 (er selbst zählt nicht, die nachgelegte Karte schon). Außerdem verschieben es Ereigniskarten (Verdunkelung, Erhellung, Hirschlosung; sie wirken erst auf D der nächsten Runde) und leere Stapel (der Platz bleibt dann leer und zählt nicht).',
      'Feuer-Warane tragen ein Einzelgängersymbol. Liegt ein Feuer-Waran in der persönlichen Tier-Reihe eines Spielers, zählt er für diesen Spieler wie ein Einzelgängersymbol, für den Partner nicht. Der Waran-Lockruf lässt diese Symbole für eine Runde unbeachtet.'
    ]},
    { h: 'Tier aufdecken', p: [
      'Das oberste Tier des gemeinsamen Nachziehstapels wird umgedreht. Allgemeine Tiere und der Hirsch werden hinten an die gemeinsame Tier-Reihe gelegt. Trägt ein Tier oder ein Feuer-Waran das Symbol eines Naturgeistes, wandert es ans Ende von dessen persönlicher Tier-Reihe; die Elemente gehören dann nur diesem Spieler. Ist der gemeinsame Nachziehstapel aufgebraucht, mischt man den gemeinsamen Ablagestapel zu einem neuen Nachziehstapel.',
      'Zeigt das aufgedeckte Tier ein Einzelgängersymbol, prüfen beide Spieler, wie viele dieser Symbole für sie jeweils sichtbar sind, unabhängig davon, wer das Tier aufgedeckt hat. Sichtbar sind alle Symbole in der gemeinsamen Tier-Reihe und in der eigenen persönlichen Tier-Reihe, dazu die Vorbelastung durch das Gleichgewicht D und durch die Ereigniskarte Einsamkeit.',
      'Ist es für einen Spieler das 3. Einzelgängersymbol, muss er 1 seiner Aktionsmarker ungenutzt ablegen (wenn möglich); dieser Marker fällt für den Rest der Runde aus. Beim 4. Einzelgängersymbol muss er ebenfalls 1 Aktionsmarker ablegen. Jedes Geselligkeitssymbol neutralisiert 1 Einzelgängersymbol. Meistens verlieren beide Spieler 1 Aktionsmarker; es kann aber sein, dass für jeden eine andere Zahl sichtbar ist.',
      'Ist die Ereigniskarte Entfremdung aktiv, dürfen gezogene Tierkarten nur dann in die gemeinsame Tier-Reihe gelegt werden, wenn sie ein Einzelgängersymbol zeigen; andere werden abgelegt. Karten, die in einen persönlichen Bereich kommen, sind nicht betroffen.'
    ]},
    { h: 'Aktionsmarker einsetzen', p: [
      'Ein Aktionsmarker wird in die gemeinsame Tier-Reihe gelegt und zeigt von rechts nach links auf ein Element der Aktion, die man ausführen will. Der Marker liegt immer auf der zuletzt gelegten Karte der gemeinsamen Tier-Reihe; ohne Karte in der Reihe kann kein Marker gesetzt werden. Auf einer Karte darf je Element höchstens ein Marker liegen, gleich von welchem Spieler. Ausnahme ist die gebündelte Aktion. Der Marker bleibt bis zum Rundenende liegen.',
      'Zählen: Ausgehend vom Marker folgt man der Pfeilrichtung und addiert die sichtbaren Elemente der gewählten Art in der gemeinsamen Tier-Reihe; man hört auf, sobald ein anderer Marker auf diesem Element oder der Reihenanfang erreicht ist. Diese Elemente sind damit aufgebraucht: Für beide Spieler sind sie in der laufenden Runde nicht mehr nutzbar. Anschließend kommen die sichtbaren Elemente derselben Art aus der eigenen persönlichen Tier-Reihe und dem eigenen persönlichen Wald dazu. Diese bleiben auch später in der Runde nutzbar und werden bei jeder Aktion erneut gezählt.',
      'Beispiel: Man setzt einen Marker auf Wasser. Die gemeinsame Tier-Reihe liefert bis zum Marker 3 Wasser, die persönliche Tier-Reihe 1 und der Wald 2. Die Stärke beträgt 6. Die 3 Wasser der gemeinsamen Reihe sind danach verbraucht; die übrigen 3 zählen bei der nächsten Aktion wieder.',
      'Freischalten: Jeder Marker auf ein Element setzt voraus, dass seit dem letzten Marker auf dieses Element (von wem auch immer; beim ersten Marker der Runde: seit Rundenbeginn) mindestens ein Symbol dieses Elements, positiv oder negativ, in die gemeinsame Tier-Reihe gekommen ist. Eine Karte, die das Element nicht trägt, schaltet es nicht frei; ohne ein Symbol des Elements in der Reihe kann es nicht markiert werden. Als neu gelegt gelten nur Karten, die in die gemeinsame Tier-Reihe kommen; Karten für eine persönliche Reihe (etwa Feuer-Warane) schalten nicht frei. Andernfalls wählt der nächste Spieler ein anderes Element oder deckt eine Karte auf.',
      'Dies ersetzt die Regel des Grundspiels, nach der mindestens 2 neue Elemente der Art rechts vom eigenen Marker hinzugekommen sein müssen.',
      'Elemente können auch negative Werte haben (zum Beispiel −1 Wasser). Dann kann die Summe einer Aktion unter 0 fallen. Eine Aktion darf formal auch mit einer Gesamtstärke von 0 oder weniger eingesetzt werden, wenn die Markerregeln es erlauben; sie hat dann keine Wirkung und verbraucht nur den Aktionsmarker. Auch Bonusaktionen entfallen bei Stärke 0 oder weniger.'
    ]},
    { h: 'Gebündelte Aktion', p: [
      'Beide Spieler setzen gleichzeitig je einen Aktionsmarker auf dasselbe Element, und zwar auf dieselbe Karte der gemeinsamen Tier-Reihe. Beide zählen denselben Bereich der gemeinsamen Tier-Reihe, und das letzte Vorkommen des Elements vor dem Marker, also die Zahl, auf die die Marker zeigen, zählt doppelt. Beispiel: Normal ergäbe „2, 1, 2“ die Stärke 5; bei gebündelter Aktion ergibt es 2 + 1 + 2 + 2 = 7 für jeden der beiden Spieler. Bis zum letzten Marker sind alle Karten verfügbar.',
      'Die Spieler dürfen sich absprechen, wer von beiden zuerst handelt. Die Stärken werden vorher festgelegt. Die gebündelte Aktion verbraucht je einen Aktionsmarker beider Spieler. Haben beide keinen Aktionsmarker mehr, endet die Runde. Bei Stärke 0 oder weniger gilt das für jeden der beiden Spieler getrennt.'
    ]},
    { h: 'Brände löschen (Wasser)', p: [
      'Der Spieler nimmt beliebig viele Flammen-Plättchen von der Lichtung, deren Werte zusammen höchstens seiner Wasserstärke entsprechen. Jedes Plättchen zählt den Brandwert der Karte, auf der es liegt. Von derselben Karte dürfen mehrere Plättchen genommen werden. Die genommenen Plättchen kehren in den gemeinsamen Vorrat zurück.',
      'Eine Karte brennt, solange noch ein Plättchen darauf liegt oder der Onibi darauf steht. Nur wer alle Plättchen einer Karte entfernt (und der Onibi nicht auf ihr steht), nimmt sie aus der Zählung am Rundenende.',
      'Im Grundspiel gewinnt man mit 8 gesammelten Plättchen; diese Siegbedingung entfällt in der kooperativen Fassung.'
    ]},
    { h: 'Tiere anlocken (Licht)', p: [
      'Der Spieler wählt aus den offen ausliegenden Tieren der Nachschubreihe eines oder mehrere aus; ihre Kosten dürfen zusammen höchstens so hoch sein wie seine Lichtstärke. Tiere mit dem Symbol des eigenen Naturgeistes kommen ans Ende der eigenen persönlichen Tier-Reihe. Tiere mit dem Symbol des Partners sowie der Hirsch wandern auf den gemeinsamen Ablagestapel.',
      'Jedes genommene Tier wird in der Nachschubreihe sofort durch ein Tier aus dem persönlichen Tierstapel des Käufers ersetzt. Jeder Kauf verbraucht also eine Karte dieses Stapels (15 Karten, 3 davon zu Beginn in der Nachschubreihe). Das gilt auch für den Kauf von Tieren der Gegenjahreszeit. Ist der Stapel leer, bleibt der Platz leer, bis zum Ende des Spiels.',
      'Der Hirsch ist neutral, zählt nicht für das Gleichgewicht und kostet 7. Er liefert kein Element und trägt ein Geselligkeitssymbol. Nach dem Kauf liegt er auf dem gemeinsamen Ablagestapel und kann später wieder aufgedeckt werden. Sein Platz in der Nachschubreihe wird wie bei jedem Tier sofort aus dem eigenen Tierstapel des Käufers nachgelegt; ist dieser Stapel leer, bleibt der Platz leer. Die Ereigniskarte Hirschlosung kann ihn, solange er noch in der Nachschubreihe liegt, aus der Partie nehmen.',
      'Ein leerer persönlicher Tierstapel ist keine Niederlage. Die Stapel wirken als eingebaute Uhr: Kaufen verbessert das Deck, leert aber den Stapel.'
    ]},
    { h: 'Bäume pflanzen (Spross)', p: [
      'Der Spieler wählt aus den offen ausliegenden Bäumen des Vorrats einen oder mehrere; ihre Kosten dürfen zusammen höchstens so hoch sein wie seine Sprossstärke. Die Bäume müssen aus verschiedenen Vorratsstapeln stammen, also sind höchstens 4 möglich. Zuerst werden alle gewählten Bäume gepflanzt, danach folgen die dabei entstandenen Bonusaktionen.',
      'Alle Flüsse einer Baumkarte müssen stets an den See des Startbaums angeschlossen sein, entweder unmittelbar oder über weitere Baumkarten. Der Startbaum darf an einer beliebigen Stelle des 3×3-Rasters liegen. Baumkarten dürfen nicht gedreht werden; alle Bäume stehen mit der Krone nach oben. Ein Wald darf höchstens 5 × 5 Felder umfassen.',
      'Ein Baum, der nicht passend platziert werden kann (kein erlaubter Platz, kein Fluss zur Quelle), geht verloren; das ist ein Fehlkauf, und der Baum kehrt nicht in den Vorratsstapel zurück. Man darf auch Bäume kaufen, für die kein Platz frei ist, etwa um den nächsten Baum des Vorratsstapels freizulegen.',
      'Überdecken: Ein Baum im Wald, in den gepflanzt wird (eigener Wald oder Partnerwald), der nicht der Startbaum ist, darf von einem neuen Baum bedeckt werden, sofern die Pflanzregeln eingehalten bleiben. Ein Platz gilt als belegt, egal wie hoch der Stapel ist. Mehrere übereinanderliegende Bäume bilden einen Baumstapel; nur der oberste ist sichtbar und wirksam. Der bedeckte Baum büßt seine Wirkung ein, dafür kann der neue Baum erneut Bonusaktionen auslösen. Bedeckte Bäume liefern keine Elemente und sind vor Ereigniskarten sicher.',
      'Jeder Baum im Wald, außer dem Startbaum, liefert dauerhaft ein zusätzliches Element, solange er sichtbar bleibt. Die Elementfarben: gelb Licht, rot Spross, türkis Wasser, violett Geist.',
      'Partnerwald: Gekaufte Bäume dürfen in den eigenen Wald oder in den Wald des Partners gepflanzt werden. Je Pflanzen-Aktion darf höchstens ein Baum beim Partner stehen, und nur, wenn mindestens ein Baum derselben Aktion in den eigenen Wald kommt; die Reihenfolge ist gleichgültig. Ein einzelner gekaufter Baum kommt also immer in den eigenen Wald. Die üblichen Pflanzregeln gelten für den Wald, in den der Baum kommt. Eine dabei ausgelöste Bonusaktion führt der Spieler aus, der pflanzt, mit seinen eigenen Elementen. Für „Schützendes Dickicht“ zählen die Bäume in dem Wald, in dem sie liegen; jeder Wald braucht seinen eigenen 3×3-Block (beim Kurzspiel genügt einer). Je nach Tracker ist das Pflanzen im Partnerwald erst ab einer bestimmten Runde erlaubt.'
    ]},
    { h: 'Onibi bewegen (Geist)', p: [
      'Der Onibi wird in eine beliebige Richtung um höchstens so viele Schritte (= Lichtungskarten) bewegt, wie der Spieler Geist hat. Nicht alle Geistpunkte müssen verwendet werden, aber der Onibi muss bewegt werden, wenn die Stärke es zulässt (mindestens 1 Feld); bei Stärke 0 oder weniger bleibt nur der verbrauchte Aktionsmarker. Meist wird man zur Mitte gehen.',
      'Danach wird sofort die Bonusaktion der Karte ausgeführt, auf der der Onibi landet (Sanki nehmen, löschen, anlocken oder pflanzen). Gibt es dafür kein verfügbares Element, entfällt sie.',
      'Würde der Onibi die Lichtung verlassen, ist die Partie verloren.'
    ]},
    { h: 'Bonusaktionen und Sanki', p: [
      'Auf der Lichtung und auf jeder Baumkarte ist eine Bonusaktion abgebildet: Sanki-Karte nehmen, Brände löschen, Tiere anlocken oder Bäume pflanzen. Die Bonusaktion eines Baums wird nur beim Pflanzen ausgelöst (nicht bei der Wurzelwanderung), und zwar einmal für jedes neu komplettierte Symbol: Passen die Hälften an der Kante zwischen dem neuen Baum und einem benachbarten Baum zusammen, gibt es eine Bonusaktion; hat der neue Baum zwei passende Nachbarn, gibt es zwei. Es kommt nicht darauf an, an welcher der vier Kanten sich zwei halbe Symbole schließen. Das Symbol gehört zur Baumkarte und ist nicht mit dem Baumelement auf dem Holzschild zu verwechseln.',
      'Wie im Grundspiel werden erst alle Bäume der Pflanzen-Aktion gepflanzt; danach führt der Pflanzende die entstandenen Bonusaktionen nacheinander aus, in einer frei gewählten Reihenfolge, jeweils mit den dann verfügbaren Elementen, auch denen der neu gepflanzten Bäume. Dafür zählt man die Elemente aus gemeinsamer Tier-Reihe, persönlicher Tier-Reihe und Wald zusammen; Elemente der gemeinsamen Tier-Reihe bleiben weiter verfügbar. Fehlt das nötige Element, entfällt die Bonusaktion.',
      'Sanki-Karten: Erlaubt eine Bonusaktion, 1 Sanki-Karte zu nehmen, nimmt man sie aus dem Vorrat. Sind alle drei im Spiel, darf ein Spieler dem anderen eine nur mit dessen Erlaubnis abnehmen.',
      'Einsatz einer Sanki-Karte: Jeder Spieler darf mit seinem Sanki auf die zuletzt aufgedeckte Karte reagieren, bevor die nächste aufgedeckt wird; es muss nicht der Spieler sein, der „aufgedeckt“ hat. Entweder legt man einen gerade aufgedeckten Feuer-Waran zurück auf den Stapel seiner Jahreszeit; das gilt als Belohnung. Oder man legt ein eben aufgedecktes Tier (so, wie es in die gemeinsame oder eine persönliche Tier-Reihe gelegt wurde) unter den Nachziehstapel und zieht neu. Ein Aktionsmarker, der durch das Einzelgängersymbol des ersten Tiers schon verloren ging, bleibt verloren. Die eingesetzte Sanki-Karte kehrt in den Vorrat zurück. Der sofortige Aktionsmarker des Grundspiels gilt in der kooperativen Fassung nicht.'
    ]},
    { h: 'Rundenende', p: [
      'Sobald beide Spieler keinen Aktionsmarker mehr besitzen, endet die Runde. Es folgen diese Schritte.',
      '1. Flammenwert: Alle brennenden Lichtungskarten tragen mit ihrem Brandwert zur Summe bei. Brennend ist eine Karte, solange ein Flammen-Plättchen auf ihr liegt oder der Onibi auf ihr steht. Diese Summe ist der Flammenwert der Runde. Jeder Spieler stellt seine eigene Wasserzahl dagegen: gezählt wird Wasser im persönlichen Wald, in der persönlichen Tier-Reihe und in der gemeinsamen Tier-Reihe rechts von dem eigenen Marker, der dort zuletzt gelegt wurde. Ist sie gleich oder höher, geschieht nichts. Ist sie niedriger, legt der Spieler für jede brennende Karte einen eigenen Feuer-Waran in die Ablage; reichen seine Warane nicht aus, ist die Partie verloren.',
      'Danach werden anders als im Grundspiel keine Plättchen neben dem Onibi gelegt; das geschieht beim Feuerdruck der nächsten Runde.',
      '2. Aufräumen: Beide Spieler nehmen ihre 2 Aktionsmarker zurück. Alle Karten der gemeinsamen Tier-Reihe und beider persönlicher Tier-Reihen kommen auf den gemeinsamen Ablagestapel. Der Rundentracker rückt ein Feld weiter. Ist der Nachziehstapel dabei leer, wird die Ablage gemischt.',
      'Ist der Ereignisstapel leer, wird die Ablage gemischt. Die Partie endet nach der letzten Runde des Trackers, und zwar erst nach dem Rundenende, also nach der Prüfung von Flammenwert gegen Wasser.'
    ]},
    { h: 'Ereigniskarten', p: [
      'Die Ereigniskarten tragen keinen Text, nur Zahlen und Symbole. Das Ziel bestimmt eine feste Zielregel für den ungünstigsten Fall; der Onibi trifft keine Entscheidungen. Entscheidungen, die die Regeln den Spielern überlassen (etwa bei Gleichstand), treffen die Spieler gemeinsam. Jede Karte gehört zu einer Art (zum Beispiel Baumfäule). Zwei Karten gleicher Art liegen nie in derselben Runde aus.',
      'Onibi-Marsch: Der Onibi läuft 1 bis 3 Schritte zum näheren Rand der Lichtung, nie zur Mitte hin. Steht er genau in der Mitte, entscheidet das Spielersymbol: Sommer läuft zum linken, Winter zum rechten Ende. Überschreitet er den Rand, ist die Partie verloren.',
      'Verdunkelung und Erhellung: Das Symbol nennt die gestärkte Jahreszeit (Mond ist Winter, Sonne ist Sommer). Aus der Nachschubreihe wird das günstigste Tier der anderen Jahreszeit entfernt und durch das oberste Tier des persönlichen Stapels der gestärkten Jahreszeit ersetzt, solange dadurch das Ungleichgewicht größer wird. Bei gleichen niedrigsten Kosten wählen die Spieler. Sonst bleibt die Karte ohne Wirkung.',
      'Baumfäule: Der betroffene Spieler muss einen Baum vernichten, dessen Baumwert mindestens 2 beträgt oder dessen Baumelement dem der Karte entspricht (nicht den Startbaum). Sie trifft nur den obersten Baum eines Stapels; der darunterliegende wird wieder wirksam. Bäume, die dadurch von der Quelle getrennt werden, sterben mit ab: Auf jedem abgetrennten Platz sterben die Bäume von oben weg, bis die oberste verbleibende Karte wieder mit der Quelle verbunden ist (oder der Platz leer ist). Überdeckte Bäume sind geschützt. Findet sich kein passender Baum, geschieht nichts.',
      'Funkenflug: 1 bis 3 zusätzliche Flammen-Plättchen werden wie beim Feuerdruck gelegt, gleich danach in derselben Runde. Reicht der Vorrat nicht, ist die Partie verloren.',
      'Einsamkeit: 1 oder 2 zusätzliche Einzelgängersymbole zählen in dieser Runde für beide Spieler, zusätzlich zur Vorbelastung durch D.',
      'Entfremdung: Gezogene Tierkarten dürfen nur in die gemeinsame Tier-Reihe, wenn sie ein Einzelgängersymbol tragen; andere werden abgelegt. Karten für den persönlichen Bereich sind nicht betroffen.',
      'Onibi-Besessenheit: Der Onibi und jedes Flammen-Plättchen rücken ein Feld in Richtung des Spielers auf der Karte (Sommer nach links, Winter nach rechts). Plättchen, die über den Rand geschoben werden, springen auf die andere Seite. Wird der Onibi über den Rand geschoben, ist die Partie verloren. Der Bonus des Zielfeldes wird nicht ausgelöst.',
      'Hirschlosung: Sonne (Sommer) oder Mond (Winter) auf der Karte. Liegt der Hirsch noch auf seinem Platz in der Mitte der Nachschubreihe, wird er aus der Partie genommen (er kann dann nicht mehr angeworben werden), und die oberste Tierkarte vom Tierstapel dieser Jahreszeit wird an seine Stelle gelegt; ist dieser Stapel leer, bleibt der Platz leer. Liegt der Hirsch nicht mehr dort, geschieht nichts. Die gelegte Karte verändert die Differenz der Tierzahlen um 1; das wirkt sich in der nächsten Runde auf D aus.',
      'Wurzelwanderung: Der betroffene Spieler (Sommer, Winter oder der mit dem größeren Wald, bei Gleichstand der Sommer) wählt einen beliebigen Baumstapel außer dem Startbaum und muss ihn auf einen anderen freien Platz versetzen, an dem er nach den Pflanzregeln erlaubt ist (Fluss zur Quelle, höchstens 5 × 5). Ein Baum, der über anderen liegt, nimmt den ganzen Baumstapel mit. Findet der Baumstapel keinen solchen Platz, vertrocknet er. Danach vertrocknen auch alle Bäume, die ohne Verbindung zur Quelle zurückbleiben, es sei denn, der versetzte Baumstapel bindet sie wieder an; auf jedem betroffenen Platz sterben die Bäume von oben weg, bis eine Verbindung besteht. Besteht der Wald nur aus dem Startbaum, geschieht nichts. Das Versetzen löst keine Bonusaktion aus.',
      'Waran-Lockruf: In dieser Runde werden die Einzelgängersymbole auf ausgelegten Feuer-Waranen ignoriert. Die Wirkung gilt ab dem Ziehen der Karte bis zum Rundenende.',
      'Ruhe: Keine Wirkung. Die Karte steuert nur die Schwankung im Stapel.',
      'Der Ereignisstapel hat 47 Karten: Baumfäule 10, Onibi-Marsch 8, Verdunkelung und Erhellung 6, Funkenflug 5, Ruhe 4, Wurzelwanderung 3, Einsamkeit 3, Entfremdung 2, Onibi-Besessenheit 2, Hirschlosung 2, Waran-Lockruf 2.'
    ]},
    { h: 'Intensität und Rundentracker', p: [
      'Der Druck wächst mit der Rundenzahl. Ein Rundentracker zeigt, wie viele Ereigniskarten die Runde bringt. Die Karten einer Runde müssen aus verschiedenen Kategorien stammen. Wird eine Karte einer Kategorie gezogen, die schon ausliegt, kommt sie auf die Ablage, und es wird nachgezogen. Gibt es keine Karte anderer Kategorie mehr, gilt die gezogene Karte. Die Karten werden nacheinander ausgeführt. Ist der Ereignisstapel leer, wird die Ablage gemischt; der Stapel beendet die Partie dann nicht mehr.',
      'Tracker 1 „Training“: 2 Karten ab Runde 5, 3 ab Runde 9, Partnerwald ab Runde 1, Ende nach Runde 12. Tracker 2 „Standard“: 2 Karten ab Runde 3, 3 ab Runde 7, Partnerwald ab Runde 5, Ende nach Runde 12. Tracker 3 „Hardcore“: 2 Karten ab Runde 2, 3 ab Runde 5, Partnerwald ab Runde 6, Ende nach Runde 12. Tracker 4 „Kurzspiel“ (nur Schützendes Dickicht): 2 Karten ab Runde 2, 3 ab Runde 4, Partnerwald ab Runde 5, höchstens 6 Runden; als Ziel genügt der 3×3-Wald eines Spielers.',
      'Der Standard-Tracker ist die Voreinstellung für jedes Spielziel. Wer bis zum Ende der letzten Runde durchhält, gewinnt bei „Unbeugsam bis zum Schluss“; bei „Ewige Harmonie“ und „Schützendes Dickicht“ ist die Partie verloren, wenn das Ziel nach der letzten Runde nicht erreicht ist.'
    ]},
    { h: 'Schwierigkeitsgrade und Varianten', p: [
      'Der Schwierigkeitsgrad wird über den Tracker gewählt: Training ist leichter (mehr Ereigniskarten erst ab Runde 5 und 9, Partnerwald von Anfang an), Standard ist die Voreinstellung, Hardcore bringt früher mehr Ereigniskarten und erlaubt den Partnerwald erst ab Runde 6. Das Kurzspiel ist keine Stufe, sondern eine kurze Partie fürs Schützende Dickicht.',
      'Onibi-Fluch (optionale Variante, nicht in der App enthalten, kombinierbar mit jedem Tracker): Sie erhöht den Schwierigkeitsgrad deutlich.',
      '• Wer ihn erhält: Der Fluch liegt anfangs bei niemandem. Wer den Onibi mit einer Geist-Aktion bewegt, erhält ihn, nachdem die Bonusaktion der Landekarte ausgeführt ist; hat ihn der Partner, wechselt er zum Bewegenden. Ereigniskarten vergeben den Fluch nicht.',
      '• Wirkung: Solange ein Spieler verflucht ist, darf er die Aktion nicht ausführen, die zur Lichtungskarte unter dem Onibi gehört (Löschen mit Wasser, Anlocken mit Licht, Pflanzen mit Spross). Das gilt für Aktionsmarker, für Bonusaktionen aus dem Wald und für die Bonusaktion beim Bewegen des Onibi. Sanki und die Geist-Aktion werden nie gesperrt.',
      '• Entfernen: Mit Geist-Stärke 3 kann der Träger seinen eigenen Fluch entfernen. Mit dem Fluch gibt es zwei Geist-Aktionen, „Onibi bewegen“ und „Fluch entfernen“; eine von beiden ist Pflicht, sofern die Stärke es zulässt.'
    ]}
  ]
},

/* ============================== Englisch ============================== */
en: {
  titel: 'Rules',
  suche: 'Search the rules …',
  hinweis: 'Double-tap to close the rules. Swipe up or down to read.',
  abschnitte: [
    { h: 'The cooperative variant', p: [
      'In this variant of Living Forest Duel both nature spirits play together: Summer and Winter fight side by side against the Onibi. The Onibi makes no decisions of its own; its behaviour is controlled by a deck of event cards that this app manages.',
      'All rules of the base game of Living Forest Duel apply unless these rules say otherwise. Everything that differs from the base game is described here explicitly. For completeness, the base-game rules that still apply are repeated as well.',
      'The app does not replace the board game: you play with the components on the table. The app draws the event cards, shows the current round on the round tracker, and keeps track of the event deck and its discard pile.'
    ]},
    { h: 'Using the app', p: [
      'At the start you choose the language, then one of three goals, and then a round tracker. The tracker determines how many event cards are shown in each round and after which round the game ends. There are tracker 1 “Training” (easier), 2 “Standard” (recommended for all goals), 3 “Hardcore” (harder) and, for Protective Thicket only, 4 “Short game”.',
      'The semi-transparent player marker sits on the field of the current round.',
      'The event deck lies face down. Using a finger or stylus you drag a card from the deck onto the display; it turns over there and its name appears below it. The number of places in the display (1 to 3) matches the intensity of the round.',
      'If the drawn card is of the same category as a card already in the display, an “uh-oh” sounds, both cards flash briefly, and the new card moves to the discard pile. Then you draw again. If no card of another category is left, the drawn card stays. The Onibi seal at the top left of the card shows the category.',
      'When all places are filled, drawing is blocked and the “Next round” button becomes active. The cards in the display are carried out in the order they were drawn. With “Next round” the marker moves to the next field, the display goes to the discard pile, and the new round begins. In the last round “Last round!” appears and the button is blocked. If the event deck is empty, the discard pile is shuffled and forms a new deck.',
      'Swiping horizontally across a card in the display turns it over; its back shows its description in full sentences, and swiping again turns it back. Swiping across the tracker card turns it over and shows the round reference; pressing “Next round” turns it back to the front. The “Rules” and “Glossary” icons open these rules and the glossary; both can be scrolled vertically, and a double-tap or the cross closes them. “Restart” returns to the choice of the goal.'
    ]},
    { h: 'Components', p: [
      'Shared: 7 clearing cards (with burn value and bonus action), 18 general animal cards, 1 stag card, 3 Sanki cards, 24 tree cards (4 sets of 6 trees of the same kind), 1 Onibi figure and 19 flame tokens.',
      'For each nature spirit (Summer and Winter): 1 starting tree, 2 action markers, 7 fire monitor lizard cards and 15 animal cards.',
      'Additionally for the cooperative variant: 47 event cards and 4 round trackers (both in the app).',
      'There are three kinds of animals: neutral animals without a symbol, loners with a black symbol, and sociable animals with a white symbol. Each animal shows its cost and the elements it provides. There are four elements: light, sprout, water and spirit. Each element allows one action: light to lure animals, sprout to plant trees, water to extinguish fires and spirit to move the Onibi.',
      'Each tree card shows its cost, a tree element on the wooden sign (always 1 unit), a bonus action and the rivers. The starting tree provides no element.'
    ]},
    { h: 'Goals and defeat', p: [
      'Before the game the players jointly choose one of three goals.',
      'Eternal Harmony: The players win as soon as the supply row is completely empty. For this the stag must have been bought or removed from the game by Deer Droppings, and both personal animal piles must be empty. Trees do not count for this goal.',
      'Protective Thicket: The players win as soon as every player has built a forest of 9 visible trees in a 3×3 grid, that is, in both forests. With the tracker “Short game” the 3×3 forest of one player is enough. Trees in the partner forest count for the forest they lie in. An empty supply row is allowed but does not win.',
      'Unyielding to the End: The players win when they have played the last round of the chosen tracker to its end. Trees and the supply row do not count.',
      'With Eternal Harmony and Protective Thicket the goal must be reached before the game ends after the last round of the tracker; it can still be reached until the end of that last round.',
      'The players lose immediately if one of these happens:',
      '• The supply of flame tokens runs out (19 tokens; extinguished tokens return to the supply).',
      '• A player would have to put a fire monitor lizard into the discard pile at the end of a round and has none left.',
      '• The Onibi is pushed beyond the edge of the clearing.',
      '• The last round has been played to its end and the goal (Eternal Harmony or Protective Thicket) has not been reached.',
      'Compared with the base game the victory conditions “collect 8 flame tokens”, “supply row with only animals of your own season” and “move the Onibi to the opposing nature spirit” no longer apply. An empty personal animal pile is not a defeat; its place in the supply row simply stays empty.'
    ]},
    { h: 'Setup', p: [
      'The 7 clearing cards are laid out in a row so that burn values and bonus actions are visible. The burn values rise from the middle outward. The Onibi figure stands on the middle card; 1 flame token goes on each of the two neighbouring cards.',
      'The 24 tree cards are sorted by kind into 4 supply piles of 6 trees, shuffled separately, and placed face up above the clearing as the supply. The stag card goes below the middle clearing card as the base of the supply row.',
      'Summer and Winter play together from the start. Each lays out their 7 fire monitor lizard cards face up as a pile at their end of the clearing. Each shuffles their 15 animal cards face down into a personal animal pile and reveals the top 3 animals; they go side by side into the supply row between the personal animal pile and the stag. If the total cost of these 3 animals is 12 or less, the animal with the lowest cost goes under the pile and a new one is revealed; repeat until the total is greater than 12.',
      'Each lays out their starting tree as the base of their personal forest, plus their 2 action markers, and leaves room for the personal animal row. The remaining flame tokens (the shared supply, 19 tokens in total) and the 3 Sanki cards lie as a supply above the clearing.',
      'The 18 general animal cards are shuffled and form the shared draw pile below the supply row; next to it there is room for the shared discard pile and the shared animal row.',
      'In addition: the event deck of 47 cards is ready (the app shuffles it). The complete deck is always used. The game begins in round 1 on the first field of the round tracker.'
    ]},
    { h: 'Course of a round', p: [
      'A round consists of five steps.',
      '1. Balance: At the start of the round, before fire pressure and event card, the difference D is determined (see “Light and dark balance”). The round begins with D loner symbols as a preload for both players.',
      '2. Fire pressure: The Onibi disturbs the balance. As many new flame tokens are placed as the burn value of the clearing card under the Onibi shows. They go alternately on the two neighbouring cards of the Onibi, starting with the card with the higher burn value (the left one on a tie), even if tokens already lie there. In the base game there is at most one token per clearing card; here there may be several. If the Onibi stands at an edge, the clearing counts as a ring: to the right of the right edge lies the card at the left edge, to the left of the left edge the card at the right edge. This wrap-around applies only to the neighbouring cards for fire pressure, not to movements of the Onibi.',
      '3. Event: The event cards of the round are revealed and carried out one after another (see “Event cards” and “Intensity and round trackers”).',
      '4. Turns: The players reveal the animals together, one card after the other. They decide together when to pause revealing and place action markers instead; every action marker belongs to one of the two players. There is no player order and no alternating: a player may also place several action markers in a row. The round ends when both players have placed (or lost) all their action markers.',
      '5. End of round: flame value against water, then cleaning up (see “End of round”).'
    ]},
    { h: 'Light and dark balance', p: [
      'Only the animals of the supply row are counted; the stag is neutral and does not count. D is half the difference between the number of summer and winter animals there, rounded down; D is therefore the number of animals that would have to be swapped to even things out, and is at most 3. Examples: 3 to 3 gives D = 0, 4 to 2 gives D = 1, 5 to 1 gives D = 2, 6 to 0 gives D = 3.',
      'At the start of each round D loner symbols count as already visible for both players. Sociability symbols cancel them as usual. With D = 2 one more loner symbol is enough to lose an action marker; with D = 3 a marker is lost immediately at the start of the round.',
      'The balance shifts by buying an animal of the opposite season (the gap is refilled at once from your own pile; the difference changes by 2) and, with the stag, by 1 (the stag itself does not count, the refilled card does). It is also shifted by event cards (Darkening, Brightening, Deer Droppings; they only affect D in the next round) and by empty piles (the place stays empty and does not count).',
      'Fire monitor lizards carry a loner symbol. If a fire monitor lizard lies in a player’s personal animal row, it counts as a loner symbol for that player, not for the partner. The Monitor Lizard Call ignores these symbols for one round.'
    ]},
    { h: 'Reveal an animal', p: [
      'The top animal of the shared draw pile is revealed. A general animal or the stag goes to the end of the shared animal row. An animal or fire monitor lizard with a nature spirit’s symbol goes to the end of that spirit’s personal animal row; its elements are available only to that player. If the shared draw pile is empty, the shared discard pile is shuffled and forms a new draw pile.',
      'If the revealed animal shows a loner symbol, both players check how many of these symbols are visible to each of them, regardless of who revealed the animal. Visible are all symbols in the shared animal row and in your own personal animal row, plus the preload from the balance D and from the event card Loneliness.',
      'If it is a player’s 3rd loner symbol, that player must discard 1 of their action markers unused (if possible); that marker is out of play for the rest of the round. If it is the 4th loner symbol, they must likewise discard 1 action marker. Each sociability symbol cancels 1 loner symbol. Usually both players lose 1 action marker; but each player may see a different number.',
      'While the event card Estrangement is active, drawn animal cards may only be placed in the shared animal row if they show a loner symbol; others are discarded. Cards that go to a personal area are not affected.'
    ]},
    { h: 'Place an action marker', p: [
      'An action marker is placed in the shared animal row and points from right to left at an element of the action you want to carry out. The marker always lies on the most recently placed card of the shared animal row; with no card in the row, no marker can be placed. On one card there may be at most one marker per element, whichever player it belongs to. The exception is the bundled action. The marker stays until the end of the round.',
      'Counting: Starting at the marker, count in the arrow direction all visible elements of that kind in the shared animal row until you meet another marker on this element or reach the start of the row. These elements of the shared animal row are used up; neither player can use them again later in this round. Then add all further elements of that kind visible in your own personal animal row and your own personal forest. These remain available later in the round and are counted anew with every action.',
      'Example: You place a marker on water. The shared animal row provides 3 water up to the marker, your personal animal row 1 and your forest 2. The strength is 6. The 3 water of the shared row are used up afterwards; the other 3 count again for the next action.',
      'Unlocking: Every marker on an element requires that at least one symbol of that element, positive or negative, has come into the shared animal row since the last marker on that element (by whomever; for the first marker of the round: since the start of the round). A card that does not carry the element does not unlock it; without a symbol of the element in the row it cannot be marked. Only cards that go into the shared animal row count as newly placed; cards for a personal row (such as fire monitor lizards) do not unlock. Otherwise the next player chooses another element or reveals a card.',
      'This replaces the base-game rule that at least 2 new elements of that kind must have been added to the right of your own marker.',
      'Elements can also have negative values (for example −1 water). The total of an action can then fall below 0. An action may formally be used with a total strength of 0 or less if the marker rules allow it; it then has no effect and only uses up the action marker. Bonus actions are also skipped at strength 0 or less.'
    ]},
    { h: 'Bundled action', p: [
      'Both players place one action marker each on the same element, on the same card of the shared animal row, at the same time. Both count the same section of the shared animal row, and the last occurrence of the element before the marker, that is, the number the markers point to, counts double. Example: normally “2, 1, 2” gives strength 5; with a bundled action it gives 2 + 1 + 2 + 2 = 7 for each of the two players. All cards up to the last marker are available.',
      'The players may agree which of the two acts first. The strengths are determined beforehand. The bundled action uses up one action marker of each player. If neither has an action marker left, the round ends. At strength 0 or less this applies to each of the two players separately.'
    ]},
    { h: 'Extinguish fires (water)', p: [
      'The player takes any number of flame tokens from the clearing whose values together are at most their water strength. Each token counts the burn value of the card it lies on. Several tokens may be taken from the same card. The taken tokens return to the shared supply.',
      'A card burns as long as a token still lies on it or the Onibi stands on it. Only by removing all tokens from a card (and with the Onibi not standing on it) do you take it out of the count at the end of the round.',
      'In the base game you win with 8 collected tokens; this victory condition does not apply in the cooperative variant.'
    ]},
    { h: 'Lure animals (light)', p: [
      'The player takes 1 or more face-up animals of their choice from the supply row whose costs together are at most their light strength. Animals with their own nature spirit’s symbol go to the end of their personal animal row. Animals with the partner’s symbol and the stag go to the shared discard pile.',
      'Each animal taken is replaced in the supply row at once by an animal from the buyer’s personal animal pile. So every purchase uses up one card of this pile (15 cards, 3 of them in the supply row at the start). This also applies to buying animals of the opposite season. If the pile is empty, the place stays empty until the end of the game.',
      'The stag is neutral, does not count for the balance and costs 7. It provides no element and carries a sociability symbol. After purchase it lies on the shared discard pile and can be revealed again later. Its place in the supply row is refilled at once from the buyer’s own animal pile, as with any animal; if that pile is empty, the place stays empty. The event card Deer Droppings can remove it from the game as long as it is still in the supply row.',
      'An empty personal animal pile is not a defeat. The piles work as a built-in clock: buying improves the deck but empties the pile.'
    ]},
    { h: 'Plant trees (sprout)', p: [
      'The player takes 1 or more face-up trees of their choice from the supply whose costs together are at most their sprout strength. Several trees must come from different supply piles; so at most 4 trees are possible. All trees taken are planted, and then the bonus actions that arose are carried out.',
      'Every river on a tree card must be connected to the lake of the starting tree at all times, directly or across several tree cards. The starting tree may sit at any position of the 3×3 grid. Tree cards must not be rotated; all trees stand with the crown up. A forest may span at most 5 × 5 fields.',
      'A tree that cannot be placed properly (no permitted place, no river to the source) is lost; this is a wasted purchase, and the tree does not return to the supply pile. You may also buy trees for which no place is free, for example to uncover the next tree of the supply pile.',
      'Covering: A tree in the forest being planted into (your own or your partner\'s), except the starting tree, may be covered with a new tree, observing the rules. A place counts as occupied however high the stack is. Several trees lying on top of each other form a tree stack; only the top one is visible and effective. A covered tree loses its effect, but the new tree can trigger bonus actions again. Covered trees provide no elements and are not hit by event cards.',
      'Every tree in the forest except the starting tree permanently provides one additional element as long as it stays visible. Element colours: yellow light, red sprout, turquoise water, violet spirit.',
      'Partner forest: Bought trees may be planted in your own forest or in your partner’s forest. Per planting action at most one tree may go to the partner, and only if at least one tree of the same action goes into your own forest; the order does not matter. A single bought tree therefore always goes into your own forest. The usual planting rules apply to the forest the tree goes into. A bonus action triggered in this way is carried out by the player who plants, using their own elements. For “Protective Thicket” trees count in the forest they lie in; every forest needs its own 3×3 block (with the short game one is enough). Depending on the tracker, planting in the partner forest is only allowed from a certain round.'
    ]},
    { h: 'Move the Onibi (spirit)', p: [
      'The Onibi is moved in any direction by at most as many steps (= clearing cards) as the player has spirit. Not all spirit points have to be used, but the Onibi must be moved if the strength allows it (at least 1 field); at strength 0 or less only the used action marker remains. Usually you will move toward the middle.',
      'Then the bonus action of the card on which the Onibi lands is carried out at once (take Sanki, extinguish, lure or plant). If no element is available for it, it is skipped.',
      'If the Onibi would leave the clearing, the game is lost.'
    ]},
    { h: 'Bonus actions and Sanki', p: [
      'A bonus action is shown on the clearing and on every tree card: take a Sanki card, extinguish fires, lure animals or plant trees. A tree’s bonus action is triggered only when planting (not by Root Migration), once for every newly completed symbol: if the halves match on the edge between the new tree and a neighbouring tree, there is one bonus action; if the new tree has two matching neighbours, there are two. It does not matter on which of the four edges two half symbols close. The symbol belongs to the tree card and must not be confused with the tree element on the wooden sign.',
      'As in the base game, all trees of the planting action are planted first; then the planting player carries out the bonus actions that arose one after another, in any order they choose, each with the elements then available, including those of the newly planted trees. For this you add up the elements from the shared animal row, the personal animal row and the forest; elements of the shared animal row remain available. If the necessary element is missing, the bonus action is skipped.',
      'Sanki cards: When a bonus action grants a Sanki card, you draw it from the supply. If all three are in play, a player may take one from the other only with their permission.',
      'Using a Sanki card: Either player may react with their Sanki to the card revealed last, before the next one is revealed; it does not have to be the player who “revealed”. Either you put a fire monitor lizard that has just been revealed back onto the pile of its season; this counts as a reward. Or you put an animal that has just been revealed (as it was placed in the shared or a personal animal row) under the draw pile and draw again. An action marker that was already lost through the first animal’s loner symbol stays lost. The Sanki card used returns to the supply. The immediate action marker of the base game does not apply in the cooperative variant.'
    ]},
    { h: 'End of round', p: [
      'As soon as both players have no action marker left, the round ends. These steps follow.',
      '1. Flame value: Add up the burn values of all clearing cards that are on fire; a card is on fire if a flame token lies on it or the Onibi stands on it. The sum is the flame value of the round. Both players compare their own water total (personal forest, personal animal row and the shared animal row to the right of their most recently placed marker there) with the flame value. If it is equal or higher, nothing happens. If it is lower, the player puts one of their own fire monitor lizards into the discard pile for each burning card; if they do not have enough, the game is lost.',
      'Afterwards, unlike in the base game, no tokens are placed next to the Onibi; that happens at the fire pressure of the next round.',
      '2. Clean up: Both players take their 2 action markers back. All cards of the shared animal row and both personal animal rows go to the shared discard pile. The round tracker advances one field. If the draw pile is empty by then, the discard pile is shuffled.',
      'If the event deck is empty, the discard pile is shuffled. The game ends after the last round of the tracker, and only after the end of the round, that is, after the check of flame value against water.'
    ]},
    { h: 'Event cards', p: [
      'The event cards carry no text, only numbers and symbols. The goal determines a fixed target rule for the worst case; the Onibi makes no decisions. Decisions that the rules leave to the players (for example on a tie) are made by the players together. Every card belongs to a kind (for example Tree Blight). Two cards of the same kind never lie out in the same round.',
      'Onibi March: The Onibi walks 1 to 3 steps toward the nearer edge of the clearing, never toward the middle. If it stands exactly in the middle, the player symbol decides: Summer walks to the left end, Winter to the right end. If it crosses the edge, the game is lost.',
      'Darkening and Brightening: The symbol names the strengthened season (moon is winter, sun is summer). The cheapest animal of the other season is removed from the supply row and replaced by the top animal of the strengthened season’s personal pile, as long as this widens the imbalance. If the lowest costs are equal, the players choose. Otherwise the card has no effect.',
      'Tree Blight: The affected player must destroy a tree whose tree value is at least 2 or whose tree element matches that of the card (not the starting tree). It hits only the top tree of a stack; the tree beneath becomes effective again. Trees cut off from the source by this die as well: on each cut-off place the trees die from the top down until the remaining top card is connected to the source again (or the place is empty). Covered trees are protected. If no suitable tree exists, nothing happens.',
      'Flying Sparks: 1 to 3 additional flame tokens are placed as in fire pressure, right after it in the same round. If the supply is not enough, the game is lost.',
      'Loneliness: 1 or 2 additional loner symbols count for both players this round, in addition to the preload from D.',
      'Estrangement: Drawn animal cards may only go into the shared animal row if they carry a loner symbol; others are discarded. Cards for the personal area are not affected.',
      'Onibi Obsession: The Onibi and every flame token move one field toward the player on the card (Summer to the left, Winter to the right). Tokens pushed over the edge jump to the other side. If the Onibi is pushed over the edge, the game is lost. The bonus of the target field is not triggered.',
      'Deer Droppings: Sun (Summer) or moon (Winter) on the card. If the stag is still in its place in the middle of the supply row, it is removed from the game (it can then no longer be recruited), and the top animal card of that season’s animal pile is placed in its spot; if that pile is empty, the place stays empty. If the stag is no longer there, nothing happens. The card placed changes the difference between the animal counts by 1; this affects D in the next round.',
      'Root Migration: The affected player (Summer, Winter, or the one with the larger forest, Summer on a tie) chooses any tree stack except the starting tree and must move it to another free place where it is allowed under the planting rules (river to the source, at most 5 × 5). A tree lying on top of others takes the whole tree stack along. If the tree stack finds no such place, it withers. Then all trees left without a connection to the source also wither, unless the moved tree stack reconnects them; on each affected place the trees die from the top down until a connection exists. If the forest consists only of the starting tree, nothing happens. Moving the stack triggers no bonus action.',
      'Monitor Lizard Call: In this round the loner symbols on fire monitor lizards in play are ignored. The effect lasts from drawing the card until the end of the round.',
      'Calm: No effect. The card only provides variation in the deck.',
      'The event deck has 47 cards: Tree Blight 10, Onibi March 8, Darkening and Brightening 6, Flying Sparks 5, Calm 4, Root Migration 3, Loneliness 3, Estrangement 2, Onibi Obsession 2, Deer Droppings 2, Monitor Lizard Call 2.'
    ]},
    { h: 'Intensity and round trackers', p: [
      'The pressure grows with the round number. A round tracker shows how many event cards the round brings. The cards of one round must come from different categories. If a card of a category already out is drawn, it goes to the discard pile and another is drawn. If no card of another category is left, the drawn card counts. The cards are carried out one after another. If the event deck is empty, the discard pile is shuffled; the deck then no longer ends the game.',
      'Tracker 1 “Training”: 2 cards from round 5, 3 from round 9, partner forest from round 1, end after round 12. Tracker 2 “Standard”: 2 cards from round 3, 3 from round 7, partner forest from round 5, end after round 12. Tracker 3 “Hardcore”: 2 cards from round 2, 3 from round 5, partner forest from round 6, end after round 12. Tracker 4 “Short game” (Protective Thicket only): 2 cards from round 2, 3 from round 4, partner forest from round 5, at most 6 rounds; the 3×3 forest of one player is enough as the goal.',
      'The Standard tracker is the default for every goal. Whoever holds out until the end of the last round wins at “Unyielding to the End”; with “Eternal Harmony” and “Protective Thicket” the game is lost if the goal has not been reached after the last round.'
    ]},
    { h: 'Difficulty levels and variants', p: [
      'The difficulty is chosen through the tracker: Training is easier (more event cards only from round 5 and round 9, partner forest from the start), Standard is the default, Hardcore brings more event cards earlier and allows the partner forest only from round 6. The short game is not a level but a short game for Protective Thicket.',
      'Onibi Curse (optional variant, not included in the app, combinable with every tracker): It raises the difficulty considerably.',
      '• Who receives it: The curse initially lies with nobody. Whoever moves the Onibi with a spirit action receives it after the bonus action of the landing card has been carried out; if the partner has it, it passes to the one who moves. Event cards do not hand out the curse.',
      '• Effect: As long as a player is cursed they may not carry out the action that belongs to the clearing card under the Onibi (extinguish with water, lure with light, plant with sprout). This applies to action markers, to bonus actions from the forest and to the bonus action when moving the Onibi. Sanki and the spirit action are never blocked.',
      '• Removal: With spirit strength 3 the bearer can remove their own curse. With the curse there are two spirit actions, “move the Onibi” and “remove the curse”; one of them is compulsory if the strength allows it.'
    ]}
  ]
},

/* ============================== Koreanisch ============================== */
ko: {
  titel: '설명서',
  suche: '설명서에서 검색 …',
  hinweis: '두 번 누르면 설명서가 닫힙니다. 위아래로 쓸어서 읽으세요.',
  abschnitte: [
    { h: '협동 규칙', p: [
      '이 규칙에서는 두 자연 정령, 즉 여름과 겨울이 함께 플레이합니다. 여름과 겨울은 힘을 합쳐 오니비에 맞섭니다. 오니비는 스스로 결정을 내리지 않으며, 오니비의 행동은 이 앱이 관리하는 사건 카드 더미가 정합니다.',
      '이 설명서에 달리 적혀 있지 않은 한 Living Forest Duel 기본 게임의 모든 규칙이 적용됩니다. 기본 게임과 다른 점은 모두 여기에 명시되어 있습니다. 계속 유효한 기본 게임 규칙도 완전함을 위해 함께 적었습니다.',
      '앱은 보드게임을 대신하지 않습니다. 게임은 테이블 위의 구성품으로 진행합니다. 앱은 사건 카드를 뽑고, 라운드 트래커에 현재 라운드를 표시하며, 사건 더미와 버린 더미를 기억합니다.'
    ]},
    { h: '앱 사용법', p: [
      '시작할 때 언어를 고르고, 이어서 세 가지 게임 목표 중 하나와 라운드 트래커를 고릅니다. 트래커는 라운드마다 몇 장의 사건 카드가 놓이는지, 그리고 몇 라운드 뒤에 게임이 끝나는지를 정합니다. 트래커 1 “훈련”(더 쉬움), 2 “표준”(모든 목표에 추천), 3 “하드코어”(더 어려움)가 있으며, 보호하는 덤불에서만 4 “단기전”도 고를 수 있습니다.',
      '반투명한 플레이어 표시는 현재 라운드의 칸에 놓입니다.',
      '사건 더미는 뒷면으로 놓여 있습니다. 손가락이나 펜으로 카드를 더미에서 전시 칸으로 끌어옵니다. 카드는 거기서 뒤집히고 그 아래에 이름이 나타납니다. 전시 칸의 수(1~3)는 그 라운드의 강도와 같습니다.',
      '뽑은 카드가 이미 전시된 카드와 같은 범주이면 “어이쿠” 소리가 나고, 두 카드가 잠시 깜박이며, 새 카드는 버린 더미로 갑니다. 그다음 다시 뽑습니다. 다른 범주의 카드가 더 이상 없으면 뽑은 카드가 그대로 남습니다. 카드 왼쪽 위의 오니비 인장이 범주를 보여 줍니다.',
      '모든 칸이 차면 뽑기가 막히고 “다음 라운드” 버튼이 활성화됩니다. 전시된 카드는 뽑은 순서대로 실행합니다. “다음 라운드”를 누르면 표시가 다음 칸으로 가고, 전시된 카드는 버린 더미로 가며, 새 라운드가 시작됩니다. 마지막 라운드에는 “마지막 라운드!”가 나타나고 버튼은 막힙니다. 사건 더미가 비면 버린 더미를 섞어 새 더미를 만듭니다.',
      '전시된 카드를 옆으로 쓸면 카드가 뒤집히고, 뒷면에 설명이 완전한 문장으로 나옵니다. 다시 쓸면 원래대로 돌아옵니다. 트래커 카드를 옆으로 쓸면 카드가 뒤집혀 라운드 안내가 보이며, “다음 라운드”를 누르면 다시 앞면으로 돌아옵니다. “설명서”와 “용어집” 기호를 누르면 이 설명서와 용어집이 열리며, 둘 다 위아래로 스크롤할 수 있고 두 번 누르거나 ✕를 누르면 닫힙니다. “다시 시작”을 누르면 게임 목표 선택으로 돌아갑니다.'
    ]},
    { h: '구성품', p: [
      '공용 구성품: 오니비 말, 불꽃 조각 19개, 산키 카드 3장, 사슴 카드, 일반 동물 카드 18장, 빈터 카드 7장(각각 화력 값과 보너스 행동이 있음), 그리고 네 종류로 6그루씩 나뉘는 나무 카드 24장.',
      '자연 정령(여름과 겨울) 각자: 시작 나무 1장, 행동 마커 2개, 화염 왕도마뱀 카드 7장, 동물 카드 15장.',
      '협동 규칙에서 추가: 사건 카드 47장과 라운드 트래커 4장(둘 다 앱 안).',
      '동물은 세 부류입니다. 중립 동물은 기호가 없고, 외톨이는 검은 기호, 사교 동물은 흰 기호가 있습니다. 동물 카드마다 비용과 제공하는 요소가 적혀 있습니다. 요소는 빛, 새싹, 물, 영혼의 네 가지이며 각각 행동이 있습니다. 빛은 동물 끌어오기, 새싹은 나무 심기, 물은 불 끄기, 영혼은 오니비 움직이기입니다.',
      '나무 카드마다 비용, 나무판 위의 나무 요소(항상 1단위), 보너스 행동, 강줄기가 표시되어 있습니다. 시작 나무는 요소를 주지 않습니다.'
    ]},
    { h: '게임 목표와 패배', p: [
      '게임 전에 플레이어들은 함께 세 가지 목표 중 하나를 고릅니다.',
      '영원한 조화: 공급 줄이 완전히 비면 승리합니다. 이를 위해 사슴을 구입했거나 사슴의 배설물로 게임에서 제거해야 하고 양쪽 개인 동물 더미가 비어야 합니다. 나무는 이 목표에 포함되지 않습니다.',
      '보호하는 덤불: 모든 플레이어가 보이는 나무 9그루로 이루어진 3×3 격자 숲을 만들면, 즉 두 숲 모두에서 만들면 승리합니다. 트래커 “단기전”에서는 한 플레이어의 3×3 숲이면 충분합니다. 파트너 숲에 심은 나무는 그 나무가 놓인 숲에 속합니다. 공급 줄이 비는 것은 허용되지만 승리로 이어지지 않습니다.',
      '끝까지 굽히지 않기: 고른 트래커의 마지막 라운드를 끝까지 마치면 승리합니다. 나무와 공급 줄은 포함되지 않습니다.',
      '영원한 조화와 보호하는 덤불에서는 트래커의 마지막 라운드 뒤에 게임이 끝나기 전에 목표를 이루어야 합니다. 그 마지막 라운드가 끝날 때까지는 아직 달성할 수 있습니다.',
      '다음 중 하나가 일어나면 즉시 패배합니다.',
      '• 불꽃 조각의 비축분이 바닥난 경우(조각 19개, 끈 조각은 비축분으로 돌아갑니다).',
      '• 어떤 플레이어가 라운드 끝에 화염 왕도마뱀을 버려야 하는데 더 없는 경우.',
      '• 오니비가 빈터 가장자리 밖으로 밀려난 경우.',
      '• 마지막 라운드가 끝났는데 목표(영원한 조화 또는 보호하는 덤불)를 이루지 못한 경우.',
      '기본 게임과 달리 “불꽃 조각 8개 모으기”, “공급 줄에 자기 계절의 동물만 남기기”, “오니비를 상대 정령에게 보내기”라는 승리 조건은 없습니다. 개인 동물 더미가 비는 것은 패배가 아니며, 공급 줄의 그 자리는 비어 있게 됩니다.'
    ]},
    { h: '준비', p: [
      '빈터 카드 7장을 화력 값과 보너스 행동이 보이도록 한 줄로 놓습니다. 화력 값은 가운데에서 바깥으로 갈수록 커집니다. 오니비 말은 가운데 카드에 세우고, 이웃한 두 카드에 불꽃 조각을 1개씩 놓습니다.',
      '나무 카드 24장을 종류별로 비축 더미 4개(각 6그루)로 나눕니다. 더미마다 따로 섞어 앞면이 보이게 빈터 위쪽에 둡니다. 사슴 카드는 가운데 빈터 카드 아래에 놓아 공급 줄의 출발점으로 삼습니다.',
      '여름과 겨울은 처음부터 함께 플레이합니다. 각자 화염 왕도마뱀 카드 7장을 앞면이 보이게 쌓아 자기 쪽 빈터 끝 옆에 둡니다. 그다음 각자 동물 카드 15장을 섞어 뒷면의 개인 동물 더미로 만들고, 맨 위 3장을 뽑아 개인 동물 더미와 사슴 사이의 공급 줄에 놓습니다. 이 3장의 비용 합이 12 이하이면 가장 싼 동물을 더미 아래로 넣고 새로 한 장을 펼치며, 합이 12를 넘을 때까지 되풀이합니다.',
      '각자 시작 나무를 개인 숲의 기초로 놓고 행동 마커 2개도 앞에 두며, 개인 동물 줄을 둘 자리를 비워 둡니다. 남은 불꽃 조각(공용 비축분, 모두 19개)과 산키 카드 3장은 빈터 위쪽에 비축분으로 둡니다.',
      '일반 동물 카드 18장을 섞어 공급 줄 아래에 공용 뽑는 더미를 만듭니다. 그 옆에 공용 버린 더미와 공용 동물 줄을 둘 자리를 남깁니다.',
      '추가로 사건 카드 47장 더미를 준비합니다(앱이 섞습니다). 항상 전체 더미를 사용합니다. 게임은 1라운드, 라운드 트래커의 첫 칸에서 시작합니다.'
    ]},
    { h: '라운드 진행', p: [
      '한 라운드는 다섯 단계로 이루어집니다.',
      '1. 균형: 라운드 시작 때, 화력 압박과 사건 카드보다 먼저 차이 D를 정합니다(“밝음과 어둠의 균형” 참고). 라운드는 두 플레이어 모두에게 D개의 외톨이 기호가 미리 있는 상태로 시작합니다.',
      '2. 화력 압박: 오니비가 균형을 어지럽힙니다. 오니비 아래 빈터 카드의 화력 값만큼 새 불꽃 조각을 놓습니다. 조각은 오니비의 이웃한 두 카드에 번갈아 놓으며, 화력 값이 더 높은 카드부터 시작합니다(같으면 왼쪽). 이미 조각이 있어도 놓습니다. 기본 게임에서는 빈터 카드마다 조각이 최대 1개이지만 여기서는 여러 개가 될 수 있습니다. 오니비가 가장자리에 있으면 빈터를 고리로 봅니다. 오른쪽 가장자리의 오른쪽에는 왼쪽 가장자리 카드가, 왼쪽 가장자리의 왼쪽에는 오른쪽 가장자리 카드가 있습니다. 이 이어짐은 화력 압박의 이웃 카드에만 적용되며 오니비의 이동에는 적용되지 않습니다.',
      '3. 사건: 그 라운드의 사건 카드를 펼쳐 차례로 실행합니다(“사건 카드”와 “강도와 라운드 트래커” 참고).',
      '4. 진행: 플레이어들은 동물을 함께 한 장씩 펼칩니다. 언제 펼치기를 멈추고 행동 마커를 놓을지 함께 정하며, 행동 마커는 각각 두 플레이어 중 한 명의 것입니다. 플레이어 순서도 번갈아 하기도 없으며, 한 플레이어가 행동 마커를 연달아 놓아도 됩니다. 두 플레이어가 행동 마커를 모두 놓거나 잃으면 라운드가 끝납니다.',
      '5. 라운드 끝: 불꽃 값과 물을 비교한 뒤 정리합니다(“라운드 끝” 참고).'
    ]},
    { h: '밝음과 어둠의 균형', p: [
      '공급 줄의 동물만 셉니다. 사슴은 중립이라 세지 않습니다. D는 그곳의 여름 동물과 겨울 동물 수 차이의 절반을 내림한 값입니다. 즉 균형을 맞추려고 바꿔야 할 동물의 수이며 최대 3입니다. 예: 3 대 3이면 D = 0, 4 대 2이면 D = 1, 5 대 1이면 D = 2, 6 대 0이면 D = 3.',
      '매 라운드 시작 때 두 플레이어 모두에게 외톨이 기호 D개가 이미 보이는 것으로 칩니다. 사교 기호는 평소처럼 이를 상쇄합니다. D = 2이면 외톨이 기호 하나만 더 나와도 행동 마커를 잃고, D = 3이면 라운드 시작과 동시에 마커 하나를 잃습니다.',
      '균형은 반대 계절 동물을 구입할 때(빈자리를 즉시 자기 더미에서 채우며 차이가 2만큼 바뀜) 그리고 사슴의 경우 1만큼(사슴 자신은 세지 않고 채워 넣은 카드는 셈) 바뀝니다. 또한 사건 카드(어두워짐, 밝아짐, 사슴의 배설물; 다음 라운드의 D에만 영향)와 빈 더미(자리가 비고 세지 않음)로도 바뀝니다.',
      '화염 왕도마뱀에는 외톨이 기호가 있습니다. 화염 왕도마뱀이 어떤 플레이어의 개인 동물 줄에 놓이면 그 플레이어에게만 외톨이 기호로 계산되고 파트너에게는 계산되지 않습니다. “왕도마뱀의 부름”은 한 라운드 동안 이 기호를 무시합니다.'
    ]},
    { h: '동물 펼치기', p: [
      '공용 뽑는 더미의 맨 위 동물을 펼칩니다. 일반 동물과 사슴은 공용 동물 줄 끝에 놓습니다. 자연 정령의 기호가 있는 동물이나 화염 왕도마뱀은 그 정령의 개인 동물 줄 끝으로 가며, 그 요소는 그 플레이어만 쓸 수 있습니다. 공용 뽑는 더미가 비면 공용 버린 더미를 섞어 새 뽑는 더미로 씁니다.',
      '펼친 동물에 외톨이 기호가 있으면 누가 펼쳤든 두 플레이어가 각자 그 기호가 몇 개 보이는지 확인합니다. 공용 동물 줄과 자기 개인 동물 줄에 있는 기호가 보이는 것이며, 균형 D와 사건 카드 고독에 의한 미리 있는 기호도 더합니다.',
      '어떤 플레이어에게 외톨이 기호가 3번째이면 행동 마커 1개를 쓰지 않은 채 내려놓아야 하며(가능하다면), 이 마커는 남은 라운드 동안 쓸 수 없습니다. 4번째일 때도 행동 마커 1개를 내려놓습니다. 사교 기호 하나는 외톨이 기호 하나를 상쇄합니다. 대개 두 플레이어 모두 마커 1개를 잃지만, 각자에게 보이는 수가 다를 수도 있습니다.',
      '사건 카드 소외가 적용 중이면 뽑은 동물 카드는 외톨이 기호가 있을 때만 공용 동물 줄에 놓을 수 있으며 나머지는 버립니다. 개인 구역에 들어가는 카드는 해당되지 않습니다.'
    ]},
    { h: '행동 마커 놓기', p: [
      '행동 마커는 공용 동물 줄에 놓으며, 하려는 행동의 요소 하나를 오른쪽에서 왼쪽으로 가리킵니다. 마커는 항상 공용 동물 줄에 가장 최근에 놓인 카드 위에 있으며, 줄에 카드가 없으면 마커를 놓을 수 없습니다. 한 카드에는 요소마다 마커가 최대 하나만 놓일 수 있고, 누구의 마커인지는 상관없습니다. 예외는 묶음 행동입니다. 마커는 라운드가 끝날 때까지 그대로 있습니다.',
      '세기: 마커에서 출발해 화살표 방향으로 공용 동물 줄에서 보이는 그 종류의 요소를 더하다가, 같은 요소의 다른 마커를 만나거나 줄의 시작에 닿으면 멈춥니다. 이렇게 센 요소는 소모되어 이번 라운드에는 두 플레이어 모두 다시 쓸 수 없습니다. 그다음 자기 개인 동물 줄과 개인 숲에서 보이는 같은 종류의 요소를 더합니다. 이 요소들은 라운드 동안 계속 쓸 수 있으며 행동할 때마다 새로 셉니다.',
      '예: 물 마커를 놓습니다. 공용 동물 줄이 마커까지 물 3, 개인 동물 줄이 1, 숲이 2를 줍니다. 힘은 6입니다. 공용 줄의 물 3은 그 뒤 소모되고, 나머지 3은 다음 행동에서 다시 셉니다.',
      '잠금 해제: 어떤 요소에 마커를 놓으려면, 그 요소의 마지막 마커 이후(누구의 것이든; 라운드의 첫 마커는 라운드 시작 이후) 그 요소의 기호가 양수든 음수든 하나 이상 공용 동물 줄에 들어와 있어야 합니다. 그 요소가 없는 카드는 잠금을 풀지 못하며, 줄에 그 요소의 기호가 없으면 표시할 수 없습니다. 공용 동물 줄에 놓인 카드만 새로 놓인 것으로 치며, 개인 줄에 놓이는 카드(예: 화염 왕도마뱀)는 잠금을 풀지 못합니다. 그렇지 않으면 다음 플레이어가 다른 요소를 고르거나 카드를 펼칩니다.',
      '이는 자기 마커 오른쪽에 그 종류의 새 요소가 2개 이상 더해져야 한다는 기본 게임 규칙을 대신합니다.',
      '요소는 음수 값일 수도 있습니다(예: 물 −1). 그러면 행동의 합이 0 아래로 내려갈 수 있습니다. 마커 규칙이 허용하면 행동은 형식상 총 힘이 0 이하여도 놓을 수 있으며, 이때는 효과가 없고 행동 마커만 소모됩니다. 보너스 행동도 힘이 0 이하이면 생략됩니다.'
    ]},
    { h: '묶음 행동', p: [
      '두 플레이어가 동시에 같은 요소에, 공용 동물 줄의 같은 카드 위에 행동 마커를 하나씩 놓습니다. 두 사람은 공용 동물 줄의 같은 구간을 세며, 마커 앞에서 그 요소가 마지막으로 나온 곳, 즉 마커가 가리키는 수는 두 배로 칩니다. 예: 보통 “2, 1, 2”이면 힘이 5이지만, 묶음 행동이면 두 플레이어 각각 2 + 1 + 2 + 2 = 7이 됩니다. 마지막 마커 앞까지의 카드는 모두 쓸 수 있습니다.',
      '플레이어들은 둘 중 누가 먼저 행동할지 정할 수 있습니다. 힘은 미리 정해 둡니다. 묶음 행동은 두 플레이어의 행동 마커를 각각 하나씩 소모합니다. 둘 다 행동 마커가 없으면 라운드가 끝납니다. 힘이 0 이하이면 두 플레이어 각각에게 따로 적용됩니다.'
    ]},
    { h: '불 끄기(물)', p: [
      '플레이어는 빈터에서 불꽃 조각을 원하는 만큼 가져가되, 그 값의 합이 자기 물의 힘 이하여야 합니다. 조각 하나는 그 조각이 놓인 카드의 화력 값만큼으로 셉니다. 같은 카드에서 여러 조각을 가져가도 됩니다. 가져간 조각은 공용 비축분으로 돌아갑니다.',
      '카드는 조각이 남아 있거나 오니비가 서 있는 동안 불타고 있습니다. 한 카드의 조각을 모두 없애고(오니비도 거기 없어야) 나서야 그 카드는 라운드 끝 계산에서 빠집니다.',
      '기본 게임에서는 조각 8개를 모으면 승리하지만, 협동 규칙에서는 이 승리 조건이 없습니다.'
    ]},
    { h: '동물 끌어오기(빛)', p: [
      '플레이어는 공급 줄에 앞면으로 놓인 동물을 한 장 이상 고르며, 비용의 합은 자기 빛의 힘을 넘을 수 없습니다. 자기 자연 정령의 기호가 있는 동물은 자기 개인 동물 줄 끝에 놓습니다. 파트너의 기호가 있는 동물과 사슴은 공용 버린 더미로 갑니다.',
      '가져간 동물마다 공급 줄에는 구입한 사람의 개인 동물 더미에서 즉시 동물을 한 장 보충합니다. 따라서 구입할 때마다 이 더미(15장, 처음에 3장이 공급 줄에 있음)에서 카드가 한 장씩 줄어듭니다. 반대 계절 동물을 구입할 때도 마찬가지입니다. 더미가 비면 그 자리는 게임 끝까지 빈 채로 남습니다.',
      '사슴은 중립이며 균형에 포함되지 않고 비용은 7입니다. 요소는 주지 않고 사교 기호가 있습니다. 구입한 뒤에는 공용 버린 더미에 놓이며 나중에 다시 펼쳐질 수 있습니다. 공급 줄의 사슴 자리는 다른 동물처럼 구입한 사람의 개인 더미에서 즉시 채워지며, 그 더미가 비어 있으면 자리는 빈 채로 남습니다. 사건 카드 사슴의 배설물은 사슴이 아직 공급 줄에 있는 동안 사슴을 게임에서 제거할 수 있습니다.',
      '개인 동물 더미가 비는 것은 패배가 아닙니다. 더미는 내장된 시계처럼 작용합니다. 구입은 덱을 좋게 하지만 더미를 비웁니다.'
    ]},
    { h: '나무 심기(새싹)', p: [
      '플레이어는 비축분에서 앞면으로 놓인 나무를 한 그루 이상 고르며, 비용의 합은 자기 새싹의 힘을 넘을 수 없습니다. 나무는 서로 다른 비축 더미에서 골라야 하므로 최대 4그루입니다. 고른 나무를 모두 먼저 심고, 그다음 생긴 보너스 행동을 실행합니다.',
      '나무 카드의 모든 강줄기는 항상 시작 나무의 호수에 이어져 있어야 하며, 직접 이어지거나 다른 나무 카드를 거쳐 이어져도 됩니다. 시작 나무는 3×3 격자의 어느 자리에 놓아도 됩니다. 나무 카드는 돌릴 수 없으며 모든 나무는 꼭대기가 위를 향합니다. 숲은 최대 5 × 5칸입니다.',
      '알맞게 놓을 수 없는 나무(허용된 자리가 없거나 샘으로 가는 강줄기가 없음)는 사라집니다. 이를 잘못된 구입이라 하며 나무는 비축 더미로 돌아가지 않습니다. 다음 나무를 드러내려는 등의 이유로 놓을 자리가 없는 나무를 구입해도 됩니다.',
      '덮기: 나무를 심는 숲(자기 숲 또는 파트너의 숲)의 시작 나무가 아닌 나무는 심기 규칙을 지키는 한 새 나무로 덮을 수 있습니다. 더미가 아무리 높아도 그 자리는 차지한 자리로 칩니다. 겹쳐 놓인 나무 여러 그루는 나무 더미를 이루며, 맨 위의 나무만 보이고 효과가 있습니다. 덮인 나무는 효과를 잃지만 새 나무가 다시 보너스 행동을 일으킬 수 있습니다. 덮인 나무는 요소를 주지 못하며 사건 카드의 영향을 받지 않습니다.',
      '숲의 모든 나무(시작 나무 제외)는 보이는 동안 요소를 하나씩 계속 제공합니다. 요소의 색: 노랑은 빛, 빨강은 새싹, 청록은 물, 보라는 영혼입니다.',
      '파트너 숲: 구입한 나무는 자기 숲이나 파트너의 숲에 심을 수 있습니다. 나무 심기 행동 한 번에 파트너에게는 최대 한 그루만 심을 수 있고, 같은 행동의 나무 하나 이상이 자기 숲에 들어갈 때만 가능합니다. 순서는 상관없습니다. 따라서 구입한 나무가 한 그루뿐이면 항상 자기 숲에 심습니다. 나무가 들어가는 숲에 일반 심기 규칙이 적용됩니다. 이때 일으킨 보너스 행동은 심은 플레이어가 자기 요소로 실행합니다. “보호하는 덤불”에서는 나무가 놓인 숲에 속하며, 숲마다 자기 3×3 블록이 필요합니다(단기전에서는 하나면 충분). 트래커에 따라 파트너 숲 심기는 특정 라운드부터만 허용됩니다.'
    ]},
    { h: '오니비 움직이기(영혼)', p: [
      '오니비는 플레이어의 영혼 수 이하의 걸음(= 빈터 카드 수)만큼 원하는 방향으로 움직입니다. 영혼 점수를 모두 쓸 필요는 없지만, 힘이 허락하면(최소 1칸) 오니비를 반드시 움직여야 합니다. 힘이 0 이하이면 소모된 행동 마커만 남습니다. 보통은 가운데 쪽으로 갑니다.',
      '그다음 오니비가 도착한 카드의 보너스 행동을 즉시 실행합니다(산키 받기, 불 끄기, 끌어오기, 심기). 필요한 요소가 없으면 생략합니다.',
      '오니비가 빈터를 벗어나게 되면 게임에서 패배합니다.'
    ]},
    { h: '보너스 행동과 산키', p: [
      '빈터와 모든 나무 카드에는 보너스 행동이 그려져 있습니다. 산키 카드 받기, 불 끄기, 동물 끌어오기, 나무 심기입니다. 나무의 보너스 행동은 심을 때만(뿌리 이동에서는 아님) 일어나며, 새로 완성된 기호 하나마다 한 번씩입니다. 새 나무와 이웃한 나무 사이의 가장자리에서 반쪽 기호가 맞으면 보너스 행동이 하나 생기고, 새 나무에 맞는 이웃이 둘이면 둘이 생깁니다. 네 가장자리 중 어느 곳에서 두 반쪽 기호가 맞는지는 상관없습니다. 이 기호는 나무 카드의 것이며 나무판 위의 나무 요소와 혼동하면 안 됩니다.',
      '기본 게임처럼 먼저 나무 심기 행동의 나무를 모두 심고, 그다음 심은 플레이어가 생긴 보너스 행동을 자유롭게 고른 순서로 차례로 실행합니다. 이때 쓸 수 있는 요소는 새로 심은 나무의 요소도 포함합니다. 요소는 공용 동물 줄, 개인 동물 줄, 숲의 것을 합해 세며, 공용 동물 줄의 요소는 계속 쓸 수 있습니다. 필요한 요소가 없으면 보너스 행동은 생략됩니다.',
      '산키 카드: 보너스 행동으로 산키 카드를 받을 수 있으면 비축분에서 가져옵니다. 세 장이 모두 플레이 중이면 상대의 허락이 있을 때만 상대에게서 하나를 가져올 수 있습니다.',
      '산키 카드 쓰기: 각 플레이어는 마지막에 펼쳐진 카드에 대해, 다음 카드를 펼치기 전에 자기 산키로 반응할 수 있습니다. 펼친 사람이어야 하는 것은 아닙니다. 하나는 방금 펼쳐진 화염 왕도마뱀을 자기 계절의 더미로 되돌리는 것이며, 보상으로 칩니다. 다른 하나는 방금 펼쳐진 동물(공용 또는 개인 동물 줄에 놓인 그대로)을 뽑는 더미 아래에 넣고 다시 뽑는 것입니다. 첫 동물의 외톨이 기호로 이미 잃은 행동 마커는 그대로 잃은 채입니다. 쓴 산키 카드는 비축분으로 돌아갑니다. 기본 게임의 즉시 행동 마커는 협동 규칙에서 적용되지 않습니다.'
    ]},
    { h: '라운드 끝', p: [
      '두 플레이어 모두 행동 마커가 없어지면 라운드가 끝납니다. 다음 단계를 진행합니다.',
      '1. 불꽃 값: 불타는 빈터 카드의 화력 값을 모두 더합니다. 카드 위에 불꽃 조각이 있거나 오니비가 서 있으면 그 카드는 불타는 중입니다. 이 합이 그 라운드의 불꽃 값입니다. 각 플레이어는 자기 물 수(개인 숲, 개인 동물 줄, 공용 동물 줄에서 자기 마커가 마지막으로 놓인 곳의 오른쪽)를 불꽃 값과 비교합니다. 같거나 높으면 아무 일도 없습니다. 낮으면 불타는 카드 한 장마다 자기 화염 왕도마뱀 하나를 버린 더미에 놓으며, 모자라면 게임에서 패배합니다.',
      '그 뒤 기본 게임과 달리 오니비 옆에 조각을 놓지 않습니다. 이는 다음 라운드의 화력 압박에서 이루어집니다.',
      '2. 정리: 두 플레이어는 행동 마커 2개를 되찾습니다. 공용 동물 줄과 두 개인 동물 줄의 모든 카드는 공용 버린 더미로 갑니다. 라운드 트래커가 한 칸 나아갑니다. 이때 뽑는 더미가 비었으면 버린 더미를 섞습니다.',
      '사건 더미가 비면 버린 더미를 섞습니다. 게임은 트래커의 마지막 라운드 뒤, 라운드 끝, 즉 불꽃 값과 물의 확인이 끝난 뒤에야 끝납니다.'
    ]},
    { h: '사건 카드', p: [
      '사건 카드에는 글자가 없고 숫자와 기호만 있습니다. 목표는 가장 불리한 경우에 대한 고정 규칙을 정하며, 오니비는 결정을 내리지 않습니다. 규칙이 플레이어에게 맡기는 결정(예: 동점)은 플레이어들이 함께 내립니다. 모든 카드는 어떤 종류에 속합니다(예: 나무 썩음). 같은 종류의 카드 두 장은 같은 라운드에 함께 놓이지 않습니다.',
      '오니비 행군: 오니비가 1~3칸 빈터의 더 가까운 가장자리 쪽으로 가며 가운데 쪽으로는 가지 않습니다. 정확히 가운데에 있으면 플레이어 기호가 정합니다. 여름은 왼쪽 끝, 겨울은 오른쪽 끝으로 갑니다. 가장자리를 넘으면 게임에서 패배합니다.',
      '어두워짐과 밝아짐: 기호는 강화되는 계절을 가리킵니다(달은 겨울, 해는 여름). 공급 줄에서 다른 계절의 가장 저렴한 동물을 빼고 강화되는 계절의 개인 더미 맨 위 동물로 바꿉니다. 단, 불균형이 더 커지는 동안에만 합니다. 가장 낮은 비용이 같으면 플레이어들이 고릅니다. 아니면 카드는 효과가 없습니다.',
      '나무 썩음: 해당 플레이어는 나무 값이 2 이상이거나 나무 요소가 카드와 같은 나무를 없애야 합니다(시작 나무 제외). 나무 더미에서는 맨 위의 나무만 대상이 되며, 그 아래 나무가 다시 효과를 냅니다. 이로 인해 샘에서 끊어진 나무도 함께 죽습니다. 끊어진 각 자리에서는 남은 맨 위 카드가 다시 샘과 이어질 때까지(또는 자리가 빌 때까지) 맨 위부터 나무가 차례로 죽습니다. 덮인 나무는 보호됩니다. 알맞은 나무가 없으면 아무 일도 일어나지 않습니다.',
      '불티: 불꽃 조각 1~3개를 화력 압박처럼 더 놓습니다. 같은 라운드에서 화력 압박 직후에 합니다. 비축분이 모자라면 게임에서 패배합니다.',
      '고독: 이번 라운드에 외톨이 기호 1개 또는 2개가 두 플레이어 모두에게 D에 의한 미리 있는 기호에 더해 계산됩니다.',
      '소외: 뽑은 동물 카드는 외톨이 기호가 있어야만 공용 동물 줄에 갈 수 있고 나머지는 버립니다. 개인 구역에 들어가는 카드는 해당되지 않습니다.',
      '오니비의 집착: 오니비와 모든 불꽃 조각이 카드에 그려진 플레이어 쪽으로 한 칸 이동합니다(여름은 왼쪽, 겨울은 오른쪽). 가장자리 밖으로 밀린 조각은 반대편으로 넘어갑니다. 오니비가 가장자리 밖으로 밀리면 게임에서 패배합니다. 도착한 칸의 보너스는 발동하지 않습니다.',
      '사슴의 배설물: 카드에 해(여름) 또는 달(겨울)이 그려져 있습니다. 사슴이 아직 공급 줄 가운데 자리에 있으면 게임에서 제거하고(이후 더는 끌어올 수 없음), 그 계절의 동물 더미 맨 위 카드를 그 자리에 놓습니다. 그 더미가 비어 있으면 자리는 빈 채로 남습니다. 사슴이 이미 그곳에 없으면 아무 일도 일어나지 않습니다. 놓인 카드는 동물 수의 차이를 1만큼 바꾸며, 이는 다음 라운드의 D에 영향을 줍니다.',
      '뿌리 이동: 해당 플레이어(여름, 겨울, 또는 숲이 더 큰 쪽이며 같으면 여름)는 시작 나무를 제외한 나무 더미 하나를 골라, 심기 규칙상 허용되는 다른 빈 자리로 옮겨야 합니다(샘으로 이어지는 강줄기, 최대 5 × 5). 다른 나무 위에 놓인 나무는 더미 전체를 함께 옮깁니다. 나무 더미를 놓을 자리가 없으면 그 나무 더미는 시듭니다. 그다음 샘과 연결되지 않은 채 남은 모든 나무도 시듭니다. 다만 옮긴 나무 더미가 다시 이어 주는 나무는 남습니다. 끊어진 각 자리에서는 연결이 생길 때까지 맨 위부터 나무가 차례로 죽습니다. 숲이 시작 나무뿐이면 아무 일도 일어나지 않습니다. 옮기는 것으로는 보너스 행동이 일어나지 않습니다.',
      '왕도마뱀의 부름: 이번 라운드에는 놓여 있는 화염 왕도마뱀의 외톨이 기호가 무시됩니다. 이 효과는 카드를 뽑은 때부터 라운드 끝까지입니다.',
      '고요: 효과가 없습니다. 더미에 변화를 주는 카드일 뿐입니다.',
      '사건 더미는 47장입니다. 나무 썩음 10, 오니비 행군 8, 어두워짐과 밝아짐 6, 불티 5, 고요 4, 뿌리 이동 3, 고독 3, 소외 2, 오니비의 집착 2, 사슴의 배설물 2, 왕도마뱀의 부름 2.'
    ]},
    { h: '강도와 라운드 트래커', p: [
      '라운드가 갈수록 압박이 커집니다. 라운드 트래커는 그 라운드에 사건 카드가 몇 장 나오는지 보여 줍니다. 한 라운드의 카드는 서로 다른 범주여야 합니다. 이미 나와 있는 범주의 카드를 뽑으면 버린 더미로 가고 다시 뽑습니다. 다른 범주의 카드가 더 없으면 뽑은 카드가 적용됩니다. 카드는 차례로 실행합니다. 사건 더미가 비면 버린 더미를 섞으며, 이제 더미가 게임을 끝내지는 않습니다.',
      '트래커 1 “훈련”: 5라운드부터 2장, 9라운드부터 3장, 파트너 숲 1라운드부터, 12라운드 뒤 종료. 트래커 2 “표준”: 3라운드부터 2장, 7라운드부터 3장, 파트너 숲 5라운드부터, 12라운드 뒤 종료. 트래커 3 “하드코어”: 2라운드부터 2장, 5라운드부터 3장, 파트너 숲 6라운드부터, 12라운드 뒤 종료. 트래커 4 “단기전”(보호하는 덤불 전용): 2라운드부터 2장, 4라운드부터 3장, 파트너 숲 5라운드부터, 최대 6라운드이며, 목표로는 한 플레이어의 3×3 숲이면 충분합니다.',
      '표준 트래커는 모든 게임 목표의 기본값입니다. 마지막 라운드가 끝날 때까지 버티면 “끝까지 굽히지 않기”에서 승리하며, “영원한 조화”와 “보호하는 덤불”에서는 마지막 라운드 뒤에 목표를 이루지 못하면 패배합니다.'
    ]},
    { h: '난이도와 변형', p: [
      '난이도는 트래커로 고릅니다. 훈련은 더 쉽고(사건 카드가 5라운드와 9라운드부터 늘어남, 파트너 숲은 처음부터), 표준은 기본값이며, 하드코어는 사건 카드가 더 일찍 늘고 파트너 숲은 6라운드부터 허용됩니다. 단기전은 난이도 단계가 아니라 보호하는 덤불을 위한 짧은 게임입니다.',
      '오니비의 저주(선택 변형, 앱에는 없음, 모든 트래커와 조합 가능): 난이도를 크게 높입니다.',
      '• 받는 사람: 저주는 처음에 아무에게도 없습니다. 영혼 행동으로 오니비를 움직인 사람이 도착한 카드의 보너스 행동을 마친 뒤 저주를 받으며, 파트너가 갖고 있으면 움직인 사람에게로 넘어갑니다. 사건 카드는 저주를 주지 않습니다.',
      '• 효과: 저주받은 동안 그 플레이어는 오니비 아래 빈터 카드에 해당하는 행동(물로 불 끄기, 빛으로 끌어오기, 새싹으로 심기)을 할 수 없습니다. 이는 행동 마커, 숲의 보너스 행동, 오니비를 움직일 때의 보너스 행동에 적용됩니다. 산키와 영혼 행동은 막히지 않습니다.',
      '• 없애기: 영혼의 힘이 3이면 저주를 가진 사람이 자기 저주를 없앨 수 있습니다. 저주가 있으면 영혼 행동은 “오니비 움직이기”와 “저주 없애기” 두 가지이며, 힘이 허락하면 둘 중 하나는 의무입니다.'
    ]}
  ]
}
};
