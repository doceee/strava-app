import { useActivities } from './helpers'
import { ActivityItem } from './ActivityItem'

const App = () => {
    const activities = useActivities()

    return (
        <main>
            <table>
                <tr>
                    <th>Type</th>
                    <th onClick={() => sort('elapsed_time')}>Elapsed Time</th>
                    <th>Distance</th>
                    <th onClick={() => sort('start_date')}>Date</th>
                </tr>
                {activities.map((activity, idx) => (
                    <ActivityItem activity={activity} idx={idx} />
                ))}
            </table>
        </main>
    )
}

export default App
