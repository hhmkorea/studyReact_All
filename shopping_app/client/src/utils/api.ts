// api.ts
import axios, {type AxiosResponse} from "axios";
import {ProductType} from "../types";

type ReturnType<T> = Promise<AxiosResponse<T>>;
// Axios 사용하여 API 요청 보낼때, 요청 결과로 받아온 데이터를 감싸는 Promise를 나타내는 사용자화 타입.
// Axio는 응답 객체(response)의 data 속성에 실제 응답 데이터를 담고 있음.

export const getProducts = async (): ReturnType<{
    products: ProductType[];
}> => {
    try {
        const response = await axios.get("/product"); // Axio는 응답 객체(response)의 data 속성에 실제 응답 데이터를 담고 있음.
        return response;
    }catch (error) {
        throw error;
    }
}

export const getProduct = async (id:string): ReturnType<{ product: ProductType }> => {
    try {
        const response = await axios.get(`/product/${id}`);
        return response;
    }catch (error) {
        throw error;
    }
}

export const createProduct = async (
    newProduct: Omit<ProductType, "id" | "thumbnail">
): ReturnType<{ product: ProductType }> => {
    try {
        const response = await axios.post("/product/", newProduct);
        return response;
    }catch (error) {
        throw error;
    }
}

export const modifyThumbnail = async (
    productId: string,
    thumbnail:File
): ReturnType<{ product: ProductType }> => {
    try {
        const formData = new FormData(); // FormData : 이미지나 영상 같은 파일을 서버에 전송.
        formData.append("thumbnail", thumbnail);

        const response = axios.patch(`/product/thumbnail/${productId}`, formData);
        //console.log("response: ", response);
        return response;
    }catch (error) {
        throw error;
    }
}

export const deleteProduct = async (id:string) => {
    try {
        const response = await axios.delete(`/product/${id}`);
        return response;
    }catch (error) {
        throw error;
    }
}


export const modifyProduct = async (updateProduct:ProductType) => {
    try {
        const response = await axios.patch(
            `/product/${updateProduct.id}`,
            updateProduct
        );
        return response;
    }catch (error) {
        throw error;
    }
}
