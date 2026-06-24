const questions = [
    {
        q: "1. The fresh apple tasted sweet.",
        options: ["S + V", "S + V + C", "S + V + O", "S + V + O + C"],
        answer: 1,
        why: "【核心：連綴動詞句型】tasted 是連綴動詞（嚐起來），後面接形容詞 sweet（甜的）來補充說明主詞蘋果的狀態，作為主詞補語（C）。故為 S + V + C。"
    },
    {
        q: "2. The heavy rain kept the students waiting inside the classroom.",
        options: ["S + V + O", "S + V + O + O", "S + V + O + C", "S + V"],
        answer: 2,
        why: "【核心：受詞補語】students 是受詞（O），後面的 waiting（正在等待）是現在分詞，用來形容受詞的動作狀態，作受詞補語（C）。故為 S + V + O + C。"
    },
    {
        q: "3. A new bike was bought for the boy by his father.",
        options: ["S + V + O + O", "S + V + O", "S + V", "S + V + C"],
        answer: 2,
        why: "【核心：被動態的骨架】這句的主動態是 Father bought the boy a bike (S+V+O+O)。但改為被動態時，物（A new bike）變成了主詞，後面的 for the boy 和 by his father 都變成了介系詞片語（修飾語 M），不計入核心，所以只剩下 S + V。"
    },
    {
        q: "4. The teacher found the English test very easy.",
        options: ["S + V + O", "S + V + O + C", "S + V + O + O", "S + V + C"],
        answer: 1,
        why: "【核心：發現某物如何】found 在此意思是「覺得/發現」。test 是受詞（O），easy（簡單的）是形容詞，用來修飾受詞測驗，擔任受詞補語（C）。故為 S + V + O + C。"
    },
    {
        q: "5. Her voice sounds like a professional singer.",
        options: ["S + V", "S + V + C", "S + V + O", "S + V + O + C"],
        answer: 1,
        why: "【核心：連綴動詞 + like】sounds 是連綴動詞，後面加上 like（像...一樣）構成的介系詞片語，在功能上等同於形容詞，用來修飾主詞，作主詞補語（C）。句型為 S + V + C。"
    },
    {
        q: "6. There remains an old house near the beautiful river.",
        options: ["S + V", "S + V + C", "S + V + O", "S + V + O + C"],
        answer: 0,
        why: "【核心：There 引導句】There 是虛主詞，真正的物理主詞是後面的 an old house。remains（依然存在）是不及物動詞（V），near the river 是地方修飾語（M）。本質上就是「主詞 + 不及物動詞」，故為 S + V。"
    },
    {
        q: "7. The judge declared the man innocent after the trial.",
        options: ["S + V + O", "S + V + O + O", "S + V + O + C", "S + V + C"],
        answer: 2,
        why: "【核心：宣告某人處於某狀態】declared 是動詞，the man 是受詞（O）。innocent（無罪的）是形容詞，用來補充說明受詞的狀態，屬於受詞補語（C）。故為 S + V + O + C。"
    },
    {
        q: "8. The funny movie made the children laugh happily.",
        options: ["S + V + O", "S + V + O + O", "S + V + O + C", "S + V"],
        answer: 2,
        why: "【核心：使役動詞用法】made 是使役動詞，the children 是受詞（O）。後面的原形動詞 laugh（笑）是作為「受詞補語」（C），表示受詞所做的動作。故為 S + V + O + C。"
    },
    {
        q: "9. After many years of hard work, Jason became a rich businessman.",
        options: ["S + V + O", "S + V + C", "S + V", "S + V + O + O"],
        answer: 1,
        why: "【核心：身分轉變的連綴動詞】句首的 After... 是時間修飾語（M）。主幹為 Jason (S) became (V) a rich businessman (C)。因為 businessman 指的就是主詞本身，身分對等，屬於名詞作主詞補語。句型為 S + V + C。"
    },
    {
        q: "10. The mother tasted the hot soup carefully.",
        options: ["S + V + C", "S + V + O", "S + V", "S + V + O + C"],
        answer: 1,
        why: "【💥初級陷阱：動詞意涵辨析】tasted 如果意思是「吃起來（如 The soup tastes good）」，則是連綴動詞 (SVC)；但在此句中，主詞是人（The mother），且有副詞 carefully 修飾，代表媽媽正主動執行「品嚐」這個動作。此時 tasted 是一般及物動詞，soup 是受詞。故為 S + V + O！"
    },
    {
        q: "11. The sad story left everyone crying in the room.",
        options: ["S + V + O", "S + V + O + C", "S + V + C", "S + V + O + O"],
        answer: 1,
        why: "【核心：讓某人保持某狀態】left 在此並非「離開」，而是「使...處於某狀態」。everyone 是受詞（O），crying 是現在分詞，用來修飾受詞當時的動作狀態，作受詞補語（C）。故為 S + V + O + C。"
    },
    {
        q: "12. We all consider Tom our best friend.",
        options: ["S + V + O + O", "S + V + O + C", "S + V + O", "S + V + C"],
        answer: 1,
        why: "【核心：名詞作受詞補語】consider（認為）是不完全及物動詞，Tom 是受詞（O）。後面的 our best friend 是名詞，因為「Tom ＝ 我們最好的朋友」，身分對等，故為名詞作受詞補語（C）。不是雙受詞。故為 S + V + O + C。"
    },
    {
        q: "13. I lent my favorite comic book to Linda yesterday.",
        options: ["S + V + O + O", "S + V + O", "S + V + O + C", "S + V"],
        answer: 1,
        why: "【核心：授與動詞改換介系詞】原本可寫成 I lent Linda my book (S+V+O+O)。但當直接受詞 book 被移到前面時，後面的 to Linda 變成了「介系詞片語」，在文法上被視為修飾語（M）。因此核心句型只剩下「我 (S) 借了 (V) 書 (O)」，為 S + V + O。"
    },
    {
        q: "14. The police officer caught the thief stealing a bicycle.",
        options: ["S + V + O", "S + V + O + C", "S + V + C", "S + V + O + O"],
        answer: 1,
        why: "【核心：感官/發現動詞用法】caught 在此表示當場抓住/發現某人正在做某事。the thief 是受詞（O），stealing... 作為現在分詞片語，補充說明受詞正在進行的動作，作受詞補語（C）。故為 S + V + O + C。"
    },
    {
        q: "15. The red roses in the basket smell wonderful.",
        options: ["S + V", "S + V + O", "S + V + C", "S + V + O + C"],
        answer: 2,
        why: "【核心：連綴動詞與修飾語】in the basket 是形容詞片語，用來修飾主詞 roses。核心骨架為 Roses (S) smell (V) wonderful (C)，smell 為連綴動詞（聞起來），wonderful 為形容詞作主詞補語。故為 S + V + C。"
    },
    {
        q: "16. My dream this year is to visit Disneyland in Japan.",
        options: ["S + V + O", "S + V + C", "S + V", "S + V + O + C"],
        answer: 1,
        why: "【核心：不定詞當主詞補語】is 是不完全不及物動詞（be動詞）。後面的 to visit Disneyland... 是不定詞片語，在功能上等於說明主詞 my dream 的具體內容（我的夢想 = 去迪士尼），作主詞補語（C）。故為 S + V + C。"
    },
    {
        q: "17. The strong wind blew the old tree down last night.",
        options: ["S + V + O", "S + V + O + C", "S + V", "S + V + C"],
        answer: 1,
        why: "【核心：副詞作受詞補語】tree 是受詞（O）。down 在此是地方副詞，用來補充說明 tree 遭受風吹之後的「結果狀態」（樹倒了），屬於副詞作受詞補語（C）。故為 S + V + O + C。"
    },
    {
        q: "18. The tour guide showed the tourists a beautiful church.",
        options: ["S + V + O", "S + V + O + O", "S + V + O + C", "S + V + C"],
        answer: 1,
        why: " = "【核心：標準雙賓句型】showed 是授與動詞（展示），後方接了兩個受詞：tourists 是接受者（間接受詞 Oi），a beautiful church 是被展示的物品（直接受詞 Od）。故為標準的 S + V + O + O 句型。"
    },
    {
        q: "19. The little birds sang happily in the green trees.",
        options: ["S + V", "S + V + C", "S + V + O", "S + V + O + C"],
        answer: 0,
        why: "【核心：不及物動詞與修飾語】sang 是完全不及物動詞（V）。happily 是情態副詞（M），in the green trees 是地方副詞片語（M）。兩者皆為修飾語，不影響主幹。句子純粹由「主詞 + 動詞」構成，故為 S + V。"
    },
    {
        q: "20. The sad song always makes me want to cry.",
        options: ["S + V + O", "S + V + C", "S + V + O + C", "S + V + O + O"],
        answer: 2,
        why: "【核心：使役動詞用法】makes 為使役動詞，me 是受詞（O）。後方的 want 是原形動詞，用來補充說明受詞（我）產生的心理反應，作受詞補語（C）。故為 S + V + O + C。"
    },
    {
        q: "21. The old house on the hill looks scary at night.",
        options: ["S + V", "S + V + C", "S + V + O", "S + V + O + C"],
        answer: 1,
        why: "【核心：連綴動詞外觀特徵】looks 是連綴動詞（看起來）。scary（可怕的）是形容詞，用來修飾及說明主詞 house 的特質，作主詞補語（C）。on the hill 是修飾語。故為 S + V + C。"
    },
    {
        q: "22. The long English class made the workers very tired.",
        options: ["S + V + O", "S + V + O + C", "S + V + C", "S + V + O + O"],
        answer: 1,
        why: "【核心：使役動詞接形容詞補語】made 是及物動詞，workers 是受詞（O）。tired 是形容詞作受詞補語（C），用來描述受詞員工們被課堂影響後的疲憊狀態；very 是副詞修飾 tired。故為 S + V + O + C。"
    },
    {
        q: "23. My sister painted her bedroom pink yesterday afternoon.",
        options: ["S + V + O", "S + V + O + O", "S + V + O + C", "S + V + C"],
        answer: 2,
        why: "【核心：動作結果作補語】painted 為動詞，bedroom 是受詞（O）。pink（粉紅色的）是形容詞，指房間被漆過之後產生的「結果狀態」，屬於受詞補語（C）。故主幹為 S + V + O + C。"
    },
    {
        q: "24. The classmates elected David leader of the class.",
        options: ["S + V + O + O", "S + V + O + C", "S + V + O", "S + V + C"],
        answer: 1,
        why: "【核心：選任動詞職稱補語】elected 是選任動詞。David 是受詞（O），leader（長官/幹部）雖然是名詞，但因為「David ＝ 班長」，兩者指的是同一人且具備身分對等關係，因此 leader 是作受詞補語（C），而非雙受詞。故為 S + V + O + C。"
    },
    {
        q: "25. The good news that we won the game made everyone happy.",
        options: ["S + V + O", "S + V + C", "S + V + O + C", "S + V + O + O"],
        answer: 2,
        why: "【💥初級進階陷阱：同位語引導】that we won the game 是一個同位語子句，用來補充說明 The good news，跟主詞視為一體。真正的動詞是後面的 made，受詞是 everyone，happy 是形容詞作受詞補語（C）。因此主要骨架為 S + V + O + C。"
    }
];