import firebase from "firebase";
import "@firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBFQ4TDMJbXePAlr3_-QXicoN0WbsawCfg",
    authDomain: "taskos-e0889.firebaseapp.com",
    databaseURL: "https://taskos-e0889-default-rtdb.firebaseio.com",
    projectId: "taskos-e0889",
    storageBucket: "taskos-e0889.appspot.com",
    messagingSenderId: "571754301652",
    appId: "1:571754301652:web:60f493182b6c5bb00f5341"
  }

class Fire {
    constructor(callback){
        this.init(callback);
    }

    init(callback) {
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }

        firebase.auth().onAuthStateChanged(user => {
            if(user){
                callback(null, user);
            } else{
                firebase
                .auth()
                .signInAnonymously()
                .catch(error => {
                    callback(error)
                })
            }
        })
    }

    getLists(callback) {
        let ref = this.ref.orderBy('name')

        this.unsubscribe = ref.onSnapshot(snapshot => {
            lists = [];

            snapshot.forEach(doc => { 
                lists.push({id: doc.id, ...doc.data()})
            })
            callback(lists);
        })
    }

    addList(list){
        let ref = this.ref;
        ref.add(list);
    }

    updateList(list) {
        let ref = this.ref;
        ref.doc(list.id).update(list);
    }

    get userId() {
        return firebase.auth().currentUser.uid;
    }

    get ref() {
        return firebase
        .firestore()
        .collection('users')
        .doc(this.userId)
        .collection("lists");
    }

    detach () {
        this.unsubscribe();
    }
}

export default Fire;