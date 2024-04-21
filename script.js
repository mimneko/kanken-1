document.addEventListener('DOMContentLoaded', function() {
    // 引数からCSVファイルのパスを取得
    var csvFile = getParameterByName('csv');

    // テーブルを構築する関数
    function buildTable(data) {
        var table = document.getElementById('csv-table');
        var rows = data.split('\n');
        for (var i = 0; i < rows.length; i++) {
            var cells = rows[i].split(',');
            // 以降のコードは前回のものと同様です
        }
    }

    // CSVファイルを読み込んでテーブルを構築する
    fetch(csvFile)
        .then(response => response.text())
        .then(data => buildTable(data));

    // URLから指定されたパラメータの値を取得する関数
    function getParameterByName(name) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(window.location.href);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
});
