import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.skilla.ru/mango',
    headers: {
        Authorization: 'Bearer testtoken',
        'Content-Type': 'application/json',
    },
});

export const getCallsListAPI = {
    getCalls(date_start, date_end, in_out, limit) {
        const formattedStartDate = date_start.toISOString().split('T')[0];
        const formattedEndDate = date_end.toISOString().split('T')[0];
        return instance
            .post(`/getList?date_start=${formattedStartDate}&date_end=${formattedEndDate}&in_out=${in_out}&limit=${limit}`)
            .then(res => {
                return res.data;
            });
    }
};