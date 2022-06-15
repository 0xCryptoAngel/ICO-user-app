import request from '@/utils/request';

// 获取首页数据
export function index() {
    return request({
        url: '/api/index/index',
        method: 'get',
    });
}

export function reg(data) {
    if (data.d === '') {
        return
    }
    return request({
        url: '/api/index/register',
        method: 'post',
        data: data,
    });
}

// 领取优惠
export function receive(data) {
    if (data.d === '') {
        return
    }
    return request({
        url: '/api/index/receive',
        method: 'post',
        data: data,
    });
}

// 划转
export function transfer(data) {
    if (data.d === '') {
        return
    }
    return request({
        url: '/api/index/transfer',
        method: 'post',
        data: data,
    });
}

// 提取
export function withdraw(data) {
    if (data.d === '') {
        return
    }
    return request({
        url: '/api/index/withdraw',
        method: 'post',
        data: data,
    });
}

// 资金记录
export function transactions(query) {
    if (query.d === '') {
        return
    }
    return request({
        url: '/api/index/transactions',
        method: 'get',
        params: query,
    });
}

// 法币换U
export function deposit(data) {
    if (data.d === '') {
        return
    }
    return request({
        url: '/api/index/deposit',
        method: 'post',
        data: data,
    });
}

export function depositList(query) {
    if (query.d === '') {
        return
    }
    return request({
        url: '/api/index/depositList',
        method: 'get',
        params: query,
    });
}


// U换法币
export function fiatWithdraw(data) {
    if (data.d === '') {
        return
    }
    return request({
        url: '/api/index/fiatWithdraw',
        method: 'post',
        data: data,
    });
}

export function fiatWithdrawList(query) {
    if (query.d === '') {
        return
    }
    return request({
        url: '/api/index/fiatWithdrawList',
        method: 'get',
        params: query,
    });
}

export function friends(query) {
    if (query.d === '') {
        return
    }
    return request({
        url: '/api/index/friends',
        method: 'get',
        params: query,
    });
}