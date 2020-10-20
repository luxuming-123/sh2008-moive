// 电影列表需要的地址 pageNum=数字
export const nowPlayingListUri  = "gateway?cityId=310100&pageSize=10&type=1&k=1407812&pageNum=";
// 即将上映需要的地址
export const coningSoonListUri = "gateway?cityId=310100&pageSize=10&type=2&k=1605978&pageNum=";
// 电影详情数据
export const moiveDetailUrl = "gateway?k=2482869&filmId=";

// 影院列表
export const cinemaListUrl = "gateway?cityId=310100&ticketFlag=1&k=234721";

// 城市列表数据
export const cityListUrl = "gateway?k=5010076";

// 个人中心相关的接口
export const loginUrl = "http://127.0.0.1:3000/api/v1/login";
export const centerUrl = "http://127.0.0.1:3000/api/v1/user_info";
