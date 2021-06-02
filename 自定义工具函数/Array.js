//数组打乱, sort打乱
function shuffle1(arr) {
    const newArr = [...arr];
    return newArr.sort(() => Math.random() - 0.5);
}

//数组打乱, 添加到新数组
function shuffle2(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        // 随机数函数 rang()
        let index = rand(0, arr.length - 1);
        let item = arr[index];
        // 判断newArr中是否含有ele, 如果有就不添加, 没有就添加
        if (!newArr.includes(item)) {
            newArr.push(item);
        } else {
            i--;
        }
    }
    return newArr;
}

// 数组去重 比较删除方法
function uniqueArr1(arr) {
    const newArr = [...arr];
    for (let i = 0; i < newArr.length; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            if (newArr[i] === newArr[j]) {
                newArr.splice(j, 1);
                j--;
            }
        }
    }
    return newArr;
}

// 数组去重 set方法
function uniqueArr2(arr) {
    return [...new Set(arr)];
}

// 数组去重 添加到新数组
function uniqueArr3(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// 冒泡排序
function bubbleSort(arr) {
    const newArr = [...arr];
    // 外层控制趟数
    for (let i = 0; i < newArr.length; i++) {
        // 里层控制比较的次数 = 数组长度 - 趟数
        for (let j = 0; j < newArr.length - i; j++) {
            if (newArr[j] > newArr[j + 1]) {
                [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
            }
        }
    }
    return newArr;
}

// 数组排序 从小到大或从大到小
function sortArr(arr) {
    const newArr = [...arr];
    newArr.sort((a, b) => a - b);
    return newArr;
}

// 数组中的最大值和最小值
function maxminArr(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return "最大值是" + max + ", 最小值是" + min;
}
