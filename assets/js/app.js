document.addEventListener('DOMContentLoaded', function () {
    const questionLabels = ['1-1', '1-2', '2-1', '2-2', '3', '4-1', '4-2', '5', '6', '7-1', '7-2', '8'];

    const questionCnts = {
        '1-1': 20,
        '1-2': 10,
        '2-1': 18,
        '2-2': 2,
        '3': 5,
        '4-1': 10,
        '4-2': 5,
        '5': 10,
        '6': 5,
        '7-1': 5,
        '7-2': 5,
        '8': 10,
        '9-1': 10,
        '9-2': 10
    };

    const choiceCnts = {
        '1-1': 20,
        '1-2': 10,
        '2-1': 18,
        '2-2': 2,
        '3': 8,
        '4-1': 10,
        '4-2': 8,
        '5': 10,
        '6': 5,
        '7-1': 5,
        '7-2': 5,
        '8': 10,
        '9-1': 10,
        '9-2': 10
    };

    let choices7 = { '7-1': [], '7-2': [] };
    let allData = []; // Store all loaded questions

    // 全てのJSONファイルを読み込む関数
    async function loadAllQuestions() {
        const promises = questionLabels.map(label => 
            // fetch(`../../data/processed/${label}.json`).then(response => response.json())
            fetch(`../data/processed/${label}.json`).then(response => response.json())
        );
        return Promise.all(promises);
    }

    // メイン処理
    function processQuestions(data) {
        /* console.log('Processing questions...'); // デバッグログ */
        data.forEach((questions, index) => {
            const label = questionLabels[index];
            /* console.log(`Processing ${label}...`); // デバッグログ */
            let randomQuestions = questions.subQuestions.sort(() => 0.5 - Math.random()).slice(0, choiceCnts[label]);
            
            if (label == '4-1' || label == '4-2') {
                handleQuestion4(label, randomQuestions);
            } else if (label == '6') {
                handleQuestion6(label, randomQuestions);
            } else {
                handleOtherQuestions(label, randomQuestions);
            }
        });

        // 問7の選択肢を処理
        handleQuestion7();
        /* console.log('Finished processing questions.'); // デバッグログ */
    }

    // すべての<details>要素を閉じる関数
    function closeAllDetails() {
        const allDetails = document.querySelectorAll('details.answer-details');
        allDetails.forEach(detail => {
            detail.open = false;
        });
        /* console.log('Closed all answer details'); // デバッグログ */
    }

    loadAllQuestions().then(data => {
        allData = data; // Store all loaded questions
        /* console.log('Questions loaded:', allData.length); // デバッグログ */
        processQuestions(allData);
    }).catch(error => console.error('Error loading questions:', error));

    // 別の問題ボタンのイベントリスナーを追加
    const randomizeBtn = document.getElementById('randomize-btn');
    if (randomizeBtn) {
        /* console.log('Randomize button found'); // デバッグログ */
        randomizeBtn.addEventListener('click', function(e) {
            /* console.log('Randomize button clicked'); // デバッグログ */
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' }); // スムーズにページの先頭へスクロール
            closeAllDetails(); // すべての回答を閉じる
            processQuestions(allData);
        });
    }/* else {
        console.log('Randomize button not found'); // デバッグログ
    }*/

    function handleQuestion4(label, randomQuestions) {
        /* ---------------------------------------------------
            問４
        --------------------------------------------------- */
        // 問題数分だけ挿入
        randomQuestions.slice(0, questionCnts[label]).forEach((subQuestion, subIndex) => {
            const questionText = document.getElementById(`question-text-${label}-${subIndex}`);
            const answerText = document.getElementById(`answer-text-${label}-${subIndex}`);
            const explanationText = document.getElementById(`explanation-text-${label}-${subIndex}`);
            
            if (questionText) {
                if (label == '4-1') {
                    questionText.innerHTML = `${subQuestion.questionParts.before}${subQuestion.questionParts.after}`;
                } else if (label == '4-2') {
                    questionText.innerHTML = subQuestion.questionParts.before;
                }
            }
            if (answerText) answerText.innerHTML = subQuestion.answer;
            if (explanationText) explanationText.innerHTML = subQuestion.explanation;
        });

        // すべての選択肢を抽出しシャッフル
        choices = randomQuestions.map(subQuestion => subQuestion.choice);
        choices = choices.sort(() => 0.5 - Math.random());

        // 選択肢を挿入
        choices.forEach((choice, choiceIndex) => {
            const choiceElement = document.getElementById(`question-choice-${label}-${choiceIndex}`);
            if (label == '4-1') {
                choiceElement.innerHTML = choice;
            } else if (label == '4-2') {
                choiceElement.innerHTML = `${choice.text.replace(choice.underline, `<span class="underline-text">${choice.underline}</span>`)}`;
            }
        });
    }
    
    function handleQuestion6(label, randomQuestions) {
        /* ---------------------------------------------------
            問６
        --------------------------------------------------- */
        // 問題数分だけ挿入
        randomQuestions.slice(0, questionCnts[label]).forEach((subQuestion, subIndex) => {
            subQuestion.questionParts.before.forEach((word, subsubIndex) => {
                const questionText = document.getElementById(`question-text-${label}-${subIndex}-${subsubIndex}`);
                questionText.innerHTML = word;
            });
            subQuestion.answer.forEach((word, subsubIndex) => {
                const answerText = document.getElementById(`answer-text-${label}-${subIndex}-${subsubIndex}`);
                answerText.innerHTML = word;
            });
            const explanationText = document.getElementById(`explanation-text-${label}-${subIndex}`);
            if (explanationText) explanationText.innerHTML = subQuestion.explanation;
        });
    }

    function handleOtherQuestions(label, randomQuestions) {
        /* ---------------------------------------------------
            問４・６以外
        --------------------------------------------------- */
        randomQuestions.slice(0, questionCnts[label]).forEach((subQuestion, subIndex) => {
            const questionText = document.getElementById(`question-text-${label}-${subIndex}`);
            const answerText = document.getElementById(`answer-text-${label}-${subIndex}`);
            const explanationText = document.getElementById(`explanation-text-${label}-${subIndex}`);
            
            if (questionText) {
                let questionContent = "";
                if (subQuestion.questionParts.before) questionContent += subQuestion.questionParts.before; 
                if (subQuestion.questionParts.highlight) questionContent += `<span class="underline-text">${subQuestion.questionParts.highlight}</span>`;
                if (subQuestion.questionParts.after) questionContent += subQuestion.questionParts.after;
                questionText.innerHTML = questionContent;
            }
            if (answerText) answerText.innerHTML = subQuestion.answer;
            if (explanationText) explanationText.innerHTML = subQuestion.explanation;
        });

        if (label == '3') {
            let choices = randomQuestions.map(subQuestion => subQuestion.choice).sort(() => 0.5 - Math.random());
            choices.forEach((choice, choiceIndex) => {
                const choiceElement = document.getElementById(`question-choice-${label}-${choiceIndex}`);
                if (choiceElement) choiceElement.innerHTML = choice;
            });
        } else if (label == '7-1' || label == '7-2') {
            choices7[label] = randomQuestions.map(subQuestion => subQuestion.choice);
        }
    }

    function handleQuestion7() {
        let allChoices7 = [...choices7['7-1'], ...choices7['7-2']].sort(() => 0.5 - Math.random());
        allChoices7.forEach((choice, choiceIndex) => {
            const choiceElement = document.getElementById(`question-choice-7-${choiceIndex}`);
            if (choiceElement) choiceElement.innerHTML = choice;
        });
    }

});
