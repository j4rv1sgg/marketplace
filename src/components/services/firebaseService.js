import {collection, deleteDoc, doc, getDoc, getDocs} from "firebase/firestore";
import {db} from "./firebaseConfig.js";



export const getList = async (path) => {

    const list = []

    const data = await getDocs(collection(db, path))
    data.forEach(doc => {
        const item = {...doc.data(), id: doc.id}
        list.push(item)
    })
    return list
}

export const getListItem = async (path, id) => {
    const res = await getDoc(doc(db, path, id))

    if(res.exists()){

        return ({id, ...res.data()})

    } else {
        console.log('Failed request')
    }

}
export const removeListItem = async (path, id) => {
    await deleteDoc(doc(db, path, id))
}