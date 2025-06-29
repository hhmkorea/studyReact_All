// App.tsx
import {Grid2, Button} from "@mui/material";
import {DataGrid, GridColDef, GridRowsProp} from "@mui/x-data-grid";

const initialData = [
    {"name": "jinseong", "age": 20},
    {"name": "gildong", "age": 30},
    {"name": "cheolsu", "age": 40},
]
function App() {
    const columns: GridColDef[] = [
        {field: 'name', headerName: 'Name', width: 150},
        {field: 'age', headerName: 'Age', editable: true},
    ];

    const rows: GridRowsProp = initialData.map((data, idx) => ({
        id: idx, ...data
    }));
    return (
        <>
            <h1>MUI 테스트</h1>
            <Button>기본 버튼</Button>
            <Button variant='contained'>Outlined 버튼</Button>
            <Button color='error' variant='contained'>Error 버튼</Button>
            <br />
            <Grid2 container>
                <Grid2 size={{ xs: 12, sm: 6, md: 4 }} bgcolor="red">1
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6, md: 4 }} bgcolor="yellow">2
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6, md: 4 }} bgcolor="blue">3
                </Grid2>
            </Grid2>
            <br />
            <Grid2 container>
                <Grid2 size={12} height={100} bgcolor='red'>
                    <header>헤더 영역입니다.</header>
                </Grid2>
                <Grid2 size={3} height={500} bgcolor='yellow'>
                    <aside>사이드 영역입니다.</aside>
                </Grid2>
                <Grid2 size={9} height={500} bgcolor='green'>
                    <article>아티클 영역입니다.</article>
                </Grid2>
                <Grid2 size={12} height={100} bgcolor='blue'>
                    <footer>푸터 영역입니다.</footer>
                </Grid2>
            </Grid2>

            <h1>MUI DataGrid 테스트</h1>
            <DataGrid columns={columns} rows={rows}/>
        </>
    );
}

export default App;
