// useCart.ts
import {useCookies} from "react-cookie";
import {ProductType} from "../types";
import {useEffect, useMemo, useState} from "react";
import {getProduct} from "../utils/api";

type CartType = ProductType & { count: number };

const COOKIE_KEY = "cart" as const; // 쿠키값의 키 지정.

const useCart = () => {
    const [cookies, setCookies] = useCookies([COOKIE_KEY]); // 쿠키 Storage 용량 최대 4kb, 상품 전체가 아니라 id 기반으로 상품을 서버로 부터 가져오게 해야함.
    const [carts, setCarts] = useState<CartType[]>([]); // 장바구니 정보 가져오기 --> CartType으로 적용!

    const productIds = useMemo(
        () => (cookies[COOKIE_KEY] as string[]) ?? [],
        [cookies]
    ); // 쿠키로부터 가져온 id 저장해놓은 공간.

    const addCarts = (id: string) => { // 상품의 id를 받게 변경.
        const nextCartIds = [...productIds, id];
        setCookies(COOKIE_KEY, nextCartIds, {
            path: '/',
        });
    };

    const changeCount = (productId: string, mode: "increase" | "decrease") => {
        const index = productIds.indexOf(productId); // 해당 id가 있는 인덱스 검색
        if (index === -1) { // 없으면 -1
            return;
        }

        if (mode === "decrease") {
            const tempArr = [...productIds]; // tempArr에 복제
            tempArr.splice(index, 1); // 해당 상품 id 배열에서 제거

            if (!tempArr.includes(productId)) { // 상품이 0 이하면 안됨. productId가 없으면 함수 종료.
                return;
            }

            setCookies(COOKIE_KEY, tempArr, {
                path: "/",
            }); // 제거된 tempArr 쿠키에 저장
        }

        if (mode === "increase") {
            setCookies(COOKIE_KEY, [...productIds, productId], {
                path: "/",
            });
        }
    }

    const getProductById = async (id: string) => { // id를 넣어주면 요청을 보내고 응답값을 json으로 변환하여 반환
        const response = await fetch(`/product/${id}`);
        return await response.json();
    }

    useEffect(() => {
        if (productIds && productIds.length) {
            const requestList: Array<Promise<any>> = [];
            const requestIds = productIds.reduce(
                (acc, cur) => acc.set(cur, (acc.get(cur) || 0) + 1),
                new Map<string, number>()
            )

            Array.from(requestIds.keys()).forEach((id) => {
                requestList.push(getProduct(id)); // axios API 호출
            })

            Promise.all(requestList).then((responseList) => {
                const cartsData: CartType[] = responseList.map((response) => ({
                    ...response.data.product,
                    count: requestIds.get(response.data.product.id),
                }))
                setCarts(cartsData);
            })
        }
    }, [productIds]);

    return {
        carts,
        addCarts,
        changeCount,
    };
};

export default useCart;