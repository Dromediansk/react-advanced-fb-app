import httpClient from '../services/http';

export async function fetchPosts(onSuccess, onError) {
    await new Promise(resolve => setTimeout(resolve, 2000))

    const response = await httpClient.get("https://my-json-server.typicode.com/typicode/demo/posts", {
        Accept: "application/json"
    })

    if (response.status === 200) {
        onSuccess(response)
    } else {
        onError(response.status)
    }
}