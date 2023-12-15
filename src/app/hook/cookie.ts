'use client'

import Cookies from 'js-cookie';
import getUserData from "./logged"


const cookie =async () => {
    const data = await getUserData()

    if (data !== null && data.id !== undefined) {
        Cookies.set('user', data.id);
    } else {
        console.error('Os dados do usuário estão ausentes, são nulos ou não contêm a propriedade "id".');
    }

}

export default cookie;


