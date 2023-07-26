fetch("https://64743e827de100807b1a84ab.mockapi.io/api/v1/leaderboard/users").then((data)=>{
    // console.log(data);
    return data.json();  //converted to object
}).then((objectData)=>{
    // console.log(objectData[0].score);
    let tableData="";
    objectData.map((values)=>{
        tableData+=`
        <tr>
                <td>${values.id}</td>
                <td>${values.name}</td>
                <td>${values.country}</td>
                <td><img src="${values.photo}"/></td>
                <td>${values.score}</td>
        </tr>`;

    });
    document.getElementById('table_body').innerHTML=tableData;
})
