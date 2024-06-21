function solve()
{
    var arr=[]
    let table=document.querySelector("table")
    for(let row of table.rows)
    {
        let subarr=[]
        for(let cell of row.cells)
        {
            let inp=cell.querySelector("input")
            subarr.push(inp.value)
        }
        arr.push(subarr)
    }
    console.log(arr)
    if(!solveSudoku(arr))
    {
        alert("board is incorrect")
    }
    console.log(arr)
    let rowNo=0
    let col=0;
    for(let row of table.rows)
    {
        console.log(row)
        for(let cell of row.cells)
        {
            let inp=cell.querySelector("input")
            inp.value=arr[rowNo][col]
            col++
            if(col===9)
            {
                rowNo++
                col=0
            }
        }
    }
    //or
    // for (let rowIndex = 0; rowIndex < table.rows.length; rowIndex++) {
    //     for (let cellIndex = 0; cellIndex < table.rows[rowIndex].cells.length; cellIndex++) {
    //         const inp = table.rows[rowIndex].cells[cellIndex].querySelector("input");
    //         inp.value = arr[row][col];
    //         col++;
    //         if (col === 9) {
    //             row++;
    //             col = 0;
    //         }
    //     }
    // }
}
function findNext(board)
{
    for(let i=0;i<9;i++)
    {
        for(let j=0;j<9;j++)
        {
            if(board[i][j]=='')
            {
                return [i,j]
            }
        }
    }
    return null
}
function isValid(board,row,col,val)
{
    for(let i=0;i<9;i++)
    {
        if(i!=row && board[i][col]==val)
        {
            return false
        }
        if(i!=col && board[row][i]==val)
        {
            return false
        }
    }
    box_row=Math.floor(row/3)
    box_col=Math.floor(col/3)
    for(let i=box_row*3;i<box_row*3+3;i++)
    {
        for(let j=box_col*3;j<box_col*3+3;j++)
        {
            if(board[i][j]==val)
            {
                return false
            }
        }
    }
    return true
}
function solveSudoku(board)
{
    const cord=findNext(board)
    if(cord===null)
    {
        return true
    }
    let row=cord[0]
    let col=cord[1]
    for(let i=1;i<10;i++)
    {
        if(isValid(board,row,col,i))
        {
            board[row][col]=i
            if(solveSudoku(board))
            {
                return true
            }
            board[row][col]=0
        }
    }
    return false
}
function fill()
{
    const table=document.querySelector("table")
    let board = [
        [5, 3, 4, "", 7, "", "", "", ""],
        [6, "", "", 1, 9, 5, "", "", ""],
        ["", 9, 8, "", "", "", "", 6, ""],
        [8, "", "", "", 6, "", "", "", 3],
        [4, "", "", 8, "", 3, "", "", 1],
        [7, "", "", "", 2, "", "", "", 6],
        ["", 6, "", "", "", "", 2, 8, ""],
        ["", "", "", 4, 1, 9, "", "", 5],
        ["", "", "", "", 8, "", "", 7, 9]
    ]
    for(let i=0;i<9;i++)
    {
        for(let j=0;j<9;j++)
        {
            const inp=table.rows[i].cells[j]
            inp.querySelector("input").value=board[i][j]
        }
    }
}