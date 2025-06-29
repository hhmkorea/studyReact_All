// Bookdata.ts
export interface Book {
    id: number;
    title: string;
    content: string;
    price: number;
    author: string;
    star: string;
}

const bookdata: Book[] = [
    {
        id: 3,
        title: '스프링부트 쇼핑몰 프로젝트',
        content: '스프링부트로 만드는 쇼핑몰 프로젝트 안내서',
        price: 32000,
        author: '변구훈',
        star: '★★★★★'
    },
    {
        id: 4,
        title: '플러터 앱 프로그래밍',
        content: '초보자를 위한 플러터 입문서',
        price: 36000,
        author: '서경숙 외',
        star: '★★★★★'
    },
    {
        id: 5,
        title: 'Vue.js 프런트엔드 개발 입문',
        content: 'Vue.js 프로젝트로 공부하기',
        price: 31000,
        author: '김기수',
        star: '★★★★★'
    },
    // {
    //     id: 6,
    //     title: '리액트의 정석',
    //     content: '초보자를 위한 리액트 입문서',
    //     price: 34000,
    //     author: '이창현',
    //     star: '★★★★★'
    // },
];

export default bookdata;