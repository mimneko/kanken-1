// URLパラメータからCSVファイル名を取得
const urlParams = new URLSearchParams(window.location.search);
const csvFileName = urlParams.get('csv');

// 表示しない列のリスト（例：ID列）
let hiddenColumns = ['ID', '難易度', '同音異義語用'];

// 特定のCSVファイル名の場合に追加の非表示列を設定
if (csvFileName === 'D4四字熟語書き取り') {
    hiddenColumns = [...hiddenColumns, '問題', '問題読み', '解答', '別答', '解答読み', '出典']; // ここに追加の非表示列を指定
} else if (csvFileName === 'H7対義語類義語') {
    hiddenColumns = [...hiddenColumns, '語群']; // ここに追加の非表示列を指定
}

// 列名とクラス名のマッピング（未登録）
const columnClassMapping = {
    'word': 'word',
    'kana': 'kana',
    'meaning': 'meaning',
    'sentence': 'sentence'
};

// CSVファイルを読み込む関数
async function loadCSV(fileName) {
    try {
        // const response = await fetch(`../../data/raw/${fileName}.csv`);
        const response = await fetch(`../data/raw/${fileName}.csv`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const csvText = await response.text();
        return csvText;
    } catch (error) {
        console.error('CSVファイルの読み込み中にエラーが発生しました:', error);
        throw error;
    }
}

// CSVテキストをJSONに変換する関数
function csvToJSON(csv) {
    return new Promise((resolve, reject) => {
        Papa.parse(csv, {
            header: true,
            complete: function(results) {
                const data = results.data.map(row => {
                    for (let key in row) {
                        if (row[key]) {
                            row[key] = row[key].replace(/\n/g, '<br>'); // 改行コードを<br>に変換
                        }
                    }
                    return row;
                });
                resolve(data);
            },
            error: function(error) {
                reject(error);
            }
        });
    });
}

// JSONデータからテーブルを生成する関数
function generateTable(data) {
    const table = document.getElementById('json-table');
    table.innerHTML = ''; // テーブルをクリア

    if (!data || data.length === 0) {
        table.innerHTML = '<tr><td>データがありません</td></tr>';
        return;
    }

    const headers = Object.keys(data[0]).filter(header => !hiddenColumns.includes(header));

    // テーブルヘッダー (thead) を生成
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // テーブルボディ (tbody) を生成
    const tbody = document.createElement('tbody');
    data.forEach(row => {
        const dataRow = document.createElement('tr');
        headers.forEach(header => {
            const cell = document.createElement('td');
            cell.innerHTML = row[header] || '';
            cell.setAttribute('data-label', header); // ヘッダー名をdata-label属性として設定
            if (columnClassMapping[header]) {
                cell.classList.add(columnClassMapping[header]); // 列名に基づいてクラスを追加
            }
            dataRow.appendChild(cell);
        });
        tbody.appendChild(dataRow);
    });
    table.appendChild(tbody);
}

// メイン処理
async function main() {
    if (csvFileName) {
        // ページタイトルと記事タイトルを設定
        document.getElementById('page-title').textContent = csvFileName;
        document.getElementById('article-title').textContent = csvFileName;

        try {
            const csvData = await loadCSV(csvFileName);
            const jsonData = await csvToJSON(csvData);
            generateTable(jsonData);
        } catch (error) {
            console.error('テーブルの生成中にエラーが発生しました:', error);
            document.getElementById('json-table').innerHTML = '<tr><td>データの読み込みに失敗しました</td></tr>';
        }
    } else {
        console.error('CSVファイル名が指定されていません。');
        document.getElementById('json-table').innerHTML = '<tr><td>CSVファイル名が指定されていません</td></tr>';
    }
}

// スクリプト実行
main();
