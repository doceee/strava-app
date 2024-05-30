import { useEffect, useState } from 'preact/hooks'

export const useActivities = () => {
    const [activities, setActivities] = useState([])

    useEffect(async () => {
        const activities = await stravaApiCall()

        setActivities(activities)
    }, [])

    return activities
}

export const formatDistance = (distance) => {
    return (distance / 1000).toFixed(1)
}

export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('pl-PL', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    })
}

export const formatTime = (time) => {
    return (time / 60).toFixed(1)
}

export const stravaApiCall = async () => {
    let activities = []

    try {
        const accTokenRes = await fetch('https://www.strava.com/oauth/token', {
            method: 'post',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                client_id: `${import.meta.env.VITE_STRAVA_CLIENT_ID}`,
                client_secret: `${import.meta.env.VITE_STRAVA_CLIENT_SECRET}`,
                refresh_token: `${import.meta.env.VITE_STRAVA_REFRESH_TOKEN}`,
                grant_type: 'refresh_token',
            }),
        })

        const accToken = await accTokenRes.json()

        const activitiesRes = await fetch(
            `https://www.strava.com/api/v3/athlete/activities?access_token=${accToken.access_token}`
        )

        activities = await activitiesRes.json()
    } catch (error) {
        console.error(error)
    }

    return activities
}
