const list = [
    {id:'01', category:'Clasicos', name:'Pablo Honey', stock:10, price:250, description:'Primer album de la banda cancion favorita: Creep', img:'../img/pablo-honey-cover.png'},
    {id:'02', category:'Clasicos', name:'The Bends', stock:15, price:200, description:'Segundo album de la banda cancion favorita: Planet Telex', img:'../img/the-bends-cover.png'},
    {id:'03', category:'Clasicos', name:'Ok Computer', stock:20, price:300, description:'Tercer album de la banda cancion favorita: Paranoid Android', img:'../img/ok-computer-cover.png'},
    {id:'04', category:'Nueva era', name:'Kid A', stock:25, price:250, description:'Cuarto album de la banda cancion favorita: Morning Bell', img:'../img/kid-a-cover.png'},
    {id:'05', category:'Ofertas', name:'Amnesiac', stock:30, price:100, description:'Quinto album de la banda cancion favorita: Knives Out', img:'../img/amnesiac-cover.png'},
    {id:'06', category:'Ofertas', name:'Hail to the Thief', stock:35, price:150, description:'Sexto album de la banda cancion favorita: There There', img:'../img/hail-to-the-thief-cover.png'},
    {id:'07', category:'Nueva era', name:'In Rainbows', stock:40, price:300, description:'Septimo album de la banda cancion favorita: Weird Fishes', img:'../img/in-rainbows-cover.png'},
    {id:'08', category:'Ofertas', name:'The King Of Limbs', stock:45, price:150, description:'Octavo album de la banda cancion favorita: Lotus Flower', img:'../img/kig-of-limbs-cover.png'},
]

export const getProducts = () => {
    return new Promise((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject('JIGSAW ROBO LOS DATOS')
            }else{
                resolve(list)
            }
        },2000)
    })
}

export const getItem = (id) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(list.find((item)=> item.id === id))
        },2000)
    })
}