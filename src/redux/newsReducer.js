import {newsApi} from "../Api/api";
const SETNEWS="SETNEWS";

const initialState={
    newsTitle: [],
}
debugger;
const newsReducer=(state=initialState, action)=>{
    debugger;
    switch (action.type) {
        case SETNEWS:
            return {
                ...state,
                newsTitle: [...action.newsData.map(el => el.title)],
            }
        default:
            return state;
    }
}

const setNews=(newsData)=>{
    return {
        type: SETNEWS,
        newsData,
    }
}

export const setNewsData=()=>(dispatch)=>{
    newsApi.getPopularNews().then(data => {
        console.log(data.articles);
        dispatch(setNews(data.articles));
    })
}
console.log(initialState.newsTitle)
export default newsReducer;