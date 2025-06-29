import React, {useEffect, useState} from "react";

const DetailPage2: React.FC = () => {
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        const fetchData = async () => { // async : JS 비동기 처리 방식 개선을 위해 도입된 키워드, 해당 함수 자동으로 Promise를 반환하는 비동기 함수가 됨.
            try {
                const response = await fetch('https://api.thedogapi.com/v1/breeds'); // await : Promise가 완료될 때까지 기다린 후 결과를 리턴하고, 그 다음 코드를 실행. .then() 체인보다 가독성 좋음.
                const data = await response.json();
                setBreeds(data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchData();
    }, []); 

    return (
        <div>
            <h2>Dog Breeds</h2>
            <ul>
                {breeds.map((breed: any) => (
                    <li key={breed.id}>
                        <h3>{breed.name}</h3>
                        <p>{breed.origin}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DetailPage2;