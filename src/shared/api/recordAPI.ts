import axios, {AxiosInstance} from 'axios';

interface GetRecordHeaders {
    'Content-Type': string;
    'Content-Transfer-Encoding': string;
    'Content-Disposition': string;
}

export const getRecordAPI = (
    record: string,
    partnership_id: string,
    customHeaders?: GetRecordHeaders
) => {
    const instance: AxiosInstance = axios.create({
        baseURL: 'https://api.skilla.ru/mango',
        headers: {
            Authorization: `Bearer testtoken`,
            'Content-Type': 'application/json',
        },
    });

    const defaultHeaders: GetRecordHeaders = {
        'Content-Type': 'audio/mpeg',
        'Content-Transfer-Encoding': 'binary',
        'Content-Disposition': 'filename="record.mp3"',
    };

    const headers = {
        ...defaultHeaders,
        ...customHeaders,
    };

    return instance
        .post('/getRecord', {
            record,
            partnership_id,
        }, {
            headers,
            responseType: 'arraybuffer',
        })
        .then(response => response.data)
        .catch(error => {
            throw new Error('Failed to fetch record');
        });
};
