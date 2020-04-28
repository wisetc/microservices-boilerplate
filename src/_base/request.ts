export const requestHeaders = { 'Content-Type': 'application/json' };

type DataObject = {
    [k: string]: any;
};

export const transformRequest = (data: DataObject = {}) => {
    if (typeof data === 'string') return data;

    return JSON.stringify(data);
};
