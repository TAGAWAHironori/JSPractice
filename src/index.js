const onClickAdd = () => {
    // 入力された内容を保存
    const textEl = document.getElementById("add-text");
    const text = textEl.value;
    // 入力された文字を消す
    textEl.value = "";
    // タグを生成
    const li = document.createElement("li");
    const div = document.createElement("div");
    const p = document.createElement("p");
    // 入力された内容をpタグの中に入れる
    p.textContent = text;
    // ボタン生成
    const button = document.createElement("button");
    button.textContent = "削除";
    // ボタンで削除できるように
    button.addEventListener("click", () => {
        const deleteTarget = button.closest("li");
        document.getElementById("memo-list").removeChild(deleteTarget);
    });

    div.appendChild(p);
    div.appendChild(button);
    li.appendChild(div);
    // <li><div><p><button>の順番に

    document.getElementById("memo-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", () => onClickAdd());