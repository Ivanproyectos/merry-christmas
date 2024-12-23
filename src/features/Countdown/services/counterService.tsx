export function getTimeLeft() {
    const christmas = new Date(new Date().getFullYear(), 11, 25, 0, 0, 0, 0).getTime()
    const now = new Date().getTime()
    const total = christmas - now
    const days = Math.floor(total / (1000 * 60 * 60 * 24))
    const hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60))  
    const seconds = Math.floor((total % (1000 * 60)) / 1000)

    return { total, days, hours, minutes, seconds }
  }