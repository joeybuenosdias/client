export const FETCH_DATA = 'FETCH_DATA';

export const fetchData = data => {
    console.log('data', data)
    return {
        type: FETCH_DATA,
        data: data[0]
    }
}