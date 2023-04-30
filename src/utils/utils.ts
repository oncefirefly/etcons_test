const formatTime = (time: number): string => {
  return time > 10 ? `${time}` : '0' + time
}

export const renderTime = (time: string): string => {
  const givenTime = new Date(time)

  return `${formatTime(givenTime.getHours())}:${formatTime(givenTime.getMinutes())}`
}
