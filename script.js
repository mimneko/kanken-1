
document.addEventListener('DOMContentLoaded', function() {
    // URLから指定されたパラメータの値を取得して、適切なJSONファイルのパスを指定
    var jsonFileName = decodeURIComponent(getParameterByName('json'));
    var jsonFilePath = 'json_files/' + jsonFileName + '.json'; // JSONファイルのパスを構築

    // ページのタイトルと見出しを更新
    document.getElementById('page-title').textContent = jsonFileName.substring(2);
    document.getElementById('page-heading').textContent = jsonFileName.substring(2);
    
    // JSONファイルを読み込んでテーブルを構築する
    fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => buildTable(data));

    // 除外するキーの配列を定義
    var excludedKeys = ["ID", "出典"];

    // テーブルを構築する関数
    function buildTable(data) {
        var table = document.getElementById('json-table');
    
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
                    cell.textContent = item[key];
                    row.appendChild(cell);
                }
            }
            table.appendChild(row);
        });
    }

    // URLから指定されたパラメータの値を取得する関数
    function getParameterByName(name) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(window.location.href);
        if (!results) return null;
        if (!results[2]) return '';
        return results[2].replace(/\+/g, ' ');
    }
});
