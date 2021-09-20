const postData = async (url, data) => {
    const result = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
        
    });

    if (result.ok) {
        alert('Данные успешно добавлены');
    }
    return await result.json();
};

export {postData};