export const myPosition = () => {
    const id = navigator.geolocation.watchPosition(position => {
        console.log(position)
        
    })
}