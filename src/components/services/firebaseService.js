import {collection, deleteDoc, doc, getDoc, getDocs, query, where, orderBy, startAt, limit} from "firebase/firestore";
import {db} from "./firebaseConfig.js";

export const getList = async ({ path, filter_by, order_by }) => {
    const collectionRef = collection(db, path)
    let queryData
    const list = []

    queryData = query(collectionRef)

    if(filter_by) {
        filter_by.forEach((item) => {
            queryData = query(queryData, where(item.field, item.operator, item.value))
        })
    }


    const data = await getDocs(queryData)

    data.forEach(doc => {
        const item = {...doc.data(), id: doc.id}
        item.images = Object.values(item.images)
        list.push(item)
    })

    if(order_by.order == 'added'){
        list.sort((a, b) => new Date(a.added) - new Date(b.added))
    } else {
        list.sort((a, b) => a[order_by.order] - b[order_by.order])
    }
    if(order_by.desc) {list.reverse()}

    return list
}


export const getListItem = async (path, id) => {        // Single car
    const res = await getDoc(doc(db, path, id))

    if(res.exists()){
        const item = res.data()
        item.images = Object.values(item.images)


        return ({id, ...item})

    } else {
        console.log('Failed request')
    }

}

export const removeListItem = async (path, id) => {
    await deleteDoc(doc(db, path, id))
}

