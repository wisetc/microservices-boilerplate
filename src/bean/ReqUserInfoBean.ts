import { EnumCertType } from '../enums/EnumCertType';

export interface ReqUserInfoBean {
    loginId: string;
    userId: string;
    phone?: string;
    username?: string;
    certNumber?: string;
    certType?: EnumCertType;
}
