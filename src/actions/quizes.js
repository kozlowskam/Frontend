export const FETCHED_ALL_QUIZES = 'FETCHED_ALL_QUIZES'

const quizes =  [
    {id : 1, title : 'quiz1'},
    {id : 2, title : 'quiz2'},
    {id : 3, title : 'quiz3'}
]

export function fetchAllQuizes() {
    return {
        type: FETCHED_ALL_QUIZES,
        payload: quizes
    }
} 







// export const fetchAllQuizes = () => (dispatch) => {
//     request
//     .get(`${baseUrl}/quizes`)
//     .then(response => dispatch({
//       type: FETCHED_ALL_QUIZES,
//       payload: response.body.quizes
//     }))
//     .catch(err => alert(err))
//     }