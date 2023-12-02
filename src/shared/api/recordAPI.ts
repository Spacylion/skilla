import axios from "axios";

interface GetRecordParams {
    record: string;
    partnership_id: string;
}

const instance = axios.create({
    baseURL: 'https://api.skilla.ru/mango',
    headers: {
        Authorization: 'Bearer testtoken',
        'Content-Type': 'application/json',
    },
});

export const getRecordAPI = {
    getRecord({record, partnership_id}: GetRecordParams): Promise<Blob> {
        return instance.get(`/getRecord?record=${record}&partnership_id=${partnership_id}`, {
            responseType: 'blob',
        }).then(response => response.data);
    }
};
