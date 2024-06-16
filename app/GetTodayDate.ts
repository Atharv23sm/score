export default function getTodayDate() {
    const today = new Date()
    const d = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2)
    return d
}