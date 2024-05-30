import { formatTime, formatDate, formatDistance } from './helpers'

export const ActivityItem = ({ activity, idx }) => (
    <tr key={idx}>
        <td>{activity.name}</td>
        <td>{formatTime(activity.elapsed_time)}</td>
        <td>{formatDistance(activity.distance)}</td>
        <td>{formatDate(activity.start_date)}</td>
    </tr>
)
