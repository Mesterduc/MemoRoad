// import axios from 'axios'
// import albumType from '../types/AlbumType'

// export default function () {
//     // const items: albumType = [];
//     async function getAlbums() {
//         const url = "../../test.json";
//         let response = await axios.get(url);
//         return response.data.data;

//     }

//     return {getAlbums}

// }

// try {
//     let data = await fetch('../../test.json')
//     if (!data.ok) {
//         throw Error('no data available')
//     }

//     albums.value = await data.json().then((data) => data.journey)

// } catch (err) {
//     error.value = err.message
// }
// }

import { ref } from '@vue/reactivity'
import useApi from './api'

export default async function getAlbums() {
	const { response: data, request } = useApi('../../test.json')

	const loaded = ref(false)
    if( loaded.value === false){
        await request()
        loaded.value = true
    }

    return { data}
}


