// import { Step } from 'vant';
// 引入vue和vuex
import Vue from 'vue';
import Vuex from 'vuex';

// 在vue中使用vuex
Vue.use(Vuex)

// 创建Store对象用于存储数据
export default new Vuex.Store({
    
    // 数据内容
    state: {
        count: 0,
        city: '地球',
        _token: "",
    },
    // 数据修改
    mutations: {
        add: function (state, step) {
            state.count += step;
        },
        setCity:function(state,cityName){
            state.city = cityName;
        },
        updateToken: function(state, _token) {
            state._token = _token;
            localStorage.setItem("_token", _token);
        },
    },
    actions:{
        addAsync: function(context,step){
            setTimeout(() => {
                context.commit('add',step)
            },3000)
        }
    },
    getters:{
        getCount: function(state){
            return '当前总数' + state.count;
        }
    }
})