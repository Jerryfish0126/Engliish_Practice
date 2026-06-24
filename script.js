const questions = [
    {
        q: "1. The package mailed from New York arrived broken.",
        options: ["S + V", "S + V + C", "S + V + O", "S + V + O + C"],
        answer: 1,
        why: "【陷阱：分詞修飾 vs. 補語辨析】mailed from New York 是過去分詞片語，當形容詞修飾主詞 The package。arrived 在此作為連綴動詞（類似 turned out to be），broken 是形容詞，用來補充說明主詞包裹的狀態。故為 S + V + C 句型。"
    },
    {
        q: "2. The heavy rain kept the enthusiastic fans waiting outside the stadium for hours.",
        options: ["S + V + O", "S + V + O + O", "S + V + O + C", "S + V"],
        answer: 2,
        why: "【陷阱：時間與空間副詞的干擾】fans 是受詞（O），而 waiting outside... 是現在分詞片語，用來描述受詞粉絲當時正在進行的動作，作受詞補語（C）。for hours 為時間副詞修飾語（M），不計入核心句型。故為 S + V + O + C。"
    },
    {
        q: "3. A beautiful watch was bought for the graduating student by his proud parents.",
        options: ["S + V + O + O", "S + V + O", "S + V", "S + V + C"],
        answer: 2,
        why: "【陷阱：雙賓動詞改為被動態】這題原本的主動態是 Parents bought the student a watch (S+V+O+O)。但改為被動態時，直接受詞 a watch 變成了主詞，後方的 for the student 與 by his parents 全變成了介系詞片語（修飾語 M）。被動態的動詞 was bought 不再能接兩個受詞，句子骨架僅剩 S + V。答案選 C。"
    },
    {
        q: "4. The CEO found the newly implemented marketing strategy highly effective.",
        options: ["S + V + O", "S + V + O + C", "S + V + O + O", "S + V + C"],
        answer: 1,
        why: "【陷阱：副詞修飾形容詞作補語】found 在此非「尋找」，而是「發現/認為」。受詞是 strategy（newly implemented 為其形容詞修飾語）；effective 是形容詞，用以修飾受詞 strategy，擔任受詞補語（C）；highly 是副詞修飾 effective。故為 S + V + O + C。"
    },
    {
        q: "5. Her voice sounds like that of a professional opera singer.",
        options: ["S + V", "S + V + C", "S + V + O", "S + V + O + C"],
        answer: 1,
        why: "【陷阱：連綴動詞接介系詞片語】sounds 是連綴動詞，後面不能直接接名詞，須加上 like。像 like... 這種介系詞片語在此處在功能上等同於形容詞，用來修飾主詞，故作主詞補語（C）。句型為 S + V + C。"
    },
    {
        q: "6. There remains an unresolved issue concerning the new company policy.",
        options: ["S + V", "S + V + C", "S + V + O", "S + V + O + C"],
        answer: 0,
        why: "【陷阱：虛主詞引導句】There 是引導詞（虛主詞），真正的物理主詞是後面的 an unresolved issue。remains 是不及物動詞（V），concerning... 是分詞片語修飾 issue。整個結構本質上就是「主詞 + 動詞」，故為 S + V。"
    },
    {
        q: "7. The company declared the contract null and void due to a technical breach.",
        options: ["S + V + O", "S + V + O + O", "S + V + O + C", "S + V + C"],
        answer: 2,
        why: "【陷阱：法律雙重形容詞補語】declared 為及物動詞，contract 是受詞。null and void（無效的）是形容詞片語，用來補充說明契約的狀態，屬於受詞補語（C）。due to... 是原因副詞片語。故為 S + V + O + C。"
    },
    {
        q: "8. The software update made the computer run significantly faster than before.",
        options: ["S + V + O", "S + V + O + O", "S + V + O + C", "S + V"],
        answer: 2,
        why: "【陷阱：使役動詞與原形動詞補語】made 為使役動詞，computer 是受詞。後面的 run 雖然是動詞原形，但在使役動詞句型中，它帶領的片語是作為「受詞補語」（C），表示受詞所做的動作。故為 S + V + O + C。"
    },
    {
        q: "9. With hard work and dedication, the young entrepreneur became a billionaire overnight.",
        options: ["S + V + O", "S + V + C", "S + V", "S + V + O + O"],
        answer: 1,
        why: "【陷阱：首尾修飾語干擾】句首的 With... 是伴隨狀語（M），overnight 是時間副詞（M）。主幹為 the young entrepreneur (S) became (V) a billionaire (C)。因為 billionaire 指的就是主詞本身，身分對等，故為名詞作主詞補語。句型為 S + V + C。"
    },
    {
        q: "10. The chef tasted the soup carefully before serving it to the guests.",
        options: ["S + V + C", "S + V + O", "S + V", "S + V + O + C"],
        answer: 1,
        why: "【💥高級陷阱：連綴動詞 vs. 一般動詞】tasted 雖然常作連綴動詞（如 The soup tastes good -> SVC）。但在此句中，主詞是人（The chef），且後面有副詞 carefully 修飾動作，代表廚師正主動執行「品嚐」這個動作。此時 tasted 是一般及物動詞，soup 是受詞。故為 S + V + O！"
    },
    {
        q: "11. The unexpected turn of events left him speechless for a long time.",
        options: ["S + V + O", "S + V + O + C", "S + V + C", "S + V + O + O"],
        answer: 1,
        why: "【陷阱：使役變形動詞】left 在此並非「離開」或「留下東西」，而是「使...處於某狀態」。him 是受詞，speechless（說不出話的）是形容詞，用來修飾受詞 him 當時的狀態，作受詞補語（C）。故為 S + V + O + C。"
    },
    {
        q: "12. The committee considered him the most suitable candidate for the position.",
        options: ["S + V + O + O", "S + V + O + C", "S + V + O", "S + V + C"],
        answer: 1,
        why: "【陷阱：雙名詞接應（受詞 vs. 補語）】considered 是不完全及物動詞，him 是受詞。後面的 the most suitable candidate（最合適的人選）雖然是名詞，但因為「他 ＝ 最合適人選」，屬於身分對等，故為名詞作受詞補語（C）。不是雙受詞。故為 S + V + O + C。"
    },
    {
        q: "13. I lent my favorite sci-fi novel to Jane because she loves reading.",
        options: ["S + V + O + O", "S + V + O", "S + V + O + C", "S + V"],
        answer: 1,
        why: "【💥高頻陷阱：授與動詞改換介系詞】主動態原本可寫成 I lent Jane my novel (S+V+O+O)。但當直接受詞 novel 被移到前面時，後面的 to Jane 變成了「介系詞片語」，在文法上被視為修飾語（M）。因此核心句型只剩下「我 (S) 借了 (V) 小說 (O)」，為 S + V + O。"
    },
    {
        q: "14. The teacher caught the students cheating on the final exam.",
        options: ["S + V + O", "S + V + O + C", "S + V + C", "S + V + O + O"],
        answer: 1,
        why: "【陷阱：感官/發現動詞的分詞補語】caught 在此表示發現某人正在做某事。students 是受詞，cheating... 作為現在分詞片語，補充說明受詞正在進行的不當行為，作受詞補語（C）。故為 S + V + O + C。"
    },
    {
        q: "15. The flowers in the garden smell sweet in the early morning.",
        options: ["S + V", "S + V + O", "S + V + C", "S + V + O + C"],
        answer: 2,
        why: "【陷阱：修飾語夾雜】in the garden（形容詞片語修飾 flowers）以及 in the early morning（副詞片語時間修飾語）皆不計入核心骨架。核心為 Flowers (S) smell (V) sweet (C)，smell 為連綴動詞，sweet 為形容詞作主詞補語。故為 S + V + C。"
    },
    {
        q: "16. Her main goal this year is to obtain a master's degree in computer science.",
        options: ["S + V + O", "S + V + C", "S + V", "S + V + O + C"],
        answer: 1,
        why: "【陷阱：不定詞片語的身分轉換】is 是不完全不及物動詞（be動詞）。後面的 to obtain... 是不定詞片語，在名詞功能上等於 her main goal，說明目標的具體內容，作主詞補語（C）。故為 S + V + C。"
    },
    {
        q: "17. The storm blew the old wooden fence down last night.",
        options: ["S + V + O", "S + V + O + C", "S + V", "S + V + C"],
        answer: 1,
        why: "【陷阱：副詞作受詞補語】fence 是受詞。down 在此是副詞，用來補充說明 fence 遭受風吹之後的「結果狀態」（柵欄倒了），屬於地方副詞作受詞補語（C）。故為 S + V + O + C。"
    },
    {
        q: "18. The guide showed the tourists a historic temple located on the mountain.",
        options: ["S + V + O", "S + V + O + O", "S + V + O + C", "S + V + C"],
        answer: 1,
        why: "【陷阱：經典雙賓動詞】showed 是授與動詞，後方接了兩個名詞：tourists 是接受者（間接受詞 Oi），temple 是被展示的物品（直接受詞 Od）。located... 為分詞修飾 temple。故為標準的 S + V + O + O 句型。"
    },
    {
        q: "19. The small birds flew swiftly across the clear blue sky.",
        options: ["S + V", "S + V + C", "S + V + O", "S + V + O + C"],
        answer: 0,
        why: "【陷阱：副詞與介系詞片語堆疊】flew 是完全不及物動詞（V）。swiftly 是地方/情態副詞（M），across... 是地方副詞片語（M）。兩者皆為修飾語，不影響核心骨架。句子純粹由「主詞 + 動詞」構成，故為 S + V。"
    },
    {
        q: "20. The sad movie always makes me cry whenever I watch it.",
        options: ["S + V + O", "S + V + C", "S + V + O + C", "S + V + O + O"],
        answer: 2,
        why: "【陷阱：使役動詞與原形動詞補語】makes 為使役動詞，me 是受詞。後方的 cry 是原形動詞，用來補充說明受詞（我）所產生的反應動作，作受詞補語（C）。whenever... 引導副詞子句。故為 S + V + O + C。"
    },
    {
        q: "21. That old, dilapidated house on the corner looks haunted.",
        options: ["S + V", "S + V + C", "S + V + O", "S + V + O + C"],
        answer: 1,
        why: "【陷阱：過去分詞作形容詞補語】looks 是連綴動詞（看起來像）。haunted 在此已轉化為形容詞（鬧鬼的），用來修飾主詞 house 的特質，作主詞補語（C）。故為 S + V + C。"
    },
    {
        q: "22. The long and exhausting journey made the travelers extremely tired.",
        options: ["S + V + O", "S + V + O + C", "S + V + C", "S + V + O + O"],
        answer: 1,
        why: "【陷阱：副詞干擾形容詞補語】made 是及物動詞，travelers 是受詞。tired 是形容詞作受詞補語（C），用來描述旅客的狀態；extremely 則是副詞用來修飾 tired。故核心為 S + V + O + C。"
    },
    {
        q: "23. He painted the kitchen walls white to make the room look brighter.",
        options: ["S + V + O", "S + V + O + O", "S + V + O + C", "S + V + C"],
        answer: 2,
        why: "【陷阱：動作結果作受詞補語】painted 為動詞，walls 是受詞。white（白色的）是形容詞，指牆壁被油漆過後的「結果狀態」，屬於受詞補語（C）。後方 to make... 是目的狀語（M）。故主幹為 S + V + O + C。"
    },
    {
        q: "24. The board of directors elected Mary chairperson of the committee.",
        options: ["S + V + O + O", "S + V + O + C", "S + V + O", "S + V + C"],
        answer: 1,
        why: "【💥極難陷阱：選任動詞職稱補語】elected 是選任動詞（不完全及物動詞）。Mary 是受詞，chairperson（主席）雖然是名詞，但因為「Mary ＝ 主席」，兩者指的是同一人且具備身分對等關係，因此 chairperson 是作受詞補語（C）。這不是雙受詞！故為 S + V + O + C。"
    },
    {
        q: "25. The news that our team won the championship made everyone happy.",
        options: ["S + V + O", "S + V + C", "S + V + O + C", "S + V + O + O"],
        answer: 2,
        why: "【💥終極陷阱：同位語子句干擾】that our team won... 是一個「同位語子句」，用來補充說明 The news，整個名詞子句與主詞視為一體。真正的動詞是後面的 made，受詞是 everyone，happy 是形容詞作受詞補語（C）。因此句子主要骨架為 S + V + O + C。"
    }
];

// 動態渲染題目
const container = document.getElementById('questions-container');
questions.forEach((q, idx) => {
    let optionsHtml = '';
    q.options.forEach((opt, optIdx) => {
        optionsHtml += `
            <li class="option-item">
                <label class="option-label" id="label-${idx}-${optIdx}">
                    <input type="radio" name="q-${idx}" value="${optIdx}">
                    ${opt}
                </label>
            </li>
        `;
    });

    const qBlock = document.createElement('div');
    qBlock.className = 'question-block';
    qBlock.id = `qblock-${idx}`;
    qBlock.innerHTML = `
        <div class="question-text">${q.q}</div>
        <ul class="options-list">${optionsHtml}</ul>
        <div class="analysis" id="analysis-${idx}">
            <strong>🎯 正確答案：${q.options[q.answer]}</strong><br>
            ${q.why}
        </div>
    `;
    container.appendChild(qBlock);
});

// 計分功能
function calculateScore() {
    let score = 0;
    let answeredCount = 0;

    // 檢查是否每題都寫了
    for (let i = 0; i < questions.length; i++) {
        const selected = document.querySelector(`input[name="q-${i}"]:checked`);
        if (selected) answeredCount++;
    }

    if (answeredCount < questions.length) {
        alert(`您還有 ${questions.length - answeredCount} 題尚未作答，請完成後再行提交！`);
        return;
    }

    // 進行計分與著色
    questions.forEach((q, idx) => {
        const selected = document.querySelector(`input[name="q-${idx}"]:checked`);
        const userAns = parseInt(selected.value);
        const qBlock = document.getElementById(`qblock-${idx}`);
        const analysisBox = document.getElementById(`analysis-${idx}`);

        // 重設樣式
        qBlock.classList.remove('correct', 'wrong');
        
        // 移除舊的答案標記
        q.options.forEach((_, optIdx) => {
            document.getElementById(`label-${idx}-${optIdx}`).classList.remove('correct-ans', 'user-ans');
        });

        // 標示正確答案
        document.getElementById(`label-${idx}-${q.answer}`).classList.add('correct-ans');

        if (userAns === q.answer) {
            score++;
            qBlock.classList.add('correct');
        } else {
            qBlock.classList.add('wrong');
            document.getElementById(`label-${idx}-${userAns}`).classList.add('user-ans');
        }

        // 顯示解析
        analysisBox.style.display = 'block';
    });

    // 顯示結果面板
    const resultPanel = document.getElementById('result-panel');
    const scoreDisplay = document.getElementById('score-display');
    const commentary = document.getElementById('commentary');
    
    resultPanel.style.display = 'block';
    scoreDisplay.innerHTML = `${score} / ${questions.length} 分`;

    if (score === 25) {
        commentary.innerHTML = "🎯 太驚人了！25 題全對！你對英文五大句型結構的敏感度已經達到大師級別，出題者的所有陷阱都被你一眼看穿！";
        commentary.style.color = "var(--success)";
    } else if (score >= 18) {
        commentary.innerHTML = "👍 非常優秀！這份考卷極具挑戰性，你能拿到 18 分以上，代表文法底子十分紮實，只要細心檢視錯題解析即可！";
        commentary.style.color = "var(--primary)";
    } else if (score >= 12) {
        commentary.innerHTML = "⚖️ 中規中矩！你掌握了基本句型，但在面對修飾語夾雜、連綴動詞轉變或受詞補語的進階陷阱時容易動搖，多看下方的逐題解析會有大收穫！";
        commentary.style.color = "orange";
    } else {
        commentary.innerHTML = "⚠️ 仍需努力！這份題目確實非常刁鑽。建議仔細閱讀每一題的「深度陷阱解析」，釐清『受詞』與『補語』的核心本質差別。";
        commentary.style.color = "var(--error)";
    }

    // 滾動到最上方看分數
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 綁定按鈕點擊事件
document.getElementById('submit-btn').addEventListener('click', calculateScore);