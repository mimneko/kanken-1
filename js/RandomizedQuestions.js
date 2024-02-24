class RandomizedQuestions {
    // 115
    q_id = [
        "#q1-1", "#q1-2", "#q1-3", "#q1-4", "#q1-5", "#q1-6", "#q1-7", "#q1-8", "#q1-9", "#q1-10",
        "#q1-11", "#q1-12", "#q1-13", "#q1-14", "#q1-15", "#q1-16", "#q1-17", "#q1-18", "#q1-19", "#q1-20",
        "#q1-21", "#q1-22", "#q1-23", "#q1-24", "#q1-25", "#q1-26", "#q1-27", "#q1-28", "#q1-29", "#q1-30",

        "#q2-1", "#q2-2", "#q2-3", "#q2-4", "#q2-5", "#q2-6", "#q2-7", "#q2-8", "#q2-9", "#q2-10",

        "#q3-1", "#q3-2", "#q3-3", "#q3-4", "#q3-5", "#q3-6", "#q3-7", "#q3-8", "#q3-9", "#q3-10",

        "#q4-1", "#q4-2", "#q4-3", "#q4-4", "#q4-5",

        "#q5-1", "#q5-2", "#q5-3", "#q5-4", "#q5-5", "#q5-6", "#q5-7", "#q5-8", "#q5-9", "#q5-10",
        "#q5-11", "#q5-12", "#q5-13", "#q5-14", "#q5-15", "#q5-16", "#q5-17", "#q5-18", "#q5-19", "#q5-20",

        "#q6-1", "#q6-2", "#q6-3", "#q6-4", "#q6-5",

        "#q7-1-1", "#q7-1-2", "#q7-1-3", "#q7-1-4", "#q7-1-5", "#q7-1-6", "#q7-1-7", "#q7-1-8", "#q7-1-9", "#q7-1-10",
        "#q7-2-1", "#q7-2-2", "#q7-2-3", "#q7-2-4", "#q7-2-5",

        "#q8-1", "#q8-2", "#q8-3", "#q8-4", "#q8-5", "#q8-6", "#q8-7", "#q8-8", "#q8-9", "#q8-10",

        "#q9-1", "#q9-2", "#q9-3", "#q9-4", "#q9-5", "#q9-6", "#q9-7", "#q9-8", "#q9-9", "#q9-10",
    ];

    // 115
    a_id = [
        "#a1-1", "#a1-2", "#a1-3", "#a1-4", "#a1-5", "#a1-6", "#a1-7", "#a1-8", "#a1-9", "#a1-10",
        "#a1-11", "#a1-12", "#a1-13", "#a1-14", "#a1-15", "#a1-16", "#a1-17", "#a1-18", "#a1-19", "#a1-20",
        "#a1-21", "#a1-22", "#a1-23", "#a1-24", "#a1-25", "#a1-26", "#a1-27", "#a1-28", "#a1-29", "#a1-30",

        "#a2-1", "#a2-2", "#a2-3", "#a2-4", "#a2-5", "#a2-6", "#a2-7", "#a2-8", "#a2-9", "#a2-10",

        "#a3-1", "#a3-2", "#a3-3", "#a3-4", "#a3-5", "#a3-6", "#a3-7", "#a3-8", "#a3-9", "#a3-10",

        "#a4-1", "#a4-2", "#a4-3", "#a4-4", "#a4-5",

        "#a5-1", "#a5-2", "#a5-3", "#a5-4", "#a5-5", "#a5-6", "#a5-7", "#a5-8", "#a5-9", "#a5-10",
        "#a5-11", "#a5-12", "#a5-13", "#a5-14", "#a5-15", "#a5-16", "#a5-17", "#a5-18", "#a5-19", "#a5-20",

        "#a6-1", "#a6-2", "#a6-3", "#a6-4", "#a6-5",

        "#a7-1-1", "#a7-1-2", "#a7-1-3", "#a7-1-4", "#a7-1-5", "#a7-1-6", "#a7-1-7", "#a7-1-8", "#a7-1-9", "#a7-1-10",
        "#a7-2-1", "#a7-2-2", "#a7-2-3", "#a7-2-4", "#a7-2-5",

        "#a8-1", "#a8-2", "#a8-3", "#a8-4", "#a8-5", "#a8-6", "#a8-7", "#a8-8", "#a8-9", "#a8-10",

        "#a9-1", "#a9-2", "#a9-3", "#a9-4", "#a9-5", "#a9-6", "#a9-7", "#a9-8", "#a9-9", "#a9-10",
    ];

    // 36
    o_id = [
        "#o4-1", "#o4-2", "#o4-3", "#o4-4", "#o4-5", "#o4-6", "#o4-7", "#o4-8",

        "#o7-1-1", "#o7-1-2", "#o7-1-3", "#o7-1-4", "#o7-1-5", "#o7-1-6", "#o7-1-7", "#o7-1-8", "#o7-1-9", "#o7-1-10",
        "#o7-2-1", "#o7-2-2", "#o7-2-3", "#o7-2-4", "#o7-2-5", "#o7-2-6", "#o7-2-7", "#o7-2-8",

        "#o8-1", "#o8-2", "#o8-3", "#o8-4", "#o8-5", "#o8-6", "#o8-7", "#o8-8", "#o8-9", "#o8-10",
    ];

    questions = [...Array(115).keys()];
    answers = [...Array(115).keys()];
    options = [...Array(36).keys()];

    constructor() {
        // csv読み込み
        this.tbl1_20 = this.importCsv('assets/1-20.csv');
        this.tbl1_30 = this.importCsv('assets/1-30.csv');
        this.tbl2 = this.importCsv('assets/2.csv');
        this.tbl3 = this.importCsv('assets/3.csv');
        this.tbl4 = this.importCsv('assets/4.csv');
        this.tbl5 = this.importCsv('assets/5.csv');
        this.tbl6 = this.importCsv('assets/6.csv');
        this.tbl7 = this.importCsv('assets/7.csv');
        this.tbl8_5 = this.importCsv('assets/8-5.csv');
        this.tbl8_10 = this.importCsv('assets/8-10.csv');
        this.tbl9 = this.importCsv('assets/9.csv');

        // 問題数
        $("#cnt1").text(this.tbl1_20.length+'+'+this.tbl1_30.length);
        $("#cnt2").text(this.tbl2.length);
        $("#cnt3").text(this.tbl3.length);
        $("#cnt4").text(this.tbl4.length);
        $("#cnt5").text(this.tbl5.length);
        $("#cnt6").text(this.tbl6.length);
        $("#cnt7").text(this.tbl7.length);
        $("#cnt8").text(this.tbl8_5.length+'+'+this.tbl8_10.length);
        $("#cnt9").text(this.tbl9.length);
        
        // ランダム要素
        this.randomize();
    }

    importCsv(csvFile){
        /*
        https://notetoself-dy.com/javascript-csv/
        https://uxmilk.jp/11586
        のような読み込み方法だと、読み込んだ二次元配列tbl自体はlogできるものの、tbl[0]、tabl[0][0]などはundefinedとなってしまう。
        */
        // https://kasumiblog.org/javascript-csv-array/
        // CSVファイルを取得
        let csv = new XMLHttpRequest();
         
        // CSVファイルへのパス
        csv.open("GET", csvFile, false);
         
        // csvファイル読み込み失敗時のエラー対応
        try {
          csv.send(null);
        } catch (err) {
          console.log(err);
        }
         
        // 配列を定義
        let csvArray = [];
         
        // 改行ごとに配列化
        let lines = csv.responseText.split(/\r\n|\n/);
         
        // 1行ごとに処理
        for (let i = 1; i < lines.length; ++i) {    // ヘッダを読み込まない
          let cells = lines[i].split(",");
          if (cells.length > 1) csvArray.push(cells);
        }
         
        // コンソールに配列を出力
        return csvArray;
    }

    getQuestionCount() {
        return this.q_id.length;
    }

    getAnswerCount() {
        return this.a_id.length;
    }
    
    getOptionCount() {
        return this.o_id.length;
    }

    getQuestionId(i) {
        return this.q_id[i];
    }

    getAnswerId(i) {
        return this.a_id[i];
    }

    getOptionId(i) {
        return this.o_id[i];
    }

    getQuestion(i) {
        return this.questions[i];
    }

    getAnswer(i) {
        return this.answers[i];
    }

    getOption(i) {
        return this.options[i];
    }

    // https://gray-code.com/javascript/shuffle-for-item-of-array/
    // https://techblg.app/articles/how-to-create-array-containing-0-n/
    // [0, max)
    randomArray(max) {
        let array = [...Array(max).keys()];

        for (let i = (array.length - 1); 0 < i; i--) {
            // 0〜(i+1)の範囲で値を取得
            let r = Math.floor(Math.random() * (i + 1));

            // 要素の並び替えを実行
            let tmp = array[i];
            array[i] = array[r];
            array[r] = tmp;
        }

        return array;
    }

    sortOption(min, max){
        let arr = this.options.slice(min, max);
        arr.sort();
        for (let i = min; i < max; i++) {
            this.options[i] = arr[i-min];
        }
    }
    
    randomize() {
        // 乱数生成
        this.index1_20 = this.randomArray(this.tbl1_20.length);
        this.index1_30 = this.randomArray(this.tbl1_30.length);
        this.index2 = this.randomArray(this.tbl2.length);
        this.index3 = this.randomArray(this.tbl3.length);
        this.index4 = this.randomArray(this.tbl4.length);
        this.index5 = this.randomArray(this.tbl5.length);
        this.index6 = this.randomArray(this.tbl6.length);
        this.index7 = this.randomArray(this.tbl7.length);
        this.index8_5 = this.randomArray(this.tbl8_5.length);
        this.index8_10 = this.randomArray(this.tbl8_10.length);
        this.index9 = this.randomArray(this.tbl9.length);
        this.indexOptions4 = this.randomArray(8);
        this.indexOptions7_1 = this.randomArray(10);
        this.indexOptions7_2 = this.randomArray(8);
        this.indexOptions8 = this.randomArray(10);
        
        // 問題・解答をセット
        for (let i = 0; i < 20; i++) {
            let k = this.index1_20[i - 0];
            this.questions[i] = this.tbl1_20[k][0] + '<span class="empha">' + this.tbl1_20[k][1] + '</span>' + this.tbl1_20[k][2];
            this.answers[i] = this.tbl1_20[k][3];
        }
        for (let i = 20; i < 30; i++) {
            let k = this.index1_30[i - 20];
            this.questions[i] = this.tbl1_30[k][0] + '<span class="empha">' + this.tbl1_30[k][1] + '</span>' + this.tbl1_30[k][2];
            this.answers[i] = this.tbl1_30[k][3];
        }
        for (let i = 30; i < 40; i++) {
            let k = this.index2[i - 30];
            this.questions[i] = this.tbl2[k][0] + '<span class="empha">' + this.tbl2[k][1] + '</span>' + this.tbl2[k][2];
            this.answers[i] = this.tbl2[k][3];
        }
        for (let i = 40; i < 50; i += 2) {
            let k = this.index3[i - 40];
            this.questions[i] = this.tbl3[k][0];
            this.questions[i + 1] = this.tbl3[k][2];
            this.answers[i] = this.tbl3[k][1];
            this.answers[i + 1] = this.tbl3[k][3];
        }
        for (let i = 50; i < 55; i++) {
            let k = this.index4[i - 50];
            this.questions[i] = this.tbl4[k][0] + '(　)' + this.tbl4[k][1] + '<br>' + this.tbl4[k][2] + '(　)' + this.tbl4[k][3];
            this.answers[i] = this.tbl4[k][4];
            //this.options[this.indexOptions4[i - 50] + 0] = this.tbl4[k][5];
            this.options[i - 50] = this.tbl4[k][5];
        }
        for (let i = 5; i < 8; i++) {
            let k = this.index4[i];
            //this.options[this.indexOptions4[i] + 0] = this.tbl4[k][5];
            this.options[i] = this.tbl4[k][5];
        }
        for (let i = 55; i < 75; i++) {
            let k = this.index5[i - 55];
            this.questions[i] = this.tbl5[k][0] + '<span class="empha">' + this.tbl5[k][1] + '</span>' + this.tbl5[k][2];
            this.answers[i] = this.tbl5[k][3];
        }
        for (let i = 75; i < 80; i++) {
            let k = this.index6[i - 75];
            this.questions[i] = this.tbl6[k][0];
            this.answers[i] = this.tbl6[k][1];
        }
        for (let i = 80; i < 90; i++) {
            let k = this.index7[i - 80];
            if (Math.random() > 0.5) {
                this.questions[i] = '□□' + this.tbl7[k][3];
                this.answers[i] = this.tbl7[k][1];
                //this.options[this.indexOptions7_1[i - 80] + 8] = this.tbl7[k][2];
                this.options[i - 72] = this.tbl7[k][2];
            } else {
                this.questions[i] = this.tbl7[k][1] + '□□';
                this.answers[i] = this.tbl7[k][3];
                //this.options[this.indexOptions7_1[i - 80] + 8] = this.tbl7[k][4];
                this.options[i - 72] = this.tbl7[k][4];
            }
        }
        for (let i = 90; i < 95; i++) {
            let k = this.index7[i - 80];
            this.questions[i] = this.tbl7[k][0];
            if (Math.random() > 0.5) {
                this.answers[i] = this.tbl7[k][2];
                this.options[this.indexOptions7_2[i - 90] + 18] = '<span class="underline">' + this.tbl7[k][1] + '</span>' + this.tbl7[k][3];
            } else {
                this.answers[i] = this.tbl7[k][4];
                this.options[this.indexOptions7_2[i - 90] + 18] = this.tbl7[k][1] + '<span class="underline">' + this.tbl7[k][3] + '</span>';
            }
        }
        for (let i = 18; i < 21; i++) {
            let k = this.index7[i];
            if (Math.random() > 0.5) {
                this.options[this.indexOptions7_2[i - 13] + 18] = '<span class="underline">' + this.tbl7[k][1] + '</span>' + this.tbl7[k][3];
            } else {
                this.options[this.indexOptions7_2[i - 13] + 18] = this.tbl7[k][1] + '<span class="underline">' + this.tbl7[k][3] + '</span>';
            }
        }
        for (let i = 95; i < 100; i++) {
            let k = this.index8_5[i - 95];
            this.questions[i] = this.tbl8_5[k][0];
            this.answers[i] = this.tbl8_5[k][1];
            //this.options[this.indexOptions8[i - 95] + 26] = this.tbl8_5[k][2];
            this.options[i - 69] = this.tbl8_5[k][2];
        }
        for (let i = 100; i < 105; i++) {
            let k = this.index8_10[i - 100];
            this.questions[i] = this.tbl8_10[k][0];
            this.answers[i] = this.tbl8_10[k][1];
            //this.options[this.indexOptions8[i - 95] + 26] = this.tbl8_10[k][2];
            this.options[i - 69] = this.tbl8_10[k][2];
        }
        for (let i = 105; i < 115; i++) {
            let k = this.index9[i - 105];
            this.questions[i] = this.tbl9[k][0] + '<span class="empha">' + this.tbl9[k][1] + '</span>' + this.tbl9[k][2];
            this.answers[i] = this.tbl9[k][3];
        }

        // 選択肢をソート
        this.sortOption(0,8);
        this.sortOption(8,18);
        this.sortOption(26,36);
    }

}
