
document.addEventListener('DOMContentLoaded', function() {
    // URLから指定されたパラメータの値を取得して、適切なJSONファイルのパスを指定
    var jsonFileName = decodeURIComponent(getParameterByName('json'));
    var jsonFilePath = 'json_files/' + jsonFileName + '.json'; // JSONファイルのパスを構築

    // ページのタイトルと見出しを更新
    var pageTitle = document.getElementById('page-title');
    var pageHeading = document.getElementById('page-heading');
    pageTitle.textContent = jsonFileName.substring(2);
    pageHeading.textContent = jsonFileName.substring(2);
    
    // JSONファイルを読み込んでテーブルを構築する
    fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
            // データをランダムにシャッフル
            shuffleArray(data);
            // 通常の場合は難易度が2以下のデータのみ表示、満点の場合はすべて表示
            var filteredData = data;
            var stateSelector = document.getElementById('state-selector');
            if (stateSelector.value === 'normal') {
                filteredData = data.filter(item => item['難易度'] < 20);
            }
            // 改行文字を<br>に変換する処理を追加
            filteredData.forEach(item => {
                for (var key in item) {
                    if (item.hasOwnProperty(key) && typeof item[key] === 'string') {
                        item[key] = item[key].replace(/\n/g, '<br>');
                    }
                }
            });
            buildTable(filteredData);
        });

    // 除外するキーの配列を定義
    var excludedKeys = ["ID", "出典", "難易度", "同音異義語用", "引用元"];

    // テーブルを構築する関数
    function buildTable(data) {
        var table = document.getElementById('json-table');
        table.innerHTML = ''; // テーブルを初期化
        
        // ヘッダー行の作成
        var headerRow = document.createElement('tr');
        for (var key in data[0]) {
            // 除外するキーを含まない場合にヘッダーセルを追加
            if (data[0].hasOwnProperty(key) && !excludedKeys.includes(key)) {
                var headerCell = document.createElement('th');
                headerCell.textContent = key;
                headerRow.appendChild(headerCell);
            }
        }
        table.appendChild(headerRow);
    
        // データ行の作成
        data.forEach(function(item) {
            var row = document.createElement('tr');
            for (var key in item) {
                // 除外するキーを含まない場合にセルを追加
                if (item.hasOwnProperty(key) && !excludedKeys.includes(key)) {
                    var cell = document.createElement('td');
                    // セル内のテキストに改行が含まれている場合は、HTMLとして解釈する
                    if (item[key].includes('<br>')) {
                        cell.innerHTML = item[key];
                    } else {
                        cell.textContent = item[key];
                    }
                    row.appendChild(cell);
                }
            }
            table.appendChild(row);
        });
    }

    // state-selectorの変更時にテーブルを更新
    var stateSelector = document.getElementById('state-selector');
    stateSelector.addEventListener('change', function() {
        fetch(jsonFilePath)
            .then(response => response.json())
            .then(data => {
                shuffleArray(data); // データをランダムにシャッフル
                var filteredData = data;
                if (stateSelector.value === 'normal') {
                    filteredData = data.filter(item => item['難易度'] <= 2);
                }
                // 改行文字を<br>に変換する処理を追加
                filteredData.forEach(item => {
                    for (var key in item) {
                        if (item.hasOwnProperty(key) && typeof item[key] === 'string') {
                            item[key] = item[key].replace(/\n/g, '<br>');
                        }
                    }
                });
                buildTable(filteredData);
            });
    });

    // URLから指定されたパラメータの値を取得する関数
    function getParameterByName(name) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(window.location.href);
        if (!results) return null;
        if (!results[2]) return '';
        return results[2].replace(/\+/g, ' ');
    }

    // 配列をランダムにシャッフルする関数
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
});
