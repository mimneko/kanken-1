const fs = require('fs');

class Record {
    constructor(number, question, difficulty, answer, alternative, meaning) {
        this.number = number;
        this.question = question;
        this.difficulty = difficulty;
        this.answer = answer;
        this.alternative = alternative;
        this.meaning = meaning;
    }
}

class CSVHandler {
    constructor(filePath) {
        this.filePath = filePath;
    }

    readCSV() {
        const fileContent = fs.readFileSync(this.filePath, 'utf8');
        const rows = fileContent.split('\n').map(row => row.split(','));
        const header = rows[0];
        const data = rows.slice(1);

        const result = data.map(row => {
            const recordData = {};
            header.forEach((key, index) => {
                recordData[key] = row[index];
            });
            return new Record(recordData.番, recordData.問題, recordData.難度, recordData.解答, recordData.別答, recordData.意味);
        });

        return result;
    }

    writeCSV(records) {
        const header = Object.keys(new Record()).join(',');
        const rows = records.map(record => Object.values(record).join(',')).join('\n');
        const content = `${header}\n${rows}`;

        fs.writeFileSync(this.filePath, content, 'utf8');
    }
}

// 使用例
const csvFilePath = 'assets/熟字訓当て字.csv';
const csvHandler = new CSVHandler(csvFilePath);

// CSVファイルの読み込み
const records = csvHandler.readCSV();
console.log(records);

// レコードの変更例（この例では何も変更していません）
// records[0].question = '新しい問題';

// 変更をCSVファイルに書き込み
// csvHandler.writeCSV(records);
