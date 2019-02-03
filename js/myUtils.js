function ajax(method, url, bool) {
    let xhr = new XMLHttpRequest(),
        goodsList = null;
    xhr.open(method, url, bool);
    xhr.onreadystatechange = function () {
        if (xhr.status === 200 && xhr.readyState === 4) {
            goodsList = xhr.responseText;
        }
    };
    xhr.send(null);
    return goodsList;
}

let utils = {
    //类数组转数组
    toArray: function (likeArray) {
        return [].slice.call(likeArray);
    },
    //字符串转成JSON对象
    toJSON: function (str) {
        return window.JSON.parse(str);
    }
};

function bind_data(array, str) {
    for (let i = 0; i < array.length; i++) {
        let {img, title, time, hot, price} = array[i];
        str += `
        <li data-time="${time}" data-hot="${hot}" data-price="${price}">
            <img src="${img}" alt="">
            <span>${title}</span>
            <span>上架时间：${time}</span>
            <span>热度：${hot}</span>
            <span>价格：${price}</span>
        </li>`;
    }
    return str;
}
