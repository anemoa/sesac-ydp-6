

function viewPlayer() {
    console.log('click')

    // const form = document.forms['visitor-form'];

    axios({
        method: 'POST',
        url: '/player',
        // 추가하려는 정보를 req.body에 실어서 요청을 보냄
        data: {
            name: form.name.value,
            comment: form.comment.value,   
        }
    }).then((res) => {
        console.log(res)

        const { data } = res; // {id: 7, name: 'lily', comment: 'hihi'}
        
        const html = `
            <tr id="tr_${data.id}">
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.comment}</td>
                <td><button type="button" "editVisitor(${data.id});">수정</button></td>
                <td><button type="button" onclick="deleteVisitor(this, ${data.id});">삭제</button></td>
            </tr>
        `;

        // insertAdjacentHTML: 특정 요소에 html 추가
        tbody.insertAdjacentHTML('beforeend', html);
    })
}