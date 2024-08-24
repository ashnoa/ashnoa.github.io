import { useEffect, useState } from 'react';
import './App.css';

const tanka = [
   "日本列島へし折れよ　あなたの浴びた雨が来ていちめん塗り潰れるアスファルト",
   "静物とよべばまぶしきさみしさの、たとへば林檎といふ冬銀河",
   "水鳥が乱す水面のきらめきのうなづけるだけうなづいてほしい",
   "感情のすがたを町にするときにどうしてここにある精米所",
   "母国語のほろびやすきを好みたり鳥のかたちの国にうまれて",
   "あかねさすといへば茜のさす君のいつかほろんでしまふ言語野",
   "はつなつの胸の林の感情をむかへにいくための獣道",
   "花で殴る　それを感情だといへばぼくらがなんども負ける初夏",
   "夏揚羽夏のひかりに透けながら生まれくあなたが風うたふとき",
   "死後の季節をだれも知らざり手花火の灰のわづかに火をやどしつつ",
   "しなかつたのはすべてわれ楡の木は天に裂かるる象して立つ",
   "かがやけり　あなたはあなたをあなたして曇天ひとつ抱く曼珠沙華",
   "天体のごとき銀杏くだかれて街に銀河の死のほのあかり",
   "幻みたいでもうれしいよ　遮れる日射しを遮らずにゆくきみと",
   "てのひらの丘と水路と橋と火をもつてあなたはわたしの町だ",
   "生き延びるためにうしなふあかるさよ冬木にあまたの幻肢はゆらぐ",
   "ほろぼさなくともほろぶふるさとなるものか冬花火われをのぼりくる速く",
   "さくらとは複数形であることにゆつくり下つてゆける坂道",
   "うつくしい金具はうつくしい椅子にわたして、といふ遠い風鳴り",
   "さみしければさみしさにからだ折りたたむ眠りを昼のまなかにゆるす",
   "てのひらにつくる器のこはれやすくはこべりきみのもとへ夕去",
   "おもひだすひとのだれとも目はあはずゆられてはるかなる夏の駅",
   "ねぢふせられしひかりなれどもひかりなれきみと見上ぐる七月の空",
   "あひにゆく　さういふ旅のただなかを印してひかる冬の切符は",
   "わかりあふための手段の少なさの樹木にゆれてゐる冬曇り",
   "夏服のかるさに腕をとほしつつはしやぎたり子にはじめての夏",
   "湯上がりの涼しさをいふ夏の日の喃語に風のおとふえてゆく",
   "まぶしがる子にわけやれる影おほしきみに樹のごとありたし父は",
   "束ねたる鍵にあそびてきみがひらくそれぞれに海それぞれに夏",
   "約束をいくつかやめてゆふぐれの記憶のなかの父やつてくる",
   "どこまでが子でどこまでが父だらう暗がりにやはく子を押し戻す",
   "短さをきそへばいつもこの夏が勝つな　きみにソーダを奢る",
   "ねむたさがたべたさを超えてゆく夏の地軸にそひて子は傾きぬ",
   "きのふの湯ながしてけふの湯にかへる永きに淋し水の躰は",
   "ゐないゐないといふ不在に在る父を見据ゑて冬の子はをりぬ　ばあ",
   "ねむらせるためおもひだす歌どれもかなしかりけり夜半ふいに来る",
   "いつまできみの小舟だらうな子のねむり浅ければやはく夜にゆらせる",
   "まけてゆくことがくらしになることのいいんかなあ昼の月かけてゐる",
   "あつめきし本のいづれのひかりにもさはらず夏の午後すごしたり",
   "家族とふはるかな擬態ある日々を輝けり川そのさきの海",
   "居残りのやうだな日々は子の眠るのちの世界にからだを起こす",
   "いちまいの銀貨に夜をのばすことのくらしにでつかいコインランドリー",
   "さみしい　に　こはい　をあてて話す夏をながくあるいて子と過ごしたり",
   "ひとつかみの風とあゆみてわかれたり以後のてのひらはつきりとする",
   "きのふとふ過去のみもちてをさなごのすべてのきのふをゆく飛行艇",
   "読み終へる時間を明日へもちこして光れりかろき未刊歌篇は"
];

function Canvas() {
    const [ctxWidth, setCtxWidth] = useState(window.innerWidth);
    const [ctxHeight, setCtxHeight] = useState(window.innerHeight);

    useEffect(() => {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        const fontSize = 20;

        // 数個分の作品を、少しずつずらして画面上に表示
        let x1 = canvas.width * Math.random();
        let y1 = canvas.height;
        let text1 = tanka[Math.floor(tanka.length * Math.random())]

        let x2 = canvas.width * Math.random();
        let y2 = canvas.height * 2;
        let text2 = tanka[Math.floor(tanka.length * Math.random())]

        if (!ctx) {
            return;
        } 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = `${fontSize}px Noto Serif JP`;
        ctx.fillStyle = `#888888`
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';

        window.addEventListener('resize', () => {
            setCtxWidth(window.innerWidth)
            setCtxHeight(window.innerHeight)
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = `${fontSize}px Noto Serif JP`;
            ctx.fillStyle = `#888888`
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
        })

        const drawText = () => {
            // キャンバスをクリア
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        
            // 縦書きのテキストを描画
            for (let i = 0; i < text1.length; i++) {
                ctx.fillText(text1[i], x1, y1 + i * fontSize);
            }
        
            for (let i = 0; i < text2.length; i++) {
                ctx.fillText(text2[i], x2, y2 + i * fontSize);
            }
        
            // テキストの描画位置を更新（画面外に全ての文字が出たら位置を再設定）
            if (y1 < (-1)*(fontSize * text1.length)-10) {
                x1 = canvas.width * Math.random();
                y1 = canvas.height
                text1 = tanka[Math.floor(tanka.length * Math.random())]
            } else {
                y1 -= 1;
            }

            if (y2 < (-1)*(fontSize * text2.length)-10) {
                x2 = canvas.width * Math.random();
                y2 = canvas.height
                text2 = tanka[Math.floor(tanka.length * Math.random())]
            } else {
                y2 -= 1;
            }
        
            // アニメーション継続
            requestAnimationFrame(drawText);
        };

        drawText();
    }, []);


    return (
        <canvas id='canvas' width={ctxWidth} height={ctxHeight}></canvas>
    );
}

export default Canvas;
